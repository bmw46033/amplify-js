(this["webpackJsonpaws_amplify_react"] = this["webpackJsonpaws_amplify_react"] || []).push([[28],{

/***/ "../amplify-ui-components/dist/esm-es5/amplify-picker.entry.js":
/*!*********************************************************************!*\
  !*** ../amplify-ui-components/dist/esm-es5/amplify-picker.entry.js ***!
  \*********************************************************************/
/*! exports provided: amplify_picker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_picker", function() { return AmplifyPicker; });
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-83f2275b.js */ "../amplify-ui-components/dist/esm-es5/index-83f2275b.js");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "@aws-amplify/core");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/auth */ "@aws-amplify/auth");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Translations-97eed81d.js */ "../amplify-ui-components/dist/esm-es5/Translations-97eed81d.js");




var amplifyPickerCss = ".picker{position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}input[type=file]{width:100%;height:100%;display:inline-block;position:absolute;left:0;top:0;opacity:0;cursor:pointer}";

var AmplifyPicker = function () {
  function AmplifyPicker(hostRef) {
    Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /** Picker button text */

    this.pickerText = _Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_3__["T"].PICKER_TEXT;
    /** File input accept value */

    this.acceptValue = '*/*';
  }

  AmplifyPicker.prototype.render = function () {
    var _this = this;

    return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      "class": "picker"
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
      name: "picker"
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.pickerText))), Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
      title: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.pickerText),
      type: "file",
      accept: this.acceptValue,
      onChange: function onChange(e) {
        return _this.inputHandler(e);
      }
    }));
  };

  return AmplifyPicker;
}();

AmplifyPicker.style = amplifyPickerCss;


/***/ })

}]);
//# sourceMappingURL=28.js.map