/* WUILoader v0.1 */

class WUILoader {
	static version = "0.1";
	#defaults = {
		selector: ".wui-loader",
		style: "ring",
		size: 80,
		dataStyle: "style",
		dataSize: "size"
	};
	#styles = ["ring", "dualring", "spinner", "roller", "ellipsis", "grid"];
	constructor (properties) {
		Object.keys(this.#defaults).forEach(key => {
			this[key] = typeof(properties) != "undefined" && key in properties ? properties[key] : this.#defaults[key];
		});
	}
	get selector() {
		return this._selector;
	}
	get style() {
		return this._style;
	}
	get size() {
		return this._size;
	}
	get dataStyle() {
		return this._dataStyle;
	}
	get dataSize() {
		return this._dataSize;
	}
	set selector(value) {
		if (this.setProperty("selector", value, "string")) {
			this._elements = document.querySelectorAll(value);
		}
	}
	set style(value) {
		this.setProperty("type", value, "regexp", new RegExp("^("+this.#styles.join("|")+")$", "i"), (value) => {return value.toLowerCase()});
	}
	set size(value) {
		if (this.setProperty("size", value, "number")) {
			this._scale = value/80;
		}
	}
	set dataStyle(value) {
		this.setProperty("dataStyle", value, "string");
	}
	set dataSize(value) {
		this.setProperty("dataSize", value, "string");
	}
	setProperty(name, value, type = "string", regexp, callback) {
		if ((
			type == "regexp" && typeof(value) == "string" && regexp instanceof RegExp && regexp.test(value)) || (
			type == "array" && Array.isArray(value)) || (
			type == "elemente" && typeof(value) == "object" && value instanceof HTMLElement) || (
			type == typeof(value)) || (
			type.match(/^WUI/) && typeof(value) == "object" && type == value.constructor.name
		)) {
			this["_"+name] = typeof(callback) == "function" ? callback(value) : value;
			return true;
		} else {
			this["_"+name] = this.#defaults[name];
		}
		return false;
	}
	init() {
		this._elements.forEach(element => {
			const dataStyle = element.dataset[this._dataStyle];
			const dataSize = element.dataset[this._dataSize];
			let type = this._type;
			let size = this._size;
			let scale = this._scale;
			let childs = 0;
			element.classList.forEach(name => {
				if (this.#styles.indexOf(name.toLowerCase()) != -1) {
					type = name.toLowerCase();
				}
			});
			if (typeof(dataStyle) != "undefined") {
				type = dataStyle;
			}
			if (typeof(dataSize) != "undefined") {
				size = parseFloat(dataSize);
				scale = size/80;
			}
			childs =
				type == "ring" ? 4 :
				type == "dualring" ? 0 :
				type == "spinner" ? 12 :
				type == "roller" ? 8 :
				type == "ellipsis" ? 4 :
				type == "grid" ? 9 :
				0;
			if (!element.classList.contains(type)) {
				element.classList.add(type);
			}
			if (scale != 1) {
				element.style.transform = "scale("+scale+")";
			}
			for (let i=0; i<childs; i++) {
				const child = document.createElement("div");
				element.appendChild(child);
			}
		});
	}
	getElements() {
		return this._elements;
	}
}