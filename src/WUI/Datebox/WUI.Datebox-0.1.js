/* WUIDatebox v0.1 */

class WUIDatebox {
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
		Object.entries(WUIDatebox.#constants.firstWeekDayCountry).forEach(([wday, countries]) => {
			countries.split(/\s+/).forEach(code => {
				WUIDatebox.#constants.countryFirstWeekDay[code] = wday;
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
			this._input.value = value;
			this.#load();
		}
	}
	set locales(value) {
		if (typeof(value) == "string" && value.match(/^[a-z]{2}-[a-z]{2}$/i) && WUIDatebox.#constants.locales.toLowerCase().split(/\s+/).indexOf(value.toLowerCase()) > -1) {
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
	#setDate(date) {
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
			input.removeAttributeNode("disabled");
		} else {
			input.setAttribute("disabled", "true");
		}
	}
	init() {
		const bgImage = (name, event) => {
			const element = this._element || document.documentElement;
			const color = getComputedStyle(element).getPropertyValue("--wui-datebox-"+name+"color-"+event).replace(/#/g, "%23").trim();
			const image = getComputedStyle(element).getPropertyValue("--wui-datebox-"+name+"image-src").replace(/currentColor/g, color);
			return image;
		}
		this._inputs = document.createElement("div");
		this._inputYear = document.createElement("input");
		this._inputMonth = document.createElement("input");
		this._inputDay = document.createElement("input");
		this._box = document.createElement("div");
		this._header = document.createElement("div");
		this._period = document.createElement("div");
		this._prev = document.createElement("div");
		this._next = document.createElement("div");
		this._months = document.createElement("div");
		this._week = document.createElement("div");
		this._days = document.createElement("div");
		this._footer = document.createElement("div");
		this._cancel = document.createElement("div");
		this._accept = document.createElement("div");
		this._element.appendChild(this._inputs);
		this._element.appendChild(this._box);
		this._element.style.backgroundImage = bgImage("picker", this._input.disabled ? "disabled" : "out");
		this._element.addEventListener("click", event => {
			if (event.target.classList.contains("wui-datebox") && this._element.offsetWidth - event.offsetX < 30) {
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
		this._prev.style.backgroundImage = bgImage("box-prev", this._input.disabled ? "disabled" : "out");
		this._prev.addEventListener("click", () => {this.prev();});
		this._next.className = "next";
		this._next.style.backgroundImage = bgImage("box-next", this._input.disabled ? "disabled" : "out");
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
		this.#load();
		this.#loadInputs();
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
	toggleMode() {
		this._mode = this._mode == "days" ? "months" : "days";
		this.#loadBox();
	}
	#load() {
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
		this.#setDate(this._targetDate);
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
	#loadTexts() {
		if (WUIDatebox.#constants.locales.toLowerCase().split(/\s+/).indexOf(this._locales.toLowerCase()) > -1) {
			const lang = this._locales.split("-")[0].toLowerCase();
			for (let i=0; i<7; i++) {
				const name = new Date(2023, 0, i+1, 0, 0, 0).toLocaleString(this._locales, {weekday: "long"}); // 2023-01-01: sunday
				this._weekDaysNames[i] = name.replace(/^\s*(\w)/, letter => letter.toUpperCase());
			}
			for (let i=0; i<12; i++) {
				const name = new Date(2023, i, 1, 0, 0, 0).toLocaleString(this._locales, {month: "long"});
				this._monthsNames[i] = name.replace(/^\s*(\w)/, letter => letter.toUpperCase());
			}
			this._cancel.textContent = this._cancelText != "" ? this._cancelText : lang in WUIDatebox.#constants.texts ? WUIDatebox.#constants.texts[lang].cancel : "";
			this._accept.textContent = this._acceptText != "" ? this._acceptText : lang in WUIDatebox.#constants.texts ? WUIDatebox.#constants.texts[lang].accept : "";
		}
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
				const cyear = document.createElement("div");
				cyear.innerHTML = y;
				cell.appendChild(cyear);
				y++;
				m = 1;
			} else {
				const target = document.createElement("div");
				const targetValue = this._targetValue.replace(/^\d{4}-\d{2}-/, (y -1)+"-"+("0"+m).slice(-2)+"-");
				const targetYear = y -1;
				const targetMonth = m;
				if (targetYear == this._todayYear && targetMonth == this._todayMonth) {
					target.classList.add("today");
				}
				if (targetValue == this._input.value) {
					target.classList.add("selected");
				}
				target.dataset.value = targetValue;
				target.dataset.year = targetYear;
				target.dataset.month = targetMonth;
				target.textContent = this.monthsNames[m -1].substring(0, 3);
				target.addEventListener("click", () => {
					const selected = !Boolean(target.classList.contains("selected"));
					this._months.querySelectorAll("div").forEach(div => {
						if (typeof(div.dataset.value) != "undefined" && div.dataset.value != targetValue) {
							div.classList.remove("selected");
						}
					});
					target.classList.toggle("selected");
					this._period.innerHTML = this._monthsNames[target.dataset.month -1]+" "+target.dataset.year+" <div class='icon up'></div>";
					this._input.value = selected ? targetValue : "";
					this._targetValue = selected ? targetValue : "";
					this._targetDate = selected ? new Date(targetValue+"T00:00:00") : null;
					this.#setDate(this._targetDate);
				});
				cell.appendChild(target);
				m++;
			}
			this._months.appendChild(cell);
		}
	}
	#buildDays() {
		const year = this._targetDate.getFullYear();
		const month = this._targetDate.getMonth() +1;
		const country = this.locales.split("-")[1].toUpperCase();
		const firstwday = parseInt(WUIDatebox.#constants.countryFirstWeekDay[country] || 0);
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
				const target = document.createElement("div");
				const targetValue = this._targetValue.replace(/-\d{2}$/, "-"+("0"+d).slice(-2));
				if (targetValue == this._todayValue) {
					target.classList.add("today");
				}
				if (targetValue == this._input.value) {
					target.classList.add("selected");
				}
				target.dataset.value = targetValue;
				target.textContent = d;
				target.addEventListener("click", () => {
					const selected = !Boolean(target.classList.contains("selected"));
					this._days.querySelectorAll("div").forEach(div => {
						if (typeof(div.dataset.value) != "undefined" && div.dataset.value != targetValue) {
							div.classList.remove("selected");
						}
					});
					target.classList.toggle("selected");
					this._input.value = selected ? targetValue : "";
					this._targetValue = selected ? targetValue : "";
					this._targetDate = selected ? new Date(targetValue+"T00:00:00") : null;
					this.#setDate(this._targetDate);
				});
				cell.appendChild(target);
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
		this._input.value = this._cancelValue;
		this.#setDate(this._cancelDate);
		this.close();
	}
	accept() {
		this.close();
	}
}
WUIDatebox.initClass();
/*
HTML struture:
<div class="wui-datebox">
	<input type="hidden" value="(name)">
	<div class="inputs">
		<input type="text" value="(name)Year">
		<span></span>
		<input type="text" value="(name)Month">
		<span></span>
		<input type="text" value="(name)Day">
	</div>
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
			<div class="cancel"></div>
			<div class="accept"></div>
		</div>
	</div>
</div>
*/