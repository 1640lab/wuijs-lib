/* WUITimepicker v0.1 */

class WUITimepicker {
	static version = "0.1";
	static #constants = {
		icons: {
			open: ""
				+"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>"
				+"<path d='M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z'/>"
				+"</svg>"
		},
		texts: {
			de: {
				cancel: "stornieren",
				accept: "akzeptieren"
			},
			en: {
				cancel: "cancel",
				accept: "accept"
			},
			es: {
				cancel: "cancelar",
				accept: "aceptar"
			}
		}
	};
	#defaults = {
		selector: "",
		min: "00:00",
		max: "23:59",
		value: "",
		lang: "en",
		texts: {},
		openDirection: "down",
		enabled: true,
		onOpen: null,
		onChange: null
	};
	constructor (properties) {
		Object.keys(this.#defaults).forEach(prop => {
			this[prop] = typeof(properties) != "undefined" && prop in properties ? properties[prop] : this.#defaults[prop];
		});
	}
	get selector() {
		return this._selector;
	}
	get min() {
		return this._input.min;
	}
	get max() {
		return this._input.max;
	}
	get value() {
		return this._input.value;
	}
	get lang() {
		return this._lang;
	}
	get texts() {
		return this._texts;
	}
	get openDirection() {
		return this._openDirection;
	}
	get enabled() {
		return this._enabled;
	}
	get onOpen() {
		return this._onOpen;
	}
	get onChange() {
		return this._onChange;
	}
	set selector(value) {
		if (typeof(value) == "string" && value != "") {
			this._selector = value;
			this._element = document.querySelector(value);
			this._input = document.querySelector(value+" > input[type='time']");
		}
	}
	set min(value) {
		if (typeof(value) == "string" && value.match(/^(\d{2}:\d{2})?$/)) {
			this._input.min = value;
		}
	}
	set max(value) {
		if (typeof(value) == "string" && value.match(/^(\d{2}:\d{2})?$/)) {
			this._input.max = value;
		}
	}
	set value(value) {
		if (typeof(value) == "string" && value.match(/^(\d{2}:\d{2})?$/) && this._enabled) {
			this.#setValue(value);
			this.#prepare();
		}
	}
	set lang(value) {
		if (typeof(value) == "string" && value.match(/^\w{2}$/)) {
			this._lang = value.toLowerCase();
		}
	}
	set texts(value) {
		if (typeof(value) == "object" && !Array.isArray(value) && value !== null) {
			Object.keys(WUITimepicker.#constants.texts.en).forEach(text => {
				if (!(text in value)) {
					value[text] = "";
				}
			});
			this._texts = value;
		}
	}
	set openDirection(value) {
		if (typeof(value) == "string" && value.match(/^(up|down)$/i)) {
			this._openDirection = value.toLowerCase();
		}
	}
	set enabled(value) {
		if (typeof(value) == "boolean") {
			this._enabled = value;
			this._input.disabled = !value;
			if (typeof(this._inputs) != "undefined") {
				this._inputHours.disabled = !value;
				this._inputMinutes.disabled = !value;
				if (value) {
					this._inputHours.removeAttribute("disabled");
					this._inputMinutes.removeAttribute("disabled");
				} else {
					this._inputHours.setAttribute("disabled", "true");
					this._inputMinutes.setAttribute("disabled", "true");
				}
			}
			this.#setStyle();
		}
	}
	set onOpen(value) {
		if (typeof(value) == "function") {
			this._onOpen = value;
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
	getInput() {
		return this._input;
	}
	#getSRCIcon(name, event) {
		const element = this._element || document.documentElement;
		const color = getComputedStyle(element).getPropertyValue("--wui-timepicker-"+name+"color-"+event).replace(/#/g, "%23").trim();
		const src = getComputedStyle(element).getPropertyValue("--wui-timepicker-"+name+"icon-src").replace(/currentColor/g, color);
		return src != "" && !src.match(/^(none|url\(\))$/) ? src : "url(\"data:image/svg+xml,"+WUITimepicker.#constants.icons[name].replace(/currentColor/g, color)+"\")";
	}
	#setValue(value) {
		this._input.value = value;
		this._input.dispatchEvent(new Event("change"));
	}
	#setView(time) {
		this._inputHours.value = time instanceof Date ? ("0"+time.getHours()).slice(-2) : "";
		this._inputMinutes.value = time instanceof Date ? ("0"+time.getMinutes()).slice(-2) : "";
	}
	#setStyle() {
		const disabled = this._input.disabled;
		if (disabled) {
			this._element.classList.add("disabled");
		} else {
			this._element.classList.remove("disabled");
		}
	}
	init() {
		this._inputs = document.createElement("div");
		this._inputHours = document.createElement("input");
		this._inputMinutes = document.createElement("input");
		this._background = document.createElement("div");
		this._box = document.createElement("div");
		this._lists = document.createElement("div");
		this._listHours = document.createElement("ul");
		this._listMinutes = document.createElement("ul");
		this._footer = document.createElement("div");
		this._cancelButton = document.createElement("button");
		this._acceptButton = document.createElement("button");
		this._element.appendChild(this._inputs);
		this._element.appendChild(this._background);
		this._element.appendChild(this._box);
		this._element.style.backgroundImage = this.#getSRCIcon("open", this._input.disabled ? "disabled" : "out");
		this._element.addEventListener("click", event => {
			if (event.target.classList.contains("wui-timepicker") && this._element.offsetWidth - event.offsetX < 30) {
				this.toggle();
			}
		});
		["mouseover", "mouseout", "focus", "blur"].forEach(type => {
			const event = this._input.disabled ? "disabled" : type == "blur" ? "out" : type.replace(/mouse/, "");
			this._element.addEventListener(type, () => {
				this._element.style.backgroundImage = this.#getSRCIcon("open", event);
			});
		});
		["min", "max", "style"].forEach(name => {
			if (this._input.hasAttribute(name)) {
				if (name.match(/(min|max)/)) {
					this["_"+name] = this._input[name];
				}
				if (this._input.getAttribute(name) != null) {
					this._input.removeAttributeNode(this._input.getAttributeNode(name));
				}
			}
		});
		["hours", "minutes"].forEach((part, i) => {
			const name = part.charAt(0).toUpperCase()+part.slice(1);
			const input = this["_input"+name];
			const list = this["_list"+name];
			const max = part == "hours" ? 23 : 59;
			input.type = "text";
			input.name = this._input.name+name;
			input.placeholder = part == "hours" ? "hh" : "mm";
			input.maxLength = 2;
			input.className = part;
			input.addEventListener("click", () => {this.toggle();});
			input.addEventListener("keyup", event => {
				const value = event.target.value;
				const part = event.target.className;
				const min = 0;
				const max = part == "hours" ? 23 : 59;
				event.target.value = parseInt(value) > max ? max : parseInt(value) < min ? min : value;
				this.#loadValue();
			});
			this._inputs.appendChild(input);
			if (i < 1) {
				const span = document.createElement("span");
				span.textContent = ":";
				this._inputs.appendChild(span);
			}
			for (let i=0; i<=max; i++) {
				const item = document.createElement("li");
				item.dataset.value = i;
				item.textContent = i;
				item.addEventListener("click", () => {
					const selected = !Boolean(item.classList.contains("selected"));
					const targetValue =
						part == "hours" ? ("0"+i).slice(-2)+":"+("0"+this._inputMinutes.value).slice(-2) :
						part == "minutes" ? ("0"+this._inputHours.value).slice(-2)+":"+("0"+i).slice(-2) :
						"";
					const value = selected ? targetValue : "";
					const time = selected ? new Date("1970-01-01T"+targetValue+":00") : null;
					list.scrollTop = item.offsetTop - parseInt(list.clientHeight/2);
					list.querySelectorAll("li").forEach(li => {
						if (typeof(li.dataset.value) != "undefined" && li.dataset.value != i) {
							li.classList.remove("selected");
						}
					});
					item.classList.toggle("selected");
					this._targetValue = value;
					this._targetDate = time;
					this.#setValue(value);
					this.#setView(time);
				});
				list.appendChild(item);
			}
		});
		this._inputs.className = "inputs";
		this._background.className = "background hidden";
		this._box.className = "box "+this._openDirection+" hidden";
		this._box.appendChild(this._lists);
		this._box.appendChild(this._footer);
		this._lists.className = "lists";
		this._lists.appendChild(this._listHours);
		this._lists.appendChild(this._listMinutes);
		this._footer.className = "footer";
		this._footer.appendChild(this._cancelButton);
		this._footer.appendChild(this._acceptButton);
		this._cancelButton.className = "cancel";
		this._cancelButton.addEventListener("click", () => {this.cancel();});
		this._acceptButton.className = "accept";
		this._acceptButton.addEventListener("click", () => {this.accept();});
		this.#prepare();
	}
	#prepare() {
		const lang = this._lang;
		const texts = WUITimepicker.#constants.texts;
		const now = (() => {
			const date = new Date();
			const offset = date.getTimezoneOffset();
			return new Date(date.getTime() - offset*60*1000).toISOString().split("T")[1].slice(0, 5);
		})();
		this._nowValue = now;
		this._nowHours = parseInt(this._nowValue.split(":")[0]);
		this._nowMinutes = parseInt(this._nowValue.split(":")[1]);
		this._targetValue = this._input.value || now;
		this._targetTime = new Date("1970-01-01T"+this._targetValue+":00");
		this._cancelValue = this._targetValue;
		this._cancelTime = new Date("1970-01-01T"+this._targetValue+":00");
		this._cancelButton.textContent = this._texts.cancel != "" ? this._texts.cancel : lang in texts ? texts[lang].cancel : "";
		this._acceptButton.textContent = this._texts.accept != "" ? this._texts.accept : lang in texts ? texts[lang].accept : "";
		this.#setView(this._targetTime);
	}
	#loadBox() {
		const hours = this._targetTime.getHours();
		const minutes = this._targetTime.getMinutes();
		["hours", "minutes"].forEach(part => {
			const name = part.charAt(0).toUpperCase()+part.slice(1);
			const list = this["_list"+name];
			const value = part == "hours" ? hours : minutes;
			list.querySelectorAll("li").forEach((li, i) => {
				if (i == this["_now"+name]) {
					li.classList.add("now");
				} else {
					li.classList.remove("now");
				}
				if (i == value) {
					list.scrollTop = li.offsetTop - parseInt(list.clientHeight/2);
					li.classList.add("selected");
				} else {
					li.classList.remove("selected");
				}
			});	
		});
	}
	#loadValue() {
		const value = this._input.value;
		const hours = this._inputHours.value;
		const minutes = this._inputMinutes.value;
		this.#setValue(hours != "" && minutes != "" ? ("0"+hours).slice(-2)+":"+("0"+minutes).slice(-2) : "");
		if (this._input.value != value && typeof(this._onChange) == "function") {
			this._onChange(this._input.value);
		}
	}
	open() {
		const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
		this._background.classList.remove("hidden");
		this._box.classList.remove("hidden");
		this._box.style.marginBottom = !mobile && this._openDirection == "up" ? this._element.clientHeight+"px" : "auto";
		this.#prepare();
		this.#loadBox();
		if (typeof(this._onOpen) == "function") {
			this._onOpen(this._input.value);
		}
	}
	close() {
		this._background.classList.add("hidden");
		this._box.classList.add("hidden");
	}
	toggle() {
		if (this._box.classList.contains("hidden")) {
			this.open();
		} else {
			this.close();
		}
	}
	cancel() {
		this.#setValue(this._cancelValue);
		this.#setView(this._cancelTime);
		this.close();
	}
	accept() {
		this.close();
	}
	isOpen() {
		return !Boolean(this._box.classList.contains("hidden"));
	}
}
/*
HTML struture:
<div class="wui-timepicker">
	<input type="time" name="(name)" value="">
	<div class="inputs">
		<input type="text" name="(name))Hours" class="hours">
		<span></span>
		<input type="text" name="(name)Minutes" class="minutes">
	</div>
	<div class="background"></div>
	<div class="box">
		<div class="select">
			<ul class="hours">
				<li></li>
				...
			</ul>
			<ul class="minutes">
				<li></li>
				...
			</ul>
		</div>
		<div class="footer">
			<button class="cancel"></button>
			<button class="accept"></button>
		</div>
	</div>
</div>
*/