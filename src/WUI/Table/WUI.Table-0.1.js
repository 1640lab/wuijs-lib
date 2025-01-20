/* WUITable v0.1 */

class WUITable {
	static version = "0.1";
	static #defaults = {
		selector: ".wui-table",
		columns: [],
		rows: [],
		paging: 0,
		sortable: true,
		resizable: true,
		draggable: true,
		selectable: true,
		onClick: null,
		onDblclick: null
	};
	static #icons = {
		"header-column-up": ""
			+"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>"
			+"<path d='M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0z'/>"
			+"</svg>",
		"header-column-down": ""
			+"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>"
			+"<path d='M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z'/>"
			+"</svg>"
	};
	constructor (properties) {
		Object.keys(WUITable.#defaults).forEach(prop => {
			this[prop] = typeof(properties) != "undefined" && prop in properties ? properties[prop] : prop in WUITable.#defaults ? WUITable.#defaults[prop] : null;
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
	get paging() {
		return this._paging;
	}
	get sortable() {
		return this._sortable;
	}
	get resizable() {
		return this._resizable;
	}
	get draggable() {
		return this._draggable;
	}
	get selectable() {
		return this._selectable;
	}
	get onClick() {
		return this._onClick;
	}
	get onDblclick() {
		return this._onDblclick;
	}
	set selector(value) {
		if (typeof(value) == "string" && value != "") {
			this._selector = value;
			this._element = document.querySelector(value);
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
	set paging(value) {
		if (typeof(value) == "integer" && value >= 0) {
			this._paging = value;
		}
	}
	set sortable(value) {
		if (typeof(value) == "boolean") {
			this._sortable = value;
		}
	}
	set resizable(value) {
		if (typeof(value) == "boolean") {
			this._resizable = value;
		}
	}
	set draggable(value) {
		if (typeof(value) == "boolean") {
			this._draggable = value;
		}
	}
	set selectable(value) {
		if (typeof(value) == "boolean") {
			this._selectable = value;
		}
	}
	set onClick(value) {
		if (typeof(value) == "function") {
			this._onClick = value;
		}
	}
	set onDblclick(value) {
		if (typeof(value) == "function") {
			this._onDblclick = value;
		}
	}
	getElement() {
		return this._element;
	}
	#getSRCIcon(name, event) {
		const element = this._element || document.documentElement;
		const color = getComputedStyle(element).getPropertyValue("--wui-grid-"+name+"color-"+event).replace(/#/g, "%23").trim();
		const src = getComputedStyle(element).getPropertyValue("--wui-grid-"+name+"icon-src").replace(/currentColor/g, color);
		return src != "" && !src.match(/^(none|url\(\))$/) ? src : "url(\"data:image/svg+xml,"+WUITable.#icons[name].replace(/currentColor/g, color)+"\")";
	}
	addColumn(options) {
		this._columns.push(options);
	}
	addRow(options) {
		this._rows.push(options);
	}
	init() {
		this._table = document.createElement("table");
		this._thead = document.createElement("thead");
		this._theadRow = document.createElement("tr");
		this._tbody = document.createElement("tbody");
		this._tfooter = document.createElement("tfoot");
		this._tfooterRow = document.createElement("tr");
		this._element.appendChild(this._table);
		this._table.appendChild(this._thead);
		this._table.appendChild(this._tbody);
		this._table.appendChild(this._tfooter);
		this._thead.appendChild(this._theadRow);
		this._tfooter.appendChild(this._tfooterRow);
		if (this._columns.length > 0) {
			this.printHead();
		}
		if (this._rows.length > 0) {
			this.print();
		}
	}
	printHead() {
		this._columns.forEach((colOptions, j) => {
			const th = document.createElement("th");
			if (typeof(colOptions.width) == "number") {
				th.style.width = colOptions.width+"px";
			}
			th.style.textAlign = colOptions.align || "left";
			th.style.verticalAlign = colOptions.valign || "top";
			th.innerHTML = colOptions.label || "";
			["sortable", "resizable"].forEach(prop => {
				if (this["_"+prop]) {
					const span = document.createElement("span");
					span.className = prop;
					th.appendChild(span);
				}	
			});
			this._theadRow.appendChild(th);
		});
	}
	print(page = 0, sort = "") {
		const ini = page*this._paging;
		const end = this._paging > 0 ? ini + this._paging : this._rows;
		if (this._body != null) {
			this._tbody.innerHTML = "";
			for (let i=ini; i<=end; i++) {
				const tr = document.createElement("tr");
				const rowDataset = this._rows[i] || {};
				this._columns.forEach((colOptions, j) => {
					const td = document.createElement("td");
					if (typeof(colOptions.width) == "number") {
						td.style.width = colOptions.width+"px";
					}
					td.style.textAlign = colOptions.align || "left";
					th.style.verticalAlign = colOptions.valign || "top";
					td.innerHTML = rowDataset.data[i] || "";
					tr.appendChild(td);
				});
				tr.dataset.index = i;
				tr.addEventListener("click", event => {
					if (this._selectable) {
						// ...
					}
				});
				this._tbody.appendChild(tr);
			}
		}
	}
}
/*
HTML code:
<div class="wui-table"></div>

JS code:
const table = new WUITable({
	selector: ".wui-table",
	columns: []
});
table.init();

Generated HTML code:
<div class="wui-table">
	<table>
		<thead>
			<tr>
				<th>column 1 <span class="sortable"></span><span class="resizable"></span></td>
				...
			</tr>
		</thead>
		<tbody>
			<tr>
				<td></td>
				...
			</tr>
			...
		</tbody>
		<tfoot>
			<tr>
			</tr>
		</tfoot>
	</table>
</div>
*/