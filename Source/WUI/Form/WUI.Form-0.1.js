/* WUIForm v0.1 */

class WUIForm {
	static version = "0.1";
	#defaults = {
		selector: "",
		submit: true,
		onSubmit: true
	};
	static prepare() {
		["date", "time", "select"].forEach(type => {
			["out", "focus", "disabled"].forEach(event => {
				const color = (getComputedStyle(document.documentElement).getPropertyValue("--wui-form-"+type+"-pickercolor-"+event) || getComputedStyle(document.documentElement).getPropertyValue("--wui-datebox-pickercolor-"+event)).replace(/#/g, "%23").trim();
				const src = getComputedStyle(document.documentElement).getPropertyValue("--wui-form-"+type+"-pickerimage-src").replace(/currentColor/g, color);
				document.documentElement.style.setProperty("--wui-form-"+type+"-pickerimage-"+event, src);
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
			this._head = document.querySelector(value+" > .head");
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
	getHead() {
		return this._head;
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
		let node = this._element.querySelector(".data."+name) || this._form[name] || null;
		if (type.match(/^(input|data)$/)) {
			return node;
		} else if (node instanceof HTMLElement) {
			let loop = 0;
			let nodeReturn = null;
			while (node != this._element.parentNode && loop <= 100) {
				if (type.match(/^(label)$/) && node.querySelector(type)) {
					node.querySelectorAll(type).forEach(nodeType => {
						if (nodeReturn == null && (node.querySelector("[name="+name+"]") || node.querySelector(".data."+name))) {
							nodeReturn = nodeType;
						}
					});
					return nodeReturn;
				} else if (type.match(/^(field)$/) && node.querySelector("."+type)) {
					node.querySelectorAll("."+type).forEach(nodeType => {
						if (nodeReturn == null && (nodeType.querySelector("[name="+name+"]") || nodeType.querySelector(".data."+name))) {
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
		return this._element.querySelector(".data."+name);
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
		this._form.addEventListener("submit", (event) => {
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
			const label = input.parentNode.querySelector("label") || input.parentNode.parentNode.querySelector("label") || this.getLabel(input.name);
			const type = input.getAttribute("type") || "";
			if (tag.match(/^(date|time|select)$/)) {
				["focus", "blur"].forEach(event => {
					const instance = event == "focus" ? "over" : "out";
					const value =
						type == "date" ? "--wui-form-date-pickercolor-"+instance :
						type == "time" ? "--wui-form-time-clockcolor-"+instance :
						tag == "select" ? "--wui-form-select-pickerimage-"+instance :
						"";
					const color = getComputedStyle(document.documentElement).getPropertyValue(value).trim();
					input.addEventListener(event, () => {
						if (label != null) {
							if (event == "focus" || input.value != "") {
								label.classList.add("notempty");
							} else {
								label.classList.remove("notempty");
							}
						}
						input.style.color = color;
						if (event == "focus") {
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
			const field = input.parentNode.querySelector(".field") || input.parentNode.parentNode.querySelector(".field") || this.getField(input.name);
			const label = input.parentNode.querySelector("label") || input.parentNode.parentNode.querySelector("label") || this.getLabel(input.name);
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
WUIForm.prepare();
/*
CSS
--wui-form-date-pickerimage-src: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><rect fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32' x='48' y='80' width='416' height='384' rx='48'/><circle cx='296' cy='232' r='24' fill='currentColor'/><circle cx='376' cy='232' r='24' fill='currentColor'/><circle cx='296' cy='312' r='24' fill='currentColor'/><circle cx='376' cy='312' r='24' fill='currentColor'/><circle cx='136' cy='312' r='24' fill='currentColor'/><circle cx='216' cy='312' r='24' fill='currentColor'/><circle cx='136' cy='392' r='24' fill='currentColor'/><circle cx='216' cy='392' r='24' fill='currentColor'/><circle cx='296' cy='392' r='24' fill='currentColor'/><path fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32' stroke-linecap='round' d='M128 48v32'/><path fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32' stroke-linecap='round' d='M384 48v32'/><path fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32' d='M464 160H48'/></svg>");
--wui-form-date-pickerimage-size: 20px;
--wui-form-time-pickerimage-src: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor'><path d='M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z'/><path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z'/></svg>");
--wui-form-time-pickerimage-size: 20px;
DOM struture:
<form class="wui-form (line|border) mobile">
	<input type="hidden" name="wuiHidden">
	<div class="head"></div>
	<div class="body">
		<legend>Fieldset title</legend>
		<fieldset>
			<div class="field">
				<label for="wuiImput"></label>
				<input type="text" name="wuiImput">
			</div>
			<div class="field textarea">
				<label for="wuiTextarea"></label>
				<textarea name="wuiTextarea"></textarea>
			</div>
			<div class="field checkbox">
				<label for="wuiCheckbox""></label>
				<div class="[wui-checkbox]"><input type="checkbox" name="wuiCheckbox" value="1"></div>
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