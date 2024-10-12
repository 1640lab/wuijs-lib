/* WUIDatebox v0.1 */

class WUIDatebox {
	static version = "0.1";
	static constants = {
		locales: "" // https://www.techonthenet.com/js/language_tags.php 20241007
			+"ar-SA bn-BD bn-IN cs-CZ da-DK de-AT de-CH de-DE el-GR en-AU en-CA en-GB en-IE en-IN en-NZ en-US en-ZA es-AR es-CL es-CO es-ES es-MX es-US fi-FI fr-BE fr-CA fr-CH fr-FR he-IL hi-IN hu-HU id-ID it-CH it-IT ja-JP ko-KR nl-BE nl-NL no-NO pl-PL pt-BR pt-PT ro-RO ru-RU sk-SK sv-SE ta-IN ta-LK th-TH tr-TR zh-CN zh-HK zh-TW",
		firstWeekDayCountry: {
			0: "AG AS AU BD BR BS BT BW BZ CA CN CO DM DO ET GT GU HK HN ID IL IN JM JP KE KH KR LA MH MM MO MT MX MZ NI NP PA PE PH PK PR PT PY SA SG SV TH TT TW UM US VE VI WS YE ZA ZW",
			1: "AD AI AL AM AN AR AT AX AZ BA BE BG BM BN BY CH CL CM CR CY CZ DE DK EC EE ES FI FJ FO FR GB GE GF GP GR HR HU IE IS IT KG KZ LB LI LK LT LU LV MC MD ME MK MN MQ MY NL NO NZ PL RE RO RS RU SE SI SK SM TJ TM TR UA UY UZ VA VN XK",
			2: "",
			3: "",
			4: "",
			5: "MV",
			6: "AE AF BH DJ DZ EG IQ IR JO KW LY OM QA SD SY"
		},
		countryFirstWeekDay: {}
	};
	#defaults = {
		selector: "",
		min: "",
		max: "",
		value: "",
		locales: "en-US",
		weekDaysNames: [],
		monthsNames: [],
		enabled: true,
		onChange: null
	};
	static initClass() {
		Object.entries(this.constants.firstWeekDayCountry).forEach(([wday, countries]) => {
			countries.split(/\s+/).forEach(code => {
				this.constants.countryFirstWeekDay[code] = wday;
			});
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
	get weekDaysNames() {
		return this._weekDaysNames;
	}
	get monthsNames() {
		return this._monthsNames;
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
		if (typeof(value) == "string" && value.match(/^[a-z]{2}-[a-z]{2}$/i) && WUIDatebox.constants.locales.toLowerCase().split(/\s+/).indexOf(value.toLowerCase()) > -1) {
			this._locales = value.split("-").map((x, i) => {
				return i == 0 ? x.toLocaleLowerCase() : x.toUpperCase()
			}).join("-");
		}
	}
	set weekDaysNames(value) {
		if (Array.isArray(value)) {
			this._weekDaysNames = value;
		}
	}
	set monthsNames(value) {
		if (Array.isArray(value)) {
			this._monthsNames = value;
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
		const bgImage = (name, event) => {
			const element = this._input || this._element || document.documentElement;
			const color = getComputedStyle(element).getPropertyValue("--wui-datebox-"+name+"color-"+event).replace(/#/g, "%23").trim();
			const image = getComputedStyle(element).getPropertyValue("--wui-datebox-"+name+"image-src").replace(/currentColor/g, color);
			return image;
		}
		this._calendar = document.createElement("div");
		this._header = document.createElement("div");
		this._month = document.createElement("div");
		this._prev = document.createElement("div");
		this._next = document.createElement("div");
		this._week = document.createElement("div");
		this._days = document.createElement("div");
		this._footer = document.createElement("div");
		this._month.className = "month";
		this._prev.className = "prev";
		this._next.className = "next";
		this._header.className = "header";
		this._header.appendChild(this._month);
		this._header.appendChild(this._prev);
		this._header.appendChild(this._next);
		this._week.className = "week";
		this._days.className = "days";
		this._footer.className = "footer";
		this._calendar.className = "calendar hidden";
		this._calendar.appendChild(this._header);
		this._calendar.appendChild(this._week);
		this._calendar.appendChild(this._days);
		this._calendar.appendChild(this._footer);
		this._element.appendChild(this._calendar);
		this._input.style.backgroundImage = bgImage("picker", this._input.disabled ? "disabled" : "out");
		this._prev.style.backgroundImage = bgImage("calendar-prev", this._input.disabled ? "disabled" : "out");
		this._next.style.backgroundImage = bgImage("calendar-next", this._input.disabled ? "disabled" : "out");
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
			this._calendar.classList.toggle("hidden");
			if (!this._calendar.classList.contains("hidden")) {
				this.loadNames();
				this.loadCalendar();
			}
		});
		this._input.addEventListener("input", (event) => {
			if (typeof(this._onChange) == "function") {
				this._onChange(event, this._input.value);
			}
		});
	}
	loadNames() {
		if (WUIDatebox.constants.locales.toLowerCase().split(/\s+/).indexOf(this._locales.toLowerCase()) > -1) {
			let i;
			for (i=0; i<7; i++) {
				const name = new Date(2023, 0, i+1).toLocaleString(this._locales, {weekday: "long"}); // 2023-01-01: sunday
				this._weekDaysNames[i] = name.replace(/^\s*(\w)/, letter => letter.toUpperCase());
			}
			for (i=0; i<12; i++) {
				const name = new Date(2023, i, 1).toLocaleString(this._locales, {month: "long"});
				this._monthsNames[i] = name.replace(/^\s*(\w)/, letter => letter.toUpperCase());
			}
		}
	}
	loadCalendar() {
		const code = this.locales.split("-")[1].toUpperCase();
		const firstwday = parseInt(WUIDatebox.constants.countryFirstWeekDay[code] || 0);
		const today = () => {
			const date = new Date();
			const offset = date.getTimezoneOffset();
			return new Date(date.getTime() - offset*60*1000).toISOString().split("T")[0];
		}
		const value = this._input.value || today();
		const date = new Date(value);
		const year = date.getFullYear();
		const month = date.getMonth() +1;
		const firstmday = new Date(value.replace(/\d{2}$/, "01T00:00:00")).getDay();
		const lasmday = month == 2 ? year & 3 || !(year % 25) && year & 15 ? 28 : 29 : 30 + (month + (month >> 3) & 1);
		let ini = 0;
		let d = 1;
		this._month.innerHTML = this._monthsNames[month -1]+" "+year;
		this._week.innerHTML = "";
		this._days.innerHTML = "";
		for (let i=0; i<7; i++) {
			const day = document.createElement("div");
			let index = firstwday + i;
			if (index > 6) {
				index -= 7;
			}
			if (index == firstmday) {
				ini = i;
			}
			day.textContent = this._weekDaysNames[index].substring(0, 3);
			this._week.appendChild(day);
		}
		for (let i=0; i<7*5; i++) {
			const day = document.createElement("div");
			if (i >= ini && d <= lasmday) {
				const number = document.createElement("div");
				const dayValue = value.replace(/-\d{2}$/, "-"+("0"+d).slice(-2));
				if (dayValue == today()) {
					number.classList.add("today");
				}
				if (dayValue == value) {
					number.classList.add("selected");
				}
				number.dataset.value = dayValue;
				number.textContent = d;
				number.addEventListener("click", () => {
					this._days.querySelectorAll("div").forEach(div => {
						if (typeof(div.dataset.value) != "undefined" && div.dataset.value != dayValue) {
							div.classList.remove("selected");
						}
					});
					number.classList.toggle("selected");
					this._input.value = number.classList.contains("selected") ? dayValue : "";
				});
				day.appendChild(number);
				d++;
			}
			this._days.appendChild(day);
		}
	}
	close() {
		this._calendar.classList.add("hidden");
	}
}
WUIDatebox.initClass();
/*
HTML struture:
<div class="wui-datebox">
	<input type="date" value="">
	<div class="calendar">
		<div class="header">
			<div class="month"></div>
		</div>
		<div class="week"></div>
		<div class="days"></div>
		<div class="footer"></div>
	</div>
</div>
DOM form field struture:
<div class="field">
	<label></label>
	<div class="wui-datebox">
		<input type="date" value="">
		<div class="calendar">...</div>
	</div>
</div>
*/