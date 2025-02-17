(this["webpackJsonpaws_amplify_react"] = this["webpackJsonpaws_amplify_react"] || []).push([[6],{

/***/ "../amplify-ui-components/dist/esm-es5/amplify-authenticator.entry.js":
/*!****************************************************************************!*\
  !*** ../amplify-ui-components/dist/esm-es5/amplify-authenticator.entry.js ***!
  \****************************************************************************/
/*! exports provided: amplify_authenticator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_authenticator", function() { return AmplifyAuthenticator; });
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-83f2275b.js */ "../amplify-ui-components/dist/esm-es5/index-83f2275b.js");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "@aws-amplify/core");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-types-caf635db.js */ "../amplify-ui-components/dist/esm-es5/auth-types-caf635db.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/auth */ "@aws-amplify/auth");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Translations-97eed81d.js */ "../amplify-ui-components/dist/esm-es5/Translations-97eed81d.js");
/* harmony import */ var _constants_56d75870_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-56d75870.js */ "../amplify-ui-components/dist/esm-es5/constants-56d75870.js");
/* harmony import */ var _helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers-3e41b1da.js */ "../amplify-ui-components/dist/esm-es5/helpers-3e41b1da.js");
/* harmony import */ var _auth_helpers_c42c7a9e_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth-helpers-c42c7a9e.js */ "../amplify-ui-components/dist/esm-es5/auth-helpers-c42c7a9e.js");
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

var _a;









var authSlotNames = (_a = {}, _a[_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn] = 'sign-in', _a[_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].ConfirmSignIn] = 'confirm-sign-in', _a[_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignUp] = 'sign-up', _a[_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].ConfirmSignUp] = 'confirm-sign-up', _a[_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].ForgotPassword] = 'forgot-password', _a[_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].ResetPassword] = 'require-new-password', _a[_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].VerifyContact] = 'verify-contact', _a[_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].TOTPSetup] = 'totp-setup', _a[_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].Loading] = 'loading', _a);
var amplifyAuthenticatorCss = ":host{--background-color:var(--amplify-background-color);--width:28.75rem;--min-width:20rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;--box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.15);--border-radius:6px;--padding:35px 40px;--margin-bottom:20px;--container-height:100vh;--container-display:flex;--container-justify:center;--container-align:center}.auth-container{display:var(--container-display);-ms-flex-pack:var(--container-justify);justify-content:var(--container-justify);-ms-flex-align:var(--container-align);align-items:var(--container-align);min-height:var(--container-height)}";
var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Logger"]('Authenticator');

var AmplifyAuthenticator = function () {
  function class_1(hostRef) {
    var _this = this;

    Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /** Initial starting state of the Authenticator component. E.g. If `signup` is passed the default component is set to AmplifySignUp */

    this.initialAuthState = _auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn;
    /** Callback for Authenticator state machine changes */

    this.handleAuthStateChange = function () {};
    /** Hide amplify-toast for auth errors */


    this.hideToast = false;
    this.authState = _auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].Loading;
    this.toastMessage = '';

    this.handleExternalAuthEvent = function (_a) {
      var payload = _a.payload;

      switch (payload.event) {
        case 'cognitoHostedUI':
        case 'signIn':
          Object(_auth_helpers_c42c7a9e_js__WEBPACK_IMPORTED_MODULE_7__["c"])(payload.data, _helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["d"]);
          break;

        case 'cognitoHostedUI_failure':
        case 'parsingUrl_failure':
        case 'signOut':
        case 'customGreetingSignOut':
          return Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["d"])(_this.initialAuthState);
      }
    };

    this.handleToastEvent = function (_a) {
      var payload = _a.payload;

      switch (payload.event) {
        case _constants_56d75870_js__WEBPACK_IMPORTED_MODULE_5__["T"]:
          if (payload.message) _this.toastMessage = payload.message;
          break;
      }
    };
  }

  class_1.prototype.componentWillLoad = function () {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["o"])(function (authState, authData) {
              _this.onAuthStateChange(authState, authData);

              _this.toastMessage = '';
            });
            if (!this.hideToast) _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Hub"].listen(_constants_56d75870_js__WEBPACK_IMPORTED_MODULE_5__["U"], this.handleToastEvent);
            _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Hub"].listen(_constants_56d75870_js__WEBPACK_IMPORTED_MODULE_5__["A"], this.handleExternalAuthEvent);
            Object(_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["appendToCognitoUserAgent"])('amplify-authenticator');
            return [4
            /*yield*/
            , this.checkUser()];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  class_1.prototype.checkUser = function () {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;

      return __generator(this, function (_a) {
        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser !== 'function') {
          throw new Error(_constants_56d75870_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
        }

        return [2
        /*return*/
        , _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser().then(function (user) {
          Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["d"])(_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedIn, user);
        })["catch"](function () {
          return __awaiter(_this, void 0, void 0, function () {
            var cachedAuthState, error_1;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  cachedAuthState = null;

                  try {
                    cachedAuthState = localStorage.getItem(_constants_56d75870_js__WEBPACK_IMPORTED_MODULE_5__["c"]);
                  } catch (error) {
                    logger.debug('Failed to get the auth state from local storage', error);
                  }

                  _a.label = 1;

                case 1:
                  _a.trys.push([1, 4,, 5]);

                  if (!(cachedAuthState === _auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedIn)) return [3
                  /*break*/
                  , 3];
                  return [4
                  /*yield*/
                  , _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].signOut()];

                case 2:
                  _a.sent();

                  _a.label = 3;

                case 3:
                  Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["d"])(this.initialAuthState);
                  return [3
                  /*break*/
                  , 5];

                case 4:
                  error_1 = _a.sent();
                  logger.debug('Failed to sign out', error_1);
                  return [3
                  /*break*/
                  , 5];

                case 5:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        })];
      });
    });
  };

  class_1.prototype.onAuthStateChange = function (nextAuthState, data) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        if (nextAuthState === undefined) return [2
        /*return*/
        , logger.error('nextAuthState cannot be undefined')];
        logger.info('Inside onAuthStateChange Method current authState:', this.authState);

        if (nextAuthState === _auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedOut) {
          this.authState = this.initialAuthState;
        } else {
          this.authState = nextAuthState;
        }

        this.authData = data;
        if (this.authData) logger.log('Auth Data was set:', this.authData);

        if (this.authState === nextAuthState) {
          this.handleAuthStateChange(this.authState, this.authData);
          logger.info("authState has been updated to " + this.authState);
        }

        return [2
        /*return*/
        ];
      });
    });
  }; // Returns the auth component corresponding to the given authState.


  class_1.prototype.getAuthComponent = function (authState) {
    switch (authState) {
      case _auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn:
        return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-sign-in", {
          federated: this.federated,
          usernameAlias: this.usernameAlias
        });

      case _auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].ConfirmSignIn:
        return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-confirm-sign-in", {
          user: this.authData
        });

      case _auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignUp:
        return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-sign-up", {
          usernameAlias: this.usernameAlias
        });

      case _auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].ConfirmSignUp:
        return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-confirm-sign-up", {
          user: this.authData,
          usernameAlias: this.usernameAlias
        });

      case _auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].ForgotPassword:
        return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-forgot-password", {
          usernameAlias: this.usernameAlias
        });

      case _auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].ResetPassword:
        return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-require-new-password", {
          user: this.authData
        });

      case _auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].VerifyContact:
        return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-verify-contact", {
          user: this.authData
        });

      case _auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].TOTPSetup:
        return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-totp-setup", {
          user: this.authData
        });

      case _auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].Loading:
        return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, "Loading...");

      default:
        throw new Error("Unhandled auth state: " + authState);
    }
  }; // Returns a slot containing the Auth component corresponding to the given authState


  class_1.prototype.getSlotWithAuthComponent = function (authState) {
    var authComponent = this.getAuthComponent(authState);
    var slotName = authSlotNames[authState];
    var slotIsEmpty = this.el.querySelector("[slot=\"" + slotName + "\"]") === null; // true if no element has been inserted to the slot

    /**
     * Connect the inner auth component to DOM only if the slot hasn't been overwritten. This prevents
     * the overwritten component from calling its lifecycle methods.
     */

    return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
      name: slotName
    }, slotIsEmpty && authComponent);
  };

  class_1.prototype.disconnectedCallback = function () {
    _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Hub"].remove(_constants_56d75870_js__WEBPACK_IMPORTED_MODULE_5__["A"], this.handleExternalAuthEvent);
    if (!this.hideToast) _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Hub"].remove(_constants_56d75870_js__WEBPACK_IMPORTED_MODULE_5__["U"], this.handleToastEvent);
    return _helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["o"];
  };

  class_1.prototype.render = function () {
    var _this = this;

    return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, !this.hideToast && this.toastMessage && Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-toast", {
      message: this.toastMessage,
      handleClose: function handleClose() {
        _this.toastMessage = '';
      },
      "data-test": "authenticator-error"
    }), this.authState === _auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedIn ? [Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
      name: "greetings"
    }), Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)] : Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      "class": "auth-container"
    }, this.getSlotWithAuthComponent(this.authState)));
  };

  Object.defineProperty(class_1.prototype, "el", {
    get: function get() {
      return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this);
    },
    enumerable: false,
    configurable: true
  });
  return class_1;
}();

AmplifyAuthenticator.style = amplifyAuthenticatorCss;


/***/ }),

/***/ "../amplify-ui-components/dist/esm-es5/auth-helpers-c42c7a9e.js":
/*!**********************************************************************!*\
  !*** ../amplify-ui-components/dist/esm-es5/auth-helpers-c42c7a9e.js ***!
  \**********************************************************************/
/*! exports provided: c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return checkContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return handleSignIn; });
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-amplify/core */ "@aws-amplify/core");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-types-caf635db.js */ "../amplify-ui-components/dist/esm-es5/auth-types-caf635db.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/auth */ "@aws-amplify/auth");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Translations-97eed81d.js */ "../amplify-ui-components/dist/esm-es5/Translations-97eed81d.js");
/* harmony import */ var _constants_56d75870_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants-56d75870.js */ "../amplify-ui-components/dist/esm-es5/constants-56d75870.js");
/* harmony import */ var _helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers-3e41b1da.js */ "../amplify-ui-components/dist/esm-es5/helpers-3e41b1da.js");
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







var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["Logger"]('auth-helpers');

function checkContact(user, handleAuthStateChange) {
  return __awaiter(this, void 0, void 0, function () {
    var data, newUser, error_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].verifiedContact !== 'function') {
            throw new Error(_constants_56d75870_js__WEBPACK_IMPORTED_MODULE_4__["N"]);
          } // If `user` is a federated user, we shouldn't call `verifiedContact`
          // since `user` isn't `CognitoUser`


          if (!isCognitoUser(user)) {
            handleAuthStateChange(_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_1__["A"].SignedIn, user);
            return [2
            /*return*/
            ];
          }

          _a.label = 1;

        case 1:
          _a.trys.push([1, 3,, 4]);

          return [4
          /*yield*/
          , _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].verifiedContact(user)];

        case 2:
          data = _a.sent();

          if (!Object(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(data.verified) || Object(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(data.unverified)) {
            handleAuthStateChange(_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_1__["A"].SignedIn, user);
          } else {
            newUser = Object.assign(user, data);
            handleAuthStateChange(_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_1__["A"].VerifyContact, newUser);
          }

          return [3
          /*break*/
          , 4];

        case 3:
          error_1 = _a.sent();
          Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_5__["a"])(error_1);
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
}

var handleSignIn = function handleSignIn(username, password, handleAuthStateChange, usernameAlias) {
  return __awaiter(void 0, void 0, void 0, function () {
    var user, error_2;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].signIn !== 'function') {
            throw new Error(_constants_56d75870_js__WEBPACK_IMPORTED_MODULE_4__["N"]);
          }

          _a.label = 1;

        case 1:
          _a.trys.push([1, 9,, 10]);

          return [4
          /*yield*/
          , _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].signIn(username, password)];

        case 2:
          user = _a.sent();
          logger.debug(user);
          if (!(user.challengeName === _auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_1__["C"].SMSMFA || user.challengeName === _auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_1__["C"].SoftwareTokenMFA)) return [3
          /*break*/
          , 3];
          logger.debug('confirm user with ' + user.challengeName);
          handleAuthStateChange(_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_1__["A"].ConfirmSignIn, user);
          return [3
          /*break*/
          , 8];

        case 3:
          if (!(user.challengeName === _auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_1__["C"].NewPasswordRequired)) return [3
          /*break*/
          , 4];
          logger.debug('require new password', user.challengeParam);
          handleAuthStateChange(_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_1__["A"].ResetPassword, user);
          return [3
          /*break*/
          , 8];

        case 4:
          if (!(user.challengeName === _auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_1__["C"].MFASetup)) return [3
          /*break*/
          , 5];
          logger.debug('TOTP setup', user.challengeParam);
          handleAuthStateChange(_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_1__["A"].TOTPSetup, user);
          return [3
          /*break*/
          , 8];

        case 5:
          if (!(user.challengeName === _auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_1__["C"].CustomChallenge && user.challengeParam && user.challengeParam.trigger === 'true')) return [3
          /*break*/
          , 6];
          logger.debug('custom challenge', user.challengeParam);
          handleAuthStateChange(_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_1__["A"].CustomConfirmSignIn, user);
          return [3
          /*break*/
          , 8];

        case 6:
          return [4
          /*yield*/
          , checkContact(user, handleAuthStateChange)];

        case 7:
          _a.sent();

          _a.label = 8;

        case 8:
          return [3
          /*break*/
          , 10];

        case 9:
          error_2 = _a.sent();

          if (error_2.code === 'UserNotConfirmedException') {
            logger.debug('the user is not confirmed');
            handleAuthStateChange(_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_1__["A"].ConfirmSignUp, {
              username: username
            });
          } else if (error_2.code === 'PasswordResetRequiredException') {
            logger.debug('the user requires a new password');
            handleAuthStateChange(_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_1__["A"].ForgotPassword, {
              username: username
            });
          } else if (error_2.code === 'InvalidParameterException' && password === '') {
            logger.debug('Password cannot be empty');
            error_2.message = _Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_3__["T"].EMPTY_PASSWORD;
          } else if (error_2.message === _Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_3__["T"].EMPTY_USERNAME) {
            if (usernameAlias === _auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_1__["U"].email) {
              error_2.message = _Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_3__["T"].EMPTY_EMAIL;
            }

            if (usernameAlias === _auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_1__["U"].phone_number) {
              error_2.message = _Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_3__["T"].EMPTY_PHONE;
            }
          }

          Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_5__["a"])(error_2);
          return [3
          /*break*/
          , 10];

        case 10:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var isCognitoUser = function isCognitoUser(user) {
  return user instanceof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["CognitoUser"];
};



/***/ })

}]);
//# sourceMappingURL=6.js.map