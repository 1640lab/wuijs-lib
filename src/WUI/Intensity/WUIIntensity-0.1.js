/*
 * WUIIntensity - v0.1
 * Author: Sergio E. Belmar (sbelmar@1640lab.com)
 * Copyright (c) Sergio E. Belmar (sbelmar@1640lab.com)
 */

class WUIIntensity {

	static version = "0.1";
	static #defaults = {
		selector: "",
		value: 0,
		enabled: true,
		onChange: null
	};

	constructor (properties) {
		Object.keys(WUIIntensity.#defaults).forEach(prop => {
			this[prop] = typeof(properties) != "undefined" && prop in properties ? properties[prop] : prop in WUIIntensity.#defaults ? WUIIntensity.#defaults[prop] : null;
		});
	}

	get selector() {
		return this._selector;
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
		if (typeof(value).toString().match(/string|number/) && value.toString().match(/^(0|1|2|3|none|low|half|high)$/i) && (typeof(this._enabled) == "undefined" || this._enabled)) {
			switch (value.toString().toLowerCase()) {
				case "none": value = 0; break;
				case "low": value = 1; break;
				case "half": value = 2; break;
				case "high": value = 3; break;
				default: value = parseInt(value); break;
			}
			this._value = value;
			this._element.dataset.value = 
				value == 0 ? "none" :
				value == 1 ? "low" :
				value == 2 ? "half" :
				value == 3 ? "high" :
				"";
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
		this._input.min = 0;
		this._input.max = 3;
		this._input.step = 1;
		this._drag = false;
		this._initX = null;
		this._diffX = 0;
		["touchstart", "mousedown"].forEach(type => {
			this._element.addEventListener(type, event => {
				if (!this._drag) {
					const initX = (event.type == "touchstart" ? event.touches[0].clientX : event.clientX || event.pageX) - event.target.offsetParent.offsetLeft;
					this._initX = initX;
					this._drag = true;
				}
			});
		});
		["touchmove", "mousemove"].forEach(type => {
			this._element.addEventListener(type, event => {
				if (this._drag) {
					const initX = parseFloat(this._initX);
					const moveX = (event.type == "touchmove" ? event.touches[0].clientX : event.clientX || event.pageX) - event.target.offsetParent.offsetLeft;
					this._diffX = moveX -initX;
				}
			});
		});
		["touchend", "mouseup"].forEach(type => {
			document.addEventListener(type, () => {
				if (this._drag) {
					this._drag = false;
					this._initX = null;
					if (Math.abs(this._diffX) > 10) {
						const iniValue = parseInt(this._input.value);
						const event = new Event("input");
						let endValue = iniValue + parseInt(this._diffX/40);
						if (endValue < 0) {
							endValue = 0;
						} else if (endValue > 3) {
							endValue = 3;
						}
						this.value = endValue;
						this._input.dispatchEvent(event);
						setTimeout(() => {
							this._diffX = 0;
						}, 400);
					}
				}
			});
		});
		this._input.addEventListener("input", event => {
			const value = parseInt(event.target.value);
			this._element.dataset.value = 
				value == 0 ? "none" :
				value == 1 ? "low" :
				value == 2 ? "half" :
				value == 3 ? "high" :
				"";
			if (typeof(this._onChange) == "function") {
				this._onChange(event, value);
			}
		});
	}
}

/*
Generated HTML code:
<div class="wui-intensity">
	<input type="range" value="0" min="0" max="3" step="1">
</div>
DOM form field  struture:
<div class="field intensity">
	<label></label>
	<div class="wui-intensity">
		<input type="range" value="0" min="0" max="3" step="1">
	</div>
</div>
*/