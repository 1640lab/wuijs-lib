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
		min: "",
		max: "",
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
	#setStyle() {
		const disabled = this._input.disabled;
		if (disabled) {
			this._element.classList.add("disabled");
		} else {
			this._element.classList.remove("disabled");
		}
	}
	getElement() {
		return this._element;
	}
	getInput() {
		return this._input;
	}
	init() {
		const bgImage = (name, event) => {
			const element = this._input || this._element || document.documentElement;
			const color = getComputedStyle(element).getPropertyValue("--wui-timebox-"+name+"color-"+event).replace(/#/g, "%23").trim();
			const image = getComputedStyle(element).getPropertyValue("--wui-timebox-"+name+"image-src").replace(/currentColor/g, color);
			return image;
		}
		this._box = document.createElement("div");
		this._select = document.createElement("div");
		this._hours = document.createElement("ul");
		this._minutes = document.createElement("ul");
		this._meridiem = document.createElement("ul");
		this._footer = document.createElement("div");
		this._reset = document.createElement("div");
		this._done = document.createElement("div");
		this._hours.className = "hours";
		this._minutes.className = "minutes";
		this._meridiem.className = "meridiem";
		for (let i=0; i<12; i++) {
			const li = document.createElement("li");
			li.dataset.value = i;
			li.textContent = i;
			li.addEventListener("click", () => {
				console.log("->", li);
			});
			this._hours.appendChild(li);
		}
		for (let i=0; i<60; i++) {
			const li = document.createElement("li");
			li.dataset.value = i;
			li.textContent = i;
			this._minutes.appendChild(li);
		}
		["AM", "PM"].forEach(i => {
			const li = document.createElement("li");
			li.dataset.value = i;
			li.textContent = i;
			this._meridiem.appendChild(li);
		});
		this._select.className = "select";
		this._select.appendChild(this._hours);
		this._select.appendChild(this._minutes);
		this._select.appendChild(this._meridiem);
		this._reset.className = "reset";
		this._reset.addEventListener("click", () => {this.reset();});
		this._done.className = "done";
		this._done.addEventListener("click", () => {this.done();});
		this._footer.className = "footer";
		this._footer.appendChild(this._reset);
		this._footer.appendChild(this._done);
		this._box.className = "box hidden";
		this._box.appendChild(this._select);
		this._box.appendChild(this._footer);
		this._element.appendChild(this._box);
		this._input.style.backgroundImage = bgImage("picker", this._input.disabled ? "disabled" : "out");
		["mouseover", "mouseout", "focus", "blur"].forEach(event => {
			const pickerEvent = this._input.disabled ? "disabled" : event == "blur" ? "out" : event.replace(/mouse/, "");
			this._input.addEventListener(event, () => {
				this._input.style.backgroundImage = bgImage("picker", pickerEvent);
				if (event == "focus") {
					const open = new MouseEvent("mousedown");
					this._input.dispatchEvent(open);
				}
			});
		});
		this._input.addEventListener("click", () => {
			this._box.classList.toggle("hidden");
			if (!this._box.classList.contains("hidden")) {
				this.open();
			}
		});
		this._input.addEventListener("input", (event) => {
			if (typeof(this._onChange) == "function") {
				this._onChange(event, this._input.value);
			}
		});
	}
	open() {
		const now = (() => {
			const date = new Date();
			const offset = date.getTimezoneOffset();
			return new Date(date.getTime() - offset*60*1000).toISOString().split("T")[1].slice(0, 5);
		})();
		this._nowValue = now;
		this._nowHours = parseInt(this._nowValue.split(":")[0]);
		this._nowMinutes = parseInt(this._nowValue.split(":")[1]);
		this._targetValue = this._input.value || now;
		this._targetHours = parseInt(this._targetValue.split(":")[0]);
		this._targetMinutes = parseInt(this._targetValue.split(":")[1]);
		this._resetValue = this._targetValue;
		this.load();
		if (typeof(this._onOpen) == "function") {
			this._onOpen(this._input.value);
		}	
	}
	close() {
		this._box.classList.add("hidden");
	}
	load() {
		const nowHours = this._nowHours > 12 ? this._nowHours - 12 : this._nowHours;
		const nowMeridiem = this._nowHours > 12 ? 1 : 0;
		const targetHours = this._targetHours > 12 ? this._targetHours - 12 : this._targetHours;
		const targetMeridiem = this._targetHours > 12 ? 1 : 0;
		this._hours.querySelectorAll("li").forEach((li, i) => {
			if (i == nowHours) {
				li.classList.add("now");
			} else {
				li.classList.remove("now");
			}
			if (i == targetHours) {
				li.classList.add("selected");
			} else {
				li.classList.remove("selected");
			}
		});
		this._minutes.querySelectorAll("li").forEach((li, i) => {
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
		this._meridiem.querySelectorAll("li").forEach((li, i) => {
			if (i == nowMeridiem) {
				li.classList.add("now");
			} else {
				li.classList.remove("now");
			}
			if (i == targetMeridiem) {
				li.classList.add("selected");
			} else {
				li.classList.remove("selected");
			}
		});
		this._reset.textContent = this._resetText != "" ? this._resetText : lang in WUITimebox.#constants.texts ? WUITimebox.#constants.texts[lang].reset : "";
		this._done.textContent = this._doneText != "" ? this._doneText : lang in WUITimebox.#constants.texts ? WUITimebox.#constants.texts[lang].done : "";
	}
	reset() {
		this._input.value = this._resetValue;
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