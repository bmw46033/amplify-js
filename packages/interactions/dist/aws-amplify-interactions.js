(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@aws-amplify/core"));
	else if(typeof define === 'function' && define.amd)
		define("aws_amplify_interactions", ["@aws-amplify/core"], factory);
	else if(typeof exports === 'object')
		exports["aws_amplify_interactions"] = factory(require("@aws-amplify/core"));
	else
		root["aws_amplify_interactions"] = factory(root["@aws-amplify/core"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__aws_amplify_core__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib-esm/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@aws-crypto/ie11-detection/build/CryptoOperation.js":
/*!***********************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-crypto/ie11-detection/build/CryptoOperation.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=CryptoOperation.js.map

/***/ }),

/***/ "../../node_modules/@aws-crypto/ie11-detection/build/Key.js":
/*!***********************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-crypto/ie11-detection/build/Key.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=Key.js.map

/***/ }),

/***/ "../../node_modules/@aws-crypto/ie11-detection/build/KeyOperation.js":
/*!********************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-crypto/ie11-detection/build/KeyOperation.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=KeyOperation.js.map

/***/ }),

/***/ "../../node_modules/@aws-crypto/ie11-detection/build/MsSubtleCrypto.js":
/*!**********************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-crypto/ie11-detection/build/MsSubtleCrypto.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=MsSubtleCrypto.js.map

/***/ }),

/***/ "../../node_modules/@aws-crypto/ie11-detection/build/MsWindow.js":
/*!****************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-crypto/ie11-detection/build/MsWindow.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isMsWindow = void 0;
var msSubtleCryptoMethods = [
    "decrypt",
    "digest",
    "encrypt",
    "exportKey",
    "generateKey",
    "importKey",
    "sign",
    "verify"
];
function quacksLikeAnMsWindow(window) {
    return "MSInputMethodContext" in window && "msCrypto" in window;
}
/**
 * Determines if the provided window is (or is like) the window object one would
 * expect to encounter in Internet Explorer 11.
 */
function isMsWindow(window) {
    if (quacksLikeAnMsWindow(window) && window.msCrypto.subtle !== undefined) {
        var _a = window.msCrypto, getRandomValues = _a.getRandomValues, subtle_1 = _a.subtle;
        return msSubtleCryptoMethods
            .map(function (methodName) { return subtle_1[methodName]; })
            .concat(getRandomValues)
            .every(function (method) { return typeof method === "function"; });
    }
    return false;
}
exports.isMsWindow = isMsWindow;
//# sourceMappingURL=MsWindow.js.map

/***/ }),

/***/ "../../node_modules/@aws-crypto/ie11-detection/build/index.js":
/*!*************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-crypto/ie11-detection/build/index.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__(/*! ./CryptoOperation */ "../../node_modules/@aws-crypto/ie11-detection/build/CryptoOperation.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./Key */ "../../node_modules/@aws-crypto/ie11-detection/build/Key.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./KeyOperation */ "../../node_modules/@aws-crypto/ie11-detection/build/KeyOperation.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./MsSubtleCrypto */ "../../node_modules/@aws-crypto/ie11-detection/build/MsSubtleCrypto.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./MsWindow */ "../../node_modules/@aws-crypto/ie11-detection/build/MsWindow.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/@aws-crypto/sha256-browser/build/constants.js":
/*!*****************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-crypto/sha256-browser/build/constants.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EMPTY_DATA_SHA_256 = exports.SHA_256_HMAC_ALGO = exports.SHA_256_HASH = void 0;
exports.SHA_256_HASH = { name: "SHA-256" };
exports.SHA_256_HMAC_ALGO = {
    name: "HMAC",
    hash: exports.SHA_256_HASH
};
exports.EMPTY_DATA_SHA_256 = new Uint8Array([
    227,
    176,
    196,
    66,
    152,
    252,
    28,
    20,
    154,
    251,
    244,
    200,
    153,
    111,
    185,
    36,
    39,
    174,
    65,
    228,
    100,
    155,
    147,
    76,
    164,
    149,
    153,
    27,
    120,
    82,
    184,
    85
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLFlBQVksR0FBd0IsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7QUFFeEQsUUFBQSxpQkFBaUIsR0FBZ0Q7SUFDNUUsSUFBSSxFQUFFLE1BQU07SUFDWixJQUFJLEVBQUUsb0JBQVk7Q0FDbkIsQ0FBQztBQUVXLFFBQUEsa0JBQWtCLEdBQUcsSUFBSSxVQUFVLENBQUM7SUFDL0MsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsRUFBRTtJQUNGLEdBQUc7SUFDSCxHQUFHO0lBQ0gsRUFBRTtJQUNGLEVBQUU7SUFDRixHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsRUFBRTtJQUNGLEVBQUU7SUFDRixHQUFHO0lBQ0gsRUFBRTtJQUNGLEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxFQUFFO0lBQ0YsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsRUFBRTtJQUNGLEdBQUc7SUFDSCxFQUFFO0lBQ0YsR0FBRztJQUNILEVBQUU7Q0FDSCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgU0hBXzI1Nl9IQVNIOiB7IG5hbWU6IFwiU0hBLTI1NlwiIH0gPSB7IG5hbWU6IFwiU0hBLTI1NlwiIH07XG5cbmV4cG9ydCBjb25zdCBTSEFfMjU2X0hNQUNfQUxHTzogeyBuYW1lOiBcIkhNQUNcIjsgaGFzaDogeyBuYW1lOiBcIlNIQS0yNTZcIiB9IH0gPSB7XG4gIG5hbWU6IFwiSE1BQ1wiLFxuICBoYXNoOiBTSEFfMjU2X0hBU0hcbn07XG5cbmV4cG9ydCBjb25zdCBFTVBUWV9EQVRBX1NIQV8yNTYgPSBuZXcgVWludDhBcnJheShbXG4gIDIyNyxcbiAgMTc2LFxuICAxOTYsXG4gIDY2LFxuICAxNTIsXG4gIDI1MixcbiAgMjgsXG4gIDIwLFxuICAxNTQsXG4gIDI1MSxcbiAgMjQ0LFxuICAyMDAsXG4gIDE1MyxcbiAgMTExLFxuICAxODUsXG4gIDM2LFxuICAzOSxcbiAgMTc0LFxuICA2NSxcbiAgMjI4LFxuICAxMDAsXG4gIDE1NSxcbiAgMTQ3LFxuICA3NixcbiAgMTY0LFxuICAxNDksXG4gIDE1MyxcbiAgMjcsXG4gIDEyMCxcbiAgODIsXG4gIDE4NCxcbiAgODVcbl0pO1xuIl19

/***/ }),

/***/ "../../node_modules/@aws-crypto/sha256-browser/build/crossPlatformSha256.js":
/*!***************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-crypto/sha256-browser/build/crossPlatformSha256.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Sha256 = void 0;
var ie11Sha256_1 = __webpack_require__(/*! ./ie11Sha256 */ "../../node_modules/@aws-crypto/sha256-browser/build/ie11Sha256.js");
var webCryptoSha256_1 = __webpack_require__(/*! ./webCryptoSha256 */ "../../node_modules/@aws-crypto/sha256-browser/build/webCryptoSha256.js");
var sha256_js_1 = __webpack_require__(/*! @aws-crypto/sha256-js */ "../../node_modules/@aws-crypto/sha256-js/build/index.js");
var supports_web_crypto_1 = __webpack_require__(/*! @aws-crypto/supports-web-crypto */ "../../node_modules/@aws-crypto/supports-web-crypto/build/index.js");
var ie11_detection_1 = __webpack_require__(/*! @aws-crypto/ie11-detection */ "../../node_modules/@aws-crypto/ie11-detection/build/index.js");
var util_locate_window_1 = __webpack_require__(/*! @aws-sdk/util-locate-window */ "../../node_modules/@aws-sdk/util-locate-window/dist/es/index.js");
var Sha256 = /** @class */ (function () {
    function Sha256(secret) {
        if (supports_web_crypto_1.supportsWebCrypto(util_locate_window_1.locateWindow())) {
            this.hash = new webCryptoSha256_1.Sha256(secret);
        }
        else if (ie11_detection_1.isMsWindow(util_locate_window_1.locateWindow())) {
            this.hash = new ie11Sha256_1.Sha256(secret);
        }
        else {
            this.hash = new sha256_js_1.Sha256(secret);
        }
    }
    Sha256.prototype.update = function (data, encoding) {
        this.hash.update(data, encoding);
    };
    Sha256.prototype.digest = function () {
        return this.hash.digest();
    };
    return Sha256;
}());
exports.Sha256 = Sha256;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvc3NQbGF0Zm9ybVNoYTI1Ni5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jcm9zc1BsYXRmb3JtU2hhMjU2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUFvRDtBQUNwRCxxREFBOEQ7QUFDOUQsbURBQTJEO0FBRTNELHVFQUFvRTtBQUNwRSw2REFBd0Q7QUFDeEQsa0VBQTJEO0FBRTNEO0lBR0UsZ0JBQVksTUFBbUI7UUFDN0IsSUFBSSx1Q0FBaUIsQ0FBQyxpQ0FBWSxFQUFFLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksd0JBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN6QzthQUFNLElBQUksMkJBQVUsQ0FBQyxpQ0FBWSxFQUFFLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksbUJBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNwQzthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGtCQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBRUQsdUJBQU0sR0FBTixVQUFPLElBQWdCLEVBQUUsUUFBc0M7UUFDN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCx1QkFBTSxHQUFOO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQztBQXBCWSx3QkFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoYTI1NiBhcyBJZTExU2hhMjU2IH0gZnJvbSBcIi4vaWUxMVNoYTI1NlwiO1xuaW1wb3J0IHsgU2hhMjU2IGFzIFdlYkNyeXB0b1NoYTI1NiB9IGZyb20gXCIuL3dlYkNyeXB0b1NoYTI1NlwiO1xuaW1wb3J0IHsgU2hhMjU2IGFzIEpzU2hhMjU2IH0gZnJvbSBcIkBhd3MtY3J5cHRvL3NoYTI1Ni1qc1wiO1xuaW1wb3J0IHsgSGFzaCwgU291cmNlRGF0YSB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuaW1wb3J0IHsgc3VwcG9ydHNXZWJDcnlwdG8gfSBmcm9tIFwiQGF3cy1jcnlwdG8vc3VwcG9ydHMtd2ViLWNyeXB0b1wiO1xuaW1wb3J0IHsgaXNNc1dpbmRvdyB9IGZyb20gXCJAYXdzLWNyeXB0by9pZTExLWRldGVjdGlvblwiO1xuaW1wb3J0IHsgbG9jYXRlV2luZG93IH0gZnJvbSBcIkBhd3Mtc2RrL3V0aWwtbG9jYXRlLXdpbmRvd1wiO1xuXG5leHBvcnQgY2xhc3MgU2hhMjU2IGltcGxlbWVudHMgSGFzaCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgaGFzaDogSGFzaDtcblxuICBjb25zdHJ1Y3RvcihzZWNyZXQ/OiBTb3VyY2VEYXRhKSB7XG4gICAgaWYgKHN1cHBvcnRzV2ViQ3J5cHRvKGxvY2F0ZVdpbmRvdygpKSkge1xuICAgICAgdGhpcy5oYXNoID0gbmV3IFdlYkNyeXB0b1NoYTI1NihzZWNyZXQpO1xuICAgIH0gZWxzZSBpZiAoaXNNc1dpbmRvdyhsb2NhdGVXaW5kb3coKSkpIHtcbiAgICAgIHRoaXMuaGFzaCA9IG5ldyBJZTExU2hhMjU2KHNlY3JldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGFzaCA9IG5ldyBKc1NoYTI1NihzZWNyZXQpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShkYXRhOiBTb3VyY2VEYXRhLCBlbmNvZGluZz86IFwidXRmOFwiIHwgXCJhc2NpaVwiIHwgXCJsYXRpbjFcIik6IHZvaWQge1xuICAgIHRoaXMuaGFzaC51cGRhdGUoZGF0YSwgZW5jb2RpbmcpO1xuICB9XG5cbiAgZGlnZXN0KCk6IFByb21pc2U8VWludDhBcnJheT4ge1xuICAgIHJldHVybiB0aGlzLmhhc2guZGlnZXN0KCk7XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-crypto/sha256-browser/build/ie11Sha256.js":
/*!******************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-crypto/sha256-browser/build/ie11Sha256.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Sha256 = void 0;
var isEmptyData_1 = __webpack_require__(/*! ./isEmptyData */ "../../node_modules/@aws-crypto/sha256-browser/build/isEmptyData.js");
var constants_1 = __webpack_require__(/*! ./constants */ "../../node_modules/@aws-crypto/sha256-browser/build/constants.js");
var util_utf8_browser_1 = __webpack_require__(/*! @aws-sdk/util-utf8-browser */ "../../node_modules/@aws-crypto/sha256-browser/node_modules/@aws-sdk/util-utf8-browser/dist/es/index.js");
var util_locate_window_1 = __webpack_require__(/*! @aws-sdk/util-locate-window */ "../../node_modules/@aws-sdk/util-locate-window/dist/es/index.js");
var Sha256 = /** @class */ (function () {
    function Sha256(secret) {
        if (secret) {
            this.operation = getKeyPromise(secret).then(function (keyData) {
                return util_locate_window_1.locateWindow().msCrypto.subtle.sign(constants_1.SHA_256_HMAC_ALGO, keyData);
            });
            this.operation.catch(function () { });
        }
        else {
            this.operation = Promise.resolve(util_locate_window_1.locateWindow().msCrypto.subtle.digest("SHA-256"));
        }
    }
    Sha256.prototype.update = function (toHash) {
        var _this = this;
        if (isEmptyData_1.isEmptyData(toHash)) {
            return;
        }
        this.operation = this.operation.then(function (operation) {
            operation.onerror = function () {
                _this.operation = Promise.reject(new Error("Error encountered updating hash"));
            };
            operation.process(toArrayBufferView(toHash));
            return operation;
        });
        this.operation.catch(function () { });
    };
    Sha256.prototype.digest = function () {
        return this.operation.then(function (operation) {
            return new Promise(function (resolve, reject) {
                operation.onerror = function () {
                    reject(new Error("Error encountered finalizing hash"));
                };
                operation.oncomplete = function () {
                    if (operation.result) {
                        resolve(new Uint8Array(operation.result));
                    }
                    reject(new Error("Error encountered finalizing hash"));
                };
                operation.finish();
            });
        });
    };
    return Sha256;
}());
exports.Sha256 = Sha256;
function getKeyPromise(secret) {
    return new Promise(function (resolve, reject) {
        var keyOperation = util_locate_window_1.locateWindow().msCrypto.subtle.importKey("raw", toArrayBufferView(secret), constants_1.SHA_256_HMAC_ALGO, false, ["sign"]);
        keyOperation.oncomplete = function () {
            if (keyOperation.result) {
                resolve(keyOperation.result);
            }
            reject(new Error("ImportKey completed without importing key."));
        };
        keyOperation.onerror = function () {
            reject(new Error("ImportKey failed to import key."));
        };
    });
}
function toArrayBufferView(data) {
    if (typeof data === "string") {
        return util_utf8_browser_1.fromUtf8(data);
    }
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWUxMVNoYTI1Ni5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9pZTExU2hhMjU2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUE0QztBQUM1Qyx5Q0FBZ0Q7QUFFaEQsZ0VBQXNEO0FBRXRELGtFQUEyRDtBQUUzRDtJQUdFLGdCQUFZLE1BQW1CO1FBQzdCLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsT0FBTztnQkFDakQsT0FBQyxpQ0FBWSxFQUFlLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQy9DLDZCQUFpQixFQUNqQixPQUFPLENBQ1I7WUFIRCxDQUdDLENBQ0YsQ0FBQztZQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGNBQU8sQ0FBQyxDQUFDLENBQUM7U0FDaEM7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FDN0IsaUNBQVksRUFBZSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUMvRCxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQsdUJBQU0sR0FBTixVQUFPLE1BQWtCO1FBQXpCLGlCQWdCQztRQWZDLElBQUkseUJBQVcsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN2QixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUEsU0FBUztZQUM1QyxTQUFTLENBQUMsT0FBTyxHQUFHO2dCQUNsQixLQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQzdCLElBQUksS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQzdDLENBQUM7WUFDSixDQUFDLENBQUM7WUFDRixTQUFTLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFFN0MsT0FBTyxTQUFTLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxjQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCx1QkFBTSxHQUFOO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDeEIsVUFBQSxTQUFTO1lBQ1AsT0FBQSxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUMxQixTQUFTLENBQUMsT0FBTyxHQUFHO29CQUNsQixNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDO2dCQUN6RCxDQUFDLENBQUM7Z0JBQ0YsU0FBUyxDQUFDLFVBQVUsR0FBRztvQkFDckIsSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFO3dCQUNwQixPQUFPLENBQUMsSUFBSSxVQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7cUJBQzNDO29CQUNELE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pELENBQUMsQ0FBQztnQkFFRixTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDckIsQ0FBQyxDQUFDO1FBWkYsQ0FZRSxDQUNMLENBQUM7SUFDSixDQUFDO0lBQ0gsYUFBQztBQUFELENBQUMsQUF2REQsSUF1REM7QUF2RFksd0JBQU07QUF5RG5CLFNBQVMsYUFBYSxDQUFDLE1BQWtCO0lBQ3ZDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUNqQyxJQUFNLFlBQVksR0FBSSxpQ0FBWSxFQUFlLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQ3pFLEtBQUssRUFDTCxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsRUFDekIsNkJBQWlCLEVBQ2pCLEtBQUssRUFDTCxDQUFDLE1BQU0sQ0FBQyxDQUNULENBQUM7UUFFRixZQUFZLENBQUMsVUFBVSxHQUFHO1lBQ3hCLElBQUksWUFBWSxDQUFDLE1BQU0sRUFBRTtnQkFDdkIsT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM5QjtZQUVELE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDLENBQUM7UUFDbEUsQ0FBQyxDQUFDO1FBQ0YsWUFBWSxDQUFDLE9BQU8sR0FBRztZQUNyQixNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELFNBQVMsaUJBQWlCLENBQUMsSUFBZ0I7SUFDekMsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7UUFDNUIsT0FBTyw0QkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3ZCO0lBRUQsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzVCLE9BQU8sSUFBSSxVQUFVLENBQ25CLElBQUksQ0FBQyxNQUFNLEVBQ1gsSUFBSSxDQUFDLFVBQVUsRUFDZixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxpQkFBaUIsQ0FDL0MsQ0FBQztLQUNIO0lBRUQsT0FBTyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNFbXB0eURhdGEgfSBmcm9tIFwiLi9pc0VtcHR5RGF0YVwiO1xuaW1wb3J0IHsgU0hBXzI1Nl9ITUFDX0FMR08gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEhhc2gsIFNvdXJjZURhdGEgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcbmltcG9ydCB7IGZyb21VdGY4IH0gZnJvbSBcIkBhd3Mtc2RrL3V0aWwtdXRmOC1icm93c2VyXCI7XG5pbXBvcnQgeyBDcnlwdG9PcGVyYXRpb24sIEtleSwgTXNXaW5kb3cgfSBmcm9tIFwiQGF3cy1jcnlwdG8vaWUxMS1kZXRlY3Rpb25cIjtcbmltcG9ydCB7IGxvY2F0ZVdpbmRvdyB9IGZyb20gXCJAYXdzLXNkay91dGlsLWxvY2F0ZS13aW5kb3dcIjtcblxuZXhwb3J0IGNsYXNzIFNoYTI1NiBpbXBsZW1lbnRzIEhhc2gge1xuICBwcml2YXRlIG9wZXJhdGlvbjogUHJvbWlzZTxDcnlwdG9PcGVyYXRpb24+O1xuXG4gIGNvbnN0cnVjdG9yKHNlY3JldD86IFNvdXJjZURhdGEpIHtcbiAgICBpZiAoc2VjcmV0KSB7XG4gICAgICB0aGlzLm9wZXJhdGlvbiA9IGdldEtleVByb21pc2Uoc2VjcmV0KS50aGVuKGtleURhdGEgPT5cbiAgICAgICAgKGxvY2F0ZVdpbmRvdygpIGFzIE1zV2luZG93KS5tc0NyeXB0by5zdWJ0bGUuc2lnbihcbiAgICAgICAgICBTSEFfMjU2X0hNQUNfQUxHTyxcbiAgICAgICAgICBrZXlEYXRhXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgICB0aGlzLm9wZXJhdGlvbi5jYXRjaCgoKSA9PiB7fSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3BlcmF0aW9uID0gUHJvbWlzZS5yZXNvbHZlKFxuICAgICAgICAobG9jYXRlV2luZG93KCkgYXMgTXNXaW5kb3cpLm1zQ3J5cHRvLnN1YnRsZS5kaWdlc3QoXCJTSEEtMjU2XCIpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSh0b0hhc2g6IFNvdXJjZURhdGEpOiB2b2lkIHtcbiAgICBpZiAoaXNFbXB0eURhdGEodG9IYXNoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMub3BlcmF0aW9uID0gdGhpcy5vcGVyYXRpb24udGhlbihvcGVyYXRpb24gPT4ge1xuICAgICAgb3BlcmF0aW9uLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMub3BlcmF0aW9uID0gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgbmV3IEVycm9yKFwiRXJyb3IgZW5jb3VudGVyZWQgdXBkYXRpbmcgaGFzaFwiKVxuICAgICAgICApO1xuICAgICAgfTtcbiAgICAgIG9wZXJhdGlvbi5wcm9jZXNzKHRvQXJyYXlCdWZmZXJWaWV3KHRvSGFzaCkpO1xuXG4gICAgICByZXR1cm4gb3BlcmF0aW9uO1xuICAgIH0pO1xuICAgIHRoaXMub3BlcmF0aW9uLmNhdGNoKCgpID0+IHt9KTtcbiAgfVxuXG4gIGRpZ2VzdCgpOiBQcm9taXNlPFVpbnQ4QXJyYXk+IHtcbiAgICByZXR1cm4gdGhpcy5vcGVyYXRpb24udGhlbjxVaW50OEFycmF5PihcbiAgICAgIG9wZXJhdGlvbiA9PlxuICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgb3BlcmF0aW9uLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiRXJyb3IgZW5jb3VudGVyZWQgZmluYWxpemluZyBoYXNoXCIpKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIG9wZXJhdGlvbi5vbmNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKG9wZXJhdGlvbi5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgVWludDhBcnJheShvcGVyYXRpb24ucmVzdWx0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiRXJyb3IgZW5jb3VudGVyZWQgZmluYWxpemluZyBoYXNoXCIpKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgb3BlcmF0aW9uLmZpbmlzaCgpO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0S2V5UHJvbWlzZShzZWNyZXQ6IFNvdXJjZURhdGEpOiBQcm9taXNlPEtleT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IGtleU9wZXJhdGlvbiA9IChsb2NhdGVXaW5kb3coKSBhcyBNc1dpbmRvdykubXNDcnlwdG8uc3VidGxlLmltcG9ydEtleShcbiAgICAgIFwicmF3XCIsXG4gICAgICB0b0FycmF5QnVmZmVyVmlldyhzZWNyZXQpLFxuICAgICAgU0hBXzI1Nl9ITUFDX0FMR08sXG4gICAgICBmYWxzZSxcbiAgICAgIFtcInNpZ25cIl1cbiAgICApO1xuXG4gICAga2V5T3BlcmF0aW9uLm9uY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAoa2V5T3BlcmF0aW9uLnJlc3VsdCkge1xuICAgICAgICByZXNvbHZlKGtleU9wZXJhdGlvbi5yZXN1bHQpO1xuICAgICAgfVxuXG4gICAgICByZWplY3QobmV3IEVycm9yKFwiSW1wb3J0S2V5IGNvbXBsZXRlZCB3aXRob3V0IGltcG9ydGluZyBrZXkuXCIpKTtcbiAgICB9O1xuICAgIGtleU9wZXJhdGlvbi5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIkltcG9ydEtleSBmYWlsZWQgdG8gaW1wb3J0IGtleS5cIikpO1xuICAgIH07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0b0FycmF5QnVmZmVyVmlldyhkYXRhOiBTb3VyY2VEYXRhKTogVWludDhBcnJheSB7XG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBmcm9tVXRmOChkYXRhKTtcbiAgfVxuXG4gIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoZGF0YSkpIHtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoXG4gICAgICBkYXRhLmJ1ZmZlcixcbiAgICAgIGRhdGEuYnl0ZU9mZnNldCxcbiAgICAgIGRhdGEuYnl0ZUxlbmd0aCAvIFVpbnQ4QXJyYXkuQllURVNfUEVSX0VMRU1FTlRcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGRhdGEpO1xufVxuIl19

/***/ }),

/***/ "../../node_modules/@aws-crypto/sha256-browser/build/index.js":
/*!*************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-crypto/sha256-browser/build/index.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WebCryptoSha256 = exports.Ie11Sha256 = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__(/*! ./crossPlatformSha256 */ "../../node_modules/@aws-crypto/sha256-browser/build/crossPlatformSha256.js"), exports);
var ie11Sha256_1 = __webpack_require__(/*! ./ie11Sha256 */ "../../node_modules/@aws-crypto/sha256-browser/build/ie11Sha256.js");
Object.defineProperty(exports, "Ie11Sha256", { enumerable: true, get: function () { return ie11Sha256_1.Sha256; } });
var webCryptoSha256_1 = __webpack_require__(/*! ./webCryptoSha256 */ "../../node_modules/@aws-crypto/sha256-browser/build/webCryptoSha256.js");
Object.defineProperty(exports, "WebCryptoSha256", { enumerable: true, get: function () { return webCryptoSha256_1.Sha256; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGdFQUFzQztBQUN0QywyQ0FBb0Q7QUFBM0Msd0dBQUEsTUFBTSxPQUFjO0FBQzdCLHFEQUE4RDtBQUFyRCxrSEFBQSxNQUFNLE9BQW1CIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vY3Jvc3NQbGF0Zm9ybVNoYTI1NlwiO1xuZXhwb3J0IHsgU2hhMjU2IGFzIEllMTFTaGEyNTYgfSBmcm9tIFwiLi9pZTExU2hhMjU2XCI7XG5leHBvcnQgeyBTaGEyNTYgYXMgV2ViQ3J5cHRvU2hhMjU2IH0gZnJvbSBcIi4vd2ViQ3J5cHRvU2hhMjU2XCI7XG4iXX0=

/***/ }),

/***/ "../../node_modules/@aws-crypto/sha256-browser/build/isEmptyData.js":
/*!*******************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-crypto/sha256-browser/build/isEmptyData.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyData = void 0;
function isEmptyData(data) {
    if (typeof data === "string") {
        return data.length === 0;
    }
    return data.byteLength === 0;
}
exports.isEmptyData = isEmptyData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNFbXB0eURhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaXNFbXB0eURhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsU0FBZ0IsV0FBVyxDQUFDLElBQWdCO0lBQzFDLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1FBQzVCLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7S0FDMUI7SUFFRCxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQyxDQUFDO0FBQy9CLENBQUM7QUFORCxrQ0FNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNvdXJjZURhdGEgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHlEYXRhKGRhdGE6IFNvdXJjZURhdGEpOiBib29sZWFuIHtcbiAgaWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIGRhdGEubGVuZ3RoID09PSAwO1xuICB9XG5cbiAgcmV0dXJuIGRhdGEuYnl0ZUxlbmd0aCA9PT0gMDtcbn1cbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-crypto/sha256-browser/build/webCryptoSha256.js":
/*!***********************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-crypto/sha256-browser/build/webCryptoSha256.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Sha256 = void 0;
var util_utf8_browser_1 = __webpack_require__(/*! @aws-sdk/util-utf8-browser */ "../../node_modules/@aws-crypto/sha256-browser/node_modules/@aws-sdk/util-utf8-browser/dist/es/index.js");
var isEmptyData_1 = __webpack_require__(/*! ./isEmptyData */ "../../node_modules/@aws-crypto/sha256-browser/build/isEmptyData.js");
var constants_1 = __webpack_require__(/*! ./constants */ "../../node_modules/@aws-crypto/sha256-browser/build/constants.js");
var util_locate_window_1 = __webpack_require__(/*! @aws-sdk/util-locate-window */ "../../node_modules/@aws-sdk/util-locate-window/dist/es/index.js");
var Sha256 = /** @class */ (function () {
    function Sha256(secret) {
        this.toHash = new Uint8Array(0);
        if (secret !== void 0) {
            this.key = new Promise(function (resolve, reject) {
                util_locate_window_1.locateWindow()
                    .crypto.subtle.importKey("raw", convertToBuffer(secret), constants_1.SHA_256_HMAC_ALGO, false, ["sign"])
                    .then(resolve, reject);
            });
            this.key.catch(function () { });
        }
    }
    Sha256.prototype.update = function (data) {
        if (isEmptyData_1.isEmptyData(data)) {
            return;
        }
        var update = convertToBuffer(data);
        var typedArray = new Uint8Array(this.toHash.byteLength + update.byteLength);
        typedArray.set(this.toHash, 0);
        typedArray.set(update, this.toHash.byteLength);
        this.toHash = typedArray;
    };
    Sha256.prototype.digest = function () {
        var _this = this;
        if (this.key) {
            return this.key.then(function (key) {
                return util_locate_window_1.locateWindow()
                    .crypto.subtle.sign(constants_1.SHA_256_HMAC_ALGO, key, _this.toHash)
                    .then(function (data) { return new Uint8Array(data); });
            });
        }
        if (isEmptyData_1.isEmptyData(this.toHash)) {
            return Promise.resolve(constants_1.EMPTY_DATA_SHA_256);
        }
        return Promise.resolve()
            .then(function () {
            return util_locate_window_1.locateWindow().crypto.subtle.digest(constants_1.SHA_256_HASH, _this.toHash);
        })
            .then(function (data) { return Promise.resolve(new Uint8Array(data)); });
    };
    return Sha256;
}());
exports.Sha256 = Sha256;
function convertToBuffer(data) {
    if (typeof data === "string") {
        return util_utf8_browser_1.fromUtf8(data);
    }
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViQ3J5cHRvU2hhMjU2LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3dlYkNyeXB0b1NoYTI1Ni50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxnRUFBc0Q7QUFDdEQsNkNBQTRDO0FBQzVDLHlDQUlxQjtBQUNyQixrRUFBMkQ7QUFFM0Q7SUFJRSxnQkFBWSxNQUFtQjtRQUZ2QixXQUFNLEdBQWUsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFHN0MsSUFBSSxNQUFNLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUNyQyxpQ0FBWSxFQUFFO3FCQUNYLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUN0QixLQUFLLEVBQ0wsZUFBZSxDQUFDLE1BQU0sQ0FBQyxFQUN2Qiw2QkFBaUIsRUFDakIsS0FBSyxFQUNMLENBQUMsTUFBTSxDQUFDLENBQ1Q7cUJBQ0EsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMzQixDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGNBQU8sQ0FBQyxDQUFDLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBRUQsdUJBQU0sR0FBTixVQUFPLElBQWdCO1FBQ3JCLElBQUkseUJBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNyQixPQUFPO1NBQ1I7UUFFRCxJQUFNLE1BQU0sR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBTSxVQUFVLEdBQUcsSUFBSSxVQUFVLENBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQzNDLENBQUM7UUFDRixVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBRUQsdUJBQU0sR0FBTjtRQUFBLGlCQWtCQztRQWpCQyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDWixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztnQkFDdEIsT0FBQSxpQ0FBWSxFQUFFO3FCQUNYLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDZCQUFpQixFQUFFLEdBQUcsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDO3FCQUN2RCxJQUFJLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQztZQUZyQyxDQUVxQyxDQUN0QyxDQUFDO1NBQ0g7UUFFRCxJQUFJLHlCQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzVCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyw4QkFBa0IsQ0FBQyxDQUFDO1NBQzVDO1FBRUQsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFO2FBQ3JCLElBQUksQ0FBQztZQUNKLE9BQUEsaUNBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLHdCQUFZLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQztRQUE5RCxDQUE4RCxDQUMvRDthQUNBLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBckMsQ0FBcUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQyxBQXRERCxJQXNEQztBQXREWSx3QkFBTTtBQXdEbkIsU0FBUyxlQUFlLENBQUMsSUFBZ0I7SUFDdkMsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7UUFDNUIsT0FBTyw0QkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3ZCO0lBRUQsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzVCLE9BQU8sSUFBSSxVQUFVLENBQ25CLElBQUksQ0FBQyxNQUFNLEVBQ1gsSUFBSSxDQUFDLFVBQVUsRUFDZixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxpQkFBaUIsQ0FDL0MsQ0FBQztLQUNIO0lBRUQsT0FBTyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGFzaCwgU291cmNlRGF0YSB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuaW1wb3J0IHsgZnJvbVV0ZjggfSBmcm9tIFwiQGF3cy1zZGsvdXRpbC11dGY4LWJyb3dzZXJcIjtcbmltcG9ydCB7IGlzRW1wdHlEYXRhIH0gZnJvbSBcIi4vaXNFbXB0eURhdGFcIjtcbmltcG9ydCB7XG4gIEVNUFRZX0RBVEFfU0hBXzI1NixcbiAgU0hBXzI1Nl9IQVNILFxuICBTSEFfMjU2X0hNQUNfQUxHT1xufSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGxvY2F0ZVdpbmRvdyB9IGZyb20gXCJAYXdzLXNkay91dGlsLWxvY2F0ZS13aW5kb3dcIjtcblxuZXhwb3J0IGNsYXNzIFNoYTI1NiBpbXBsZW1lbnRzIEhhc2gge1xuICBwcml2YXRlIHJlYWRvbmx5IGtleTogUHJvbWlzZTxDcnlwdG9LZXk+IHwgdW5kZWZpbmVkO1xuICBwcml2YXRlIHRvSGFzaDogVWludDhBcnJheSA9IG5ldyBVaW50OEFycmF5KDApO1xuXG4gIGNvbnN0cnVjdG9yKHNlY3JldD86IFNvdXJjZURhdGEpIHtcbiAgICBpZiAoc2VjcmV0ICE9PSB2b2lkIDApIHtcbiAgICAgIHRoaXMua2V5ID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBsb2NhdGVXaW5kb3coKVxuICAgICAgICAgIC5jcnlwdG8uc3VidGxlLmltcG9ydEtleShcbiAgICAgICAgICAgIFwicmF3XCIsXG4gICAgICAgICAgICBjb252ZXJ0VG9CdWZmZXIoc2VjcmV0KSxcbiAgICAgICAgICAgIFNIQV8yNTZfSE1BQ19BTEdPLFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICBbXCJzaWduXCJdXG4gICAgICAgICAgKVxuICAgICAgICAgIC50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMua2V5LmNhdGNoKCgpID0+IHt9KTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGUoZGF0YTogU291cmNlRGF0YSk6IHZvaWQge1xuICAgIGlmIChpc0VtcHR5RGF0YShkYXRhKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZSA9IGNvbnZlcnRUb0J1ZmZlcihkYXRhKTtcbiAgICBjb25zdCB0eXBlZEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoXG4gICAgICB0aGlzLnRvSGFzaC5ieXRlTGVuZ3RoICsgdXBkYXRlLmJ5dGVMZW5ndGhcbiAgICApO1xuICAgIHR5cGVkQXJyYXkuc2V0KHRoaXMudG9IYXNoLCAwKTtcbiAgICB0eXBlZEFycmF5LnNldCh1cGRhdGUsIHRoaXMudG9IYXNoLmJ5dGVMZW5ndGgpO1xuICAgIHRoaXMudG9IYXNoID0gdHlwZWRBcnJheTtcbiAgfVxuXG4gIGRpZ2VzdCgpOiBQcm9taXNlPFVpbnQ4QXJyYXk+IHtcbiAgICBpZiAodGhpcy5rZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLmtleS50aGVuKGtleSA9PlxuICAgICAgICBsb2NhdGVXaW5kb3coKVxuICAgICAgICAgIC5jcnlwdG8uc3VidGxlLnNpZ24oU0hBXzI1Nl9ITUFDX0FMR08sIGtleSwgdGhpcy50b0hhc2gpXG4gICAgICAgICAgLnRoZW4oZGF0YSA9PiBuZXcgVWludDhBcnJheShkYXRhKSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGlzRW1wdHlEYXRhKHRoaXMudG9IYXNoKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShFTVBUWV9EQVRBX1NIQV8yNTYpO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgLnRoZW4oKCkgPT5cbiAgICAgICAgbG9jYXRlV2luZG93KCkuY3J5cHRvLnN1YnRsZS5kaWdlc3QoU0hBXzI1Nl9IQVNILCB0aGlzLnRvSGFzaClcbiAgICAgIClcbiAgICAgIC50aGVuKGRhdGEgPT4gUHJvbWlzZS5yZXNvbHZlKG5ldyBVaW50OEFycmF5KGRhdGEpKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29udmVydFRvQnVmZmVyKGRhdGE6IFNvdXJjZURhdGEpOiBVaW50OEFycmF5IHtcbiAgaWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIGZyb21VdGY4KGRhdGEpO1xuICB9XG5cbiAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhkYXRhKSkge1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShcbiAgICAgIGRhdGEuYnVmZmVyLFxuICAgICAgZGF0YS5ieXRlT2Zmc2V0LFxuICAgICAgZGF0YS5ieXRlTGVuZ3RoIC8gVWludDhBcnJheS5CWVRFU19QRVJfRUxFTUVOVFxuICAgICk7XG4gIH1cblxuICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG59XG4iXX0=

/***/ }),

/***/ "../../node_modules/@aws-crypto/sha256-browser/node_modules/@aws-sdk/util-utf8-browser/dist/es/index.js":
/*!*******************************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-crypto/sha256-browser/node_modules/@aws-sdk/util-utf8-browser/dist/es/index.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: fromUtf8, toUtf8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromUtf8", function() { return fromUtf8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUtf8", function() { return toUtf8; });
/* harmony import */ var _pureJs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pureJs */ "../../node_modules/@aws-crypto/sha256-browser/node_modules/@aws-sdk/util-utf8-browser/dist/es/pureJs.js");
/* harmony import */ var _whatwgEncodingApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./whatwgEncodingApi */ "../../node_modules/@aws-crypto/sha256-browser/node_modules/@aws-sdk/util-utf8-browser/dist/es/whatwgEncodingApi.js");


var fromUtf8 = function (input) {
    return typeof TextEncoder === "function" ? Object(_whatwgEncodingApi__WEBPACK_IMPORTED_MODULE_1__["fromUtf8"])(input) : Object(_pureJs__WEBPACK_IMPORTED_MODULE_0__["fromUtf8"])(input);
};
var toUtf8 = function (input) {
    return typeof TextDecoder === "function" ? Object(_whatwgEncodingApi__WEBPACK_IMPORTED_MODULE_1__["toUtf8"])(input) : Object(_pureJs__WEBPACK_IMPORTED_MODULE_0__["toUtf8"])(input);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsSUFBSSxVQUFVLEVBQUUsTUFBTSxJQUFJLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN0RSxPQUFPLEVBQUUsUUFBUSxJQUFJLG1CQUFtQixFQUFFLE1BQU0sSUFBSSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBS25HLE1BQU0sQ0FBQyxJQUFNLFFBQVEsR0FBRyxVQUFDLEtBQWE7SUFDcEMsT0FBQSxPQUFPLFdBQVcsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO0FBQWxGLENBQWtGLENBQUM7QUFFckYsTUFBTSxDQUFDLElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBaUI7SUFDdEMsT0FBQSxPQUFPLFdBQVcsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO0FBQTlFLENBQThFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmcm9tVXRmOCBhcyBqc0Zyb21VdGY4LCB0b1V0ZjggYXMganNUb1V0ZjggfSBmcm9tIFwiLi9wdXJlSnNcIjtcbmltcG9ydCB7IGZyb21VdGY4IGFzIHRleHRFbmNvZGVyRnJvbVV0ZjgsIHRvVXRmOCBhcyB0ZXh0RW5jb2RlclRvVXRmOCB9IGZyb20gXCIuL3doYXR3Z0VuY29kaW5nQXBpXCI7XG5cbmRlY2xhcmUgY29uc3QgVGV4dERlY29kZXI6IEZ1bmN0aW9uIHwgdW5kZWZpbmVkO1xuZGVjbGFyZSBjb25zdCBUZXh0RW5jb2RlcjogRnVuY3Rpb24gfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCBjb25zdCBmcm9tVXRmOCA9IChpbnB1dDogc3RyaW5nKTogVWludDhBcnJheSA9PlxuICB0eXBlb2YgVGV4dEVuY29kZXIgPT09IFwiZnVuY3Rpb25cIiA/IHRleHRFbmNvZGVyRnJvbVV0ZjgoaW5wdXQpIDoganNGcm9tVXRmOChpbnB1dCk7XG5cbmV4cG9ydCBjb25zdCB0b1V0ZjggPSAoaW5wdXQ6IFVpbnQ4QXJyYXkpOiBzdHJpbmcgPT5cbiAgdHlwZW9mIFRleHREZWNvZGVyID09PSBcImZ1bmN0aW9uXCIgPyB0ZXh0RW5jb2RlclRvVXRmOChpbnB1dCkgOiBqc1RvVXRmOChpbnB1dCk7XG4iXX0=

/***/ }),

/***/ "../../node_modules/@aws-crypto/sha256-browser/node_modules/@aws-sdk/util-utf8-browser/dist/es/pureJs.js":
/*!********************************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-crypto/sha256-browser/node_modules/@aws-sdk/util-utf8-browser/dist/es/pureJs.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: fromUtf8, toUtf8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromUtf8", function() { return fromUtf8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUtf8", function() { return toUtf8; });
/**
 * Converts a JS string from its native UCS-2/UTF-16 representation into a
 * Uint8Array of the bytes used to represent the equivalent characters in UTF-8.
 *
 * Cribbed from the `goog.crypt.stringToUtf8ByteArray` function in the Google
 * Closure library, though updated to use typed arrays.
 */
var fromUtf8 = function (input) {
    var bytes = [];
    for (var i = 0, len = input.length; i < len; i++) {
        var value = input.charCodeAt(i);
        if (value < 0x80) {
            bytes.push(value);
        }
        else if (value < 0x800) {
            bytes.push((value >> 6) | 192, (value & 63) | 128);
        }
        else if (i + 1 < input.length && (value & 0xfc00) === 0xd800 && (input.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            var surrogatePair = 0x10000 + ((value & 1023) << 10) + (input.charCodeAt(++i) & 1023);
            bytes.push((surrogatePair >> 18) | 240, ((surrogatePair >> 12) & 63) | 128, ((surrogatePair >> 6) & 63) | 128, (surrogatePair & 63) | 128);
        }
        else {
            bytes.push((value >> 12) | 224, ((value >> 6) & 63) | 128, (value & 63) | 128);
        }
    }
    return Uint8Array.from(bytes);
};
/**
 * Converts a typed array of bytes containing UTF-8 data into a native JS
 * string.
 *
 * Partly cribbed from the `goog.crypt.utf8ByteArrayToString` function in the
 * Google Closure library, though updated to use typed arrays and to better
 * handle astral plane code points.
 */
var toUtf8 = function (input) {
    var decoded = "";
    for (var i = 0, len = input.length; i < len; i++) {
        var byte = input[i];
        if (byte < 0x80) {
            decoded += String.fromCharCode(byte);
        }
        else if (192 <= byte && byte < 224) {
            var nextByte = input[++i];
            decoded += String.fromCharCode(((byte & 31) << 6) | (nextByte & 63));
        }
        else if (240 <= byte && byte < 365) {
            var surrogatePair = [byte, input[++i], input[++i], input[++i]];
            var encoded = "%" + surrogatePair.map(function (byteValue) { return byteValue.toString(16); }).join("%");
            decoded += decodeURIComponent(encoded);
        }
        else {
            decoded += String.fromCharCode(((byte & 15) << 12) | ((input[++i] & 63) << 6) | (input[++i] & 63));
        }
    }
    return decoded;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVyZUpzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3B1cmVKcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxNQUFNLENBQUMsSUFBTSxRQUFRLEdBQUcsVUFBQyxLQUFhO0lBQ3BDLElBQU0sS0FBSyxHQUFrQixFQUFFLENBQUM7SUFDaEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNoRCxJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksS0FBSyxHQUFHLElBQUksRUFBRTtZQUNoQixLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25CO2FBQU0sSUFBSSxLQUFLLEdBQUcsS0FBSyxFQUFFO1lBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBVSxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQVEsQ0FBQyxHQUFHLEdBQVUsQ0FBQyxDQUFDO1NBQ3hFO2FBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssTUFBTSxFQUFFO1lBQy9HLElBQU0sYUFBYSxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQVksQ0FBQyxDQUFDO1lBQ3hHLEtBQUssQ0FBQyxJQUFJLENBQ1IsQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDLEdBQUcsR0FBVSxFQUNsQyxDQUFDLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQVEsQ0FBQyxHQUFHLEdBQVUsRUFDL0MsQ0FBQyxDQUFDLGFBQWEsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFRLENBQUMsR0FBRyxHQUFVLEVBQzlDLENBQUMsYUFBYSxHQUFHLEVBQVEsQ0FBQyxHQUFHLEdBQVUsQ0FDeEMsQ0FBQztTQUNIO2FBQU07WUFDTCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEdBQVUsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQVEsQ0FBQyxHQUFHLEdBQVUsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFRLENBQUMsR0FBRyxHQUFVLENBQUMsQ0FBQztTQUNqSDtLQUNGO0lBRUQsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hDLENBQUMsQ0FBQztBQUVGOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLENBQUMsSUFBTSxNQUFNLEdBQUcsVUFBQyxLQUFpQjtJQUN0QyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDakIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNoRCxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxFQUFFO1lBQ2YsT0FBTyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEM7YUFBTSxJQUFJLEdBQVUsSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEdBQVUsRUFBRTtZQUNsRCxJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM1QixPQUFPLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLEVBQVEsQ0FBQyxDQUFDLENBQUM7U0FDakY7YUFBTSxJQUFJLEdBQVUsSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEdBQVcsRUFBRTtZQUNuRCxJQUFNLGFBQWEsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLElBQU0sT0FBTyxHQUFHLEdBQUcsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLFVBQUMsU0FBUyxJQUFLLE9BQUEsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6RixPQUFPLElBQUksa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEM7YUFBTTtZQUNMLE9BQU8sSUFBSSxNQUFNLENBQUMsWUFBWSxDQUM1QixDQUFDLENBQUMsSUFBSSxHQUFHLEVBQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQVEsQ0FBQyxDQUNuRixDQUFDO1NBQ0g7S0FDRjtJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29udmVydHMgYSBKUyBzdHJpbmcgZnJvbSBpdHMgbmF0aXZlIFVDUy0yL1VURi0xNiByZXByZXNlbnRhdGlvbiBpbnRvIGFcbiAqIFVpbnQ4QXJyYXkgb2YgdGhlIGJ5dGVzIHVzZWQgdG8gcmVwcmVzZW50IHRoZSBlcXVpdmFsZW50IGNoYXJhY3RlcnMgaW4gVVRGLTguXG4gKlxuICogQ3JpYmJlZCBmcm9tIHRoZSBgZ29vZy5jcnlwdC5zdHJpbmdUb1V0ZjhCeXRlQXJyYXlgIGZ1bmN0aW9uIGluIHRoZSBHb29nbGVcbiAqIENsb3N1cmUgbGlicmFyeSwgdGhvdWdoIHVwZGF0ZWQgdG8gdXNlIHR5cGVkIGFycmF5cy5cbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21VdGY4ID0gKGlucHV0OiBzdHJpbmcpOiBVaW50OEFycmF5ID0+IHtcbiAgY29uc3QgYnl0ZXM6IEFycmF5PG51bWJlcj4gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGlucHV0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgdmFsdWUgPSBpbnB1dC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmICh2YWx1ZSA8IDB4ODApIHtcbiAgICAgIGJ5dGVzLnB1c2godmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPCAweDgwMCkge1xuICAgICAgYnl0ZXMucHVzaCgodmFsdWUgPj4gNikgfCAwYjExMDAwMDAwLCAodmFsdWUgJiAwYjExMTExMSkgfCAwYjEwMDAwMDAwKTtcbiAgICB9IGVsc2UgaWYgKGkgKyAxIDwgaW5wdXQubGVuZ3RoICYmICh2YWx1ZSAmIDB4ZmMwMCkgPT09IDB4ZDgwMCAmJiAoaW5wdXQuY2hhckNvZGVBdChpICsgMSkgJiAweGZjMDApID09PSAweGRjMDApIHtcbiAgICAgIGNvbnN0IHN1cnJvZ2F0ZVBhaXIgPSAweDEwMDAwICsgKCh2YWx1ZSAmIDBiMTExMTExMTExMSkgPDwgMTApICsgKGlucHV0LmNoYXJDb2RlQXQoKytpKSAmIDBiMTExMTExMTExMSk7XG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICAoc3Vycm9nYXRlUGFpciA+PiAxOCkgfCAwYjExMTEwMDAwLFxuICAgICAgICAoKHN1cnJvZ2F0ZVBhaXIgPj4gMTIpICYgMGIxMTExMTEpIHwgMGIxMDAwMDAwMCxcbiAgICAgICAgKChzdXJyb2dhdGVQYWlyID4+IDYpICYgMGIxMTExMTEpIHwgMGIxMDAwMDAwMCxcbiAgICAgICAgKHN1cnJvZ2F0ZVBhaXIgJiAwYjExMTExMSkgfCAwYjEwMDAwMDAwXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBieXRlcy5wdXNoKCh2YWx1ZSA+PiAxMikgfCAwYjExMTAwMDAwLCAoKHZhbHVlID4+IDYpICYgMGIxMTExMTEpIHwgMGIxMDAwMDAwMCwgKHZhbHVlICYgMGIxMTExMTEpIHwgMGIxMDAwMDAwMCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFVpbnQ4QXJyYXkuZnJvbShieXRlcyk7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIGEgdHlwZWQgYXJyYXkgb2YgYnl0ZXMgY29udGFpbmluZyBVVEYtOCBkYXRhIGludG8gYSBuYXRpdmUgSlNcbiAqIHN0cmluZy5cbiAqXG4gKiBQYXJ0bHkgY3JpYmJlZCBmcm9tIHRoZSBgZ29vZy5jcnlwdC51dGY4Qnl0ZUFycmF5VG9TdHJpbmdgIGZ1bmN0aW9uIGluIHRoZVxuICogR29vZ2xlIENsb3N1cmUgbGlicmFyeSwgdGhvdWdoIHVwZGF0ZWQgdG8gdXNlIHR5cGVkIGFycmF5cyBhbmQgdG8gYmV0dGVyXG4gKiBoYW5kbGUgYXN0cmFsIHBsYW5lIGNvZGUgcG9pbnRzLlxuICovXG5leHBvcnQgY29uc3QgdG9VdGY4ID0gKGlucHV0OiBVaW50OEFycmF5KTogc3RyaW5nID0+IHtcbiAgbGV0IGRlY29kZWQgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0gaW5wdXQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBieXRlID0gaW5wdXRbaV07XG4gICAgaWYgKGJ5dGUgPCAweDgwKSB7XG4gICAgICBkZWNvZGVkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZSk7XG4gICAgfSBlbHNlIGlmICgwYjExMDAwMDAwIDw9IGJ5dGUgJiYgYnl0ZSA8IDBiMTExMDAwMDApIHtcbiAgICAgIGNvbnN0IG5leHRCeXRlID0gaW5wdXRbKytpXTtcbiAgICAgIGRlY29kZWQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGJ5dGUgJiAwYjExMTExKSA8PCA2KSB8IChuZXh0Qnl0ZSAmIDBiMTExMTExKSk7XG4gICAgfSBlbHNlIGlmICgwYjExMTEwMDAwIDw9IGJ5dGUgJiYgYnl0ZSA8IDBiMTAxMTAxMTAxKSB7XG4gICAgICBjb25zdCBzdXJyb2dhdGVQYWlyID0gW2J5dGUsIGlucHV0WysraV0sIGlucHV0WysraV0sIGlucHV0WysraV1dO1xuICAgICAgY29uc3QgZW5jb2RlZCA9IFwiJVwiICsgc3Vycm9nYXRlUGFpci5tYXAoKGJ5dGVWYWx1ZSkgPT4gYnl0ZVZhbHVlLnRvU3RyaW5nKDE2KSkuam9pbihcIiVcIik7XG4gICAgICBkZWNvZGVkICs9IGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVjb2RlZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKFxuICAgICAgICAoKGJ5dGUgJiAwYjExMTEpIDw8IDEyKSB8ICgoaW5wdXRbKytpXSAmIDBiMTExMTExKSA8PCA2KSB8IChpbnB1dFsrK2ldICYgMGIxMTExMTEpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZWNvZGVkO1xufTtcbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-crypto/sha256-browser/node_modules/@aws-sdk/util-utf8-browser/dist/es/whatwgEncodingApi.js":
/*!*******************************************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-crypto/sha256-browser/node_modules/@aws-sdk/util-utf8-browser/dist/es/whatwgEncodingApi.js ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: fromUtf8, toUtf8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromUtf8", function() { return fromUtf8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUtf8", function() { return toUtf8; });
function fromUtf8(input) {
    return new TextEncoder().encode(input);
}
function toUtf8(input) {
    return new TextDecoder("utf-8").decode(input);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2hhdHdnRW5jb2RpbmdBcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvd2hhdHdnRW5jb2RpbmdBcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUNBLE1BQU0sVUFBVSxRQUFRLENBQUMsS0FBYTtJQUNwQyxPQUFPLElBQUksV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3pDLENBQUM7QUFFRCxNQUFNLFVBQVUsTUFBTSxDQUFDLEtBQWlCO0lBQ3RDLE9BQU8sSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgZGVjbGFyYXRpb24gb2YgdGhlIGdsb2JhbCBUZXh0RW5jb2RlciBhbmQgVGV4dERlY29kZXIgY29uc3RydWN0b3JzLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9lbmNvZGluZy5zcGVjLndoYXR3Zy5vcmcvXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbmFtZXNwYWNlXG5uYW1lc3BhY2UgRW5jb2Rpbmcge1xuICBpbnRlcmZhY2UgVGV4dERlY29kZXJPcHRpb25zIHtcbiAgICBmYXRhbD86IGJvb2xlYW47XG4gICAgaWdub3JlQk9NPzogYm9vbGVhbjtcbiAgfVxuXG4gIGludGVyZmFjZSBUZXh0RGVjb2RlT3B0aW9ucyB7XG4gICAgc3RyZWFtPzogYm9vbGVhbjtcbiAgfVxuXG4gIGludGVyZmFjZSBUZXh0RGVjb2RlciB7XG4gICAgcmVhZG9ubHkgZW5jb2Rpbmc6IHN0cmluZztcbiAgICByZWFkb25seSBmYXRhbDogYm9vbGVhbjtcbiAgICByZWFkb25seSBpZ25vcmVCT006IGJvb2xlYW47XG4gICAgZGVjb2RlKGlucHV0PzogQXJyYXlCdWZmZXIgfCBBcnJheUJ1ZmZlclZpZXcsIG9wdGlvbnM/OiBUZXh0RGVjb2RlT3B0aW9ucyk6IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgVGV4dERlY29kZXJDb25zdHJ1Y3RvciB7XG4gICAgbmV3IChsYWJlbD86IHN0cmluZywgb3B0aW9ucz86IFRleHREZWNvZGVyT3B0aW9ucyk6IFRleHREZWNvZGVyO1xuICB9XG5cbiAgaW50ZXJmYWNlIFRleHRFbmNvZGVyIHtcbiAgICByZWFkb25seSBlbmNvZGluZzogXCJ1dGYtOFwiO1xuICAgIGVuY29kZShpbnB1dD86IHN0cmluZyk6IFVpbnQ4QXJyYXk7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIFRleHRFbmNvZGVyQ29uc3RydWN0b3Ige1xuICAgIG5ldyAoKTogVGV4dEVuY29kZXI7XG4gIH1cbn1cblxuZGVjbGFyZSBjb25zdCBUZXh0RGVjb2RlcjogRW5jb2RpbmcuVGV4dERlY29kZXJDb25zdHJ1Y3RvcjtcblxuZGVjbGFyZSBjb25zdCBUZXh0RW5jb2RlcjogRW5jb2RpbmcuVGV4dEVuY29kZXJDb25zdHJ1Y3RvcjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21VdGY4KGlucHV0OiBzdHJpbmcpOiBVaW50OEFycmF5IHtcbiAgcmV0dXJuIG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShpbnB1dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1V0ZjgoaW5wdXQ6IFVpbnQ4QXJyYXkpOiBzdHJpbmcge1xuICByZXR1cm4gbmV3IFRleHREZWNvZGVyKFwidXRmLThcIikuZGVjb2RlKGlucHV0KTtcbn1cbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-crypto/sha256-js/build/RawSha256.js":
/*!************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-crypto/sha256-js/build/RawSha256.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RawSha256 = void 0;
var constants_1 = __webpack_require__(/*! ./constants */ "../../node_modules/@aws-crypto/sha256-js/build/constants.js");
/**
 * @internal
 */
var RawSha256 = /** @class */ (function () {
    function RawSha256() {
        this.state = Int32Array.from(constants_1.INIT);
        this.temp = new Int32Array(64);
        this.buffer = new Uint8Array(64);
        this.bufferLength = 0;
        this.bytesHashed = 0;
        /**
         * @internal
         */
        this.finished = false;
    }
    RawSha256.prototype.update = function (data) {
        if (this.finished) {
            throw new Error("Attempted to update an already finished hash.");
        }
        var position = 0;
        var byteLength = data.byteLength;
        this.bytesHashed += byteLength;
        if (this.bytesHashed * 8 > constants_1.MAX_HASHABLE_LENGTH) {
            throw new Error("Cannot hash more than 2^53 - 1 bits");
        }
        while (byteLength > 0) {
            this.buffer[this.bufferLength++] = data[position++];
            byteLength--;
            if (this.bufferLength === constants_1.BLOCK_SIZE) {
                this.hashBuffer();
                this.bufferLength = 0;
            }
        }
    };
    RawSha256.prototype.digest = function () {
        if (!this.finished) {
            var bitsHashed = this.bytesHashed * 8;
            var bufferView = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength);
            var undecoratedLength = this.bufferLength;
            bufferView.setUint8(this.bufferLength++, 0x80);
            // Ensure the final block has enough room for the hashed length
            if (undecoratedLength % constants_1.BLOCK_SIZE >= constants_1.BLOCK_SIZE - 8) {
                for (var i = this.bufferLength; i < constants_1.BLOCK_SIZE; i++) {
                    bufferView.setUint8(i, 0);
                }
                this.hashBuffer();
                this.bufferLength = 0;
            }
            for (var i = this.bufferLength; i < constants_1.BLOCK_SIZE - 8; i++) {
                bufferView.setUint8(i, 0);
            }
            bufferView.setUint32(constants_1.BLOCK_SIZE - 8, Math.floor(bitsHashed / 0x100000000), true);
            bufferView.setUint32(constants_1.BLOCK_SIZE - 4, bitsHashed);
            this.hashBuffer();
            this.finished = true;
        }
        // The value in state is little-endian rather than big-endian, so flip
        // each word into a new Uint8Array
        var out = new Uint8Array(constants_1.DIGEST_LENGTH);
        for (var i = 0; i < 8; i++) {
            out[i * 4] = (this.state[i] >>> 24) & 0xff;
            out[i * 4 + 1] = (this.state[i] >>> 16) & 0xff;
            out[i * 4 + 2] = (this.state[i] >>> 8) & 0xff;
            out[i * 4 + 3] = (this.state[i] >>> 0) & 0xff;
        }
        return out;
    };
    RawSha256.prototype.hashBuffer = function () {
        var _a = this, buffer = _a.buffer, state = _a.state;
        var state0 = state[0], state1 = state[1], state2 = state[2], state3 = state[3], state4 = state[4], state5 = state[5], state6 = state[6], state7 = state[7];
        for (var i = 0; i < constants_1.BLOCK_SIZE; i++) {
            if (i < 16) {
                this.temp[i] =
                    ((buffer[i * 4] & 0xff) << 24) |
                        ((buffer[i * 4 + 1] & 0xff) << 16) |
                        ((buffer[i * 4 + 2] & 0xff) << 8) |
                        (buffer[i * 4 + 3] & 0xff);
            }
            else {
                var u = this.temp[i - 2];
                var t1_1 = ((u >>> 17) | (u << 15)) ^ ((u >>> 19) | (u << 13)) ^ (u >>> 10);
                u = this.temp[i - 15];
                var t2_1 = ((u >>> 7) | (u << 25)) ^ ((u >>> 18) | (u << 14)) ^ (u >>> 3);
                this.temp[i] =
                    ((t1_1 + this.temp[i - 7]) | 0) + ((t2_1 + this.temp[i - 16]) | 0);
            }
            var t1 = ((((((state4 >>> 6) | (state4 << 26)) ^
                ((state4 >>> 11) | (state4 << 21)) ^
                ((state4 >>> 25) | (state4 << 7))) +
                ((state4 & state5) ^ (~state4 & state6))) |
                0) +
                ((state7 + ((constants_1.KEY[i] + this.temp[i]) | 0)) | 0)) |
                0;
            var t2 = ((((state0 >>> 2) | (state0 << 30)) ^
                ((state0 >>> 13) | (state0 << 19)) ^
                ((state0 >>> 22) | (state0 << 10))) +
                ((state0 & state1) ^ (state0 & state2) ^ (state1 & state2))) |
                0;
            state7 = state6;
            state6 = state5;
            state5 = state4;
            state4 = (state3 + t1) | 0;
            state3 = state2;
            state2 = state1;
            state1 = state0;
            state0 = (t1 + t2) | 0;
        }
        state[0] += state0;
        state[1] += state1;
        state[2] += state2;
        state[3] += state3;
        state[4] += state4;
        state[5] += state5;
        state[6] += state6;
        state[7] += state7;
    };
    return RawSha256;
}());
exports.RawSha256 = RawSha256;
//# sourceMappingURL=RawSha256.js.map

/***/ }),

/***/ "../../node_modules/@aws-crypto/sha256-js/build/constants.js":
/*!************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-crypto/sha256-js/build/constants.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MAX_HASHABLE_LENGTH = exports.INIT = exports.KEY = exports.DIGEST_LENGTH = exports.BLOCK_SIZE = void 0;
/**
 * @internal
 */
exports.BLOCK_SIZE = 64;
/**
 * @internal
 */
exports.DIGEST_LENGTH = 32;
/**
 * @internal
 */
exports.KEY = new Uint32Array([
    0x428a2f98,
    0x71374491,
    0xb5c0fbcf,
    0xe9b5dba5,
    0x3956c25b,
    0x59f111f1,
    0x923f82a4,
    0xab1c5ed5,
    0xd807aa98,
    0x12835b01,
    0x243185be,
    0x550c7dc3,
    0x72be5d74,
    0x80deb1fe,
    0x9bdc06a7,
    0xc19bf174,
    0xe49b69c1,
    0xefbe4786,
    0x0fc19dc6,
    0x240ca1cc,
    0x2de92c6f,
    0x4a7484aa,
    0x5cb0a9dc,
    0x76f988da,
    0x983e5152,
    0xa831c66d,
    0xb00327c8,
    0xbf597fc7,
    0xc6e00bf3,
    0xd5a79147,
    0x06ca6351,
    0x14292967,
    0x27b70a85,
    0x2e1b2138,
    0x4d2c6dfc,
    0x53380d13,
    0x650a7354,
    0x766a0abb,
    0x81c2c92e,
    0x92722c85,
    0xa2bfe8a1,
    0xa81a664b,
    0xc24b8b70,
    0xc76c51a3,
    0xd192e819,
    0xd6990624,
    0xf40e3585,
    0x106aa070,
    0x19a4c116,
    0x1e376c08,
    0x2748774c,
    0x34b0bcb5,
    0x391c0cb3,
    0x4ed8aa4a,
    0x5b9cca4f,
    0x682e6ff3,
    0x748f82ee,
    0x78a5636f,
    0x84c87814,
    0x8cc70208,
    0x90befffa,
    0xa4506ceb,
    0xbef9a3f7,
    0xc67178f2
]);
/**
 * @internal
 */
exports.INIT = [
    0x6a09e667,
    0xbb67ae85,
    0x3c6ef372,
    0xa54ff53a,
    0x510e527f,
    0x9b05688c,
    0x1f83d9ab,
    0x5be0cd19
];
/**
 * @internal
 */
exports.MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "../../node_modules/@aws-crypto/sha256-js/build/index.js":
/*!********************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-crypto/sha256-js/build/index.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__(/*! ./jsSha256 */ "../../node_modules/@aws-crypto/sha256-js/build/jsSha256.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/@aws-crypto/sha256-js/build/jsSha256.js":
/*!***********************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-crypto/sha256-js/build/jsSha256.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Sha256 = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
var constants_1 = __webpack_require__(/*! ./constants */ "../../node_modules/@aws-crypto/sha256-js/build/constants.js");
var RawSha256_1 = __webpack_require__(/*! ./RawSha256 */ "../../node_modules/@aws-crypto/sha256-js/build/RawSha256.js");
var util_utf8_browser_1 = __webpack_require__(/*! @aws-sdk/util-utf8-browser */ "../../node_modules/@aws-crypto/sha256-js/node_modules/@aws-sdk/util-utf8-browser/dist/es/index.js");
var Sha256 = /** @class */ (function () {
    function Sha256(secret) {
        this.hash = new RawSha256_1.RawSha256();
        if (secret) {
            this.outer = new RawSha256_1.RawSha256();
            var inner = bufferFromSecret(secret);
            var outer = new Uint8Array(constants_1.BLOCK_SIZE);
            outer.set(inner);
            for (var i = 0; i < constants_1.BLOCK_SIZE; i++) {
                inner[i] ^= 0x36;
                outer[i] ^= 0x5c;
            }
            this.hash.update(inner);
            this.outer.update(outer);
            // overwrite the copied key in memory
            for (var i = 0; i < inner.byteLength; i++) {
                inner[i] = 0;
            }
        }
    }
    Sha256.prototype.update = function (toHash) {
        if (isEmptyData(toHash) || this.error) {
            return;
        }
        try {
            this.hash.update(convertToBuffer(toHash));
        }
        catch (e) {
            this.error = e;
        }
    };
    /* This synchronous method keeps compatibility
     * with the v2 aws-sdk.
     */
    Sha256.prototype.digestSync = function () {
        if (this.error) {
            throw this.error;
        }
        if (this.outer) {
            if (!this.outer.finished) {
                this.outer.update(this.hash.digest());
            }
            return this.outer.digest();
        }
        return this.hash.digest();
    };
    /* The underlying digest method here is synchronous.
     * To keep the same interface with the other hash functions
     * the default is to expose this as an async method.
     * However, it can sometimes be useful to have a sync method.
     */
    Sha256.prototype.digest = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.digestSync()];
            });
        });
    };
    return Sha256;
}());
exports.Sha256 = Sha256;
function bufferFromSecret(secret) {
    var input = convertToBuffer(secret);
    if (input.byteLength > constants_1.BLOCK_SIZE) {
        var bufferHash = new RawSha256_1.RawSha256();
        bufferHash.update(input);
        input = bufferHash.digest();
    }
    var buffer = new Uint8Array(constants_1.BLOCK_SIZE);
    buffer.set(input);
    return buffer;
}
function isEmptyData(data) {
    if (typeof data === "string") {
        return data.length === 0;
    }
    return data.byteLength === 0;
}
function convertToBuffer(data) {
    if (typeof data === "string") {
        return util_utf8_browser_1.fromUtf8(data);
    }
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
}
//# sourceMappingURL=jsSha256.js.map

/***/ }),

/***/ "../../node_modules/@aws-crypto/sha256-js/node_modules/@aws-sdk/util-utf8-browser/dist/es/index.js":
/*!**************************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-crypto/sha256-js/node_modules/@aws-sdk/util-utf8-browser/dist/es/index.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: fromUtf8, toUtf8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromUtf8", function() { return fromUtf8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUtf8", function() { return toUtf8; });
/* harmony import */ var _pureJs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pureJs */ "../../node_modules/@aws-crypto/sha256-js/node_modules/@aws-sdk/util-utf8-browser/dist/es/pureJs.js");
/* harmony import */ var _whatwgEncodingApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./whatwgEncodingApi */ "../../node_modules/@aws-crypto/sha256-js/node_modules/@aws-sdk/util-utf8-browser/dist/es/whatwgEncodingApi.js");


var fromUtf8 = function (input) {
    return typeof TextEncoder === "function" ? Object(_whatwgEncodingApi__WEBPACK_IMPORTED_MODULE_1__["fromUtf8"])(input) : Object(_pureJs__WEBPACK_IMPORTED_MODULE_0__["fromUtf8"])(input);
};
var toUtf8 = function (input) {
    return typeof TextDecoder === "function" ? Object(_whatwgEncodingApi__WEBPACK_IMPORTED_MODULE_1__["toUtf8"])(input) : Object(_pureJs__WEBPACK_IMPORTED_MODULE_0__["toUtf8"])(input);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsSUFBSSxVQUFVLEVBQUUsTUFBTSxJQUFJLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN0RSxPQUFPLEVBQUUsUUFBUSxJQUFJLG1CQUFtQixFQUFFLE1BQU0sSUFBSSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBS25HLE1BQU0sQ0FBQyxJQUFNLFFBQVEsR0FBRyxVQUFDLEtBQWE7SUFDcEMsT0FBQSxPQUFPLFdBQVcsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO0FBQWxGLENBQWtGLENBQUM7QUFFckYsTUFBTSxDQUFDLElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBaUI7SUFDdEMsT0FBQSxPQUFPLFdBQVcsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO0FBQTlFLENBQThFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmcm9tVXRmOCBhcyBqc0Zyb21VdGY4LCB0b1V0ZjggYXMganNUb1V0ZjggfSBmcm9tIFwiLi9wdXJlSnNcIjtcbmltcG9ydCB7IGZyb21VdGY4IGFzIHRleHRFbmNvZGVyRnJvbVV0ZjgsIHRvVXRmOCBhcyB0ZXh0RW5jb2RlclRvVXRmOCB9IGZyb20gXCIuL3doYXR3Z0VuY29kaW5nQXBpXCI7XG5cbmRlY2xhcmUgY29uc3QgVGV4dERlY29kZXI6IEZ1bmN0aW9uIHwgdW5kZWZpbmVkO1xuZGVjbGFyZSBjb25zdCBUZXh0RW5jb2RlcjogRnVuY3Rpb24gfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCBjb25zdCBmcm9tVXRmOCA9IChpbnB1dDogc3RyaW5nKTogVWludDhBcnJheSA9PlxuICB0eXBlb2YgVGV4dEVuY29kZXIgPT09IFwiZnVuY3Rpb25cIiA/IHRleHRFbmNvZGVyRnJvbVV0ZjgoaW5wdXQpIDoganNGcm9tVXRmOChpbnB1dCk7XG5cbmV4cG9ydCBjb25zdCB0b1V0ZjggPSAoaW5wdXQ6IFVpbnQ4QXJyYXkpOiBzdHJpbmcgPT5cbiAgdHlwZW9mIFRleHREZWNvZGVyID09PSBcImZ1bmN0aW9uXCIgPyB0ZXh0RW5jb2RlclRvVXRmOChpbnB1dCkgOiBqc1RvVXRmOChpbnB1dCk7XG4iXX0=

/***/ }),

/***/ "../../node_modules/@aws-crypto/sha256-js/node_modules/@aws-sdk/util-utf8-browser/dist/es/pureJs.js":
/*!***************************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-crypto/sha256-js/node_modules/@aws-sdk/util-utf8-browser/dist/es/pureJs.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: fromUtf8, toUtf8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromUtf8", function() { return fromUtf8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUtf8", function() { return toUtf8; });
/**
 * Converts a JS string from its native UCS-2/UTF-16 representation into a
 * Uint8Array of the bytes used to represent the equivalent characters in UTF-8.
 *
 * Cribbed from the `goog.crypt.stringToUtf8ByteArray` function in the Google
 * Closure library, though updated to use typed arrays.
 */
var fromUtf8 = function (input) {
    var bytes = [];
    for (var i = 0, len = input.length; i < len; i++) {
        var value = input.charCodeAt(i);
        if (value < 0x80) {
            bytes.push(value);
        }
        else if (value < 0x800) {
            bytes.push((value >> 6) | 192, (value & 63) | 128);
        }
        else if (i + 1 < input.length && (value & 0xfc00) === 0xd800 && (input.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            var surrogatePair = 0x10000 + ((value & 1023) << 10) + (input.charCodeAt(++i) & 1023);
            bytes.push((surrogatePair >> 18) | 240, ((surrogatePair >> 12) & 63) | 128, ((surrogatePair >> 6) & 63) | 128, (surrogatePair & 63) | 128);
        }
        else {
            bytes.push((value >> 12) | 224, ((value >> 6) & 63) | 128, (value & 63) | 128);
        }
    }
    return Uint8Array.from(bytes);
};
/**
 * Converts a typed array of bytes containing UTF-8 data into a native JS
 * string.
 *
 * Partly cribbed from the `goog.crypt.utf8ByteArrayToString` function in the
 * Google Closure library, though updated to use typed arrays and to better
 * handle astral plane code points.
 */
var toUtf8 = function (input) {
    var decoded = "";
    for (var i = 0, len = input.length; i < len; i++) {
        var byte = input[i];
        if (byte < 0x80) {
            decoded += String.fromCharCode(byte);
        }
        else if (192 <= byte && byte < 224) {
            var nextByte = input[++i];
            decoded += String.fromCharCode(((byte & 31) << 6) | (nextByte & 63));
        }
        else if (240 <= byte && byte < 365) {
            var surrogatePair = [byte, input[++i], input[++i], input[++i]];
            var encoded = "%" + surrogatePair.map(function (byteValue) { return byteValue.toString(16); }).join("%");
            decoded += decodeURIComponent(encoded);
        }
        else {
            decoded += String.fromCharCode(((byte & 15) << 12) | ((input[++i] & 63) << 6) | (input[++i] & 63));
        }
    }
    return decoded;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVyZUpzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3B1cmVKcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxNQUFNLENBQUMsSUFBTSxRQUFRLEdBQUcsVUFBQyxLQUFhO0lBQ3BDLElBQU0sS0FBSyxHQUFrQixFQUFFLENBQUM7SUFDaEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNoRCxJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksS0FBSyxHQUFHLElBQUksRUFBRTtZQUNoQixLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25CO2FBQU0sSUFBSSxLQUFLLEdBQUcsS0FBSyxFQUFFO1lBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBVSxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQVEsQ0FBQyxHQUFHLEdBQVUsQ0FBQyxDQUFDO1NBQ3hFO2FBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssTUFBTSxFQUFFO1lBQy9HLElBQU0sYUFBYSxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQVksQ0FBQyxDQUFDO1lBQ3hHLEtBQUssQ0FBQyxJQUFJLENBQ1IsQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDLEdBQUcsR0FBVSxFQUNsQyxDQUFDLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQVEsQ0FBQyxHQUFHLEdBQVUsRUFDL0MsQ0FBQyxDQUFDLGFBQWEsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFRLENBQUMsR0FBRyxHQUFVLEVBQzlDLENBQUMsYUFBYSxHQUFHLEVBQVEsQ0FBQyxHQUFHLEdBQVUsQ0FDeEMsQ0FBQztTQUNIO2FBQU07WUFDTCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEdBQVUsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQVEsQ0FBQyxHQUFHLEdBQVUsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFRLENBQUMsR0FBRyxHQUFVLENBQUMsQ0FBQztTQUNqSDtLQUNGO0lBRUQsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hDLENBQUMsQ0FBQztBQUVGOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLENBQUMsSUFBTSxNQUFNLEdBQUcsVUFBQyxLQUFpQjtJQUN0QyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDakIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNoRCxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxFQUFFO1lBQ2YsT0FBTyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEM7YUFBTSxJQUFJLEdBQVUsSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEdBQVUsRUFBRTtZQUNsRCxJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM1QixPQUFPLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLEVBQVEsQ0FBQyxDQUFDLENBQUM7U0FDakY7YUFBTSxJQUFJLEdBQVUsSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEdBQVcsRUFBRTtZQUNuRCxJQUFNLGFBQWEsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLElBQU0sT0FBTyxHQUFHLEdBQUcsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLFVBQUMsU0FBUyxJQUFLLE9BQUEsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6RixPQUFPLElBQUksa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEM7YUFBTTtZQUNMLE9BQU8sSUFBSSxNQUFNLENBQUMsWUFBWSxDQUM1QixDQUFDLENBQUMsSUFBSSxHQUFHLEVBQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQVEsQ0FBQyxDQUNuRixDQUFDO1NBQ0g7S0FDRjtJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29udmVydHMgYSBKUyBzdHJpbmcgZnJvbSBpdHMgbmF0aXZlIFVDUy0yL1VURi0xNiByZXByZXNlbnRhdGlvbiBpbnRvIGFcbiAqIFVpbnQ4QXJyYXkgb2YgdGhlIGJ5dGVzIHVzZWQgdG8gcmVwcmVzZW50IHRoZSBlcXVpdmFsZW50IGNoYXJhY3RlcnMgaW4gVVRGLTguXG4gKlxuICogQ3JpYmJlZCBmcm9tIHRoZSBgZ29vZy5jcnlwdC5zdHJpbmdUb1V0ZjhCeXRlQXJyYXlgIGZ1bmN0aW9uIGluIHRoZSBHb29nbGVcbiAqIENsb3N1cmUgbGlicmFyeSwgdGhvdWdoIHVwZGF0ZWQgdG8gdXNlIHR5cGVkIGFycmF5cy5cbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21VdGY4ID0gKGlucHV0OiBzdHJpbmcpOiBVaW50OEFycmF5ID0+IHtcbiAgY29uc3QgYnl0ZXM6IEFycmF5PG51bWJlcj4gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGlucHV0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgdmFsdWUgPSBpbnB1dC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmICh2YWx1ZSA8IDB4ODApIHtcbiAgICAgIGJ5dGVzLnB1c2godmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPCAweDgwMCkge1xuICAgICAgYnl0ZXMucHVzaCgodmFsdWUgPj4gNikgfCAwYjExMDAwMDAwLCAodmFsdWUgJiAwYjExMTExMSkgfCAwYjEwMDAwMDAwKTtcbiAgICB9IGVsc2UgaWYgKGkgKyAxIDwgaW5wdXQubGVuZ3RoICYmICh2YWx1ZSAmIDB4ZmMwMCkgPT09IDB4ZDgwMCAmJiAoaW5wdXQuY2hhckNvZGVBdChpICsgMSkgJiAweGZjMDApID09PSAweGRjMDApIHtcbiAgICAgIGNvbnN0IHN1cnJvZ2F0ZVBhaXIgPSAweDEwMDAwICsgKCh2YWx1ZSAmIDBiMTExMTExMTExMSkgPDwgMTApICsgKGlucHV0LmNoYXJDb2RlQXQoKytpKSAmIDBiMTExMTExMTExMSk7XG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICAoc3Vycm9nYXRlUGFpciA+PiAxOCkgfCAwYjExMTEwMDAwLFxuICAgICAgICAoKHN1cnJvZ2F0ZVBhaXIgPj4gMTIpICYgMGIxMTExMTEpIHwgMGIxMDAwMDAwMCxcbiAgICAgICAgKChzdXJyb2dhdGVQYWlyID4+IDYpICYgMGIxMTExMTEpIHwgMGIxMDAwMDAwMCxcbiAgICAgICAgKHN1cnJvZ2F0ZVBhaXIgJiAwYjExMTExMSkgfCAwYjEwMDAwMDAwXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBieXRlcy5wdXNoKCh2YWx1ZSA+PiAxMikgfCAwYjExMTAwMDAwLCAoKHZhbHVlID4+IDYpICYgMGIxMTExMTEpIHwgMGIxMDAwMDAwMCwgKHZhbHVlICYgMGIxMTExMTEpIHwgMGIxMDAwMDAwMCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFVpbnQ4QXJyYXkuZnJvbShieXRlcyk7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIGEgdHlwZWQgYXJyYXkgb2YgYnl0ZXMgY29udGFpbmluZyBVVEYtOCBkYXRhIGludG8gYSBuYXRpdmUgSlNcbiAqIHN0cmluZy5cbiAqXG4gKiBQYXJ0bHkgY3JpYmJlZCBmcm9tIHRoZSBgZ29vZy5jcnlwdC51dGY4Qnl0ZUFycmF5VG9TdHJpbmdgIGZ1bmN0aW9uIGluIHRoZVxuICogR29vZ2xlIENsb3N1cmUgbGlicmFyeSwgdGhvdWdoIHVwZGF0ZWQgdG8gdXNlIHR5cGVkIGFycmF5cyBhbmQgdG8gYmV0dGVyXG4gKiBoYW5kbGUgYXN0cmFsIHBsYW5lIGNvZGUgcG9pbnRzLlxuICovXG5leHBvcnQgY29uc3QgdG9VdGY4ID0gKGlucHV0OiBVaW50OEFycmF5KTogc3RyaW5nID0+IHtcbiAgbGV0IGRlY29kZWQgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0gaW5wdXQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBieXRlID0gaW5wdXRbaV07XG4gICAgaWYgKGJ5dGUgPCAweDgwKSB7XG4gICAgICBkZWNvZGVkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZSk7XG4gICAgfSBlbHNlIGlmICgwYjExMDAwMDAwIDw9IGJ5dGUgJiYgYnl0ZSA8IDBiMTExMDAwMDApIHtcbiAgICAgIGNvbnN0IG5leHRCeXRlID0gaW5wdXRbKytpXTtcbiAgICAgIGRlY29kZWQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGJ5dGUgJiAwYjExMTExKSA8PCA2KSB8IChuZXh0Qnl0ZSAmIDBiMTExMTExKSk7XG4gICAgfSBlbHNlIGlmICgwYjExMTEwMDAwIDw9IGJ5dGUgJiYgYnl0ZSA8IDBiMTAxMTAxMTAxKSB7XG4gICAgICBjb25zdCBzdXJyb2dhdGVQYWlyID0gW2J5dGUsIGlucHV0WysraV0sIGlucHV0WysraV0sIGlucHV0WysraV1dO1xuICAgICAgY29uc3QgZW5jb2RlZCA9IFwiJVwiICsgc3Vycm9nYXRlUGFpci5tYXAoKGJ5dGVWYWx1ZSkgPT4gYnl0ZVZhbHVlLnRvU3RyaW5nKDE2KSkuam9pbihcIiVcIik7XG4gICAgICBkZWNvZGVkICs9IGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVjb2RlZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKFxuICAgICAgICAoKGJ5dGUgJiAwYjExMTEpIDw8IDEyKSB8ICgoaW5wdXRbKytpXSAmIDBiMTExMTExKSA8PCA2KSB8IChpbnB1dFsrK2ldICYgMGIxMTExMTEpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZWNvZGVkO1xufTtcbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-crypto/sha256-js/node_modules/@aws-sdk/util-utf8-browser/dist/es/whatwgEncodingApi.js":
/*!**************************************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-crypto/sha256-js/node_modules/@aws-sdk/util-utf8-browser/dist/es/whatwgEncodingApi.js ***!
  \**************************************************************************************************************************************************/
/*! exports provided: fromUtf8, toUtf8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromUtf8", function() { return fromUtf8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUtf8", function() { return toUtf8; });
function fromUtf8(input) {
    return new TextEncoder().encode(input);
}
function toUtf8(input) {
    return new TextDecoder("utf-8").decode(input);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2hhdHdnRW5jb2RpbmdBcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvd2hhdHdnRW5jb2RpbmdBcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUNBLE1BQU0sVUFBVSxRQUFRLENBQUMsS0FBYTtJQUNwQyxPQUFPLElBQUksV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3pDLENBQUM7QUFFRCxNQUFNLFVBQVUsTUFBTSxDQUFDLEtBQWlCO0lBQ3RDLE9BQU8sSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgZGVjbGFyYXRpb24gb2YgdGhlIGdsb2JhbCBUZXh0RW5jb2RlciBhbmQgVGV4dERlY29kZXIgY29uc3RydWN0b3JzLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9lbmNvZGluZy5zcGVjLndoYXR3Zy5vcmcvXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbmFtZXNwYWNlXG5uYW1lc3BhY2UgRW5jb2Rpbmcge1xuICBpbnRlcmZhY2UgVGV4dERlY29kZXJPcHRpb25zIHtcbiAgICBmYXRhbD86IGJvb2xlYW47XG4gICAgaWdub3JlQk9NPzogYm9vbGVhbjtcbiAgfVxuXG4gIGludGVyZmFjZSBUZXh0RGVjb2RlT3B0aW9ucyB7XG4gICAgc3RyZWFtPzogYm9vbGVhbjtcbiAgfVxuXG4gIGludGVyZmFjZSBUZXh0RGVjb2RlciB7XG4gICAgcmVhZG9ubHkgZW5jb2Rpbmc6IHN0cmluZztcbiAgICByZWFkb25seSBmYXRhbDogYm9vbGVhbjtcbiAgICByZWFkb25seSBpZ25vcmVCT006IGJvb2xlYW47XG4gICAgZGVjb2RlKGlucHV0PzogQXJyYXlCdWZmZXIgfCBBcnJheUJ1ZmZlclZpZXcsIG9wdGlvbnM/OiBUZXh0RGVjb2RlT3B0aW9ucyk6IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgVGV4dERlY29kZXJDb25zdHJ1Y3RvciB7XG4gICAgbmV3IChsYWJlbD86IHN0cmluZywgb3B0aW9ucz86IFRleHREZWNvZGVyT3B0aW9ucyk6IFRleHREZWNvZGVyO1xuICB9XG5cbiAgaW50ZXJmYWNlIFRleHRFbmNvZGVyIHtcbiAgICByZWFkb25seSBlbmNvZGluZzogXCJ1dGYtOFwiO1xuICAgIGVuY29kZShpbnB1dD86IHN0cmluZyk6IFVpbnQ4QXJyYXk7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIFRleHRFbmNvZGVyQ29uc3RydWN0b3Ige1xuICAgIG5ldyAoKTogVGV4dEVuY29kZXI7XG4gIH1cbn1cblxuZGVjbGFyZSBjb25zdCBUZXh0RGVjb2RlcjogRW5jb2RpbmcuVGV4dERlY29kZXJDb25zdHJ1Y3RvcjtcblxuZGVjbGFyZSBjb25zdCBUZXh0RW5jb2RlcjogRW5jb2RpbmcuVGV4dEVuY29kZXJDb25zdHJ1Y3RvcjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21VdGY4KGlucHV0OiBzdHJpbmcpOiBVaW50OEFycmF5IHtcbiAgcmV0dXJuIG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShpbnB1dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1V0ZjgoaW5wdXQ6IFVpbnQ4QXJyYXkpOiBzdHJpbmcge1xuICByZXR1cm4gbmV3IFRleHREZWNvZGVyKFwidXRmLThcIikuZGVjb2RlKGlucHV0KTtcbn1cbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-crypto/supports-web-crypto/build/index.js":
/*!******************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-crypto/supports-web-crypto/build/index.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__(/*! ./supportsWebCrypto */ "../../node_modules/@aws-crypto/supports-web-crypto/build/supportsWebCrypto.js"), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOERBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vc3VwcG9ydHNXZWJDcnlwdG9cIjtcbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-crypto/supports-web-crypto/build/supportsWebCrypto.js":
/*!******************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-crypto/supports-web-crypto/build/supportsWebCrypto.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.supportsZeroByteGCM = exports.supportsSubtleCrypto = exports.supportsSecureRandom = exports.supportsWebCrypto = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
var subtleCryptoMethods = [
    "decrypt",
    "digest",
    "encrypt",
    "exportKey",
    "generateKey",
    "importKey",
    "sign",
    "verify"
];
function supportsWebCrypto(window) {
    if (supportsSecureRandom(window) &&
        typeof window.crypto.subtle === "object") {
        var subtle = window.crypto.subtle;
        return supportsSubtleCrypto(subtle);
    }
    return false;
}
exports.supportsWebCrypto = supportsWebCrypto;
function supportsSecureRandom(window) {
    if (typeof window === "object" && typeof window.crypto === "object") {
        var getRandomValues = window.crypto.getRandomValues;
        return typeof getRandomValues === "function";
    }
    return false;
}
exports.supportsSecureRandom = supportsSecureRandom;
function supportsSubtleCrypto(subtle) {
    return (subtle &&
        subtleCryptoMethods.every(function (methodName) { return typeof subtle[methodName] === "function"; }));
}
exports.supportsSubtleCrypto = supportsSubtleCrypto;
function supportsZeroByteGCM(subtle) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var key, zeroByteAuthTag, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!supportsSubtleCrypto(subtle))
                        return [2 /*return*/, false];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, subtle.generateKey({ name: "AES-GCM", length: 128 }, false, ["encrypt"])];
                case 2:
                    key = _b.sent();
                    return [4 /*yield*/, subtle.encrypt({
                            name: "AES-GCM",
                            iv: new Uint8Array(Array(12)),
                            additionalData: new Uint8Array(Array(16)),
                            tagLength: 128
                        }, key, new Uint8Array(0))];
                case 3:
                    zeroByteAuthTag = _b.sent();
                    return [2 /*return*/, zeroByteAuthTag.byteLength === 16];
                case 4:
                    _a = _b.sent();
                    return [2 /*return*/, false];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.supportsZeroByteGCM = supportsZeroByteGCM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwcG9ydHNXZWJDcnlwdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvc3VwcG9ydHNXZWJDcnlwdG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQVVBLElBQU0sbUJBQW1CLEdBQThCO0lBQ3JELFNBQVM7SUFDVCxRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxhQUFhO0lBQ2IsV0FBVztJQUNYLE1BQU07SUFDTixRQUFRO0NBQ1QsQ0FBQztBQUVGLFNBQWdCLGlCQUFpQixDQUFDLE1BQWM7SUFDOUMsSUFDRSxvQkFBb0IsQ0FBQyxNQUFNLENBQUM7UUFDNUIsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQ3hDO1FBQ1EsSUFBQSxNQUFNLEdBQUssTUFBTSxDQUFDLE1BQU0sT0FBbEIsQ0FBbUI7UUFFakMsT0FBTyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNyQztJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQVhELDhDQVdDO0FBRUQsU0FBZ0Isb0JBQW9CLENBQUMsTUFBYztJQUNqRCxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxPQUFPLE1BQU0sQ0FBQyxNQUFNLEtBQUssUUFBUSxFQUFFO1FBQzNELElBQUEsZUFBZSxHQUFLLE1BQU0sQ0FBQyxNQUFNLGdCQUFsQixDQUFtQjtRQUUxQyxPQUFPLE9BQU8sZUFBZSxLQUFLLFVBQVUsQ0FBQztLQUM5QztJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQVJELG9EQVFDO0FBRUQsU0FBZ0Isb0JBQW9CLENBQUMsTUFBb0I7SUFDdkQsT0FBTyxDQUNMLE1BQU07UUFDTixtQkFBbUIsQ0FBQyxLQUFLLENBQ3ZCLFVBQUEsVUFBVSxJQUFJLE9BQUEsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssVUFBVSxFQUF4QyxDQUF3QyxDQUN2RCxDQUNGLENBQUM7QUFDSixDQUFDO0FBUEQsb0RBT0M7QUFFRCxTQUFzQixtQkFBbUIsQ0FBQyxNQUFvQjs7Ozs7O29CQUM1RCxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDO3dCQUFFLHNCQUFPLEtBQUssRUFBQzs7OztvQkFFbEMscUJBQU0sTUFBTSxDQUFDLFdBQVcsQ0FDbEMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFDaEMsS0FBSyxFQUNMLENBQUMsU0FBUyxDQUFDLENBQ1osRUFBQTs7b0JBSkssR0FBRyxHQUFHLFNBSVg7b0JBQ3VCLHFCQUFNLE1BQU0sQ0FBQyxPQUFPLENBQzFDOzRCQUNFLElBQUksRUFBRSxTQUFTOzRCQUNmLEVBQUUsRUFBRSxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7NEJBQzdCLGNBQWMsRUFBRSxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7NEJBQ3pDLFNBQVMsRUFBRSxHQUFHO3lCQUNmLEVBQ0QsR0FBRyxFQUNILElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUNsQixFQUFBOztvQkFUSyxlQUFlLEdBQUcsU0FTdkI7b0JBQ0Qsc0JBQU8sZUFBZSxDQUFDLFVBQVUsS0FBSyxFQUFFLEVBQUM7OztvQkFFekMsc0JBQU8sS0FBSyxFQUFDOzs7OztDQUVoQjtBQXRCRCxrREFzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIFN1YnRsZUNyeXB0b01ldGhvZCA9XG4gIHwgXCJkZWNyeXB0XCJcbiAgfCBcImRpZ2VzdFwiXG4gIHwgXCJlbmNyeXB0XCJcbiAgfCBcImV4cG9ydEtleVwiXG4gIHwgXCJnZW5lcmF0ZUtleVwiXG4gIHwgXCJpbXBvcnRLZXlcIlxuICB8IFwic2lnblwiXG4gIHwgXCJ2ZXJpZnlcIjtcblxuY29uc3Qgc3VidGxlQ3J5cHRvTWV0aG9kczogQXJyYXk8U3VidGxlQ3J5cHRvTWV0aG9kPiA9IFtcbiAgXCJkZWNyeXB0XCIsXG4gIFwiZGlnZXN0XCIsXG4gIFwiZW5jcnlwdFwiLFxuICBcImV4cG9ydEtleVwiLFxuICBcImdlbmVyYXRlS2V5XCIsXG4gIFwiaW1wb3J0S2V5XCIsXG4gIFwic2lnblwiLFxuICBcInZlcmlmeVwiXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydHNXZWJDcnlwdG8od2luZG93OiBXaW5kb3cpOiBib29sZWFuIHtcbiAgaWYgKFxuICAgIHN1cHBvcnRzU2VjdXJlUmFuZG9tKHdpbmRvdykgJiZcbiAgICB0eXBlb2Ygd2luZG93LmNyeXB0by5zdWJ0bGUgPT09IFwib2JqZWN0XCJcbiAgKSB7XG4gICAgY29uc3QgeyBzdWJ0bGUgfSA9IHdpbmRvdy5jcnlwdG87XG5cbiAgICByZXR1cm4gc3VwcG9ydHNTdWJ0bGVDcnlwdG8oc3VidGxlKTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvcnRzU2VjdXJlUmFuZG9tKHdpbmRvdzogV2luZG93KTogYm9vbGVhbiB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB3aW5kb3cuY3J5cHRvID09PSBcIm9iamVjdFwiKSB7XG4gICAgY29uc3QgeyBnZXRSYW5kb21WYWx1ZXMgfSA9IHdpbmRvdy5jcnlwdG87XG5cbiAgICByZXR1cm4gdHlwZW9mIGdldFJhbmRvbVZhbHVlcyA9PT0gXCJmdW5jdGlvblwiO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydHNTdWJ0bGVDcnlwdG8oc3VidGxlOiBTdWJ0bGVDcnlwdG8pIHtcbiAgcmV0dXJuIChcbiAgICBzdWJ0bGUgJiZcbiAgICBzdWJ0bGVDcnlwdG9NZXRob2RzLmV2ZXJ5KFxuICAgICAgbWV0aG9kTmFtZSA9PiB0eXBlb2Ygc3VidGxlW21ldGhvZE5hbWVdID09PSBcImZ1bmN0aW9uXCJcbiAgICApXG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdXBwb3J0c1plcm9CeXRlR0NNKHN1YnRsZTogU3VidGxlQ3J5cHRvKSB7XG4gIGlmICghc3VwcG9ydHNTdWJ0bGVDcnlwdG8oc3VidGxlKSkgcmV0dXJuIGZhbHNlO1xuICB0cnkge1xuICAgIGNvbnN0IGtleSA9IGF3YWl0IHN1YnRsZS5nZW5lcmF0ZUtleShcbiAgICAgIHsgbmFtZTogXCJBRVMtR0NNXCIsIGxlbmd0aDogMTI4IH0sXG4gICAgICBmYWxzZSxcbiAgICAgIFtcImVuY3J5cHRcIl1cbiAgICApO1xuICAgIGNvbnN0IHplcm9CeXRlQXV0aFRhZyA9IGF3YWl0IHN1YnRsZS5lbmNyeXB0KFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIkFFUy1HQ01cIixcbiAgICAgICAgaXY6IG5ldyBVaW50OEFycmF5KEFycmF5KDEyKSksXG4gICAgICAgIGFkZGl0aW9uYWxEYXRhOiBuZXcgVWludDhBcnJheShBcnJheSgxNikpLFxuICAgICAgICB0YWdMZW5ndGg6IDEyOFxuICAgICAgfSxcbiAgICAgIGtleSxcbiAgICAgIG5ldyBVaW50OEFycmF5KDApXG4gICAgKTtcbiAgICByZXR1cm4gemVyb0J5dGVBdXRoVGFnLmJ5dGVMZW5ndGggPT09IDE2O1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/LexRuntimeService.js":
/*!************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/client-lex-runtime-service/dist/es/LexRuntimeService.js ***!
  \************************************************************************************************************************/
/*! exports provided: LexRuntimeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LexRuntimeService", function() { return LexRuntimeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/@aws-sdk/client-lex-runtime-service/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _LexRuntimeServiceClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LexRuntimeServiceClient */ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/LexRuntimeServiceClient.js");
/* harmony import */ var _commands_DeleteSessionCommand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commands/DeleteSessionCommand */ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/commands/DeleteSessionCommand.js");
/* harmony import */ var _commands_GetSessionCommand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commands/GetSessionCommand */ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/commands/GetSessionCommand.js");
/* harmony import */ var _commands_PostContentCommand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./commands/PostContentCommand */ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/commands/PostContentCommand.js");
/* harmony import */ var _commands_PostTextCommand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./commands/PostTextCommand */ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/commands/PostTextCommand.js");
/* harmony import */ var _commands_PutSessionCommand__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./commands/PutSessionCommand */ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/commands/PutSessionCommand.js");







/**
 * <p>Amazon Lex provides both build and runtime endpoints. Each endpoint provides a set of
 *       operations (API). Your conversational bot uses the runtime API to understand user utterances
 *       (user input text or voice). For example, suppose a user says "I want pizza", your bot sends
 *       this input to Amazon Lex using the runtime API. Amazon Lex recognizes that the user request is
 *       for the OrderPizza intent (one of the intents defined in the bot). Then Amazon Lex engages in
 *       user conversation on behalf of the bot to elicit required information (slot values, such as
 *       pizza size and crust type), and then performs fulfillment activity (that you configured when
 *       you created the bot). You use the build-time API to create and manage your Amazon Lex bot. For
 *       a list of build-time operations, see the build-time API, . </p>
 */
var LexRuntimeService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LexRuntimeService, _super);
    function LexRuntimeService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LexRuntimeService.prototype.deleteSession = function (args, optionsOrCb, cb) {
        var command = new _commands_DeleteSessionCommand__WEBPACK_IMPORTED_MODULE_2__["DeleteSessionCommand"](args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    LexRuntimeService.prototype.getSession = function (args, optionsOrCb, cb) {
        var command = new _commands_GetSessionCommand__WEBPACK_IMPORTED_MODULE_3__["GetSessionCommand"](args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    LexRuntimeService.prototype.postContent = function (args, optionsOrCb, cb) {
        var command = new _commands_PostContentCommand__WEBPACK_IMPORTED_MODULE_4__["PostContentCommand"](args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    LexRuntimeService.prototype.postText = function (args, optionsOrCb, cb) {
        var command = new _commands_PostTextCommand__WEBPACK_IMPORTED_MODULE_5__["PostTextCommand"](args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    LexRuntimeService.prototype.putSession = function (args, optionsOrCb, cb) {
        var command = new _commands_PutSessionCommand__WEBPACK_IMPORTED_MODULE_6__["PutSessionCommand"](args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    return LexRuntimeService;
}(_LexRuntimeServiceClient__WEBPACK_IMPORTED_MODULE_1__["LexRuntimeServiceClient"]));

//# sourceMappingURL=LexRuntimeService.js.map

/***/ }),

/***/ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/LexRuntimeServiceClient.js":
/*!******************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/client-lex-runtime-service/dist/es/LexRuntimeServiceClient.js ***!
  \******************************************************************************************************************************/
/*! exports provided: LexRuntimeServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LexRuntimeServiceClient", function() { return LexRuntimeServiceClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/@aws-sdk/client-lex-runtime-service/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _runtimeConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./runtimeConfig */ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/runtimeConfig.browser.js");
/* harmony import */ var _aws_sdk_config_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/config-resolver */ "../../node_modules/@aws-sdk/config-resolver/dist/es/index.js");
/* harmony import */ var _aws_sdk_middleware_content_length__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-sdk/middleware-content-length */ "../../node_modules/@aws-sdk/middleware-content-length/dist/es/index.js");
/* harmony import */ var _aws_sdk_middleware_host_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aws-sdk/middleware-host-header */ "../../node_modules/@aws-sdk/middleware-host-header/dist/es/index.js");
/* harmony import */ var _aws_sdk_middleware_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aws-sdk/middleware-logger */ "../../node_modules/@aws-sdk/middleware-logger/dist/es/index.js");
/* harmony import */ var _aws_sdk_middleware_retry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @aws-sdk/middleware-retry */ "../../node_modules/@aws-sdk/middleware-retry/dist/es/index.js");
/* harmony import */ var _aws_sdk_middleware_signing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @aws-sdk/middleware-signing */ "../../node_modules/@aws-sdk/middleware-signing/dist/es/index.js");
/* harmony import */ var _aws_sdk_middleware_user_agent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @aws-sdk/middleware-user-agent */ "../../node_modules/@aws-sdk/middleware-user-agent/dist/es/index.js");
/* harmony import */ var _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @aws-sdk/smithy-client */ "../../node_modules/@aws-sdk/smithy-client/dist/es/index.js");










/**
 * <p>Amazon Lex provides both build and runtime endpoints. Each endpoint provides a set of
 *       operations (API). Your conversational bot uses the runtime API to understand user utterances
 *       (user input text or voice). For example, suppose a user says "I want pizza", your bot sends
 *       this input to Amazon Lex using the runtime API. Amazon Lex recognizes that the user request is
 *       for the OrderPizza intent (one of the intents defined in the bot). Then Amazon Lex engages in
 *       user conversation on behalf of the bot to elicit required information (slot values, such as
 *       pizza size and crust type), and then performs fulfillment activity (that you configured when
 *       you created the bot). You use the build-time API to create and manage your Amazon Lex bot. For
 *       a list of build-time operations, see the build-time API, . </p>
 */
var LexRuntimeServiceClient = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LexRuntimeServiceClient, _super);
    function LexRuntimeServiceClient(configuration) {
        var _this = this;
        var _config_0 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _runtimeConfig__WEBPACK_IMPORTED_MODULE_1__["ClientDefaultValues"]), configuration);
        var _config_1 = Object(_aws_sdk_config_resolver__WEBPACK_IMPORTED_MODULE_2__["resolveRegionConfig"])(_config_0);
        var _config_2 = Object(_aws_sdk_config_resolver__WEBPACK_IMPORTED_MODULE_2__["resolveEndpointsConfig"])(_config_1);
        var _config_3 = Object(_aws_sdk_middleware_signing__WEBPACK_IMPORTED_MODULE_7__["resolveAwsAuthConfig"])(_config_2);
        var _config_4 = Object(_aws_sdk_middleware_retry__WEBPACK_IMPORTED_MODULE_6__["resolveRetryConfig"])(_config_3);
        var _config_5 = Object(_aws_sdk_middleware_host_header__WEBPACK_IMPORTED_MODULE_4__["resolveHostHeaderConfig"])(_config_4);
        var _config_6 = Object(_aws_sdk_middleware_user_agent__WEBPACK_IMPORTED_MODULE_8__["resolveUserAgentConfig"])(_config_5);
        _this = _super.call(this, _config_6) || this;
        _this.config = _config_6;
        _this.middlewareStack.use(Object(_aws_sdk_middleware_signing__WEBPACK_IMPORTED_MODULE_7__["getAwsAuthPlugin"])(_this.config));
        _this.middlewareStack.use(Object(_aws_sdk_middleware_retry__WEBPACK_IMPORTED_MODULE_6__["getRetryPlugin"])(_this.config));
        _this.middlewareStack.use(Object(_aws_sdk_middleware_content_length__WEBPACK_IMPORTED_MODULE_3__["getContentLengthPlugin"])(_this.config));
        _this.middlewareStack.use(Object(_aws_sdk_middleware_host_header__WEBPACK_IMPORTED_MODULE_4__["getHostHeaderPlugin"])(_this.config));
        _this.middlewareStack.use(Object(_aws_sdk_middleware_logger__WEBPACK_IMPORTED_MODULE_5__["getLoggerPlugin"])(_this.config));
        _this.middlewareStack.use(Object(_aws_sdk_middleware_user_agent__WEBPACK_IMPORTED_MODULE_8__["getUserAgentPlugin"])(_this.config));
        return _this;
    }
    LexRuntimeServiceClient.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
    };
    return LexRuntimeServiceClient;
}(_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_9__["Client"]));

//# sourceMappingURL=LexRuntimeServiceClient.js.map

/***/ }),

/***/ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/commands/DeleteSessionCommand.js":
/*!************************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/client-lex-runtime-service/dist/es/commands/DeleteSessionCommand.js ***!
  \************************************************************************************************************************************/
/*! exports provided: DeleteSessionCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteSessionCommand", function() { return DeleteSessionCommand; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/@aws-sdk/client-lex-runtime-service/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_models_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/models_0 */ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/models/models_0.js");
/* harmony import */ var _protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../protocols/Aws_restJson1 */ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/protocols/Aws_restJson1.js");
/* harmony import */ var _aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-sdk/middleware-serde */ "../../node_modules/@aws-sdk/middleware-serde/dist/es/index.js");
/* harmony import */ var _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aws-sdk/smithy-client */ "../../node_modules/@aws-sdk/smithy-client/dist/es/index.js");





/**
 * <p>Removes session information for a specified bot, alias, and user ID. </p>
 */
var DeleteSessionCommand = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DeleteSessionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSessionCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    DeleteSessionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(Object(_aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_3__["getSerdePlugin"])(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexRuntimeServiceClient";
        var commandName = "DeleteSessionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: _models_models_0__WEBPACK_IMPORTED_MODULE_1__["DeleteSessionRequest"].filterSensitiveLog,
            outputFilterSensitiveLog: _models_models_0__WEBPACK_IMPORTED_MODULE_1__["DeleteSessionResponse"].filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSessionCommand.prototype.serialize = function (input, context) {
        return Object(_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_2__["serializeAws_restJson1DeleteSessionCommand"])(input, context);
    };
    DeleteSessionCommand.prototype.deserialize = function (output, context) {
        return Object(_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_2__["deserializeAws_restJson1DeleteSessionCommand"])(output, context);
    };
    return DeleteSessionCommand;
}(_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_4__["Command"]));

//# sourceMappingURL=DeleteSessionCommand.js.map

/***/ }),

/***/ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/commands/GetSessionCommand.js":
/*!*********************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/client-lex-runtime-service/dist/es/commands/GetSessionCommand.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: GetSessionCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSessionCommand", function() { return GetSessionCommand; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/@aws-sdk/client-lex-runtime-service/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_models_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/models_0 */ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/models/models_0.js");
/* harmony import */ var _protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../protocols/Aws_restJson1 */ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/protocols/Aws_restJson1.js");
/* harmony import */ var _aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-sdk/middleware-serde */ "../../node_modules/@aws-sdk/middleware-serde/dist/es/index.js");
/* harmony import */ var _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aws-sdk/smithy-client */ "../../node_modules/@aws-sdk/smithy-client/dist/es/index.js");





/**
 * <p>Returns session information for a specified bot, alias, and user ID.</p>
 */
var GetSessionCommand = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GetSessionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSessionCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    GetSessionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(Object(_aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_3__["getSerdePlugin"])(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexRuntimeServiceClient";
        var commandName = "GetSessionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: _models_models_0__WEBPACK_IMPORTED_MODULE_1__["GetSessionRequest"].filterSensitiveLog,
            outputFilterSensitiveLog: _models_models_0__WEBPACK_IMPORTED_MODULE_1__["GetSessionResponse"].filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSessionCommand.prototype.serialize = function (input, context) {
        return Object(_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_2__["serializeAws_restJson1GetSessionCommand"])(input, context);
    };
    GetSessionCommand.prototype.deserialize = function (output, context) {
        return Object(_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_2__["deserializeAws_restJson1GetSessionCommand"])(output, context);
    };
    return GetSessionCommand;
}(_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_4__["Command"]));

//# sourceMappingURL=GetSessionCommand.js.map

/***/ }),

/***/ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/commands/PostContentCommand.js":
/*!**********************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/client-lex-runtime-service/dist/es/commands/PostContentCommand.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: PostContentCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostContentCommand", function() { return PostContentCommand; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/@aws-sdk/client-lex-runtime-service/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_models_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/models_0 */ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/models/models_0.js");
/* harmony import */ var _protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../protocols/Aws_restJson1 */ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/protocols/Aws_restJson1.js");
/* harmony import */ var _aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-sdk/middleware-serde */ "../../node_modules/@aws-sdk/middleware-serde/dist/es/index.js");
/* harmony import */ var _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aws-sdk/smithy-client */ "../../node_modules/@aws-sdk/smithy-client/dist/es/index.js");





/**
 * <p> Sends user input (text or speech) to Amazon Lex. Clients use this API to send text and audio
 *       requests to Amazon Lex at runtime. Amazon Lex interprets the user input using the machine learning model
 *       that it built for the bot. </p>
 *          <p>The <code>PostContent</code> operation supports audio input at 8kHz and 16kHz. You can use
 *       8kHz audio to achieve higher speech recognition accuracy in telephone audio applications. </p>
 *          <p> In response, Amazon Lex returns the next message to convey to the user. Consider the following
 *       example messages: </p>
 *          <ul>
 *             <li>
 *                <p> For a user input "I would like a pizza," Amazon Lex might return a response with a message
 *           eliciting slot data (for example, <code>PizzaSize</code>): "What size pizza would you
 *           like?". </p>
 *             </li>
 *             <li>
 *                <p> After the user provides all of the pizza order information, Amazon Lex might return a
 *           response with a message to get user confirmation: "Order the pizza?". </p>
 *             </li>
 *             <li>
 *                <p> After the user replies "Yes" to the confirmation prompt, Amazon Lex might return a
 *           conclusion statement: "Thank you, your cheese pizza has been ordered.". </p>
 *             </li>
 *          </ul>
 *          <p> Not all Amazon Lex messages require a response from the user. For example, conclusion
 *       statements do not require a response. Some messages require only a yes or no response. In
 *       addition to the <code>message</code>, Amazon Lex provides additional context about the message in
 *       the response that you can use to enhance client behavior, such as displaying the appropriate
 *       client user interface. Consider the following examples: </p>
 *          <ul>
 *             <li>
 *                <p> If the message is to elicit slot data, Amazon Lex returns the following context
 *           information: </p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>x-amz-lex-dialog-state</code> header set to <code>ElicitSlot</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>x-amz-lex-intent-name</code> header set to the intent name in the current
 *               context </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>x-amz-lex-slot-to-elicit</code> header set to the slot name for which the
 *                 <code>message</code> is eliciting information </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>x-amz-lex-slots</code> header set to a map of slots configured for the intent
 *               with their current values </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p> If the message is a confirmation prompt, the <code>x-amz-lex-dialog-state</code>
 *           header is set to <code>Confirmation</code> and the <code>x-amz-lex-slot-to-elicit</code>
 *           header is omitted. </p>
 *             </li>
 *             <li>
 *                <p> If the message is a clarification prompt configured for the intent, indicating that
 *           the user intent is not understood, the <code>x-amz-dialog-state</code> header is set to
 *             <code>ElicitIntent</code> and the <code>x-amz-slot-to-elicit</code> header is omitted.
 *         </p>
 *             </li>
 *          </ul>
 *          <p> In addition, Amazon Lex also returns your application-specific <code>sessionAttributes</code>.
 *       For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html">Managing Conversation Context</a>. </p>
 */
var PostContentCommand = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PostContentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PostContentCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    PostContentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(Object(_aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_3__["getSerdePlugin"])(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexRuntimeServiceClient";
        var commandName = "PostContentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: _models_models_0__WEBPACK_IMPORTED_MODULE_1__["PostContentRequest"].filterSensitiveLog,
            outputFilterSensitiveLog: _models_models_0__WEBPACK_IMPORTED_MODULE_1__["PostContentResponse"].filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PostContentCommand.prototype.serialize = function (input, context) {
        return Object(_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_2__["serializeAws_restJson1PostContentCommand"])(input, context);
    };
    PostContentCommand.prototype.deserialize = function (output, context) {
        return Object(_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_2__["deserializeAws_restJson1PostContentCommand"])(output, context);
    };
    return PostContentCommand;
}(_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_4__["Command"]));

//# sourceMappingURL=PostContentCommand.js.map

/***/ }),

/***/ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/commands/PostTextCommand.js":
/*!*******************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/client-lex-runtime-service/dist/es/commands/PostTextCommand.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: PostTextCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostTextCommand", function() { return PostTextCommand; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/@aws-sdk/client-lex-runtime-service/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_models_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/models_0 */ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/models/models_0.js");
/* harmony import */ var _protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../protocols/Aws_restJson1 */ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/protocols/Aws_restJson1.js");
/* harmony import */ var _aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-sdk/middleware-serde */ "../../node_modules/@aws-sdk/middleware-serde/dist/es/index.js");
/* harmony import */ var _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aws-sdk/smithy-client */ "../../node_modules/@aws-sdk/smithy-client/dist/es/index.js");





/**
 * <p>Sends user input to Amazon Lex. Client applications can use this API to send requests to
 *       Amazon Lex at runtime. Amazon Lex then interprets the user input using the machine learning model it
 *       built for the bot. </p>
 *          <p> In response, Amazon Lex returns the next <code>message</code> to convey to the user an
 *       optional <code>responseCard</code> to display. Consider the following example messages: </p>
 *          <ul>
 *             <li>
 *                <p> For a user input "I would like a pizza", Amazon Lex might return a response with a
 *           message eliciting slot data (for example, PizzaSize): "What size pizza would you like?"
 *         </p>
 *             </li>
 *             <li>
 *                <p> After the user provides all of the pizza order information, Amazon Lex might return a
 *           response with a message to obtain user confirmation "Proceed with the pizza order?".
 *         </p>
 *             </li>
 *             <li>
 *                <p> After the user replies to a confirmation prompt with a "yes", Amazon Lex might return
 *           a conclusion statement: "Thank you, your cheese pizza has been ordered.". </p>
 *             </li>
 *          </ul>
 *
 *          <p> Not all Amazon Lex messages require a user response. For example, a conclusion statement
 *       does not require a response. Some messages require only a "yes" or "no" user response. In
 *       addition to the <code>message</code>, Amazon Lex provides additional context about the message
 *       in the response that you might use to enhance client behavior, for example, to display the
 *       appropriate client user interface. These are the <code>slotToElicit</code>,
 *         <code>dialogState</code>, <code>intentName</code>, and <code>slots</code> fields in the
 *       response. Consider the following examples: </p>
 *
 *          <ul>
 *             <li>
 *                <p>If the message is to elicit slot data, Amazon Lex returns the following context
 *           information:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>dialogState</code> set to ElicitSlot </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>intentName</code> set to the intent name in the current context </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>slotToElicit</code> set to the slot name for which the <code>message</code> is
 *               eliciting information </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>slots</code> set to a map of slots, configured for the intent, with currently
 *               known values </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p> If the message is a confirmation prompt, the <code>dialogState</code> is set to
 *           ConfirmIntent and <code>SlotToElicit</code> is set to null. </p>
 *             </li>
 *             <li>
 *                <p>If the message is a clarification prompt (configured for the intent) that indicates
 *           that user intent is not understood, the <code>dialogState</code> is set to ElicitIntent
 *           and <code>slotToElicit</code> is set to null. </p>
 *             </li>
 *          </ul>
 *
 *          <p> In addition, Amazon Lex also returns your application-specific
 *         <code>sessionAttributes</code>. For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html">Managing Conversation Context</a>. </p>
 */
var PostTextCommand = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PostTextCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PostTextCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    PostTextCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(Object(_aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_3__["getSerdePlugin"])(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexRuntimeServiceClient";
        var commandName = "PostTextCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: _models_models_0__WEBPACK_IMPORTED_MODULE_1__["PostTextRequest"].filterSensitiveLog,
            outputFilterSensitiveLog: _models_models_0__WEBPACK_IMPORTED_MODULE_1__["PostTextResponse"].filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PostTextCommand.prototype.serialize = function (input, context) {
        return Object(_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_2__["serializeAws_restJson1PostTextCommand"])(input, context);
    };
    PostTextCommand.prototype.deserialize = function (output, context) {
        return Object(_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_2__["deserializeAws_restJson1PostTextCommand"])(output, context);
    };
    return PostTextCommand;
}(_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_4__["Command"]));

//# sourceMappingURL=PostTextCommand.js.map

/***/ }),

/***/ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/commands/PutSessionCommand.js":
/*!*********************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/client-lex-runtime-service/dist/es/commands/PutSessionCommand.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: PutSessionCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PutSessionCommand", function() { return PutSessionCommand; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/@aws-sdk/client-lex-runtime-service/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_models_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/models_0 */ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/models/models_0.js");
/* harmony import */ var _protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../protocols/Aws_restJson1 */ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/protocols/Aws_restJson1.js");
/* harmony import */ var _aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-sdk/middleware-serde */ "../../node_modules/@aws-sdk/middleware-serde/dist/es/index.js");
/* harmony import */ var _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aws-sdk/smithy-client */ "../../node_modules/@aws-sdk/smithy-client/dist/es/index.js");





/**
 * <p>Creates a new session or modifies an existing session with an Amazon Lex bot. Use this
 *       operation to enable your application to set the state of the bot.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/how-session-api.html">Managing Sessions</a>.</p>
 */
var PutSessionCommand = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PutSessionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutSessionCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    PutSessionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(Object(_aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_3__["getSerdePlugin"])(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexRuntimeServiceClient";
        var commandName = "PutSessionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: _models_models_0__WEBPACK_IMPORTED_MODULE_1__["PutSessionRequest"].filterSensitiveLog,
            outputFilterSensitiveLog: _models_models_0__WEBPACK_IMPORTED_MODULE_1__["PutSessionResponse"].filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutSessionCommand.prototype.serialize = function (input, context) {
        return Object(_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_2__["serializeAws_restJson1PutSessionCommand"])(input, context);
    };
    PutSessionCommand.prototype.deserialize = function (output, context) {
        return Object(_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_2__["deserializeAws_restJson1PutSessionCommand"])(output, context);
    };
    return PutSessionCommand;
}(_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_4__["Command"]));

//# sourceMappingURL=PutSessionCommand.js.map

/***/ }),

/***/ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/endpoints.js":
/*!****************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/client-lex-runtime-service/dist/es/endpoints.js ***!
  \****************************************************************************************************************/
/*! exports provided: defaultRegionInfoProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRegionInfoProvider", function() { return defaultRegionInfoProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/@aws-sdk/client-lex-runtime-service/node_modules/tslib/tslib.es6.js");

// Partition default templates
var AWS_TEMPLATE = "runtime.lex.{region}.amazonaws.com";
var AWS_CN_TEMPLATE = "runtime.lex.{region}.amazonaws.com.cn";
var AWS_ISO_TEMPLATE = "runtime.lex.{region}.c2s.ic.gov";
var AWS_ISO_B_TEMPLATE = "runtime.lex.{region}.sc2s.sgov.gov";
var AWS_US_GOV_TEMPLATE = "runtime.lex.{region}.amazonaws.com";
// Partition regions
var AWS_REGIONS = new Set([
    "af-south-1",
    "ap-east-1",
    "ap-northeast-1",
    "ap-northeast-2",
    "ap-south-1",
    "ap-southeast-1",
    "ap-southeast-2",
    "ca-central-1",
    "eu-central-1",
    "eu-north-1",
    "eu-south-1",
    "eu-west-1",
    "eu-west-2",
    "eu-west-3",
    "me-south-1",
    "sa-east-1",
    "us-east-1",
    "us-east-2",
    "us-west-1",
    "us-west-2",
]);
var AWS_CN_REGIONS = new Set(["cn-north-1", "cn-northwest-1"]);
var AWS_ISO_REGIONS = new Set(["us-iso-east-1"]);
var AWS_ISO_B_REGIONS = new Set(["us-isob-east-1"]);
var AWS_US_GOV_REGIONS = new Set(["us-gov-east-1", "us-gov-west-1"]);
var defaultRegionInfoProvider = function (region, options) {
    var regionInfo = undefined;
    switch (region) {
        // First, try to match exact region names.
        case "ap-northeast-1":
            regionInfo = {
                hostname: "runtime.lex.ap-northeast-1.amazonaws.com",
                partition: "aws",
                signingService: "lex",
            };
            break;
        case "ap-southeast-1":
            regionInfo = {
                hostname: "runtime.lex.ap-southeast-1.amazonaws.com",
                partition: "aws",
                signingService: "lex",
            };
            break;
        case "ap-southeast-2":
            regionInfo = {
                hostname: "runtime.lex.ap-southeast-2.amazonaws.com",
                partition: "aws",
                signingService: "lex",
            };
            break;
        case "eu-central-1":
            regionInfo = {
                hostname: "runtime.lex.eu-central-1.amazonaws.com",
                partition: "aws",
                signingService: "lex",
            };
            break;
        case "eu-west-1":
            regionInfo = {
                hostname: "runtime.lex.eu-west-1.amazonaws.com",
                partition: "aws",
                signingService: "lex",
            };
            break;
        case "eu-west-2":
            regionInfo = {
                hostname: "runtime.lex.eu-west-2.amazonaws.com",
                partition: "aws",
                signingService: "lex",
            };
            break;
        case "us-east-1":
            regionInfo = {
                hostname: "runtime.lex.us-east-1.amazonaws.com",
                partition: "aws",
                signingService: "lex",
            };
            break;
        case "us-west-2":
            regionInfo = {
                hostname: "runtime.lex.us-west-2.amazonaws.com",
                partition: "aws",
                signingService: "lex",
            };
            break;
        // Next, try to match partition endpoints.
        default:
            if (AWS_REGIONS.has(region)) {
                regionInfo = {
                    hostname: AWS_TEMPLATE.replace("{region}", region),
                    partition: "aws",
                    signingService: "lex",
                };
            }
            if (AWS_CN_REGIONS.has(region)) {
                regionInfo = {
                    hostname: AWS_CN_TEMPLATE.replace("{region}", region),
                    partition: "aws-cn",
                };
            }
            if (AWS_ISO_REGIONS.has(region)) {
                regionInfo = {
                    hostname: AWS_ISO_TEMPLATE.replace("{region}", region),
                    partition: "aws-iso",
                };
            }
            if (AWS_ISO_B_REGIONS.has(region)) {
                regionInfo = {
                    hostname: AWS_ISO_B_TEMPLATE.replace("{region}", region),
                    partition: "aws-iso-b",
                };
            }
            if (AWS_US_GOV_REGIONS.has(region)) {
                regionInfo = {
                    hostname: AWS_US_GOV_TEMPLATE.replace("{region}", region),
                    partition: "aws-us-gov",
                };
            }
            // Finally, assume it's an AWS partition endpoint.
            if (regionInfo === undefined) {
                regionInfo = {
                    hostname: AWS_TEMPLATE.replace("{region}", region),
                    partition: "aws",
                    signingService: "lex",
                };
            }
    }
    return Promise.resolve(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ signingService: "lex" }, regionInfo));
};
//# sourceMappingURL=endpoints.js.map

/***/ }),

/***/ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/index.js":
/*!************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/client-lex-runtime-service/dist/es/index.js ***!
  \************************************************************************************************************/
/*! exports provided: LexRuntimeServiceClient, LexRuntimeService, DeleteSessionCommand, GetSessionCommand, PostContentCommand, PostTextCommand, PutSessionCommand, ActiveContextTimeToLive, ActiveContext, BadRequestException, ConflictException, DeleteSessionRequest, DeleteSessionResponse, InternalFailureException, LimitExceededException, NotFoundException, GetSessionRequest, FulfillmentState, MessageFormatType, DialogActionType, DialogAction, ConfirmationStatus, IntentSummary, GetSessionResponse, BadGatewayException, DependencyFailedException, LoopDetectedException, NotAcceptableException, PostContentRequest, DialogState, PostContentResponse, RequestTimeoutException, UnsupportedMediaTypeException, PostTextRequest, IntentConfidence, PredictedIntent, ContentType, Button, GenericAttachment, ResponseCard, SentimentResponse, PostTextResponse, PutSessionRequest, PutSessionResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LexRuntimeServiceClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LexRuntimeServiceClient */ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/LexRuntimeServiceClient.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LexRuntimeServiceClient", function() { return _LexRuntimeServiceClient__WEBPACK_IMPORTED_MODULE_0__["LexRuntimeServiceClient"]; });

/* harmony import */ var _LexRuntimeService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LexRuntimeService */ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/LexRuntimeService.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LexRuntimeService", function() { return _LexRuntimeService__WEBPACK_IMPORTED_MODULE_1__["LexRuntimeService"]; });

/* harmony import */ var _commands_DeleteSessionCommand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commands/DeleteSessionCommand */ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/commands/DeleteSessionCommand.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteSessionCommand", function() { return _commands_DeleteSessionCommand__WEBPACK_IMPORTED_MODULE_2__["DeleteSessionCommand"]; });

/* harmony import */ var _commands_GetSessionCommand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commands/GetSessionCommand */ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/commands/GetSessionCommand.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetSessionCommand", function() { return _commands_GetSessionCommand__WEBPACK_IMPORTED_MODULE_3__["GetSessionCommand"]; });

/* harmony import */ var _commands_PostContentCommand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./commands/PostContentCommand */ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/commands/PostContentCommand.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostContentCommand", function() { return _commands_PostContentCommand__WEBPACK_IMPORTED_MODULE_4__["PostContentCommand"]; });

/* harmony import */ var _commands_PostTextCommand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./commands/PostTextCommand */ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/commands/PostTextCommand.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostTextCommand", function() { return _commands_PostTextCommand__WEBPACK_IMPORTED_MODULE_5__["PostTextCommand"]; });

/* harmony import */ var _commands_PutSessionCommand__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./commands/PutSessionCommand */ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/commands/PutSessionCommand.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PutSessionCommand", function() { return _commands_PutSessionCommand__WEBPACK_IMPORTED_MODULE_6__["PutSessionCommand"]; });

/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/index */ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/models/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActiveContextTimeToLive", function() { return _models_index__WEBPACK_IMPORTED_MODULE_7__["ActiveContextTimeToLive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActiveContext", function() { return _models_index__WEBPACK_IMPORTED_MODULE_7__["ActiveContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BadRequestException", function() { return _models_index__WEBPACK_IMPORTED_MODULE_7__["BadRequestException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConflictException", function() { return _models_index__WEBPACK_IMPORTED_MODULE_7__["ConflictException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteSessionRequest", function() { return _models_index__WEBPACK_IMPORTED_MODULE_7__["DeleteSessionRequest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteSessionResponse", function() { return _models_index__WEBPACK_IMPORTED_MODULE_7__["DeleteSessionResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InternalFailureException", function() { return _models_index__WEBPACK_IMPORTED_MODULE_7__["InternalFailureException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LimitExceededException", function() { return _models_index__WEBPACK_IMPORTED_MODULE_7__["LimitExceededException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotFoundException", function() { return _models_index__WEBPACK_IMPORTED_MODULE_7__["NotFoundException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetSessionRequest", function() { return _models_index__WEBPACK_IMPORTED_MODULE_7__["GetSessionRequest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FulfillmentState", function() { return _models_index__WEBPACK_IMPORTED_MODULE_7__["FulfillmentState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageFormatType", function() { return _models_index__WEBPACK_IMPORTED_MODULE_7__["MessageFormatType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogActionType", function() { return _models_index__WEBPACK_IMPORTED_MODULE_7__["DialogActionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogAction", function() { return _models_index__WEBPACK_IMPORTED_MODULE_7__["DialogAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfirmationStatus", function() { return _models_index__WEBPACK_IMPORTED_MODULE_7__["ConfirmationStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntentSummary", function() { return _models_index__WEBPACK_IMPORTED_MODULE_7__["IntentSummary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetSessionResponse", function() { return _models_index__WEBPACK_IMPORTED_MODULE_7__["GetSessionResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BadGatewayException", function() { return _models_index__WEBPACK_IMPORTED_MODULE_7__["BadGatewayException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DependencyFailedException", function() { return _models_index__WEBPACK_IMPORTED_MODULE_7__["DependencyFailedException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoopDetectedException", function() { return _models_index__WEBPACK_IMPORTED_MODULE_7__["LoopDetectedException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotAcceptableException", function() { return _models_index__WEBPACK_IMPORTED_MODULE_7__["NotAcceptableException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostContentRequest", function() { return _models_index__WEBPACK_IMPORTED_MODULE_7__["PostContentRequest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogState", function() { return _models_index__WEBPACK_IMPORTED_MODULE_7__["DialogState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostContentResponse", function() { return _models_index__WEBPACK_IMPORTED_MODULE_7__["PostContentResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequestTimeoutException", function() { return _models_index__WEBPACK_IMPORTED_MODULE_7__["RequestTimeoutException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnsupportedMediaTypeException", function() { return _models_index__WEBPACK_IMPORTED_MODULE_7__["UnsupportedMediaTypeException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostTextRequest", function() { return _models_index__WEBPACK_IMPORTED_MODULE_7__["PostTextRequest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntentConfidence", function() { return _models_index__WEBPACK_IMPORTED_MODULE_7__["IntentConfidence"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PredictedIntent", function() { return _models_index__WEBPACK_IMPORTED_MODULE_7__["PredictedIntent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentType", function() { return _models_index__WEBPACK_IMPORTED_MODULE_7__["ContentType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _models_index__WEBPACK_IMPORTED_MODULE_7__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GenericAttachment", function() { return _models_index__WEBPACK_IMPORTED_MODULE_7__["GenericAttachment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponseCard", function() { return _models_index__WEBPACK_IMPORTED_MODULE_7__["ResponseCard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SentimentResponse", function() { return _models_index__WEBPACK_IMPORTED_MODULE_7__["SentimentResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostTextResponse", function() { return _models_index__WEBPACK_IMPORTED_MODULE_7__["PostTextResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PutSessionRequest", function() { return _models_index__WEBPACK_IMPORTED_MODULE_7__["PutSessionRequest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PutSessionResponse", function() { return _models_index__WEBPACK_IMPORTED_MODULE_7__["PutSessionResponse"]; });









//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/models/index.js":
/*!*******************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/client-lex-runtime-service/dist/es/models/index.js ***!
  \*******************************************************************************************************************/
/*! exports provided: ActiveContextTimeToLive, ActiveContext, BadRequestException, ConflictException, DeleteSessionRequest, DeleteSessionResponse, InternalFailureException, LimitExceededException, NotFoundException, GetSessionRequest, FulfillmentState, MessageFormatType, DialogActionType, DialogAction, ConfirmationStatus, IntentSummary, GetSessionResponse, BadGatewayException, DependencyFailedException, LoopDetectedException, NotAcceptableException, PostContentRequest, DialogState, PostContentResponse, RequestTimeoutException, UnsupportedMediaTypeException, PostTextRequest, IntentConfidence, PredictedIntent, ContentType, Button, GenericAttachment, ResponseCard, SentimentResponse, PostTextResponse, PutSessionRequest, PutSessionResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models_0 */ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/models/models_0.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActiveContextTimeToLive", function() { return _models_0__WEBPACK_IMPORTED_MODULE_0__["ActiveContextTimeToLive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActiveContext", function() { return _models_0__WEBPACK_IMPORTED_MODULE_0__["ActiveContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BadRequestException", function() { return _models_0__WEBPACK_IMPORTED_MODULE_0__["BadRequestException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConflictException", function() { return _models_0__WEBPACK_IMPORTED_MODULE_0__["ConflictException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteSessionRequest", function() { return _models_0__WEBPACK_IMPORTED_MODULE_0__["DeleteSessionRequest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteSessionResponse", function() { return _models_0__WEBPACK_IMPORTED_MODULE_0__["DeleteSessionResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InternalFailureException", function() { return _models_0__WEBPACK_IMPORTED_MODULE_0__["InternalFailureException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LimitExceededException", function() { return _models_0__WEBPACK_IMPORTED_MODULE_0__["LimitExceededException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotFoundException", function() { return _models_0__WEBPACK_IMPORTED_MODULE_0__["NotFoundException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetSessionRequest", function() { return _models_0__WEBPACK_IMPORTED_MODULE_0__["GetSessionRequest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FulfillmentState", function() { return _models_0__WEBPACK_IMPORTED_MODULE_0__["FulfillmentState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageFormatType", function() { return _models_0__WEBPACK_IMPORTED_MODULE_0__["MessageFormatType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogActionType", function() { return _models_0__WEBPACK_IMPORTED_MODULE_0__["DialogActionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogAction", function() { return _models_0__WEBPACK_IMPORTED_MODULE_0__["DialogAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfirmationStatus", function() { return _models_0__WEBPACK_IMPORTED_MODULE_0__["ConfirmationStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntentSummary", function() { return _models_0__WEBPACK_IMPORTED_MODULE_0__["IntentSummary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetSessionResponse", function() { return _models_0__WEBPACK_IMPORTED_MODULE_0__["GetSessionResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BadGatewayException", function() { return _models_0__WEBPACK_IMPORTED_MODULE_0__["BadGatewayException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DependencyFailedException", function() { return _models_0__WEBPACK_IMPORTED_MODULE_0__["DependencyFailedException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoopDetectedException", function() { return _models_0__WEBPACK_IMPORTED_MODULE_0__["LoopDetectedException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotAcceptableException", function() { return _models_0__WEBPACK_IMPORTED_MODULE_0__["NotAcceptableException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostContentRequest", function() { return _models_0__WEBPACK_IMPORTED_MODULE_0__["PostContentRequest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogState", function() { return _models_0__WEBPACK_IMPORTED_MODULE_0__["DialogState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostContentResponse", function() { return _models_0__WEBPACK_IMPORTED_MODULE_0__["PostContentResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequestTimeoutException", function() { return _models_0__WEBPACK_IMPORTED_MODULE_0__["RequestTimeoutException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnsupportedMediaTypeException", function() { return _models_0__WEBPACK_IMPORTED_MODULE_0__["UnsupportedMediaTypeException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostTextRequest", function() { return _models_0__WEBPACK_IMPORTED_MODULE_0__["PostTextRequest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntentConfidence", function() { return _models_0__WEBPACK_IMPORTED_MODULE_0__["IntentConfidence"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PredictedIntent", function() { return _models_0__WEBPACK_IMPORTED_MODULE_0__["PredictedIntent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentType", function() { return _models_0__WEBPACK_IMPORTED_MODULE_0__["ContentType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _models_0__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GenericAttachment", function() { return _models_0__WEBPACK_IMPORTED_MODULE_0__["GenericAttachment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponseCard", function() { return _models_0__WEBPACK_IMPORTED_MODULE_0__["ResponseCard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SentimentResponse", function() { return _models_0__WEBPACK_IMPORTED_MODULE_0__["SentimentResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostTextResponse", function() { return _models_0__WEBPACK_IMPORTED_MODULE_0__["PostTextResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PutSessionRequest", function() { return _models_0__WEBPACK_IMPORTED_MODULE_0__["PutSessionRequest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PutSessionResponse", function() { return _models_0__WEBPACK_IMPORTED_MODULE_0__["PutSessionResponse"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/models/models_0.js":
/*!**********************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/client-lex-runtime-service/dist/es/models/models_0.js ***!
  \**********************************************************************************************************************/
/*! exports provided: ActiveContextTimeToLive, ActiveContext, BadRequestException, ConflictException, DeleteSessionRequest, DeleteSessionResponse, InternalFailureException, LimitExceededException, NotFoundException, GetSessionRequest, FulfillmentState, MessageFormatType, DialogActionType, DialogAction, ConfirmationStatus, IntentSummary, GetSessionResponse, BadGatewayException, DependencyFailedException, LoopDetectedException, NotAcceptableException, PostContentRequest, DialogState, PostContentResponse, RequestTimeoutException, UnsupportedMediaTypeException, PostTextRequest, IntentConfidence, PredictedIntent, ContentType, Button, GenericAttachment, ResponseCard, SentimentResponse, PostTextResponse, PutSessionRequest, PutSessionResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveContextTimeToLive", function() { return ActiveContextTimeToLive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveContext", function() { return ActiveContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadRequestException", function() { return BadRequestException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConflictException", function() { return ConflictException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteSessionRequest", function() { return DeleteSessionRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteSessionResponse", function() { return DeleteSessionResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalFailureException", function() { return InternalFailureException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimitExceededException", function() { return LimitExceededException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundException", function() { return NotFoundException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSessionRequest", function() { return GetSessionRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FulfillmentState", function() { return FulfillmentState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageFormatType", function() { return MessageFormatType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogActionType", function() { return DialogActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogAction", function() { return DialogAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationStatus", function() { return ConfirmationStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntentSummary", function() { return IntentSummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSessionResponse", function() { return GetSessionResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadGatewayException", function() { return BadGatewayException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DependencyFailedException", function() { return DependencyFailedException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoopDetectedException", function() { return LoopDetectedException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAcceptableException", function() { return NotAcceptableException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostContentRequest", function() { return PostContentRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogState", function() { return DialogState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostContentResponse", function() { return PostContentResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestTimeoutException", function() { return RequestTimeoutException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsupportedMediaTypeException", function() { return UnsupportedMediaTypeException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostTextRequest", function() { return PostTextRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntentConfidence", function() { return IntentConfidence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictedIntent", function() { return PredictedIntent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentType", function() { return ContentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericAttachment", function() { return GenericAttachment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseCard", function() { return ResponseCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentimentResponse", function() { return SentimentResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostTextResponse", function() { return PostTextResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PutSessionRequest", function() { return PutSessionRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PutSessionResponse", function() { return PutSessionResponse; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/@aws-sdk/client-lex-runtime-service/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/smithy-client */ "../../node_modules/@aws-sdk/smithy-client/dist/es/index.js");


var ActiveContextTimeToLive;
(function (ActiveContextTimeToLive) {
    ActiveContextTimeToLive.filterSensitiveLog = function (obj) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, obj)); };
})(ActiveContextTimeToLive || (ActiveContextTimeToLive = {}));
var ActiveContext;
(function (ActiveContext) {
    ActiveContext.filterSensitiveLog = function (obj) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, obj), (obj.parameters && { parameters: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__["SENSITIVE_STRING"] }))); };
})(ActiveContext || (ActiveContext = {}));
var BadRequestException;
(function (BadRequestException) {
    BadRequestException.filterSensitiveLog = function (obj) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, obj)); };
})(BadRequestException || (BadRequestException = {}));
var ConflictException;
(function (ConflictException) {
    ConflictException.filterSensitiveLog = function (obj) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, obj)); };
})(ConflictException || (ConflictException = {}));
var DeleteSessionRequest;
(function (DeleteSessionRequest) {
    DeleteSessionRequest.filterSensitiveLog = function (obj) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, obj)); };
})(DeleteSessionRequest || (DeleteSessionRequest = {}));
var DeleteSessionResponse;
(function (DeleteSessionResponse) {
    DeleteSessionResponse.filterSensitiveLog = function (obj) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, obj)); };
})(DeleteSessionResponse || (DeleteSessionResponse = {}));
var InternalFailureException;
(function (InternalFailureException) {
    InternalFailureException.filterSensitiveLog = function (obj) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, obj)); };
})(InternalFailureException || (InternalFailureException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    LimitExceededException.filterSensitiveLog = function (obj) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, obj)); };
})(LimitExceededException || (LimitExceededException = {}));
var NotFoundException;
(function (NotFoundException) {
    NotFoundException.filterSensitiveLog = function (obj) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, obj)); };
})(NotFoundException || (NotFoundException = {}));
var GetSessionRequest;
(function (GetSessionRequest) {
    GetSessionRequest.filterSensitiveLog = function (obj) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, obj)); };
})(GetSessionRequest || (GetSessionRequest = {}));
var FulfillmentState;
(function (FulfillmentState) {
    FulfillmentState["FAILED"] = "Failed";
    FulfillmentState["FULFILLED"] = "Fulfilled";
    FulfillmentState["READY_FOR_FULFILLMENT"] = "ReadyForFulfillment";
})(FulfillmentState || (FulfillmentState = {}));
var MessageFormatType;
(function (MessageFormatType) {
    MessageFormatType["COMPOSITE"] = "Composite";
    MessageFormatType["CUSTOM_PAYLOAD"] = "CustomPayload";
    MessageFormatType["PLAIN_TEXT"] = "PlainText";
    MessageFormatType["SSML"] = "SSML";
})(MessageFormatType || (MessageFormatType = {}));
var DialogActionType;
(function (DialogActionType) {
    DialogActionType["CLOSE"] = "Close";
    DialogActionType["CONFIRM_INTENT"] = "ConfirmIntent";
    DialogActionType["DELEGATE"] = "Delegate";
    DialogActionType["ELICIT_INTENT"] = "ElicitIntent";
    DialogActionType["ELICIT_SLOT"] = "ElicitSlot";
})(DialogActionType || (DialogActionType = {}));
var DialogAction;
(function (DialogAction) {
    DialogAction.filterSensitiveLog = function (obj) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, obj), (obj.slots && { slots: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__["SENSITIVE_STRING"] })), (obj.message && { message: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__["SENSITIVE_STRING"] }))); };
})(DialogAction || (DialogAction = {}));
var ConfirmationStatus;
(function (ConfirmationStatus) {
    ConfirmationStatus["CONFIRMED"] = "Confirmed";
    ConfirmationStatus["DENIED"] = "Denied";
    ConfirmationStatus["NONE"] = "None";
})(ConfirmationStatus || (ConfirmationStatus = {}));
var IntentSummary;
(function (IntentSummary) {
    IntentSummary.filterSensitiveLog = function (obj) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, obj), (obj.slots && { slots: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__["SENSITIVE_STRING"] }))); };
})(IntentSummary || (IntentSummary = {}));
var GetSessionResponse;
(function (GetSessionResponse) {
    GetSessionResponse.filterSensitiveLog = function (obj) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, obj), (obj.recentIntentSummaryView && {
        recentIntentSummaryView: obj.recentIntentSummaryView.map(function (item) { return IntentSummary.filterSensitiveLog(item); }),
    })), (obj.sessionAttributes && { sessionAttributes: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__["SENSITIVE_STRING"] })), (obj.dialogAction && { dialogAction: DialogAction.filterSensitiveLog(obj.dialogAction) })), (obj.activeContexts && { activeContexts: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__["SENSITIVE_STRING"] }))); };
})(GetSessionResponse || (GetSessionResponse = {}));
var BadGatewayException;
(function (BadGatewayException) {
    BadGatewayException.filterSensitiveLog = function (obj) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, obj)); };
})(BadGatewayException || (BadGatewayException = {}));
var DependencyFailedException;
(function (DependencyFailedException) {
    DependencyFailedException.filterSensitiveLog = function (obj) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, obj)); };
})(DependencyFailedException || (DependencyFailedException = {}));
var LoopDetectedException;
(function (LoopDetectedException) {
    LoopDetectedException.filterSensitiveLog = function (obj) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, obj)); };
})(LoopDetectedException || (LoopDetectedException = {}));
var NotAcceptableException;
(function (NotAcceptableException) {
    NotAcceptableException.filterSensitiveLog = function (obj) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, obj)); };
})(NotAcceptableException || (NotAcceptableException = {}));
var PostContentRequest;
(function (PostContentRequest) {
    PostContentRequest.filterSensitiveLog = function (obj) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, obj), (obj.sessionAttributes && { sessionAttributes: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__["SENSITIVE_STRING"] })), (obj.requestAttributes && { requestAttributes: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__["SENSITIVE_STRING"] })), (obj.activeContexts && { activeContexts: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__["SENSITIVE_STRING"] }))); };
})(PostContentRequest || (PostContentRequest = {}));
var DialogState;
(function (DialogState) {
    DialogState["CONFIRM_INTENT"] = "ConfirmIntent";
    DialogState["ELICIT_INTENT"] = "ElicitIntent";
    DialogState["ELICIT_SLOT"] = "ElicitSlot";
    DialogState["FAILED"] = "Failed";
    DialogState["FULFILLED"] = "Fulfilled";
    DialogState["READY_FOR_FULFILLMENT"] = "ReadyForFulfillment";
})(DialogState || (DialogState = {}));
var PostContentResponse;
(function (PostContentResponse) {
    PostContentResponse.filterSensitiveLog = function (obj) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, obj), (obj.message && { message: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__["SENSITIVE_STRING"] })), (obj.activeContexts && { activeContexts: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__["SENSITIVE_STRING"] }))); };
})(PostContentResponse || (PostContentResponse = {}));
var RequestTimeoutException;
(function (RequestTimeoutException) {
    RequestTimeoutException.filterSensitiveLog = function (obj) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, obj)); };
})(RequestTimeoutException || (RequestTimeoutException = {}));
var UnsupportedMediaTypeException;
(function (UnsupportedMediaTypeException) {
    UnsupportedMediaTypeException.filterSensitiveLog = function (obj) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, obj)); };
})(UnsupportedMediaTypeException || (UnsupportedMediaTypeException = {}));
var PostTextRequest;
(function (PostTextRequest) {
    PostTextRequest.filterSensitiveLog = function (obj) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, obj), (obj.sessionAttributes && { sessionAttributes: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__["SENSITIVE_STRING"] })), (obj.requestAttributes && { requestAttributes: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__["SENSITIVE_STRING"] })), (obj.inputText && { inputText: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__["SENSITIVE_STRING"] })), (obj.activeContexts && { activeContexts: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__["SENSITIVE_STRING"] }))); };
})(PostTextRequest || (PostTextRequest = {}));
var IntentConfidence;
(function (IntentConfidence) {
    IntentConfidence.filterSensitiveLog = function (obj) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, obj)); };
})(IntentConfidence || (IntentConfidence = {}));
var PredictedIntent;
(function (PredictedIntent) {
    PredictedIntent.filterSensitiveLog = function (obj) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, obj), (obj.slots && { slots: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__["SENSITIVE_STRING"] }))); };
})(PredictedIntent || (PredictedIntent = {}));
var ContentType;
(function (ContentType) {
    ContentType["GENERIC"] = "application/vnd.amazonaws.card.generic";
})(ContentType || (ContentType = {}));
var Button;
(function (Button) {
    Button.filterSensitiveLog = function (obj) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, obj)); };
})(Button || (Button = {}));
var GenericAttachment;
(function (GenericAttachment) {
    GenericAttachment.filterSensitiveLog = function (obj) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, obj)); };
})(GenericAttachment || (GenericAttachment = {}));
var ResponseCard;
(function (ResponseCard) {
    ResponseCard.filterSensitiveLog = function (obj) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, obj)); };
})(ResponseCard || (ResponseCard = {}));
var SentimentResponse;
(function (SentimentResponse) {
    SentimentResponse.filterSensitiveLog = function (obj) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, obj)); };
})(SentimentResponse || (SentimentResponse = {}));
var PostTextResponse;
(function (PostTextResponse) {
    PostTextResponse.filterSensitiveLog = function (obj) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, obj), (obj.alternativeIntents && {
        alternativeIntents: obj.alternativeIntents.map(function (item) { return PredictedIntent.filterSensitiveLog(item); }),
    })), (obj.slots && { slots: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__["SENSITIVE_STRING"] })), (obj.sessionAttributes && { sessionAttributes: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__["SENSITIVE_STRING"] })), (obj.message && { message: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__["SENSITIVE_STRING"] })), (obj.activeContexts && { activeContexts: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__["SENSITIVE_STRING"] }))); };
})(PostTextResponse || (PostTextResponse = {}));
var PutSessionRequest;
(function (PutSessionRequest) {
    PutSessionRequest.filterSensitiveLog = function (obj) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, obj), (obj.sessionAttributes && { sessionAttributes: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__["SENSITIVE_STRING"] })), (obj.dialogAction && { dialogAction: DialogAction.filterSensitiveLog(obj.dialogAction) })), (obj.recentIntentSummaryView && {
        recentIntentSummaryView: obj.recentIntentSummaryView.map(function (item) { return IntentSummary.filterSensitiveLog(item); }),
    })), (obj.activeContexts && { activeContexts: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__["SENSITIVE_STRING"] }))); };
})(PutSessionRequest || (PutSessionRequest = {}));
var PutSessionResponse;
(function (PutSessionResponse) {
    PutSessionResponse.filterSensitiveLog = function (obj) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, obj), (obj.message && { message: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__["SENSITIVE_STRING"] })), (obj.activeContexts && { activeContexts: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__["SENSITIVE_STRING"] }))); };
})(PutSessionResponse || (PutSessionResponse = {}));
//# sourceMappingURL=models_0.js.map

/***/ }),

/***/ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/package.json":
/*!****************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/client-lex-runtime-service/dist/es/package.json ***!
  \****************************************************************************************************************/
/*! exports provided: name, description, version, scripts, main, types, module, browser, react-native, sideEffects, dependencies, devDependencies, engines, typesVersions, author, license, homepage, repository, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"@aws-sdk/client-lex-runtime-service\",\"description\":\"AWS SDK for JavaScript Lex Runtime Service Client for Node.js, Browser and React Native\",\"version\":\"3.6.1\",\"scripts\":{\"clean\":\"yarn remove-definitions && yarn remove-dist && yarn remove-documentation\",\"build-documentation\":\"yarn remove-documentation && typedoc ./\",\"prepublishOnly\":\"yarn build\",\"pretest\":\"yarn build:cjs\",\"remove-definitions\":\"rimraf ./types\",\"remove-dist\":\"rimraf ./dist\",\"remove-documentation\":\"rimraf ./docs\",\"test:unit\":\"mocha **/cjs/**/*.spec.js\",\"test\":\"yarn test:unit\",\"build:cjs\":\"tsc -p tsconfig.json\",\"build:es\":\"tsc -p tsconfig.es.json\",\"build\":\"yarn build:cjs && yarn build:es\",\"postbuild\":\"downlevel-dts types types/ts3.4\"},\"main\":\"./dist/cjs/index.js\",\"types\":\"./types/index.d.ts\",\"module\":\"./dist/es/index.js\",\"browser\":{\"./runtimeConfig\":\"./runtimeConfig.browser\"},\"react-native\":{\"./runtimeConfig\":\"./runtimeConfig.native\"},\"sideEffects\":false,\"dependencies\":{\"@aws-crypto/sha256-browser\":\"^1.0.0\",\"@aws-crypto/sha256-js\":\"^1.0.0\",\"@aws-sdk/config-resolver\":\"3.6.1\",\"@aws-sdk/credential-provider-node\":\"3.6.1\",\"@aws-sdk/fetch-http-handler\":\"3.6.1\",\"@aws-sdk/hash-node\":\"3.6.1\",\"@aws-sdk/invalid-dependency\":\"3.6.1\",\"@aws-sdk/middleware-content-length\":\"3.6.1\",\"@aws-sdk/middleware-host-header\":\"3.6.1\",\"@aws-sdk/middleware-logger\":\"3.6.1\",\"@aws-sdk/middleware-retry\":\"3.6.1\",\"@aws-sdk/middleware-serde\":\"3.6.1\",\"@aws-sdk/middleware-signing\":\"3.6.1\",\"@aws-sdk/middleware-stack\":\"3.6.1\",\"@aws-sdk/middleware-user-agent\":\"3.6.1\",\"@aws-sdk/node-config-provider\":\"3.6.1\",\"@aws-sdk/node-http-handler\":\"3.6.1\",\"@aws-sdk/protocol-http\":\"3.6.1\",\"@aws-sdk/smithy-client\":\"3.6.1\",\"@aws-sdk/types\":\"3.6.1\",\"@aws-sdk/url-parser\":\"3.6.1\",\"@aws-sdk/url-parser-native\":\"3.6.1\",\"@aws-sdk/util-base64-browser\":\"3.6.1\",\"@aws-sdk/util-base64-node\":\"3.6.1\",\"@aws-sdk/util-body-length-browser\":\"3.6.1\",\"@aws-sdk/util-body-length-node\":\"3.6.1\",\"@aws-sdk/util-user-agent-browser\":\"3.6.1\",\"@aws-sdk/util-user-agent-node\":\"3.6.1\",\"@aws-sdk/util-utf8-browser\":\"3.6.1\",\"@aws-sdk/util-utf8-node\":\"3.6.1\",\"tslib\":\"^2.0.0\"},\"devDependencies\":{\"@aws-sdk/client-documentation-generator\":\"3.6.1\",\"@types/chai\":\"^4.2.11\",\"@types/mocha\":\"^8.0.4\",\"@types/node\":\"^12.7.5\",\"downlevel-dts\":\"0.7.0\",\"jest\":\"^26.1.0\",\"rimraf\":\"^3.0.0\",\"typedoc\":\"^0.19.2\",\"typescript\":\"~4.1.2\"},\"engines\":{\"node\":\">=10.0.0\"},\"typesVersions\":{\"<4.0\":{\"types/*\":[\"types/ts3.4/*\"]}},\"author\":{\"name\":\"AWS SDK for JavaScript Team\",\"url\":\"https://aws.amazon.com/javascript/\"},\"license\":\"Apache-2.0\",\"homepage\":\"https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-lex-runtime-service\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/aws/aws-sdk-js-v3.git\",\"directory\":\"clients/client-lex-runtime-service\"}}");

/***/ }),

/***/ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/protocols/Aws_restJson1.js":
/*!******************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/client-lex-runtime-service/dist/es/protocols/Aws_restJson1.js ***!
  \******************************************************************************************************************************/
/*! exports provided: serializeAws_restJson1DeleteSessionCommand, serializeAws_restJson1GetSessionCommand, serializeAws_restJson1PostContentCommand, serializeAws_restJson1PostTextCommand, serializeAws_restJson1PutSessionCommand, deserializeAws_restJson1DeleteSessionCommand, deserializeAws_restJson1GetSessionCommand, deserializeAws_restJson1PostContentCommand, deserializeAws_restJson1PostTextCommand, deserializeAws_restJson1PutSessionCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeAws_restJson1DeleteSessionCommand", function() { return serializeAws_restJson1DeleteSessionCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeAws_restJson1GetSessionCommand", function() { return serializeAws_restJson1GetSessionCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeAws_restJson1PostContentCommand", function() { return serializeAws_restJson1PostContentCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeAws_restJson1PostTextCommand", function() { return serializeAws_restJson1PostTextCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeAws_restJson1PutSessionCommand", function() { return serializeAws_restJson1PutSessionCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserializeAws_restJson1DeleteSessionCommand", function() { return deserializeAws_restJson1DeleteSessionCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserializeAws_restJson1GetSessionCommand", function() { return deserializeAws_restJson1GetSessionCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserializeAws_restJson1PostContentCommand", function() { return deserializeAws_restJson1PostContentCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserializeAws_restJson1PostTextCommand", function() { return deserializeAws_restJson1PostTextCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserializeAws_restJson1PutSessionCommand", function() { return deserializeAws_restJson1PutSessionCommand; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/@aws-sdk/client-lex-runtime-service/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/protocol-http */ "../../node_modules/@aws-sdk/protocol-http/dist/es/index.js");
/* harmony import */ var _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/smithy-client */ "../../node_modules/@aws-sdk/smithy-client/dist/es/index.js");



var serializeAws_restJson1DeleteSessionCommand = function (input, context) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/bot/{botName}/alias/{botAlias}/user/{userId}/session";
                if (input.botName !== undefined) {
                    labelValue = input.botName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botName.");
                    }
                    resolvedPath = resolvedPath.replace("{botName}", Object(_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__["extendedEncodeURIComponent"])(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botName.");
                }
                if (input.botAlias !== undefined) {
                    labelValue = input.botAlias;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botAlias.");
                    }
                    resolvedPath = resolvedPath.replace("{botAlias}", Object(_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__["extendedEncodeURIComponent"])(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botAlias.");
                }
                if (input.userId !== undefined) {
                    labelValue = input.userId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: userId.");
                    }
                    resolvedPath = resolvedPath.replace("{userId}", Object(_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__["extendedEncodeURIComponent"])(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: userId.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
var serializeAws_restJson1GetSessionCommand = function (input, context) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/bot/{botName}/alias/{botAlias}/user/{userId}/session";
                if (input.botName !== undefined) {
                    labelValue = input.botName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botName.");
                    }
                    resolvedPath = resolvedPath.replace("{botName}", Object(_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__["extendedEncodeURIComponent"])(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botName.");
                }
                if (input.botAlias !== undefined) {
                    labelValue = input.botAlias;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botAlias.");
                    }
                    resolvedPath = resolvedPath.replace("{botAlias}", Object(_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__["extendedEncodeURIComponent"])(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botAlias.");
                }
                if (input.userId !== undefined) {
                    labelValue = input.userId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: userId.");
                    }
                    resolvedPath = resolvedPath.replace("{userId}", Object(_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__["extendedEncodeURIComponent"])(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: userId.");
                }
                query = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (input.checkpointLabelFilter !== undefined && { checkpointLabelFilter: input.checkpointLabelFilter }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
var serializeAws_restJson1PostContentCommand = function (input, context) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ "content-type": "application/octet-stream", "x-amz-content-sha256": "UNSIGNED-PAYLOAD" }, (isSerializableHeaderValue(input.sessionAttributes) && {
                    "x-amz-lex-session-attributes": Buffer.from(_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__["LazyJsonString"].fromObject(input.sessionAttributes)).toString("base64"),
                })), (isSerializableHeaderValue(input.requestAttributes) && {
                    "x-amz-lex-request-attributes": Buffer.from(_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__["LazyJsonString"].fromObject(input.requestAttributes)).toString("base64"),
                })), (isSerializableHeaderValue(input.contentType) && { "content-type": input.contentType })), (isSerializableHeaderValue(input.accept) && { accept: input.accept })), (isSerializableHeaderValue(input.activeContexts) && {
                    "x-amz-lex-active-contexts": Buffer.from(_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__["LazyJsonString"].fromObject(input.activeContexts)).toString("base64"),
                }));
                resolvedPath = "/bot/{botName}/alias/{botAlias}/user/{userId}/content";
                if (input.botName !== undefined) {
                    labelValue = input.botName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botName.");
                    }
                    resolvedPath = resolvedPath.replace("{botName}", Object(_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__["extendedEncodeURIComponent"])(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botName.");
                }
                if (input.botAlias !== undefined) {
                    labelValue = input.botAlias;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botAlias.");
                    }
                    resolvedPath = resolvedPath.replace("{botAlias}", Object(_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__["extendedEncodeURIComponent"])(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botAlias.");
                }
                if (input.userId !== undefined) {
                    labelValue = input.userId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: userId.");
                    }
                    resolvedPath = resolvedPath.replace("{userId}", Object(_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__["extendedEncodeURIComponent"])(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: userId.");
                }
                if (input.inputStream !== undefined) {
                    body = input.inputStream;
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
var serializeAws_restJson1PostTextCommand = function (input, context) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/bot/{botName}/alias/{botAlias}/user/{userId}/text";
                if (input.botName !== undefined) {
                    labelValue = input.botName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botName.");
                    }
                    resolvedPath = resolvedPath.replace("{botName}", Object(_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__["extendedEncodeURIComponent"])(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botName.");
                }
                if (input.botAlias !== undefined) {
                    labelValue = input.botAlias;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botAlias.");
                    }
                    resolvedPath = resolvedPath.replace("{botAlias}", Object(_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__["extendedEncodeURIComponent"])(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botAlias.");
                }
                if (input.userId !== undefined) {
                    labelValue = input.userId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: userId.");
                    }
                    resolvedPath = resolvedPath.replace("{userId}", Object(_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__["extendedEncodeURIComponent"])(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: userId.");
                }
                body = JSON.stringify(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (input.activeContexts !== undefined &&
                    input.activeContexts !== null && {
                    activeContexts: serializeAws_restJson1ActiveContextsList(input.activeContexts, context),
                })), (input.inputText !== undefined && input.inputText !== null && { inputText: input.inputText })), (input.requestAttributes !== undefined &&
                    input.requestAttributes !== null && {
                    requestAttributes: serializeAws_restJson1StringMap(input.requestAttributes, context),
                })), (input.sessionAttributes !== undefined &&
                    input.sessionAttributes !== null && {
                    sessionAttributes: serializeAws_restJson1StringMap(input.sessionAttributes, context),
                })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
var serializeAws_restJson1PutSessionCommand = function (input, context) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ "content-type": "application/json" }, (isSerializableHeaderValue(input.accept) && { accept: input.accept }));
                resolvedPath = "/bot/{botName}/alias/{botAlias}/user/{userId}/session";
                if (input.botName !== undefined) {
                    labelValue = input.botName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botName.");
                    }
                    resolvedPath = resolvedPath.replace("{botName}", Object(_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__["extendedEncodeURIComponent"])(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botName.");
                }
                if (input.botAlias !== undefined) {
                    labelValue = input.botAlias;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botAlias.");
                    }
                    resolvedPath = resolvedPath.replace("{botAlias}", Object(_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__["extendedEncodeURIComponent"])(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botAlias.");
                }
                if (input.userId !== undefined) {
                    labelValue = input.userId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: userId.");
                    }
                    resolvedPath = resolvedPath.replace("{userId}", Object(_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__["extendedEncodeURIComponent"])(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: userId.");
                }
                body = JSON.stringify(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (input.activeContexts !== undefined &&
                    input.activeContexts !== null && {
                    activeContexts: serializeAws_restJson1ActiveContextsList(input.activeContexts, context),
                })), (input.dialogAction !== undefined &&
                    input.dialogAction !== null && { dialogAction: serializeAws_restJson1DialogAction(input.dialogAction, context) })), (input.recentIntentSummaryView !== undefined &&
                    input.recentIntentSummaryView !== null && {
                    recentIntentSummaryView: serializeAws_restJson1IntentSummaryList(input.recentIntentSummaryView, context),
                })), (input.sessionAttributes !== undefined &&
                    input.sessionAttributes !== null && {
                    sessionAttributes: serializeAws_restJson1StringMap(input.sessionAttributes, context),
                })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
var deserializeAws_restJson1DeleteSessionCommand = function (output, context) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var contents, data;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteSessionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botAlias: undefined,
                    botName: undefined,
                    sessionId: undefined,
                    userId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botAlias !== undefined && data.botAlias !== null) {
                    contents.botAlias = data.botAlias;
                }
                if (data.botName !== undefined && data.botName !== null) {
                    contents.botName = data.botName;
                }
                if (data.sessionId !== undefined && data.sessionId !== null) {
                    contents.sessionId = data.sessionId;
                }
                if (data.userId !== undefined && data.userId !== null) {
                    contents.userId = data.userId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteSessionCommandError = function (output, context) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexruntimeservice#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexruntimeservice#ConflictException": return [3 /*break*/, 4];
                    case "InternalFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexruntimeservice#InternalFailureException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexruntimeservice#LimitExceededException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexruntimeservice#NotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 7:
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_restJson1GetSessionCommand = function (output, context) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var contents, data;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetSessionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    activeContexts: undefined,
                    dialogAction: undefined,
                    recentIntentSummaryView: undefined,
                    sessionAttributes: undefined,
                    sessionId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.activeContexts !== undefined && data.activeContexts !== null) {
                    contents.activeContexts = deserializeAws_restJson1ActiveContextsList(data.activeContexts, context);
                }
                if (data.dialogAction !== undefined && data.dialogAction !== null) {
                    contents.dialogAction = deserializeAws_restJson1DialogAction(data.dialogAction, context);
                }
                if (data.recentIntentSummaryView !== undefined && data.recentIntentSummaryView !== null) {
                    contents.recentIntentSummaryView = deserializeAws_restJson1IntentSummaryList(data.recentIntentSummaryView, context);
                }
                if (data.sessionAttributes !== undefined && data.sessionAttributes !== null) {
                    contents.sessionAttributes = deserializeAws_restJson1StringMap(data.sessionAttributes, context);
                }
                if (data.sessionId !== undefined && data.sessionId !== null) {
                    contents.sessionId = data.sessionId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetSessionCommandError = function (output, context) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexruntimeservice#BadRequestException": return [3 /*break*/, 2];
                    case "InternalFailureException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexruntimeservice#InternalFailureException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexruntimeservice#LimitExceededException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexruntimeservice#NotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 5:
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_restJson1PostContentCommand = function (output, context) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var contents, data;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1PostContentCommandError(output, context)];
        }
        contents = {
            $metadata: deserializeMetadata(output),
            activeContexts: undefined,
            alternativeIntents: undefined,
            audioStream: undefined,
            botVersion: undefined,
            contentType: undefined,
            dialogState: undefined,
            inputTranscript: undefined,
            intentName: undefined,
            message: undefined,
            messageFormat: undefined,
            nluIntentConfidence: undefined,
            sentimentResponse: undefined,
            sessionAttributes: undefined,
            sessionId: undefined,
            slotToElicit: undefined,
            slots: undefined,
        };
        if (output.headers["content-type"] !== undefined) {
            contents.contentType = output.headers["content-type"];
        }
        if (output.headers["x-amz-lex-intent-name"] !== undefined) {
            contents.intentName = output.headers["x-amz-lex-intent-name"];
        }
        if (output.headers["x-amz-lex-nlu-intent-confidence"] !== undefined) {
            contents.nluIntentConfidence = new _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__["LazyJsonString"](Buffer.from(output.headers["x-amz-lex-nlu-intent-confidence"], "base64").toString("ascii"));
        }
        if (output.headers["x-amz-lex-alternative-intents"] !== undefined) {
            contents.alternativeIntents = new _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__["LazyJsonString"](Buffer.from(output.headers["x-amz-lex-alternative-intents"], "base64").toString("ascii"));
        }
        if (output.headers["x-amz-lex-slots"] !== undefined) {
            contents.slots = new _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__["LazyJsonString"](Buffer.from(output.headers["x-amz-lex-slots"], "base64").toString("ascii"));
        }
        if (output.headers["x-amz-lex-session-attributes"] !== undefined) {
            contents.sessionAttributes = new _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__["LazyJsonString"](Buffer.from(output.headers["x-amz-lex-session-attributes"], "base64").toString("ascii"));
        }
        if (output.headers["x-amz-lex-sentiment"] !== undefined) {
            contents.sentimentResponse = output.headers["x-amz-lex-sentiment"];
        }
        if (output.headers["x-amz-lex-message"] !== undefined) {
            contents.message = output.headers["x-amz-lex-message"];
        }
        if (output.headers["x-amz-lex-message-format"] !== undefined) {
            contents.messageFormat = output.headers["x-amz-lex-message-format"];
        }
        if (output.headers["x-amz-lex-dialog-state"] !== undefined) {
            contents.dialogState = output.headers["x-amz-lex-dialog-state"];
        }
        if (output.headers["x-amz-lex-slot-to-elicit"] !== undefined) {
            contents.slotToElicit = output.headers["x-amz-lex-slot-to-elicit"];
        }
        if (output.headers["x-amz-lex-input-transcript"] !== undefined) {
            contents.inputTranscript = output.headers["x-amz-lex-input-transcript"];
        }
        if (output.headers["x-amz-lex-bot-version"] !== undefined) {
            contents.botVersion = output.headers["x-amz-lex-bot-version"];
        }
        if (output.headers["x-amz-lex-session-id"] !== undefined) {
            contents.sessionId = output.headers["x-amz-lex-session-id"];
        }
        if (output.headers["x-amz-lex-active-contexts"] !== undefined) {
            contents.activeContexts = new _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__["LazyJsonString"](Buffer.from(output.headers["x-amz-lex-active-contexts"], "base64").toString("ascii"));
        }
        data = output.body;
        contents.audioStream = data;
        return [2 /*return*/, Promise.resolve(contents)];
    });
}); };
var deserializeAws_restJson1PostContentCommandError = function (output, context) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, parsedBody, message;
    var _p;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_q) {
        switch (_q.label) {
            case 0:
                _a = [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, output)];
                _p = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _a.concat([(_p.body = _q.sent(), _p)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadGatewayException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexruntimeservice#BadGatewayException": return [3 /*break*/, 2];
                    case "BadRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexruntimeservice#BadRequestException": return [3 /*break*/, 4];
                    case "ConflictException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexruntimeservice#ConflictException": return [3 /*break*/, 6];
                    case "DependencyFailedException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexruntimeservice#DependencyFailedException": return [3 /*break*/, 8];
                    case "InternalFailureException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexruntimeservice#InternalFailureException": return [3 /*break*/, 10];
                    case "LimitExceededException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexruntimeservice#LimitExceededException": return [3 /*break*/, 12];
                    case "LoopDetectedException": return [3 /*break*/, 14];
                    case "com.amazonaws.lexruntimeservice#LoopDetectedException": return [3 /*break*/, 14];
                    case "NotAcceptableException": return [3 /*break*/, 16];
                    case "com.amazonaws.lexruntimeservice#NotAcceptableException": return [3 /*break*/, 16];
                    case "NotFoundException": return [3 /*break*/, 18];
                    case "com.amazonaws.lexruntimeservice#NotFoundException": return [3 /*break*/, 18];
                    case "RequestTimeoutException": return [3 /*break*/, 20];
                    case "com.amazonaws.lexruntimeservice#RequestTimeoutException": return [3 /*break*/, 20];
                    case "UnsupportedMediaTypeException": return [3 /*break*/, 22];
                    case "com.amazonaws.lexruntimeservice#UnsupportedMediaTypeException": return [3 /*break*/, 22];
                }
                return [3 /*break*/, 24];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)];
            case 3:
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _c.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _d.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 7:
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _e.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DependencyFailedExceptionResponse(parsedOutput, context)];
            case 9:
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _f.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 11:
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _g.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 13:
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _h.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LoopDetectedExceptionResponse(parsedOutput, context)];
            case 15:
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _j.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotAcceptableExceptionResponse(parsedOutput, context)];
            case 17:
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _k.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 19:
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _l.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context)];
            case 21:
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _m.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnsupportedMediaTypeExceptionResponse(parsedOutput, context)];
            case 23:
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _o.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 24:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _q.label = 25;
            case 25:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_restJson1PostTextCommand = function (output, context) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var contents, data;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1PostTextCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    activeContexts: undefined,
                    alternativeIntents: undefined,
                    botVersion: undefined,
                    dialogState: undefined,
                    intentName: undefined,
                    message: undefined,
                    messageFormat: undefined,
                    nluIntentConfidence: undefined,
                    responseCard: undefined,
                    sentimentResponse: undefined,
                    sessionAttributes: undefined,
                    sessionId: undefined,
                    slotToElicit: undefined,
                    slots: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.activeContexts !== undefined && data.activeContexts !== null) {
                    contents.activeContexts = deserializeAws_restJson1ActiveContextsList(data.activeContexts, context);
                }
                if (data.alternativeIntents !== undefined && data.alternativeIntents !== null) {
                    contents.alternativeIntents = deserializeAws_restJson1IntentList(data.alternativeIntents, context);
                }
                if (data.botVersion !== undefined && data.botVersion !== null) {
                    contents.botVersion = data.botVersion;
                }
                if (data.dialogState !== undefined && data.dialogState !== null) {
                    contents.dialogState = data.dialogState;
                }
                if (data.intentName !== undefined && data.intentName !== null) {
                    contents.intentName = data.intentName;
                }
                if (data.message !== undefined && data.message !== null) {
                    contents.message = data.message;
                }
                if (data.messageFormat !== undefined && data.messageFormat !== null) {
                    contents.messageFormat = data.messageFormat;
                }
                if (data.nluIntentConfidence !== undefined && data.nluIntentConfidence !== null) {
                    contents.nluIntentConfidence = deserializeAws_restJson1IntentConfidence(data.nluIntentConfidence, context);
                }
                if (data.responseCard !== undefined && data.responseCard !== null) {
                    contents.responseCard = deserializeAws_restJson1ResponseCard(data.responseCard, context);
                }
                if (data.sentimentResponse !== undefined && data.sentimentResponse !== null) {
                    contents.sentimentResponse = deserializeAws_restJson1SentimentResponse(data.sentimentResponse, context);
                }
                if (data.sessionAttributes !== undefined && data.sessionAttributes !== null) {
                    contents.sessionAttributes = deserializeAws_restJson1StringMap(data.sessionAttributes, context);
                }
                if (data.sessionId !== undefined && data.sessionId !== null) {
                    contents.sessionId = data.sessionId;
                }
                if (data.slotToElicit !== undefined && data.slotToElicit !== null) {
                    contents.slotToElicit = data.slotToElicit;
                }
                if (data.slots !== undefined && data.slots !== null) {
                    contents.slots = deserializeAws_restJson1StringMap(data.slots, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1PostTextCommandError = function (output, context) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_m) {
        switch (_m.label) {
            case 0:
                _a = [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, output)];
                _l = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadGatewayException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexruntimeservice#BadGatewayException": return [3 /*break*/, 2];
                    case "BadRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexruntimeservice#BadRequestException": return [3 /*break*/, 4];
                    case "ConflictException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexruntimeservice#ConflictException": return [3 /*break*/, 6];
                    case "DependencyFailedException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexruntimeservice#DependencyFailedException": return [3 /*break*/, 8];
                    case "InternalFailureException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexruntimeservice#InternalFailureException": return [3 /*break*/, 10];
                    case "LimitExceededException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexruntimeservice#LimitExceededException": return [3 /*break*/, 12];
                    case "LoopDetectedException": return [3 /*break*/, 14];
                    case "com.amazonaws.lexruntimeservice#LoopDetectedException": return [3 /*break*/, 14];
                    case "NotFoundException": return [3 /*break*/, 16];
                    case "com.amazonaws.lexruntimeservice#NotFoundException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)];
            case 3:
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 7:
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DependencyFailedExceptionResponse(parsedOutput, context)];
            case 9:
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 11:
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 13:
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LoopDetectedExceptionResponse(parsedOutput, context)];
            case 15:
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 17:
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _k.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 18:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _m.label = 19;
            case 19:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_restJson1PutSessionCommand = function (output, context) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var contents, data;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1PutSessionCommandError(output, context)];
        }
        contents = {
            $metadata: deserializeMetadata(output),
            activeContexts: undefined,
            audioStream: undefined,
            contentType: undefined,
            dialogState: undefined,
            intentName: undefined,
            message: undefined,
            messageFormat: undefined,
            sessionAttributes: undefined,
            sessionId: undefined,
            slotToElicit: undefined,
            slots: undefined,
        };
        if (output.headers["content-type"] !== undefined) {
            contents.contentType = output.headers["content-type"];
        }
        if (output.headers["x-amz-lex-intent-name"] !== undefined) {
            contents.intentName = output.headers["x-amz-lex-intent-name"];
        }
        if (output.headers["x-amz-lex-slots"] !== undefined) {
            contents.slots = new _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__["LazyJsonString"](Buffer.from(output.headers["x-amz-lex-slots"], "base64").toString("ascii"));
        }
        if (output.headers["x-amz-lex-session-attributes"] !== undefined) {
            contents.sessionAttributes = new _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__["LazyJsonString"](Buffer.from(output.headers["x-amz-lex-session-attributes"], "base64").toString("ascii"));
        }
        if (output.headers["x-amz-lex-message"] !== undefined) {
            contents.message = output.headers["x-amz-lex-message"];
        }
        if (output.headers["x-amz-lex-message-format"] !== undefined) {
            contents.messageFormat = output.headers["x-amz-lex-message-format"];
        }
        if (output.headers["x-amz-lex-dialog-state"] !== undefined) {
            contents.dialogState = output.headers["x-amz-lex-dialog-state"];
        }
        if (output.headers["x-amz-lex-slot-to-elicit"] !== undefined) {
            contents.slotToElicit = output.headers["x-amz-lex-slot-to-elicit"];
        }
        if (output.headers["x-amz-lex-session-id"] !== undefined) {
            contents.sessionId = output.headers["x-amz-lex-session-id"];
        }
        if (output.headers["x-amz-lex-active-contexts"] !== undefined) {
            contents.activeContexts = new _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__["LazyJsonString"](Buffer.from(output.headers["x-amz-lex-active-contexts"], "base64").toString("ascii"));
        }
        data = output.body;
        contents.audioStream = data;
        return [2 /*return*/, Promise.resolve(contents)];
    });
}); };
var deserializeAws_restJson1PutSessionCommandError = function (output, context) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_m) {
        switch (_m.label) {
            case 0:
                _a = [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, output)];
                _l = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadGatewayException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexruntimeservice#BadGatewayException": return [3 /*break*/, 2];
                    case "BadRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexruntimeservice#BadRequestException": return [3 /*break*/, 4];
                    case "ConflictException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexruntimeservice#ConflictException": return [3 /*break*/, 6];
                    case "DependencyFailedException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexruntimeservice#DependencyFailedException": return [3 /*break*/, 8];
                    case "InternalFailureException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexruntimeservice#InternalFailureException": return [3 /*break*/, 10];
                    case "LimitExceededException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexruntimeservice#LimitExceededException": return [3 /*break*/, 12];
                    case "NotAcceptableException": return [3 /*break*/, 14];
                    case "com.amazonaws.lexruntimeservice#NotAcceptableException": return [3 /*break*/, 14];
                    case "NotFoundException": return [3 /*break*/, 16];
                    case "com.amazonaws.lexruntimeservice#NotFoundException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)];
            case 3:
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 7:
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DependencyFailedExceptionResponse(parsedOutput, context)];
            case 9:
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 11:
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 13:
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotAcceptableExceptionResponse(parsedOutput, context)];
            case 15:
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 17:
                response = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _k.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 18:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _m.label = 19;
            case 19:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_restJson1BadGatewayExceptionResponse = function (parsedOutput, context) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var contents, data;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        contents = {
            name: "BadGatewayException",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1BadRequestExceptionResponse = function (parsedOutput, context) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var contents, data;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        contents = {
            name: "BadRequestException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ConflictExceptionResponse = function (parsedOutput, context) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var contents, data;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        contents = {
            name: "ConflictException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1DependencyFailedExceptionResponse = function (parsedOutput, context) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var contents, data;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        contents = {
            name: "DependencyFailedException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1InternalFailureExceptionResponse = function (parsedOutput, context) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var contents, data;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        contents = {
            name: "InternalFailureException",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1LimitExceededExceptionResponse = function (parsedOutput, context) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var contents, data;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        contents = {
            name: "LimitExceededException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
            retryAfterSeconds: undefined,
        };
        if (parsedOutput.headers["retry-after"] !== undefined) {
            contents.retryAfterSeconds = parsedOutput.headers["retry-after"];
        }
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1LoopDetectedExceptionResponse = function (parsedOutput, context) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var contents, data;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        contents = {
            name: "LoopDetectedException",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1NotAcceptableExceptionResponse = function (parsedOutput, context) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var contents, data;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        contents = {
            name: "NotAcceptableException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1NotFoundExceptionResponse = function (parsedOutput, context) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var contents, data;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        contents = {
            name: "NotFoundException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1RequestTimeoutExceptionResponse = function (parsedOutput, context) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var contents, data;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        contents = {
            name: "RequestTimeoutException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1UnsupportedMediaTypeExceptionResponse = function (parsedOutput, context) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var contents, data;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        contents = {
            name: "UnsupportedMediaTypeException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_restJson1ActiveContext = function (input, context) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.parameters !== undefined &&
        input.parameters !== null && {
        parameters: serializeAws_restJson1ActiveContextParametersMap(input.parameters, context),
    })), (input.timeToLive !== undefined &&
        input.timeToLive !== null && {
        timeToLive: serializeAws_restJson1ActiveContextTimeToLive(input.timeToLive, context),
    }));
};
var serializeAws_restJson1ActiveContextParametersMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_restJson1ActiveContextsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ActiveContext(entry, context);
    });
};
var serializeAws_restJson1ActiveContextTimeToLive = function (input, context) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (input.timeToLiveInSeconds !== undefined &&
        input.timeToLiveInSeconds !== null && { timeToLiveInSeconds: input.timeToLiveInSeconds })), (input.turnsToLive !== undefined && input.turnsToLive !== null && { turnsToLive: input.turnsToLive }));
};
var serializeAws_restJson1DialogAction = function (input, context) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (input.fulfillmentState !== undefined &&
        input.fulfillmentState !== null && { fulfillmentState: input.fulfillmentState })), (input.intentName !== undefined && input.intentName !== null && { intentName: input.intentName })), (input.message !== undefined && input.message !== null && { message: input.message })), (input.messageFormat !== undefined && input.messageFormat !== null && { messageFormat: input.messageFormat })), (input.slotToElicit !== undefined && input.slotToElicit !== null && { slotToElicit: input.slotToElicit })), (input.slots !== undefined &&
        input.slots !== null && { slots: serializeAws_restJson1StringMap(input.slots, context) })), (input.type !== undefined && input.type !== null && { type: input.type }));
};
var serializeAws_restJson1IntentSummary = function (input, context) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (input.checkpointLabel !== undefined &&
        input.checkpointLabel !== null && { checkpointLabel: input.checkpointLabel })), (input.confirmationStatus !== undefined &&
        input.confirmationStatus !== null && { confirmationStatus: input.confirmationStatus })), (input.dialogActionType !== undefined &&
        input.dialogActionType !== null && { dialogActionType: input.dialogActionType })), (input.fulfillmentState !== undefined &&
        input.fulfillmentState !== null && { fulfillmentState: input.fulfillmentState })), (input.intentName !== undefined && input.intentName !== null && { intentName: input.intentName })), (input.slotToElicit !== undefined && input.slotToElicit !== null && { slotToElicit: input.slotToElicit })), (input.slots !== undefined &&
        input.slots !== null && { slots: serializeAws_restJson1StringMap(input.slots, context) }));
};
var serializeAws_restJson1IntentSummaryList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1IntentSummary(entry, context);
    });
};
var serializeAws_restJson1StringMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1ActiveContext = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        parameters: output.parameters !== undefined && output.parameters !== null
            ? deserializeAws_restJson1ActiveContextParametersMap(output.parameters, context)
            : undefined,
        timeToLive: output.timeToLive !== undefined && output.timeToLive !== null
            ? deserializeAws_restJson1ActiveContextTimeToLive(output.timeToLive, context)
            : undefined,
    };
};
var deserializeAws_restJson1ActiveContextParametersMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1ActiveContextsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ActiveContext(entry, context);
    });
};
var deserializeAws_restJson1ActiveContextTimeToLive = function (output, context) {
    return {
        timeToLiveInSeconds: output.timeToLiveInSeconds !== undefined && output.timeToLiveInSeconds !== null
            ? output.timeToLiveInSeconds
            : undefined,
        turnsToLive: output.turnsToLive !== undefined && output.turnsToLive !== null ? output.turnsToLive : undefined,
    };
};
var deserializeAws_restJson1Button = function (output, context) {
    return {
        text: output.text !== undefined && output.text !== null ? output.text : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_restJson1DialogAction = function (output, context) {
    return {
        fulfillmentState: output.fulfillmentState !== undefined && output.fulfillmentState !== null ? output.fulfillmentState : undefined,
        intentName: output.intentName !== undefined && output.intentName !== null ? output.intentName : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        messageFormat: output.messageFormat !== undefined && output.messageFormat !== null ? output.messageFormat : undefined,
        slotToElicit: output.slotToElicit !== undefined && output.slotToElicit !== null ? output.slotToElicit : undefined,
        slots: output.slots !== undefined && output.slots !== null
            ? deserializeAws_restJson1StringMap(output.slots, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_restJson1GenericAttachment = function (output, context) {
    return {
        attachmentLinkUrl: output.attachmentLinkUrl !== undefined && output.attachmentLinkUrl !== null
            ? output.attachmentLinkUrl
            : undefined,
        buttons: output.buttons !== undefined && output.buttons !== null
            ? deserializeAws_restJson1listOfButtons(output.buttons, context)
            : undefined,
        imageUrl: output.imageUrl !== undefined && output.imageUrl !== null ? output.imageUrl : undefined,
        subTitle: output.subTitle !== undefined && output.subTitle !== null ? output.subTitle : undefined,
        title: output.title !== undefined && output.title !== null ? output.title : undefined,
    };
};
var deserializeAws_restJson1genericAttachmentList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1GenericAttachment(entry, context);
    });
};
var deserializeAws_restJson1IntentConfidence = function (output, context) {
    return {
        score: output.score !== undefined && output.score !== null ? output.score : undefined,
    };
};
var deserializeAws_restJson1IntentList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PredictedIntent(entry, context);
    });
};
var deserializeAws_restJson1IntentSummary = function (output, context) {
    return {
        checkpointLabel: output.checkpointLabel !== undefined && output.checkpointLabel !== null ? output.checkpointLabel : undefined,
        confirmationStatus: output.confirmationStatus !== undefined && output.confirmationStatus !== null
            ? output.confirmationStatus
            : undefined,
        dialogActionType: output.dialogActionType !== undefined && output.dialogActionType !== null ? output.dialogActionType : undefined,
        fulfillmentState: output.fulfillmentState !== undefined && output.fulfillmentState !== null ? output.fulfillmentState : undefined,
        intentName: output.intentName !== undefined && output.intentName !== null ? output.intentName : undefined,
        slotToElicit: output.slotToElicit !== undefined && output.slotToElicit !== null ? output.slotToElicit : undefined,
        slots: output.slots !== undefined && output.slots !== null
            ? deserializeAws_restJson1StringMap(output.slots, context)
            : undefined,
    };
};
var deserializeAws_restJson1IntentSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1IntentSummary(entry, context);
    });
};
var deserializeAws_restJson1listOfButtons = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Button(entry, context);
    });
};
var deserializeAws_restJson1PredictedIntent = function (output, context) {
    return {
        intentName: output.intentName !== undefined && output.intentName !== null ? output.intentName : undefined,
        nluIntentConfidence: output.nluIntentConfidence !== undefined && output.nluIntentConfidence !== null
            ? deserializeAws_restJson1IntentConfidence(output.nluIntentConfidence, context)
            : undefined,
        slots: output.slots !== undefined && output.slots !== null
            ? deserializeAws_restJson1StringMap(output.slots, context)
            : undefined,
    };
};
var deserializeAws_restJson1ResponseCard = function (output, context) {
    return {
        contentType: output.contentType !== undefined && output.contentType !== null ? output.contentType : undefined,
        genericAttachments: output.genericAttachments !== undefined && output.genericAttachments !== null
            ? deserializeAws_restJson1genericAttachmentList(output.genericAttachments, context)
            : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
var deserializeAws_restJson1SentimentResponse = function (output, context) {
    return {
        sentimentLabel: output.sentimentLabel !== undefined && output.sentimentLabel !== null ? output.sentimentLabel : undefined,
        sentimentScore: output.sentimentScore !== undefined && output.sentimentScore !== null ? output.sentimentScore : undefined,
    };
};
var deserializeAws_restJson1StringMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeMetadata = function (output) {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
// Collect low-level response body stream to Uint8Array.
var collectBody = function (streamBody, context) {
    if (streamBody === void 0) { streamBody = new Uint8Array(); }
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
var collectBodyString = function (streamBody, context) {
    return collectBody(streamBody, context).then(function (body) { return context.utf8Encoder(body); });
};
var isSerializableHeaderValue = function (value) {
    return value !== undefined &&
        value !== null &&
        value !== "" &&
        (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
        (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
};
var parseBody = function (streamBody, context) {
    return collectBodyString(streamBody, context).then(function (encoded) {
        if (encoded.length) {
            return JSON.parse(encoded);
        }
        return {};
    });
};
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
var loadRestJsonErrorCode = function (output, data) {
    var findKey = function (object, key) { return Object.keys(object).find(function (k) { return k.toLowerCase() === key.toLowerCase(); }); };
    var sanitizeErrorCode = function (rawValue) {
        var cleanValue = rawValue;
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    var headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
    return "";
};
//# sourceMappingURL=Aws_restJson1.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../buffer/index.js */ "../../node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/runtimeConfig.browser.js":
/*!****************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/client-lex-runtime-service/dist/es/runtimeConfig.browser.js ***!
  \****************************************************************************************************************************/
/*! exports provided: ClientDefaultValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDefaultValues", function() { return ClientDefaultValues; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/@aws-sdk/client-lex-runtime-service/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./package.json */ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./package.json */ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/package.json", 1);
/* harmony import */ var _aws_crypto_sha256_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-crypto/sha256-browser */ "../../node_modules/@aws-crypto/sha256-browser/build/index.js");
/* harmony import */ var _aws_crypto_sha256_browser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_aws_crypto_sha256_browser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _aws_sdk_fetch_http_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-sdk/fetch-http-handler */ "../../node_modules/@aws-sdk/fetch-http-handler/dist/es/index.js");
/* harmony import */ var _aws_sdk_invalid_dependency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aws-sdk/invalid-dependency */ "../../node_modules/@aws-sdk/invalid-dependency/dist/es/index.js");
/* harmony import */ var _aws_sdk_middleware_retry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aws-sdk/middleware-retry */ "../../node_modules/@aws-sdk/middleware-retry/dist/es/index.js");
/* harmony import */ var _aws_sdk_util_base64_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @aws-sdk/util-base64-browser */ "../../node_modules/@aws-sdk/util-base64-browser/dist/es/index.js");
/* harmony import */ var _aws_sdk_util_body_length_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @aws-sdk/util-body-length-browser */ "../../node_modules/@aws-sdk/util-body-length-browser/dist/es/index.js");
/* harmony import */ var _aws_sdk_util_user_agent_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @aws-sdk/util-user-agent-browser */ "../../node_modules/@aws-sdk/util-user-agent-browser/dist/es/index.js");
/* harmony import */ var _aws_sdk_util_utf8_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @aws-sdk/util-utf8-browser */ "../../node_modules/@aws-sdk/util-utf8-browser/dist/es/index.js");
/* harmony import */ var _runtimeConfig_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./runtimeConfig.shared */ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/runtimeConfig.shared.js");











/**
 * @internal
 */
var ClientDefaultValues = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _runtimeConfig_shared__WEBPACK_IMPORTED_MODULE_10__["ClientSharedValues"]), { runtime: "browser", base64Decoder: _aws_sdk_util_base64_browser__WEBPACK_IMPORTED_MODULE_6__["fromBase64"], base64Encoder: _aws_sdk_util_base64_browser__WEBPACK_IMPORTED_MODULE_6__["toBase64"], bodyLengthChecker: _aws_sdk_util_body_length_browser__WEBPACK_IMPORTED_MODULE_7__["calculateBodyLength"], credentialDefaultProvider: function (_) { return function () { return Promise.reject(new Error("Credential is missing")); }; }, defaultUserAgentProvider: Object(_aws_sdk_util_user_agent_browser__WEBPACK_IMPORTED_MODULE_8__["defaultUserAgent"])({
        serviceId: _runtimeConfig_shared__WEBPACK_IMPORTED_MODULE_10__["ClientSharedValues"].serviceId,
        clientVersion: _package_json__WEBPACK_IMPORTED_MODULE_1__.version,
    }), maxAttempts: _aws_sdk_middleware_retry__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_MAX_ATTEMPTS"], region: Object(_aws_sdk_invalid_dependency__WEBPACK_IMPORTED_MODULE_4__["invalidProvider"])("Region is missing"), requestHandler: new _aws_sdk_fetch_http_handler__WEBPACK_IMPORTED_MODULE_3__["FetchHttpHandler"](), sha256: _aws_crypto_sha256_browser__WEBPACK_IMPORTED_MODULE_2__["Sha256"], streamCollector: _aws_sdk_fetch_http_handler__WEBPACK_IMPORTED_MODULE_3__["streamCollector"], utf8Decoder: _aws_sdk_util_utf8_browser__WEBPACK_IMPORTED_MODULE_9__["fromUtf8"], utf8Encoder: _aws_sdk_util_utf8_browser__WEBPACK_IMPORTED_MODULE_9__["toUtf8"] });
//# sourceMappingURL=runtimeConfig.browser.js.map

/***/ }),

/***/ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/runtimeConfig.shared.js":
/*!***************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/client-lex-runtime-service/dist/es/runtimeConfig.shared.js ***!
  \***************************************************************************************************************************/
/*! exports provided: ClientSharedValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientSharedValues", function() { return ClientSharedValues; });
/* harmony import */ var _endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./endpoints */ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/endpoints.js");
/* harmony import */ var _aws_sdk_url_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/url-parser */ "../../node_modules/@aws-sdk/url-parser/dist/es/index.js");


/**
 * @internal
 */
var ClientSharedValues = {
    apiVersion: "2016-11-28",
    disableHostPrefix: false,
    logger: {},
    regionInfoProvider: _endpoints__WEBPACK_IMPORTED_MODULE_0__["defaultRegionInfoProvider"],
    serviceId: "Lex Runtime Service",
    urlParser: _aws_sdk_url_parser__WEBPACK_IMPORTED_MODULE_1__["parseUrl"],
};
//# sourceMappingURL=runtimeConfig.shared.js.map

/***/ }),

/***/ "../../node_modules/@aws-sdk/client-lex-runtime-service/node_modules/tslib/tslib.es6.js":
/*!***************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/client-lex-runtime-service/node_modules/tslib/tslib.es6.js ***!
  \***************************************************************************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || from);
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ "../../node_modules/@aws-sdk/config-resolver/dist/es/EndpointsConfig.js":
/*!***********************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/config-resolver/dist/es/EndpointsConfig.js ***!
  \***********************************************************************************************************/
/*! exports provided: resolveEndpointsConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveEndpointsConfig", function() { return resolveEndpointsConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

var resolveEndpointsConfig = function (input) {
    var _a;
    return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, input), { tls: (_a = input.tls) !== null && _a !== void 0 ? _a : true, endpoint: input.endpoint ? normalizeEndpoint(input) : function () { return getEndPointFromRegion(input); }, isCustomEndpoint: input.endpoint ? true : false }));
};
var normalizeEndpoint = function (input) {
    var endpoint = input.endpoint, urlParser = input.urlParser;
    if (typeof endpoint === "string") {
        var promisified_1 = Promise.resolve(urlParser(endpoint));
        return function () { return promisified_1; };
    }
    else if (typeof endpoint === "object") {
        var promisified_2 = Promise.resolve(endpoint);
        return function () { return promisified_2; };
    }
    return endpoint;
};
var getEndPointFromRegion = function (input) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var _a, tls, region, dnsHostRegex, hostname;
    var _b;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = input.tls, tls = _a === void 0 ? true : _a;
                return [4 /*yield*/, input.region()];
            case 1:
                region = _c.sent();
                dnsHostRegex = new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/);
                if (!dnsHostRegex.test(region)) {
                    throw new Error("Invalid region in client config");
                }
                return [4 /*yield*/, input.regionInfoProvider(region)];
            case 2:
                hostname = ((_b = (_c.sent())) !== null && _b !== void 0 ? _b : {}).hostname;
                if (!hostname) {
                    throw new Error("Cannot resolve hostname from client config");
                }
                return [2 /*return*/, input.urlParser((tls ? "https:" : "http:") + "//" + hostname)];
        }
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5kcG9pbnRzQ29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0VuZHBvaW50c0NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBeUJBLE1BQU0sQ0FBQyxJQUFNLHNCQUFzQixHQUFHLFVBQ3BDLEtBQW9EOztJQUNwQixPQUFBLHVCQUM3QixLQUFLLEtBQ1IsR0FBRyxRQUFFLEtBQUssQ0FBQyxHQUFHLG1DQUFJLElBQUksRUFDdEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFNLE9BQUEscUJBQXFCLENBQUMsS0FBSyxDQUFDLEVBQTVCLENBQTRCLEVBQ3hGLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUMvQyxDQUFBO0NBQUEsQ0FBQztBQUVILElBQU0saUJBQWlCLEdBQUcsVUFBQyxLQUFnRDtJQUNqRSxJQUFBLFFBQVEsR0FBZ0IsS0FBSyxTQUFyQixFQUFFLFNBQVMsR0FBSyxLQUFLLFVBQVYsQ0FBVztJQUN0QyxJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFBRTtRQUNoQyxJQUFNLGFBQVcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE9BQU8sY0FBTSxPQUFBLGFBQVcsRUFBWCxDQUFXLENBQUM7S0FDMUI7U0FBTSxJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFBRTtRQUN2QyxJQUFNLGFBQVcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlDLE9BQU8sY0FBTSxPQUFBLGFBQVcsRUFBWCxDQUFXLENBQUM7S0FDMUI7SUFDRCxPQUFPLFFBQVMsQ0FBQztBQUNuQixDQUFDLENBQUM7QUFFRixJQUFNLHFCQUFxQixHQUFHLFVBQU8sS0FBZ0Q7Ozs7OztnQkFDM0UsS0FBZSxLQUFLLElBQVYsRUFBVixHQUFHLG1CQUFHLElBQUksS0FBQSxDQUFXO2dCQUNkLHFCQUFNLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBQTs7Z0JBQTdCLE1BQU0sR0FBRyxTQUFvQjtnQkFFN0IsWUFBWSxHQUFHLElBQUksTUFBTSxDQUFDLDBEQUEwRCxDQUFDLENBQUM7Z0JBQzVGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUM5QixNQUFNLElBQUksS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7aUJBQ3BEO2dCQUVxQixxQkFBTSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLEVBQUE7O2dCQUFwRCxRQUFRLFVBQUssQ0FBQyxTQUFzQyxDQUFDLG1DQUFJLEVBQUUsVUFBbkQ7Z0JBQ2hCLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2IsTUFBTSxJQUFJLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO2lCQUMvRDtnQkFFRCxzQkFBTyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sV0FBSyxRQUFVLENBQUMsRUFBQzs7O0tBQ3BFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbmRwb2ludCwgUHJvdmlkZXIsIFJlZ2lvbkluZm9Qcm92aWRlciwgVXJsUGFyc2VyIH0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW5kcG9pbnRzSW5wdXRDb25maWcge1xuICAvKipcbiAgICogVGhlIGZ1bGx5IHF1YWxpZmllZCBlbmRwb2ludCBvZiB0aGUgd2Vic2VydmljZS4gVGhpcyBpcyBvbmx5IHJlcXVpcmVkIHdoZW4gdXNpbmcgYSBjdXN0b20gZW5kcG9pbnQgKGZvciBleGFtcGxlLCB3aGVuIHVzaW5nIGEgbG9jYWwgdmVyc2lvbiBvZiBTMykuXG4gICAqL1xuICBlbmRwb2ludD86IHN0cmluZyB8IEVuZHBvaW50IHwgUHJvdmlkZXI8RW5kcG9pbnQ+O1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIFRMUyBpcyBlbmFibGVkIGZvciByZXF1ZXN0cy5cbiAgICovXG4gIHRscz86IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBQcmV2aW91c2x5UmVzb2x2ZWQge1xuICByZWdpb25JbmZvUHJvdmlkZXI6IFJlZ2lvbkluZm9Qcm92aWRlcjtcbiAgdXJsUGFyc2VyOiBVcmxQYXJzZXI7XG4gIHJlZ2lvbjogUHJvdmlkZXI8c3RyaW5nPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbmRwb2ludHNSZXNvbHZlZENvbmZpZyBleHRlbmRzIFJlcXVpcmVkPEVuZHBvaW50c0lucHV0Q29uZmlnPiB7XG4gIGVuZHBvaW50OiBQcm92aWRlcjxFbmRwb2ludD47XG4gIGlzQ3VzdG9tRW5kcG9pbnQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCByZXNvbHZlRW5kcG9pbnRzQ29uZmlnID0gPFQ+KFxuICBpbnB1dDogVCAmIEVuZHBvaW50c0lucHV0Q29uZmlnICYgUHJldmlvdXNseVJlc29sdmVkXG4pOiBUICYgRW5kcG9pbnRzUmVzb2x2ZWRDb25maWcgPT4gKHtcbiAgLi4uaW5wdXQsXG4gIHRsczogaW5wdXQudGxzID8/IHRydWUsXG4gIGVuZHBvaW50OiBpbnB1dC5lbmRwb2ludCA/IG5vcm1hbGl6ZUVuZHBvaW50KGlucHV0KSA6ICgpID0+IGdldEVuZFBvaW50RnJvbVJlZ2lvbihpbnB1dCksXG4gIGlzQ3VzdG9tRW5kcG9pbnQ6IGlucHV0LmVuZHBvaW50ID8gdHJ1ZSA6IGZhbHNlLFxufSk7XG5cbmNvbnN0IG5vcm1hbGl6ZUVuZHBvaW50ID0gKGlucHV0OiBFbmRwb2ludHNJbnB1dENvbmZpZyAmIFByZXZpb3VzbHlSZXNvbHZlZCk6IFByb3ZpZGVyPEVuZHBvaW50PiA9PiB7XG4gIGNvbnN0IHsgZW5kcG9pbnQsIHVybFBhcnNlciB9ID0gaW5wdXQ7XG4gIGlmICh0eXBlb2YgZW5kcG9pbnQgPT09IFwic3RyaW5nXCIpIHtcbiAgICBjb25zdCBwcm9taXNpZmllZCA9IFByb21pc2UucmVzb2x2ZSh1cmxQYXJzZXIoZW5kcG9pbnQpKTtcbiAgICByZXR1cm4gKCkgPT4gcHJvbWlzaWZpZWQ7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGVuZHBvaW50ID09PSBcIm9iamVjdFwiKSB7XG4gICAgY29uc3QgcHJvbWlzaWZpZWQgPSBQcm9taXNlLnJlc29sdmUoZW5kcG9pbnQpO1xuICAgIHJldHVybiAoKSA9PiBwcm9taXNpZmllZDtcbiAgfVxuICByZXR1cm4gZW5kcG9pbnQhO1xufTtcblxuY29uc3QgZ2V0RW5kUG9pbnRGcm9tUmVnaW9uID0gYXN5bmMgKGlucHV0OiBFbmRwb2ludHNJbnB1dENvbmZpZyAmIFByZXZpb3VzbHlSZXNvbHZlZCkgPT4ge1xuICBjb25zdCB7IHRscyA9IHRydWUgfSA9IGlucHV0O1xuICBjb25zdCByZWdpb24gPSBhd2FpdCBpbnB1dC5yZWdpb24oKTtcblxuICBjb25zdCBkbnNIb3N0UmVnZXggPSBuZXcgUmVnRXhwKC9eKFthLXpBLVowLTldfFthLXpBLVowLTldW2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pJC8pO1xuICBpZiAoIWRuc0hvc3RSZWdleC50ZXN0KHJlZ2lvbikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHJlZ2lvbiBpbiBjbGllbnQgY29uZmlnXCIpO1xuICB9XG5cbiAgY29uc3QgeyBob3N0bmFtZSB9ID0gKGF3YWl0IGlucHV0LnJlZ2lvbkluZm9Qcm92aWRlcihyZWdpb24pKSA/PyB7fTtcbiAgaWYgKCFob3N0bmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCByZXNvbHZlIGhvc3RuYW1lIGZyb20gY2xpZW50IGNvbmZpZ1wiKTtcbiAgfVxuXG4gIHJldHVybiBpbnB1dC51cmxQYXJzZXIoYCR7dGxzID8gXCJodHRwczpcIiA6IFwiaHR0cDpcIn0vLyR7aG9zdG5hbWV9YCk7XG59O1xuIl19

/***/ }),

/***/ "../../node_modules/@aws-sdk/config-resolver/dist/es/RegionConfig.js":
/*!********************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/config-resolver/dist/es/RegionConfig.js ***!
  \********************************************************************************************************/
/*! exports provided: REGION_ENV_NAME, REGION_INI_NAME, NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS, resolveRegionConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGION_ENV_NAME", function() { return REGION_ENV_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGION_INI_NAME", function() { return REGION_INI_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NODE_REGION_CONFIG_OPTIONS", function() { return NODE_REGION_CONFIG_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NODE_REGION_CONFIG_FILE_OPTIONS", function() { return NODE_REGION_CONFIG_FILE_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveRegionConfig", function() { return resolveRegionConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

var REGION_ENV_NAME = "AWS_REGION";
var REGION_INI_NAME = "region";
var NODE_REGION_CONFIG_OPTIONS = {
    environmentVariableSelector: function (env) { return env[REGION_ENV_NAME]; },
    configFileSelector: function (profile) { return profile[REGION_INI_NAME]; },
    default: function () {
        throw new Error("Region is missing");
    },
};
var NODE_REGION_CONFIG_FILE_OPTIONS = {
    preferredFile: "credentials",
};
var resolveRegionConfig = function (input) {
    if (!input.region) {
        throw new Error("Region is missing");
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, input), { region: normalizeRegion(input.region) });
};
var normalizeRegion = function (region) {
    if (typeof region === "string") {
        var promisified_1 = Promise.resolve(region);
        return function () { return promisified_1; };
    }
    return region;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVnaW9uQ29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL1JlZ2lvbkNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0EsTUFBTSxDQUFDLElBQU0sZUFBZSxHQUFHLFlBQVksQ0FBQztBQUM1QyxNQUFNLENBQUMsSUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDO0FBRXhDLE1BQU0sQ0FBQyxJQUFNLDBCQUEwQixHQUFrQztJQUN2RSwyQkFBMkIsRUFBRSxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxlQUFlLENBQUMsRUFBcEIsQ0FBb0I7SUFDMUQsa0JBQWtCLEVBQUUsVUFBQyxPQUFPLElBQUssT0FBQSxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQXhCLENBQXdCO0lBQ3pELE9BQU8sRUFBRTtRQUNQLE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN2QyxDQUFDO0NBQ0YsQ0FBQztBQUVGLE1BQU0sQ0FBQyxJQUFNLCtCQUErQixHQUF1QjtJQUNqRSxhQUFhLEVBQUUsYUFBYTtDQUM3QixDQUFDO0FBZUYsTUFBTSxDQUFDLElBQU0sbUJBQW1CLEdBQUcsVUFBSSxLQUFpRDtJQUN0RixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7S0FDdEM7SUFDRCw2QkFDSyxLQUFLLEtBQ1IsTUFBTSxFQUFFLGVBQWUsQ0FBQyxLQUFLLENBQUMsTUFBTyxDQUFDLElBQ3RDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsSUFBTSxlQUFlLEdBQUcsVUFBQyxNQUFpQztJQUN4RCxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsRUFBRTtRQUM5QixJQUFNLGFBQVcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLE9BQU8sY0FBTSxPQUFBLGFBQVcsRUFBWCxDQUFXLENBQUM7S0FDMUI7SUFDRCxPQUFPLE1BQTBCLENBQUM7QUFDcEMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9hZGVkQ29uZmlnU2VsZWN0b3JzLCBMb2NhbENvbmZpZ09wdGlvbnMgfSBmcm9tIFwiQGF3cy1zZGsvbm9kZS1jb25maWctcHJvdmlkZXJcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBSRUdJT05fRU5WX05BTUUgPSBcIkFXU19SRUdJT05cIjtcbmV4cG9ydCBjb25zdCBSRUdJT05fSU5JX05BTUUgPSBcInJlZ2lvblwiO1xuXG5leHBvcnQgY29uc3QgTk9ERV9SRUdJT05fQ09ORklHX09QVElPTlM6IExvYWRlZENvbmZpZ1NlbGVjdG9yczxzdHJpbmc+ID0ge1xuICBlbnZpcm9ubWVudFZhcmlhYmxlU2VsZWN0b3I6IChlbnYpID0+IGVudltSRUdJT05fRU5WX05BTUVdLFxuICBjb25maWdGaWxlU2VsZWN0b3I6IChwcm9maWxlKSA9PiBwcm9maWxlW1JFR0lPTl9JTklfTkFNRV0sXG4gIGRlZmF1bHQ6ICgpID0+IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWdpb24gaXMgbWlzc2luZ1wiKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBOT0RFX1JFR0lPTl9DT05GSUdfRklMRV9PUFRJT05TOiBMb2NhbENvbmZpZ09wdGlvbnMgPSB7XG4gIHByZWZlcnJlZEZpbGU6IFwiY3JlZGVudGlhbHNcIixcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVnaW9uSW5wdXRDb25maWcge1xuICAvKipcbiAgICogVGhlIEFXUyByZWdpb24gdG8gd2hpY2ggdGhpcyBjbGllbnQgd2lsbCBzZW5kIHJlcXVlc3RzXG4gICAqL1xuICByZWdpb24/OiBzdHJpbmcgfCBQcm92aWRlcjxzdHJpbmc+O1xufVxuXG5pbnRlcmZhY2UgUHJldmlvdXNseVJlc29sdmVkIHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVnaW9uUmVzb2x2ZWRDb25maWcge1xuICByZWdpb246IFByb3ZpZGVyPHN0cmluZz47XG59XG5cbmV4cG9ydCBjb25zdCByZXNvbHZlUmVnaW9uQ29uZmlnID0gPFQ+KGlucHV0OiBUICYgUmVnaW9uSW5wdXRDb25maWcgJiBQcmV2aW91c2x5UmVzb2x2ZWQpOiBUICYgUmVnaW9uUmVzb2x2ZWRDb25maWcgPT4ge1xuICBpZiAoIWlucHV0LnJlZ2lvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlJlZ2lvbiBpcyBtaXNzaW5nXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgLi4uaW5wdXQsXG4gICAgcmVnaW9uOiBub3JtYWxpemVSZWdpb24oaW5wdXQucmVnaW9uISksXG4gIH07XG59O1xuXG5jb25zdCBub3JtYWxpemVSZWdpb24gPSAocmVnaW9uOiBzdHJpbmcgfCBQcm92aWRlcjxzdHJpbmc+KTogUHJvdmlkZXI8c3RyaW5nPiA9PiB7XG4gIGlmICh0eXBlb2YgcmVnaW9uID09PSBcInN0cmluZ1wiKSB7XG4gICAgY29uc3QgcHJvbWlzaWZpZWQgPSBQcm9taXNlLnJlc29sdmUocmVnaW9uKTtcbiAgICByZXR1cm4gKCkgPT4gcHJvbWlzaWZpZWQ7XG4gIH1cbiAgcmV0dXJuIHJlZ2lvbiBhcyBQcm92aWRlcjxzdHJpbmc+O1xufTtcbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-sdk/config-resolver/dist/es/index.js":
/*!*************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/config-resolver/dist/es/index.js ***!
  \*************************************************************************************************/
/*! exports provided: resolveEndpointsConfig, REGION_ENV_NAME, REGION_INI_NAME, NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS, resolveRegionConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EndpointsConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EndpointsConfig */ "../../node_modules/@aws-sdk/config-resolver/dist/es/EndpointsConfig.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveEndpointsConfig", function() { return _EndpointsConfig__WEBPACK_IMPORTED_MODULE_0__["resolveEndpointsConfig"]; });

/* harmony import */ var _RegionConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegionConfig */ "../../node_modules/@aws-sdk/config-resolver/dist/es/RegionConfig.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REGION_ENV_NAME", function() { return _RegionConfig__WEBPACK_IMPORTED_MODULE_1__["REGION_ENV_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REGION_INI_NAME", function() { return _RegionConfig__WEBPACK_IMPORTED_MODULE_1__["REGION_INI_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NODE_REGION_CONFIG_OPTIONS", function() { return _RegionConfig__WEBPACK_IMPORTED_MODULE_1__["NODE_REGION_CONFIG_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NODE_REGION_CONFIG_FILE_OPTIONS", function() { return _RegionConfig__WEBPACK_IMPORTED_MODULE_1__["NODE_REGION_CONFIG_FILE_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveRegionConfig", function() { return _RegionConfig__WEBPACK_IMPORTED_MODULE_1__["resolveRegionConfig"]; });



//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxtQkFBbUIsQ0FBQztBQUNsQyxjQUFjLGdCQUFnQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vRW5kcG9pbnRzQ29uZmlnXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9SZWdpb25Db25maWdcIjtcbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-sdk/fetch-http-handler/dist/es/fetch-http-handler.js":
/*!*****************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/fetch-http-handler/dist/es/fetch-http-handler.js ***!
  \*****************************************************************************************************************/
/*! exports provided: FetchHttpHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchHttpHandler", function() { return FetchHttpHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/protocol-http */ "../../node_modules/@aws-sdk/protocol-http/dist/es/index.js");
/* harmony import */ var _aws_sdk_querystring_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/querystring-builder */ "../../node_modules/@aws-sdk/fetch-http-handler/node_modules/@aws-sdk/querystring-builder/dist/es/index.js");
/* harmony import */ var _request_timeout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-timeout */ "../../node_modules/@aws-sdk/fetch-http-handler/dist/es/request-timeout.js");




var FetchHttpHandler = /** @class */ (function () {
    function FetchHttpHandler(_a) {
        var _b = _a === void 0 ? {} : _a, requestTimeout = _b.requestTimeout;
        this.requestTimeout = requestTimeout;
    }
    FetchHttpHandler.prototype.destroy = function () {
        // Do nothing. TLS and HTTP/2 connection pooling is handled by the browser.
    };
    FetchHttpHandler.prototype.handle = function (request, _a) {
        var _b = _a === void 0 ? {} : _a, abortSignal = _b.abortSignal;
        var requestTimeoutInMs = this.requestTimeout;
        // if the request was already aborted, prevent doing extra work
        if (abortSignal === null || abortSignal === void 0 ? void 0 : abortSignal.aborted) {
            var abortError = new Error("Request aborted");
            abortError.name = "AbortError";
            return Promise.reject(abortError);
        }
        var path = request.path;
        if (request.query) {
            var queryString = Object(_aws_sdk_querystring_builder__WEBPACK_IMPORTED_MODULE_2__["buildQueryString"])(request.query);
            if (queryString) {
                path += "?" + queryString;
            }
        }
        var port = request.port, method = request.method;
        var url = request.protocol + "//" + request.hostname + (port ? ":" + port : "") + path;
        // Request constructor doesn't allow GET/HEAD request with body
        // ref: https://github.com/whatwg/fetch/issues/551
        var body = method === "GET" || method === "HEAD" ? undefined : request.body;
        var requestOptions = {
            body: body,
            headers: new Headers(request.headers),
            method: method,
        };
        // some browsers support abort signal
        if (typeof AbortController !== "undefined") {
            requestOptions["signal"] = abortSignal;
        }
        var fetchRequest = new Request(url, requestOptions);
        var raceOfPromises = [
            fetch(fetchRequest).then(function (response) {
                var e_1, _a;
                var fetchHeaders = response.headers;
                var transformedHeaders = {};
                try {
                    for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(fetchHeaders.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var pair = _c.value;
                        transformedHeaders[pair[0]] = pair[1];
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                var hasReadableStream = response.body !== undefined;
                // Return the response with buffered body
                if (!hasReadableStream) {
                    return response.blob().then(function (body) { return ({
                        response: new _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
                            headers: transformedHeaders,
                            statusCode: response.status,
                            body: body,
                        }),
                    }); });
                }
                // Return the response with streaming body
                return {
                    response: new _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
                        headers: transformedHeaders,
                        statusCode: response.status,
                        body: response.body,
                    }),
                };
            }),
            Object(_request_timeout__WEBPACK_IMPORTED_MODULE_3__["requestTimeout"])(requestTimeoutInMs),
        ];
        if (abortSignal) {
            raceOfPromises.push(new Promise(function (resolve, reject) {
                abortSignal.onabort = function () {
                    var abortError = new Error("Request aborted");
                    abortError.name = "AbortError";
                    reject(abortError);
                };
            }));
        }
        return Promise.race(raceOfPromises);
    };
    return FetchHttpHandler;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2gtaHR0cC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2ZldGNoLWh0dHAtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUE0QixZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNoRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUdoRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFlbkQ7SUFHRSwwQkFBWSxFQUFnRDtZQUFoRCxxQkFBOEMsRUFBRSxLQUFBLEVBQTlDLGNBQWMsb0JBQUE7UUFDMUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7SUFDdkMsQ0FBQztJQUVELGtDQUFPLEdBQVA7UUFDRSwyRUFBMkU7SUFDN0UsQ0FBQztJQUVELGlDQUFNLEdBQU4sVUFBTyxPQUFvQixFQUFFLEVBQXdDO1lBQXhDLHFCQUFzQyxFQUFFLEtBQUEsRUFBdEMsV0FBVyxpQkFBQTtRQUN4QyxJQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFFL0MsK0RBQStEO1FBQy9ELElBQUksV0FBVyxhQUFYLFdBQVcsdUJBQVgsV0FBVyxDQUFFLE9BQU8sRUFBRTtZQUN4QixJQUFNLFVBQVUsR0FBRyxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ2hELFVBQVUsQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO1lBQy9CLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNuQztRQUVELElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2pCLElBQU0sV0FBVyxHQUFHLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwRCxJQUFJLFdBQVcsRUFBRTtnQkFDZixJQUFJLElBQUksTUFBSSxXQUFhLENBQUM7YUFDM0I7U0FDRjtRQUVPLElBQUEsSUFBSSxHQUFhLE9BQU8sS0FBcEIsRUFBRSxNQUFNLEdBQUssT0FBTyxPQUFaLENBQWE7UUFDakMsSUFBTSxHQUFHLEdBQU0sT0FBTyxDQUFDLFFBQVEsVUFBSyxPQUFPLENBQUMsUUFBUSxJQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBSSxJQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBRyxJQUFNLENBQUM7UUFDdkYsK0RBQStEO1FBQy9ELGtEQUFrRDtRQUNsRCxJQUFNLElBQUksR0FBRyxNQUFNLEtBQUssS0FBSyxJQUFJLE1BQU0sS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUM5RSxJQUFNLGNBQWMsR0FBZ0I7WUFDbEMsSUFBSSxNQUFBO1lBQ0osT0FBTyxFQUFFLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDckMsTUFBTSxFQUFFLE1BQU07U0FDZixDQUFDO1FBRUYscUNBQXFDO1FBQ3JDLElBQUksT0FBTyxlQUFlLEtBQUssV0FBVyxFQUFFO1lBQ3pDLGNBQXNCLENBQUMsUUFBUSxDQUFDLEdBQUcsV0FBVyxDQUFDO1NBQ2pEO1FBRUQsSUFBTSxZQUFZLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ3RELElBQU0sY0FBYyxHQUFHO1lBQ3JCLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFROztnQkFDaEMsSUFBTSxZQUFZLEdBQVEsUUFBUSxDQUFDLE9BQU8sQ0FBQztnQkFDM0MsSUFBTSxrQkFBa0IsR0FBYyxFQUFFLENBQUM7O29CQUV6QyxLQUFtQixJQUFBLEtBQUEsU0FBaUIsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFBLGdCQUFBLDRCQUFFO3dCQUF2RCxJQUFNLElBQUksV0FBQTt3QkFDYixrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3ZDOzs7Ozs7Ozs7Z0JBRUQsSUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQztnQkFFdEQseUNBQXlDO2dCQUN6QyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7b0JBQ3RCLE9BQU8sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLENBQUM7d0JBQ3JDLFFBQVEsRUFBRSxJQUFJLFlBQVksQ0FBQzs0QkFDekIsT0FBTyxFQUFFLGtCQUFrQjs0QkFDM0IsVUFBVSxFQUFFLFFBQVEsQ0FBQyxNQUFNOzRCQUMzQixJQUFJLE1BQUE7eUJBQ0wsQ0FBQztxQkFDSCxDQUFDLEVBTm9DLENBTXBDLENBQUMsQ0FBQztpQkFDTDtnQkFDRCwwQ0FBMEM7Z0JBQzFDLE9BQU87b0JBQ0wsUUFBUSxFQUFFLElBQUksWUFBWSxDQUFDO3dCQUN6QixPQUFPLEVBQUUsa0JBQWtCO3dCQUMzQixVQUFVLEVBQUUsUUFBUSxDQUFDLE1BQU07d0JBQzNCLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSTtxQkFDcEIsQ0FBQztpQkFDSCxDQUFDO1lBQ0osQ0FBQyxDQUFDO1lBQ0YsY0FBYyxDQUFDLGtCQUFrQixDQUFDO1NBQ25DLENBQUM7UUFDRixJQUFJLFdBQVcsRUFBRTtZQUNmLGNBQWMsQ0FBQyxJQUFJLENBQ2pCLElBQUksT0FBTyxDQUFRLFVBQUMsT0FBTyxFQUFFLE1BQU07Z0JBQ2pDLFdBQVcsQ0FBQyxPQUFPLEdBQUc7b0JBQ3BCLElBQU0sVUFBVSxHQUFHLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7b0JBQ2hELFVBQVUsQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO29CQUMvQixNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3JCLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7U0FDSDtRQUNELE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBM0ZELElBMkZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEhhbmRsZXIsIEh0dHBSZXF1ZXN0LCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiQGF3cy1zZGsvcHJvdG9jb2wtaHR0cFwiO1xuaW1wb3J0IHsgYnVpbGRRdWVyeVN0cmluZyB9IGZyb20gXCJAYXdzLXNkay9xdWVyeXN0cmluZy1idWlsZGVyXCI7XG5pbXBvcnQgeyBIZWFkZXJCYWcsIEh0dHBIYW5kbGVyT3B0aW9ucyB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuXG5pbXBvcnQgeyByZXF1ZXN0VGltZW91dCB9IGZyb20gXCIuL3JlcXVlc3QtdGltZW91dFwiO1xuXG5kZWNsYXJlIGxldCBBYm9ydENvbnRyb2xsZXI6IGFueTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBodHRwIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGEgYnJvd3NlciBodHRwIGNsaWVudC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBGZXRjaEh0dHBIYW5kbGVyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBhIHJlcXVlc3QgY2FuIHRha2UgYmVmb3JlIGJlaW5nIGF1dG9tYXRpY2FsbHlcbiAgICogdGVybWluYXRlZC5cbiAgICovXG4gIHJlcXVlc3RUaW1lb3V0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgRmV0Y2hIdHRwSGFuZGxlciBpbXBsZW1lbnRzIEh0dHBIYW5kbGVyIHtcbiAgcHJpdmF0ZSByZWFkb25seSByZXF1ZXN0VGltZW91dD86IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcih7IHJlcXVlc3RUaW1lb3V0IH06IEZldGNoSHR0cEhhbmRsZXJPcHRpb25zID0ge30pIHtcbiAgICB0aGlzLnJlcXVlc3RUaW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQ7XG4gIH1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIC8vIERvIG5vdGhpbmcuIFRMUyBhbmQgSFRUUC8yIGNvbm5lY3Rpb24gcG9vbGluZyBpcyBoYW5kbGVkIGJ5IHRoZSBicm93c2VyLlxuICB9XG5cbiAgaGFuZGxlKHJlcXVlc3Q6IEh0dHBSZXF1ZXN0LCB7IGFib3J0U2lnbmFsIH06IEh0dHBIYW5kbGVyT3B0aW9ucyA9IHt9KTogUHJvbWlzZTx7IHJlc3BvbnNlOiBIdHRwUmVzcG9uc2UgfT4ge1xuICAgIGNvbnN0IHJlcXVlc3RUaW1lb3V0SW5NcyA9IHRoaXMucmVxdWVzdFRpbWVvdXQ7XG5cbiAgICAvLyBpZiB0aGUgcmVxdWVzdCB3YXMgYWxyZWFkeSBhYm9ydGVkLCBwcmV2ZW50IGRvaW5nIGV4dHJhIHdvcmtcbiAgICBpZiAoYWJvcnRTaWduYWw/LmFib3J0ZWQpIHtcbiAgICAgIGNvbnN0IGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXCJSZXF1ZXN0IGFib3J0ZWRcIik7XG4gICAgICBhYm9ydEVycm9yLm5hbWUgPSBcIkFib3J0RXJyb3JcIjtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChhYm9ydEVycm9yKTtcbiAgICB9XG5cbiAgICBsZXQgcGF0aCA9IHJlcXVlc3QucGF0aDtcbiAgICBpZiAocmVxdWVzdC5xdWVyeSkge1xuICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPSBidWlsZFF1ZXJ5U3RyaW5nKHJlcXVlc3QucXVlcnkpO1xuICAgICAgaWYgKHF1ZXJ5U3RyaW5nKSB7XG4gICAgICAgIHBhdGggKz0gYD8ke3F1ZXJ5U3RyaW5nfWA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgeyBwb3J0LCBtZXRob2QgfSA9IHJlcXVlc3Q7XG4gICAgY29uc3QgdXJsID0gYCR7cmVxdWVzdC5wcm90b2NvbH0vLyR7cmVxdWVzdC5ob3N0bmFtZX0ke3BvcnQgPyBgOiR7cG9ydH1gIDogXCJcIn0ke3BhdGh9YDtcbiAgICAvLyBSZXF1ZXN0IGNvbnN0cnVjdG9yIGRvZXNuJ3QgYWxsb3cgR0VUL0hFQUQgcmVxdWVzdCB3aXRoIGJvZHlcbiAgICAvLyByZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS93aGF0d2cvZmV0Y2gvaXNzdWVzLzU1MVxuICAgIGNvbnN0IGJvZHkgPSBtZXRob2QgPT09IFwiR0VUXCIgfHwgbWV0aG9kID09PSBcIkhFQURcIiA/IHVuZGVmaW5lZCA6IHJlcXVlc3QuYm9keTtcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9uczogUmVxdWVzdEluaXQgPSB7XG4gICAgICBib2R5LFxuICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMocmVxdWVzdC5oZWFkZXJzKSxcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgIH07XG5cbiAgICAvLyBzb21lIGJyb3dzZXJzIHN1cHBvcnQgYWJvcnQgc2lnbmFsXG4gICAgaWYgKHR5cGVvZiBBYm9ydENvbnRyb2xsZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIChyZXF1ZXN0T3B0aW9ucyBhcyBhbnkpW1wic2lnbmFsXCJdID0gYWJvcnRTaWduYWw7XG4gICAgfVxuXG4gICAgY29uc3QgZmV0Y2hSZXF1ZXN0ID0gbmV3IFJlcXVlc3QodXJsLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgY29uc3QgcmFjZU9mUHJvbWlzZXMgPSBbXG4gICAgICBmZXRjaChmZXRjaFJlcXVlc3QpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoSGVhZGVyczogYW55ID0gcmVzcG9uc2UuaGVhZGVycztcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtZWRIZWFkZXJzOiBIZWFkZXJCYWcgPSB7fTtcblxuICAgICAgICBmb3IgKGNvbnN0IHBhaXIgb2YgPEFycmF5PHN0cmluZ1tdPj5mZXRjaEhlYWRlcnMuZW50cmllcygpKSB7XG4gICAgICAgICAgdHJhbnNmb3JtZWRIZWFkZXJzW3BhaXJbMF1dID0gcGFpclsxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhc1JlYWRhYmxlU3RyZWFtID0gcmVzcG9uc2UuYm9keSAhPT0gdW5kZWZpbmVkO1xuXG4gICAgICAgIC8vIFJldHVybiB0aGUgcmVzcG9uc2Ugd2l0aCBidWZmZXJlZCBib2R5XG4gICAgICAgIGlmICghaGFzUmVhZGFibGVTdHJlYW0pIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuYmxvYigpLnRoZW4oKGJvZHkpID0+ICh7XG4gICAgICAgICAgICByZXNwb25zZTogbmV3IEh0dHBSZXNwb25zZSh7XG4gICAgICAgICAgICAgIGhlYWRlcnM6IHRyYW5zZm9ybWVkSGVhZGVycyxcbiAgICAgICAgICAgICAgc3RhdHVzQ29kZTogcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJldHVybiB0aGUgcmVzcG9uc2Ugd2l0aCBzdHJlYW1pbmcgYm9keVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHJlc3BvbnNlOiBuZXcgSHR0cFJlc3BvbnNlKHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHRyYW5zZm9ybWVkSGVhZGVycyxcbiAgICAgICAgICAgIHN0YXR1c0NvZGU6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICAgIGJvZHk6IHJlc3BvbnNlLmJvZHksXG4gICAgICAgICAgfSksXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICAgIHJlcXVlc3RUaW1lb3V0KHJlcXVlc3RUaW1lb3V0SW5NcyksXG4gICAgXTtcbiAgICBpZiAoYWJvcnRTaWduYWwpIHtcbiAgICAgIHJhY2VPZlByb21pc2VzLnB1c2goXG4gICAgICAgIG5ldyBQcm9taXNlPG5ldmVyPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgYWJvcnRTaWduYWwub25hYm9ydCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXCJSZXF1ZXN0IGFib3J0ZWRcIik7XG4gICAgICAgICAgICBhYm9ydEVycm9yLm5hbWUgPSBcIkFib3J0RXJyb3JcIjtcbiAgICAgICAgICAgIHJlamVjdChhYm9ydEVycm9yKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmFjZShyYWNlT2ZQcm9taXNlcyk7XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-sdk/fetch-http-handler/dist/es/index.js":
/*!****************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/fetch-http-handler/dist/es/index.js ***!
  \****************************************************************************************************/
/*! exports provided: FetchHttpHandler, streamCollector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetch_http_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch-http-handler */ "../../node_modules/@aws-sdk/fetch-http-handler/dist/es/fetch-http-handler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FetchHttpHandler", function() { return _fetch_http_handler__WEBPACK_IMPORTED_MODULE_0__["FetchHttpHandler"]; });

/* harmony import */ var _stream_collector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stream-collector */ "../../node_modules/@aws-sdk/fetch-http-handler/dist/es/stream-collector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "streamCollector", function() { return _stream_collector__WEBPACK_IMPORTED_MODULE_1__["streamCollector"]; });



//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxzQkFBc0IsQ0FBQztBQUNyQyxjQUFjLG9CQUFvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vZmV0Y2gtaHR0cC1oYW5kbGVyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zdHJlYW0tY29sbGVjdG9yXCI7XG4iXX0=

/***/ }),

/***/ "../../node_modules/@aws-sdk/fetch-http-handler/dist/es/request-timeout.js":
/*!**************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/fetch-http-handler/dist/es/request-timeout.js ***!
  \**************************************************************************************************************/
/*! exports provided: requestTimeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestTimeout", function() { return requestTimeout; });
function requestTimeout(timeoutInMs) {
    if (timeoutInMs === void 0) { timeoutInMs = 0; }
    return new Promise(function (resolve, reject) {
        if (timeoutInMs) {
            setTimeout(function () {
                var timeoutError = new Error("Request did not complete within " + timeoutInMs + " ms");
                timeoutError.name = "TimeoutError";
                reject(timeoutError);
            }, timeoutInMs);
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC10aW1lb3V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JlcXVlc3QtdGltZW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFVBQVUsY0FBYyxDQUFDLFdBQWU7SUFBZiw0QkFBQSxFQUFBLGVBQWU7SUFDNUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2pDLElBQUksV0FBVyxFQUFFO1lBQ2YsVUFBVSxDQUFDO2dCQUNULElBQU0sWUFBWSxHQUFHLElBQUksS0FBSyxDQUFDLHFDQUFtQyxXQUFXLFFBQUssQ0FBQyxDQUFDO2dCQUNwRixZQUFZLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQztnQkFDbkMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQztTQUNqQjtJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0VGltZW91dCh0aW1lb3V0SW5NcyA9IDApOiBQcm9taXNlPG5ldmVyPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKHRpbWVvdXRJbk1zKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgdGltZW91dEVycm9yID0gbmV3IEVycm9yKGBSZXF1ZXN0IGRpZCBub3QgY29tcGxldGUgd2l0aGluICR7dGltZW91dEluTXN9IG1zYCk7XG4gICAgICAgIHRpbWVvdXRFcnJvci5uYW1lID0gXCJUaW1lb3V0RXJyb3JcIjtcbiAgICAgICAgcmVqZWN0KHRpbWVvdXRFcnJvcik7XG4gICAgICB9LCB0aW1lb3V0SW5Ncyk7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-sdk/fetch-http-handler/dist/es/stream-collector.js":
/*!***************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/fetch-http-handler/dist/es/stream-collector.js ***!
  \***************************************************************************************************************/
/*! exports provided: streamCollector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "streamCollector", function() { return streamCollector; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _aws_sdk_util_base64_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/util-base64-browser */ "../../node_modules/@aws-sdk/util-base64-browser/dist/es/index.js");


//reference: https://snack.expo.io/r1JCSWRGU
var streamCollector = function (stream) {
    if (typeof Blob === "function" && stream instanceof Blob) {
        return collectBlob(stream);
    }
    return collectStream(stream);
};
function collectBlob(blob) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
        var base64, arrayBuffer;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, readToBase64(blob)];
                case 1:
                    base64 = _a.sent();
                    arrayBuffer = Object(_aws_sdk_util_base64_browser__WEBPACK_IMPORTED_MODULE_1__["fromBase64"])(base64);
                    return [2 /*return*/, new Uint8Array(arrayBuffer)];
            }
        });
    });
}
function collectStream(stream) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
        var res, reader, isDone, _a, done, value, prior;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
            switch (_b.label) {
                case 0:
                    res = new Uint8Array(0);
                    reader = stream.getReader();
                    isDone = false;
                    _b.label = 1;
                case 1:
                    if (!!isDone) return [3 /*break*/, 3];
                    return [4 /*yield*/, reader.read()];
                case 2:
                    _a = _b.sent(), done = _a.done, value = _a.value;
                    if (value) {
                        prior = res;
                        res = new Uint8Array(prior.length + value.length);
                        res.set(prior);
                        res.set(value, prior.length);
                    }
                    isDone = done;
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/, res];
            }
        });
    });
}
function readToBase64(blob) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onloadend = function () {
            var _a;
            // reference: https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
            // response from readAsDataURL is always prepended with "data:*/*;base64,"
            if (reader.readyState !== 2) {
                return reject(new Error("Reader aborted too early"));
            }
            var result = ((_a = reader.result) !== null && _a !== void 0 ? _a : "");
            // Response can include only 'data:' for empty blob, return empty string in this case.
            // Otherwise, return the string after ','
            var commaIndex = result.indexOf(",");
            var dataOffset = commaIndex > -1 ? commaIndex + 1 : result.length;
            resolve(result.substring(dataOffset));
        };
        reader.onabort = function () { return reject(new Error("Read aborted")); };
        reader.onerror = function () { return reject(reader.error); };
        // reader.readAsArrayBuffer is not always available
        reader.readAsDataURL(blob);
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtLWNvbGxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJlYW0tY29sbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFMUQsNENBQTRDO0FBQzVDLE1BQU0sQ0FBQyxJQUFNLGVBQWUsR0FBb0IsVUFBQyxNQUE2QjtJQUM1RSxJQUFJLE9BQU8sSUFBSSxLQUFLLFVBQVUsSUFBSSxNQUFNLFlBQVksSUFBSSxFQUFFO1FBQ3hELE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzVCO0lBRUQsT0FBTyxhQUFhLENBQUMsTUFBd0IsQ0FBQyxDQUFDO0FBQ2pELENBQUMsQ0FBQztBQUVGLFNBQWUsV0FBVyxDQUFDLElBQVU7Ozs7O3dCQUNwQixxQkFBTSxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUE7O29CQUFqQyxNQUFNLEdBQUcsU0FBd0I7b0JBQ2pDLFdBQVcsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3ZDLHNCQUFPLElBQUksVUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUFDOzs7O0NBQ3BDO0FBRUQsU0FBZSxhQUFhLENBQUMsTUFBc0I7Ozs7OztvQkFDN0MsR0FBRyxHQUFHLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN0QixNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUM5QixNQUFNLEdBQUcsS0FBSyxDQUFDOzs7eUJBQ1osQ0FBQyxNQUFNO29CQUNZLHFCQUFNLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBQTs7b0JBQXJDLEtBQWtCLFNBQW1CLEVBQW5DLElBQUksVUFBQSxFQUFFLEtBQUssV0FBQTtvQkFDbkIsSUFBSSxLQUFLLEVBQUU7d0JBQ0gsS0FBSyxHQUFHLEdBQUcsQ0FBQzt3QkFDbEIsR0FBRyxHQUFHLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUNsRCxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNmLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztxQkFDOUI7b0JBQ0QsTUFBTSxHQUFHLElBQUksQ0FBQzs7d0JBRWhCLHNCQUFPLEdBQUcsRUFBQzs7OztDQUNaO0FBRUQsU0FBUyxZQUFZLENBQUMsSUFBVTtJQUM5QixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDakMsSUFBTSxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUNoQyxNQUFNLENBQUMsU0FBUyxHQUFHOztZQUNqQix1RkFBdUY7WUFDdkYsMEVBQTBFO1lBQzFFLElBQUksTUFBTSxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUU7Z0JBQzNCLE9BQU8sTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQzthQUN0RDtZQUNELElBQU0sTUFBTSxHQUFHLE9BQUMsTUFBTSxDQUFDLE1BQU0sbUNBQUksRUFBRSxDQUFXLENBQUM7WUFDL0Msc0ZBQXNGO1lBQ3RGLHlDQUF5QztZQUN6QyxJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZDLElBQU0sVUFBVSxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNwRSxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQztRQUNGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsY0FBTSxPQUFBLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFqQyxDQUFpQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyxPQUFPLEdBQUcsY0FBTSxPQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLENBQUM7UUFDNUMsbURBQW1EO1FBQ25ELE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RyZWFtQ29sbGVjdG9yIH0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5pbXBvcnQgeyBmcm9tQmFzZTY0IH0gZnJvbSBcIkBhd3Mtc2RrL3V0aWwtYmFzZTY0LWJyb3dzZXJcIjtcblxuLy9yZWZlcmVuY2U6IGh0dHBzOi8vc25hY2suZXhwby5pby9yMUpDU1dSR1VcbmV4cG9ydCBjb25zdCBzdHJlYW1Db2xsZWN0b3I6IFN0cmVhbUNvbGxlY3RvciA9IChzdHJlYW06IEJsb2IgfCBSZWFkYWJsZVN0cmVhbSk6IFByb21pc2U8VWludDhBcnJheT4gPT4ge1xuICBpZiAodHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJiBzdHJlYW0gaW5zdGFuY2VvZiBCbG9iKSB7XG4gICAgcmV0dXJuIGNvbGxlY3RCbG9iKHN0cmVhbSk7XG4gIH1cblxuICByZXR1cm4gY29sbGVjdFN0cmVhbShzdHJlYW0gYXMgUmVhZGFibGVTdHJlYW0pO1xufTtcblxuYXN5bmMgZnVuY3Rpb24gY29sbGVjdEJsb2IoYmxvYjogQmxvYik6IFByb21pc2U8VWludDhBcnJheT4ge1xuICBjb25zdCBiYXNlNjQgPSBhd2FpdCByZWFkVG9CYXNlNjQoYmxvYik7XG4gIGNvbnN0IGFycmF5QnVmZmVyID0gZnJvbUJhc2U2NChiYXNlNjQpO1xuICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjb2xsZWN0U3RyZWFtKHN0cmVhbTogUmVhZGFibGVTdHJlYW0pOiBQcm9taXNlPFVpbnQ4QXJyYXk+IHtcbiAgbGV0IHJlcyA9IG5ldyBVaW50OEFycmF5KDApO1xuICBjb25zdCByZWFkZXIgPSBzdHJlYW0uZ2V0UmVhZGVyKCk7XG4gIGxldCBpc0RvbmUgPSBmYWxzZTtcbiAgd2hpbGUgKCFpc0RvbmUpIHtcbiAgICBjb25zdCB7IGRvbmUsIHZhbHVlIH0gPSBhd2FpdCByZWFkZXIucmVhZCgpO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgY29uc3QgcHJpb3IgPSByZXM7XG4gICAgICByZXMgPSBuZXcgVWludDhBcnJheShwcmlvci5sZW5ndGggKyB2YWx1ZS5sZW5ndGgpO1xuICAgICAgcmVzLnNldChwcmlvcik7XG4gICAgICByZXMuc2V0KHZhbHVlLCBwcmlvci5sZW5ndGgpO1xuICAgIH1cbiAgICBpc0RvbmUgPSBkb25lO1xuICB9XG4gIHJldHVybiByZXM7XG59XG5cbmZ1bmN0aW9uIHJlYWRUb0Jhc2U2NChibG9iOiBCbG9iKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICAvLyByZWZlcmVuY2U6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlUmVhZGVyL3JlYWRBc0RhdGFVUkxcbiAgICAgIC8vIHJlc3BvbnNlIGZyb20gcmVhZEFzRGF0YVVSTCBpcyBhbHdheXMgcHJlcGVuZGVkIHdpdGggXCJkYXRhOiovKjtiYXNlNjQsXCJcbiAgICAgIGlmIChyZWFkZXIucmVhZHlTdGF0ZSAhPT0gMikge1xuICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihcIlJlYWRlciBhYm9ydGVkIHRvbyBlYXJseVwiKSk7XG4gICAgICB9XG4gICAgICBjb25zdCByZXN1bHQgPSAocmVhZGVyLnJlc3VsdCA/PyBcIlwiKSBhcyBzdHJpbmc7XG4gICAgICAvLyBSZXNwb25zZSBjYW4gaW5jbHVkZSBvbmx5ICdkYXRhOicgZm9yIGVtcHR5IGJsb2IsIHJldHVybiBlbXB0eSBzdHJpbmcgaW4gdGhpcyBjYXNlLlxuICAgICAgLy8gT3RoZXJ3aXNlLCByZXR1cm4gdGhlIHN0cmluZyBhZnRlciAnLCdcbiAgICAgIGNvbnN0IGNvbW1hSW5kZXggPSByZXN1bHQuaW5kZXhPZihcIixcIik7XG4gICAgICBjb25zdCBkYXRhT2Zmc2V0ID0gY29tbWFJbmRleCA+IC0xID8gY29tbWFJbmRleCArIDEgOiByZXN1bHQubGVuZ3RoO1xuICAgICAgcmVzb2x2ZShyZXN1bHQuc3Vic3RyaW5nKGRhdGFPZmZzZXQpKTtcbiAgICB9O1xuICAgIHJlYWRlci5vbmFib3J0ID0gKCkgPT4gcmVqZWN0KG5ldyBFcnJvcihcIlJlYWQgYWJvcnRlZFwiKSk7XG4gICAgcmVhZGVyLm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVhZGVyLmVycm9yKTtcbiAgICAvLyByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIgaXMgbm90IGFsd2F5cyBhdmFpbGFibGVcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgfSk7XG59XG4iXX0=

/***/ }),

/***/ "../../node_modules/@aws-sdk/fetch-http-handler/node_modules/@aws-sdk/querystring-builder/dist/es/index.js":
/*!**********************************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/fetch-http-handler/node_modules/@aws-sdk/querystring-builder/dist/es/index.js ***!
  \**********************************************************************************************************************************************/
/*! exports provided: buildQueryString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildQueryString", function() { return buildQueryString; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _aws_sdk_util_uri_escape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/util-uri-escape */ "../../node_modules/@aws-sdk/fetch-http-handler/node_modules/@aws-sdk/util-uri-escape/dist/es/index.js");


function buildQueryString(query) {
    var e_1, _a;
    var parts = [];
    try {
        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(query).sort()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            var value = query[key];
            key = Object(_aws_sdk_util_uri_escape__WEBPACK_IMPORTED_MODULE_1__["escapeUri"])(key);
            if (Array.isArray(value)) {
                for (var i = 0, iLen = value.length; i < iLen; i++) {
                    parts.push(key + "=" + Object(_aws_sdk_util_uri_escape__WEBPACK_IMPORTED_MODULE_1__["escapeUri"])(value[i]));
                }
            }
            else {
                var qsEntry = key;
                if (value || typeof value === "string") {
                    qsEntry += "=" + Object(_aws_sdk_util_uri_escape__WEBPACK_IMPORTED_MODULE_1__["escapeUri"])(value);
                }
                parts.push(qsEntry);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return parts.join("&");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVyRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsS0FBd0I7O0lBQ3ZELElBQU0sS0FBSyxHQUFhLEVBQUUsQ0FBQzs7UUFDM0IsS0FBZ0IsSUFBQSxLQUFBLFNBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQSxnQkFBQSw0QkFBRTtZQUF0QyxJQUFJLEdBQUcsV0FBQTtZQUNWLElBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6QixHQUFHLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDeEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDbEQsS0FBSyxDQUFDLElBQUksQ0FBSSxHQUFHLFNBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBRyxDQUFDLENBQUM7aUJBQzdDO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDO2dCQUNsQixJQUFJLEtBQUssSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7b0JBQ3RDLE9BQU8sSUFBSSxNQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUcsQ0FBQztpQkFDbkM7Z0JBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNyQjtTQUNGOzs7Ozs7Ozs7SUFFRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFF1ZXJ5UGFyYW1ldGVyQmFnIH0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5pbXBvcnQgeyBlc2NhcGVVcmkgfSBmcm9tIFwiQGF3cy1zZGsvdXRpbC11cmktZXNjYXBlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFF1ZXJ5U3RyaW5nKHF1ZXJ5OiBRdWVyeVBhcmFtZXRlckJhZyk6IHN0cmluZyB7XG4gIGNvbnN0IHBhcnRzOiBzdHJpbmdbXSA9IFtdO1xuICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMocXVlcnkpLnNvcnQoKSkge1xuICAgIGNvbnN0IHZhbHVlID0gcXVlcnlba2V5XTtcbiAgICBrZXkgPSBlc2NhcGVVcmkoa2V5KTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBpTGVuID0gdmFsdWUubGVuZ3RoOyBpIDwgaUxlbjsgaSsrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYCR7a2V5fT0ke2VzY2FwZVVyaSh2YWx1ZVtpXSl9YCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBxc0VudHJ5ID0ga2V5O1xuICAgICAgaWYgKHZhbHVlIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBxc0VudHJ5ICs9IGA9JHtlc2NhcGVVcmkodmFsdWUpfWA7XG4gICAgICB9XG4gICAgICBwYXJ0cy5wdXNoKHFzRW50cnkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0cy5qb2luKFwiJlwiKTtcbn1cbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-sdk/fetch-http-handler/node_modules/@aws-sdk/util-uri-escape/dist/es/escape-uri-path.js":
/*!****************************************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/fetch-http-handler/node_modules/@aws-sdk/util-uri-escape/dist/es/escape-uri-path.js ***!
  \****************************************************************************************************************************************************/
/*! exports provided: escapeUriPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeUriPath", function() { return escapeUriPath; });
/* harmony import */ var _escape_uri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./escape-uri */ "../../node_modules/@aws-sdk/fetch-http-handler/node_modules/@aws-sdk/util-uri-escape/dist/es/escape-uri.js");

var escapeUriPath = function (uri) { return uri.split("/").map(_escape_uri__WEBPACK_IMPORTED_MODULE_0__["escapeUri"]).join("/"); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNjYXBlLXVyaS1wYXRoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2VzY2FwZS11cmktcGF0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRXpDLE1BQU0sQ0FBQyxJQUFNLGFBQWEsR0FBRyxVQUFDLEdBQVcsSUFBYSxPQUFBLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBdkMsQ0FBdUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVzY2FwZVVyaSB9IGZyb20gXCIuL2VzY2FwZS11cmlcIjtcblxuZXhwb3J0IGNvbnN0IGVzY2FwZVVyaVBhdGggPSAodXJpOiBzdHJpbmcpOiBzdHJpbmcgPT4gdXJpLnNwbGl0KFwiL1wiKS5tYXAoZXNjYXBlVXJpKS5qb2luKFwiL1wiKTtcbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-sdk/fetch-http-handler/node_modules/@aws-sdk/util-uri-escape/dist/es/escape-uri.js":
/*!***********************************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/fetch-http-handler/node_modules/@aws-sdk/util-uri-escape/dist/es/escape-uri.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: escapeUri */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeUri", function() { return escapeUri; });
var escapeUri = function (uri) {
    // AWS percent-encodes some extra non-standard characters in a URI
    return encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
};
var hexEncode = function (c) { return "%" + c.charCodeAt(0).toString(16).toUpperCase(); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNjYXBlLXVyaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lc2NhcGUtdXJpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxJQUFNLFNBQVMsR0FBRyxVQUFDLEdBQVc7SUFDbkMsa0VBQWtFO0lBQ2xFLE9BQUEsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUM7QUFBdEQsQ0FBc0QsQ0FBQztBQUV6RCxJQUFNLFNBQVMsR0FBRyxVQUFDLENBQVMsSUFBSyxPQUFBLE1BQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFJLEVBQWhELENBQWdELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZXNjYXBlVXJpID0gKHVyaTogc3RyaW5nKTogc3RyaW5nID0+XG4gIC8vIEFXUyBwZXJjZW50LWVuY29kZXMgc29tZSBleHRyYSBub24tc3RhbmRhcmQgY2hhcmFjdGVycyBpbiBhIFVSSVxuICBlbmNvZGVVUklDb21wb25lbnQodXJpKS5yZXBsYWNlKC9bIScoKSpdL2csIGhleEVuY29kZSk7XG5cbmNvbnN0IGhleEVuY29kZSA9IChjOiBzdHJpbmcpID0+IGAlJHtjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCl9YDtcbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-sdk/fetch-http-handler/node_modules/@aws-sdk/util-uri-escape/dist/es/index.js":
/*!******************************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/fetch-http-handler/node_modules/@aws-sdk/util-uri-escape/dist/es/index.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: escapeUri, escapeUriPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _escape_uri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./escape-uri */ "../../node_modules/@aws-sdk/fetch-http-handler/node_modules/@aws-sdk/util-uri-escape/dist/es/escape-uri.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "escapeUri", function() { return _escape_uri__WEBPACK_IMPORTED_MODULE_0__["escapeUri"]; });

/* harmony import */ var _escape_uri_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./escape-uri-path */ "../../node_modules/@aws-sdk/fetch-http-handler/node_modules/@aws-sdk/util-uri-escape/dist/es/escape-uri-path.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "escapeUriPath", function() { return _escape_uri_path__WEBPACK_IMPORTED_MODULE_1__["escapeUriPath"]; });



//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxjQUFjLENBQUM7QUFDN0IsY0FBYyxtQkFBbUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL2VzY2FwZS11cmlcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2VzY2FwZS11cmktcGF0aFwiO1xuIl19

/***/ }),

/***/ "../../node_modules/@aws-sdk/invalid-dependency/dist/es/index.js":
/*!****************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/invalid-dependency/dist/es/index.js ***!
  \****************************************************************************************************/
/*! exports provided: invalidFunction, invalidProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _invalidFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invalidFunction */ "../../node_modules/@aws-sdk/invalid-dependency/dist/es/invalidFunction.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invalidFunction", function() { return _invalidFunction__WEBPACK_IMPORTED_MODULE_0__["invalidFunction"]; });

/* harmony import */ var _invalidProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invalidProvider */ "../../node_modules/@aws-sdk/invalid-dependency/dist/es/invalidProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invalidProvider", function() { return _invalidProvider__WEBPACK_IMPORTED_MODULE_1__["invalidProvider"]; });



//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxtQkFBbUIsQ0FBQztBQUNsQyxjQUFjLG1CQUFtQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vaW52YWxpZEZ1bmN0aW9uXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9pbnZhbGlkUHJvdmlkZXJcIjtcbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-sdk/invalid-dependency/dist/es/invalidFunction.js":
/*!**************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/invalid-dependency/dist/es/invalidFunction.js ***!
  \**************************************************************************************************************/
/*! exports provided: invalidFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidFunction", function() { return invalidFunction; });
var invalidFunction = function (message) { return function () {
    throw new Error(message);
}; };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52YWxpZEZ1bmN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2ludmFsaWRGdW5jdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsSUFBTSxlQUFlLEdBQUcsVUFBQyxPQUFlLElBQUssT0FBQTtJQUNsRCxNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzNCLENBQUMsRUFGbUQsQ0FFbkQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbnZhbGlkRnVuY3Rpb24gPSAobWVzc2FnZTogc3RyaW5nKSA9PiAoKSA9PiB7XG4gIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbn07XG4iXX0=

/***/ }),

/***/ "../../node_modules/@aws-sdk/invalid-dependency/dist/es/invalidProvider.js":
/*!**************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/invalid-dependency/dist/es/invalidProvider.js ***!
  \**************************************************************************************************************/
/*! exports provided: invalidProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidProvider", function() { return invalidProvider; });
var invalidProvider = function (message) { return function () { return Promise.reject(message); }; };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52YWxpZFByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2ludmFsaWRQcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxNQUFNLENBQUMsSUFBTSxlQUFlLEdBQXVDLFVBQUMsT0FBZSxJQUFLLE9BQUEsY0FBTSxPQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQXZCLENBQXVCLEVBQTdCLENBQTZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuZXhwb3J0IGNvbnN0IGludmFsaWRQcm92aWRlcjogKG1lc3NhZ2U6IHN0cmluZykgPT4gUHJvdmlkZXI8YW55PiA9IChtZXNzYWdlOiBzdHJpbmcpID0+ICgpID0+IFByb21pc2UucmVqZWN0KG1lc3NhZ2UpO1xuIl19

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-content-length/dist/es/index.js":
/*!***********************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-content-length/dist/es/index.js ***!
  \***********************************************************************************************************/
/*! exports provided: contentLengthMiddleware, contentLengthMiddlewareOptions, getContentLengthPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentLengthMiddleware", function() { return contentLengthMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentLengthMiddlewareOptions", function() { return contentLengthMiddlewareOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContentLengthPlugin", function() { return getContentLengthPlugin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/protocol-http */ "../../node_modules/@aws-sdk/protocol-http/dist/es/index.js");


var CONTENT_LENGTH_HEADER = "content-length";
function contentLengthMiddleware(bodyLengthChecker) {
    var _this = this;
    return function (next) { return function (args) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var request, body, headers, length;
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
            request = args.request;
            if (_aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"].isInstance(request)) {
                body = request.body, headers = request.headers;
                if (body &&
                    Object.keys(headers)
                        .map(function (str) { return str.toLowerCase(); })
                        .indexOf(CONTENT_LENGTH_HEADER) === -1) {
                    length = bodyLengthChecker(body);
                    if (length !== undefined) {
                        request.headers = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, request.headers), (_a = {}, _a[CONTENT_LENGTH_HEADER] = String(length), _a));
                    }
                }
            }
            return [2 /*return*/, next(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, args), { request: request }))];
        });
    }); }; };
}
var contentLengthMiddlewareOptions = {
    step: "build",
    tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
    name: "contentLengthMiddleware",
    override: true,
};
var getContentLengthPlugin = function (options) { return ({
    applyToStack: function (clientStack) {
        clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), contentLengthMiddlewareOptions);
    },
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQVlyRCxJQUFNLHFCQUFxQixHQUFHLGdCQUFnQixDQUFDO0FBRS9DLE1BQU0sVUFBVSx1QkFBdUIsQ0FBQyxpQkFBdUM7SUFBL0UsaUJBNEJDO0lBM0JDLE9BQU8sVUFBZ0MsSUFBK0IsSUFBZ0MsT0FBQSxVQUNwRyxJQUFnQzs7OztZQUUxQixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUM3QixJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQzNCLElBQUksR0FBYyxPQUFPLEtBQXJCLEVBQUUsT0FBTyxHQUFLLE9BQU8sUUFBWixDQUFhO2dCQUNsQyxJQUNFLElBQUk7b0JBQ0osTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7eUJBQ2pCLEdBQUcsQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBakIsQ0FBaUIsQ0FBQzt5QkFDL0IsT0FBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQ3hDO29CQUNNLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO3dCQUN4QixPQUFPLENBQUMsT0FBTyx5QkFDVixPQUFPLENBQUMsT0FBTyxnQkFDakIscUJBQXFCLElBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUN4QyxDQUFDO3FCQUNIO2lCQUNGO2FBQ0Y7WUFFRCxzQkFBTyxJQUFJLHVCQUNOLElBQUksS0FDUCxPQUFPLFNBQUEsSUFDUCxFQUFDOztTQUNKLEVBMUJxRyxDQTBCckcsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLENBQUMsSUFBTSw4QkFBOEIsR0FBd0I7SUFDakUsSUFBSSxFQUFFLE9BQU87SUFDYixJQUFJLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxnQkFBZ0IsQ0FBQztJQUM5QyxJQUFJLEVBQUUseUJBQXlCO0lBQy9CLFFBQVEsRUFBRSxJQUFJO0NBQ2YsQ0FBQztBQUVGLE1BQU0sQ0FBQyxJQUFNLHNCQUFzQixHQUFHLFVBQUMsT0FBb0QsSUFBMEIsT0FBQSxDQUFDO0lBQ3BILFlBQVksRUFBRSxVQUFDLFdBQVc7UUFDeEIsV0FBVyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO0lBQ3RHLENBQUM7Q0FDRixDQUFDLEVBSm1ILENBSW5ILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gXCJAYXdzLXNkay9wcm90b2NvbC1odHRwXCI7XG5pbXBvcnQge1xuICBCb2R5TGVuZ3RoQ2FsY3VsYXRvcixcbiAgQnVpbGRIYW5kbGVyLFxuICBCdWlsZEhhbmRsZXJBcmd1bWVudHMsXG4gIEJ1aWxkSGFuZGxlck9wdGlvbnMsXG4gIEJ1aWxkSGFuZGxlck91dHB1dCxcbiAgQnVpbGRNaWRkbGV3YXJlLFxuICBNZXRhZGF0YUJlYXJlcixcbiAgUGx1Z2dhYmxlLFxufSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcblxuY29uc3QgQ09OVEVOVF9MRU5HVEhfSEVBREVSID0gXCJjb250ZW50LWxlbmd0aFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29udGVudExlbmd0aE1pZGRsZXdhcmUoYm9keUxlbmd0aENoZWNrZXI6IEJvZHlMZW5ndGhDYWxjdWxhdG9yKTogQnVpbGRNaWRkbGV3YXJlPGFueSwgYW55PiB7XG4gIHJldHVybiA8T3V0cHV0IGV4dGVuZHMgTWV0YWRhdGFCZWFyZXI+KG5leHQ6IEJ1aWxkSGFuZGxlcjxhbnksIE91dHB1dD4pOiBCdWlsZEhhbmRsZXI8YW55LCBPdXRwdXQ+ID0+IGFzeW5jIChcbiAgICBhcmdzOiBCdWlsZEhhbmRsZXJBcmd1bWVudHM8YW55PlxuICApOiBQcm9taXNlPEJ1aWxkSGFuZGxlck91dHB1dDxPdXRwdXQ+PiA9PiB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGFyZ3MucmVxdWVzdDtcbiAgICBpZiAoSHR0cFJlcXVlc3QuaXNJbnN0YW5jZShyZXF1ZXN0KSkge1xuICAgICAgY29uc3QgeyBib2R5LCBoZWFkZXJzIH0gPSByZXF1ZXN0O1xuICAgICAgaWYgKFxuICAgICAgICBib2R5ICYmXG4gICAgICAgIE9iamVjdC5rZXlzKGhlYWRlcnMpXG4gICAgICAgICAgLm1hcCgoc3RyKSA9PiBzdHIudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICAuaW5kZXhPZihDT05URU5UX0xFTkdUSF9IRUFERVIpID09PSAtMVxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGJvZHlMZW5ndGhDaGVja2VyKGJvZHkpO1xuICAgICAgICBpZiAobGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXF1ZXN0LmhlYWRlcnMgPSB7XG4gICAgICAgICAgICAuLi5yZXF1ZXN0LmhlYWRlcnMsXG4gICAgICAgICAgICBbQ09OVEVOVF9MRU5HVEhfSEVBREVSXTogU3RyaW5nKGxlbmd0aCksXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXh0KHtcbiAgICAgIC4uLmFyZ3MsXG4gICAgICByZXF1ZXN0LFxuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgY29udGVudExlbmd0aE1pZGRsZXdhcmVPcHRpb25zOiBCdWlsZEhhbmRsZXJPcHRpb25zID0ge1xuICBzdGVwOiBcImJ1aWxkXCIsXG4gIHRhZ3M6IFtcIlNFVF9DT05URU5UX0xFTkdUSFwiLCBcIkNPTlRFTlRfTEVOR1RIXCJdLFxuICBuYW1lOiBcImNvbnRlbnRMZW5ndGhNaWRkbGV3YXJlXCIsXG4gIG92ZXJyaWRlOiB0cnVlLFxufTtcblxuZXhwb3J0IGNvbnN0IGdldENvbnRlbnRMZW5ndGhQbHVnaW4gPSAob3B0aW9uczogeyBib2R5TGVuZ3RoQ2hlY2tlcjogQm9keUxlbmd0aENhbGN1bGF0b3IgfSk6IFBsdWdnYWJsZTxhbnksIGFueT4gPT4gKHtcbiAgYXBwbHlUb1N0YWNrOiAoY2xpZW50U3RhY2spID0+IHtcbiAgICBjbGllbnRTdGFjay5hZGQoY29udGVudExlbmd0aE1pZGRsZXdhcmUob3B0aW9ucy5ib2R5TGVuZ3RoQ2hlY2tlciksIGNvbnRlbnRMZW5ndGhNaWRkbGV3YXJlT3B0aW9ucyk7XG4gIH0sXG59KTtcbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-host-header/dist/es/index.js":
/*!********************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-host-header/dist/es/index.js ***!
  \********************************************************************************************************/
/*! exports provided: resolveHostHeaderConfig, hostHeaderMiddleware, hostHeaderMiddlewareOptions, getHostHeaderPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveHostHeaderConfig", function() { return resolveHostHeaderConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hostHeaderMiddleware", function() { return hostHeaderMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hostHeaderMiddlewareOptions", function() { return hostHeaderMiddlewareOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHostHeaderPlugin", function() { return getHostHeaderPlugin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/protocol-http */ "../../node_modules/@aws-sdk/protocol-http/dist/es/index.js");


function resolveHostHeaderConfig(input) {
    return input;
}
var hostHeaderMiddleware = function (options) { return function (next) { return function (args) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var request, _a, handlerProtocol;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
        if (!_aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"].isInstance(args.request))
            return [2 /*return*/, next(args)];
        request = args.request;
        _a = (options.requestHandler.metadata || {}).handlerProtocol, handlerProtocol = _a === void 0 ? "" : _a;
        //For H2 request, remove 'host' header and use ':authority' header instead
        //reference: https://nodejs.org/dist/latest-v13.x/docs/api/errors.html#ERR_HTTP2_INVALID_CONNECTION_HEADERS
        if (handlerProtocol.indexOf("h2") >= 0 && !request.headers[":authority"]) {
            delete request.headers["host"];
            request.headers[":authority"] = "";
            //non-H2 request and 'host' header is not set, set the 'host' header to request's hostname.
        }
        else if (!request.headers["host"]) {
            request.headers["host"] = request.hostname;
        }
        return [2 /*return*/, next(args)];
    });
}); }; }; };
var hostHeaderMiddlewareOptions = {
    name: "hostHeaderMiddleware",
    step: "build",
    priority: "low",
    tags: ["HOST"],
    override: true,
};
var getHostHeaderPlugin = function (options) { return ({
    applyToStack: function (clientStack) {
        clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);
    },
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQVVyRCxNQUFNLFVBQVUsdUJBQXVCLENBQ3JDLEtBQXFEO0lBRXJELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQUVELE1BQU0sQ0FBQyxJQUFNLG9CQUFvQixHQUFHLFVBQ2xDLE9BQWlDLElBQ0UsT0FBQSxVQUFDLElBQUksSUFBSyxPQUFBLFVBQU8sSUFBSTs7O1FBQ3hELElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFBRSxzQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUM7UUFDckQsT0FBTyxHQUFLLElBQUksUUFBVCxDQUFVO1FBQ2pCLEtBQXlCLENBQUEsT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFBLGdCQUExQyxFQUFwQixlQUFlLG1CQUFHLEVBQUUsS0FBQSxDQUEyQztRQUN2RSwwRUFBMEU7UUFDMUUsMkdBQTJHO1FBQzNHLElBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ3hFLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvQixPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNuQywyRkFBMkY7U0FDNUY7YUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNuQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7U0FDNUM7UUFDRCxzQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUM7O0tBQ25CLEVBZDhDLENBYzlDLEVBZG9DLENBY3BDLENBQUM7QUFFRixNQUFNLENBQUMsSUFBTSwyQkFBMkIsR0FBMkM7SUFDakYsSUFBSSxFQUFFLHNCQUFzQjtJQUM1QixJQUFJLEVBQUUsT0FBTztJQUNiLFFBQVEsRUFBRSxLQUFLO0lBQ2YsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ2QsUUFBUSxFQUFFLElBQUk7Q0FDZixDQUFDO0FBRUYsTUFBTSxDQUFDLElBQU0sbUJBQW1CLEdBQUcsVUFBQyxPQUFpQyxJQUEwQixPQUFBLENBQUM7SUFDOUYsWUFBWSxFQUFFLFVBQUMsV0FBVztRQUN4QixXQUFXLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxFQUFFLDJCQUEyQixDQUFDLENBQUM7SUFDOUUsQ0FBQztDQUNGLENBQUMsRUFKNkYsQ0FJN0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSBcIkBhd3Mtc2RrL3Byb3RvY29sLWh0dHBcIjtcbmltcG9ydCB7IEFic29sdXRlTG9jYXRpb24sIEJ1aWxkSGFuZGxlck9wdGlvbnMsIEJ1aWxkTWlkZGxld2FyZSwgUGx1Z2dhYmxlLCBSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhvc3RIZWFkZXJJbnB1dENvbmZpZyB7fVxuaW50ZXJmYWNlIFByZXZpb3VzbHlSZXNvbHZlZCB7XG4gIHJlcXVlc3RIYW5kbGVyOiBSZXF1ZXN0SGFuZGxlcjxhbnksIGFueT47XG59XG5leHBvcnQgaW50ZXJmYWNlIEhvc3RIZWFkZXJSZXNvbHZlZENvbmZpZyB7XG4gIHJlcXVlc3RIYW5kbGVyOiBSZXF1ZXN0SGFuZGxlcjxhbnksIGFueT47XG59XG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhvc3RIZWFkZXJDb25maWc8VD4oXG4gIGlucHV0OiBUICYgUHJldmlvdXNseVJlc29sdmVkICYgSG9zdEhlYWRlcklucHV0Q29uZmlnXG4pOiBUICYgSG9zdEhlYWRlclJlc29sdmVkQ29uZmlnIHtcbiAgcmV0dXJuIGlucHV0O1xufVxuXG5leHBvcnQgY29uc3QgaG9zdEhlYWRlck1pZGRsZXdhcmUgPSA8SW5wdXQgZXh0ZW5kcyBvYmplY3QsIE91dHB1dCBleHRlbmRzIG9iamVjdD4oXG4gIG9wdGlvbnM6IEhvc3RIZWFkZXJSZXNvbHZlZENvbmZpZ1xuKTogQnVpbGRNaWRkbGV3YXJlPElucHV0LCBPdXRwdXQ+ID0+IChuZXh0KSA9PiBhc3luYyAoYXJncykgPT4ge1xuICBpZiAoIUh0dHBSZXF1ZXN0LmlzSW5zdGFuY2UoYXJncy5yZXF1ZXN0KSkgcmV0dXJuIG5leHQoYXJncyk7XG4gIGNvbnN0IHsgcmVxdWVzdCB9ID0gYXJncztcbiAgY29uc3QgeyBoYW5kbGVyUHJvdG9jb2wgPSBcIlwiIH0gPSBvcHRpb25zLnJlcXVlc3RIYW5kbGVyLm1ldGFkYXRhIHx8IHt9O1xuICAvL0ZvciBIMiByZXF1ZXN0LCByZW1vdmUgJ2hvc3QnIGhlYWRlciBhbmQgdXNlICc6YXV0aG9yaXR5JyBoZWFkZXIgaW5zdGVhZFxuICAvL3JlZmVyZW5jZTogaHR0cHM6Ly9ub2RlanMub3JnL2Rpc3QvbGF0ZXN0LXYxMy54L2RvY3MvYXBpL2Vycm9ycy5odG1sI0VSUl9IVFRQMl9JTlZBTElEX0NPTk5FQ1RJT05fSEVBREVSU1xuICBpZiAoaGFuZGxlclByb3RvY29sLmluZGV4T2YoXCJoMlwiKSA+PSAwICYmICFyZXF1ZXN0LmhlYWRlcnNbXCI6YXV0aG9yaXR5XCJdKSB7XG4gICAgZGVsZXRlIHJlcXVlc3QuaGVhZGVyc1tcImhvc3RcIl07XG4gICAgcmVxdWVzdC5oZWFkZXJzW1wiOmF1dGhvcml0eVwiXSA9IFwiXCI7XG4gICAgLy9ub24tSDIgcmVxdWVzdCBhbmQgJ2hvc3QnIGhlYWRlciBpcyBub3Qgc2V0LCBzZXQgdGhlICdob3N0JyBoZWFkZXIgdG8gcmVxdWVzdCdzIGhvc3RuYW1lLlxuICB9IGVsc2UgaWYgKCFyZXF1ZXN0LmhlYWRlcnNbXCJob3N0XCJdKSB7XG4gICAgcmVxdWVzdC5oZWFkZXJzW1wiaG9zdFwiXSA9IHJlcXVlc3QuaG9zdG5hbWU7XG4gIH1cbiAgcmV0dXJuIG5leHQoYXJncyk7XG59O1xuXG5leHBvcnQgY29uc3QgaG9zdEhlYWRlck1pZGRsZXdhcmVPcHRpb25zOiBCdWlsZEhhbmRsZXJPcHRpb25zICYgQWJzb2x1dGVMb2NhdGlvbiA9IHtcbiAgbmFtZTogXCJob3N0SGVhZGVyTWlkZGxld2FyZVwiLFxuICBzdGVwOiBcImJ1aWxkXCIsXG4gIHByaW9yaXR5OiBcImxvd1wiLFxuICB0YWdzOiBbXCJIT1NUXCJdLFxuICBvdmVycmlkZTogdHJ1ZSxcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRIb3N0SGVhZGVyUGx1Z2luID0gKG9wdGlvbnM6IEhvc3RIZWFkZXJSZXNvbHZlZENvbmZpZyk6IFBsdWdnYWJsZTxhbnksIGFueT4gPT4gKHtcbiAgYXBwbHlUb1N0YWNrOiAoY2xpZW50U3RhY2spID0+IHtcbiAgICBjbGllbnRTdGFjay5hZGQoaG9zdEhlYWRlck1pZGRsZXdhcmUob3B0aW9ucyksIGhvc3RIZWFkZXJNaWRkbGV3YXJlT3B0aW9ucyk7XG4gIH0sXG59KTtcbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-logger/dist/es/index.js":
/*!***************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-logger/dist/es/index.js ***!
  \***************************************************************************************************/
/*! exports provided: loggerMiddleware, loggerMiddlewareOptions, getLoggerPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loggerMiddleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loggerMiddleware */ "../../node_modules/@aws-sdk/middleware-logger/dist/es/loggerMiddleware.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loggerMiddleware", function() { return _loggerMiddleware__WEBPACK_IMPORTED_MODULE_0__["loggerMiddleware"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loggerMiddlewareOptions", function() { return _loggerMiddleware__WEBPACK_IMPORTED_MODULE_0__["loggerMiddlewareOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoggerPlugin", function() { return _loggerMiddleware__WEBPACK_IMPORTED_MODULE_0__["getLoggerPlugin"]; });


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxvQkFBb0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL2xvZ2dlck1pZGRsZXdhcmVcIjtcbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-logger/dist/es/loggerMiddleware.js":
/*!**************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-logger/dist/es/loggerMiddleware.js ***!
  \**************************************************************************************************************/
/*! exports provided: loggerMiddleware, loggerMiddlewareOptions, getLoggerPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loggerMiddleware", function() { return loggerMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loggerMiddlewareOptions", function() { return loggerMiddlewareOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoggerPlugin", function() { return getLoggerPlugin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

var loggerMiddleware = function () { return function (next, context) { return function (args) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var clientName, commandName, inputFilterSensitiveLog, logger, outputFilterSensitiveLog, response, _a, $metadata, outputWithoutMetadata;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
        switch (_b.label) {
            case 0:
                clientName = context.clientName, commandName = context.commandName, inputFilterSensitiveLog = context.inputFilterSensitiveLog, logger = context.logger, outputFilterSensitiveLog = context.outputFilterSensitiveLog;
                return [4 /*yield*/, next(args)];
            case 1:
                response = _b.sent();
                if (!logger) {
                    return [2 /*return*/, response];
                }
                if (typeof logger.info === "function") {
                    _a = response.output, $metadata = _a.$metadata, outputWithoutMetadata = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["$metadata"]);
                    logger.info({
                        clientName: clientName,
                        commandName: commandName,
                        input: inputFilterSensitiveLog(args.input),
                        output: outputFilterSensitiveLog(outputWithoutMetadata),
                        metadata: $metadata,
                    });
                }
                return [2 /*return*/, response];
        }
    });
}); }; }; };
var loggerMiddlewareOptions = {
    name: "loggerMiddleware",
    tags: ["LOGGER"],
    step: "initialize",
    override: true,
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var getLoggerPlugin = function (options) { return ({
    applyToStack: function (clientStack) {
        clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
    },
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyTWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dnZXJNaWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFZQSxNQUFNLENBQUMsSUFBTSxnQkFBZ0IsR0FBRyxjQUFNLE9BQUEsVUFDcEMsSUFBb0MsRUFDcEMsT0FBZ0MsSUFDRyxPQUFBLFVBQ25DLElBQXFDOzs7OztnQkFFN0IsVUFBVSxHQUE2RSxPQUFPLFdBQXBGLEVBQUUsV0FBVyxHQUFnRSxPQUFPLFlBQXZFLEVBQUUsdUJBQXVCLEdBQXVDLE9BQU8sd0JBQTlDLEVBQUUsTUFBTSxHQUErQixPQUFPLE9BQXRDLEVBQUUsd0JBQXdCLEdBQUssT0FBTyx5QkFBWixDQUFhO2dCQUV0RixxQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUE7O2dCQUEzQixRQUFRLEdBQUcsU0FBZ0I7Z0JBRWpDLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ1gsc0JBQU8sUUFBUSxFQUFDO2lCQUNqQjtnQkFFRCxJQUFJLE9BQU8sTUFBTSxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUU7b0JBQy9CLEtBQTBDLFFBQVEsQ0FBQyxNQUFNLEVBQXZELFNBQVMsZUFBQSxFQUFLLHFCQUFxQixjQUFyQyxhQUF1QyxDQUFGLENBQXFCO29CQUNoRSxNQUFNLENBQUMsSUFBSSxDQUFDO3dCQUNWLFVBQVUsWUFBQTt3QkFDVixXQUFXLGFBQUE7d0JBQ1gsS0FBSyxFQUFFLHVCQUF1QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7d0JBQzFDLE1BQU0sRUFBRSx3QkFBd0IsQ0FBQyxxQkFBcUIsQ0FBQzt3QkFDdkQsUUFBUSxFQUFFLFNBQVM7cUJBQ3BCLENBQUMsQ0FBQztpQkFDSjtnQkFFRCxzQkFBTyxRQUFRLEVBQUM7OztLQUNqQixFQXZCb0MsQ0F1QnBDLEVBMUJxQyxDQTBCckMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxJQUFNLHVCQUF1QixHQUFnRDtJQUNsRixJQUFJLEVBQUUsa0JBQWtCO0lBQ3hCLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQztJQUNoQixJQUFJLEVBQUUsWUFBWTtJQUNsQixRQUFRLEVBQUUsSUFBSTtDQUNmLENBQUM7QUFFRiw2REFBNkQ7QUFDN0QsTUFBTSxDQUFDLElBQU0sZUFBZSxHQUFHLFVBQUMsT0FBWSxJQUEwQixPQUFBLENBQUM7SUFDckUsWUFBWSxFQUFFLFVBQUMsV0FBVztRQUN4QixXQUFXLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztJQUMvRCxDQUFDO0NBQ0YsQ0FBQyxFQUpvRSxDQUlwRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhd3Mtc2RrL3Byb3RvY29sLWh0dHBcIjtcbmltcG9ydCB7XG4gIEFic29sdXRlTG9jYXRpb24sXG4gIEhhbmRsZXJFeGVjdXRpb25Db250ZXh0LFxuICBJbml0aWFsaXplSGFuZGxlcixcbiAgSW5pdGlhbGl6ZUhhbmRsZXJBcmd1bWVudHMsXG4gIEluaXRpYWxpemVIYW5kbGVyT3B0aW9ucyxcbiAgSW5pdGlhbGl6ZUhhbmRsZXJPdXRwdXQsXG4gIE1ldGFkYXRhQmVhcmVyLFxuICBQbHVnZ2FibGUsXG59IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9ICgpID0+IDxPdXRwdXQgZXh0ZW5kcyBNZXRhZGF0YUJlYXJlciA9IE1ldGFkYXRhQmVhcmVyPihcbiAgbmV4dDogSW5pdGlhbGl6ZUhhbmRsZXI8YW55LCBPdXRwdXQ+LFxuICBjb250ZXh0OiBIYW5kbGVyRXhlY3V0aW9uQ29udGV4dFxuKTogSW5pdGlhbGl6ZUhhbmRsZXI8YW55LCBPdXRwdXQ+ID0+IGFzeW5jIChcbiAgYXJnczogSW5pdGlhbGl6ZUhhbmRsZXJBcmd1bWVudHM8YW55PlxuKTogUHJvbWlzZTxJbml0aWFsaXplSGFuZGxlck91dHB1dDxPdXRwdXQ+PiA9PiB7XG4gIGNvbnN0IHsgY2xpZW50TmFtZSwgY29tbWFuZE5hbWUsIGlucHV0RmlsdGVyU2Vuc2l0aXZlTG9nLCBsb2dnZXIsIG91dHB1dEZpbHRlclNlbnNpdGl2ZUxvZyB9ID0gY29udGV4dDtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG5leHQoYXJncyk7XG5cbiAgaWYgKCFsb2dnZXIpIHtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBpZiAodHlwZW9mIGxvZ2dlci5pbmZvID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjb25zdCB7ICRtZXRhZGF0YSwgLi4ub3V0cHV0V2l0aG91dE1ldGFkYXRhIH0gPSByZXNwb25zZS5vdXRwdXQ7XG4gICAgbG9nZ2VyLmluZm8oe1xuICAgICAgY2xpZW50TmFtZSxcbiAgICAgIGNvbW1hbmROYW1lLFxuICAgICAgaW5wdXQ6IGlucHV0RmlsdGVyU2Vuc2l0aXZlTG9nKGFyZ3MuaW5wdXQpLFxuICAgICAgb3V0cHV0OiBvdXRwdXRGaWx0ZXJTZW5zaXRpdmVMb2cob3V0cHV0V2l0aG91dE1ldGFkYXRhKSxcbiAgICAgIG1ldGFkYXRhOiAkbWV0YWRhdGEsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgY29uc3QgbG9nZ2VyTWlkZGxld2FyZU9wdGlvbnM6IEluaXRpYWxpemVIYW5kbGVyT3B0aW9ucyAmIEFic29sdXRlTG9jYXRpb24gPSB7XG4gIG5hbWU6IFwibG9nZ2VyTWlkZGxld2FyZVwiLFxuICB0YWdzOiBbXCJMT0dHRVJcIl0sXG4gIHN0ZXA6IFwiaW5pdGlhbGl6ZVwiLFxuICBvdmVycmlkZTogdHJ1ZSxcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmV4cG9ydCBjb25zdCBnZXRMb2dnZXJQbHVnaW4gPSAob3B0aW9uczogYW55KTogUGx1Z2dhYmxlPGFueSwgYW55PiA9PiAoe1xuICBhcHBseVRvU3RhY2s6IChjbGllbnRTdGFjaykgPT4ge1xuICAgIGNsaWVudFN0YWNrLmFkZChsb2dnZXJNaWRkbGV3YXJlKCksIGxvZ2dlck1pZGRsZXdhcmVPcHRpb25zKTtcbiAgfSxcbn0pO1xuIl19

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-retry/dist/es/configurations.js":
/*!***********************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-retry/dist/es/configurations.js ***!
  \***********************************************************************************************************/
/*! exports provided: ENV_MAX_ATTEMPTS, CONFIG_MAX_ATTEMPTS, NODE_MAX_ATTEMPT_CONFIG_OPTIONS, resolveRetryConfig, ENV_RETRY_MODE, CONFIG_RETRY_MODE, NODE_RETRY_MODE_CONFIG_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENV_MAX_ATTEMPTS", function() { return ENV_MAX_ATTEMPTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG_MAX_ATTEMPTS", function() { return CONFIG_MAX_ATTEMPTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NODE_MAX_ATTEMPT_CONFIG_OPTIONS", function() { return NODE_MAX_ATTEMPT_CONFIG_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveRetryConfig", function() { return resolveRetryConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENV_RETRY_MODE", function() { return ENV_RETRY_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG_RETRY_MODE", function() { return CONFIG_RETRY_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NODE_RETRY_MODE_CONFIG_OPTIONS", function() { return NODE_RETRY_MODE_CONFIG_OPTIONS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _defaultStrategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultStrategy */ "../../node_modules/@aws-sdk/middleware-retry/dist/es/defaultStrategy.js");


var ENV_MAX_ATTEMPTS = "AWS_MAX_ATTEMPTS";
var CONFIG_MAX_ATTEMPTS = "max_attempts";
var NODE_MAX_ATTEMPT_CONFIG_OPTIONS = {
    environmentVariableSelector: function (env) {
        var value = env[ENV_MAX_ATTEMPTS];
        if (!value)
            return undefined;
        var maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
            throw new Error("Environment variable " + ENV_MAX_ATTEMPTS + " mast be a number, got \"" + value + "\"");
        }
        return maxAttempt;
    },
    configFileSelector: function (profile) {
        var value = profile[CONFIG_MAX_ATTEMPTS];
        if (!value)
            return undefined;
        var maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
            throw new Error("Shared config file entry " + CONFIG_MAX_ATTEMPTS + " mast be a number, got \"" + value + "\"");
        }
        return maxAttempt;
    },
    default: _defaultStrategy__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_MAX_ATTEMPTS"],
};
var resolveRetryConfig = function (input) {
    var maxAttempts = normalizeMaxAttempts(input.maxAttempts);
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, input), { maxAttempts: maxAttempts, retryStrategy: input.retryStrategy || new _defaultStrategy__WEBPACK_IMPORTED_MODULE_1__["StandardRetryStrategy"](maxAttempts) });
};
var normalizeMaxAttempts = function (maxAttempts) {
    if (maxAttempts === void 0) { maxAttempts = _defaultStrategy__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_MAX_ATTEMPTS"]; }
    if (typeof maxAttempts === "number") {
        var promisified_1 = Promise.resolve(maxAttempts);
        return function () { return promisified_1; };
    }
    return maxAttempts;
};
var ENV_RETRY_MODE = "AWS_RETRY_MODE";
var CONFIG_RETRY_MODE = "retry_mode";
var NODE_RETRY_MODE_CONFIG_OPTIONS = {
    environmentVariableSelector: function (env) { return env[ENV_RETRY_MODE]; },
    configFileSelector: function (profile) { return profile[CONFIG_RETRY_MODE]; },
    default: _defaultStrategy__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_RETRY_MODE"],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlndXJhdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUdBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxrQkFBa0IsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXBHLE1BQU0sQ0FBQyxJQUFNLGdCQUFnQixHQUFHLGtCQUFrQixDQUFDO0FBQ25ELE1BQU0sQ0FBQyxJQUFNLG1CQUFtQixHQUFHLGNBQWMsQ0FBQztBQUVsRCxNQUFNLENBQUMsSUFBTSwrQkFBK0IsR0FBa0M7SUFDNUUsMkJBQTJCLEVBQUUsVUFBQyxHQUFHO1FBQy9CLElBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTyxTQUFTLENBQUM7UUFDN0IsSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUM1QixNQUFNLElBQUksS0FBSyxDQUFDLDBCQUF3QixnQkFBZ0IsaUNBQTJCLEtBQUssT0FBRyxDQUFDLENBQUM7U0FDOUY7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBQ0Qsa0JBQWtCLEVBQUUsVUFBQyxPQUFPO1FBQzFCLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTyxTQUFTLENBQUM7UUFDN0IsSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUM1QixNQUFNLElBQUksS0FBSyxDQUFDLDhCQUE0QixtQkFBbUIsaUNBQTJCLEtBQUssT0FBRyxDQUFDLENBQUM7U0FDckc7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBQ0QsT0FBTyxFQUFFLG9CQUFvQjtDQUM5QixDQUFDO0FBbUJGLE1BQU0sQ0FBQyxJQUFNLGtCQUFrQixHQUFHLFVBQUksS0FBZ0Q7SUFDcEYsSUFBTSxXQUFXLEdBQUcsb0JBQW9CLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVELDZCQUNLLEtBQUssS0FDUixXQUFXLGFBQUEsRUFDWCxhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWEsSUFBSSxJQUFJLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxJQUM1RTtBQUNKLENBQUMsQ0FBQztBQUVGLElBQU0sb0JBQW9CLEdBQUcsVUFBQyxXQUE2RDtJQUE3RCw0QkFBQSxFQUFBLGtDQUE2RDtJQUN6RixJQUFJLE9BQU8sV0FBVyxLQUFLLFFBQVEsRUFBRTtRQUNuQyxJQUFNLGFBQVcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sY0FBTSxPQUFBLGFBQVcsRUFBWCxDQUFXLENBQUM7S0FDMUI7SUFDRCxPQUFPLFdBQVcsQ0FBQztBQUNyQixDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsSUFBTSxjQUFjLEdBQUcsZ0JBQWdCLENBQUM7QUFDL0MsTUFBTSxDQUFDLElBQU0saUJBQWlCLEdBQUcsWUFBWSxDQUFDO0FBRTlDLE1BQU0sQ0FBQyxJQUFNLDhCQUE4QixHQUFrQztJQUMzRSwyQkFBMkIsRUFBRSxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBbkIsQ0FBbUI7SUFDekQsa0JBQWtCLEVBQUUsVUFBQyxPQUFPLElBQUssT0FBQSxPQUFPLENBQUMsaUJBQWlCLENBQUMsRUFBMUIsQ0FBMEI7SUFDM0QsT0FBTyxFQUFFLGtCQUFrQjtDQUM1QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9hZGVkQ29uZmlnU2VsZWN0b3JzIH0gZnJvbSBcIkBhd3Mtc2RrL25vZGUtY29uZmlnLXByb3ZpZGVyXCI7XG5pbXBvcnQgeyBQcm92aWRlciwgUmV0cnlTdHJhdGVneSB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuXG5pbXBvcnQgeyBERUZBVUxUX01BWF9BVFRFTVBUUywgREVGQVVMVF9SRVRSWV9NT0RFLCBTdGFuZGFyZFJldHJ5U3RyYXRlZ3kgfSBmcm9tIFwiLi9kZWZhdWx0U3RyYXRlZ3lcIjtcblxuZXhwb3J0IGNvbnN0IEVOVl9NQVhfQVRURU1QVFMgPSBcIkFXU19NQVhfQVRURU1QVFNcIjtcbmV4cG9ydCBjb25zdCBDT05GSUdfTUFYX0FUVEVNUFRTID0gXCJtYXhfYXR0ZW1wdHNcIjtcblxuZXhwb3J0IGNvbnN0IE5PREVfTUFYX0FUVEVNUFRfQ09ORklHX09QVElPTlM6IExvYWRlZENvbmZpZ1NlbGVjdG9yczxudW1iZXI+ID0ge1xuICBlbnZpcm9ubWVudFZhcmlhYmxlU2VsZWN0b3I6IChlbnYpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGVudltFTlZfTUFYX0FUVEVNUFRTXTtcbiAgICBpZiAoIXZhbHVlKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGNvbnN0IG1heEF0dGVtcHQgPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgaWYgKE51bWJlci5pc05hTihtYXhBdHRlbXB0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBFbnZpcm9ubWVudCB2YXJpYWJsZSAke0VOVl9NQVhfQVRURU1QVFN9IG1hc3QgYmUgYSBudW1iZXIsIGdvdCBcIiR7dmFsdWV9XCJgKTtcbiAgICB9XG4gICAgcmV0dXJuIG1heEF0dGVtcHQ7XG4gIH0sXG4gIGNvbmZpZ0ZpbGVTZWxlY3RvcjogKHByb2ZpbGUpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHByb2ZpbGVbQ09ORklHX01BWF9BVFRFTVBUU107XG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBjb25zdCBtYXhBdHRlbXB0ID0gcGFyc2VJbnQodmFsdWUpO1xuICAgIGlmIChOdW1iZXIuaXNOYU4obWF4QXR0ZW1wdCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgU2hhcmVkIGNvbmZpZyBmaWxlIGVudHJ5ICR7Q09ORklHX01BWF9BVFRFTVBUU30gbWFzdCBiZSBhIG51bWJlciwgZ290IFwiJHt2YWx1ZX1cImApO1xuICAgIH1cbiAgICByZXR1cm4gbWF4QXR0ZW1wdDtcbiAgfSxcbiAgZGVmYXVsdDogREVGQVVMVF9NQVhfQVRURU1QVFMsXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFJldHJ5SW5wdXRDb25maWcge1xuICAvKipcbiAgICogVGhlIG1heGltdW0gbnVtYmVyIG9mIHRpbWVzIHJlcXVlc3RzIHRoYXQgZW5jb3VudGVyIHJldHJ5YWJsZSBmYWlsdXJlcyBzaG91bGQgYmUgYXR0ZW1wdGVkLlxuICAgKi9cbiAgbWF4QXR0ZW1wdHM/OiBudW1iZXIgfCBQcm92aWRlcjxudW1iZXI+O1xuICAvKipcbiAgICogVGhlIHN0cmF0ZWd5IHRvIHJldHJ5IHRoZSByZXF1ZXN0LiBVc2luZyBidWlsdC1pbiBleHBvbmVudGlhbCBiYWNrb2ZmIHN0cmF0ZWd5IGJ5IGRlZmF1bHQuXG4gICAqL1xuICByZXRyeVN0cmF0ZWd5PzogUmV0cnlTdHJhdGVneTtcbn1cblxuaW50ZXJmYWNlIFByZXZpb3VzbHlSZXNvbHZlZCB7fVxuZXhwb3J0IGludGVyZmFjZSBSZXRyeVJlc29sdmVkQ29uZmlnIHtcbiAgbWF4QXR0ZW1wdHM6IFByb3ZpZGVyPG51bWJlcj47XG4gIHJldHJ5U3RyYXRlZ3k6IFJldHJ5U3RyYXRlZ3k7XG59XG5cbmV4cG9ydCBjb25zdCByZXNvbHZlUmV0cnlDb25maWcgPSA8VD4oaW5wdXQ6IFQgJiBQcmV2aW91c2x5UmVzb2x2ZWQgJiBSZXRyeUlucHV0Q29uZmlnKTogVCAmIFJldHJ5UmVzb2x2ZWRDb25maWcgPT4ge1xuICBjb25zdCBtYXhBdHRlbXB0cyA9IG5vcm1hbGl6ZU1heEF0dGVtcHRzKGlucHV0Lm1heEF0dGVtcHRzKTtcbiAgcmV0dXJuIHtcbiAgICAuLi5pbnB1dCxcbiAgICBtYXhBdHRlbXB0cyxcbiAgICByZXRyeVN0cmF0ZWd5OiBpbnB1dC5yZXRyeVN0cmF0ZWd5IHx8IG5ldyBTdGFuZGFyZFJldHJ5U3RyYXRlZ3kobWF4QXR0ZW1wdHMpLFxuICB9O1xufTtcblxuY29uc3Qgbm9ybWFsaXplTWF4QXR0ZW1wdHMgPSAobWF4QXR0ZW1wdHM6IG51bWJlciB8IFByb3ZpZGVyPG51bWJlcj4gPSBERUZBVUxUX01BWF9BVFRFTVBUUyk6IFByb3ZpZGVyPG51bWJlcj4gPT4ge1xuICBpZiAodHlwZW9mIG1heEF0dGVtcHRzID09PSBcIm51bWJlclwiKSB7XG4gICAgY29uc3QgcHJvbWlzaWZpZWQgPSBQcm9taXNlLnJlc29sdmUobWF4QXR0ZW1wdHMpO1xuICAgIHJldHVybiAoKSA9PiBwcm9taXNpZmllZDtcbiAgfVxuICByZXR1cm4gbWF4QXR0ZW1wdHM7XG59O1xuXG5leHBvcnQgY29uc3QgRU5WX1JFVFJZX01PREUgPSBcIkFXU19SRVRSWV9NT0RFXCI7XG5leHBvcnQgY29uc3QgQ09ORklHX1JFVFJZX01PREUgPSBcInJldHJ5X21vZGVcIjtcblxuZXhwb3J0IGNvbnN0IE5PREVfUkVUUllfTU9ERV9DT05GSUdfT1BUSU9OUzogTG9hZGVkQ29uZmlnU2VsZWN0b3JzPHN0cmluZz4gPSB7XG4gIGVudmlyb25tZW50VmFyaWFibGVTZWxlY3RvcjogKGVudikgPT4gZW52W0VOVl9SRVRSWV9NT0RFXSxcbiAgY29uZmlnRmlsZVNlbGVjdG9yOiAocHJvZmlsZSkgPT4gcHJvZmlsZVtDT05GSUdfUkVUUllfTU9ERV0sXG4gIGRlZmF1bHQ6IERFRkFVTFRfUkVUUllfTU9ERSxcbn07XG4iXX0=

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-retry/dist/es/constants.js":
/*!******************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-retry/dist/es/constants.js ***!
  \******************************************************************************************************/
/*! exports provided: DEFAULT_RETRY_DELAY_BASE, MAXIMUM_RETRY_DELAY, THROTTLING_RETRY_DELAY_BASE, INITIAL_RETRY_TOKENS, RETRY_COST, TIMEOUT_RETRY_COST, NO_RETRY_INCREMENT, INVOCATION_ID_HEADER, REQUEST_HEADER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_RETRY_DELAY_BASE", function() { return DEFAULT_RETRY_DELAY_BASE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAXIMUM_RETRY_DELAY", function() { return MAXIMUM_RETRY_DELAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THROTTLING_RETRY_DELAY_BASE", function() { return THROTTLING_RETRY_DELAY_BASE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_RETRY_TOKENS", function() { return INITIAL_RETRY_TOKENS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETRY_COST", function() { return RETRY_COST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIMEOUT_RETRY_COST", function() { return TIMEOUT_RETRY_COST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NO_RETRY_INCREMENT", function() { return NO_RETRY_INCREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVOCATION_ID_HEADER", function() { return INVOCATION_ID_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_HEADER", function() { return REQUEST_HEADER; });
/**
 * The base number of milliseconds to use in calculating a suitable cool-down
 * time when a retryable error is encountered.
 */
var DEFAULT_RETRY_DELAY_BASE = 100;
/**
 * The maximum amount of time (in milliseconds) that will be used as a delay
 * between retry attempts.
 */
var MAXIMUM_RETRY_DELAY = 20 * 1000;
/**
 * The retry delay base (in milliseconds) to use when a throttling error is
 * encountered.
 */
var THROTTLING_RETRY_DELAY_BASE = 500;
/**
 * Initial number of retry tokens in Retry Quota
 */
var INITIAL_RETRY_TOKENS = 500;
/**
 * The total amount of retry tokens to be decremented from retry token balance.
 */
var RETRY_COST = 5;
/**
 * The total amount of retry tokens to be decremented from retry token balance
 * when a throttling error is encountered.
 */
var TIMEOUT_RETRY_COST = 10;
/**
 * The total amount of retry token to be incremented from retry token balance
 * if an SDK operation invocation succeeds without requiring a retry request.
 */
var NO_RETRY_INCREMENT = 1;
/**
 * Header name for SDK invocation ID
 */
var INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
/**
 * Header name for request retry information.
 */
var REQUEST_HEADER = "amz-sdk-request";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFDSCxNQUFNLENBQUMsSUFBTSx3QkFBd0IsR0FBRyxHQUFHLENBQUM7QUFFNUM7OztHQUdHO0FBQ0gsTUFBTSxDQUFDLElBQU0sbUJBQW1CLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztBQUU3Qzs7O0dBR0c7QUFDSCxNQUFNLENBQUMsSUFBTSwyQkFBMkIsR0FBRyxHQUFHLENBQUM7QUFFL0M7O0dBRUc7QUFDSCxNQUFNLENBQUMsSUFBTSxvQkFBb0IsR0FBRyxHQUFHLENBQUM7QUFFeEM7O0dBRUc7QUFDSCxNQUFNLENBQUMsSUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBRTVCOzs7R0FHRztBQUNILE1BQU0sQ0FBQyxJQUFNLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztBQUVyQzs7O0dBR0c7QUFDSCxNQUFNLENBQUMsSUFBTSxrQkFBa0IsR0FBRyxDQUFDLENBQUM7QUFFcEM7O0dBRUc7QUFDSCxNQUFNLENBQUMsSUFBTSxvQkFBb0IsR0FBRyx1QkFBdUIsQ0FBQztBQUU1RDs7R0FFRztBQUNILE1BQU0sQ0FBQyxJQUFNLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhlIGJhc2UgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB1c2UgaW4gY2FsY3VsYXRpbmcgYSBzdWl0YWJsZSBjb29sLWRvd25cbiAqIHRpbWUgd2hlbiBhIHJldHJ5YWJsZSBlcnJvciBpcyBlbmNvdW50ZXJlZC5cbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUkVUUllfREVMQVlfQkFTRSA9IDEwMDtcblxuLyoqXG4gKiBUaGUgbWF4aW11bSBhbW91bnQgb2YgdGltZSAoaW4gbWlsbGlzZWNvbmRzKSB0aGF0IHdpbGwgYmUgdXNlZCBhcyBhIGRlbGF5XG4gKiBiZXR3ZWVuIHJldHJ5IGF0dGVtcHRzLlxuICovXG5leHBvcnQgY29uc3QgTUFYSU1VTV9SRVRSWV9ERUxBWSA9IDIwICogMTAwMDtcblxuLyoqXG4gKiBUaGUgcmV0cnkgZGVsYXkgYmFzZSAoaW4gbWlsbGlzZWNvbmRzKSB0byB1c2Ugd2hlbiBhIHRocm90dGxpbmcgZXJyb3IgaXNcbiAqIGVuY291bnRlcmVkLlxuICovXG5leHBvcnQgY29uc3QgVEhST1RUTElOR19SRVRSWV9ERUxBWV9CQVNFID0gNTAwO1xuXG4vKipcbiAqIEluaXRpYWwgbnVtYmVyIG9mIHJldHJ5IHRva2VucyBpbiBSZXRyeSBRdW90YVxuICovXG5leHBvcnQgY29uc3QgSU5JVElBTF9SRVRSWV9UT0tFTlMgPSA1MDA7XG5cbi8qKlxuICogVGhlIHRvdGFsIGFtb3VudCBvZiByZXRyeSB0b2tlbnMgdG8gYmUgZGVjcmVtZW50ZWQgZnJvbSByZXRyeSB0b2tlbiBiYWxhbmNlLlxuICovXG5leHBvcnQgY29uc3QgUkVUUllfQ09TVCA9IDU7XG5cbi8qKlxuICogVGhlIHRvdGFsIGFtb3VudCBvZiByZXRyeSB0b2tlbnMgdG8gYmUgZGVjcmVtZW50ZWQgZnJvbSByZXRyeSB0b2tlbiBiYWxhbmNlXG4gKiB3aGVuIGEgdGhyb3R0bGluZyBlcnJvciBpcyBlbmNvdW50ZXJlZC5cbiAqL1xuZXhwb3J0IGNvbnN0IFRJTUVPVVRfUkVUUllfQ09TVCA9IDEwO1xuXG4vKipcbiAqIFRoZSB0b3RhbCBhbW91bnQgb2YgcmV0cnkgdG9rZW4gdG8gYmUgaW5jcmVtZW50ZWQgZnJvbSByZXRyeSB0b2tlbiBiYWxhbmNlXG4gKiBpZiBhbiBTREsgb3BlcmF0aW9uIGludm9jYXRpb24gc3VjY2VlZHMgd2l0aG91dCByZXF1aXJpbmcgYSByZXRyeSByZXF1ZXN0LlxuICovXG5leHBvcnQgY29uc3QgTk9fUkVUUllfSU5DUkVNRU5UID0gMTtcblxuLyoqXG4gKiBIZWFkZXIgbmFtZSBmb3IgU0RLIGludm9jYXRpb24gSURcbiAqL1xuZXhwb3J0IGNvbnN0IElOVk9DQVRJT05fSURfSEVBREVSID0gXCJhbXotc2RrLWludm9jYXRpb24taWRcIjtcblxuLyoqXG4gKiBIZWFkZXIgbmFtZSBmb3IgcmVxdWVzdCByZXRyeSBpbmZvcm1hdGlvbi5cbiAqL1xuZXhwb3J0IGNvbnN0IFJFUVVFU1RfSEVBREVSID0gXCJhbXotc2RrLXJlcXVlc3RcIjtcbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-retry/dist/es/defaultRetryQuota.js":
/*!**************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-retry/dist/es/defaultRetryQuota.js ***!
  \**************************************************************************************************************/
/*! exports provided: getDefaultRetryQuota */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultRetryQuota", function() { return getDefaultRetryQuota; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "../../node_modules/@aws-sdk/middleware-retry/dist/es/constants.js");

var getDefaultRetryQuota = function (initialRetryTokens) {
    var MAX_CAPACITY = initialRetryTokens;
    var availableCapacity = initialRetryTokens;
    var getCapacityAmount = function (error) { return (error.name === "TimeoutError" ? _constants__WEBPACK_IMPORTED_MODULE_0__["TIMEOUT_RETRY_COST"] : _constants__WEBPACK_IMPORTED_MODULE_0__["RETRY_COST"]); };
    var hasRetryTokens = function (error) { return getCapacityAmount(error) <= availableCapacity; };
    var retrieveRetryTokens = function (error) {
        if (!hasRetryTokens(error)) {
            // retryStrategy should stop retrying, and return last error
            throw new Error("No retry token available");
        }
        var capacityAmount = getCapacityAmount(error);
        availableCapacity -= capacityAmount;
        return capacityAmount;
    };
    var releaseRetryTokens = function (capacityReleaseAmount) {
        availableCapacity += capacityReleaseAmount !== null && capacityReleaseAmount !== void 0 ? capacityReleaseAmount : _constants__WEBPACK_IMPORTED_MODULE_0__["NO_RETRY_INCREMENT"];
        availableCapacity = Math.min(availableCapacity, MAX_CAPACITY);
    };
    return Object.freeze({
        hasRetryTokens: hasRetryTokens,
        retrieveRetryTokens: retrieveRetryTokens,
        releaseRetryTokens: releaseRetryTokens,
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdFJldHJ5UXVvdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGVmYXVsdFJldHJ5UXVvdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUdqRixNQUFNLENBQUMsSUFBTSxvQkFBb0IsR0FBRyxVQUFDLGtCQUEwQjtJQUM3RCxJQUFNLFlBQVksR0FBRyxrQkFBa0IsQ0FBQztJQUN4QyxJQUFJLGlCQUFpQixHQUFHLGtCQUFrQixDQUFDO0lBRTNDLElBQU0saUJBQWlCLEdBQUcsVUFBQyxLQUFlLElBQUssT0FBQSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssY0FBYyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQWpFLENBQWlFLENBQUM7SUFFakgsSUFBTSxjQUFjLEdBQUcsVUFBQyxLQUFlLElBQUssT0FBQSxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxpQkFBaUIsRUFBN0MsQ0FBNkMsQ0FBQztJQUUxRixJQUFNLG1CQUFtQixHQUFHLFVBQUMsS0FBZTtRQUMxQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLDREQUE0RDtZQUM1RCxNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7U0FDN0M7UUFDRCxJQUFNLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxpQkFBaUIsSUFBSSxjQUFjLENBQUM7UUFDcEMsT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQyxDQUFDO0lBRUYsSUFBTSxrQkFBa0IsR0FBRyxVQUFDLHFCQUE4QjtRQUN4RCxpQkFBaUIsSUFBSSxxQkFBcUIsYUFBckIscUJBQXFCLGNBQXJCLHFCQUFxQixHQUFJLGtCQUFrQixDQUFDO1FBQ2pFLGlCQUFpQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDaEUsQ0FBQyxDQUFDO0lBRUYsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ25CLGNBQWMsZ0JBQUE7UUFDZCxtQkFBbUIscUJBQUE7UUFDbkIsa0JBQWtCLG9CQUFBO0tBQ25CLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNka0Vycm9yIH0gZnJvbSBcIkBhd3Mtc2RrL3NtaXRoeS1jbGllbnRcIjtcblxuaW1wb3J0IHsgTk9fUkVUUllfSU5DUkVNRU5ULCBSRVRSWV9DT1NULCBUSU1FT1VUX1JFVFJZX0NPU1QgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFJldHJ5UXVvdGEgfSBmcm9tIFwiLi9kZWZhdWx0U3RyYXRlZ3lcIjtcblxuZXhwb3J0IGNvbnN0IGdldERlZmF1bHRSZXRyeVF1b3RhID0gKGluaXRpYWxSZXRyeVRva2VuczogbnVtYmVyKTogUmV0cnlRdW90YSA9PiB7XG4gIGNvbnN0IE1BWF9DQVBBQ0lUWSA9IGluaXRpYWxSZXRyeVRva2VucztcbiAgbGV0IGF2YWlsYWJsZUNhcGFjaXR5ID0gaW5pdGlhbFJldHJ5VG9rZW5zO1xuXG4gIGNvbnN0IGdldENhcGFjaXR5QW1vdW50ID0gKGVycm9yOiBTZGtFcnJvcikgPT4gKGVycm9yLm5hbWUgPT09IFwiVGltZW91dEVycm9yXCIgPyBUSU1FT1VUX1JFVFJZX0NPU1QgOiBSRVRSWV9DT1NUKTtcblxuICBjb25zdCBoYXNSZXRyeVRva2VucyA9IChlcnJvcjogU2RrRXJyb3IpID0+IGdldENhcGFjaXR5QW1vdW50KGVycm9yKSA8PSBhdmFpbGFibGVDYXBhY2l0eTtcblxuICBjb25zdCByZXRyaWV2ZVJldHJ5VG9rZW5zID0gKGVycm9yOiBTZGtFcnJvcikgPT4ge1xuICAgIGlmICghaGFzUmV0cnlUb2tlbnMoZXJyb3IpKSB7XG4gICAgICAvLyByZXRyeVN0cmF0ZWd5IHNob3VsZCBzdG9wIHJldHJ5aW5nLCBhbmQgcmV0dXJuIGxhc3QgZXJyb3JcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHJldHJ5IHRva2VuIGF2YWlsYWJsZVwiKTtcbiAgICB9XG4gICAgY29uc3QgY2FwYWNpdHlBbW91bnQgPSBnZXRDYXBhY2l0eUFtb3VudChlcnJvcik7XG4gICAgYXZhaWxhYmxlQ2FwYWNpdHkgLT0gY2FwYWNpdHlBbW91bnQ7XG4gICAgcmV0dXJuIGNhcGFjaXR5QW1vdW50O1xuICB9O1xuXG4gIGNvbnN0IHJlbGVhc2VSZXRyeVRva2VucyA9IChjYXBhY2l0eVJlbGVhc2VBbW91bnQ/OiBudW1iZXIpID0+IHtcbiAgICBhdmFpbGFibGVDYXBhY2l0eSArPSBjYXBhY2l0eVJlbGVhc2VBbW91bnQgPz8gTk9fUkVUUllfSU5DUkVNRU5UO1xuICAgIGF2YWlsYWJsZUNhcGFjaXR5ID0gTWF0aC5taW4oYXZhaWxhYmxlQ2FwYWNpdHksIE1BWF9DQVBBQ0lUWSk7XG4gIH07XG5cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xuICAgIGhhc1JldHJ5VG9rZW5zLFxuICAgIHJldHJpZXZlUmV0cnlUb2tlbnMsXG4gICAgcmVsZWFzZVJldHJ5VG9rZW5zLFxuICB9KTtcbn07XG4iXX0=

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-retry/dist/es/defaultStrategy.js":
/*!************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-retry/dist/es/defaultStrategy.js ***!
  \************************************************************************************************************/
/*! exports provided: DEFAULT_MAX_ATTEMPTS, DEFAULT_RETRY_MODE, StandardRetryStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MAX_ATTEMPTS", function() { return DEFAULT_MAX_ATTEMPTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_RETRY_MODE", function() { return DEFAULT_RETRY_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardRetryStrategy", function() { return StandardRetryStrategy; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/protocol-http */ "../../node_modules/@aws-sdk/protocol-http/dist/es/index.js");
/* harmony import */ var _aws_sdk_service_error_classification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/service-error-classification */ "../../node_modules/@aws-sdk/service-error-classification/dist/es/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "../../node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "../../node_modules/@aws-sdk/middleware-retry/dist/es/constants.js");
/* harmony import */ var _defaultRetryQuota__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./defaultRetryQuota */ "../../node_modules/@aws-sdk/middleware-retry/dist/es/defaultRetryQuota.js");
/* harmony import */ var _delayDecider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delayDecider */ "../../node_modules/@aws-sdk/middleware-retry/dist/es/delayDecider.js");
/* harmony import */ var _retryDecider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./retryDecider */ "../../node_modules/@aws-sdk/middleware-retry/dist/es/retryDecider.js");








/**
 * The default value for how many HTTP requests an SDK should make for a
 * single SDK operation invocation before giving up
 */
var DEFAULT_MAX_ATTEMPTS = 3;
/**
 * The default retry algorithm to use.
 */
var DEFAULT_RETRY_MODE = "standard";
var StandardRetryStrategy = /** @class */ (function () {
    function StandardRetryStrategy(maxAttemptsProvider, options) {
        var _a, _b, _c;
        this.maxAttemptsProvider = maxAttemptsProvider;
        this.mode = DEFAULT_RETRY_MODE;
        this.retryDecider = (_a = options === null || options === void 0 ? void 0 : options.retryDecider) !== null && _a !== void 0 ? _a : _retryDecider__WEBPACK_IMPORTED_MODULE_7__["defaultRetryDecider"];
        this.delayDecider = (_b = options === null || options === void 0 ? void 0 : options.delayDecider) !== null && _b !== void 0 ? _b : _delayDecider__WEBPACK_IMPORTED_MODULE_6__["defaultDelayDecider"];
        this.retryQuota = (_c = options === null || options === void 0 ? void 0 : options.retryQuota) !== null && _c !== void 0 ? _c : Object(_defaultRetryQuota__WEBPACK_IMPORTED_MODULE_5__["getDefaultRetryQuota"])(_constants__WEBPACK_IMPORTED_MODULE_4__["INITIAL_RETRY_TOKENS"]);
    }
    StandardRetryStrategy.prototype.shouldRetry = function (error, attempts, maxAttempts) {
        return attempts < maxAttempts && this.retryDecider(error) && this.retryQuota.hasRetryTokens(error);
    };
    StandardRetryStrategy.prototype.getMaxAttempts = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var maxAttempts, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.maxAttemptsProvider()];
                    case 1:
                        maxAttempts = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        maxAttempts = DEFAULT_MAX_ATTEMPTS;
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, maxAttempts];
                }
            });
        });
    };
    StandardRetryStrategy.prototype.retry = function (next, args) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var retryTokenAmount, attempts, totalDelay, maxAttempts, request, _loop_1, this_1, state_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        attempts = 0;
                        totalDelay = 0;
                        return [4 /*yield*/, this.getMaxAttempts()];
                    case 1:
                        maxAttempts = _a.sent();
                        request = args.request;
                        if (_aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"].isInstance(request)) {
                            request.headers[_constants__WEBPACK_IMPORTED_MODULE_4__["INVOCATION_ID_HEADER"]] = Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])();
                        }
                        _loop_1 = function () {
                            var _a, response, output, err_1, delay_1;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _b.trys.push([0, 2, , 5]);
                                        if (_aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"].isInstance(request)) {
                                            request.headers[_constants__WEBPACK_IMPORTED_MODULE_4__["REQUEST_HEADER"]] = "attempt=" + (attempts + 1) + "; max=" + maxAttempts;
                                        }
                                        return [4 /*yield*/, next(args)];
                                    case 1:
                                        _a = _b.sent(), response = _a.response, output = _a.output;
                                        this_1.retryQuota.releaseRetryTokens(retryTokenAmount);
                                        output.$metadata.attempts = attempts + 1;
                                        output.$metadata.totalRetryDelay = totalDelay;
                                        return [2 /*return*/, { value: { response: response, output: output } }];
                                    case 2:
                                        err_1 = _b.sent();
                                        attempts++;
                                        if (!this_1.shouldRetry(err_1, attempts, maxAttempts)) return [3 /*break*/, 4];
                                        retryTokenAmount = this_1.retryQuota.retrieveRetryTokens(err_1);
                                        delay_1 = this_1.delayDecider(Object(_aws_sdk_service_error_classification__WEBPACK_IMPORTED_MODULE_2__["isThrottlingError"])(err_1) ? _constants__WEBPACK_IMPORTED_MODULE_4__["THROTTLING_RETRY_DELAY_BASE"] : _constants__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_RETRY_DELAY_BASE"], attempts);
                                        totalDelay += delay_1;
                                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, delay_1); })];
                                    case 3:
                                        _b.sent();
                                        return [2 /*return*/, "continue"];
                                    case 4:
                                        if (!err_1.$metadata) {
                                            err_1.$metadata = {};
                                        }
                                        err_1.$metadata.attempts = attempts;
                                        err_1.$metadata.totalRetryDelay = totalDelay;
                                        throw err_1;
                                    case 5: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _a.label = 2;
                    case 2:
                        if (false) {}
                        return [5 /*yield**/, _loop_1()];
                    case 3:
                        state_1 = _a.sent();
                        if (typeof state_1 === "object")
                            return [2 /*return*/, state_1.value];
                        return [3 /*break*/, 2];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return StandardRetryStrategy;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdFN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RlZmF1bHRTdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRzFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFMUIsT0FBTyxFQUNMLHdCQUF3QixFQUN4QixvQkFBb0IsRUFDcEIsb0JBQW9CLEVBQ3BCLGNBQWMsRUFDZCwyQkFBMkIsR0FDNUIsTUFBTSxhQUFhLENBQUM7QUFDckIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQ7OztHQUdHO0FBQ0gsTUFBTSxDQUFDLElBQU0sb0JBQW9CLEdBQUcsQ0FBQyxDQUFDO0FBRXRDOztHQUVHO0FBQ0gsTUFBTSxDQUFDLElBQU0sa0JBQWtCLEdBQUcsVUFBVSxDQUFDO0FBb0Q3QztJQU1FLCtCQUE2QixtQkFBcUMsRUFBRSxPQUFzQzs7UUFBN0Usd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFrQjtRQUZsRCxTQUFJLEdBQUcsa0JBQWtCLENBQUM7UUFHeEMsSUFBSSxDQUFDLFlBQVksU0FBRyxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsWUFBWSxtQ0FBSSxtQkFBbUIsQ0FBQztRQUNqRSxJQUFJLENBQUMsWUFBWSxTQUFHLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxZQUFZLG1DQUFJLG1CQUFtQixDQUFDO1FBQ2pFLElBQUksQ0FBQyxVQUFVLFNBQUcsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLFVBQVUsbUNBQUksb0JBQW9CLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRU8sMkNBQVcsR0FBbkIsVUFBb0IsS0FBZSxFQUFFLFFBQWdCLEVBQUUsV0FBbUI7UUFDeEUsT0FBTyxRQUFRLEdBQUcsV0FBVyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckcsQ0FBQztJQUVhLDhDQUFjLEdBQTVCOzs7Ozs7O3dCQUdrQixxQkFBTSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBQTs7d0JBQTlDLFdBQVcsR0FBRyxTQUFnQyxDQUFDOzs7O3dCQUUvQyxXQUFXLEdBQUcsb0JBQW9CLENBQUM7OzRCQUVyQyxzQkFBTyxXQUFXLEVBQUM7Ozs7S0FDcEI7SUFFSyxxQ0FBSyxHQUFYLFVBQ0UsSUFBbUMsRUFDbkMsSUFBcUM7Ozs7Ozt3QkFHakMsUUFBUSxHQUFHLENBQUMsQ0FBQzt3QkFDYixVQUFVLEdBQUcsQ0FBQyxDQUFDO3dCQUVDLHFCQUFNLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBQTs7d0JBQXpDLFdBQVcsR0FBRyxTQUEyQjt3QkFFdkMsT0FBTyxHQUFLLElBQUksUUFBVCxDQUFVO3dCQUN6QixJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUU7NEJBQ25DLE9BQU8sQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQzt5QkFDOUM7Ozs7Ozs7d0NBSUcsSUFBSSxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFOzRDQUNuQyxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLGNBQVcsUUFBUSxHQUFHLENBQUMsZUFBUyxXQUFhLENBQUM7eUNBQ2pGO3dDQUM0QixxQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dDQUF2QyxLQUF1QixTQUFnQixFQUFyQyxRQUFRLGNBQUEsRUFBRSxNQUFNLFlBQUE7d0NBRXhCLE9BQUssVUFBVSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7d0NBQ3JELE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7d0NBQ3pDLE1BQU0sQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQzt1RUFFdkMsRUFBRSxRQUFRLFVBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRTs7O3dDQUUzQixRQUFRLEVBQUUsQ0FBQzs2Q0FDUCxPQUFLLFdBQVcsQ0FBQyxLQUFlLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxFQUF4RCx3QkFBd0Q7d0NBQzFELGdCQUFnQixHQUFHLE9BQUssVUFBVSxDQUFDLG1CQUFtQixDQUFDLEtBQUcsQ0FBQyxDQUFDO3dDQUN0RCxVQUFRLE9BQUssWUFBWSxDQUM3QixpQkFBaUIsQ0FBQyxLQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixFQUMvRSxRQUFRLENBQ1QsQ0FBQzt3Q0FDRixVQUFVLElBQUksT0FBSyxDQUFDO3dDQUVwQixxQkFBTSxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sSUFBSyxPQUFBLFVBQVUsQ0FBQyxPQUFPLEVBQUUsT0FBSyxDQUFDLEVBQTFCLENBQTBCLENBQUMsRUFBQTs7d0NBQTFELFNBQTBELENBQUM7Ozt3Q0FJN0QsSUFBSSxDQUFDLEtBQUcsQ0FBQyxTQUFTLEVBQUU7NENBQ2xCLEtBQUcsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO3lDQUNwQjt3Q0FFRCxLQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7d0NBQ2xDLEtBQUcsQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQzt3Q0FDM0MsTUFBTSxLQUFHLENBQUM7Ozs7Ozs7OzZCQWhDUCxJQUFJOzs7Ozs7Ozs7OztLQW1DWjtJQUNILDRCQUFDO0FBQUQsQ0FBQyxBQTdFRCxJQTZFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSBcIkBhd3Mtc2RrL3Byb3RvY29sLWh0dHBcIjtcbmltcG9ydCB7IGlzVGhyb3R0bGluZ0Vycm9yIH0gZnJvbSBcIkBhd3Mtc2RrL3NlcnZpY2UtZXJyb3ItY2xhc3NpZmljYXRpb25cIjtcbmltcG9ydCB7IFNka0Vycm9yIH0gZnJvbSBcIkBhd3Mtc2RrL3NtaXRoeS1jbGllbnRcIjtcbmltcG9ydCB7IEZpbmFsaXplSGFuZGxlciwgRmluYWxpemVIYW5kbGVyQXJndW1lbnRzLCBNZXRhZGF0YUJlYXJlciwgUHJvdmlkZXIsIFJldHJ5U3RyYXRlZ3kgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcbmltcG9ydCB7IHY0IH0gZnJvbSBcInV1aWRcIjtcblxuaW1wb3J0IHtcbiAgREVGQVVMVF9SRVRSWV9ERUxBWV9CQVNFLFxuICBJTklUSUFMX1JFVFJZX1RPS0VOUyxcbiAgSU5WT0NBVElPTl9JRF9IRUFERVIsXG4gIFJFUVVFU1RfSEVBREVSLFxuICBUSFJPVFRMSU5HX1JFVFJZX0RFTEFZX0JBU0UsXG59IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdFJldHJ5UXVvdGEgfSBmcm9tIFwiLi9kZWZhdWx0UmV0cnlRdW90YVwiO1xuaW1wb3J0IHsgZGVmYXVsdERlbGF5RGVjaWRlciB9IGZyb20gXCIuL2RlbGF5RGVjaWRlclwiO1xuaW1wb3J0IHsgZGVmYXVsdFJldHJ5RGVjaWRlciB9IGZyb20gXCIuL3JldHJ5RGVjaWRlclwiO1xuXG4vKipcbiAqIFRoZSBkZWZhdWx0IHZhbHVlIGZvciBob3cgbWFueSBIVFRQIHJlcXVlc3RzIGFuIFNESyBzaG91bGQgbWFrZSBmb3IgYVxuICogc2luZ2xlIFNESyBvcGVyYXRpb24gaW52b2NhdGlvbiBiZWZvcmUgZ2l2aW5nIHVwXG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX01BWF9BVFRFTVBUUyA9IDM7XG5cbi8qKlxuICogVGhlIGRlZmF1bHQgcmV0cnkgYWxnb3JpdGhtIHRvIHVzZS5cbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUkVUUllfTU9ERSA9IFwic3RhbmRhcmRcIjtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYW4gZXJyb3IgaXMgcmV0cnlhYmxlIGJhc2VkIG9uIHRoZSBudW1iZXIgb2YgcmV0cmllc1xuICogYWxyZWFkeSBhdHRlbXB0ZWQsIHRoZSBIVFRQIHN0YXR1cyBjb2RlLCBhbmQgdGhlIGVycm9yIHJlY2VpdmVkIChpZiBhbnkpLlxuICpcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgIFRoZSBlcnJvciBlbmNvdW50ZXJlZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSZXRyeURlY2lkZXIge1xuICAoZXJyb3I6IFNka0Vycm9yKTogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHdhaXQgYmVmb3JlIHJldHJ5aW5nIGFuIGFjdGlvbi5cbiAqXG4gKiBAcGFyYW0gZGVsYXlCYXNlIFRoZSBiYXNlIGRlbGF5IChpbiBtaWxsaXNlY29uZHMpLlxuICogQHBhcmFtIGF0dGVtcHRzICBUaGUgbnVtYmVyIG9mIHRpbWVzIHRoZSBhY3Rpb24gaGFzIGFscmVhZHkgYmVlbiB0cmllZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEZWxheURlY2lkZXIge1xuICAoZGVsYXlCYXNlOiBudW1iZXIsIGF0dGVtcHRzOiBudW1iZXIpOiBudW1iZXI7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIHRoYXQgc3BlY2lmaWVzIHRoZSByZXRyeSBxdW90YSBiZWhhdmlvci5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSZXRyeVF1b3RhIHtcbiAgLyoqXG4gICAqIHJldHVybnMgdHJ1ZSBpZiByZXRyeSB0b2tlbnMgYXJlIGF2YWlsYWJsZSBmcm9tIHRoZSByZXRyeSBxdW90YSBidWNrZXQuXG4gICAqL1xuICBoYXNSZXRyeVRva2VuczogKGVycm9yOiBTZGtFcnJvcikgPT4gYm9vbGVhbjtcblxuICAvKipcbiAgICogcmV0dXJucyB0b2tlbiBhbW91bnQgZnJvbSB0aGUgcmV0cnkgcXVvdGEgYnVja2V0LlxuICAgKiB0aHJvd3MgZXJyb3IgaXMgcmV0cnkgdG9rZW5zIGFyZSBub3QgYXZhaWxhYmxlLlxuICAgKi9cbiAgcmV0cmlldmVSZXRyeVRva2VuczogKGVycm9yOiBTZGtFcnJvcikgPT4gbnVtYmVyO1xuXG4gIC8qKlxuICAgKiByZWxlYXNlcyB0b2tlbnMgYmFjayB0byB0aGUgcmV0cnkgcXVvdGEuXG4gICAqL1xuICByZWxlYXNlUmV0cnlUb2tlbnM6IChyZWxlYXNlQ2FwYWNpdHlBbW91bnQ/OiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbi8qKlxuICogU3RyYXRlZ3kgb3B0aW9ucyB0byBiZSBwYXNzZWQgdG8gU3RhbmRhcmRSZXRyeVN0cmF0ZWd5XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3RhbmRhcmRSZXRyeVN0cmF0ZWd5T3B0aW9ucyB7XG4gIHJldHJ5RGVjaWRlcj86IFJldHJ5RGVjaWRlcjtcbiAgZGVsYXlEZWNpZGVyPzogRGVsYXlEZWNpZGVyO1xuICByZXRyeVF1b3RhPzogUmV0cnlRdW90YTtcbn1cblxuZXhwb3J0IGNsYXNzIFN0YW5kYXJkUmV0cnlTdHJhdGVneSBpbXBsZW1lbnRzIFJldHJ5U3RyYXRlZ3kge1xuICBwcml2YXRlIHJldHJ5RGVjaWRlcjogUmV0cnlEZWNpZGVyO1xuICBwcml2YXRlIGRlbGF5RGVjaWRlcjogRGVsYXlEZWNpZGVyO1xuICBwcml2YXRlIHJldHJ5UXVvdGE6IFJldHJ5UXVvdGE7XG4gIHB1YmxpYyByZWFkb25seSBtb2RlID0gREVGQVVMVF9SRVRSWV9NT0RFO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgbWF4QXR0ZW1wdHNQcm92aWRlcjogUHJvdmlkZXI8bnVtYmVyPiwgb3B0aW9ucz86IFN0YW5kYXJkUmV0cnlTdHJhdGVneU9wdGlvbnMpIHtcbiAgICB0aGlzLnJldHJ5RGVjaWRlciA9IG9wdGlvbnM/LnJldHJ5RGVjaWRlciA/PyBkZWZhdWx0UmV0cnlEZWNpZGVyO1xuICAgIHRoaXMuZGVsYXlEZWNpZGVyID0gb3B0aW9ucz8uZGVsYXlEZWNpZGVyID8/IGRlZmF1bHREZWxheURlY2lkZXI7XG4gICAgdGhpcy5yZXRyeVF1b3RhID0gb3B0aW9ucz8ucmV0cnlRdW90YSA/PyBnZXREZWZhdWx0UmV0cnlRdW90YShJTklUSUFMX1JFVFJZX1RPS0VOUyk7XG4gIH1cblxuICBwcml2YXRlIHNob3VsZFJldHJ5KGVycm9yOiBTZGtFcnJvciwgYXR0ZW1wdHM6IG51bWJlciwgbWF4QXR0ZW1wdHM6IG51bWJlcikge1xuICAgIHJldHVybiBhdHRlbXB0cyA8IG1heEF0dGVtcHRzICYmIHRoaXMucmV0cnlEZWNpZGVyKGVycm9yKSAmJiB0aGlzLnJldHJ5UXVvdGEuaGFzUmV0cnlUb2tlbnMoZXJyb3IpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBnZXRNYXhBdHRlbXB0cygpIHtcbiAgICBsZXQgbWF4QXR0ZW1wdHM6IG51bWJlcjtcbiAgICB0cnkge1xuICAgICAgbWF4QXR0ZW1wdHMgPSBhd2FpdCB0aGlzLm1heEF0dGVtcHRzUHJvdmlkZXIoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbWF4QXR0ZW1wdHMgPSBERUZBVUxUX01BWF9BVFRFTVBUUztcbiAgICB9XG4gICAgcmV0dXJuIG1heEF0dGVtcHRzO1xuICB9XG5cbiAgYXN5bmMgcmV0cnk8SW5wdXQgZXh0ZW5kcyBvYmplY3QsIE91cHV0IGV4dGVuZHMgTWV0YWRhdGFCZWFyZXI+KFxuICAgIG5leHQ6IEZpbmFsaXplSGFuZGxlcjxJbnB1dCwgT3VwdXQ+LFxuICAgIGFyZ3M6IEZpbmFsaXplSGFuZGxlckFyZ3VtZW50czxJbnB1dD5cbiAgKSB7XG4gICAgbGV0IHJldHJ5VG9rZW5BbW91bnQ7XG4gICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICBsZXQgdG90YWxEZWxheSA9IDA7XG5cbiAgICBjb25zdCBtYXhBdHRlbXB0cyA9IGF3YWl0IHRoaXMuZ2V0TWF4QXR0ZW1wdHMoKTtcblxuICAgIGNvbnN0IHsgcmVxdWVzdCB9ID0gYXJncztcbiAgICBpZiAoSHR0cFJlcXVlc3QuaXNJbnN0YW5jZShyZXF1ZXN0KSkge1xuICAgICAgcmVxdWVzdC5oZWFkZXJzW0lOVk9DQVRJT05fSURfSEVBREVSXSA9IHY0KCk7XG4gICAgfVxuXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChIdHRwUmVxdWVzdC5pc0luc3RhbmNlKHJlcXVlc3QpKSB7XG4gICAgICAgICAgcmVxdWVzdC5oZWFkZXJzW1JFUVVFU1RfSEVBREVSXSA9IGBhdHRlbXB0PSR7YXR0ZW1wdHMgKyAxfTsgbWF4PSR7bWF4QXR0ZW1wdHN9YDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHJlc3BvbnNlLCBvdXRwdXQgfSA9IGF3YWl0IG5leHQoYXJncyk7XG5cbiAgICAgICAgdGhpcy5yZXRyeVF1b3RhLnJlbGVhc2VSZXRyeVRva2VucyhyZXRyeVRva2VuQW1vdW50KTtcbiAgICAgICAgb3V0cHV0LiRtZXRhZGF0YS5hdHRlbXB0cyA9IGF0dGVtcHRzICsgMTtcbiAgICAgICAgb3V0cHV0LiRtZXRhZGF0YS50b3RhbFJldHJ5RGVsYXkgPSB0b3RhbERlbGF5O1xuXG4gICAgICAgIHJldHVybiB7IHJlc3BvbnNlLCBvdXRwdXQgfTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBhdHRlbXB0cysrO1xuICAgICAgICBpZiAodGhpcy5zaG91bGRSZXRyeShlcnIgYXMgU2RrRXJyb3IsIGF0dGVtcHRzLCBtYXhBdHRlbXB0cykpIHtcbiAgICAgICAgICByZXRyeVRva2VuQW1vdW50ID0gdGhpcy5yZXRyeVF1b3RhLnJldHJpZXZlUmV0cnlUb2tlbnMoZXJyKTtcbiAgICAgICAgICBjb25zdCBkZWxheSA9IHRoaXMuZGVsYXlEZWNpZGVyKFxuICAgICAgICAgICAgaXNUaHJvdHRsaW5nRXJyb3IoZXJyKSA/IFRIUk9UVExJTkdfUkVUUllfREVMQVlfQkFTRSA6IERFRkFVTFRfUkVUUllfREVMQVlfQkFTRSxcbiAgICAgICAgICAgIGF0dGVtcHRzXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0b3RhbERlbGF5ICs9IGRlbGF5O1xuXG4gICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgZGVsYXkpKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZXJyLiRtZXRhZGF0YSkge1xuICAgICAgICAgIGVyci4kbWV0YWRhdGEgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVyci4kbWV0YWRhdGEuYXR0ZW1wdHMgPSBhdHRlbXB0cztcbiAgICAgICAgZXJyLiRtZXRhZGF0YS50b3RhbFJldHJ5RGVsYXkgPSB0b3RhbERlbGF5O1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-retry/dist/es/delayDecider.js":
/*!*********************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-retry/dist/es/delayDecider.js ***!
  \*********************************************************************************************************/
/*! exports provided: defaultDelayDecider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultDelayDecider", function() { return defaultDelayDecider; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "../../node_modules/@aws-sdk/middleware-retry/dist/es/constants.js");

/**
 * Calculate a capped, fully-jittered exponential backoff time.
 */
var defaultDelayDecider = function (delayBase, attempts) {
    return Math.floor(Math.min(_constants__WEBPACK_IMPORTED_MODULE_0__["MAXIMUM_RETRY_DELAY"], Math.random() * Math.pow(2, attempts) * delayBase));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsYXlEZWNpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RlbGF5RGVjaWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFbEQ7O0dBRUc7QUFDSCxNQUFNLENBQUMsSUFBTSxtQkFBbUIsR0FBRyxVQUFDLFNBQWlCLEVBQUUsUUFBZ0I7SUFDckUsT0FBQSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFNBQUEsQ0FBQyxFQUFJLFFBQVEsQ0FBQSxHQUFHLFNBQVMsQ0FBQyxDQUFDO0FBQXBGLENBQW9GLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNQVhJTVVNX1JFVFJZX0RFTEFZIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogQ2FsY3VsYXRlIGEgY2FwcGVkLCBmdWxseS1qaXR0ZXJlZCBleHBvbmVudGlhbCBiYWNrb2ZmIHRpbWUuXG4gKi9cbmV4cG9ydCBjb25zdCBkZWZhdWx0RGVsYXlEZWNpZGVyID0gKGRlbGF5QmFzZTogbnVtYmVyLCBhdHRlbXB0czogbnVtYmVyKSA9PlxuICBNYXRoLmZsb29yKE1hdGgubWluKE1BWElNVU1fUkVUUllfREVMQVksIE1hdGgucmFuZG9tKCkgKiAyICoqIGF0dGVtcHRzICogZGVsYXlCYXNlKSk7XG4iXX0=

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-retry/dist/es/index.js":
/*!**************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-retry/dist/es/index.js ***!
  \**************************************************************************************************/
/*! exports provided: retryMiddleware, retryMiddlewareOptions, getRetryPlugin, omitRetryHeadersMiddleware, omitRetryHeadersMiddlewareOptions, getOmitRetryHeadersPlugin, DEFAULT_MAX_ATTEMPTS, DEFAULT_RETRY_MODE, StandardRetryStrategy, ENV_MAX_ATTEMPTS, CONFIG_MAX_ATTEMPTS, NODE_MAX_ATTEMPT_CONFIG_OPTIONS, resolveRetryConfig, ENV_RETRY_MODE, CONFIG_RETRY_MODE, NODE_RETRY_MODE_CONFIG_OPTIONS, defaultDelayDecider, defaultRetryDecider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _retryMiddleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retryMiddleware */ "../../node_modules/@aws-sdk/middleware-retry/dist/es/retryMiddleware.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "retryMiddleware", function() { return _retryMiddleware__WEBPACK_IMPORTED_MODULE_0__["retryMiddleware"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "retryMiddlewareOptions", function() { return _retryMiddleware__WEBPACK_IMPORTED_MODULE_0__["retryMiddlewareOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRetryPlugin", function() { return _retryMiddleware__WEBPACK_IMPORTED_MODULE_0__["getRetryPlugin"]; });

/* harmony import */ var _omitRetryHeadersMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./omitRetryHeadersMiddleware */ "../../node_modules/@aws-sdk/middleware-retry/dist/es/omitRetryHeadersMiddleware.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "omitRetryHeadersMiddleware", function() { return _omitRetryHeadersMiddleware__WEBPACK_IMPORTED_MODULE_1__["omitRetryHeadersMiddleware"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "omitRetryHeadersMiddlewareOptions", function() { return _omitRetryHeadersMiddleware__WEBPACK_IMPORTED_MODULE_1__["omitRetryHeadersMiddlewareOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOmitRetryHeadersPlugin", function() { return _omitRetryHeadersMiddleware__WEBPACK_IMPORTED_MODULE_1__["getOmitRetryHeadersPlugin"]; });

/* harmony import */ var _defaultStrategy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultStrategy */ "../../node_modules/@aws-sdk/middleware-retry/dist/es/defaultStrategy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MAX_ATTEMPTS", function() { return _defaultStrategy__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_MAX_ATTEMPTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_RETRY_MODE", function() { return _defaultStrategy__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_RETRY_MODE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StandardRetryStrategy", function() { return _defaultStrategy__WEBPACK_IMPORTED_MODULE_2__["StandardRetryStrategy"]; });

/* harmony import */ var _configurations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configurations */ "../../node_modules/@aws-sdk/middleware-retry/dist/es/configurations.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ENV_MAX_ATTEMPTS", function() { return _configurations__WEBPACK_IMPORTED_MODULE_3__["ENV_MAX_ATTEMPTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONFIG_MAX_ATTEMPTS", function() { return _configurations__WEBPACK_IMPORTED_MODULE_3__["CONFIG_MAX_ATTEMPTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NODE_MAX_ATTEMPT_CONFIG_OPTIONS", function() { return _configurations__WEBPACK_IMPORTED_MODULE_3__["NODE_MAX_ATTEMPT_CONFIG_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveRetryConfig", function() { return _configurations__WEBPACK_IMPORTED_MODULE_3__["resolveRetryConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ENV_RETRY_MODE", function() { return _configurations__WEBPACK_IMPORTED_MODULE_3__["ENV_RETRY_MODE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONFIG_RETRY_MODE", function() { return _configurations__WEBPACK_IMPORTED_MODULE_3__["CONFIG_RETRY_MODE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NODE_RETRY_MODE_CONFIG_OPTIONS", function() { return _configurations__WEBPACK_IMPORTED_MODULE_3__["NODE_RETRY_MODE_CONFIG_OPTIONS"]; });

/* harmony import */ var _delayDecider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delayDecider */ "../../node_modules/@aws-sdk/middleware-retry/dist/es/delayDecider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultDelayDecider", function() { return _delayDecider__WEBPACK_IMPORTED_MODULE_4__["defaultDelayDecider"]; });

/* harmony import */ var _retryDecider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./retryDecider */ "../../node_modules/@aws-sdk/middleware-retry/dist/es/retryDecider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultRetryDecider", function() { return _retryDecider__WEBPACK_IMPORTED_MODULE_5__["defaultRetryDecider"]; });







//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxtQkFBbUIsQ0FBQztBQUNsQyxjQUFjLDhCQUE4QixDQUFDO0FBQzdDLGNBQWMsbUJBQW1CLENBQUM7QUFDbEMsY0FBYyxrQkFBa0IsQ0FBQztBQUNqQyxjQUFjLGdCQUFnQixDQUFDO0FBQy9CLGNBQWMsZ0JBQWdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLi9yZXRyeU1pZGRsZXdhcmVcIjtcbmV4cG9ydCAqIGZyb20gXCIuL29taXRSZXRyeUhlYWRlcnNNaWRkbGV3YXJlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9kZWZhdWx0U3RyYXRlZ3lcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2NvbmZpZ3VyYXRpb25zXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9kZWxheURlY2lkZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3JldHJ5RGVjaWRlclwiO1xuIl19

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-retry/dist/es/omitRetryHeadersMiddleware.js":
/*!***********************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-retry/dist/es/omitRetryHeadersMiddleware.js ***!
  \***********************************************************************************************************************/
/*! exports provided: omitRetryHeadersMiddleware, omitRetryHeadersMiddlewareOptions, getOmitRetryHeadersPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "omitRetryHeadersMiddleware", function() { return omitRetryHeadersMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "omitRetryHeadersMiddlewareOptions", function() { return omitRetryHeadersMiddlewareOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOmitRetryHeadersPlugin", function() { return getOmitRetryHeadersPlugin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/protocol-http */ "../../node_modules/@aws-sdk/protocol-http/dist/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "../../node_modules/@aws-sdk/middleware-retry/dist/es/constants.js");



var omitRetryHeadersMiddleware = function () { return function (next) { return function (args) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var request;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        request = args.request;
        if (_aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"].isInstance(request)) {
            delete request.headers[_constants__WEBPACK_IMPORTED_MODULE_2__["INVOCATION_ID_HEADER"]];
            delete request.headers[_constants__WEBPACK_IMPORTED_MODULE_2__["REQUEST_HEADER"]];
        }
        return [2 /*return*/, next(args)];
    });
}); }; }; };
var omitRetryHeadersMiddlewareOptions = {
    name: "omitRetryHeadersMiddleware",
    tags: ["RETRY", "HEADERS", "OMIT_RETRY_HEADERS"],
    relation: "before",
    toMiddleware: "awsAuthMiddleware",
    override: true,
};
var getOmitRetryHeadersPlugin = function (options) { return ({
    applyToStack: function (clientStack) {
        clientStack.addRelativeTo(omitRetryHeadersMiddleware(), omitRetryHeadersMiddlewareOptions);
    },
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib21pdFJldHJ5SGVhZGVyc01pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvb21pdFJldHJ5SGVhZGVyc01pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQVVyRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRW5FLE1BQU0sQ0FBQyxJQUFNLDBCQUEwQixHQUFHLGNBQU0sT0FBQSxVQUM5QyxJQUFrQyxJQUNELE9BQUEsVUFDakMsSUFBbUM7OztRQUUzQixPQUFPLEdBQUssSUFBSSxRQUFULENBQVU7UUFDekIsSUFBSSxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ25DLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQzdDLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUN4QztRQUNELHNCQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQzs7S0FDbkIsRUFUa0MsQ0FTbEMsRUFYK0MsQ0FXL0MsQ0FBQztBQUVGLE1BQU0sQ0FBQyxJQUFNLGlDQUFpQyxHQUE4QjtJQUMxRSxJQUFJLEVBQUUsNEJBQTRCO0lBQ2xDLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsb0JBQW9CLENBQUM7SUFDaEQsUUFBUSxFQUFFLFFBQVE7SUFDbEIsWUFBWSxFQUFFLG1CQUFtQjtJQUNqQyxRQUFRLEVBQUUsSUFBSTtDQUNmLENBQUM7QUFFRixNQUFNLENBQUMsSUFBTSx5QkFBeUIsR0FBRyxVQUFDLE9BQWdCLElBQTBCLE9BQUEsQ0FBQztJQUNuRixZQUFZLEVBQUUsVUFBQyxXQUFXO1FBQ3hCLFdBQVcsQ0FBQyxhQUFhLENBQUMsMEJBQTBCLEVBQUUsRUFBRSxpQ0FBaUMsQ0FBQyxDQUFDO0lBQzdGLENBQUM7Q0FDRixDQUFDLEVBSmtGLENBSWxGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gXCJAYXdzLXNkay9wcm90b2NvbC1odHRwXCI7XG5pbXBvcnQge1xuICBGaW5hbGl6ZUhhbmRsZXIsXG4gIEZpbmFsaXplSGFuZGxlckFyZ3VtZW50cyxcbiAgRmluYWxpemVIYW5kbGVyT3V0cHV0LFxuICBNZXRhZGF0YUJlYXJlcixcbiAgUGx1Z2dhYmxlLFxuICBSZWxhdGl2ZU1pZGRsZXdhcmVPcHRpb25zLFxufSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcblxuaW1wb3J0IHsgSU5WT0NBVElPTl9JRF9IRUFERVIsIFJFUVVFU1RfSEVBREVSIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBvbWl0UmV0cnlIZWFkZXJzTWlkZGxld2FyZSA9ICgpID0+IDxPdXRwdXQgZXh0ZW5kcyBNZXRhZGF0YUJlYXJlciA9IE1ldGFkYXRhQmVhcmVyPihcbiAgbmV4dDogRmluYWxpemVIYW5kbGVyPGFueSwgT3V0cHV0PlxuKTogRmluYWxpemVIYW5kbGVyPGFueSwgT3V0cHV0PiA9PiBhc3luYyAoXG4gIGFyZ3M6IEZpbmFsaXplSGFuZGxlckFyZ3VtZW50czxhbnk+XG4pOiBQcm9taXNlPEZpbmFsaXplSGFuZGxlck91dHB1dDxPdXRwdXQ+PiA9PiB7XG4gIGNvbnN0IHsgcmVxdWVzdCB9ID0gYXJncztcbiAgaWYgKEh0dHBSZXF1ZXN0LmlzSW5zdGFuY2UocmVxdWVzdCkpIHtcbiAgICBkZWxldGUgcmVxdWVzdC5oZWFkZXJzW0lOVk9DQVRJT05fSURfSEVBREVSXTtcbiAgICBkZWxldGUgcmVxdWVzdC5oZWFkZXJzW1JFUVVFU1RfSEVBREVSXTtcbiAgfVxuICByZXR1cm4gbmV4dChhcmdzKTtcbn07XG5cbmV4cG9ydCBjb25zdCBvbWl0UmV0cnlIZWFkZXJzTWlkZGxld2FyZU9wdGlvbnM6IFJlbGF0aXZlTWlkZGxld2FyZU9wdGlvbnMgPSB7XG4gIG5hbWU6IFwib21pdFJldHJ5SGVhZGVyc01pZGRsZXdhcmVcIixcbiAgdGFnczogW1wiUkVUUllcIiwgXCJIRUFERVJTXCIsIFwiT01JVF9SRVRSWV9IRUFERVJTXCJdLFxuICByZWxhdGlvbjogXCJiZWZvcmVcIixcbiAgdG9NaWRkbGV3YXJlOiBcImF3c0F1dGhNaWRkbGV3YXJlXCIsXG4gIG92ZXJyaWRlOiB0cnVlLFxufTtcblxuZXhwb3J0IGNvbnN0IGdldE9taXRSZXRyeUhlYWRlcnNQbHVnaW4gPSAob3B0aW9uczogdW5rbm93bik6IFBsdWdnYWJsZTxhbnksIGFueT4gPT4gKHtcbiAgYXBwbHlUb1N0YWNrOiAoY2xpZW50U3RhY2spID0+IHtcbiAgICBjbGllbnRTdGFjay5hZGRSZWxhdGl2ZVRvKG9taXRSZXRyeUhlYWRlcnNNaWRkbGV3YXJlKCksIG9taXRSZXRyeUhlYWRlcnNNaWRkbGV3YXJlT3B0aW9ucyk7XG4gIH0sXG59KTtcbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-retry/dist/es/retryDecider.js":
/*!*********************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-retry/dist/es/retryDecider.js ***!
  \*********************************************************************************************************/
/*! exports provided: defaultRetryDecider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRetryDecider", function() { return defaultRetryDecider; });
/* harmony import */ var _aws_sdk_service_error_classification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/service-error-classification */ "../../node_modules/@aws-sdk/service-error-classification/dist/es/index.js");

var defaultRetryDecider = function (error) {
    if (!error) {
        return false;
    }
    return Object(_aws_sdk_service_error_classification__WEBPACK_IMPORTED_MODULE_0__["isRetryableByTrait"])(error) || Object(_aws_sdk_service_error_classification__WEBPACK_IMPORTED_MODULE_0__["isClockSkewError"])(error) || Object(_aws_sdk_service_error_classification__WEBPACK_IMPORTED_MODULE_0__["isThrottlingError"])(error) || Object(_aws_sdk_service_error_classification__WEBPACK_IMPORTED_MODULE_0__["isTransientError"])(error);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0cnlEZWNpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JldHJ5RGVjaWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixpQkFBaUIsRUFDakIsZ0JBQWdCLEdBQ2pCLE1BQU0sdUNBQXVDLENBQUM7QUFHL0MsTUFBTSxDQUFDLElBQU0sbUJBQW1CLEdBQUcsVUFBQyxLQUFlO0lBQ2pELElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDVixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsT0FBTyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNySCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBpc0Nsb2NrU2tld0Vycm9yLFxuICBpc1JldHJ5YWJsZUJ5VHJhaXQsXG4gIGlzVGhyb3R0bGluZ0Vycm9yLFxuICBpc1RyYW5zaWVudEVycm9yLFxufSBmcm9tIFwiQGF3cy1zZGsvc2VydmljZS1lcnJvci1jbGFzc2lmaWNhdGlvblwiO1xuaW1wb3J0IHsgU2RrRXJyb3IgfSBmcm9tIFwiQGF3cy1zZGsvc21pdGh5LWNsaWVudFwiO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFJldHJ5RGVjaWRlciA9IChlcnJvcjogU2RrRXJyb3IpID0+IHtcbiAgaWYgKCFlcnJvcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBpc1JldHJ5YWJsZUJ5VHJhaXQoZXJyb3IpIHx8IGlzQ2xvY2tTa2V3RXJyb3IoZXJyb3IpIHx8IGlzVGhyb3R0bGluZ0Vycm9yKGVycm9yKSB8fCBpc1RyYW5zaWVudEVycm9yKGVycm9yKTtcbn07XG4iXX0=

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-retry/dist/es/retryMiddleware.js":
/*!************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-retry/dist/es/retryMiddleware.js ***!
  \************************************************************************************************************/
/*! exports provided: retryMiddleware, retryMiddlewareOptions, getRetryPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retryMiddleware", function() { return retryMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retryMiddlewareOptions", function() { return retryMiddlewareOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRetryPlugin", function() { return getRetryPlugin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

var retryMiddleware = function (options) { return function (next, context) { return function (args) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var _a;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
        if ((_a = options === null || options === void 0 ? void 0 : options.retryStrategy) === null || _a === void 0 ? void 0 : _a.mode)
            context.userAgent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])((context.userAgent || []), [["cfg/retry-mode", options.retryStrategy.mode]]);
        return [2 /*return*/, options.retryStrategy.retry(next, args)];
    });
}); }; }; };
var retryMiddlewareOptions = {
    name: "retryMiddleware",
    tags: ["RETRY"],
    step: "finalizeRequest",
    priority: "high",
    override: true,
};
var getRetryPlugin = function (options) { return ({
    applyToStack: function (clientStack) {
        clientStack.add(retryMiddleware(options), retryMiddlewareOptions);
    },
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0cnlNaWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JldHJ5TWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBYUEsTUFBTSxDQUFDLElBQU0sZUFBZSxHQUFHLFVBQUMsT0FBNEIsSUFBSyxPQUFBLFVBQy9ELElBQWtDLEVBQ2xDLE9BQWdDLElBQ0MsT0FBQSxVQUNqQyxJQUFtQzs7O1FBRW5DLFVBQUksT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLGFBQWEsMENBQUUsSUFBSTtZQUM5QixPQUFPLENBQUMsU0FBUyxZQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsR0FBRSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQztRQUNyRyxzQkFBTyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUM7O0tBQ2hELEVBTmtDLENBTWxDLEVBVGdFLENBU2hFLENBQUM7QUFFRixNQUFNLENBQUMsSUFBTSxzQkFBc0IsR0FBcUQ7SUFDdEYsSUFBSSxFQUFFLGlCQUFpQjtJQUN2QixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUM7SUFDZixJQUFJLEVBQUUsaUJBQWlCO0lBQ3ZCLFFBQVEsRUFBRSxNQUFNO0lBQ2hCLFFBQVEsRUFBRSxJQUFJO0NBQ2YsQ0FBQztBQUVGLE1BQU0sQ0FBQyxJQUFNLGNBQWMsR0FBRyxVQUFDLE9BQTRCLElBQTBCLE9BQUEsQ0FBQztJQUNwRixZQUFZLEVBQUUsVUFBQyxXQUFXO1FBQ3hCLFdBQVcsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxFQUFFLHNCQUFzQixDQUFDLENBQUM7SUFDcEUsQ0FBQztDQUNGLENBQUMsRUFKbUYsQ0FJbkYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFic29sdXRlTG9jYXRpb24sXG4gIEZpbmFsaXplSGFuZGxlcixcbiAgRmluYWxpemVIYW5kbGVyQXJndW1lbnRzLFxuICBGaW5hbGl6ZUhhbmRsZXJPdXRwdXQsXG4gIEZpbmFsaXplUmVxdWVzdEhhbmRsZXJPcHRpb25zLFxuICBIYW5kbGVyRXhlY3V0aW9uQ29udGV4dCxcbiAgTWV0YWRhdGFCZWFyZXIsXG4gIFBsdWdnYWJsZSxcbn0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5cbmltcG9ydCB7IFJldHJ5UmVzb2x2ZWRDb25maWcgfSBmcm9tIFwiLi9jb25maWd1cmF0aW9uc1wiO1xuXG5leHBvcnQgY29uc3QgcmV0cnlNaWRkbGV3YXJlID0gKG9wdGlvbnM6IFJldHJ5UmVzb2x2ZWRDb25maWcpID0+IDxPdXRwdXQgZXh0ZW5kcyBNZXRhZGF0YUJlYXJlciA9IE1ldGFkYXRhQmVhcmVyPihcbiAgbmV4dDogRmluYWxpemVIYW5kbGVyPGFueSwgT3V0cHV0PixcbiAgY29udGV4dDogSGFuZGxlckV4ZWN1dGlvbkNvbnRleHRcbik6IEZpbmFsaXplSGFuZGxlcjxhbnksIE91dHB1dD4gPT4gYXN5bmMgKFxuICBhcmdzOiBGaW5hbGl6ZUhhbmRsZXJBcmd1bWVudHM8YW55PlxuKTogUHJvbWlzZTxGaW5hbGl6ZUhhbmRsZXJPdXRwdXQ8T3V0cHV0Pj4gPT4ge1xuICBpZiAob3B0aW9ucz8ucmV0cnlTdHJhdGVneT8ubW9kZSlcbiAgICBjb250ZXh0LnVzZXJBZ2VudCA9IFsuLi4oY29udGV4dC51c2VyQWdlbnQgfHwgW10pLCBbXCJjZmcvcmV0cnktbW9kZVwiLCBvcHRpb25zLnJldHJ5U3RyYXRlZ3kubW9kZV1dO1xuICByZXR1cm4gb3B0aW9ucy5yZXRyeVN0cmF0ZWd5LnJldHJ5KG5leHQsIGFyZ3MpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJldHJ5TWlkZGxld2FyZU9wdGlvbnM6IEZpbmFsaXplUmVxdWVzdEhhbmRsZXJPcHRpb25zICYgQWJzb2x1dGVMb2NhdGlvbiA9IHtcbiAgbmFtZTogXCJyZXRyeU1pZGRsZXdhcmVcIixcbiAgdGFnczogW1wiUkVUUllcIl0sXG4gIHN0ZXA6IFwiZmluYWxpemVSZXF1ZXN0XCIsXG4gIHByaW9yaXR5OiBcImhpZ2hcIixcbiAgb3ZlcnJpZGU6IHRydWUsXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UmV0cnlQbHVnaW4gPSAob3B0aW9uczogUmV0cnlSZXNvbHZlZENvbmZpZyk6IFBsdWdnYWJsZTxhbnksIGFueT4gPT4gKHtcbiAgYXBwbHlUb1N0YWNrOiAoY2xpZW50U3RhY2spID0+IHtcbiAgICBjbGllbnRTdGFjay5hZGQocmV0cnlNaWRkbGV3YXJlKG9wdGlvbnMpLCByZXRyeU1pZGRsZXdhcmVPcHRpb25zKTtcbiAgfSxcbn0pO1xuIl19

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-serde/dist/es/deserializerMiddleware.js":
/*!*******************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-serde/dist/es/deserializerMiddleware.js ***!
  \*******************************************************************************************************************/
/*! exports provided: deserializerMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserializerMiddleware", function() { return deserializerMiddleware; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

var deserializerMiddleware = function (options, deserializer) { return function (next, context) { return function (args) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var response, parsed;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, next(args)];
            case 1:
                response = (_a.sent()).response;
                return [4 /*yield*/, deserializer(response, options)];
            case 2:
                parsed = _a.sent();
                return [2 /*return*/, {
                        response: response,
                        output: parsed,
                    }];
        }
    });
}); }; }; };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVzZXJpYWxpemVyTWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZXNlcmlhbGl6ZXJNaWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFTQSxNQUFNLENBQUMsSUFBTSxzQkFBc0IsR0FBRyxVQUNwQyxPQUFxQixFQUNyQixZQUEwRCxJQUNqQixPQUFBLFVBQ3pDLElBQXVDLEVBQ3ZDLE9BQWdDLElBQ00sT0FBQSxVQUN0QyxJQUF3Qzs7OztvQkFFbkIscUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFBOztnQkFBN0IsUUFBUSxHQUFLLENBQUEsU0FBZ0IsQ0FBQSxTQUFyQjtnQkFDRCxxQkFBTSxZQUFZLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFBOztnQkFBOUMsTUFBTSxHQUFHLFNBQXFDO2dCQUNwRCxzQkFBTzt3QkFDTCxRQUFRLFVBQUE7d0JBQ1IsTUFBTSxFQUFFLE1BQWdCO3FCQUN6QixFQUFDOzs7S0FDSCxFQVR1QyxDQVN2QyxFQVowQyxDQVkxQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGVzZXJpYWxpemVIYW5kbGVyLFxuICBEZXNlcmlhbGl6ZUhhbmRsZXJBcmd1bWVudHMsXG4gIERlc2VyaWFsaXplSGFuZGxlck91dHB1dCxcbiAgRGVzZXJpYWxpemVNaWRkbGV3YXJlLFxuICBIYW5kbGVyRXhlY3V0aW9uQ29udGV4dCxcbiAgUmVzcG9uc2VEZXNlcmlhbGl6ZXIsXG59IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgZGVzZXJpYWxpemVyTWlkZGxld2FyZSA9IDxJbnB1dCBleHRlbmRzIG9iamVjdCwgT3V0cHV0IGV4dGVuZHMgb2JqZWN0LCBSdW50aW1lVXRpbHMgPSBhbnk+KFxuICBvcHRpb25zOiBSdW50aW1lVXRpbHMsXG4gIGRlc2VyaWFsaXplcjogUmVzcG9uc2VEZXNlcmlhbGl6ZXI8YW55LCBhbnksIFJ1bnRpbWVVdGlscz5cbik6IERlc2VyaWFsaXplTWlkZGxld2FyZTxJbnB1dCwgT3V0cHV0PiA9PiAoXG4gIG5leHQ6IERlc2VyaWFsaXplSGFuZGxlcjxJbnB1dCwgT3V0cHV0PixcbiAgY29udGV4dDogSGFuZGxlckV4ZWN1dGlvbkNvbnRleHRcbik6IERlc2VyaWFsaXplSGFuZGxlcjxJbnB1dCwgT3V0cHV0PiA9PiBhc3luYyAoXG4gIGFyZ3M6IERlc2VyaWFsaXplSGFuZGxlckFyZ3VtZW50czxJbnB1dD5cbik6IFByb21pc2U8RGVzZXJpYWxpemVIYW5kbGVyT3V0cHV0PE91dHB1dD4+ID0+IHtcbiAgY29uc3QgeyByZXNwb25zZSB9ID0gYXdhaXQgbmV4dChhcmdzKTtcbiAgY29uc3QgcGFyc2VkID0gYXdhaXQgZGVzZXJpYWxpemVyKHJlc3BvbnNlLCBvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICByZXNwb25zZSxcbiAgICBvdXRwdXQ6IHBhcnNlZCBhcyBPdXRwdXQsXG4gIH07XG59O1xuIl19

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-serde/dist/es/index.js":
/*!**************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-serde/dist/es/index.js ***!
  \**************************************************************************************************/
/*! exports provided: deserializerMiddleware, serializerMiddleware, deserializerMiddlewareOption, serializerMiddlewareOption, getSerdePlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deserializerMiddleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deserializerMiddleware */ "../../node_modules/@aws-sdk/middleware-serde/dist/es/deserializerMiddleware.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deserializerMiddleware", function() { return _deserializerMiddleware__WEBPACK_IMPORTED_MODULE_0__["deserializerMiddleware"]; });

/* harmony import */ var _serializerMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serializerMiddleware */ "../../node_modules/@aws-sdk/middleware-serde/dist/es/serializerMiddleware.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serializerMiddleware", function() { return _serializerMiddleware__WEBPACK_IMPORTED_MODULE_1__["serializerMiddleware"]; });

/* harmony import */ var _serdePlugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serdePlugin */ "../../node_modules/@aws-sdk/middleware-serde/dist/es/serdePlugin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deserializerMiddlewareOption", function() { return _serdePlugin__WEBPACK_IMPORTED_MODULE_2__["deserializerMiddlewareOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serializerMiddlewareOption", function() { return _serdePlugin__WEBPACK_IMPORTED_MODULE_2__["serializerMiddlewareOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSerdePlugin", function() { return _serdePlugin__WEBPACK_IMPORTED_MODULE_2__["getSerdePlugin"]; });




//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYywwQkFBMEIsQ0FBQztBQUN6QyxjQUFjLHdCQUF3QixDQUFDO0FBQ3ZDLGNBQWMsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vZGVzZXJpYWxpemVyTWlkZGxld2FyZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vc2VyaWFsaXplck1pZGRsZXdhcmVcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NlcmRlUGx1Z2luXCI7XG4iXX0=

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-serde/dist/es/serdePlugin.js":
/*!********************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-serde/dist/es/serdePlugin.js ***!
  \********************************************************************************************************/
/*! exports provided: deserializerMiddlewareOption, serializerMiddlewareOption, getSerdePlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserializerMiddlewareOption", function() { return deserializerMiddlewareOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializerMiddlewareOption", function() { return serializerMiddlewareOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSerdePlugin", function() { return getSerdePlugin; });
/* harmony import */ var _deserializerMiddleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deserializerMiddleware */ "../../node_modules/@aws-sdk/middleware-serde/dist/es/deserializerMiddleware.js");
/* harmony import */ var _serializerMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serializerMiddleware */ "../../node_modules/@aws-sdk/middleware-serde/dist/es/serializerMiddleware.js");


var deserializerMiddlewareOption = {
    name: "deserializerMiddleware",
    step: "deserialize",
    tags: ["DESERIALIZER"],
    override: true,
};
var serializerMiddlewareOption = {
    name: "serializerMiddleware",
    step: "serialize",
    tags: ["SERIALIZER"],
    override: true,
};
function getSerdePlugin(config, serializer, deserializer) {
    return {
        applyToStack: function (commandStack) {
            commandStack.add(Object(_deserializerMiddleware__WEBPACK_IMPORTED_MODULE_0__["deserializerMiddleware"])(config, deserializer), deserializerMiddlewareOption);
            commandStack.add(Object(_serializerMiddleware__WEBPACK_IMPORTED_MODULE_1__["serializerMiddleware"])(config, serializer), serializerMiddlewareOption);
        },
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyZGVQbHVnaW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VyZGVQbHVnaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0EsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFOUQsTUFBTSxDQUFDLElBQU0sNEJBQTRCLEdBQThCO0lBQ3JFLElBQUksRUFBRSx3QkFBd0I7SUFDOUIsSUFBSSxFQUFFLGFBQWE7SUFDbkIsSUFBSSxFQUFFLENBQUMsY0FBYyxDQUFDO0lBQ3RCLFFBQVEsRUFBRSxJQUFJO0NBQ2YsQ0FBQztBQUVGLE1BQU0sQ0FBQyxJQUFNLDBCQUEwQixHQUE0QjtJQUNqRSxJQUFJLEVBQUUsc0JBQXNCO0lBQzVCLElBQUksRUFBRSxXQUFXO0lBQ2pCLElBQUksRUFBRSxDQUFDLFlBQVksQ0FBQztJQUNwQixRQUFRLEVBQUUsSUFBSTtDQUNmLENBQUM7QUFFRixNQUFNLFVBQVUsY0FBYyxDQUs1QixNQUFvQixFQUNwQixVQUFnRCxFQUNoRCxZQUFpRTtJQUVqRSxPQUFPO1FBQ0wsWUFBWSxFQUFFLFVBQUMsWUFBb0Q7WUFDakUsWUFBWSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztZQUM3RixZQUFZLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO1FBQ3pGLENBQUM7S0FDRixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERlc2VyaWFsaXplSGFuZGxlck9wdGlvbnMsXG4gIEVuZHBvaW50QmVhcmVyLFxuICBNZXRhZGF0YUJlYXJlcixcbiAgTWlkZGxld2FyZVN0YWNrLFxuICBQbHVnZ2FibGUsXG4gIFJlcXVlc3RTZXJpYWxpemVyLFxuICBSZXNwb25zZURlc2VyaWFsaXplcixcbiAgU2VyaWFsaXplSGFuZGxlck9wdGlvbnMsXG59IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuXG5pbXBvcnQgeyBkZXNlcmlhbGl6ZXJNaWRkbGV3YXJlIH0gZnJvbSBcIi4vZGVzZXJpYWxpemVyTWlkZGxld2FyZVwiO1xuaW1wb3J0IHsgc2VyaWFsaXplck1pZGRsZXdhcmUgfSBmcm9tIFwiLi9zZXJpYWxpemVyTWlkZGxld2FyZVwiO1xuXG5leHBvcnQgY29uc3QgZGVzZXJpYWxpemVyTWlkZGxld2FyZU9wdGlvbjogRGVzZXJpYWxpemVIYW5kbGVyT3B0aW9ucyA9IHtcbiAgbmFtZTogXCJkZXNlcmlhbGl6ZXJNaWRkbGV3YXJlXCIsXG4gIHN0ZXA6IFwiZGVzZXJpYWxpemVcIixcbiAgdGFnczogW1wiREVTRVJJQUxJWkVSXCJdLFxuICBvdmVycmlkZTogdHJ1ZSxcbn07XG5cbmV4cG9ydCBjb25zdCBzZXJpYWxpemVyTWlkZGxld2FyZU9wdGlvbjogU2VyaWFsaXplSGFuZGxlck9wdGlvbnMgPSB7XG4gIG5hbWU6IFwic2VyaWFsaXplck1pZGRsZXdhcmVcIixcbiAgc3RlcDogXCJzZXJpYWxpemVcIixcbiAgdGFnczogW1wiU0VSSUFMSVpFUlwiXSxcbiAgb3ZlcnJpZGU6IHRydWUsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VyZGVQbHVnaW48XG4gIElucHV0VHlwZSBleHRlbmRzIG9iamVjdCxcbiAgU2VyRGVDb250ZXh0IGV4dGVuZHMgRW5kcG9pbnRCZWFyZXIsXG4gIE91dHB1dFR5cGUgZXh0ZW5kcyBNZXRhZGF0YUJlYXJlclxuPihcbiAgY29uZmlnOiBTZXJEZUNvbnRleHQsXG4gIHNlcmlhbGl6ZXI6IFJlcXVlc3RTZXJpYWxpemVyPGFueSwgU2VyRGVDb250ZXh0PixcbiAgZGVzZXJpYWxpemVyOiBSZXNwb25zZURlc2VyaWFsaXplcjxPdXRwdXRUeXBlLCBhbnksIFNlckRlQ29udGV4dD5cbik6IFBsdWdnYWJsZTxJbnB1dFR5cGUsIE91dHB1dFR5cGU+IHtcbiAgcmV0dXJuIHtcbiAgICBhcHBseVRvU3RhY2s6IChjb21tYW5kU3RhY2s6IE1pZGRsZXdhcmVTdGFjazxJbnB1dFR5cGUsIE91dHB1dFR5cGU+KSA9PiB7XG4gICAgICBjb21tYW5kU3RhY2suYWRkKGRlc2VyaWFsaXplck1pZGRsZXdhcmUoY29uZmlnLCBkZXNlcmlhbGl6ZXIpLCBkZXNlcmlhbGl6ZXJNaWRkbGV3YXJlT3B0aW9uKTtcbiAgICAgIGNvbW1hbmRTdGFjay5hZGQoc2VyaWFsaXplck1pZGRsZXdhcmUoY29uZmlnLCBzZXJpYWxpemVyKSwgc2VyaWFsaXplck1pZGRsZXdhcmVPcHRpb24pO1xuICAgIH0sXG4gIH07XG59XG4iXX0=

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-serde/dist/es/serializerMiddleware.js":
/*!*****************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-serde/dist/es/serializerMiddleware.js ***!
  \*****************************************************************************************************************/
/*! exports provided: serializerMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializerMiddleware", function() { return serializerMiddleware; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

var serializerMiddleware = function (options, serializer) { return function (next, context) { return function (args) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var request;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, serializer(args.input, options)];
            case 1:
                request = _a.sent();
                return [2 /*return*/, next(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, args), { request: request }))];
        }
    });
}); }; }; };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWFsaXplck1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VyaWFsaXplck1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQVVBLE1BQU0sQ0FBQyxJQUFNLG9CQUFvQixHQUFHLFVBQ2xDLE9BQXFCLEVBQ3JCLFVBQWdELElBQ1QsT0FBQSxVQUN2QyxJQUFxQyxFQUNyQyxPQUFnQyxJQUNJLE9BQUEsVUFDcEMsSUFBc0M7Ozs7b0JBRXRCLHFCQUFNLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxFQUFBOztnQkFBL0MsT0FBTyxHQUFHLFNBQXFDO2dCQUNyRCxzQkFBTyxJQUFJLHVCQUNOLElBQUksS0FDUCxPQUFPLFNBQUEsSUFDUCxFQUFDOzs7S0FDSixFQVJxQyxDQVFyQyxFQVh3QyxDQVd4QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRW5kcG9pbnRCZWFyZXIsXG4gIEhhbmRsZXJFeGVjdXRpb25Db250ZXh0LFxuICBSZXF1ZXN0U2VyaWFsaXplcixcbiAgU2VyaWFsaXplSGFuZGxlcixcbiAgU2VyaWFsaXplSGFuZGxlckFyZ3VtZW50cyxcbiAgU2VyaWFsaXplSGFuZGxlck91dHB1dCxcbiAgU2VyaWFsaXplTWlkZGxld2FyZSxcbn0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBzZXJpYWxpemVyTWlkZGxld2FyZSA9IDxJbnB1dCBleHRlbmRzIG9iamVjdCwgT3V0cHV0IGV4dGVuZHMgb2JqZWN0LCBSdW50aW1lVXRpbHMgZXh0ZW5kcyBFbmRwb2ludEJlYXJlcj4oXG4gIG9wdGlvbnM6IFJ1bnRpbWVVdGlscyxcbiAgc2VyaWFsaXplcjogUmVxdWVzdFNlcmlhbGl6ZXI8YW55LCBSdW50aW1lVXRpbHM+XG4pOiBTZXJpYWxpemVNaWRkbGV3YXJlPElucHV0LCBPdXRwdXQ+ID0+IChcbiAgbmV4dDogU2VyaWFsaXplSGFuZGxlcjxJbnB1dCwgT3V0cHV0PixcbiAgY29udGV4dDogSGFuZGxlckV4ZWN1dGlvbkNvbnRleHRcbik6IFNlcmlhbGl6ZUhhbmRsZXI8SW5wdXQsIE91dHB1dD4gPT4gYXN5bmMgKFxuICBhcmdzOiBTZXJpYWxpemVIYW5kbGVyQXJndW1lbnRzPElucHV0PlxuKTogUHJvbWlzZTxTZXJpYWxpemVIYW5kbGVyT3V0cHV0PE91dHB1dD4+ID0+IHtcbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IHNlcmlhbGl6ZXIoYXJncy5pbnB1dCwgb3B0aW9ucyk7XG4gIHJldHVybiBuZXh0KHtcbiAgICAuLi5hcmdzLFxuICAgIHJlcXVlc3QsXG4gIH0pO1xufTtcbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-signing/dist/es/configurations.js":
/*!*************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-signing/dist/es/configurations.js ***!
  \*************************************************************************************************************/
/*! exports provided: resolveAwsAuthConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveAwsAuthConfig", function() { return resolveAwsAuthConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _aws_sdk_signature_v4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/signature-v4 */ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/index.js");


function resolveAwsAuthConfig(input) {
    var _this = this;
    var credentials = input.credentials || input.credentialDefaultProvider(input);
    var normalizedCreds = normalizeProvider(credentials);
    var _a = input.signingEscapePath, signingEscapePath = _a === void 0 ? true : _a, _b = input.systemClockOffset, systemClockOffset = _b === void 0 ? input.systemClockOffset || 0 : _b, sha256 = input.sha256;
    var signer;
    if (input.signer) {
        //if signer is supplied by user, normalize it to a function returning a promise for signer.
        signer = normalizeProvider(input.signer);
    }
    else {
        //construct a provider inferring signing from region.
        signer = function () {
            return normalizeProvider(input.region)()
                .then(function (region) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, input.regionInfoProvider(region)];
                    case 1: return [2 /*return*/, [(_a.sent()) || {}, region]];
                }
            }); }); })
                .then(function (_a) {
                var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), regionInfo = _b[0], region = _b[1];
                var signingRegion = regionInfo.signingRegion, signingService = regionInfo.signingService;
                //update client's singing region and signing service config if they are resolved.
                //signing region resolving order: user supplied signingRegion -> endpoints.json inferred region -> client region
                input.signingRegion = input.signingRegion || signingRegion || region;
                //signing name resolving order:
                //user supplied signingName -> endpoints.json inferred (credential scope -> model arnNamespace) -> model service id
                input.signingName = input.signingName || signingService || input.serviceId;
                return new _aws_sdk_signature_v4__WEBPACK_IMPORTED_MODULE_1__["SignatureV4"]({
                    credentials: normalizedCreds,
                    region: input.signingRegion,
                    service: input.signingName,
                    sha256: sha256,
                    uriEscapePath: signingEscapePath,
                });
            });
        };
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, input), { systemClockOffset: systemClockOffset,
        signingEscapePath: signingEscapePath, credentials: normalizedCreds, signer: signer });
}
function normalizeProvider(input) {
    if (typeof input === "object") {
        var promisified_1 = Promise.resolve(input);
        return function () { return promisified_1; };
    }
    return input;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlndXJhdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQTRDcEQsTUFBTSxVQUFVLG9CQUFvQixDQUFJLEtBQWtEO0lBQTFGLGlCQXVDQztJQXRDQyxJQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxLQUFZLENBQUMsQ0FBQztJQUN2RixJQUFNLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvQyxJQUFBLEtBQXVGLEtBQUssa0JBQXBFLEVBQXhCLGlCQUFpQixtQkFBRyxJQUFJLEtBQUEsRUFBRSxLQUE2RCxLQUFLLGtCQUFsQixFQUFoRCxpQkFBaUIsbUJBQUcsS0FBSyxDQUFDLGlCQUFpQixJQUFJLENBQUMsS0FBQSxFQUFFLE1BQU0sR0FBSyxLQUFLLE9BQVYsQ0FBVztJQUNyRyxJQUFJLE1BQStCLENBQUM7SUFDcEMsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQ2hCLDJGQUEyRjtRQUMzRixNQUFNLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzFDO1NBQU07UUFDTCxxREFBcUQ7UUFDckQsTUFBTSxHQUFHO1lBQ1AsT0FBQSxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7aUJBQzlCLElBQUksQ0FBQyxVQUFPLE1BQU07OzRCQUFPLHFCQUFNLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsRUFBQTs0QkFBeEMsc0JBQUEsQ0FBQyxDQUFDLFNBQXNDLENBQUMsSUFBSSxFQUFFLEVBQUUsTUFBTSxDQUF5QixFQUFBOztxQkFBQSxDQUFDO2lCQUN4RyxJQUFJLENBQUMsVUFBQyxFQUFvQjtvQkFBcEIsS0FBQSxhQUFvQixFQUFuQixVQUFVLFFBQUEsRUFBRSxNQUFNLFFBQUE7Z0JBQ2hCLElBQUEsYUFBYSxHQUFxQixVQUFVLGNBQS9CLEVBQUUsY0FBYyxHQUFLLFVBQVUsZUFBZixDQUFnQjtnQkFDckQsaUZBQWlGO2dCQUNqRixnSEFBZ0g7Z0JBQ2hILEtBQUssQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLGFBQWEsSUFBSSxhQUFhLElBQUksTUFBTSxDQUFDO2dCQUNyRSwrQkFBK0I7Z0JBQy9CLG1IQUFtSDtnQkFDbkgsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxJQUFJLGNBQWMsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDO2dCQUUzRSxPQUFPLElBQUksV0FBVyxDQUFDO29CQUNyQixXQUFXLEVBQUUsZUFBZTtvQkFDNUIsTUFBTSxFQUFFLEtBQUssQ0FBQyxhQUFhO29CQUMzQixPQUFPLEVBQUUsS0FBSyxDQUFDLFdBQVc7b0JBQzFCLE1BQU0sUUFBQTtvQkFDTixhQUFhLEVBQUUsaUJBQWlCO2lCQUNqQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUM7UUFsQkosQ0FrQkksQ0FBQztLQUNSO0lBRUQsNkJBQ0ssS0FBSyxLQUNSLGlCQUFpQixtQkFBQTtRQUNqQixpQkFBaUIsbUJBQUEsRUFDakIsV0FBVyxFQUFFLGVBQWUsRUFDNUIsTUFBTSxRQUFBLElBQ047QUFDSixDQUFDO0FBRUQsU0FBUyxpQkFBaUIsQ0FBSSxLQUFzQjtJQUNsRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUM3QixJQUFNLGFBQVcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLE9BQU8sY0FBTSxPQUFBLGFBQVcsRUFBWCxDQUFXLENBQUM7S0FDMUI7SUFDRCxPQUFPLEtBQW9CLENBQUM7QUFDOUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpZ25hdHVyZVY0IH0gZnJvbSBcIkBhd3Mtc2RrL3NpZ25hdHVyZS12NFwiO1xuaW1wb3J0IHsgQ3JlZGVudGlhbHMsIEhhc2hDb25zdHJ1Y3RvciwgUHJvdmlkZXIsIFJlZ2lvbkluZm8sIFJlZ2lvbkluZm9Qcm92aWRlciwgUmVxdWVzdFNpZ25lciB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEF3c0F1dGhJbnB1dENvbmZpZyB7XG4gIC8qKlxuICAgKiBUaGUgY3JlZGVudGlhbHMgdXNlZCB0byBzaWduIHJlcXVlc3RzLlxuICAgKi9cbiAgY3JlZGVudGlhbHM/OiBDcmVkZW50aWFscyB8IFByb3ZpZGVyPENyZWRlbnRpYWxzPjtcblxuICAvKipcbiAgICogVGhlIHNpZ25lciB0byB1c2Ugd2hlbiBzaWduaW5nIHJlcXVlc3RzLlxuICAgKi9cbiAgc2lnbmVyPzogUmVxdWVzdFNpZ25lciB8IFByb3ZpZGVyPFJlcXVlc3RTaWduZXI+O1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGVzY2FwZSByZXF1ZXN0IHBhdGggd2hlbiBzaWduaW5nIHRoZSByZXF1ZXN0LlxuICAgKi9cbiAgc2lnbmluZ0VzY2FwZVBhdGg/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBbiBvZmZzZXQgdmFsdWUgaW4gbWlsbGlzZWNvbmRzIHRvIGFwcGx5IHRvIGFsbCBzaWduaW5nIHRpbWVzLlxuICAgKi9cbiAgc3lzdGVtQ2xvY2tPZmZzZXQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSByZWdpb24gd2hlcmUgeW91IHdhbnQgdG8gc2lnbiB5b3VyIHJlcXVlc3QgYWdhaW5zdC4gVGhpc1xuICAgKiBjYW4gYmUgZGlmZmVyZW50IHRvIHRoZSByZWdpb24gaW4gdGhlIGVuZHBvaW50LlxuICAgKi9cbiAgc2lnbmluZ1JlZ2lvbj86IHN0cmluZztcbn1cbmludGVyZmFjZSBQcmV2aW91c2x5UmVzb2x2ZWQge1xuICBjcmVkZW50aWFsRGVmYXVsdFByb3ZpZGVyOiAoaW5wdXQ6IGFueSkgPT4gUHJvdmlkZXI8Q3JlZGVudGlhbHM+O1xuICByZWdpb246IHN0cmluZyB8IFByb3ZpZGVyPHN0cmluZz47XG4gIHJlZ2lvbkluZm9Qcm92aWRlcjogUmVnaW9uSW5mb1Byb3ZpZGVyO1xuICBzaWduaW5nTmFtZT86IHN0cmluZztcbiAgc2VydmljZUlkOiBzdHJpbmc7XG4gIHNoYTI1NjogSGFzaENvbnN0cnVjdG9yO1xufVxuZXhwb3J0IGludGVyZmFjZSBBd3NBdXRoUmVzb2x2ZWRDb25maWcge1xuICBjcmVkZW50aWFsczogUHJvdmlkZXI8Q3JlZGVudGlhbHM+O1xuICBzaWduZXI6IFByb3ZpZGVyPFJlcXVlc3RTaWduZXI+O1xuICBzaWduaW5nRXNjYXBlUGF0aDogYm9vbGVhbjtcbiAgc3lzdGVtQ2xvY2tPZmZzZXQ6IG51bWJlcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlQXdzQXV0aENvbmZpZzxUPihpbnB1dDogVCAmIEF3c0F1dGhJbnB1dENvbmZpZyAmIFByZXZpb3VzbHlSZXNvbHZlZCk6IFQgJiBBd3NBdXRoUmVzb2x2ZWRDb25maWcge1xuICBjb25zdCBjcmVkZW50aWFscyA9IGlucHV0LmNyZWRlbnRpYWxzIHx8IGlucHV0LmNyZWRlbnRpYWxEZWZhdWx0UHJvdmlkZXIoaW5wdXQgYXMgYW55KTtcbiAgY29uc3Qgbm9ybWFsaXplZENyZWRzID0gbm9ybWFsaXplUHJvdmlkZXIoY3JlZGVudGlhbHMpO1xuICBjb25zdCB7IHNpZ25pbmdFc2NhcGVQYXRoID0gdHJ1ZSwgc3lzdGVtQ2xvY2tPZmZzZXQgPSBpbnB1dC5zeXN0ZW1DbG9ja09mZnNldCB8fCAwLCBzaGEyNTYgfSA9IGlucHV0O1xuICBsZXQgc2lnbmVyOiBQcm92aWRlcjxSZXF1ZXN0U2lnbmVyPjtcbiAgaWYgKGlucHV0LnNpZ25lcikge1xuICAgIC8vaWYgc2lnbmVyIGlzIHN1cHBsaWVkIGJ5IHVzZXIsIG5vcm1hbGl6ZSBpdCB0byBhIGZ1bmN0aW9uIHJldHVybmluZyBhIHByb21pc2UgZm9yIHNpZ25lci5cbiAgICBzaWduZXIgPSBub3JtYWxpemVQcm92aWRlcihpbnB1dC5zaWduZXIpO1xuICB9IGVsc2Uge1xuICAgIC8vY29uc3RydWN0IGEgcHJvdmlkZXIgaW5mZXJyaW5nIHNpZ25pbmcgZnJvbSByZWdpb24uXG4gICAgc2lnbmVyID0gKCkgPT5cbiAgICAgIG5vcm1hbGl6ZVByb3ZpZGVyKGlucHV0LnJlZ2lvbikoKVxuICAgICAgICAudGhlbihhc3luYyAocmVnaW9uKSA9PiBbKGF3YWl0IGlucHV0LnJlZ2lvbkluZm9Qcm92aWRlcihyZWdpb24pKSB8fCB7fSwgcmVnaW9uXSBhcyBbUmVnaW9uSW5mbywgc3RyaW5nXSlcbiAgICAgICAgLnRoZW4oKFtyZWdpb25JbmZvLCByZWdpb25dKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBzaWduaW5nUmVnaW9uLCBzaWduaW5nU2VydmljZSB9ID0gcmVnaW9uSW5mbztcbiAgICAgICAgICAvL3VwZGF0ZSBjbGllbnQncyBzaW5naW5nIHJlZ2lvbiBhbmQgc2lnbmluZyBzZXJ2aWNlIGNvbmZpZyBpZiB0aGV5IGFyZSByZXNvbHZlZC5cbiAgICAgICAgICAvL3NpZ25pbmcgcmVnaW9uIHJlc29sdmluZyBvcmRlcjogdXNlciBzdXBwbGllZCBzaWduaW5nUmVnaW9uIC0+IGVuZHBvaW50cy5qc29uIGluZmVycmVkIHJlZ2lvbiAtPiBjbGllbnQgcmVnaW9uXG4gICAgICAgICAgaW5wdXQuc2lnbmluZ1JlZ2lvbiA9IGlucHV0LnNpZ25pbmdSZWdpb24gfHwgc2lnbmluZ1JlZ2lvbiB8fCByZWdpb247XG4gICAgICAgICAgLy9zaWduaW5nIG5hbWUgcmVzb2x2aW5nIG9yZGVyOlxuICAgICAgICAgIC8vdXNlciBzdXBwbGllZCBzaWduaW5nTmFtZSAtPiBlbmRwb2ludHMuanNvbiBpbmZlcnJlZCAoY3JlZGVudGlhbCBzY29wZSAtPiBtb2RlbCBhcm5OYW1lc3BhY2UpIC0+IG1vZGVsIHNlcnZpY2UgaWRcbiAgICAgICAgICBpbnB1dC5zaWduaW5nTmFtZSA9IGlucHV0LnNpZ25pbmdOYW1lIHx8IHNpZ25pbmdTZXJ2aWNlIHx8IGlucHV0LnNlcnZpY2VJZDtcblxuICAgICAgICAgIHJldHVybiBuZXcgU2lnbmF0dXJlVjQoe1xuICAgICAgICAgICAgY3JlZGVudGlhbHM6IG5vcm1hbGl6ZWRDcmVkcyxcbiAgICAgICAgICAgIHJlZ2lvbjogaW5wdXQuc2lnbmluZ1JlZ2lvbixcbiAgICAgICAgICAgIHNlcnZpY2U6IGlucHV0LnNpZ25pbmdOYW1lLFxuICAgICAgICAgICAgc2hhMjU2LFxuICAgICAgICAgICAgdXJpRXNjYXBlUGF0aDogc2lnbmluZ0VzY2FwZVBhdGgsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5pbnB1dCxcbiAgICBzeXN0ZW1DbG9ja09mZnNldCxcbiAgICBzaWduaW5nRXNjYXBlUGF0aCxcbiAgICBjcmVkZW50aWFsczogbm9ybWFsaXplZENyZWRzLFxuICAgIHNpZ25lcixcbiAgfTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUHJvdmlkZXI8VD4oaW5wdXQ6IFQgfCBQcm92aWRlcjxUPik6IFByb3ZpZGVyPFQ+IHtcbiAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gXCJvYmplY3RcIikge1xuICAgIGNvbnN0IHByb21pc2lmaWVkID0gUHJvbWlzZS5yZXNvbHZlKGlucHV0KTtcbiAgICByZXR1cm4gKCkgPT4gcHJvbWlzaWZpZWQ7XG4gIH1cbiAgcmV0dXJuIGlucHV0IGFzIFByb3ZpZGVyPFQ+O1xufVxuIl19

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-signing/dist/es/index.js":
/*!****************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-signing/dist/es/index.js ***!
  \****************************************************************************************************/
/*! exports provided: resolveAwsAuthConfig, awsAuthMiddleware, awsAuthMiddlewareOptions, getAwsAuthPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _configurations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configurations */ "../../node_modules/@aws-sdk/middleware-signing/dist/es/configurations.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveAwsAuthConfig", function() { return _configurations__WEBPACK_IMPORTED_MODULE_0__["resolveAwsAuthConfig"]; });

/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./middleware */ "../../node_modules/@aws-sdk/middleware-signing/dist/es/middleware.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "awsAuthMiddleware", function() { return _middleware__WEBPACK_IMPORTED_MODULE_1__["awsAuthMiddleware"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "awsAuthMiddlewareOptions", function() { return _middleware__WEBPACK_IMPORTED_MODULE_1__["awsAuthMiddlewareOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAwsAuthPlugin", function() { return _middleware__WEBPACK_IMPORTED_MODULE_1__["getAwsAuthPlugin"]; });



//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxrQkFBa0IsQ0FBQztBQUNqQyxjQUFjLGNBQWMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL2NvbmZpZ3VyYXRpb25zXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9taWRkbGV3YXJlXCI7XG4iXX0=

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-signing/dist/es/middleware.js":
/*!*********************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-signing/dist/es/middleware.js ***!
  \*********************************************************************************************************/
/*! exports provided: awsAuthMiddleware, awsAuthMiddlewareOptions, getAwsAuthPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "awsAuthMiddleware", function() { return awsAuthMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "awsAuthMiddlewareOptions", function() { return awsAuthMiddlewareOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAwsAuthPlugin", function() { return getAwsAuthPlugin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/protocol-http */ "../../node_modules/@aws-sdk/protocol-http/dist/es/index.js");


var isClockSkewed = function (newServerTime, systemClockOffset) {
    return Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - newServerTime) >= 300000;
};
var getSkewCorrectedDate = function (systemClockOffset) { return new Date(Date.now() + systemClockOffset); };
function awsAuthMiddleware(options) {
    return function (next, context) {
        return function (args) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                var signer, _a, output, _b, _c, headers, dateHeader, serverTime;
                var _d;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            if (!_aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"].isInstance(args.request))
                                return [2 /*return*/, next(args)];
                            if (!(typeof options.signer === "function")) return [3 /*break*/, 2];
                            return [4 /*yield*/, options.signer()];
                        case 1:
                            _a = _e.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            _a = options.signer;
                            _e.label = 3;
                        case 3:
                            signer = _a;
                            _b = next;
                            _c = [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, args)];
                            _d = {};
                            return [4 /*yield*/, signer.sign(args.request, {
                                    signingDate: new Date(Date.now() + options.systemClockOffset),
                                    signingRegion: context["signing_region"],
                                    signingService: context["signing_service"],
                                })];
                        case 4: return [4 /*yield*/, _b.apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"].apply(void 0, _c.concat([(_d.request = _e.sent(), _d)]))])];
                        case 5:
                            output = _e.sent();
                            headers = output.response.headers;
                            dateHeader = headers && (headers.date || headers.Date);
                            if (dateHeader) {
                                serverTime = Date.parse(dateHeader);
                                if (isClockSkewed(serverTime, options.systemClockOffset)) {
                                    options.systemClockOffset = serverTime - Date.now();
                                }
                            }
                            return [2 /*return*/, output];
                    }
                });
            });
        };
    };
}
var awsAuthMiddlewareOptions = {
    name: "awsAuthMiddleware",
    tags: ["SIGNATURE", "AWSAUTH"],
    relation: "after",
    toMiddleware: "retryMiddleware",
    override: true,
};
var getAwsAuthPlugin = function (options) { return ({
    applyToStack: function (clientStack) {
        clientStack.addRelativeTo(awsAuthMiddleware(options), awsAuthMiddlewareOptions);
    },
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFhckQsSUFBTSxhQUFhLEdBQUcsVUFBQyxhQUFxQixFQUFFLGlCQUF5QjtJQUNyRSxPQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxhQUFhLENBQUMsSUFBSSxNQUFNO0FBQXJGLENBQXFGLENBQUM7QUFFeEYsSUFBTSxvQkFBb0IsR0FBRyxVQUFDLGlCQUF5QixJQUFLLE9BQUEsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLGlCQUFpQixDQUFDLEVBQXhDLENBQXdDLENBQUM7QUFFckcsTUFBTSxVQUFVLGlCQUFpQixDQUMvQixPQUE4QjtJQUU5QixPQUFPLFVBQUMsSUFBb0MsRUFBRSxPQUFnQztRQUM1RSxPQUFBLFVBQWdCLElBQXFDOzs7Ozs7OzRCQUNuRCxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dDQUFFLHNCQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQztpQ0FDOUMsQ0FBQSxPQUFPLE9BQU8sQ0FBQyxNQUFNLEtBQUssVUFBVSxDQUFBLEVBQXBDLHdCQUFvQzs0QkFBRyxxQkFBTSxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUE7OzRCQUF0QixLQUFBLFNBQXNCLENBQUE7Ozs0QkFBRyxLQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUE7Ozs0QkFBdkYsTUFBTSxLQUFpRjs0QkFDeEUsS0FBQSxJQUFJLENBQUE7K0NBQ3BCLElBQUk7OzRCQUNFLHFCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtvQ0FDdkMsV0FBVyxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUM7b0NBQzdELGFBQWEsRUFBRSxPQUFPLENBQUMsZ0JBQWdCLENBQUM7b0NBQ3hDLGNBQWMsRUFBRSxPQUFPLENBQUMsaUJBQWlCLENBQUM7aUNBQzNDLENBQUMsRUFBQTtnQ0FOVyxxQkFBTSxxREFFbkIsVUFBTyxHQUFFLFNBSVAsVUFDRixFQUFBOzs0QkFQSSxNQUFNLEdBQUcsU0FPYjs0QkFFTSxPQUFPLEdBQUssTUFBTSxDQUFDLFFBQWUsUUFBM0IsQ0FBNEI7NEJBQ3JDLFVBQVUsR0FBRyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDN0QsSUFBSSxVQUFVLEVBQUU7Z0NBQ1IsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7Z0NBQzFDLElBQUksYUFBYSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsaUJBQWlCLENBQUMsRUFBRTtvQ0FDeEQsT0FBTyxDQUFDLGlCQUFpQixHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7aUNBQ3JEOzZCQUNGOzRCQUVELHNCQUFPLE1BQU0sRUFBQzs7OztTQUNmO0lBdEJELENBc0JDLENBQUM7QUFDTixDQUFDO0FBRUQsTUFBTSxDQUFDLElBQU0sd0JBQXdCLEdBQThCO0lBQ2pFLElBQUksRUFBRSxtQkFBbUI7SUFDekIsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQztJQUM5QixRQUFRLEVBQUUsT0FBTztJQUNqQixZQUFZLEVBQUUsaUJBQWlCO0lBQy9CLFFBQVEsRUFBRSxJQUFJO0NBQ2YsQ0FBQztBQUVGLE1BQU0sQ0FBQyxJQUFNLGdCQUFnQixHQUFHLFVBQUMsT0FBOEIsSUFBMEIsT0FBQSxDQUFDO0lBQ3hGLFlBQVksRUFBRSxVQUFDLFdBQVc7UUFDeEIsV0FBVyxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7Q0FDRixDQUFDLEVBSnVGLENBSXZGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gXCJAYXdzLXNkay9wcm90b2NvbC1odHRwXCI7XG5pbXBvcnQge1xuICBGaW5hbGl6ZUhhbmRsZXIsXG4gIEZpbmFsaXplSGFuZGxlckFyZ3VtZW50cyxcbiAgRmluYWxpemVIYW5kbGVyT3V0cHV0LFxuICBGaW5hbGl6ZVJlcXVlc3RNaWRkbGV3YXJlLFxuICBIYW5kbGVyRXhlY3V0aW9uQ29udGV4dCxcbiAgUGx1Z2dhYmxlLFxuICBSZWxhdGl2ZU1pZGRsZXdhcmVPcHRpb25zLFxufSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcblxuaW1wb3J0IHsgQXdzQXV0aFJlc29sdmVkQ29uZmlnIH0gZnJvbSBcIi4vY29uZmlndXJhdGlvbnNcIjtcblxuY29uc3QgaXNDbG9ja1NrZXdlZCA9IChuZXdTZXJ2ZXJUaW1lOiBudW1iZXIsIHN5c3RlbUNsb2NrT2Zmc2V0OiBudW1iZXIpID0+XG4gIE1hdGguYWJzKGdldFNrZXdDb3JyZWN0ZWREYXRlKHN5c3RlbUNsb2NrT2Zmc2V0KS5nZXRUaW1lKCkgLSBuZXdTZXJ2ZXJUaW1lKSA+PSAzMDAwMDA7XG5cbmNvbnN0IGdldFNrZXdDb3JyZWN0ZWREYXRlID0gKHN5c3RlbUNsb2NrT2Zmc2V0OiBudW1iZXIpID0+IG5ldyBEYXRlKERhdGUubm93KCkgKyBzeXN0ZW1DbG9ja09mZnNldCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBhd3NBdXRoTWlkZGxld2FyZTxJbnB1dCBleHRlbmRzIG9iamVjdCwgT3V0cHV0IGV4dGVuZHMgb2JqZWN0PihcbiAgb3B0aW9uczogQXdzQXV0aFJlc29sdmVkQ29uZmlnXG4pOiBGaW5hbGl6ZVJlcXVlc3RNaWRkbGV3YXJlPElucHV0LCBPdXRwdXQ+IHtcbiAgcmV0dXJuIChuZXh0OiBGaW5hbGl6ZUhhbmRsZXI8SW5wdXQsIE91dHB1dD4sIGNvbnRleHQ6IEhhbmRsZXJFeGVjdXRpb25Db250ZXh0KTogRmluYWxpemVIYW5kbGVyPElucHV0LCBPdXRwdXQ+ID0+XG4gICAgYXN5bmMgZnVuY3Rpb24gKGFyZ3M6IEZpbmFsaXplSGFuZGxlckFyZ3VtZW50czxJbnB1dD4pOiBQcm9taXNlPEZpbmFsaXplSGFuZGxlck91dHB1dDxPdXRwdXQ+PiB7XG4gICAgICBpZiAoIUh0dHBSZXF1ZXN0LmlzSW5zdGFuY2UoYXJncy5yZXF1ZXN0KSkgcmV0dXJuIG5leHQoYXJncyk7XG4gICAgICBjb25zdCBzaWduZXIgPSB0eXBlb2Ygb3B0aW9ucy5zaWduZXIgPT09IFwiZnVuY3Rpb25cIiA/IGF3YWl0IG9wdGlvbnMuc2lnbmVyKCkgOiBvcHRpb25zLnNpZ25lcjtcbiAgICAgIGNvbnN0IG91dHB1dCA9IGF3YWl0IG5leHQoe1xuICAgICAgICAuLi5hcmdzLFxuICAgICAgICByZXF1ZXN0OiBhd2FpdCBzaWduZXIuc2lnbihhcmdzLnJlcXVlc3QsIHtcbiAgICAgICAgICBzaWduaW5nRGF0ZTogbmV3IERhdGUoRGF0ZS5ub3coKSArIG9wdGlvbnMuc3lzdGVtQ2xvY2tPZmZzZXQpLFxuICAgICAgICAgIHNpZ25pbmdSZWdpb246IGNvbnRleHRbXCJzaWduaW5nX3JlZ2lvblwiXSxcbiAgICAgICAgICBzaWduaW5nU2VydmljZTogY29udGV4dFtcInNpZ25pbmdfc2VydmljZVwiXSxcbiAgICAgICAgfSksXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgeyBoZWFkZXJzIH0gPSBvdXRwdXQucmVzcG9uc2UgYXMgYW55O1xuICAgICAgY29uc3QgZGF0ZUhlYWRlciA9IGhlYWRlcnMgJiYgKGhlYWRlcnMuZGF0ZSB8fCBoZWFkZXJzLkRhdGUpO1xuICAgICAgaWYgKGRhdGVIZWFkZXIpIHtcbiAgICAgICAgY29uc3Qgc2VydmVyVGltZSA9IERhdGUucGFyc2UoZGF0ZUhlYWRlcik7XG4gICAgICAgIGlmIChpc0Nsb2NrU2tld2VkKHNlcnZlclRpbWUsIG9wdGlvbnMuc3lzdGVtQ2xvY2tPZmZzZXQpKSB7XG4gICAgICAgICAgb3B0aW9ucy5zeXN0ZW1DbG9ja09mZnNldCA9IHNlcnZlclRpbWUgLSBEYXRlLm5vdygpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGF3c0F1dGhNaWRkbGV3YXJlT3B0aW9uczogUmVsYXRpdmVNaWRkbGV3YXJlT3B0aW9ucyA9IHtcbiAgbmFtZTogXCJhd3NBdXRoTWlkZGxld2FyZVwiLFxuICB0YWdzOiBbXCJTSUdOQVRVUkVcIiwgXCJBV1NBVVRIXCJdLFxuICByZWxhdGlvbjogXCJhZnRlclwiLFxuICB0b01pZGRsZXdhcmU6IFwicmV0cnlNaWRkbGV3YXJlXCIsXG4gIG92ZXJyaWRlOiB0cnVlLFxufTtcblxuZXhwb3J0IGNvbnN0IGdldEF3c0F1dGhQbHVnaW4gPSAob3B0aW9uczogQXdzQXV0aFJlc29sdmVkQ29uZmlnKTogUGx1Z2dhYmxlPGFueSwgYW55PiA9PiAoe1xuICBhcHBseVRvU3RhY2s6IChjbGllbnRTdGFjaykgPT4ge1xuICAgIGNsaWVudFN0YWNrLmFkZFJlbGF0aXZlVG8oYXdzQXV0aE1pZGRsZXdhcmUob3B0aW9ucyksIGF3c0F1dGhNaWRkbGV3YXJlT3B0aW9ucyk7XG4gIH0sXG59KTtcbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/is-array-buffer/dist/es/index.js":
/*!******************************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/is-array-buffer/dist/es/index.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: isArrayBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayBuffer", function() { return isArrayBuffer; });
var isArrayBuffer = function (arg) {
    return (typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer) ||
        Object.prototype.toString.call(arg) === "[object ArrayBuffer]";
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLElBQU0sYUFBYSxHQUFHLFVBQUMsR0FBUTtJQUNwQyxPQUFBLENBQUMsT0FBTyxXQUFXLEtBQUssVUFBVSxJQUFJLEdBQUcsWUFBWSxXQUFXLENBQUM7UUFDakUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLHNCQUFzQjtBQUQ5RCxDQUM4RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGlzQXJyYXlCdWZmZXIgPSAoYXJnOiBhbnkpOiBhcmcgaXMgQXJyYXlCdWZmZXIgPT5cbiAgKHR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gXCJmdW5jdGlvblwiICYmIGFyZyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB8fFxuICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnKSA9PT0gXCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiO1xuIl19

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/SignatureV4.js":
/*!*********************************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/SignatureV4.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: SignatureV4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureV4", function() { return SignatureV4; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/util-hex-encoding */ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/util-hex-encoding/dist/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/constants.js");
/* harmony import */ var _credentialDerivation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./credentialDerivation */ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/credentialDerivation.js");
/* harmony import */ var _getCanonicalHeaders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getCanonicalHeaders */ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/getCanonicalHeaders.js");
/* harmony import */ var _getCanonicalQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getCanonicalQuery */ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/getCanonicalQuery.js");
/* harmony import */ var _getPayloadHash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getPayloadHash */ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/getPayloadHash.js");
/* harmony import */ var _hasHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hasHeader */ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/hasHeader.js");
/* harmony import */ var _moveHeadersToQuery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./moveHeadersToQuery */ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/moveHeadersToQuery.js");
/* harmony import */ var _prepareRequest__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./prepareRequest */ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/prepareRequest.js");
/* harmony import */ var _utilDate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utilDate */ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/utilDate.js");











var SignatureV4 = /** @class */ (function () {
    function SignatureV4(_a) {
        var applyChecksum = _a.applyChecksum, credentials = _a.credentials, region = _a.region, service = _a.service, sha256 = _a.sha256, _b = _a.uriEscapePath, uriEscapePath = _b === void 0 ? true : _b;
        this.service = service;
        this.sha256 = sha256;
        this.uriEscapePath = uriEscapePath;
        // default to true if applyChecksum isn't set
        this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
        this.regionProvider = normalizeRegionProvider(region);
        this.credentialProvider = normalizeCredentialsProvider(credentials);
    }
    SignatureV4.prototype.presign = function (originalRequest, options) {
        if (options === void 0) { options = {}; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, signingDate, _b, expiresIn, unsignableHeaders, unhoistableHeaders, signableHeaders, signingRegion, signingService, credentials, region, _c, _d, longDate, shortDate, scope, request, canonicalHeaders, _e, _f, _g, _h, _j, _k;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        _a = options.signingDate, signingDate = _a === void 0 ? new Date() : _a, _b = options.expiresIn, expiresIn = _b === void 0 ? 3600 : _b, unsignableHeaders = options.unsignableHeaders, unhoistableHeaders = options.unhoistableHeaders, signableHeaders = options.signableHeaders, signingRegion = options.signingRegion, signingService = options.signingService;
                        return [4 /*yield*/, this.credentialProvider()];
                    case 1:
                        credentials = _l.sent();
                        if (!(signingRegion !== null && signingRegion !== void 0)) return [3 /*break*/, 2];
                        _c = signingRegion;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.regionProvider()];
                    case 3:
                        _c = (_l.sent());
                        _l.label = 4;
                    case 4:
                        region = _c;
                        _d = formatDate(signingDate), longDate = _d.longDate, shortDate = _d.shortDate;
                        if (expiresIn > _constants__WEBPACK_IMPORTED_MODULE_2__["MAX_PRESIGNED_TTL"]) {
                            return [2 /*return*/, Promise.reject("Signature version 4 presigned URLs" + " must have an expiration date less than one week in" + " the future")];
                        }
                        scope = Object(_credentialDerivation__WEBPACK_IMPORTED_MODULE_3__["createScope"])(shortDate, region, signingService !== null && signingService !== void 0 ? signingService : this.service);
                        request = Object(_moveHeadersToQuery__WEBPACK_IMPORTED_MODULE_8__["moveHeadersToQuery"])(Object(_prepareRequest__WEBPACK_IMPORTED_MODULE_9__["prepareRequest"])(originalRequest), { unhoistableHeaders: unhoistableHeaders });
                        if (credentials.sessionToken) {
                            request.query[_constants__WEBPACK_IMPORTED_MODULE_2__["TOKEN_QUERY_PARAM"]] = credentials.sessionToken;
                        }
                        request.query[_constants__WEBPACK_IMPORTED_MODULE_2__["ALGORITHM_QUERY_PARAM"]] = _constants__WEBPACK_IMPORTED_MODULE_2__["ALGORITHM_IDENTIFIER"];
                        request.query[_constants__WEBPACK_IMPORTED_MODULE_2__["CREDENTIAL_QUERY_PARAM"]] = credentials.accessKeyId + "/" + scope;
                        request.query[_constants__WEBPACK_IMPORTED_MODULE_2__["AMZ_DATE_QUERY_PARAM"]] = longDate;
                        request.query[_constants__WEBPACK_IMPORTED_MODULE_2__["EXPIRES_QUERY_PARAM"]] = expiresIn.toString(10);
                        canonicalHeaders = Object(_getCanonicalHeaders__WEBPACK_IMPORTED_MODULE_4__["getCanonicalHeaders"])(request, unsignableHeaders, signableHeaders);
                        request.query[_constants__WEBPACK_IMPORTED_MODULE_2__["SIGNED_HEADERS_QUERY_PARAM"]] = getCanonicalHeaderList(canonicalHeaders);
                        _e = request.query;
                        _f = _constants__WEBPACK_IMPORTED_MODULE_2__["SIGNATURE_QUERY_PARAM"];
                        _g = this.getSignature;
                        _h = [longDate,
                            scope,
                            this.getSigningKey(credentials, region, shortDate, signingService)];
                        _j = this.createCanonicalRequest;
                        _k = [request, canonicalHeaders];
                        return [4 /*yield*/, Object(_getPayloadHash__WEBPACK_IMPORTED_MODULE_6__["getPayloadHash"])(originalRequest, this.sha256)];
                    case 5: return [4 /*yield*/, _g.apply(this, _h.concat([_j.apply(this, _k.concat([_l.sent()]))]))];
                    case 6:
                        _e[_f] = _l.sent();
                        return [2 /*return*/, request];
                }
            });
        });
    };
    SignatureV4.prototype.sign = function (toSign, options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (typeof toSign === "string") {
                    return [2 /*return*/, this.signString(toSign, options)];
                }
                else if (toSign.headers && toSign.payload) {
                    return [2 /*return*/, this.signEvent(toSign, options)];
                }
                else {
                    return [2 /*return*/, this.signRequest(toSign, options)];
                }
                return [2 /*return*/];
            });
        });
    };
    SignatureV4.prototype.signEvent = function (_a, _b) {
        var headers = _a.headers, payload = _a.payload;
        var _c = _b.signingDate, signingDate = _c === void 0 ? new Date() : _c, priorSignature = _b.priorSignature, signingRegion = _b.signingRegion, signingService = _b.signingService;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var region, _d, _e, shortDate, longDate, scope, hashedPayload, hash, hashedHeaders, _f, stringToSign;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        if (!(signingRegion !== null && signingRegion !== void 0)) return [3 /*break*/, 1];
                        _d = signingRegion;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.regionProvider()];
                    case 2:
                        _d = (_g.sent());
                        _g.label = 3;
                    case 3:
                        region = _d;
                        _e = formatDate(signingDate), shortDate = _e.shortDate, longDate = _e.longDate;
                        scope = Object(_credentialDerivation__WEBPACK_IMPORTED_MODULE_3__["createScope"])(shortDate, region, signingService !== null && signingService !== void 0 ? signingService : this.service);
                        return [4 /*yield*/, Object(_getPayloadHash__WEBPACK_IMPORTED_MODULE_6__["getPayloadHash"])({ headers: {}, body: payload }, this.sha256)];
                    case 4:
                        hashedPayload = _g.sent();
                        hash = new this.sha256();
                        hash.update(headers);
                        _f = _aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_1__["toHex"];
                        return [4 /*yield*/, hash.digest()];
                    case 5:
                        hashedHeaders = _f.apply(void 0, [_g.sent()]);
                        stringToSign = [
                            _constants__WEBPACK_IMPORTED_MODULE_2__["EVENT_ALGORITHM_IDENTIFIER"],
                            longDate,
                            scope,
                            priorSignature,
                            hashedHeaders,
                            hashedPayload,
                        ].join("\n");
                        return [2 /*return*/, this.signString(stringToSign, { signingDate: signingDate, signingRegion: region, signingService: signingService })];
                }
            });
        });
    };
    SignatureV4.prototype.signString = function (stringToSign, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.signingDate, signingDate = _c === void 0 ? new Date() : _c, signingRegion = _b.signingRegion, signingService = _b.signingService;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var credentials, region, _d, shortDate, hash, _e, _f, _g;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_h) {
                switch (_h.label) {
                    case 0: return [4 /*yield*/, this.credentialProvider()];
                    case 1:
                        credentials = _h.sent();
                        if (!(signingRegion !== null && signingRegion !== void 0)) return [3 /*break*/, 2];
                        _d = signingRegion;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.regionProvider()];
                    case 3:
                        _d = (_h.sent());
                        _h.label = 4;
                    case 4:
                        region = _d;
                        shortDate = formatDate(signingDate).shortDate;
                        _f = (_e = this.sha256).bind;
                        return [4 /*yield*/, this.getSigningKey(credentials, region, shortDate, signingService)];
                    case 5:
                        hash = new (_f.apply(_e, [void 0, _h.sent()]))();
                        hash.update(stringToSign);
                        _g = _aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_1__["toHex"];
                        return [4 /*yield*/, hash.digest()];
                    case 6: return [2 /*return*/, _g.apply(void 0, [_h.sent()])];
                }
            });
        });
    };
    SignatureV4.prototype.signRequest = function (requestToSign, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.signingDate, signingDate = _c === void 0 ? new Date() : _c, signableHeaders = _b.signableHeaders, unsignableHeaders = _b.unsignableHeaders, signingRegion = _b.signingRegion, signingService = _b.signingService;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var credentials, region, _d, request, _e, longDate, shortDate, scope, payloadHash, canonicalHeaders, signature;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, this.credentialProvider()];
                    case 1:
                        credentials = _f.sent();
                        if (!(signingRegion !== null && signingRegion !== void 0)) return [3 /*break*/, 2];
                        _d = signingRegion;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.regionProvider()];
                    case 3:
                        _d = (_f.sent());
                        _f.label = 4;
                    case 4:
                        region = _d;
                        request = Object(_prepareRequest__WEBPACK_IMPORTED_MODULE_9__["prepareRequest"])(requestToSign);
                        _e = formatDate(signingDate), longDate = _e.longDate, shortDate = _e.shortDate;
                        scope = Object(_credentialDerivation__WEBPACK_IMPORTED_MODULE_3__["createScope"])(shortDate, region, signingService !== null && signingService !== void 0 ? signingService : this.service);
                        request.headers[_constants__WEBPACK_IMPORTED_MODULE_2__["AMZ_DATE_HEADER"]] = longDate;
                        if (credentials.sessionToken) {
                            request.headers[_constants__WEBPACK_IMPORTED_MODULE_2__["TOKEN_HEADER"]] = credentials.sessionToken;
                        }
                        return [4 /*yield*/, Object(_getPayloadHash__WEBPACK_IMPORTED_MODULE_6__["getPayloadHash"])(request, this.sha256)];
                    case 5:
                        payloadHash = _f.sent();
                        if (!Object(_hasHeader__WEBPACK_IMPORTED_MODULE_7__["hasHeader"])(_constants__WEBPACK_IMPORTED_MODULE_2__["SHA256_HEADER"], request.headers) && this.applyChecksum) {
                            request.headers[_constants__WEBPACK_IMPORTED_MODULE_2__["SHA256_HEADER"]] = payloadHash;
                        }
                        canonicalHeaders = Object(_getCanonicalHeaders__WEBPACK_IMPORTED_MODULE_4__["getCanonicalHeaders"])(request, unsignableHeaders, signableHeaders);
                        return [4 /*yield*/, this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash))];
                    case 6:
                        signature = _f.sent();
                        request.headers[_constants__WEBPACK_IMPORTED_MODULE_2__["AUTH_HEADER"]] =
                            _constants__WEBPACK_IMPORTED_MODULE_2__["ALGORITHM_IDENTIFIER"] + " " +
                                ("Credential=" + credentials.accessKeyId + "/" + scope + ", ") +
                                ("SignedHeaders=" + getCanonicalHeaderList(canonicalHeaders) + ", ") +
                                ("Signature=" + signature);
                        return [2 /*return*/, request];
                }
            });
        });
    };
    SignatureV4.prototype.createCanonicalRequest = function (request, canonicalHeaders, payloadHash) {
        var sortedHeaders = Object.keys(canonicalHeaders).sort();
        return request.method + "\n" + this.getCanonicalPath(request) + "\n" + Object(_getCanonicalQuery__WEBPACK_IMPORTED_MODULE_5__["getCanonicalQuery"])(request) + "\n" + sortedHeaders.map(function (name) { return name + ":" + canonicalHeaders[name]; }).join("\n") + "\n\n" + sortedHeaders.join(";") + "\n" + payloadHash;
    };
    SignatureV4.prototype.createStringToSign = function (longDate, credentialScope, canonicalRequest) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var hash, hashedRequest;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hash = new this.sha256();
                        hash.update(canonicalRequest);
                        return [4 /*yield*/, hash.digest()];
                    case 1:
                        hashedRequest = _a.sent();
                        return [2 /*return*/, _constants__WEBPACK_IMPORTED_MODULE_2__["ALGORITHM_IDENTIFIER"] + "\n" + longDate + "\n" + credentialScope + "\n" + Object(_aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_1__["toHex"])(hashedRequest)];
                }
            });
        });
    };
    SignatureV4.prototype.getCanonicalPath = function (_a) {
        var path = _a.path;
        if (this.uriEscapePath) {
            var doubleEncoded = encodeURIComponent(path.replace(/^\//, ""));
            return "/" + doubleEncoded.replace(/%2F/g, "/");
        }
        return path;
    };
    SignatureV4.prototype.getSignature = function (longDate, credentialScope, keyPromise, canonicalRequest) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var stringToSign, hash, _a, _b, _c;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.createStringToSign(longDate, credentialScope, canonicalRequest)];
                    case 1:
                        stringToSign = _d.sent();
                        _b = (_a = this.sha256).bind;
                        return [4 /*yield*/, keyPromise];
                    case 2:
                        hash = new (_b.apply(_a, [void 0, _d.sent()]))();
                        hash.update(stringToSign);
                        _c = _aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_1__["toHex"];
                        return [4 /*yield*/, hash.digest()];
                    case 3: return [2 /*return*/, _c.apply(void 0, [_d.sent()])];
                }
            });
        });
    };
    SignatureV4.prototype.getSigningKey = function (credentials, region, shortDate, service) {
        return Object(_credentialDerivation__WEBPACK_IMPORTED_MODULE_3__["getSigningKey"])(this.sha256, credentials, shortDate, region, service || this.service);
    };
    return SignatureV4;
}());

var formatDate = function (now) {
    var longDate = Object(_utilDate__WEBPACK_IMPORTED_MODULE_10__["iso8601"])(now).replace(/[\-:]/g, "");
    return {
        longDate: longDate,
        shortDate: longDate.substr(0, 8),
    };
};
var getCanonicalHeaderList = function (headers) { return Object.keys(headers).sort().join(";"); };
var normalizeRegionProvider = function (region) {
    if (typeof region === "string") {
        var promisified_1 = Promise.resolve(region);
        return function () { return promisified_1; };
    }
    else {
        return region;
    }
};
var normalizeCredentialsProvider = function (credentials) {
    if (typeof credentials === "object") {
        var promisified_2 = Promise.resolve(credentials);
        return function () { return promisified_2; };
    }
    else {
        return credentials;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2lnbmF0dXJlVjQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvU2lnbmF0dXJlVjQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQWlCQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFbkQsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixxQkFBcUIsRUFDckIsZUFBZSxFQUNmLG9CQUFvQixFQUNwQixXQUFXLEVBQ1gsc0JBQXNCLEVBQ3RCLDBCQUEwQixFQUMxQixtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLGFBQWEsRUFDYixxQkFBcUIsRUFDckIsMEJBQTBCLEVBQzFCLFlBQVksRUFDWixpQkFBaUIsR0FDbEIsTUFBTSxhQUFhLENBQUM7QUFDckIsT0FBTyxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQWtEckM7SUFRRSxxQkFBWSxFQU84QjtZQU54QyxhQUFhLG1CQUFBLEVBQ2IsV0FBVyxpQkFBQSxFQUNYLE1BQU0sWUFBQSxFQUNOLE9BQU8sYUFBQSxFQUNQLE1BQU0sWUFBQSxFQUNOLHFCQUFvQixFQUFwQixhQUFhLG1CQUFHLElBQUksS0FBQTtRQUVwQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyw2Q0FBNkM7UUFDN0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLGFBQWEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQy9FLElBQUksQ0FBQyxjQUFjLEdBQUcsdUJBQXVCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLDRCQUE0QixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFWSw2QkFBTyxHQUFwQixVQUFxQixlQUE0QixFQUFFLE9BQXdDO1FBQXhDLHdCQUFBLEVBQUEsWUFBd0M7Ozs7Ozt3QkFFdkYsS0FPRSxPQUFPLFlBUGUsRUFBeEIsV0FBVyxtQkFBRyxJQUFJLElBQUksRUFBRSxLQUFBLEVBQ3hCLEtBTUUsT0FBTyxVQU5PLEVBQWhCLFNBQVMsbUJBQUcsSUFBSSxLQUFBLEVBQ2hCLGlCQUFpQixHQUtmLE9BQU8sa0JBTFEsRUFDakIsa0JBQWtCLEdBSWhCLE9BQU8sbUJBSlMsRUFDbEIsZUFBZSxHQUdiLE9BQU8sZ0JBSE0sRUFDZixhQUFhLEdBRVgsT0FBTyxjQUZJLEVBQ2IsY0FBYyxHQUNaLE9BQU8sZUFESyxDQUNKO3dCQUNRLHFCQUFNLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFBOzt3QkFBN0MsV0FBVyxHQUFHLFNBQStCOzhCQUNwQyxhQUFhLGFBQWIsYUFBYTt3QkFBYixLQUFBLGFBQWEsQ0FBQTs7NEJBQUsscUJBQU0sSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFBOzt3QkFBNUIsS0FBQSxDQUFDLFNBQTJCLENBQUMsQ0FBQTs7O3dCQUF2RCxNQUFNLEtBQWlEO3dCQUV2RCxLQUEwQixVQUFVLENBQUMsV0FBVyxDQUFDLEVBQS9DLFFBQVEsY0FBQSxFQUFFLFNBQVMsZUFBQSxDQUE2Qjt3QkFDeEQsSUFBSSxTQUFTLEdBQUcsaUJBQWlCLEVBQUU7NEJBQ2pDLHNCQUFPLE9BQU8sQ0FBQyxNQUFNLENBQ25CLG9DQUFvQyxHQUFHLHFEQUFxRCxHQUFHLGFBQWEsQ0FDN0csRUFBQzt5QkFDSDt3QkFFSyxLQUFLLEdBQUcsV0FBVyxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsY0FBYyxhQUFkLGNBQWMsY0FBZCxjQUFjLEdBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUN2RSxPQUFPLEdBQUcsa0JBQWtCLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxFQUFFLEVBQUUsa0JBQWtCLG9CQUFBLEVBQUUsQ0FBQyxDQUFDO3dCQUU1RixJQUFJLFdBQVcsQ0FBQyxZQUFZLEVBQUU7NEJBQzVCLE9BQU8sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxXQUFXLENBQUMsWUFBWSxDQUFDO3lCQUM3RDt3QkFDRCxPQUFPLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLEdBQUcsb0JBQW9CLENBQUM7d0JBQzVELE9BQU8sQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsR0FBTSxXQUFXLENBQUMsV0FBVyxTQUFJLEtBQU8sQ0FBQzt3QkFDOUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLFFBQVEsQ0FBQzt3QkFDL0MsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBRXRELGdCQUFnQixHQUFHLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxlQUFlLENBQUMsQ0FBQzt3QkFDMUYsT0FBTyxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLENBQUM7d0JBRXJGLEtBQUEsT0FBTyxDQUFDLEtBQUssQ0FBQTt3QkFBQyxLQUFBLHFCQUFxQixDQUFBO3dCQUFVLEtBQUEsSUFBSSxDQUFDLFlBQVksQ0FBQTs4QkFDNUQsUUFBUTs0QkFDUixLQUFLOzRCQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsY0FBYyxDQUFDO3dCQUNsRSxLQUFBLElBQUksQ0FBQyxzQkFBc0IsQ0FBQTs4QkFBQyxPQUFPLEVBQUUsZ0JBQWdCO3dCQUFFLHFCQUFNLGNBQWMsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFBOzRCQUpwRSxxQkFBTSxTQUFBLElBQUksYUFJL0MsU0FBQSxJQUFJLGFBQW1ELFNBQWtELEdBQUMsR0FDM0csRUFBQTs7d0JBTEQsTUFBb0MsR0FBRyxTQUt0QyxDQUFDO3dCQUVGLHNCQUFPLE9BQU8sRUFBQzs7OztLQUNoQjtJQUtZLDBCQUFJLEdBQWpCLFVBQWtCLE1BQVcsRUFBRSxPQUFZOzs7Z0JBQ3pDLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFO29CQUM5QixzQkFBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFBQztpQkFDekM7cUJBQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7b0JBQzNDLHNCQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxFQUFDO2lCQUN4QztxQkFBTTtvQkFDTCxzQkFBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFBQztpQkFDMUM7Ozs7S0FDRjtJQUVhLCtCQUFTLEdBQXZCLFVBQ0UsRUFBb0MsRUFDcEMsRUFBa0c7WUFEaEcsT0FBTyxhQUFBLEVBQUUsT0FBTyxhQUFBO1lBQ2hCLG1CQUF3QixFQUF4QixXQUFXLG1CQUFHLElBQUksSUFBSSxFQUFFLEtBQUEsRUFBRSxjQUFjLG9CQUFBLEVBQUUsYUFBYSxtQkFBQSxFQUFFLGNBQWMsb0JBQUE7Ozs7Ozs4QkFFMUQsYUFBYSxhQUFiLGFBQWE7d0JBQWIsS0FBQSxhQUFhLENBQUE7OzRCQUFLLHFCQUFNLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBQTs7d0JBQTVCLEtBQUEsQ0FBQyxTQUEyQixDQUFDLENBQUE7Ozt3QkFBdkQsTUFBTSxLQUFpRDt3QkFDdkQsS0FBMEIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUEvQyxTQUFTLGVBQUEsRUFBRSxRQUFRLGNBQUEsQ0FBNkI7d0JBQ2xELEtBQUssR0FBRyxXQUFXLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxjQUFjLGFBQWQsY0FBYyxjQUFkLGNBQWMsR0FBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3ZELHFCQUFNLGNBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBQTs7d0JBQXhGLGFBQWEsR0FBRyxTQUF3RTt3QkFDeEYsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO3dCQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUNDLEtBQUEsS0FBSyxDQUFBO3dCQUFDLHFCQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBQTs7d0JBQXpDLGFBQWEsR0FBRyxrQkFBTSxTQUFtQixFQUFDO3dCQUMxQyxZQUFZLEdBQUc7NEJBQ25CLDBCQUEwQjs0QkFDMUIsUUFBUTs0QkFDUixLQUFLOzRCQUNMLGNBQWM7NEJBQ2QsYUFBYTs0QkFDYixhQUFhO3lCQUNkLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNiLHNCQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLEVBQUUsV0FBVyxhQUFBLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxjQUFjLGdCQUFBLEVBQUUsQ0FBQyxFQUFDOzs7O0tBQzlGO0lBRWEsZ0NBQVUsR0FBeEIsVUFDRSxZQUFvQixFQUNwQixFQUFrRjtZQUFsRixxQkFBZ0YsRUFBRSxLQUFBLEVBQWhGLG1CQUF3QixFQUF4QixXQUFXLG1CQUFHLElBQUksSUFBSSxFQUFFLEtBQUEsRUFBRSxhQUFhLG1CQUFBLEVBQUUsY0FBYyxvQkFBQTs7Ozs7NEJBRXJDLHFCQUFNLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFBOzt3QkFBN0MsV0FBVyxHQUFHLFNBQStCOzhCQUNwQyxhQUFhLGFBQWIsYUFBYTt3QkFBYixLQUFBLGFBQWEsQ0FBQTs7NEJBQUsscUJBQU0sSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFBOzt3QkFBNUIsS0FBQSxDQUFDLFNBQTJCLENBQUMsQ0FBQTs7O3dCQUF2RCxNQUFNLEtBQWlEO3dCQUNyRCxTQUFTLEdBQUssVUFBVSxDQUFDLFdBQVcsQ0FBQyxVQUE1QixDQUE2Qjs2QkFFN0IsQ0FBQSxLQUFBLElBQUksQ0FBQyxNQUFNLENBQUE7d0JBQUMscUJBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxjQUFjLENBQUMsRUFBQTs7d0JBQS9GLElBQUksR0FBRywyQkFBZ0IsU0FBd0UsS0FBQzt3QkFDdEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQzt3QkFDbkIsS0FBQSxLQUFLLENBQUE7d0JBQUMscUJBQU0sSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFBOzRCQUFoQyxzQkFBTyxrQkFBTSxTQUFtQixFQUFDLEVBQUM7Ozs7S0FDbkM7SUFFYSxpQ0FBVyxHQUF6QixVQUNFLGFBQTBCLEVBQzFCLEVBTStCO1lBTi9CLHFCQU02QixFQUFFLEtBQUEsRUFMN0IsbUJBQXdCLEVBQXhCLFdBQVcsbUJBQUcsSUFBSSxJQUFJLEVBQUUsS0FBQSxFQUN4QixlQUFlLHFCQUFBLEVBQ2YsaUJBQWlCLHVCQUFBLEVBQ2pCLGFBQWEsbUJBQUEsRUFDYixjQUFjLG9CQUFBOzs7Ozs0QkFHSSxxQkFBTSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBQTs7d0JBQTdDLFdBQVcsR0FBRyxTQUErQjs4QkFDcEMsYUFBYSxhQUFiLGFBQWE7d0JBQWIsS0FBQSxhQUFhLENBQUE7OzRCQUFLLHFCQUFNLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBQTs7d0JBQTVCLEtBQUEsQ0FBQyxTQUEyQixDQUFDLENBQUE7Ozt3QkFBdkQsTUFBTSxLQUFpRDt3QkFDdkQsT0FBTyxHQUFHLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQzt3QkFDeEMsS0FBMEIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUEvQyxRQUFRLGNBQUEsRUFBRSxTQUFTLGVBQUEsQ0FBNkI7d0JBQ2xELEtBQUssR0FBRyxXQUFXLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxjQUFjLGFBQWQsY0FBYyxjQUFkLGNBQWMsR0FBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBRTdFLE9BQU8sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEdBQUcsUUFBUSxDQUFDO3dCQUM1QyxJQUFJLFdBQVcsQ0FBQyxZQUFZLEVBQUU7NEJBQzVCLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsV0FBVyxDQUFDLFlBQVksQ0FBQzt5QkFDMUQ7d0JBRW1CLHFCQUFNLGNBQWMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFBOzt3QkFBeEQsV0FBVyxHQUFHLFNBQTBDO3dCQUM5RCxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTs0QkFDcEUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxXQUFXLENBQUM7eUJBQzlDO3dCQUVLLGdCQUFnQixHQUFHLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxlQUFlLENBQUMsQ0FBQzt3QkFDeEUscUJBQU0sSUFBSSxDQUFDLFlBQVksQ0FDdkMsUUFBUSxFQUNSLEtBQUssRUFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGNBQWMsQ0FBQyxFQUNsRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxDQUNwRSxFQUFBOzt3QkFMSyxTQUFTLEdBQUcsU0FLakI7d0JBRUQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7NEJBQ3ZCLG9CQUFvQixNQUFHO2lDQUMxQixnQkFBYyxXQUFXLENBQUMsV0FBVyxTQUFJLEtBQUssT0FBSSxDQUFBO2lDQUNsRCxtQkFBaUIsc0JBQXNCLENBQUMsZ0JBQWdCLENBQUMsT0FBSSxDQUFBO2lDQUM3RCxlQUFhLFNBQVcsQ0FBQSxDQUFDO3dCQUUzQixzQkFBTyxPQUFPLEVBQUM7Ozs7S0FDaEI7SUFFTyw0Q0FBc0IsR0FBOUIsVUFBK0IsT0FBb0IsRUFBRSxnQkFBMkIsRUFBRSxXQUFtQjtRQUNuRyxJQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDM0QsT0FBVSxPQUFPLENBQUMsTUFBTSxVQUMxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFVBQzlCLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxVQUMxQixhQUFhLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUcsSUFBSSxTQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBRyxFQUFuQyxDQUFtQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUUzRSxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUN2QixXQUFhLENBQUM7SUFDZCxDQUFDO0lBRWEsd0NBQWtCLEdBQWhDLFVBQ0UsUUFBZ0IsRUFDaEIsZUFBdUIsRUFDdkIsZ0JBQXdCOzs7Ozs7d0JBRWxCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO3dCQUNSLHFCQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBQTs7d0JBQW5DLGFBQWEsR0FBRyxTQUFtQjt3QkFFekMsc0JBQVUsb0JBQW9CLFVBQ2hDLFFBQVEsVUFDUixlQUFlLFVBQ2YsS0FBSyxDQUFDLGFBQWEsQ0FBRyxFQUFDOzs7O0tBQ3RCO0lBRU8sc0NBQWdCLEdBQXhCLFVBQXlCLEVBQXFCO1lBQW5CLElBQUksVUFBQTtRQUM3QixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsSUFBTSxhQUFhLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNsRSxPQUFPLE1BQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFHLENBQUM7U0FDakQ7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFYSxrQ0FBWSxHQUExQixVQUNFLFFBQWdCLEVBQ2hCLGVBQXVCLEVBQ3ZCLFVBQStCLEVBQy9CLGdCQUF3Qjs7Ozs7NEJBRUgscUJBQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLENBQUMsRUFBQTs7d0JBQXpGLFlBQVksR0FBRyxTQUEwRTs2QkFFOUUsQ0FBQSxLQUFBLElBQUksQ0FBQyxNQUFNLENBQUE7d0JBQUMscUJBQU0sVUFBVSxFQUFBOzt3QkFBdkMsSUFBSSxHQUFHLDJCQUFnQixTQUFnQixLQUFDO3dCQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO3dCQUNuQixLQUFBLEtBQUssQ0FBQTt3QkFBQyxxQkFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUE7NEJBQWhDLHNCQUFPLGtCQUFNLFNBQW1CLEVBQUMsRUFBQzs7OztLQUNuQztJQUVPLG1DQUFhLEdBQXJCLFVBQ0UsV0FBd0IsRUFDeEIsTUFBYyxFQUNkLFNBQWlCLEVBQ2pCLE9BQWdCO1FBRWhCLE9BQU8sYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBeE5ELElBd05DOztBQUVELElBQU0sVUFBVSxHQUFHLFVBQUMsR0FBYztJQUNoQyxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNwRCxPQUFPO1FBQ0wsUUFBUSxVQUFBO1FBQ1IsU0FBUyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNqQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsSUFBTSxzQkFBc0IsR0FBRyxVQUFDLE9BQWUsSUFBYSxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFyQyxDQUFxQyxDQUFDO0FBRWxHLElBQU0sdUJBQXVCLEdBQUcsVUFBQyxNQUFpQztJQUNoRSxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsRUFBRTtRQUM5QixJQUFNLGFBQVcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLE9BQU8sY0FBTSxPQUFBLGFBQVcsRUFBWCxDQUFXLENBQUM7S0FDMUI7U0FBTTtRQUNMLE9BQU8sTUFBTSxDQUFDO0tBQ2Y7QUFDSCxDQUFDLENBQUM7QUFFRixJQUFNLDRCQUE0QixHQUFHLFVBQUMsV0FBZ0Q7SUFDcEYsSUFBSSxPQUFPLFdBQVcsS0FBSyxRQUFRLEVBQUU7UUFDbkMsSUFBTSxhQUFXLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqRCxPQUFPLGNBQU0sT0FBQSxhQUFXLEVBQVgsQ0FBVyxDQUFDO0tBQzFCO1NBQU07UUFDTCxPQUFPLFdBQVcsQ0FBQztLQUNwQjtBQUNILENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENyZWRlbnRpYWxzLFxuICBEYXRlSW5wdXQsXG4gIEV2ZW50U2lnbmVyLFxuICBFdmVudFNpZ25pbmdBcmd1bWVudHMsXG4gIEZvcm1hdHRlZEV2ZW50LFxuICBIYXNoQ29uc3RydWN0b3IsXG4gIEhlYWRlckJhZyxcbiAgSHR0cFJlcXVlc3QsXG4gIFByb3ZpZGVyLFxuICBSZXF1ZXN0UHJlc2lnbmVyLFxuICBSZXF1ZXN0UHJlc2lnbmluZ0FyZ3VtZW50cyxcbiAgUmVxdWVzdFNpZ25lcixcbiAgUmVxdWVzdFNpZ25pbmdBcmd1bWVudHMsXG4gIFNpZ25pbmdBcmd1bWVudHMsXG4gIFN0cmluZ1NpZ25lcixcbn0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5pbXBvcnQgeyB0b0hleCB9IGZyb20gXCJAYXdzLXNkay91dGlsLWhleC1lbmNvZGluZ1wiO1xuXG5pbXBvcnQge1xuICBBTEdPUklUSE1fSURFTlRJRklFUixcbiAgQUxHT1JJVEhNX1FVRVJZX1BBUkFNLFxuICBBTVpfREFURV9IRUFERVIsXG4gIEFNWl9EQVRFX1FVRVJZX1BBUkFNLFxuICBBVVRIX0hFQURFUixcbiAgQ1JFREVOVElBTF9RVUVSWV9QQVJBTSxcbiAgRVZFTlRfQUxHT1JJVEhNX0lERU5USUZJRVIsXG4gIEVYUElSRVNfUVVFUllfUEFSQU0sXG4gIE1BWF9QUkVTSUdORURfVFRMLFxuICBTSEEyNTZfSEVBREVSLFxuICBTSUdOQVRVUkVfUVVFUllfUEFSQU0sXG4gIFNJR05FRF9IRUFERVJTX1FVRVJZX1BBUkFNLFxuICBUT0tFTl9IRUFERVIsXG4gIFRPS0VOX1FVRVJZX1BBUkFNLFxufSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNyZWF0ZVNjb3BlLCBnZXRTaWduaW5nS2V5IH0gZnJvbSBcIi4vY3JlZGVudGlhbERlcml2YXRpb25cIjtcbmltcG9ydCB7IGdldENhbm9uaWNhbEhlYWRlcnMgfSBmcm9tIFwiLi9nZXRDYW5vbmljYWxIZWFkZXJzXCI7XG5pbXBvcnQgeyBnZXRDYW5vbmljYWxRdWVyeSB9IGZyb20gXCIuL2dldENhbm9uaWNhbFF1ZXJ5XCI7XG5pbXBvcnQgeyBnZXRQYXlsb2FkSGFzaCB9IGZyb20gXCIuL2dldFBheWxvYWRIYXNoXCI7XG5pbXBvcnQgeyBoYXNIZWFkZXIgfSBmcm9tIFwiLi9oYXNIZWFkZXJcIjtcbmltcG9ydCB7IG1vdmVIZWFkZXJzVG9RdWVyeSB9IGZyb20gXCIuL21vdmVIZWFkZXJzVG9RdWVyeVwiO1xuaW1wb3J0IHsgcHJlcGFyZVJlcXVlc3QgfSBmcm9tIFwiLi9wcmVwYXJlUmVxdWVzdFwiO1xuaW1wb3J0IHsgaXNvODYwMSB9IGZyb20gXCIuL3V0aWxEYXRlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2lnbmF0dXJlVjRJbml0IHtcbiAgLyoqXG4gICAqIFRoZSBzZXJ2aWNlIHNpZ25pbmcgbmFtZS5cbiAgICovXG4gIHNlcnZpY2U6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHJlZ2lvbiBuYW1lIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgYmVcbiAgICogcmVzb2x2ZWQgd2l0aCB0aGUgcmVnaW9uIG5hbWUuXG4gICAqL1xuICByZWdpb246IHN0cmluZyB8IFByb3ZpZGVyPHN0cmluZz47XG5cbiAgLyoqXG4gICAqIFRoZSBjcmVkZW50aWFscyB3aXRoIHdoaWNoIHRoZSByZXF1ZXN0IHNob3VsZCBiZSBzaWduZWQgb3IgYSBmdW5jdGlvblxuICAgKiB0aGF0IHJldHVybnMgYSBwcm9taXNlIHRoYXQgd2lsbCBiZSByZXNvbHZlZCB3aXRoIGNyZWRlbnRpYWxzLlxuICAgKi9cbiAgY3JlZGVudGlhbHM6IENyZWRlbnRpYWxzIHwgUHJvdmlkZXI8Q3JlZGVudGlhbHM+O1xuXG4gIC8qKlxuICAgKiBBIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIGZvciBhIGhhc2ggb2JqZWN0IHRoYXQgd2lsbCBjYWxjdWxhdGUgU0hBLTI1NiBITUFDXG4gICAqIGNoZWNrc3Vtcy5cbiAgICovXG4gIHNoYTI1Nj86IEhhc2hDb25zdHJ1Y3RvcjtcblxuICAvKipcbiAgICogV2hldGhlciB0byB1cmktZXNjYXBlIHRoZSByZXF1ZXN0IFVSSSBwYXRoIGFzIHBhcnQgb2YgY29tcHV0aW5nIHRoZVxuICAgKiBjYW5vbmljYWwgcmVxdWVzdCBzdHJpbmcuIFRoaXMgaXMgcmVxdWlyZWQgZm9yIGV2ZXJ5IEFXUyBzZXJ2aWNlLCBleGNlcHRcbiAgICogQW1hem9uIFMzLCBhcyBvZiBsYXRlIDIwMTcuXG4gICAqXG4gICAqIEBkZWZhdWx0IFt0cnVlXVxuICAgKi9cbiAgdXJpRXNjYXBlUGF0aD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gY2FsY3VsYXRlIGEgY2hlY2tzdW0gb2YgdGhlIHJlcXVlc3QgYm9keSBhbmQgaW5jbHVkZSBpdCBhc1xuICAgKiBlaXRoZXIgYSByZXF1ZXN0IGhlYWRlciAod2hlbiBzaWduaW5nKSBvciBhcyBhIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXJcbiAgICogKHdoZW4gcHJlc2lnbmluZykuIFRoaXMgaXMgcmVxdWlyZWQgZm9yIEFXUyBHbGFjaWVyIGFuZCBBbWF6b24gUzMgYW5kIG9wdGlvbmFsIGZvclxuICAgKiBldmVyeSBvdGhlciBBV1Mgc2VydmljZSBhcyBvZiBsYXRlIDIwMTcuXG4gICAqXG4gICAqIEBkZWZhdWx0IFt0cnVlXVxuICAgKi9cbiAgYXBwbHlDaGVja3N1bT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2lnbmF0dXJlVjRDcnlwdG9Jbml0IHtcbiAgc2hhMjU2OiBIYXNoQ29uc3RydWN0b3I7XG59XG5cbmV4cG9ydCBjbGFzcyBTaWduYXR1cmVWNCBpbXBsZW1lbnRzIFJlcXVlc3RQcmVzaWduZXIsIFJlcXVlc3RTaWduZXIsIFN0cmluZ1NpZ25lciwgRXZlbnRTaWduZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IHNlcnZpY2U6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSByZWdpb25Qcm92aWRlcjogUHJvdmlkZXI8c3RyaW5nPjtcbiAgcHJpdmF0ZSByZWFkb25seSBjcmVkZW50aWFsUHJvdmlkZXI6IFByb3ZpZGVyPENyZWRlbnRpYWxzPjtcbiAgcHJpdmF0ZSByZWFkb25seSBzaGEyNTY6IEhhc2hDb25zdHJ1Y3RvcjtcbiAgcHJpdmF0ZSByZWFkb25seSB1cmlFc2NhcGVQYXRoOiBib29sZWFuO1xuICBwcml2YXRlIHJlYWRvbmx5IGFwcGx5Q2hlY2tzdW06IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIGFwcGx5Q2hlY2tzdW0sXG4gICAgY3JlZGVudGlhbHMsXG4gICAgcmVnaW9uLFxuICAgIHNlcnZpY2UsXG4gICAgc2hhMjU2LFxuICAgIHVyaUVzY2FwZVBhdGggPSB0cnVlLFxuICB9OiBTaWduYXR1cmVWNEluaXQgJiBTaWduYXR1cmVWNENyeXB0b0luaXQpIHtcbiAgICB0aGlzLnNlcnZpY2UgPSBzZXJ2aWNlO1xuICAgIHRoaXMuc2hhMjU2ID0gc2hhMjU2O1xuICAgIHRoaXMudXJpRXNjYXBlUGF0aCA9IHVyaUVzY2FwZVBhdGg7XG4gICAgLy8gZGVmYXVsdCB0byB0cnVlIGlmIGFwcGx5Q2hlY2tzdW0gaXNuJ3Qgc2V0XG4gICAgdGhpcy5hcHBseUNoZWNrc3VtID0gdHlwZW9mIGFwcGx5Q2hlY2tzdW0gPT09IFwiYm9vbGVhblwiID8gYXBwbHlDaGVja3N1bSA6IHRydWU7XG4gICAgdGhpcy5yZWdpb25Qcm92aWRlciA9IG5vcm1hbGl6ZVJlZ2lvblByb3ZpZGVyKHJlZ2lvbik7XG4gICAgdGhpcy5jcmVkZW50aWFsUHJvdmlkZXIgPSBub3JtYWxpemVDcmVkZW50aWFsc1Byb3ZpZGVyKGNyZWRlbnRpYWxzKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBwcmVzaWduKG9yaWdpbmFsUmVxdWVzdDogSHR0cFJlcXVlc3QsIG9wdGlvbnM6IFJlcXVlc3RQcmVzaWduaW5nQXJndW1lbnRzID0ge30pOiBQcm9taXNlPEh0dHBSZXF1ZXN0PiB7XG4gICAgY29uc3Qge1xuICAgICAgc2lnbmluZ0RhdGUgPSBuZXcgRGF0ZSgpLFxuICAgICAgZXhwaXJlc0luID0gMzYwMCxcbiAgICAgIHVuc2lnbmFibGVIZWFkZXJzLFxuICAgICAgdW5ob2lzdGFibGVIZWFkZXJzLFxuICAgICAgc2lnbmFibGVIZWFkZXJzLFxuICAgICAgc2lnbmluZ1JlZ2lvbixcbiAgICAgIHNpZ25pbmdTZXJ2aWNlLFxuICAgIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IGNyZWRlbnRpYWxzID0gYXdhaXQgdGhpcy5jcmVkZW50aWFsUHJvdmlkZXIoKTtcbiAgICBjb25zdCByZWdpb24gPSBzaWduaW5nUmVnaW9uID8/IChhd2FpdCB0aGlzLnJlZ2lvblByb3ZpZGVyKCkpO1xuXG4gICAgY29uc3QgeyBsb25nRGF0ZSwgc2hvcnREYXRlIH0gPSBmb3JtYXREYXRlKHNpZ25pbmdEYXRlKTtcbiAgICBpZiAoZXhwaXJlc0luID4gTUFYX1BSRVNJR05FRF9UVEwpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcbiAgICAgICAgXCJTaWduYXR1cmUgdmVyc2lvbiA0IHByZXNpZ25lZCBVUkxzXCIgKyBcIiBtdXN0IGhhdmUgYW4gZXhwaXJhdGlvbiBkYXRlIGxlc3MgdGhhbiBvbmUgd2VlayBpblwiICsgXCIgdGhlIGZ1dHVyZVwiXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHNjb3BlID0gY3JlYXRlU2NvcGUoc2hvcnREYXRlLCByZWdpb24sIHNpZ25pbmdTZXJ2aWNlID8/IHRoaXMuc2VydmljZSk7XG4gICAgY29uc3QgcmVxdWVzdCA9IG1vdmVIZWFkZXJzVG9RdWVyeShwcmVwYXJlUmVxdWVzdChvcmlnaW5hbFJlcXVlc3QpLCB7IHVuaG9pc3RhYmxlSGVhZGVycyB9KTtcblxuICAgIGlmIChjcmVkZW50aWFscy5zZXNzaW9uVG9rZW4pIHtcbiAgICAgIHJlcXVlc3QucXVlcnlbVE9LRU5fUVVFUllfUEFSQU1dID0gY3JlZGVudGlhbHMuc2Vzc2lvblRva2VuO1xuICAgIH1cbiAgICByZXF1ZXN0LnF1ZXJ5W0FMR09SSVRITV9RVUVSWV9QQVJBTV0gPSBBTEdPUklUSE1fSURFTlRJRklFUjtcbiAgICByZXF1ZXN0LnF1ZXJ5W0NSRURFTlRJQUxfUVVFUllfUEFSQU1dID0gYCR7Y3JlZGVudGlhbHMuYWNjZXNzS2V5SWR9LyR7c2NvcGV9YDtcbiAgICByZXF1ZXN0LnF1ZXJ5W0FNWl9EQVRFX1FVRVJZX1BBUkFNXSA9IGxvbmdEYXRlO1xuICAgIHJlcXVlc3QucXVlcnlbRVhQSVJFU19RVUVSWV9QQVJBTV0gPSBleHBpcmVzSW4udG9TdHJpbmcoMTApO1xuXG4gICAgY29uc3QgY2Fub25pY2FsSGVhZGVycyA9IGdldENhbm9uaWNhbEhlYWRlcnMocmVxdWVzdCwgdW5zaWduYWJsZUhlYWRlcnMsIHNpZ25hYmxlSGVhZGVycyk7XG4gICAgcmVxdWVzdC5xdWVyeVtTSUdORURfSEVBREVSU19RVUVSWV9QQVJBTV0gPSBnZXRDYW5vbmljYWxIZWFkZXJMaXN0KGNhbm9uaWNhbEhlYWRlcnMpO1xuXG4gICAgcmVxdWVzdC5xdWVyeVtTSUdOQVRVUkVfUVVFUllfUEFSQU1dID0gYXdhaXQgdGhpcy5nZXRTaWduYXR1cmUoXG4gICAgICBsb25nRGF0ZSxcbiAgICAgIHNjb3BlLFxuICAgICAgdGhpcy5nZXRTaWduaW5nS2V5KGNyZWRlbnRpYWxzLCByZWdpb24sIHNob3J0RGF0ZSwgc2lnbmluZ1NlcnZpY2UpLFxuICAgICAgdGhpcy5jcmVhdGVDYW5vbmljYWxSZXF1ZXN0KHJlcXVlc3QsIGNhbm9uaWNhbEhlYWRlcnMsIGF3YWl0IGdldFBheWxvYWRIYXNoKG9yaWdpbmFsUmVxdWVzdCwgdGhpcy5zaGEyNTYpKVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVxdWVzdDtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBzaWduKHN0cmluZ1RvU2lnbjogc3RyaW5nLCBvcHRpb25zPzogU2lnbmluZ0FyZ3VtZW50cyk6IFByb21pc2U8c3RyaW5nPjtcbiAgcHVibGljIGFzeW5jIHNpZ24oZXZlbnQ6IEZvcm1hdHRlZEV2ZW50LCBvcHRpb25zOiBFdmVudFNpZ25pbmdBcmd1bWVudHMpOiBQcm9taXNlPHN0cmluZz47XG4gIHB1YmxpYyBhc3luYyBzaWduKHJlcXVlc3RUb1NpZ246IEh0dHBSZXF1ZXN0LCBvcHRpb25zPzogUmVxdWVzdFNpZ25pbmdBcmd1bWVudHMpOiBQcm9taXNlPEh0dHBSZXF1ZXN0PjtcbiAgcHVibGljIGFzeW5jIHNpZ24odG9TaWduOiBhbnksIG9wdGlvbnM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKHR5cGVvZiB0b1NpZ24gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHJldHVybiB0aGlzLnNpZ25TdHJpbmcodG9TaWduLCBvcHRpb25zKTtcbiAgICB9IGVsc2UgaWYgKHRvU2lnbi5oZWFkZXJzICYmIHRvU2lnbi5wYXlsb2FkKSB7XG4gICAgICByZXR1cm4gdGhpcy5zaWduRXZlbnQodG9TaWduLCBvcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuc2lnblJlcXVlc3QodG9TaWduLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNpZ25FdmVudChcbiAgICB7IGhlYWRlcnMsIHBheWxvYWQgfTogRm9ybWF0dGVkRXZlbnQsXG4gICAgeyBzaWduaW5nRGF0ZSA9IG5ldyBEYXRlKCksIHByaW9yU2lnbmF0dXJlLCBzaWduaW5nUmVnaW9uLCBzaWduaW5nU2VydmljZSB9OiBFdmVudFNpZ25pbmdBcmd1bWVudHNcbiAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBjb25zdCByZWdpb24gPSBzaWduaW5nUmVnaW9uID8/IChhd2FpdCB0aGlzLnJlZ2lvblByb3ZpZGVyKCkpO1xuICAgIGNvbnN0IHsgc2hvcnREYXRlLCBsb25nRGF0ZSB9ID0gZm9ybWF0RGF0ZShzaWduaW5nRGF0ZSk7XG4gICAgY29uc3Qgc2NvcGUgPSBjcmVhdGVTY29wZShzaG9ydERhdGUsIHJlZ2lvbiwgc2lnbmluZ1NlcnZpY2UgPz8gdGhpcy5zZXJ2aWNlKTtcbiAgICBjb25zdCBoYXNoZWRQYXlsb2FkID0gYXdhaXQgZ2V0UGF5bG9hZEhhc2goeyBoZWFkZXJzOiB7fSwgYm9keTogcGF5bG9hZCB9IGFzIGFueSwgdGhpcy5zaGEyNTYpO1xuICAgIGNvbnN0IGhhc2ggPSBuZXcgdGhpcy5zaGEyNTYoKTtcbiAgICBoYXNoLnVwZGF0ZShoZWFkZXJzKTtcbiAgICBjb25zdCBoYXNoZWRIZWFkZXJzID0gdG9IZXgoYXdhaXQgaGFzaC5kaWdlc3QoKSk7XG4gICAgY29uc3Qgc3RyaW5nVG9TaWduID0gW1xuICAgICAgRVZFTlRfQUxHT1JJVEhNX0lERU5USUZJRVIsXG4gICAgICBsb25nRGF0ZSxcbiAgICAgIHNjb3BlLFxuICAgICAgcHJpb3JTaWduYXR1cmUsXG4gICAgICBoYXNoZWRIZWFkZXJzLFxuICAgICAgaGFzaGVkUGF5bG9hZCxcbiAgICBdLmpvaW4oXCJcXG5cIik7XG4gICAgcmV0dXJuIHRoaXMuc2lnblN0cmluZyhzdHJpbmdUb1NpZ24sIHsgc2lnbmluZ0RhdGUsIHNpZ25pbmdSZWdpb246IHJlZ2lvbiwgc2lnbmluZ1NlcnZpY2UgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNpZ25TdHJpbmcoXG4gICAgc3RyaW5nVG9TaWduOiBzdHJpbmcsXG4gICAgeyBzaWduaW5nRGF0ZSA9IG5ldyBEYXRlKCksIHNpZ25pbmdSZWdpb24sIHNpZ25pbmdTZXJ2aWNlIH06IFNpZ25pbmdBcmd1bWVudHMgPSB7fVxuICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIGNvbnN0IGNyZWRlbnRpYWxzID0gYXdhaXQgdGhpcy5jcmVkZW50aWFsUHJvdmlkZXIoKTtcbiAgICBjb25zdCByZWdpb24gPSBzaWduaW5nUmVnaW9uID8/IChhd2FpdCB0aGlzLnJlZ2lvblByb3ZpZGVyKCkpO1xuICAgIGNvbnN0IHsgc2hvcnREYXRlIH0gPSBmb3JtYXREYXRlKHNpZ25pbmdEYXRlKTtcblxuICAgIGNvbnN0IGhhc2ggPSBuZXcgdGhpcy5zaGEyNTYoYXdhaXQgdGhpcy5nZXRTaWduaW5nS2V5KGNyZWRlbnRpYWxzLCByZWdpb24sIHNob3J0RGF0ZSwgc2lnbmluZ1NlcnZpY2UpKTtcbiAgICBoYXNoLnVwZGF0ZShzdHJpbmdUb1NpZ24pO1xuICAgIHJldHVybiB0b0hleChhd2FpdCBoYXNoLmRpZ2VzdCgpKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2lnblJlcXVlc3QoXG4gICAgcmVxdWVzdFRvU2lnbjogSHR0cFJlcXVlc3QsXG4gICAge1xuICAgICAgc2lnbmluZ0RhdGUgPSBuZXcgRGF0ZSgpLFxuICAgICAgc2lnbmFibGVIZWFkZXJzLFxuICAgICAgdW5zaWduYWJsZUhlYWRlcnMsXG4gICAgICBzaWduaW5nUmVnaW9uLFxuICAgICAgc2lnbmluZ1NlcnZpY2UsXG4gICAgfTogUmVxdWVzdFNpZ25pbmdBcmd1bWVudHMgPSB7fVxuICApOiBQcm9taXNlPEh0dHBSZXF1ZXN0PiB7XG4gICAgY29uc3QgY3JlZGVudGlhbHMgPSBhd2FpdCB0aGlzLmNyZWRlbnRpYWxQcm92aWRlcigpO1xuICAgIGNvbnN0IHJlZ2lvbiA9IHNpZ25pbmdSZWdpb24gPz8gKGF3YWl0IHRoaXMucmVnaW9uUHJvdmlkZXIoKSk7XG4gICAgY29uc3QgcmVxdWVzdCA9IHByZXBhcmVSZXF1ZXN0KHJlcXVlc3RUb1NpZ24pO1xuICAgIGNvbnN0IHsgbG9uZ0RhdGUsIHNob3J0RGF0ZSB9ID0gZm9ybWF0RGF0ZShzaWduaW5nRGF0ZSk7XG4gICAgY29uc3Qgc2NvcGUgPSBjcmVhdGVTY29wZShzaG9ydERhdGUsIHJlZ2lvbiwgc2lnbmluZ1NlcnZpY2UgPz8gdGhpcy5zZXJ2aWNlKTtcblxuICAgIHJlcXVlc3QuaGVhZGVyc1tBTVpfREFURV9IRUFERVJdID0gbG9uZ0RhdGU7XG4gICAgaWYgKGNyZWRlbnRpYWxzLnNlc3Npb25Ub2tlbikge1xuICAgICAgcmVxdWVzdC5oZWFkZXJzW1RPS0VOX0hFQURFUl0gPSBjcmVkZW50aWFscy5zZXNzaW9uVG9rZW47XG4gICAgfVxuXG4gICAgY29uc3QgcGF5bG9hZEhhc2ggPSBhd2FpdCBnZXRQYXlsb2FkSGFzaChyZXF1ZXN0LCB0aGlzLnNoYTI1Nik7XG4gICAgaWYgKCFoYXNIZWFkZXIoU0hBMjU2X0hFQURFUiwgcmVxdWVzdC5oZWFkZXJzKSAmJiB0aGlzLmFwcGx5Q2hlY2tzdW0pIHtcbiAgICAgIHJlcXVlc3QuaGVhZGVyc1tTSEEyNTZfSEVBREVSXSA9IHBheWxvYWRIYXNoO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbm9uaWNhbEhlYWRlcnMgPSBnZXRDYW5vbmljYWxIZWFkZXJzKHJlcXVlc3QsIHVuc2lnbmFibGVIZWFkZXJzLCBzaWduYWJsZUhlYWRlcnMpO1xuICAgIGNvbnN0IHNpZ25hdHVyZSA9IGF3YWl0IHRoaXMuZ2V0U2lnbmF0dXJlKFxuICAgICAgbG9uZ0RhdGUsXG4gICAgICBzY29wZSxcbiAgICAgIHRoaXMuZ2V0U2lnbmluZ0tleShjcmVkZW50aWFscywgcmVnaW9uLCBzaG9ydERhdGUsIHNpZ25pbmdTZXJ2aWNlKSxcbiAgICAgIHRoaXMuY3JlYXRlQ2Fub25pY2FsUmVxdWVzdChyZXF1ZXN0LCBjYW5vbmljYWxIZWFkZXJzLCBwYXlsb2FkSGFzaClcbiAgICApO1xuXG4gICAgcmVxdWVzdC5oZWFkZXJzW0FVVEhfSEVBREVSXSA9XG4gICAgICBgJHtBTEdPUklUSE1fSURFTlRJRklFUn0gYCArXG4gICAgICBgQ3JlZGVudGlhbD0ke2NyZWRlbnRpYWxzLmFjY2Vzc0tleUlkfS8ke3Njb3BlfSwgYCArXG4gICAgICBgU2lnbmVkSGVhZGVycz0ke2dldENhbm9uaWNhbEhlYWRlckxpc3QoY2Fub25pY2FsSGVhZGVycyl9LCBgICtcbiAgICAgIGBTaWduYXR1cmU9JHtzaWduYXR1cmV9YDtcblxuICAgIHJldHVybiByZXF1ZXN0O1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVDYW5vbmljYWxSZXF1ZXN0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0LCBjYW5vbmljYWxIZWFkZXJzOiBIZWFkZXJCYWcsIHBheWxvYWRIYXNoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHNvcnRlZEhlYWRlcnMgPSBPYmplY3Qua2V5cyhjYW5vbmljYWxIZWFkZXJzKS5zb3J0KCk7XG4gICAgcmV0dXJuIGAke3JlcXVlc3QubWV0aG9kfVxuJHt0aGlzLmdldENhbm9uaWNhbFBhdGgocmVxdWVzdCl9XG4ke2dldENhbm9uaWNhbFF1ZXJ5KHJlcXVlc3QpfVxuJHtzb3J0ZWRIZWFkZXJzLm1hcCgobmFtZSkgPT4gYCR7bmFtZX06JHtjYW5vbmljYWxIZWFkZXJzW25hbWVdfWApLmpvaW4oXCJcXG5cIil9XG5cbiR7c29ydGVkSGVhZGVycy5qb2luKFwiO1wiKX1cbiR7cGF5bG9hZEhhc2h9YDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY3JlYXRlU3RyaW5nVG9TaWduKFxuICAgIGxvbmdEYXRlOiBzdHJpbmcsXG4gICAgY3JlZGVudGlhbFNjb3BlOiBzdHJpbmcsXG4gICAgY2Fub25pY2FsUmVxdWVzdDogc3RyaW5nXG4gICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgY29uc3QgaGFzaCA9IG5ldyB0aGlzLnNoYTI1NigpO1xuICAgIGhhc2gudXBkYXRlKGNhbm9uaWNhbFJlcXVlc3QpO1xuICAgIGNvbnN0IGhhc2hlZFJlcXVlc3QgPSBhd2FpdCBoYXNoLmRpZ2VzdCgpO1xuXG4gICAgcmV0dXJuIGAke0FMR09SSVRITV9JREVOVElGSUVSfVxuJHtsb25nRGF0ZX1cbiR7Y3JlZGVudGlhbFNjb3BlfVxuJHt0b0hleChoYXNoZWRSZXF1ZXN0KX1gO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDYW5vbmljYWxQYXRoKHsgcGF0aCB9OiBIdHRwUmVxdWVzdCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMudXJpRXNjYXBlUGF0aCkge1xuICAgICAgY29uc3QgZG91YmxlRW5jb2RlZCA9IGVuY29kZVVSSUNvbXBvbmVudChwYXRoLnJlcGxhY2UoL15cXC8vLCBcIlwiKSk7XG4gICAgICByZXR1cm4gYC8ke2RvdWJsZUVuY29kZWQucmVwbGFjZSgvJTJGL2csIFwiL1wiKX1gO1xuICAgIH1cblxuICAgIHJldHVybiBwYXRoO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBnZXRTaWduYXR1cmUoXG4gICAgbG9uZ0RhdGU6IHN0cmluZyxcbiAgICBjcmVkZW50aWFsU2NvcGU6IHN0cmluZyxcbiAgICBrZXlQcm9taXNlOiBQcm9taXNlPFVpbnQ4QXJyYXk+LFxuICAgIGNhbm9uaWNhbFJlcXVlc3Q6IHN0cmluZ1xuICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIGNvbnN0IHN0cmluZ1RvU2lnbiA9IGF3YWl0IHRoaXMuY3JlYXRlU3RyaW5nVG9TaWduKGxvbmdEYXRlLCBjcmVkZW50aWFsU2NvcGUsIGNhbm9uaWNhbFJlcXVlc3QpO1xuXG4gICAgY29uc3QgaGFzaCA9IG5ldyB0aGlzLnNoYTI1Nihhd2FpdCBrZXlQcm9taXNlKTtcbiAgICBoYXNoLnVwZGF0ZShzdHJpbmdUb1NpZ24pO1xuICAgIHJldHVybiB0b0hleChhd2FpdCBoYXNoLmRpZ2VzdCgpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2lnbmluZ0tleShcbiAgICBjcmVkZW50aWFsczogQ3JlZGVudGlhbHMsXG4gICAgcmVnaW9uOiBzdHJpbmcsXG4gICAgc2hvcnREYXRlOiBzdHJpbmcsXG4gICAgc2VydmljZT86IHN0cmluZ1xuICApOiBQcm9taXNlPFVpbnQ4QXJyYXk+IHtcbiAgICByZXR1cm4gZ2V0U2lnbmluZ0tleSh0aGlzLnNoYTI1NiwgY3JlZGVudGlhbHMsIHNob3J0RGF0ZSwgcmVnaW9uLCBzZXJ2aWNlIHx8IHRoaXMuc2VydmljZSk7XG4gIH1cbn1cblxuY29uc3QgZm9ybWF0RGF0ZSA9IChub3c6IERhdGVJbnB1dCk6IHsgbG9uZ0RhdGU6IHN0cmluZzsgc2hvcnREYXRlOiBzdHJpbmcgfSA9PiB7XG4gIGNvbnN0IGxvbmdEYXRlID0gaXNvODYwMShub3cpLnJlcGxhY2UoL1tcXC06XS9nLCBcIlwiKTtcbiAgcmV0dXJuIHtcbiAgICBsb25nRGF0ZSxcbiAgICBzaG9ydERhdGU6IGxvbmdEYXRlLnN1YnN0cigwLCA4KSxcbiAgfTtcbn07XG5cbmNvbnN0IGdldENhbm9uaWNhbEhlYWRlckxpc3QgPSAoaGVhZGVyczogb2JqZWN0KTogc3RyaW5nID0+IE9iamVjdC5rZXlzKGhlYWRlcnMpLnNvcnQoKS5qb2luKFwiO1wiKTtcblxuY29uc3Qgbm9ybWFsaXplUmVnaW9uUHJvdmlkZXIgPSAocmVnaW9uOiBzdHJpbmcgfCBQcm92aWRlcjxzdHJpbmc+KTogUHJvdmlkZXI8c3RyaW5nPiA9PiB7XG4gIGlmICh0eXBlb2YgcmVnaW9uID09PSBcInN0cmluZ1wiKSB7XG4gICAgY29uc3QgcHJvbWlzaWZpZWQgPSBQcm9taXNlLnJlc29sdmUocmVnaW9uKTtcbiAgICByZXR1cm4gKCkgPT4gcHJvbWlzaWZpZWQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlZ2lvbjtcbiAgfVxufTtcblxuY29uc3Qgbm9ybWFsaXplQ3JlZGVudGlhbHNQcm92aWRlciA9IChjcmVkZW50aWFsczogQ3JlZGVudGlhbHMgfCBQcm92aWRlcjxDcmVkZW50aWFscz4pOiBQcm92aWRlcjxDcmVkZW50aWFscz4gPT4ge1xuICBpZiAodHlwZW9mIGNyZWRlbnRpYWxzID09PSBcIm9iamVjdFwiKSB7XG4gICAgY29uc3QgcHJvbWlzaWZpZWQgPSBQcm9taXNlLnJlc29sdmUoY3JlZGVudGlhbHMpO1xuICAgIHJldHVybiAoKSA9PiBwcm9taXNpZmllZDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY3JlZGVudGlhbHM7XG4gIH1cbn07XG4iXX0=

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/cloneRequest.js":
/*!**********************************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/cloneRequest.js ***!
  \**********************************************************************************************************************************************/
/*! exports provided: cloneRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneRequest", function() { return cloneRequest; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

/**
 * @internal
 */
function cloneRequest(_a) {
    var headers = _a.headers, query = _a.query, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["headers", "query"]);
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, rest), { headers: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, headers), query: query ? cloneQuery(query) : undefined });
}
function cloneQuery(query) {
    return Object.keys(query).reduce(function (carry, paramName) {
        var _a;
        var param = query[paramName];
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, carry), (_a = {}, _a[paramName] = Array.isArray(param) ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(param) : param, _a));
    }, {});
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvbmVSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Nsb25lUmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUE7O0dBRUc7QUFDSCxNQUFNLFVBQVUsWUFBWSxDQUFDLEVBQXdDO0lBQXRDLElBQUEsT0FBTyxhQUFBLEVBQUUsS0FBSyxXQUFBLEVBQUssSUFBSSxjQUF6QixvQkFBMkIsQ0FBRjtJQUNwRCw2QkFDSyxJQUFJLEtBQ1AsT0FBTyxlQUFPLE9BQU8sR0FDckIsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLElBQzVDO0FBQ0osQ0FBQztBQUVELFNBQVMsVUFBVSxDQUFDLEtBQXdCO0lBQzFDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxLQUF3QixFQUFFLFNBQWlCOztRQUMzRSxJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0IsNkJBQ0ssS0FBSyxnQkFDUCxTQUFTLElBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFVBQUssS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLE9BQ3REO0lBQ0osQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ1QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBSZXF1ZXN0LCBRdWVyeVBhcmFtZXRlckJhZyB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVSZXF1ZXN0KHsgaGVhZGVycywgcXVlcnksIC4uLnJlc3QgfTogSHR0cFJlcXVlc3QpOiBIdHRwUmVxdWVzdCB7XG4gIHJldHVybiB7XG4gICAgLi4ucmVzdCxcbiAgICBoZWFkZXJzOiB7IC4uLmhlYWRlcnMgfSxcbiAgICBxdWVyeTogcXVlcnkgPyBjbG9uZVF1ZXJ5KHF1ZXJ5KSA6IHVuZGVmaW5lZCxcbiAgfTtcbn1cblxuZnVuY3Rpb24gY2xvbmVRdWVyeShxdWVyeTogUXVlcnlQYXJhbWV0ZXJCYWcpOiBRdWVyeVBhcmFtZXRlckJhZyB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhxdWVyeSkucmVkdWNlKChjYXJyeTogUXVlcnlQYXJhbWV0ZXJCYWcsIHBhcmFtTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcGFyYW0gPSBxdWVyeVtwYXJhbU5hbWVdO1xuICAgIHJldHVybiB7XG4gICAgICAuLi5jYXJyeSxcbiAgICAgIFtwYXJhbU5hbWVdOiBBcnJheS5pc0FycmF5KHBhcmFtKSA/IFsuLi5wYXJhbV0gOiBwYXJhbSxcbiAgICB9O1xuICB9LCB7fSk7XG59XG4iXX0=

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/constants.js":
/*!*******************************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/constants.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: ALGORITHM_QUERY_PARAM, CREDENTIAL_QUERY_PARAM, AMZ_DATE_QUERY_PARAM, SIGNED_HEADERS_QUERY_PARAM, EXPIRES_QUERY_PARAM, SIGNATURE_QUERY_PARAM, TOKEN_QUERY_PARAM, AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER, GENERATED_HEADERS, SIGNATURE_HEADER, SHA256_HEADER, TOKEN_HEADER, HOST_HEADER, ALWAYS_UNSIGNABLE_HEADERS, PROXY_HEADER_PATTERN, SEC_HEADER_PATTERN, UNSIGNABLE_PATTERNS, ALGORITHM_IDENTIFIER, EVENT_ALGORITHM_IDENTIFIER, UNSIGNED_PAYLOAD, MAX_CACHE_SIZE, KEY_TYPE_IDENTIFIER, MAX_PRESIGNED_TTL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALGORITHM_QUERY_PARAM", function() { return ALGORITHM_QUERY_PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREDENTIAL_QUERY_PARAM", function() { return CREDENTIAL_QUERY_PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AMZ_DATE_QUERY_PARAM", function() { return AMZ_DATE_QUERY_PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNED_HEADERS_QUERY_PARAM", function() { return SIGNED_HEADERS_QUERY_PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPIRES_QUERY_PARAM", function() { return EXPIRES_QUERY_PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNATURE_QUERY_PARAM", function() { return SIGNATURE_QUERY_PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_QUERY_PARAM", function() { return TOKEN_QUERY_PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_HEADER", function() { return AUTH_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AMZ_DATE_HEADER", function() { return AMZ_DATE_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE_HEADER", function() { return DATE_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENERATED_HEADERS", function() { return GENERATED_HEADERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNATURE_HEADER", function() { return SIGNATURE_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHA256_HEADER", function() { return SHA256_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_HEADER", function() { return TOKEN_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOST_HEADER", function() { return HOST_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALWAYS_UNSIGNABLE_HEADERS", function() { return ALWAYS_UNSIGNABLE_HEADERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROXY_HEADER_PATTERN", function() { return PROXY_HEADER_PATTERN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEC_HEADER_PATTERN", function() { return SEC_HEADER_PATTERN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNSIGNABLE_PATTERNS", function() { return UNSIGNABLE_PATTERNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALGORITHM_IDENTIFIER", function() { return ALGORITHM_IDENTIFIER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_ALGORITHM_IDENTIFIER", function() { return EVENT_ALGORITHM_IDENTIFIER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNSIGNED_PAYLOAD", function() { return UNSIGNED_PAYLOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_CACHE_SIZE", function() { return MAX_CACHE_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_TYPE_IDENTIFIER", function() { return KEY_TYPE_IDENTIFIER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_PRESIGNED_TTL", function() { return MAX_PRESIGNED_TTL; });
var ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
var CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
var AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
var SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
var EXPIRES_QUERY_PARAM = "X-Amz-Expires";
var SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
var TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
var AUTH_HEADER = "authorization";
var AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
var DATE_HEADER = "date";
var GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
var SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
var SHA256_HEADER = "x-amz-content-sha256";
var TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
var HOST_HEADER = "host";
var ALWAYS_UNSIGNABLE_HEADERS = {
    authorization: true,
    "cache-control": true,
    connection: true,
    expect: true,
    from: true,
    "keep-alive": true,
    "max-forwards": true,
    pragma: true,
    referer: true,
    te: true,
    trailer: true,
    "transfer-encoding": true,
    upgrade: true,
    "user-agent": true,
    "x-amzn-trace-id": true,
};
var PROXY_HEADER_PATTERN = /^proxy-/;
var SEC_HEADER_PATTERN = /^sec-/;
var UNSIGNABLE_PATTERNS = [/^proxy-/i, /^sec-/i];
var ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
var EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
var UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
var MAX_CACHE_SIZE = 50;
var KEY_TYPE_IDENTIFIER = "aws4_request";
var MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsSUFBTSxxQkFBcUIsR0FBRyxpQkFBaUIsQ0FBQztBQUN2RCxNQUFNLENBQUMsSUFBTSxzQkFBc0IsR0FBRyxrQkFBa0IsQ0FBQztBQUN6RCxNQUFNLENBQUMsSUFBTSxvQkFBb0IsR0FBRyxZQUFZLENBQUM7QUFDakQsTUFBTSxDQUFDLElBQU0sMEJBQTBCLEdBQUcscUJBQXFCLENBQUM7QUFDaEUsTUFBTSxDQUFDLElBQU0sbUJBQW1CLEdBQUcsZUFBZSxDQUFDO0FBQ25ELE1BQU0sQ0FBQyxJQUFNLHFCQUFxQixHQUFHLGlCQUFpQixDQUFDO0FBQ3ZELE1BQU0sQ0FBQyxJQUFNLGlCQUFpQixHQUFHLHNCQUFzQixDQUFDO0FBRXhELE1BQU0sQ0FBQyxJQUFNLFdBQVcsR0FBRyxlQUFlLENBQUM7QUFDM0MsTUFBTSxDQUFDLElBQU0sZUFBZSxHQUFHLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ2xFLE1BQU0sQ0FBQyxJQUFNLFdBQVcsR0FBRyxNQUFNLENBQUM7QUFDbEMsTUFBTSxDQUFDLElBQU0saUJBQWlCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQzdFLE1BQU0sQ0FBQyxJQUFNLGdCQUFnQixHQUFHLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3BFLE1BQU0sQ0FBQyxJQUFNLGFBQWEsR0FBRyxzQkFBc0IsQ0FBQztBQUNwRCxNQUFNLENBQUMsSUFBTSxZQUFZLEdBQUcsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDNUQsTUFBTSxDQUFDLElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQztBQUVsQyxNQUFNLENBQUMsSUFBTSx5QkFBeUIsR0FBRztJQUN2QyxhQUFhLEVBQUUsSUFBSTtJQUNuQixlQUFlLEVBQUUsSUFBSTtJQUNyQixVQUFVLEVBQUUsSUFBSTtJQUNoQixNQUFNLEVBQUUsSUFBSTtJQUNaLElBQUksRUFBRSxJQUFJO0lBQ1YsWUFBWSxFQUFFLElBQUk7SUFDbEIsY0FBYyxFQUFFLElBQUk7SUFDcEIsTUFBTSxFQUFFLElBQUk7SUFDWixPQUFPLEVBQUUsSUFBSTtJQUNiLEVBQUUsRUFBRSxJQUFJO0lBQ1IsT0FBTyxFQUFFLElBQUk7SUFDYixtQkFBbUIsRUFBRSxJQUFJO0lBQ3pCLE9BQU8sRUFBRSxJQUFJO0lBQ2IsWUFBWSxFQUFFLElBQUk7SUFDbEIsaUJBQWlCLEVBQUUsSUFBSTtDQUN4QixDQUFDO0FBRUYsTUFBTSxDQUFDLElBQU0sb0JBQW9CLEdBQUcsU0FBUyxDQUFDO0FBRTlDLE1BQU0sQ0FBQyxJQUFNLGtCQUFrQixHQUFHLE9BQU8sQ0FBQztBQUUxQyxNQUFNLENBQUMsSUFBTSxtQkFBbUIsR0FBRyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUUxRCxNQUFNLENBQUMsSUFBTSxvQkFBb0IsR0FBRyxrQkFBa0IsQ0FBQztBQUV2RCxNQUFNLENBQUMsSUFBTSwwQkFBMEIsR0FBRywwQkFBMEIsQ0FBQztBQUVyRSxNQUFNLENBQUMsSUFBTSxnQkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQztBQUVuRCxNQUFNLENBQUMsSUFBTSxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBQ2pDLE1BQU0sQ0FBQyxJQUFNLG1CQUFtQixHQUFHLGNBQWMsQ0FBQztBQUVsRCxNQUFNLENBQUMsSUFBTSxpQkFBaUIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQUxHT1JJVEhNX1FVRVJZX1BBUkFNID0gXCJYLUFtei1BbGdvcml0aG1cIjtcbmV4cG9ydCBjb25zdCBDUkVERU5USUFMX1FVRVJZX1BBUkFNID0gXCJYLUFtei1DcmVkZW50aWFsXCI7XG5leHBvcnQgY29uc3QgQU1aX0RBVEVfUVVFUllfUEFSQU0gPSBcIlgtQW16LURhdGVcIjtcbmV4cG9ydCBjb25zdCBTSUdORURfSEVBREVSU19RVUVSWV9QQVJBTSA9IFwiWC1BbXotU2lnbmVkSGVhZGVyc1wiO1xuZXhwb3J0IGNvbnN0IEVYUElSRVNfUVVFUllfUEFSQU0gPSBcIlgtQW16LUV4cGlyZXNcIjtcbmV4cG9ydCBjb25zdCBTSUdOQVRVUkVfUVVFUllfUEFSQU0gPSBcIlgtQW16LVNpZ25hdHVyZVwiO1xuZXhwb3J0IGNvbnN0IFRPS0VOX1FVRVJZX1BBUkFNID0gXCJYLUFtei1TZWN1cml0eS1Ub2tlblwiO1xuXG5leHBvcnQgY29uc3QgQVVUSF9IRUFERVIgPSBcImF1dGhvcml6YXRpb25cIjtcbmV4cG9ydCBjb25zdCBBTVpfREFURV9IRUFERVIgPSBBTVpfREFURV9RVUVSWV9QQVJBTS50b0xvd2VyQ2FzZSgpO1xuZXhwb3J0IGNvbnN0IERBVEVfSEVBREVSID0gXCJkYXRlXCI7XG5leHBvcnQgY29uc3QgR0VORVJBVEVEX0hFQURFUlMgPSBbQVVUSF9IRUFERVIsIEFNWl9EQVRFX0hFQURFUiwgREFURV9IRUFERVJdO1xuZXhwb3J0IGNvbnN0IFNJR05BVFVSRV9IRUFERVIgPSBTSUdOQVRVUkVfUVVFUllfUEFSQU0udG9Mb3dlckNhc2UoKTtcbmV4cG9ydCBjb25zdCBTSEEyNTZfSEVBREVSID0gXCJ4LWFtei1jb250ZW50LXNoYTI1NlwiO1xuZXhwb3J0IGNvbnN0IFRPS0VOX0hFQURFUiA9IFRPS0VOX1FVRVJZX1BBUkFNLnRvTG93ZXJDYXNlKCk7XG5leHBvcnQgY29uc3QgSE9TVF9IRUFERVIgPSBcImhvc3RcIjtcblxuZXhwb3J0IGNvbnN0IEFMV0FZU19VTlNJR05BQkxFX0hFQURFUlMgPSB7XG4gIGF1dGhvcml6YXRpb246IHRydWUsXG4gIFwiY2FjaGUtY29udHJvbFwiOiB0cnVlLFxuICBjb25uZWN0aW9uOiB0cnVlLFxuICBleHBlY3Q6IHRydWUsXG4gIGZyb206IHRydWUsXG4gIFwia2VlcC1hbGl2ZVwiOiB0cnVlLFxuICBcIm1heC1mb3J3YXJkc1wiOiB0cnVlLFxuICBwcmFnbWE6IHRydWUsXG4gIHJlZmVyZXI6IHRydWUsXG4gIHRlOiB0cnVlLFxuICB0cmFpbGVyOiB0cnVlLFxuICBcInRyYW5zZmVyLWVuY29kaW5nXCI6IHRydWUsXG4gIHVwZ3JhZGU6IHRydWUsXG4gIFwidXNlci1hZ2VudFwiOiB0cnVlLFxuICBcIngtYW16bi10cmFjZS1pZFwiOiB0cnVlLFxufTtcblxuZXhwb3J0IGNvbnN0IFBST1hZX0hFQURFUl9QQVRURVJOID0gL15wcm94eS0vO1xuXG5leHBvcnQgY29uc3QgU0VDX0hFQURFUl9QQVRURVJOID0gL15zZWMtLztcblxuZXhwb3J0IGNvbnN0IFVOU0lHTkFCTEVfUEFUVEVSTlMgPSBbL15wcm94eS0vaSwgL15zZWMtL2ldO1xuXG5leHBvcnQgY29uc3QgQUxHT1JJVEhNX0lERU5USUZJRVIgPSBcIkFXUzQtSE1BQy1TSEEyNTZcIjtcblxuZXhwb3J0IGNvbnN0IEVWRU5UX0FMR09SSVRITV9JREVOVElGSUVSID0gXCJBV1M0LUhNQUMtU0hBMjU2LVBBWUxPQURcIjtcblxuZXhwb3J0IGNvbnN0IFVOU0lHTkVEX1BBWUxPQUQgPSBcIlVOU0lHTkVELVBBWUxPQURcIjtcblxuZXhwb3J0IGNvbnN0IE1BWF9DQUNIRV9TSVpFID0gNTA7XG5leHBvcnQgY29uc3QgS0VZX1RZUEVfSURFTlRJRklFUiA9IFwiYXdzNF9yZXF1ZXN0XCI7XG5cbmV4cG9ydCBjb25zdCBNQVhfUFJFU0lHTkVEX1RUTCA9IDYwICogNjAgKiAyNCAqIDc7XG4iXX0=

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/credentialDerivation.js":
/*!******************************************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/credentialDerivation.js ***!
  \******************************************************************************************************************************************************/
/*! exports provided: createScope, getSigningKey, clearCredentialCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createScope", function() { return createScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSigningKey", function() { return getSigningKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCredentialCache", function() { return clearCredentialCache; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/util-hex-encoding */ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/util-hex-encoding/dist/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/constants.js");



var signingKeyCache = {};
var cacheQueue = [];
/**
 * Create a string describing the scope of credentials used to sign a request.
 *
 * @param shortDate The current calendar date in the form YYYYMMDD.
 * @param region    The AWS region in which the service resides.
 * @param service   The service to which the signed request is being sent.
 */
function createScope(shortDate, region, service) {
    return shortDate + "/" + region + "/" + service + "/" + _constants__WEBPACK_IMPORTED_MODULE_2__["KEY_TYPE_IDENTIFIER"];
}
/**
 * Derive a signing key from its composite parts
 *
 * @param sha256Constructor A constructor function that can instantiate SHA-256
 *                          hash objects.
 * @param credentials       The credentials with which the request will be
 *                          signed.
 * @param shortDate         The current calendar date in the form YYYYMMDD.
 * @param region            The AWS region in which the service resides.
 * @param service           The service to which the signed request is being
 *                          sent.
 */
var getSigningKey = function (sha256Constructor, credentials, shortDate, region, service) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var credsHash, cacheKey, key, _a, _b, signable, e_1_1;
    var e_1, _c;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId)];
            case 1:
                credsHash = _d.sent();
                cacheKey = shortDate + ":" + region + ":" + service + ":" + Object(_aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_1__["toHex"])(credsHash) + ":" + credentials.sessionToken;
                if (cacheKey in signingKeyCache) {
                    return [2 /*return*/, signingKeyCache[cacheKey]];
                }
                cacheQueue.push(cacheKey);
                while (cacheQueue.length > _constants__WEBPACK_IMPORTED_MODULE_2__["MAX_CACHE_SIZE"]) {
                    delete signingKeyCache[cacheQueue.shift()];
                }
                key = "AWS4" + credentials.secretAccessKey;
                _d.label = 2;
            case 2:
                _d.trys.push([2, 7, 8, 9]);
                _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])([shortDate, region, service, _constants__WEBPACK_IMPORTED_MODULE_2__["KEY_TYPE_IDENTIFIER"]]), _b = _a.next();
                _d.label = 3;
            case 3:
                if (!!_b.done) return [3 /*break*/, 6];
                signable = _b.value;
                return [4 /*yield*/, hmac(sha256Constructor, key, signable)];
            case 4:
                key = _d.sent();
                _d.label = 5;
            case 5:
                _b = _a.next();
                return [3 /*break*/, 3];
            case 6: return [3 /*break*/, 9];
            case 7:
                e_1_1 = _d.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 9];
            case 8:
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 9: return [2 /*return*/, (signingKeyCache[cacheKey] = key)];
        }
    });
}); };
/**
 * @internal
 */
function clearCredentialCache() {
    cacheQueue.length = 0;
    Object.keys(signingKeyCache).forEach(function (cacheKey) {
        delete signingKeyCache[cacheKey];
    });
}
function hmac(ctor, secret, data) {
    var hash = new ctor(secret);
    hash.update(data);
    return hash.digest();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlZGVudGlhbERlcml2YXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY3JlZGVudGlhbERlcml2YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRWxFLElBQU0sZUFBZSxHQUFrQyxFQUFFLENBQUM7QUFDMUQsSUFBTSxVQUFVLEdBQWtCLEVBQUUsQ0FBQztBQUVyQzs7Ozs7O0dBTUc7QUFDSCxNQUFNLFVBQVUsV0FBVyxDQUFDLFNBQWlCLEVBQUUsTUFBYyxFQUFFLE9BQWU7SUFDNUUsT0FBVSxTQUFTLFNBQUksTUFBTSxTQUFJLE9BQU8sU0FBSSxtQkFBcUIsQ0FBQztBQUNwRSxDQUFDO0FBRUQ7Ozs7Ozs7Ozs7O0dBV0c7QUFDSCxNQUFNLENBQUMsSUFBTSxhQUFhLEdBQUcsVUFDM0IsaUJBQWtDLEVBQ2xDLFdBQXdCLEVBQ3hCLFNBQWlCLEVBQ2pCLE1BQWMsRUFDZCxPQUFlOzs7OztvQkFFRyxxQkFBTSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsV0FBVyxDQUFDLGVBQWUsRUFBRSxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQUE7O2dCQUEvRixTQUFTLEdBQUcsU0FBbUY7Z0JBQy9GLFFBQVEsR0FBTSxTQUFTLFNBQUksTUFBTSxTQUFJLE9BQU8sU0FBSSxLQUFLLENBQUMsU0FBUyxDQUFDLFNBQUksV0FBVyxDQUFDLFlBQWMsQ0FBQztnQkFDckcsSUFBSSxRQUFRLElBQUksZUFBZSxFQUFFO29CQUMvQixzQkFBTyxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQUM7aUJBQ2xDO2dCQUVELFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzFCLE9BQU8sVUFBVSxDQUFDLE1BQU0sR0FBRyxjQUFjLEVBQUU7b0JBQ3pDLE9BQU8sZUFBZSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQVksQ0FBQyxDQUFDO2lCQUN0RDtnQkFFRyxHQUFHLEdBQWUsU0FBTyxXQUFXLENBQUMsZUFBaUIsQ0FBQzs7OztnQkFDcEMsS0FBQSxTQUFBLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsbUJBQW1CLENBQUMsQ0FBQTs7OztnQkFBN0QsUUFBUTtnQkFDWCxxQkFBTSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxFQUFBOztnQkFBbEQsR0FBRyxHQUFHLFNBQTRDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBRXJELHNCQUFPLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQWlCLENBQUMsRUFBQzs7O0tBQ3hELENBQUM7QUFFRjs7R0FFRztBQUNILE1BQU0sVUFBVSxvQkFBb0I7SUFDbEMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRO1FBQzVDLE9BQU8sZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELFNBQVMsSUFBSSxDQUFDLElBQXFCLEVBQUUsTUFBa0IsRUFBRSxJQUFnQjtJQUN2RSxJQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xCLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3ZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDcmVkZW50aWFscywgSGFzaENvbnN0cnVjdG9yLCBTb3VyY2VEYXRhIH0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5pbXBvcnQgeyB0b0hleCB9IGZyb20gXCJAYXdzLXNkay91dGlsLWhleC1lbmNvZGluZ1wiO1xuXG5pbXBvcnQgeyBLRVlfVFlQRV9JREVOVElGSUVSLCBNQVhfQ0FDSEVfU0laRSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCBzaWduaW5nS2V5Q2FjaGU6IHsgW2tleTogc3RyaW5nXTogVWludDhBcnJheSB9ID0ge307XG5jb25zdCBjYWNoZVF1ZXVlOiBBcnJheTxzdHJpbmc+ID0gW107XG5cbi8qKlxuICogQ3JlYXRlIGEgc3RyaW5nIGRlc2NyaWJpbmcgdGhlIHNjb3BlIG9mIGNyZWRlbnRpYWxzIHVzZWQgdG8gc2lnbiBhIHJlcXVlc3QuXG4gKlxuICogQHBhcmFtIHNob3J0RGF0ZSBUaGUgY3VycmVudCBjYWxlbmRhciBkYXRlIGluIHRoZSBmb3JtIFlZWVlNTURELlxuICogQHBhcmFtIHJlZ2lvbiAgICBUaGUgQVdTIHJlZ2lvbiBpbiB3aGljaCB0aGUgc2VydmljZSByZXNpZGVzLlxuICogQHBhcmFtIHNlcnZpY2UgICBUaGUgc2VydmljZSB0byB3aGljaCB0aGUgc2lnbmVkIHJlcXVlc3QgaXMgYmVpbmcgc2VudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNjb3BlKHNob3J0RGF0ZTogc3RyaW5nLCByZWdpb246IHN0cmluZywgc2VydmljZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke3Nob3J0RGF0ZX0vJHtyZWdpb259LyR7c2VydmljZX0vJHtLRVlfVFlQRV9JREVOVElGSUVSfWA7XG59XG5cbi8qKlxuICogRGVyaXZlIGEgc2lnbmluZyBrZXkgZnJvbSBpdHMgY29tcG9zaXRlIHBhcnRzXG4gKlxuICogQHBhcmFtIHNoYTI1NkNvbnN0cnVjdG9yIEEgY29uc3RydWN0b3IgZnVuY3Rpb24gdGhhdCBjYW4gaW5zdGFudGlhdGUgU0hBLTI1NlxuICogICAgICAgICAgICAgICAgICAgICAgICAgIGhhc2ggb2JqZWN0cy5cbiAqIEBwYXJhbSBjcmVkZW50aWFscyAgICAgICBUaGUgY3JlZGVudGlhbHMgd2l0aCB3aGljaCB0aGUgcmVxdWVzdCB3aWxsIGJlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmVkLlxuICogQHBhcmFtIHNob3J0RGF0ZSAgICAgICAgIFRoZSBjdXJyZW50IGNhbGVuZGFyIGRhdGUgaW4gdGhlIGZvcm0gWVlZWU1NREQuXG4gKiBAcGFyYW0gcmVnaW9uICAgICAgICAgICAgVGhlIEFXUyByZWdpb24gaW4gd2hpY2ggdGhlIHNlcnZpY2UgcmVzaWRlcy5cbiAqIEBwYXJhbSBzZXJ2aWNlICAgICAgICAgICBUaGUgc2VydmljZSB0byB3aGljaCB0aGUgc2lnbmVkIHJlcXVlc3QgaXMgYmVpbmdcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICBzZW50LlxuICovXG5leHBvcnQgY29uc3QgZ2V0U2lnbmluZ0tleSA9IGFzeW5jIChcbiAgc2hhMjU2Q29uc3RydWN0b3I6IEhhc2hDb25zdHJ1Y3RvcixcbiAgY3JlZGVudGlhbHM6IENyZWRlbnRpYWxzLFxuICBzaG9ydERhdGU6IHN0cmluZyxcbiAgcmVnaW9uOiBzdHJpbmcsXG4gIHNlcnZpY2U6IHN0cmluZ1xuKTogUHJvbWlzZTxVaW50OEFycmF5PiA9PiB7XG4gIGNvbnN0IGNyZWRzSGFzaCA9IGF3YWl0IGhtYWMoc2hhMjU2Q29uc3RydWN0b3IsIGNyZWRlbnRpYWxzLnNlY3JldEFjY2Vzc0tleSwgY3JlZGVudGlhbHMuYWNjZXNzS2V5SWQpO1xuICBjb25zdCBjYWNoZUtleSA9IGAke3Nob3J0RGF0ZX06JHtyZWdpb259OiR7c2VydmljZX06JHt0b0hleChjcmVkc0hhc2gpfToke2NyZWRlbnRpYWxzLnNlc3Npb25Ub2tlbn1gO1xuICBpZiAoY2FjaGVLZXkgaW4gc2lnbmluZ0tleUNhY2hlKSB7XG4gICAgcmV0dXJuIHNpZ25pbmdLZXlDYWNoZVtjYWNoZUtleV07XG4gIH1cblxuICBjYWNoZVF1ZXVlLnB1c2goY2FjaGVLZXkpO1xuICB3aGlsZSAoY2FjaGVRdWV1ZS5sZW5ndGggPiBNQVhfQ0FDSEVfU0laRSkge1xuICAgIGRlbGV0ZSBzaWduaW5nS2V5Q2FjaGVbY2FjaGVRdWV1ZS5zaGlmdCgpIGFzIHN0cmluZ107XG4gIH1cblxuICBsZXQga2V5OiBTb3VyY2VEYXRhID0gYEFXUzQke2NyZWRlbnRpYWxzLnNlY3JldEFjY2Vzc0tleX1gO1xuICBmb3IgKGNvbnN0IHNpZ25hYmxlIG9mIFtzaG9ydERhdGUsIHJlZ2lvbiwgc2VydmljZSwgS0VZX1RZUEVfSURFTlRJRklFUl0pIHtcbiAgICBrZXkgPSBhd2FpdCBobWFjKHNoYTI1NkNvbnN0cnVjdG9yLCBrZXksIHNpZ25hYmxlKTtcbiAgfVxuICByZXR1cm4gKHNpZ25pbmdLZXlDYWNoZVtjYWNoZUtleV0gPSBrZXkgYXMgVWludDhBcnJheSk7XG59O1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJDcmVkZW50aWFsQ2FjaGUoKTogdm9pZCB7XG4gIGNhY2hlUXVldWUubGVuZ3RoID0gMDtcbiAgT2JqZWN0LmtleXMoc2lnbmluZ0tleUNhY2hlKS5mb3JFYWNoKChjYWNoZUtleSkgPT4ge1xuICAgIGRlbGV0ZSBzaWduaW5nS2V5Q2FjaGVbY2FjaGVLZXldO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaG1hYyhjdG9yOiBIYXNoQ29uc3RydWN0b3IsIHNlY3JldDogU291cmNlRGF0YSwgZGF0YTogU291cmNlRGF0YSk6IFByb21pc2U8VWludDhBcnJheT4ge1xuICBjb25zdCBoYXNoID0gbmV3IGN0b3Ioc2VjcmV0KTtcbiAgaGFzaC51cGRhdGUoZGF0YSk7XG4gIHJldHVybiBoYXNoLmRpZ2VzdCgpO1xufVxuIl19

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/getCanonicalHeaders.js":
/*!*****************************************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/getCanonicalHeaders.js ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: getCanonicalHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCanonicalHeaders", function() { return getCanonicalHeaders; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/constants.js");


/**
 * @internal
 */
function getCanonicalHeaders(_a, unsignableHeaders, signableHeaders) {
    var e_1, _b;
    var headers = _a.headers;
    var canonical = {};
    try {
        for (var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(headers).sort()), _d = _c.next(); !_d.done; _d = _c.next()) {
            var headerName = _d.value;
            var canonicalHeaderName = headerName.toLowerCase();
            if (canonicalHeaderName in _constants__WEBPACK_IMPORTED_MODULE_1__["ALWAYS_UNSIGNABLE_HEADERS"] || (unsignableHeaders === null || unsignableHeaders === void 0 ? void 0 : unsignableHeaders.has(canonicalHeaderName)) ||
                _constants__WEBPACK_IMPORTED_MODULE_1__["PROXY_HEADER_PATTERN"].test(canonicalHeaderName) ||
                _constants__WEBPACK_IMPORTED_MODULE_1__["SEC_HEADER_PATTERN"].test(canonicalHeaderName)) {
                if (!signableHeaders || (signableHeaders && !signableHeaders.has(canonicalHeaderName))) {
                    continue;
                }
            }
            canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return canonical;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Q2Fub25pY2FsSGVhZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nZXRDYW5vbmljYWxIZWFkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFbEc7O0dBRUc7QUFDSCxNQUFNLFVBQVUsbUJBQW1CLENBQ2pDLEVBQXdCLEVBQ3hCLGlCQUErQixFQUMvQixlQUE2Qjs7UUFGM0IsT0FBTyxhQUFBO0lBSVQsSUFBTSxTQUFTLEdBQWMsRUFBRSxDQUFDOztRQUNoQyxLQUF5QixJQUFBLEtBQUEsU0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBLGdCQUFBLDRCQUFFO1lBQWpELElBQU0sVUFBVSxXQUFBO1lBQ25CLElBQU0sbUJBQW1CLEdBQUcsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3JELElBQ0UsbUJBQW1CLElBQUkseUJBQXlCLEtBQ2hELGlCQUFpQixhQUFqQixpQkFBaUIsdUJBQWpCLGlCQUFpQixDQUFFLEdBQUcsQ0FBQyxtQkFBbUIsRUFBQztnQkFDM0Msb0JBQW9CLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO2dCQUM5QyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFDNUM7Z0JBQ0EsSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFO29CQUN0RixTQUFTO2lCQUNWO2FBQ0Y7WUFFRCxTQUFTLENBQUMsbUJBQW1CLENBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNsRjs7Ozs7Ozs7O0lBRUQsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlYWRlckJhZywgSHR0cFJlcXVlc3QgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcblxuaW1wb3J0IHsgQUxXQVlTX1VOU0lHTkFCTEVfSEVBREVSUywgUFJPWFlfSEVBREVSX1BBVFRFUk4sIFNFQ19IRUFERVJfUEFUVEVSTiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2Fub25pY2FsSGVhZGVycyhcbiAgeyBoZWFkZXJzIH06IEh0dHBSZXF1ZXN0LFxuICB1bnNpZ25hYmxlSGVhZGVycz86IFNldDxzdHJpbmc+LFxuICBzaWduYWJsZUhlYWRlcnM/OiBTZXQ8c3RyaW5nPlxuKTogSGVhZGVyQmFnIHtcbiAgY29uc3QgY2Fub25pY2FsOiBIZWFkZXJCYWcgPSB7fTtcbiAgZm9yIChjb25zdCBoZWFkZXJOYW1lIG9mIE9iamVjdC5rZXlzKGhlYWRlcnMpLnNvcnQoKSkge1xuICAgIGNvbnN0IGNhbm9uaWNhbEhlYWRlck5hbWUgPSBoZWFkZXJOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKFxuICAgICAgY2Fub25pY2FsSGVhZGVyTmFtZSBpbiBBTFdBWVNfVU5TSUdOQUJMRV9IRUFERVJTIHx8XG4gICAgICB1bnNpZ25hYmxlSGVhZGVycz8uaGFzKGNhbm9uaWNhbEhlYWRlck5hbWUpIHx8XG4gICAgICBQUk9YWV9IRUFERVJfUEFUVEVSTi50ZXN0KGNhbm9uaWNhbEhlYWRlck5hbWUpIHx8XG4gICAgICBTRUNfSEVBREVSX1BBVFRFUk4udGVzdChjYW5vbmljYWxIZWFkZXJOYW1lKVxuICAgICkge1xuICAgICAgaWYgKCFzaWduYWJsZUhlYWRlcnMgfHwgKHNpZ25hYmxlSGVhZGVycyAmJiAhc2lnbmFibGVIZWFkZXJzLmhhcyhjYW5vbmljYWxIZWFkZXJOYW1lKSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2Fub25pY2FsW2Nhbm9uaWNhbEhlYWRlck5hbWVdID0gaGVhZGVyc1toZWFkZXJOYW1lXS50cmltKCkucmVwbGFjZSgvXFxzKy9nLCBcIiBcIik7XG4gIH1cblxuICByZXR1cm4gY2Fub25pY2FsO1xufVxuIl19

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/getCanonicalQuery.js":
/*!***************************************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/getCanonicalQuery.js ***!
  \***************************************************************************************************************************************************/
/*! exports provided: getCanonicalQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCanonicalQuery", function() { return getCanonicalQuery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _aws_sdk_util_uri_escape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/util-uri-escape */ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/util-uri-escape/dist/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/constants.js");



/**
 * @internal
 */
function getCanonicalQuery(_a) {
    var e_1, _b;
    var _c = _a.query, query = _c === void 0 ? {} : _c;
    var keys = [];
    var serialized = {};
    var _loop_1 = function (key) {
        if (key.toLowerCase() === _constants__WEBPACK_IMPORTED_MODULE_2__["SIGNATURE_HEADER"]) {
            return "continue";
        }
        keys.push(key);
        var value = query[key];
        if (typeof value === "string") {
            serialized[key] = Object(_aws_sdk_util_uri_escape__WEBPACK_IMPORTED_MODULE_1__["escapeUri"])(key) + "=" + Object(_aws_sdk_util_uri_escape__WEBPACK_IMPORTED_MODULE_1__["escapeUri"])(value);
        }
        else if (Array.isArray(value)) {
            serialized[key] = value
                .slice(0)
                .sort()
                .reduce(function (encoded, value) { return encoded.concat([Object(_aws_sdk_util_uri_escape__WEBPACK_IMPORTED_MODULE_1__["escapeUri"])(key) + "=" + Object(_aws_sdk_util_uri_escape__WEBPACK_IMPORTED_MODULE_1__["escapeUri"])(value)]); }, [])
                .join("&");
        }
    };
    try {
        for (var _d = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(query).sort()), _e = _d.next(); !_e.done; _e = _d.next()) {
            var key = _e.value;
            _loop_1(key);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return keys
        .map(function (key) { return serialized[key]; })
        .filter(function (serialized) { return serialized; }) // omit any falsy values
        .join("&");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Q2Fub25pY2FsUXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZ2V0Q2Fub25pY2FsUXVlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFL0M7O0dBRUc7QUFDSCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsRUFBMkI7O1FBQXpCLGFBQVUsRUFBVixLQUFLLG1CQUFHLEVBQUUsS0FBQTtJQUM1QyxJQUFNLElBQUksR0FBa0IsRUFBRSxDQUFDO0lBQy9CLElBQU0sVUFBVSxHQUE4QixFQUFFLENBQUM7NEJBQ3RDLEdBQUc7UUFDWixJQUFJLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxnQkFBZ0IsRUFBRTs7U0FFM0M7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBTSxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQUksU0FBUyxDQUFDLEtBQUssQ0FBRyxDQUFDO1NBQzNEO2FBQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQy9CLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLO2lCQUNwQixLQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUNSLElBQUksRUFBRTtpQkFDTixNQUFNLENBQ0wsVUFBQyxPQUFzQixFQUFFLEtBQWEsSUFBSyxPQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBSSxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQUksU0FBUyxDQUFDLEtBQUssQ0FBRyxDQUFDLENBQUMsRUFBekQsQ0FBeUQsRUFDcEcsRUFBRSxDQUNIO2lCQUNBLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNkOzs7UUFsQkgsS0FBa0IsSUFBQSxLQUFBLFNBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQSxnQkFBQTtZQUF0QyxJQUFNLEdBQUcsV0FBQTtvQkFBSCxHQUFHO1NBbUJiOzs7Ozs7Ozs7SUFFRCxPQUFPLElBQUk7U0FDUixHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQWYsQ0FBZSxDQUFDO1NBQzdCLE1BQU0sQ0FBQyxVQUFDLFVBQVUsSUFBSyxPQUFBLFVBQVUsRUFBVixDQUFVLENBQUMsQ0FBQyx3QkFBd0I7U0FDM0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5pbXBvcnQgeyBlc2NhcGVVcmkgfSBmcm9tIFwiQGF3cy1zZGsvdXRpbC11cmktZXNjYXBlXCI7XG5cbmltcG9ydCB7IFNJR05BVFVSRV9IRUFERVIgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENhbm9uaWNhbFF1ZXJ5KHsgcXVlcnkgPSB7fSB9OiBIdHRwUmVxdWVzdCk6IHN0cmluZyB7XG4gIGNvbnN0IGtleXM6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgY29uc3Qgc2VyaWFsaXplZDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhxdWVyeSkuc29ydCgpKSB7XG4gICAgaWYgKGtleS50b0xvd2VyQ2FzZSgpID09PSBTSUdOQVRVUkVfSEVBREVSKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBrZXlzLnB1c2goa2V5KTtcbiAgICBjb25zdCB2YWx1ZSA9IHF1ZXJ5W2tleV07XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgc2VyaWFsaXplZFtrZXldID0gYCR7ZXNjYXBlVXJpKGtleSl9PSR7ZXNjYXBlVXJpKHZhbHVlKX1gO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHNlcmlhbGl6ZWRba2V5XSA9IHZhbHVlXG4gICAgICAgIC5zbGljZSgwKVxuICAgICAgICAuc29ydCgpXG4gICAgICAgIC5yZWR1Y2UoXG4gICAgICAgICAgKGVuY29kZWQ6IEFycmF5PHN0cmluZz4sIHZhbHVlOiBzdHJpbmcpID0+IGVuY29kZWQuY29uY2F0KFtgJHtlc2NhcGVVcmkoa2V5KX09JHtlc2NhcGVVcmkodmFsdWUpfWBdKSxcbiAgICAgICAgICBbXVxuICAgICAgICApXG4gICAgICAgIC5qb2luKFwiJlwiKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ga2V5c1xuICAgIC5tYXAoKGtleSkgPT4gc2VyaWFsaXplZFtrZXldKVxuICAgIC5maWx0ZXIoKHNlcmlhbGl6ZWQpID0+IHNlcmlhbGl6ZWQpIC8vIG9taXQgYW55IGZhbHN5IHZhbHVlc1xuICAgIC5qb2luKFwiJlwiKTtcbn1cbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/getPayloadHash.js":
/*!************************************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/getPayloadHash.js ***!
  \************************************************************************************************************************************************/
/*! exports provided: getPayloadHash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPayloadHash", function() { return getPayloadHash; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _aws_sdk_is_array_buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/is-array-buffer */ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/is-array-buffer/dist/es/index.js");
/* harmony import */ var _aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/util-hex-encoding */ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/util-hex-encoding/dist/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/constants.js");




/**
 * @internal
 */
function getPayloadHash(_a, hashConstructor) {
    var headers = _a.headers, body = _a.body;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
        var _b, _c, headerName, hashCtor, _d;
        var e_1, _e;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_f) {
            switch (_f.label) {
                case 0:
                    try {
                        for (_b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(headers)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            headerName = _c.value;
                            if (headerName.toLowerCase() === _constants__WEBPACK_IMPORTED_MODULE_3__["SHA256_HEADER"]) {
                                return [2 /*return*/, headers[headerName]];
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_e = _b.return)) _e.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    if (!(body == undefined)) return [3 /*break*/, 1];
                    return [2 /*return*/, "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"];
                case 1:
                    if (!(typeof body === "string" || ArrayBuffer.isView(body) || Object(_aws_sdk_is_array_buffer__WEBPACK_IMPORTED_MODULE_1__["isArrayBuffer"])(body))) return [3 /*break*/, 3];
                    hashCtor = new hashConstructor();
                    hashCtor.update(body);
                    _d = _aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_2__["toHex"];
                    return [4 /*yield*/, hashCtor.digest()];
                case 2: return [2 /*return*/, _d.apply(void 0, [_f.sent()])];
                case 3: 
                // As any defined body that is not a string or binary data is a stream, this
                // body is unsignable. Attempt to send the request with an unsigned payload,
                // which may or may not be accepted by the service.
                return [2 /*return*/, _constants__WEBPACK_IMPORTED_MODULE_3__["UNSIGNED_PAYLOAD"]];
            }
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0UGF5bG9hZEhhc2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZ2V0UGF5bG9hZEhhc2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU5RDs7R0FFRztBQUNILE1BQU0sVUFBZ0IsY0FBYyxDQUNsQyxFQUE4QixFQUM5QixlQUFnQztRQUQ5QixPQUFPLGFBQUEsRUFBRSxJQUFJLFVBQUE7Ozs7Ozs7O3dCQUdmLEtBQXlCLEtBQUEsU0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBLDRDQUFFOzRCQUFwQyxVQUFVOzRCQUNuQixJQUFJLFVBQVUsQ0FBQyxXQUFXLEVBQUUsS0FBSyxhQUFhLEVBQUU7Z0NBQzlDLHNCQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBQzs2QkFDNUI7eUJBQ0Y7Ozs7Ozs7Ozt5QkFFRyxDQUFBLElBQUksSUFBSSxTQUFTLENBQUEsRUFBakIsd0JBQWlCO29CQUNuQixzQkFBTyxrRUFBa0UsRUFBQzs7eUJBQ2pFLENBQUEsT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFBLEVBQTNFLHdCQUEyRTtvQkFDOUUsUUFBUSxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7b0JBQ3ZDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2YsS0FBQSxLQUFLLENBQUE7b0JBQUMscUJBQU0sUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFBO3dCQUFwQyxzQkFBTyxrQkFBTSxTQUF1QixFQUFDLEVBQUM7O2dCQUd4Qyw0RUFBNEU7Z0JBQzVFLDRFQUE0RTtnQkFDNUUsbURBQW1EO2dCQUNuRCxzQkFBTyxnQkFBZ0IsRUFBQzs7OztDQUN6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzQXJyYXlCdWZmZXIgfSBmcm9tIFwiQGF3cy1zZGsvaXMtYXJyYXktYnVmZmVyXCI7XG5pbXBvcnQgeyBIYXNoQ29uc3RydWN0b3IsIEh0dHBSZXF1ZXN0IH0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5pbXBvcnQgeyB0b0hleCB9IGZyb20gXCJAYXdzLXNkay91dGlsLWhleC1lbmNvZGluZ1wiO1xuXG5pbXBvcnQgeyBTSEEyNTZfSEVBREVSLCBVTlNJR05FRF9QQVlMT0FEIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYXlsb2FkSGFzaChcbiAgeyBoZWFkZXJzLCBib2R5IH06IEh0dHBSZXF1ZXN0LFxuICBoYXNoQ29uc3RydWN0b3I6IEhhc2hDb25zdHJ1Y3RvclxuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgZm9yIChjb25zdCBoZWFkZXJOYW1lIG9mIE9iamVjdC5rZXlzKGhlYWRlcnMpKSB7XG4gICAgaWYgKGhlYWRlck5hbWUudG9Mb3dlckNhc2UoKSA9PT0gU0hBMjU2X0hFQURFUikge1xuICAgICAgcmV0dXJuIGhlYWRlcnNbaGVhZGVyTmFtZV07XG4gICAgfVxuICB9XG5cbiAgaWYgKGJvZHkgPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIFwiZTNiMGM0NDI5OGZjMWMxNDlhZmJmNGM4OTk2ZmI5MjQyN2FlNDFlNDY0OWI5MzRjYTQ5NTk5MWI3ODUyYjg1NVwiO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBib2R5ID09PSBcInN0cmluZ1wiIHx8IEFycmF5QnVmZmVyLmlzVmlldyhib2R5KSB8fCBpc0FycmF5QnVmZmVyKGJvZHkpKSB7XG4gICAgY29uc3QgaGFzaEN0b3IgPSBuZXcgaGFzaENvbnN0cnVjdG9yKCk7XG4gICAgaGFzaEN0b3IudXBkYXRlKGJvZHkpO1xuICAgIHJldHVybiB0b0hleChhd2FpdCBoYXNoQ3Rvci5kaWdlc3QoKSk7XG4gIH1cblxuICAvLyBBcyBhbnkgZGVmaW5lZCBib2R5IHRoYXQgaXMgbm90IGEgc3RyaW5nIG9yIGJpbmFyeSBkYXRhIGlzIGEgc3RyZWFtLCB0aGlzXG4gIC8vIGJvZHkgaXMgdW5zaWduYWJsZS4gQXR0ZW1wdCB0byBzZW5kIHRoZSByZXF1ZXN0IHdpdGggYW4gdW5zaWduZWQgcGF5bG9hZCxcbiAgLy8gd2hpY2ggbWF5IG9yIG1heSBub3QgYmUgYWNjZXB0ZWQgYnkgdGhlIHNlcnZpY2UuXG4gIHJldHVybiBVTlNJR05FRF9QQVlMT0FEO1xufVxuIl19

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/hasHeader.js":
/*!*******************************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/hasHeader.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: hasHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasHeader", function() { return hasHeader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

function hasHeader(soughtHeader, headers) {
    var e_1, _a;
    soughtHeader = soughtHeader.toLowerCase();
    try {
        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(headers)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var headerName = _c.value;
            if (soughtHeader === headerName.toLowerCase()) {
                return true;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return false;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzSGVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hhc0hlYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsTUFBTSxVQUFVLFNBQVMsQ0FBQyxZQUFvQixFQUFFLE9BQWtCOztJQUNoRSxZQUFZLEdBQUcsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDOztRQUMxQyxLQUF5QixJQUFBLEtBQUEsU0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBLGdCQUFBLDRCQUFFO1lBQTFDLElBQU0sVUFBVSxXQUFBO1lBQ25CLElBQUksWUFBWSxLQUFLLFVBQVUsQ0FBQyxXQUFXLEVBQUUsRUFBRTtnQkFDN0MsT0FBTyxJQUFJLENBQUM7YUFDYjtTQUNGOzs7Ozs7Ozs7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWFkZXJCYWcgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0hlYWRlcihzb3VnaHRIZWFkZXI6IHN0cmluZywgaGVhZGVyczogSGVhZGVyQmFnKTogYm9vbGVhbiB7XG4gIHNvdWdodEhlYWRlciA9IHNvdWdodEhlYWRlci50b0xvd2VyQ2FzZSgpO1xuICBmb3IgKGNvbnN0IGhlYWRlck5hbWUgb2YgT2JqZWN0LmtleXMoaGVhZGVycykpIHtcbiAgICBpZiAoc291Z2h0SGVhZGVyID09PSBoZWFkZXJOYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/index.js":
/*!***************************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/index.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: createScope, getSigningKey, clearCredentialCache, SignatureV4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _credentialDerivation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./credentialDerivation */ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/credentialDerivation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createScope", function() { return _credentialDerivation__WEBPACK_IMPORTED_MODULE_0__["createScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSigningKey", function() { return _credentialDerivation__WEBPACK_IMPORTED_MODULE_0__["getSigningKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearCredentialCache", function() { return _credentialDerivation__WEBPACK_IMPORTED_MODULE_0__["clearCredentialCache"]; });

/* harmony import */ var _SignatureV4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignatureV4 */ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/SignatureV4.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignatureV4", function() { return _SignatureV4__WEBPACK_IMPORTED_MODULE_1__["SignatureV4"]; });



//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyx3QkFBd0IsQ0FBQztBQUN2QyxjQUFjLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL2NyZWRlbnRpYWxEZXJpdmF0aW9uXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9TaWduYXR1cmVWNFwiO1xuIl19

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/moveHeadersToQuery.js":
/*!****************************************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/moveHeadersToQuery.js ***!
  \****************************************************************************************************************************************************/
/*! exports provided: moveHeadersToQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveHeadersToQuery", function() { return moveHeadersToQuery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _cloneRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cloneRequest */ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/cloneRequest.js");


/**
 * @internal
 */
function moveHeadersToQuery(request, options) {
    var e_1, _a;
    var _b;
    if (options === void 0) { options = {}; }
    var _c = typeof request.clone === "function" ? request.clone() : Object(_cloneRequest__WEBPACK_IMPORTED_MODULE_1__["cloneRequest"])(request), headers = _c.headers, _d = _c.query, query = _d === void 0 ? {} : _d;
    try {
        for (var _e = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(headers)), _f = _e.next(); !_f.done; _f = _e.next()) {
            var name = _f.value;
            var lname = name.toLowerCase();
            if (lname.substr(0, 6) === "x-amz-" && !((_b = options.unhoistableHeaders) === null || _b === void 0 ? void 0 : _b.has(lname))) {
                query[name] = headers[name];
                delete headers[name];
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, request), { headers: headers,
        query: query });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92ZUhlYWRlcnNUb1F1ZXJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vdmVIZWFkZXJzVG9RdWVyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDOztHQUVHO0FBQ0gsTUFBTSxVQUFVLGtCQUFrQixDQUNoQyxPQUFvQixFQUNwQixPQUFrRDs7O0lBQWxELHdCQUFBLEVBQUEsWUFBa0Q7SUFFNUMsSUFBQSxLQUNKLE9BQVEsT0FBZSxDQUFDLEtBQUssS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFFLE9BQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUR6RixPQUFPLGFBQUEsRUFBRSxhQUErQixFQUEvQixLQUFLLG1CQUFHLEVBQXVCLEtBQ2lELENBQUM7O1FBQ2xHLEtBQW1CLElBQUEsS0FBQSxTQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUEsZ0JBQUEsNEJBQUU7WUFBcEMsSUFBTSxJQUFJLFdBQUE7WUFDYixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDakMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxRQUFRLElBQUksUUFBQyxPQUFPLENBQUMsa0JBQWtCLDBDQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUMsRUFBRTtnQkFDOUUsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdEI7U0FDRjs7Ozs7Ozs7O0lBRUQsNkJBQ0ssT0FBTyxLQUNWLE9BQU8sU0FBQTtRQUNQLEtBQUssT0FBQSxJQUNMO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBSZXF1ZXN0LCBRdWVyeVBhcmFtZXRlckJhZyB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuXG5pbXBvcnQgeyBjbG9uZVJlcXVlc3QgfSBmcm9tIFwiLi9jbG9uZVJlcXVlc3RcIjtcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1vdmVIZWFkZXJzVG9RdWVyeShcbiAgcmVxdWVzdDogSHR0cFJlcXVlc3QsXG4gIG9wdGlvbnM6IHsgdW5ob2lzdGFibGVIZWFkZXJzPzogU2V0PHN0cmluZz4gfSA9IHt9XG4pOiBIdHRwUmVxdWVzdCAmIHsgcXVlcnk6IFF1ZXJ5UGFyYW1ldGVyQmFnIH0ge1xuICBjb25zdCB7IGhlYWRlcnMsIHF1ZXJ5ID0ge30gYXMgUXVlcnlQYXJhbWV0ZXJCYWcgfSA9XG4gICAgdHlwZW9mIChyZXF1ZXN0IGFzIGFueSkuY2xvbmUgPT09IFwiZnVuY3Rpb25cIiA/IChyZXF1ZXN0IGFzIGFueSkuY2xvbmUoKSA6IGNsb25lUmVxdWVzdChyZXF1ZXN0KTtcbiAgZm9yIChjb25zdCBuYW1lIG9mIE9iamVjdC5rZXlzKGhlYWRlcnMpKSB7XG4gICAgY29uc3QgbG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGxuYW1lLnN1YnN0cigwLCA2KSA9PT0gXCJ4LWFtei1cIiAmJiAhb3B0aW9ucy51bmhvaXN0YWJsZUhlYWRlcnM/LmhhcyhsbmFtZSkpIHtcbiAgICAgIHF1ZXJ5W25hbWVdID0gaGVhZGVyc1tuYW1lXTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBoZWFkZXJzLFxuICAgIHF1ZXJ5LFxuICB9O1xufVxuIl19

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/prepareRequest.js":
/*!************************************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/prepareRequest.js ***!
  \************************************************************************************************************************************************/
/*! exports provided: prepareRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareRequest", function() { return prepareRequest; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _cloneRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cloneRequest */ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/cloneRequest.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/constants.js");



/**
 * @internal
 */
function prepareRequest(request) {
    var e_1, _a;
    // Create a clone of the request object that does not clone the body
    request = typeof request.clone === "function" ? request.clone() : Object(_cloneRequest__WEBPACK_IMPORTED_MODULE_1__["cloneRequest"])(request);
    try {
        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(request.headers)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var headerName = _c.value;
            if (_constants__WEBPACK_IMPORTED_MODULE_2__["GENERATED_HEADERS"].indexOf(headerName.toLowerCase()) > -1) {
                delete request.headers[headerName];
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return request;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlcGFyZVJlcXVlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcHJlcGFyZVJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFaEQ7O0dBRUc7QUFDSCxNQUFNLFVBQVUsY0FBYyxDQUFDLE9BQW9COztJQUNqRCxvRUFBb0U7SUFDcEUsT0FBTyxHQUFHLE9BQVEsT0FBZSxDQUFDLEtBQUssS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFFLE9BQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztRQUUxRyxLQUF5QixJQUFBLEtBQUEsU0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtZQUFsRCxJQUFNLFVBQVUsV0FBQTtZQUNuQixJQUFJLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDNUQsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ3BDO1NBQ0Y7Ozs7Ozs7OztJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuXG5pbXBvcnQgeyBjbG9uZVJlcXVlc3QgfSBmcm9tIFwiLi9jbG9uZVJlcXVlc3RcIjtcbmltcG9ydCB7IEdFTkVSQVRFRF9IRUFERVJTIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmVwYXJlUmVxdWVzdChyZXF1ZXN0OiBIdHRwUmVxdWVzdCk6IEh0dHBSZXF1ZXN0IHtcbiAgLy8gQ3JlYXRlIGEgY2xvbmUgb2YgdGhlIHJlcXVlc3Qgb2JqZWN0IHRoYXQgZG9lcyBub3QgY2xvbmUgdGhlIGJvZHlcbiAgcmVxdWVzdCA9IHR5cGVvZiAocmVxdWVzdCBhcyBhbnkpLmNsb25lID09PSBcImZ1bmN0aW9uXCIgPyAocmVxdWVzdCBhcyBhbnkpLmNsb25lKCkgOiBjbG9uZVJlcXVlc3QocmVxdWVzdCk7XG5cbiAgZm9yIChjb25zdCBoZWFkZXJOYW1lIG9mIE9iamVjdC5rZXlzKHJlcXVlc3QuaGVhZGVycykpIHtcbiAgICBpZiAoR0VORVJBVEVEX0hFQURFUlMuaW5kZXhPZihoZWFkZXJOYW1lLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0LmhlYWRlcnNbaGVhZGVyTmFtZV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlcXVlc3Q7XG59XG4iXX0=

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/utilDate.js":
/*!******************************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/signature-v4/dist/es/utilDate.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: iso8601, toDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iso8601", function() { return iso8601; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDate", function() { return toDate; });
function iso8601(time) {
    return toDate(time)
        .toISOString()
        .replace(/\.\d{3}Z$/, "Z");
}
function toDate(time) {
    if (typeof time === "number") {
        return new Date(time * 1000);
    }
    if (typeof time === "string") {
        if (Number(time)) {
            return new Date(Number(time) * 1000);
        }
        return new Date(time);
    }
    return time;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbERhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbERhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxVQUFVLE9BQU8sQ0FBQyxJQUE0QjtJQUNsRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDaEIsV0FBVyxFQUFFO1NBQ2IsT0FBTyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUMvQixDQUFDO0FBRUQsTUFBTSxVQUFVLE1BQU0sQ0FBQyxJQUE0QjtJQUNqRCxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtRQUM1QixPQUFPLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztLQUM5QjtJQUVELElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1FBQzVCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN2QjtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBpc284NjAxKHRpbWU6IG51bWJlciB8IHN0cmluZyB8IERhdGUpOiBzdHJpbmcge1xuICByZXR1cm4gdG9EYXRlKHRpbWUpXG4gICAgLnRvSVNPU3RyaW5nKClcbiAgICAucmVwbGFjZSgvXFwuXFxkezN9WiQvLCBcIlpcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUodGltZTogbnVtYmVyIHwgc3RyaW5nIHwgRGF0ZSk6IERhdGUge1xuICBpZiAodHlwZW9mIHRpbWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICByZXR1cm4gbmV3IERhdGUodGltZSAqIDEwMDApO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0aW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgaWYgKE51bWJlcih0aW1lKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE51bWJlcih0aW1lKSAqIDEwMDApO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUodGltZSk7XG4gIH1cblxuICByZXR1cm4gdGltZTtcbn1cbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/util-hex-encoding/dist/es/index.js":
/*!********************************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/util-hex-encoding/dist/es/index.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: fromHex, toHex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromHex", function() { return fromHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toHex", function() { return toHex; });
var SHORT_TO_HEX = {};
var HEX_TO_SHORT = {};
for (var i = 0; i < 256; i++) {
    var encodedByte = i.toString(16).toLowerCase();
    if (encodedByte.length === 1) {
        encodedByte = "0" + encodedByte;
    }
    SHORT_TO_HEX[i] = encodedByte;
    HEX_TO_SHORT[encodedByte] = i;
}
/**
 * Converts a hexadecimal encoded string to a Uint8Array of bytes.
 *
 * @param encoded The hexadecimal encoded string
 */
function fromHex(encoded) {
    if (encoded.length % 2 !== 0) {
        throw new Error("Hex encoded strings must have an even number length");
    }
    var out = new Uint8Array(encoded.length / 2);
    for (var i = 0; i < encoded.length; i += 2) {
        var encodedByte = encoded.substr(i, 2).toLowerCase();
        if (encodedByte in HEX_TO_SHORT) {
            out[i / 2] = HEX_TO_SHORT[encodedByte];
        }
        else {
            throw new Error("Cannot decode unrecognized sequence " + encodedByte + " as hexadecimal");
        }
    }
    return out;
}
/**
 * Converts a Uint8Array of binary data to a hexadecimal encoded string.
 *
 * @param bytes The binary data to encode
 */
function toHex(bytes) {
    var out = "";
    for (var i = 0; i < bytes.byteLength; i++) {
        out += SHORT_TO_HEX[bytes[i]];
    }
    return out;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxZQUFZLEdBQThCLEVBQUUsQ0FBQztBQUNuRCxJQUFNLFlBQVksR0FBOEIsRUFBRSxDQUFDO0FBRW5ELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDNUIsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMvQyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQzVCLFdBQVcsR0FBRyxNQUFJLFdBQWEsQ0FBQztLQUNqQztJQUVELFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUM7SUFDOUIsWUFBWSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUMvQjtBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsT0FBTyxDQUFDLE9BQWU7SUFDckMsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDNUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO0tBQ3hFO0lBRUQsSUFBTSxHQUFHLEdBQUcsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzFDLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZELElBQUksV0FBVyxJQUFJLFlBQVksRUFBRTtZQUMvQixHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN4QzthQUFNO1lBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyx5Q0FBdUMsV0FBVyxvQkFBaUIsQ0FBQyxDQUFDO1NBQ3RGO0tBQ0Y7SUFFRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLEtBQUssQ0FBQyxLQUFpQjtJQUNyQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN6QyxHQUFHLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQy9CO0lBRUQsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU0hPUlRfVE9fSEVYOiB7IFtrZXk6IG51bWJlcl06IHN0cmluZyB9ID0ge307XG5jb25zdCBIRVhfVE9fU0hPUlQ6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7IGkrKykge1xuICBsZXQgZW5jb2RlZEJ5dGUgPSBpLnRvU3RyaW5nKDE2KS50b0xvd2VyQ2FzZSgpO1xuICBpZiAoZW5jb2RlZEJ5dGUubGVuZ3RoID09PSAxKSB7XG4gICAgZW5jb2RlZEJ5dGUgPSBgMCR7ZW5jb2RlZEJ5dGV9YDtcbiAgfVxuXG4gIFNIT1JUX1RPX0hFWFtpXSA9IGVuY29kZWRCeXRlO1xuICBIRVhfVE9fU0hPUlRbZW5jb2RlZEJ5dGVdID0gaTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIGhleGFkZWNpbWFsIGVuY29kZWQgc3RyaW5nIHRvIGEgVWludDhBcnJheSBvZiBieXRlcy5cbiAqXG4gKiBAcGFyYW0gZW5jb2RlZCBUaGUgaGV4YWRlY2ltYWwgZW5jb2RlZCBzdHJpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21IZXgoZW5jb2RlZDogc3RyaW5nKTogVWludDhBcnJheSB7XG4gIGlmIChlbmNvZGVkLmxlbmd0aCAlIDIgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJIZXggZW5jb2RlZCBzdHJpbmdzIG11c3QgaGF2ZSBhbiBldmVuIG51bWJlciBsZW5ndGhcIik7XG4gIH1cblxuICBjb25zdCBvdXQgPSBuZXcgVWludDhBcnJheShlbmNvZGVkLmxlbmd0aCAvIDIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVuY29kZWQubGVuZ3RoOyBpICs9IDIpIHtcbiAgICBjb25zdCBlbmNvZGVkQnl0ZSA9IGVuY29kZWQuc3Vic3RyKGksIDIpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGVuY29kZWRCeXRlIGluIEhFWF9UT19TSE9SVCkge1xuICAgICAgb3V0W2kgLyAyXSA9IEhFWF9UT19TSE9SVFtlbmNvZGVkQnl0ZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGRlY29kZSB1bnJlY29nbml6ZWQgc2VxdWVuY2UgJHtlbmNvZGVkQnl0ZX0gYXMgaGV4YWRlY2ltYWxgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgVWludDhBcnJheSBvZiBiaW5hcnkgZGF0YSB0byBhIGhleGFkZWNpbWFsIGVuY29kZWQgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSBieXRlcyBUaGUgYmluYXJ5IGRhdGEgdG8gZW5jb2RlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0hleChieXRlczogVWludDhBcnJheSk6IHN0cmluZyB7XG4gIGxldCBvdXQgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJ5dGVzLmJ5dGVMZW5ndGg7IGkrKykge1xuICAgIG91dCArPSBTSE9SVF9UT19IRVhbYnl0ZXNbaV1dO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/util-uri-escape/dist/es/escape-uri-path.js":
/*!****************************************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/util-uri-escape/dist/es/escape-uri-path.js ***!
  \****************************************************************************************************************************************************/
/*! exports provided: escapeUriPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeUriPath", function() { return escapeUriPath; });
/* harmony import */ var _escape_uri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./escape-uri */ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/util-uri-escape/dist/es/escape-uri.js");

var escapeUriPath = function (uri) { return uri.split("/").map(_escape_uri__WEBPACK_IMPORTED_MODULE_0__["escapeUri"]).join("/"); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNjYXBlLXVyaS1wYXRoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2VzY2FwZS11cmktcGF0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRXpDLE1BQU0sQ0FBQyxJQUFNLGFBQWEsR0FBRyxVQUFDLEdBQVcsSUFBYSxPQUFBLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBdkMsQ0FBdUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVzY2FwZVVyaSB9IGZyb20gXCIuL2VzY2FwZS11cmlcIjtcblxuZXhwb3J0IGNvbnN0IGVzY2FwZVVyaVBhdGggPSAodXJpOiBzdHJpbmcpOiBzdHJpbmcgPT4gdXJpLnNwbGl0KFwiL1wiKS5tYXAoZXNjYXBlVXJpKS5qb2luKFwiL1wiKTtcbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/util-uri-escape/dist/es/escape-uri.js":
/*!***********************************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/util-uri-escape/dist/es/escape-uri.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: escapeUri */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeUri", function() { return escapeUri; });
var escapeUri = function (uri) {
    // AWS percent-encodes some extra non-standard characters in a URI
    return encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
};
var hexEncode = function (c) { return "%" + c.charCodeAt(0).toString(16).toUpperCase(); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNjYXBlLXVyaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lc2NhcGUtdXJpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxJQUFNLFNBQVMsR0FBRyxVQUFDLEdBQVc7SUFDbkMsa0VBQWtFO0lBQ2xFLE9BQUEsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUM7QUFBdEQsQ0FBc0QsQ0FBQztBQUV6RCxJQUFNLFNBQVMsR0FBRyxVQUFDLENBQVMsSUFBSyxPQUFBLE1BQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFJLEVBQWhELENBQWdELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZXNjYXBlVXJpID0gKHVyaTogc3RyaW5nKTogc3RyaW5nID0+XG4gIC8vIEFXUyBwZXJjZW50LWVuY29kZXMgc29tZSBleHRyYSBub24tc3RhbmRhcmQgY2hhcmFjdGVycyBpbiBhIFVSSVxuICBlbmNvZGVVUklDb21wb25lbnQodXJpKS5yZXBsYWNlKC9bIScoKSpdL2csIGhleEVuY29kZSk7XG5cbmNvbnN0IGhleEVuY29kZSA9IChjOiBzdHJpbmcpID0+IGAlJHtjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCl9YDtcbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/util-uri-escape/dist/es/index.js":
/*!******************************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/util-uri-escape/dist/es/index.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: escapeUri, escapeUriPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _escape_uri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./escape-uri */ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/util-uri-escape/dist/es/escape-uri.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "escapeUri", function() { return _escape_uri__WEBPACK_IMPORTED_MODULE_0__["escapeUri"]; });

/* harmony import */ var _escape_uri_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./escape-uri-path */ "../../node_modules/@aws-sdk/middleware-signing/node_modules/@aws-sdk/util-uri-escape/dist/es/escape-uri-path.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "escapeUriPath", function() { return _escape_uri_path__WEBPACK_IMPORTED_MODULE_1__["escapeUriPath"]; });



//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxjQUFjLENBQUM7QUFDN0IsY0FBYyxtQkFBbUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL2VzY2FwZS11cmlcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2VzY2FwZS11cmktcGF0aFwiO1xuIl19

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-stack/dist/es/MiddlewareStack.js":
/*!************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-stack/dist/es/MiddlewareStack.js ***!
  \************************************************************************************************************/
/*! exports provided: constructStack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constructStack", function() { return constructStack; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

var constructStack = function () {
    var absoluteEntries = [];
    var relativeEntries = [];
    var entriesNameSet = new Set();
    var sort = function (entries) {
        return entries.sort(function (a, b) {
            return stepWeights[b.step] - stepWeights[a.step] ||
                priorityWeights[b.priority || "normal"] - priorityWeights[a.priority || "normal"];
        });
    };
    var removeByName = function (toRemove) {
        var isRemoved = false;
        var filterCb = function (entry) {
            if (entry.name && entry.name === toRemove) {
                isRemoved = true;
                entriesNameSet.delete(toRemove);
                return false;
            }
            return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
    };
    var removeByReference = function (toRemove) {
        var isRemoved = false;
        var filterCb = function (entry) {
            if (entry.middleware === toRemove) {
                isRemoved = true;
                if (entry.name)
                    entriesNameSet.delete(entry.name);
                return false;
            }
            return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
    };
    var cloneTo = function (toStack) {
        absoluteEntries.forEach(function (entry) {
            //@ts-ignore
            toStack.add(entry.middleware, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, entry));
        });
        relativeEntries.forEach(function (entry) {
            //@ts-ignore
            toStack.addRelativeTo(entry.middleware, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, entry));
        });
        return toStack;
    };
    var expandRelativeMiddlewareList = function (from) {
        var expandedMiddlewareList = [];
        from.before.forEach(function (entry) {
            if (entry.before.length === 0 && entry.after.length === 0) {
                expandedMiddlewareList.push(entry);
            }
            else {
                expandedMiddlewareList.push.apply(expandedMiddlewareList, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(expandRelativeMiddlewareList(entry)));
            }
        });
        expandedMiddlewareList.push(from);
        from.after.reverse().forEach(function (entry) {
            if (entry.before.length === 0 && entry.after.length === 0) {
                expandedMiddlewareList.push(entry);
            }
            else {
                expandedMiddlewareList.push.apply(expandedMiddlewareList, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(expandRelativeMiddlewareList(entry)));
            }
        });
        return expandedMiddlewareList;
    };
    /**
     * Get a final list of middleware in the order of being executed in the resolved handler.
     */
    var getMiddlewareList = function () {
        var normalizedAbsoluteEntries = [];
        var normalizedRelativeEntries = [];
        var normalizedEntriesNameMap = {};
        absoluteEntries.forEach(function (entry) {
            var normalizedEntry = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, entry), { before: [], after: [] });
            if (normalizedEntry.name)
                normalizedEntriesNameMap[normalizedEntry.name] = normalizedEntry;
            normalizedAbsoluteEntries.push(normalizedEntry);
        });
        relativeEntries.forEach(function (entry) {
            var normalizedEntry = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, entry), { before: [], after: [] });
            if (normalizedEntry.name)
                normalizedEntriesNameMap[normalizedEntry.name] = normalizedEntry;
            normalizedRelativeEntries.push(normalizedEntry);
        });
        normalizedRelativeEntries.forEach(function (entry) {
            if (entry.toMiddleware) {
                var toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
                if (toMiddleware === undefined) {
                    throw new Error(entry.toMiddleware + " is not found when adding " + (entry.name || "anonymous") + " middleware " + entry.relation + " " + entry.toMiddleware);
                }
                if (entry.relation === "after") {
                    toMiddleware.after.push(entry);
                }
                if (entry.relation === "before") {
                    toMiddleware.before.push(entry);
                }
            }
        });
        var mainChain = sort(normalizedAbsoluteEntries)
            .map(expandRelativeMiddlewareList)
            .reduce(function (wholeList, expendedMiddlewareList) {
            // TODO: Replace it with Array.flat();
            wholeList.push.apply(wholeList, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(expendedMiddlewareList));
            return wholeList;
        }, []);
        return mainChain.map(function (entry) { return entry.middleware; });
    };
    var stack = {
        add: function (middleware, options) {
            if (options === void 0) { options = {}; }
            var name = options.name, override = options.override;
            var entry = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ step: "initialize", priority: "normal", middleware: middleware }, options);
            if (name) {
                if (entriesNameSet.has(name)) {
                    if (!override)
                        throw new Error("Duplicate middleware name '" + name + "'");
                    var toOverrideIndex = absoluteEntries.findIndex(function (entry) { return entry.name === name; });
                    var toOverride = absoluteEntries[toOverrideIndex];
                    if (toOverride.step !== entry.step || toOverride.priority !== entry.priority) {
                        throw new Error("\"" + name + "\" middleware with " + toOverride.priority + " priority in " + toOverride.step + " step cannot be " +
                            ("overridden by same-name middleware with " + entry.priority + " priority in " + entry.step + " step."));
                    }
                    absoluteEntries.splice(toOverrideIndex, 1);
                }
                entriesNameSet.add(name);
            }
            absoluteEntries.push(entry);
        },
        addRelativeTo: function (middleware, options) {
            var name = options.name, override = options.override;
            var entry = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ middleware: middleware }, options);
            if (name) {
                if (entriesNameSet.has(name)) {
                    if (!override)
                        throw new Error("Duplicate middleware name '" + name + "'");
                    var toOverrideIndex = relativeEntries.findIndex(function (entry) { return entry.name === name; });
                    var toOverride = relativeEntries[toOverrideIndex];
                    if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
                        throw new Error("\"" + name + "\" middleware " + toOverride.relation + " \"" + toOverride.toMiddleware + "\" middleware cannot be overridden " +
                            ("by same-name middleware " + entry.relation + " \"" + entry.toMiddleware + "\" middleware."));
                    }
                    relativeEntries.splice(toOverrideIndex, 1);
                }
                entriesNameSet.add(name);
            }
            relativeEntries.push(entry);
        },
        clone: function () { return cloneTo(constructStack()); },
        use: function (plugin) {
            plugin.applyToStack(stack);
        },
        remove: function (toRemove) {
            if (typeof toRemove === "string")
                return removeByName(toRemove);
            else
                return removeByReference(toRemove);
        },
        removeByTag: function (toRemove) {
            var isRemoved = false;
            var filterCb = function (entry) {
                var tags = entry.tags, name = entry.name;
                if (tags && tags.includes(toRemove)) {
                    if (name)
                        entriesNameSet.delete(name);
                    isRemoved = true;
                    return false;
                }
                return true;
            };
            absoluteEntries = absoluteEntries.filter(filterCb);
            relativeEntries = relativeEntries.filter(filterCb);
            return isRemoved;
        },
        concat: function (from) {
            var cloned = cloneTo(constructStack());
            cloned.use(from);
            return cloned;
        },
        applyToStack: cloneTo,
        resolve: function (handler, context) {
            var e_1, _a;
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(getMiddlewareList().reverse()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var middleware = _c.value;
                    handler = middleware(handler, context);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return handler;
        },
    };
    return stack;
};
var stepWeights = {
    initialize: 5,
    serialize: 4,
    build: 3,
    finalizeRequest: 2,
    deserialize: 1,
};
var priorityWeights = {
    high: 3,
    normal: 2,
    low: 1,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlkZGxld2FyZVN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL01pZGRsZXdhcmVTdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBZ0JBLE1BQU0sQ0FBQyxJQUFNLGNBQWMsR0FBRztJQUM1QixJQUFJLGVBQWUsR0FBNkMsRUFBRSxDQUFDO0lBQ25FLElBQUksZUFBZSxHQUE2QyxFQUFFLENBQUM7SUFDbkUsSUFBTSxjQUFjLEdBQWdCLElBQUksR0FBRyxFQUFFLENBQUM7SUFFOUMsSUFBTSxJQUFJLEdBQUcsVUFBbUQsT0FBWTtRQUMxRSxPQUFBLE9BQU8sQ0FBQyxJQUFJLENBQ1YsVUFBQyxDQUFDLEVBQUUsQ0FBQztZQUNILE9BQUEsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDekMsZUFBZSxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLEdBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDO1FBRGpGLENBQ2lGLENBQ3BGO0lBSkQsQ0FJQyxDQUFDO0lBRUosSUFBTSxZQUFZLEdBQUcsVUFBQyxRQUFnQjtRQUNwQyxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBTSxRQUFRLEdBQUcsVUFBQyxLQUFxQztZQUNyRCxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQ3pDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ2pCLGNBQWMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2hDLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQztRQUNGLGVBQWUsR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELGVBQWUsR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUMsQ0FBQztJQUVGLElBQU0saUJBQWlCLEdBQUcsVUFBQyxRQUF1QztRQUNoRSxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBTSxRQUFRLEdBQUcsVUFBQyxLQUFxQztZQUNyRCxJQUFJLEtBQUssQ0FBQyxVQUFVLEtBQUssUUFBUSxFQUFFO2dCQUNqQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUNqQixJQUFJLEtBQUssQ0FBQyxJQUFJO29CQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsRCxPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUM7UUFDRixlQUFlLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRCxlQUFlLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDLENBQUM7SUFFRixJQUFNLE9BQU8sR0FBRyxVQUNkLE9BQStDO1FBRS9DLGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO1lBQzVCLFlBQVk7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLGVBQU8sS0FBSyxFQUFHLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7UUFDSCxlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSztZQUM1QixZQUFZO1lBQ1osT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBVSxlQUFPLEtBQUssRUFBRyxDQUFDO1FBQ3hELENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQyxDQUFDO0lBRUYsSUFBTSw0QkFBNEIsR0FBRyxVQUNuQyxJQUErRDtRQUUvRCxJQUFNLHNCQUFzQixHQUFxQyxFQUFFLENBQUM7UUFDcEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO1lBQ3hCLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDekQsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3BDO2lCQUFNO2dCQUNMLHNCQUFzQixDQUFDLElBQUksT0FBM0Isc0JBQXNCLFdBQVMsNEJBQTRCLENBQUMsS0FBSyxDQUFDLEdBQUU7YUFDckU7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUs7WUFDakMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUN6RCxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDcEM7aUJBQU07Z0JBQ0wsc0JBQXNCLENBQUMsSUFBSSxPQUEzQixzQkFBc0IsV0FBUyw0QkFBNEIsQ0FBQyxLQUFLLENBQUMsR0FBRTthQUNyRTtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxzQkFBc0IsQ0FBQztJQUNoQyxDQUFDLENBQUM7SUFFRjs7T0FFRztJQUNILElBQU0saUJBQWlCLEdBQUc7UUFDeEIsSUFBTSx5QkFBeUIsR0FBd0UsRUFBRSxDQUFDO1FBQzFHLElBQU0seUJBQXlCLEdBQXdFLEVBQUUsQ0FBQztRQUMxRyxJQUFNLHdCQUF3QixHQUUxQixFQUFFLENBQUM7UUFFUCxlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSztZQUM1QixJQUFNLGVBQWUseUJBQ2hCLEtBQUssS0FDUixNQUFNLEVBQUUsRUFBRSxFQUNWLEtBQUssRUFBRSxFQUFFLEdBQ1YsQ0FBQztZQUNGLElBQUksZUFBZSxDQUFDLElBQUk7Z0JBQUUsd0JBQXdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLGVBQWUsQ0FBQztZQUMzRix5QkFBeUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSztZQUM1QixJQUFNLGVBQWUseUJBQ2hCLEtBQUssS0FDUixNQUFNLEVBQUUsRUFBRSxFQUNWLEtBQUssRUFBRSxFQUFFLEdBQ1YsQ0FBQztZQUNGLElBQUksZUFBZSxDQUFDLElBQUk7Z0JBQUUsd0JBQXdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLGVBQWUsQ0FBQztZQUMzRix5QkFBeUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUM7UUFFSCx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO1lBQ3RDLElBQUksS0FBSyxDQUFDLFlBQVksRUFBRTtnQkFDdEIsSUFBTSxZQUFZLEdBQUcsd0JBQXdCLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNsRSxJQUFJLFlBQVksS0FBSyxTQUFTLEVBQUU7b0JBQzlCLE1BQU0sSUFBSSxLQUFLLENBQ1YsS0FBSyxDQUFDLFlBQVksbUNBQTZCLEtBQUssQ0FBQyxJQUFJLElBQUksV0FBVyxxQkFBZSxLQUFLLENBQUMsUUFBUSxTQUN0RyxLQUFLLENBQUMsWUFDTixDQUNILENBQUM7aUJBQ0g7Z0JBQ0QsSUFBSSxLQUFLLENBQUMsUUFBUSxLQUFLLE9BQU8sRUFBRTtvQkFDOUIsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2hDO2dCQUNELElBQUksS0FBSyxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUU7b0JBQy9CLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNqQzthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUM7YUFDOUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDO2FBQ2pDLE1BQU0sQ0FBQyxVQUFDLFNBQVMsRUFBRSxzQkFBc0I7WUFDeEMsc0NBQXNDO1lBQ3RDLFNBQVMsQ0FBQyxJQUFJLE9BQWQsU0FBUyxXQUFTLHNCQUFzQixHQUFFO1lBQzFDLE9BQU8sU0FBUyxDQUFDO1FBQ25CLENBQUMsRUFBRSxFQUFzQyxDQUFDLENBQUM7UUFDN0MsT0FBTyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLFVBQVUsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO0lBQ3BELENBQUMsQ0FBQztJQUVGLElBQU0sS0FBSyxHQUFHO1FBQ1osR0FBRyxFQUFFLFVBQUMsVUFBeUMsRUFBRSxPQUErQztZQUEvQyx3QkFBQSxFQUFBLFlBQStDO1lBQ3RGLElBQUEsSUFBSSxHQUFlLE9BQU8sS0FBdEIsRUFBRSxRQUFRLEdBQUssT0FBTyxTQUFaLENBQWE7WUFDbkMsSUFBTSxLQUFLLGNBQ1QsSUFBSSxFQUFFLFlBQVksRUFDbEIsUUFBUSxFQUFFLFFBQVEsRUFDbEIsVUFBVSxZQUFBLElBQ1AsT0FBTyxDQUNYLENBQUM7WUFDRixJQUFJLElBQUksRUFBRTtnQkFDUixJQUFJLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQzVCLElBQUksQ0FBQyxRQUFRO3dCQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQThCLElBQUksTUFBRyxDQUFDLENBQUM7b0JBQ3RFLElBQU0sZUFBZSxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO29CQUNsRixJQUFNLFVBQVUsR0FBRyxlQUFlLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBQ3BELElBQUksVUFBVSxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsSUFBSSxJQUFJLFVBQVUsQ0FBQyxRQUFRLEtBQUssS0FBSyxDQUFDLFFBQVEsRUFBRTt3QkFDNUUsTUFBTSxJQUFJLEtBQUssQ0FDYixPQUFJLElBQUksMkJBQXFCLFVBQVUsQ0FBQyxRQUFRLHFCQUFnQixVQUFVLENBQUMsSUFBSSxxQkFBa0I7NkJBQy9GLDZDQUEyQyxLQUFLLENBQUMsUUFBUSxxQkFBZ0IsS0FBSyxDQUFDLElBQUksV0FBUSxDQUFBLENBQzlGLENBQUM7cUJBQ0g7b0JBQ0QsZUFBZSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQzVDO2dCQUNELGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDMUI7WUFDRCxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUM7UUFFRCxhQUFhLEVBQUUsVUFBQyxVQUF5QyxFQUFFLE9BQTBDO1lBQzNGLElBQUEsSUFBSSxHQUFlLE9BQU8sS0FBdEIsRUFBRSxRQUFRLEdBQUssT0FBTyxTQUFaLENBQWE7WUFDbkMsSUFBTSxLQUFLLGNBQ1QsVUFBVSxZQUFBLElBQ1AsT0FBTyxDQUNYLENBQUM7WUFDRixJQUFJLElBQUksRUFBRTtnQkFDUixJQUFJLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQzVCLElBQUksQ0FBQyxRQUFRO3dCQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQThCLElBQUksTUFBRyxDQUFDLENBQUM7b0JBQ3RFLElBQU0sZUFBZSxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO29CQUNsRixJQUFNLFVBQVUsR0FBRyxlQUFlLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBQ3BELElBQUksVUFBVSxDQUFDLFlBQVksS0FBSyxLQUFLLENBQUMsWUFBWSxJQUFJLFVBQVUsQ0FBQyxRQUFRLEtBQUssS0FBSyxDQUFDLFFBQVEsRUFBRTt3QkFDNUYsTUFBTSxJQUFJLEtBQUssQ0FDYixPQUFJLElBQUksc0JBQWdCLFVBQVUsQ0FBQyxRQUFRLFdBQUssVUFBVSxDQUFDLFlBQVksd0NBQW9DOzZCQUN6Ryw2QkFBMkIsS0FBSyxDQUFDLFFBQVEsV0FBSyxLQUFLLENBQUMsWUFBWSxtQkFBZSxDQUFBLENBQ2xGLENBQUM7cUJBQ0g7b0JBQ0QsZUFBZSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQzVDO2dCQUNELGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDMUI7WUFDRCxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUM7UUFFRCxLQUFLLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxjQUFjLEVBQWlCLENBQUMsRUFBeEMsQ0FBd0M7UUFFckQsR0FBRyxFQUFFLFVBQUMsTUFBZ0M7WUFDcEMsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixDQUFDO1FBRUQsTUFBTSxFQUFFLFVBQUMsUUFBZ0Q7WUFDdkQsSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRO2dCQUFFLE9BQU8sWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztnQkFDM0QsT0FBTyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBRUQsV0FBVyxFQUFFLFVBQUMsUUFBZ0I7WUFDNUIsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQU0sUUFBUSxHQUFHLFVBQUMsS0FBcUM7Z0JBQzdDLElBQUEsSUFBSSxHQUFXLEtBQUssS0FBaEIsRUFBRSxJQUFJLEdBQUssS0FBSyxLQUFWLENBQVc7Z0JBQzdCLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQ25DLElBQUksSUFBSTt3QkFBRSxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN0QyxTQUFTLEdBQUcsSUFBSSxDQUFDO29CQUNqQixPQUFPLEtBQUssQ0FBQztpQkFDZDtnQkFDRCxPQUFPLElBQUksQ0FBQztZQUNkLENBQUMsQ0FBQztZQUNGLGVBQWUsR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25ELGVBQWUsR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25ELE9BQU8sU0FBUyxDQUFDO1FBQ25CLENBQUM7UUFFRCxNQUFNLEVBQUUsVUFDTixJQUE0QztZQUU1QyxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsY0FBYyxFQUF5QixDQUFDLENBQUM7WUFDaEUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQixPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO1FBRUQsWUFBWSxFQUFFLE9BQU87UUFFckIsT0FBTyxFQUFFLFVBQ1AsT0FBa0QsRUFDbEQsT0FBZ0M7OztnQkFFaEMsS0FBeUIsSUFBQSxLQUFBLFNBQUEsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQSxnQkFBQSw0QkFBRTtvQkFBbkQsSUFBTSxVQUFVLFdBQUE7b0JBQ25CLE9BQU8sR0FBRyxVQUFVLENBQUMsT0FBcUMsRUFBRSxPQUFPLENBQVEsQ0FBQztpQkFDN0U7Ozs7Ozs7OztZQUNELE9BQU8sT0FBeUMsQ0FBQztRQUNuRCxDQUFDO0tBQ0YsQ0FBQztJQUNGLE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyxDQUFDO0FBRUYsSUFBTSxXQUFXLEdBQThCO0lBQzdDLFVBQVUsRUFBRSxDQUFDO0lBQ2IsU0FBUyxFQUFFLENBQUM7SUFDWixLQUFLLEVBQUUsQ0FBQztJQUNSLGVBQWUsRUFBRSxDQUFDO0lBQ2xCLFdBQVcsRUFBRSxDQUFDO0NBQ2YsQ0FBQztBQUVGLElBQU0sZUFBZSxHQUFrQztJQUNyRCxJQUFJLEVBQUUsQ0FBQztJQUNQLE1BQU0sRUFBRSxDQUFDO0lBQ1QsR0FBRyxFQUFFLENBQUM7Q0FDUCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWJzb2x1dGVMb2NhdGlvbixcbiAgRGVzZXJpYWxpemVIYW5kbGVyLFxuICBIYW5kbGVyLFxuICBIYW5kbGVyRXhlY3V0aW9uQ29udGV4dCxcbiAgSGFuZGxlck9wdGlvbnMsXG4gIE1pZGRsZXdhcmVTdGFjayxcbiAgTWlkZGxld2FyZVR5cGUsXG4gIFBsdWdnYWJsZSxcbiAgUHJpb3JpdHksXG4gIFJlbGF0aXZlTG9jYXRpb24sXG4gIFN0ZXAsXG59IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuXG5pbXBvcnQgeyBBYnNvbHV0ZU1pZGRsZXdhcmVFbnRyeSwgTWlkZGxld2FyZUVudHJ5LCBOb3JtYWxpemVkLCBSZWxhdGl2ZU1pZGRsZXdhcmVFbnRyeSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBjb25zdHJ1Y3RTdGFjayA9IDxJbnB1dCBleHRlbmRzIG9iamVjdCwgT3V0cHV0IGV4dGVuZHMgb2JqZWN0PigpOiBNaWRkbGV3YXJlU3RhY2s8SW5wdXQsIE91dHB1dD4gPT4ge1xuICBsZXQgYWJzb2x1dGVFbnRyaWVzOiBBYnNvbHV0ZU1pZGRsZXdhcmVFbnRyeTxJbnB1dCwgT3V0cHV0PltdID0gW107XG4gIGxldCByZWxhdGl2ZUVudHJpZXM6IFJlbGF0aXZlTWlkZGxld2FyZUVudHJ5PElucHV0LCBPdXRwdXQ+W10gPSBbXTtcbiAgY29uc3QgZW50cmllc05hbWVTZXQ6IFNldDxzdHJpbmc+ID0gbmV3IFNldCgpO1xuXG4gIGNvbnN0IHNvcnQgPSA8VCBleHRlbmRzIEFic29sdXRlTWlkZGxld2FyZUVudHJ5PElucHV0LCBPdXRwdXQ+PihlbnRyaWVzOiBUW10pOiBUW10gPT5cbiAgICBlbnRyaWVzLnNvcnQoXG4gICAgICAoYSwgYikgPT5cbiAgICAgICAgc3RlcFdlaWdodHNbYi5zdGVwXSAtIHN0ZXBXZWlnaHRzW2Euc3RlcF0gfHxcbiAgICAgICAgcHJpb3JpdHlXZWlnaHRzW2IucHJpb3JpdHkgfHwgXCJub3JtYWxcIl0gLSBwcmlvcml0eVdlaWdodHNbYS5wcmlvcml0eSB8fCBcIm5vcm1hbFwiXVxuICAgICk7XG5cbiAgY29uc3QgcmVtb3ZlQnlOYW1lID0gKHRvUmVtb3ZlOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgICBsZXQgaXNSZW1vdmVkID0gZmFsc2U7XG4gICAgY29uc3QgZmlsdGVyQ2IgPSAoZW50cnk6IE1pZGRsZXdhcmVFbnRyeTxJbnB1dCwgT3V0cHV0Pik6IGJvb2xlYW4gPT4ge1xuICAgICAgaWYgKGVudHJ5Lm5hbWUgJiYgZW50cnkubmFtZSA9PT0gdG9SZW1vdmUpIHtcbiAgICAgICAgaXNSZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgZW50cmllc05hbWVTZXQuZGVsZXRlKHRvUmVtb3ZlKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBhYnNvbHV0ZUVudHJpZXMgPSBhYnNvbHV0ZUVudHJpZXMuZmlsdGVyKGZpbHRlckNiKTtcbiAgICByZWxhdGl2ZUVudHJpZXMgPSByZWxhdGl2ZUVudHJpZXMuZmlsdGVyKGZpbHRlckNiKTtcbiAgICByZXR1cm4gaXNSZW1vdmVkO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZUJ5UmVmZXJlbmNlID0gKHRvUmVtb3ZlOiBNaWRkbGV3YXJlVHlwZTxJbnB1dCwgT3V0cHV0Pik6IGJvb2xlYW4gPT4ge1xuICAgIGxldCBpc1JlbW92ZWQgPSBmYWxzZTtcbiAgICBjb25zdCBmaWx0ZXJDYiA9IChlbnRyeTogTWlkZGxld2FyZUVudHJ5PElucHV0LCBPdXRwdXQ+KTogYm9vbGVhbiA9PiB7XG4gICAgICBpZiAoZW50cnkubWlkZGxld2FyZSA9PT0gdG9SZW1vdmUpIHtcbiAgICAgICAgaXNSZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKGVudHJ5Lm5hbWUpIGVudHJpZXNOYW1lU2V0LmRlbGV0ZShlbnRyeS5uYW1lKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBhYnNvbHV0ZUVudHJpZXMgPSBhYnNvbHV0ZUVudHJpZXMuZmlsdGVyKGZpbHRlckNiKTtcbiAgICByZWxhdGl2ZUVudHJpZXMgPSByZWxhdGl2ZUVudHJpZXMuZmlsdGVyKGZpbHRlckNiKTtcbiAgICByZXR1cm4gaXNSZW1vdmVkO1xuICB9O1xuXG4gIGNvbnN0IGNsb25lVG8gPSA8SW5wdXRUeXBlIGV4dGVuZHMgSW5wdXQsIE91dHB1dFR5cGUgZXh0ZW5kcyBPdXRwdXQ+KFxuICAgIHRvU3RhY2s6IE1pZGRsZXdhcmVTdGFjazxJbnB1dFR5cGUsIE91dHB1dFR5cGU+XG4gICk6IE1pZGRsZXdhcmVTdGFjazxJbnB1dFR5cGUsIE91dHB1dFR5cGU+ID0+IHtcbiAgICBhYnNvbHV0ZUVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgdG9TdGFjay5hZGQoZW50cnkubWlkZGxld2FyZSwgeyAuLi5lbnRyeSB9KTtcbiAgICB9KTtcbiAgICByZWxhdGl2ZUVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgdG9TdGFjay5hZGRSZWxhdGl2ZVRvKGVudHJ5Lm1pZGRsZXdhcmUsIHsgLi4uZW50cnkgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRvU3RhY2s7XG4gIH07XG5cbiAgY29uc3QgZXhwYW5kUmVsYXRpdmVNaWRkbGV3YXJlTGlzdCA9IChcbiAgICBmcm9tOiBOb3JtYWxpemVkPE1pZGRsZXdhcmVFbnRyeTxJbnB1dCwgT3V0cHV0PiwgSW5wdXQsIE91dHB1dD5cbiAgKTogTWlkZGxld2FyZUVudHJ5PElucHV0LCBPdXRwdXQ+W10gPT4ge1xuICAgIGNvbnN0IGV4cGFuZGVkTWlkZGxld2FyZUxpc3Q6IE1pZGRsZXdhcmVFbnRyeTxJbnB1dCwgT3V0cHV0PltdID0gW107XG4gICAgZnJvbS5iZWZvcmUuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGlmIChlbnRyeS5iZWZvcmUubGVuZ3RoID09PSAwICYmIGVudHJ5LmFmdGVyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBleHBhbmRlZE1pZGRsZXdhcmVMaXN0LnB1c2goZW50cnkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXhwYW5kZWRNaWRkbGV3YXJlTGlzdC5wdXNoKC4uLmV4cGFuZFJlbGF0aXZlTWlkZGxld2FyZUxpc3QoZW50cnkpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBleHBhbmRlZE1pZGRsZXdhcmVMaXN0LnB1c2goZnJvbSk7XG4gICAgZnJvbS5hZnRlci5yZXZlcnNlKCkuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGlmIChlbnRyeS5iZWZvcmUubGVuZ3RoID09PSAwICYmIGVudHJ5LmFmdGVyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBleHBhbmRlZE1pZGRsZXdhcmVMaXN0LnB1c2goZW50cnkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXhwYW5kZWRNaWRkbGV3YXJlTGlzdC5wdXNoKC4uLmV4cGFuZFJlbGF0aXZlTWlkZGxld2FyZUxpc3QoZW50cnkpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZXhwYW5kZWRNaWRkbGV3YXJlTGlzdDtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGEgZmluYWwgbGlzdCBvZiBtaWRkbGV3YXJlIGluIHRoZSBvcmRlciBvZiBiZWluZyBleGVjdXRlZCBpbiB0aGUgcmVzb2x2ZWQgaGFuZGxlci5cbiAgICovXG4gIGNvbnN0IGdldE1pZGRsZXdhcmVMaXN0ID0gKCk6IEFycmF5PE1pZGRsZXdhcmVUeXBlPElucHV0LCBPdXRwdXQ+PiA9PiB7XG4gICAgY29uc3Qgbm9ybWFsaXplZEFic29sdXRlRW50cmllczogTm9ybWFsaXplZDxBYnNvbHV0ZU1pZGRsZXdhcmVFbnRyeTxJbnB1dCwgT3V0cHV0PiwgSW5wdXQsIE91dHB1dD5bXSA9IFtdO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRSZWxhdGl2ZUVudHJpZXM6IE5vcm1hbGl6ZWQ8UmVsYXRpdmVNaWRkbGV3YXJlRW50cnk8SW5wdXQsIE91dHB1dD4sIElucHV0LCBPdXRwdXQ+W10gPSBbXTtcbiAgICBjb25zdCBub3JtYWxpemVkRW50cmllc05hbWVNYXA6IHtcbiAgICAgIFttaWRkbGV3YXJlTmFtZTogc3RyaW5nXTogTm9ybWFsaXplZDxNaWRkbGV3YXJlRW50cnk8SW5wdXQsIE91dHB1dD4sIElucHV0LCBPdXRwdXQ+O1xuICAgIH0gPSB7fTtcblxuICAgIGFic29sdXRlRW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3Qgbm9ybWFsaXplZEVudHJ5ID0ge1xuICAgICAgICAuLi5lbnRyeSxcbiAgICAgICAgYmVmb3JlOiBbXSxcbiAgICAgICAgYWZ0ZXI6IFtdLFxuICAgICAgfTtcbiAgICAgIGlmIChub3JtYWxpemVkRW50cnkubmFtZSkgbm9ybWFsaXplZEVudHJpZXNOYW1lTWFwW25vcm1hbGl6ZWRFbnRyeS5uYW1lXSA9IG5vcm1hbGl6ZWRFbnRyeTtcbiAgICAgIG5vcm1hbGl6ZWRBYnNvbHV0ZUVudHJpZXMucHVzaChub3JtYWxpemVkRW50cnkpO1xuICAgIH0pO1xuXG4gICAgcmVsYXRpdmVFbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBub3JtYWxpemVkRW50cnkgPSB7XG4gICAgICAgIC4uLmVudHJ5LFxuICAgICAgICBiZWZvcmU6IFtdLFxuICAgICAgICBhZnRlcjogW10sXG4gICAgICB9O1xuICAgICAgaWYgKG5vcm1hbGl6ZWRFbnRyeS5uYW1lKSBub3JtYWxpemVkRW50cmllc05hbWVNYXBbbm9ybWFsaXplZEVudHJ5Lm5hbWVdID0gbm9ybWFsaXplZEVudHJ5O1xuICAgICAgbm9ybWFsaXplZFJlbGF0aXZlRW50cmllcy5wdXNoKG5vcm1hbGl6ZWRFbnRyeSk7XG4gICAgfSk7XG5cbiAgICBub3JtYWxpemVkUmVsYXRpdmVFbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBpZiAoZW50cnkudG9NaWRkbGV3YXJlKSB7XG4gICAgICAgIGNvbnN0IHRvTWlkZGxld2FyZSA9IG5vcm1hbGl6ZWRFbnRyaWVzTmFtZU1hcFtlbnRyeS50b01pZGRsZXdhcmVdO1xuICAgICAgICBpZiAodG9NaWRkbGV3YXJlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgJHtlbnRyeS50b01pZGRsZXdhcmV9IGlzIG5vdCBmb3VuZCB3aGVuIGFkZGluZyAke2VudHJ5Lm5hbWUgfHwgXCJhbm9ueW1vdXNcIn0gbWlkZGxld2FyZSAke2VudHJ5LnJlbGF0aW9ufSAke1xuICAgICAgICAgICAgICBlbnRyeS50b01pZGRsZXdhcmVcbiAgICAgICAgICAgIH1gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW50cnkucmVsYXRpb24gPT09IFwiYWZ0ZXJcIikge1xuICAgICAgICAgIHRvTWlkZGxld2FyZS5hZnRlci5wdXNoKGVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW50cnkucmVsYXRpb24gPT09IFwiYmVmb3JlXCIpIHtcbiAgICAgICAgICB0b01pZGRsZXdhcmUuYmVmb3JlLnB1c2goZW50cnkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBtYWluQ2hhaW4gPSBzb3J0KG5vcm1hbGl6ZWRBYnNvbHV0ZUVudHJpZXMpXG4gICAgICAubWFwKGV4cGFuZFJlbGF0aXZlTWlkZGxld2FyZUxpc3QpXG4gICAgICAucmVkdWNlKCh3aG9sZUxpc3QsIGV4cGVuZGVkTWlkZGxld2FyZUxpc3QpID0+IHtcbiAgICAgICAgLy8gVE9ETzogUmVwbGFjZSBpdCB3aXRoIEFycmF5LmZsYXQoKTtcbiAgICAgICAgd2hvbGVMaXN0LnB1c2goLi4uZXhwZW5kZWRNaWRkbGV3YXJlTGlzdCk7XG4gICAgICAgIHJldHVybiB3aG9sZUxpc3Q7XG4gICAgICB9LCBbXSBhcyBNaWRkbGV3YXJlRW50cnk8SW5wdXQsIE91dHB1dD5bXSk7XG4gICAgcmV0dXJuIG1haW5DaGFpbi5tYXAoKGVudHJ5KSA9PiBlbnRyeS5taWRkbGV3YXJlKTtcbiAgfTtcblxuICBjb25zdCBzdGFjayA9IHtcbiAgICBhZGQ6IChtaWRkbGV3YXJlOiBNaWRkbGV3YXJlVHlwZTxJbnB1dCwgT3V0cHV0Piwgb3B0aW9uczogSGFuZGxlck9wdGlvbnMgJiBBYnNvbHV0ZUxvY2F0aW9uID0ge30pID0+IHtcbiAgICAgIGNvbnN0IHsgbmFtZSwgb3ZlcnJpZGUgfSA9IG9wdGlvbnM7XG4gICAgICBjb25zdCBlbnRyeTogQWJzb2x1dGVNaWRkbGV3YXJlRW50cnk8SW5wdXQsIE91dHB1dD4gPSB7XG4gICAgICAgIHN0ZXA6IFwiaW5pdGlhbGl6ZVwiLFxuICAgICAgICBwcmlvcml0eTogXCJub3JtYWxcIixcbiAgICAgICAgbWlkZGxld2FyZSxcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIH07XG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICBpZiAoZW50cmllc05hbWVTZXQuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgaWYgKCFvdmVycmlkZSkgdGhyb3cgbmV3IEVycm9yKGBEdXBsaWNhdGUgbWlkZGxld2FyZSBuYW1lICcke25hbWV9J2ApO1xuICAgICAgICAgIGNvbnN0IHRvT3ZlcnJpZGVJbmRleCA9IGFic29sdXRlRW50cmllcy5maW5kSW5kZXgoKGVudHJ5KSA9PiBlbnRyeS5uYW1lID09PSBuYW1lKTtcbiAgICAgICAgICBjb25zdCB0b092ZXJyaWRlID0gYWJzb2x1dGVFbnRyaWVzW3RvT3ZlcnJpZGVJbmRleF07XG4gICAgICAgICAgaWYgKHRvT3ZlcnJpZGUuc3RlcCAhPT0gZW50cnkuc3RlcCB8fCB0b092ZXJyaWRlLnByaW9yaXR5ICE9PSBlbnRyeS5wcmlvcml0eSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBgXCIke25hbWV9XCIgbWlkZGxld2FyZSB3aXRoICR7dG9PdmVycmlkZS5wcmlvcml0eX0gcHJpb3JpdHkgaW4gJHt0b092ZXJyaWRlLnN0ZXB9IHN0ZXAgY2Fubm90IGJlIGAgK1xuICAgICAgICAgICAgICAgIGBvdmVycmlkZGVuIGJ5IHNhbWUtbmFtZSBtaWRkbGV3YXJlIHdpdGggJHtlbnRyeS5wcmlvcml0eX0gcHJpb3JpdHkgaW4gJHtlbnRyeS5zdGVwfSBzdGVwLmBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFic29sdXRlRW50cmllcy5zcGxpY2UodG9PdmVycmlkZUluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICBlbnRyaWVzTmFtZVNldC5hZGQobmFtZSk7XG4gICAgICB9XG4gICAgICBhYnNvbHV0ZUVudHJpZXMucHVzaChlbnRyeSk7XG4gICAgfSxcblxuICAgIGFkZFJlbGF0aXZlVG86IChtaWRkbGV3YXJlOiBNaWRkbGV3YXJlVHlwZTxJbnB1dCwgT3V0cHV0Piwgb3B0aW9uczogSGFuZGxlck9wdGlvbnMgJiBSZWxhdGl2ZUxvY2F0aW9uKSA9PiB7XG4gICAgICBjb25zdCB7IG5hbWUsIG92ZXJyaWRlIH0gPSBvcHRpb25zO1xuICAgICAgY29uc3QgZW50cnk6IFJlbGF0aXZlTWlkZGxld2FyZUVudHJ5PElucHV0LCBPdXRwdXQ+ID0ge1xuICAgICAgICBtaWRkbGV3YXJlLFxuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgfTtcbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIGlmIChlbnRyaWVzTmFtZVNldC5oYXMobmFtZSkpIHtcbiAgICAgICAgICBpZiAoIW92ZXJyaWRlKSB0aHJvdyBuZXcgRXJyb3IoYER1cGxpY2F0ZSBtaWRkbGV3YXJlIG5hbWUgJyR7bmFtZX0nYCk7XG4gICAgICAgICAgY29uc3QgdG9PdmVycmlkZUluZGV4ID0gcmVsYXRpdmVFbnRyaWVzLmZpbmRJbmRleCgoZW50cnkpID0+IGVudHJ5Lm5hbWUgPT09IG5hbWUpO1xuICAgICAgICAgIGNvbnN0IHRvT3ZlcnJpZGUgPSByZWxhdGl2ZUVudHJpZXNbdG9PdmVycmlkZUluZGV4XTtcbiAgICAgICAgICBpZiAodG9PdmVycmlkZS50b01pZGRsZXdhcmUgIT09IGVudHJ5LnRvTWlkZGxld2FyZSB8fCB0b092ZXJyaWRlLnJlbGF0aW9uICE9PSBlbnRyeS5yZWxhdGlvbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBgXCIke25hbWV9XCIgbWlkZGxld2FyZSAke3RvT3ZlcnJpZGUucmVsYXRpb259IFwiJHt0b092ZXJyaWRlLnRvTWlkZGxld2FyZX1cIiBtaWRkbGV3YXJlIGNhbm5vdCBiZSBvdmVycmlkZGVuIGAgK1xuICAgICAgICAgICAgICAgIGBieSBzYW1lLW5hbWUgbWlkZGxld2FyZSAke2VudHJ5LnJlbGF0aW9ufSBcIiR7ZW50cnkudG9NaWRkbGV3YXJlfVwiIG1pZGRsZXdhcmUuYFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVsYXRpdmVFbnRyaWVzLnNwbGljZSh0b092ZXJyaWRlSW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGVudHJpZXNOYW1lU2V0LmFkZChuYW1lKTtcbiAgICAgIH1cbiAgICAgIHJlbGF0aXZlRW50cmllcy5wdXNoKGVudHJ5KTtcbiAgICB9LFxuXG4gICAgY2xvbmU6ICgpID0+IGNsb25lVG8oY29uc3RydWN0U3RhY2s8SW5wdXQsIE91dHB1dD4oKSksXG5cbiAgICB1c2U6IChwbHVnaW46IFBsdWdnYWJsZTxJbnB1dCwgT3V0cHV0PikgPT4ge1xuICAgICAgcGx1Z2luLmFwcGx5VG9TdGFjayhzdGFjayk7XG4gICAgfSxcblxuICAgIHJlbW92ZTogKHRvUmVtb3ZlOiBNaWRkbGV3YXJlVHlwZTxJbnB1dCwgT3V0cHV0PiB8IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICAgICAgaWYgKHR5cGVvZiB0b1JlbW92ZSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHJlbW92ZUJ5TmFtZSh0b1JlbW92ZSk7XG4gICAgICBlbHNlIHJldHVybiByZW1vdmVCeVJlZmVyZW5jZSh0b1JlbW92ZSk7XG4gICAgfSxcblxuICAgIHJlbW92ZUJ5VGFnOiAodG9SZW1vdmU6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICAgICAgbGV0IGlzUmVtb3ZlZCA9IGZhbHNlO1xuICAgICAgY29uc3QgZmlsdGVyQ2IgPSAoZW50cnk6IE1pZGRsZXdhcmVFbnRyeTxJbnB1dCwgT3V0cHV0Pik6IGJvb2xlYW4gPT4ge1xuICAgICAgICBjb25zdCB7IHRhZ3MsIG5hbWUgfSA9IGVudHJ5O1xuICAgICAgICBpZiAodGFncyAmJiB0YWdzLmluY2x1ZGVzKHRvUmVtb3ZlKSkge1xuICAgICAgICAgIGlmIChuYW1lKSBlbnRyaWVzTmFtZVNldC5kZWxldGUobmFtZSk7XG4gICAgICAgICAgaXNSZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuICAgICAgYWJzb2x1dGVFbnRyaWVzID0gYWJzb2x1dGVFbnRyaWVzLmZpbHRlcihmaWx0ZXJDYik7XG4gICAgICByZWxhdGl2ZUVudHJpZXMgPSByZWxhdGl2ZUVudHJpZXMuZmlsdGVyKGZpbHRlckNiKTtcbiAgICAgIHJldHVybiBpc1JlbW92ZWQ7XG4gICAgfSxcblxuICAgIGNvbmNhdDogPElucHV0VHlwZSBleHRlbmRzIElucHV0LCBPdXRwdXRUeXBlIGV4dGVuZHMgT3V0cHV0PihcbiAgICAgIGZyb206IE1pZGRsZXdhcmVTdGFjazxJbnB1dFR5cGUsIE91dHB1dFR5cGU+XG4gICAgKTogTWlkZGxld2FyZVN0YWNrPElucHV0VHlwZSwgT3V0cHV0VHlwZT4gPT4ge1xuICAgICAgY29uc3QgY2xvbmVkID0gY2xvbmVUbyhjb25zdHJ1Y3RTdGFjazxJbnB1dFR5cGUsIE91dHB1dFR5cGU+KCkpO1xuICAgICAgY2xvbmVkLnVzZShmcm9tKTtcbiAgICAgIHJldHVybiBjbG9uZWQ7XG4gICAgfSxcblxuICAgIGFwcGx5VG9TdGFjazogY2xvbmVUbyxcblxuICAgIHJlc29sdmU6IDxJbnB1dFR5cGUgZXh0ZW5kcyBJbnB1dCwgT3V0cHV0VHlwZSBleHRlbmRzIE91dHB1dD4oXG4gICAgICBoYW5kbGVyOiBEZXNlcmlhbGl6ZUhhbmRsZXI8SW5wdXRUeXBlLCBPdXRwdXRUeXBlPixcbiAgICAgIGNvbnRleHQ6IEhhbmRsZXJFeGVjdXRpb25Db250ZXh0XG4gICAgKTogSGFuZGxlcjxJbnB1dFR5cGUsIE91dHB1dFR5cGU+ID0+IHtcbiAgICAgIGZvciAoY29uc3QgbWlkZGxld2FyZSBvZiBnZXRNaWRkbGV3YXJlTGlzdCgpLnJldmVyc2UoKSkge1xuICAgICAgICBoYW5kbGVyID0gbWlkZGxld2FyZShoYW5kbGVyIGFzIEhhbmRsZXI8SW5wdXQsIE91dHB1dFR5cGU+LCBjb250ZXh0KSBhcyBhbnk7XG4gICAgICB9XG4gICAgICByZXR1cm4gaGFuZGxlciBhcyBIYW5kbGVyPElucHV0VHlwZSwgT3V0cHV0VHlwZT47XG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIHN0YWNrO1xufTtcblxuY29uc3Qgc3RlcFdlaWdodHM6IHsgW2tleSBpbiBTdGVwXTogbnVtYmVyIH0gPSB7XG4gIGluaXRpYWxpemU6IDUsXG4gIHNlcmlhbGl6ZTogNCxcbiAgYnVpbGQ6IDMsXG4gIGZpbmFsaXplUmVxdWVzdDogMixcbiAgZGVzZXJpYWxpemU6IDEsXG59O1xuXG5jb25zdCBwcmlvcml0eVdlaWdodHM6IHsgW2tleSBpbiBQcmlvcml0eV06IG51bWJlciB9ID0ge1xuICBoaWdoOiAzLFxuICBub3JtYWw6IDIsXG4gIGxvdzogMSxcbn07XG4iXX0=

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-stack/dist/es/index.js":
/*!**************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-stack/dist/es/index.js ***!
  \**************************************************************************************************/
/*! exports provided: constructStack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MiddlewareStack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MiddlewareStack */ "../../node_modules/@aws-sdk/middleware-stack/dist/es/MiddlewareStack.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "constructStack", function() { return _MiddlewareStack__WEBPACK_IMPORTED_MODULE_0__["constructStack"]; });


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxtQkFBbUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL01pZGRsZXdhcmVTdGFja1wiO1xuIl19

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-user-agent/dist/es/configurations.js":
/*!****************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-user-agent/dist/es/configurations.js ***!
  \****************************************************************************************************************/
/*! exports provided: resolveUserAgentConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveUserAgentConfig", function() { return resolveUserAgentConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

function resolveUserAgentConfig(input) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, input), { customUserAgent: typeof input.customUserAgent === "string" ? [[input.customUserAgent]] : input.customUserAgent });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlndXJhdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQWdCQSxNQUFNLFVBQVUsc0JBQXNCLENBQ3BDLEtBQW9EO0lBRXBELDZCQUNLLEtBQUssS0FDUixlQUFlLEVBQUUsT0FBTyxLQUFLLENBQUMsZUFBZSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxJQUM5RztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm92aWRlciwgVXNlckFnZW50IH0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5leHBvcnQgaW50ZXJmYWNlIFVzZXJBZ2VudElucHV0Q29uZmlnIHtcbiAgLyoqXG4gICAqIFRoZSBjdXN0b20gdXNlciBhZ2VudCBoZWFkZXIgdGhhdCB3b3VsZCBiZSBhcHBlbmRlZCB0byBkZWZhdWx0IG9uZVxuICAgKi9cbiAgY3VzdG9tVXNlckFnZW50Pzogc3RyaW5nIHwgVXNlckFnZW50O1xufVxuaW50ZXJmYWNlIFByZXZpb3VzbHlSZXNvbHZlZCB7XG4gIGRlZmF1bHRVc2VyQWdlbnRQcm92aWRlcjogUHJvdmlkZXI8VXNlckFnZW50PjtcbiAgcnVudGltZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBVc2VyQWdlbnRSZXNvbHZlZENvbmZpZyB7XG4gIGRlZmF1bHRVc2VyQWdlbnRQcm92aWRlcjogUHJvdmlkZXI8VXNlckFnZW50PjtcbiAgY3VzdG9tVXNlckFnZW50PzogVXNlckFnZW50O1xuICBydW50aW1lOiBzdHJpbmc7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVVzZXJBZ2VudENvbmZpZzxUPihcbiAgaW5wdXQ6IFQgJiBQcmV2aW91c2x5UmVzb2x2ZWQgJiBVc2VyQWdlbnRJbnB1dENvbmZpZ1xuKTogVCAmIFVzZXJBZ2VudFJlc29sdmVkQ29uZmlnIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5pbnB1dCxcbiAgICBjdXN0b21Vc2VyQWdlbnQ6IHR5cGVvZiBpbnB1dC5jdXN0b21Vc2VyQWdlbnQgPT09IFwic3RyaW5nXCIgPyBbW2lucHV0LmN1c3RvbVVzZXJBZ2VudF1dIDogaW5wdXQuY3VzdG9tVXNlckFnZW50LFxuICB9O1xufVxuIl19

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-user-agent/dist/es/constants.js":
/*!***********************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-user-agent/dist/es/constants.js ***!
  \***********************************************************************************************************/
/*! exports provided: USER_AGENT, X_AMZ_USER_AGENT, SPACE, UA_ESCAPE_REGEX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_AGENT", function() { return USER_AGENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X_AMZ_USER_AGENT", function() { return X_AMZ_USER_AGENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPACE", function() { return SPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UA_ESCAPE_REGEX", function() { return UA_ESCAPE_REGEX; });
var USER_AGENT = "user-agent";
var X_AMZ_USER_AGENT = "x-amz-user-agent";
var SPACE = " ";
var UA_ESCAPE_REGEX = /[^\!\#\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsSUFBTSxVQUFVLEdBQUcsWUFBWSxDQUFDO0FBRXZDLE1BQU0sQ0FBQyxJQUFNLGdCQUFnQixHQUFHLGtCQUFrQixDQUFDO0FBRW5ELE1BQU0sQ0FBQyxJQUFNLEtBQUssR0FBRyxHQUFHLENBQUM7QUFFekIsTUFBTSxDQUFDLElBQU0sZUFBZSxHQUFHLHdDQUF3QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFVTRVJfQUdFTlQgPSBcInVzZXItYWdlbnRcIjtcblxuZXhwb3J0IGNvbnN0IFhfQU1aX1VTRVJfQUdFTlQgPSBcIngtYW16LXVzZXItYWdlbnRcIjtcblxuZXhwb3J0IGNvbnN0IFNQQUNFID0gXCIgXCI7XG5cbmV4cG9ydCBjb25zdCBVQV9FU0NBUEVfUkVHRVggPSAvW15cXCFcXCNcXCRcXCVcXCZcXCdcXCpcXCtcXC1cXC5cXF5cXF9cXGBcXHxcXH5cXGRcXHddL2c7XG4iXX0=

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-user-agent/dist/es/index.js":
/*!*******************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-user-agent/dist/es/index.js ***!
  \*******************************************************************************************************/
/*! exports provided: resolveUserAgentConfig, userAgentMiddleware, getUserAgentMiddlewareOptions, getUserAgentPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _configurations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configurations */ "../../node_modules/@aws-sdk/middleware-user-agent/dist/es/configurations.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveUserAgentConfig", function() { return _configurations__WEBPACK_IMPORTED_MODULE_0__["resolveUserAgentConfig"]; });

/* harmony import */ var _user_agent_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-agent-middleware */ "../../node_modules/@aws-sdk/middleware-user-agent/dist/es/user-agent-middleware.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userAgentMiddleware", function() { return _user_agent_middleware__WEBPACK_IMPORTED_MODULE_1__["userAgentMiddleware"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserAgentMiddlewareOptions", function() { return _user_agent_middleware__WEBPACK_IMPORTED_MODULE_1__["getUserAgentMiddlewareOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserAgentPlugin", function() { return _user_agent_middleware__WEBPACK_IMPORTED_MODULE_1__["getUserAgentPlugin"]; });



//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxrQkFBa0IsQ0FBQztBQUNqQyxjQUFjLHlCQUF5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vY29uZmlndXJhdGlvbnNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3VzZXItYWdlbnQtbWlkZGxld2FyZVwiO1xuIl19

/***/ }),

/***/ "../../node_modules/@aws-sdk/middleware-user-agent/dist/es/user-agent-middleware.js":
/*!***********************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/middleware-user-agent/dist/es/user-agent-middleware.js ***!
  \***********************************************************************************************************************/
/*! exports provided: userAgentMiddleware, getUserAgentMiddlewareOptions, getUserAgentPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userAgentMiddleware", function() { return userAgentMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserAgentMiddlewareOptions", function() { return getUserAgentMiddlewareOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserAgentPlugin", function() { return getUserAgentPlugin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/protocol-http */ "../../node_modules/@aws-sdk/protocol-http/dist/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "../../node_modules/@aws-sdk/middleware-user-agent/dist/es/constants.js");



/**
 * Build user agent header sections from:
 * 1. runtime-specific default user agent provider;
 * 2. custom user agent from `customUserAgent` client config;
 * 3. handler execution context set by internal SDK components;
 * The built user agent will be set to `x-amz-user-agent` header for ALL the
 * runtimes.
 * Please note that any override to the `user-agent` or `x-amz-user-agent` header
 * in the HTTP request is discouraged. Please use `customUserAgent` client
 * config or middleware setting the `userAgent` context to generate desired user
 * agent.
 */
var userAgentMiddleware = function (options) { return function (next, context) { return function (args) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var request, headers, userAgent, defaultUserAgent, customUserAgent, normalUAValue;
    var _a, _b;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
        switch (_c.label) {
            case 0:
                request = args.request;
                if (!_aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"].isInstance(request))
                    return [2 /*return*/, next(args)];
                headers = request.headers;
                userAgent = ((_a = context === null || context === void 0 ? void 0 : context.userAgent) === null || _a === void 0 ? void 0 : _a.map(escapeUserAgent)) || [];
                return [4 /*yield*/, options.defaultUserAgentProvider()];
            case 1:
                defaultUserAgent = (_c.sent()).map(escapeUserAgent);
                customUserAgent = ((_b = options === null || options === void 0 ? void 0 : options.customUserAgent) === null || _b === void 0 ? void 0 : _b.map(escapeUserAgent)) || [];
                // Set value to AWS-specific user agent header
                headers[_constants__WEBPACK_IMPORTED_MODULE_2__["X_AMZ_USER_AGENT"]] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(defaultUserAgent, userAgent, customUserAgent).join(_constants__WEBPACK_IMPORTED_MODULE_2__["SPACE"]);
                normalUAValue = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(defaultUserAgent.filter(function (section) { return section.startsWith("aws-sdk-"); }), customUserAgent).join(_constants__WEBPACK_IMPORTED_MODULE_2__["SPACE"]);
                if (options.runtime !== "browser" && normalUAValue) {
                    headers[_constants__WEBPACK_IMPORTED_MODULE_2__["USER_AGENT"]] = headers[_constants__WEBPACK_IMPORTED_MODULE_2__["USER_AGENT"]] ? headers[_constants__WEBPACK_IMPORTED_MODULE_2__["USER_AGENT"]] + " " + normalUAValue : normalUAValue;
                }
                return [2 /*return*/, next(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, args), { request: request }))];
        }
    });
}); }; }; };
/**
 * Escape the each pair according to https://tools.ietf.org/html/rfc5234 and join the pair with pattern `name/version`.
 * User agent name may include prefix like `md/`, `api/`, `os/` etc., we should not escape the `/` after the prefix.
 * @private
 */
var escapeUserAgent = function (_a) {
    var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), name = _b[0], version = _b[1];
    var prefixSeparatorIndex = name.indexOf("/");
    var prefix = name.substring(0, prefixSeparatorIndex); // If no prefix, prefix is just ""
    var uaName = name.substring(prefixSeparatorIndex + 1);
    if (prefix === "api") {
        uaName = uaName.toLowerCase();
    }
    return [prefix, uaName, version]
        .filter(function (item) { return item && item.length > 0; })
        .map(function (item) { return item === null || item === void 0 ? void 0 : item.replace(_constants__WEBPACK_IMPORTED_MODULE_2__["UA_ESCAPE_REGEX"], "_"); })
        .join("/");
};
var getUserAgentMiddlewareOptions = {
    name: "getUserAgentMiddleware",
    step: "build",
    priority: "low",
    tags: ["SET_USER_AGENT", "USER_AGENT"],
    override: true,
};
var getUserAgentPlugin = function (config) { return ({
    applyToStack: function (clientStack) {
        clientStack.add(userAgentMiddleware(config), getUserAgentMiddlewareOptions);
    },
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hZ2VudC1taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3VzZXItYWdlbnQtbWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBY3JELE9BQU8sRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVuRjs7Ozs7Ozs7Ozs7R0FXRztBQUNILE1BQU0sQ0FBQyxJQUFNLG1CQUFtQixHQUFHLFVBQUMsT0FBZ0MsSUFBSyxPQUFBLFVBQ3ZFLElBQTRCLEVBQzVCLE9BQWdDLElBQ0wsT0FBQSxVQUFPLElBQWdDOzs7Ozs7Z0JBQzFELE9BQU8sR0FBSyxJQUFJLFFBQVQsQ0FBVTtnQkFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO29CQUFFLHNCQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQztnQkFDaEQsT0FBTyxHQUFLLE9BQU8sUUFBWixDQUFhO2dCQUN0QixTQUFTLEdBQUcsT0FBQSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsU0FBUywwQ0FBRSxHQUFHLENBQUMsZUFBZSxNQUFLLEVBQUUsQ0FBQztnQkFDdkMscUJBQU0sT0FBTyxDQUFDLHdCQUF3QixFQUFFLEVBQUE7O2dCQUE1RCxnQkFBZ0IsR0FBRyxDQUFDLFNBQXdDLENBQUMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDO2dCQUNsRixlQUFlLEdBQUcsT0FBQSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsZUFBZSwwQ0FBRSxHQUFHLENBQUMsZUFBZSxNQUFLLEVBQUUsQ0FBQztnQkFDN0UsOENBQThDO2dCQUM5QyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxTQUFJLGdCQUFnQixFQUFLLFNBQVMsRUFBSyxlQUFlLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUUxRixhQUFhLEdBQUcsU0FDakIsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFVBQUMsT0FBTyxJQUFLLE9BQUEsT0FBTyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxFQUNwRSxlQUFlLEVBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDZCxJQUFJLE9BQU8sQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLGFBQWEsRUFBRTtvQkFDbEQsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxTQUFJLGFBQWUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO2lCQUN2RztnQkFFRCxzQkFBTyxJQUFJLHVCQUNOLElBQUksS0FDUCxPQUFPLFNBQUEsSUFDUCxFQUFDOzs7S0FDSixFQXRCNEIsQ0FzQjVCLEVBekJ3RSxDQXlCeEUsQ0FBQztBQUVGOzs7O0dBSUc7QUFDSCxJQUFNLGVBQWUsR0FBRyxVQUFDLEVBQThCO1FBQTlCLEtBQUEsYUFBOEIsRUFBN0IsSUFBSSxRQUFBLEVBQUUsT0FBTyxRQUFBO0lBQ3JDLElBQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsa0NBQWtDO0lBQzFGLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsb0JBQW9CLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEQsSUFBSSxNQUFNLEtBQUssS0FBSyxFQUFFO1FBQ3BCLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDL0I7SUFDRCxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUM7U0FDN0IsTUFBTSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUF2QixDQUF1QixDQUFDO1NBQ3pDLEdBQUcsQ0FBQyxVQUFDLElBQUksV0FBSyxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsT0FBTyxDQUFDLGVBQWUsRUFBRSxHQUFHLElBQUMsQ0FBQztTQUNsRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDZixDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsSUFBTSw2QkFBNkIsR0FBMkM7SUFDbkYsSUFBSSxFQUFFLHdCQUF3QjtJQUM5QixJQUFJLEVBQUUsT0FBTztJQUNiLFFBQVEsRUFBRSxLQUFLO0lBQ2YsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsWUFBWSxDQUFDO0lBQ3RDLFFBQVEsRUFBRSxJQUFJO0NBQ2YsQ0FBQztBQUVGLE1BQU0sQ0FBQyxJQUFNLGtCQUFrQixHQUFHLFVBQUMsTUFBK0IsSUFBMEIsT0FBQSxDQUFDO0lBQzNGLFlBQVksRUFBRSxVQUFDLFdBQVc7UUFDeEIsV0FBVyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO0lBQzlFLENBQUM7Q0FDRixDQUFDLEVBSjBGLENBSTFGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gXCJAYXdzLXNkay9wcm90b2NvbC1odHRwXCI7XG5pbXBvcnQge1xuICBBYnNvbHV0ZUxvY2F0aW9uLFxuICBCdWlsZEhhbmRsZXIsXG4gIEJ1aWxkSGFuZGxlckFyZ3VtZW50cyxcbiAgQnVpbGRIYW5kbGVyT3B0aW9ucyxcbiAgQnVpbGRIYW5kbGVyT3V0cHV0LFxuICBIYW5kbGVyRXhlY3V0aW9uQ29udGV4dCxcbiAgTWV0YWRhdGFCZWFyZXIsXG4gIFBsdWdnYWJsZSxcbiAgVXNlckFnZW50UGFpcixcbn0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5cbmltcG9ydCB7IFVzZXJBZ2VudFJlc29sdmVkQ29uZmlnIH0gZnJvbSBcIi4vY29uZmlndXJhdGlvbnNcIjtcbmltcG9ydCB7IFNQQUNFLCBVQV9FU0NBUEVfUkVHRVgsIFVTRVJfQUdFTlQsIFhfQU1aX1VTRVJfQUdFTlQgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBCdWlsZCB1c2VyIGFnZW50IGhlYWRlciBzZWN0aW9ucyBmcm9tOlxuICogMS4gcnVudGltZS1zcGVjaWZpYyBkZWZhdWx0IHVzZXIgYWdlbnQgcHJvdmlkZXI7XG4gKiAyLiBjdXN0b20gdXNlciBhZ2VudCBmcm9tIGBjdXN0b21Vc2VyQWdlbnRgIGNsaWVudCBjb25maWc7XG4gKiAzLiBoYW5kbGVyIGV4ZWN1dGlvbiBjb250ZXh0IHNldCBieSBpbnRlcm5hbCBTREsgY29tcG9uZW50cztcbiAqIFRoZSBidWlsdCB1c2VyIGFnZW50IHdpbGwgYmUgc2V0IHRvIGB4LWFtei11c2VyLWFnZW50YCBoZWFkZXIgZm9yIEFMTCB0aGVcbiAqIHJ1bnRpbWVzLlxuICogUGxlYXNlIG5vdGUgdGhhdCBhbnkgb3ZlcnJpZGUgdG8gdGhlIGB1c2VyLWFnZW50YCBvciBgeC1hbXotdXNlci1hZ2VudGAgaGVhZGVyXG4gKiBpbiB0aGUgSFRUUCByZXF1ZXN0IGlzIGRpc2NvdXJhZ2VkLiBQbGVhc2UgdXNlIGBjdXN0b21Vc2VyQWdlbnRgIGNsaWVudFxuICogY29uZmlnIG9yIG1pZGRsZXdhcmUgc2V0dGluZyB0aGUgYHVzZXJBZ2VudGAgY29udGV4dCB0byBnZW5lcmF0ZSBkZXNpcmVkIHVzZXJcbiAqIGFnZW50LlxuICovXG5leHBvcnQgY29uc3QgdXNlckFnZW50TWlkZGxld2FyZSA9IChvcHRpb25zOiBVc2VyQWdlbnRSZXNvbHZlZENvbmZpZykgPT4gPE91dHB1dCBleHRlbmRzIE1ldGFkYXRhQmVhcmVyPihcbiAgbmV4dDogQnVpbGRIYW5kbGVyPGFueSwgYW55PixcbiAgY29udGV4dDogSGFuZGxlckV4ZWN1dGlvbkNvbnRleHRcbik6IEJ1aWxkSGFuZGxlcjxhbnksIGFueT4gPT4gYXN5bmMgKGFyZ3M6IEJ1aWxkSGFuZGxlckFyZ3VtZW50czxhbnk+KTogUHJvbWlzZTxCdWlsZEhhbmRsZXJPdXRwdXQ8T3V0cHV0Pj4gPT4ge1xuICBjb25zdCB7IHJlcXVlc3QgfSA9IGFyZ3M7XG4gIGlmICghSHR0cFJlcXVlc3QuaXNJbnN0YW5jZShyZXF1ZXN0KSkgcmV0dXJuIG5leHQoYXJncyk7XG4gIGNvbnN0IHsgaGVhZGVycyB9ID0gcmVxdWVzdDtcbiAgY29uc3QgdXNlckFnZW50ID0gY29udGV4dD8udXNlckFnZW50Py5tYXAoZXNjYXBlVXNlckFnZW50KSB8fCBbXTtcbiAgY29uc3QgZGVmYXVsdFVzZXJBZ2VudCA9IChhd2FpdCBvcHRpb25zLmRlZmF1bHRVc2VyQWdlbnRQcm92aWRlcigpKS5tYXAoZXNjYXBlVXNlckFnZW50KTtcbiAgY29uc3QgY3VzdG9tVXNlckFnZW50ID0gb3B0aW9ucz8uY3VzdG9tVXNlckFnZW50Py5tYXAoZXNjYXBlVXNlckFnZW50KSB8fCBbXTtcbiAgLy8gU2V0IHZhbHVlIHRvIEFXUy1zcGVjaWZpYyB1c2VyIGFnZW50IGhlYWRlclxuICBoZWFkZXJzW1hfQU1aX1VTRVJfQUdFTlRdID0gWy4uLmRlZmF1bHRVc2VyQWdlbnQsIC4uLnVzZXJBZ2VudCwgLi4uY3VzdG9tVXNlckFnZW50XS5qb2luKFNQQUNFKTtcbiAgLy8gR2V0IHZhbHVlIHRvIGJlIHNlbnQgd2l0aCBub24tQVdTLXNwZWNpZmljIHVzZXIgYWdlbnQgaGVhZGVyLlxuICBjb25zdCBub3JtYWxVQVZhbHVlID0gW1xuICAgIC4uLmRlZmF1bHRVc2VyQWdlbnQuZmlsdGVyKChzZWN0aW9uKSA9PiBzZWN0aW9uLnN0YXJ0c1dpdGgoXCJhd3Mtc2RrLVwiKSksXG4gICAgLi4uY3VzdG9tVXNlckFnZW50LFxuICBdLmpvaW4oU1BBQ0UpO1xuICBpZiAob3B0aW9ucy5ydW50aW1lICE9PSBcImJyb3dzZXJcIiAmJiBub3JtYWxVQVZhbHVlKSB7XG4gICAgaGVhZGVyc1tVU0VSX0FHRU5UXSA9IGhlYWRlcnNbVVNFUl9BR0VOVF0gPyBgJHtoZWFkZXJzW1VTRVJfQUdFTlRdfSAke25vcm1hbFVBVmFsdWV9YCA6IG5vcm1hbFVBVmFsdWU7XG4gIH1cblxuICByZXR1cm4gbmV4dCh7XG4gICAgLi4uYXJncyxcbiAgICByZXF1ZXN0LFxuICB9KTtcbn07XG5cbi8qKlxuICogRXNjYXBlIHRoZSBlYWNoIHBhaXIgYWNjb3JkaW5nIHRvIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM1MjM0IGFuZCBqb2luIHRoZSBwYWlyIHdpdGggcGF0dGVybiBgbmFtZS92ZXJzaW9uYC5cbiAqIFVzZXIgYWdlbnQgbmFtZSBtYXkgaW5jbHVkZSBwcmVmaXggbGlrZSBgbWQvYCwgYGFwaS9gLCBgb3MvYCBldGMuLCB3ZSBzaG91bGQgbm90IGVzY2FwZSB0aGUgYC9gIGFmdGVyIHRoZSBwcmVmaXguXG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBlc2NhcGVVc2VyQWdlbnQgPSAoW25hbWUsIHZlcnNpb25dOiBVc2VyQWdlbnRQYWlyKTogc3RyaW5nID0+IHtcbiAgY29uc3QgcHJlZml4U2VwYXJhdG9ySW5kZXggPSBuYW1lLmluZGV4T2YoXCIvXCIpO1xuICBjb25zdCBwcmVmaXggPSBuYW1lLnN1YnN0cmluZygwLCBwcmVmaXhTZXBhcmF0b3JJbmRleCk7IC8vIElmIG5vIHByZWZpeCwgcHJlZml4IGlzIGp1c3QgXCJcIlxuICBsZXQgdWFOYW1lID0gbmFtZS5zdWJzdHJpbmcocHJlZml4U2VwYXJhdG9ySW5kZXggKyAxKTtcbiAgaWYgKHByZWZpeCA9PT0gXCJhcGlcIikge1xuICAgIHVhTmFtZSA9IHVhTmFtZS50b0xvd2VyQ2FzZSgpO1xuICB9XG4gIHJldHVybiBbcHJlZml4LCB1YU5hbWUsIHZlcnNpb25dXG4gICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAmJiBpdGVtLmxlbmd0aCA+IDApXG4gICAgLm1hcCgoaXRlbSkgPT4gaXRlbT8ucmVwbGFjZShVQV9FU0NBUEVfUkVHRVgsIFwiX1wiKSlcbiAgICAuam9pbihcIi9cIik7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VXNlckFnZW50TWlkZGxld2FyZU9wdGlvbnM6IEJ1aWxkSGFuZGxlck9wdGlvbnMgJiBBYnNvbHV0ZUxvY2F0aW9uID0ge1xuICBuYW1lOiBcImdldFVzZXJBZ2VudE1pZGRsZXdhcmVcIixcbiAgc3RlcDogXCJidWlsZFwiLFxuICBwcmlvcml0eTogXCJsb3dcIixcbiAgdGFnczogW1wiU0VUX1VTRVJfQUdFTlRcIiwgXCJVU0VSX0FHRU5UXCJdLFxuICBvdmVycmlkZTogdHJ1ZSxcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyQWdlbnRQbHVnaW4gPSAoY29uZmlnOiBVc2VyQWdlbnRSZXNvbHZlZENvbmZpZyk6IFBsdWdnYWJsZTxhbnksIGFueT4gPT4gKHtcbiAgYXBwbHlUb1N0YWNrOiAoY2xpZW50U3RhY2spID0+IHtcbiAgICBjbGllbnRTdGFjay5hZGQodXNlckFnZW50TWlkZGxld2FyZShjb25maWcpLCBnZXRVc2VyQWdlbnRNaWRkbGV3YXJlT3B0aW9ucyk7XG4gIH0sXG59KTtcbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-sdk/protocol-http/dist/es/httpHandler.js":
/*!*****************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/protocol-http/dist/es/httpHandler.js ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cEhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaHR0cEhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBIYW5kbGVyT3B0aW9ucywgUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcblxuaW1wb3J0IHsgSHR0cFJlcXVlc3QgfSBmcm9tIFwiLi9odHRwUmVxdWVzdFwiO1xuaW1wb3J0IHsgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIi4vaHR0cFJlc3BvbnNlXCI7XG5cbmV4cG9ydCB0eXBlIEh0dHBIYW5kbGVyID0gUmVxdWVzdEhhbmRsZXI8SHR0cFJlcXVlc3QsIEh0dHBSZXNwb25zZSwgSHR0cEhhbmRsZXJPcHRpb25zPjtcbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-sdk/protocol-http/dist/es/httpRequest.js":
/*!*****************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/protocol-http/dist/es/httpRequest.js ***!
  \*****************************************************************************************************/
/*! exports provided: HttpRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequest", function() { return HttpRequest; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

var HttpRequest = /** @class */ (function () {
    function HttpRequest(options) {
        this.method = options.method || "GET";
        this.hostname = options.hostname || "localhost";
        this.port = options.port;
        this.query = options.query || {};
        this.headers = options.headers || {};
        this.body = options.body;
        this.protocol = options.protocol
            ? options.protocol.substr(-1) !== ":"
                ? options.protocol + ":"
                : options.protocol
            : "https:";
        this.path = options.path ? (options.path.charAt(0) !== "/" ? "/" + options.path : options.path) : "/";
    }
    HttpRequest.isInstance = function (request) {
        //determine if request is a valid httpRequest
        if (!request)
            return false;
        var req = request;
        return ("method" in req &&
            "protocol" in req &&
            "hostname" in req &&
            "path" in req &&
            typeof req["query"] === "object" &&
            typeof req["headers"] === "object");
    };
    HttpRequest.prototype.clone = function () {
        var cloned = new HttpRequest(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this), { headers: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.headers) }));
        if (cloned.query)
            cloned.query = cloneQuery(cloned.query);
        return cloned;
    };
    return HttpRequest;
}());

function cloneQuery(query) {
    return Object.keys(query).reduce(function (carry, paramName) {
        var _a;
        var param = query[paramName];
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, carry), (_a = {}, _a[paramName] = Array.isArray(param) ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(param) : param, _a));
    }, {});
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cFJlcXVlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaHR0cFJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQU1BO0lBVUUscUJBQVksT0FBMkI7UUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQztRQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLElBQUksV0FBVyxDQUFDO1FBQ2hELElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVE7WUFDOUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRztnQkFDbkMsQ0FBQyxDQUFJLE9BQU8sQ0FBQyxRQUFRLE1BQUc7Z0JBQ3hCLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUTtZQUNwQixDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBSSxPQUFPLENBQUMsSUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUN4RyxDQUFDO0lBRU0sc0JBQVUsR0FBakIsVUFBa0IsT0FBZ0I7UUFDaEMsNkNBQTZDO1FBQzdDLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDM0IsSUFBTSxHQUFHLEdBQVEsT0FBTyxDQUFDO1FBQ3pCLE9BQU8sQ0FDTCxRQUFRLElBQUksR0FBRztZQUNmLFVBQVUsSUFBSSxHQUFHO1lBQ2pCLFVBQVUsSUFBSSxHQUFHO1lBQ2pCLE1BQU0sSUFBSSxHQUFHO1lBQ2IsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssUUFBUTtZQUNoQyxPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxRQUFRLENBQ25DLENBQUM7SUFDSixDQUFDO0lBRUQsMkJBQUssR0FBTDtRQUNFLElBQU0sTUFBTSxHQUFHLElBQUksV0FBVyx1QkFDekIsSUFBSSxLQUNQLE9BQU8sZUFBTyxJQUFJLENBQUMsT0FBTyxLQUMxQixDQUFDO1FBQ0gsSUFBSSxNQUFNLENBQUMsS0FBSztZQUFFLE1BQU0sQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBL0NELElBK0NDOztBQUVELFNBQVMsVUFBVSxDQUFDLEtBQXdCO0lBQzFDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxLQUF3QixFQUFFLFNBQWlCOztRQUMzRSxJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0IsNkJBQ0ssS0FBSyxnQkFDUCxTQUFTLElBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFVBQUssS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLE9BQ3REO0lBQ0osQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ1QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVuZHBvaW50LCBIZWFkZXJCYWcsIEh0dHBNZXNzYWdlLCBIdHRwUmVxdWVzdCBhcyBJSHR0cFJlcXVlc3QsIFF1ZXJ5UGFyYW1ldGVyQmFnIH0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5cbnR5cGUgSHR0cFJlcXVlc3RPcHRpb25zID0gUGFydGlhbDxIdHRwTWVzc2FnZT4gJiBQYXJ0aWFsPEVuZHBvaW50PiAmIHsgbWV0aG9kPzogc3RyaW5nIH07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSHR0cFJlcXVlc3QgZXh0ZW5kcyBJSHR0cFJlcXVlc3Qge31cblxuZXhwb3J0IGNsYXNzIEh0dHBSZXF1ZXN0IGltcGxlbWVudHMgSHR0cE1lc3NhZ2UsIEVuZHBvaW50IHtcbiAgcHVibGljIG1ldGhvZDogc3RyaW5nO1xuICBwdWJsaWMgcHJvdG9jb2w6IHN0cmluZztcbiAgcHVibGljIGhvc3RuYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyBwb3J0PzogbnVtYmVyO1xuICBwdWJsaWMgcGF0aDogc3RyaW5nO1xuICBwdWJsaWMgcXVlcnk6IFF1ZXJ5UGFyYW1ldGVyQmFnO1xuICBwdWJsaWMgaGVhZGVyczogSGVhZGVyQmFnO1xuICBwdWJsaWMgYm9keT86IGFueTtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBIdHRwUmVxdWVzdE9wdGlvbnMpIHtcbiAgICB0aGlzLm1ldGhvZCA9IG9wdGlvbnMubWV0aG9kIHx8IFwiR0VUXCI7XG4gICAgdGhpcy5ob3N0bmFtZSA9IG9wdGlvbnMuaG9zdG5hbWUgfHwgXCJsb2NhbGhvc3RcIjtcbiAgICB0aGlzLnBvcnQgPSBvcHRpb25zLnBvcnQ7XG4gICAgdGhpcy5xdWVyeSA9IG9wdGlvbnMucXVlcnkgfHwge307XG4gICAgdGhpcy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzIHx8IHt9O1xuICAgIHRoaXMuYm9keSA9IG9wdGlvbnMuYm9keTtcbiAgICB0aGlzLnByb3RvY29sID0gb3B0aW9ucy5wcm90b2NvbFxuICAgICAgPyBvcHRpb25zLnByb3RvY29sLnN1YnN0cigtMSkgIT09IFwiOlwiXG4gICAgICAgID8gYCR7b3B0aW9ucy5wcm90b2NvbH06YFxuICAgICAgICA6IG9wdGlvbnMucHJvdG9jb2xcbiAgICAgIDogXCJodHRwczpcIjtcbiAgICB0aGlzLnBhdGggPSBvcHRpb25zLnBhdGggPyAob3B0aW9ucy5wYXRoLmNoYXJBdCgwKSAhPT0gXCIvXCIgPyBgLyR7b3B0aW9ucy5wYXRofWAgOiBvcHRpb25zLnBhdGgpIDogXCIvXCI7XG4gIH1cblxuICBzdGF0aWMgaXNJbnN0YW5jZShyZXF1ZXN0OiB1bmtub3duKTogcmVxdWVzdCBpcyBIdHRwUmVxdWVzdCB7XG4gICAgLy9kZXRlcm1pbmUgaWYgcmVxdWVzdCBpcyBhIHZhbGlkIGh0dHBSZXF1ZXN0XG4gICAgaWYgKCFyZXF1ZXN0KSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgcmVxOiBhbnkgPSByZXF1ZXN0O1xuICAgIHJldHVybiAoXG4gICAgICBcIm1ldGhvZFwiIGluIHJlcSAmJlxuICAgICAgXCJwcm90b2NvbFwiIGluIHJlcSAmJlxuICAgICAgXCJob3N0bmFtZVwiIGluIHJlcSAmJlxuICAgICAgXCJwYXRoXCIgaW4gcmVxICYmXG4gICAgICB0eXBlb2YgcmVxW1wicXVlcnlcIl0gPT09IFwib2JqZWN0XCIgJiZcbiAgICAgIHR5cGVvZiByZXFbXCJoZWFkZXJzXCJdID09PSBcIm9iamVjdFwiXG4gICAgKTtcbiAgfVxuXG4gIGNsb25lKCk6IEh0dHBSZXF1ZXN0IHtcbiAgICBjb25zdCBjbG9uZWQgPSBuZXcgSHR0cFJlcXVlc3Qoe1xuICAgICAgLi4udGhpcyxcbiAgICAgIGhlYWRlcnM6IHsgLi4udGhpcy5oZWFkZXJzIH0sXG4gICAgfSk7XG4gICAgaWYgKGNsb25lZC5xdWVyeSkgY2xvbmVkLnF1ZXJ5ID0gY2xvbmVRdWVyeShjbG9uZWQucXVlcnkpO1xuICAgIHJldHVybiBjbG9uZWQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xvbmVRdWVyeShxdWVyeTogUXVlcnlQYXJhbWV0ZXJCYWcpOiBRdWVyeVBhcmFtZXRlckJhZyB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhxdWVyeSkucmVkdWNlKChjYXJyeTogUXVlcnlQYXJhbWV0ZXJCYWcsIHBhcmFtTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcGFyYW0gPSBxdWVyeVtwYXJhbU5hbWVdO1xuICAgIHJldHVybiB7XG4gICAgICAuLi5jYXJyeSxcbiAgICAgIFtwYXJhbU5hbWVdOiBBcnJheS5pc0FycmF5KHBhcmFtKSA/IFsuLi5wYXJhbV0gOiBwYXJhbSxcbiAgICB9O1xuICB9LCB7fSk7XG59XG4iXX0=

/***/ }),

/***/ "../../node_modules/@aws-sdk/protocol-http/dist/es/httpResponse.js":
/*!******************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/protocol-http/dist/es/httpResponse.js ***!
  \******************************************************************************************************/
/*! exports provided: HttpResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponse", function() { return HttpResponse; });
var HttpResponse = /** @class */ (function () {
    function HttpResponse(options) {
        this.statusCode = options.statusCode;
        this.headers = options.headers || {};
        this.body = options.body;
    }
    HttpResponse.isInstance = function (response) {
        //determine if response is a valid HttpResponse
        if (!response)
            return false;
        var resp = response;
        return typeof resp.statusCode === "number" && typeof resp.headers === "object";
    };
    return HttpResponse;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cFJlc3BvbnNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2h0dHBSZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtJQUtFLHNCQUFZLE9BQTRCO1FBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRU0sdUJBQVUsR0FBakIsVUFBa0IsUUFBaUI7UUFDakMsK0NBQStDO1FBQy9DLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDNUIsSUFBTSxJQUFJLEdBQUcsUUFBZSxDQUFDO1FBQzdCLE9BQU8sT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLFFBQVEsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssUUFBUSxDQUFDO0lBQ2pGLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFqQkQsSUFpQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWFkZXJCYWcsIEh0dHBNZXNzYWdlLCBIdHRwUmVzcG9uc2UgYXMgSUh0dHBSZXNwb25zZSB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuXG50eXBlIEh0dHBSZXNwb25zZU9wdGlvbnMgPSBQYXJ0aWFsPEh0dHBNZXNzYWdlPiAmIHtcbiAgc3RhdHVzQ29kZTogbnVtYmVyO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBIdHRwUmVzcG9uc2UgZXh0ZW5kcyBJSHR0cFJlc3BvbnNlIHt9XG5cbmV4cG9ydCBjbGFzcyBIdHRwUmVzcG9uc2Uge1xuICBwdWJsaWMgc3RhdHVzQ29kZTogbnVtYmVyO1xuICBwdWJsaWMgaGVhZGVyczogSGVhZGVyQmFnO1xuICBwdWJsaWMgYm9keT86IGFueTtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBIdHRwUmVzcG9uc2VPcHRpb25zKSB7XG4gICAgdGhpcy5zdGF0dXNDb2RlID0gb3B0aW9ucy5zdGF0dXNDb2RlO1xuICAgIHRoaXMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyB8fCB7fTtcbiAgICB0aGlzLmJvZHkgPSBvcHRpb25zLmJvZHk7XG4gIH1cblxuICBzdGF0aWMgaXNJbnN0YW5jZShyZXNwb25zZTogdW5rbm93bik6IHJlc3BvbnNlIGlzIEh0dHBSZXNwb25zZSB7XG4gICAgLy9kZXRlcm1pbmUgaWYgcmVzcG9uc2UgaXMgYSB2YWxpZCBIdHRwUmVzcG9uc2VcbiAgICBpZiAoIXJlc3BvbnNlKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgcmVzcCA9IHJlc3BvbnNlIGFzIGFueTtcbiAgICByZXR1cm4gdHlwZW9mIHJlc3Auc3RhdHVzQ29kZSA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgcmVzcC5oZWFkZXJzID09PSBcIm9iamVjdFwiO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "../../node_modules/@aws-sdk/protocol-http/dist/es/index.js":
/*!***********************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/protocol-http/dist/es/index.js ***!
  \***********************************************************************************************/
/*! exports provided: HttpResponse, HttpRequest, isValidHostname */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _httpResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpResponse */ "../../node_modules/@aws-sdk/protocol-http/dist/es/httpResponse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpResponse", function() { return _httpResponse__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]; });

/* harmony import */ var _httpRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./httpRequest */ "../../node_modules/@aws-sdk/protocol-http/dist/es/httpRequest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpRequest", function() { return _httpRequest__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]; });

/* harmony import */ var _httpHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./httpHandler */ "../../node_modules/@aws-sdk/protocol-http/dist/es/httpHandler.js");
/* empty/unused harmony star reexport *//* harmony import */ var _isValidHostname__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isValidHostname */ "../../node_modules/@aws-sdk/protocol-http/dist/es/isValidHostname.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidHostname", function() { return _isValidHostname__WEBPACK_IMPORTED_MODULE_3__["isValidHostname"]; });





//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxnQkFBZ0IsQ0FBQztBQUMvQixjQUFjLGVBQWUsQ0FBQztBQUM5QixjQUFjLGVBQWUsQ0FBQztBQUM5QixjQUFjLG1CQUFtQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vaHR0cFJlc3BvbnNlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9odHRwUmVxdWVzdFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vaHR0cEhhbmRsZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2lzVmFsaWRIb3N0bmFtZVwiO1xuIl19

/***/ }),

/***/ "../../node_modules/@aws-sdk/protocol-http/dist/es/isValidHostname.js":
/*!*********************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/protocol-http/dist/es/isValidHostname.js ***!
  \*********************************************************************************************************/
/*! exports provided: isValidHostname */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidHostname", function() { return isValidHostname; });
function isValidHostname(hostname) {
    var hostPattern = /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/;
    return hostPattern.test(hostname);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNWYWxpZEhvc3RuYW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2lzVmFsaWRIb3N0bmFtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFVBQVUsZUFBZSxDQUFDLFFBQWdCO0lBQzlDLElBQU0sV0FBVyxHQUFHLGlDQUFpQyxDQUFDO0lBQ3RELE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNwQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRIb3N0bmFtZShob3N0bmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IGhvc3RQYXR0ZXJuID0gL15bYS16MC05XVthLXowLTlcXC5cXC1dKlthLXowLTldJC87XG4gIHJldHVybiBob3N0UGF0dGVybi50ZXN0KGhvc3RuYW1lKTtcbn1cbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-sdk/service-error-classification/dist/es/constants.js":
/*!******************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/service-error-classification/dist/es/constants.js ***!
  \******************************************************************************************************************/
/*! exports provided: CLOCK_SKEW_ERROR_CODES, THROTTLING_ERROR_CODES, TRANSIENT_ERROR_CODES, TRANSIENT_ERROR_STATUS_CODES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOCK_SKEW_ERROR_CODES", function() { return CLOCK_SKEW_ERROR_CODES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THROTTLING_ERROR_CODES", function() { return THROTTLING_ERROR_CODES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSIENT_ERROR_CODES", function() { return TRANSIENT_ERROR_CODES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSIENT_ERROR_STATUS_CODES", function() { return TRANSIENT_ERROR_STATUS_CODES; });
/**
 * Errors encountered when the client clock and server clock cannot agree on the
 * current time.
 *
 * These errors are retryable, assuming the SDK has enabled clock skew
 * correction.
 */
var CLOCK_SKEW_ERROR_CODES = [
    "AuthFailure",
    "InvalidSignatureException",
    "RequestExpired",
    "RequestInTheFuture",
    "RequestTimeTooSkewed",
    "SignatureDoesNotMatch",
];
/**
 * Errors that indicate the SDK is being throttled.
 *
 * These errors are always retryable.
 */
var THROTTLING_ERROR_CODES = [
    "BandwidthLimitExceeded",
    "EC2ThrottledException",
    "LimitExceededException",
    "PriorRequestNotComplete",
    "ProvisionedThroughputExceededException",
    "RequestLimitExceeded",
    "RequestThrottled",
    "RequestThrottledException",
    "SlowDown",
    "ThrottledException",
    "Throttling",
    "ThrottlingException",
    "TooManyRequestsException",
    "TransactionInProgressException",
];
/**
 * Error codes that indicate transient issues
 */
var TRANSIENT_ERROR_CODES = ["AbortError", "TimeoutError", "RequestTimeout", "RequestTimeoutException"];
/**
 * Error codes that indicate transient issues
 */
var TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxNQUFNLENBQUMsSUFBTSxzQkFBc0IsR0FBRztJQUNwQyxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtDQUN4QixDQUFDO0FBRUY7Ozs7R0FJRztBQUNILE1BQU0sQ0FBQyxJQUFNLHNCQUFzQixHQUFHO0lBQ3BDLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6Qix3Q0FBd0M7SUFDeEMsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQixnQ0FBZ0M7Q0FDakMsQ0FBQztBQUVGOztHQUVHO0FBQ0gsTUFBTSxDQUFDLElBQU0scUJBQXFCLEdBQUcsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFLHlCQUF5QixDQUFDLENBQUM7QUFFakg7O0dBRUc7QUFDSCxNQUFNLENBQUMsSUFBTSw0QkFBNEIsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBFcnJvcnMgZW5jb3VudGVyZWQgd2hlbiB0aGUgY2xpZW50IGNsb2NrIGFuZCBzZXJ2ZXIgY2xvY2sgY2Fubm90IGFncmVlIG9uIHRoZVxuICogY3VycmVudCB0aW1lLlxuICpcbiAqIFRoZXNlIGVycm9ycyBhcmUgcmV0cnlhYmxlLCBhc3N1bWluZyB0aGUgU0RLIGhhcyBlbmFibGVkIGNsb2NrIHNrZXdcbiAqIGNvcnJlY3Rpb24uXG4gKi9cbmV4cG9ydCBjb25zdCBDTE9DS19TS0VXX0VSUk9SX0NPREVTID0gW1xuICBcIkF1dGhGYWlsdXJlXCIsXG4gIFwiSW52YWxpZFNpZ25hdHVyZUV4Y2VwdGlvblwiLFxuICBcIlJlcXVlc3RFeHBpcmVkXCIsXG4gIFwiUmVxdWVzdEluVGhlRnV0dXJlXCIsXG4gIFwiUmVxdWVzdFRpbWVUb29Ta2V3ZWRcIixcbiAgXCJTaWduYXR1cmVEb2VzTm90TWF0Y2hcIixcbl07XG5cbi8qKlxuICogRXJyb3JzIHRoYXQgaW5kaWNhdGUgdGhlIFNESyBpcyBiZWluZyB0aHJvdHRsZWQuXG4gKlxuICogVGhlc2UgZXJyb3JzIGFyZSBhbHdheXMgcmV0cnlhYmxlLlxuICovXG5leHBvcnQgY29uc3QgVEhST1RUTElOR19FUlJPUl9DT0RFUyA9IFtcbiAgXCJCYW5kd2lkdGhMaW1pdEV4Y2VlZGVkXCIsXG4gIFwiRUMyVGhyb3R0bGVkRXhjZXB0aW9uXCIsXG4gIFwiTGltaXRFeGNlZWRlZEV4Y2VwdGlvblwiLFxuICBcIlByaW9yUmVxdWVzdE5vdENvbXBsZXRlXCIsXG4gIFwiUHJvdmlzaW9uZWRUaHJvdWdocHV0RXhjZWVkZWRFeGNlcHRpb25cIixcbiAgXCJSZXF1ZXN0TGltaXRFeGNlZWRlZFwiLFxuICBcIlJlcXVlc3RUaHJvdHRsZWRcIixcbiAgXCJSZXF1ZXN0VGhyb3R0bGVkRXhjZXB0aW9uXCIsXG4gIFwiU2xvd0Rvd25cIixcbiAgXCJUaHJvdHRsZWRFeGNlcHRpb25cIixcbiAgXCJUaHJvdHRsaW5nXCIsXG4gIFwiVGhyb3R0bGluZ0V4Y2VwdGlvblwiLFxuICBcIlRvb01hbnlSZXF1ZXN0c0V4Y2VwdGlvblwiLFxuICBcIlRyYW5zYWN0aW9uSW5Qcm9ncmVzc0V4Y2VwdGlvblwiLCAvLyBEeW5hbW9EQlxuXTtcblxuLyoqXG4gKiBFcnJvciBjb2RlcyB0aGF0IGluZGljYXRlIHRyYW5zaWVudCBpc3N1ZXNcbiAqL1xuZXhwb3J0IGNvbnN0IFRSQU5TSUVOVF9FUlJPUl9DT0RFUyA9IFtcIkFib3J0RXJyb3JcIiwgXCJUaW1lb3V0RXJyb3JcIiwgXCJSZXF1ZXN0VGltZW91dFwiLCBcIlJlcXVlc3RUaW1lb3V0RXhjZXB0aW9uXCJdO1xuXG4vKipcbiAqIEVycm9yIGNvZGVzIHRoYXQgaW5kaWNhdGUgdHJhbnNpZW50IGlzc3Vlc1xuICovXG5leHBvcnQgY29uc3QgVFJBTlNJRU5UX0VSUk9SX1NUQVRVU19DT0RFUyA9IFs1MDAsIDUwMiwgNTAzLCA1MDRdO1xuIl19

/***/ }),

/***/ "../../node_modules/@aws-sdk/service-error-classification/dist/es/index.js":
/*!**************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/service-error-classification/dist/es/index.js ***!
  \**************************************************************************************************************/
/*! exports provided: isRetryableByTrait, isClockSkewError, isThrottlingError, isTransientError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRetryableByTrait", function() { return isRetryableByTrait; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClockSkewError", function() { return isClockSkewError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isThrottlingError", function() { return isThrottlingError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTransientError", function() { return isTransientError; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "../../node_modules/@aws-sdk/service-error-classification/dist/es/constants.js");

var isRetryableByTrait = function (error) { return error.$retryable !== undefined; };
var isClockSkewError = function (error) { return _constants__WEBPACK_IMPORTED_MODULE_0__["CLOCK_SKEW_ERROR_CODES"].includes(error.name); };
var isThrottlingError = function (error) {
    var _a, _b;
    return ((_a = error.$metadata) === null || _a === void 0 ? void 0 : _a.httpStatusCode) === 429 ||
        _constants__WEBPACK_IMPORTED_MODULE_0__["THROTTLING_ERROR_CODES"].includes(error.name) ||
        ((_b = error.$retryable) === null || _b === void 0 ? void 0 : _b.throttling) == true;
};
var isTransientError = function (error) {
    var _a;
    return _constants__WEBPACK_IMPORTED_MODULE_0__["TRANSIENT_ERROR_CODES"].includes(error.name) ||
        _constants__WEBPACK_IMPORTED_MODULE_0__["TRANSIENT_ERROR_STATUS_CODES"].includes(((_a = error.$metadata) === null || _a === void 0 ? void 0 : _a.httpStatusCode) || 0);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUNMLHNCQUFzQixFQUN0QixzQkFBc0IsRUFDdEIscUJBQXFCLEVBQ3JCLDRCQUE0QixHQUM3QixNQUFNLGFBQWEsQ0FBQztBQUVyQixNQUFNLENBQUMsSUFBTSxrQkFBa0IsR0FBRyxVQUFDLEtBQWUsSUFBSyxPQUFBLEtBQUssQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUE5QixDQUE4QixDQUFDO0FBRXRGLE1BQU0sQ0FBQyxJQUFNLGdCQUFnQixHQUFHLFVBQUMsS0FBZSxJQUFLLE9BQUEsc0JBQXNCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBM0MsQ0FBMkMsQ0FBQztBQUVqRyxNQUFNLENBQUMsSUFBTSxpQkFBaUIsR0FBRyxVQUFDLEtBQWU7O0lBQy9DLE9BQUEsT0FBQSxLQUFLLENBQUMsU0FBUywwQ0FBRSxjQUFjLE1BQUssR0FBRztRQUN2QyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUMzQyxPQUFBLEtBQUssQ0FBQyxVQUFVLDBDQUFFLFVBQVUsS0FBSSxJQUFJLENBQUE7Q0FBQSxDQUFDO0FBRXZDLE1BQU0sQ0FBQyxJQUFNLGdCQUFnQixHQUFHLFVBQUMsS0FBZTs7SUFDOUMsT0FBQSxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUMxQyw0QkFBNEIsQ0FBQyxRQUFRLENBQUMsT0FBQSxLQUFLLENBQUMsU0FBUywwQ0FBRSxjQUFjLEtBQUksQ0FBQyxDQUFDLENBQUE7Q0FBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2RrRXJyb3IgfSBmcm9tIFwiQGF3cy1zZGsvc21pdGh5LWNsaWVudFwiO1xuXG5pbXBvcnQge1xuICBDTE9DS19TS0VXX0VSUk9SX0NPREVTLFxuICBUSFJPVFRMSU5HX0VSUk9SX0NPREVTLFxuICBUUkFOU0lFTlRfRVJST1JfQ09ERVMsXG4gIFRSQU5TSUVOVF9FUlJPUl9TVEFUVVNfQ09ERVMsXG59IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgY29uc3QgaXNSZXRyeWFibGVCeVRyYWl0ID0gKGVycm9yOiBTZGtFcnJvcikgPT4gZXJyb3IuJHJldHJ5YWJsZSAhPT0gdW5kZWZpbmVkO1xuXG5leHBvcnQgY29uc3QgaXNDbG9ja1NrZXdFcnJvciA9IChlcnJvcjogU2RrRXJyb3IpID0+IENMT0NLX1NLRVdfRVJST1JfQ09ERVMuaW5jbHVkZXMoZXJyb3IubmFtZSk7XG5cbmV4cG9ydCBjb25zdCBpc1Rocm90dGxpbmdFcnJvciA9IChlcnJvcjogU2RrRXJyb3IpID0+XG4gIGVycm9yLiRtZXRhZGF0YT8uaHR0cFN0YXR1c0NvZGUgPT09IDQyOSB8fFxuICBUSFJPVFRMSU5HX0VSUk9SX0NPREVTLmluY2x1ZGVzKGVycm9yLm5hbWUpIHx8XG4gIGVycm9yLiRyZXRyeWFibGU/LnRocm90dGxpbmcgPT0gdHJ1ZTtcblxuZXhwb3J0IGNvbnN0IGlzVHJhbnNpZW50RXJyb3IgPSAoZXJyb3I6IFNka0Vycm9yKSA9PlxuICBUUkFOU0lFTlRfRVJST1JfQ09ERVMuaW5jbHVkZXMoZXJyb3IubmFtZSkgfHxcbiAgVFJBTlNJRU5UX0VSUk9SX1NUQVRVU19DT0RFUy5pbmNsdWRlcyhlcnJvci4kbWV0YWRhdGE/Lmh0dHBTdGF0dXNDb2RlIHx8IDApO1xuIl19

/***/ }),

/***/ "../../node_modules/@aws-sdk/smithy-client/dist/es/client.js":
/*!************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/smithy-client/dist/es/client.js ***!
  \************************************************************************************************/
/*! exports provided: Client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return Client; });
/* harmony import */ var _aws_sdk_middleware_stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/middleware-stack */ "../../node_modules/@aws-sdk/middleware-stack/dist/es/index.js");

var Client = /** @class */ (function () {
    function Client(config) {
        this.middlewareStack = Object(_aws_sdk_middleware_stack__WEBPACK_IMPORTED_MODULE_0__["constructStack"])();
        this.config = config;
    }
    Client.prototype.send = function (command, optionsOrCb, cb) {
        var options = typeof optionsOrCb !== "function" ? optionsOrCb : undefined;
        var callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
        var handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
        if (callback) {
            handler(command)
                .then(function (result) { return callback(null, result.output); }, function (err) { return callback(err); })
                .catch(
            // prevent any errors thrown in the callback from triggering an
            // unhandled promise rejection
            function () { });
        }
        else {
            return handler(command).then(function (result) { return result.output; });
        }
    };
    Client.prototype.destroy = function () {
        if (this.config.requestHandler.destroy)
            this.config.requestHandler.destroy();
    };
    return Client;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFlM0Q7SUFRRSxnQkFBWSxNQUFtQztRQUZ4QyxvQkFBZSxHQUFHLGNBQWMsRUFBNkIsQ0FBQztRQUduRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBY0QscUJBQUksR0FBSixVQUNFLE9BQStHLEVBQy9HLFdBQXNFLEVBQ3RFLEVBQTBDO1FBRTFDLElBQU0sT0FBTyxHQUFHLE9BQU8sV0FBVyxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDNUUsSUFBTSxRQUFRLEdBQUcsT0FBTyxXQUFXLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBRSxXQUFxRCxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDakgsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxlQUFzQixFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDN0YsSUFBSSxRQUFRLEVBQUU7WUFDWixPQUFPLENBQUMsT0FBTyxDQUFDO2lCQUNiLElBQUksQ0FDSCxVQUFDLE1BQU0sSUFBSyxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUE3QixDQUE2QixFQUN6QyxVQUFDLEdBQVEsSUFBSyxPQUFBLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBYixDQUFhLENBQzVCO2lCQUNBLEtBQUs7WUFDSiwrREFBK0Q7WUFDL0QsOEJBQThCO1lBQzlCLGNBQU8sQ0FBQyxDQUNULENBQUM7U0FDTDthQUFNO1lBQ0wsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTSxJQUFLLE9BQUEsTUFBTSxDQUFDLE1BQU0sRUFBYixDQUFhLENBQUMsQ0FBQztTQUN6RDtJQUNILENBQUM7SUFFRCx3QkFBTyxHQUFQO1FBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDL0UsQ0FBQztJQUNILGFBQUM7QUFBRCxDQUFDLEFBbkRELElBbURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uc3RydWN0U3RhY2sgfSBmcm9tIFwiQGF3cy1zZGsvbWlkZGxld2FyZS1zdGFja1wiO1xuaW1wb3J0IHsgQ2xpZW50IGFzIElDbGllbnQsIENvbW1hbmQsIE1ldGFkYXRhQmVhcmVyLCBSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNtaXRoeUNvbmZpZ3VyYXRpb248SGFuZGxlck9wdGlvbnM+IHtcbiAgcmVxdWVzdEhhbmRsZXI6IFJlcXVlc3RIYW5kbGVyPGFueSwgYW55LCBIYW5kbGVyT3B0aW9ucz47XG4gIC8qKlxuICAgKiBUaGUgQVBJIHZlcnNpb24gc2V0IGludGVybmFsbHkgYnkgdGhlIFNESywgYW5kIGlzXG4gICAqIG5vdCBwbGFubmVkIHRvIGJlIHVzZWQgYnkgY3VzdG9tZXIgY29kZS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICByZWFkb25seSBhcGlWZXJzaW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIFNtaXRoeVJlc29sdmVkQ29uZmlndXJhdGlvbjxIYW5kbGVyT3B0aW9ucz4gPSBTbWl0aHlDb25maWd1cmF0aW9uPEhhbmRsZXJPcHRpb25zPjtcblxuZXhwb3J0IGNsYXNzIENsaWVudDxcbiAgSGFuZGxlck9wdGlvbnMsXG4gIENsaWVudElucHV0IGV4dGVuZHMgb2JqZWN0LFxuICBDbGllbnRPdXRwdXQgZXh0ZW5kcyBNZXRhZGF0YUJlYXJlcixcbiAgUmVzb2x2ZWRDbGllbnRDb25maWd1cmF0aW9uIGV4dGVuZHMgU21pdGh5UmVzb2x2ZWRDb25maWd1cmF0aW9uPEhhbmRsZXJPcHRpb25zPlxuPiBpbXBsZW1lbnRzIElDbGllbnQ8Q2xpZW50SW5wdXQsIENsaWVudE91dHB1dCwgUmVzb2x2ZWRDbGllbnRDb25maWd1cmF0aW9uPiB7XG4gIHB1YmxpYyBtaWRkbGV3YXJlU3RhY2sgPSBjb25zdHJ1Y3RTdGFjazxDbGllbnRJbnB1dCwgQ2xpZW50T3V0cHV0PigpO1xuICByZWFkb25seSBjb25maWc6IFJlc29sdmVkQ2xpZW50Q29uZmlndXJhdGlvbjtcbiAgY29uc3RydWN0b3IoY29uZmlnOiBSZXNvbHZlZENsaWVudENvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgfVxuICBzZW5kPElucHV0VHlwZSBleHRlbmRzIENsaWVudElucHV0LCBPdXRwdXRUeXBlIGV4dGVuZHMgQ2xpZW50T3V0cHV0PihcbiAgICBjb21tYW5kOiBDb21tYW5kPENsaWVudElucHV0LCBJbnB1dFR5cGUsIENsaWVudE91dHB1dCwgT3V0cHV0VHlwZSwgU21pdGh5UmVzb2x2ZWRDb25maWd1cmF0aW9uPEhhbmRsZXJPcHRpb25zPj4sXG4gICAgb3B0aW9ucz86IEhhbmRsZXJPcHRpb25zXG4gICk6IFByb21pc2U8T3V0cHV0VHlwZT47XG4gIHNlbmQ8SW5wdXRUeXBlIGV4dGVuZHMgQ2xpZW50SW5wdXQsIE91dHB1dFR5cGUgZXh0ZW5kcyBDbGllbnRPdXRwdXQ+KFxuICAgIGNvbW1hbmQ6IENvbW1hbmQ8Q2xpZW50SW5wdXQsIElucHV0VHlwZSwgQ2xpZW50T3V0cHV0LCBPdXRwdXRUeXBlLCBTbWl0aHlSZXNvbHZlZENvbmZpZ3VyYXRpb248SGFuZGxlck9wdGlvbnM+PixcbiAgICBjYjogKGVycjogYW55LCBkYXRhPzogT3V0cHV0VHlwZSkgPT4gdm9pZFxuICApOiB2b2lkO1xuICBzZW5kPElucHV0VHlwZSBleHRlbmRzIENsaWVudElucHV0LCBPdXRwdXRUeXBlIGV4dGVuZHMgQ2xpZW50T3V0cHV0PihcbiAgICBjb21tYW5kOiBDb21tYW5kPENsaWVudElucHV0LCBJbnB1dFR5cGUsIENsaWVudE91dHB1dCwgT3V0cHV0VHlwZSwgU21pdGh5UmVzb2x2ZWRDb25maWd1cmF0aW9uPEhhbmRsZXJPcHRpb25zPj4sXG4gICAgb3B0aW9uczogSGFuZGxlck9wdGlvbnMsXG4gICAgY2I6IChlcnI6IGFueSwgZGF0YT86IE91dHB1dFR5cGUpID0+IHZvaWRcbiAgKTogdm9pZDtcbiAgc2VuZDxJbnB1dFR5cGUgZXh0ZW5kcyBDbGllbnRJbnB1dCwgT3V0cHV0VHlwZSBleHRlbmRzIENsaWVudE91dHB1dD4oXG4gICAgY29tbWFuZDogQ29tbWFuZDxDbGllbnRJbnB1dCwgSW5wdXRUeXBlLCBDbGllbnRPdXRwdXQsIE91dHB1dFR5cGUsIFNtaXRoeVJlc29sdmVkQ29uZmlndXJhdGlvbjxIYW5kbGVyT3B0aW9ucz4+LFxuICAgIG9wdGlvbnNPckNiPzogSGFuZGxlck9wdGlvbnMgfCAoKGVycjogYW55LCBkYXRhPzogT3V0cHV0VHlwZSkgPT4gdm9pZCksXG4gICAgY2I/OiAoZXJyOiBhbnksIGRhdGE/OiBPdXRwdXRUeXBlKSA9PiB2b2lkXG4gICk6IFByb21pc2U8T3V0cHV0VHlwZT4gfCB2b2lkIHtcbiAgICBjb25zdCBvcHRpb25zID0gdHlwZW9mIG9wdGlvbnNPckNiICE9PSBcImZ1bmN0aW9uXCIgPyBvcHRpb25zT3JDYiA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBjYWxsYmFjayA9IHR5cGVvZiBvcHRpb25zT3JDYiA9PT0gXCJmdW5jdGlvblwiID8gKG9wdGlvbnNPckNiIGFzIChlcnI6IGFueSwgZGF0YT86IE91dHB1dFR5cGUpID0+IHZvaWQpIDogY2I7XG4gICAgY29uc3QgaGFuZGxlciA9IGNvbW1hbmQucmVzb2x2ZU1pZGRsZXdhcmUodGhpcy5taWRkbGV3YXJlU3RhY2sgYXMgYW55LCB0aGlzLmNvbmZpZywgb3B0aW9ucyk7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBoYW5kbGVyKGNvbW1hbmQpXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgIChyZXN1bHQpID0+IGNhbGxiYWNrKG51bGwsIHJlc3VsdC5vdXRwdXQpLFxuICAgICAgICAgIChlcnI6IGFueSkgPT4gY2FsbGJhY2soZXJyKVxuICAgICAgICApXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAvLyBwcmV2ZW50IGFueSBlcnJvcnMgdGhyb3duIGluIHRoZSBjYWxsYmFjayBmcm9tIHRyaWdnZXJpbmcgYW5cbiAgICAgICAgICAvLyB1bmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb25cbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaGFuZGxlcihjb21tYW5kKS50aGVuKChyZXN1bHQpID0+IHJlc3VsdC5vdXRwdXQpO1xuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLnJlcXVlc3RIYW5kbGVyLmRlc3Ryb3kpIHRoaXMuY29uZmlnLnJlcXVlc3RIYW5kbGVyLmRlc3Ryb3koKTtcbiAgfVxufVxuIl19

/***/ }),

/***/ "../../node_modules/@aws-sdk/smithy-client/dist/es/command.js":
/*!*************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/smithy-client/dist/es/command.js ***!
  \*************************************************************************************************/
/*! exports provided: Command */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Command", function() { return Command; });
/* harmony import */ var _aws_sdk_middleware_stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/middleware-stack */ "../../node_modules/@aws-sdk/middleware-stack/dist/es/index.js");

var Command = /** @class */ (function () {
    function Command() {
        this.middlewareStack = Object(_aws_sdk_middleware_stack__WEBPACK_IMPORTED_MODULE_0__["constructStack"])();
    }
    return Command;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUczRDtJQUFBO1FBUVcsb0JBQWUsR0FBb0MsY0FBYyxFQUFpQixDQUFDO0lBTTlGLENBQUM7SUFBRCxjQUFDO0FBQUQsQ0FBQyxBQWRELElBY0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25zdHJ1Y3RTdGFjayB9IGZyb20gXCJAYXdzLXNkay9taWRkbGV3YXJlLXN0YWNrXCI7XG5pbXBvcnQgeyBDb21tYW5kIGFzIElDb21tYW5kLCBIYW5kbGVyLCBNZXRhZGF0YUJlYXJlciwgTWlkZGxld2FyZVN0YWNrIGFzIElNaWRkbGV3YXJlU3RhY2sgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbW1hbmQ8XG4gIElucHV0IGV4dGVuZHMgQ2xpZW50SW5wdXQsXG4gIE91dHB1dCBleHRlbmRzIENsaWVudE91dHB1dCxcbiAgUmVzb2x2ZWRDbGllbnRDb25maWd1cmF0aW9uLFxuICBDbGllbnRJbnB1dCBleHRlbmRzIG9iamVjdCA9IGFueSxcbiAgQ2xpZW50T3V0cHV0IGV4dGVuZHMgTWV0YWRhdGFCZWFyZXIgPSBhbnlcbj4gaW1wbGVtZW50cyBJQ29tbWFuZDxDbGllbnRJbnB1dCwgSW5wdXQsIENsaWVudE91dHB1dCwgT3V0cHV0LCBSZXNvbHZlZENsaWVudENvbmZpZ3VyYXRpb24+IHtcbiAgYWJzdHJhY3QgaW5wdXQ6IElucHV0O1xuICByZWFkb25seSBtaWRkbGV3YXJlU3RhY2s6IElNaWRkbGV3YXJlU3RhY2s8SW5wdXQsIE91dHB1dD4gPSBjb25zdHJ1Y3RTdGFjazxJbnB1dCwgT3V0cHV0PigpO1xuICBhYnN0cmFjdCByZXNvbHZlTWlkZGxld2FyZShcbiAgICBzdGFjazogSU1pZGRsZXdhcmVTdGFjazxDbGllbnRJbnB1dCwgQ2xpZW50T3V0cHV0PixcbiAgICBjb25maWd1cmF0aW9uOiBSZXNvbHZlZENsaWVudENvbmZpZ3VyYXRpb24sXG4gICAgb3B0aW9uczogYW55XG4gICk6IEhhbmRsZXI8SW5wdXQsIE91dHB1dD47XG59XG4iXX0=

/***/ }),

/***/ "../../node_modules/@aws-sdk/smithy-client/dist/es/constants.js":
/*!***************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/smithy-client/dist/es/constants.js ***!
  \***************************************************************************************************/
/*! exports provided: SENSITIVE_STRING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SENSITIVE_STRING", function() { return SENSITIVE_STRING; });
var SENSITIVE_STRING = "***SensitiveInformation***";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsSUFBTSxnQkFBZ0IsR0FBRyw0QkFBNEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBTRU5TSVRJVkVfU1RSSU5HID0gXCIqKipTZW5zaXRpdmVJbmZvcm1hdGlvbioqKlwiO1xuIl19

/***/ }),

/***/ "../../node_modules/@aws-sdk/smithy-client/dist/es/date-utils.js":
/*!****************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/smithy-client/dist/es/date-utils.js ***!
  \****************************************************************************************************/
/*! exports provided: dateToUtcString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateToUtcString", function() { return dateToUtcString; });
/**
 * Builds a proper UTC HttpDate timestamp from a Date object
 * since not all environments will have this as the expected
 * format.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString
 * > Prior to ECMAScript 2018, the format of the return value
 * > varied according to the platform. The most common return
 * > value was an RFC-1123 formatted date stamp, which is a
 * > slightly updated version of RFC-822 date stamps.
 */
// Build indexes outside so we allocate them once.
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// prettier-ignore
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function dateToUtcString(date) {
    var year = date.getUTCFullYear();
    var month = date.getUTCMonth();
    var dayOfWeek = date.getUTCDay();
    var dayOfMonthInt = date.getUTCDate();
    var hoursInt = date.getUTCHours();
    var minutesInt = date.getUTCMinutes();
    var secondsInt = date.getUTCSeconds();
    // Build 0 prefixed strings for contents that need to be
    // two digits and where we get an integer back.
    var dayOfMonthString = dayOfMonthInt < 10 ? "0" + dayOfMonthInt : "" + dayOfMonthInt;
    var hoursString = hoursInt < 10 ? "0" + hoursInt : "" + hoursInt;
    var minutesString = minutesInt < 10 ? "0" + minutesInt : "" + minutesInt;
    var secondsString = secondsInt < 10 ? "0" + secondsInt : "" + secondsInt;
    return days[dayOfWeek] + ", " + dayOfMonthString + " " + months[month] + " " + year + " " + hoursString + ":" + minutesString + ":" + secondsString + " GMT";
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS11dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0dBVUc7QUFFSCxrREFBa0Q7QUFDbEQsSUFBTSxJQUFJLEdBQWtCLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDOUUsa0JBQWtCO0FBQ2xCLElBQU0sTUFBTSxHQUFrQixDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFFbkgsTUFBTSxVQUFVLGVBQWUsQ0FBQyxJQUFVO0lBQ3hDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNuQyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25DLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN4QyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEMsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3hDLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUV4Qyx3REFBd0Q7SUFDeEQsK0NBQStDO0lBQy9DLElBQU0sZ0JBQWdCLEdBQUcsYUFBYSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBSSxhQUFlLENBQUMsQ0FBQyxDQUFDLEtBQUcsYUFBZSxDQUFDO0lBQ3ZGLElBQU0sV0FBVyxHQUFHLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQUksUUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFHLFFBQVUsQ0FBQztJQUNuRSxJQUFNLGFBQWEsR0FBRyxVQUFVLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFJLFVBQVksQ0FBQyxDQUFDLENBQUMsS0FBRyxVQUFZLENBQUM7SUFDM0UsSUFBTSxhQUFhLEdBQUcsVUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBSSxVQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUcsVUFBWSxDQUFDO0lBRTNFLE9BQVUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFLLGdCQUFnQixTQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBSSxJQUFJLFNBQUksV0FBVyxTQUFJLGFBQWEsU0FBSSxhQUFhLFNBQU0sQ0FBQztBQUNqSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBCdWlsZHMgYSBwcm9wZXIgVVRDIEh0dHBEYXRlIHRpbWVzdGFtcCBmcm9tIGEgRGF0ZSBvYmplY3RcbiAqIHNpbmNlIG5vdCBhbGwgZW52aXJvbm1lbnRzIHdpbGwgaGF2ZSB0aGlzIGFzIHRoZSBleHBlY3RlZFxuICogZm9ybWF0LlxuICpcbiAqIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZS90b1VUQ1N0cmluZ1xuICogPiBQcmlvciB0byBFQ01BU2NyaXB0IDIwMTgsIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZVxuICogPiB2YXJpZWQgYWNjb3JkaW5nIHRvIHRoZSBwbGF0Zm9ybS4gVGhlIG1vc3QgY29tbW9uIHJldHVyblxuICogPiB2YWx1ZSB3YXMgYW4gUkZDLTExMjMgZm9ybWF0dGVkIGRhdGUgc3RhbXAsIHdoaWNoIGlzIGFcbiAqID4gc2xpZ2h0bHkgdXBkYXRlZCB2ZXJzaW9uIG9mIFJGQy04MjIgZGF0ZSBzdGFtcHMuXG4gKi9cblxuLy8gQnVpbGQgaW5kZXhlcyBvdXRzaWRlIHNvIHdlIGFsbG9jYXRlIHRoZW0gb25jZS5cbmNvbnN0IGRheXM6IEFycmF5PFN0cmluZz4gPSBbXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIl07XG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IG1vbnRoczogQXJyYXk8U3RyaW5nPiA9IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGVUb1V0Y1N0cmluZyhkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgY29uc3QgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIGNvbnN0IGRheU9mTW9udGhJbnQgPSBkYXRlLmdldFVUQ0RhdGUoKTtcbiAgY29uc3QgaG91cnNJbnQgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gIGNvbnN0IG1pbnV0ZXNJbnQgPSBkYXRlLmdldFVUQ01pbnV0ZXMoKTtcbiAgY29uc3Qgc2Vjb25kc0ludCA9IGRhdGUuZ2V0VVRDU2Vjb25kcygpO1xuXG4gIC8vIEJ1aWxkIDAgcHJlZml4ZWQgc3RyaW5ncyBmb3IgY29udGVudHMgdGhhdCBuZWVkIHRvIGJlXG4gIC8vIHR3byBkaWdpdHMgYW5kIHdoZXJlIHdlIGdldCBhbiBpbnRlZ2VyIGJhY2suXG4gIGNvbnN0IGRheU9mTW9udGhTdHJpbmcgPSBkYXlPZk1vbnRoSW50IDwgMTAgPyBgMCR7ZGF5T2ZNb250aEludH1gIDogYCR7ZGF5T2ZNb250aEludH1gO1xuICBjb25zdCBob3Vyc1N0cmluZyA9IGhvdXJzSW50IDwgMTAgPyBgMCR7aG91cnNJbnR9YCA6IGAke2hvdXJzSW50fWA7XG4gIGNvbnN0IG1pbnV0ZXNTdHJpbmcgPSBtaW51dGVzSW50IDwgMTAgPyBgMCR7bWludXRlc0ludH1gIDogYCR7bWludXRlc0ludH1gO1xuICBjb25zdCBzZWNvbmRzU3RyaW5nID0gc2Vjb25kc0ludCA8IDEwID8gYDAke3NlY29uZHNJbnR9YCA6IGAke3NlY29uZHNJbnR9YDtcblxuICByZXR1cm4gYCR7ZGF5c1tkYXlPZldlZWtdfSwgJHtkYXlPZk1vbnRoU3RyaW5nfSAke21vbnRoc1ttb250aF19ICR7eWVhcn0gJHtob3Vyc1N0cmluZ306JHttaW51dGVzU3RyaW5nfToke3NlY29uZHNTdHJpbmd9IEdNVGA7XG59XG4iXX0=

/***/ }),

/***/ "../../node_modules/@aws-sdk/smithy-client/dist/es/document-type.js":
/*!*******************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/smithy-client/dist/es/document-type.js ***!
  \*******************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQtdHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb2N1bWVudC10eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFNtaXRoeSBkb2N1bWVudCB0eXBlIHZhbHVlcy5cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1uYW1lc3BhY2VcbmV4cG9ydCBuYW1lc3BhY2UgRG9jdW1lbnRUeXBlIHtcbiAgZXhwb3J0IHR5cGUgVmFsdWUgPSBTY2FsYXIgfCBTdHJ1Y3R1cmUgfCBMaXN0O1xuICBleHBvcnQgdHlwZSBTY2FsYXIgPSBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgbnVsbDtcbiAgZXhwb3J0IHR5cGUgU3RydWN0dXJlID0geyBbbWVtYmVyOiBzdHJpbmddOiBWYWx1ZSB9O1xuICBleHBvcnQgaW50ZXJmYWNlIExpc3QgZXh0ZW5kcyBBcnJheTxWYWx1ZT4ge31cbn1cbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-sdk/smithy-client/dist/es/exception.js":
/*!***************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/smithy-client/dist/es/exception.js ***!
  \***************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2V4Y2VwdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmV0cnlhYmxlVHJhaXQgfSBmcm9tIFwiLi9yZXRyeWFibGUtdHJhaXRcIjtcblxuLyoqXG4gKiBUeXBlIHRoYXQgaXMgaW1wbGVtZW50ZWQgYnkgYWxsIFNtaXRoeSBzaGFwZXMgbWFya2VkIHdpdGggdGhlXG4gKiBlcnJvciB0cmFpdC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTbWl0aHlFeGNlcHRpb24ge1xuICAvKipcbiAgICogVGhlIHNoYXBlIElEIG5hbWUgb2YgdGhlIGV4Y2VwdGlvbi5cbiAgICovXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgY2xpZW50IG9yIHNlcnZlciBhcmUgYXQgZmF1bHQuXG4gICAqL1xuICByZWFkb25seSAkZmF1bHQ6IFwiY2xpZW50XCIgfCBcInNlcnZlclwiO1xuXG4gIC8qKlxuICAgKiBUaGUgc2VydmljZSB0aGF0IGVuY291bnRlcmVkIHRoZSBleGNlcHRpb24uXG4gICAqL1xuICByZWFkb25seSAkc2VydmljZT86IHN0cmluZztcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgYW4gZXJyb3IgTUFZIGJlIHJldHJpZWQgYnkgdGhlIGNsaWVudC5cbiAgICovXG4gIHJlYWRvbmx5ICRyZXRyeWFibGU/OiBSZXRyeWFibGVUcmFpdDtcbn1cbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-sdk/smithy-client/dist/es/extended-encode-uri-component.js":
/*!***********************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/smithy-client/dist/es/extended-encode-uri-component.js ***!
  \***********************************************************************************************************************/
/*! exports provided: extendedEncodeURIComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendedEncodeURIComponent", function() { return extendedEncodeURIComponent; });
/**
 * Function that wraps encodeURIComponent to encode additional characters
 * to fully adhere to RFC 3986.
 */
function extendedEncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return "%" + c.charCodeAt(0).toString(16);
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5kZWQtZW5jb2RlLXVyaS1jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXh0ZW5kZWQtZW5jb2RlLXVyaS1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLDBCQUEwQixDQUFDLEdBQVc7SUFDcEQsT0FBTyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQztRQUM1RCxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEZ1bmN0aW9uIHRoYXQgd3JhcHMgZW5jb2RlVVJJQ29tcG9uZW50IHRvIGVuY29kZSBhZGRpdGlvbmFsIGNoYXJhY3RlcnNcbiAqIHRvIGZ1bGx5IGFkaGVyZSB0byBSRkMgMzk4Ni5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZGVkRW5jb2RlVVJJQ29tcG9uZW50KHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoL1shJygpKl0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gXCIlXCIgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpO1xuICB9KTtcbn1cbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-sdk/smithy-client/dist/es/get-array-if-single-item.js":
/*!******************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/smithy-client/dist/es/get-array-if-single-item.js ***!
  \******************************************************************************************************************/
/*! exports provided: getArrayIfSingleItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArrayIfSingleItem", function() { return getArrayIfSingleItem; });
/**
 * The XML parser will set one K:V for a member that could
 * return multiple entries but only has one.
 */
var getArrayIfSingleItem = function (mayBeArray) {
    return Array.isArray(mayBeArray) ? mayBeArray : [mayBeArray];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWFycmF5LWlmLXNpbmdsZS1pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2dldC1hcnJheS1pZi1zaW5nbGUtaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFDSCxNQUFNLENBQUMsSUFBTSxvQkFBb0IsR0FBRyxVQUFJLFVBQWE7SUFDbkQsT0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO0FBQXJELENBQXFELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoZSBYTUwgcGFyc2VyIHdpbGwgc2V0IG9uZSBLOlYgZm9yIGEgbWVtYmVyIHRoYXQgY291bGRcbiAqIHJldHVybiBtdWx0aXBsZSBlbnRyaWVzIGJ1dCBvbmx5IGhhcyBvbmUuXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRBcnJheUlmU2luZ2xlSXRlbSA9IDxUPihtYXlCZUFycmF5OiBUKTogVCB8IFRbXSA9PlxuICBBcnJheS5pc0FycmF5KG1heUJlQXJyYXkpID8gbWF5QmVBcnJheSA6IFttYXlCZUFycmF5XTtcbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-sdk/smithy-client/dist/es/get-value-from-text-node.js":
/*!******************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/smithy-client/dist/es/get-value-from-text-node.js ***!
  \******************************************************************************************************************/
/*! exports provided: getValueFromTextNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueFromTextNode", function() { return getValueFromTextNode; });
/**
 * Recursively parses object and populates value is node from
 * "#text" key if it's available
 */
var getValueFromTextNode = function (obj) {
    var textNodeName = "#text";
    for (var key in obj) {
        if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== undefined) {
            obj[key] = obj[key][textNodeName];
        }
        else if (typeof obj[key] === "object" && obj[key] !== null) {
            obj[key] = getValueFromTextNode(obj[key]);
        }
    }
    return obj;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXZhbHVlLWZyb20tdGV4dC1ub2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2dldC12YWx1ZS1mcm9tLXRleHQtbm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFDSCxNQUFNLENBQUMsSUFBTSxvQkFBb0IsR0FBRyxVQUFDLEdBQVE7SUFDM0MsSUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDO0lBQzdCLEtBQUssSUFBTSxHQUFHLElBQUksR0FBRyxFQUFFO1FBQ3JCLElBQUksR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQ25FLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDbkM7YUFBTSxJQUFJLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQzVELEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMzQztLQUNGO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlY3Vyc2l2ZWx5IHBhcnNlcyBvYmplY3QgYW5kIHBvcHVsYXRlcyB2YWx1ZSBpcyBub2RlIGZyb21cbiAqIFwiI3RleHRcIiBrZXkgaWYgaXQncyBhdmFpbGFibGVcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFZhbHVlRnJvbVRleHROb2RlID0gKG9iajogYW55KSA9PiB7XG4gIGNvbnN0IHRleHROb2RlTmFtZSA9IFwiI3RleHRcIjtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIG9ialtrZXldW3RleHROb2RlTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgb2JqW2tleV0gPSBvYmpba2V5XVt0ZXh0Tm9kZU5hbWVdO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9ialtrZXldID09PSBcIm9iamVjdFwiICYmIG9ialtrZXldICE9PSBudWxsKSB7XG4gICAgICBvYmpba2V5XSA9IGdldFZhbHVlRnJvbVRleHROb2RlKG9ialtrZXldKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG4iXX0=

/***/ }),

/***/ "../../node_modules/@aws-sdk/smithy-client/dist/es/index.js":
/*!***********************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/smithy-client/dist/es/index.js ***!
  \***********************************************************************************************/
/*! exports provided: Client, Command, extendedEncodeURIComponent, getArrayIfSingleItem, getValueFromTextNode, StringWrapper, LazyJsonString, dateToUtcString, splitEvery, SENSITIVE_STRING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client */ "../../node_modules/@aws-sdk/smithy-client/dist/es/client.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return _client__WEBPACK_IMPORTED_MODULE_0__["Client"]; });

/* harmony import */ var _command__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./command */ "../../node_modules/@aws-sdk/smithy-client/dist/es/command.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Command", function() { return _command__WEBPACK_IMPORTED_MODULE_1__["Command"]; });

/* harmony import */ var _document_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./document-type */ "../../node_modules/@aws-sdk/smithy-client/dist/es/document-type.js");
/* empty/unused harmony star reexport *//* harmony import */ var _exception__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exception */ "../../node_modules/@aws-sdk/smithy-client/dist/es/exception.js");
/* empty/unused harmony star reexport *//* harmony import */ var _extended_encode_uri_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extended-encode-uri-component */ "../../node_modules/@aws-sdk/smithy-client/dist/es/extended-encode-uri-component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendedEncodeURIComponent", function() { return _extended_encode_uri_component__WEBPACK_IMPORTED_MODULE_4__["extendedEncodeURIComponent"]; });

/* harmony import */ var _get_array_if_single_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-array-if-single-item */ "../../node_modules/@aws-sdk/smithy-client/dist/es/get-array-if-single-item.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getArrayIfSingleItem", function() { return _get_array_if_single_item__WEBPACK_IMPORTED_MODULE_5__["getArrayIfSingleItem"]; });

/* harmony import */ var _get_value_from_text_node__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-value-from-text-node */ "../../node_modules/@aws-sdk/smithy-client/dist/es/get-value-from-text-node.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getValueFromTextNode", function() { return _get_value_from_text_node__WEBPACK_IMPORTED_MODULE_6__["getValueFromTextNode"]; });

/* harmony import */ var _lazy_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lazy-json */ "../../node_modules/@aws-sdk/smithy-client/dist/es/lazy-json.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringWrapper", function() { return _lazy_json__WEBPACK_IMPORTED_MODULE_7__["StringWrapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyJsonString", function() { return _lazy_json__WEBPACK_IMPORTED_MODULE_7__["LazyJsonString"]; });

/* harmony import */ var _date_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./date-utils */ "../../node_modules/@aws-sdk/smithy-client/dist/es/date-utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dateToUtcString", function() { return _date_utils__WEBPACK_IMPORTED_MODULE_8__["dateToUtcString"]; });

/* harmony import */ var _split_every__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./split-every */ "../../node_modules/@aws-sdk/smithy-client/dist/es/split-every.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "splitEvery", function() { return _split_every__WEBPACK_IMPORTED_MODULE_9__["splitEvery"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants */ "../../node_modules/@aws-sdk/smithy-client/dist/es/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SENSITIVE_STRING", function() { return _constants__WEBPACK_IMPORTED_MODULE_10__["SENSITIVE_STRING"]; });

/* harmony import */ var _retryable_trait__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./retryable-trait */ "../../node_modules/@aws-sdk/smithy-client/dist/es/retryable-trait.js");
/* empty/unused harmony star reexport *//* harmony import */ var _sdk_error__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sdk-error */ "../../node_modules/@aws-sdk/smithy-client/dist/es/sdk-error.js");
/* empty/unused harmony star reexport */












//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxVQUFVLENBQUM7QUFDekIsY0FBYyxXQUFXLENBQUM7QUFDMUIsY0FBYyxpQkFBaUIsQ0FBQztBQUNoQyxjQUFjLGFBQWEsQ0FBQztBQUM1QixjQUFjLGlDQUFpQyxDQUFDO0FBQ2hELGNBQWMsNEJBQTRCLENBQUM7QUFDM0MsY0FBYyw0QkFBNEIsQ0FBQztBQUMzQyxjQUFjLGFBQWEsQ0FBQztBQUM1QixjQUFjLGNBQWMsQ0FBQztBQUM3QixjQUFjLGVBQWUsQ0FBQztBQUM5QixjQUFjLGFBQWEsQ0FBQztBQUM1QixjQUFjLG1CQUFtQixDQUFDO0FBQ2xDLGNBQWMsYUFBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vY2xpZW50XCI7XG5leHBvcnQgKiBmcm9tIFwiLi9jb21tYW5kXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9kb2N1bWVudC10eXBlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9leGNlcHRpb25cIjtcbmV4cG9ydCAqIGZyb20gXCIuL2V4dGVuZGVkLWVuY29kZS11cmktY29tcG9uZW50XCI7XG5leHBvcnQgKiBmcm9tIFwiLi9nZXQtYXJyYXktaWYtc2luZ2xlLWl0ZW1cIjtcbmV4cG9ydCAqIGZyb20gXCIuL2dldC12YWx1ZS1mcm9tLXRleHQtbm9kZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vbGF6eS1qc29uXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9kYXRlLXV0aWxzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zcGxpdC1ldmVyeVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9yZXRyeWFibGUtdHJhaXRcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3Nkay1lcnJvclwiO1xuIl19

/***/ }),

/***/ "../../node_modules/@aws-sdk/smithy-client/dist/es/lazy-json.js":
/*!***************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/smithy-client/dist/es/lazy-json.js ***!
  \***************************************************************************************************/
/*! exports provided: StringWrapper, LazyJsonString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringWrapper", function() { return StringWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyJsonString", function() { return LazyJsonString; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/**
 * Lazy String holder for JSON typed contents.
 */

/**
 * Because of https://github.com/microsoft/tslib/issues/95,
 * TS 'extends' shim doesn't support extending native types like String.
 * So here we create StringWrapper that duplicate everything from String
 * class including its prototype chain. So we can extend from here.
 */
// @ts-ignore StringWrapper implementation is not a simple constructor
var StringWrapper = function () {
    //@ts-ignore 'this' cannot be assigned to any, but Object.getPrototypeOf accepts any
    var Class = Object.getPrototypeOf(this).constructor;
    var Constructor = Function.bind.apply(String, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([null], arguments));
    //@ts-ignore Call wrapped String constructor directly, don't bother typing it.
    var instance = new Constructor();
    Object.setPrototypeOf(instance, Class.prototype);
    return instance;
};
StringWrapper.prototype = Object.create(String.prototype, {
    constructor: {
        value: StringWrapper,
        enumerable: false,
        writable: true,
        configurable: true,
    },
});
Object.setPrototypeOf(StringWrapper, String);
var LazyJsonString = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LazyJsonString, _super);
    function LazyJsonString() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LazyJsonString.prototype.deserializeJSON = function () {
        return JSON.parse(_super.prototype.toString.call(this));
    };
    LazyJsonString.prototype.toJSON = function () {
        return _super.prototype.toString.call(this);
    };
    LazyJsonString.fromObject = function (object) {
        if (object instanceof LazyJsonString) {
            return object;
        }
        else if (object instanceof String || typeof object === "string") {
            return new LazyJsonString(object);
        }
        return new LazyJsonString(JSON.stringify(object));
    };
    return LazyJsonString;
}(StringWrapper));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS1qc29uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xhenktanNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7QUFNSDs7Ozs7R0FLRztBQUNILHNFQUFzRTtBQUN0RSxNQUFNLENBQUMsSUFBTSxhQUFhLEdBQWtCO0lBQzFDLG9GQUFvRjtJQUNwRixJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQztJQUN0RCxJQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLFlBQUcsSUFBVyxHQUFLLFNBQVMsRUFBRSxDQUFDO0lBQzdFLDhFQUE4RTtJQUM5RSxJQUFNLFFBQVEsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO0lBQ25DLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqRCxPQUFPLFFBQWtCLENBQUM7QUFDNUIsQ0FBQyxDQUFDO0FBQ0YsYUFBYSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7SUFDeEQsV0FBVyxFQUFFO1FBQ1gsS0FBSyxFQUFFLGFBQWE7UUFDcEIsVUFBVSxFQUFFLEtBQUs7UUFDakIsUUFBUSxFQUFFLElBQUk7UUFDZCxZQUFZLEVBQUUsSUFBSTtLQUNuQjtDQUNGLENBQUMsQ0FBQztBQUNILE1BQU0sQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBRTdDO0lBQW9DLGtDQUFhO0lBQWpEOztJQWlCQSxDQUFDO0lBaEJDLHdDQUFlLEdBQWY7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQU0sUUFBUSxXQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNFLE9BQU8saUJBQU0sUUFBUSxXQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVNLHlCQUFVLEdBQWpCLFVBQWtCLE1BQVc7UUFDM0IsSUFBSSxNQUFNLFlBQVksY0FBYyxFQUFFO1lBQ3BDLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7YUFBTSxJQUFJLE1BQU0sWUFBWSxNQUFNLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQ2pFLE9BQU8sSUFBSSxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbkM7UUFDRCxPQUFPLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBakJELENBQW9DLGFBQWEsR0FpQmhEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBMYXp5IFN0cmluZyBob2xkZXIgZm9yIEpTT04gdHlwZWQgY29udGVudHMuXG4gKi9cblxuaW50ZXJmYWNlIFN0cmluZ1dyYXBwZXIge1xuICBuZXcgKGFyZzogYW55KTogU3RyaW5nO1xufVxuXG4vKipcbiAqIEJlY2F1c2Ugb2YgaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC90c2xpYi9pc3N1ZXMvOTUsXG4gKiBUUyAnZXh0ZW5kcycgc2hpbSBkb2Vzbid0IHN1cHBvcnQgZXh0ZW5kaW5nIG5hdGl2ZSB0eXBlcyBsaWtlIFN0cmluZy5cbiAqIFNvIGhlcmUgd2UgY3JlYXRlIFN0cmluZ1dyYXBwZXIgdGhhdCBkdXBsaWNhdGUgZXZlcnl0aGluZyBmcm9tIFN0cmluZ1xuICogY2xhc3MgaW5jbHVkaW5nIGl0cyBwcm90b3R5cGUgY2hhaW4uIFNvIHdlIGNhbiBleHRlbmQgZnJvbSBoZXJlLlxuICovXG4vLyBAdHMtaWdub3JlIFN0cmluZ1dyYXBwZXIgaW1wbGVtZW50YXRpb24gaXMgbm90IGEgc2ltcGxlIGNvbnN0cnVjdG9yXG5leHBvcnQgY29uc3QgU3RyaW5nV3JhcHBlcjogU3RyaW5nV3JhcHBlciA9IGZ1bmN0aW9uICgpIHtcbiAgLy9AdHMtaWdub3JlICd0aGlzJyBjYW5ub3QgYmUgYXNzaWduZWQgdG8gYW55LCBidXQgT2JqZWN0LmdldFByb3RvdHlwZU9mIGFjY2VwdHMgYW55XG4gIGNvbnN0IENsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yO1xuICBjb25zdCBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoU3RyaW5nLCBbbnVsbCBhcyBhbnksIC4uLmFyZ3VtZW50c10pO1xuICAvL0B0cy1pZ25vcmUgQ2FsbCB3cmFwcGVkIFN0cmluZyBjb25zdHJ1Y3RvciBkaXJlY3RseSwgZG9uJ3QgYm90aGVyIHR5cGluZyBpdC5cbiAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpO1xuICByZXR1cm4gaW5zdGFuY2UgYXMgU3RyaW5nO1xufTtcblN0cmluZ1dyYXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTdHJpbmcucHJvdG90eXBlLCB7XG4gIGNvbnN0cnVjdG9yOiB7XG4gICAgdmFsdWU6IFN0cmluZ1dyYXBwZXIsXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICB9LFxufSk7XG5PYmplY3Quc2V0UHJvdG90eXBlT2YoU3RyaW5nV3JhcHBlciwgU3RyaW5nKTtcblxuZXhwb3J0IGNsYXNzIExhenlKc29uU3RyaW5nIGV4dGVuZHMgU3RyaW5nV3JhcHBlciB7XG4gIGRlc2VyaWFsaXplSlNPTigpOiBhbnkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKHN1cGVyLnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgdG9KU09OKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHN1cGVyLnRvU3RyaW5nKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU9iamVjdChvYmplY3Q6IGFueSk6IExhenlKc29uU3RyaW5nIHtcbiAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgTGF6eUpzb25TdHJpbmcpIHtcbiAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgfSBlbHNlIGlmIChvYmplY3QgaW5zdGFuY2VvZiBTdHJpbmcgfHwgdHlwZW9mIG9iamVjdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgcmV0dXJuIG5ldyBMYXp5SnNvblN0cmluZyhvYmplY3QpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IExhenlKc29uU3RyaW5nKEpTT04uc3RyaW5naWZ5KG9iamVjdCkpO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "../../node_modules/@aws-sdk/smithy-client/dist/es/retryable-trait.js":
/*!*********************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/smithy-client/dist/es/retryable-trait.js ***!
  \*********************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0cnlhYmxlLXRyYWl0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JldHJ5YWJsZS10cmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIHN0cnVjdHVyZSBzaGFwZSB3aXRoIHRoZSBlcnJvciB0cmFpdC5cbiAqIGh0dHBzOi8vYXdzbGFicy5naXRodWIuaW8vc21pdGh5L3NwZWMvY29yZS5odG1sI3JldHJ5YWJsZS10cmFpdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJldHJ5YWJsZVRyYWl0IHtcbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IHRoZSBlcnJvciBpcyBhIHJldHJ5YWJsZSB0aHJvdHRsaW5nIGVycm9yLlxuICAgKi9cbiAgcmVhZG9ubHkgdGhyb3R0bGluZz86IGJvb2xlYW47XG59XG4iXX0=

/***/ }),

/***/ "../../node_modules/@aws-sdk/smithy-client/dist/es/sdk-error.js":
/*!***************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/smithy-client/dist/es/sdk-error.js ***!
  \***************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2RrLWVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Nkay1lcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWV0YWRhdGFCZWFyZXIgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcblxuaW1wb3J0IHsgU21pdGh5RXhjZXB0aW9uIH0gZnJvbSBcIi4vZXhjZXB0aW9uXCI7XG5cbmV4cG9ydCB0eXBlIFNka0Vycm9yID0gRXJyb3IgJiBTbWl0aHlFeGNlcHRpb24gJiBNZXRhZGF0YUJlYXJlcjtcbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-sdk/smithy-client/dist/es/split-every.js":
/*!*****************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/smithy-client/dist/es/split-every.js ***!
  \*****************************************************************************************************/
/*! exports provided: splitEvery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitEvery", function() { return splitEvery; });
/**
 * Given an input string, splits based on the delimiter after a given
 * number of delimiters has been encountered.
 *
 * @param value The input string to split.
 * @param delimiter The delimiter to split on.
 * @param numDelimiters The number of delimiters to have encountered to split.
 */
function splitEvery(value, delimiter, numDelimiters) {
    // Fail if we don't have a clear number to split on.
    if (numDelimiters <= 0 || !Number.isInteger(numDelimiters)) {
        throw new Error("Invalid number of delimiters (" + numDelimiters + ") for splitEvery.");
    }
    var segments = value.split(delimiter);
    // Short circuit extra logic for the simple case.
    if (numDelimiters === 1) {
        return segments;
    }
    var compoundSegments = [];
    var currentSegment = "";
    for (var i = 0; i < segments.length; i++) {
        if (currentSegment === "") {
            // Start a new segment.
            currentSegment = segments[i];
        }
        else {
            // Compound the current segment with the delimiter.
            currentSegment += delimiter + segments[i];
        }
        if ((i + 1) % numDelimiters === 0) {
            // We encountered the right number of delimiters, so add the entry.
            compoundSegments.push(currentSegment);
            // And reset the current segment.
            currentSegment = "";
        }
    }
    // Handle any leftover segment portion.
    if (currentSegment !== "") {
        compoundSegments.push(currentSegment);
    }
    return compoundSegments;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtZXZlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc3BsaXQtZXZlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7R0FPRztBQUNILE1BQU0sVUFBVSxVQUFVLENBQUMsS0FBYSxFQUFFLFNBQWlCLEVBQUUsYUFBcUI7SUFDaEYsb0RBQW9EO0lBQ3BELElBQUksYUFBYSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEVBQUU7UUFDMUQsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQ0FBZ0MsR0FBRyxhQUFhLEdBQUcsbUJBQW1CLENBQUMsQ0FBQztLQUN6RjtJQUVELElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEMsaURBQWlEO0lBQ2pELElBQUksYUFBYSxLQUFLLENBQUMsRUFBRTtRQUN2QixPQUFPLFFBQVEsQ0FBQztLQUNqQjtJQUVELElBQU0sZ0JBQWdCLEdBQWtCLEVBQUUsQ0FBQztJQUMzQyxJQUFJLGNBQWMsR0FBRyxFQUFFLENBQUM7SUFDeEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDeEMsSUFBSSxjQUFjLEtBQUssRUFBRSxFQUFFO1lBQ3pCLHVCQUF1QjtZQUN2QixjQUFjLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlCO2FBQU07WUFDTCxtREFBbUQ7WUFDbkQsY0FBYyxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0M7UUFFRCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLGFBQWEsS0FBSyxDQUFDLEVBQUU7WUFDakMsbUVBQW1FO1lBQ25FLGdCQUFnQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN0QyxpQ0FBaUM7WUFDakMsY0FBYyxHQUFHLEVBQUUsQ0FBQztTQUNyQjtLQUNGO0lBRUQsdUNBQXVDO0lBQ3ZDLElBQUksY0FBYyxLQUFLLEVBQUUsRUFBRTtRQUN6QixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7S0FDdkM7SUFFRCxPQUFPLGdCQUFnQixDQUFDO0FBQzFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEdpdmVuIGFuIGlucHV0IHN0cmluZywgc3BsaXRzIGJhc2VkIG9uIHRoZSBkZWxpbWl0ZXIgYWZ0ZXIgYSBnaXZlblxuICogbnVtYmVyIG9mIGRlbGltaXRlcnMgaGFzIGJlZW4gZW5jb3VudGVyZWQuXG4gKlxuICogQHBhcmFtIHZhbHVlIFRoZSBpbnB1dCBzdHJpbmcgdG8gc3BsaXQuXG4gKiBAcGFyYW0gZGVsaW1pdGVyIFRoZSBkZWxpbWl0ZXIgdG8gc3BsaXQgb24uXG4gKiBAcGFyYW0gbnVtRGVsaW1pdGVycyBUaGUgbnVtYmVyIG9mIGRlbGltaXRlcnMgdG8gaGF2ZSBlbmNvdW50ZXJlZCB0byBzcGxpdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0RXZlcnkodmFsdWU6IHN0cmluZywgZGVsaW1pdGVyOiBzdHJpbmcsIG51bURlbGltaXRlcnM6IG51bWJlcik6IEFycmF5PHN0cmluZz4ge1xuICAvLyBGYWlsIGlmIHdlIGRvbid0IGhhdmUgYSBjbGVhciBudW1iZXIgdG8gc3BsaXQgb24uXG4gIGlmIChudW1EZWxpbWl0ZXJzIDw9IDAgfHwgIU51bWJlci5pc0ludGVnZXIobnVtRGVsaW1pdGVycykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG51bWJlciBvZiBkZWxpbWl0ZXJzIChcIiArIG51bURlbGltaXRlcnMgKyBcIikgZm9yIHNwbGl0RXZlcnkuXCIpO1xuICB9XG5cbiAgY29uc3Qgc2VnbWVudHMgPSB2YWx1ZS5zcGxpdChkZWxpbWl0ZXIpO1xuICAvLyBTaG9ydCBjaXJjdWl0IGV4dHJhIGxvZ2ljIGZvciB0aGUgc2ltcGxlIGNhc2UuXG4gIGlmIChudW1EZWxpbWl0ZXJzID09PSAxKSB7XG4gICAgcmV0dXJuIHNlZ21lbnRzO1xuICB9XG5cbiAgY29uc3QgY29tcG91bmRTZWdtZW50czogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICBsZXQgY3VycmVudFNlZ21lbnQgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGN1cnJlbnRTZWdtZW50ID09PSBcIlwiKSB7XG4gICAgICAvLyBTdGFydCBhIG5ldyBzZWdtZW50LlxuICAgICAgY3VycmVudFNlZ21lbnQgPSBzZWdtZW50c1tpXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ29tcG91bmQgdGhlIGN1cnJlbnQgc2VnbWVudCB3aXRoIHRoZSBkZWxpbWl0ZXIuXG4gICAgICBjdXJyZW50U2VnbWVudCArPSBkZWxpbWl0ZXIgKyBzZWdtZW50c1tpXTtcbiAgICB9XG5cbiAgICBpZiAoKGkgKyAxKSAlIG51bURlbGltaXRlcnMgPT09IDApIHtcbiAgICAgIC8vIFdlIGVuY291bnRlcmVkIHRoZSByaWdodCBudW1iZXIgb2YgZGVsaW1pdGVycywgc28gYWRkIHRoZSBlbnRyeS5cbiAgICAgIGNvbXBvdW5kU2VnbWVudHMucHVzaChjdXJyZW50U2VnbWVudCk7XG4gICAgICAvLyBBbmQgcmVzZXQgdGhlIGN1cnJlbnQgc2VnbWVudC5cbiAgICAgIGN1cnJlbnRTZWdtZW50ID0gXCJcIjtcbiAgICB9XG4gIH1cblxuICAvLyBIYW5kbGUgYW55IGxlZnRvdmVyIHNlZ21lbnQgcG9ydGlvbi5cbiAgaWYgKGN1cnJlbnRTZWdtZW50ICE9PSBcIlwiKSB7XG4gICAgY29tcG91bmRTZWdtZW50cy5wdXNoKGN1cnJlbnRTZWdtZW50KTtcbiAgfVxuXG4gIHJldHVybiBjb21wb3VuZFNlZ21lbnRzO1xufVxuIl19

/***/ }),

/***/ "../../node_modules/@aws-sdk/url-parser/dist/es/index.js":
/*!********************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/url-parser/dist/es/index.js ***!
  \********************************************************************************************/
/*! exports provided: parseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseUrl", function() { return parseUrl; });
/* harmony import */ var _aws_sdk_querystring_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/querystring-parser */ "../../node_modules/@aws-sdk/url-parser/node_modules/@aws-sdk/querystring-parser/dist/es/index.js");

var parseUrl = function (url) {
    var _a = new URL(url), hostname = _a.hostname, pathname = _a.pathname, port = _a.port, protocol = _a.protocol, search = _a.search;
    var query;
    if (search) {
        query = Object(_aws_sdk_querystring_parser__WEBPACK_IMPORTED_MODULE_0__["parseQueryString"])(search);
    }
    return {
        hostname: hostname,
        port: port ? parseInt(port) : undefined,
        protocol: protocol,
        path: pathname,
        query: query,
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFHL0QsTUFBTSxDQUFDLElBQU0sUUFBUSxHQUFjLFVBQUMsR0FBVztJQUN2QyxJQUFBLEtBQWlELElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUEzRCxRQUFRLGNBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxJQUFJLFVBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxNQUFNLFlBQWlCLENBQUM7SUFFcEUsSUFBSSxLQUFvQyxDQUFDO0lBQ3pDLElBQUksTUFBTSxFQUFFO1FBQ1YsS0FBSyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ2xDO0lBRUQsT0FBTztRQUNMLFFBQVEsVUFBQTtRQUNSLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUN2QyxRQUFRLFVBQUE7UUFDUixJQUFJLEVBQUUsUUFBUTtRQUNkLEtBQUssT0FBQTtLQUNOLENBQUM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwYXJzZVF1ZXJ5U3RyaW5nIH0gZnJvbSBcIkBhd3Mtc2RrL3F1ZXJ5c3RyaW5nLXBhcnNlclwiO1xuaW1wb3J0IHsgRW5kcG9pbnQsIFF1ZXJ5UGFyYW1ldGVyQmFnLCBVcmxQYXJzZXIgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IHBhcnNlVXJsOiBVcmxQYXJzZXIgPSAodXJsOiBzdHJpbmcpOiBFbmRwb2ludCA9PiB7XG4gIGNvbnN0IHsgaG9zdG5hbWUsIHBhdGhuYW1lLCBwb3J0LCBwcm90b2NvbCwgc2VhcmNoIH0gPSBuZXcgVVJMKHVybCk7XG5cbiAgbGV0IHF1ZXJ5OiBRdWVyeVBhcmFtZXRlckJhZyB8IHVuZGVmaW5lZDtcbiAgaWYgKHNlYXJjaCkge1xuICAgIHF1ZXJ5ID0gcGFyc2VRdWVyeVN0cmluZyhzZWFyY2gpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBob3N0bmFtZSxcbiAgICBwb3J0OiBwb3J0ID8gcGFyc2VJbnQocG9ydCkgOiB1bmRlZmluZWQsXG4gICAgcHJvdG9jb2wsXG4gICAgcGF0aDogcGF0aG5hbWUsXG4gICAgcXVlcnksXG4gIH07XG59O1xuIl19

/***/ }),

/***/ "../../node_modules/@aws-sdk/url-parser/node_modules/@aws-sdk/querystring-parser/dist/es/index.js":
/*!*************************************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/url-parser/node_modules/@aws-sdk/querystring-parser/dist/es/index.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: parseQueryString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseQueryString", function() { return parseQueryString; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

function parseQueryString(querystring) {
    var e_1, _a;
    var query = {};
    querystring = querystring.replace(/^\?/, "");
    if (querystring) {
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(querystring.split("&")), _c = _b.next(); !_c.done; _c = _b.next()) {
                var pair = _c.value;
                var _d = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(pair.split("="), 2), key = _d[0], _e = _d[1], value = _e === void 0 ? null : _e;
                key = decodeURIComponent(key);
                if (value) {
                    value = decodeURIComponent(value);
                }
                if (!(key in query)) {
                    query[key] = value;
                }
                else if (Array.isArray(query[key])) {
                    query[key].push(value);
                }
                else {
                    query[key] = [query[key], value];
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    return query;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxXQUFtQjs7SUFDbEQsSUFBTSxLQUFLLEdBQXNCLEVBQUUsQ0FBQztJQUNwQyxXQUFXLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFN0MsSUFBSSxXQUFXLEVBQUU7O1lBQ2YsS0FBbUIsSUFBQSxLQUFBLFNBQUEsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBdEMsSUFBTSxJQUFJLFdBQUE7Z0JBQ1QsSUFBQSxLQUFBLE9BQXNCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUEsRUFBcEMsR0FBRyxRQUFBLEVBQUUsVUFBWSxFQUFaLEtBQUssbUJBQUcsSUFBSSxLQUFtQixDQUFDO2dCQUMxQyxHQUFHLEdBQUcsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzlCLElBQUksS0FBSyxFQUFFO29CQUNULEtBQUssR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDbkM7Z0JBQ0QsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFO29CQUNuQixLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO2lCQUNwQjtxQkFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7b0JBQ25DLEtBQUssQ0FBQyxHQUFHLENBQW1CLENBQUMsSUFBSSxDQUFDLEtBQWUsQ0FBQyxDQUFDO2lCQUNyRDtxQkFBTTtvQkFDTCxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFXLEVBQUUsS0FBZSxDQUFDLENBQUM7aUJBQ3REO2FBQ0Y7Ozs7Ozs7OztLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUXVlcnlQYXJhbWV0ZXJCYWcgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUXVlcnlTdHJpbmcocXVlcnlzdHJpbmc6IHN0cmluZyk6IFF1ZXJ5UGFyYW1ldGVyQmFnIHtcbiAgY29uc3QgcXVlcnk6IFF1ZXJ5UGFyYW1ldGVyQmFnID0ge307XG4gIHF1ZXJ5c3RyaW5nID0gcXVlcnlzdHJpbmcucmVwbGFjZSgvXlxcPy8sIFwiXCIpO1xuXG4gIGlmIChxdWVyeXN0cmluZykge1xuICAgIGZvciAoY29uc3QgcGFpciBvZiBxdWVyeXN0cmluZy5zcGxpdChcIiZcIikpIHtcbiAgICAgIGxldCBba2V5LCB2YWx1ZSA9IG51bGxdID0gcGFpci5zcGxpdChcIj1cIik7XG4gICAgICBrZXkgPSBkZWNvZGVVUklDb21wb25lbnQoa2V5KTtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoIShrZXkgaW4gcXVlcnkpKSB7XG4gICAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgICAocXVlcnlba2V5XSBhcyBBcnJheTxzdHJpbmc+KS5wdXNoKHZhbHVlIGFzIHN0cmluZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZSBhcyBzdHJpbmddO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBxdWVyeTtcbn1cbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-sdk/util-base64-browser/dist/es/index.js":
/*!*****************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/util-base64-browser/dist/es/index.js ***!
  \*****************************************************************************************************/
/*! exports provided: fromBase64, toBase64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromBase64", function() { return fromBase64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBase64", function() { return toBase64; });
var alphabetByEncoding = {};
var alphabetByValue = new Array(64);
for (var i = 0, start = "A".charCodeAt(0), limit = "Z".charCodeAt(0); i + start <= limit; i++) {
    var char = String.fromCharCode(i + start);
    alphabetByEncoding[char] = i;
    alphabetByValue[i] = char;
}
for (var i = 0, start = "a".charCodeAt(0), limit = "z".charCodeAt(0); i + start <= limit; i++) {
    var char = String.fromCharCode(i + start);
    var index = i + 26;
    alphabetByEncoding[char] = index;
    alphabetByValue[index] = char;
}
for (var i = 0; i < 10; i++) {
    alphabetByEncoding[i.toString(10)] = i + 52;
    var char = i.toString(10);
    var index = i + 52;
    alphabetByEncoding[char] = index;
    alphabetByValue[index] = char;
}
alphabetByEncoding["+"] = 62;
alphabetByValue[62] = "+";
alphabetByEncoding["/"] = 63;
alphabetByValue[63] = "/";
var bitsPerLetter = 6;
var bitsPerByte = 8;
var maxLetterValue = 63;
/**
 * Converts a base-64 encoded string to a Uint8Array of bytes.
 *
 * @param input The base-64 encoded string
 *
 * @see https://tools.ietf.org/html/rfc4648#section-4
 */
function fromBase64(input) {
    var totalByteLength = (input.length / 4) * 3;
    if (input.substr(-2) === "==") {
        totalByteLength -= 2;
    }
    else if (input.substr(-1) === "=") {
        totalByteLength--;
    }
    var out = new ArrayBuffer(totalByteLength);
    var dataView = new DataView(out);
    for (var i = 0; i < input.length; i += 4) {
        var bits = 0;
        var bitLength = 0;
        for (var j = i, limit = i + 3; j <= limit; j++) {
            if (input[j] !== "=") {
                bits |= alphabetByEncoding[input[j]] << ((limit - j) * bitsPerLetter);
                bitLength += bitsPerLetter;
            }
            else {
                bits >>= bitsPerLetter;
            }
        }
        var chunkOffset = (i / 4) * 3;
        bits >>= bitLength % bitsPerByte;
        var byteLength = Math.floor(bitLength / bitsPerByte);
        for (var k = 0; k < byteLength; k++) {
            var offset = (byteLength - k - 1) * bitsPerByte;
            dataView.setUint8(chunkOffset + k, (bits & (255 << offset)) >> offset);
        }
    }
    return new Uint8Array(out);
}
/**
 * Converts a Uint8Array of binary data to a base-64 encoded string.
 *
 * @param input The binary data to encode
 *
 * @see https://tools.ietf.org/html/rfc4648#section-4
 */
function toBase64(input) {
    var str = "";
    for (var i = 0; i < input.length; i += 3) {
        var bits = 0;
        var bitLength = 0;
        for (var j = i, limit = Math.min(i + 3, input.length); j < limit; j++) {
            bits |= input[j] << ((limit - j - 1) * bitsPerByte);
            bitLength += bitsPerByte;
        }
        var bitClusterCount = Math.ceil(bitLength / bitsPerLetter);
        bits <<= bitClusterCount * bitsPerLetter - bitLength;
        for (var k = 1; k <= bitClusterCount; k++) {
            var offset = (bitClusterCount - k) * bitsPerLetter;
            str += alphabetByValue[(bits & (maxLetterValue << offset)) >> offset];
        }
        str += "==".slice(0, 4 - bitClusterCount);
    }
    return str;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxrQkFBa0IsR0FBOEIsRUFBRSxDQUFDO0FBQ3pELElBQU0sZUFBZSxHQUFrQixJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUVyRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxJQUFJLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUM3RixJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUM1QyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsZUFBZSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztDQUMzQjtBQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLElBQUksS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQzdGLElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQzVDLElBQU0sS0FBSyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDckIsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUM7Q0FDL0I7QUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQzNCLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzVDLElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDNUIsSUFBTSxLQUFLLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNyQixrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDakMsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztDQUMvQjtBQUVELGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUM3QixlQUFlLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQzFCLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUM3QixlQUFlLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBRTFCLElBQU0sYUFBYSxHQUFHLENBQUMsQ0FBQztBQUN4QixJQUFNLFdBQVcsR0FBRyxDQUFDLENBQUM7QUFDdEIsSUFBTSxjQUFjLEdBQUcsRUFBUSxDQUFDO0FBRWhDOzs7Ozs7R0FNRztBQUNILE1BQU0sVUFBVSxVQUFVLENBQUMsS0FBYTtJQUN0QyxJQUFJLGVBQWUsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRTtRQUM3QixlQUFlLElBQUksQ0FBQyxDQUFDO0tBQ3RCO1NBQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO1FBQ25DLGVBQWUsRUFBRSxDQUFDO0tBQ25CO0lBQ0QsSUFBTSxHQUFHLEdBQUcsSUFBSSxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDN0MsSUFBTSxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN4QyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7UUFDYixJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM5QyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7Z0JBQ3BCLElBQUksSUFBSSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDO2dCQUN0RSxTQUFTLElBQUksYUFBYSxDQUFDO2FBQzVCO2lCQUFNO2dCQUNMLElBQUksS0FBSyxhQUFhLENBQUM7YUFDeEI7U0FDRjtRQUVELElBQU0sV0FBVyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxJQUFJLEtBQUssU0FBUyxHQUFHLFdBQVcsQ0FBQztRQUNqQyxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsQ0FBQztRQUN2RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25DLElBQU0sTUFBTSxHQUFHLENBQUMsVUFBVSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUM7WUFDbEQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUM7U0FDeEU7S0FDRjtJQUVELE9BQU8sSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDN0IsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILE1BQU0sVUFBVSxRQUFRLENBQUMsS0FBaUI7SUFDeEMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ2IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN4QyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7UUFDYixJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNyRSxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDO1lBQ3BELFNBQVMsSUFBSSxXQUFXLENBQUM7U0FDMUI7UUFFRCxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsQ0FBQztRQUM3RCxJQUFJLEtBQUssZUFBZSxHQUFHLGFBQWEsR0FBRyxTQUFTLENBQUM7UUFDckQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGVBQWUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QyxJQUFNLE1BQU0sR0FBRyxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUM7WUFDckQsR0FBRyxJQUFJLGVBQWUsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLGNBQWMsSUFBSSxNQUFNLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZFO1FBRUQsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxlQUFlLENBQUMsQ0FBQztLQUMzQztJQUVELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFscGhhYmV0QnlFbmNvZGluZzogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xuY29uc3QgYWxwaGFiZXRCeVZhbHVlOiBBcnJheTxzdHJpbmc+ID0gbmV3IEFycmF5KDY0KTtcblxuZm9yIChsZXQgaSA9IDAsIHN0YXJ0ID0gXCJBXCIuY2hhckNvZGVBdCgwKSwgbGltaXQgPSBcIlpcIi5jaGFyQ29kZUF0KDApOyBpICsgc3RhcnQgPD0gbGltaXQ7IGkrKykge1xuICBjb25zdCBjaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShpICsgc3RhcnQpO1xuICBhbHBoYWJldEJ5RW5jb2RpbmdbY2hhcl0gPSBpO1xuICBhbHBoYWJldEJ5VmFsdWVbaV0gPSBjaGFyO1xufVxuXG5mb3IgKGxldCBpID0gMCwgc3RhcnQgPSBcImFcIi5jaGFyQ29kZUF0KDApLCBsaW1pdCA9IFwielwiLmNoYXJDb2RlQXQoMCk7IGkgKyBzdGFydCA8PSBsaW1pdDsgaSsrKSB7XG4gIGNvbnN0IGNoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGkgKyBzdGFydCk7XG4gIGNvbnN0IGluZGV4ID0gaSArIDI2O1xuICBhbHBoYWJldEJ5RW5jb2RpbmdbY2hhcl0gPSBpbmRleDtcbiAgYWxwaGFiZXRCeVZhbHVlW2luZGV4XSA9IGNoYXI7XG59XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICBhbHBoYWJldEJ5RW5jb2RpbmdbaS50b1N0cmluZygxMCldID0gaSArIDUyO1xuICBjb25zdCBjaGFyID0gaS50b1N0cmluZygxMCk7XG4gIGNvbnN0IGluZGV4ID0gaSArIDUyO1xuICBhbHBoYWJldEJ5RW5jb2RpbmdbY2hhcl0gPSBpbmRleDtcbiAgYWxwaGFiZXRCeVZhbHVlW2luZGV4XSA9IGNoYXI7XG59XG5cbmFscGhhYmV0QnlFbmNvZGluZ1tcIitcIl0gPSA2MjtcbmFscGhhYmV0QnlWYWx1ZVs2Ml0gPSBcIitcIjtcbmFscGhhYmV0QnlFbmNvZGluZ1tcIi9cIl0gPSA2MztcbmFscGhhYmV0QnlWYWx1ZVs2M10gPSBcIi9cIjtcblxuY29uc3QgYml0c1BlckxldHRlciA9IDY7XG5jb25zdCBiaXRzUGVyQnl0ZSA9IDg7XG5jb25zdCBtYXhMZXR0ZXJWYWx1ZSA9IDBiMTExMTExO1xuXG4vKipcbiAqIENvbnZlcnRzIGEgYmFzZS02NCBlbmNvZGVkIHN0cmluZyB0byBhIFVpbnQ4QXJyYXkgb2YgYnl0ZXMuXG4gKlxuICogQHBhcmFtIGlucHV0IFRoZSBiYXNlLTY0IGVuY29kZWQgc3RyaW5nXG4gKlxuICogQHNlZSBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNDY0OCNzZWN0aW9uLTRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21CYXNlNjQoaW5wdXQ6IHN0cmluZyk6IFVpbnQ4QXJyYXkge1xuICBsZXQgdG90YWxCeXRlTGVuZ3RoID0gKGlucHV0Lmxlbmd0aCAvIDQpICogMztcbiAgaWYgKGlucHV0LnN1YnN0cigtMikgPT09IFwiPT1cIikge1xuICAgIHRvdGFsQnl0ZUxlbmd0aCAtPSAyO1xuICB9IGVsc2UgaWYgKGlucHV0LnN1YnN0cigtMSkgPT09IFwiPVwiKSB7XG4gICAgdG90YWxCeXRlTGVuZ3RoLS07XG4gIH1cbiAgY29uc3Qgb3V0ID0gbmV3IEFycmF5QnVmZmVyKHRvdGFsQnl0ZUxlbmd0aCk7XG4gIGNvbnN0IGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KG91dCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpICs9IDQpIHtcbiAgICBsZXQgYml0cyA9IDA7XG4gICAgbGV0IGJpdExlbmd0aCA9IDA7XG4gICAgZm9yIChsZXQgaiA9IGksIGxpbWl0ID0gaSArIDM7IGogPD0gbGltaXQ7IGorKykge1xuICAgICAgaWYgKGlucHV0W2pdICE9PSBcIj1cIikge1xuICAgICAgICBiaXRzIHw9IGFscGhhYmV0QnlFbmNvZGluZ1tpbnB1dFtqXV0gPDwgKChsaW1pdCAtIGopICogYml0c1BlckxldHRlcik7XG4gICAgICAgIGJpdExlbmd0aCArPSBiaXRzUGVyTGV0dGVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYml0cyA+Pj0gYml0c1BlckxldHRlcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjaHVua09mZnNldCA9IChpIC8gNCkgKiAzO1xuICAgIGJpdHMgPj49IGJpdExlbmd0aCAlIGJpdHNQZXJCeXRlO1xuICAgIGNvbnN0IGJ5dGVMZW5ndGggPSBNYXRoLmZsb29yKGJpdExlbmd0aCAvIGJpdHNQZXJCeXRlKTtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IGJ5dGVMZW5ndGg7IGsrKykge1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gKGJ5dGVMZW5ndGggLSBrIC0gMSkgKiBiaXRzUGVyQnl0ZTtcbiAgICAgIGRhdGFWaWV3LnNldFVpbnQ4KGNodW5rT2Zmc2V0ICsgaywgKGJpdHMgJiAoMjU1IDw8IG9mZnNldCkpID4+IG9mZnNldCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBVaW50OEFycmF5KG91dCk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYSBVaW50OEFycmF5IG9mIGJpbmFyeSBkYXRhIHRvIGEgYmFzZS02NCBlbmNvZGVkIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gaW5wdXQgVGhlIGJpbmFyeSBkYXRhIHRvIGVuY29kZVxuICpcbiAqIEBzZWUgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzQ2NDgjc2VjdGlvbi00XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0Jhc2U2NChpbnB1dDogVWludDhBcnJheSk6IHN0cmluZyB7XG4gIGxldCBzdHIgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSArPSAzKSB7XG4gICAgbGV0IGJpdHMgPSAwO1xuICAgIGxldCBiaXRMZW5ndGggPSAwO1xuICAgIGZvciAobGV0IGogPSBpLCBsaW1pdCA9IE1hdGgubWluKGkgKyAzLCBpbnB1dC5sZW5ndGgpOyBqIDwgbGltaXQ7IGorKykge1xuICAgICAgYml0cyB8PSBpbnB1dFtqXSA8PCAoKGxpbWl0IC0gaiAtIDEpICogYml0c1BlckJ5dGUpO1xuICAgICAgYml0TGVuZ3RoICs9IGJpdHNQZXJCeXRlO1xuICAgIH1cblxuICAgIGNvbnN0IGJpdENsdXN0ZXJDb3VudCA9IE1hdGguY2VpbChiaXRMZW5ndGggLyBiaXRzUGVyTGV0dGVyKTtcbiAgICBiaXRzIDw8PSBiaXRDbHVzdGVyQ291bnQgKiBiaXRzUGVyTGV0dGVyIC0gYml0TGVuZ3RoO1xuICAgIGZvciAobGV0IGsgPSAxOyBrIDw9IGJpdENsdXN0ZXJDb3VudDsgaysrKSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSAoYml0Q2x1c3RlckNvdW50IC0gaykgKiBiaXRzUGVyTGV0dGVyO1xuICAgICAgc3RyICs9IGFscGhhYmV0QnlWYWx1ZVsoYml0cyAmIChtYXhMZXR0ZXJWYWx1ZSA8PCBvZmZzZXQpKSA+PiBvZmZzZXRdO1xuICAgIH1cblxuICAgIHN0ciArPSBcIj09XCIuc2xpY2UoMCwgNCAtIGJpdENsdXN0ZXJDb3VudCk7XG4gIH1cblxuICByZXR1cm4gc3RyO1xufVxuIl19

/***/ }),

/***/ "../../node_modules/@aws-sdk/util-body-length-browser/dist/es/index.js":
/*!**********************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/util-body-length-browser/dist/es/index.js ***!
  \**********************************************************************************************************/
/*! exports provided: calculateBodyLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateBodyLength", function() { return calculateBodyLength; });
function calculateBodyLength(body) {
    if (typeof body === "string") {
        var len = body.length;
        for (var i = len - 1; i >= 0; i--) {
            var code = body.charCodeAt(i);
            if (code > 0x7f && code <= 0x7ff)
                len++;
            else if (code > 0x7ff && code <= 0xffff)
                len += 2;
        }
        return len;
    }
    else if (typeof body.byteLength === "number") {
        // handles Uint8Array, ArrayBuffer, Buffer, and ArrayBufferView
        return body.byteLength;
    }
    else if (typeof body.size === "number") {
        // handles browser File object
        return body.size;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxVQUFVLG1CQUFtQixDQUFDLElBQVM7SUFDM0MsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7UUFDNUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUV0QixLQUFLLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksS0FBSztnQkFBRSxHQUFHLEVBQUUsQ0FBQztpQkFDbkMsSUFBSSxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksSUFBSSxNQUFNO2dCQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDbkQ7UUFFRCxPQUFPLEdBQUcsQ0FBQztLQUNaO1NBQU0sSUFBSSxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssUUFBUSxFQUFFO1FBQzlDLCtEQUErRDtRQUMvRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7S0FDeEI7U0FBTSxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7UUFDeEMsOEJBQThCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztLQUNsQjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlQm9keUxlbmd0aChib2R5OiBhbnkpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICBpZiAodHlwZW9mIGJvZHkgPT09IFwic3RyaW5nXCIpIHtcbiAgICBsZXQgbGVuID0gYm9keS5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpID0gbGVuIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGNvZGUgPSBib2R5LmNoYXJDb2RlQXQoaSk7XG4gICAgICBpZiAoY29kZSA+IDB4N2YgJiYgY29kZSA8PSAweDdmZikgbGVuKys7XG4gICAgICBlbHNlIGlmIChjb2RlID4gMHg3ZmYgJiYgY29kZSA8PSAweGZmZmYpIGxlbiArPSAyO1xuICAgIH1cblxuICAgIHJldHVybiBsZW47XG4gIH0gZWxzZSBpZiAodHlwZW9mIGJvZHkuYnl0ZUxlbmd0aCA9PT0gXCJudW1iZXJcIikge1xuICAgIC8vIGhhbmRsZXMgVWludDhBcnJheSwgQXJyYXlCdWZmZXIsIEJ1ZmZlciwgYW5kIEFycmF5QnVmZmVyVmlld1xuICAgIHJldHVybiBib2R5LmJ5dGVMZW5ndGg7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGJvZHkuc2l6ZSA9PT0gXCJudW1iZXJcIikge1xuICAgIC8vIGhhbmRsZXMgYnJvd3NlciBGaWxlIG9iamVjdFxuICAgIHJldHVybiBib2R5LnNpemU7XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-sdk/util-locate-window/dist/es/index.js":
/*!****************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/util-locate-window/dist/es/index.js ***!
  \****************************************************************************************************/
/*! exports provided: locateWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locateWindow", function() { return locateWindow; });
var fallbackWindow = {};
/**
 * Locates the global scope for a browser or browser-like environment. If
 * neither `window` nor `self` is defined by the environment, the same object
 * will be returned on each invocation.
 */
function locateWindow() {
    if (typeof window !== "undefined") {
        return window;
    }
    else if (typeof self !== "undefined") {
        return self;
    }
    return fallbackWindow;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxjQUFjLEdBQUcsRUFBWSxDQUFDO0FBRXBDOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsWUFBWTtJQUMxQixJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtRQUNqQyxPQUFPLE1BQU0sQ0FBQztLQUNmO1NBQU0sSUFBSSxPQUFPLElBQUksS0FBSyxXQUFXLEVBQUU7UUFDdEMsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUVELE9BQU8sY0FBYyxDQUFDO0FBQ3hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmYWxsYmFja1dpbmRvdyA9IHt9IGFzIFdpbmRvdztcblxuLyoqXG4gKiBMb2NhdGVzIHRoZSBnbG9iYWwgc2NvcGUgZm9yIGEgYnJvd3NlciBvciBicm93c2VyLWxpa2UgZW52aXJvbm1lbnQuIElmXG4gKiBuZWl0aGVyIGB3aW5kb3dgIG5vciBgc2VsZmAgaXMgZGVmaW5lZCBieSB0aGUgZW52aXJvbm1lbnQsIHRoZSBzYW1lIG9iamVjdFxuICogd2lsbCBiZSByZXR1cm5lZCBvbiBlYWNoIGludm9jYXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2NhdGVXaW5kb3coKTogV2luZG93IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cblxuICByZXR1cm4gZmFsbGJhY2tXaW5kb3c7XG59XG4iXX0=

/***/ }),

/***/ "../../node_modules/@aws-sdk/util-user-agent-browser/dist/es/index.js":
/*!*********************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/util-user-agent-browser/dist/es/index.js ***!
  \*********************************************************************************************************/
/*! exports provided: defaultUserAgent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultUserAgent", function() { return defaultUserAgent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bowser */ "../../node_modules/bowser/es5.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Default provider to the user agent in browsers. It's a best effort to infer
 * the device information. It uses bowser library to detect the browser and virsion
 */
var defaultUserAgent = function (_a) {
    var serviceId = _a.serviceId, clientVersion = _a.clientVersion;
    return function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
        var parsedUA, sections;
        var _a, _b, _c, _d, _e, _f, _g;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_h) {
            parsedUA = ((_a = window === null || window === void 0 ? void 0 : window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent) ? bowser__WEBPACK_IMPORTED_MODULE_1___default.a.parse(window.navigator.userAgent) : undefined;
            sections = [
                // sdk-metadata
                ["aws-sdk-js", clientVersion],
                // os-metadata
                ["os/" + (((_b = parsedUA === null || parsedUA === void 0 ? void 0 : parsedUA.os) === null || _b === void 0 ? void 0 : _b.name) || "other"), (_c = parsedUA === null || parsedUA === void 0 ? void 0 : parsedUA.os) === null || _c === void 0 ? void 0 : _c.version],
                // language-metadata
                // ECMAScript edition doesn't matter in JS.
                ["lang/js"],
                // browser vendor and version.
                ["md/browser", ((_e = (_d = parsedUA === null || parsedUA === void 0 ? void 0 : parsedUA.browser) === null || _d === void 0 ? void 0 : _d.name) !== null && _e !== void 0 ? _e : "unknown") + "_" + ((_g = (_f = parsedUA === null || parsedUA === void 0 ? void 0 : parsedUA.browser) === null || _f === void 0 ? void 0 : _f.version) !== null && _g !== void 0 ? _g : "unknown")],
            ];
            if (serviceId) {
                // api-metadata
                // service Id may not appear in non-AWS clients
                sections.push(["api/" + serviceId, clientVersion]);
            }
            return [2 /*return*/, sections];
        });
    }); };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUk1Qjs7O0dBR0c7QUFDSCxNQUFNLENBQUMsSUFBTSxnQkFBZ0IsR0FBRyxVQUFDLEVBR1A7UUFGeEIsU0FBUyxlQUFBLEVBQ1QsYUFBYSxtQkFBQTtJQUNxQyxPQUFBOzs7O1lBQzVDLFFBQVEsR0FBRyxPQUFBLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxTQUFTLDBDQUFFLFNBQVMsRUFBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDL0YsUUFBUSxHQUFjO2dCQUMxQixlQUFlO2dCQUNmLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQztnQkFDN0IsY0FBYztnQkFDZCxDQUFDLFNBQU0sT0FBQSxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsRUFBRSwwQ0FBRSxJQUFJLEtBQUksT0FBTyxDQUFFLFFBQUUsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLEVBQUUsMENBQUUsT0FBTyxDQUFDO2dCQUM5RCxvQkFBb0I7Z0JBQ3BCLDJDQUEyQztnQkFDM0MsQ0FBQyxTQUFTLENBQUM7Z0JBQ1gsOEJBQThCO2dCQUM5QixDQUFDLFlBQVksRUFBRSxhQUFHLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxPQUFPLDBDQUFFLElBQUksbUNBQUksU0FBUyx1QkFBSSxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsT0FBTywwQ0FBRSxPQUFPLG1DQUFJLFNBQVMsQ0FBRSxDQUFDO2FBQ3JHLENBQUM7WUFFRixJQUFJLFNBQVMsRUFBRTtnQkFDYixlQUFlO2dCQUNmLCtDQUErQztnQkFDL0MsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQU8sU0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7YUFDcEQ7WUFFRCxzQkFBTyxRQUFRLEVBQUM7O1NBQ2pCO0FBckJtRCxDQXFCbkQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3ZpZGVyLCBVc2VyQWdlbnQgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcbmltcG9ydCBib3dzZXIgZnJvbSBcImJvd3NlclwiO1xuXG5pbXBvcnQgeyBEZWZhdWx0VXNlckFnZW50T3B0aW9ucyB9IGZyb20gXCIuL2NvbmZpZ3VyYXRpb25zXCI7XG5cbi8qKlxuICogRGVmYXVsdCBwcm92aWRlciB0byB0aGUgdXNlciBhZ2VudCBpbiBicm93c2Vycy4gSXQncyBhIGJlc3QgZWZmb3J0IHRvIGluZmVyXG4gKiB0aGUgZGV2aWNlIGluZm9ybWF0aW9uLiBJdCB1c2VzIGJvd3NlciBsaWJyYXJ5IHRvIGRldGVjdCB0aGUgYnJvd3NlciBhbmQgdmlyc2lvblxuICovXG5leHBvcnQgY29uc3QgZGVmYXVsdFVzZXJBZ2VudCA9ICh7XG4gIHNlcnZpY2VJZCxcbiAgY2xpZW50VmVyc2lvbixcbn06IERlZmF1bHRVc2VyQWdlbnRPcHRpb25zKTogUHJvdmlkZXI8VXNlckFnZW50PiA9PiBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHBhcnNlZFVBID0gd2luZG93Py5uYXZpZ2F0b3I/LnVzZXJBZ2VudCA/IGJvd3Nlci5wYXJzZSh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkgOiB1bmRlZmluZWQ7XG4gIGNvbnN0IHNlY3Rpb25zOiBVc2VyQWdlbnQgPSBbXG4gICAgLy8gc2RrLW1ldGFkYXRhXG4gICAgW1wiYXdzLXNkay1qc1wiLCBjbGllbnRWZXJzaW9uXSxcbiAgICAvLyBvcy1tZXRhZGF0YVxuICAgIFtgb3MvJHtwYXJzZWRVQT8ub3M/Lm5hbWUgfHwgXCJvdGhlclwifWAsIHBhcnNlZFVBPy5vcz8udmVyc2lvbl0sXG4gICAgLy8gbGFuZ3VhZ2UtbWV0YWRhdGFcbiAgICAvLyBFQ01BU2NyaXB0IGVkaXRpb24gZG9lc24ndCBtYXR0ZXIgaW4gSlMuXG4gICAgW1wibGFuZy9qc1wiXSxcbiAgICAvLyBicm93c2VyIHZlbmRvciBhbmQgdmVyc2lvbi5cbiAgICBbXCJtZC9icm93c2VyXCIsIGAke3BhcnNlZFVBPy5icm93c2VyPy5uYW1lID8/IFwidW5rbm93blwifV8ke3BhcnNlZFVBPy5icm93c2VyPy52ZXJzaW9uID8/IFwidW5rbm93blwifWBdLFxuICBdO1xuXG4gIGlmIChzZXJ2aWNlSWQpIHtcbiAgICAvLyBhcGktbWV0YWRhdGFcbiAgICAvLyBzZXJ2aWNlIElkIG1heSBub3QgYXBwZWFyIGluIG5vbi1BV1MgY2xpZW50c1xuICAgIHNlY3Rpb25zLnB1c2goW2BhcGkvJHtzZXJ2aWNlSWR9YCwgY2xpZW50VmVyc2lvbl0pO1xuICB9XG5cbiAgcmV0dXJuIHNlY3Rpb25zO1xufTtcbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-sdk/util-utf8-browser/dist/es/index.js":
/*!***************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/util-utf8-browser/dist/es/index.js ***!
  \***************************************************************************************************/
/*! exports provided: fromUtf8, toUtf8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromUtf8", function() { return fromUtf8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUtf8", function() { return toUtf8; });
/* harmony import */ var _pureJs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pureJs */ "../../node_modules/@aws-sdk/util-utf8-browser/dist/es/pureJs.js");
/* harmony import */ var _whatwgEncodingApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./whatwgEncodingApi */ "../../node_modules/@aws-sdk/util-utf8-browser/dist/es/whatwgEncodingApi.js");


var fromUtf8 = function (input) {
    return typeof TextEncoder === "function" ? Object(_whatwgEncodingApi__WEBPACK_IMPORTED_MODULE_1__["fromUtf8"])(input) : Object(_pureJs__WEBPACK_IMPORTED_MODULE_0__["fromUtf8"])(input);
};
var toUtf8 = function (input) {
    return typeof TextDecoder === "function" ? Object(_whatwgEncodingApi__WEBPACK_IMPORTED_MODULE_1__["toUtf8"])(input) : Object(_pureJs__WEBPACK_IMPORTED_MODULE_0__["toUtf8"])(input);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsSUFBSSxVQUFVLEVBQUUsTUFBTSxJQUFJLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN0RSxPQUFPLEVBQUUsUUFBUSxJQUFJLG1CQUFtQixFQUFFLE1BQU0sSUFBSSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBS25HLE1BQU0sQ0FBQyxJQUFNLFFBQVEsR0FBRyxVQUFDLEtBQWE7SUFDcEMsT0FBQSxPQUFPLFdBQVcsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO0FBQWxGLENBQWtGLENBQUM7QUFFckYsTUFBTSxDQUFDLElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBaUI7SUFDdEMsT0FBQSxPQUFPLFdBQVcsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO0FBQTlFLENBQThFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmcm9tVXRmOCBhcyBqc0Zyb21VdGY4LCB0b1V0ZjggYXMganNUb1V0ZjggfSBmcm9tIFwiLi9wdXJlSnNcIjtcbmltcG9ydCB7IGZyb21VdGY4IGFzIHRleHRFbmNvZGVyRnJvbVV0ZjgsIHRvVXRmOCBhcyB0ZXh0RW5jb2RlclRvVXRmOCB9IGZyb20gXCIuL3doYXR3Z0VuY29kaW5nQXBpXCI7XG5cbmRlY2xhcmUgY29uc3QgVGV4dERlY29kZXI6IEZ1bmN0aW9uIHwgdW5kZWZpbmVkO1xuZGVjbGFyZSBjb25zdCBUZXh0RW5jb2RlcjogRnVuY3Rpb24gfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCBjb25zdCBmcm9tVXRmOCA9IChpbnB1dDogc3RyaW5nKTogVWludDhBcnJheSA9PlxuICB0eXBlb2YgVGV4dEVuY29kZXIgPT09IFwiZnVuY3Rpb25cIiA/IHRleHRFbmNvZGVyRnJvbVV0ZjgoaW5wdXQpIDoganNGcm9tVXRmOChpbnB1dCk7XG5cbmV4cG9ydCBjb25zdCB0b1V0ZjggPSAoaW5wdXQ6IFVpbnQ4QXJyYXkpOiBzdHJpbmcgPT5cbiAgdHlwZW9mIFRleHREZWNvZGVyID09PSBcImZ1bmN0aW9uXCIgPyB0ZXh0RW5jb2RlclRvVXRmOChpbnB1dCkgOiBqc1RvVXRmOChpbnB1dCk7XG4iXX0=

/***/ }),

/***/ "../../node_modules/@aws-sdk/util-utf8-browser/dist/es/pureJs.js":
/*!****************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/util-utf8-browser/dist/es/pureJs.js ***!
  \****************************************************************************************************/
/*! exports provided: fromUtf8, toUtf8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromUtf8", function() { return fromUtf8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUtf8", function() { return toUtf8; });
/**
 * Converts a JS string from its native UCS-2/UTF-16 representation into a
 * Uint8Array of the bytes used to represent the equivalent characters in UTF-8.
 *
 * Cribbed from the `goog.crypt.stringToUtf8ByteArray` function in the Google
 * Closure library, though updated to use typed arrays.
 */
var fromUtf8 = function (input) {
    var bytes = [];
    for (var i = 0, len = input.length; i < len; i++) {
        var value = input.charCodeAt(i);
        if (value < 0x80) {
            bytes.push(value);
        }
        else if (value < 0x800) {
            bytes.push((value >> 6) | 192, (value & 63) | 128);
        }
        else if (i + 1 < input.length && (value & 0xfc00) === 0xd800 && (input.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            var surrogatePair = 0x10000 + ((value & 1023) << 10) + (input.charCodeAt(++i) & 1023);
            bytes.push((surrogatePair >> 18) | 240, ((surrogatePair >> 12) & 63) | 128, ((surrogatePair >> 6) & 63) | 128, (surrogatePair & 63) | 128);
        }
        else {
            bytes.push((value >> 12) | 224, ((value >> 6) & 63) | 128, (value & 63) | 128);
        }
    }
    return Uint8Array.from(bytes);
};
/**
 * Converts a typed array of bytes containing UTF-8 data into a native JS
 * string.
 *
 * Partly cribbed from the `goog.crypt.utf8ByteArrayToString` function in the
 * Google Closure library, though updated to use typed arrays and to better
 * handle astral plane code points.
 */
var toUtf8 = function (input) {
    var decoded = "";
    for (var i = 0, len = input.length; i < len; i++) {
        var byte = input[i];
        if (byte < 0x80) {
            decoded += String.fromCharCode(byte);
        }
        else if (192 <= byte && byte < 224) {
            var nextByte = input[++i];
            decoded += String.fromCharCode(((byte & 31) << 6) | (nextByte & 63));
        }
        else if (240 <= byte && byte < 365) {
            var surrogatePair = [byte, input[++i], input[++i], input[++i]];
            var encoded = "%" + surrogatePair.map(function (byteValue) { return byteValue.toString(16); }).join("%");
            decoded += decodeURIComponent(encoded);
        }
        else {
            decoded += String.fromCharCode(((byte & 15) << 12) | ((input[++i] & 63) << 6) | (input[++i] & 63));
        }
    }
    return decoded;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVyZUpzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3B1cmVKcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxNQUFNLENBQUMsSUFBTSxRQUFRLEdBQUcsVUFBQyxLQUFhO0lBQ3BDLElBQU0sS0FBSyxHQUFrQixFQUFFLENBQUM7SUFDaEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNoRCxJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksS0FBSyxHQUFHLElBQUksRUFBRTtZQUNoQixLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25CO2FBQU0sSUFBSSxLQUFLLEdBQUcsS0FBSyxFQUFFO1lBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBVSxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQVEsQ0FBQyxHQUFHLEdBQVUsQ0FBQyxDQUFDO1NBQ3hFO2FBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssTUFBTSxFQUFFO1lBQy9HLElBQU0sYUFBYSxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQVksQ0FBQyxDQUFDO1lBQ3hHLEtBQUssQ0FBQyxJQUFJLENBQ1IsQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDLEdBQUcsR0FBVSxFQUNsQyxDQUFDLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQVEsQ0FBQyxHQUFHLEdBQVUsRUFDL0MsQ0FBQyxDQUFDLGFBQWEsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFRLENBQUMsR0FBRyxHQUFVLEVBQzlDLENBQUMsYUFBYSxHQUFHLEVBQVEsQ0FBQyxHQUFHLEdBQVUsQ0FDeEMsQ0FBQztTQUNIO2FBQU07WUFDTCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEdBQVUsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQVEsQ0FBQyxHQUFHLEdBQVUsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFRLENBQUMsR0FBRyxHQUFVLENBQUMsQ0FBQztTQUNqSDtLQUNGO0lBRUQsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hDLENBQUMsQ0FBQztBQUVGOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLENBQUMsSUFBTSxNQUFNLEdBQUcsVUFBQyxLQUFpQjtJQUN0QyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDakIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNoRCxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxFQUFFO1lBQ2YsT0FBTyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEM7YUFBTSxJQUFJLEdBQVUsSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEdBQVUsRUFBRTtZQUNsRCxJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM1QixPQUFPLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLEVBQVEsQ0FBQyxDQUFDLENBQUM7U0FDakY7YUFBTSxJQUFJLEdBQVUsSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEdBQVcsRUFBRTtZQUNuRCxJQUFNLGFBQWEsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLElBQU0sT0FBTyxHQUFHLEdBQUcsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLFVBQUMsU0FBUyxJQUFLLE9BQUEsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6RixPQUFPLElBQUksa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEM7YUFBTTtZQUNMLE9BQU8sSUFBSSxNQUFNLENBQUMsWUFBWSxDQUM1QixDQUFDLENBQUMsSUFBSSxHQUFHLEVBQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQVEsQ0FBQyxDQUNuRixDQUFDO1NBQ0g7S0FDRjtJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29udmVydHMgYSBKUyBzdHJpbmcgZnJvbSBpdHMgbmF0aXZlIFVDUy0yL1VURi0xNiByZXByZXNlbnRhdGlvbiBpbnRvIGFcbiAqIFVpbnQ4QXJyYXkgb2YgdGhlIGJ5dGVzIHVzZWQgdG8gcmVwcmVzZW50IHRoZSBlcXVpdmFsZW50IGNoYXJhY3RlcnMgaW4gVVRGLTguXG4gKlxuICogQ3JpYmJlZCBmcm9tIHRoZSBgZ29vZy5jcnlwdC5zdHJpbmdUb1V0ZjhCeXRlQXJyYXlgIGZ1bmN0aW9uIGluIHRoZSBHb29nbGVcbiAqIENsb3N1cmUgbGlicmFyeSwgdGhvdWdoIHVwZGF0ZWQgdG8gdXNlIHR5cGVkIGFycmF5cy5cbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21VdGY4ID0gKGlucHV0OiBzdHJpbmcpOiBVaW50OEFycmF5ID0+IHtcbiAgY29uc3QgYnl0ZXM6IEFycmF5PG51bWJlcj4gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGlucHV0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgdmFsdWUgPSBpbnB1dC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmICh2YWx1ZSA8IDB4ODApIHtcbiAgICAgIGJ5dGVzLnB1c2godmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPCAweDgwMCkge1xuICAgICAgYnl0ZXMucHVzaCgodmFsdWUgPj4gNikgfCAwYjExMDAwMDAwLCAodmFsdWUgJiAwYjExMTExMSkgfCAwYjEwMDAwMDAwKTtcbiAgICB9IGVsc2UgaWYgKGkgKyAxIDwgaW5wdXQubGVuZ3RoICYmICh2YWx1ZSAmIDB4ZmMwMCkgPT09IDB4ZDgwMCAmJiAoaW5wdXQuY2hhckNvZGVBdChpICsgMSkgJiAweGZjMDApID09PSAweGRjMDApIHtcbiAgICAgIGNvbnN0IHN1cnJvZ2F0ZVBhaXIgPSAweDEwMDAwICsgKCh2YWx1ZSAmIDBiMTExMTExMTExMSkgPDwgMTApICsgKGlucHV0LmNoYXJDb2RlQXQoKytpKSAmIDBiMTExMTExMTExMSk7XG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICAoc3Vycm9nYXRlUGFpciA+PiAxOCkgfCAwYjExMTEwMDAwLFxuICAgICAgICAoKHN1cnJvZ2F0ZVBhaXIgPj4gMTIpICYgMGIxMTExMTEpIHwgMGIxMDAwMDAwMCxcbiAgICAgICAgKChzdXJyb2dhdGVQYWlyID4+IDYpICYgMGIxMTExMTEpIHwgMGIxMDAwMDAwMCxcbiAgICAgICAgKHN1cnJvZ2F0ZVBhaXIgJiAwYjExMTExMSkgfCAwYjEwMDAwMDAwXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBieXRlcy5wdXNoKCh2YWx1ZSA+PiAxMikgfCAwYjExMTAwMDAwLCAoKHZhbHVlID4+IDYpICYgMGIxMTExMTEpIHwgMGIxMDAwMDAwMCwgKHZhbHVlICYgMGIxMTExMTEpIHwgMGIxMDAwMDAwMCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFVpbnQ4QXJyYXkuZnJvbShieXRlcyk7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIGEgdHlwZWQgYXJyYXkgb2YgYnl0ZXMgY29udGFpbmluZyBVVEYtOCBkYXRhIGludG8gYSBuYXRpdmUgSlNcbiAqIHN0cmluZy5cbiAqXG4gKiBQYXJ0bHkgY3JpYmJlZCBmcm9tIHRoZSBgZ29vZy5jcnlwdC51dGY4Qnl0ZUFycmF5VG9TdHJpbmdgIGZ1bmN0aW9uIGluIHRoZVxuICogR29vZ2xlIENsb3N1cmUgbGlicmFyeSwgdGhvdWdoIHVwZGF0ZWQgdG8gdXNlIHR5cGVkIGFycmF5cyBhbmQgdG8gYmV0dGVyXG4gKiBoYW5kbGUgYXN0cmFsIHBsYW5lIGNvZGUgcG9pbnRzLlxuICovXG5leHBvcnQgY29uc3QgdG9VdGY4ID0gKGlucHV0OiBVaW50OEFycmF5KTogc3RyaW5nID0+IHtcbiAgbGV0IGRlY29kZWQgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0gaW5wdXQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBieXRlID0gaW5wdXRbaV07XG4gICAgaWYgKGJ5dGUgPCAweDgwKSB7XG4gICAgICBkZWNvZGVkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZSk7XG4gICAgfSBlbHNlIGlmICgwYjExMDAwMDAwIDw9IGJ5dGUgJiYgYnl0ZSA8IDBiMTExMDAwMDApIHtcbiAgICAgIGNvbnN0IG5leHRCeXRlID0gaW5wdXRbKytpXTtcbiAgICAgIGRlY29kZWQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGJ5dGUgJiAwYjExMTExKSA8PCA2KSB8IChuZXh0Qnl0ZSAmIDBiMTExMTExKSk7XG4gICAgfSBlbHNlIGlmICgwYjExMTEwMDAwIDw9IGJ5dGUgJiYgYnl0ZSA8IDBiMTAxMTAxMTAxKSB7XG4gICAgICBjb25zdCBzdXJyb2dhdGVQYWlyID0gW2J5dGUsIGlucHV0WysraV0sIGlucHV0WysraV0sIGlucHV0WysraV1dO1xuICAgICAgY29uc3QgZW5jb2RlZCA9IFwiJVwiICsgc3Vycm9nYXRlUGFpci5tYXAoKGJ5dGVWYWx1ZSkgPT4gYnl0ZVZhbHVlLnRvU3RyaW5nKDE2KSkuam9pbihcIiVcIik7XG4gICAgICBkZWNvZGVkICs9IGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVjb2RlZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKFxuICAgICAgICAoKGJ5dGUgJiAwYjExMTEpIDw8IDEyKSB8ICgoaW5wdXRbKytpXSAmIDBiMTExMTExKSA8PCA2KSB8IChpbnB1dFsrK2ldICYgMGIxMTExMTEpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZWNvZGVkO1xufTtcbiJdfQ==

/***/ }),

/***/ "../../node_modules/@aws-sdk/util-utf8-browser/dist/es/whatwgEncodingApi.js":
/*!***************************************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/@aws-sdk/util-utf8-browser/dist/es/whatwgEncodingApi.js ***!
  \***************************************************************************************************************/
/*! exports provided: fromUtf8, toUtf8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromUtf8", function() { return fromUtf8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUtf8", function() { return toUtf8; });
function fromUtf8(input) {
    return new TextEncoder().encode(input);
}
function toUtf8(input) {
    return new TextDecoder("utf-8").decode(input);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2hhdHdnRW5jb2RpbmdBcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvd2hhdHdnRW5jb2RpbmdBcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUNBLE1BQU0sVUFBVSxRQUFRLENBQUMsS0FBYTtJQUNwQyxPQUFPLElBQUksV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3pDLENBQUM7QUFFRCxNQUFNLFVBQVUsTUFBTSxDQUFDLEtBQWlCO0lBQ3RDLE9BQU8sSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgZGVjbGFyYXRpb24gb2YgdGhlIGdsb2JhbCBUZXh0RW5jb2RlciBhbmQgVGV4dERlY29kZXIgY29uc3RydWN0b3JzLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9lbmNvZGluZy5zcGVjLndoYXR3Zy5vcmcvXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbmFtZXNwYWNlXG5uYW1lc3BhY2UgRW5jb2Rpbmcge1xuICBpbnRlcmZhY2UgVGV4dERlY29kZXJPcHRpb25zIHtcbiAgICBmYXRhbD86IGJvb2xlYW47XG4gICAgaWdub3JlQk9NPzogYm9vbGVhbjtcbiAgfVxuXG4gIGludGVyZmFjZSBUZXh0RGVjb2RlT3B0aW9ucyB7XG4gICAgc3RyZWFtPzogYm9vbGVhbjtcbiAgfVxuXG4gIGludGVyZmFjZSBUZXh0RGVjb2RlciB7XG4gICAgcmVhZG9ubHkgZW5jb2Rpbmc6IHN0cmluZztcbiAgICByZWFkb25seSBmYXRhbDogYm9vbGVhbjtcbiAgICByZWFkb25seSBpZ25vcmVCT006IGJvb2xlYW47XG4gICAgZGVjb2RlKGlucHV0PzogQXJyYXlCdWZmZXIgfCBBcnJheUJ1ZmZlclZpZXcsIG9wdGlvbnM/OiBUZXh0RGVjb2RlT3B0aW9ucyk6IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgVGV4dERlY29kZXJDb25zdHJ1Y3RvciB7XG4gICAgbmV3IChsYWJlbD86IHN0cmluZywgb3B0aW9ucz86IFRleHREZWNvZGVyT3B0aW9ucyk6IFRleHREZWNvZGVyO1xuICB9XG5cbiAgaW50ZXJmYWNlIFRleHRFbmNvZGVyIHtcbiAgICByZWFkb25seSBlbmNvZGluZzogXCJ1dGYtOFwiO1xuICAgIGVuY29kZShpbnB1dD86IHN0cmluZyk6IFVpbnQ4QXJyYXk7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIFRleHRFbmNvZGVyQ29uc3RydWN0b3Ige1xuICAgIG5ldyAoKTogVGV4dEVuY29kZXI7XG4gIH1cbn1cblxuZGVjbGFyZSBjb25zdCBUZXh0RGVjb2RlcjogRW5jb2RpbmcuVGV4dERlY29kZXJDb25zdHJ1Y3RvcjtcblxuZGVjbGFyZSBjb25zdCBUZXh0RW5jb2RlcjogRW5jb2RpbmcuVGV4dEVuY29kZXJDb25zdHJ1Y3RvcjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21VdGY4KGlucHV0OiBzdHJpbmcpOiBVaW50OEFycmF5IHtcbiAgcmV0dXJuIG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShpbnB1dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1V0ZjgoaW5wdXQ6IFVpbnQ4QXJyYXkpOiBzdHJpbmcge1xuICByZXR1cm4gbmV3IFRleHREZWNvZGVyKFwidXRmLThcIikuZGVjb2RlKGlucHV0KTtcbn1cbiJdfQ==

/***/ }),

/***/ "../../node_modules/base64-js/index.js":
/*!**************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/base64-js/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "../../node_modules/bowser/es5.js":
/*!*********************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/bowser/es5.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=90)}({17:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=r(18),i=function(){function e(){}return e.getFirstMatch=function(e,t){var r=t.match(e);return r&&r.length>0&&r[1]||""},e.getSecondMatch=function(e,t){var r=t.match(e);return r&&r.length>1&&r[2]||""},e.matchAndReturnConst=function(e,t,r){if(e.test(t))return r},e.getWindowsVersionName=function(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},e.getMacOSVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),10===t[0])switch(t[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}},e.getAndroidVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),!(1===t[0]&&t[1]<5))return 1===t[0]&&t[1]<6?"Cupcake":1===t[0]&&t[1]>=6?"Donut":2===t[0]&&t[1]<2?"Eclair":2===t[0]&&2===t[1]?"Froyo":2===t[0]&&t[1]>2?"Gingerbread":3===t[0]?"Honeycomb":4===t[0]&&t[1]<1?"Ice Cream Sandwich":4===t[0]&&t[1]<4?"Jelly Bean":4===t[0]&&t[1]>=4?"KitKat":5===t[0]?"Lollipop":6===t[0]?"Marshmallow":7===t[0]?"Nougat":8===t[0]?"Oreo":9===t[0]?"Pie":void 0},e.getVersionPrecision=function(e){return e.split(".").length},e.compareVersions=function(t,r,n){void 0===n&&(n=!1);var i=e.getVersionPrecision(t),s=e.getVersionPrecision(r),a=Math.max(i,s),o=0,u=e.map([t,r],(function(t){var r=a-e.getVersionPrecision(t),n=t+new Array(r+1).join(".0");return e.map(n.split("."),(function(e){return new Array(20-e.length).join("0")+e})).reverse()}));for(n&&(o=a-Math.min(i,s)),a-=1;a>=o;){if(u[0][a]>u[1][a])return 1;if(u[0][a]===u[1][a]){if(a===o)return 0;a-=1}else if(u[0][a]<u[1][a])return-1}},e.map=function(e,t){var r,n=[];if(Array.prototype.map)return Array.prototype.map.call(e,t);for(r=0;r<e.length;r+=1)n.push(t(e[r]));return n},e.find=function(e,t){var r,n;if(Array.prototype.find)return Array.prototype.find.call(e,t);for(r=0,n=e.length;r<n;r+=1){var i=e[r];if(t(i,r))return i}},e.assign=function(e){for(var t,r,n=e,i=arguments.length,s=new Array(i>1?i-1:0),a=1;a<i;a++)s[a-1]=arguments[a];if(Object.assign)return Object.assign.apply(Object,[e].concat(s));var o=function(){var e=s[t];"object"==typeof e&&null!==e&&Object.keys(e).forEach((function(t){n[t]=e[t]}))};for(t=0,r=s.length;t<r;t+=1)o();return e},e.getBrowserAlias=function(e){return n.BROWSER_ALIASES_MAP[e]},e.getBrowserTypeByAlias=function(e){return n.BROWSER_MAP[e]||""},e}();t.default=i,e.exports=t.default},18:function(e,t,r){"use strict";t.__esModule=!0,t.ENGINE_MAP=t.OS_MAP=t.PLATFORMS_MAP=t.BROWSER_MAP=t.BROWSER_ALIASES_MAP=void 0;t.BROWSER_ALIASES_MAP={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"};t.BROWSER_MAP={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"};t.PLATFORMS_MAP={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"};t.OS_MAP={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"};t.ENGINE_MAP={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"}},90:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(91))&&n.__esModule?n:{default:n},s=r(18);function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(){}var t,r,n;return e.getParser=function(e,t){if(void 0===t&&(t=!1),"string"!=typeof e)throw new Error("UserAgent should be a string");return new i.default(e,t)},e.parse=function(e){return new i.default(e).getResult()},t=e,n=[{key:"BROWSER_MAP",get:function(){return s.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return s.ENGINE_MAP}},{key:"OS_MAP",get:function(){return s.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return s.PLATFORMS_MAP}}],(r=null)&&a(t.prototype,r),n&&a(t,n),e}();t.default=o,e.exports=t.default},91:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=u(r(92)),i=u(r(93)),s=u(r(94)),a=u(r(95)),o=u(r(17));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(){function e(e,t){if(void 0===t&&(t=!1),null==e||""===e)throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},!0!==t&&this.parse()}var t=e.prototype;return t.getUA=function(){return this._ua},t.test=function(e){return e.test(this._ua)},t.parseBrowser=function(){var e=this;this.parsedResult.browser={};var t=o.default.find(n.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser},t.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},t.getBrowserName=function(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},t.getBrowserVersion=function(){return this.getBrowser().version},t.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},t.parseOS=function(){var e=this;this.parsedResult.os={};var t=o.default.find(i.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os},t.getOSName=function(e){var t=this.getOS().name;return e?String(t).toLowerCase()||"":t||""},t.getOSVersion=function(){return this.getOS().version},t.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},t.getPlatformType=function(e){void 0===e&&(e=!1);var t=this.getPlatform().type;return e?String(t).toLowerCase()||"":t||""},t.parsePlatform=function(){var e=this;this.parsedResult.platform={};var t=o.default.find(s.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform},t.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},t.getEngineName=function(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},t.parseEngine=function(){var e=this;this.parsedResult.engine={};var t=o.default.find(a.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine},t.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},t.getResult=function(){return o.default.assign({},this.parsedResult)},t.satisfies=function(e){var t=this,r={},n=0,i={},s=0;if(Object.keys(e).forEach((function(t){var a=e[t];"string"==typeof a?(i[t]=a,s+=1):"object"==typeof a&&(r[t]=a,n+=1)})),n>0){var a=Object.keys(r),u=o.default.find(a,(function(e){return t.isOS(e)}));if(u){var d=this.satisfies(r[u]);if(void 0!==d)return d}var c=o.default.find(a,(function(e){return t.isPlatform(e)}));if(c){var f=this.satisfies(r[c]);if(void 0!==f)return f}}if(s>0){var l=Object.keys(i),h=o.default.find(l,(function(e){return t.isBrowser(e,!0)}));if(void 0!==h)return this.compareVersion(i[h])}},t.isBrowser=function(e,t){void 0===t&&(t=!1);var r=this.getBrowserName().toLowerCase(),n=e.toLowerCase(),i=o.default.getBrowserTypeByAlias(n);return t&&i&&(n=i.toLowerCase()),n===r},t.compareVersion=function(e){var t=[0],r=e,n=!1,i=this.getBrowserVersion();if("string"==typeof i)return">"===e[0]||"<"===e[0]?(r=e.substr(1),"="===e[1]?(n=!0,r=e.substr(2)):t=[],">"===e[0]?t.push(1):t.push(-1)):"="===e[0]?r=e.substr(1):"~"===e[0]&&(n=!0,r=e.substr(1)),t.indexOf(o.default.compareVersions(i,r,n))>-1},t.isOS=function(e){return this.getOSName(!0)===String(e).toLowerCase()},t.isPlatform=function(e){return this.getPlatformType(!0)===String(e).toLowerCase()},t.isEngine=function(e){return this.getEngineName(!0)===String(e).toLowerCase()},t.is=function(e,t){return void 0===t&&(t=!1),this.isBrowser(e,t)||this.isOS(e)||this.isPlatform(e)},t.some=function(e){var t=this;return void 0===e&&(e=[]),e.some((function(e){return t.is(e)}))},e}();t.default=d,e.exports=t.default},92:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n};var s=/version\/(\d+(\.?_?\d+)+)/i,a=[{test:[/googlebot/i],describe:function(e){var t={name:"Googlebot"},r=i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/opera/i],describe:function(e){var t={name:"Opera"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opr\/|opios/i],describe:function(e){var t={name:"Opera"},r=i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/SamsungBrowser/i],describe:function(e){var t={name:"Samsung Internet for Android"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Whale/i],describe:function(e){var t={name:"NAVER Whale Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MZBrowser/i],describe:function(e){var t={name:"MZ Browser"},r=i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/focus/i],describe:function(e){var t={name:"Focus"},r=i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/swing/i],describe:function(e){var t={name:"Swing"},r=i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/coast/i],describe:function(e){var t={name:"Opera Coast"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function(e){var t={name:"Opera Touch"},r=i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/yabrowser/i],describe:function(e){var t={name:"Yandex Browser"},r=i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/ucbrowser/i],describe:function(e){var t={name:"UC Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Maxthon|mxios/i],describe:function(e){var t={name:"Maxthon"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/epiphany/i],describe:function(e){var t={name:"Epiphany"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/puffin/i],describe:function(e){var t={name:"Puffin"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sleipnir/i],describe:function(e){var t={name:"Sleipnir"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/k-meleon/i],describe:function(e){var t={name:"K-Meleon"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/micromessenger/i],describe:function(e){var t={name:"WeChat"},r=i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qqbrowser/i],describe:function(e){var t={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},r=i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/msie|trident/i],describe:function(e){var t={name:"Internet Explorer"},r=i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/\sedg\//i],describe:function(e){var t={name:"Microsoft Edge"},r=i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/edg([ea]|ios)/i],describe:function(e){var t={name:"Microsoft Edge"},r=i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/vivaldi/i],describe:function(e){var t={name:"Vivaldi"},r=i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/seamonkey/i],describe:function(e){var t={name:"SeaMonkey"},r=i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sailfish/i],describe:function(e){var t={name:"Sailfish"},r=i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return r&&(t.version=r),t}},{test:[/silk/i],describe:function(e){var t={name:"Amazon Silk"},r=i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/phantom/i],describe:function(e){var t={name:"PhantomJS"},r=i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/slimerjs/i],describe:function(e){var t={name:"SlimerJS"},r=i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t={name:"BlackBerry"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t={name:"WebOS Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/bada/i],describe:function(e){var t={name:"Bada"},r=i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/tizen/i],describe:function(e){var t={name:"Tizen"},r=i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qupzilla/i],describe:function(e){var t={name:"QupZilla"},r=i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/firefox|iceweasel|fxios/i],describe:function(e){var t={name:"Firefox"},r=i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/electron/i],describe:function(e){var t={name:"Electron"},r=i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MiuiBrowser/i],describe:function(e){var t={name:"Miui"},r=i.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/chromium/i],describe:function(e){var t={name:"Chromium"},r=i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/chrome|crios|crmo/i],describe:function(e){var t={name:"Chrome"},r=i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/GSA/i],describe:function(e){var t={name:"Google Search"},r=i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t={name:"Android Browser"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/playstation 4/i],describe:function(e){var t={name:"PlayStation 4"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/safari|applewebkit/i],describe:function(e){var t={name:"Safari"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/.*/i],describe:function(e){var t=-1!==e.search("\\(")?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:i.default.getFirstMatch(t,e),version:i.default.getSecondMatch(t,e)}}}];t.default=a,e.exports=t.default},93:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:[/Roku\/DVP/],describe:function(e){var t=i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e);return{name:s.OS_MAP.Roku,version:t}}},{test:[/windows phone/i],describe:function(e){var t=i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.WindowsPhone,version:t}}},{test:[/windows /i],describe:function(e){var t=i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),r=i.default.getWindowsVersionName(t);return{name:s.OS_MAP.Windows,version:t,versionName:r}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(e){var t={name:s.OS_MAP.iOS},r=i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,e);return r&&(t.version=r),t}},{test:[/macintosh/i],describe:function(e){var t=i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),r=i.default.getMacOSVersionName(t),n={name:s.OS_MAP.MacOS,version:t};return r&&(n.versionName=r),n}},{test:[/(ipod|iphone|ipad)/i],describe:function(e){var t=i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:s.OS_MAP.iOS,version:t}}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t=i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),r=i.default.getAndroidVersionName(t),n={name:s.OS_MAP.Android,version:t};return r&&(n.versionName=r),n}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t=i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),r={name:s.OS_MAP.WebOS};return t&&t.length&&(r.version=t),r}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t=i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||i.default.getFirstMatch(/\bbb(\d+)/i,e);return{name:s.OS_MAP.BlackBerry,version:t}}},{test:[/bada/i],describe:function(e){var t=i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.Bada,version:t}}},{test:[/tizen/i],describe:function(e){var t=i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.Tizen,version:t}}},{test:[/linux/i],describe:function(){return{name:s.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:s.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(e){var t=i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.PlayStation4,version:t}}}];t.default=a,e.exports=t.default},94:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:[/googlebot/i],describe:function(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe:function(e){var t=i.default.getFirstMatch(/(can-l01)/i,e)&&"Nova",r={type:s.PLATFORMS_MAP.mobile,vendor:"Huawei"};return t&&(r.model=t),r}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){var t=e.test(/ipod|iphone/i),r=e.test(/like (ipod|iphone)/i);return t&&!r},describe:function(e){var t=i.default.getFirstMatch(/(ipod|iphone)/i,e);return{type:s.PLATFORMS_MAP.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"blackberry"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(e){return"bada"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"windows phone"===e.getBrowserName()},describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(e){var t=Number(String(e.getOSVersion()).split(".")[0]);return"android"===e.getOSName(!0)&&t>=3},describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){return"android"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"macos"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(e){return"windows"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return"linux"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return"playstation 4"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.tv}}},{test:function(e){return"roku"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.tv}}}];t.default=a,e.exports=t.default},95:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:function(e){return"microsoft edge"===e.getBrowserName(!0)},describe:function(e){if(/\sedg\//i.test(e))return{name:s.ENGINE_MAP.Blink};var t=i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:s.ENGINE_MAP.EdgeHTML,version:t}}},{test:[/trident/i],describe:function(e){var t={name:s.ENGINE_MAP.Trident},r=i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){return e.test(/presto/i)},describe:function(e){var t={name:s.ENGINE_MAP.Presto},r=i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=e.test(/gecko/i),r=e.test(/like gecko/i);return t&&!r},describe:function(e){var t={name:s.ENGINE_MAP.Gecko},r=i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:s.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(e){var t={name:s.ENGINE_MAP.WebKit},r=i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}}];t.default=a,e.exports=t.default}})}));

/***/ }),

/***/ "../../node_modules/buffer/index.js":
/*!***********************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/buffer/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "../../node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "../../node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "../../node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/ieee754/index.js":
/*!************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/ieee754/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "../../node_modules/isarray/index.js":
/*!************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/isarray/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "../../node_modules/tslib/tslib.es6.js":
/*!**************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/tslib/tslib.es6.js ***!
  \**************************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "../../node_modules/uuid/index.js":
/*!*********************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/uuid/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(/*! ./v1 */ "../../node_modules/uuid/v1.js");
var v4 = __webpack_require__(/*! ./v4 */ "../../node_modules/uuid/v4.js");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ "../../node_modules/uuid/lib/bytesToUuid.js":
/*!*******************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/uuid/lib/bytesToUuid.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "../../node_modules/uuid/lib/rng-browser.js":
/*!*******************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/uuid/lib/rng-browser.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "../../node_modules/uuid/v1.js":
/*!******************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/uuid/v1.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "../../node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "../../node_modules/uuid/lib/bytesToUuid.js");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "../../node_modules/uuid/v4.js":
/*!******************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/uuid/v4.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "../../node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "../../node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./lib-esm/Interactions.js":
/*!*********************************!*\
  !*** ./lib-esm/Interactions.js ***!
  \*********************************/
/*! exports provided: InteractionsClass, Interactions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionsClass", function() { return InteractionsClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interactions", function() { return Interactions; });
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-amplify/core */ "@aws-amplify/core");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Providers */ "./lib-esm/Providers/index.js");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};



var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["ConsoleLogger"]('Interactions');

var InteractionsClass = function () {
  /**
   * Initialize PubSub with AWS configurations
   *
   * @param {InteractionsOptions} options - Configuration object for Interactions
   */
  function InteractionsClass(options) {
    this._options = options;
    logger.debug('Interactions Options', this._options);
    this._pluggables = {};
  }

  InteractionsClass.prototype.getModuleName = function () {
    return 'Interactions';
  };
  /**
   *
   * @param {InteractionsOptions} options - Configuration object for Interactions
   * @return {Object} - The current configuration
   */


  InteractionsClass.prototype.configure = function (options) {
    var _this = this;

    var opt = options ? options.Interactions || options : {};
    logger.debug('configure Interactions', {
      opt: opt
    });
    this._options = __assign(__assign({
      bots: {}
    }, opt), opt.Interactions);
    var aws_bots_config = this._options.aws_bots_config;
    var bots_config = this._options.bots;

    if (!Object.keys(bots_config).length && aws_bots_config) {
      // Convert aws_bots_config to bots object
      if (Array.isArray(aws_bots_config)) {
        aws_bots_config.forEach(function (bot) {
          _this._options.bots[bot.name] = bot;
        });
      }
    } // Check if AWSLex provider is already on pluggables


    if (!this._pluggables.AWSLexProvider && bots_config && Object.keys(bots_config).map(function (key) {
      return bots_config[key];
    }).find(function (bot) {
      return !bot.providerName || bot.providerName === 'AWSLexProvider';
    })) {
      this._pluggables.AWSLexProvider = new _Providers__WEBPACK_IMPORTED_MODULE_1__["AWSLexProvider"]();
    }

    Object.keys(this._pluggables).map(function (key) {
      _this._pluggables[key].configure(_this._options.bots);
    });
    return this._options;
  };

  InteractionsClass.prototype.addPluggable = function (pluggable) {
    if (pluggable && pluggable.getCategory() === 'Interactions') {
      if (!this._pluggables[pluggable.getProviderName()]) {
        pluggable.configure(this._options.bots);
        this._pluggables[pluggable.getProviderName()] = pluggable;
        return;
      } else {
        throw new Error('Bot ' + pluggable.getProviderName() + ' already plugged');
      }
    }
  };

  InteractionsClass.prototype.send = function (botname, message) {
    return __awaiter(this, void 0, void 0, function () {
      var botProvider;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!this._options.bots || !this._options.bots[botname]) {
              throw new Error('Bot ' + botname + ' does not exist');
            }

            botProvider = this._options.bots[botname].providerName || 'AWSLexProvider';

            if (!this._pluggables[botProvider]) {
              throw new Error('Bot ' + botProvider + ' does not have valid pluggin did you try addPluggable first?');
            }

            return [4
            /*yield*/
            , this._pluggables[botProvider].sendMessage(botname, message)];

          case 1:
            return [2
            /*return*/
            , _a.sent()];
        }
      });
    });
  };

  InteractionsClass.prototype.onComplete = function (botname, callback) {
    if (!this._options.bots || !this._options.bots[botname]) {
      throw new Error('Bot ' + botname + ' does not exist');
    }

    var botProvider = this._options.bots[botname].providerName || 'AWSLexProvider';

    if (!this._pluggables[botProvider]) {
      throw new Error('Bot ' + botProvider + ' does not have valid pluggin did you try addPluggable first?');
    }

    this._pluggables[botProvider].onComplete(botname, callback);
  };

  return InteractionsClass;
}();


var Interactions = new InteractionsClass(null);
_aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["Amplify"].register(Interactions);

/***/ }),

/***/ "./lib-esm/Providers/AWSLexProvider.js":
/*!*********************************************!*\
  !*** ./lib-esm/Providers/AWSLexProvider.js ***!
  \*********************************************/
/*! exports provided: AWSLexProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AWSLexProvider", function() { return AWSLexProvider; });
/* harmony import */ var _InteractionsProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InteractionsProvider */ "./lib-esm/Providers/InteractionsProvider.js");
/* harmony import */ var _aws_sdk_client_lex_runtime_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/client-lex-runtime-service */ "../../node_modules/@aws-sdk/client-lex-runtime-service/dist/es/index.js");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/core */ "@aws-amplify/core");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AWSLexProviderHelper_convert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AWSLexProviderHelper/convert */ "./lib-esm/Providers/AWSLexProviderHelper/convert.js");
/*
 * Copyright 2017-2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};





var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_2__["ConsoleLogger"]('AWSLexProvider');

var AWSLexProvider = function (_super) {
  __extends(AWSLexProvider, _super);

  function AWSLexProvider(options) {
    if (options === void 0) {
      options = {};
    }

    var _this = _super.call(this, options) || this;

    _this._botsCompleteCallback = {};
    return _this;
  }

  AWSLexProvider.prototype.getProviderName = function () {
    return 'AWSLexProvider';
  };

  AWSLexProvider.prototype.reportBotStatus = function (data, botname) {
    var _this = this; // Check if state is fulfilled to resolve onFullfilment promise


    logger.debug('postContent state', data.dialogState);

    if (data.dialogState === 'ReadyForFulfillment' || data.dialogState === 'Fulfilled') {
      if (typeof this._botsCompleteCallback[botname] === 'function') {
        setTimeout(function () {
          return _this._botsCompleteCallback[botname](null, {
            slots: data.slots
          });
        }, 0);
      }

      if (this._config && typeof this._config[botname].onComplete === 'function') {
        setTimeout(function () {
          return _this._config[botname].onComplete(null, {
            slots: data.slots
          });
        }, 0);
      }
    }

    if (data.dialogState === 'Failed') {
      if (typeof this._botsCompleteCallback[botname] === 'function') {
        setTimeout(function () {
          return _this._botsCompleteCallback[botname]('Bot conversation failed');
        }, 0);
      }

      if (this._config && typeof this._config[botname].onComplete === 'function') {
        setTimeout(function () {
          return _this._config[botname].onComplete('Bot conversation failed');
        }, 0);
      }
    }
  };

  AWSLexProvider.prototype.sendMessage = function (botname, message) {
    return __awaiter(this, void 0, void 0, function () {
      var credentials, params, postTextCommand, data, err_1, content, messageType, postContentCommand, data, audioArray, err_2;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!this._config[botname]) {
              return [2
              /*return*/
              , Promise.reject('Bot ' + botname + ' does not exist')];
            }

            return [4
            /*yield*/
            , _aws_amplify_core__WEBPACK_IMPORTED_MODULE_2__["Credentials"].get()];

          case 1:
            credentials = _a.sent();

            if (!credentials) {
              return [2
              /*return*/
              , Promise.reject('No credentials')];
            }

            this.lexRuntimeServiceClient = new _aws_sdk_client_lex_runtime_service__WEBPACK_IMPORTED_MODULE_1__["LexRuntimeServiceClient"]({
              region: this._config[botname].region,
              credentials: credentials,
              customUserAgent: Object(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_2__["getAmplifyUserAgent"])()
            });
            if (!(typeof message === 'string')) return [3
            /*break*/
            , 6];
            params = {
              botAlias: this._config[botname].alias,
              botName: botname,
              inputText: message,
              userId: credentials.identityId
            };
            logger.debug('postText to lex', message);
            _a.label = 2;

          case 2:
            _a.trys.push([2, 4,, 5]);

            postTextCommand = new _aws_sdk_client_lex_runtime_service__WEBPACK_IMPORTED_MODULE_1__["PostTextCommand"](params);
            return [4
            /*yield*/
            , this.lexRuntimeServiceClient.send(postTextCommand)];

          case 3:
            data = _a.sent();
            this.reportBotStatus(data, botname);
            return [2
            /*return*/
            , data];

          case 4:
            err_1 = _a.sent();
            return [2
            /*return*/
            , Promise.reject(err_1)];

          case 5:
            return [3
            /*break*/
            , 11];

          case 6:
            content = message.content, messageType = message.options.messageType;

            if (messageType === 'voice') {
              params = {
                botAlias: this._config[botname].alias,
                botName: botname,
                contentType: 'audio/x-l16; sample-rate=16000',
                inputStream: content,
                userId: credentials.identityId,
                accept: 'audio/mpeg'
              };
            } else {
              params = {
                botAlias: this._config[botname].alias,
                botName: botname,
                contentType: 'text/plain; charset=utf-8',
                inputStream: content,
                userId: credentials.identityId,
                accept: 'audio/mpeg'
              };
            }

            logger.debug('postContent to lex', message);
            _a.label = 7;

          case 7:
            _a.trys.push([7, 10,, 11]);

            postContentCommand = new _aws_sdk_client_lex_runtime_service__WEBPACK_IMPORTED_MODULE_1__["PostContentCommand"](params);
            return [4
            /*yield*/
            , this.lexRuntimeServiceClient.send(postContentCommand)];

          case 8:
            data = _a.sent();
            return [4
            /*yield*/
            , Object(_AWSLexProviderHelper_convert__WEBPACK_IMPORTED_MODULE_3__["convert"])(data.audioStream)];

          case 9:
            audioArray = _a.sent();
            this.reportBotStatus(data, botname);
            return [2
            /*return*/
            , __assign(__assign({}, data), {
              audioStream: audioArray
            })];

          case 10:
            err_2 = _a.sent();
            return [2
            /*return*/
            , Promise.reject(err_2)];

          case 11:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  AWSLexProvider.prototype.onComplete = function (botname, callback) {
    if (!this._config[botname]) {
      throw new ErrorEvent('Bot ' + botname + ' does not exist');
    }

    this._botsCompleteCallback[botname] = callback;
  };

  return AWSLexProvider;
}(_InteractionsProvider__WEBPACK_IMPORTED_MODULE_0__["AbstractInteractionsProvider"]);



/***/ }),

/***/ "./lib-esm/Providers/AWSLexProviderHelper/convert.js":
/*!***********************************************************!*\
  !*** ./lib-esm/Providers/AWSLexProviderHelper/convert.js ***!
  \***********************************************************/
/*! exports provided: convert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convert", function() { return convert; });
var convert = function convert(stream) {
  if (stream instanceof Blob || stream instanceof ReadableStream) {
    return new Response(stream).arrayBuffer().then(function (buffer) {
      return new Uint8Array(buffer);
    });
  } else {
    throw new Error('Readable is not supported.');
  }
};

/***/ }),

/***/ "./lib-esm/Providers/InteractionsProvider.js":
/*!***************************************************!*\
  !*** ./lib-esm/Providers/InteractionsProvider.js ***!
  \***************************************************/
/*! exports provided: AbstractInteractionsProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractInteractionsProvider", function() { return AbstractInteractionsProvider; });
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-amplify/core */ "@aws-amplify/core");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright 2017-2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};


var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["ConsoleLogger"]('AbstractInteractionsProvider');

var AbstractInteractionsProvider = function () {
  function AbstractInteractionsProvider(options) {
    if (options === void 0) {
      options = {};
    }

    this._config = options;
  }

  AbstractInteractionsProvider.prototype.configure = function (config) {
    if (config === void 0) {
      config = {};
    }

    this._config = __assign(__assign({}, this._config), config);
    logger.debug("configure " + this.getProviderName(), this._config);
    return this.options;
  };

  AbstractInteractionsProvider.prototype.getCategory = function () {
    return 'Interactions';
  };

  Object.defineProperty(AbstractInteractionsProvider.prototype, "options", {
    get: function get() {
      return __assign({}, this._config);
    },
    enumerable: true,
    configurable: true
  });
  return AbstractInteractionsProvider;
}();



/***/ }),

/***/ "./lib-esm/Providers/index.js":
/*!************************************!*\
  !*** ./lib-esm/Providers/index.js ***!
  \************************************/
/*! exports provided: AWSLexProvider, AbstractInteractionsProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AWSLexProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AWSLexProvider */ "./lib-esm/Providers/AWSLexProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AWSLexProvider", function() { return _AWSLexProvider__WEBPACK_IMPORTED_MODULE_0__["AWSLexProvider"]; });

/* harmony import */ var _InteractionsProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InteractionsProvider */ "./lib-esm/Providers/InteractionsProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractInteractionsProvider", function() { return _InteractionsProvider__WEBPACK_IMPORTED_MODULE_1__["AbstractInteractionsProvider"]; });

/*
 * Copyright 2017-2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */



/***/ }),

/***/ "./lib-esm/index.js":
/*!**************************!*\
  !*** ./lib-esm/index.js ***!
  \**************************/
/*! exports provided: default, AWSLexProvider, Interactions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Interactions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Interactions */ "./lib-esm/Interactions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Interactions", function() { return _Interactions__WEBPACK_IMPORTED_MODULE_0__["Interactions"]; });

/* harmony import */ var _Providers_AWSLexProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Providers/AWSLexProvider */ "./lib-esm/Providers/AWSLexProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AWSLexProvider", function() { return _Providers_AWSLexProvider__WEBPACK_IMPORTED_MODULE_1__["AWSLexProvider"]; });

/*
 * Copyright 2017-2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

/**
 * @deprecated use named import
 */

/* harmony default export */ __webpack_exports__["default"] = (_Interactions__WEBPACK_IMPORTED_MODULE_0__["Interactions"]);



/***/ }),

/***/ "@aws-amplify/core":
/*!************************************!*\
  !*** external "@aws-amplify/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__aws_amplify_core__;

/***/ })

/******/ });
});
//# sourceMappingURL=aws-amplify-interactions.js.map