/* WUITooltip v0.1 */

class WUITooltip {
	static version = "0.1";
	static #defaults = {
		selector: ".wui-tooltip-target"
	};
	static #tooltipSelectors = ".wui-tooltip, .wui-tooltip-top, .wui-tooltip-left, .wui-tooltip-right, .wui-tooltip-bottom";
	constructor (properties) {
		Object.keys(WUITooltip.#defaults).forEach(prop => {
			this[prop] = typeof(properties) != "undefined" && prop in properties ? properties[prop] : prop in WUITooltip.#defaults ? WUITooltip.#defaults[prop] : null;
		});
	}
	get selector() {
		return this._selector;
	}
	set selector(value) {
		if (typeof(value) == "string" && value != "") {
			this._selector = value;
			this._elements = document.querySelectorAll(value);
		}
	}
	getElements() {
		return this._elements;
	}
	init() {
		this._elements = document.querySelectorAll(this._selector);
		this._elements.forEach(target => {
			["mouseover", "mouseout"].forEach(type => {
				target.addEventListener(type, () => {
					target.querySelectorAll(WUITooltip.#tooltipSelectors).forEach(tooltip => {
						tooltip.classList.toggle("opened");
					});
				});
			});
		});
	}
	lock() {
		this._elements.forEach(target => {
			target.querySelectorAll(WUITooltip.#tooltipSelectors).forEach(tooltip => {
				tooltip.classList.add("locked");
			});
		});
	}
	unlock() {
		this._elements.forEach(target => {
			target.querySelectorAll(WUITooltip.#tooltipSelectors).forEach(tooltip => {
				tooltip.classList.remove("locked");
			});
		});
	}
}
/*
Generated HTML code:
<div class="wui-tooltip-target">
	<div class="wui-tooltip (top|left|right|bottom)"></div>
</div>
<div class="wui-tooltip-target">
	<div class="wui-tooltip-(top|left|right|bottom)"></div>
</div>
*/