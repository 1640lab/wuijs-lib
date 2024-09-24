/* WUICheckbox v0.1 */

class WUICheckbox {
	static version = "0.1";
	#defaults = {
		selector: "",
		value: "1",
		checked: false,
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
	get value() {
		return this._input.value;
	}
	get checked() {
		return this._input.checked;
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
			this._input = document.querySelector(value+" > input[type='checkbox']");
		}
	}
	set value(value) {
		if (typeof(value).match(/(string|number)/) && this._enabled) {
			this._input.value = value;
		}
	}
	set checked(value) {
		if (typeof(value) == "boolean" && this._enabled) {
			this._checked = value;
			this._input.checked = value;
			if (value) {
				this._input.setAttribute("checked", "true");
			} else {
				this._input.removeAttribute("checked");
			}
			this.#setStyle();
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
		const checked = this._input.checked;
		const disabled = this._input.disabled;
		if (checked) {
			this._element.classList.add("checked");
		} else {
			this._element.classList.remove("checked");
		}
		if (disabled) {
			this._element.classList.add("disabled");
		} else {
			this._element.classList.remove("disabled");
		}
	}
	getElement() {
		return this._element;
	}
	getInput() {
		return this._input;
	}
	init() {
		this._element.addEventListener("mousedown", event => {
			event = new Event("change");
			this.checked = !this._input.checked;
			this._input.dispatchEvent(event);
		});
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
DOM struture:
<div class="wui-checkbox">
	<input type="checkbox" value="1">
</div>
DOM form field  struture:
<div class="field checkbox">
	<label for="wuiCheckbox""></label>
	<div class="wui-checkbox"><input type="checkbox" name="wuiCheckbox" value="1"></div>
</div>
*/