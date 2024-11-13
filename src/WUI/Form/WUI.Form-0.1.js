/* WUIForm v0.1 */

class WUIForm {
	static version = "0.1";
	#defaults = {
		selector: "",
		submit: true,
		onSubmit: true
	};
	constructor (properties) {
		Object.keys(this.#defaults).forEach(key => {
			this[key] = typeof(properties) != "undefined" && key in properties ? properties[key] : this.#defaults[key];
		});
	}
	get selector() {
		return this._selector;
	}
	get submit() {
		return this._submit;
	}
	get onSubmit() {
		return this._onSubmit;
	}
	set selector(value) {
		if (typeof(value) == "string" && value != "") {
			this._selector = value;
			this._element = document.querySelector(value);
			this._header = document.querySelector(value+" > .header");
			this._body = document.querySelector(value+" > .body");
			this._footer = document.querySelector(value+" > .footer");
			this._form = this._element.localName == "form" ? this._element : this._element.querySelector("form");
		}
	}
	set submit(value) {
		if (typeof(value) == "boolean") {
			this._submit = value;
		}
	}
	set onSubmit(value) {
		if (typeof(value) == "function") {
			this._onSubmit = value;
		}
	}
	getElement() {
		return this._element;
	}
	getHeader() {
		return this._header;
	}
	getBody() {
		return this._body;
	}
	getFooter() {
		return this._footer;
	}
	getForm() {
		return this._form;
	}
	getNode(name, type) {
		let node = this._element.querySelector("data."+name) || this._form[name] || null;
		if (type.match(/^(input|data)$/)) {
			return node;
		} else if (node instanceof HTMLElement) {
			let loop = 0;
			let nodeReturn = null;
			while (node != this._element.parentNode && loop <= 100) {
				if (type.match(/^(label)$/) && node.querySelector(type)) {
					node.querySelectorAll(type).forEach(nodeType => {
						if (nodeReturn == null && (node.querySelector("[name="+name+"]") || node.querySelector("data."+name))) {
							nodeReturn = nodeType;
						}
					});
					return nodeReturn;
				} else if (type.match(/^(field)$/) && node.querySelector("."+type)) {
					node.querySelectorAll("."+type).forEach(nodeType => {
						if (nodeReturn == null && (nodeType.querySelector("[name="+name+"]") || nodeType.querySelector("data."+name))) {
							nodeReturn = nodeType;
						}
					});
					return nodeReturn;
				} else {
					node = node.parentNode;
				}
				loop++;
			}
		}
		return null;
	}
	getField(name) {
		return this.getNode(name, "field");
	}
	getLabel(name) {
		return this.getNode(name, "label");
	}
	getInput(name) {
		return this._form[name];
	}
	getValue(name) {
		const input = this.getInput(name);
		const data = this.getData(name);
		return input != null ? input.value : data != null ? data.innerHTML : "";
	}
	getData(name) {
		return this._element.querySelector("data."+name);
	}
	getText(name) {
		return this._element.querySelector(".text."+name);
	}
	setType = (name, type) => {
		const input = this.getInput(name);
		input.type = type.toLocaleLowerCase();
	}
	setValue = (name, value, visible = true) => {
		const label = this.getLabel(name);
		const input = this.getInput(name);
		if (label != null && visible) {
			if (value != "") {
				label.classList.add("notempty");
			} else {
				label.classList.remove("notempty");
			}
		}
		if (input != null) {
			input.value = value;
		}
		return input;
	}
	setData(name, value) {
		const label = this.getLabel(name);
		const data = this.getData(name);
		if (label != null) {
			if (value != "") {
				label.classList.add("notempty");
			} else {
				label.classList.remove("notempty");
			}
		}
		if (data != null) {
			data.value = value;
			data.innerHTML = value;
		}
		return data;
	}
	setText(name, value) {
		const text = this.getText(name);
		if (text != null) {
			text.innerHTML = value;
		}
		return text;
	}
	setEnabled = (name, value) => {
		const label = this.getLabel(name);
		const input = this.getInput(name);
		const data = this.getData(name);
		if (label != null) {
			if (value) {
				label.classList.remove("disabled");
			} else {
				label.classList.add("disabled");
			}
		}
		if (input != null) {
			input.disabled = !value;
			if (value) {
				label.classList.remove("disabled");
			} else {
				label.classList.add("disabled");
			}
		}
		if (data != null) {
			if (value) {
				data.classList.remove("disabled");
			} else {
				data.classList.add("disabled");
			}
		}
	}
	init() {
		const bgImage = (input, type, event) => {
			const element = input || this._form || this._element || document.documentElement;
			const color = getComputedStyle(element).getPropertyValue("--wui-form-"+type+"-pickercolor-"+event).replace(/#/g, "%23").trim();
			const image = getComputedStyle(element).getPropertyValue("--wui-form-"+type+"-pickerimage-src").replace(/currentColor/g, color);
			return image;
		}
		this._form.addEventListener("submit", event => {
			if (!this._submit) {
				event.preventDefault();
			}
			if (typeof(this._onSubmit) == "function") {
				this._onSubmit();
			}
		});
		this._element.querySelectorAll(".field > label").forEach(label => {
			label.addEventListener("click", () => {
				const field = label.parentNode;
				const input = field.querySelector("input,select,textarea");
				if (input != null) {
					input.focus();
				}
			});
		});
		this._element.querySelectorAll("input,select,textarea").forEach(input => {
			const tag = input.localName.toLocaleLowerCase();
			const type = input.getAttribute("type") || "";
			const label = input.parentNode.querySelector("label") || input.parentNode.parentNode.querySelector("label") || this.getLabel(input.name);
			if (type.match(/^(date|time)$/i) || tag.match(/^(select)$/i)) {
				const pickerType = type || tag;
				input.style.backgroundImage = bgImage(input, pickerType, input.disabled ? "disabled" : "out");
				["mouseover", "mouseout", "focus", "blur"].forEach(type => {
					const pickerEvent = input.disabled ? "disabled" : type == "blur" ? "out" : type.replace(/mouse/, "");
					input.addEventListener(type, () => {
						if (label != null) {
							if (type.match(/mouseover|focus/) || input.value != "") {
								label.classList.add("notempty");
							} else {
								label.classList.remove("notempty");
							}
						}
						input.style.backgroundImage = bgImage(input, pickerType, pickerEvent);
						if (type == "focus") {
							const open = new MouseEvent("mousedown");
							input.dispatchEvent(open);
						}
					});
				});
			} else if (tag == "textarea" && input.classList.contains("autosize")) {
				const resize = () => {
					this.autosize(input.name);
				}
				input.addEventListener("change", resize);
				["cut", "paste", "drop", "keydown"].forEach(name => {
					input.addEventListener(name, () => {
						window.setTimeout(resize, 0);
					});
				});
				if (input.value != "") {
					resize();
				}
			}
			if (label != null) {
				if (type.match(/^(date|time)$/)) {
					label.classList.add("fixed");
				}
				if (input.value != "") {
					label.classList.add("notempty");
				}
				input.addEventListener("change", () => {
					if (input.value != "") {
						label.classList.add("notempty");
					} else {
						label.classList.remove("notempty");
					}
				});
			}
		});
	}
	reset() {
		this._form.reset();
		this._element.querySelectorAll("input,select,textarea").forEach(input => {
			const field = input.parentNode.querySelector(".field") || input.parentNode.parentNode.querySelector(".field") || input.name != "" ? this.getField(input.name) : null;
			const label = input.parentNode.querySelector("label") || input.parentNode.parentNode.querySelector("label") || input.name != "" ? this.getLabel(input.name) : null;
			if (field != null) {
				field.classList.remove("invalid");
			}
			if (label != null) {
				label.classList.remove("notempty");
			}
			input.value = "";
		});
	}
	focus(name) {
		this._form[name].focus();
	}
	blur(name) {
		this._form[name].blur();
	}
	change(name) {
		var event = new Event("change");
		this._form[name].dispatchEvent(event);
	}
	autosize(name) {
		this._form[name].style.height = "auto";
		this._form[name].style.height = this._form[name].scrollHeight+"px";
	}
}
/*
HTML struture:
<form class="wui-form (line|border [curve]|mobile)">
	<input type="hidden" name="hidden">
	<div class="header"></div>
	<div class="body">
		<legend>Fieldset</legend>
		<fieldset>
			<div class="field">
				<label>Text</label>
				<input type="text" name="text">
			</div>
			<div class="field">
				<label>Date</label>
				<input type="date" name="date">
			</div>
			<div class="field">
				<label>Time</label>
				<input type="time" name="time">
			</div>
			<div class="field textarea">
				<label for="wuiTextarea"></label>
				<textarea name="textarea"></textarea>
			</div>
			<div class="field checkbox">
				<label for="checkbox">Checkbox</label>
				<input id="checkbox" type="checkbox" name="checkbox" value="1">
			</div>
			<div class="field">
				<label>Data</label>
				<data value="" class="name"></data>
			</div>
			<div class="field">
				<label>WUI Datebox</label>
				<div class="wui-datebox"><input type="date" name="wuiDatebox" value=""></div>
			</div>
			<div class="field">
				<label>WUI Timebox</label>
				<div class="wui-timebox"><input type="time" name="wuiTimebox" value=""></div>
			</div>
			<div class="field checkbox">
				<label for="wuiCheckbox">WUI Checkbox</label>
				<div class="wui-checkbox"><input id="wuiCheckbox" type="checkbox" name="wuiCheckbox" value="1"></div>
			</div>
		</fieldset>
		<div class="text"></div>
	</div>
	<div class="footer">
		<button class="wui-button cancel"></button>
		<button class="wui-button submit"></button>
	</div>
</form>
*/