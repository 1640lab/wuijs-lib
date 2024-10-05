/* WUIDatebox v0.1 */

class WUIDatebox {
	static version = "0.1";
	#defaults = {
		selector: "",
		min: "",
		max: "",
		value: 0,
		calendarForstday: 1,
		enabled: true,
		onChange: null
	};
	static prepare() {
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
	get calendarForstday() {
		return this._calendarForstday;
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
	set calendarForstday(value) {
		if (typeof(calendarForstday) == "number") {
			this._calendarForstday = value;
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
	calendar() {
		const calendar = document.createElement("div");
		const head = document.createElement("div");
		const body = document.createElement("div");
		const period = document.createElement("div");
		const month = document.createElement("div");
		const footer = document.createElement("div");
		period.className = "period";
		month.className = "month";
		for (let i=0; i<49; i++) {
			const day = document.createElement("div");
			day.className = i < 7 ? "" : "day";
			month.appendChild(day);
		}
		head.className = "head";
		body.className = "body";
		body.appendChild(period);
		body.appendChild(month);
		calendar.className = "calendar";
		calendar.appendChild(head);
		calendar.appendChild(body);
		calendar.appendChild(footer);
		return calendar;
	}
	init() {
		this._element.appendChild(this.calendar());
		this._input.addEventListener("input", (event) => {
			if (typeof(this._onChange) == "function") {
				this._onChange(event, this._input.value);
			}
		});
	}
}
WUIDatebox.prepare();
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