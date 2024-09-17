/* WUIRange v0.1 */

class WUIRange {
	static version = "0.1";
	#defaults = {
		selector: "",
		min: 0,
		max: 100,
		step: 1,
		value: 0,
		enabled: true,
		onChange: null
	};
	constructor (properties) {
		Object.keys(this.#defaults).forEach(key => {
			this[key] = typeof(properties) != "undefined" && key in properties ? properties[key] : this.#defaults[key];
		});
	}
	get selector() {
		return this._selector;
	}
	get min() {
		return this._input.min;
	}
	get max() {
		return this._input.max;
	}
	get step() {
		return this._input.step;
	}
	get value() {
		return this._input.value;
	}
	get enabled() {
		return this._enabled;
	}
	get onChange() {
		return this._onChange;
	}
	set selector(value) {
		if (typeof(value) == "string" && value != "") {
			this._selector = value;
			this._element = document.querySelector(value);
			this._input = document.querySelector(value+" > input[type='range']");
		}
	}
	set min(value) {
		if (typeof(value) == "number" || (typeof(value) == "string" && value.match(/^[\+-]?\d+(\.\d+)?$/))) {
			this._input.min = value;
		}
	}
	set max(value) {
		if (typeof(value) == "number" || (typeof(value) == "string" && value.match(/^[\+-]?\d+(\.\d+)?$/))) {
			this._input.max = value;
		}
	}
	set step(value) {
		if (typeof(value) == "number") {
			this._input.step = value;
		}
	}
	set value(value) {
		if ((typeof(value) == "number" || (typeof(value) == "string" && value.match(/^[\+-]?\d+(\.\d+)?$/))) && this._enabled) {
			this._input.value = value;
			this.#setBackgroundStyle();
		}
	}
	set enabled(value) {
		if (typeof(value) == "boolean") {
			this._enabled = value;
			this._input.disabled = !value;
			if (value) {
				this._input.removeAttribute("disabled");
			} else {
				this._input.setAttribute("disabled", "true");
			}
			this.#setStyle();
		}
	}
	set onChange(value) {
		if (typeof(value) == "function") {
			this._onChange = value;
		}
	}
	#setStyle() {
		const disabled = this._input.disabled;
		if (disabled) {
			this._element.classList.add("disabled");
		} else {
			this._element.classList.remove("disabled");
		}
	}
	#setBackgroundStyle() {
		const min = this._input.min;
		const max = this._input.max;
		const value = this._input.value;
		const width = (value -min)*100/(max -min);
		this._input.style.backgroundSize = width+"% 100%";
	}
	getElement() {
		return this._element;
	}
	getInput() {
		return this._input;
	}
	init() {
		this._input.addEventListener("input", (event) => {
			this.#setBackgroundStyle();
			if (typeof(this._onChange) == "function") {
				this._onChange(event, this._input.value);
			}
		});
	}
}
/*
DOM struture:
<div class="input wui-range">
	<input type="range" min="0" max="100" value="0">
</div>
DOM form field struture:
<div class="field range">
	<label for="wuiRange""></label>
	<div class="input wui-range"><input type="range" min="0" max="100" value="0"></div>
</div>
*/