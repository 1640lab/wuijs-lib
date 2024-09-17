/* WUIGrid v0.1 */

class WUIGrid {
	version = "0.1";
	#defaults = {
		selector: "",
		columns: [],
		ids: [],
		rows: [],
		contents: [],
		rowOpenIconClass: "arrowhead-down-line",
		rowCloseIconClass: "arrowhead-up-line",
		scrollable: false,
		selectable: true,
		extensible: false,
		extendOnClick: false,
		dataAction: "action",
		onClick: null,
		onDblclick: null
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
	get ids() {
		return this._ids;
	}
	get rows() {
		return this._rows;
	}
	get contents() {
		return this._contents;
	}
	get rowOpenIconClass() {
		return this._rowOpenIconClass;
	}
	get rowCloseIconClass() {
		return this._rowCloseIconClass;
	}
	get scrollable() {
		return this._scrollable;
	}
	get selectable() {
		return this._selectable;
	}
	get extensible() {
		return this._extensible;
	}
	get extendOnClick() {
		return this._extendOnClick;
	}
	get dataAction() {
		return this._dataAction;
	}
	get onClick() {
		return this._onClick;
	}
	get onDblclick() {
		return this._onDblclick;
	}
	set selector(value) {
		if (this.setProperty("selector", value, "string")) {
			this._element = document.querySelector(value);
			this._head = document.querySelector(value+" > .head");
			this._body = document.querySelector(value+" > .body");
			this._footer = document.querySelector(value+" > .footer");
		}
	}
	set columns(value) {
		this.setProperty("columns", value, "array");
	}
	set ids(value) {
		this.setProperty("ids", value, "array");
	}
	set rows(value) {
		this.setProperty("rows", value, "array");
	}
	set contents(value) {
		this.setProperty("contents", value, "array");
	}
	set rowOpenIconClass(value) {
		this.setProperty("rowOpenIconClass", value, "string");
	}
	set rowCloseIconClass(value) {
		this.setProperty("rowCloseIconClass", value, "string");
	}
	set scrollable(value) {
		this.setProperty("scrollable", value, "boolean");
	}
	set selectable(value) {
		this.setProperty("selectable", value, "boolean");
	}
	set extensible(value) {
		this.setProperty("extensible", value, "boolean");
	}
	set extendOnClick(value) {
		this.setProperty("extendOnClick", value, "boolean");
	}
	set dataAction(value) {
		this.setProperty("dataAction", value, "string");
	}
	set onClick(value) {
		this.setProperty("onClick", value, "function");
	}
	set onDblclick(value) {
		this.setProperty("onDblclick", value, "function");
	}
	getElement() {
		return this._element;
	}
	setProperty(name, value, type = "string", regexp) {
		if ((
			name.match(/^\w+$/) && name in this.#defaults
		) && ((
			//type == "regexp" && typeof(value) == "string" && regexp instanceof RegExp && regexp.test(value)) || (
			type == "array" && Array.isArray(value)) || (
			type == "elemente" && typeof(value) == "object" && value instanceof HTMLElement) || (
			type == typeof(value)) || (
			type.match(/^WUI/) && typeof(value) == "object" && type == value.constructor.name
		))) {
			this["_"+name] = value;
			return true;
		} else {
			this["_"+name] = this.#defaults[name];
		}
		return false;
	}
	init() {
		if (this._scrollable) {
			this._element.classList.add("scrollable");
		}
		if (this._extensible) {
			this._element.classList.add("extensible");
		}
		if (!this._head) {
			const strip = document.createElement("div");
			strip.className = "strip";
			this._head = document.createElement("div");
			this._head.className = "head";
			this._head.appendChild(strip);
			this._columns.forEach((col, j) => {
				const column = document.createElement("div");
				column.className = "column column"+j;
				strip.appendChild(column);
			});
		}
		this._columns.forEach((item, j) => {
			const column = this._head.querySelectorAll(".column")[j];
			column.style.width = (item.width || 100) + "px";
			column.style.textAlign = item.align || "left";
			if (item.label) {
				column.innerHTML = item.label;
			}
		});
		this._body.innerHTML = "";
		if (this._footer != null) {
			/*this._footer.querySelectorAll(".button").forEach(button => {
				button.addEventListener("click", () => {
					const dataAction = button.dataset[this._dataAction];
					if (typeof(dataAction) != "undefined") {
						switch(dataAction) {
							case "prev": break;
							case "next": break;
						}
					}
				});
			});*/
		}
	}
	addColumn(column) {
		this._columns.push(column);
	}
	addRow(row) {
		this._rows.push(row);
	}
	extendRow(index) {
		if (this._extensible) {
			const row = this._body.querySelector("[data-index='"+index+"']");
			const button = row.querySelector(".button");
			row.classList.toggle("extended");
			button.classList.toggle(this._rowOpenIconClass);
			button.classList.toggle(this._rowCloseIconClass);
		}
	}
	print(page = 0, sort = "") {
		this._body.innerHTML = "";
		this._rows.forEach((data, i) => {
			const row = document.createElement("div");
			const strip = document.createElement("div");
			const id = typeof(this.ids[i]) != "undefined" ? this.ids[i] : null;
			strip.className = "strip";
			row.dataset.index = i;
			row.dataset.id = id;
			row.className = "row";
			row.appendChild(strip);
			row.addEventListener("click", (event) => {
				if (!event.target.classList.contains("button")) {
					if (this._selectable) {
						row.classList.toggle("selected");
					}
					if (typeof(this._onClick) == "function") {
						this._onClick(event, i, id, row);
					}
					if (this._extensible && this._extendOnClick) {
						this.extendRow(i);
					}
				}
			});
			row.addEventListener("dblclick", (event) => {
				if (typeof(this._onDblclick) == "function") {
					this._onDblclick(event, i, id, row);
				}
			});
			data.forEach((item, j) => {
				const column = this._columns[j];
				const cell = document.createElement("div");
				cell.className = "cell";
				cell.style.width = (column.width || 100) + "px";
				cell.style.textAlign = column.align || "left";
				cell.innerHTML = item;
				strip.appendChild(cell);
			});
			if (this._extensible) {
				const button = document.createElement("button");
				const content = document.createElement("div");
				button.setAttribute("class", "button wui-svgicon "+this._rowOpenIconClass);
				button.addEventListener("click", (event) => {
					this.extendRow(i);
				});
				content.setAttribute("class", "content");
				content.innerHTML = this._contents[i];
				row.appendChild(button);
				row.appendChild(content);
			}
			this._body.appendChild(row);
		});
	}
}
/*
DOM struture:
<div class="wui-grid soft mobile scroll">
	<div class="header"></div>
	<div class="head">
		<div class="strip">
			<div class="column"></div>
			<div class="column"></div>
			<div class="column"></div>
		</div>
	</div>
	<div class="body"></div>
</div>
*/