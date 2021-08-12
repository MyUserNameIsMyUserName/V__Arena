/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app_src/inputs/user_inputs.js":
/*!***************************************!*\
  !*** ./app_src/inputs/user_inputs.js ***!
  \***************************************/
/***/ ((module) => {

eval("/*jshint esversion: 6 */\r\nif (typeof mainApp === 'undefined') {\r\n\tvar mainApp = false;\r\n\tconsole.error(\"Missing Main APP script!\");\r\n};\r\n// PlayerControls / Inputs\r\nconst AppInputs = {\r\n  keyPress: [],\r\n  start: function () {\r\n    window.addEventListener(\"mousedown\", function (e) {\r\n      if (e.which === 1) {\r\n        var canvasBoundingRectangle = mainApp.camEl.getBoundingClientRect();\r\n        mouseX = e.clientX - canvasBoundingRectangle.left;\r\n        mouseY = e.clientY - canvasBoundingRectangle.top;\r\n        if (dbgMode > 1) {\r\n          //console.log(\"x:\" + mouseX + \"    y:\" + mouseY);\r\n          ctx.fillStyle = \"rgba(0,255,255,.95)\";\r\n          ctx.beginPath();\r\n          ctx.arc(mouseX, mouseY, 3, 0, 2 * Math.PI);\r\n          ctx.fill();\r\n        }\r\n      }\r\n    });\r\n    window.addEventListener(\"mousemove\", function (e) {\r\n      var canvasBoundingRectangle = mainApp.camEl.getBoundingClientRect();\r\n      mouseX = e.clientX - canvasBoundingRectangle.left;\r\n      mouseY = e.clientY - canvasBoundingRectangle.top;\r\n      if (dbgMode > 2) {\r\n        if (e.which === 1) {\r\n          ctx.strokeStyle = \"rgba(0,0,255,.25)\";\r\n        } else {\r\n          ctx.strokeStyle = \"rgba(0,255,0,.25)\";\r\n        }\r\n        //console.log(\"x:\" + mouseX + \"    y:\" + mouseY);\r\n        ctx.beginPath();\r\n        ctx.arc(mouseX, mouseY, 1, 0, 2 * Math.PI);\r\n        ctx.stroke();\r\n      }\r\n    });\r\n    window.addEventListener(\"mouseup\", function (e) {\r\n      if (e.which === 1) {\r\n        var canvasBoundingRectangle = mainApp.camEl.getBoundingClientRect();\r\n        mouseX = e.clientX - canvasBoundingRectangle.left;\r\n        mouseY = e.clientY - canvasBoundingRectangle.top;\r\n\r\n        if (dbgMode > 1) {\r\n          //console.log(\"x:\" + mouseX + \"    y:\" + mouseY);\r\n          ctx.fillStyle = \"rgba(255,0,255,1)\";\r\n          ctx.beginPath();\r\n          ctx.arc(mouseX, mouseY, 3, 0, 2 * Math.PI);\r\n          ctx.fill();\r\n        }\r\n      }\r\n    });\r\n\r\n    let lastTime = Date.now();\r\n\r\n    handle = (e) => {\r\n      e.preventDefault();\r\n\r\n      let text =\r\n        e.type +\r\n        \" key=\" +\r\n        e.key +\r\n        \" code=\" +\r\n        e.code +\r\n        (e.shiftKey ? \" shiftKey\" : \"\") +\r\n        (e.ctrlKey ? \" ctrlKey\" : \"\") +\r\n        (e.altKey ? \" altKey\" : \"\") +\r\n        (e.metaKey ? \" metaKey\" : \"\") +\r\n        (e.repeat ? \" (repeat)\" : \"\") +\r\n        \"\\n\";\r\n\r\n      lastTime = Date.now();\r\n\r\n      //console.log(text);\r\n      //console.log(e);\r\n      if (e.type == \"keydown\") {\r\n        if (AppInputs.keyPress.indexOf(e.key) == -1) {\r\n          //console.log((AppInputs.keyPress).indexOf(e.key));\r\n          AppInputs.keyPress.push(e.key);\r\n        }\r\n      } else {\r\n        var helperArray = AppInputs.keyPress;\r\n        var index = helperArray.indexOf(e.key);\r\n        if (index > -1) {\r\n          helperArray.splice(index, 1);\r\n        }\r\n        AppInputs.keyPress = helperArray;\r\n      }\r\n\r\n      //console.log(AppInputs.keyPress);\r\n      mainApp.methods.dbgSmall();\r\n      metal_hulk.drawAll();\r\n    };\r\n\r\n    window.onkeydown = window.onkeyup = window.onkeypress = handle;\r\n  },\r\n};\r\n\r\nmodule.exports = AppInputs;\r\n\n\n//# sourceURL=webpack://V__Arena/./app_src/inputs/user_inputs.js?");

/***/ }),

/***/ "./app_src/v_app.js":
/*!**************************!*\
  !*** ./app_src/v_app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("/*jshint esversion: 6 */\r\nconst dbgMode = 3; // 0 -> false, 1 -> true, 2 -> 'full' and  3 -> 'extended' ;\r\n\r\nvar mouseX = mouseY = 0;\r\nvar circles = [];\r\n\r\n\r\n//var c = new Circle(200, 200, 10, 'red');\r\n//circles.push(c);\r\n\r\n\r\nconst mainApp = {\r\n  camEl : \"\",\r\n\tinfo : {\r\n\t\tname: \"V_Arena\",\r\n\t\tdescription: \"The arena that will be used to develop much frustrations.\",\r\n\t\tversion: \"0.5.11\",\r\n\t},\r\n\tconfig: {\r\n\t\torigin: null,\r\n\t\tconsole: false\r\n\t},\r\n\tdata: {\r\n    title: 'PlayerAnimationTest',\r\n    date: '2021.01.11_04:11',\r\n\t\tplayer: {\r\n\t\t\tname: null,\r\n\t\t\thealth: 0,\r\n\t\t\tmodel: \"base_01\",\r\n\t\t},\r\n\t},\r\n  methods: {\r\n    start: function(){\r\n      //console.log('[> SoFunc :=>> mainApp.methods.start() <]');\r\n      //document.body.innerHTML += `<canvas id='cam1' class=\"gameCam\" width=\"800\" height=\"800\"></canvas>`;\r\n      mainApp.camEl = document.getElementById('cam2');\r\n      mainApp.camEl.style.border = '1px solid black';\r\n      AppInputs.start();\r\n    },\r\n    drawAll: function(){\r\n      this.drawCursor();\r\n      this.drawDbgInfo();\r\n    },\r\n    drawCursor: function(){\r\n      ctx.fillStyle = 'rgba(0,255,255,.95)';\r\n      ctx.beginPath();\r\n      ctx.arc(mouseX, mouseY, 3, 0, 2 * Math.PI);\r\n      ctx.fill();\r\n      \r\n      metal_hulk.anglDelta = Math.atan2(mouseY - (metal_hulk.posY + metal_hulk.modH/2), mouseX - (metal_hulk.posX + metal_hulk.modW/2)) * 180 / Math.PI;\r\n    },\r\n    dbgSmall: function(){\r\n      ctx.restore();\r\n      ctx.lineWidth = 1;\r\n      ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';\r\n      ctx.fillRect( 0 , mainApp.camEl.height-100, mainApp.camEl.width, 100 );\r\n      ctx.fillStyle = 'darkgreen';\r\n      ctx.font = \"15px monospace\";\r\n      ctx.fillText('Main App -> Data -> Title [: '+mainApp.data.title+' :]', 10 , mainApp.camEl.height-80);\r\n    },\r\n    drawDbgInfo: function(){\r\n      ctx.restore();\r\n      ctx.lineWidth = 1;\r\n      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';\r\n      ctx.fillRect( 0 , mainApp.camEl.height-200, mainApp.camEl.width, 200 );\r\n      ctx.fillStyle = 'lime';\r\n      ctx.font = \"15px monospace\";\r\n      ctx.fillText('Main App -> Data -> Title [: '+mainApp.data.title+' :]', 10 , mainApp.camEl.height-180);\r\n      ctx.fillText('Main App -> Data -> DoC [: '+mainApp.data.date+' :]', 10 , mainApp.camEl.height-160);\r\n      ctx.fillText('Main App -> Data -> Title [: '+mainApp.data.title+' :]', 10 , mainApp.camEl.height-180);\r\n      ctx.fillText('Main App Model...', 10 , mainApp.camEl.height-140);\r\n      ctx.fillText( JSON.stringify(mainApp), 10 , mainApp.camEl.height-120);\r\n      ctx.fillText( 'NOTE: Look at the console for the methods and camEl object data print.', 10 , mainApp.camEl.height-100);\r\n      //console.log( 'MainAPP camEl: '+mainApp.camEl+' || METHODS: '+mainApp.methods);\r\n    }\r\n  }\r\n}\r\n\r\n\r\nconst AppInputs = __webpack_require__(/*! ./inputs/user_inputs */ \"./app_src/inputs/user_inputs.js\")\r\n\r\nmainApp.methods.start();\r\n\r\nvar ctx = mainApp.camEl.getContext(\"2d\");\r\n//var gameRender = requestAnimationFrame(drawAll);\r\n/*\r\nfunction rawAll(){\r\n  //ctx.clearRect(0,0,mainApp.camEl.width, mainApp.camEl.height);\r\n  for(var i = 0; i < circles.length; i++) {\r\n    circles[i].update();\r\n    circles[i].draw(ctx);\r\n    //console.log(circles.length)\r\n  }\r\n  mainApp.methods.drawAll();\r\n  metal_hulk.drawAll();  \r\n  //requestAnimationFrame(drawAll);\r\n}*/\n\n//# sourceURL=webpack://V__Arena/./app_src/v_app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app_src/v_app.js");
/******/ 	
/******/ })()
;