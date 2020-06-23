/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\Olingatorek\\\\Desktop\\\\bookingFlight\\\\src\\\\index.js: Identifier 'style' has already been declared (2:7)\\n\\n\\u001b[0m \\u001b[90m 1 | \\u001b[39m\\u001b[36mimport\\u001b[39m style from \\u001b[32m\\\"./scss/index.scss\\\"\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 2 | \\u001b[39m\\u001b[36mimport\\u001b[39m style from  \\u001b[32m'../vendor/bootstrap-4.5.0/scss/bootstrap.scss'\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m   | \\u001b[39m       \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n    at Parser._raise (C:\\\\Users\\\\Olingatorek\\\\Desktop\\\\bookingFlight\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:754:17)\\n    at Parser.raiseWithData (C:\\\\Users\\\\Olingatorek\\\\Desktop\\\\bookingFlight\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:747:17)\\n    at Parser.raise (C:\\\\Users\\\\Olingatorek\\\\Desktop\\\\bookingFlight\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:741:17)\\n    at ScopeHandler.checkRedeclarationInScope (C:\\\\Users\\\\Olingatorek\\\\Desktop\\\\bookingFlight\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4813:12)\\n    at ScopeHandler.declareName (C:\\\\Users\\\\Olingatorek\\\\Desktop\\\\bookingFlight\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4779:12)\\n    at Parser.checkLVal (C:\\\\Users\\\\Olingatorek\\\\Desktop\\\\bookingFlight\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9298:22)\\n    at Parser.parseImportSpecifierLocal (C:\\\\Users\\\\Olingatorek\\\\Desktop\\\\bookingFlight\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12610:10)\\n    at Parser.maybeParseDefaultImportSpecifier (C:\\\\Users\\\\Olingatorek\\\\Desktop\\\\bookingFlight\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12655:12)\\n    at Parser.parseImport (C:\\\\Users\\\\Olingatorek\\\\Desktop\\\\bookingFlight\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12581:31)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\Olingatorek\\\\Desktop\\\\bookingFlight\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11291:27)\\n    at Parser.parseStatement (C:\\\\Users\\\\Olingatorek\\\\Desktop\\\\bookingFlight\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11193:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\Users\\\\Olingatorek\\\\Desktop\\\\bookingFlight\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11768:25)\\n    at Parser.parseBlockBody (C:\\\\Users\\\\Olingatorek\\\\Desktop\\\\bookingFlight\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11754:10)\\n    at Parser.parseTopLevel (C:\\\\Users\\\\Olingatorek\\\\Desktop\\\\bookingFlight\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11124:10)\\n    at Parser.parse (C:\\\\Users\\\\Olingatorek\\\\Desktop\\\\bookingFlight\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12826:10)\\n    at parse (C:\\\\Users\\\\Olingatorek\\\\Desktop\\\\bookingFlight\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12879:38)\\n    at parser (C:\\\\Users\\\\Olingatorek\\\\Desktop\\\\bookingFlight\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\parser\\\\index.js:54:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (C:\\\\Users\\\\Olingatorek\\\\Desktop\\\\bookingFlight\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:93:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (C:\\\\Users\\\\Olingatorek\\\\Desktop\\\\bookingFlight\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:31:50)\\n    at run.next (<anonymous>)\\n    at Function.transform (C:\\\\Users\\\\Olingatorek\\\\Desktop\\\\bookingFlight\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transform.js:27:41)\\n    at transform.next (<anonymous>)\\n    at step (C:\\\\Users\\\\Olingatorek\\\\Desktop\\\\bookingFlight\\\\node_modules\\\\gensync\\\\index.js:254:32)\\n    at C:\\\\Users\\\\Olingatorek\\\\Desktop\\\\bookingFlight\\\\node_modules\\\\gensync\\\\index.js:266:13\\n    at async.call.result.err.err (C:\\\\Users\\\\Olingatorek\\\\Desktop\\\\bookingFlight\\\\node_modules\\\\gensync\\\\index.js:216:11)\\n    at C:\\\\Users\\\\Olingatorek\\\\Desktop\\\\bookingFlight\\\\node_modules\\\\gensync\\\\index.js:184:28\\n    at C:\\\\Users\\\\Olingatorek\\\\Desktop\\\\bookingFlight\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\gensync-utils\\\\async.js:72:7\\n    at C:\\\\Users\\\\Olingatorek\\\\Desktop\\\\bookingFlight\\\\node_modules\\\\gensync\\\\index.js:108:33\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });