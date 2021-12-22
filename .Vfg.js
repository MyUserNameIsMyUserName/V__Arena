
const V_App_Config = {
    // [ true  <>  false ] - @true -> dev mode is on [or else >>] Production mode.
    V_DEV: true,
    // _vis -> v_this => this --- for later accessing from within
    _vis: this,
    // Protocol environment value that was originally in env files.
    PROTOCOL: "http",
    // Host of the app 
    HOST: "localhost",
    // Application port to use
    PORT: 4411,
    // If located i a folder
    FOLDER: "",
    // <<-] Something ne to keep in mind that it will reject all unsafe connections.
    ACCEPT_UNSAFE: ((this.V_DEV === true) ? true : false),
};

// Just an easier to to read later variable.
const V_DEV = V_App_Config.V_DEV; 

let isDevMode = require('./helper_modules/vfg_isDevMode/vfg_isDevMode');


console.info((V_DEV) ? ("\n   ┌┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┐ \n <]╏ ▽ DEVELOPER_MODE ╏[>\n   └┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘ \n\n") : ("\n   ┏┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┓ \n <]╏ ▼ PRODUCION_MODE ╏[>\n   ┗┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┛ \n\n  " + JSON.stringify(V_App_Config)));

module.exports = {
    V_App_Config,
    V_DEV,
};
