/* WUI.Language.js v0.1 */

let languages = [];
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
	log = [];
	constructor (properties) {
		Object.keys(this.#defaults).forEach(key => {
			this[key] = typeof(properties) != "undefined" && key in properties ? properties[key] : this.#defaults[key];
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
		if (this.setProperty("selector", value, "string")) {
			this._elements = document.querySelectorAll(value);
		}
	}
	set lang(value) {
		this.setProperty("lang", value, "string");
	}
	set directory(value) {
		this.setProperty("directory", value, "string");
	}
	set filePrefix(value) {
		this.setProperty("filePrefix", value, "string");
	}
	set dataKey(value) {
		this.setProperty("dataKey", value, "string");
	}
	set dataOutput(value) {
		this.setProperty("dataOutput", value, "string");
	}
	set onLoad(value) {
		this.setProperty("onLoad", value, "function");
	}
	setProperty(name, value, type = "string", regexp) {
		if ((
			type == "regexp" && typeof(value) == "string" && regexp instanceof RegExp && regexp.test(value)) || (
			type == "array" && Array.isArray(value)) || (
			type == "elemente" && typeof(value) == "object" && value instanceof HTMLElement) || (
			type == typeof(value)) || (
			type.match(/^WUI/) && typeof(value) == "object" && type == value.constructor.name
		)) {
			this["_"+name] = value;
			return true;
		} else {
			this["_"+name] = this.#defaults[name];
		}
		return false;
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
					} else if (tagName.match(/^(div|span|h1|h2|h3|h4|h5|h6|p|i|li|a|legend|label|option|button)$/i)) {
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
		if (this.log.indexOf(lang) == -1) {
			const script = document.createElement("script");
			const token = new Date().getTime();
			const src = this.directory+this.filePrefix+lang+".js?_="+token;
			script.setAttribute("type", "text/javascript");
			script.setAttribute("charset", "UTF-8");
			script.setAttribute("src", src);
			script.onload = onLoad;
			document.getElementsByTagName("head")[0].appendChild(script);
			this.log.push(lang);
		} else {
			onLoad();
		}
	}
}