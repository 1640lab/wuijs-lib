/*
 * WUIIcon - v0.1
 * Developed by: Sergio E. Belmar (sbelmar@1640lab.com)
 * Distributed by: 1640 Lab S.p.A. (https://1640lab.com)
 * Copyright (c) Sergio E. Belmar (sbelmar@1640lab.com)
 */

class WUIIcon {

	static version = "0.1";
	static #defaults = {
		selector: ".wui-icon",
		dataURL: "url"
	};

	constructor (properties) {
		Object.keys(WUIIcon.#defaults).forEach(prop => {
			this[prop] = typeof(properties) != "undefined" && prop in properties ? properties[prop] : prop in WUIIcon.#defaults ? WUIIcon.#defaults[prop] : null;
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