(this["webpackJsonpaws_amplify_react"] = this["webpackJsonpaws_amplify_react"] || []).push([[25],{

/***/ "../amplify-ui-components/dist/esm-es5/amplify-link.entry.js":
/*!*******************************************************************!*\
  !*** ../amplify-ui-components/dist/esm-es5/amplify-link.entry.js ***!
  \*******************************************************************/
/*! exports provided: amplify_link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_link", function() { return AmplifyLink; });
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-83f2275b.js */ "../amplify-ui-components/dist/esm-es5/index-83f2275b.js");

var amplifyLinkCss = ":host{--link-color:var(--amplify-primary-color);--link-hover:var(--amplify-primary-tint);--link-active:var(--amplify-primary-shade)}.link{color:var(--link-color);cursor:pointer}.link:link{color:var(--link-color);text-decoration:none}.link:hover{color:var(--link-hover);text-decoration:underline}.link:active{color:var(--link-active);text-decoration:underline}";

var AmplifyLink = function () {
  function AmplifyLink(hostRef) {
    Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /** The link role is used to identify an element that creates a hyperlink to a resource that is in the application or external */

    this.role = 'navigation';
  }

  AmplifyLink.prototype.render = function () {
    return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
      "class": "link",
      role: this.role
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null));
  };

  Object.defineProperty(AmplifyLink.prototype, "el", {
    get: function get() {
      return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this);
    },
    enumerable: false,
    configurable: true
  });
  return AmplifyLink;
}();

AmplifyLink.style = amplifyLinkCss;


/***/ })

}]);
//# sourceMappingURL=25.js.map