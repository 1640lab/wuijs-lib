/* WUIButton v0.1 */

class WUIButton {
	static version = "0.1";
	static #defaults = {
		selector: "",
		text: "",
		locked: false,
		enabled: true,
		onClick: null
	};
	constructor (properties) {
		Object.keys(WUIButton.#defaults).forEach(prop => {
			this[prop] = typeof(properties) != "undefined" && prop in properties ? properties[prop] : prop in WUIButton.#defaults ? WUIButton.#defaults[prop] : null;
		});
	}
	get selector() {
		return this._selector;
	}
	get text() {
		return this._text;
	}
	get locked() {
		return this._locked;
	}
	get enabled() {
		return this._enabled;
	}
	get onClick() {
		return this._onClick;
	}
	set selector(value) {
		if (typeof(value) == "string" && value != "") {
			this._selector = value;
			this._element = document.querySelector(value);
		}
	}
	set text(value) {
		if (typeof(value) == "string" && value != "") {
			this._text = value;
			this._element.innerHTML = value;
		}
	}
	set locked(value) {
		if (typeof(value) == "boolean") {
			this._locked = value;
		}
	}
	set enabled(value) {
		if (typeof(value) == "boolean") {
			this._enabled = value;
			this._element.disabled = !value;
			if (value) {
				this._element.removeAttribute("disabled");
			} else {
				this._element.setAttribute("disabled", "true");
			}
			this.#setStyle();
		}
	}
	set onClick(value) {
		if (typeof(value) == "function") {
			this._onClick = value;
		}
	}
	#setStyle() {
		const disabled = this._element.disabled;
		if (disabled) {
			this._element.classList.add("disabled");
		} else {
			this._element.classList.remove("disabled");
		}
	}
	init() {
		this._element.addEventListener("click", event => {
			this.#setStyle();
			if (!this._locked && this._enabled && typeof(this._onClick) == "function") {
				this._onClick(event);
			}
		});
	}
	getElement() {
		return this._element;
	}
	focus() {
		this._element.focus();
	}
}
/*
HTML struture:
<button class="wui-button"></button>
*/