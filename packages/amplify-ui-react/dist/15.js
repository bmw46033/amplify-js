(this["webpackJsonpaws_amplify_react"] = this["webpackJsonpaws_amplify_react"] || []).push([[15],{

/***/ "../amplify-ui-components/dist/esm-es5/amplify-button_3.entry.js":
/*!***********************************************************************!*\
  !*** ../amplify-ui-components/dist/esm-es5/amplify-button_3.entry.js ***!
  \***********************************************************************/
/*! exports provided: amplify_button, amplify_loading_spinner, amplify_section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_button", function() { return AmplifyButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_loading_spinner", function() { return AmplifyLoadingSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_section", function() { return AmplifySection; });
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-83f2275b.js */ "../amplify-ui-components/dist/esm-es5/index-83f2275b.js");

var amplifyButtonCss = "amplify-button{--background-color:var(--amplify-primary-color);--background-color-active:var(--amplify-primary-shade);--background-color-disable:var(--amplify-primary-tint);--color:var(--amplify-primary-contrast);--border-width:0;--border-color:initial;--border-style:initial;--border-radius:initial;--link-color:var(--amplify-primary-color);--link-hover:var(--amplify-primary-tint);--link-active:var(--amplify-primary-shade);--text-transform:uppercase;--icon-fill:var(--amplify-white);--icon-height:1.25rem;--padding:1rem;--width:100%;width:var(--width);text-align:center}@media (min-width: 672px){amplify-button{width:inherit}}.button{width:100%;min-width:153px;display:inline-block;margin-bottom:0;font-size:var(--amplify-text-sm);font-family:var(--amplify-font-family);font-weight:600;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;color:var(--color);padding:var(--padding);letter-spacing:0.75px;text-transform:var(--text-transform);background-color:var(--background-color);border-width:var(--border-width);border-color:var(--border-color);border-style:var(--border-style);border-radius:var(--border-radius)}.button:active{opacity:1;background-color:var(--background-color-active)}.button:hover{opacity:0.8}.button:disabled{opacity:0.65;cursor:auto;background-color:var(--background-color-disable)}.icon{background-color:inherit;border:none;font:inherit;cursor:pointer;padding:var(--padding)}.icon amplify-icon{--icon-fill-color:var(--icon-fill);--height:var(--icon-height)}.anchor{color:var(--link-color);background-color:inherit;padding:0;border:none;font:inherit;cursor:pointer}.anchor:link{color:var(--link-color);text-decoration:none}.anchor:hover{color:var(--link-hover);text-decoration:underline}.anchor:active{color:var(--link-active);text-decoration:underline}";

var AmplifyButton = function () {
  function AmplifyButton(hostRef) {
    Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /** Type of the button: 'button', 'submit' or 'reset' */

    this.type = 'button';
    /** Variant of a button: 'button' | 'anchor | 'icon' */

    this.variant = 'button';
    /** Disabled state of the button */

    this.disabled = false;
  }

  AmplifyButton.prototype.render = function () {
    var _a;

    return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
      "class": (_a = {}, _a[this.variant] = true, _a),
      type: this.type,
      disabled: this.disabled,
      onClick: this.handleButtonClick
    }, this.variant === 'icon' && Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-icon", {
      name: this.icon
    }), Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
  };

  Object.defineProperty(AmplifyButton.prototype, "el", {
    get: function get() {
      return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this);
    },
    enumerable: false,
    configurable: true
  });
  return AmplifyButton;
}();

AmplifyButton.style = amplifyButtonCss;
var amplifyLoadingSpinnerCss = ":host{--spinner-circle-fill:var(--amplify-smoke-white);--spinner-bar-fill:var(--amplify-primary-color);--width:0.875rem;--height:0.875rem}.loading-spinner svg{-webkit-animation:loading-spinner 1s linear infinite;animation:loading-spinner 1s linear infinite;width:var(--width);height:var(--height)}.loading-spinner svg #spinner-circle{fill:var(--spinner-circle-fill)}.loading-spinner svg #spinner-bar{fill:var(--spinner-bar-fill)}@-webkit-keyframes loading-spinner{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loading-spinner{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";

var AmplifyLoadingSpinner = function () {
  function AmplifyLoadingSpinner(hostRef) {
    Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
  }

  AmplifyLoadingSpinner.prototype.render = function () {
    return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-icon", {
      "class": "loading-spinner",
      name: "loading"
    });
  };

  return AmplifyLoadingSpinner;
}();

AmplifyLoadingSpinner.style = amplifyLoadingSpinnerCss;
var amplifySectionCss = "amplify-section{--font-family:var(--amplify-font-family);--background-color:var(--amplify-background-color)}.section{position:relative;margin-bottom:var(--margin-bottom, 20px);background-color:var(--background-color);padding:var(--padding, 35px 40px);text-align:left;display:inline-block;border-radius:var(--border-radius, 6px);-webkit-box-shadow:var(--box-shadow, 1px 1px 4px 0 rgba(0, 0, 0, 0.15));box-shadow:var(--box-shadow, 1px 1px 4px 0 rgba(0, 0, 0, 0.15));-webkit-box-sizing:border-box;box-sizing:border-box;font-family:var(--font-family);width:100%;min-width:var(--min-width, 20rem)}@media (min-width: 672px){.section{width:var(--width, 28.75rem)}}";

var AmplifySection = function () {
  function AmplifySection(hostRef) {
    Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /** Equivalent to html section role */

    this.role = 'application';
  }

  AmplifySection.prototype.render = function () {
    return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("section", {
      "class": "section",
      role: this.role
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null));
  };

  Object.defineProperty(AmplifySection.prototype, "el", {
    get: function get() {
      return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this);
    },
    enumerable: false,
    configurable: true
  });
  return AmplifySection;
}();

AmplifySection.style = amplifySectionCss;


/***/ })

}]);
//# sourceMappingURL=15.js.map