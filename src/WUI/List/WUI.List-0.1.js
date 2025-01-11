/* WUIList v0.1 */

class WUIList {
	static version = "0.1";
	static #defaults = {
		selector: ".wui-list",
		columns: [],
		rows: [],
		buttons: [],
		buttonsStyle: "round",
		onClick: null
	};
	constructor (properties) {
		Object.keys(WUIList.#defaults).forEach(prop => {
			this[prop] = typeof(properties) != "undefined" && prop in properties ? properties[prop] : WUIList.#defaults[prop];
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
	get buttonsStyle() {
		return this._buttonsStyle;
	}
	get onClick() {
		return this._onClick;
	}
	set selector(value) {
		if (typeof(value) == "string" && value != "") {
			this._selector = value;
			this._element = document.querySelector(value);
			this._header = document.querySelector(value+" > .header");
			this._body = document.querySelector(value+" > .body");
			this._message = document.querySelector(value+" > .message");
			this._footer = document.querySelector(value+" > .footer");
		}
	}
	set columns(value) {
		if (Array.isArray(value)) {
			this._columns = value;
		}
	}
	set rows(value) {
		if (Array.isArray(value)) {
			this._rows = value;
		}
	}
	set buttons(value) {
		if (Array.isArray(value)) {
			this._buttons = value;
		}
	}
	set buttonsStyle(value) {
		if (typeof(value) == "string" && value.match(/^(round|stretch)$/i)) {
			this._buttonsStyle = value.toLowerCase();
		}
	}
	set onClick(value) {
		if (typeof(value) == "function") {
			this._onClick = value;
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
	getMessage() {
		return this._message;
	}
	getFooter() {
		return this._footer;
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
			this._rows.forEach((rowDataset, i) => {
				const row = document.createElement("div");
				const strip = document.createElement("div");
				const id = "id" in rowDataset ? rowDataset.id : null;
				row.dataset.index = i;
				row.dataset.id = id;
				row.className = "row";
				row.append(strip);
				strip.className = "strip";
				this._columns.forEach((columnDataset, j) => {
					const cell = document.createElement("div");
					cell.className = "cell";
					cell.classList.add(columnDataset.align || "left");
					if (typeof(columnDataset.width) == "number") {
						cell.style.width = columnDataset.width+"px";
					} else {
						cell.style.flex = "1";
					}
					cell.style.textAlign = columnDataset.align || "left";
					cell.innerHTML = rowDataset.data[j] || "";
					strip.append(cell);
				});
				strip.addEventListener("click", event => {
					if (this._buttons.length == 0 || this._strips[i].direction == null) {
						if (typeof(this._onClick) == "function") {
							this._onClick(i, id, event, rowDataset);
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
						const iconClass = typeof(options.iconClass) == "string" ? options.iconClass : typeof(options.iconClass) == "function" ? options.iconClass(i, id) : "";
						const bgcolor = typeof(options.bgcolor) == "string" ? options.bgcolor : typeof(options.bgcolor) == "function" ? options.bgcolor(i, id) : "";
						const enabled = (typeof(options.enabled) == "boolean" && options.enabled) || (typeof(options.enabled) == "function" && options.enabled(i, id)) ? true : false;
						button.className = "button "+this._buttonsStyle;
						icon.className = "icon";
						if (!enabled) {
							button.classList.add("disabled");
						} else if (bgcolor != "") {
							button.style.backgroundColor = bgcolor;
						}
						if (iconClass != "") {
							iconClass.split(/\s+/).forEach(name => {
								icon.classList.add(name);
							});
						}
						button.addEventListener("click", event => {
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
							strip.addEventListener(type, event => {
								if (!this._strips[i].drag) {
									const initX = (event.type == "touchstart" ? event.touches[0].clientX : event.clientX || event.clientX) - event.target.offsetParent.offsetLeft;
									this._strips[i].drag = true;
									this._strips[i].initX = initX;
								}
							});
						});
						["touchmove", "mousemove"].forEach(type => {
							strip.addEventListener(type, event => {
								if (this._strips[i].drag) {
									const initX = parseFloat(this._strips[i].initX);
									const moveX = (event.type == "touchmove" ? event.touches[0].clientX : event.clientX || event.clientX) - event.target.offsetParent.offsetLeft;
									const diffX = moveX -initX;
									const direction = diffX > 10 ? "right" : diffX < -10 ? "left" : null;
									if (direction == "left") {
										this._strips.forEach((str, s) => {
											if (this._strips[s].open && s != i) {
												this._body.querySelector(".row:nth-of-type("+(s+1)+") > .strip").style.marginRight = "0px";
												this._strips[s].open = false;
											}
										});
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
											this._strips[i].open = true;
										} else if (this._strips[i].direction == "right") {
											strip.style.marginRight = "0px";
											this._strips[i].open = false;
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
HTML struture:
<div class="wui-list">
	<div class="header"></div>
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