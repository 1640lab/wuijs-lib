/* WUIIntencity v0.1 */

class WUIIntencity {
	static version = "0.1";
	static #defaults = {
		selector: "",
		value: "1",
		enabled: true,
		onChange: null
	};
	constructor (properties) {
		Object.keys(WUIIntencity.#defaults).forEach(prop => {
			this[prop] = typeof(properties) != "undefined" && prop in properties ? properties[prop] : prop in WUIIntencity.#defaults ? WUIIntencity.#defaults[prop] : null;
		});
	}
	get selector() {
		return this._selector;
	}
	get type() {
		return this.constructor.name;
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
	set value(value) {
		if (typeof(value).match(/(string|number)/) && this._enabled) {
			this._input.value = value;
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
	getElement() {
		return this._element;
	}
	getFocusableElements() {
		return [this._input];
	}
	getInput() {
		return this._input;
	}
	#setStyle() {
		const disabled = this._input.disabled;
		if (disabled) {
			this._element.classList.add("disabled");
		} else {
			this._element.classList.remove("disabled");
		}
	}
	init() {
		this._drag = false;
		this._initX = null;
		this._direction = null;
		
		this._input.addEventListener("change", event => {
			this.#setStyle();
			if (typeof(this._onChange) == "function") {
				this._onChange(event, event.target.checked);
			}
		});
	}
	toggle() {
		this.checked = !this._input.checked;
	}
}
/*
Generated HTML code:
<div class="wui-intencity">
	<input type="range" value="0" min="0" max="3" step="1">
</div>
DOM form field  struture:
<div class="field intencity">
	<label></label>
	<div class="wui-intencity">
		<input type="range" value="0" min="0" max="3" step="1">
	</div>
</div>
*/