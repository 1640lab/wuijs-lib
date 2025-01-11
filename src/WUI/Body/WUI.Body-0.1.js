/* WUIBody v0.1 */

class WUIBody {
	static version = "0.1";
	static #defaults = {
		environment: "",
		importDirectory: "",
		onCompleted: null,
		debug: false
	};
	#htmlCount = 0;
	#jsCount = 0;
	#parts = 0;
	constructor (properties) {
		Object.keys(WUIBody.#defaults).forEach(prop => {
			this[prop] = typeof(properties) != "undefined" && prop in properties ? properties[prop] : WUIBody.#defaults[prop];
		});
	}
	get environment() {
		return this._environment;
	}
	get importDirectory() {
		return this._importDirectory;
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
	#checkPath = (url) => {
		const http = new XMLHttpRequest();
		try {
			http.open("HEAD", url, false);
			http.send();
		} catch(e) {}
		return http.status != 404;
	}
	prepaare() {
		if (this.environment == "android") {
			document.body.querySelectorAll("a[target=_new], a[target=_blank]").forEach(a => {
				a.setAttribute("href", "javascript:WUIBody.urlOpen('"+a.getAttribute("href")+"', '"+(a.getAttribute("download") || "")+"');");
				a.removeAttribute("target");
			});
			document.body.querySelectorAll("input[type=text], input[type=password], input[type=file], input[type=email], input[type=number], input[type=tel], textarea").forEach(input => {
				input.addEventListener("keyup", event => {
					const maxlength = input.getAttribute("maxlength");
					if (typeof(maxlength) != "undefined" && input.value.length > parseInt(maxlength)) {
						input.value = input.value.substring(0, parseInt(maxlength));
					}
				});
			});
		} else if (this.environment == "ios") {
			document.body.querySelectorAll("input[type=text], input[type=password], input[type=file], input[type=email], input[type=number], input[type=tel], textarea").forEach(input => {
				input.addEventListener("keypress", event => {
					const maxlength = input.getAttribute("maxlength");
					if (typeof(maxlength) != "undefined" && input.value.length >= parseInt(maxlength)) {
						return false;
					}
				});
			});
		}
		document.body.querySelectorAll("input[type=text], input[type=password], input[type=file], input[type=email], input[type=number], input[type=tel], select, textarea").forEach(input => {
			input.addEventListener("blur", () => {
				document.activeElement.blur();
			});
		});
	};
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
		if (this.#checkPath(htmlPath)) {
			fetch(htmlPath).then(response => {
				return response.text();
			}).then(html => {
				if (html) {
					let section = document.getElementById(id);
					section.outerHTML = html;
					section = document.getElementById(id);
					if (this.debug) {
						console.log("ui import htm:", id, section);
					}
					if (this.#checkPath(cssPath)) {
						fetch(cssPath).then(response => {
							return response.text();
						}).then(css => {
							if (css) {
								const style = document.createElement("style");
								style.textContent = css;
								section.insertAdjacentElement("beforebegin", style);
								if (this.debug) {
									console.log("ui import css:", id, style);
								}
							}
						});
					}
					if (this.#checkPath(jsPath)) {
						fetch(jsPath).then(response => {
							return response.text();
						}).then(js => {
							if (js) {
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
							if (2*this.#parts == this.#htmlCount + this.#jsCount && typeof(this._onCompleted) == "function") {
								this._onCompleted();
							}
						});
					} else {
						this.#jsCount++;
					}
				}
				this.#htmlCount++;
			});
			this.#parts++;
		}
	};
	init(onCompleted) {
		if (typeof(onCompleted) == "function") {
			this._onCompleted = onCompleted;
		}
	};
}
/*
DOM import struture:
<body>
	<style></style>
	<div id=""></div>
	<script></script>
</body>
*/