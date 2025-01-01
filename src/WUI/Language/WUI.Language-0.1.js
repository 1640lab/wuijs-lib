/* WUI.Language.js v0.1 */

const languages = [];
class WUILanguage {
	static version = "0.1";
	#defaults = {
		selector: ".wui-language",
		lang: "es",
		directory: "Languages/",
		filePrefix: "",
		dataKey: "key",
		dataOutput: "text",
		onLoad: null
	};
	#log = [];
	constructor (properties) {
		Object.keys(this.#defaults).forEach(prop => {
			this[prop] = typeof(properties) != "undefined" && prop in properties ? properties[prop] : this.#defaults[prop];
		});
	}
	get selector() {
		return this._selector;
	}
	get lang() {
		return this._lang;
	}
	get directory() {
		return this._directory;
	}
	get filePrefix() {
		return this._filePrefix;
	}
	get dataKey() {
		return this._dataKey;
	}
	get dataOutput() {
		return this._dataOutput;
	}
	get onLoad() {
		return this._onLoad;
	}
	set selector(value) {
		if (typeof(value) == "string") {
			this._selector = value;
			this._elements = document.querySelectorAll(value);
		}
	}
	set lang(value) {
		if (typeof(value) == "string") {
			this._lang = value;
		}
	}
	set directory(value) {
		if (typeof(value) == "string") {
			this._directory = value;
		}
	}
	set filePrefix(value) {
		if (typeof(value) == "string") {
			this._filePrefix = value;
		}
	}
	set dataKey(value) {
		if (typeof(value) == "string") {
			this._dataKey = value;
		}
	}
	set dataOutput(value) {
		if (typeof(value) == "string") {
			this._dataOutput = value;
		}
	}
	set onLoad(value) {
		if (typeof(value) == "function") {
			this._onLoad = value;
		}
	}
	load(lang = this.lang) {
		const onLoad = () => {
			document.querySelectorAll(this._selector).forEach(element => {
				const tagName = element.tagName;
				const dataKey = element.dataset[this._dataKey];
				const dataOutput = element.dataset[this._dataOutput];
				if (dataKey != "") {
					const text = eval("languages."+lang+"."+dataKey);
					if (typeof(dataOutput) != "undefined") {
						element.dataset[this._dataOutput] = text;
					} else if (tagName.match(/^(meta)$/i)) {
						element.setAttribute("content", text);
					} else if (tagName.match(/^(h1|h2|h3|h4|h5|h6|div|span|p|i|li|a|legend|label|option|data|button)$/i)) {
						element.innerHTML = text;
					} else if (tagName.match(/^(input|textarea)$/i)) {
						element.setAttribute("placeholder", text);
					}
				}
			});
			if (typeof(this._onLoad) == "function") {
				this._onLoad(lang);
			}
		}
		if (this.#log.indexOf(lang) == -1) {
			const script = document.createElement("script");
			const token = new Date().getTime();
			const src = this.directory+this.filePrefix+lang+".js?_="+token;
			script.setAttribute("type", "text/javascript");
			script.setAttribute("charset", "UTF-8");
			script.setAttribute("src", src);
			script.onload = onLoad;
			document.getElementsByTagName("head")[0].appendChild(script);
			this.#log.push(lang);
		} else {
			onLoad();
		}
	}
}