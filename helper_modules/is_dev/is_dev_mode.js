
require("dotenv").config();

const DetectMode = () => {
	if (typeof process.env.NODE_ENV !== "undefined") {
		if (process.env.NODE_ENV === "production") {
			console.info("[PRODUCTION MODE ON]");
			return false;
		} else if (process.env.NODE_ENV === "development") {
			console.warn("<[_!_DEV MODE ON_!_]>");
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


//---------------------------------------
// How To Use
//-  -  -  -  -  -  -  -  -  -  -  -  - 
//   if (_DevMode) {
// 	  console.info("DEV MODE ON!");
//   } else {
// 	  console.info("PRODUCTION MODE ON!");
//   };
//---------------------------------------