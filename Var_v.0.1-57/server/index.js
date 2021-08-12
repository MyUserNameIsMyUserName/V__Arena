
require("dotenv").config();
const compression = require("compression");
const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");
const isOnline = require("is-online");
const app = express();
const _DevMode = require("../helper_modules/is_dev/is_dev_mode");
const [APP_URL, APP_FOLDER, APP_PORT, APP_HOST, APP_PROTOCOL ] = require("../helper_modules/app_url/env_app_url");
//check if online
(async () => {
  console.log(await isOnline());
  //=> true
  console.info("YEA WE ARE ONLINE");
})();
// END IsOnline




app.use(compression());

app.use("/", express.static(path.join(__dirname, "../PUBLIC")));


// Start server
app.listen(APP_PORT, () => {
  console.log(`Server up and running on ${APP_URL}`);
});