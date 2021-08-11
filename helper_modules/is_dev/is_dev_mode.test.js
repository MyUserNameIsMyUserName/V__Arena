/*jshint esversion: 6 */
const _DevMode = require("./is_dev_mode");

console.log(`DEV_MODE >> ${_DevMode}`);
console.log(`INVERT DEV_MODE >> ${!_DevMode}`);