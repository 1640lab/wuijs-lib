/* WUIDatebox v0.1 */

class WUIDatebox {
	static version = "0.1";
	#defaults = {
		selector: "",
		min: "",
		max: "",
		value: "",
		locales: "es-cl",
		enabled: true,
		onChange: null
	};
	static initClass() {
		["out", "focus", "disabled"].forEach(event => {
			const color = (getComputedStyle(document.documentElement).getPropertyValue("--wui-datebox-pickercolor-"+event) || getComputedStyle(document.documentElement).getPropertyValue("--wui-datebox-pickercolor-"+event)).replace(/#/g, "%23").trim();
			const src = getComputedStyle(document.documentElement).getPropertyValue("--wui-datebox-pickerimage-src").replace(/currentColor/g, color);
			document.documentElement.style.setProperty("--wui-datebox-pickerimage-"+event, src);
		});
	}
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
	get locales() {
		return this._locales;
	}
	get enabled() {
		return this._enabled;
	}
	get onChange() {
		return this._onChange;
	}
	set selector(value) {
		if (typeof(value) == "string" && value != "") {
			this._selector = value;
			this._element = document.querySelector(value);
			this._input = document.querySelector(value+" > input[type='date']");
		}
	}
	set min(value) {
		if (typeof(value) == "string" && value.match(/^(\d{4}-\d{2}-\d{2})?$/)) {
			this._input.min = value;
		}
	}
	set max(value) {
		if (typeof(value) == "string" && value.match(/^(\d{4}-\d{2}-\d{2})?$/)) {
			this._input.max = value;
		}
	}
	set value(value) {
		if (typeof(value) == "string" && value.match(/^(\d{4}-\d{2}-\d{2})?$/) && this._enabled) {
			this._input.value = value;
		}
	}
	set locales(value) {
		if (typeof(value) == "string" && value.match(/^[a-z]{2}-[a-z]{2}$/i)) {
			this._locales = value.split("-").map((x, i) => {
				return i == 0 ? x.toLocaleLowerCase() : x.toUpperCase()
			}).join("-");
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
		console.log("-->", this.locales);
		let now = Date.now();
		console.log("-->", now);
		let day = new Date(now).toLocaleString("es-cl", {weekday: "short"});
		console.log("-->", day);
		//const he = new Intl.Locale("es-CL"); // Hebrew (Israel)
		//console.log("-->", he.getWeekInfo());

		this._calendar = document.createElement("div");
		this._head = document.createElement("div");
		this._period = document.createElement("div");
		this._body = document.createElement("div");
		this._week = document.createElement("div");
		this._days = document.createElement("div");
		this._footer = document.createElement("div");
		this._period.className = "period";
		this._week.className = "week";
		this._days.className = "days";
		for (let i=0; i<7; i++) {
			const day = document.createElement("div");
			this._week.appendChild(day);
		}
		this._head.className = "head";
		this._head.appendChild(this._period);
		this._body.className = "body";
		this._body.appendChild(this._week);
		this._body.appendChild(this._days);
		this._calendar.className = "calendar";
		this._calendar.appendChild(this._head);
		this._calendar.appendChild(this._body);
		this._calendar.appendChild(this._footer);
		this._element.appendChild(this._calendar);
		this._input.addEventListener("input", (event) => {
			if (typeof(this._onChange) == "function") {
				this._onChange(event, this._input.value);
			}
		});
	}
}
WUIDatebox.initClass();
/*
DOM struture:
<div class="wui-datebox">
	<input type="date" value="2024-10-26">
	<div class="calendar">
		<div class="head"></div>
		<div class="body">
			<div class="period"></div>
			<div class="month"></div>
		</div>
		<div class="footer"></div>
	</div>
</div>
DOM form field struture:
<div class="field">
	<label></label>
	<div class="wui-datebox">
		<input type="date" value="2024-10-26">
		<div class="calendar">...</div>
	</div>
</div>
*/