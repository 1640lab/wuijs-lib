/* WUILightbox v0.1 */

class WUILightbox {
	static version = "0.1";
	#defaults = {
		selector: "",
		delay: 200,
		title: "",
		startOpen: null,
		onOpen: null,
		onMaximize: null,
		startClose: null,
		onClose: null,
		onBack: null
	};
	static #instances = [];
	constructor (properties) {
		this.setProperties(properties);
		WUILightbox.#instances.push(this);
	}
	static getAllInstances() {
		return WUILightbox.#instances;
	}
	static closeAll(except) {
		WUILightbox.#instances.forEach(lightbox => {
			if (lightbox.isOpen() && lightbox.selector != except) {
				lightbox.close();
			}
		});
	}
	get selector() {
		return this._selector;
	}
	get delay() {
		return this._delay;
	}
	get startOpen() {
		return this._startOpen;
	}
	get onOpen() {
		return this._onOpen;
	}
	get onMaximize() {
		return this._onMaximize;
	}
	get startClose() {
		return this._startClose;
	}
	get onClose() {
		return this._onClose;
	}
	get onBack() {
		return this._onBack;
	}
	set selector(value) {
		if (this.setProperty("selector", value, "string")) {
			this._element = document.querySelector(value);
			this._box = document.querySelector(value+" > .box");
			this._header = document.querySelector(value+" > .box > .header");
			this._back = this._header ? document.querySelector(value+" > .box > .header > .back") : null;
			this._topbar = this._header ? document.querySelector(value+" > .box > .header > .topbar") : null;
			this._title = this._header ? document.querySelector(value+" > .box > .header > .title") : null;
			this._close = this._header ? document.querySelector(value+" > .box > .header > .close") : null;
			this._body = document.querySelector(value+" > .box > .body");
			this._footer = document.querySelector(value+" > .box > .footer");
		}
	}
	set delay(value) {
		this.setProperty("delay", value, "number");
	}
	set startOpen(value) {
		this.setProperty("startOpen", value, "function");
	}
	set onOpen(value) {
		this.setProperty("onOpen", value, "function");
	}
	set onMaximize(value) {
		this.setProperty("onMaximize", value, "function");
	}
	set startClose(value) {
		this.setProperty("startClose", value, "function");
	}
	set onClose(value) {
		this.setProperty("onClose", value, "function");
	}
	set onBack(value) {
		this.setProperty("onBack", value, "function");
	}
	getElement() {
		return this._element;
	}
	getBox() {
		return this._box;
	}
	getHeader() {
		return this._header;
	}
	getBack() {
		return this._back;
	}
	getTopbar() {
		return this._topbar;
	}
	getTitle() {
		return this._title;
	}
	getClose() {
		return this._close;
	}
	getBody() {
		return this._body;
	}
	getStatus() {
		let status = [];
		["opened", "maximized", "under", "close"].forEach(className => {
			if (this._element.classList.contains(className)) {
				status.push(className);
			}
		});
		return status.join(",");
	}
	setProperty(name, value, type = "string", regexp) {
		if ((
			type == "regexp" && typeof(value) == "string" && regexp instanceof RegExp && regexp.test(value)) || (
			type == "array" && Array.isArray(value)) || (
			type == "element" && typeof(value) == "object" && value instanceof HTMLElement) || (
			type == typeof(value)) || (
			type.match(/^WUI/) && typeof(value) == "object" && type == value.constructor.name
		)) {
			this["_"+name] = value;
			return true;
		} else {
			this["_"+name] = this.#defaults[name];
		}
		return false;
	}
	setProperties(properties) {
		Object.keys(this.#defaults).forEach(key => {
			this[key] = typeof(properties) != "undefined" && key in properties ? properties[key] : this.#defaults[key];
		});
	}
	setHeadBorder(border) {
		if (this._header != null) {
			if (border) {
				this._header.classList.remove("border");
			} else {
				this._header.classList.add("border");
			}
		}
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
		document.addEventListener("keydown", (event) => {
			let esc = false;
			event = event || window.event;
			if ("key" in event) {
				esc = (event.key === "Escape" || event.key === "Esc");
			} else if ("keyCode" in event) {
				esc = (event.keyCode === 27);
			}
			if (esc) {
				WUILightbox.getAllInstances().every(lightbox => {
					const classList = lightbox._element.classList;
					if (classList.contains("opened") && !classList.contains("under")) {
						setTimeout(() => {
							lightbox.close();
						}, 100);
						return false;
					}
					return true;
				});
			}
		});
		this._bodyStyle = {};
		if (this._topbar != null) {
			this._initY = null;
			this._direction = null;
			this._drag = false;
			["touchstart", "mousedown"].forEach(type => {
				this._topbar.addEventListener(type, (event) => {
					if (!this._drag) {
						const initY = (event.type == "touchstart" ? event.touches[0].clientY : event.clientY || event.pageY) - event.target.offsetParent.offsetTop;
						this._initY = initY;
						this._drag = true;
					}
				});
			});
			["touchmove", "mousemove"].forEach(type => {
				this._topbar.addEventListener(type, (event) => {
					if (this._drag) {
						const initY = parseFloat(this._initY);
						const moveY = (event.type == "touchmove" ? event.touches[0].clientY : event.clientY || event.pageY) - event.target.offsetParent.offsetTop;
						const diffY = moveY -initY;
						const direction = diffY > 10 ? "bottom" : diffY < -10 ? "top" : null;
						this._direction = direction;
					}
				});
			});
			["touchend", "mouseup"].forEach(type => {
				document.addEventListener(type, () => {
					if (this._drag) {
						this._initY = null;
						this._drag = false;
						if (this._direction != null) {
							if (this._direction == "top") {
								this.maximize();
							} else if (this._direction == "bottom") {
								this.close();
							}
							setTimeout(() => {
								this._direction = null;
							}, 400);
						}
					}
				});
			});
		}
		if (this._back != null) {
			this._back.addEventListener("click", () => {
				if (typeof(this._onBack) == "function") {
					this._onBack();
				}
			});
		}
		if (this._close != null) {
			this._close.addEventListener("click", () => {
				this.close();
			});
		}
		if (this._box != null && this._body != null) {
			this._box.dataset.scrollBody = 0;
			if (this._body.classList.contains("scroll")) {
				["scroll", "touchmove"].forEach(event => {
					this._body.addEventListener(event, debounce(() => {
						const top = this._body.scrollTop;
						this._box.dataset.scrollBody = top >= 0 ? top : 0;
					}), {passive: true});
				});
			}
		}
	}
	open(onOpen = this._onOpen, delay = this._delay) {
		const page = this._element.classList.contains("page") ? true : false;
		const small = this._element.classList.contains("small") ? true : false;
		const mobile = window.matchMedia("(max-width: 599px)").matches ? true : false;
		const bodyHeight = document.body.offsetHeight;
		const bgcolor = getComputedStyle(document.documentElement).getPropertyValue("--wui-lightbox-bgcolor").replace(/\s+/g, "").replace("rgba(", "").replace(")", "").split(",");
		let under = null;
		let pages = 1;
		let step = 0;
		WUILightbox.#instances.forEach(lightbox => {
			if (lightbox._element.classList.contains("opened") && !lightbox._element.classList.contains("under") && lightbox._selector != this._selector) {
				lightbox._element.classList.add("under");
				under = lightbox._element;
			}
			if (lightbox._element.classList.contains("opened") && lightbox._element.classList.contains("page") && lightbox._element.classList.contains("under")) {
				pages++;
			}
		});
		this._element.style.zIndex = 103 +pages;
		this._element.classList.remove("maximized");
		this._element.classList.remove("closed");
		this._element.classList.add("opened");
		if (this._box != null) {
			const bodyStyle = window.getComputedStyle(document.body);
			const boxStyle = window.getComputedStyle(this._box);
			const scrollbarWidth = window.innerWidth - document.body.clientWidth;
			const scrollbarHeight = window.innerHeight - document.body.clientHeight;
			["overflowY", "overflowX", "background", "backgroundColor", "backgroundImage", "paddingRight", "paddingBottom"].forEach(key => {
				if (mobile || !key.match(/background/)) {
					this._bodyStyle[key] = bodyStyle[key];
				}
			});
			document.body.style.overflowY = "hidden";
			document.body.style.overflowX = "hidden";
			document.body.style.paddingRight = scrollbarWidth+"px";
			document.body.style.paddingBottom = scrollbarHeight+"px";
			if (page && mobile) {
				document.body.style.backgroundImage = "none";
				document.body.style.backgroundColor = boxStyle.backgroundColor;
			}
		}
		if (typeof(this._startOpen) == "function") {
			this._startOpen();
		}
		const interval = setInterval(() => {
			if (step >= 1) {
				clearInterval(interval);
				step = 1;
			}
			if (step == 0) {
				this._element.style.display = "flex";
			}
			if (this._box != null) {
				if (page && small && mobile) {
					this._box.style.top = (bodyHeight - 280 * step)+"px";
				} else if (page && mobile) {
					this._box.style.top = (bodyHeight - (bodyHeight -44*pages) * step)+"px";
				}
			}
			this._element.style.opacity = step;
			if (under != null && bgcolor.length == 4) {
				const opacity = Math.round((1 -step) * parseFloat(bgcolor[3]) * 100) / 100;
				under.style.backgroundColor = "rgba("+bgcolor[0]+", "+bgcolor[1]+", "+bgcolor[2]+", "+opacity+")";
			}
			if (step == 1 && typeof(onOpen) == "function") {
				onOpen();
			}
			step += .1;
		}, delay/10);
	}
	maximize(onMaximize = this._onMaximize, delay = this._delay) {
		const page = this._element.classList.contains("page") ? true : false;
		const mobile = window.matchMedia("(max-width: 599px)").matches ? true : false;
		const boxTop = this._box != null ? this._box.offsetTop : 0;
		let step = 1;
		this._element.classList.add("maximized");
		const interval = setInterval(() => {
			if (step <= 0) {
				clearInterval(interval);
				step = 0;
			}
			if (this._box != null && page && mobile) {
				this._box.style.top = (boxTop * step)+"px";
			}
			if (step == 0 && typeof(onMaximize) == "function") {
				onMaximize();
			}
			step -= .1;
		}, delay/100);
	}
	close(onClose = this._onClose, delay = this._delay) {
		const page = this._element.classList.contains("page") ? true : false;
		const mobile = window.matchMedia("(max-width: 599px)").matches ? true : false;
		const bodyHeight = document.body.offsetHeight;
		const boxTop = this._box != null ? this._box.offsetTop : 0;
		const bgcolor = getComputedStyle(document.documentElement).getPropertyValue("--wui-lightbox-bgcolor").replace(/\s+/g, "").replace("rgba(", "").replace(")", "").split(",");
		let under = null;
		let step = 1;
		if (typeof(this._startClose) == "function") {
			this._startClose();
		}
		WUILightbox.#instances.forEach(lightbox => {
			if (lightbox._element.classList.contains("under")) {
				lightbox._element.classList.remove("under");
				under = lightbox._element;
			}
		});
		this._element.classList.remove("maximized");
		this._element.classList.remove("opened");
		this._element.classList.add("closed");
		if (this._box != null) {
			Object.keys(this._bodyStyle).forEach(key => {
				document.body.style[key] = this._bodyStyle[key];
			});
			if (this._topbar != null) {
				this._initY = null;
				this._drag = false;
			}
			if (this._box != null) {
				this._box.scrollTop = 0;
			}
		}
		const interval = setInterval(() =>  {
			if (step <= 0) {
				clearInterval(interval);
				step = 0;
			}
			if (step == 0) {
				this._element.style.display = "none";
			}
			if (this._box != null && page && mobile) {
				this._box.style.top = (bodyHeight - (bodyHeight -boxTop) * step)+"px";
			}
			if (under != null && bgcolor.length == 4) {
				const opacity = Math.round((1 -step) * parseFloat(bgcolor[3]) * 100) / 100;
				under.style.backgroundColor = "rgba("+bgcolor[0]+", "+bgcolor[1]+", "+bgcolor[2]+", "+opacity+")";
			}
			this._element.style.opacity = step;
			if (step == 0 && typeof(onClose) == "function") {
				onClose();
			}
			step -= .1;
		}, delay/10);
	}
	isOpen() {
		return this.getStatus().match(/opened/) ? true : false;
	}
}
/*
HTML message struture:
<div class="wui-lightbox message [mobile]">
	<div class="box">
		<div class="body">
			<div class="icon"></div>
			<div class="text"></div>
		</div>
		<div class="footer">
			<button></button>
			<button></button>
		</div>
	</div>
</div>
HTML page struture:
<div class="wui-lightbox page [mobile]">
	<div class="box">
		<div class="header">
			<div class="back">
				<div class="icon wui-svgicon arrowhead-left-line"></div>
				<div class="text"></div>
			</div>
			<div class="topbar"></div>
			<div class="title"></div>
			<div class="close wui-svgicon close-lg-line"></div>
		</div>
		<div class="body"></div>
	</div>
</div>
*/