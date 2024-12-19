/* WUIDatepicker v0.1 */

class WUIDatepicker {
	static version = "0.1";
	static #constants = {
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
				cancel: "akzeptieren",
				accept: "ok"
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
		min: "",
		max: "",
		value: "",
		locales: "en-US",
		monthsNames: [],
		weekDaysNames: [],
		cancelText: "",
		acceptText: "",
		enabled: true,
		onOpen: null,
		onChange: null
	};
	static initClass() {
		Object.entries(WUIDatepicker.#constants.firstWeekDayCountry).forEach(([wday, countries]) => {
			countries.split(/\s+/).forEach(code => {
				WUIDatepicker.#constants.countryFirstWeekDay[code] = wday;
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
		return this._min;
	}
	get max() {
		return this._max;
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
			this._input = document.querySelector(value+" > input[type='date']");
		}
	}
	set min(value) {
		if (typeof(value) == "string" && value.match(/^(\d{4}-\d{2}-\d{2})?$/)) {
			this._min = value;
		}
	}
	set max(value) {
		if (typeof(value) == "string" && value.match(/^(\d{4}-\d{2}-\d{2})?$/)) {
			this._max = value;
		}
	}
	set value(value) {
		if (typeof(value) == "string" && value.match(/^(\d{4}-\d{2}-\d{2})?$/) && this._enabled) {
			this.#setValue(value);
			this.#prepare();
		}
	}
	set locales(value) {
		if (typeof(value) == "string" && value.match(/^[a-z]{2}-[a-z]{2}$/i) && WUIDatepicker.#constants.locales.toLowerCase().split(/\s+/).indexOf(value.toLowerCase()) > -1) {
			this._locales = value.split("-").map((x, i) => {
				return i == 0 ? x.toLocaleLowerCase() : x.toUpperCase();
			}).join("-");
			if (typeof(this._inputs) != "undefined") {
				this.#loadInputs();
			}
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
				this.#setInputEnable(this._inputYear, value);
				this.#setInputEnable(this._inputMonth, value);
				this.#setInputEnable(this._inputDay, value);
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
	#setValue(value) {
		this._input.value = value;
		this._input.dispatchEvent(new Event("change"));
	}
	#setText(date) {
		this._inputYear.value = date instanceof Date ? ("000"+date.getFullYear()).slice(-4) : "";
		this._inputMonth.value = date instanceof Date ? ("0"+(date.getMonth() +1)).slice(-2) : "";
		this._inputDay.value = date instanceof Date ? ("0"+date.getDate()).slice(-2) : "";
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
			const element = this._element || document.documentElement;
			const color = getComputedStyle(element).getPropertyValue("--wui-datepicker-"+name+"color-"+event).replace(/#/g, "%23").trim();
			const image = getComputedStyle(element).getPropertyValue("--wui-datepicker-"+name+"image-src").replace(/currentColor/g, color);
			return image;
		}
		this._inputs = document.createElement("div");
		this._inputYear = document.createElement("input");
		this._inputMonth = document.createElement("input");
		this._inputDay = document.createElement("input");
		this._background = document.createElement("div");
		this._box = document.createElement("div");
		this._header = document.createElement("div");
		this._period = document.createElement("div");
		this._prev = document.createElement("div");
		this._next = document.createElement("div");
		this._months = document.createElement("div");
		this._week = document.createElement("div");
		this._days = document.createElement("div");
		this._footer = document.createElement("div");
		this._cancel = document.createElement("button");
		this._accept = document.createElement("button");
		this._element.appendChild(this._inputs);
		this._element.appendChild(this._background);
		this._element.appendChild(this._box);
		this._element.style.backgroundImage = backgroundImage("picker", this._input.disabled ? "disabled" : "out");
		this._element.addEventListener("click", event => {
			if (event.target.classList.contains("wui-datepicker") && this._element.offsetWidth - event.offsetX < 30) {
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
		["year", "month", "day"].forEach(part => {
			const name = part.charAt(0).toUpperCase()+part.slice(1);
			const input = this["_input"+name];
			input.type = "text";
			input.name = this._input.name+name;
			input.placeholder = part == "year" ? "yyyy" : part == "month" ? "mm" : "dd";
			input.maxLength = part == "year" ? 4 : 2;
			input.className = part;
			input.addEventListener("click", () => {this.toggle();});
			input.addEventListener("keyup", event => {
				const value = event.target.value;
				const part = event.target.className;
				const min = 1;
				const max = part == "year" ? 3000 : part == "month" ? 12 : 31;
				event.target.value = parseInt(value) > max ? max : parseInt(value) < min ? min : value;
				this.#loadValue();
			});
		});
		this._background.className = "background hidden";
		this._box.className = "box hidden";
		this._box.appendChild(this._header);
		this._box.appendChild(this._months);
		this._box.appendChild(this._week);
		this._box.appendChild(this._days);
		this._box.appendChild(this._footer);
		this._header.className = "header";
		this._header.appendChild(this._period);
		this._header.appendChild(this._prev);
		this._header.appendChild(this._next);
		this._period.className = "period";
		this._period.addEventListener("click", () => {this.toggleMode();});
		this._prev.className = "prev";
		this._prev.style.backgroundImage = backgroundImage("box-prev", this._input.disabled ? "disabled" : "out");
		this._prev.addEventListener("click", () => {this.prev();});
		this._next.className = "next";
		this._next.style.backgroundImage = backgroundImage("box-next", this._input.disabled ? "disabled" : "out");
		this._next.addEventListener("click", () => {this.next();});
		this._months.className = "months";
		this._week.className = "week";
		this._days.className = "days";
		this._footer.className = "footer";
		this._footer.appendChild(this._cancel);
		this._footer.appendChild(this._accept);
		this._cancel.className = "cancel";
		this._cancel.addEventListener("click", () => {this.cancel();});
		this._accept.className = "accept";
		this._accept.addEventListener("click", () => {this.accept();});
		this.#prepare();
		this.#loadInputs();
	}
	#prepare() {
		const lang = this._locales.split("-")[0].toLowerCase();
		const today = (() => {
			const date = new Date();
			const offset = date.getTimezoneOffset();
			return new Date(date.getTime() - offset*60*1000).toISOString().split("T")[0];
		})();
		this._todayValue = today;
		this._todayYear = today.replace(/-\d{2}-\d{2}/, "");
		this._todayMonth = today.replace(/\d{4}-0?(\d+)-\d{2}/, "$1");
		this._targetValue = this._input.value || today;
		this._targetDate = new Date(this._targetValue+"T00:00:00");
		this._cancelValue = this._targetValue;
		this._cancelDate = new Date(this._targetValue+"T00:00:00");
		this._mode = "days";
		for (let i=0; i<7; i++) {
			const name = new Date(2023, 0, i+1, 0, 0, 0).toLocaleString(this._locales, {weekday: "long"}); // 2023-01-01: sunday
			this._weekDaysNames[i] = name.replace(/^\s*(\w)/, letter => letter.toUpperCase());
		}
		for (let i=0; i<12; i++) {
			const name = new Date(2023, i, 1, 0, 0, 0).toLocaleString(this._locales, {month: "long"});
			this._monthsNames[i] = name.replace(/^\s*(\w)/, letter => letter.toUpperCase());
		}
		this._cancel.textContent = this._cancelText != "" ? this._cancelText : lang in WUIDatepicker.#constants.texts ? WUIDatepicker.#constants.texts[lang].cancel : "";
		this._accept.textContent = this._acceptText != "" ? this._acceptText : lang in WUIDatepicker.#constants.texts ? WUIDatepicker.#constants.texts[lang].accept : "";
		this.#setText(this._targetDate);
	}
	#loadValue() {
		const value = this._input.value;
		const year = this._inputYear.value;
		const month = this._inputMonth.value;
		const day = this._inputDay.value;
		this._input.value = year != "" && month != "" && day != "" ? ("000"+year).slice(-4)+"-"+("0"+month).slice(-2)+"-"+("0"+day).slice(-2) : "";
		if (this._input.value != value && typeof(this._onChange) == "function") {
			this._onChange(this._input.value);
		}
	}
	#loadInputs() {
		const format =
			this._locales.match(/(en-CA|en-ZA|ja-JP|ko-KR|zh-CN)/) ? ["year", "month", "day"] :
			this._locales.match(/(en-US)/) ? ["month", "day", "year"] :
			["day", "month", "year"];
		this._inputs.innerHTML = "";
		format.forEach((part, i) => {
			const name = part.charAt(0).toUpperCase()+part.slice(1);
			const input = this["_input"+name];
			this._inputs.appendChild(input);
			if (i < 2) {
				const span = document.createElement("span");
				span.textContent = "/";
				this._inputs.appendChild(span);
			}
		});
	}
	#loadBox() {
		if (this._mode == "months") {
			this.#buildMonths();
		} else if (this._mode == "days") {
			this.#buildDays();
		}
	}
	#buildMonths() {
		const year = this._targetDate.getFullYear();
		const month = this._targetDate.getMonth() +1;
		let y = year;
		let m = 1;
		this._box.classList.remove("extended");
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
				const item = document.createElement("div");
				item.innerHTML = y;
				cell.appendChild(item);
				y++;
				m = 1;
			} else {
				const item = document.createElement("div");
				const itemValue = this._targetValue.replace(/^\d{4}-\d{2}-/, (y -1)+"-"+("0"+m).slice(-2)+"-");
				const itemYear = y -1;
				const itemMonth = m;
				if (itemYear == this._todayYear && itemMonth == this._todayMonth) {
					item.classList.add("today");
				}
				if (itemValue == this._input.value) {
					item.classList.add("selected");
				}
				item.dataset.value = itemValue;
				item.dataset.year = itemYear;
				item.dataset.month = itemMonth;
				item.textContent = this.monthsNames[m -1].substring(0, 3);
				item.addEventListener("click", () => {
					const selected = !Boolean(item.classList.contains("selected"));
					const targetValue = itemValue;
					const value = selected ? targetValue : "";
					const date = selected ? new Date(targetValue+"T00:00:00") : null;
					this._months.querySelectorAll("div").forEach(div => {
						if (typeof(div.dataset.value) != "undefined" && div.dataset.value != targetValue) {
							div.classList.remove("selected");
						}
					});
					item.classList.toggle("selected");
					this._targetValue = value;
					this._targetDate = date;
					this._period.innerHTML = this._monthsNames[item.dataset.month -1]+" "+item.dataset.year+" <div class='icon up'></div>";
					this.#setValue(value);
					this.#setText(date);
				});
				cell.appendChild(item);
				m++;
			}
			this._months.appendChild(cell);
		}
	}
	#buildDays() {
		const year = this._targetDate.getFullYear();
		const month = this._targetDate.getMonth() +1;
		const country = this.locales.split("-")[1].toUpperCase();
		const firstwday = parseInt(WUIDatepicker.#constants.countryFirstWeekDay[country] || 0);
		const firstmday = new Date(year, month, 1, 0, 0, 0).getDay(); 
		const lasmday = month == 2 ? year & 3 || !(year % 25) && year & 15 ? 28 : 29 : 30 + (month + (month >> 3) & 1);
		let ini = 0;
		let rows = 5;
		let d = 1;
		this._box.classList.remove("extended");
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
				const item = document.createElement("div");
				const itemValue = this._targetValue.replace(/-\d{2}$/, "-"+("0"+d).slice(-2));
				if (itemValue == this._todayValue) {
					item.classList.add("today");
				}
				if (itemValue == this._input.value) {
					item.classList.add("selected");
				}
				item.dataset.value = itemValue;
				item.textContent = d;
				item.addEventListener("click", () => {
					const selected = !Boolean(item.classList.contains("selected"));
					const targetValue = itemValue;
					const value = selected ? targetValue : "";
					const date = selected ? new Date(targetValue+"T00:00:00") : null;
					this._days.querySelectorAll("div").forEach(div => {
						if (typeof(div.dataset.value) != "undefined" && div.dataset.value != targetValue) {
							div.classList.remove("selected");
						}
					});
					item.classList.toggle("selected");
					this._targetValue = value;
					this._targetDate = date;
					this.#setValue(value);
					this.#setText(date);
				});
				cell.appendChild(item);
				if (i +1 == 7*5 && d < lasmday) {
					this._box.classList.add("extended");
					rows++;
				}
				d++;
			}
			this._days.appendChild(cell);
		}
	}
	#yearsStep(step) {
		const year = this._targetDate.getFullYear() +step;
		this._targetDate.setFullYear(year);
		this._targetValue = this._targetDate.toISOString().split("T")[0];
		this.#buildMonths();
	}
	#monthsStep(step) {
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
		this.#buildDays();
	}
	open() {
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
		this._background.classList.toggle("hidden");
		this._box.classList.toggle("hidden");
		if (!this._box.classList.contains("hidden")) {
			this.open();
		}
	}
	toggleMode() {
		this._mode = this._mode == "days" ? "months" : "days";
		this.#loadBox();
	}
	prev() {
		switch (this._mode) {
			case "months": this.#yearsStep(-2); break;
			case "days": this.#monthsStep(-1); break;
		}
	}
	next() {
		switch (this._mode) {
			case "months": this.#yearsStep(+2); break;
			case "days": this.#monthsStep(+1); break;
		}
	}
	cancel() {
		this.#setValue(this._cancelValue);
		this.#setText(this._cancelDate);
		this.close();
	}
	accept() {
		this.close();
	}
}
WUIDatepicker.initClass();
/*
HTML struture:
<div class="wui-datepicker">
	<input type="date" value="(name)" value="">
	<div class="inputs">
		<input type="text" value="(name)Year">
		<span></span>
		<input type="text" value="(name)Month">
		<span></span>
		<input type="text" value="(name)Day">
	</div>
	<div class="background"></div>
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
			<button class="cancel"></button>
			<button class="accept"></button>
		</div>
	</div>
</div>
*/