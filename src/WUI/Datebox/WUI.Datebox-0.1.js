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
		countryFirstWeekDay: {},
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
		locales: "en-US",
		monthsNames: [],
		weekDaysNames: [],
		resetText: "",
		doneText: "",
		enabled: true,
		onOpen: null,
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
	get monthsNames() {
		return this._monthsNames;
	}
	get weekDaysNames() {
		return this._weekDaysNames;
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
	set monthsNames(value) {
		if (Array.isArray(value)) {
			this._monthsNames = value;
		}
	}
	set weekDaysNames(value) {
		if (Array.isArray(value)) {
			this._weekDaysNames = value;
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
			const color = getComputedStyle(element).getPropertyValue("--wui-datebox-"+name+"color-"+event).replace(/#/g, "%23").trim();
			const image = getComputedStyle(element).getPropertyValue("--wui-datebox-"+name+"image-src").replace(/currentColor/g, color);
			return image;
		}
		this._box = document.createElement("div");
		this._header = document.createElement("div");
		this._period = document.createElement("div");
		this._prev = document.createElement("div");
		this._next = document.createElement("div");
		this._months = document.createElement("div");
		this._week = document.createElement("div");
		this._days = document.createElement("div");
		this._footer = document.createElement("div");
		this._reset = document.createElement("div");
		this._done = document.createElement("div");
		this._period.className = "period";
		this._period.addEventListener("click", () => {this.toggle();});
		this._prev.className = "prev";
		this._prev.addEventListener("click", () => {this.prev();});
		this._next.className = "next";
		this._next.addEventListener("click", () => {this.next();});
		this._header.className = "header";
		this._header.appendChild(this._period);
		this._header.appendChild(this._prev);
		this._header.appendChild(this._next);
		this._months.className = "months";
		this._week.className = "week";
		this._days.className = "days";
		this._reset.className = "reset";
		this._reset.addEventListener("click", () => {this.reset();});
		this._done.className = "done";
		this._done.addEventListener("click", () => {this.done();});
		this._footer.className = "footer";
		this._footer.appendChild(this._reset);
		this._footer.appendChild(this._done);
		this._box.className = "box hidden";
		this._box.appendChild(this._header);
		this._box.appendChild(this._months);
		this._box.appendChild(this._week);
		this._box.appendChild(this._days);
		this._box.appendChild(this._footer);
		this._element.appendChild(this._box);
		this._input.style.backgroundImage = bgImage("picker", this._input.disabled ? "disabled" : "out");
		this._prev.style.backgroundImage = bgImage("box-prev", this._input.disabled ? "disabled" : "out");
		this._next.style.backgroundImage = bgImage("box-next", this._input.disabled ? "disabled" : "out");
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
		const today = (() => {
			const date = new Date();
			const offset = date.getTimezoneOffset();
			return new Date(date.getTime() - offset*60*1000).toISOString().split("T")[0];
		})();
		this._todayValue = today;
		this._todayYear = today.replace(/-\d{2}-\d{2}/, "");
		this._todayMonth = today.replace(/\d{4}-0?(\d+)-\d{2}/, "$1");
		this._targetValue = this._input.value || today;
		this._targetDate = new Date(this._targetValue);
		this._targetMode = "days";
		this._resetValue = this._targetValue;
		this.load();
		if (typeof(this._onOpen) == "function") {
			this._onOpen(this._input.value);
		}
	}
	close() {
		this._box.classList.add("hidden");
	}
	toggle() {
		this._targetMode = this._targetMode == "days" ? "months" : "days";
		this.load();
	}
	load() {
		this.loadTexts();
		switch (this._targetMode) {
			case "months": this.loadMonths(); break;
			case "days": this.loadDays(); break;
		}
	}
	loadTexts() {
		if (WUIDatebox.constants.locales.toLowerCase().split(/\s+/).indexOf(this._locales.toLowerCase()) > -1) {
			const language = this.locales.split("-")[0].toLowerCase();
			for (let i=0; i<7; i++) {
				const name = new Date(2023, 0, i+1).toLocaleString(this._locales, {weekday: "long"}); // 2023-01-01: sunday
				this._weekDaysNames[i] = name.replace(/^\s*(\w)/, letter => letter.toUpperCase());
			}
			for (let i=0; i<12; i++) {
				const name = new Date(2023, i, 1).toLocaleString(this._locales, {month: "long"});
				this._monthsNames[i] = name.replace(/^\s*(\w)/, letter => letter.toUpperCase());
			}
			if (this._resetText == "" && language in WUIDatebox.constants.texts) {
				this._resetText = WUIDatebox.constants.texts[language].reset;
			}
			if (this._doneText == "" && language in WUIDatebox.constants.texts) {
				this._doneText = WUIDatebox.constants.texts[language].done;
			}
			this._reset.textContent = this._resetText;
			this._done.textContent = this._doneText;
		}
	}
	loadMonths() {
		const year = this._targetDate.getFullYear();
		const month = this._targetDate.getMonth() +1;
		let y = year;
		let m = 1;
		this._box.style.height = "260px";
		this._period.innerHTML = this._monthsNames[month -1]+" "+year+" <div class='icon up'></div>";
		this._months.style.display = "grid";
		this._months.innerHTML = "";
		this._week.style.display = "none";
		this._week.innerHTML = "";
		this._days.style.display = "none";
		this._days.innerHTML = "";
		for (let i=0; i<13*2; i++) {
			const cell = document.createElement("div");
			if (i % 13 == 0) {
				const cyear = document.createElement("div");
				cyear.innerHTML = y;
				cell.appendChild(cyear);
				y++;
				m = 1;
			} else {
				const button = document.createElement("div");
				const buttonValue = this._targetValue.replace(/^\d{4}-\d{2}-/, (y -1)+"-"+("0"+m).slice(-2)+"-");
				const buttonYear = y -1;
				const buttonMonth = m;
				if (buttonYear == this._todayYear && buttonMonth == this._todayMonth) {
					button.classList.add("today");
				}
				if (buttonValue == this._input.value) {
					button.classList.add("selected");
				}
				button.dataset.value = buttonValue;
				button.dataset.year = buttonYear;
				button.dataset.month = buttonMonth;
				button.textContent = this.monthsNames[m -1].substring(0, 3);
				button.addEventListener("click", () => {
					this._months.querySelectorAll("div").forEach(div => {
						if (typeof(div.dataset.value) != "undefined" && div.dataset.value != buttonValue) {
							div.classList.remove("selected");
						}
					});
					button.classList.toggle("selected");
					this._period.innerHTML = this._monthsNames[button.dataset.month -1]+" "+button.dataset.year+" <div class='icon up'></div>";
					this._input.value = button.classList.contains("selected") ? buttonValue : "";
					if (button.classList.contains("selected")) {
						this._targetValue = buttonValue;
						this._targetDate = new Date(buttonValue);
					}
				});
				cell.appendChild(button);
				m++;
			}
			this._months.appendChild(cell);
		}
	}
	loadDays() {
		const year = this._targetDate.getFullYear();
		const month = this._targetDate.getMonth() +1;
		const country = this.locales.split("-")[1].toUpperCase();
		const firstwday = parseInt(WUIDatebox.constants.countryFirstWeekDay[country] || 0);
		const firstmday = new Date(year, month, 1).getDay(); 
		const lasmday = month == 2 ? year & 3 || !(year % 25) && year & 15 ? 28 : 29 : 30 + (month + (month >> 3) & 1);
		let ini = 0;
		let rows = 5;
		let d = 1;
		this._box.style.height = "260px";
		this._period.innerHTML = this._monthsNames[month -1]+" "+year+" <div class='icon down'></div>";
		this._months.style.display = "none";
		this._months.innerHTML = "";
		this._week.style.display = "grid";
		this._week.innerHTML = "";
		this._days.style.display = "grid";
		this._days.innerHTML = "";
		for (let i=0; i<7; i++) {
			const wday = document.createElement("div");
			let index = firstwday + i;
			if (index > 6) {
				index -= 7;
			}
			if (index == firstmday) {
				ini = i;
			}
			wday.textContent = this._weekDaysNames[index].substring(0, 3);
			this._week.appendChild(wday);
		}
		for (let i=0; i<7*rows; i++) {
			const cell = document.createElement("div");
			if (i >= ini && d <= lasmday) {
				const button = document.createElement("div");
				const buttonValue = this._targetValue.replace(/-\d{2}$/, "-"+("0"+d).slice(-2));
				if (buttonValue == this._todayValue) {
					button.classList.add("today");
				}
				if (buttonValue == this._input.value) {
					button.classList.add("selected");
				}
				button.dataset.value = buttonValue;
				button.textContent = d;
				button.addEventListener("click", () => {
					this._days.querySelectorAll("div").forEach(div => {
						if (typeof(div.dataset.value) != "undefined" && div.dataset.value != buttonValue) {
							div.classList.remove("selected");
						}
					});
					button.classList.toggle("selected");
					this._input.value = button.classList.contains("selected") ? buttonValue : "";
					if (button.classList.contains("selected")) {
						this._targetValue = buttonValue;
						this._targetDate = new Date(buttonValue);
					}
				});
				cell.appendChild(button);
				if (i == 7*5 -1 && d < lasmday) {
					this._box.style.height = "290px";
					rows++;
				}
				d++;
			}
			this._days.appendChild(cell);
		}
	}
	targetYearsStep(step) {
		const year = this._targetDate.getFullYear() +step;
		this._targetDate.setFullYear(year);
		this._targetValue = this._targetDate.toISOString().split("T")[0];
		this.loadMonths();
	}
	targetMonthsStep(step) {
		let month = this._targetDate.getMonth() +step;
		if (month < 0) {
			while (month < 0) {
				this._targetDate.setFullYear(this._targetDate.getFullYear() -1);
				month += 12;
			}
		} else if (month > 11) {
			while (month > 11) {
				this._targetDate.setFullYear(this._targetDate.getFullYear() +1);
				month -= 12;
			}
		}
		this._targetDate.setMonth(month);
		this._targetValue = this._targetDate.toISOString().split("T")[0];
		this.loadDays();
	}
	prev() {
		switch (this._targetMode) {
			case "months": this.targetYearsStep(-2); break;
			case "days": this.targetMonthsStep(-1); break;
		}
	}
	next() {
		switch (this._targetMode) {
			case "months": this.targetYearsStep(+2); break;
			case "days": this.targetMonthsStep(+1); break;
		}
	}
	reset() {
		this._input.value = this._resetValue;
		this.close();
	}
	done() {
		this.close();
	}
}
WUIDatebox.initClass();
/*
HTML struture:
<div class="wui-datebox">
	<input type="date" value="">
	<div class="box">
		<div class="header">
			<div class="period"></div>
			<div class="prev"></div>
			<div class="next"></div>
		</div>
		<div class="years"></div>
		<div class="week"></div>
		<div class="days"></div>
		<div class="footer">
			<div class="reset"></div>
			<div class="done"></div>
		</div>
	</div>
</div>
*/