
require("dotenv").config();

const DetectMode = () => {
	if (typeof process.env.NODE_ENV !== "undefined") {
		if (process.env.NODE_ENV === "production") {
			console.info("PRODUCTION MODE");
			return false;
		} else if (process.env.NODE_ENV === "development") {
			console.warn("DEV MODE");
			return true;
		} else {
			console.warn("process.env.NODE_ENV must be present! Available modes are ['production', 'development']");
			return false;
		}
	} else {
		console.warn("process.env.NODE_ENV must be present! Available modes are ['production', 'development']");
		return false;
	}
};

const _DevMode = DetectMode();

module.exports = _DevMode;