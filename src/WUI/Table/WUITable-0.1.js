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
		width: "auto",
		paging: 0,
		columns: [],
		rows: [],
		align: "left",
		valign: "center",
		sortable: true,
		resizable: true,
		draggable: true,
		selectable: true,
		onPrint: null,
		onClick: null,
		onDblClick: null
	};

	static #icons = {
		"column-sorter-asc": ""
			+"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>"
			+"<path d='M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0z'/>"
			+"</svg>",
		"column-sorter-desc": ""
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

	get width() {
		return this._width;
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

	get onPrint() {
		return this._onPrint;
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

	set width(value) {
		if (typeof(value) == "number" || typeof(value) == "string" && (value.match(/^[0-9]+(px|em|%)$/) || value == "auto")) {
			this._width = value;
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

	set onPrint(value) {
		if (typeof(value) == "function") {
			this._onPrint = value;
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
		const color = getComputedStyle(element).getPropertyValue("--wui-table-"+name+"color-"+event).replace(/#/g, "%23").trim();
		const src = getComputedStyle(element).getPropertyValue("--wui-table-"+name+"icon-src").replace(/currentColor/g, color);
		return src != "" && !src.match(/^(none|url\(\))$/) ? src : "url(\"data:image/svg+xml,"+WUITable.#icons[name].replace(/currentColor/g, color)+"\")";
	}

	init() {
		this._table = document.createElement("table");
		this._thead = document.createElement("thead");
		this._theadRow = document.createElement("tr");
		this._tbody = document.createElement("tbody");
		this._element.style.width = typeof(this._width) == "number" ? this._width+"px" : typeof(this._width) == "string" ? this._width : "auto";
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
		this._sortingIndex = null;
		this._sortingDirection = null;
		this._resizing = false;
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
		this._columns.forEach((colOptions, j) => {
			const th = document.createElement("th");
			const width = typeof(colOptions.width) == "number" || (typeof(colOptions.width) == "string" && colOptions.width.match(/^[0-9]+(px|em|%)$/)) ? colOptions.width : null;
			const align = colOptions.align || this._align || null;
			const valign = colOptions.valign || this._valign || null;
			const resizable = typeof(colOptions.resizable) != "undefined" ? colOptions.resizable : this._resizable;
			th.innerHTML = colOptions.label || "";
			if (width != null) {
				th.style[resizable ? "maxWidth" : "minWidth"] = typeof(width) == "number" ? width+"px" : width;
			}
			if (align != null && align.match(/^(left|center|right)$/i)) {
				th.classList.add("align-"+align);
			}
			if (valign != null && valign.match(/^(top|center|bottom)$/i)) {
				th.classList.add("valign-"+valign);
			}
			["sortable", "resizable", "draggable"].forEach(prop => {
				const value = prop in colOptions ? colOptions[prop] : this["_"+prop];
				if (value) {
					th.classList.add(prop);
					if (prop == "sortable") {
						const sorter = document.createElement("div");
						sorter.className = "sorter";
						th.append(sorter);
						th.addEventListener("click", () => {
							this.sort(j);
						});
					} else if (prop == "resizable") {
						const resizer = document.createElement("div");
						resizer.className = "resizer";
						resizer.addEventListener("mousedown", event => {
							const startX = event.pageX;
							const startWidth = parseInt(document.defaultView.getComputedStyle(th).width, 10);
							const onMouseMove = (event) => {
								const rows = Array.from(this._tbody.querySelectorAll("tr"));
								const width = startWidth + (event.pageX - startX);
								th.style.maxWidth = width+"px";
								rows.forEach(row => {
									row.children[j].style.maxWidth = width+"px";
								});
							}
							const onMouseUp = () => {
								document.documentElement.removeEventListener("mousemove", onMouseMove);
								document.documentElement.removeEventListener("mouseup", onMouseUp);
								setTimeout(() => this._resizing = false, 100);
							}
							this._resizing = true;
							document.documentElement.addEventListener("mousemove", onMouseMove);
							document.documentElement.addEventListener("mouseup", onMouseUp);
						});
						th.append(resizer);
					}
				}	
			});
			this._theadRow.appendChild(th);
		});
	}

	#printBody(page = this._page) {
		const paging = this._paging == 0 ? this._rows.length : this._paging;
		if (this._element != null && page * paging >= 0 && page * paging < this._rows.length) {
			const ini = page * paging;
			const end = (page + 1) * paging > this._rows.length ? this._rows.length : (page + 1) * paging;
			this._tbody.innerHTML = "";
			for (let i=ini; i<end; i++) {
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
						const width = typeof(colOptions.width) == "number" || (typeof(colOptions.width) == "string" && colOptions.width.match(/^[0-9]+(px|em|%)$/)) ? colOptions.width : null;
						const align = typeof(colOptions.align) != "undefined" && colOptions.align != this._align ? colOptions.align : null;
						const valign = typeof(colOptions.valign) != "undefined" && colOptions.valign != this._valign ? colOptions.valign : null;
						const resizable = typeof(colOptions.resizable) != "undefined" ? colOptions.resizable : this._resizable;
						td.innerHTML = rowOptions.data[j] || "";
						if (width != null) {
							td.style[resizable ? "maxWidth" : "minWidth"] = typeof(width) == "number" ? width+"px" : width;
						}
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
			this._page = page;
			if (typeof(this._onPrint) == "function") {
				this._onPrint(page, this.pages, this.total);
			}
		}
	}

	print(page = this._page) {
		this.#printBody(page);
	}

	sort(index, direction = null) {
		if (this._resizing) {
			return;
		}
		const rows = Array.from(this._tbody.querySelectorAll("tr"));
		const cellContent = (row, format) => {
			let cell = "";
			if (format == "text") {
				cell = row.children[index].textContent.trim();
			} else if (format == "html") {
				cell = row.children[index].innerHTML.trim().toLowerCase();
			}
			return cell;
		}
		if (direction == null) {
			direction = (this._sortingIndex == index && this._sortingDirection == "asc") ? "desc" : "asc";
		}
		rows.sort((rowA, rowB) => {
			let cellA = cellContent(rowA, "text");
			let cellB = cellContent(rowB, "text");
			if (cellA == "" && cellB == "" && (rowA.textContent != "" || rowB.textContent != "")) {
				cellA = cellContent(rowA, "html");
				cellB = cellContent(rowB, "html");
			}
			if (direction === "asc") {
				return cellA.localeCompare(cellB, undefined, {numeric: true});
			} else {
				return cellB.localeCompare(cellA, undefined, {numeric: true});
			}
		});
		rows.forEach(row => this._tbody.appendChild(row));
		this._theadRow.querySelectorAll("th .sorter").forEach(sorter => {
			sorter.style.maskImage = "url()";
		});
		this._theadRow.children[index].querySelector(".sorter").style.maskImage = this.#getSRCIcon(`column-sorter-${direction == "asc" ? "asc" : "desc"}`, "out");
		this._sortingIndex = index;
		this._sortingDirection = direction;
	}

	export() {
		const textify = (cell) => {
			return cell.textContent.replace(/\s+/g, " ").trim();
		}
		const escape = (value) => {
			const string = String(value).replace(/"/g, '""');
			return `"${string}"`;
		}
		// ...
	}

	first() {
		this.print(0);
	}

	last() {
		const page = this._paging == 0 ? 0 : Math.ceil(this._rows.length / this._paging) - 1;
		this.print(page);
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