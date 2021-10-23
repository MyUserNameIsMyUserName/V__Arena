/*jshint esversion: 6 */

// ╔═══════════════════════════════════╗
// ║ ◭  V_Arena Config => [ .Vfg ]  ◮ ║
// ╟───────────────────────────────────╢
// ╠ ◔ INFO :                       ◬ ╣
// ╠ Probably a bad idea but I still   ╣
// ╠ do not have an ide why. Why not   ╣
// ╠ make things custom yet by the     ╣
// ╠ standard                          ╣
// ╟┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╢
// ╠ ◁ Author : -<[_.V._]>-         ▷ ╣
// ╚═══════════════════════════════════╝


const V_App_Config = {
    V_DEV: true,                    // [ true  <>  false ] - @true -> dev mode is on [or else >>] Prodution mode.
    _vis: this,                         // _vis -> v_this => this --- for later acessing from whitin
    PROTOCOL: "http",         // Protocol enviorment value that was originaly in env files.
    HOST: "localhost",          // Host of the app 
    PORT: 4411,                     // Application port to use
    FOLDER: "",                     // If located i a folder
    ACCEPT_UNSAFE: ((this.V_DEV === true) ? true : false),    // <<-] Something ne to keep in mind that it will reject all unsafe connections.
};

const V_DEV = V_App_Config.V_DEV;   // <= Just an easier to to read later variable.

let isDevMode = require('./helper_modules/vfg_isDevMode/vfg_isDevMode');


console.info((V_DEV) ? "\n   ┌┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┐ \n <]╏ ▽ DEVELOPER_MODE ╏[>\n   └┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘ \n" : "\n   ┏┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┓ \n <]╏ ▼ PRODUCION_MODE ╏[>\n   ┗┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┛ \n  " + V_App_Config);

module.exports = {
    V_App_Config,
    V_DEV,
};
