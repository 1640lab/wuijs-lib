/* WUITabs v0.1 */

class WUITabs {
	version = "0.1";
	#defaults = {
		selector: "",
		index: 0
	};
	constructor (properties) {
		Object.keys(this.#defaults).forEach(key => {
			this[key] = typeof(properties) != "undefined" && key in properties ? properties[key] : this.#defaults[key];
		});
	}
	get selector() {
		return this._selector;
	}
	get index() {
		return this._index;
	}
	set selector(value) {
		if (typeof(value) == "string" && value != "") {
			this._selector = value;
			this._element = document.querySelector(value);
			this._bar = document.querySelector(value+"> .bar");
			this._body = document.querySelector(value+" > .body");
			this._border = document.querySelector(value+" > .body > .border");
		}
	}
	set index(value) {
		if (typeof(value) == "number") {
			this._index = value;
		}
	}
	init = () => {
		this._element.querySelectorAll(".bar > .tab").forEach(tab => {
			tab.addEventListener("click", (event) => {
				const index = [...tab.parentElement.children].indexOf(tab);
				this.select(index);
			});
		});
		if (this._border) {
			this._element.querySelectorAll(".body > .page").forEach(page => {
				page.addEventListener("scroll", (event) => {
					if (page.scrollTop > 0) {
						this._border.classList.add("scroll");
					} else {
						this._border.classList.remove("scroll");
					}
				});
			});
		}
		this.select();
	}
	getElement = () => {
		return this._element;
	}
	select = (index = 0) => {
		this._bar.querySelectorAll("> .tab").forEach((tab, i) => {
			if (i == index) {
				tab.classList.add("selected");
			} else {
				tab.classList.remove("selected");
			}
		});
		this._body.querySelectorAll("> .page").forEach((page, i) => {
			if (i == index) {
				page.classList.add("selected");
				if (this._border) {
					if (page.scrollTop > 0) {
						this._border.classList.add("scroll");
					} else {
						this._border.classList.remove("scroll");
					}
				}
			} else {
				page.classList.remove("selected");
			}
		});
	} 
}
/*
DOM struture:
<div class="wui-tabs bottombar mobile">
	<div class="body">
		<div class="border"></div>
		<div class="page"></div>
		<div class="page"></div>
		<div class="page"></div>
	</div>
	<div class="bar">
		<div class="tab">
			<div class="icon wui-svgicon"></div>
			<div class="text"></div>
		</div>
		<div class="tab">
			<div class="icon wui-svgicon"></div>
			<div class="text"></div>
		</div>
		<div class="tab">
			<div class="icon wui-svgicon"></div>
			<div class="text"></div>
		</div>
	</div>
</div>
*/