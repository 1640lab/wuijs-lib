/* WUIBody v0.1 */

class WUIBody {
	static version = "0.1";
	static #defaults = {
		environment: "",
		importDirectory: "",
		importMode: "fetch",
		onCompleted: null,
		debug: false
	};
	#htmlCount = 0;
	#cssCount = 0;
	#jsCount = 0;
	#parts = 0;
	constructor (properties) {
		Object.keys(WUIBody.#defaults).forEach(prop => {
			this[prop] = typeof(properties) != "undefined" && prop in properties ? properties[prop] : prop in WUIBody.#defaults ? WUIBody.#defaults[prop] : null;
		});
	}
	get environment() {
		return this._environment;
	}
	get importDirectory() {
		return this._importDirectory;
	}
	get importMode() {
		return this._importMode;
	}
	get onCompleted() {
		return this._onCompleted;
	}
	get debug() {
		return this._debug;
	}
	set environment(value) {
		if (typeof(value) == "string" && value.match(/^(android|ios)?$/i)) {
			this._environment = value.toLowerCase();
		}
	}
	set importDirectory(value) {
		if (typeof(value) == "string") {
			this._importDirectory = value;
		}
	}
	set importMode(value) {
		if (typeof(value) == "string" && value.match(/^(fetch|xhr)?$/i)) {
			this._importMode = value;
		}
	}
	set onCompleted(value) {
		if (typeof(value) == "function") {
			this._onCompleted = value;
		}
	}
	set debug(value) {
		if (typeof(value) == "boolean") {
			this._debug = value;
		}
	}
	prepaare() {
		const inputsSelector = "input[type=text], input[type=password], input[type=file], input[type=email], input[type=number], input[type=tel], textarea";
		if (this.environment == "android") {
			document.body.querySelectorAll("a[target=_new], a[target=_blank]").forEach(a => {
				a.setAttribute("href", "javascript:WUIBody.urlOpen('"+a.getAttribute("href")+"', '"+(a.getAttribute("download") || "")+"');");
				a.removeAttribute("target");
			});
			document.body.querySelectorAll(inputsSelector).forEach(input => {
				input.addEventListener("keyup", event => {
					const maxlength = input.getAttribute("maxlength");
					if (typeof(maxlength) != "undefined" && input.value.length > parseInt(maxlength)) {
						input.value = input.value.substring(0, parseInt(maxlength));
					}
				});
			});
		} else if (this.environment == "ios") {
			document.body.querySelectorAll(inputsSelector).forEach(input => {
				input.addEventListener("keypress", event => {
					const maxlength = input.getAttribute("maxlength");
					if (typeof(maxlength) != "undefined" && input.value.length >= parseInt(maxlength)) {
						return false;
					}
				});
			});
		}
		document.body.querySelectorAll(inputsSelector+", select").forEach(input => {
			input.addEventListener("blur", () => {
				document.activeElement.blur();
			});
		});
	}
	urlOpen(url, download = "") {
		const link = document.createElement("a");
		link.setAttribute("href", url);
		link.style.display = "none";
		if (download != "") {
			link.setAttribute("download", download);
		}
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}
	import(id, path, done) {
		const token = Date.now();
		const cssPath = this._importDirectory+path+".css?_="+token;
		const htmlPath = this._importDirectory+path+".htm?_="+token;
		const jsPath = this._importDirectory+path+".js?_="+token;
		const checkPath = (url) => {
			const xhr = new XMLHttpRequest();
			try {
				xhr.open("HEAD", url, false);
				xhr.send();
			} catch(e) {}
			return xhr.status != 404;
		}
		const checkStatus = () => {
			if (2 * this.#parts == this.#htmlCount + this.#jsCount && typeof(this._onCompleted) == "function") {
				this._onCompleted();
			}
		}
		const loadHTML = (html) => {
			if (html) {
				let section = document.getElementById(id);
				section.outerHTML = html;
				section = document.getElementById(id);
				if (this.debug) {
					console.log("ui import htm:", id, section);
				}
			}
			this.#htmlCount++;
		}
		const loadCSS = (css) => {
			if (css) {
				const section = document.getElementById(id);
				const style = document.createElement("style");
				style.textContent = css;
				section.insertAdjacentElement("beforebegin", style);
				if (this.debug) {
					console.log("ui import css:", id, style);
				}
			}
			this.#cssCount++;
		}
		const loadJS = (js) => {
			if (js) {
				const section = document.getElementById(id);
				const script = document.createElement("script");
				script.textContent = js;
				section.insertAdjacentElement("afterend", script);
				if (this.debug) {
					console.log("ui import js:", id, script);
				}
			}
			this.#jsCount++;
			if (typeof(done) == "function") {
				done();
			}
			checkStatus();
		}
		const xhrRequest = (url, onload) => {
			const xhr = new XMLHttpRequest();
			xhr.overrideMimeType("text/plain");
			xhr.onload = function() {
				if (xhr.status == 200 || xhr.status == 0) {
					onload(xhr.responseText);
				}
			}
			xhr.open("GET", url, true);
			xhr.send();
		}
		if (checkPath(htmlPath)) {
			if (this._importMode == "fetch") {
				fetch(htmlPath).then(response => {
					return response.text();
				}).then(html => {
					loadHTML(html);
					if (checkPath(cssPath)) {
						fetch(cssPath).then(response => {
							return response.text();
						}).then(css => {
							loadCSS(css);
						});
					}
					if (checkPath(jsPath)) {
						fetch(jsPath).then(response => {
							return response.text();
						}).then(js => {
							loadJS(js);
						});
					} else {
						this.#jsCount++;
					}
				});
			} else if (this._importMode == "xhr") {
				xhrRequest(htmlPath, html => {
					loadHTML(html);
					if (checkPath(cssPath)) {
						xhrRequest(cssPath, css => {
							loadCSS(css);
						});
					}
					if (checkPath(jsPath)) {
						xhrRequest(jsPath, js => {
							loadJS(js);
						});
					} else {
						this.#jsCount++;
					}
				});
			}
			this.#parts++;
		}
	}
	init(onCompleted) {
		if (typeof(onCompleted) == "function") {
			this._onCompleted = onCompleted;
		}
	}
}
/*
DOM import struture:
<body>
	<style></style>
	<div id=""></div>
	<script></script>
</body>
*/