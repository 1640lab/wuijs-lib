/* WUISVGIcon v0.1 */

class WUISVGIcon {
	static version = "0.1";
	#defaults = {
		selector: ".wui-svgicon",
		dataURL: "url"
	};
	constructor (properties) {
		Object.keys(this.#defaults).forEach(key => {
			this[key] = typeof(properties) != "undefined" && key in properties ? properties[key] : this.#defaults[key];
		});
	}
	get selector() {
		return this._selector;
	}
	get dataURL() {
		return this._dataurl;
	}
	set selector(selector) {
		if (typeof(selector) == "string") {
			this._selector = selector;
			this._elements = document.querySelectorAll(selector);
		}
	}
	set dataURL(dataURL) {
		if (typeof(dataURL) == "string") {
			this._dataurl = dataURL;
		}
	}
	getElements() {
		return this._elements;
	}
	init() {
		this._elements.forEach(element => {
			if (typeof(element.dataset[this.dataURL]) != "undefined") {
				const mask = "url('"+element.dataset[this.dataURL]+"')";
				element.style.webkitMaskImage = mask;
				element.style.maskImage = mask;
			}
		});
	}
	fadein(icon) {
		if (icon instanceof HTMLElement && icon.classList.contains(this.selector)) {
			icon.style.display = "block";
			icon.classList.add("fadein");
		}
	}
	fadeout(icon) {
		if (icon instanceof HTMLElement && icon.classList.contains(this.selector)) {
			icon.classList.add("fadein");
			setTimeout(() => {
				icon.style.display = "none";
			}, 200);
		}
	}
}