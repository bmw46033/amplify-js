(this["webpackJsonpaws_amplify_react"] = this["webpackJsonpaws_amplify_react"] || []).push([[17],{

/***/ "../amplify-ui-components/dist/esm-es5/amplify-checkbox.entry.js":
/*!***********************************************************************!*\
  !*** ../amplify-ui-components/dist/esm-es5/amplify-checkbox.entry.js ***!
  \***********************************************************************/
/*! exports provided: amplify_checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_checkbox", function() { return AmplifyCheckbox; });
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-83f2275b.js */ "../amplify-ui-components/dist/esm-es5/index-83f2275b.js");

var amplifyCheckboxCss = ":host{--font-family:var(--amplify-font-family)}.checkbox{margin-bottom:22px;display:block;width:100%;padding:16px;font-size:var(--amplify-text-sm);font-family:var(--font-family)}.checkbox input{margin-right:12px}";

var AmplifyCheckbox = function () {
  function AmplifyCheckbox(hostRef) {
    var _this = this;

    Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /** If `true`, the checkbox is selected. */

    this.checked = false;
    /** If `true`, the checkbox is disabled */

    this.disabled = false;

    this.onClick = function () {
      _this.checked = !_this.checked;
    };
  }

  AmplifyCheckbox.prototype.render = function () {
    return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
      "class": "checkbox"
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
      onClick: this.onClick,
      type: "checkbox",
      name: this.name,
      value: this.value,
      id: this.fieldId,
      checked: this.checked,
      disabled: this.disabled
    }), Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-label", {
      htmlFor: this.fieldId
    }, this.label));
  };

  return AmplifyCheckbox;
}();

AmplifyCheckbox.style = amplifyCheckboxCss;


/***/ })

}]);
//# sourceMappingURL=17.js.map