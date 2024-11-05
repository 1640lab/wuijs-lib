/* WUITimebox v0.1 */

class WUITimebox {
	static version = "0.1";
	#defaults = {
		selector: "",
		min: "",
		max: "",
		value: "",
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
		this._hour = document.createElement("menu");
		this._minute = document.createElement("menu");
		this._meridiem = document.createElement("menu");
		this._footer = document.createElement("div");
		this._reset = document.createElement("div");
		this._done = document.createElement("div");
		this._hour.className = "hour";
		this._minute.className = "minute";
		this._meridiem.className = "meridiem";
		this._select.className = "select";
		this._select.appendChild(this._hour);
		this._select.appendChild(this._minute);
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
			const pickerEvent = this._input.disabled ? "disabled" : event.replace(/mouse/, "");
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
		/*this._todayYear = today.replace(/-\d{2}-\d{2}/, "");
		this._todayMonth = today.replace(/\d{4}-0?(\d+)-\d{2}/, "$1");
		this._targetValue = this._input.value || today;
		this._targetDate = new Date(this._targetValue);
		this._targetMode = "days";
		this._resetValue = this._targetValue;*/
		this.load();
		if (typeof(this._onOpen) == "function") {
			this._onOpen(this._input.value);
		}	
	}
	close() {
		this._box.classList.add("hidden");
	}
	load() {
		/*const year = this._targetDate.getFullYear();
		const month = this._targetDate.getMonth() +1;*/
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
			<menu class="hour"></menu>
			<menu class="minute"></menu>
			<menu class="meridiem"></menu>
		</div>
		<div class="footer">
			<div class="reset"></div>
			<div class="done"></div>
		</div>
	</div>
</div>
*/