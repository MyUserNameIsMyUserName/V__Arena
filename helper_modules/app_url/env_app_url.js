
require("dotenv").config();

const APP_PROTOCOL = process.env.APP_PROTOCOL;
const APP_HOST = process.env.APP_HOST;
const APP_PORT = process.env.APP_PORT;
const APP_FOLDER = process.env.APP_FOLDER;
let APP_URL = APP_PROTOCOL + "://" + APP_HOST; 

if ((APP_PORT == "") || (APP_FOLDER == "")){

    if (APP_PORT != ""){
        APP_URL = APP_URL + ":" + APP_PORT;
    } 
    
    if (APP_FOLDER != ""){
        APP_URL = APP_URL + "/" + APP_FOLDER;
    }

}

module.exports = [
	APP_URL, APP_FOLDER, APP_PORT, APP_HOST, APP_PROTOCOL
]