/* WUIDatebox v0.1 */

class WUIDatebox {
	static version = "0.1";
	static constants = {
		locales: "ar-SA bn-BD bn-IN cs-CZ da-DK de-AT de-CH de-DE el-GR en-AU en-CA en-GB en-IE en-IN en-NZ en-US en-ZA es-AR es-CL es-CO es-ES es-MX es-US fi-FI fr-BE fr-CA fr-CH fr-FR he-IL hi-IN hu-HU id-ID it-CH it-IT ja-JP ko-KR nl-BE nl-NL no-NO pl-PL pt-BR pt-PT ro-RO ru-RU sk-SK sv-SE ta-IN ta-LK th-TH tr-TR zh-CN zh-HK zh-TW",
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
		enabled: true,
		onChange: null
	};
	static initClass() {
		Object.entries(this.constants.firstWeekDayCountry).forEach(([countries, wday]) => {
			countries.split(/\s+/).forEach(code => {
				this.constants.countryFirstWeekDay[code] = wday;
			});
		});
		["out", "focus", "disabled"].forEach(event => {
			const color = getComputedStyle(document.documentElement).getPropertyValue("--wui-datebox-pickercolor-"+event).replace(/#/g, "%23").trim();
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
		if (typeof(value) == "string" && value.match(/^[a-z]{2}-[a-z]{2}$/i) && WUIDatebox.constants.locales.toLowerCase().split(/\s+/).indexOf(value.toLowerCase()) > -1) {
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
	calendar() {
		const code = this.locales.split("-")[1].toUpperCase();
		const firstwday = WUIDatebox.constants.countryFirstWeekDay[code];
		for (let i=0; i<7; i++) {
			const day = document.createElement("div");
			this._week.appendChild(day);
		}
	}
	init() {
		//let now = Date.now();
		//let day = new Date(now).toLocaleString("es-cl", {weekday: "short"});
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
		this._head.className = "head";
		this._head.appendChild(this._period);
		this._body.className = "body";
		this._body.appendChild(this._week);
		this._body.appendChild(this._days);
		this._footer.className = "footer";
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
	<input type="date" value="">
	<div class="calendar">
		<div class="head">
			<div class="period"></div>
		</div>
		<div class="body">
			<div class="week"></div>
			<div class="days"></div>
		</div>
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