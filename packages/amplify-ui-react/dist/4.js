(this["webpackJsonpaws_amplify_react"] = this["webpackJsonpaws_amplify_react"] || []).push([[4],{

/***/ "../amplify-ui-components/dist/esm-es5/amplify-s3-album.entry.js":
/*!***********************************************************************!*\
  !*** ../amplify-ui-components/dist/esm-es5/amplify-s3-album.entry.js ***!
  \***********************************************************************/
/*! exports provided: amplify_s3_album */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_s3_album", function() { return AmplifyS3Album; });
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-83f2275b.js */ "../amplify-ui-components/dist/esm-es5/index-83f2275b.js");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "@aws-amplify/core");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storage_types_ac8c5150_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage-types-ac8c5150.js */ "../amplify-ui-components/dist/esm-es5/storage-types-ac8c5150.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/auth */ "@aws-amplify/auth");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Translations-97eed81d.js */ "../amplify-ui-components/dist/esm-es5/Translations-97eed81d.js");
/* harmony import */ var _constants_56d75870_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-56d75870.js */ "../amplify-ui-components/dist/esm-es5/constants-56d75870.js");
/* harmony import */ var _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @aws-amplify/storage */ "@aws-amplify/storage");
/* harmony import */ var _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_aws_amplify_storage__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _storage_helpers_1ee72431_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./storage-helpers-1ee72431.js */ "../amplify-ui-components/dist/esm-es5/storage-helpers-1ee72431.js");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! crypto */ "../../node_modules/crypto-browserify/index.js");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_8__);
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










var rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

var poolPtr = rnds8Pool.length;

function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    crypto__WEBPACK_IMPORTED_MODULE_8___default.a.randomFillSync(rnds8Pool);
    poolPtr = 0;
  }

  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */


var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr, offset) {
  if (offset === void 0) {
    offset = 0;
  } // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434


  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify(rnds);
}

var amplifyS3AlbumCss = ":host{--overlay-bg-color:rgba(0, 0, 0, 0.15)}.album-container{-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;margin:0 auto;padding:0 2rem}.grid-row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:-1rem -1rem;padding-bottom:3rem}.grid-item{position:relative;-ms-flex:1 0 22rem;flex:1 0 22rem;-ms-flex-positive:1;flex-grow:1;margin:1rem;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}amplify-s3-image{--width:22rem;--height:20rem;border-radius:5px;-o-object-fit:cover;object-fit:cover}.img-overlay{display:none;width:100%;height:21rem;position:absolute;top:0;left:0;background-color:var(--overlay-bg-color)}.grid-item:hover .img-overlay{display:block}";
var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Logger"]('S3Album');

var AmplifyS3Album = function () {
  function class_1(hostRef) {
    var _this = this;

    Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /** The content type header used when uploading to S3 */

    this.contentType = 'binary/octet-stream';
    /** The access level of the files */

    this.level = _storage_types_ac8c5150_js__WEBPACK_IMPORTED_MODULE_2__["A"].Public;
    /** Boolean to enable or disable picker */

    this.picker = true;
    /** Picker button text */

    this.pickerText = _Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].PICKER_TEXT;
    this.albumItems = [];
    this.imgArr = {};

    this.list = function () {
      return __awaiter(_this, void 0, void 0, function () {
        var _a, _b, path, level, track, identityId, data, error_1;

        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              _a = this, _b = _a.path, path = _b === void 0 ? '' : _b, level = _a.level, track = _a.track, identityId = _a.identityId;
              logger.debug('Album path: ' + path);

              if (!_aws_amplify_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] || typeof _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"].list !== 'function') {
                throw new Error(_constants_56d75870_js__WEBPACK_IMPORTED_MODULE_5__["e"]);
              }

              _c.label = 1;

            case 1:
              _c.trys.push([1, 3,, 4]);

              return [4
              /*yield*/
              , _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"].list(path, {
                level: level,
                track: track,
                identityId: identityId
              })];

            case 2:
              data = _c.sent();
              this.marshal(data);
              return [3
              /*break*/
              , 4];

            case 3:
              error_1 = _c.sent();
              logger.warn(error_1);
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

    this.marshal = function (list) {
      list.forEach(function (item) {
        var name = item.key.toLowerCase();
        var ext = name.split('.')[1];

        if (_storage_helpers_1ee72431_js__WEBPACK_IMPORTED_MODULE_7__["i"].has(ext)) {
          if (!item.contentType || item.contentType && item.contentType === 'binary/octet-stream') {
            item.contentType = _this.getContentType(item);
          }
        }
      });
      var filtered = list.filter(function (item) {
        return item.contentType && item.contentType.startsWith('image/');
      });
      var items = _this.filter ? _this.filter(filtered) : filtered;
      items = _this.sort ? _this.sort(items) : items;
      _this.albumItems = items;
      logger.debug('album items', _this.albumItems);

      _this.constructImgArray(_this.albumItems);
    };

    this.constructImgArray = function (list) {
      list.map(function (item) {
        _this.imgArr["" + item['key']] = item['key'];
      });
    };

    this.handlePick = function (event) {
      return __awaiter(_this, void 0, void 0, function () {
        var file, _a, _b, path, level, track, fileToKey, key, error_2, filtered;

        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              file = event.target.files[0];
              _a = this, _b = _a.path, path = _b === void 0 ? '' : _b, level = _a.level, track = _a.track, fileToKey = _a.fileToKey;
              key = path + Object(_storage_helpers_1ee72431_js__WEBPACK_IMPORTED_MODULE_7__["c"])(file, fileToKey);
              _c.label = 1;

            case 1:
              _c.trys.push([1, 3,, 4]);

              return [4
              /*yield*/
              , Object(_storage_helpers_1ee72431_js__WEBPACK_IMPORTED_MODULE_7__["p"])(key, file, level, track, file['type'], logger)];

            case 2:
              _c.sent();

              return [3
              /*break*/
              , 4];

            case 3:
              error_2 = _c.sent();
              logger.error(error_2);
              throw new Error(error_2);

            case 4:
              if (Object.keys(this.imgArr).includes(key)) {
                this.albumItems = __spreadArrays(this.albumItems);
                this.imgArr[key] = key + "-" + v4();
              } else {
                filtered = __spreadArrays(this.albumItems, this.filter ? this.filter([{
                  key: key
                }]) : [{
                  key: key
                }]);
                this.albumItems = this.sort ? this.sort(filtered) : filtered;
              }

              return [2
              /*return*/
              ];
          }
        });
      });
    };
  }

  class_1.prototype.getContentType = function (item) {
    return Object(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["filenameToContentType"])(item.key, 'image/*');
  };

  class_1.prototype.componentWillLoad = function () {
    this.list();
  };

  class_1.prototype.render = function () {
    var _this = this;

    return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      "class": "album-container"
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      "class": "grid-row"
    }, this.albumItems.map(function (item) {
      return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
        "class": "grid-item",
        key: "key-" + item.key
      }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-s3-image", {
        key: _this.imgArr[item.key],
        imgKey: item.key,
        level: _this.level,
        path: _this.path,
        identityId: _this.identityId,
        track: _this.track,
        handleOnError: _this.handleOnError,
        handleOnLoad: _this.handleOnLoad
      }), Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
        "class": "img-overlay"
      }));
    }))), this.picker && Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-picker", {
      pickerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.pickerText),
      inputHandler: function inputHandler(e) {
        return _this.handlePick(e);
      },
      acceptValue: "image/*"
    }));
  };

  return class_1;
}();

AmplifyS3Album.style = amplifyS3AlbumCss;


/***/ }),

/***/ "../amplify-ui-components/dist/esm-es5/storage-helpers-1ee72431.js":
/*!*************************************************************************!*\
  !*** ../amplify-ui-components/dist/esm-es5/storage-helpers-1ee72431.js ***!
  \*************************************************************************/
/*! exports provided: a, c, g, i, p */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTextSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return calcKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getStorageObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return imageFileType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return putStorageObject; });
/* harmony import */ var _constants_56d75870_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants-56d75870.js */ "../amplify-ui-components/dist/esm-es5/constants-56d75870.js");
/* harmony import */ var _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/storage */ "@aws-amplify/storage");
/* harmony import */ var _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__);
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



var imageFileType = new Set(['apng', 'bmp', 'gif', 'ico', 'cur', 'jpg', 'jpeg', 'jfif', 'pjpeg', 'pjp', 'png', 'svg', 'tif', 'tiff', 'webp']);

var calcKey = function calcKey(file, fileToKey) {
  var name = file.name,
      size = file.size,
      type = file.type;
  var key = encodeURI(name);

  if (fileToKey) {
    if (typeof fileToKey === 'string') {
      key = fileToKey;
    } else if (typeof fileToKey === 'function') {
      key = fileToKey({
        name: name,
        size: size,
        type: type
      });
    } else {
      key = encodeURI(JSON.stringify(fileToKey));
    }

    if (!key) {
      key = 'empty_key';
    }
  }

  return key.replace(/\s/g, '_');
};

var getStorageObject = function getStorageObject(key, level, track, identityId, logger) {
  return __awaiter(void 0, void 0, void 0, function () {
    var src, error_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (!_aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"] || typeof _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"].get !== 'function') {
            throw new Error(_constants_56d75870_js__WEBPACK_IMPORTED_MODULE_0__["e"]);
          }

          _a.label = 1;

        case 1:
          _a.trys.push([1, 3,, 4]);

          return [4
          /*yield*/
          , _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"].get(key, {
            level: level,
            track: track,
            identityId: identityId
          })];

        case 2:
          src = _a.sent();
          logger.debug('Storage image get', src);
          return [2
          /*return*/
          , src];

        case 3:
          error_1 = _a.sent();
          throw new Error(error_1);

        case 4:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var readFileAsync = function readFileAsync(blob) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();

    reader.onload = function () {
      resolve(reader.result);
    };

    reader.onerror = function () {
      reject('Failed to read file!');
      reader.abort();
    };

    reader.readAsText(blob);
  });
};

var getTextSource = function getTextSource(key, level, track, identityId, logger) {
  return __awaiter(void 0, void 0, void 0, function () {
    var textSrc, text, error_2;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (!_aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"] || typeof _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"].get !== 'function') {
            throw new Error(_constants_56d75870_js__WEBPACK_IMPORTED_MODULE_0__["e"]);
          }

          _a.label = 1;

        case 1:
          _a.trys.push([1, 4,, 5]);

          return [4
          /*yield*/
          , _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"].get(key, {
            download: true,
            level: level,
            track: track,
            identityId: identityId
          })];

        case 2:
          textSrc = _a.sent();
          logger.debug(textSrc);
          return [4
          /*yield*/
          , readFileAsync(textSrc['Body'])];

        case 3:
          text = _a.sent();
          return [2
          /*return*/
          , text];

        case 4:
          error_2 = _a.sent();
          throw new Error(error_2);

        case 5:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var putStorageObject = function putStorageObject(key, body, level, track, contentType, logger) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, error_3;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (!_aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"] || typeof _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"].put !== 'function') {
            throw new Error(_constants_56d75870_js__WEBPACK_IMPORTED_MODULE_0__["e"]);
          }

          _a.label = 1;

        case 1:
          _a.trys.push([1, 3,, 4]);

          return [4
          /*yield*/
          , _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"].put(key, body, {
            contentType: contentType,
            level: level,
            track: track
          })];

        case 2:
          data = _a.sent();
          logger.debug('Upload data', data);
          return [3
          /*break*/
          , 4];

        case 3:
          error_3 = _a.sent();
          throw new Error(error_3);

        case 4:
          return [2
          /*return*/
          ];
      }
    });
  });
};



/***/ }),

/***/ 0:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 8:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 9:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=4.js.map