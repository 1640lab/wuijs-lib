/* WUISelectbox v0.1 */

class WUISelectbox {
	static version = "0.1";
	static #constants = {
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
			this._input = document.querySelector(value+" > select");
		}
	}
	set value(value) {
		if (typeof(value) == "string" && this._enabled) {
			this._input.value = value;
			this.#load();
		}
	}
	set lang(value) {
		if (typeof(value) == "string" && value.match(/^\w{2}$/)) {
			this._lang = value.toLocaleLowerCase();
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
			if (typeof(this._inputText) != "undefined") {
				this.#setInputEnable(this._inputText, value);
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
	#setText(value) {
		const text = this._input.options.filter(opt => {opt.value == value}).map(opt => {opt.text})[0] || "";
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
			const element = this._input || this._element || document.documentElement;
			const color = getComputedStyle(element).getPropertyValue("--wui-selectbox-"+name+"color-"+event).replace(/#/g, "%23").trim();
			const image = getComputedStyle(element).getPropertyValue("--wui-selectbox-"+name+"image-src").replace(/currentColor/g, color);
			return image;
		}
		this._inputText = document.createElement("input");
		this._box = document.createElement("div");
		this._options = document.createElement("div");
		this._footer = document.createElement("div");
		this._cancel = document.createElement("div");
		this._accept = document.createElement("div");
		this._element.appendChild(this._inputText);
		this._element.appendChild(this._box);
		this._element.style.backgroundImage = bgImage("picker", this._input.disabled ? "disabled" : "out");
		this._element.addEventListener("click", event => {
			if (event.target.classList.contains("wui-selectbox") && this._element.offsetWidth - event.offsetX < 30) {
				this.toggle();
			}
		});
		["mouseover", "mouseout", "focus", "blur"].forEach(type => {
			const pickerType = this._input.disabled ? "disabled" : type == "blur" ? "out" : type.replace(/mouse/, "");
			this._element.addEventListener(type, () => {
				this._element.style.backgroundImage = bgImage("picker", pickerType);
			});
		});
		this._input.type = "hidden";
		this._input.setAttribute("readonly");
		this._input.removeAttributeNode(this._input.getAttributeNode("style"));
		this._input.querySelectorAll("option").forEach(option => {
			const options = this._options;
			const target = document.createElement("div");
			target.dataset.value = option.value;
			target.textContent = option.text;
			target.addEventListener("click", () => {
				const selected = !Boolean(target.classList.contains("selected"));
				const targetValue = target.dataset.value || "";
				options.scrollTop = target.offsetTop - parseInt(options.clientHeight/2);
				options.querySelectorAll("div").forEach(div => {
					if (typeof(div.dataset.value) != "undefined" && div.dataset.value != value) {
						div.classList.remove("selected");
					}
				});
				target.classList.toggle("selected");
				this._input.value = selected ? targetValue : "";
				this._targetValue = selected ? targetValue : "";
				this.#setText(this._targetValue);
			});
			options.appendChild(target);
		});
		this._input.addEventListener("change", () => {
			if (typeof(this._onChange) == "function") {
				this._onChange(this._input.value);
			}
		});
		this._inputText.type = "text";
		this._inputText.name = this._input.name+"Text";
		this._inputText.addEventListener("click", () => {this.toggle();});
		this._box.className = "box hidden";
		this._box.appendChild(this._options);
		this._box.appendChild(this._footer);
		this._options.className = "options";
		this._footer.className = "footer";
		this._footer.appendChild(this._cancel);
		this._footer.appendChild(this._accept);
		this._cancel.className = "cancel";
		this._cancel.addEventListener("click", () => {this.cancel();});
		this._accept.className = "accept";
		this._accept.addEventListener("click", () => {this.accept();});
		this.#load();
	}
	open() {
		this.#load();
		this.#loadTexts();
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
	#load() {
		this._targetValue = this._input.value || "";
		this._cancelValue = this._input.value;
		this.#setText(this._targetValue);
	}
	#loadTexts() {
		this._cancel.textContent = this._cancelText != "" ? this._cancelText : lang in WUISelectbox.#constants.texts ? WUISelectbox.#constants.texts[lang].cancel : "";
		this._accept.textContent = this._acceptText != "" ? this._acceptText : lang in WUISelectbox.#constants.texts ? WUISelectbox.#constants.texts[lang].accept : "";
	}
	cancel() {
		this._input.value = this._cancelValue;
		this.#setText(this._cancelValue);
	}
	accept() {
		this.close();
	}
}
/*
HTML struture:
<div class="wui-selector">
	<select value="(name)">
		<option value="value1">value 1</option>
		...
	</select>
	<input type="text" value="(name)Text" value="">
	<div class="box">
		<div class="options">
			<div data-value="value1">value 1</div>
			...
		</div>
		<div class="footer">
			<div class="cancel"></div>
			<div class="accept"></div>
		</div>
	</div>
</div>
*/