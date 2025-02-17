(this["webpackJsonpaws_amplify_react"] = this["webpackJsonpaws_amplify_react"] || []).push([[7],{

/***/ "../amplify-ui-components/dist/esm-es5/amplify-confirm-sign-in_7.entry.js":
/*!********************************************************************************!*\
  !*** ../amplify-ui-components/dist/esm-es5/amplify-confirm-sign-in_7.entry.js ***!
  \********************************************************************************/
/*! exports provided: amplify_confirm_sign_in, amplify_confirm_sign_up, amplify_forgot_password, amplify_require_new_password, amplify_sign_in, amplify_sign_up, amplify_verify_contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_confirm_sign_in", function() { return AmplifyConfirmSignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_confirm_sign_up", function() { return AmplifyConfirmSignUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_forgot_password", function() { return AmplifyForgotPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_require_new_password", function() { return AmplifyRequireNewPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_sign_in", function() { return AmplifySignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_sign_up", function() { return AmplifySignUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_verify_contact", function() { return AmplifyVerifyContact; });
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

var __spreadArrays = undefined && undefined.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};










var AmplifyConfirmSignIn = function () {
  function class_1(hostRef) {
    var _this = this;

    Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /** Fires when confirm sign in form is submitted */

    this.handleSubmit = function (event) {
      return _this.confirm(event);
    };
    /** Used for header text in confirm sign in component */


    this.headerText = _Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SMS_CODE;
    /** Used for the submit button text in confirm sign in component */

    this.submitButtonText = _Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM;
    /** Auth state change handler for this component */

    this.handleAuthStateChange = _helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["d"];
    /** Default form field */

    this.defaultFormFields = [{
      type: 'code',
      required: true,
      handleInputChange: function handleInputChange(event) {
        return _this.handleCodeChange(event);
      }
    }];
    /**
     * Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc.
     * by passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing
     * text for a label or adjust a placeholder, you can follow the structure below in order to do just that.
     * ```
     * [
     *  {
     *    type: string,
     *    label: string,
     *    placeholder: string,
     *    hint: string | Functional Component | null,
     *    required: boolean
     *  }
     * ]
     * ```
     */

    this.formFields = this.defaultFormFields;
    /** The MFA option to confirm with */

    this.mfaOption = _auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["M"].SMS;
    /* Whether or not the confirm-sign-in component is loading */

    this.loading = false;
  }

  class_1.prototype.componentWillLoad = function () {
    this.setup();
  };

  class_1.prototype.userHandler = function () {
    this.setup();
  };

  class_1.prototype.setup = function () {
    if (this.user && this.user['challengeName'] === _auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["C"].SoftwareTokenMFA) {
      this.mfaOption = _auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["M"].TOTP; // If header text is using default use TOTP string

      if (this.headerText === _Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SMS_CODE) {
        this.headerText = _Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_TOTP_CODE;
      }
    }

    this.constructedFormFieldOptions = this.constructFormFieldOptions(this.formFields);
  };

  class_1.prototype.handleCodeChange = function (event) {
    this.code = event.target.value;
  };

  class_1.prototype.confirm = function (event) {
    return __awaiter(this, void 0, void 0, function () {
      var mfaType, error_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (event) {
              event.preventDefault();
            }

            mfaType = this.user['challengeName'] === _auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["C"].SoftwareTokenMFA ? _auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["C"].SoftwareTokenMFA : null;

            if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].confirmSignIn !== 'function') {
              throw new Error(_constants_56d75870_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
            }

            this.loading = true;
            _a.label = 1;

          case 1:
            _a.trys.push([1, 4, 5, 6]);

            return [4
            /*yield*/
            , _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].confirmSignIn(this.user, this.code, mfaType)];

          case 2:
            _a.sent();

            return [4
            /*yield*/
            , Object(_auth_helpers_c42c7a9e_js__WEBPACK_IMPORTED_MODULE_7__["c"])(this.user, this.handleAuthStateChange)];

          case 3:
            _a.sent();

            return [3
            /*break*/
            , 6];

          case 4:
            error_1 = _a.sent();
            Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error_1);
            return [3
            /*break*/
            , 6];

          case 5:
            this.loading = false;
            return [7
            /*endfinally*/
            ];

          case 6:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  class_1.prototype.constructFormFieldOptions = function (formFields) {
    var _this = this;

    var content = [];
    if (formFields === undefined) return undefined;
    if (formFields.length <= 0) return this.defaultFormFields;
    formFields.forEach(function (formField) {
      if (typeof formField === 'string' || formField.type !== 'code') {
        // This is either a `string`, and/or a custom field that isn't `code`. Pass this directly.
        content.push(formField);
      } else {
        // This is a code input field. Attach input handler.
        content.push(Object.assign({
          handleInputChange: function handleInputChange(event) {
            return _this.handleCodeChange(event);
          }
        }, formField));
      }
    });
    return content;
  };

  class_1.prototype.render = function () {
    var _this = this;

    return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-section", {
      headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.headerText),
      handleSubmit: this.handleSubmit,
      submitButtonText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.submitButtonText),
      loading: this.loading,
      secondaryFooterContent: Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", {
        variant: "anchor",
        onClick: function onClick() {
          return _this.handleAuthStateChange(_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn);
        }
      }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].BACK_TO_SIGN_IN)))
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-auth-fields", {
      formFields: this.constructedFormFieldOptions
    })));
  };

  Object.defineProperty(class_1, "watchers", {
    get: function get() {
      return {
        "user": ["userHandler"]
      };
    },
    enumerable: false,
    configurable: true
  });
  return class_1;
}();

var AmplifyConfirmSignUp = function () {
  function class_2(hostRef) {
    var _this = this;

    Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /** Fires when sign up form is submitted */

    this.handleSubmit = function (event) {
      return _this.confirmSignUp(event);
    };
    /** Used for header text in confirm sign up component */


    this.headerText = _Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SIGN_UP_HEADER_TEXT;
    /** Used for the submit button text in confirm sign up component */

    this.submitButtonText = _Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT;
    /**
     * Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc.
     * by passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing
     * text for a label or adjust a placeholder, you can follow the structure below in order to do just that.
     * ```
     * [
     *  {
     *    type: string,
     *    label: string,
     *    placeholder: string,
     *    hint: string | Functional Component | null,
     *    required: boolean
     *  }
     * ]
     * ```
     */

    this.formFields = [];
    /** Auth state change handler for this components
     * e.g. SignIn -> 'Create Account' link -> SignUp
     */

    this.handleAuthStateChange = _helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["d"];
    /** Username Alias is used to setup authentication with `username`, `email` or `phone_number`  */

    this.usernameAlias = 'username';
    this.loading = false;
    this.newFormFields = [];
    this.phoneNumber = {
      countryDialCodeValue: _constants_56d75870_js__WEBPACK_IMPORTED_MODULE_5__["h"],
      phoneNumberValue: null
    };
  }

  class_2.prototype.componentWillLoad = function () {
    this.setup();
  };

  class_2.prototype.formFieldsHandler = function () {
    this.buildFormFields();
  };

  class_2.prototype.userHandler = function () {
    this.setup();
  };

  class_2.prototype.setup = function () {
    // TODO: Use optional chaining instead
    this.userInput = this.user && this.user.username;
    this._signUpAttrs = this.user && this.user.signUpAttrs;
    Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["c"])(this.usernameAlias);
    this.buildFormFields();
  };

  class_2.prototype.buildDefaultFormFields = function () {
    var _this = this;

    this.newFormFields = [{
      type: "" + this.usernameAlias,
      required: true,
      handleInputChange: this.handleFormFieldInputChange("" + this.usernameAlias),
      value: this.userInput,
      disabled: this.userInput ? true : false,
      inputProps: {
        autocomplete: 'username'
      }
    }, {
      type: 'code',
      label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SIGN_UP_CODE_LABEL),
      placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SIGN_UP_CODE_PLACEHOLDER),
      required: true,
      hint: Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SIGN_UP_LOST_CODE), ' ', Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", {
        variant: "anchor",
        onClick: function onClick() {
          return _this.resendConfirmCode();
        }
      }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SIGN_UP_RESEND_CODE))),
      handleInputChange: this.handleFormFieldInputChange('code')
    }];
  };

  class_2.prototype.buildFormFields = function () {
    var _this = this;

    if (this.formFields.length === 0) {
      this.buildDefaultFormFields();
    } else {
      var newFields_1 = [];
      this.formFields.forEach(function (field) {
        var newField = Object.assign({}, field);

        if (newField.type === 'code') {
          newField['hint'] = Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["i"])(newField) ? Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SIGN_UP_LOST_CODE), ' ', Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", {
            variant: "anchor",
            onClick: function onClick() {
              return _this.resendConfirmCode();
            }
          }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SIGN_UP_RESEND_CODE))) : newField['hint'];
        }

        newField['handleInputChange'] = function (event) {
          return _this.handleFormFieldInputWithCallback(event, field);
        };

        newFields_1.push(newField);
      });
      this.newFormFields = newFields_1;
    }
  };

  class_2.prototype.handleFormFieldInputChange = function (fieldType) {
    var _this = this;

    switch (fieldType) {
      case 'username':
      case 'email':
        return function (event) {
          return _this.userInput = event.target.value;
        };

      case 'phone_number':
        return function (event) {
          return Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["h"])(event, _this.phoneNumber);
        };

      case 'code':
        return function (event) {
          return _this.code = event.target.value;
        };

      default:
        return;
    }
  };

  class_2.prototype.setFieldValue = function (field) {
    switch (field.type) {
      case 'username':
      case 'email':
        if (field.value === undefined) {
          this.userInput = '';
        } else {
          this.userInput = field.value;
        }

        break;

      case 'phone_number':
        if (field.dialCode) {
          this.phoneNumber.countryDialCodeValue = field.dialCode;
        }

        this.phoneNumber.phoneNumberValue = field.value;
        break;
    }
  };

  class_2.prototype.handleFormFieldInputWithCallback = function (event, field) {
    var fnToCall = field['handleInputChange'] ? field['handleInputChange'] : function (event, cb) {
      cb(event);
    };
    var callback = this.handleFormFieldInputChange(field.type);
    fnToCall(event, callback.bind(this));
  };
  /**
   * Returns the username of the user to confirm. If a valid `user.username` has been passed as a prop, we return that.
   * Otherwise, we return the `userInput` on the form.
   */


  class_2.prototype.getUsername = function () {
    if (this.user && this.user.username) return this.user.username;

    switch (this.usernameAlias) {
      case 'username':
      case 'email':
        return this.userInput;

      case 'phone_number':
        return Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this.phoneNumber);
    }
  };

  class_2.prototype.resendConfirmCode = function () {
    return __awaiter(this, void 0, void 0, function () {
      var username, error_2;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (event) {
              event.preventDefault();
            }

            if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].resendSignUp !== 'function') {
              throw new Error(_constants_56d75870_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
            }

            _a.label = 1;

          case 1:
            _a.trys.push([1, 3,, 4]);

            username = this.getUsername();
            if (!username) throw new Error(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].EMPTY_USERNAME);
            return [4
            /*yield*/
            , _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].resendSignUp(username.trim())];

          case 2:
            _a.sent();

            return [3
            /*break*/
            , 4];

          case 3:
            error_2 = _a.sent();
            Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error_2);
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
  }; // TODO: Add validation
  // TODO: Prefix


  class_2.prototype.confirmSignUp = function (event) {
    return __awaiter(this, void 0, void 0, function () {
      var username, confirmSignUpResult, error_3;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (event) {
              event.preventDefault();
            }

            if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].confirmSignUp !== 'function') {
              throw new Error(_constants_56d75870_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
            }

            this.loading = true;
            _a.label = 1;

          case 1:
            _a.trys.push([1, 6, 7, 8]);

            username = this.getUsername();
            if (!username) throw new Error(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].EMPTY_USERNAME);
            username = username.trim();
            return [4
            /*yield*/
            , _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].confirmSignUp(username, this.code)];

          case 2:
            confirmSignUpResult = _a.sent();

            if (!confirmSignUpResult) {
              throw new Error(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SIGN_UP_FAILED));
            }

            if (!(this._signUpAttrs && this._signUpAttrs.password && this._signUpAttrs.password !== '')) return [3
            /*break*/
            , 4]; // Auto sign in user if password is available from previous workflow

            return [4
            /*yield*/
            , Object(_auth_helpers_c42c7a9e_js__WEBPACK_IMPORTED_MODULE_7__["h"])(username, this._signUpAttrs.password, this.handleAuthStateChange)];

          case 3:
            // Auto sign in user if password is available from previous workflow
            _a.sent();

            return [3
            /*break*/
            , 5];

          case 4:
            this.handleAuthStateChange(_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn);
            _a.label = 5;

          case 5:
            return [3
            /*break*/
            , 8];

          case 6:
            error_3 = _a.sent();
            Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error_3);
            return [3
            /*break*/
            , 8];

          case 7:
            this.loading = false;
            return [7
            /*endfinally*/
            ];

          case 8:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  class_2.prototype.render = function () {
    var _this = this;

    return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-section", {
      headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.headerText),
      submitButtonText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.submitButtonText),
      handleSubmit: this.handleSubmit,
      loading: this.loading,
      secondaryFooterContent: Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", {
        variant: "anchor",
        onClick: function onClick() {
          return _this.handleAuthStateChange(_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn);
        }
      }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].BACK_TO_SIGN_IN))))
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-auth-fields", {
      formFields: this.newFormFields
    })));
  };

  Object.defineProperty(class_2, "watchers", {
    get: function get() {
      return {
        "formFields": ["formFieldsHandler"],
        "user": ["userHandler"]
      };
    },
    enumerable: false,
    configurable: true
  });
  return class_2;
}();

var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Logger"]('ForgotPassword');

var AmplifyForgotPassword = function () {
  function class_3(hostRef) {
    var _this = this;

    Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /** The header text of the forgot password section */

    this.headerText = _Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].RESET_YOUR_PASSWORD;
    /** The text displayed inside of the send code button for the form */

    this.sendButtonText = _Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].SEND_CODE;
    /** The text displayed inside of the submit button for the form */

    this.submitButtonText = _Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].SUBMIT;
    /** The form fields displayed inside of the forgot password form */

    this.formFields = [];
    /** The function called when making a request to reset password */

    this.handleSend = function (event) {
      return _this.send(event);
    };
    /** The function called when submitting a new password */


    this.handleSubmit = function (event) {
      return _this.submit(event);
    };
    /** Auth state change handler for this component */


    this.handleAuthStateChange = _helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["d"];
    /** Username Alias is used to setup authentication with `username`, `email` or `phone_number`  */

    this.usernameAlias = 'username';
    this.delivery = null;
    this.loading = false;
    this.phoneNumber = {
      countryDialCodeValue: _constants_56d75870_js__WEBPACK_IMPORTED_MODULE_5__["h"],
      phoneNumberValue: null
    };
    this.newFormFields = [];
    this.forgotPasswordAttrs = {
      userInput: '',
      password: '',
      code: ''
    };
  }

  class_3.prototype.componentWillLoad = function () {
    Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["c"])(this.usernameAlias);
    this.buildFormFields();
  };

  class_3.prototype.formFieldsHandler = function () {
    this.buildFormFields();
  };

  class_3.prototype.buildFormFields = function () {
    var _this = this;

    if (this.formFields.length === 0) {
      this.buildDefaultFormFields();
    } else {
      var newFields_2 = [];
      this.formFields.forEach(function (field) {
        var newField = Object.assign({}, field);

        newField['handleInputChange'] = function (event) {
          return _this.handleFormFieldInputWithCallback(event, field);
        };

        newFields_2.push(newField);
      });
      this.newFormFields = newFields_2;
    }
  };

  class_3.prototype.buildDefaultFormFields = function () {
    switch (this.usernameAlias) {
      case 'email':
        this.newFormFields = [{
          type: 'email',
          required: true,
          handleInputChange: this.handleFormFieldInputChange('email'),
          inputProps: {
            'data-test': 'forgot-password-email-input'
          }
        }];
        break;

      case 'phone_number':
        this.newFormFields = [{
          type: 'phone_number',
          required: true,
          handleInputChange: this.handleFormFieldInputChange('phone_number'),
          inputProps: {
            'data-test': 'forgot-password-phone-number-input'
          }
        }];
        break;

      case 'username':
      default:
        this.newFormFields = [{
          type: 'username',
          required: true,
          handleInputChange: this.handleFormFieldInputChange('username'),
          inputProps: {
            'data-test': 'forgot-password-username-input'
          }
        }];
        break;
    }
  };

  class_3.prototype.handleFormFieldInputChange = function (fieldType) {
    var _this = this;

    switch (fieldType) {
      case 'username':
      case 'email':
        return function (event) {
          return _this.forgotPasswordAttrs.userInput = event.target.value;
        };

      case 'phone_number':
        return function (event) {
          return Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["h"])(event, _this.phoneNumber);
        };

      case 'password':
      case 'code':
        return function (event) {
          return _this.forgotPasswordAttrs[fieldType] = event.target.value;
        };

      default:
        return;
    }
  };

  class_3.prototype.setFieldValue = function (field, formAttributes) {
    switch (field.type) {
      case 'username':
      case 'email':
        if (field.value === undefined) {
          formAttributes.userInput = '';
        } else {
          formAttributes.userInput = field.value;
        }

        break;

      case 'phone_number':
        if (field.dialCode) {
          this.phoneNumber.countryDialCodeValue = field.dialCode;
        }

        this.phoneNumber.phoneNumberValue = field.value;
        break;

      case 'password':
      case 'code':
        if (field.value === undefined) {
          formAttributes[field.type] = '';
        } else {
          formAttributes[field.type] = field.value;
        }

        break;
    }
  };

  class_3.prototype.handleFormFieldInputWithCallback = function (event, field) {
    var fnToCall = field['handleInputChange'] ? field['handleInputChange'] : function (event, cb) {
      cb(event);
    };
    var callback = this.handleFormFieldInputChange(field.type);
    fnToCall(event, callback.bind(this));
  };

  class_3.prototype.send = function (event) {
    return __awaiter(this, void 0, void 0, function () {
      var data, error_4;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (event) {
              event.preventDefault();
            }

            if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].forgotPassword !== 'function') {
              throw new Error(_constants_56d75870_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
            }

            this.loading = true;

            switch (this.usernameAlias) {
              case 'phone_number':
                try {
                  this.forgotPasswordAttrs.userInput = Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this.phoneNumber);
                } catch (error) {
                  Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error);
                }

                break;
            }

            _a.label = 1;

          case 1:
            _a.trys.push([1, 3, 4, 5]);

            return [4
            /*yield*/
            , _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].forgotPassword(this.forgotPasswordAttrs.userInput.trim())];

          case 2:
            data = _a.sent();
            logger.debug(data);
            this.newFormFields = [{
              type: 'code',
              required: true,
              handleInputChange: this.handleFormFieldInputChange('code'),
              inputProps: {
                'data-test': 'forgot-password-code-input'
              }
            }, {
              type: 'password',
              required: true,
              handleInputChange: this.handleFormFieldInputChange('password'),
              label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].NEW_PASSWORD_LABEL),
              placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].NEW_PASSWORD_PLACEHOLDER)
            }];
            this.delivery = data.CodeDeliveryDetails;
            return [3
            /*break*/
            , 5];

          case 3:
            error_4 = _a.sent();
            Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error_4);
            return [3
            /*break*/
            , 5];

          case 4:
            this.loading = false;
            return [7
            /*endfinally*/
            ];

          case 5:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  class_3.prototype.submit = function (event) {
    return __awaiter(this, void 0, void 0, function () {
      var _a, userInput, code, password, data, error_5;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            if (event) {
              event.preventDefault();
            }

            if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].forgotPasswordSubmit !== 'function') {
              throw new Error(_constants_56d75870_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
            }

            this.loading = true;
            _b.label = 1;

          case 1:
            _b.trys.push([1, 3, 4, 5]);

            _a = this.forgotPasswordAttrs, userInput = _a.userInput, code = _a.code, password = _a.password;
            return [4
            /*yield*/
            , _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].forgotPasswordSubmit(userInput.trim(), code, password)];

          case 2:
            data = _b.sent();
            logger.debug(data);
            this.handleAuthStateChange(_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn);
            this.delivery = null;
            return [3
            /*break*/
            , 5];

          case 3:
            error_5 = _b.sent();
            Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error_5);
            return [3
            /*break*/
            , 5];

          case 4:
            this.loading = false;
            return [7
            /*endfinally*/
            ];

          case 5:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  class_3.prototype.render = function () {
    var _this = this;

    var submitFn = this.delivery ? function (event) {
      return _this.handleSubmit(event);
    } : function (event) {
      return _this.handleSend(event);
    };
    var submitButtonText = this.delivery ? this.submitButtonText : this.sendButtonText;
    return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-section", {
      headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.headerText),
      handleSubmit: submitFn,
      loading: this.loading,
      secondaryFooterContent: Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", {
        variant: "anchor",
        onClick: function onClick() {
          return _this.handleAuthStateChange(_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn);
        },
        "data-test": "forgot-password-back-to-sign-in-link"
      }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].BACK_TO_SIGN_IN)),
      testDataPrefix: 'forgot-password',
      submitButtonText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(submitButtonText)
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-auth-fields", {
      formFields: this.newFormFields
    })));
  };

  Object.defineProperty(class_3, "watchers", {
    get: function get() {
      return {
        "formFields": ["formFieldsHandler"]
      };
    },
    enumerable: false,
    configurable: true
  });
  return class_3;
}();

var logger$1 = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["ConsoleLogger"]('amplify-require-new-password');

var AmplifyRequireNewPassword = function () {
  function class_4(hostRef) {
    var _this = this;

    Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /** The header text of the forgot password section */

    this.headerText = _Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].CHANGE_PASSWORD;
    /** The text displayed inside of the submit button for the form */

    this.submitButtonText = _Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].CHANGE_PASSWORD_ACTION;
    /** The function called when submitting a new password */

    this.handleSubmit = function (event) {
      return _this.completeNewPassword(event);
    };
    /** Auth state change handler for this component */


    this.handleAuthStateChange = _helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["d"];
    /** The form fields displayed inside of the forgot password form */

    this.formFields = [{
      type: _auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["a"].Password,
      required: true,
      handleInputChange: function handleInputChange(event) {
        return _this.handlePasswordChange(event);
      },
      label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].NEW_PASSWORD_LABEL),
      placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].NEW_PASSWORD_PLACEHOLDER),
      inputProps: {
        'data-test': 'require-new-password-password-input'
      }
    }];
    this.loading = false;
    this.requiredAttributes = {};
    this.newFormFields = this.formFields;
    this.phoneNumber = {
      countryDialCodeValue: _constants_56d75870_js__WEBPACK_IMPORTED_MODULE_5__["h"],
      phoneNumberValue: ' '
    };
  }

  class_4.prototype.userHandler = function () {
    this.setCurrentUser();
  };

  class_4.prototype.handleRequiredAttributeInputChange = function (attribute, event) {
    if (attribute === 'phone_number') {
      this.formatPhoneNumber(event);
    } else {
      this.requiredAttributes[attribute] = event.target.value;
    }
  };

  class_4.prototype.setCurrentUser = function () {
    return __awaiter(this, void 0, void 0, function () {
      var user, error_6, userRequiredAttributes, requiredAttributesMap_1;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!!this.user) return [3
            /*break*/
            , 5];
            _a.label = 1;

          case 1:
            _a.trys.push([1, 3,, 4]);

            return [4
            /*yield*/
            , _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser()];

          case 2:
            user = _a.sent();
            if (user) this.currentUser = user;
            return [3
            /*break*/
            , 4];

          case 3:
            error_6 = _a.sent();
            Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error_6);
            return [3
            /*break*/
            , 4];

          case 4:
            return [3
            /*break*/
            , 6];

          case 5:
            this.currentUser = this.user;
            _a.label = 6;

          case 6:
            if (this.currentUser && this.currentUser.challengeParam && this.currentUser.challengeParam.requiredAttributes) {
              userRequiredAttributes = this.currentUser.challengeParam.requiredAttributes;
              requiredAttributesMap_1 = Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["g"])();
              userRequiredAttributes.forEach(function (attribute) {
                var formField = {
                  type: attribute,
                  required: true,
                  label: requiredAttributesMap_1[attribute].label,
                  placeholder: requiredAttributesMap_1[attribute].placeholder,
                  handleInputChange: function handleInputChange(event) {
                    return _this.handleRequiredAttributeInputChange(attribute, event);
                  },
                  inputProps: {
                    'data-test': "require-new-password-" + attribute + "-input"
                  }
                };
                _this.newFormFields = __spreadArrays(_this.newFormFields, [formField]);
              });
            }

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  class_4.prototype.componentWillLoad = function () {
    return this.setCurrentUser();
  };

  class_4.prototype.handlePasswordChange = function (event) {
    this.password = event.target.value;
  };

  class_4.prototype.formatPhoneNumber = function (event) {
    Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["h"])(event, this.phoneNumber);
    /**
     * composePhoneNumberInput will throw an error if the phoneNumberValue it receives
     * is empty. Adding a check here to try and make sure that doesn't happen...but will
     * wrap it in a try/catch block just in case as well
     */

    try {
      if (event.target.name === _constants_56d75870_js__WEBPACK_IMPORTED_MODULE_5__["b"] && this.phoneNumber.phoneNumberValue) {
        var composedInput = Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this.phoneNumber);
        this.requiredAttributes['phone_number'] = composedInput;
      }
    } catch (err) {
      logger$1.error("error in phone number field - " + err);
    }
  };

  class_4.prototype.completeNewPassword = function (event) {
    return __awaiter(this, void 0, void 0, function () {
      var user, _a, error_7;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            if (event) {
              event.preventDefault();
            }

            if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].completeNewPassword !== 'function') {
              throw new Error(_constants_56d75870_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
            }

            this.loading = true;
            _b.label = 1;

          case 1:
            _b.trys.push([1, 8, 9, 10]);

            return [4
            /*yield*/
            , _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].completeNewPassword(this.currentUser, this.password, this.requiredAttributes)];

          case 2:
            user = _b.sent();
            logger$1.debug('complete new password', user);
            _a = user.challengeName;

            switch (_a) {
              case _auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["C"].SMSMFA:
                return [3
                /*break*/
                , 3];

              case _auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["C"].MFASetup:
                return [3
                /*break*/
                , 4];
            }

            return [3
            /*break*/
            , 5];

          case 3:
            this.handleAuthStateChange(_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].ConfirmSignIn, user);
            return [3
            /*break*/
            , 7];

          case 4:
            logger$1.debug('TOTP setup', user.challengeParam);
            this.handleAuthStateChange(_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].TOTPSetup, user);
            return [3
            /*break*/
            , 7];

          case 5:
            return [4
            /*yield*/
            , Object(_auth_helpers_c42c7a9e_js__WEBPACK_IMPORTED_MODULE_7__["c"])(user, this.handleAuthStateChange)];

          case 6:
            _b.sent();

            _b.label = 7;

          case 7:
            return [3
            /*break*/
            , 10];

          case 8:
            error_7 = _b.sent();
            Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error_7);
            return [3
            /*break*/
            , 10];

          case 9:
            this.loading = false;
            return [7
            /*endfinally*/
            ];

          case 10:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  class_4.prototype.render = function () {
    var _this = this;

    return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-section", {
      headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.headerText),
      handleSubmit: this.handleSubmit,
      loading: this.loading,
      secondaryFooterContent: Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", {
        variant: "anchor",
        onClick: function onClick() {
          return _this.handleAuthStateChange(_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn);
        }
      }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].BACK_TO_SIGN_IN)),
      submitButtonText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.submitButtonText)
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-auth-fields", {
      formFields: this.newFormFields
    })));
  };

  Object.defineProperty(class_4, "watchers", {
    get: function get() {
      return {
        "user": ["userHandler"]
      };
    },
    enumerable: false,
    configurable: true
  });
  return class_4;
}();

var amplifySignInCss = ":host{--footer-size:var(--amplify-text-sm);--footer-color:var(--amplify-grey);--footer-font-family:var(--amplify-font-family);--font-weight:var(--amplify-font-weight)}.sign-in-form-footer{font-family:var(--footer-font-family);font-size:var(--footer-size);color:var(--footer-color);font-weight:--font-weight;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.sign-in-form-footer amplify-button{margin-bottom:0.625rem}@media (min-width: 672px){.sign-in-form-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}.sign-in-form-footer amplify-button{margin-bottom:0}}.sign-in-form-footer *+*{margin-bottom:15px}.full-width-footer-content{width:100%}";

var AmplifySignIn = function () {
  function class_5(hostRef) {
    var _this = this;

    Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /** Fires when sign in form is submitted */

    this.handleSubmit = function (event) {
      return _this.signIn(event);
    };
    /** Used for header text in sign in component */


    this.headerText = _Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_IN_HEADER_TEXT;
    /** Used for the submit button text in sign in component */

    this.submitButtonText = _Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_IN_ACTION;
    /** Auth state change handler for this component */
    // prettier-ignore

    this.handleAuthStateChange = _helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["d"];
    /** Username Alias is used to setup authentication with `username`, `email` or `phone_number`  */

    this.usernameAlias = 'username';
    /**
     * Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc.
     * by passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing
     * text for a label or adjust a placeholder, you can follow the structure below in order to do just that.
     * ```
     * [
     *  {
     *    type: string,
     *    label: string,
     *    placeholder: string,
     *    hint: string | Functional Component | null,
     *    required: boolean
     *  }
     * ]
     * ```
     */

    this.formFields = [];
    /** Hides the sign up link */

    this.hideSignUp = false;
    this.newFormFields = [];
    /* Whether or not the sign-in component is loading */

    this.loading = false;
    this.phoneNumber = {
      countryDialCodeValue: _constants_56d75870_js__WEBPACK_IMPORTED_MODULE_5__["h"],
      phoneNumberValue: null
    };
    this.signInAttributes = {
      userInput: '',
      password: ''
    };
  }

  class_5.prototype.componentWillLoad = function () {
    Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["c"])(this.usernameAlias);
    this.buildFormFields();
  };

  class_5.prototype.formFieldsHandler = function () {
    this.buildFormFields();
  };

  class_5.prototype.handleFormFieldInputChange = function (fieldType) {
    var _this = this;

    switch (fieldType) {
      case 'username':
      case 'email':
        return function (event) {
          return _this.signInAttributes.userInput = event.target.value;
        };

      case 'phone_number':
        return function (event) {
          return Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["h"])(event, _this.phoneNumber);
        };

      case 'password':
        return function (event) {
          return _this.signInAttributes.password = event.target.value;
        };

      default:
        return function () {};
    }
  };

  class_5.prototype.handleFormFieldInputWithCallback = function (event, field) {
    var fnToCall = field['handleInputChange'] ? field['handleInputChange'] : function (event, cb) {
      cb(event);
    };
    var callback = this.handleFormFieldInputChange(field.type);
    fnToCall(event, callback.bind(this));
  };

  class_5.prototype.signIn = function (event) {
    return __awaiter(this, void 0, void 0, function () {
      var username;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            // avoid submitting the form
            if (event) {
              event.preventDefault();
            }

            this.loading = true;

            switch (this.usernameAlias) {
              case 'phone_number':
                try {
                  this.signInAttributes.userInput = Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this.phoneNumber);
                } catch (error) {
                  Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error);
                }

            }

            username = this.signInAttributes.userInput.trim();
            return [4
            /*yield*/
            , Object(_auth_helpers_c42c7a9e_js__WEBPACK_IMPORTED_MODULE_7__["h"])(username, this.signInAttributes.password, this.handleAuthStateChange, this.usernameAlias)];

          case 1:
            _a.sent();

            this.loading = false;
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  class_5.prototype.buildDefaultFormFields = function () {
    var _this = this;

    var formFieldInputs = [];

    switch (this.usernameAlias) {
      case 'email':
        formFieldInputs.push({
          type: 'email',
          required: true,
          handleInputChange: this.handleFormFieldInputChange('email'),
          inputProps: {
            'data-test': 'sign-in-email-input',
            autocomplete: 'username'
          }
        });
        break;

      case 'phone_number':
        formFieldInputs.push({
          type: 'phone_number',
          required: true,
          handleInputChange: this.handleFormFieldInputChange('phone_number'),
          inputProps: {
            'data-test': 'sign-in-phone-number-input',
            autocomplete: 'username'
          }
        });
        break;

      case 'username':
      default:
        formFieldInputs.push({
          type: 'username',
          required: true,
          handleInputChange: this.handleFormFieldInputChange('username'),
          inputProps: {
            'data-test': 'sign-in-username-input',
            autocomplete: 'username'
          }
        });
        break;
    }

    formFieldInputs.push({
      type: 'password',
      hint: Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].FORGOT_PASSWORD_TEXT), ' ', Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", {
        variant: "anchor",
        onClick: function onClick() {
          return _this.handleAuthStateChange(_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].ForgotPassword);
        },
        "data-test": "sign-in-forgot-password-link"
      }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].RESET_PASSWORD_TEXT))),
      required: true,
      handleInputChange: this.handleFormFieldInputChange('password'),
      inputProps: {
        'data-test': 'sign-in-password-input'
      }
    });
    this.newFormFields = __spreadArrays(formFieldInputs);
  };

  class_5.prototype.buildFormFields = function () {
    var _this = this;

    if (this.formFields.length === 0) {
      this.buildDefaultFormFields();
    } else {
      var newFields_3 = [];
      this.formFields.forEach(function (field) {
        var newField = Object.assign({}, field); // TODO: handle hint better

        if (newField.type === 'password') {
          newField['hint'] = Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["i"])(newField) ? Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].FORGOT_PASSWORD_TEXT), ' ', Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", {
            variant: "anchor",
            onClick: function onClick() {
              return _this.handleAuthStateChange(_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].ForgotPassword);
            },
            "data-test": "sign-in-forgot-password-link"
          }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].RESET_PASSWORD_TEXT))) : newField['hint'];
        }

        newField['handleInputChange'] = function (event) {
          return _this.handleFormFieldInputWithCallback(event, field);
        };

        _this.setFieldValue(newField, _this.signInAttributes);

        newFields_3.push(newField);
      });
      this.newFormFields = newFields_3;
    }
  };

  class_5.prototype.setFieldValue = function (field, formAttributes) {
    switch (field.type) {
      case 'username':
      case 'email':
        if (field.value === undefined) {
          formAttributes.userInput = '';
        } else {
          formAttributes.userInput = field.value;
        }

        break;

      case 'phone_number':
        if (field.dialCode) {
          this.phoneNumber.countryDialCodeValue = field.dialCode;
        }

        this.phoneNumber.phoneNumberValue = field.value;
        break;

      case 'password':
        if (field.value === undefined) {
          formAttributes.password = '';
        } else {
          formAttributes.password = field.value;
        }

        break;
    }
  };

  class_5.prototype.render = function () {
    var _this = this;

    return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-section", {
      headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.headerText),
      handleSubmit: this.handleSubmit,
      testDataPrefix: 'sign-in'
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      slot: "subtitle"
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
      name: "header-subtitle"
    })), Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
      name: "federated-buttons"
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-federated-buttons", {
      handleAuthStateChange: this.handleAuthStateChange,
      federated: this.federated
    })), !Object(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(this.federated) && Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-strike", null, "or"), Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-auth-fields", {
      formFields: this.newFormFields
    }), Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      slot: "amplify-form-section-footer",
      "class": "sign-in-form-footer"
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
      name: "footer"
    }, !this.hideSignUp && Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
      name: "secondary-footer-content"
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].NO_ACCOUNT_TEXT), ' ', Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", {
      variant: "anchor",
      onClick: function onClick() {
        return _this.handleAuthStateChange(_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignUp);
      },
      "data-test": "sign-in-create-account-link"
    }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].CREATE_ACCOUNT_TEXT)))), Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      "class": this.hideSignUp ? 'full-width-footer-content' : ''
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
      name: "primary-footer-content"
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", {
      type: "submit",
      disabled: this.loading,
      "data-test": "sign-in-sign-in-button"
    }, this.loading ? Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-loading-spinner", null) : Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.submitButtonText)))))))));
  };

  Object.defineProperty(class_5, "watchers", {
    get: function get() {
      return {
        "formFields": ["formFieldsHandler"]
      };
    },
    enumerable: false,
    configurable: true
  });
  return class_5;
}();

AmplifySignIn.style = amplifySignInCss;
var amplifySignUpCss = "amplify-sign-up{--footer-font-family:var(--amplify-font-family);--footer-font-size:var(--amplify-text-sm);--footer-color:var(--amplify-grey);--font-weight:var(--amplify-font-weight)}.sign-up-form-footer{font-family:var(--footer-font-family);font-size:var(--footer-font-size);color:var(--footer-color);font-weight:--font-weight;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.sign-up-form-footer amplify-button{margin-bottom:0.625rem}@media (min-width: 672px){.sign-up-form-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}.sign-up-form-footer amplify-button{margin-bottom:0}}.sign-up-form-footer *+*{margin-bottom:15px}";

var AmplifySignUp = function () {
  function class_6(hostRef) {
    var _this = this;

    Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /** Fires when sign up form is submitted */

    this.handleSubmit = function (event) {
      return _this.signUp(event);
    };
    /** Override for handling the Auth.SignUp API call */


    this.handleSignUp = function (params) {
      return _this.authSignUp(params);
    };
    /** Used for header text in sign up component */


    this.headerText = _Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_HEADER_TEXT;
    /** Used for the submit button text in sign up component */

    this.submitButtonText = _Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_SUBMIT_BUTTON_TEXT;
    /** Used for the submit button text in sign up component */

    this.haveAccountText = _Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_HAVE_ACCOUNT_TEXT;
    /** Text used for the sign in hyperlink */

    this.signInText = _Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_IN_TEXT;
    /**
     * Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc.
     * by passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing
     * text for a label or adjust a placeholder, you can follow the structure below in order to do just that.
     * ```
     * [
     *  {
     *    type: string,
     *    label: string,
     *    placeholder: string,
     *    hint: string | Functional Component | null,
     *    required: boolean
     *  }
     * ]
     * ```
     */

    this.formFields = [];
    /** Auth state change handler for this component
     * e.g. SignIn -> 'Create Account' link -> SignUp
     */
    // prettier-ignore

    this.handleAuthStateChange = _helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["d"];
    /** Username Alias is used to setup authentication with `username`, `email` or `phone_number`  */

    this.usernameAlias = 'username'; // private userInput: string | PhoneNumberInterface;

    this.newFormFields = [];
    this.phoneNumber = {
      countryDialCodeValue: _constants_56d75870_js__WEBPACK_IMPORTED_MODULE_5__["h"],
      phoneNumberValue: null
    };
    this.loading = false;
    this.signUpAttributes = {
      username: '',
      password: '',
      attributes: {}
    };
  }

  class_6.prototype.handleFormFieldInputChange = function (fieldType) {
    var _this = this;

    switch (fieldType) {
      case 'username':
        return function (event) {
          return _this.signUpAttributes.username = event.target.value;
        };

      case 'password':
        return function (event) {
          return _this.signUpAttributes.password = event.target.value;
        };

      case 'email':
        return function (event) {
          return _this.signUpAttributes.attributes.email = event.target.value;
        };

      case 'phone_number':
        return function (event) {
          return Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["h"])(event, _this.phoneNumber);
        };

      default:
        return function (event) {
          return _this.signUpAttributes.attributes[fieldType] = event.target.value;
        };
    }
  };

  class_6.prototype.handleFormFieldInputWithCallback = function (event, field) {
    var fnToCall = field['handleInputChange'] ? field['handleInputChange'] : function (event, cb) {
      cb(event);
    };
    var callback = this.handleFormFieldInputChange(field.type);
    fnToCall(event, callback.bind(this));
  };

  class_6.prototype.authSignUp = function (params) {
    return __awaiter(this, void 0, void 0, function () {
      var data;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].signUp(params)];

          case 1:
            data = _a.sent();

            if (!data) {
              throw new Error(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_FAILED);
            }

            return [2
            /*return*/
            , data];
        }
      });
    });
  };

  class_6.prototype.assignPhoneNumberToSignUpAttributes = function () {
    if (this.phoneNumber.phoneNumberValue) {
      try {
        this.signUpAttributes.attributes.phone_number = Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this.phoneNumber);
      } catch (error) {
        Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error);
      }
    }
  };

  class_6.prototype.assignUserNameAliasToSignUpAttributes = function () {
    switch (this.usernameAlias) {
      case 'email':
      case 'phone_number':
        this.signUpAttributes.username = this.signUpAttributes.attributes[this.usernameAlias];
        break;
    }
  };

  class_6.prototype.assignFormInputToSignUpAttributes = function () {
    this.assignPhoneNumberToSignUpAttributes();
    this.assignUserNameAliasToSignUpAttributes();
  };

  class_6.prototype.validateSignUpAttributes = function () {
    if (!this.signUpAttributes.username) {
      if (this.usernameAlias === _auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["U"].email) {
        throw new Error(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].EMPTY_EMAIL);
      } else if (this.usernameAlias === _auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["U"].phone_number) {
        throw new Error(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].EMPTY_PHONE);
      } else {
        throw new Error(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].EMPTY_USERNAME);
      }
    }

    if (this.signUpAttributes.username.indexOf(' ') >= 0) {
      throw new Error(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].USERNAME_REMOVE_WHITESPACE);
    }

    if (this.signUpAttributes.password !== this.signUpAttributes.password.trim()) {
      throw new Error(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].PASSWORD_REMOVE_WHITESPACE);
    }
  }; // TODO: Add validation
  // TODO: Prefix


  class_6.prototype.signUp = function (event) {
    return __awaiter(this, void 0, void 0, function () {
      var data, signUpAttrs, error_8;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (event) {
              event.preventDefault();
            }

            if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].signUp !== 'function') {
              throw new Error(_constants_56d75870_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
            }

            this.loading = true;
            this.assignFormInputToSignUpAttributes();
            _a.label = 1;

          case 1:
            _a.trys.push([1, 6, 7, 8]);

            this.validateSignUpAttributes();
            return [4
            /*yield*/
            , this.handleSignUp(this.signUpAttributes)];

          case 2:
            data = _a.sent();
            if (!data.userConfirmed) return [3
            /*break*/
            , 4];
            return [4
            /*yield*/
            , Object(_auth_helpers_c42c7a9e_js__WEBPACK_IMPORTED_MODULE_7__["h"])(this.signUpAttributes.username, this.signUpAttributes.password, this.handleAuthStateChange)];

          case 3:
            _a.sent();

            return [3
            /*break*/
            , 5];

          case 4:
            signUpAttrs = Object.assign({}, this.signUpAttributes);
            this.handleAuthStateChange(_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].ConfirmSignUp, Object.assign(Object.assign({}, data.user), {
              signUpAttrs: signUpAttrs
            }));
            _a.label = 5;

          case 5:
            return [3
            /*break*/
            , 8];

          case 6:
            error_8 = _a.sent();
            Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error_8);
            return [3
            /*break*/
            , 8];

          case 7:
            this.loading = false;
            return [7
            /*endfinally*/
            ];

          case 8:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  class_6.prototype.buildDefaultFormFields = function () {
    switch (this.usernameAlias) {
      case 'email':
        this.newFormFields = [{
          type: 'email',
          placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_EMAIL_PLACEHOLDER),
          required: true,
          handleInputChange: this.handleFormFieldInputChange('email'),
          inputProps: {
            'data-test': 'sign-up-email-input',
            autocomplete: 'username'
          }
        }, {
          type: 'password',
          placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_PASSWORD_PLACEHOLDER),
          required: true,
          handleInputChange: this.handleFormFieldInputChange('password'),
          inputProps: {
            'data-test': 'sign-up-password-input',
            autocomplete: 'new-password'
          }
        }, {
          type: 'phone_number',
          required: true,
          handleInputChange: this.handleFormFieldInputChange('phone_number'),
          inputProps: {
            'data-test': 'sign-up-phone-number-input',
            autocomplete: 'tel-national'
          }
        }];
        break;

      case 'phone_number':
        this.newFormFields = [{
          type: 'phone_number',
          required: true,
          handleInputChange: this.handleFormFieldInputChange('phone_number'),
          inputProps: {
            'data-test': 'sign-up-phone-number-input',
            autocomplete: 'username'
          }
        }, {
          type: 'password',
          placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_PASSWORD_PLACEHOLDER),
          required: true,
          handleInputChange: this.handleFormFieldInputChange('password'),
          inputProps: {
            'data-test': 'sign-up-password-input',
            autocomplete: 'new-password'
          }
        }, {
          type: 'email',
          placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_EMAIL_PLACEHOLDER),
          required: true,
          handleInputChange: this.handleFormFieldInputChange('email'),
          inputProps: {
            'data-test': 'sign-up-email-input',
            autocomplete: 'email'
          }
        }];
        break;

      case 'username':
      default:
        this.newFormFields = [{
          type: 'username',
          placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_USERNAME_PLACEHOLDER),
          required: true,
          handleInputChange: this.handleFormFieldInputChange('username'),
          inputProps: {
            'data-test': 'sign-up-username-input',
            autocomplete: 'username'
          }
        }, {
          type: 'password',
          placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_PASSWORD_PLACEHOLDER),
          required: true,
          handleInputChange: this.handleFormFieldInputChange('password'),
          inputProps: {
            'data-test': 'sign-up-password-input',
            autocomplete: 'new-password'
          }
        }, {
          type: 'email',
          placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_EMAIL_PLACEHOLDER),
          required: true,
          handleInputChange: this.handleFormFieldInputChange('email'),
          inputProps: {
            'data-test': 'sign-up-email-input'
          }
        }, {
          type: 'phone_number',
          required: true,
          handleInputChange: this.handleFormFieldInputChange('phone_number'),
          inputProps: {
            'data-test': 'sign-up-phone-number-input'
          }
        }];
        break;
    }
  };

  class_6.prototype.buildFormFields = function () {
    var _this = this;

    if (this.formFields.length === 0) {
      this.buildDefaultFormFields();
    } else {
      var newFields_4 = [];
      this.formFields.forEach(function (field) {
        var newField = Object.assign({}, field);

        newField['handleInputChange'] = function (event) {
          return _this.handleFormFieldInputWithCallback(event, field);
        };

        _this.setFieldValue(field, _this.signUpAttributes);

        newFields_4.push(newField);
      });
      this.newFormFields = newFields_4;
    }
  };

  class_6.prototype.setFieldValue = function (field, formAttributes) {
    switch (field.type) {
      case 'username':
        if (field.value === undefined) {
          formAttributes.username = '';
        } else {
          formAttributes.username = field.value;
        }

        break;

      case 'password':
        if (field.value === undefined) {
          formAttributes.password = '';
        } else {
          formAttributes.password = field.value;
        }

        break;

      case 'email':
        formAttributes.attributes.email = field.value;
        break;

      case 'phone_number':
        if (field.dialCode) {
          this.phoneNumber.countryDialCodeValue = field.dialCode;
        }

        this.phoneNumber.phoneNumberValue = field.value;
        break;

      default:
        formAttributes.attributes[field.type] = field.value;
        break;
    }
  };

  class_6.prototype.componentWillLoad = function () {
    Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["c"])(this.usernameAlias);
    this.buildFormFields();
  };

  class_6.prototype.formFieldsHandler = function () {
    this.buildFormFields();
  };

  class_6.prototype.render = function () {
    var _this = this;

    return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-section", {
      headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.headerText),
      handleSubmit: this.handleSubmit,
      testDataPrefix: 'sign-up'
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      slot: "subtitle"
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
      name: "header-subtitle"
    })), Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-auth-fields", {
      formFields: this.newFormFields
    }), Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      "class": "sign-up-form-footer",
      slot: "amplify-form-section-footer"
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
      name: "footer"
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
      name: "secondary-footer-content"
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.haveAccountText), ' ', Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", {
      variant: "anchor",
      onClick: function onClick() {
        return _this.handleAuthStateChange(_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn);
      },
      "data-test": "sign-up-sign-in-link"
    }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.signInText)))), Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
      name: "primary-footer-content"
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", {
      type: "submit",
      "data-test": "sign-up-create-account-button",
      disabled: this.loading
    }, this.loading ? Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-loading-spinner", null) : Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.submitButtonText))))))));
  };

  Object.defineProperty(class_6, "watchers", {
    get: function get() {
      return {
        "formFields": ["formFieldsHandler"]
      };
    },
    enumerable: false,
    configurable: true
  });
  return class_6;
}();

AmplifySignUp.style = amplifySignUpCss;
var logger$2 = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Logger"]('AmplifyVerifyContact');

var AmplifyVerifyContact = function () {
  function class_7(hostRef) {
    Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /** Authentication state handler */

    this.handleAuthStateChange = _helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["d"];
    this.loading = false;
  }

  class_7.prototype.handleSubmit = function (event) {
    event.preventDefault();
    this.verifyAttr ? this.submit(this.code) : this.verify(this.contact);
  };

  class_7.prototype.submit = function (code) {
    return __awaiter(this, void 0, void 0, function () {
      var attr, data, error_9;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            attr = this.verifyAttr;

            if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].verifyCurrentUserAttributeSubmit !== 'function') {
              throw new Error(_constants_56d75870_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
            }

            this.loading = true;
            _a.label = 1;

          case 1:
            _a.trys.push([1, 3, 4, 5]);

            return [4
            /*yield*/
            , _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].verifyCurrentUserAttributeSubmit(attr, code)];

          case 2:
            data = _a.sent();
            logger$2.debug(data);
            this.handleAuthStateChange(_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedIn, this.user);
            this.verifyAttr = null;
            return [3
            /*break*/
            , 5];

          case 3:
            error_9 = _a.sent();
            Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error_9);
            logger$2.error(error_9);
            return [3
            /*break*/
            , 5];

          case 4:
            this.loading = false;
            return [7
            /*endfinally*/
            ];

          case 5:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  class_7.prototype.verify = function (contact) {
    return __awaiter(this, void 0, void 0, function () {
      var data, error_10;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!contact) {
              logger$2.error('Neither Email nor Phone Number selected');
              return [2
              /*return*/
              ];
            }

            if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].verifyCurrentUserAttribute !== 'function') {
              throw new Error(_constants_56d75870_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
            }

            this.loading = true;
            _a.label = 1;

          case 1:
            _a.trys.push([1, 3, 4, 5]);

            return [4
            /*yield*/
            , _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].verifyCurrentUserAttribute(contact)];

          case 2:
            data = _a.sent();
            logger$2.debug(data);
            this.verifyAttr = contact;
            return [3
            /*break*/
            , 5];

          case 3:
            error_10 = _a.sent();
            Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error_10);
            logger$2.error(error_10);
            return [3
            /*break*/
            , 5];

          case 4:
            this.loading = false;
            return [7
            /*endfinally*/
            ];

          case 5:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  class_7.prototype.handleInputChange = function (event) {
    var inputName = event.target.name;

    if (inputName === 'code') {
      this.code = event.target.value;
    } else if (inputName === 'contact') {
      this.contact = event.target.value;
    }
  };

  class_7.prototype.renderSubmit = function () {
    var _this = this;

    return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-input", {
      inputProps: {
        autocomplete: 'off',
        'data-test': 'verify-contact-code-input'
      },
      name: "code",
      placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].CODE_PLACEHOLDER),
      handleInputChange: function handleInputChange(event) {
        return _this.handleInputChange(event);
      }
    }));
  };

  class_7.prototype.renderVerify = function () {
    var _this = this;

    var user = this.user;

    if (!user) {
      logger$2.debug('No user to verify');
      return null;
    }

    var unverified = user.unverified;

    if (!unverified) {
      logger$2.debug('Unverified variable does not exist on user');
      return null;
    }

    var email = unverified.email,
        phone_number = unverified.phone_number;
    return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, email && Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-radio-button", {
      label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].VERIFY_CONTACT_EMAIL_LABEL),
      key: "email",
      name: "contact",
      value: "email",
      handleInputChange: function handleInputChange(event) {
        return _this.handleInputChange(event);
      },
      inputProps: {
        'data-test': 'verify-contact-email-radio'
      }
    }), phone_number && Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-radio-button", {
      label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].VERIFY_CONTACT_PHONE_LABEL),
      key: "phone_number",
      name: "contact",
      value: "phone_number",
      handleInputChange: function handleInputChange(event) {
        return _this.handleInputChange(event);
      },
      inputProps: {
        'data-test': 'verify-contact-phone-number-radio'
      }
    }));
  };

  class_7.prototype.render = function () {
    var _this = this;

    return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-section", {
      handleSubmit: function handleSubmit(event) {
        return _this.handleSubmit(event);
      },
      headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].VERIFY_CONTACT_HEADER_TEXT),
      loading: this.loading,
      secondaryFooterContent: Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", {
        variant: "anchor",
        onClick: function onClick() {
          return _this.handleAuthStateChange(_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedIn, _this.user);
        },
        "data-test": "verify-contact-skip-link"
      }, "Skip")),
      submitButtonText: this.verifyAttr ? _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].VERIFY_CONTACT_SUBMIT_LABEL) : _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].VERIFY_CONTACT_VERIFY_LABEL)
    }, this.verifyAttr ? this.renderSubmit() : this.renderVerify()));
  };

  return class_7;
}();



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
//# sourceMappingURL=7.js.map