/* WUILightboxSelector v0.1 */

class WUILightboxSelector extends WUILightbox {
	static version = "0.1";
	constructor (properties) {
		super(properties);
		this._value = "";
		this._options = [];
		this._multiple = false;
		this._emptyText = "";
		this._selecteableText = false;
		this._maxScreenWidth = 600;
		this._acceptButton = new WUIButton({selector: properties.selector+" > .box > .footer > button.submit"});
		this._cancelButton = new WUIButton({selector: properties.selector+" > .box > .footer > button.cancel"});
		this._displayAccept = true;
		this._displayCancel = true;
		this._onSelect = null;
		this._onAccept = null;
		this._onCancel = null;
		super.setProperties(properties);
	}
	get value() {
		return this._value;
	}
	get options() {
		return this._options;
	}
	get multiple() {
		return this._multiple;
	}
	get emptyText() {
		return this._emptyText;
	}
	get selecteableText() {
		return this._selecteableText;
	}
	get maxScreenWidth() {
		return this._maxScreenWidth;
	}
	get acceptButton() {
		return this._acceptButton;
	}
	get cancelButton() {
		return this._cancelButton;
	}
	get displayAccept() {
		return this._displayAccept;
	}
	get displayCancel() {
		return this._displayCancel;
	}
	get onSelect() {
		return this._onSelect;
	}
	get onAccept() {
		return this._onAccept;
	}
	get onCancel() {
		return this._onCancel;
	}
	set value(value) {
		super.setProperty("value", value, "string");
	}
	set emptyText(value) {
		super.setProperty("emptyText", value, "string");
	}
	set selecteableText(value) {
		super.setProperty("selecteableText", value, "boolean");
	}
	set options(value) {
		super.setProperty("options", value, "array");
	}
	set multiple(value) {
		super.setProperty("multiple", value, "boolean");
	}
	set maxScreenWidth(value) {
		super.setProperty("maxScreenWidth", value, "integer");
	}
	set acceptButton(value) {
		super.setProperty("acceptButton", value, "WUIButton");
	}
	set cancelButton(value) {
		super.setProperty("cancelButton", value, "WUIButton");
	}
	set displayAccept(value) {
		super.setProperty("displayAccept", value, "boolean");
	}
	set displayCancel(value) {
		super.setProperty("displayCancel", value, "boolean");
	}
	set onSelect(value) {
		super.setProperty("onSelect", value, "function");
	}
	set onAccept(value) {
		super.setProperty("onAccept", value, "function");
	}
	set onCancel(value) {
		super.setProperty("onCancel", value, "function");
	}
	build() {
		if (this._box == null) {
			const box = document.createElement("div");
			const options = document.createElement("div");
			const footer = document.createElement("div");
			const cancelButton = document.createElement("button");
			const acceptButton = document.createElement("button");
			this._element.classList.add("wui-lightbox", "selector", "mobile", "priority");
			this._element.appendChild(this._box);
			box.classList.add("box");
			box.appendChild(options);
			box.appendChild(footer);
			options.classList.add("options");
			footer.classList.add("footer");
			footer.appendChild(cancelButton);
			footer.appendChild(acceptButton);
			cancelButton.classList.add("wui-button", "cancel", "wui-language", "flat");
			acceptButton.classList.add("wui-button", "submit", "wui-language");
		}
	}
	init() {
		super.init();
		this._acceptButton.onClick = () => {
			let indexes = [];
			let values = [];
			let texts = [];
			this._box.querySelectorAll(".option.selected").forEach(option => {
				indexes.push(option.dataset.index);
				values.push(option.dataset.value);
				texts.push(option.dataset.text);
			});
			this._value = values.join(",");
			if (this._input != null) {
				this._input.value = this._value;
				this._input.dispatchEvent(new Event("change"));
			}
			if (typeof(this._onAccept) == "function") {
				this._onAccept(this._value, indexes.join(","), texts.join(","));
			}
			this.close();
		};
		this._acceptButton.init();
		this._cancelButton.onClick = () => {
			if (typeof(this._onCancel) == "function") {
				this._onCancel();
			}
			this.close();
		};
		this._cancelButton.init();
	}
	prepareInput(input, options = {}) {
		if (typeof(input) == "object" && input instanceof HTMLElement && input.tagName.toLowerCase() == "select") {
			const defaults = {
				emptyText: this._emptyText,
				direction: "ltr",
				force: false
			};
			Object.entries(defaults).forEach(([name, value]) => {
				if (typeof(options[name]) == "undefined") {
					options[name] = value;
				}
			});
			["touchstart", "mousedown"].forEach(type => {
				input.style.position = "relative";
				input.style.zIndex = 1;
				input.addEventListener(type, (event) => {
					const screenWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
					if ((type == "touchstart" && screenWidth < this._maxScreenWidth) || options.force) {
						const values = input.value.split(",");
						event.preventDefault();
						this._input = input;
						this._value = input.value;
						this._options = [];
						this._selecteableText = false;
						this._input.setAttribute("dir", options.direction);
						this._input.querySelectorAll("option").forEach(option => {
							option.style.display = "none";
							this._options.push({
								icon: null,
								text: option.text || option.emptyText || "",
								value: option.value || "",
								selected: values.indexOf(option.value) > -1 ? true : false
							});
						});
						this._displayAccept = true;
						this._displayCancel = true;
						this.open();
					} else {
						input.setAttribute("dir", "ltr");
						input.querySelectorAll("option").forEach(option => {
							option.style.display = "block";
						});
					}
				});
			});
		}
	}
	open() {
		const options = this._box.querySelector(".options");
		let index = 0;
		/*if (this.multiple) {
			options.classList.add("multiple");
		} else {
			options.classList.remove("multiple");
		}*/
		options.innerHTML = "";
		if (Array.isArray(this._options)) {
			this._options.forEach((option, i) => {
				const item = document.createElement("div");
				const icon = document.createElement("div");
				const text = document.createElement("div");
				/*const checker = this.multiple ? document.createElement("div") : null;*/
				const enabled = typeof(option.enabled) == "boolean" && !option.enabled ? false : true;
				const selected = Boolean(option.selected);
				icon.className = "icon "+(typeof(option.icon) == "string" && option.icon != "" ? option.icon : "wui-svgicon check-line");
				text.className = "text "+(this._selecteableText ? "selecteable" : "");
				text.innerHTML = option.value == "" ? "<i class='empty'>"+this._emptyText+"</i>" : option.text;
				item.className = "option"+(selected ? " selected" : "");
				item.dataset.index = i;
				item.dataset.value = option.value;
				item.dataset.text = option.text;
				item.addEventListener("click", () => {
					if (enabled) {
						const index = item.dataset.index;
						const value = item.dataset.value;
						this._box.querySelectorAll(".option").forEach((opt, j) => {
							if (opt.dataset.value == value) {
								opt.classList.add("selected");
								this._options[j].selected = true;
							} else {
								opt.classList.remove("selected");
								opt.dataset.selected = false;
							}
						});
						if (typeof(this._onSelect) == "function") {
							this._onSelect(value, index);
						}	
					}
				});
				item.appendChild(icon);
				item.appendChild(text);
				/*if (this.multiple) {
					checker.className = "checker";
					item.appendChild(checker);
				}*/
				if (!enabled) {
					item.classList.add("disabled");
				}
				options.appendChild(item);
				if (selected) {
					index = i;
				}
			});
		}
		if (this._displayAccept || this._displayCancel) {
			this._footer.classList.remove("hidden");
		} else {
			this._footer.classList.add("hidden");
		}
		if (this._displayAccept) {
			this._acceptButton.getElement().classList.remove("hidden");
		} else {
			this._acceptButton.getElement().classList.add("hidden");
		}
		if (this._displayCancel) {
			this._cancelButton.getElement().classList.remove("hidden");
		} else {
			this._cancelButton.getElement().classList.add("hidden");
		}
		super.open(() => {
			const top = index * this._box.querySelectorAll(".option")[index].offsetHeight;
			options.scrollTop = top;
		});
	}
	close() {
		super.close();
		this._input = null;
		this._displayAccept = true;
		this._displayCancel = true;
		this._onOpen = null;
		this._onClose = null;
		this._onSelect = null;
		this._onAccept = null;
		this._onCancel = null;
	}
}
/*
HTML struture:
<div class="wui-lightbox selector mobile priority">
	<div class="box">
		<div class="options"></div>
		<div class="footer">
			<button class="wui-button cancel flat wui-language" data-key="buttons.cancel"></button>
			<button class="wui-button submit wui-language" data-key="buttons.accept"></button>
		</div>
	</div>
</div>
*/