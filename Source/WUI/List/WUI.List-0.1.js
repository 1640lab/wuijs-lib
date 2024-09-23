/* WUIList v0.1 */

class WUIList {
	static version = "0.1";
	#defaults = {
		selector: ".wui-list",
		columns: [],
		rows: [],
		buttons: [],
		onClick: null
	};
	constructor (properties) {
		Object.keys(this.#defaults).forEach(key => {
			this[key] = typeof(properties) != "undefined" && key in properties ? properties[key] : this.#defaults[key];
		});
	}
	get selector() {
		return this._selector;
	}
	get columns() {
		return this._columns;
	}
	get rows() {
		return this._rows;
	}
	get buttons() {
		return this._buttons;
	}
	get onClick() {
		return this._onClick;
	}
	set selector(value) {
		if (this.setProperty("selector", value, "string")) {
			this._element = document.querySelector(value);
			this._head = document.querySelector(value+" > .head");
			this._body = document.querySelector(value+" > .body");
			this._message = document.querySelector(value+" > .message");
			this._footer = document.querySelector(value+" > .footer");
		}
	}
	set columns(value) {
		this.setProperty("columns", value, "array");
	}
	set rows(value) {
		this.setProperty("rows", value, "array");
	}
	set buttons(value) {
		this.setProperty("buttons", value, "array");
	}
	set onClick(value) {
		this.setProperty("onClick", value, "function");
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
	getMessage() {
		return this._message;
	}
	getFooter() {
		return this._footer;
	}
	setProperty(name, value, type = "string") {
		if ((
			type == "array" && Array.isArray(value)) || (
			type == typeof(value)
		)) {
			this["_"+name] = value;
			return true;
		} else {
			this["_"+name] = this.#defaults[name];
		}
		return false;
	}
	init() {
		this._strips = [];
		if (this._rows.length > 0) {
			this.print();
		}
	}
	addColumn(column) {
		this._columns.push(column);
	}
	addRow(row) {
		this._rows.push(row);
	}
	addButton(button) {
		this._buttons.push(button);
	}
	print() {
		this._strips = [];
		if (this._body != null) {
			this._body.innerHTML = "";
			this._rows.forEach((dataRow, i) => {
				const row = document.createElement("div");
				const strip = document.createElement("div");
				const id = "id" in dataRow ? dataRow.id : null;
				strip.className = "strip";
				row.dataset.index = i;
				row.dataset.id = id;
				row.className = "row";
				row.append(strip);
				dataRow.data.forEach((item, j) => {
					const dataColumn = this._columns[j] || {};
					const cell = document.createElement("div");
					cell.className = "cell";
					cell.classList.add(dataColumn.align || "left");
					if (typeof(dataColumn.width) == "number") {
						cell.style.width = dataColumn.width+"px";
					} else {
						cell.style.flex = "1";
					}
					cell.style.textAlign = dataColumn.align || "left";
					cell.innerHTML = item;
					strip.append(cell);
				});
				strip.addEventListener("click", (event) => {
					if (this._buttons.length == 0 || this._strips[i].direction == null) {
						if (typeof(this._onClick) == "function") {
							this._onClick(i, id, event, dataRow);
						}
						this._strips.forEach((str, s) => {
							if (str.open) {
								this._body.querySelector(".row:nth-of-type("+(s+1)+") > .strip").style.marginRight = "0px";
								this._strips[s].open = false;
							}
						});
					}
				});
				if (this._buttons.length > 0) {
					const buttons = document.createElement("div");
					buttons.className = "buttons";
					this._strips[i] = {
						drag: false,
						initX: null,
						direction: null,
						open: false
					};
					this._buttons.forEach(options => {
						const button = document.createElement("div");
						const icon = document.createElement("div");
						const enabled = (typeof(options.enabled) == "boolean" && options.enabled) || (typeof(options.enabled) == "function" && options.enabled(i, id)) ? true : false;
						button.className = "button";
						icon.className = "icon";
						if (!enabled) {
							button.classList.add("disabled");
						}
						if (enabled && typeof(options.bgcolor) == "string" && options.bgcolor != "") {
							button.style.backgroundColor = options.bgcolor;
						}
						if (typeof(options.iconClass) == "string" && options.iconClass != "") {
							options.iconClass.split(/\s+/).forEach(name => {
								icon.classList.add(name);
							});
						}
						button.addEventListener("click", (event) => {
							const strip = this._body.querySelector(".row:nth-of-type("+(i+1)+") > .strip");
							if (enabled && typeof(options.onClick) == "function") {
								options.onClick(i, id, event);
							}
							if (strip != null) {
								strip.style.marginRight = "0px";
							}
						});
						button.append(icon);
						buttons.append(button);
						["touchstart", "mousedown"].forEach(type => {
							strip.addEventListener(type, (event) => {
								if (!this._strips[i].drag && !this._strips[i].look) {
									const initX = (event.type == "touchstart" ? event.touches[0].clientX : event.clientX || event.clientX) - event.target.offsetParent.offsetLeft;
									this._strips[i].drag = true;
									this._strips[i].initX = initX;
								}
							});
						});
						["touchmove", "mousemove"].forEach(type => {
							strip.addEventListener(type, (event) => {
								if (this._strips[i].drag && !this._strips[i].look) {
									const initX = parseFloat(this._strips[i].initX);
									const moveX = (event.type == "touchmove" ? event.touches[0].clientX : event.clientX || event.clientX) - event.target.offsetParent.offsetLeft;
									const diffX = moveX -initX;
									const direction = diffX > 10 ? "right" : diffX < -10 ? "left" : null;
									let right = direction == "right" ? buttons.clientWidth -diffX : direction == "left" ? -diffX : 0;
									if (right < 0) {
										right = 0;
									} else if (right > buttons.clientWidth) {
										right = buttons.clientWidth;
									}
									if (direction != null) {
										strip.style.marginRight = right+"px";
										if (direction == "left") {
											this._strips[i].open = true;
											this._strips.forEach((str, s) => {
												if (str.open && s != i) {
													this._body.querySelector(".row:nth-of-type("+(s+1)+") > .strip").style.marginRight = "0px";
													this._strips[s].open = false;
												}
											});
										} else if (this._strips[i].direction == "right") {
											this._strips[i].open = false;
										}
									}
									this._strips[i].direction = direction;
								}
							});
						});
						["touchend", "mouseup"].forEach(type => {
							strip.addEventListener(type, () => {
								if (this._strips[i].drag) {
									this._strips[i].drag = false;
									this._strips[i].initX = null;
									if (this._strips[i].direction != null) {
										if (this._strips[i].direction == "left") {
											strip.style.marginRight = buttons.clientWidth+"px";
										} else if (this._strips[i].direction == "right") {
											strip.style.marginRight = "0px";
										}
										setTimeout(() => {
											this._strips[i].direction = null;
										}, 400);
									}
								}
							});
						});
					});
					row.append(buttons);
				}
				this._body.append(row);
			});
		}
	}
}
/*
DOM struture:
<div class="wui-list soft mobile">
	<div class="head"></div>
	<div class="body">
		<div class="row">
			<div class="strip">
				<div class="cell"></div>
				...
			</div>
			<div class="buttons">
				<div class="button edit"></div>
				<div class="button delete"></div>
				...
			</div>
		</div>
		...
	</div>
	<div class="footer"></div>
</div>
*/