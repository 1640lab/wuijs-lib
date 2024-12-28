/* WUISelectpicker v0.1 */

class WUISelectpicker {
	static version = "0.1";
	static #constants = {
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
		emptyText: "",
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
	get emptyText() {
		return thie._emptyText;
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
	set emptyText(value) {
		if (typeof(value) == "string") {
			this._emptyText = value;
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
	init() {
		const backgroundImage = (name, event) => {
			const element = this._input || this._element || document.documentElement;
			const color = getComputedStyle(element).getPropertyValue("--wui-selectpicker-"+name+"color-"+event).replace(/#/g, "%23").trim();
			const image = getComputedStyle(element).getPropertyValue("--wui-selectpicker-"+name+"image-src").replace(/currentColor/g, color);
			return image;
		}
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
		this._element.style.backgroundImage = backgroundImage("picker", this._input.disabled ? "disabled" : "out");
		this._element.addEventListener("click", event => {
			if (event.target.classList.contains("wui-selectpicker")) { // && this._element.offsetWidth - event.offsetX < 30
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
		this._input.querySelectorAll("option").forEach(option => {
			const item = document.createElement("div");
			const icon = document.createElement("div");
			const text = document.createElement("div");
			const selected = Boolean(option.selected);
			icon.className = "icon "+(typeof(option.icon) == "string" && option.icon != "" ? option.icon : "wui-svgicon check-line");
			text.className = "text "+(this._selecteableText ? "selecteable" : "");
			text.innerHTML = option.value == "" ? "<i class='empty'>"+(this._emptyText != "" ? this._emptyText : lang in WUISelectpicker.#constants.texts ? WUISelectpicker.#constants.texts[lang].empty : "")+"</i>" : option.text;
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
		this._box.className = "box hidden";
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
		this._targetValue = this._input.value || "";
		this._cancelValue = this._targetValue;
		this._cancelButton.textContent = this._cancelText != "" ? this._cancelText : lang in WUISelectpicker.#constants.texts ? WUISelectpicker.#constants.texts[lang].cancel : "";
		this._acceptButton.textContent = this._acceptText != "" ? this._acceptText : lang in WUISelectpicker.#constants.texts ? WUISelectpicker.#constants.texts[lang].accept : "";
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
		this._background.classList.remove("hidden");
		this._box.classList.remove("hidden");
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