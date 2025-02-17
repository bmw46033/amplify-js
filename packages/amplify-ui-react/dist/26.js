(this["webpackJsonpaws_amplify_react"] = this["webpackJsonpaws_amplify_react"] || []).push([[26],{

/***/ "../amplify-ui-components/dist/esm-es5/amplify-nav_2.entry.js":
/*!********************************************************************!*\
  !*** ../amplify-ui-components/dist/esm-es5/amplify-nav_2.entry.js ***!
  \********************************************************************/
/*! exports provided: amplify_nav, amplify_sign_out */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_nav", function() { return AmplifyNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_sign_out", function() { return AmplifySignOut; });
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-83f2275b.js */ "../amplify-ui-components/dist/esm-es5/index-83f2275b.js");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "@aws-amplify/core");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-types-caf635db.js */ "../amplify-ui-components/dist/esm-es5/auth-types-caf635db.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/auth */ "@aws-amplify/auth");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Translations-97eed81d.js */ "../amplify-ui-components/dist/esm-es5/Translations-97eed81d.js");
/* harmony import */ var _constants_56d75870_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-56d75870.js */ "../amplify-ui-components/dist/esm-es5/constants-56d75870.js");
/* harmony import */ var _helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers-3e41b1da.js */ "../amplify-ui-components/dist/esm-es5/helpers-3e41b1da.js");
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








var amplifyNavCss = ".nav{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center}.nav>*{margin:0 0.5em}";

var AmplifyNav = function () {
  function AmplifyNav(hostRef) {
    Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
  }

  AmplifyNav.prototype.render = function () {
    return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("nav", {
      "class": "nav"
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null));
  };

  return AmplifyNav;
}();

AmplifyNav.style = amplifyNavCss;

var AmplifySignOut = function () {
  function class_1(hostRef) {
    Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /** Auth state change handler for this component */

    this.handleAuthStateChange = _helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["d"];
    /** Text inside of the Sign Out button */

    this.buttonText = _Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_OUT;
  }

  class_1.prototype.signOut = function (event) {
    return __awaiter(this, void 0, void 0, function () {
      var error_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (event) event.preventDefault(); // TODO: Federated Sign Out

            if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].signOut !== 'function') {
              throw new Error(_constants_56d75870_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
            }

            _a.label = 1;

          case 1:
            _a.trys.push([1, 3,, 4]);

            return [4
            /*yield*/
            , _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].signOut()];

          case 2:
            _a.sent();

            this.handleAuthStateChange(_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedOut);
            return [3
            /*break*/
            , 4];

          case 3:
            error_1 = _a.sent();
            Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error_1);
            return [3
            /*break*/
            , 4];

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  class_1.prototype.render = function () {
    var _this = this;

    return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", {
      slot: "sign-out",
      onClick: function onClick(event) {
        return _this.signOut(event);
      },
      "data-test": "sign-out-button"
    }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.buttonText));
  };

  return class_1;
}();



/***/ })

}]);
//# sourceMappingURL=26.js.map