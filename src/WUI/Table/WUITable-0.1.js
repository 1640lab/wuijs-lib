/*
 * WUITable - v0.1
 * Author: Sergio E. Belmar (sbelmar@1640lab.com)
 * Distributed by: 1640 Lab S.p.A. (https://1640lab.com)
 * Copyright (c) Sergio E. Belmar (sbelmar@1640lab.com)
 */

class WUITable {

	static version = "0.1";
	static #defaults = {
		selector: ".wui-table",
		paging: 0,
		columns: [],
		rows: [],
		align: "left",
		valign: "center",
		sortable: true,
		resizable: true,
		draggable: true,
		selectable: true,
		onClick: null,
		onDblClick: null
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
		this._page = 0;
	}

	get selector() {
		return this._selector;
	}

	get paging() {
		return this._paging;
	}

	get page() {
		return this._page;
	}

	get pages() {
		return this._paging == 0 ? 1 : Math.ceil(this._rows.length / this._paging);
	}

	get total() {
		return this._rows.length;
	}

	get columns() {
		return this._columns;
	}

	get rows() {
		return this._rows;
	}

	get align() {
		return this._align;
	}

	get valign() {
		return this._valign;
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

	get onDblClick() {
		return this._onDblClick;
	}

	set selector(value) {
		if (typeof(value) == "string" && value != "") {
			this._selector = value;
			this._element = document.querySelector(value);
		}
	}

	set paging(value) {
		if (typeof(value) == "number" && value >= 0) {
			this._paging = parseInt(value);
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

	set align(value) {
		if (value == null || typeof(value) == "string" && value.match(/^(left|center|right)$/i)) {
			this._align = typeof(value) == "string" ? value.toLowerCase() : value;
		}
	}

	set valign(value) {
		if (value == null || typeof(value) == "string" && value.match(/^(top|center|bottom)$/i)) {
			this._valign = typeof(value) == "string" ? value.toLowerCase() : value;
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

	set onDblClick(value) {
		if (typeof(value) == "function") {
			this._onDblClick = value;
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

	init() {
		this._table = document.createElement("table");
		this._thead = document.createElement("thead");
		this._theadRow = document.createElement("tr");
		this._tbody = document.createElement("tbody");
		this._element.appendChild(this._table);
		this._table.setAttribute("cellspacing", "0");
		this._table.appendChild(this._thead);
		this._table.appendChild(this._tbody);
		this._thead.appendChild(this._theadRow);
		if (this._columns.length > 0) {
			this.#printHead();
		}
		if (this._rows.length > 0) {
			this.#printBody();
		}
	}

	addColumn(options) {
		this._columns.push(options);
	}

	addRow(options) {
		this._rows.push(options);
	}

	#printHead() {
		const align = this._align || null;
		const valign = this._valign || null;
		["align-left", "align-center", "align-right", "valign-top", "valign-middle", "valign-bottom"].forEach(cls => {
			this._table.classList.remove(cls);
		});
		if (align != null && align.match(/^(left|center|right)$/i)) {
			this._table.classList.add("align-"+align);
		}
		if (valign != null && valign.match(/^(top|center|bottom)$/i)) {
			this._table.classList.add("valign-"+valign);
		}
		this._theadRow.innerHTML = "";
		this._columns.forEach(colOptions => {
			const th = document.createElement("th");
			const width = typeof(colOptions.width) == "number" || (typeof(colOptions.width) == "string" && colOptions.width.match(/^[0-9]+(px|em|%)$/)) ? colOptions.width : null;
			const align = colOptions.align || null;
			const valign = colOptions.valign || null;
			if (width != null) {
				th.style.width = typeof(width) == "number" ? width+"px" : width;
			}
			["sortable", "resizable", "draggable"].forEach(prop => {
				if (this["_"+prop]) {
					th.classList.add(prop);
				}	
			});
			th.innerHTML = colOptions.label || "";
			if (align != null && align.match(/^(left|center|right)$/i)) {
				this._theadRow.classList.add("align-"+align);
			}
			if (valign != null && valign.match(/^(top|center|bottom)$/i)) {
				this._theadRow.classList.add("valign-"+valign);
			}
			this._theadRow.appendChild(th);
		});
	}

	#printBody(page = this._page) {
		const paging = this._paging == 0 ? this._rows.length : this._paging;
		if (this._element != null && page * paging >= 0 && page * paging < this._rows.length) {
			const ini = page * paging;
			const end = (page + 1) * paging > this._rows.length ? this._rows.length : (page + 1) * paging;
			this._tbody.innerHTML = "";
			for (let i=ini; i<=end; i++) {
				const rowOptions = this._rows[i] || null;
				if (rowOptions != null) {
					const tr = document.createElement("tr");
					const id = "id" in rowOptions ? rowOptions.id : null;
					const align = rowOptions.align || null;
					const valign = rowOptions.valign || null;
					if (align != null && align.match(/^(left|center|right)$/i)) {
						tr.classList.add("align-"+align);
					}
					if (valign != null && valign.match(/^(top|center|bottom)$/i)) {
						tr.classList.add("valign-"+valign);
					}
					if (id != null) {
						tr.dataset.id = id;
					}
					tr.dataset.index = i;
					tr.addEventListener("click", event => {
						if (this._selectable && typeof(this._onClick) == "function") {
							this._onClick(i, id, event, rowOptions);
						}
					});
					tr.addEventListener("dblclick", event => {
						if (this._selectable && typeof(this._onDblClick) == "function") {
							this._onDblClick(i, id, event, rowOptions);
						}
					});
					this._columns.forEach((colOptions, j) => {
						const td = document.createElement("td");
						const align = typeof(colOptions.align) != "undefined" && colOptions.align != this._align ? colOptions.align : null;
						const valign = typeof(colOptions.valign) != "undefined" && colOptions.valign != this._valign ? colOptions.valign : null;
						td.innerHTML = rowOptions.data[j] || "";
						if (align != null && align.match(/^(left|center|right)$/i)) {
							td.classList.add("align-"+align);
						}
						if (valign != null && valign.match(/^(top|center|bottom)$/i)) {
							td.classList.add("valign-"+valign);
						}
						tr.appendChild(td);
					});
					this._tbody.appendChild(tr);
				}
			}
		}
	}

	print(page = this._page) {
		this.#printBody(page);
	}

	prev() {
		this.print(this._page - 1);
	}

	next() {
		this.print(this._page + 1);
	}

	isPrevEnable() {
		const paging = this._paging == 0 ? this._rows.length : this._paging;
		return Boolean((this._page - 1) * paging >= 0);
	}

	isNextEnable() {
		const paging = this._paging == 0 ? this._rows.length : this._paging;
		return Boolean((this._page + 1) * paging < this._rows.length);
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
				<th class="sortable resizable"></td>
				...
			</tr>
		</thead>
		<tbody>
			<tr data-index="0" [data-id="row1"]>
				<td></td>
				...
			</tr>
			...
		</tbody>
		<tfoot>
			<tr>
				[<th></th>
				...]
			</tr>
		</tfoot>
	</table>
</div>
*/