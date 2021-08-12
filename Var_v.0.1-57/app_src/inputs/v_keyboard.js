// V_KEYBOARD.JS -----------------
/*jshint esversion: 6 */

const V_Keyboard = {
	pressed: [],
	handle: (e)=>{
		e.preventDefault();
		console.log(e);
		inputsWorker.postMessage(JSON.stringify({
																		type: e.type,
																		key: e.key, 
																		code: e.code, 
																		shiftKey: e.shiftKey, 
																		ctrlKey: e.ctrlKey, 
																		altKey: e.altKey, 
																		metaKey: e.metaKey, 
																		repeat: e.repeat
																}));
	}
}
var keysPressed = [];

var inputsWorker = new Worker('webWorkers/inputs.js');

inputsWorker.onmessage = function(oEvent) {
  console.log('Worker said : ' + oEvent.data);
};





window.onkeydown = window.onkeyup = window.onkeypress = handle;