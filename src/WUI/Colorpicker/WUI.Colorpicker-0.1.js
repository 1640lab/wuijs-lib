/* WUIColorpicker v0.1 */

class WUIColorpicker {
	static version = "0.1";
	static #constants = {
		texts: {
			de: {
				cancel: "stornieren",
				accept: "akzeptieren"
			},
			en: {
				cancel: "cancel",
				accept: "accept"
			},
			es: {
				cancel: "cancelar",
				accept: "aceptar"
			}
		},
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
			list: [
				"black",
				"darkSlateGray",
				"slateGrey",
				"lightSlateGrey",
				"aliceBlue",
				"white",
				"aqua",
				"aquamarine",
				"darkTurquoise",
				"deepSkyBlue",
				"dodgerBlue",
				"cornflowerBlue",
				"rebeccaPurple",
				"darkViolet",
				"purple",
				"deepPink",
				"red",
				"coral",
				"orange",
				"gold",
				"yellow"
			]
		}
	}
	#defaults = {
		selector: "",
		value: "",
		lang: "en",
		cancelText: "",
		acceptText: "",
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
	get value() {
		return this._input.value;
	}
	get lang() {
		return this._lang;
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
			this._input = document.querySelector(value+" > input[type='color']");
		}
	}
	set value(value) {
		if (typeof(value).toString() == "string" && this._enabled) {
			this.#setValue(value.trim());
			this.#prepare();
		}
	}
	set lang(value) {
		if (typeof(value) == "string" && value.match(/^\w{2}$/)) {
			this._lang = value.toLowerCase();
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
	getInput() {
		return this._input;
	}
	#setValue(value) {
		this._input.value = value.trim();
		this._input.dispatchEvent(new Event("change"));
	}
	#setView(value) {
		if (value == "") {
			this._view.style.backgroundColor = "transparent";
			this._view.classList.add("empty");
		} else {
			this._view.style.backgroundColor = value;
			this._view.classList.remove("empty");
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
		const backgroundImage = (name, event) => {
			const element = this._input || this._element || document.documentElement;
			const color = getComputedStyle(element).getPropertyValue("--wui-colorpicker-"+name+"color-"+event).replace(/#/g, "%23").trim();
			const image = getComputedStyle(element).getPropertyValue("--wui-colorpicker-"+name+"image-src").replace(/currentColor/g, color);
			return image;
		}
		const onClick = (value) => {
			const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
			this._targetValue = value;
			this.#setValue(value);
			this.#setView(value);
			if (!mobile) {
				this.close();
			}
		}
		this._button = document.createElement("button");
		this._view = document.createElement("div");
		this._background = document.createElement("div");
		this._box = document.createElement("div");
		this._header = document.createElement("div");
		this._grid = document.createElement("div");
		this._list = document.createElement("div");
		this._preview = document.createElement("div");
		this._footer = document.createElement("div");
		this._cancel = document.createElement("button");
		this._accept = document.createElement("button");
		this._element.appendChild(this._button);
		this._element.appendChild(this._background);
		this._element.appendChild(this._box);
		this._element.style.backgroundImage = backgroundImage("picker", this._input.disabled ? "disabled" : "out");
		this._element.addEventListener("click", event => {
			if (event.target.tagName.toLowerCase() == "button") {
				this.toggle();
			}
		});
		["mouseover", "mouseout", "focus", "blur"].forEach(type => {
			const pickerType = this._input.disabled ? "disabled" : type == "blur" ? "out" : type.replace(/mouse/, "");
			this._element.addEventListener(type, () => {
				this._element.style.backgroundImage = backgroundImage("picker", pickerType);
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
			row.forEach(color => {
				const item = document.createElement("div");
				const selected = Boolean(this._input.value.toLowerCase() == color.toLowerCase());
				item.className = "color"+(selected ? " selected" : "");
				item.style.backgroundColor = color;
				item.dataset.value = color;
				item.addEventListener("click", () => {
					const selected = !Boolean(item.classList.contains("selected"));
					const targetValue = item.dataset.value || "";
					const value = selected ? targetValue : "";
					this._grid.querySelectorAll(".color").forEach(div => {
						if (typeof(div.dataset.value) != "undefined" && div.dataset.value != targetValue) {
							div.classList.remove("selected");
						}
					});
					item.classList.toggle("selected");
					onClick(value);
				});
				this._grid.appendChild(item);
			});
		});
		WUIColorpicker.#constants.colors.list.forEach(color => {
			const item = document.createElement("div");
			const icon = document.createElement("div");
			const text = document.createElement("div");
			const selected = Boolean(this._input.value.toLowerCase() == color.toLowerCase());
			icon.className = "icon";
			icon.style.backgroundColor = color;
			text.className = "text";
			text.textContent = color;
			item.className = "option"+(selected ? " selected" : "");
			item.dataset.value = color;
			item.appendChild(icon);
			item.appendChild(text);
			item.addEventListener("click", () => {
				const selected = !Boolean(item.classList.contains("selected"));
				const targetValue = item.dataset.value || "";
				const value = selected ? targetValue : "";
				this._list.scrollTop = item.offsetTop - parseInt(this._list.clientHeight/2);
				this._list.querySelectorAll(".option").forEach(div => {
					if (typeof(div.dataset.value) != "undefined" && div.dataset.value != targetValue) {
						div.classList.remove("selected");
					}
				});
				item.classList.toggle("selected");
				onClick(value);
			});
			this._list.appendChild(item);
		});
		this._view.className = "view";
		this._button.appendChild(this._view);
		this._background.className = "background hidden";
		this._box.className = "box hidden";
		this._box.appendChild(this._header);
		this._box.appendChild(this._grid);
		this._box.appendChild(this._list);
		this._box.appendChild(this._footer);
		this._header.className = "header";
		this._grid.className = "grid";
		this._list.className = "list hidden";
		this._footer.className = "footer";
		this._footer.appendChild(this._cancel);
		this._footer.appendChild(this._accept);
		this._cancel.className = "cancel";
		this._cancel.addEventListener("click", () => {this.cancel();});
		this._accept.className = "accept";
		this._accept.addEventListener("click", () => {this.accept();});
		this.#prepare();
	}
	#prepare() {
		const lang = this._lang;
		this._targetValue = this._input.value || "";
		this._cancelValue = this._targetValue;
		this._cancel.textContent = this._cancelText != "" ? this._cancelText : lang in WUIColorpicker.#constants.texts ? WUIColorpicker.#constants.texts[lang].cancel : "";
		this._accept.textContent = this._acceptText != "" ? this._acceptText : lang in WUIColorpicker.#constants.texts ? WUIColorpicker.#constants.texts[lang].accept : "";
		this.#setView(this._targetValue);
	}
	#loadBox() {
		const value = this._targetValue;
		this._grid.querySelectorAll(".color").forEach(div => {
			if (typeof(div.dataset.value) != "undefined") {
				if (div.dataset.value == value) {
					div.classList.add("selected");
				} else {
					div.classList.remove("selected");
				}
			}
		});
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
	cancel() {
		this.#setValue(this._cancelValue);
		this.#setView(this._cancelValue);
		this.close();
	}
	accept() {
		this.close();
	}
}
/*
HTML struture:
<div class="wui-selector">
	<input type="color" value="(name)" value="">
	<button class="background">
		<div class="view"></div>
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
				<div class="icon"></div>
				<div class="text"></div>
			</div>
			...
		</div>
		<div class="preview">
			<div class="color"></div>
			<div class="code"></div>
		</div>
		<div class="footer">
			<button class="cancel"></button>
			<button class="accept"></button>
		</div>
	</div>
</div>
*/