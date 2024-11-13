/* WUISelector v0.1 */

class WUISelector {
	static version = "0.1";
	#defaults = {
		selector: "",
		onChange: null
	};
	static #instances = [];
	constructor (properties) {
		this.setProperties(properties);
		WUISelector.#instances.push(this);
	}
	static getAllInstances() {
		return WUISelector.#instances;
	}
	static closeAll(except) {
		WUISelector.#instances.forEach(modal => {
			if (modal.isOpen() && modal.selector != except) {
				modal.close();
			}
		});
	}
	get selector() {
		return this._selector;
	}
	get onChange() {
		return this._onChange;
	}
	set selector(value) {
		if (typeof(value) == "string" && value != "") {
			this._selector = value;
			this._element = document.querySelector(value);
			this._box = document.querySelector(value+" > .box");
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
	setProperties(properties) {
		Object.keys(this.#defaults).forEach(key => {
			this[key] = typeof(properties) != "undefined" && key in properties ? properties[key] : this.#defaults[key];
		});
	}
	init() {
		const debounce = (fn) => {
			let frame;
			return (...params) => {
				if (frame) {
					cancelAnimationFrame(frame);
				}
				frame = requestAnimationFrame(() => {
					fn(...params);
				});
			}
		};
		document.addEventListener("keydown", event => {
			let esc = false;
			event = event || window.event;
			if ("key" in event) {
				esc = (event.key === "Escape" || event.key === "Esc");
			} else if ("keyCode" in event) {
				esc = (event.keyCode === 27);
			}
			if (esc) {
				WUISelector.getAllInstances().every(modal => {
					const classList = modal._element.classList;
					if (classList.contains("opened")) {
						setTimeout(() => {
							modal.close();
						}, 100);
						return false;
					}
					return true;
				});
			}
		});
	}
	open() {
	}
	close() {
	}
}
/*
DOM message struture:
<select class="wui-selector">
	<option value="v1">value 1</option>
	<option value="v2">value 2</option>
	<div class="box">
	</div>
</select>
*/