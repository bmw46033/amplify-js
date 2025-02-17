(this["webpackJsonpaws_amplify_react"] = this["webpackJsonpaws_amplify_react"] || []).push([[12],{

/***/ "../amplify-ui-components/dist/esm-es5/amplify-amazon-button_5.entry.js":
/*!******************************************************************************!*\
  !*** ../amplify-ui-components/dist/esm-es5/amplify-amazon-button_5.entry.js ***!
  \******************************************************************************/
/*! exports provided: amplify_amazon_button, amplify_auth0_button, amplify_facebook_button, amplify_google_button, amplify_oauth_button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_amazon_button", function() { return AmplifyAmazonButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_auth0_button", function() { return AmplifyAuth0Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_facebook_button", function() { return AmplifyFacebookButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_google_button", function() { return AmplifyGoogleButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_oauth_button", function() { return AmplifyOAuthButton; });
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








var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["ConsoleLogger"]('amplify-amazon-button');

var AmplifyAmazonButton = function () {
  function class_1(hostRef) {
    var _this = this;

    Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /** Auth state change handler for this component
     * e.g. SignIn -> 'Create Account' link -> SignUp
     */

    this.handleAuthStateChange = _helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["d"];

    this.federatedSignIn = function (response) {
      var access_token = response.access_token,
          expires_in = response.expires_in;

      if (!access_token) {
        return;
      }

      if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].federatedSignIn !== 'function' || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser !== 'function') {
        throw new Error(_constants_56d75870_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
      }

      var date = new Date();
      var expires_at = expires_in * 1000 + date.getTime();
      window['amazon'].Login.retrieveProfile(function (userInfo) {
        return __awaiter(_this, void 0, void 0, function () {
          var user, authenticatedUser;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                if (!userInfo.success) {
                  return [2
                  /*return*/
                  , logger.debug('Get user Info failed')];
                }

                user = {
                  name: userInfo.profile.Name,
                  email: userInfo.profile.PrimaryEmail
                };
                return [4
                /*yield*/
                , _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].federatedSignIn('amazon', {
                  token: access_token,
                  expires_at: expires_at
                }, user)];

              case 1:
                _a.sent();

                return [4
                /*yield*/
                , _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser()];

              case 2:
                authenticatedUser = _a.sent();
                this.handleAuthStateChange(_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedIn, authenticatedUser);
                return [2
                /*return*/
                ];
            }
          });
        });
      });
    };
  }
  /**
   * @see https://developer.amazon.com/docs/login-with-amazon/install-sdk-javascript.html
   */


  class_1.prototype.signInWithAmazon = function (event) {
    var _this = this;

    event.preventDefault();
    window['amazon'].Login.setClientId(this.clientId);
    window['amazon'].Login.authorize({
      scope: 'profile'
    }, function (response) {
      if (response.error) {
        return logger.debug('Failed to login with amazon: ' + response.error);
      }

      try {
        window.localStorage.setItem(_constants_56d75870_js__WEBPACK_IMPORTED_MODULE_5__["i"], JSON.stringify({
          provider: 'amazon'
        }));
      } catch (e) {
        logger.debug('Failed to cache auth source into localStorage', e);
      }

      _this.federatedSignIn(response);
    });
  };

  class_1.prototype.render = function () {
    var _this = this;

    return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-sign-in-button", {
      onClick: function onClick(event) {
        return _this.signInWithAmazon(event);
      },
      provider: "amazon"
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("script", {
      src: "https://assets.loginwithamazon.com/sdk/na/login1.js"
    }), _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_IN_WITH_AMAZON));
  };

  return class_1;
}();

var logger$1 = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["ConsoleLogger"]('amplify-auth0-button');

var AmplifyAuth0Button = function () {
  function class_2(hostRef) {
    var _this = this;

    Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /** Auth state change handler for this component */

    this.handleAuthStateChange = _helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["d"];

    this.handleLoad = function () {
      // @ts-ignore Property 'auth0' does not exist on type '{}'.
      var _a = _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].configure().oauth,
          oauth = _a === void 0 ? {} : _a; // @ts-ignore Property 'auth0' does not exist on type '{}'.

      var _b = _this.config,
          config = _b === void 0 ? oauth.auth0 : _b;

      if (!config) {
        logger$1.debug('Auth0 is not configured');
        return;
      }

      logger$1.debug('auth0 configuration', config);

      if (!_this._auth0) {
        _this._auth0 = new window['auth0'].WebAuth(config);
      }

      _this._auth0.parseHash(function (err, authResult) {
        if (err) {
          logger$1.debug('Failed to parse the url for Auth0', err);
          return;
        }

        if (!authResult) {
          logger$1.debug('Auth0 found no authResult in hash');
          return;
        }

        var payload = {
          provider: 'auth0',
          opts: {
            returnTo: config.returnTo,
            clientID: config.clientID,
            federated: config.federated
          }
        };

        try {
          localStorage.setItem(_constants_56d75870_js__WEBPACK_IMPORTED_MODULE_5__["i"], JSON.stringify(payload));
        } catch (e) {
          logger$1.debug('Failed to cache auth source into localStorage', e);
        }

        _this._auth0.client.userInfo(authResult.accessToken, function (err, user) {
          return __awaiter(_this, void 0, void 0, function () {
            var username, email, authenticatedUser;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  username = undefined;
                  email = undefined;

                  if (err) {
                    logger$1.debug('Failed to get the user info', err);
                  } else {
                    username = user.name;
                    email = user.email;
                  }

                  return [4
                  /*yield*/
                  , _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].federatedSignIn(config.domain, {
                    token: authResult.idToken,
                    expires_at: authResult.expiresIn * 1000 + new Date().getTime()
                  }, {
                    name: username,
                    email: email
                  })];

                case 1:
                  _a.sent();

                  return [4
                  /*yield*/
                  , _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser()];

                case 2:
                  authenticatedUser = _a.sent();
                  this.handleAuthStateChange(_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedIn, authenticatedUser);
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        });
      });
    };
  }

  class_2.prototype.signInWithAuth0 = function (event) {
    event.preventDefault();

    if (!this._auth0) {
      throw new Error('the auth0 client is not configured');
    }

    this._auth0.authorize();
  };

  class_2.prototype.render = function () {
    var _this = this;

    return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-sign-in-button", {
      onClick: function onClick(event) {
        return _this.signInWithAuth0(event);
      },
      provider: "auth0"
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("script", {
      onLoad: this.handleLoad,
      src: "https://cdn.auth0.com/js/auth0/9.11/auth0.min.js"
    }), _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_IN_WITH_AUTH0));
  };

  return class_2;
}();

var logger$2 = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["ConsoleLogger"]('amplify-facebook-button');

var AmplifyFacebookButton = function () {
  function class_3(hostRef) {
    var _this = this;

    Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /** Auth state change handler for this component
     * e.g. SignIn -> 'Create Account' link -> SignUp
     */

    this.handleAuthStateChange = _helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["d"];

    this.federatedSignIn = function (authResponse) {
      var accessToken = authResponse.accessToken,
          expiresIn = authResponse.expiresIn;

      if (!accessToken) {
        return;
      }

      if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].federatedSignIn !== 'function' || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser !== 'function') {
        throw new Error(_constants_56d75870_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
      }

      var date = new Date();
      var expires_at = expiresIn * 1000 + date.getTime();
      var fields = 'name,email';
      window['FB'].api('/me', {
        fields: fields
      }, function (response) {
        return __awaiter(_this, void 0, void 0, function () {
          var user, authenticatedUser;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                user = {
                  name: response.name,
                  email: response.email
                };
                return [4
                /*yield*/
                , _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].federatedSignIn('facebook', {
                  token: accessToken,
                  expires_at: expires_at
                }, user)];

              case 1:
                _a.sent();

                return [4
                /*yield*/
                , _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser()];

              case 2:
                authenticatedUser = _a.sent();
                this.handleAuthStateChange(_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedIn, authenticatedUser);
                return [2
                /*return*/
                ];
            }
          });
        });
      });
    };

    this.getLoginStatus = function () {
      window['FB'].getLoginStatus(function (response) {
        try {
          window.localStorage.setItem(_constants_56d75870_js__WEBPACK_IMPORTED_MODULE_5__["i"], JSON.stringify({
            provider: 'facebook'
          }));
        } catch (e) {
          logger$2.debug('Failed to cache auth source into localStorage', e);
        }

        if (response.status === 'connected') {
          return _this.federatedSignIn(response.authResponse);
        }

        _this.login();
      });
    };

    this.login = function () {
      var scope = 'public_profile,email';
      window['FB'].login(function (response) {
        if (response && response.authResponse) {
          _this.federatedSignIn(response.authResponse);
        }
      }, {
        scope: scope
      });
    };
  }
  /**
   * @see https://developers.facebook.com/docs/javascript/reference/FB.init/v5.0
   */


  class_3.prototype.signInWithFacebook = function (event) {
    event.preventDefault();
    window['FB'].init({
      appId: this.appId,
      cookie: true,
      xfbml: false,
      version: 'v5.0'
    });
    this.getLoginStatus();
  };

  class_3.prototype.render = function () {
    var _this = this;

    return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-sign-in-button", {
      onClick: function onClick(event) {
        return _this.signInWithFacebook(event);
      },
      provider: "facebook"
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("script", {
      async: true,
      defer: true,
      src: "https://connect.facebook.net/en_US/sdk.js"
    }), _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_IN_WITH_FACEBOOK));
  };

  return class_3;
}();

var logger$3 = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["ConsoleLogger"]('amplify-google-button');

var AmplifyGoogleButton = function () {
  function class_4(hostRef) {
    var _this = this;

    Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /** Auth state change handler for this component
     * e.g. SignIn -> 'Create Account' link -> SignUp
     */

    this.handleAuthStateChange = _helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["d"];

    this.handleError = function (error) {
      console.error(error);
    };
    /**
     * @see https://developers.google.com/identity/sign-in/web/build-button#building_a_button_with_a_custom_graphic
     */


    this.handleLoad = function () {
      window['gapi'].load('auth2');
    };

    this.handleUser = function (user) {
      return __awaiter(_this, void 0, void 0, function () {
        var _a, id_token, expires_at, profile, authenticatedUser;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].federatedSignIn !== 'function' || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser !== 'function') {
                throw new Error(_constants_56d75870_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
              }

              try {
                window.localStorage.setItem(_constants_56d75870_js__WEBPACK_IMPORTED_MODULE_5__["i"], JSON.stringify({
                  provider: 'google'
                }));
              } catch (e) {
                logger$3.debug('Failed to cache auth source into localStorage', e);
              }

              _a = user.getAuthResponse(), id_token = _a.id_token, expires_at = _a.expires_at;
              profile = user.getBasicProfile();
              return [4
              /*yield*/
              , _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].federatedSignIn('google', {
                token: id_token,
                expires_at: expires_at
              }, {
                email: profile.getEmail(),
                name: profile.getName(),
                picture: profile.getImageUrl()
              })];

            case 1:
              _b.sent();

              return [4
              /*yield*/
              , _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser()];

            case 2:
              authenticatedUser = _b.sent();

              try {
                this.handleAuthStateChange(_auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedIn, authenticatedUser);
              } catch (error) {
                this.handleError(error);
              }

              return [2
              /*return*/
              ];
          }
        });
      });
    };
  }

  class_4.prototype.getAuthInstance = function () {
    if (window['gapi'] && window['gapi'].auth2) {
      return window['gapi'].auth2.getAuthInstance() || window['gapi'].auth2.init({
        client_id: this.clientId,
        cookiepolicy: 'single_host_origin',
        scope: 'profile email openid'
      });
    }

    return null;
  };

  class_4.prototype.signInWithGoogle = function (event) {
    event.preventDefault();
    this.getAuthInstance().signIn().then(this.handleUser)["catch"](this.handleError);
  };

  class_4.prototype.render = function () {
    var _this = this;

    return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-sign-in-button", {
      onClick: function onClick(event) {
        return _this.signInWithGoogle(event);
      },
      provider: "google"
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("script", {
      onLoad: this.handleLoad,
      src: "https://apis.google.com/js/api:client.js"
    }), _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_IN_WITH_GOOGLE));
  };

  return class_4;
}();

var AmplifyOAuthButton = function () {
  function AmplifyOAuthButton(hostRef) {
    Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /** Federated credentials & configuration. */

    this.config = {};
  }

  AmplifyOAuthButton.prototype.signInWithOAuth = function (event) {
    event.preventDefault();
    _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].federatedSignIn();
  };

  AmplifyOAuthButton.prototype.render = function () {
    var _this = this;

    return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-sign-in-button", {
      onClick: function onClick(event) {
        return _this.signInWithOAuth(event);
      },
      provider: "oauth"
    }, this.config.label || _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_IN_WITH_AWS));
  };

  return AmplifyOAuthButton;
}();



/***/ })

}]);
//# sourceMappingURL=12.js.map