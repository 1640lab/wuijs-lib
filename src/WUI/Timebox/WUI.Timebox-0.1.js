/* WUITimebox v0.1 */

class WUITimebox {
	static version = "0.1";
	static #constants = {
		texts: {
			de: {
				reset: "zurücksetzen",
				done: "ok"
			},
			en: {
				reset: "reset",
				done: "ok"
			},
			es: {
				reset: "cancelar",
				done: "listo"
			}
		}
	};
	#defaults = {
		selector: "",
		min: "00:00",
		max: "23:59",
		value: "",
		lang: "en",
		resetText: "",
		doneText: "",
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
	get resetText() {
		return this._resetText;
	}
	get doneText() {
		return this._doneText;
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
	set resetText(value) {
		if (typeof(value) == "string") {
			this._resetText = value;
		}
	}
	set doneText(value) {
		if (typeof(value) == "string") {
			this._doneText = value;
		}
	}
	set enabled(value) {
		if (typeof(value) == "boolean") {
			this._enabled = value;
			this._input.disabled = !value;
			if (typeof(this._inputs) != "undefined") {
				this._inputHours.disabled = !value;
				this._inputMinutes.disabled = !value;
			}
			if (value) {
				this._input.removeAttribute("disabled");
			} else {
				this._input.setAttribute("disabled", "true");
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
	#setStyle() {
		const disabled = this._input.disabled;
		if (disabled) {
			this._element.classList.add("disabled");
		} else {
			this._element.classList.remove("disabled");
		}
	}
	#setTime(time) {
		this._inputHours.value = time instanceof Date ? ("0"+time.getHours()).slice(-2) : "";
		this._inputMinutes.value = time instanceof Date ? ("0"+time.getMinutes()).slice(-2) : "";
	}
	init() {
		const bgImage = (name, event) => {
			const element = this._input || this._element || document.documentElement;
			const color = getComputedStyle(element).getPropertyValue("--wui-timebox-"+name+"color-"+event).replace(/#/g, "%23").trim();
			const image = getComputedStyle(element).getPropertyValue("--wui-timebox-"+name+"image-src").replace(/currentColor/g, color);
			return image;
		}
		this._inputs = document.createElement("div");
		this._inputHours = document.createElement("input");
		this._inputMinutes = document.createElement("input");
		this._box = document.createElement("div");
		this._lists = document.createElement("div");
		this._listHours = document.createElement("ul");
		this._listMinutes = document.createElement("ul");
		this._footer = document.createElement("div");
		this._reset = document.createElement("div");
		this._done = document.createElement("div");
		this._element.appendChild(this._inputs);
		this._element.appendChild(this._box);
		this._element.style.backgroundImage = bgImage("picker", this._input.disabled ? "disabled" : "out");
		this._element.addEventListener("click", event => {
			if (event.target.classList.contains("wui-timebox") && this._element.offsetWidth - event.offsetX < 30) {
				this.toggle();
			}
		});
		["mouseover", "mouseout", "focus", "blur"].forEach(type => {
			const pickerType = this._input.disabled ? "disabled" : type == "blur" ? "out" : type.replace(/mouse/, "");
			this._element.addEventListener(type, () => {
				this._element.style.backgroundImage = bgImage("picker", pickerType);
			});
		});
		["min", "max", "style"].forEach(name => {
			if (this._input.hasAttribute(name)) {
				if (name.match(/(min|max)/)) {
					this["_"+name] = this._input[name];
				}
				this._input.removeAttributeNode(this._input.getAttributeNode(name));
			}
		});
		this._input.type = "hidden";
		this._inputs.className = "inputs";
		["hours", "minutes"].forEach((part, i) => {
			const name = part.charAt(0).toUpperCase()+part.slice(1);
			const input = this["_input"+name];
			const max = part == "hour" ? 23 : 59;
			input.type = "text";
			input.name = this._input.name+name;
			input.placeholder = part == "hours" ? "hh" : "mm";
			input.maxLength = 2;
			input.className = part;
			input.addEventListener("click", () => {this.toggle();});
			input.addEventListener("keyup", event => {
				const value = event.target.value;
				const part = event.target.className;
				const min = 1;
				const max = part == "hour" ? 23 : 59;
				event.target.value = parseInt(value) > max ? max : parseInt(value) < min ? min : value;
				this.#loadValue();
			});
			this._inputs.appendChild(input);
			if (i < 1) {
				const span = document.createElement("span");
				span.textContent = ":";
				this._inputs.appendChild(span);
			}
			for (let i=0; i<max; i++) {
				const li = document.createElement("li");
				li.dataset.value = i;
				li.textContent = i;
				li.addEventListener("click", () => {});
				this["_list"+name].appendChild(li);
			}
		});
		this._box.className = "box hidden";
		this._box.appendChild(this._lists);
		this._box.appendChild(this._footer);
		this._lists.className = "lists";
		this._lists.appendChild(this._listHours);
		this._lists.appendChild(this._listMinutes);
		this._footer.className = "footer";
		this._footer.appendChild(this._reset);
		this._footer.appendChild(this._done);
		this._reset.className = "reset";
		this._reset.addEventListener("click", () => {this.reset();});
		this._done.className = "done";
		this._done.addEventListener("click", () => {this.done();});
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
		this._box.classList.add("hidden");
	}
	toggle() {
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
		this._resetValue = this._targetValue;
		this._resetTime = new Date("1970-01-01T"+this._targetValue+":00");
		this.#setTime(this._targetTime);
	}
	#loadValue() {
		const value = this._input.value;
		const hours = this._inputHours.value;
		const minutes = this._inputMinutes.value;
		this._input.value = hours != "" && minutes != "" ? ("0"+hours).slice(-2)+":"+("0"+minutes).slice(-2)+":00" : "";
		if (this._input.value != value && typeof(this._onChange) == "function") {
			this._onChange(this._input.value);
		}
	}
	#loadTexts() {
		this._reset.textContent = this._resetText != "" ? this._resetText : lang in WUITimebox.#constants.texts ? WUITimebox.#constants.texts[lang].reset : "";
		this._done.textContent = this._doneText != "" ? this._doneText : lang in WUITimebox.#constants.texts ? WUITimebox.#constants.texts[lang].done : "";
	}
	#loadBox() {
		this._listHours.querySelectorAll("li").forEach((li, i) => {
			if (i == this._nowHours) {
				li.classList.add("now");
			} else {
				li.classList.remove("now");
			}
			if (i == this._targetHours) {
				li.classList.add("selected");
			} else {
				li.classList.remove("selected");
			}
		});
		this._listMinutes.querySelectorAll("li").forEach((li, i) => {
			if (i == this._nowMinutes) {
				li.classList.add("now");
			} else {
				li.classList.remove("now");
			}
			if (i == this._targetMinutes) {
				li.classList.add("selected");
			} else {
				li.classList.remove("selected");
			}
		});
	}
	reset() {
		this._input.value = this._resetValue;
		this.#setTime(this._resetTime);
		this.close();
	}
	done() {
		this.close();
	}
}
/*
HTML struture:
<div class="wui-timebox">
	<input type="time" value="">
	<div class="box">
		<div class="select">
			<menu class="hours"></menu>
			<menu class="minutes"></menu>
			<menu class="meridiem"></menu>
		</div>
		<div class="footer">
			<div class="reset"></div>
			<div class="done"></div>
		</div>
	</div>
</div>
*/