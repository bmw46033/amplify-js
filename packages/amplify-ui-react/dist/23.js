(this["webpackJsonpaws_amplify_react"] = this["webpackJsonpaws_amplify_react"] || []).push([[23],{

/***/ "../amplify-ui-components/dist/esm-es5/amplify-icon-button.entry.js":
/*!**************************************************************************!*\
  !*** ../amplify-ui-components/dist/esm-es5/amplify-icon-button.entry.js ***!
  \**************************************************************************/
/*! exports provided: amplify_icon_button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_icon_button", function() { return AmplifyIconButton; });
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-83f2275b.js */ "../amplify-ui-components/dist/esm-es5/index-83f2275b.js");

var amplifyIconButtonCss = ":host{--button-color:var(--amplify-secondary-contrast);--button-background-hover:var(--amplify-secondary-color)}.action-button button{position:relative;padding:0;background:none;height:54px;width:54px;cursor:pointer;outline:none;text-decoration:none;border:none;border-radius:30px;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;color:var(--button-color);fill:currentColor}.action-button button:hover{background-color:var(--button-background-hover);-webkit-box-shadow:0.3px 0.3px 0.3px rgba(0, 0, 0, 0.3);box-shadow:0.3px 0.3px 0.3px rgba(0, 0, 0, 0.3)}.action-button button:hover>.tooltip{display:block}.action-button button:hover>svg{-webkit-filter:none;filter:none}.action-button button:focus{outline:none}.action-button button svg{width:1.8em;height:1.8em;-webkit-filter:drop-shadow(1px 1px 1px var(--amplify-grey));filter:drop-shadow(1px 1px 1px var(--amplify-grey))}";

var AmplifyIconButton = function () {
  function AmplifyIconButton(hostRef) {
    Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /** (Optional) The tooltip that will show on hover of the button */

    this.tooltip = null;
    /** (Optional) Whether or not to show the tooltip automatically */

    this.autoShowTooltip = false;
  }

  AmplifyIconButton.prototype.render = function () {
    return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
      "class": "action-button"
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-tooltip", {
      text: this.tooltip,
      shouldAutoShow: this.autoShowTooltip
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", null, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-icon", {
      name: this.name
    }))));
  };

  return AmplifyIconButton;
}();

AmplifyIconButton.style = amplifyIconButtonCss;


/***/ })

}]);
//# sourceMappingURL=23.js.map