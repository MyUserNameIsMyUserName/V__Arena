postMessage("I\'m working before postMessage(\'ali\').");

onmessage = function(oEvent) {
  var objData = oEvent.data;
  /*
  let text = e.type +
    ' key=' + e.key +
    ' code=' + e.code +
    (e.shiftKey ? ' shiftKey' : '') +
    (e.ctrlKey ? ' ctrlKey' : '') +
    (e.altKey ? ' altKey' : '') +
    (e.metaKey ? ' metaKey' : '') +
    (e.repeat ? ' (repeat)' : '') +
    "\n";*/

	console.info("Keyboard_Worker Received Data >> ");
	console.info(objData);
  postMessage( objData );
};