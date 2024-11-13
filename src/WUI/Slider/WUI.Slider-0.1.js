/* WUISlider v0.1 */

class WUISlider {
	static version = "0.1";
	#defaults = {
		selector: "",
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
	get onChange() {
		return this._onChange;
	}
	set selector(value) {
		if (typeof(value) == "string" && value != "") {
			this._selector = value;
			this._element = document.querySelector(value);
			this._body = this._element.querySelector(".body");
			this._dots = this._element.querySelector(".dots");
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
	getBody() {
		return this._body;
	}
	getIndex() {
		return this._index;
	}
	init() {
		this.load();
	}
	load() {
		if (this._body != null) {
			if (this._dots != null) {
				this._dots.innerHTML = "";
			}
			this._index = null;
			this._data = [];
			this._body.querySelectorAll(".slide").forEach((slide, i) => {
				this._data[i] = {
					slide: slide,
					dot: document.createElement("div"),
					initX: null,
					drag: false,
					lock: false
				};
			});
			for (let i=0; i<this._data.length; i++) {
				if (i == 0) {
					this._index = i;
					this._data[i].slide.style.left = "0px";
					if (this._dots != null) {
						this._data[i].dot.classList.add("selected");
					}
				}
				["touchstart", "mousedown"].forEach(type => {
					this._data[i].slide.addEventListener(type, event => {
						if (!this._data[i].drag) {
							const initX = (event.type == "touchstart" ? event.touches[0].clientX : event.clientX || event.pageX) - event.target.offsetParent.offsetLeft;
							this._data[i].initX = initX;
							this._data[i].drag = true;
						}
					});
				});
				["touchmove", "mousemove"].forEach(type => {
					this._data[i].slide.addEventListener(type, event => {
						if (this._data[i].drag && !this._data[i].lock) {
							const initX = parseFloat(this._data[i].initX);
							const moveY = (event.type == "touchmove" ? event.touches[0].clientX : event.clientX || event.pageX) - event.target.offsetParent.offsetLeft;
							const diffX = moveY -initX;
							const direction = diffX > 10 ? "prev" : diffX < -10 ? "next" : null;
							let step = 0;
							if (direction == "next" && i < this._data.length -1) {
								this.next();
								this._data[i].lock = true;
							} else if (direction == "prev" && i > 0) {
								this.prev();
								this._data[i].lock = true;
							}
						}
					});
				});
				["touchend", "mouseup"].forEach(type => {
					document.addEventListener(type, () => {
						if (typeof(this._data[i]) == "object" && this._data[i].drag) {
							this._data[i].initX = null;
							this._data[i].drag = false;
							this._data[i].lock = false;
						}
					});
				});
				if (this._dots != null) {
					this._dots.append(this._data[i].dot);
				}
			}
		}
	}
	prev() {
		let index = this._index;
		let step = 0;
		if (index > 0) {
			const delay = 200;
			const interval = setInterval(() => {
				if (step >= 1) {
					clearInterval(interval);
					step = 1;
				}
				this._data[index -1].slide.style.left = (100*(step -1))+"%";
				this._data[index].slide.style.left = (100*step)+"%";
				if (step == 1) {
					this._index = index -1;
					if (this._dots != null) {
						this._data[index].dot.classList.remove("selected");
						this._data[index -1].dot.classList.add("selected");
					}
					if (typeof(this._onChange) == "function") {
						this._onChange(this._index);
					}
				}
				step += .1;
			}, delay/10);
		}
	}
	next() {
		let index = this._index;
		let step = 0;
		if (index < this._data.length -1) {
			const delay = 200;
			const interval = setInterval(() => {
				if (step >= 1) {
					clearInterval(interval);
					step = 1;
				}
				this._data[index].slide.style.left = (100*(-step))+"%";
				this._data[index +1].slide.style.left = (100*(1 -step))+"%";
				if (step == 1) {
					this._index = index +1;
					if (this._dots != null) {
						this._data[index].dot.classList.remove("selected");
						this._data[index +1].dot.classList.add("selected");
					}
					if (typeof(this._onChange) == "function") {
						this._onChange(this._index);
					}
				}
				step += .1;
			}, delay/10);
		}
	}
	go(index) {
		if (index < this._data.length && index != this._index) {
			if (index < this._index) {
				for (let i=this._index; i>index; i--) {
					this._data[i].slide.style.left = "100%";
				}
			} else if (index > this._index) {
				for (let i=this._index; i<index; i++) {
					this._data[i].slide.style.left = "-100%";
				}
			}
			this._data[index].slide.style.left = "0%";
			if (this._dots != null) {
				this._data[this._index].dot.classList.remove("selected");
				this._data[index].dot.classList.add("selected");
			}
			this._index = index;
		}
	}
}
/*
HTML struture:
<div class="wui-slider">
	<div class="body">
		<div class="slide"></div>
		<div class="slide"></div>
		<div class="slide"></div>
	</div>
	<div class="dots">
		<div></div>
		<div></div>
		<div></div>
	</div>
</div>
*/