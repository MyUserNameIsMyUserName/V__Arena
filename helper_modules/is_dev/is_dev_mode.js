/*jshint esversion: 6 */
require("dotenv").config();
const v_uni = require('v_uni')
const productionMessage = `💀\[💀 MODE 💀 PRODUCTION ]💀` ;
const DetectMode = () => {
	if (typeof process.env.NODE_ENV !== "undefined") {
		if (process.env.NODE_ENV === "production") {
			console.info(productionMessage);
			return false;
		} else if (process.env.NODE_ENV === "development") {
			console.warn("<[_💀_DEV MODE ON_"+v_uni.anger+"_]>");
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
