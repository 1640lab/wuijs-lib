/* WUITooltip v0.1 */

class WUITooltip {
	static version = "0.1";
	#defaults = {
		selector: ".wui-tooltip-target"
	};
	#tooltipSelectors = ".wui-tooltip, .wui-tooltip-top, .wui-tooltip-bottom";
	constructor (properties) {
		Object.keys(this.#defaults).forEach(key => {
			this[key] = typeof(properties) != "undefined" && key in properties ? properties[key] : this.#defaults[key];
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
	init() {
		this._elements = document.querySelectorAll(this._selector);
		this._elements.forEach(target => {
			["mouseover", "mouseout"].forEach(event => {
				target.addEventListener(event, () => {
					target.querySelectorAll(this.#tooltipSelectors).forEach(tooltip => {
						tooltip.classList.toggle("opened");
					});
				});
			});
		});
	}
	lock() {
		this._elements.forEach(target => {
			target.querySelectorAll(this.#tooltipSelectors).forEach(tooltip => {
				tooltip.classList.add("locked");
			});
		});
	}
	unlock() {
		this._elements.forEach(target => {
			target.querySelectorAll(this.#tooltipSelectors).forEach(tooltip => {
				tooltip.classList.remove("locked");
			});
		});
	}
	getElements() {
		return this._elements;
	}
}
/*
HTML struture:
<div class="wui-tooltip-target">
	<div class="wui-tooltip-top"></div>
</div>
<div class="wui-tooltip-target">
	<div class="wui-tooltip-bottom"></div>
</div>
*/