/* WUISelectpicker v0.1 */

class WUISelectpicker {
	static version = "0.1";
	static #constants = {
		icons: {
			open: ""
				+"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>"
				+"<path d='M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z'/>"
				+"</svg>",
			"box-option-check": ""
				+"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor'>"
				+"<path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z'/>"
				+"</svg>"
		},
		texts: {
			de: {
				empty: "leer",
				cancel: "stornieren",
				accept: "akzeptieren"
			},
			en: {
				empty: "empty",
				cancel: "cancel",
				accept: "accept"
			},
			es: {
				empty: "vacío",
				cancel: "cancelar",
				accept: "aceptar"
			}
		}
	}
	#defaults = {
		selector: "",
		value: "",
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
	get value() {
		return this._input.value;
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
			this._input = document.querySelector(value+" > select");
		}
	}
	set value(value) {
		if (typeof(value).toString().match(/string|number/) && this._enabled) {
			this.#setValue(typeof(value) == "string" ? value.trim() : value);
			this.#prepare();
		}
	}
	set lang(value) {
		if (typeof(value) == "string" && value.match(/^\w{2}$/)) {
			this._lang = value.toLowerCase();
		}
	}
	set texts(value) {
		if (typeof(value) == "object" && !Array.isArray(value) && value !== null) {
			Object.keys(WUISelectpicker.#constants.texts.en).forEach(text => {
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
			if (typeof(this._inputText) != "undefined") {
				this._inputText.disabled = !value;
				if (value) {
					this._inputText.removeAttribute("disabled");
				} else {
					this._inputText.setAttribute("disabled", "true");
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
	#getSRCIcon(name, event) {
		const element = this._element || document.documentElement;
		const color = getComputedStyle(element).getPropertyValue("--wui-selectpicker-"+name+"color-"+event).replace(/#/g, "%23").trim();
		const src = getComputedStyle(element).getPropertyValue("--wui-selectpicker-"+name+"icon-src").replace(/currentColor/g, color);
		return src != "" && !src.match(/^(none|url\(\))$/) ? src : "url(\"data:image/svg+xml,"+WUISelectpicker.#constants.icons[name].replace(/currentColor/g, color)+"\")";
	}
	#setValue(value) {
		this._input.value = value;
		this._input.dispatchEvent(new Event("change"));
	}
	#setView(value) {
		const text = Array.from(this._input.options).filter(opt => opt.value == value).map(opt => opt.text)[0] || "";
		this._inputText.value = text;
	}
	#setStyle() {
		const disabled = this._input.disabled;
		if (disabled) {
			this._element.classList.add("disabled");
		} else {
			this._element.classList.remove("disabled");
		}
	}
	addOption(option) {
		if (typeof(this._input) != "undefined") {
			const selected = typeof(option.selected) == "boolean" ? option.selected : false;
			const element = new Option(option.text || "", option.value || "", selected);
			if (typeof(option.className) == "string") {
				element.className = option.className;
			}
			this._input.appendChild(element);
		}
	}
	init() {
		this._inputText = document.createElement("input");
		this._background = document.createElement("div");
		this._box = document.createElement("div");
		this._options = document.createElement("div");
		this._footer = document.createElement("div");
		this._cancelButton = document.createElement("button");
		this._acceptButton = document.createElement("button");
		this._element.appendChild(this._inputText);
		this._element.appendChild(this._background);
		this._element.appendChild(this._box);
		this._element.style.backgroundImage = this.#getSRCIcon("open", this._input.disabled ? "disabled" : "out");
		this._element.addEventListener("click", event => {
			if (event.target.classList.contains("wui-selectpicker")) { // && this._element.offsetWidth - event.offsetX < 30
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
		this._input.querySelectorAll("option").forEach(option => {
			const item = document.createElement("div");
			const icon = document.createElement("div");
			const text = document.createElement("div");
			const selected = Boolean(option.selected);
			const customIcon = Boolean(typeof(option.icon) == "string" && option.icon != "");
			icon.className = "icon "+(customIcon ? option.icon : "check");
			icon.style.maskImage = !customIcon ? this.#getSRCIcon("box-option-check", selected ? "selected" : "out") : "url()";
			text.className = "text "+(option.value == "" ? "empty" : this._selecteableText ? "selecteable" : "");
			text.innerHTML = option.value == "" ? (this.texts.empty != "" ? this.texts.empty : lang in WUISelectpicker.#constants.texts ? WUISelectpicker.#constants.texts[lang].empty : "") : option.text;
			option.classList.forEach(key => {
				text.classList.add(key);
			});
			Object.keys(option.dataset).forEach(key => {
				text.dataset[key] = option.dataset[key];
			});
			item.className = "option"+(selected ? " selected" : "");	
			item.dataset.value = option.value;
			item.appendChild(icon);
			item.appendChild(text);
			item.addEventListener("click", () => {
				const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
				const selected = !Boolean(item.classList.contains("selected"));
				const targetValue = item.dataset.value || "";
				const value = selected ? targetValue : "";
				this._options.scrollTop = item.offsetTop - parseInt(this._options.clientHeight/2);
				this._options.querySelectorAll(".option").forEach(div => {
					if (typeof(div.dataset.value) != "undefined" && div.dataset.value != targetValue) {
						div.classList.remove("selected");
					}
				});
				item.classList.toggle("selected");
				this._targetValue = value;
				this.#setValue(value);
				this.#setView(value);
				if (!mobile) {
					this.close();
				}
			});
			this._options.appendChild(item);
		});
		this._inputText.type = "text";
		this._inputText.name = this._input.name+"Text";
		this._inputText.readonly = true;
		this._inputText.addEventListener("click", () => {this.toggle();});
		this._background.className = "background hidden";
		this._box.className = "box "+this._openDirection+" hidden";
		this._box.appendChild(this._options);
		this._box.appendChild(this._footer);
		this._options.className = "options";
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
		const texts = WUISelectpicker.#constants.texts;
		this._targetValue = this._input.value || "";
		this._cancelValue = this._targetValue;
		this._cancelButton.textContent = this._texts.cancel != "" ? this._texts.cancel : lang in texts ? texts[lang].cancel : "";
		this._acceptButton.textContent = this._texts.accept != "" ? this._texts.accept : lang in texts ? texts[lang].accept : "";
		this.#setView(this._targetValue);
	}
	#loadBox() {
		const value = this._targetValue;
		this._options.querySelectorAll(".option").forEach(div => {
			if (typeof(div.dataset.value) != "undefined") {
				if (div.dataset.value == value) {
					this._options.scrollTop = div.offsetTop - parseInt(this._options.clientHeight/2);
					div.classList.add("selected");
				} else {
					div.classList.remove("selected");
				}
			}
		});
	}
	open() {
		const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
		this._background.classList.remove("hidden");
		this._box.classList.remove("hidden");
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
}
/*
HTML struture:
<div class="wui-selector">
	<select name="(name)">
		<option value="value1">value 1</option>
		...
	</select>
	<input type="text" value="(name)Text" value="">
	<div class="background"></div>
	<div class="box">
		<div class="options">
			<div class="option" data-value="value1">value 1</div>
			...
		</div>
		<div class="footer">
			<button class="cancel"></button>
			<button class="accept"></button>
		</div>
	</div>
</div>
*/