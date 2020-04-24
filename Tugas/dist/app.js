/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/app.js","vendors~app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/app-bar.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/app-bar.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"nav {\\n    padding: 8px 0;\\n    background: #fff;\\n    -webkit-box-shadow: 0 2px 5px 0 rgba(135,135,135,0.18);\\n    -moz-box-shadow: 0 2px 5px 0 rgba(135,135,135,0.18);\\n    box-shadow: 0 2px 5px 0 rgba(135,135,135,0.18);\\n}\\n\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style/app-bar.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/article.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/article.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"article {\\n    /*padding: 0 10px 0 0;*/\\n    width: 100%;\\n    background: #fff;\\n    -webkit-box-shadow: 0 2px 5px 0 rgba(135,135,135,0.18);\\n    -moz-box-shadow: 0 2px 5px 0 rgba(135,135,135,0.18);\\n    box-shadow: 0 2px 5px 0 rgba(135,135,135,0.18);\\n    overflow: auto;\\n}\\n\\n.article-image img {\\n    display: block;\\n    width: 100%;\\n    height: 300px;\\n    object-fit: cover;\\n}\\n\\n.article-content {\\n\\n    padding: 0 15px;\\n}\\n\\n.article-content h4 {\\n    color: #ff5483;\\n    margin-bottom: 5px;\\n}\\n\\n.article-content p {\\n\\n    font-size: 14px;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style/article.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/container.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/container.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".container {\\n    padding: 0 14em;\\n}\\n\\n/*\\n  ##Device = Laptops, Desktops\\n  ##Screen = B/w 1025px to 1280px\\n*/\\n@media (min-width: 1025px) and (max-width: 1280px) {\\n\\n    .container {\\n        padding: 0 5em;\\n    }\\n}\\n\\n/*\\n  ##Device = Tablets, Ipads (portrait)\\n  ##Screen = B/w 768px to 1024px\\n*/\\n@media (min-width: 768px) and (max-width: 1024px) {\\n\\n    .container {\\n        padding: 0 14px;\\n    }\\n}\\n\\n/*\\n  ##Device = Tablets, Ipads (landscape)\\n  ##Screen = B/w 768px to 1024px\\n*/\\n@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {\\n\\n    .container {\\n        padding: 0 14px;\\n    }\\n}\\n\\n/*\\n  ##Device = Low Resolution Tablets, Mobiles (Landscape)\\n  ##Screen = B/w 481px to 767px\\n*/\\n@media (min-width: 481px) and (max-width: 767px) {\\n\\n    .container {\\n        padding: 0 14px;\\n    }\\n}\\n/*\\n  ##Device = Most of the Smartphones Mobiles (Portrait)\\n  ##Screen = B/w 320px to 479px\\n*/\\n@media (min-width: 320px) and (max-width: 480px) {\\n\\n    .container {\\n        padding: 0 14px;\\n    }\\n}\\n\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style/container.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/flex-container.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/flex-container.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".flex-container {\\n    display: flex;\\n    flex-direction: row;\\n}\\n\\n.flex-container > div {\\n    width: 100px;\\n    flex-grow: 8;\\n}\\n\\n.flex-container > div:last-child {\\n    width: 100px;\\n    margin: 0 15px;\\n    flex-grow: 3;\\n}\\n\\n/*\\n  ##Device = Low Resolution Tablets, Mobiles (Landscape)\\n  ##Screen = B/w 481px to 767px\\n*/\\n@media (min-width: 481px) and (max-width: 767px) {\\n\\n\\n    .flex-container {\\n        display: flex;\\n        flex-wrap: wrap;\\n    }\\n\\n    .flex-container > div {\\n        width: 100px;\\n        margin: 0;\\n        flex-basis: 100%;\\n    }\\n\\n    .flex-container > div:last-child {\\n        width: 100px;\\n        margin: 20px 0;\\n        flex-basis: 100%;\\n    }\\n\\n}\\n/*\\n  ##Device = Most of the Smartphones Mobiles (Portrait)\\n  ##Screen = B/w 320px to 479px\\n*/\\n@media (min-width: 320px) and (max-width: 480px) {\\n\\n\\n    .flex-container {\\n        display: flex;\\n        flex-wrap: wrap;\\n    }\\n\\n    .flex-container > div {\\n        width: 100px;\\n        margin: 0;\\n        flex-basis: 100%;\\n    }\\n\\n    .flex-container > div:last-child {\\n        width: 100px;\\n        margin: 20px 0;\\n        flex-basis: 100%;\\n    }\\n}\\n\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style/flex-container.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/footer.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/footer.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"footer {\\n    height: 200px;\\n    margin-top: 20px;\\n    border-top: 1px solid rgba(135,135,135,0.18);\\n    position: relative;\\n}\\n\\nfooter .footer-text {\\n    padding: 10px;\\n    background-color:rgb(240, 240, 240);\\n    font-size: 13px;\\n    position: absolute;\\n    width: 100%;\\n    bottom: 0;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style/footer.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/main.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/main.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./container.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/container.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_1___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./flex-container.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/flex-container.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_2___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./app-bar.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/app-bar.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_3___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./article.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/article.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_4___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./footer.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/footer.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_5___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./profile.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/profile.css\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Quicksand&display=swap);\"]);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_1___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_2___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_3___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_4___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_5___);\n// Module\nexports.push([module.i, \"\\n/* font face */\\n\\n*{ font-family: 'Quicksand', sans-serif;;}\\n\\nhtml, body {\\n    margin: 0;\\n    padding: 0;\\n    height: 100%;\\n    overflow-x: hidden;\\n}\\n\\nmain {\\n    margin-top: 16px;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/profile.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/profile.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"aside {\\n    padding: 15px 10px 10px;\\n    background: #fff;\\n    -webkit-box-shadow: 0 2px 5px 0 rgba(135,135,135,0.18);\\n    -moz-box-shadow: 0 2px 5px 0 rgba(135,135,135,0.18);\\n    box-shadow: 0 2px 5px 0 rgba(135,135,135,0.18);\\n    position: sticky; top: 10px;\\n}\\n\\n.avatar {\\n    width: 70px;\\n    border-radius: 50%;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style/profile.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.cjs.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/main.css */ \"./src/style/main.css\");\n/* harmony import */ var _style_main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_main_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _component_app_bar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/app-bar.js */ \"./src/component/app-bar.js\");\n/* harmony import */ var _component_app_bar_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_component_app_bar_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _component_profile_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/profile.js */ \"./src/component/profile.js\");\n/* harmony import */ var _component_profile_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_component_profile_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _component_footer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/footer.js */ \"./src/component/footer.js\");\n/* harmony import */ var _component_footer_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_component_footer_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _view_home_view_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/home.view.js */ \"./src/view/home.view.js\");\n/* harmony import */ var _view_addArticle_view_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/addArticle.view.js */ \"./src/view/addArticle.view.js\");\n/* harmony import */ var navigo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! navigo */ \"./node_modules/navigo/lib/navigo.min.js\");\n/* harmony import */ var navigo__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(navigo__WEBPACK_IMPORTED_MODULE_8__);\n // css\n\n // js\n\n\n\n\n // view\n\n\n //router\n\n // Your web app's Firebase configuration\n\nvar config = {\n  apiKey: \"AIzaSyCIITC8HLqXcs8HcsbyZJVYKqtYX3g9OqE\",\n  authDomain: \"friendlyeats-53606.firebaseapp.com\",\n  databaseURL: \"https://friendlyeats-53606.firebaseio.com\",\n  projectId: \"friendlyeats-53606\",\n  storageBucket: \"friendlyeats-53606.appspot.com\",\n  messagingSenderId: \"94283797300\",\n  appId: \"1:94283797300:web:a5991fa789b6542a29cb61\"\n}; // Initialize Firebase\n\nfirebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);\nvar router = new navigo__WEBPACK_IMPORTED_MODULE_8___default.a();\nrouter.on({\n  '/': function _() {\n    return document.addEventListener('DOMContentLoaded', _view_home_view_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n  },\n  '/lol': function lol() {\n    return Object(_view_addArticle_view_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n  }\n}).resolve();\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/component/add-article.js":
/*!**************************************!*\
  !*** ./src/component/add-article.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar addArticle = /*#__PURE__*/function (_HTMLElement) {\n  _inherits(addArticle, _HTMLElement);\n\n  var _super = _createSuper(addArticle);\n\n  function addArticle() {\n    _classCallCheck(this, addArticle);\n\n    return _super.call(this);\n  } // Akan terpanggil setiap kali elemen berhasil ditambahkan ke dokumen HTML (DOM).\n  // Callback ini merupakan tempat yang tepat untuk menjalankan konfigurasi awal seperti mendapatkan data,\n  // atau mengatur attribute.\n\n\n  _createClass(addArticle, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      this.render();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      this.innerHTML = \"\\n            <div>\\n                <form>\\n                    <label>Judul</label>\\n                    <input type=\\\"text\\\" />\\n                </form>\\n            </div>\\n        \";\n    }\n  }]);\n\n  return addArticle;\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\n\ncustomElements.define(\"add-article\", addArticle);\n\n//# sourceURL=webpack:///./src/component/add-article.js?");

/***/ }),

/***/ "./src/component/app-bar.js":
/*!**********************************!*\
  !*** ./src/component/app-bar.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar AppBar = /*#__PURE__*/function (_HTMLElement) {\n  _inherits(AppBar, _HTMLElement);\n\n  var _super = _createSuper(AppBar);\n\n  function AppBar() {\n    _classCallCheck(this, AppBar);\n\n    return _super.call(this);\n  }\n\n  _createClass(AppBar, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      this.render();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      this.innerHTML = \"\\n                <nav>\\n                    <section class=\\\"container\\\">\\n                        <img \\n                            src=\\\"https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png\\\"\\n                            alt=\\\"Renaldi Pranata\\\"\\n                        />\\n                    </section>\\n                </nav>\\n        \";\n    }\n  }]);\n\n  return AppBar;\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\n\ncustomElements.define('app-bar', AppBar);\n\n//# sourceURL=webpack:///./src/component/app-bar.js?");

/***/ }),

/***/ "./src/component/article-list.js":
/*!***************************************!*\
  !*** ./src/component/article-list.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar ArticleList = /*#__PURE__*/function (_HTMLElement) {\n  _inherits(ArticleList, _HTMLElement);\n\n  var _super = _createSuper(ArticleList);\n\n  function ArticleList() {\n    var _this;\n\n    _classCallCheck(this, ArticleList);\n\n    _this = _super.call(this);\n    _this._articles = [];\n    return _this;\n  } // Akan terpanggil setiap kali elemen berhasil ditambahkan ke dokumen HTML (DOM).\n  // Callback ini merupakan tempat yang tepat untuk menjalankan konfigurasi awal seperti mendapatkan data,\n  // atau mengatur attribute.\n\n\n  _createClass(ArticleList, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      this.render();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var element = this._articles.map(function (item) {\n        return \"\\n            <article>\\n                <div class=\\\"article-image\\\">\\n                    <img src=\\\"\".concat(item.thumbnailUrl, \"\\\" alt=\\\"\").concat(item.title, \"\\\" />\\n                </div>\\n                <div class=\\\"article-content\\\">\\n                    <h4>\").concat(item.title, \"</h4>\\n                    <p> \").concat(item.description || \"\", \"</p>\\n                </div>\\n            </article>\\n        \");\n      });\n\n      this.innerHTML = element.join('<br/>');\n    }\n  }, {\n    key: \"articles\",\n    set: function set(articles) {\n      this._articles = articles;\n      this.render();\n    }\n  }]);\n\n  return ArticleList;\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\n\ncustomElements.define(\"list-article\", ArticleList);\n\n//# sourceURL=webpack:///./src/component/article-list.js?");

/***/ }),

/***/ "./src/component/footer.js":
/*!*********************************!*\
  !*** ./src/component/footer.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n// import '../style/footer.css';\nvar Footer = /*#__PURE__*/function (_HTMLElement) {\n  _inherits(Footer, _HTMLElement);\n\n  var _super = _createSuper(Footer);\n\n  function Footer() {\n    _classCallCheck(this, Footer);\n\n    return _super.call(this);\n  }\n\n  _createClass(Footer, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      this.render();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      this.innerHTML = \"\\n                <footer>\\n                     <div class=\\\"footer-text\\\">\\n                        <div class=\\\"container\\\">\\n                            <p>copyright \\xA9 Renaldi Pranata | Get Know Cloud Firestore</p>\\n                        </div>\\n                    </div>\\n                </footer>\\n        \";\n    }\n  }]);\n\n  return Footer;\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\n\ncustomElements.define('footer-content', Footer);\n\n//# sourceURL=webpack:///./src/component/footer.js?");

/***/ }),

/***/ "./src/component/profile.js":
/*!**********************************!*\
  !*** ./src/component/profile.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n// import '../style/profile.css'\nvar Profile = /*#__PURE__*/function (_HTMLElement) {\n  _inherits(Profile, _HTMLElement);\n\n  var _super = _createSuper(Profile);\n\n  function Profile() {\n    _classCallCheck(this, Profile);\n\n    return _super.call(this);\n  }\n\n  _createClass(Profile, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      this.render();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      this.innerHTML = \"\\n            <aside>\\n                <div style=\\\"text-align: center\\\">\\n                    <img class=\\\"avatar\\\"\\n                         src=\\\"https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png\\\"\\n                         alt=\\\"renaldi pranta image\\\"\\n                    />\\n                    <p>\\n                        <b style=\\\"color: #ff5483\\\">Cloud Firestore</b>\\n                    </p>\\n                </div>\\n                <div>\\n                    <p style=\\\"font-size: 13px;\\\">\\n                        Cloud Firestore is a fast, fully managed, serverless, cloud-native NoSQL document database that simplifies storing, syncing, and querying data for your mobile, web, and IoT apps at global scale.\\n                    </p>\\n                </div>\\n            </aside>\\n        \";\n    }\n  }]);\n\n  return Profile;\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\n\ncustomElements.define('profile-figure', Profile);\n\n//# sourceURL=webpack:///./src/component/profile.js?");

/***/ }),

/***/ "./src/data/data-source.js":
/*!*********************************!*\
  !*** ./src/data/data-source.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.cjs.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar DataSource = /*#__PURE__*/function () {\n  function DataSource() {\n    _classCallCheck(this, DataSource);\n  }\n\n  _createClass(DataSource, [{\n    key: \"getDocumentsInQuery\",\n    value: function getDocumentsInQuery(query, renderer) {\n      query.onSnapshot(function (snapshot) {\n        if (!snapshot.size) return renderer.articles = [];\n        var data = [];\n        snapshot.forEach(function (doc) {\n          data.push(_objectSpread({}, doc.data(), {\n            id: doc.id\n          }));\n        });\n        return renderer.articles = data;\n      });\n    }\n  }, {\n    key: \"getAllArticles\",\n    value: function getAllArticles(renderer) {\n      var query = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.firestore().collection('articles');\n      this.getDocumentsInQuery(query, renderer);\n    }\n  }]);\n\n  return DataSource;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataSource);\n\n//# sourceURL=webpack:///./src/data/data-source.js?");

/***/ }),

/***/ "./src/style/main.css":
/*!****************************!*\
  !*** ./src/style/main.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/main.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/style/main.css?");

/***/ }),

/***/ "./src/view/addArticle.view.js":
/*!*************************************!*\
  !*** ./src/view/addArticle.view.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_add_article_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/add-article.js */ \"./src/component/add-article.js\");\n/* harmony import */ var _component_add_article_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_component_add_article_js__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar addArticleView = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var element;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            element = document.createElement('add-article');\n            document.querySelector('#root').innerHTML = '';\n            document.querySelector('#root').appendChild(element);\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function addArticleView() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (addArticleView);\n\n//# sourceURL=webpack:///./src/view/addArticle.view.js?");

/***/ }),

/***/ "./src/view/home.view.js":
/*!*******************************!*\
  !*** ./src/view/home.view.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_article_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/article-list.js */ \"./src/component/article-list.js\");\n/* harmony import */ var _component_article_list_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_component_article_list_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_data_source_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/data-source.js */ \"./src/data/data-source.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar homeView = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var element;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            element = document.createElement('list-article');\n            new _data_data_source_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().getAllArticles(element);\n            document.querySelector('#root').appendChild(element);\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function homeView() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (homeView);\n\n//# sourceURL=webpack:///./src/view/home.view.js?");

/***/ })

/******/ });