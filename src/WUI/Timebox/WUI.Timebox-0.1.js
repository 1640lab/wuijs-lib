/* WUITimebox v0.1 */

class WUITimebox {
	static version = "0.1";
	static #constants = {
		texts: {
			de: {
				cancel: "akzeptieren",
				accept: "ok"
			},
			en: {
				cancel: "cancel",
				accept: "ok"
			},
			es: {
				cancel: "cancelar",
				accept: "listo"
			}
		}
	};
	#defaults = {
		selector: "",
		min: "00:00",
		max: "23:59",
		value: "",
		lang: "en",
		cancelText: "",
		acceptText: "",
		enabled: true,
		onOpen: null,
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
	get cancelText() {
		return this._cancelText;
	}
	get acceptText() {
		return this._acceptText;
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
			this._input.value = value;
			this.#load();
		}
	}
	set lang(value) {
		if (typeof(value) == "string" && value.match(/^\w{2}$/)) {
			this._lang = value.toLocaleLowerCase();
		}
	}
	set cancelText(value) {
		if (typeof(value) == "string") {
			this._cancelText = value;
		}
	}
	set acceptText(value) {
		if (typeof(value) == "string") {
			this._acceptText = value;
		}
	}
	set enabled(value) {
		if (typeof(value) == "boolean") {
			this._enabled = value;
			this.#setInputEnable(this._input, value);
			if (typeof(this._inputs) != "undefined") {
				this.#setInputEnable(this._inputHours, value);
				this.#setInputEnable(this._inputMinutes, value);
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
	#setTime(time) {
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
	#setInputEnable(input, enabled) {
		input.disabled = !enabled;
		if (enabled) {
			input.removeAttribute("disabled");
		} else {
			input.setAttribute("disabled", "true");
		}
	}
	init() {
		const backgroundImage = (name, event) => {
			const element = this._input || this._element || document.documentElement;
			const color = getComputedStyle(element).getPropertyValue("--wui-timebox-"+name+"color-"+event).replace(/#/g, "%23").trim();
			const image = getComputedStyle(element).getPropertyValue("--wui-timebox-"+name+"image-src").replace(/currentColor/g, color);
			return image;
		}
		this._inputs = document.createElement("div");
		this._inputHours = document.createElement("input");
		this._inputMinutes = document.createElement("input");
		this._background = document.createElement("div");
		this._box = document.createElement("div");
		this._lists = document.createElement("div");
		this._listHours = document.createElement("ul");
		this._listMinutes = document.createElement("ul");
		this._footer = document.createElement("div");
		this._cancel = document.createElement("div");
		this._accept = document.createElement("div");
		this._element.appendChild(this._inputs);
		this._element.appendChild(this._background);
		this._element.appendChild(this._box);
		this._element.style.backgroundImage = backgroundImage("picker", this._input.disabled ? "disabled" : "out");
		this._element.addEventListener("click", event => {
			if (event.target.classList.contains("wui-timebox") && this._element.offsetWidth - event.offsetX < 30) {
				this.toggle();
			}
		});
		["mouseover", "mouseout", "focus", "blur"].forEach(type => {
			const pickerType = this._input.disabled ? "disabled" : type == "blur" ? "out" : type.replace(/mouse/, "");
			this._element.addEventListener(type, () => {
				this._element.style.backgroundImage = backgroundImage("picker", pickerType);
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
		this._input.type = "hidden";
		this._inputs.className = "inputs";
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
				const target = document.createElement("li");
				target.dataset.value = i;
				target.textContent = i;
				target.addEventListener("click", () => {
					const selected = !Boolean(target.classList.contains("selected"));
					const targetValue =
						part == "hours" ? ("0"+i).slice(-2)+":"+("0"+this._inputMinutes.value).slice(-2) :
						part == "minutes" ? ("0"+this._inputHours.value).slice(-2)+":"+("0"+i).slice(-2) :
						"";
					list.scrollTop = target.offsetTop - parseInt(list.clientHeight/2);
					list.querySelectorAll("li").forEach(li => {
						if (typeof(li.dataset.value) != "undefined" && li.dataset.value != i) {
							li.classList.remove("selected");
						}
					});
					target.classList.toggle("selected");
					this._input.value = selected ? targetValue : "";
					this._targetValue = selected ? targetValue : "";
					this._targetDate = selected ? new Date("1970-01-01T"+targetValue+":00") : null;
					this.#setTime(this._targetDate);
				});
				list.appendChild(target);
			}
		});
		this._background.className = "background hidden";
		this._box.className = "box hidden";
		this._box.appendChild(this._lists);
		this._box.appendChild(this._footer);
		this._lists.className = "lists";
		this._lists.appendChild(this._listHours);
		this._lists.appendChild(this._listMinutes);
		this._footer.className = "footer";
		this._footer.appendChild(this._cancel);
		this._footer.appendChild(this._accept);
		this._cancel.className = "cancel";
		this._cancel.addEventListener("click", () => {this.cancel();});
		this._accept.className = "accept";
		this._accept.addEventListener("click", () => {this.accept();});
		this.#load();
	}
	open() {
		this.#load();
		this.#loadTexts();
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
		this._background.classList.toggle("hidden");
		this._box.classList.toggle("hidden");
		if (!this._box.classList.contains("hidden")) {
			this.open();
		}
	}
	#load() {
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
		this.#setTime(this._targetTime);
	}
	#loadValue() {
		const value = this._input.value;
		const hours = this._inputHours.value;
		const minutes = this._inputMinutes.value;
		this._input.value = hours != "" && minutes != "" ? ("0"+hours).slice(-2)+":"+("0"+minutes).slice(-2) : "";
		if (this._input.value != value && typeof(this._onChange) == "function") {
			this._onChange(this._input.value);
		}
	}
	#loadTexts() {
		this._cancel.textContent = this._cancelText != "" ? this._cancelText : lang in WUITimebox.#constants.texts ? WUITimebox.#constants.texts[lang].cancel : "";
		this._accept.textContent = this._acceptText != "" ? this._acceptText : lang in WUITimebox.#constants.texts ? WUITimebox.#constants.texts[lang].accept : "";
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
	cancel() {
		this._input.value = this._cancelValue;
		this.#setTime(this._cancelTime);
		this.close();
	}
	accept() {
		this.close();
	}
}
/*
HTML struture:
<div class="wui-timebox">
	<input type="time" value="">
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
			<div class="cancel"></div>
			<div class="accept"></div>
		</div>
	</div>
</div>
*/