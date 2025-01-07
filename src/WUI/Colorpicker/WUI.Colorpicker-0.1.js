/* WUIColorpicker v0.1 */

class WUIColorpicker {
	static version = "0.1";
	static #constants = {
		colors: {
			grid: [
				["#ffffff", "#ebebeb", "#d6d6d6", "#c2c2c2", "#adadad", "#999999", "#858585", "#707070", "#5c5c5c", "#474747", "#333333", "#000000"],
				["#01374a", "#001d57", "#12013b", "#2f043d", "#3c081a", "#5c0600", "#591d00", "#583300", "#563c00", "#666100", "#4f5503", "#263d0e"],
				["#024d65", "#002f7b", "#1a0a52", "#450c59", "#550f2a", "#831200", "#7b2a00", "#7b4901", "#785800", "#8d8600", "#6f760a", "#38571a"],
				["#056e8f", "#0042a9", "#2c0777", "#61177c", "#79193d", "#b51a00", "#ad3f00", "#a96800", "#a57b02", "#c5bc00", "#9aa50d", "#4d7a27"],
				["#028cb4", "#0056d6", "#371a94", "#7a219e", "#99234f", "#e22400", "#da5100", "#d38302", "#d19d00", "#f5ec00", "#c3d118", "#659d34"],
				["#00a1d8", "#0161fe", "#4d22b2", "#982abd", "#b92d5d", "#ff4013", "#ff6a00", "#ffab02", "#fec701", "#fffb41", "#dbeb38", "#76bb41"],
				["#02c7fc", "#3a87fe", "#5e30eb", "#be37f3", "#e63c7b", "#ff6151", "#ff8648", "#feb43f", "#fecb3e", "#fff76b", "#e3ef65", "#96d35f"],
				["#50d6fc", "#73a7ff", "#864ffe", "#d357fe", "#ee709e", "#ff8c82", "#ffa57d", "#ffc777", "#ffd977", "#fff994", "#e9f28f", "#b1dd8b"],
				["#93e3fd", "#a7c6ff", "#b18cfe", "#e292fe", "#f4a4c0", "#ffb5af", "#ffc5ab", "#ffd9a8", "#fee4a8", "#fffbba", "#f2f7b7", "#cde8b5"],
				["#cbf0ff", "#d3e1ff", "#d9c8fe", "#efcaff", "#f9d3df", "#ffdbd8", "#ffe2d7", "#ffecd4", "#fff3d6", "#fefcdd", "#f9fadb", "#dfedd4"]
			],
			list: {
				// Neutrals
				"#000000": "black",
				"#2f4f4f": "darkSlateGray",
				"#696969": "dimGray",
				"#708090": "slateGray",
				"#808080": "gray",
				"#778899": "lightSlateGray",
				"#a9a9a9": "darkGray",
				"#c0c0c0": "silver",
				"#dcdcdc": "gainsboro",
				"#f5f5f5": "whiteSmoke",
				"#f0f8ff": "aliceBlue",
				"#f8f8ff": "ghostWhite",
				"#ffffff": "white",
				// Reds and pinks
				"#8b0000": "darkRed",
				"#ff0000": "red",
				"#b22222": "fireBrick",
				"#dc143c": "crimson",
				"#ffc0cb": "pink",
				"#ffb6c1": "lightPink",
				"#ff69b4": "hotPink",
				"#ff1493": "deepPink",
				"#db7093": "paleVioletRed",
				"#c71585": "mediumVioletRed",
				// Oranges
				"#ff7f50": "coral",
				"#ff6347": "tomato",
				"#ff4500": "orangeRed",
				"#ff8c00": "darkOrange",
				"#ffa500": "orange",
				"#ffe4c4": "bisque",
				"#ffebcd": "blanchedAlmond",
				"#ffdead": "navajoWhite",
				"#fff5ee": "seashell",
				// Yellows
				"#ffd700": "gold",
				"#ffff00": "yellow",
				"#ffffe0": "lightYellow",
				"#fffacd": "lemonChiffon",
				"#fafad2": "lightGoldenRodYellow",
				"#ffefd5": "papayaWhip",
				"#ffe4b5": "moccasin",
				"#ffdab9": "peachPuff",
				"#fff8dc": "cornsilk",
				// Greens
				"#006400": "darkGreen",
				"#008000": "green",
				"#228b22": "forestGreen",
				"#2e8b57": "seaGreen",
				"#3cb371": "mediumSeaGreen",
				"#32cd32": "limeGreen",
				"#00ff00": "lime",
				"#00ff7f": "springGreen",
				"#00fa9a": "mediumSpringGreen",
				"#90ee90": "lightGreen",
				"#98fb98": "paleGreen",
				"#f0fff0": "honeyDew",
				// Cianes
				"#008b8b": "darkCyan",
				"#008080": "teal",
				"#00ffff": "aqua",
				"#e0ffff": "lightCyan",
				"#00ced1": "darkTurquoise",
				"#40e0d0": "turquoise",
				"#48d1cc": "mediumTurquoise",
				"#f5fffa": "mintCream",
				// Blues
				"#191970": "midnightBlue",
				"#000080": "navy",
				"#00008b": "darkBlue",
				"#0000cd": "mediumBlue",
				"#0000ff": "blue",
				"#1e90ff": "dodgerBlue",
				"#00bfff": "deepSkyBlue",
				"#87ceeb": "skyBlue",
				"#87cefa": "lightSkyBlue",
				"#4682b4": "steelBlue",
				"#b0c4de": "lightSteelBlue",
				"#f0f8ff": "aliceBlue",
				// Violets
				"#4b0082": "indigo",
				"#800080": "purple",
				"#8b008b": "darkMagenta",
				"#9400d3": "darkViolet",
				"#9370db": "mediumPurple",
				"#da70d6": "orchid",
				"#ee82ee": "violet",
				"#dda0dd": "plum",
				"#d8bfd8": "thistle",
				"#e6e6fa": "lavender",
				"#663399": "rebeccaPurple",
				// Browns
				"#8b4513": "saddleBrown",
				"#a0522d": "sienna",
				"#d2691e": "chocolate",
				"#b8860b": "darkGoldenRod",
				"#cd853f": "peru",
				"#bc8f8f": "rosyBrown",
				"#daa520": "goldenRod",
				"#deb887": "burlyWood",
				"#f5deb3": "wheat",
				"#d2b48c": "tan",
				"#faf0e6": "linen",
				// Whites
				"#fffaf0": "floralWhite",
				"#fffff0": "ivory",
				"#fdf5e6": "oldLace",
				"#faebd7": "antiqueWhite",
				"#fff8dc": "cornsilk"
			}
		},
		icons: {
			open: ""
				+"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>"
				+"<path d='M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z'/>"
				+"</svg>",
			empty: ""
				+"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor'>"
				+"<path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'/>"
				+"<path d='M13.654 2.346a.5.5 0 0 1 0 .708l-10.5 10.5a.5.5 0 0 1-.708-.708l10.5-10.5a.5.5 0 0 1 .708 0Z'/>"
				+"</svg>"
		},
		texts: {
			de: {
				empty: "leer",
				grid: "netz",
				list: "liste",
				cancel: "stornieren",
				accept: "akzeptieren"
			},
			en: {
				empty: "empty",
				grid: "grid",
				list: "list",
				cancel: "cancel",
				accept: "accept"
			},
			es: {
				empty: "vacío",
				grid: "grilla",
				list: "lista",
				cancel: "cancelar",
				accept: "aceptar"
			}
		}
	}
	#defaults = {
		selector: "",
		value: "",
		emptyValue: "#000001",
		lang: "en",
		texts: {},
		openDirection: "down",
		enabled: true,
		onOpen: null,
		onChange: null
	};
	constructor (properties) {
		Object.keys(this.#defaults).forEach(prop => {
			this[prop] = typeof(properties) != "undefined" && prop in properties ? properties[prop] : this.#defaults[prop];
		});
	}
	get selector() {
		return this._selector;
	}
	get type() {
		return this.constructor.name;
	}
	get value() {
		return this._input.value == this._emptyValue ? "" : this._input.value;
	}
	get emptyValue() {
		return this._emptyValue;
	}
	get lang() {
		return this._lang;
	}
	get texts() {
		return this._texts;
	}
	get openDirection() {
		return this._openDirection;
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
			this._input = document.querySelector(value+" > input[type='color']");
		}
	}
	set value(value) {
		if (typeof(value) == "string" && (value.match(/^#([0-9A-F]{3}){1,2}$/i) || Object.values(WUIColorpicker.#constants.colors.list).map(x => x.toLowerCase()).indexOf(value.toLowerCase()) > 0) && this._enabled) {
			this.#setValue(value.trim().toLowerCase());
			this.#prepare();
		}
	}
	set emptyValue(value) {
		if (typeof(value) == "string" && value.match(/^#([0-9A-F]{3}){1,2}$/i)) {
			this._emptyValue = value.toLowerCase();
		}
	}
	set lang(value) {
		if (typeof(value) == "string" && value.match(/^\w{2}$/)) {
			this._lang = value.toLowerCase();
		}
	}
	set texts(value) {
		if (typeof(value) == "object" && !Array.isArray(value) && value !== null) {
			Object.keys(WUIColorpicker.#constants.texts.en).forEach(text => {
				if (!(text in value)) {
					value[text] = "";
				}
			});
			this._texts = value;
		}
	}
	set openDirection(value) {
		if (typeof(value) == "string" && value.match(/^(up|down)$/i)) {
			this._openDirection = value.toLowerCase();
		}
	}
	set enabled(value) {
		if (typeof(value) == "boolean") {
			this._enabled = value;
			this._input.disabled = !value;
			if (typeof(this._button) != "undefined") {
				this._button.disabled = !value;
				if (value) {
					this._button.removeAttribute("disabled");
				} else {
					this._button.setAttribute("disabled", "true");
				}
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
	getFocusableElements() {
		return [this._button];
	}
	getInput() {
		return this._input;
	}
	#getSRCIcon(name, event) {
		const rgb2Hex = (rgba) => "#"+rgba.map((x, i) => {return ("0"+parseInt(i == 3 ? 255*x : x).toString(16)).slice(-2);}).join("");
		const prepareColor = (color) => {
			return color.replace(/\s+/g, "").match(/\d+\,\d+\,\d+/) ? rgb2Hex(color.replace(/\s+/g, "").replace(/^rgba?\((\d+\,\d+\,\d+)(\,[\d.]+)?\)$/, "$1$2").split(",")) : color;
		}
		const element = this._element || document.documentElement;
		const baseColor = getComputedStyle(element).getPropertyValue("--wui-colorpicker-"+name+"color-"+event);
		const hexColor = prepareColor(baseColor).replace(/#/g, "%23").trim();
		const src = getComputedStyle(element).getPropertyValue("--wui-colorpicker-"+name+"icon-src").replace(/currentColor/g, hexColor);
		return src != "" && !src.match(/^(none|url\(\))$/) ? src : "url(\"data:image/svg+xml,"+WUIColorpicker.#constants.icons[name].replace(/currentColor/g, hexColor)+"\")";
	}
	#setValue(value) {
		const list = WUIColorpicker.#constants.colors.list;
		const inverse = Object.fromEntries(Object.entries(list).map(([code, name]) => [name.toLowerCase(), code]));
		value = value.toLowerCase();
		this._input.value = (value in inverse ? inverse[value] : (value || this._emptyValue)).trim();
		this._input.dispatchEvent(new Event("change"));
	}
	#setView(value) {
		const list = WUIColorpicker.#constants.colors.list;
		const empty = Boolean(value == "" || value == this._emptyValue);
		const bgcolor = empty ? "transparent" : value;
		const bgimage = empty ? this.#getSRCIcon("empty", "out") : "url()";
		this._buttonColor.style.backgroundColor = bgcolor;
		this._buttonColor.style.backgroundImage = bgimage;
		this._previewColor.style.backgroundColor = bgcolor;
		this._previewColor.style.backgroundImage = bgimage;
		this._previewText.innerHTML = empty ? WUIColorpicker.#constants.texts[this._lang].empty : value in list ? list[value] : value;
		if (empty) {
			this._buttonColor.classList.add("empty");
			this._previewColor.classList.add("empty");
			this._previewText.classList.add("empty");
		} else {
			this._buttonColor.classList.remove("empty");
			this._previewColor.classList.remove("empty");
			this._previewText.classList.remove("empty");
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
	init() {
		const itemOnClick = (mode, item) => {
			const selected = !Boolean(item.classList.contains("selected"));
			const targetValue = item.dataset.value || "";
			const value = selected ? targetValue : "";
			this["_"+mode].querySelectorAll(mode == "list" ? ".option" : ".color").forEach(div => {
				if (typeof(div.dataset.value) != "undefined" && div.dataset.value != targetValue) {
					div.classList.remove("selected");
				}
			});
			item.classList.toggle("selected");
			this._targetValue = value;
			this.#setValue(value);
			this.#setView(value);
		}
		this._button = document.createElement("button");
		this._buttonColor = document.createElement("div");
		this._background = document.createElement("div");
		this._box = document.createElement("div");
		this._header = document.createElement("div");
		this._gridTab = document.createElement("div");
		this._listTab = document.createElement("div");
		this._grid = document.createElement("div");
		this._list = document.createElement("div");
		this._preview = document.createElement("div");
		this._previewColor = document.createElement("div");
		this._previewText = document.createElement("div");
		this._footer = document.createElement("div");
		this._cancelButton = document.createElement("button");
		this._acceptButton = document.createElement("button");
		this._element.appendChild(this._button);
		this._element.appendChild(this._background);
		this._element.appendChild(this._box);
		this._element.style.backgroundImage = this.#getSRCIcon("open", this._input.disabled ? "disabled" : "out");
		this._element.addEventListener("click", event => {
			if (event.target.classList.contains("button") || (event.target.classList.contains("color") && event.target.parentNode.classList.contains("button"))) {
				this.toggle();
			}
		});
		["mouseover", "mouseout", "focus", "blur"].forEach(type => {
			const event = this._input.disabled ? "disabled" : type == "blur" ? "out" : type.replace(/mouse/, "");
			this._element.addEventListener(type, () => {
				this._element.style.backgroundImage = this.#getSRCIcon("open", event);
			});
		});
		if (this._input.getAttribute("style") != null) {
			this._input.removeAttributeNode(this._input.getAttributeNode("style"));
		}
		this._input.addEventListener("change", () => {
			if (typeof(this._onChange) == "function") {
				this._onChange(this._input.value);
			}
		});
		WUIColorpicker.#constants.colors.grid.forEach(row => {
			row.forEach(value => {
				const item = document.createElement("div");
				const selected = Boolean(this._input.value.toLowerCase() == value.toLowerCase());
				item.className = "color"+(selected ? " selected" : "");
				item.style.backgroundColor = value;
				item.dataset.value = value;
				item.addEventListener("click", () => {itemOnClick("grid", item);});
				this._grid.appendChild(item);
			});
		});
		Object.entries(WUIColorpicker.#constants.colors.list).forEach(([value, name]) => {
			const item = document.createElement("div");
			const color = document.createElement("div");
			const text = document.createElement("div");
			const selected = Boolean(this._input.value.toLowerCase() == value.toLowerCase());
			color.className = "color";
			color.style.backgroundColor = value;
			text.className = "text";
			text.textContent = name.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();
			item.className = "option "+name+(selected ? " selected" : "");
			item.dataset.value = value.toLowerCase();
			item.appendChild(color);
			item.appendChild(text);
			item.addEventListener("click", () => {itemOnClick("list", item);});
			this._list.appendChild(item);
		});
		this._button.className = "button";
		this._button.appendChild(this._buttonColor);
		this._buttonColor.className = "color";
		this._background.className = "background hidden";
		this._box.className = "box "+this._openDirection+" hidden";
		this._box.appendChild(this._header);
		this._box.appendChild(this._grid);
		this._box.appendChild(this._list);
		this._box.appendChild(this._preview);
		this._box.appendChild(this._footer);
		this._header.className = "header";
		this._header.appendChild(this._gridTab);
		this._header.appendChild(this._listTab);
		this._gridTab.className = "tab grid selected";
		this._gridTab.addEventListener("click", () => {this.selectMode("grid");});
		this._listTab.className = "tab list";
		this._listTab.addEventListener("click", () => {this.selectMode("list");});
		this._grid.className = "grid";
		this._list.className = "list hidden";
		this._preview.className = "preview";
		this._preview.appendChild(this._previewColor);
		this._preview.appendChild(this._previewText);
		this._previewColor.className = "color";
		this._previewText.className = "text";
		this._footer.className = "footer";
		this._footer.appendChild(this._cancelButton);
		this._footer.appendChild(this._acceptButton);
		this._cancelButton.className = "cancel";
		this._cancelButton.addEventListener("click", () => {this.cancel();});
		this._acceptButton.className = "accept";
		this._acceptButton.addEventListener("click", () => {this.accept();});
		this.#prepare();
	}
	#prepare() {
		const lang = this._lang;
		const texts = WUIColorpicker.#constants.texts;
		this._targetValue = this._input.value || "";
		this._cancelValue = this._targetValue;
		this._gridTab.textContent = this._texts.grid != "" ? this._texts.grid : lang in texts ? texts[lang].grid : "";
		this._listTab.textContent = this._texts.list != "" ? this._texts.list : lang in texts ? texts[lang].list : "";
		this._cancelButton.textContent = this._texts.cancel != "" ? this._texts.cancel : lang in texts ? texts[lang].cancel : "";
		this._acceptButton.textContent = this._texts.accept != "" ? this._texts.accept : lang in texts ? texts[lang].accept : "";
		this.#setView(this._targetValue);
	}
	#loadBox() {
		const value = this._targetValue;
		this._grid.querySelectorAll(".color").forEach(div => {
			if (typeof(div.dataset.value) != "undefined") {
				if (div.dataset.value == value) {
					div.classList.add("selected");
					this.selectMode("grid");
				} else {
					div.classList.remove("selected");
				}
			}
		});
		this._list.querySelectorAll(".option").forEach(div => {
			if (typeof(div.dataset.value) != "undefined") {
				if (div.dataset.value == value) {
					div.classList.add("selected");
					this.selectMode("list");
				} else {
					div.classList.remove("selected");
				}
			}
		});
	}
	open() {
		const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
		this._background.classList.remove("hidden");
		this._box.className = "box "+this._openDirection;
		this._box.style.marginBottom = !mobile && this._openDirection == "up" ? this._element.clientHeight+"px" : "auto";
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
		if (this._box.classList.contains("hidden")) {
			this.open();
		} else {
			this.close();
		}
	}
	selectMode(mode) {
		["grid", "list"].forEach(name => {
			const tab = this["_"+name+"Tab"];
			const content = this["_"+name];
			if (name == mode) {
				tab.classList.add("selected");
				content.classList.remove("hidden");
			} else {
				tab.classList.remove("selected");
				content.classList.add("hidden");
			}
		});
		if (mode == "list") {
			const list = WUIColorpicker.#constants.colors.list;
			const value = this._input.value || "";
			if (value in list) {
				const option = this._list.querySelector(".option."+list[value]);
				this._list.scrollTop = option.offsetTop - parseInt((this._list.clientHeight - option.clientHeight)/2);
			} else {
				this._list.scrollTop = 0;
			}
		}
	}
	cancel() {
		this.#setValue(this._cancelValue);
		this.#setView(this._cancelValue);
		this.close();
	}
	accept() {
		this.close();
	}
	isOpen() {
		return !Boolean(this._box.classList.contains("hidden"));
	}
	isEmpty() {
		return this._input.value == "";
	}
	isValid() {
		return this._input.value.match(/^#([0-9A-F]{3}){1,2}$/i);
	}
}
/*
HTML struture:
<div class="wui-selector">
	<input type="color" value="(name)" value="">
	<button class="button">
		<div class="color"></div>
	</button>
	<div class="background"></div>
	<div class="box">
		<div class="header"></div>
		<div class="grid">
			<div class="color" data-value="value1"></div>
			...
		</div>
		<div class="list">
			<div class="option" data-value="value1">
				<div class="color"></div>
				<div class="text"></div>
			</div>
			...
		</div>
		<div class="preview">
			<div class="color"></div>
			<div class="text"></div>
		</div>
		<div class="footer">
			<button class="cancel"></button>
			<button class="accept"></button>
		</div>
	</div>
</div>
*/