(this["webpackJsonpaws_amplify_react"] = this["webpackJsonpaws_amplify_react"] || []).push([[31],{

/***/ "../amplify-ui-components/dist/esm-es5/amplify-tooltip.entry.js":
/*!**********************************************************************!*\
  !*** ../amplify-ui-components/dist/esm-es5/amplify-tooltip.entry.js ***!
  \**********************************************************************/
/*! exports provided: amplify_tooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_tooltip", function() { return AmplifyTooltip; });
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-83f2275b.js */ "../amplify-ui-components/dist/esm-es5/index-83f2275b.js");

var amplifyTooltipCss = ":host{--font-family:var(--amplify-font-family);--background-color:var(--amplify-secondary-color);--color:var(--amplify-secondary-contrast);--border-color:var(--amplify-secondary-color)}.tooltip{display:inline;position:relative;font-size:var(--amplify-text-xxs);font-family:var(--font-family);margin:0 0 0 16px}.tooltip :after{background-color:var(--background-color);border-radius:2px;bottom:46px;color:var(--color);content:attr(data-text);text-decoration:none;padding:10px;left:50%;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%);position:absolute;white-space:nowrap;opacity:0;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out}.tooltip :before{border:solid;border-color:var(--border-color) transparent transparent transparent;border-width:5px;bottom:36px;content:\"\";left:50%;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%);position:absolute;font-size:var(--amplify-text-sm);opacity:0;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out}.tooltip :hover:after{opacity:1;-webkit-transition-delay:1s;transition-delay:1s}.tooltip :hover:before{opacity:1;-webkit-transition-delay:1s;transition-delay:1s}.auto-show-tooltip :after{opacity:1;-webkit-transition-delay:1s;transition-delay:1s}.auto-show-tooltip :before{opacity:1;-webkit-transition-delay:1s;transition-delay:1s}";

var AmplifyTooltip = function () {
  function AmplifyTooltip(hostRef) {
    Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /** (Optional) Whether or not the tooltip should be automatically shown, i.e. not disappear when not hovered */

    this.shouldAutoShow = false;
  }

  AmplifyTooltip.prototype.render = function () {
    return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      "class": {
        tooltip: true,
        'auto-show-tooltip': this.shouldAutoShow
      },
      "data-text": this.text
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null));
  };

  return AmplifyTooltip;
}();

AmplifyTooltip.style = amplifyTooltipCss;


/***/ })

}]);
//# sourceMappingURL=31.js.map