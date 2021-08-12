const V_App_Config = require("../../.Vfg.js");

const isDevMode = () => { 
    return V_App_Config.V_DEV;
}

module.exports = isDevMode;
