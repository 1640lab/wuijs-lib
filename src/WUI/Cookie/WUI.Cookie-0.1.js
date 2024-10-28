/* WUICookie v0.1 */

class WUICookie {
	static version = "0.1";
	static defaults = {
		domain: location.hostname,
		path: "/",
		minutes: 365*24*60,
		overssl: false
	};
	static set(name, value, options = {}) {
		const domain = typeof(options.domain) == "string" ? options.domain : WUICookie.defaults.domain;
		const path = typeof(options.path) == "string" ? options.path : WUICookie.defaults.path;
		const minutes = typeof(options.minutes) == "number" ? options.minutes : WUICookie.defaults.minutes;
		const overssl = typeof(options.overssl) == "boolean" ? options.path : WUICookie.defaults.overssl;
		const cookie = encodeURIComponent(name)+"="+encodeURIComponent(value)
			+(domain != "" ? "; domain="+domain : "")
			+"; path="+path;
			+"; max-age="+(60*minutes)
			+(overssl ? " secure" : "")
		if (navigator.cookieEnabled) {
			try {
				document.cookie = cookie;
			} catch (error) {
				console.error("WUICookie error:", error);
			}
		}
	}
	static get(name) {
		const cname = name+"=";
		let cookies = [];
		if (navigator.cookieEnabled) {
			try {
				cookies = decodeURIComponent(document.cookie).split(";");
			} catch (error) {
				console.error("WUICookie error:", error);
			}
			for (let i=0; i<cookies.length; i++) {
				let part = cookies[i];
				while (part.charAt(0) == " ") {
					part = part.substring(1);
				}
				if (part.indexOf(cname) == 0) {
					return part.substring(cname.length, part.length);
				}
			}
		}
		return "";
	}
	static remove(name) {
		this.set(name, "", {minutes: 0});
	}
};