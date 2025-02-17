(this["webpackJsonpaws_amplify_react"] = this["webpackJsonpaws_amplify_react"] || []).push([[5],{

/***/ "../amplify-ui-components/dist/esm-es5/amplify-radio-button_3.entry.js":
/*!*****************************************************************************!*\
  !*** ../amplify-ui-components/dist/esm-es5/amplify-radio-button_3.entry.js ***!
  \*****************************************************************************/
/*! exports provided: amplify_radio_button, amplify_toast, amplify_totp_setup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer, process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_radio_button", function() { return AmplifyRadioButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_toast", function() { return AmplifyToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_totp_setup", function() { return AmplifyTOTPSetup; });
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
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! buffer */ "../../node_modules/buffer/index.js");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! fs */ "../../node_modules/node-libs-browser/mock/empty.js");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! util */ "../../node_modules/node-libs-browser/node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! stream */ "../../node_modules/stream-browserify/index.js");
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(stream__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var zlib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! zlib */ "../../node_modules/browserify-zlib/lib/index.js");
/* harmony import */ var zlib__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(zlib__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! assert */ "../../node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_13__);
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

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















var amplifyRadioButtonCss = ":host{--font-family:var(--amplify-font-family)}.radio-button{display:block;width:100%;padding:16px;font-size:var(--amplify-text-sm);font-family:var(--font-family)}.radio-button input{margin-right:12px}";

var AmplifyRadioButton = function () {
  function AmplifyRadioButton(hostRef) {
    Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /** (Optional) The placeholder for the input element.  Using hints is recommended, but placeholders can also be useful to convey information to users. */

    this.placeholder = '';
    /** If `true`, the radio button is selected. */

    this.checked = false;
    /** If `true`, the checkbox is disabled */

    this.disabled = false;
  }

  AmplifyRadioButton.prototype.render = function () {
    return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
      "class": "radio-button"
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", Object.assign({
      type: "radio",
      name: this.name,
      value: this.value,
      onInput: this.handleInputChange,
      placeholder: this.placeholder,
      id: this.fieldId,
      checked: this.checked,
      disabled: this.disabled
    }, this.inputProps)), Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-label", {
      htmlFor: this.fieldId
    }, this.label));
  };

  return AmplifyRadioButton;
}();

AmplifyRadioButton.style = amplifyRadioButtonCss;
var amplifyToastCss = ":host{--background-color:var(--amplify-secondary-tint);--color:var(--amplify-white);--font-size:var(--amplify-text-sm);--font-family:var(--amplify-font-family);--close-icon-color:var(--amplify-white);--close-icon-hover:var(--amplify-red)}.toast-icon{padding-right:5px}.toast{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;position:absolute;top:0;left:0;width:100%;z-index:99;-webkit-box-shadow:0 0 5px 0 rgba(0, 0, 0, 0.3);box-shadow:0 0 5px 0 rgba(0, 0, 0, 0.3);padding:16px;background-color:var(--background-color);font-size:var(--font-size);color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:5px;font-family:var(--font-family)}.toast>span{margin-right:10px}.toast-close{margin-left:auto;-ms-flex-item-align:center;align-self:center;position:relative;width:18px;height:18px;overflow:hidden;cursor:pointer;background:transparent;border:none}.toast-close::before,.toast-close::after{content:\"\";position:absolute;height:2px;width:100%;top:50%;left:0;margin-top:-1px;background:var(--close-icon-color)}.toast-close:hover::before,.toast-close:hover::after{background:var(--close-icon-hover)}.toast-close::before{-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}.toast-close::after{-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-ms-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg)}";

var AmplifyToast = function () {
  function AmplifyToast(hostRef) {
    Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /** Message to be displayed inside the toast*/

    this.message = '';
  }
  /*
  TODO #170365145: Work on a helper function that will populate and
  update class colors for success / warning / failure messages
  */


  AmplifyToast.prototype.render = function () {
    return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      "class": "toast"
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-icon", {
      "class": "toast-icon",
      name: "warning"
    }), this.message ? Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, this.message) : null, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
      "class": "toast-close",
      onClick: this.handleClose
    }));
  };

  return AmplifyToast;
}();

AmplifyToast.style = amplifyToastCss;
var toString = {}.toString;

var C__4keyps_local_modules_amplifyJs_node_modules_qrcode_node_modules_isarray = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

function typedArraySupport() {
  // Can typed array instances be augmented?
  try {
    var arr = new Uint8Array(1);
    arr.__proto__ = {
      __proto__: Uint8Array.prototype,
      foo: function foo() {
        return 42;
      }
    };
    return arr.foo() === 42;
  } catch (e) {
    return false;
  }
}

Buffer$1.TYPED_ARRAY_SUPPORT = typedArraySupport();
var K_MAX_LENGTH = Buffer$1.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;

function Buffer$1(arg, offset, length) {
  if (!Buffer$1.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer$1)) {
    return new Buffer$1(arg, offset, length);
  }

  if (typeof arg === 'number') {
    return allocUnsafe(this, arg);
  }

  return from(this, arg, offset, length);
}

if (Buffer$1.TYPED_ARRAY_SUPPORT) {
  Buffer$1.prototype.__proto__ = Uint8Array.prototype;
  Buffer$1.__proto__ = Uint8Array; // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97

  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer$1[Symbol.species] === Buffer$1) {
    Object.defineProperty(Buffer$1, Symbol.species, {
      value: null,
      configurable: true,
      enumerable: false,
      writable: false
    });
  }
}

function checked(length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes');
  }

  return length | 0;
}

function isnan(val) {
  return val !== val; // eslint-disable-line no-self-compare
}

function createBuffer(that, length) {
  var buf;

  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
    buf = new Uint8Array(length);
    buf.__proto__ = Buffer$1.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    buf = that;

    if (buf === null) {
      buf = new Buffer$1(length);
    }

    buf.length = length;
  }

  return buf;
}

function allocUnsafe(that, size) {
  var buf = createBuffer(that, size < 0 ? 0 : checked(size) | 0);

  if (!Buffer$1.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      buf[i] = 0;
    }
  }

  return buf;
}

function fromString(that, string) {
  var length = byteLength(string) | 0;
  var buf = createBuffer(that, length);
  var actual = buf.write(string);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
  }

  return buf;
}

function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  var buf = createBuffer(that, length);

  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255;
  }

  return buf;
}

function fromArrayBuffer(that, array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds');
  }

  var buf;

  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array);
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset);
  } else {
    buf = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    buf.__proto__ = Buffer$1.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    buf = fromArrayLike(that, buf);
  }

  return buf;
}

function fromObject(that, obj) {
  if (Buffer$1.isBuffer(obj)) {
    var len = checked(obj.length) | 0;
    var buf = createBuffer(that, len);

    if (buf.length === 0) {
      return buf;
    }

    obj.copy(buf, 0, 0, len);
    return buf;
  }

  if (obj) {
    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0);
      }

      return fromArrayLike(that, obj);
    }

    if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}

function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i); // is surrogate component

    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } // valid lead


        leadSurrogate = codePoint;
        continue;
      } // 2 leads in a row


      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      } // valid surrogate pair


      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null; // encode utf8

    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function byteLength(string) {
  if (Buffer$1.isBuffer(string)) {
    return string.length;
  }

  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }

  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0;
  return utf8ToBytes(string).length;
}

function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }

  return i;
}

function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function from(that, value, offset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, offset, length);
  }

  if (typeof value === 'string') {
    return fromString(that, value);
  }

  return fromObject(that, value);
}

Buffer$1.prototype.write = function write(string, offset, length) {
  // Buffer#write(string)
  if (offset === undefined) {
    length = this.length;
    offset = 0; // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    length = this.length;
    offset = 0; // Buffer#write(string, offset[, length])
  } else if (isFinite(offset)) {
    offset = offset | 0;

    if (isFinite(length)) {
      length = length | 0;
    } else {
      length = undefined;
    }
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }

  return utf8Write(this, string, offset, length);
};

Buffer$1.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;
  var newBuf;

  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end); // Return an augmented `Uint8Array` instance

    newBuf.__proto__ = Buffer$1.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer$1(sliceLen, undefined);

    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf;
};

Buffer$1.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start; // Copy 0 bytes; we're done

  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0; // Fatal error conditions

  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }

  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
  if (end < 0) throw new RangeError('sourceEnd out of bounds'); // Are we oob?

  if (end > this.length) end = this.length;

  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer$1.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
  }

  return len;
};

Buffer$1.prototype.fill = function fill(val, start, end) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      end = this.length;
    }

    if (val.length === 1) {
      var code = val.charCodeAt(0);

      if (code < 256) {
        val = code;
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  } // Invalid ranges are not set to a default, so can range check early.


  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return this;
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;
  if (!val) val = 0;
  var i;

  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = Buffer$1.isBuffer(val) ? val : new Buffer$1(val);
    var len = bytes.length;

    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this;
};

Buffer$1.concat = function concat(list, length) {
  if (!C__4keyps_local_modules_amplifyJs_node_modules_qrcode_node_modules_isarray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return createBuffer(null, 0);
  }

  var i;

  if (length === undefined) {
    length = 0;

    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = allocUnsafe(null, length);
  var pos = 0;

  for (i = 0; i < list.length; ++i) {
    var buf = list[i];

    if (!Buffer$1.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }

    buf.copy(buffer, pos);
    pos += buf.length;
  }

  return buffer;
};

Buffer$1.byteLength = byteLength;
Buffer$1.prototype._isBuffer = true;

Buffer$1.isBuffer = function isBuffer(b) {
  return !!(b != null && b._isBuffer);
};

function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function require(path, base) {
      return commonjsRequire();
    }
  }, fn(module, module.exports), module.exports;
}

function commonjsRequire() {
  throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var errorCorrectionLevel = createCommonjsModule(function (module, exports) {
  exports.L = {
    bit: 1
  };
  exports.M = {
    bit: 0
  };
  exports.Q = {
    bit: 3
  };
  exports.H = {
    bit: 2
  };

  function fromString(string) {
    if (typeof string !== 'string') {
      throw new Error('Param is not a string');
    }

    var lcStr = string.toLowerCase();

    switch (lcStr) {
      case 'l':
      case 'low':
        return exports.L;

      case 'm':
      case 'medium':
        return exports.M;

      case 'q':
      case 'quartile':
        return exports.Q;

      case 'h':
      case 'high':
        return exports.H;

      default:
        throw new Error('Unknown EC Level: ' + string);
    }
  }

  exports.isValid = function isValid(level) {
    return level && typeof level.bit !== 'undefined' && level.bit >= 0 && level.bit < 4;
  };

  exports.from = function from(value, defaultValue) {
    if (exports.isValid(value)) {
      return value;
    }

    try {
      return fromString(value);
    } catch (e) {
      return defaultValue;
    }
  };
});

function typedArraySupport$1() {
  // Can typed array instances be augmented?
  try {
    var arr = new Uint8Array(1);
    arr.__proto__ = {
      __proto__: Uint8Array.prototype,
      foo: function foo() {
        return 42;
      }
    };
    return arr.foo() === 42;
  } catch (e) {
    return false;
  }
}

Buffer$2.TYPED_ARRAY_SUPPORT = typedArraySupport$1();
var K_MAX_LENGTH$1 = Buffer$2.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;

function Buffer$2(arg, offset, length) {
  if (!Buffer$2.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer$2)) {
    return new Buffer$2(arg, offset, length);
  }

  if (typeof arg === 'number') {
    return allocUnsafe$1(this, arg);
  }

  return from$1(this, arg, offset, length);
}

if (Buffer$2.TYPED_ARRAY_SUPPORT) {
  Buffer$2.prototype.__proto__ = Uint8Array.prototype;
  Buffer$2.__proto__ = Uint8Array; // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97

  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer$2[Symbol.species] === Buffer$2) {
    Object.defineProperty(Buffer$2, Symbol.species, {
      value: null,
      configurable: true,
      enumerable: false,
      writable: false
    });
  }
}

function checked$1(length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH$1) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + K_MAX_LENGTH$1.toString(16) + ' bytes');
  }

  return length | 0;
}

function isnan$1(val) {
  return val !== val; // eslint-disable-line no-self-compare
}

function createBuffer$1(that, length) {
  var buf;

  if (Buffer$2.TYPED_ARRAY_SUPPORT) {
    buf = new Uint8Array(length);
    buf.__proto__ = Buffer$2.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    buf = that;

    if (buf === null) {
      buf = new Buffer$2(length);
    }

    buf.length = length;
  }

  return buf;
}

function allocUnsafe$1(that, size) {
  var buf = createBuffer$1(that, size < 0 ? 0 : checked$1(size) | 0);

  if (!Buffer$2.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      buf[i] = 0;
    }
  }

  return buf;
}

function fromString$1(that, string) {
  var length = byteLength$1(string) | 0;
  var buf = createBuffer$1(that, length);
  var actual = buf.write(string);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
  }

  return buf;
}

function fromArrayLike$1(that, array) {
  var length = array.length < 0 ? 0 : checked$1(array.length) | 0;
  var buf = createBuffer$1(that, length);

  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255;
  }

  return buf;
}

function fromArrayBuffer$1(that, array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds');
  }

  var buf;

  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array);
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset);
  } else {
    buf = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer$2.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    buf.__proto__ = Buffer$2.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    buf = fromArrayLike$1(that, buf);
  }

  return buf;
}

function fromObject$1(that, obj) {
  if (Buffer$2.isBuffer(obj)) {
    var len = checked$1(obj.length) | 0;
    var buf = createBuffer$1(that, len);

    if (buf.length === 0) {
      return buf;
    }

    obj.copy(buf, 0, 0, len);
    return buf;
  }

  if (obj) {
    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan$1(obj.length)) {
        return createBuffer$1(that, 0);
      }

      return fromArrayLike$1(that, obj);
    }

    if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
      return fromArrayLike$1(that, obj.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}

function utf8ToBytes$1(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i); // is surrogate component

    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } // valid lead


        leadSurrogate = codePoint;
        continue;
      } // 2 leads in a row


      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      } // valid surrogate pair


      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null; // encode utf8

    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function byteLength$1(string) {
  if (Buffer$2.isBuffer(string)) {
    return string.length;
  }

  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }

  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0;
  return utf8ToBytes$1(string).length;
}

function blitBuffer$1(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }

  return i;
}

function utf8Write$1(buf, string, offset, length) {
  return blitBuffer$1(utf8ToBytes$1(string, buf.length - offset), buf, offset, length);
}

function from$1(that, value, offset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer$1(that, value, offset, length);
  }

  if (typeof value === 'string') {
    return fromString$1(that, value);
  }

  return fromObject$1(that, value);
}

Buffer$2.prototype.write = function write(string, offset, length) {
  // Buffer#write(string)
  if (offset === undefined) {
    length = this.length;
    offset = 0; // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    length = this.length;
    offset = 0; // Buffer#write(string, offset[, length])
  } else if (isFinite(offset)) {
    offset = offset | 0;

    if (isFinite(length)) {
      length = length | 0;
    } else {
      length = undefined;
    }
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }

  return utf8Write$1(this, string, offset, length);
};

Buffer$2.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;
  var newBuf;

  if (Buffer$2.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end); // Return an augmented `Uint8Array` instance

    newBuf.__proto__ = Buffer$2.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer$2(sliceLen, undefined);

    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf;
};

Buffer$2.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start; // Copy 0 bytes; we're done

  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0; // Fatal error conditions

  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }

  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
  if (end < 0) throw new RangeError('sourceEnd out of bounds'); // Are we oob?

  if (end > this.length) end = this.length;

  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer$2.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
  }

  return len;
};

Buffer$2.prototype.fill = function fill(val, start, end) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      end = this.length;
    }

    if (val.length === 1) {
      var code = val.charCodeAt(0);

      if (code < 256) {
        val = code;
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  } // Invalid ranges are not set to a default, so can range check early.


  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return this;
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;
  if (!val) val = 0;
  var i;

  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = Buffer$2.isBuffer(val) ? val : new Buffer$2(val);
    var len = bytes.length;

    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this;
};

Buffer$2.concat = function concat(list, length) {
  if (!C__4keyps_local_modules_amplifyJs_node_modules_qrcode_node_modules_isarray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return createBuffer$1(null, 0);
  }

  var i;

  if (length === undefined) {
    length = 0;

    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = allocUnsafe$1(null, length);
  var pos = 0;

  for (i = 0; i < list.length; ++i) {
    var buf = list[i];

    if (!Buffer$2.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }

    buf.copy(buffer, pos);
    pos += buf.length;
  }

  return buffer;
};

Buffer$2.byteLength = byteLength$1;
Buffer$2.prototype._isBuffer = true;

Buffer$2.isBuffer = function isBuffer(b) {
  return !!(b != null && b._isBuffer);
};

var alloc = function alloc(size) {
  var buffer = new Buffer$2(size);
  buffer.fill(0);
  return buffer;
};

var from_1 = function from_1(data) {
  return new Buffer$2(data);
};

var typedarrayBuffer = {
  alloc: alloc,
  from: from_1
};
var toSJISFunction;
var CODEWORDS_COUNT = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
/**
 * Returns the QR Code size for the specified version
 *
 * @param  {Number} version QR Code version
 * @return {Number}         size of QR code
 */

var getSymbolSize = function getSymbolSize(version) {
  if (!version) throw new Error('"version" cannot be null or undefined');
  if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40');
  return version * 4 + 17;
};
/**
 * Returns the total number of codewords used to store data and EC information.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Data length in bits
 */


var getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
  return CODEWORDS_COUNT[version];
};
/**
 * Encode data with Bose-Chaudhuri-Hocquenghem
 *
 * @param  {Number} data Value to encode
 * @return {Number}      Encoded value
 */


var getBCHDigit = function getBCHDigit(data) {
  var digit = 0;

  while (data !== 0) {
    digit++;
    data >>>= 1;
  }

  return digit;
};

var setToSJISFunction = function setToSJISFunction(f) {
  if (typeof f !== 'function') {
    throw new Error('"toSJISFunc" is not a valid function.');
  }

  toSJISFunction = f;
};

var isKanjiModeEnabled = function isKanjiModeEnabled() {
  return typeof toSJISFunction !== 'undefined';
};

var toSJIS = function toSJIS(kanji) {
  return toSJISFunction(kanji);
};

var utils = {
  getSymbolSize: getSymbolSize,
  getSymbolTotalCodewords: getSymbolTotalCodewords,
  getBCHDigit: getBCHDigit,
  setToSJISFunction: setToSJISFunction,
  isKanjiModeEnabled: isKanjiModeEnabled,
  toSJIS: toSJIS
};
var alignmentPattern = createCommonjsModule(function (module, exports) {
  /**
   * Alignment pattern are fixed reference pattern in defined positions
   * in a matrix symbology, which enables the decode software to re-synchronise
   * the coordinate mapping of the image modules in the event of moderate amounts
   * of distortion of the image.
   *
   * Alignment patterns are present only in QR Code symbols of version 2 or larger
   * and their number depends on the symbol version.
   */
  var getSymbolSize = utils.getSymbolSize;
  /**
   * Calculate the row/column coordinates of the center module of each alignment pattern
   * for the specified QR Code version.
   *
   * The alignment patterns are positioned symmetrically on either side of the diagonal
   * running from the top left corner of the symbol to the bottom right corner.
   *
   * Since positions are simmetrical only half of the coordinates are returned.
   * Each item of the array will represent in turn the x and y coordinate.
   * @see {@link getPositions}
   *
   * @param  {Number} version QR Code version
   * @return {Array}          Array of coordinate
   */

  exports.getRowColCoords = function getRowColCoords(version) {
    if (version === 1) return [];
    var posCount = Math.floor(version / 7) + 2;
    var size = getSymbolSize(version);
    var intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
    var positions = [size - 7]; // Last coord is always (size - 7)

    for (var i = 1; i < posCount - 1; i++) {
      positions[i] = positions[i - 1] - intervals;
    }

    positions.push(6); // First coord is always 6

    return positions.reverse();
  };
  /**
   * Returns an array containing the positions of each alignment pattern.
   * Each array's element represent the center point of the pattern as (x, y) coordinates
   *
   * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
   * and filtering out the items that overlaps with finder pattern
   *
   * @example
   * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
   * The alignment patterns, therefore, are to be centered on (row, column)
   * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
   * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
   * and are not therefore used for alignment patterns.
   *
   * var pos = getPositions(7)
   * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
   *
   * @param  {Number} version QR Code version
   * @return {Array}          Array of coordinates
   */


  exports.getPositions = function getPositions(version) {
    var coords = [];
    var pos = exports.getRowColCoords(version);
    var posLength = pos.length;

    for (var i = 0; i < posLength; i++) {
      for (var j = 0; j < posLength; j++) {
        // Skip if position is occupied by finder patterns
        if (i === 0 && j === 0 || i === 0 && j === posLength - 1 || i === posLength - 1 && j === 0) {
          // top-right
          continue;
        }

        coords.push([pos[i], pos[j]]);
      }
    }

    return coords;
  };
});
var maskPattern = createCommonjsModule(function (module, exports) {
  /**
   * Data mask pattern reference
   * @type {Object}
   */
  exports.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };
  /**
   * Weighted penalty scores for the undesirable features
   * @type {Object}
   */

  var PenaltyScores = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
  };
  /**
   * Check if mask pattern value is valid
   *
   * @param  {Number}  mask    Mask pattern
   * @return {Boolean}         true if valid, false otherwise
   */

  exports.isValid = function isValid(mask) {
    return mask != null && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7;
  };
  /**
   * Returns mask pattern from a value.
   * If value is not valid, returns undefined
   *
   * @param  {Number|String} value        Mask pattern value
   * @return {Number}                     Valid mask pattern or undefined
   */


  exports.from = function from(value) {
    return exports.isValid(value) ? parseInt(value, 10) : undefined;
  };
  /**
  * Find adjacent modules in row/column with the same color
  * and assign a penalty value.
  *
  * Points: N1 + i
  * i is the amount by which the number of adjacent modules of the same color exceeds 5
  */


  exports.getPenaltyN1 = function getPenaltyN1(data) {
    var size = data.size;
    var points = 0;
    var sameCountCol = 0;
    var sameCountRow = 0;
    var lastCol = null;
    var lastRow = null;

    for (var row = 0; row < size; row++) {
      sameCountCol = sameCountRow = 0;
      lastCol = lastRow = null;

      for (var col = 0; col < size; col++) {
        var module = data.get(row, col);

        if (module === lastCol) {
          sameCountCol++;
        } else {
          if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
          lastCol = module;
          sameCountCol = 1;
        }

        module = data.get(col, row);

        if (module === lastRow) {
          sameCountRow++;
        } else {
          if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
          lastRow = module;
          sameCountRow = 1;
        }
      }

      if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
      if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
    }

    return points;
  };
  /**
   * Find 2x2 blocks with the same color and assign a penalty value
   *
   * Points: N2 * (m - 1) * (n - 1)
   */


  exports.getPenaltyN2 = function getPenaltyN2(data) {
    var size = data.size;
    var points = 0;

    for (var row = 0; row < size - 1; row++) {
      for (var col = 0; col < size - 1; col++) {
        var last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
        if (last === 4 || last === 0) points++;
      }
    }

    return points * PenaltyScores.N2;
  };
  /**
   * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
   * preceded or followed by light area 4 modules wide
   *
   * Points: N3 * number of pattern found
   */


  exports.getPenaltyN3 = function getPenaltyN3(data) {
    var size = data.size;
    var points = 0;
    var bitsCol = 0;
    var bitsRow = 0;

    for (var row = 0; row < size; row++) {
      bitsCol = bitsRow = 0;

      for (var col = 0; col < size; col++) {
        bitsCol = bitsCol << 1 & 0x7FF | data.get(row, col);
        if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++;
        bitsRow = bitsRow << 1 & 0x7FF | data.get(col, row);
        if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++;
      }
    }

    return points * PenaltyScores.N3;
  };
  /**
   * Calculate proportion of dark modules in entire symbol
   *
   * Points: N4 * k
   *
   * k is the rating of the deviation of the proportion of dark modules
   * in the symbol from 50% in steps of 5%
   */


  exports.getPenaltyN4 = function getPenaltyN4(data) {
    var darkCount = 0;
    var modulesCount = data.data.length;

    for (var i = 0; i < modulesCount; i++) {
      darkCount += data.data[i];
    }

    var k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
    return k * PenaltyScores.N4;
  };
  /**
   * Return mask value at given position
   *
   * @param  {Number} maskPattern Pattern reference value
   * @param  {Number} i           Row
   * @param  {Number} j           Column
   * @return {Boolean}            Mask value
   */


  function getMaskAt(maskPattern, i, j) {
    switch (maskPattern) {
      case exports.Patterns.PATTERN000:
        return (i + j) % 2 === 0;

      case exports.Patterns.PATTERN001:
        return i % 2 === 0;

      case exports.Patterns.PATTERN010:
        return j % 3 === 0;

      case exports.Patterns.PATTERN011:
        return (i + j) % 3 === 0;

      case exports.Patterns.PATTERN100:
        return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;

      case exports.Patterns.PATTERN101:
        return i * j % 2 + i * j % 3 === 0;

      case exports.Patterns.PATTERN110:
        return (i * j % 2 + i * j % 3) % 2 === 0;

      case exports.Patterns.PATTERN111:
        return (i * j % 3 + (i + j) % 2) % 2 === 0;

      default:
        throw new Error('bad maskPattern:' + maskPattern);
    }
  }
  /**
   * Apply a mask pattern to a BitMatrix
   *
   * @param  {Number}    pattern Pattern reference number
   * @param  {BitMatrix} data    BitMatrix data
   */


  exports.applyMask = function applyMask(pattern, data) {
    var size = data.size;

    for (var col = 0; col < size; col++) {
      for (var row = 0; row < size; row++) {
        if (data.isReserved(row, col)) continue;
        data.xor(row, col, getMaskAt(pattern, row, col));
      }
    }
  };
  /**
   * Returns the best mask pattern for data
   *
   * @param  {BitMatrix} data
   * @return {Number} Mask pattern reference number
   */


  exports.getBestMask = function getBestMask(data, setupFormatFunc) {
    var numPatterns = Object.keys(exports.Patterns).length;
    var bestPattern = 0;
    var lowerPenalty = Infinity;

    for (var p = 0; p < numPatterns; p++) {
      setupFormatFunc(p);
      exports.applyMask(p, data); // Calculate penalty

      var penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data); // Undo previously applied mask

      exports.applyMask(p, data);

      if (penalty < lowerPenalty) {
        lowerPenalty = penalty;
        bestPattern = p;
      }
    }

    return bestPattern;
  };
});
var errorCorrectionLevel$1 = createCommonjsModule(function (module, exports) {
  exports.L = {
    bit: 1
  };
  exports.M = {
    bit: 0
  };
  exports.Q = {
    bit: 3
  };
  exports.H = {
    bit: 2
  };

  function fromString(string) {
    if (typeof string !== 'string') {
      throw new Error('Param is not a string');
    }

    var lcStr = string.toLowerCase();

    switch (lcStr) {
      case 'l':
      case 'low':
        return exports.L;

      case 'm':
      case 'medium':
        return exports.M;

      case 'q':
      case 'quartile':
        return exports.Q;

      case 'h':
      case 'high':
        return exports.H;

      default:
        throw new Error('Unknown EC Level: ' + string);
    }
  }

  exports.isValid = function isValid(level) {
    return level && typeof level.bit !== 'undefined' && level.bit >= 0 && level.bit < 4;
  };

  exports.from = function from(value, defaultValue) {
    if (exports.isValid(value)) {
      return value;
    }

    try {
      return fromString(value);
    } catch (e) {
      return defaultValue;
    }
  };
});
var EXP_TABLE = typedarrayBuffer.alloc(512);
var LOG_TABLE = typedarrayBuffer.alloc(256);

(function initTables() {
  var x = 1;

  for (var i = 0; i < 255; i++) {
    EXP_TABLE[i] = x;
    LOG_TABLE[x] = i;
    x <<= 1; // multiply by 2
    // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
    // This means that when a number is 256 or larger, it should be XORed with 0x11D.

    if (x & 0x100) {
      // similar to x >= 256, but a lot faster (because 0x100 == 256)
      x ^= 0x11D;
    }
  } // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
  // stay inside the bounds (because we will mainly use this table for the multiplication of
  // two GF numbers, no more).
  // @see {@link mul}


  for (i = 255; i < 512; i++) {
    EXP_TABLE[i] = EXP_TABLE[i - 255];
  }
})();
/* Node.js 6.4.0 and up has full support */


var hasFullSupport = function () {
  try {
    if (!Buffer.isEncoding('latin1')) {
      return false;
    }

    var buf = Buffer.alloc ? Buffer.alloc(4) : new Buffer(4);
    buf.fill('ab', 'ucs2');
    return buf.toString('hex') === '61006200';
  } catch (_) {
    return false;
  }
}();
/* Node.js 6.4.0 and up has full support */


var hasFullSupport$1 = function () {
  try {
    if (!Buffer.isEncoding('latin1')) {
      return false;
    }

    var buf = Buffer.alloc ? Buffer.alloc(4) : new Buffer(4);
    buf.fill('ab', 'ucs2');
    return buf.toString('hex') === '61006200';
  } catch (_) {
    return false;
  }
}();

function isSingleByte(val) {
  return val.length === 1 && val.charCodeAt(0) < 256;
}

function fillWithNumber(buffer, val, start, end) {
  if (start < 0 || end > buffer.length) {
    throw new RangeError('Out of range index');
  }

  start = start >>> 0;
  end = end === undefined ? buffer.length : end >>> 0;

  if (end > start) {
    buffer.fill(val, start, end);
  }

  return buffer;
}

function fillWithBuffer(buffer, val, start, end) {
  if (start < 0 || end > buffer.length) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return buffer;
  }

  start = start >>> 0;
  end = end === undefined ? buffer.length : end >>> 0;
  var pos = start;
  var len = val.length;

  while (pos <= end - len) {
    val.copy(buffer, pos);
    pos += len;
  }

  if (pos !== end) {
    val.copy(buffer, pos, 0, end - pos);
  }

  return buffer;
}

function fill(buffer, val, start, end, encoding) {
  if (hasFullSupport$1) {
    return buffer.fill(val, start, end, encoding);
  }

  if (typeof val === 'number') {
    return fillWithNumber(buffer, val, start, end);
  }

  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = buffer.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = buffer.length;
    }

    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }

    if (encoding === 'latin1') {
      encoding = 'binary';
    }

    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }

    if (val === '') {
      return fillWithNumber(buffer, 0, start, end);
    }

    if (isSingleByte(val)) {
      return fillWithNumber(buffer, val.charCodeAt(0), start, end);
    }

    val = new Buffer(val, encoding);
  }

  if (Buffer.isBuffer(val)) {
    return fillWithBuffer(buffer, val, start, end);
  } // Other values (e.g. undefined, boolean, object) results in zero-fill


  return fillWithNumber(buffer, 0, start, end);
}

var C__4keyps_local_modules_amplifyJs_node_modules_bufferFill = fill;

function allocUnsafe$2(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number');
  }

  if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }

  if (Buffer.allocUnsafe) {
    return Buffer.allocUnsafe(size);
  } else {
    return new Buffer(size);
  }
}

var C__4keyps_local_modules_amplifyJs_node_modules_bufferAllocUnsafe = allocUnsafe$2;
var isModern = typeof Buffer.alloc === 'function' && typeof Buffer.allocUnsafe === 'function' && typeof Buffer.from === 'function';

var C__4keyps_local_modules_amplifyJs_node_modules_bufferAlloc = function alloc(size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number');
  }

  if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }

  if (Buffer.alloc) {
    return Buffer.alloc(size, fill, encoding);
  }

  var buffer = C__4keyps_local_modules_amplifyJs_node_modules_bufferAllocUnsafe(size);

  if (size === 0) {
    return buffer;
  }

  if (fill === undefined) {
    return C__4keyps_local_modules_amplifyJs_node_modules_bufferFill(buffer, 0);
  }

  if (typeof encoding !== 'string') {
    encoding = undefined;
  }

  return C__4keyps_local_modules_amplifyJs_node_modules_bufferFill(buffer, fill, encoding);
};

var toString$1 = Object.prototype.toString;
var isModern$1 = typeof Buffer.alloc === 'function' && typeof Buffer.allocUnsafe === 'function' && typeof Buffer.from === 'function';

function isArrayBuffer(input) {
  return toString$1.call(input).slice(8, -1) === 'ArrayBuffer';
}

function fromArrayBuffer$2(obj, byteOffset, length) {
  byteOffset >>>= 0;
  var maxLength = obj.byteLength - byteOffset;

  if (maxLength < 0) {
    throw new RangeError("'offset' is out of bounds");
  }

  if (length === undefined) {
    length = maxLength;
  } else {
    length >>>= 0;

    if (length > maxLength) {
      throw new RangeError("'length' is out of bounds");
    }
  }

  return isModern$1 ? Buffer.from(obj.slice(byteOffset, byteOffset + length)) : new Buffer(new Uint8Array(obj.slice(byteOffset, byteOffset + length)));
}

function fromString$2(string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }

  return isModern$1 ? Buffer.from(string, encoding) : new Buffer(string, encoding);
}

function bufferFrom(value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }

  if (isArrayBuffer(value)) {
    return fromArrayBuffer$2(value, encodingOrOffset, length);
  }

  if (typeof value === 'string') {
    return fromString$2(value, encodingOrOffset);
  }

  return isModern$1 ? Buffer.from(value) : new Buffer(value);
}

var C__4keyps_local_modules_amplifyJs_node_modules_bufferFrom = bufferFrom;
var alloc$1 = C__4keyps_local_modules_amplifyJs_node_modules_bufferAlloc;
var from_1$1 = C__4keyps_local_modules_amplifyJs_node_modules_bufferFrom;
var buffer = {
  alloc: alloc$1,
  from: from_1$1
};
var EXP_TABLE$1 = buffer.alloc(512);
var LOG_TABLE$1 = buffer.alloc(256);

(function initTables() {
  var x = 1;

  for (var i = 0; i < 255; i++) {
    EXP_TABLE$1[i] = x;
    LOG_TABLE$1[x] = i;
    x <<= 1; // multiply by 2
    // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
    // This means that when a number is 256 or larger, it should be XORed with 0x11D.

    if (x & 0x100) {
      // similar to x >= 256, but a lot faster (because 0x100 == 256)
      x ^= 0x11D;
    }
  } // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
  // stay inside the bounds (because we will mainly use this table for the multiplication of
  // two GF numbers, no more).
  // @see {@link mul}


  for (i = 255; i < 512; i++) {
    EXP_TABLE$1[i] = EXP_TABLE$1[i - 255];
  }
})();
/**
 * Returns log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */


var log = function log(n) {
  if (n < 1) throw new Error('log(' + n + ')');
  return LOG_TABLE$1[n];
};
/**
 * Returns anti-log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */


var exp = function exp(n) {
  return EXP_TABLE$1[n];
};
/**
 * Multiplies two number inside Galois Field
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number}
 */


var mul = function mul(x, y) {
  if (x === 0 || y === 0) return 0; // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
  // @see {@link initTables}

  return EXP_TABLE$1[LOG_TABLE$1[x] + LOG_TABLE$1[y]];
};

var galoisField = {
  log: log,
  exp: exp,
  mul: mul
};
var polynomial = createCommonjsModule(function (module, exports) {
  /**
   * Multiplies two polynomials inside Galois Field
   *
   * @param  {Buffer} p1 Polynomial
   * @param  {Buffer} p2 Polynomial
   * @return {Buffer}    Product of p1 and p2
   */
  exports.mul = function mul(p1, p2) {
    var coeff = typedarrayBuffer.alloc(p1.length + p2.length - 1);

    for (var i = 0; i < p1.length; i++) {
      for (var j = 0; j < p2.length; j++) {
        coeff[i + j] ^= galoisField.mul(p1[i], p2[j]);
      }
    }

    return coeff;
  };
  /**
   * Calculate the remainder of polynomials division
   *
   * @param  {Buffer} divident Polynomial
   * @param  {Buffer} divisor  Polynomial
   * @return {Buffer}          Remainder
   */


  exports.mod = function mod(divident, divisor) {
    var result = typedarrayBuffer.from(divident);

    while (result.length - divisor.length >= 0) {
      var coeff = result[0];

      for (var i = 0; i < divisor.length; i++) {
        result[i] ^= galoisField.mul(divisor[i], coeff);
      } // remove all zeros from buffer head


      var offset = 0;

      while (offset < result.length && result[offset] === 0) {
        offset++;
      }

      result = result.slice(offset);
    }

    return result;
  };
  /**
   * Generate an irreducible generator polynomial of specified degree
   * (used by Reed-Solomon encoder)
   *
   * @param  {Number} degree Degree of the generator polynomial
   * @return {Buffer}        Buffer containing polynomial coefficients
   */


  exports.generateECPolynomial = function generateECPolynomial(degree) {
    var poly = typedarrayBuffer.from([1]);

    for (var i = 0; i < degree; i++) {
      poly = exports.mul(poly, [1, galoisField.exp(i)]);
    }

    return poly;
  };
});
var polynomial$1 = createCommonjsModule(function (module, exports) {
  /**
   * Multiplies two polynomials inside Galois Field
   *
   * @param  {Buffer} p1 Polynomial
   * @param  {Buffer} p2 Polynomial
   * @return {Buffer}    Product of p1 and p2
   */
  exports.mul = function mul(p1, p2) {
    var coeff = buffer.alloc(p1.length + p2.length - 1);

    for (var i = 0; i < p1.length; i++) {
      for (var j = 0; j < p2.length; j++) {
        coeff[i + j] ^= galoisField.mul(p1[i], p2[j]);
      }
    }

    return coeff;
  };
  /**
   * Calculate the remainder of polynomials division
   *
   * @param  {Buffer} divident Polynomial
   * @param  {Buffer} divisor  Polynomial
   * @return {Buffer}          Remainder
   */


  exports.mod = function mod(divident, divisor) {
    var result = buffer.from(divident);

    while (result.length - divisor.length >= 0) {
      var coeff = result[0];

      for (var i = 0; i < divisor.length; i++) {
        result[i] ^= galoisField.mul(divisor[i], coeff);
      } // remove all zeros from buffer head


      var offset = 0;

      while (offset < result.length && result[offset] === 0) {
        offset++;
      }

      result = result.slice(offset);
    }

    return result;
  };
  /**
   * Generate an irreducible generator polynomial of specified degree
   * (used by Reed-Solomon encoder)
   *
   * @param  {Number} degree Degree of the generator polynomial
   * @return {Buffer}        Buffer containing polynomial coefficients
   */


  exports.generateECPolynomial = function generateECPolynomial(degree) {
    var poly = buffer.from([1]);

    for (var i = 0; i < degree; i++) {
      poly = exports.mul(poly, [1, galoisField.exp(i)]);
    }

    return poly;
  };
});
var kanji = '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|' + '[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|' + '[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|' + '[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+';
kanji = kanji.replace(/u/g, "\\u");
/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */

var isValid = function isValid(version) {
  return !isNaN(version) && version >= 1 && version <= 40;
};

var versionCheck = {
  isValid: isValid
};
var numeric = '[0-9]+';
var alphanumeric = '[A-Z $%*+\\-./:]+';
var kanji$1 = '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|' + '[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|' + '[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|' + '[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+';
kanji$1 = kanji$1.replace(/u/g, "\\u");

var _byte = '(?:(?![A-Z0-9 $%*+\\-./:]|' + kanji$1 + ')(?:.|[\r\n]))+';

var KANJI = new RegExp(kanji$1, 'g');
var BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g');
var BYTE = new RegExp(_byte, 'g');
var NUMERIC = new RegExp(numeric, 'g');
var ALPHANUMERIC = new RegExp(alphanumeric, 'g');
var TEST_KANJI = new RegExp('^' + kanji$1 + '$');
var TEST_NUMERIC = new RegExp('^' + numeric + '$');
var TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+\\-./:]+$');

var testKanji = function testKanji(str) {
  return TEST_KANJI.test(str);
};

var testNumeric = function testNumeric(str) {
  return TEST_NUMERIC.test(str);
};

var testAlphanumeric = function testAlphanumeric(str) {
  return TEST_ALPHANUMERIC.test(str);
};

var regex = {
  KANJI: KANJI,
  BYTE_KANJI: BYTE_KANJI,
  BYTE: BYTE,
  NUMERIC: NUMERIC,
  ALPHANUMERIC: ALPHANUMERIC,
  testKanji: testKanji,
  testNumeric: testNumeric,
  testAlphanumeric: testAlphanumeric
};
var mode = createCommonjsModule(function (module, exports) {
  /**
   * Numeric mode encodes data from the decimal digit set (0 - 9)
   * (byte values 30HEX to 39HEX).
   * Normally, 3 data characters are represented by 10 bits.
   *
   * @type {Object}
   */
  exports.NUMERIC = {
    id: 'Numeric',
    bit: 1 << 0,
    ccBits: [10, 12, 14]
  };
  /**
   * Alphanumeric mode encodes data from a set of 45 characters,
   * i.e. 10 numeric digits (0 - 9),
   *      26 alphabetic characters (A - Z),
   *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
   * Normally, two input characters are represented by 11 bits.
   *
   * @type {Object}
   */

  exports.ALPHANUMERIC = {
    id: 'Alphanumeric',
    bit: 1 << 1,
    ccBits: [9, 11, 13]
  };
  /**
   * In byte mode, data is encoded at 8 bits per character.
   *
   * @type {Object}
   */

  exports.BYTE = {
    id: 'Byte',
    bit: 1 << 2,
    ccBits: [8, 16, 16]
  };
  /**
   * The Kanji mode efficiently encodes Kanji characters in accordance with
   * the Shift JIS system based on JIS X 0208.
   * The Shift JIS values are shifted from the JIS X 0208 values.
   * JIS X 0208 gives details of the shift coded representation.
   * Each two-byte character value is compacted to a 13-bit binary codeword.
   *
   * @type {Object}
   */

  exports.KANJI = {
    id: 'Kanji',
    bit: 1 << 3,
    ccBits: [8, 10, 12]
  };
  /**
   * Mixed mode will contain a sequences of data in a combination of any of
   * the modes described above
   *
   * @type {Object}
   */

  exports.MIXED = {
    bit: -1
  };
  /**
   * Returns the number of bits needed to store the data length
   * according to QR Code specifications.
   *
   * @param  {Mode}   mode    Data mode
   * @param  {Number} version QR Code version
   * @return {Number}         Number of bits
   */

  exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
    if (!mode.ccBits) throw new Error('Invalid mode: ' + mode);

    if (!versionCheck.isValid(version)) {
      throw new Error('Invalid version: ' + version);
    }

    if (version >= 1 && version < 10) return mode.ccBits[0];else if (version < 27) return mode.ccBits[1];
    return mode.ccBits[2];
  };
  /**
   * Returns the most efficient mode to store the specified data
   *
   * @param  {String} dataStr Input data string
   * @return {Mode}           Best mode
   */


  exports.getBestModeForData = function getBestModeForData(dataStr) {
    if (regex.testNumeric(dataStr)) return exports.NUMERIC;else if (regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;else if (regex.testKanji(dataStr)) return exports.KANJI;else return exports.BYTE;
  };
  /**
   * Return mode name as string
   *
   * @param {Mode} mode Mode object
   * @returns {String}  Mode name
   */


  exports.toString = function toString(mode) {
    if (mode && mode.id) return mode.id;
    throw new Error('Invalid mode');
  };
  /**
   * Check if input param is a valid mode object
   *
   * @param   {Mode}    mode Mode object
   * @returns {Boolean} True if valid mode, false otherwise
   */


  exports.isValid = function isValid(mode) {
    return mode && mode.bit && mode.ccBits;
  };
  /**
   * Get mode object from its name
   *
   * @param   {String} string Mode name
   * @returns {Mode}          Mode object
   */


  function fromString(string) {
    if (typeof string !== 'string') {
      throw new Error('Param is not a string');
    }

    var lcStr = string.toLowerCase();

    switch (lcStr) {
      case 'numeric':
        return exports.NUMERIC;

      case 'alphanumeric':
        return exports.ALPHANUMERIC;

      case 'kanji':
        return exports.KANJI;

      case 'byte':
        return exports.BYTE;

      default:
        throw new Error('Unknown mode: ' + string);
    }
  }
  /**
   * Returns mode from a value.
   * If value is not a valid mode, returns defaultValue
   *
   * @param  {Mode|String} value        Encoding mode
   * @param  {Mode}        defaultValue Fallback value
   * @return {Mode}                     Encoding mode
   */


  exports.from = function from(value, defaultValue) {
    if (exports.isValid(value)) {
      return value;
    }

    try {
      return fromString(value);
    } catch (e) {
      return defaultValue;
    }
  };
});
var EC_BLOCKS_TABLE = [// L  M  Q  H
1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81];
var EC_CODEWORDS_TABLE = [// L  M  Q  H
7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
/**
 * Returns the number of error correction block that the QR Code should contain
 * for the specified version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction blocks
 */

var getBlocksCount = function getBlocksCount(version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case errorCorrectionLevel$1.L:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];

    case errorCorrectionLevel$1.M:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];

    case errorCorrectionLevel$1.Q:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];

    case errorCorrectionLevel$1.H:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];

    default:
      return undefined;
  }
};
/**
 * Returns the number of error correction codewords to use for the specified
 * version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction codewords
 */


var getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case errorCorrectionLevel$1.L:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];

    case errorCorrectionLevel$1.M:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];

    case errorCorrectionLevel$1.Q:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];

    case errorCorrectionLevel$1.H:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];

    default:
      return undefined;
  }
};

var errorCorrectionCode = {
  getBlocksCount: getBlocksCount,
  getTotalCodewordsCount: getTotalCodewordsCount
};
var mode$1 = createCommonjsModule(function (module, exports) {
  /**
   * Numeric mode encodes data from the decimal digit set (0 - 9)
   * (byte values 30HEX to 39HEX).
   * Normally, 3 data characters are represented by 10 bits.
   *
   * @type {Object}
   */
  exports.NUMERIC = {
    id: 'Numeric',
    bit: 1 << 0,
    ccBits: [10, 12, 14]
  };
  /**
   * Alphanumeric mode encodes data from a set of 45 characters,
   * i.e. 10 numeric digits (0 - 9),
   *      26 alphabetic characters (A - Z),
   *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
   * Normally, two input characters are represented by 11 bits.
   *
   * @type {Object}
   */

  exports.ALPHANUMERIC = {
    id: 'Alphanumeric',
    bit: 1 << 1,
    ccBits: [9, 11, 13]
  };
  /**
   * In byte mode, data is encoded at 8 bits per character.
   *
   * @type {Object}
   */

  exports.BYTE = {
    id: 'Byte',
    bit: 1 << 2,
    ccBits: [8, 16, 16]
  };
  /**
   * The Kanji mode efficiently encodes Kanji characters in accordance with
   * the Shift JIS system based on JIS X 0208.
   * The Shift JIS values are shifted from the JIS X 0208 values.
   * JIS X 0208 gives details of the shift coded representation.
   * Each two-byte character value is compacted to a 13-bit binary codeword.
   *
   * @type {Object}
   */

  exports.KANJI = {
    id: 'Kanji',
    bit: 1 << 3,
    ccBits: [8, 10, 12]
  };
  /**
   * Mixed mode will contain a sequences of data in a combination of any of
   * the modes described above
   *
   * @type {Object}
   */

  exports.MIXED = {
    bit: -1
  };
  /**
   * Returns the number of bits needed to store the data length
   * according to QR Code specifications.
   *
   * @param  {Mode}   mode    Data mode
   * @param  {Number} version QR Code version
   * @return {Number}         Number of bits
   */

  exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
    if (!mode.ccBits) throw new Error('Invalid mode: ' + mode);

    if (!versionCheck.isValid(version)) {
      throw new Error('Invalid version: ' + version);
    }

    if (version >= 1 && version < 10) return mode.ccBits[0];else if (version < 27) return mode.ccBits[1];
    return mode.ccBits[2];
  };
  /**
   * Returns the most efficient mode to store the specified data
   *
   * @param  {String} dataStr Input data string
   * @return {Mode}           Best mode
   */


  exports.getBestModeForData = function getBestModeForData(dataStr) {
    if (regex.testNumeric(dataStr)) return exports.NUMERIC;else if (regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;else if (regex.testKanji(dataStr)) return exports.KANJI;else return exports.BYTE;
  };
  /**
   * Return mode name as string
   *
   * @param {Mode} mode Mode object
   * @returns {String}  Mode name
   */


  exports.toString = function toString(mode) {
    if (mode && mode.id) return mode.id;
    throw new Error('Invalid mode');
  };
  /**
   * Check if input param is a valid mode object
   *
   * @param   {Mode}    mode Mode object
   * @returns {Boolean} True if valid mode, false otherwise
   */


  exports.isValid = function isValid(mode) {
    return mode && mode.bit && mode.ccBits;
  };
  /**
   * Get mode object from its name
   *
   * @param   {String} string Mode name
   * @returns {Mode}          Mode object
   */


  function fromString(string) {
    if (typeof string !== 'string') {
      throw new Error('Param is not a string');
    }

    var lcStr = string.toLowerCase();

    switch (lcStr) {
      case 'numeric':
        return exports.NUMERIC;

      case 'alphanumeric':
        return exports.ALPHANUMERIC;

      case 'kanji':
        return exports.KANJI;

      case 'byte':
        return exports.BYTE;

      default:
        throw new Error('Unknown mode: ' + string);
    }
  }
  /**
   * Returns mode from a value.
   * If value is not a valid mode, returns defaultValue
   *
   * @param  {Mode|String} value        Encoding mode
   * @param  {Mode}        defaultValue Fallback value
   * @return {Mode}                     Encoding mode
   */


  exports.from = function from(value, defaultValue) {
    if (exports.isValid(value)) {
      return value;
    }

    try {
      return fromString(value);
    } catch (e) {
      return defaultValue;
    }
  };
});
var version = createCommonjsModule(function (module, exports) {
  // Generator polynomial used to encode version information
  var G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
  var G18_BCH = utils.getBCHDigit(G18);

  function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
    for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
      if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
        return currentVersion;
      }
    }

    return undefined;
  }

  function getReservedBitsCount(mode, version) {
    // Character count indicator + mode indicator bits
    return mode$1.getCharCountIndicator(mode, version) + 4;
  }

  function getTotalBitsFromDataArray(segments, version) {
    var totalBits = 0;
    segments.forEach(function (data) {
      var reservedBits = getReservedBitsCount(data.mode, version);
      totalBits += reservedBits + data.getBitsLength();
    });
    return totalBits;
  }

  function getBestVersionForMixedData(segments, errorCorrectionLevel) {
    for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
      var length = getTotalBitsFromDataArray(segments, currentVersion);

      if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode$1.MIXED)) {
        return currentVersion;
      }
    }

    return undefined;
  }
  /**
   * Returns version number from a value.
   * If value is not a valid version, returns defaultValue
   *
   * @param  {Number|String} value        QR Code version
   * @param  {Number}        defaultValue Fallback value
   * @return {Number}                     QR Code version number
   */


  exports.from = function from(value, defaultValue) {
    if (versionCheck.isValid(value)) {
      return parseInt(value, 10);
    }

    return defaultValue;
  };
  /**
   * Returns how much data can be stored with the specified QR code version
   * and error correction level
   *
   * @param  {Number} version              QR Code version (1-40)
   * @param  {Number} errorCorrectionLevel Error correction level
   * @param  {Mode}   mode                 Data mode
   * @return {Number}                      Quantity of storable data
   */


  exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode) {
    if (!versionCheck.isValid(version)) {
      throw new Error('Invalid QR Code version');
    } // Use Byte mode as default


    if (typeof mode === 'undefined') mode = mode$1.BYTE; // Total codewords for this QR code version (Data + Error correction)

    var totalCodewords = utils.getSymbolTotalCodewords(version); // Total number of error correction codewords

    var ecTotalCodewords = errorCorrectionCode.getTotalCodewordsCount(version, errorCorrectionLevel); // Total number of data codewords

    var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
    if (mode === mode$1.MIXED) return dataTotalCodewordsBits;
    var usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version); // Return max number of storable codewords

    switch (mode) {
      case mode$1.NUMERIC:
        return Math.floor(usableBits / 10 * 3);

      case mode$1.ALPHANUMERIC:
        return Math.floor(usableBits / 11 * 2);

      case mode$1.KANJI:
        return Math.floor(usableBits / 13);

      case mode$1.BYTE:
      default:
        return Math.floor(usableBits / 8);
    }
  };
  /**
   * Returns the minimum version needed to contain the amount of data
   *
   * @param  {Segment} data                    Segment of data
   * @param  {Number} [errorCorrectionLevel=H] Error correction level
   * @param  {Mode} mode                       Data mode
   * @return {Number}                          QR Code version
   */


  exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
    var seg;
    var ecl = errorCorrectionLevel$1.from(errorCorrectionLevel, errorCorrectionLevel$1.M);

    if (C__4keyps_local_modules_amplifyJs_node_modules_qrcode_node_modules_isarray(data)) {
      if (data.length > 1) {
        return getBestVersionForMixedData(data, ecl);
      }

      if (data.length === 0) {
        return 1;
      }

      seg = data[0];
    } else {
      seg = data;
    }

    return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
  };
  /**
   * Returns version information with relative error correction bits
   *
   * The version information is included in QR Code symbols of version 7 or larger.
   * It consists of an 18-bit sequence containing 6 data bits,
   * with 12 error correction bits calculated using the (18, 6) Golay code.
   *
   * @param  {Number} version QR Code version
   * @return {Number}         Encoded version info bits
   */


  exports.getEncodedBits = function getEncodedBits(version) {
    if (!versionCheck.isValid(version) || version < 7) {
      throw new Error('Invalid QR Code version');
    }

    var d = version << 12;

    while (utils.getBCHDigit(d) - G18_BCH >= 0) {
      d ^= G18 << utils.getBCHDigit(d) - G18_BCH;
    }

    return version << 12 | d;
  };
});
var G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
var G15_BCH = utils.getBCHDigit(G15);

function NumericData(data) {
  this.mode = mode$1.NUMERIC;
  this.data = data.toString();
}

NumericData.getBitsLength = function getBitsLength(length) {
  return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
};

NumericData.prototype.getLength = function getLength() {
  return this.data.length;
};

NumericData.prototype.getBitsLength = function getBitsLength() {
  return NumericData.getBitsLength(this.data.length);
};

NumericData.prototype.write = function write(bitBuffer) {
  var i, group, value; // The input data string is divided into groups of three digits,
  // and each group is converted to its 10-bit binary equivalent.

  for (i = 0; i + 3 <= this.data.length; i += 3) {
    group = this.data.substr(i, 3);
    value = parseInt(group, 10);
    bitBuffer.put(value, 10);
  } // If the number of input digits is not an exact multiple of three,
  // the final one or two digits are converted to 4 or 7 bits respectively.


  var remainingNum = this.data.length - i;

  if (remainingNum > 0) {
    group = this.data.substr(i);
    value = parseInt(group, 10);
    bitBuffer.put(value, remainingNum * 3 + 1);
  }
};
/**
 * Array of characters available in alphanumeric mode
 *
 * As per QR Code specification, to each character
 * is assigned a value from 0 to 44 which in this case coincides
 * with the array index
 *
 * @type {Array}
 */


var ALPHA_NUM_CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', '$', '%', '*', '+', '-', '.', '/', ':'];

function AlphanumericData(data) {
  this.mode = mode$1.ALPHANUMERIC;
  this.data = data;
}

AlphanumericData.getBitsLength = function getBitsLength(length) {
  return 11 * Math.floor(length / 2) + 6 * (length % 2);
};

AlphanumericData.prototype.getLength = function getLength() {
  return this.data.length;
};

AlphanumericData.prototype.getBitsLength = function getBitsLength() {
  return AlphanumericData.getBitsLength(this.data.length);
};

AlphanumericData.prototype.write = function write(bitBuffer) {
  var i; // Input data characters are divided into groups of two characters
  // and encoded as 11-bit binary codes.

  for (i = 0; i + 2 <= this.data.length; i += 2) {
    // The character value of the first character is multiplied by 45
    var value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45; // The character value of the second digit is added to the product

    value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]); // The sum is then stored as 11-bit binary number

    bitBuffer.put(value, 11);
  } // If the number of input data characters is not a multiple of two,
  // the character value of the final character is encoded as a 6-bit binary number.


  if (this.data.length % 2) {
    bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
  }
};

function ByteData(data) {
  this.mode = mode$1.BYTE;
  this.data = typedarrayBuffer.from(data);
}

ByteData.getBitsLength = function getBitsLength(length) {
  return length * 8;
};

ByteData.prototype.getLength = function getLength() {
  return this.data.length;
};

ByteData.prototype.getBitsLength = function getBitsLength() {
  return ByteData.getBitsLength(this.data.length);
};

ByteData.prototype.write = function (bitBuffer) {
  for (var i = 0, l = this.data.length; i < l; i++) {
    bitBuffer.put(this.data[i], 8);
  }
};

function KanjiData(data) {
  this.mode = mode$1.KANJI;
  this.data = data;
}

KanjiData.getBitsLength = function getBitsLength(length) {
  return length * 13;
};

KanjiData.prototype.getLength = function getLength() {
  return this.data.length;
};

KanjiData.prototype.getBitsLength = function getBitsLength() {
  return KanjiData.getBitsLength(this.data.length);
};

KanjiData.prototype.write = function (bitBuffer) {
  var i; // In the Shift JIS system, Kanji characters are represented by a two byte combination.
  // These byte values are shifted from the JIS X 0208 values.
  // JIS X 0208 gives details of the shift coded representation.

  for (i = 0; i < this.data.length; i++) {
    var value = utils.toSJIS(this.data[i]); // For characters with Shift JIS values from 0x8140 to 0x9FFC:

    if (value >= 0x8140 && value <= 0x9FFC) {
      // Subtract 0x8140 from Shift JIS value
      value -= 0x8140; // For characters with Shift JIS values from 0xE040 to 0xEBBF
    } else if (value >= 0xE040 && value <= 0xEBBF) {
      // Subtract 0xC140 from Shift JIS value
      value -= 0xC140;
    } else {
      throw new Error('Invalid SJIS character: ' + this.data[i] + '\n' + 'Make sure your charset is UTF-8');
    } // Multiply most significant byte of result by 0xC0
    // and add least significant byte to product


    value = (value >>> 8 & 0xff) * 0xC0 + (value & 0xff); // Convert result to a 13-bit binary string

    bitBuffer.put(value, 13);
  }
};

var dijkstra_1 = createCommonjsModule(function (module) {
  /******************************************************************************
   * Created 2008-08-19.
   *
   * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
   *
   * Copyright (C) 2008
   *   Wyatt Baldwin <self@wyattbaldwin.com>
   *   All rights reserved
   *
   * Licensed under the MIT license.
   *
   *   http://www.opensource.org/licenses/mit-license.php
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *****************************************************************************/
  var dijkstra = {
    single_source_shortest_paths: function single_source_shortest_paths(graph, s, d) {
      // Predecessor map for each node that has been encountered.
      // node ID => predecessor node ID
      var predecessors = {}; // Costs of shortest paths from s to all nodes encountered.
      // node ID => cost

      var costs = {};
      costs[s] = 0; // Costs of shortest paths from s to all nodes encountered; differs from
      // `costs` in that it provides easy access to the node that currently has
      // the known shortest path from s.
      // XXX: Do we actually need both `costs` and `open`?

      var open = dijkstra.PriorityQueue.make();
      open.push(s, 0);
      var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;

      while (!open.empty()) {
        // In the nodes remaining in graph that have a known cost from s,
        // find the node, u, that currently has the shortest path from s.
        closest = open.pop();
        u = closest.value;
        cost_of_s_to_u = closest.cost; // Get nodes adjacent to u...

        adjacent_nodes = graph[u] || {}; // ...and explore the edges that connect u to those nodes, updating
        // the cost of the shortest paths to any or all of those nodes as
        // necessary. v is the node across the current edge from u.

        for (v in adjacent_nodes) {
          if (adjacent_nodes.hasOwnProperty(v)) {
            // Get the cost of the edge running from u to v.
            cost_of_e = adjacent_nodes[v]; // Cost of s to u plus the cost of u to v across e--this is *a*
            // cost from s to v that may or may not be less than the current
            // known cost to v.

            cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e; // If we haven't visited v yet OR if the current known cost from s to
            // v is greater than the new cost we just found (cost of s to u plus
            // cost of u to v across e), update v's cost in the cost list and
            // update v's predecessor in the predecessor list (it's now u).

            cost_of_s_to_v = costs[v];
            first_visit = typeof costs[v] === 'undefined';

            if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
              costs[v] = cost_of_s_to_u_plus_cost_of_e;
              open.push(v, cost_of_s_to_u_plus_cost_of_e);
              predecessors[v] = u;
            }
          }
        }
      }

      if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
        var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
        throw new Error(msg);
      }

      return predecessors;
    },
    extract_shortest_path_from_predecessor_list: function extract_shortest_path_from_predecessor_list(predecessors, d) {
      var nodes = [];
      var u = d;

      while (u) {
        nodes.push(u);
        u = predecessors[u];
      }

      nodes.reverse();
      return nodes;
    },
    find_path: function find_path(graph, s, d) {
      var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
      return dijkstra.extract_shortest_path_from_predecessor_list(predecessors, d);
    },

    /**
     * A very naive priority queue implementation.
     */
    PriorityQueue: {
      make: function make(opts) {
        var T = dijkstra.PriorityQueue,
            t = {},
            key;
        opts = opts || {};

        for (key in T) {
          if (T.hasOwnProperty(key)) {
            t[key] = T[key];
          }
        }

        t.queue = [];
        t.sorter = opts.sorter || T.default_sorter;
        return t;
      },
      default_sorter: function default_sorter(a, b) {
        return a.cost - b.cost;
      },

      /**
       * Add a new item to the queue and ensure the highest priority element
       * is at the front of the queue.
       */
      push: function push(value, cost) {
        var item = {
          value: value,
          cost: cost
        };
        this.queue.push(item);
        this.queue.sort(this.sorter);
      },

      /**
       * Return the highest priority element in the queue.
       */
      pop: function pop() {
        return this.queue.shift();
      },
      empty: function empty() {
        return this.queue.length === 0;
      }
    }
  }; // node.js module exports

  {
    module.exports = dijkstra;
  }
});

function NumericData$1(data) {
  this.mode = mode$1.NUMERIC;
  this.data = data.toString();
}

NumericData$1.getBitsLength = function getBitsLength(length) {
  return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
};

NumericData$1.prototype.getLength = function getLength() {
  return this.data.length;
};

NumericData$1.prototype.getBitsLength = function getBitsLength() {
  return NumericData$1.getBitsLength(this.data.length);
};

NumericData$1.prototype.write = function write(bitBuffer) {
  var i, group, value; // The input data string is divided into groups of three digits,
  // and each group is converted to its 10-bit binary equivalent.

  for (i = 0; i + 3 <= this.data.length; i += 3) {
    group = this.data.substr(i, 3);
    value = parseInt(group, 10);
    bitBuffer.put(value, 10);
  } // If the number of input digits is not an exact multiple of three,
  // the final one or two digits are converted to 4 or 7 bits respectively.


  var remainingNum = this.data.length - i;

  if (remainingNum > 0) {
    group = this.data.substr(i);
    value = parseInt(group, 10);
    bitBuffer.put(value, remainingNum * 3 + 1);
  }
};

var numericData = NumericData$1;
/**
 * Array of characters available in alphanumeric mode
 *
 * As per QR Code specification, to each character
 * is assigned a value from 0 to 44 which in this case coincides
 * with the array index
 *
 * @type {Array}
 */

var ALPHA_NUM_CHARS$1 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', '$', '%', '*', '+', '-', '.', '/', ':'];

function AlphanumericData$1(data) {
  this.mode = mode$1.ALPHANUMERIC;
  this.data = data;
}

AlphanumericData$1.getBitsLength = function getBitsLength(length) {
  return 11 * Math.floor(length / 2) + 6 * (length % 2);
};

AlphanumericData$1.prototype.getLength = function getLength() {
  return this.data.length;
};

AlphanumericData$1.prototype.getBitsLength = function getBitsLength() {
  return AlphanumericData$1.getBitsLength(this.data.length);
};

AlphanumericData$1.prototype.write = function write(bitBuffer) {
  var i; // Input data characters are divided into groups of two characters
  // and encoded as 11-bit binary codes.

  for (i = 0; i + 2 <= this.data.length; i += 2) {
    // The character value of the first character is multiplied by 45
    var value = ALPHA_NUM_CHARS$1.indexOf(this.data[i]) * 45; // The character value of the second digit is added to the product

    value += ALPHA_NUM_CHARS$1.indexOf(this.data[i + 1]); // The sum is then stored as 11-bit binary number

    bitBuffer.put(value, 11);
  } // If the number of input data characters is not a multiple of two,
  // the character value of the final character is encoded as a 6-bit binary number.


  if (this.data.length % 2) {
    bitBuffer.put(ALPHA_NUM_CHARS$1.indexOf(this.data[i]), 6);
  }
};

var alphanumericData = AlphanumericData$1;

function ByteData$1(data) {
  this.mode = mode$1.BYTE;
  this.data = buffer.from(data);
}

ByteData$1.getBitsLength = function getBitsLength(length) {
  return length * 8;
};

ByteData$1.prototype.getLength = function getLength() {
  return this.data.length;
};

ByteData$1.prototype.getBitsLength = function getBitsLength() {
  return ByteData$1.getBitsLength(this.data.length);
};

ByteData$1.prototype.write = function (bitBuffer) {
  for (var i = 0, l = this.data.length; i < l; i++) {
    bitBuffer.put(this.data[i], 8);
  }
};

var byteData = ByteData$1;

function KanjiData$1(data) {
  this.mode = mode$1.KANJI;
  this.data = data;
}

KanjiData$1.getBitsLength = function getBitsLength(length) {
  return length * 13;
};

KanjiData$1.prototype.getLength = function getLength() {
  return this.data.length;
};

KanjiData$1.prototype.getBitsLength = function getBitsLength() {
  return KanjiData$1.getBitsLength(this.data.length);
};

KanjiData$1.prototype.write = function (bitBuffer) {
  var i; // In the Shift JIS system, Kanji characters are represented by a two byte combination.
  // These byte values are shifted from the JIS X 0208 values.
  // JIS X 0208 gives details of the shift coded representation.

  for (i = 0; i < this.data.length; i++) {
    var value = utils.toSJIS(this.data[i]); // For characters with Shift JIS values from 0x8140 to 0x9FFC:

    if (value >= 0x8140 && value <= 0x9FFC) {
      // Subtract 0x8140 from Shift JIS value
      value -= 0x8140; // For characters with Shift JIS values from 0xE040 to 0xEBBF
    } else if (value >= 0xE040 && value <= 0xEBBF) {
      // Subtract 0xC140 from Shift JIS value
      value -= 0xC140;
    } else {
      throw new Error('Invalid SJIS character: ' + this.data[i] + '\n' + 'Make sure your charset is UTF-8');
    } // Multiply most significant byte of result by 0xC0
    // and add least significant byte to product


    value = (value >>> 8 & 0xff) * 0xC0 + (value & 0xff); // Convert result to a 13-bit binary string

    bitBuffer.put(value, 13);
  }
};

var kanjiData = KanjiData$1;
var dijkstra_1$1 = createCommonjsModule(function (module) {
  /******************************************************************************
   * Created 2008-08-19.
   *
   * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
   *
   * Copyright (C) 2008
   *   Wyatt Baldwin <self@wyattbaldwin.com>
   *   All rights reserved
   *
   * Licensed under the MIT license.
   *
   *   http://www.opensource.org/licenses/mit-license.php
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *****************************************************************************/
  var dijkstra = {
    single_source_shortest_paths: function single_source_shortest_paths(graph, s, d) {
      // Predecessor map for each node that has been encountered.
      // node ID => predecessor node ID
      var predecessors = {}; // Costs of shortest paths from s to all nodes encountered.
      // node ID => cost

      var costs = {};
      costs[s] = 0; // Costs of shortest paths from s to all nodes encountered; differs from
      // `costs` in that it provides easy access to the node that currently has
      // the known shortest path from s.
      // XXX: Do we actually need both `costs` and `open`?

      var open = dijkstra.PriorityQueue.make();
      open.push(s, 0);
      var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;

      while (!open.empty()) {
        // In the nodes remaining in graph that have a known cost from s,
        // find the node, u, that currently has the shortest path from s.
        closest = open.pop();
        u = closest.value;
        cost_of_s_to_u = closest.cost; // Get nodes adjacent to u...

        adjacent_nodes = graph[u] || {}; // ...and explore the edges that connect u to those nodes, updating
        // the cost of the shortest paths to any or all of those nodes as
        // necessary. v is the node across the current edge from u.

        for (v in adjacent_nodes) {
          if (adjacent_nodes.hasOwnProperty(v)) {
            // Get the cost of the edge running from u to v.
            cost_of_e = adjacent_nodes[v]; // Cost of s to u plus the cost of u to v across e--this is *a*
            // cost from s to v that may or may not be less than the current
            // known cost to v.

            cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e; // If we haven't visited v yet OR if the current known cost from s to
            // v is greater than the new cost we just found (cost of s to u plus
            // cost of u to v across e), update v's cost in the cost list and
            // update v's predecessor in the predecessor list (it's now u).

            cost_of_s_to_v = costs[v];
            first_visit = typeof costs[v] === 'undefined';

            if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
              costs[v] = cost_of_s_to_u_plus_cost_of_e;
              open.push(v, cost_of_s_to_u_plus_cost_of_e);
              predecessors[v] = u;
            }
          }
        }
      }

      if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
        var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
        throw new Error(msg);
      }

      return predecessors;
    },
    extract_shortest_path_from_predecessor_list: function extract_shortest_path_from_predecessor_list(predecessors, d) {
      var nodes = [];
      var u = d;

      while (u) {
        nodes.push(u);
        u = predecessors[u];
      }

      nodes.reverse();
      return nodes;
    },
    find_path: function find_path(graph, s, d) {
      var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
      return dijkstra.extract_shortest_path_from_predecessor_list(predecessors, d);
    },

    /**
     * A very naive priority queue implementation.
     */
    PriorityQueue: {
      make: function make(opts) {
        var T = dijkstra.PriorityQueue,
            t = {},
            key;
        opts = opts || {};

        for (key in T) {
          if (T.hasOwnProperty(key)) {
            t[key] = T[key];
          }
        }

        t.queue = [];
        t.sorter = opts.sorter || T.default_sorter;
        return t;
      },
      default_sorter: function default_sorter(a, b) {
        return a.cost - b.cost;
      },

      /**
       * Add a new item to the queue and ensure the highest priority element
       * is at the front of the queue.
       */
      push: function push(value, cost) {
        var item = {
          value: value,
          cost: cost
        };
        this.queue.push(item);
        this.queue.sort(this.sorter);
      },

      /**
       * Return the highest priority element in the queue.
       */
      pop: function pop() {
        return this.queue.shift();
      },
      empty: function empty() {
        return this.queue.length === 0;
      }
    }
  }; // node.js module exports

  {
    module.exports = dijkstra;
  }
});
var segments = createCommonjsModule(function (module, exports) {
  /**
   * Returns UTF8 byte length
   *
   * @param  {String} str Input string
   * @return {Number}     Number of byte
   */
  function getStringByteLength(str) {
    return unescape(encodeURIComponent(str)).length;
  }
  /**
   * Get a list of segments of the specified mode
   * from a string
   *
   * @param  {Mode}   mode Segment mode
   * @param  {String} str  String to process
   * @return {Array}       Array of object with segments data
   */


  function getSegments(regex, mode, str) {
    var segments = [];
    var result;

    while ((result = regex.exec(str)) !== null) {
      segments.push({
        data: result[0],
        index: result.index,
        mode: mode,
        length: result[0].length
      });
    }

    return segments;
  }
  /**
   * Extracts a series of segments with the appropriate
   * modes from a string
   *
   * @param  {String} dataStr Input string
   * @return {Array}          Array of object with segments data
   */


  function getSegmentsFromString(dataStr) {
    var numSegs = getSegments(regex.NUMERIC, mode$1.NUMERIC, dataStr);
    var alphaNumSegs = getSegments(regex.ALPHANUMERIC, mode$1.ALPHANUMERIC, dataStr);
    var byteSegs;
    var kanjiSegs;

    if (utils.isKanjiModeEnabled()) {
      byteSegs = getSegments(regex.BYTE, mode$1.BYTE, dataStr);
      kanjiSegs = getSegments(regex.KANJI, mode$1.KANJI, dataStr);
    } else {
      byteSegs = getSegments(regex.BYTE_KANJI, mode$1.BYTE, dataStr);
      kanjiSegs = [];
    }

    var segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
    return segs.sort(function (s1, s2) {
      return s1.index - s2.index;
    }).map(function (obj) {
      return {
        data: obj.data,
        mode: obj.mode,
        length: obj.length
      };
    });
  }
  /**
   * Returns how many bits are needed to encode a string of
   * specified length with the specified mode
   *
   * @param  {Number} length String length
   * @param  {Mode} mode     Segment mode
   * @return {Number}        Bit length
   */


  function getSegmentBitsLength(length, mode) {
    switch (mode) {
      case mode$1.NUMERIC:
        return numericData.getBitsLength(length);

      case mode$1.ALPHANUMERIC:
        return alphanumericData.getBitsLength(length);

      case mode$1.KANJI:
        return kanjiData.getBitsLength(length);

      case mode$1.BYTE:
        return byteData.getBitsLength(length);
    }
  }
  /**
   * Merges adjacent segments which have the same mode
   *
   * @param  {Array} segs Array of object with segments data
   * @return {Array}      Array of object with segments data
   */


  function mergeSegments(segs) {
    return segs.reduce(function (acc, curr) {
      var prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;

      if (prevSeg && prevSeg.mode === curr.mode) {
        acc[acc.length - 1].data += curr.data;
        return acc;
      }

      acc.push(curr);
      return acc;
    }, []);
  }
  /**
   * Generates a list of all possible nodes combination which
   * will be used to build a segments graph.
   *
   * Nodes are divided by groups. Each group will contain a list of all the modes
   * in which is possible to encode the given text.
   *
   * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
   * The group for '12345' will contain then 3 objects, one for each
   * possible encoding mode.
   *
   * Each node represents a possible segment.
   *
   * @param  {Array} segs Array of object with segments data
   * @return {Array}      Array of object with segments data
   */


  function buildNodes(segs) {
    var nodes = [];

    for (var i = 0; i < segs.length; i++) {
      var seg = segs[i];

      switch (seg.mode) {
        case mode$1.NUMERIC:
          nodes.push([seg, {
            data: seg.data,
            mode: mode$1.ALPHANUMERIC,
            length: seg.length
          }, {
            data: seg.data,
            mode: mode$1.BYTE,
            length: seg.length
          }]);
          break;

        case mode$1.ALPHANUMERIC:
          nodes.push([seg, {
            data: seg.data,
            mode: mode$1.BYTE,
            length: seg.length
          }]);
          break;

        case mode$1.KANJI:
          nodes.push([seg, {
            data: seg.data,
            mode: mode$1.BYTE,
            length: getStringByteLength(seg.data)
          }]);
          break;

        case mode$1.BYTE:
          nodes.push([{
            data: seg.data,
            mode: mode$1.BYTE,
            length: getStringByteLength(seg.data)
          }]);
      }
    }

    return nodes;
  }
  /**
   * Builds a graph from a list of nodes.
   * All segments in each node group will be connected with all the segments of
   * the next group and so on.
   *
   * At each connection will be assigned a weight depending on the
   * segment's byte length.
   *
   * @param  {Array} nodes    Array of object with segments data
   * @param  {Number} version QR Code version
   * @return {Object}         Graph of all possible segments
   */


  function buildGraph(nodes, version) {
    var table = {};
    var graph = {
      'start': {}
    };
    var prevNodeIds = ['start'];

    for (var i = 0; i < nodes.length; i++) {
      var nodeGroup = nodes[i];
      var currentNodeIds = [];

      for (var j = 0; j < nodeGroup.length; j++) {
        var node = nodeGroup[j];
        var key = '' + i + j;
        currentNodeIds.push(key);
        table[key] = {
          node: node,
          lastCount: 0
        };
        graph[key] = {};

        for (var n = 0; n < prevNodeIds.length; n++) {
          var prevNodeId = prevNodeIds[n];

          if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
            graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
            table[prevNodeId].lastCount += node.length;
          } else {
            if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
            graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + mode$1.getCharCountIndicator(node.mode, version); // switch cost
          }
        }
      }

      prevNodeIds = currentNodeIds;
    }

    for (n = 0; n < prevNodeIds.length; n++) {
      graph[prevNodeIds[n]]['end'] = 0;
    }

    return {
      map: graph,
      table: table
    };
  }
  /**
   * Builds a segment from a specified data and mode.
   * If a mode is not specified, the more suitable will be used.
   *
   * @param  {String} data             Input data
   * @param  {Mode | String} modesHint Data mode
   * @return {Segment}                 Segment
   */


  function buildSingleSegment(data, modesHint) {
    var mode;
    var bestMode = mode$1.getBestModeForData(data);
    mode = mode$1.from(modesHint, bestMode); // Make sure data can be encoded

    if (mode !== mode$1.BYTE && mode.bit < bestMode.bit) {
      throw new Error('"' + data + '"' + ' cannot be encoded with mode ' + mode$1.toString(mode) + '.\n Suggested mode is: ' + mode$1.toString(bestMode));
    } // Use Mode.BYTE if Kanji support is disabled


    if (mode === mode$1.KANJI && !utils.isKanjiModeEnabled()) {
      mode = mode$1.BYTE;
    }

    switch (mode) {
      case mode$1.NUMERIC:
        return new numericData(data);

      case mode$1.ALPHANUMERIC:
        return new alphanumericData(data);

      case mode$1.KANJI:
        return new kanjiData(data);

      case mode$1.BYTE:
        return new byteData(data);
    }
  }
  /**
   * Builds a list of segments from an array.
   * Array can contain Strings or Objects with segment's info.
   *
   * For each item which is a string, will be generated a segment with the given
   * string and the more appropriate encoding mode.
   *
   * For each item which is an object, will be generated a segment with the given
   * data and mode.
   * Objects must contain at least the property "data".
   * If property "mode" is not present, the more suitable mode will be used.
   *
   * @param  {Array} array Array of objects with segments data
   * @return {Array}       Array of Segments
   */


  exports.fromArray = function fromArray(array) {
    return array.reduce(function (acc, seg) {
      if (typeof seg === 'string') {
        acc.push(buildSingleSegment(seg, null));
      } else if (seg.data) {
        acc.push(buildSingleSegment(seg.data, seg.mode));
      }

      return acc;
    }, []);
  };
  /**
   * Builds an optimized sequence of segments from a string,
   * which will produce the shortest possible bitstream.
   *
   * @param  {String} data    Input string
   * @param  {Number} version QR Code version
   * @return {Array}          Array of segments
   */


  exports.fromString = function fromString(data, version) {
    var segs = getSegmentsFromString(data, utils.isKanjiModeEnabled());
    var nodes = buildNodes(segs);
    var graph = buildGraph(nodes, version);
    var path = dijkstra_1$1.find_path(graph.map, 'start', 'end');
    var optimizedSegs = [];

    for (var i = 1; i < path.length - 1; i++) {
      optimizedSegs.push(graph.table[path[i]].node);
    }

    return exports.fromArray(mergeSegments(optimizedSegs));
  };
  /**
   * Splits a string in various segments with the modes which
   * best represent their content.
   * The produced segments are far from being optimized.
   * The output of this function is only used to estimate a QR Code version
   * which may contain the data.
   *
   * @param  {string} data Input string
   * @return {Array}       Array of segments
   */


  exports.rawSplit = function rawSplit(data) {
    return exports.fromArray(getSegmentsFromString(data, utils.isKanjiModeEnabled()));
  };
});

function BitBuffer() {
  this.buffer = [];
  this.length = 0;
}

BitBuffer.prototype = {
  get: function get(index) {
    var bufIndex = Math.floor(index / 8);
    return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
  },
  put: function put(num, length) {
    for (var i = 0; i < length; i++) {
      this.putBit((num >>> length - i - 1 & 1) === 1);
    }
  },
  getLengthInBits: function getLengthInBits() {
    return this.length;
  },
  putBit: function putBit(bit) {
    var bufIndex = Math.floor(this.length / 8);

    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0);
    }

    if (bit) {
      this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
    }

    this.length++;
  }
};
var bitBuffer = BitBuffer;
/**
 * Helper class to handle QR Code symbol modules
 *
 * @param {Number} size Symbol size
 */

function BitMatrix(size) {
  if (!size || size < 1) {
    throw new Error('BitMatrix size must be defined and greater than 0');
  }

  this.size = size;
  this.data = buffer.alloc(size * size);
  this.reservedBit = buffer.alloc(size * size);
}
/**
 * Set bit value at specified location
 * If reserved flag is set, this bit will be ignored during masking process
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 * @param {Boolean} reserved
 */


BitMatrix.prototype.set = function (row, col, value, reserved) {
  var index = row * this.size + col;
  this.data[index] = value;
  if (reserved) this.reservedBit[index] = true;
};
/**
 * Returns bit value at specified location
 *
 * @param  {Number}  row
 * @param  {Number}  col
 * @return {Boolean}
 */


BitMatrix.prototype.get = function (row, col) {
  return this.data[row * this.size + col];
};
/**
 * Applies xor operator at specified location
 * (used during masking process)
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 */


BitMatrix.prototype.xor = function (row, col, value) {
  this.data[row * this.size + col] ^= value;
};
/**
 * Check if bit at specified location is reserved
 *
 * @param {Number}   row
 * @param {Number}   col
 * @return {Boolean}
 */


BitMatrix.prototype.isReserved = function (row, col) {
  return this.reservedBit[row * this.size + col];
};

var bitMatrix = BitMatrix;
var alignmentPattern$1 = createCommonjsModule(function (module, exports) {
  /**
   * Alignment pattern are fixed reference pattern in defined positions
   * in a matrix symbology, which enables the decode software to re-synchronise
   * the coordinate mapping of the image modules in the event of moderate amounts
   * of distortion of the image.
   *
   * Alignment patterns are present only in QR Code symbols of version 2 or larger
   * and their number depends on the symbol version.
   */
  var getSymbolSize = utils.getSymbolSize;
  /**
   * Calculate the row/column coordinates of the center module of each alignment pattern
   * for the specified QR Code version.
   *
   * The alignment patterns are positioned symmetrically on either side of the diagonal
   * running from the top left corner of the symbol to the bottom right corner.
   *
   * Since positions are simmetrical only half of the coordinates are returned.
   * Each item of the array will represent in turn the x and y coordinate.
   * @see {@link getPositions}
   *
   * @param  {Number} version QR Code version
   * @return {Array}          Array of coordinate
   */

  exports.getRowColCoords = function getRowColCoords(version) {
    if (version === 1) return [];
    var posCount = Math.floor(version / 7) + 2;
    var size = getSymbolSize(version);
    var intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
    var positions = [size - 7]; // Last coord is always (size - 7)

    for (var i = 1; i < posCount - 1; i++) {
      positions[i] = positions[i - 1] - intervals;
    }

    positions.push(6); // First coord is always 6

    return positions.reverse();
  };
  /**
   * Returns an array containing the positions of each alignment pattern.
   * Each array's element represent the center point of the pattern as (x, y) coordinates
   *
   * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
   * and filtering out the items that overlaps with finder pattern
   *
   * @example
   * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
   * The alignment patterns, therefore, are to be centered on (row, column)
   * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
   * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
   * and are not therefore used for alignment patterns.
   *
   * var pos = getPositions(7)
   * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
   *
   * @param  {Number} version QR Code version
   * @return {Array}          Array of coordinates
   */


  exports.getPositions = function getPositions(version) {
    var coords = [];
    var pos = exports.getRowColCoords(version);
    var posLength = pos.length;

    for (var i = 0; i < posLength; i++) {
      for (var j = 0; j < posLength; j++) {
        // Skip if position is occupied by finder patterns
        if (i === 0 && j === 0 || i === 0 && j === posLength - 1 || i === posLength - 1 && j === 0) {
          // top-right
          continue;
        }

        coords.push([pos[i], pos[j]]);
      }
    }

    return coords;
  };
});
var getSymbolSize$1 = utils.getSymbolSize;
var FINDER_PATTERN_SIZE = 7;
/**
 * Returns an array containing the positions of each finder pattern.
 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */

var getPositions = function getPositions(version) {
  var size = getSymbolSize$1(version);
  return [// top-left
  [0, 0], // top-right
  [size - FINDER_PATTERN_SIZE, 0], // bottom-left
  [0, size - FINDER_PATTERN_SIZE]];
};

var finderPattern = {
  getPositions: getPositions
};
var maskPattern$1 = createCommonjsModule(function (module, exports) {
  /**
   * Data mask pattern reference
   * @type {Object}
   */
  exports.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };
  /**
   * Weighted penalty scores for the undesirable features
   * @type {Object}
   */

  var PenaltyScores = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
  };
  /**
   * Check if mask pattern value is valid
   *
   * @param  {Number}  mask    Mask pattern
   * @return {Boolean}         true if valid, false otherwise
   */

  exports.isValid = function isValid(mask) {
    return mask != null && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7;
  };
  /**
   * Returns mask pattern from a value.
   * If value is not valid, returns undefined
   *
   * @param  {Number|String} value        Mask pattern value
   * @return {Number}                     Valid mask pattern or undefined
   */


  exports.from = function from(value) {
    return exports.isValid(value) ? parseInt(value, 10) : undefined;
  };
  /**
  * Find adjacent modules in row/column with the same color
  * and assign a penalty value.
  *
  * Points: N1 + i
  * i is the amount by which the number of adjacent modules of the same color exceeds 5
  */


  exports.getPenaltyN1 = function getPenaltyN1(data) {
    var size = data.size;
    var points = 0;
    var sameCountCol = 0;
    var sameCountRow = 0;
    var lastCol = null;
    var lastRow = null;

    for (var row = 0; row < size; row++) {
      sameCountCol = sameCountRow = 0;
      lastCol = lastRow = null;

      for (var col = 0; col < size; col++) {
        var module = data.get(row, col);

        if (module === lastCol) {
          sameCountCol++;
        } else {
          if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
          lastCol = module;
          sameCountCol = 1;
        }

        module = data.get(col, row);

        if (module === lastRow) {
          sameCountRow++;
        } else {
          if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
          lastRow = module;
          sameCountRow = 1;
        }
      }

      if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
      if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
    }

    return points;
  };
  /**
   * Find 2x2 blocks with the same color and assign a penalty value
   *
   * Points: N2 * (m - 1) * (n - 1)
   */


  exports.getPenaltyN2 = function getPenaltyN2(data) {
    var size = data.size;
    var points = 0;

    for (var row = 0; row < size - 1; row++) {
      for (var col = 0; col < size - 1; col++) {
        var last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
        if (last === 4 || last === 0) points++;
      }
    }

    return points * PenaltyScores.N2;
  };
  /**
   * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
   * preceded or followed by light area 4 modules wide
   *
   * Points: N3 * number of pattern found
   */


  exports.getPenaltyN3 = function getPenaltyN3(data) {
    var size = data.size;
    var points = 0;
    var bitsCol = 0;
    var bitsRow = 0;

    for (var row = 0; row < size; row++) {
      bitsCol = bitsRow = 0;

      for (var col = 0; col < size; col++) {
        bitsCol = bitsCol << 1 & 0x7FF | data.get(row, col);
        if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++;
        bitsRow = bitsRow << 1 & 0x7FF | data.get(col, row);
        if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++;
      }
    }

    return points * PenaltyScores.N3;
  };
  /**
   * Calculate proportion of dark modules in entire symbol
   *
   * Points: N4 * k
   *
   * k is the rating of the deviation of the proportion of dark modules
   * in the symbol from 50% in steps of 5%
   */


  exports.getPenaltyN4 = function getPenaltyN4(data) {
    var darkCount = 0;
    var modulesCount = data.data.length;

    for (var i = 0; i < modulesCount; i++) {
      darkCount += data.data[i];
    }

    var k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
    return k * PenaltyScores.N4;
  };
  /**
   * Return mask value at given position
   *
   * @param  {Number} maskPattern Pattern reference value
   * @param  {Number} i           Row
   * @param  {Number} j           Column
   * @return {Boolean}            Mask value
   */


  function getMaskAt(maskPattern, i, j) {
    switch (maskPattern) {
      case exports.Patterns.PATTERN000:
        return (i + j) % 2 === 0;

      case exports.Patterns.PATTERN001:
        return i % 2 === 0;

      case exports.Patterns.PATTERN010:
        return j % 3 === 0;

      case exports.Patterns.PATTERN011:
        return (i + j) % 3 === 0;

      case exports.Patterns.PATTERN100:
        return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;

      case exports.Patterns.PATTERN101:
        return i * j % 2 + i * j % 3 === 0;

      case exports.Patterns.PATTERN110:
        return (i * j % 2 + i * j % 3) % 2 === 0;

      case exports.Patterns.PATTERN111:
        return (i * j % 3 + (i + j) % 2) % 2 === 0;

      default:
        throw new Error('bad maskPattern:' + maskPattern);
    }
  }
  /**
   * Apply a mask pattern to a BitMatrix
   *
   * @param  {Number}    pattern Pattern reference number
   * @param  {BitMatrix} data    BitMatrix data
   */


  exports.applyMask = function applyMask(pattern, data) {
    var size = data.size;

    for (var col = 0; col < size; col++) {
      for (var row = 0; row < size; row++) {
        if (data.isReserved(row, col)) continue;
        data.xor(row, col, getMaskAt(pattern, row, col));
      }
    }
  };
  /**
   * Returns the best mask pattern for data
   *
   * @param  {BitMatrix} data
   * @return {Number} Mask pattern reference number
   */


  exports.getBestMask = function getBestMask(data, setupFormatFunc) {
    var numPatterns = Object.keys(exports.Patterns).length;
    var bestPattern = 0;
    var lowerPenalty = Infinity;

    for (var p = 0; p < numPatterns; p++) {
      setupFormatFunc(p);
      exports.applyMask(p, data); // Calculate penalty

      var penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data); // Undo previously applied mask

      exports.applyMask(p, data);

      if (penalty < lowerPenalty) {
        lowerPenalty = penalty;
        bestPattern = p;
      }
    }

    return bestPattern;
  };
});
var Buffer$3 = buffer__WEBPACK_IMPORTED_MODULE_8___default.a.Buffer;

function ReedSolomonEncoder(degree) {
  this.genPoly = undefined;
  this.degree = degree;
  if (this.degree) this.initialize(this.degree);
}
/**
 * Initialize the encoder.
 * The input param should correspond to the number of error correction codewords.
 *
 * @param  {Number} degree
 */


ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
  // create an irreducible generator polynomial
  this.degree = degree;
  this.genPoly = polynomial$1.generateECPolynomial(this.degree);
};
/**
 * Encodes a chunk of data
 *
 * @param  {Buffer} data Buffer containing input data
 * @return {Buffer}      Buffer containing encoded data
 */


ReedSolomonEncoder.prototype.encode = function encode(data) {
  if (!this.genPoly) {
    throw new Error('Encoder not initialized');
  } // Calculate EC for this data block
  // extends data size to data+genPoly size


  var pad = buffer.alloc(this.degree);
  var paddedData = Buffer$3.concat([data, pad], data.length + this.degree); // The error correction codewords are the remainder after dividing the data codewords
  // by a generator polynomial

  var remainder = polynomial$1.mod(paddedData, this.genPoly); // return EC data blocks (last n byte, where n is the degree of genPoly)
  // If coefficients number in remainder are less than genPoly degree,
  // pad with 0s to the left to reach the needed number of coefficients

  var start = this.degree - remainder.length;

  if (start > 0) {
    var buff = buffer.alloc(this.degree);
    remainder.copy(buff, start);
    return buff;
  }

  return remainder;
};

var reedSolomonEncoder = ReedSolomonEncoder;
var version$1 = createCommonjsModule(function (module, exports) {
  // Generator polynomial used to encode version information
  var G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
  var G18_BCH = utils.getBCHDigit(G18);

  function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
    for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
      if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
        return currentVersion;
      }
    }

    return undefined;
  }

  function getReservedBitsCount(mode, version) {
    // Character count indicator + mode indicator bits
    return mode$1.getCharCountIndicator(mode, version) + 4;
  }

  function getTotalBitsFromDataArray(segments, version) {
    var totalBits = 0;
    segments.forEach(function (data) {
      var reservedBits = getReservedBitsCount(data.mode, version);
      totalBits += reservedBits + data.getBitsLength();
    });
    return totalBits;
  }

  function getBestVersionForMixedData(segments, errorCorrectionLevel) {
    for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
      var length = getTotalBitsFromDataArray(segments, currentVersion);

      if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode$1.MIXED)) {
        return currentVersion;
      }
    }

    return undefined;
  }
  /**
   * Returns version number from a value.
   * If value is not a valid version, returns defaultValue
   *
   * @param  {Number|String} value        QR Code version
   * @param  {Number}        defaultValue Fallback value
   * @return {Number}                     QR Code version number
   */


  exports.from = function from(value, defaultValue) {
    if (versionCheck.isValid(value)) {
      return parseInt(value, 10);
    }

    return defaultValue;
  };
  /**
   * Returns how much data can be stored with the specified QR code version
   * and error correction level
   *
   * @param  {Number} version              QR Code version (1-40)
   * @param  {Number} errorCorrectionLevel Error correction level
   * @param  {Mode}   mode                 Data mode
   * @return {Number}                      Quantity of storable data
   */


  exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode) {
    if (!versionCheck.isValid(version)) {
      throw new Error('Invalid QR Code version');
    } // Use Byte mode as default


    if (typeof mode === 'undefined') mode = mode$1.BYTE; // Total codewords for this QR code version (Data + Error correction)

    var totalCodewords = utils.getSymbolTotalCodewords(version); // Total number of error correction codewords

    var ecTotalCodewords = errorCorrectionCode.getTotalCodewordsCount(version, errorCorrectionLevel); // Total number of data codewords

    var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
    if (mode === mode$1.MIXED) return dataTotalCodewordsBits;
    var usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version); // Return max number of storable codewords

    switch (mode) {
      case mode$1.NUMERIC:
        return Math.floor(usableBits / 10 * 3);

      case mode$1.ALPHANUMERIC:
        return Math.floor(usableBits / 11 * 2);

      case mode$1.KANJI:
        return Math.floor(usableBits / 13);

      case mode$1.BYTE:
      default:
        return Math.floor(usableBits / 8);
    }
  };
  /**
   * Returns the minimum version needed to contain the amount of data
   *
   * @param  {Segment} data                    Segment of data
   * @param  {Number} [errorCorrectionLevel=H] Error correction level
   * @param  {Mode} mode                       Data mode
   * @return {Number}                          QR Code version
   */


  exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
    var seg;
    var ecl = errorCorrectionLevel$1.from(errorCorrectionLevel, errorCorrectionLevel$1.M);

    if (C__4keyps_local_modules_amplifyJs_node_modules_qrcode_node_modules_isarray(data)) {
      if (data.length > 1) {
        return getBestVersionForMixedData(data, ecl);
      }

      if (data.length === 0) {
        return 1;
      }

      seg = data[0];
    } else {
      seg = data;
    }

    return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
  };
  /**
   * Returns version information with relative error correction bits
   *
   * The version information is included in QR Code symbols of version 7 or larger.
   * It consists of an 18-bit sequence containing 6 data bits,
   * with 12 error correction bits calculated using the (18, 6) Golay code.
   *
   * @param  {Number} version QR Code version
   * @return {Number}         Encoded version info bits
   */


  exports.getEncodedBits = function getEncodedBits(version) {
    if (!versionCheck.isValid(version) || version < 7) {
      throw new Error('Invalid QR Code version');
    }

    var d = version << 12;

    while (utils.getBCHDigit(d) - G18_BCH >= 0) {
      d ^= G18 << utils.getBCHDigit(d) - G18_BCH;
    }

    return version << 12 | d;
  };
});
var G15$1 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
var G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
var G15_BCH$1 = utils.getBCHDigit(G15$1);
/**
 * Returns format information with relative error correction bits
 *
 * The format information is a 15-bit sequence containing 5 data bits,
 * with 10 error correction bits calculated using the (15, 5) BCH code.
 *
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Number} mask                 Mask pattern
 * @return {Number}                      Encoded format information bits
 */

var getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
  var data = errorCorrectionLevel.bit << 3 | mask;
  var d = data << 10;

  while (utils.getBCHDigit(d) - G15_BCH$1 >= 0) {
    d ^= G15$1 << utils.getBCHDigit(d) - G15_BCH$1;
  } // xor final data with mask pattern in order to ensure that
  // no combination of Error Correction Level and data mask pattern
  // will result in an all-zero data string


  return (data << 10 | d) ^ G15_MASK;
};

var formatInfo = {
  getEncodedBits: getEncodedBits
};
var segments$1 = createCommonjsModule(function (module, exports) {
  /**
   * Returns UTF8 byte length
   *
   * @param  {String} str Input string
   * @return {Number}     Number of byte
   */
  function getStringByteLength(str) {
    return unescape(encodeURIComponent(str)).length;
  }
  /**
   * Get a list of segments of the specified mode
   * from a string
   *
   * @param  {Mode}   mode Segment mode
   * @param  {String} str  String to process
   * @return {Array}       Array of object with segments data
   */


  function getSegments(regex, mode, str) {
    var segments = [];
    var result;

    while ((result = regex.exec(str)) !== null) {
      segments.push({
        data: result[0],
        index: result.index,
        mode: mode,
        length: result[0].length
      });
    }

    return segments;
  }
  /**
   * Extracts a series of segments with the appropriate
   * modes from a string
   *
   * @param  {String} dataStr Input string
   * @return {Array}          Array of object with segments data
   */


  function getSegmentsFromString(dataStr) {
    var numSegs = getSegments(regex.NUMERIC, mode$1.NUMERIC, dataStr);
    var alphaNumSegs = getSegments(regex.ALPHANUMERIC, mode$1.ALPHANUMERIC, dataStr);
    var byteSegs;
    var kanjiSegs;

    if (utils.isKanjiModeEnabled()) {
      byteSegs = getSegments(regex.BYTE, mode$1.BYTE, dataStr);
      kanjiSegs = getSegments(regex.KANJI, mode$1.KANJI, dataStr);
    } else {
      byteSegs = getSegments(regex.BYTE_KANJI, mode$1.BYTE, dataStr);
      kanjiSegs = [];
    }

    var segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
    return segs.sort(function (s1, s2) {
      return s1.index - s2.index;
    }).map(function (obj) {
      return {
        data: obj.data,
        mode: obj.mode,
        length: obj.length
      };
    });
  }
  /**
   * Returns how many bits are needed to encode a string of
   * specified length with the specified mode
   *
   * @param  {Number} length String length
   * @param  {Mode} mode     Segment mode
   * @return {Number}        Bit length
   */


  function getSegmentBitsLength(length, mode) {
    switch (mode) {
      case mode$1.NUMERIC:
        return numericData.getBitsLength(length);

      case mode$1.ALPHANUMERIC:
        return alphanumericData.getBitsLength(length);

      case mode$1.KANJI:
        return kanjiData.getBitsLength(length);

      case mode$1.BYTE:
        return byteData.getBitsLength(length);
    }
  }
  /**
   * Merges adjacent segments which have the same mode
   *
   * @param  {Array} segs Array of object with segments data
   * @return {Array}      Array of object with segments data
   */


  function mergeSegments(segs) {
    return segs.reduce(function (acc, curr) {
      var prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;

      if (prevSeg && prevSeg.mode === curr.mode) {
        acc[acc.length - 1].data += curr.data;
        return acc;
      }

      acc.push(curr);
      return acc;
    }, []);
  }
  /**
   * Generates a list of all possible nodes combination which
   * will be used to build a segments graph.
   *
   * Nodes are divided by groups. Each group will contain a list of all the modes
   * in which is possible to encode the given text.
   *
   * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
   * The group for '12345' will contain then 3 objects, one for each
   * possible encoding mode.
   *
   * Each node represents a possible segment.
   *
   * @param  {Array} segs Array of object with segments data
   * @return {Array}      Array of object with segments data
   */


  function buildNodes(segs) {
    var nodes = [];

    for (var i = 0; i < segs.length; i++) {
      var seg = segs[i];

      switch (seg.mode) {
        case mode$1.NUMERIC:
          nodes.push([seg, {
            data: seg.data,
            mode: mode$1.ALPHANUMERIC,
            length: seg.length
          }, {
            data: seg.data,
            mode: mode$1.BYTE,
            length: seg.length
          }]);
          break;

        case mode$1.ALPHANUMERIC:
          nodes.push([seg, {
            data: seg.data,
            mode: mode$1.BYTE,
            length: seg.length
          }]);
          break;

        case mode$1.KANJI:
          nodes.push([seg, {
            data: seg.data,
            mode: mode$1.BYTE,
            length: getStringByteLength(seg.data)
          }]);
          break;

        case mode$1.BYTE:
          nodes.push([{
            data: seg.data,
            mode: mode$1.BYTE,
            length: getStringByteLength(seg.data)
          }]);
      }
    }

    return nodes;
  }
  /**
   * Builds a graph from a list of nodes.
   * All segments in each node group will be connected with all the segments of
   * the next group and so on.
   *
   * At each connection will be assigned a weight depending on the
   * segment's byte length.
   *
   * @param  {Array} nodes    Array of object with segments data
   * @param  {Number} version QR Code version
   * @return {Object}         Graph of all possible segments
   */


  function buildGraph(nodes, version) {
    var table = {};
    var graph = {
      'start': {}
    };
    var prevNodeIds = ['start'];

    for (var i = 0; i < nodes.length; i++) {
      var nodeGroup = nodes[i];
      var currentNodeIds = [];

      for (var j = 0; j < nodeGroup.length; j++) {
        var node = nodeGroup[j];
        var key = '' + i + j;
        currentNodeIds.push(key);
        table[key] = {
          node: node,
          lastCount: 0
        };
        graph[key] = {};

        for (var n = 0; n < prevNodeIds.length; n++) {
          var prevNodeId = prevNodeIds[n];

          if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
            graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
            table[prevNodeId].lastCount += node.length;
          } else {
            if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
            graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + mode$1.getCharCountIndicator(node.mode, version); // switch cost
          }
        }
      }

      prevNodeIds = currentNodeIds;
    }

    for (n = 0; n < prevNodeIds.length; n++) {
      graph[prevNodeIds[n]]['end'] = 0;
    }

    return {
      map: graph,
      table: table
    };
  }
  /**
   * Builds a segment from a specified data and mode.
   * If a mode is not specified, the more suitable will be used.
   *
   * @param  {String} data             Input data
   * @param  {Mode | String} modesHint Data mode
   * @return {Segment}                 Segment
   */


  function buildSingleSegment(data, modesHint) {
    var mode;
    var bestMode = mode$1.getBestModeForData(data);
    mode = mode$1.from(modesHint, bestMode); // Make sure data can be encoded

    if (mode !== mode$1.BYTE && mode.bit < bestMode.bit) {
      throw new Error('"' + data + '"' + ' cannot be encoded with mode ' + mode$1.toString(mode) + '.\n Suggested mode is: ' + mode$1.toString(bestMode));
    } // Use Mode.BYTE if Kanji support is disabled


    if (mode === mode$1.KANJI && !utils.isKanjiModeEnabled()) {
      mode = mode$1.BYTE;
    }

    switch (mode) {
      case mode$1.NUMERIC:
        return new numericData(data);

      case mode$1.ALPHANUMERIC:
        return new alphanumericData(data);

      case mode$1.KANJI:
        return new kanjiData(data);

      case mode$1.BYTE:
        return new byteData(data);
    }
  }
  /**
   * Builds a list of segments from an array.
   * Array can contain Strings or Objects with segment's info.
   *
   * For each item which is a string, will be generated a segment with the given
   * string and the more appropriate encoding mode.
   *
   * For each item which is an object, will be generated a segment with the given
   * data and mode.
   * Objects must contain at least the property "data".
   * If property "mode" is not present, the more suitable mode will be used.
   *
   * @param  {Array} array Array of objects with segments data
   * @return {Array}       Array of Segments
   */


  exports.fromArray = function fromArray(array) {
    return array.reduce(function (acc, seg) {
      if (typeof seg === 'string') {
        acc.push(buildSingleSegment(seg, null));
      } else if (seg.data) {
        acc.push(buildSingleSegment(seg.data, seg.mode));
      }

      return acc;
    }, []);
  };
  /**
   * Builds an optimized sequence of segments from a string,
   * which will produce the shortest possible bitstream.
   *
   * @param  {String} data    Input string
   * @param  {Number} version QR Code version
   * @return {Array}          Array of segments
   */


  exports.fromString = function fromString(data, version) {
    var segs = getSegmentsFromString(data, utils.isKanjiModeEnabled());
    var nodes = buildNodes(segs);
    var graph = buildGraph(nodes, version);
    var path = dijkstra_1$1.find_path(graph.map, 'start', 'end');
    var optimizedSegs = [];

    for (var i = 1; i < path.length - 1; i++) {
      optimizedSegs.push(graph.table[path[i]].node);
    }

    return exports.fromArray(mergeSegments(optimizedSegs));
  };
  /**
   * Splits a string in various segments with the modes which
   * best represent their content.
   * The produced segments are far from being optimized.
   * The output of this function is only used to estimate a QR Code version
   * which may contain the data.
   *
   * @param  {string} data Input string
   * @return {Array}       Array of segments
   */


  exports.rawSplit = function rawSplit(data) {
    return exports.fromArray(getSegmentsFromString(data, utils.isKanjiModeEnabled()));
  };
});
var chunkstream = createCommonjsModule(function (module) {
  var ChunkStream = module.exports = function () {
    stream__WEBPACK_IMPORTED_MODULE_11___default.a.call(this);
    this._buffers = [];
    this._buffered = 0;
    this._reads = [];
    this._paused = false;
    this._encoding = 'utf8';
    this.writable = true;
  };

  util__WEBPACK_IMPORTED_MODULE_10___default.a.inherits(ChunkStream, stream__WEBPACK_IMPORTED_MODULE_11___default.a);

  ChunkStream.prototype.read = function (length, callback) {
    this._reads.push({
      length: Math.abs(length),
      allowLess: length < 0,
      func: callback
    });

    process.nextTick(function () {
      this._process(); // its paused and there is not enought data then ask for more


      if (this._paused && this._reads.length > 0) {
        this._paused = false;
        this.emit('drain');
      }
    }.bind(this));
  };

  ChunkStream.prototype.write = function (data, encoding) {
    if (!this.writable) {
      this.emit('error', new Error('Stream not writable'));
      return false;
    }

    var dataBuffer;

    if (Buffer.isBuffer(data)) {
      dataBuffer = data;
    } else {
      dataBuffer = new Buffer(data, encoding || this._encoding);
    }

    this._buffers.push(dataBuffer);

    this._buffered += dataBuffer.length;

    this._process(); // ok if there are no more read requests


    if (this._reads && this._reads.length === 0) {
      this._paused = true;
    }

    return this.writable && !this._paused;
  };

  ChunkStream.prototype.end = function (data, encoding) {
    if (data) {
      this.write(data, encoding);
    }

    this.writable = false; // already destroyed

    if (!this._buffers) {
      return;
    } // enqueue or handle end


    if (this._buffers.length === 0) {
      this._end();
    } else {
      this._buffers.push(null);

      this._process();
    }
  };

  ChunkStream.prototype.destroySoon = ChunkStream.prototype.end;

  ChunkStream.prototype._end = function () {
    if (this._reads.length > 0) {
      this.emit('error', new Error('Unexpected end of input'));
    }

    this.destroy();
  };

  ChunkStream.prototype.destroy = function () {
    if (!this._buffers) {
      return;
    }

    this.writable = false;
    this._reads = null;
    this._buffers = null;
    this.emit('close');
  };

  ChunkStream.prototype._processReadAllowingLess = function (read) {
    // ok there is any data so that we can satisfy this request
    this._reads.shift(); // == read
    // first we need to peek into first buffer


    var smallerBuf = this._buffers[0]; // ok there is more data than we need

    if (smallerBuf.length > read.length) {
      this._buffered -= read.length;
      this._buffers[0] = smallerBuf.slice(read.length);
      read.func.call(this, smallerBuf.slice(0, read.length));
    } else {
      // ok this is less than maximum length so use it all
      this._buffered -= smallerBuf.length;

      this._buffers.shift(); // == smallerBuf


      read.func.call(this, smallerBuf);
    }
  };

  ChunkStream.prototype._processRead = function (read) {
    this._reads.shift(); // == read


    var pos = 0;
    var count = 0;
    var data = new Buffer(read.length); // create buffer for all data

    while (pos < read.length) {
      var buf = this._buffers[count++];
      var len = Math.min(buf.length, read.length - pos);
      buf.copy(data, pos, 0, len);
      pos += len; // last buffer wasn't used all so just slice it and leave

      if (len !== buf.length) {
        this._buffers[--count] = buf.slice(len);
      }
    } // remove all used buffers


    if (count > 0) {
      this._buffers.splice(0, count);
    }

    this._buffered -= read.length;
    read.func.call(this, data);
  };

  ChunkStream.prototype._process = function () {
    try {
      // as long as there is any data and read requests
      while (this._buffered > 0 && this._reads && this._reads.length > 0) {
        var read = this._reads[0]; // read any data (but no more than length)

        if (read.allowLess) {
          this._processReadAllowingLess(read);
        } else if (this._buffered >= read.length) {
          // ok we can meet some expectations
          this._processRead(read);
        } else {
          // not enought data to satisfy first request in queue
          // so we need to wait for more
          break;
        }
      }

      if (this._buffers && !this.writable) {
        this._end();
      }
    } catch (ex) {
      this.emit('error', ex);
    }
  };
}); // Adam 7
//   0 1 2 3 4 5 6 7
// 0 x 6 4 6 x 6 4 6
// 1 7 7 7 7 7 7 7 7
// 2 5 6 5 6 5 6 5 6
// 3 7 7 7 7 7 7 7 7
// 4 3 6 4 6 3 6 4 6
// 5 7 7 7 7 7 7 7 7
// 6 5 6 5 6 5 6 5 6
// 7 7 7 7 7 7 7 7 7

var imagePasses = [{
  x: [0],
  y: [0]
}, {
  x: [4],
  y: [0]
}, {
  x: [0, 4],
  y: [4]
}, {
  x: [2, 6],
  y: [0, 4]
}, {
  x: [0, 2, 4, 6],
  y: [2, 6]
}, {
  x: [1, 3, 5, 7],
  y: [0, 2, 4, 6]
}, {
  x: [0, 1, 2, 3, 4, 5, 6, 7],
  y: [1, 3, 5, 7]
}];

var getImagePasses = function getImagePasses(width, height) {
  var images = [];
  var xLeftOver = width % 8;
  var yLeftOver = height % 8;
  var xRepeats = (width - xLeftOver) / 8;
  var yRepeats = (height - yLeftOver) / 8;

  for (var i = 0; i < imagePasses.length; i++) {
    var pass = imagePasses[i];
    var passWidth = xRepeats * pass.x.length;
    var passHeight = yRepeats * pass.y.length;

    for (var j = 0; j < pass.x.length; j++) {
      if (pass.x[j] < xLeftOver) {
        passWidth++;
      } else {
        break;
      }
    }

    for (j = 0; j < pass.y.length; j++) {
      if (pass.y[j] < yLeftOver) {
        passHeight++;
      } else {
        break;
      }
    }

    if (passWidth > 0 && passHeight > 0) {
      images.push({
        width: passWidth,
        height: passHeight,
        index: i
      });
    }
  }

  return images;
};

var getInterlaceIterator = function getInterlaceIterator(width) {
  return function (x, y, pass) {
    var outerXLeftOver = x % imagePasses[pass].x.length;
    var outerX = (x - outerXLeftOver) / imagePasses[pass].x.length * 8 + imagePasses[pass].x[outerXLeftOver];
    var outerYLeftOver = y % imagePasses[pass].y.length;
    var outerY = (y - outerYLeftOver) / imagePasses[pass].y.length * 8 + imagePasses[pass].y[outerYLeftOver];
    return outerX * 4 + outerY * width * 4;
  };
};

var interlace = {
  getImagePasses: getImagePasses,
  getInterlaceIterator: getInterlaceIterator
};

var paethPredictor = function paethPredictor(left, above, upLeft) {
  var paeth = left + above - upLeft;
  var pLeft = Math.abs(paeth - left);
  var pAbove = Math.abs(paeth - above);
  var pUpLeft = Math.abs(paeth - upLeft);

  if (pLeft <= pAbove && pLeft <= pUpLeft) {
    return left;
  }

  if (pAbove <= pUpLeft) {
    return above;
  }

  return upLeft;
};

var filterParse = createCommonjsModule(function (module) {
  function getByteWidth(width, bpp, depth) {
    var byteWidth = width * bpp;

    if (depth !== 8) {
      byteWidth = Math.ceil(byteWidth / (8 / depth));
    }

    return byteWidth;
  }

  var Filter = module.exports = function (bitmapInfo, dependencies) {
    var width = bitmapInfo.width;
    var height = bitmapInfo.height;
    var interlace$1 = bitmapInfo.interlace;
    var bpp = bitmapInfo.bpp;
    var depth = bitmapInfo.depth;
    this.read = dependencies.read;
    this.write = dependencies.write;
    this.complete = dependencies.complete;
    this._imageIndex = 0;
    this._images = [];

    if (interlace$1) {
      var passes = interlace.getImagePasses(width, height);

      for (var i = 0; i < passes.length; i++) {
        this._images.push({
          byteWidth: getByteWidth(passes[i].width, bpp, depth),
          height: passes[i].height,
          lineIndex: 0
        });
      }
    } else {
      this._images.push({
        byteWidth: getByteWidth(width, bpp, depth),
        height: height,
        lineIndex: 0
      });
    } // when filtering the line we look at the pixel to the left
    // the spec also says it is done on a byte level regardless of the number of pixels
    // so if the depth is byte compatible (8 or 16) we subtract the bpp in order to compare back
    // a pixel rather than just a different byte part. However if we are sub byte, we ignore.


    if (depth === 8) {
      this._xComparison = bpp;
    } else if (depth === 16) {
      this._xComparison = bpp * 2;
    } else {
      this._xComparison = 1;
    }
  };

  Filter.prototype.start = function () {
    this.read(this._images[this._imageIndex].byteWidth + 1, this._reverseFilterLine.bind(this));
  };

  Filter.prototype._unFilterType1 = function (rawData, unfilteredLine, byteWidth) {
    var xComparison = this._xComparison;
    var xBiggerThan = xComparison - 1;

    for (var x = 0; x < byteWidth; x++) {
      var rawByte = rawData[1 + x];
      var f1Left = x > xBiggerThan ? unfilteredLine[x - xComparison] : 0;
      unfilteredLine[x] = rawByte + f1Left;
    }
  };

  Filter.prototype._unFilterType2 = function (rawData, unfilteredLine, byteWidth) {
    var lastLine = this._lastLine;

    for (var x = 0; x < byteWidth; x++) {
      var rawByte = rawData[1 + x];
      var f2Up = lastLine ? lastLine[x] : 0;
      unfilteredLine[x] = rawByte + f2Up;
    }
  };

  Filter.prototype._unFilterType3 = function (rawData, unfilteredLine, byteWidth) {
    var xComparison = this._xComparison;
    var xBiggerThan = xComparison - 1;
    var lastLine = this._lastLine;

    for (var x = 0; x < byteWidth; x++) {
      var rawByte = rawData[1 + x];
      var f3Up = lastLine ? lastLine[x] : 0;
      var f3Left = x > xBiggerThan ? unfilteredLine[x - xComparison] : 0;
      var f3Add = Math.floor((f3Left + f3Up) / 2);
      unfilteredLine[x] = rawByte + f3Add;
    }
  };

  Filter.prototype._unFilterType4 = function (rawData, unfilteredLine, byteWidth) {
    var xComparison = this._xComparison;
    var xBiggerThan = xComparison - 1;
    var lastLine = this._lastLine;

    for (var x = 0; x < byteWidth; x++) {
      var rawByte = rawData[1 + x];
      var f4Up = lastLine ? lastLine[x] : 0;
      var f4Left = x > xBiggerThan ? unfilteredLine[x - xComparison] : 0;
      var f4UpLeft = x > xBiggerThan && lastLine ? lastLine[x - xComparison] : 0;
      var f4Add = paethPredictor(f4Left, f4Up, f4UpLeft);
      unfilteredLine[x] = rawByte + f4Add;
    }
  };

  Filter.prototype._reverseFilterLine = function (rawData) {
    var filter = rawData[0];
    var unfilteredLine;
    var currentImage = this._images[this._imageIndex];
    var byteWidth = currentImage.byteWidth;

    if (filter === 0) {
      unfilteredLine = rawData.slice(1, byteWidth + 1);
    } else {
      unfilteredLine = new Buffer(byteWidth);

      switch (filter) {
        case 1:
          this._unFilterType1(rawData, unfilteredLine, byteWidth);

          break;

        case 2:
          this._unFilterType2(rawData, unfilteredLine, byteWidth);

          break;

        case 3:
          this._unFilterType3(rawData, unfilteredLine, byteWidth);

          break;

        case 4:
          this._unFilterType4(rawData, unfilteredLine, byteWidth);

          break;

        default:
          throw new Error('Unrecognised filter type - ' + filter);
      }
    }

    this.write(unfilteredLine);
    currentImage.lineIndex++;

    if (currentImage.lineIndex >= currentImage.height) {
      this._lastLine = null;
      this._imageIndex++;
      currentImage = this._images[this._imageIndex];
    } else {
      this._lastLine = unfilteredLine;
    }

    if (currentImage) {
      // read, using the byte width that may be from the new current image
      this.read(currentImage.byteWidth + 1, this._reverseFilterLine.bind(this));
    } else {
      this._lastLine = null;
      this.complete();
    }
  };
});
var chunkstream$1 = createCommonjsModule(function (module) {
  var ChunkStream = module.exports = function () {
    stream__WEBPACK_IMPORTED_MODULE_11___default.a.call(this);
    this._buffers = [];
    this._buffered = 0;
    this._reads = [];
    this._paused = false;
    this._encoding = 'utf8';
    this.writable = true;
  };

  util__WEBPACK_IMPORTED_MODULE_10___default.a.inherits(ChunkStream, stream__WEBPACK_IMPORTED_MODULE_11___default.a);

  ChunkStream.prototype.read = function (length, callback) {
    this._reads.push({
      length: Math.abs(length),
      allowLess: length < 0,
      func: callback
    });

    process.nextTick(function () {
      this._process(); // its paused and there is not enought data then ask for more


      if (this._paused && this._reads.length > 0) {
        this._paused = false;
        this.emit('drain');
      }
    }.bind(this));
  };

  ChunkStream.prototype.write = function (data, encoding) {
    if (!this.writable) {
      this.emit('error', new Error('Stream not writable'));
      return false;
    }

    var dataBuffer;

    if (Buffer.isBuffer(data)) {
      dataBuffer = data;
    } else {
      dataBuffer = new Buffer(data, encoding || this._encoding);
    }

    this._buffers.push(dataBuffer);

    this._buffered += dataBuffer.length;

    this._process(); // ok if there are no more read requests


    if (this._reads && this._reads.length === 0) {
      this._paused = true;
    }

    return this.writable && !this._paused;
  };

  ChunkStream.prototype.end = function (data, encoding) {
    if (data) {
      this.write(data, encoding);
    }

    this.writable = false; // already destroyed

    if (!this._buffers) {
      return;
    } // enqueue or handle end


    if (this._buffers.length === 0) {
      this._end();
    } else {
      this._buffers.push(null);

      this._process();
    }
  };

  ChunkStream.prototype.destroySoon = ChunkStream.prototype.end;

  ChunkStream.prototype._end = function () {
    if (this._reads.length > 0) {
      this.emit('error', new Error('Unexpected end of input'));
    }

    this.destroy();
  };

  ChunkStream.prototype.destroy = function () {
    if (!this._buffers) {
      return;
    }

    this.writable = false;
    this._reads = null;
    this._buffers = null;
    this.emit('close');
  };

  ChunkStream.prototype._processReadAllowingLess = function (read) {
    // ok there is any data so that we can satisfy this request
    this._reads.shift(); // == read
    // first we need to peek into first buffer


    var smallerBuf = this._buffers[0]; // ok there is more data than we need

    if (smallerBuf.length > read.length) {
      this._buffered -= read.length;
      this._buffers[0] = smallerBuf.slice(read.length);
      read.func.call(this, smallerBuf.slice(0, read.length));
    } else {
      // ok this is less than maximum length so use it all
      this._buffered -= smallerBuf.length;

      this._buffers.shift(); // == smallerBuf


      read.func.call(this, smallerBuf);
    }
  };

  ChunkStream.prototype._processRead = function (read) {
    this._reads.shift(); // == read


    var pos = 0;
    var count = 0;
    var data = new Buffer(read.length); // create buffer for all data

    while (pos < read.length) {
      var buf = this._buffers[count++];
      var len = Math.min(buf.length, read.length - pos);
      buf.copy(data, pos, 0, len);
      pos += len; // last buffer wasn't used all so just slice it and leave

      if (len !== buf.length) {
        this._buffers[--count] = buf.slice(len);
      }
    } // remove all used buffers


    if (count > 0) {
      this._buffers.splice(0, count);
    }

    this._buffered -= read.length;
    read.func.call(this, data);
  };

  ChunkStream.prototype._process = function () {
    try {
      // as long as there is any data and read requests
      while (this._buffered > 0 && this._reads && this._reads.length > 0) {
        var read = this._reads[0]; // read any data (but no more than length)

        if (read.allowLess) {
          this._processReadAllowingLess(read);
        } else if (this._buffered >= read.length) {
          // ok we can meet some expectations
          this._processRead(read);
        } else {
          // not enought data to satisfy first request in queue
          // so we need to wait for more
          break;
        }
      }

      if (this._buffers && !this.writable) {
        this._end();
      }
    } catch (ex) {
      this.emit('error', ex);
    }
  };
});
var filterParse$1 = createCommonjsModule(function (module) {
  function getByteWidth(width, bpp, depth) {
    var byteWidth = width * bpp;

    if (depth !== 8) {
      byteWidth = Math.ceil(byteWidth / (8 / depth));
    }

    return byteWidth;
  }

  var Filter = module.exports = function (bitmapInfo, dependencies) {
    var width = bitmapInfo.width;
    var height = bitmapInfo.height;
    var interlace$1 = bitmapInfo.interlace;
    var bpp = bitmapInfo.bpp;
    var depth = bitmapInfo.depth;
    this.read = dependencies.read;
    this.write = dependencies.write;
    this.complete = dependencies.complete;
    this._imageIndex = 0;
    this._images = [];

    if (interlace$1) {
      var passes = interlace.getImagePasses(width, height);

      for (var i = 0; i < passes.length; i++) {
        this._images.push({
          byteWidth: getByteWidth(passes[i].width, bpp, depth),
          height: passes[i].height,
          lineIndex: 0
        });
      }
    } else {
      this._images.push({
        byteWidth: getByteWidth(width, bpp, depth),
        height: height,
        lineIndex: 0
      });
    } // when filtering the line we look at the pixel to the left
    // the spec also says it is done on a byte level regardless of the number of pixels
    // so if the depth is byte compatible (8 or 16) we subtract the bpp in order to compare back
    // a pixel rather than just a different byte part. However if we are sub byte, we ignore.


    if (depth === 8) {
      this._xComparison = bpp;
    } else if (depth === 16) {
      this._xComparison = bpp * 2;
    } else {
      this._xComparison = 1;
    }
  };

  Filter.prototype.start = function () {
    this.read(this._images[this._imageIndex].byteWidth + 1, this._reverseFilterLine.bind(this));
  };

  Filter.prototype._unFilterType1 = function (rawData, unfilteredLine, byteWidth) {
    var xComparison = this._xComparison;
    var xBiggerThan = xComparison - 1;

    for (var x = 0; x < byteWidth; x++) {
      var rawByte = rawData[1 + x];
      var f1Left = x > xBiggerThan ? unfilteredLine[x - xComparison] : 0;
      unfilteredLine[x] = rawByte + f1Left;
    }
  };

  Filter.prototype._unFilterType2 = function (rawData, unfilteredLine, byteWidth) {
    var lastLine = this._lastLine;

    for (var x = 0; x < byteWidth; x++) {
      var rawByte = rawData[1 + x];
      var f2Up = lastLine ? lastLine[x] : 0;
      unfilteredLine[x] = rawByte + f2Up;
    }
  };

  Filter.prototype._unFilterType3 = function (rawData, unfilteredLine, byteWidth) {
    var xComparison = this._xComparison;
    var xBiggerThan = xComparison - 1;
    var lastLine = this._lastLine;

    for (var x = 0; x < byteWidth; x++) {
      var rawByte = rawData[1 + x];
      var f3Up = lastLine ? lastLine[x] : 0;
      var f3Left = x > xBiggerThan ? unfilteredLine[x - xComparison] : 0;
      var f3Add = Math.floor((f3Left + f3Up) / 2);
      unfilteredLine[x] = rawByte + f3Add;
    }
  };

  Filter.prototype._unFilterType4 = function (rawData, unfilteredLine, byteWidth) {
    var xComparison = this._xComparison;
    var xBiggerThan = xComparison - 1;
    var lastLine = this._lastLine;

    for (var x = 0; x < byteWidth; x++) {
      var rawByte = rawData[1 + x];
      var f4Up = lastLine ? lastLine[x] : 0;
      var f4Left = x > xBiggerThan ? unfilteredLine[x - xComparison] : 0;
      var f4UpLeft = x > xBiggerThan && lastLine ? lastLine[x - xComparison] : 0;
      var f4Add = paethPredictor(f4Left, f4Up, f4UpLeft);
      unfilteredLine[x] = rawByte + f4Add;
    }
  };

  Filter.prototype._reverseFilterLine = function (rawData) {
    var filter = rawData[0];
    var unfilteredLine;
    var currentImage = this._images[this._imageIndex];
    var byteWidth = currentImage.byteWidth;

    if (filter === 0) {
      unfilteredLine = rawData.slice(1, byteWidth + 1);
    } else {
      unfilteredLine = new Buffer(byteWidth);

      switch (filter) {
        case 1:
          this._unFilterType1(rawData, unfilteredLine, byteWidth);

          break;

        case 2:
          this._unFilterType2(rawData, unfilteredLine, byteWidth);

          break;

        case 3:
          this._unFilterType3(rawData, unfilteredLine, byteWidth);

          break;

        case 4:
          this._unFilterType4(rawData, unfilteredLine, byteWidth);

          break;

        default:
          throw new Error('Unrecognised filter type - ' + filter);
      }
    }

    this.write(unfilteredLine);
    currentImage.lineIndex++;

    if (currentImage.lineIndex >= currentImage.height) {
      this._lastLine = null;
      this._imageIndex++;
      currentImage = this._images[this._imageIndex];
    } else {
      this._lastLine = unfilteredLine;
    }

    if (currentImage) {
      // read, using the byte width that may be from the new current image
      this.read(currentImage.byteWidth + 1, this._reverseFilterLine.bind(this));
    } else {
      this._lastLine = null;
      this.complete();
    }
  };
});
var filterParseAsync = createCommonjsModule(function (module) {
  var FilterAsync = module.exports = function (bitmapInfo) {
    chunkstream$1.call(this);
    var buffers = [];
    var that = this;
    this._filter = new filterParse$1(bitmapInfo, {
      read: this.read.bind(this),
      write: function write(buffer) {
        buffers.push(buffer);
      },
      complete: function complete() {
        that.emit('complete', Buffer.concat(buffers));
      }
    });

    this._filter.start();
  };

  util__WEBPACK_IMPORTED_MODULE_10___default.a.inherits(FilterAsync, chunkstream$1);
});
var crc = createCommonjsModule(function (module) {
  var crcTable = [];

  (function () {
    for (var i = 0; i < 256; i++) {
      var currentCrc = i;

      for (var j = 0; j < 8; j++) {
        if (currentCrc & 1) {
          currentCrc = 0xedb88320 ^ currentCrc >>> 1;
        } else {
          currentCrc = currentCrc >>> 1;
        }
      }

      crcTable[i] = currentCrc;
    }
  })();

  var CrcCalculator = module.exports = function () {
    this._crc = -1;
  };

  CrcCalculator.prototype.write = function (data) {
    for (var i = 0; i < data.length; i++) {
      this._crc = crcTable[(this._crc ^ data[i]) & 0xff] ^ this._crc >>> 8;
    }

    return true;
  };

  CrcCalculator.prototype.crc32 = function () {
    return this._crc ^ -1;
  };

  CrcCalculator.crc32 = function (buf) {
    var crc = -1;

    for (var i = 0; i < buf.length; i++) {
      crc = crcTable[(crc ^ buf[i]) & 0xff] ^ crc >>> 8;
    }

    return crc ^ -1;
  };
});
var constants = {
  PNG_SIGNATURE: [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a],
  TYPE_IHDR: 0x49484452,
  TYPE_IEND: 0x49454e44,
  TYPE_IDAT: 0x49444154,
  TYPE_PLTE: 0x504c5445,
  TYPE_tRNS: 0x74524e53,
  TYPE_gAMA: 0x67414d41,
  // color-type bits
  COLORTYPE_GRAYSCALE: 0,
  COLORTYPE_PALETTE: 1,
  COLORTYPE_COLOR: 2,
  COLORTYPE_ALPHA: 4,
  // color-type combinations
  COLORTYPE_PALETTE_COLOR: 3,
  COLORTYPE_COLOR_ALPHA: 6,
  COLORTYPE_TO_BPP_MAP: {
    0: 1,
    2: 3,
    3: 1,
    4: 2,
    6: 4
  },
  GAMMA_DIVISION: 100000
};
var crc$1 = createCommonjsModule(function (module) {
  var crcTable = [];

  (function () {
    for (var i = 0; i < 256; i++) {
      var currentCrc = i;

      for (var j = 0; j < 8; j++) {
        if (currentCrc & 1) {
          currentCrc = 0xedb88320 ^ currentCrc >>> 1;
        } else {
          currentCrc = currentCrc >>> 1;
        }
      }

      crcTable[i] = currentCrc;
    }
  })();

  var CrcCalculator = module.exports = function () {
    this._crc = -1;
  };

  CrcCalculator.prototype.write = function (data) {
    for (var i = 0; i < data.length; i++) {
      this._crc = crcTable[(this._crc ^ data[i]) & 0xff] ^ this._crc >>> 8;
    }

    return true;
  };

  CrcCalculator.prototype.crc32 = function () {
    return this._crc ^ -1;
  };

  CrcCalculator.crc32 = function (buf) {
    var crc = -1;

    for (var i = 0; i < buf.length; i++) {
      crc = crcTable[(crc ^ buf[i]) & 0xff] ^ crc >>> 8;
    }

    return crc ^ -1;
  };
});
var parser = createCommonjsModule(function (module) {
  var Parser = module.exports = function (options, dependencies) {
    this._options = options;
    options.checkCRC = options.checkCRC !== false;
    this._hasIHDR = false;
    this._hasIEND = false;
    this._emittedHeadersFinished = false; // input flags/metadata

    this._palette = [];
    this._colorType = 0;
    this._chunks = {};
    this._chunks[constants.TYPE_IHDR] = this._handleIHDR.bind(this);
    this._chunks[constants.TYPE_IEND] = this._handleIEND.bind(this);
    this._chunks[constants.TYPE_IDAT] = this._handleIDAT.bind(this);
    this._chunks[constants.TYPE_PLTE] = this._handlePLTE.bind(this);
    this._chunks[constants.TYPE_tRNS] = this._handleTRNS.bind(this);
    this._chunks[constants.TYPE_gAMA] = this._handleGAMA.bind(this);
    this.read = dependencies.read;
    this.error = dependencies.error;
    this.metadata = dependencies.metadata;
    this.gamma = dependencies.gamma;
    this.transColor = dependencies.transColor;
    this.palette = dependencies.palette;
    this.parsed = dependencies.parsed;
    this.inflateData = dependencies.inflateData;
    this.finished = dependencies.finished;
    this.simpleTransparency = dependencies.simpleTransparency;

    this.headersFinished = dependencies.headersFinished || function () {};
  };

  Parser.prototype.start = function () {
    this.read(constants.PNG_SIGNATURE.length, this._parseSignature.bind(this));
  };

  Parser.prototype._parseSignature = function (data) {
    var signature = constants.PNG_SIGNATURE;

    for (var i = 0; i < signature.length; i++) {
      if (data[i] !== signature[i]) {
        this.error(new Error('Invalid file signature'));
        return;
      }
    }

    this.read(8, this._parseChunkBegin.bind(this));
  };

  Parser.prototype._parseChunkBegin = function (data) {
    // chunk content length
    var length = data.readUInt32BE(0); // chunk type

    var type = data.readUInt32BE(4);
    var name = '';

    for (var i = 4; i < 8; i++) {
      name += String.fromCharCode(data[i]);
    } //console.log('chunk ', name, length);
    // chunk flags


    var ancillary = Boolean(data[4] & 0x20); // or critical
    //    priv = Boolean(data[5] & 0x20), // or public
    //    safeToCopy = Boolean(data[7] & 0x20); // or unsafe

    if (!this._hasIHDR && type !== constants.TYPE_IHDR) {
      this.error(new Error('Expected IHDR on beggining'));
      return;
    }

    this._crc = new crc$1();

    this._crc.write(new Buffer(name));

    if (this._chunks[type]) {
      return this._chunks[type](length);
    }

    if (!ancillary) {
      this.error(new Error('Unsupported critical chunk type ' + name));
      return;
    }

    this.read(length + 4, this._skipChunk.bind(this));
  };

  Parser.prototype._skipChunk = function () {
    this.read(8, this._parseChunkBegin.bind(this));
  };

  Parser.prototype._handleChunkEnd = function () {
    this.read(4, this._parseChunkEnd.bind(this));
  };

  Parser.prototype._parseChunkEnd = function (data) {
    var fileCrc = data.readInt32BE(0);

    var calcCrc = this._crc.crc32(); // check CRC


    if (this._options.checkCRC && calcCrc !== fileCrc) {
      this.error(new Error('Crc error - ' + fileCrc + ' - ' + calcCrc));
      return;
    }

    if (!this._hasIEND) {
      this.read(8, this._parseChunkBegin.bind(this));
    }
  };

  Parser.prototype._handleIHDR = function (length) {
    this.read(length, this._parseIHDR.bind(this));
  };

  Parser.prototype._parseIHDR = function (data) {
    this._crc.write(data);

    var width = data.readUInt32BE(0);
    var height = data.readUInt32BE(4);
    var depth = data[8];
    var colorType = data[9]; // bits: 1 palette, 2 color, 4 alpha

    var compr = data[10];
    var filter = data[11];
    var interlace = data[12]; // console.log('    width', width, 'height', height,
    //     'depth', depth, 'colorType', colorType,
    //     'compr', compr, 'filter', filter, 'interlace', interlace
    // );

    if (depth !== 8 && depth !== 4 && depth !== 2 && depth !== 1 && depth !== 16) {
      this.error(new Error('Unsupported bit depth ' + depth));
      return;
    }

    if (!(colorType in constants.COLORTYPE_TO_BPP_MAP)) {
      this.error(new Error('Unsupported color type'));
      return;
    }

    if (compr !== 0) {
      this.error(new Error('Unsupported compression method'));
      return;
    }

    if (filter !== 0) {
      this.error(new Error('Unsupported filter method'));
      return;
    }

    if (interlace !== 0 && interlace !== 1) {
      this.error(new Error('Unsupported interlace method'));
      return;
    }

    this._colorType = colorType;
    var bpp = constants.COLORTYPE_TO_BPP_MAP[this._colorType];
    this._hasIHDR = true;
    this.metadata({
      width: width,
      height: height,
      depth: depth,
      interlace: Boolean(interlace),
      palette: Boolean(colorType & constants.COLORTYPE_PALETTE),
      color: Boolean(colorType & constants.COLORTYPE_COLOR),
      alpha: Boolean(colorType & constants.COLORTYPE_ALPHA),
      bpp: bpp,
      colorType: colorType
    });

    this._handleChunkEnd();
  };

  Parser.prototype._handlePLTE = function (length) {
    this.read(length, this._parsePLTE.bind(this));
  };

  Parser.prototype._parsePLTE = function (data) {
    this._crc.write(data);

    var entries = Math.floor(data.length / 3); // console.log('Palette:', entries);

    for (var i = 0; i < entries; i++) {
      this._palette.push([data[i * 3], data[i * 3 + 1], data[i * 3 + 2], 0xff]);
    }

    this.palette(this._palette);

    this._handleChunkEnd();
  };

  Parser.prototype._handleTRNS = function (length) {
    this.simpleTransparency();
    this.read(length, this._parseTRNS.bind(this));
  };

  Parser.prototype._parseTRNS = function (data) {
    this._crc.write(data); // palette


    if (this._colorType === constants.COLORTYPE_PALETTE_COLOR) {
      if (this._palette.length === 0) {
        this.error(new Error('Transparency chunk must be after palette'));
        return;
      }

      if (data.length > this._palette.length) {
        this.error(new Error('More transparent colors than palette size'));
        return;
      }

      for (var i = 0; i < data.length; i++) {
        this._palette[i][3] = data[i];
      }

      this.palette(this._palette);
    } // for colorType 0 (grayscale) and 2 (rgb)
    // there might be one gray/color defined as transparent


    if (this._colorType === constants.COLORTYPE_GRAYSCALE) {
      // grey, 2 bytes
      this.transColor([data.readUInt16BE(0)]);
    }

    if (this._colorType === constants.COLORTYPE_COLOR) {
      this.transColor([data.readUInt16BE(0), data.readUInt16BE(2), data.readUInt16BE(4)]);
    }

    this._handleChunkEnd();
  };

  Parser.prototype._handleGAMA = function (length) {
    this.read(length, this._parseGAMA.bind(this));
  };

  Parser.prototype._parseGAMA = function (data) {
    this._crc.write(data);

    this.gamma(data.readUInt32BE(0) / constants.GAMMA_DIVISION);

    this._handleChunkEnd();
  };

  Parser.prototype._handleIDAT = function (length) {
    if (!this._emittedHeadersFinished) {
      this._emittedHeadersFinished = true;
      this.headersFinished();
    }

    this.read(-length, this._parseIDAT.bind(this, length));
  };

  Parser.prototype._parseIDAT = function (length, data) {
    this._crc.write(data);

    if (this._colorType === constants.COLORTYPE_PALETTE_COLOR && this._palette.length === 0) {
      throw new Error('Expected palette not found');
    }

    this.inflateData(data);
    var leftOverLength = length - data.length;

    if (leftOverLength > 0) {
      this._handleIDAT(leftOverLength);
    } else {
      this._handleChunkEnd();
    }
  };

  Parser.prototype._handleIEND = function (length) {
    this.read(length, this._parseIEND.bind(this));
  };

  Parser.prototype._parseIEND = function (data) {
    this._crc.write(data);

    this._hasIEND = true;

    this._handleChunkEnd();

    if (this.finished) {
      this.finished();
    }
  };
});
var filterParseAsync$1 = createCommonjsModule(function (module) {
  var FilterAsync = module.exports = function (bitmapInfo) {
    chunkstream$1.call(this);
    var buffers = [];
    var that = this;
    this._filter = new filterParse$1(bitmapInfo, {
      read: this.read.bind(this),
      write: function write(buffer) {
        buffers.push(buffer);
      },
      complete: function complete() {
        that.emit('complete', Buffer.concat(buffers));
      }
    });

    this._filter.start();
  };

  util__WEBPACK_IMPORTED_MODULE_10___default.a.inherits(FilterAsync, chunkstream$1);
});
var parser$1 = createCommonjsModule(function (module) {
  var Parser = module.exports = function (options, dependencies) {
    this._options = options;
    options.checkCRC = options.checkCRC !== false;
    this._hasIHDR = false;
    this._hasIEND = false;
    this._emittedHeadersFinished = false; // input flags/metadata

    this._palette = [];
    this._colorType = 0;
    this._chunks = {};
    this._chunks[constants.TYPE_IHDR] = this._handleIHDR.bind(this);
    this._chunks[constants.TYPE_IEND] = this._handleIEND.bind(this);
    this._chunks[constants.TYPE_IDAT] = this._handleIDAT.bind(this);
    this._chunks[constants.TYPE_PLTE] = this._handlePLTE.bind(this);
    this._chunks[constants.TYPE_tRNS] = this._handleTRNS.bind(this);
    this._chunks[constants.TYPE_gAMA] = this._handleGAMA.bind(this);
    this.read = dependencies.read;
    this.error = dependencies.error;
    this.metadata = dependencies.metadata;
    this.gamma = dependencies.gamma;
    this.transColor = dependencies.transColor;
    this.palette = dependencies.palette;
    this.parsed = dependencies.parsed;
    this.inflateData = dependencies.inflateData;
    this.finished = dependencies.finished;
    this.simpleTransparency = dependencies.simpleTransparency;

    this.headersFinished = dependencies.headersFinished || function () {};
  };

  Parser.prototype.start = function () {
    this.read(constants.PNG_SIGNATURE.length, this._parseSignature.bind(this));
  };

  Parser.prototype._parseSignature = function (data) {
    var signature = constants.PNG_SIGNATURE;

    for (var i = 0; i < signature.length; i++) {
      if (data[i] !== signature[i]) {
        this.error(new Error('Invalid file signature'));
        return;
      }
    }

    this.read(8, this._parseChunkBegin.bind(this));
  };

  Parser.prototype._parseChunkBegin = function (data) {
    // chunk content length
    var length = data.readUInt32BE(0); // chunk type

    var type = data.readUInt32BE(4);
    var name = '';

    for (var i = 4; i < 8; i++) {
      name += String.fromCharCode(data[i]);
    } //console.log('chunk ', name, length);
    // chunk flags


    var ancillary = Boolean(data[4] & 0x20); // or critical
    //    priv = Boolean(data[5] & 0x20), // or public
    //    safeToCopy = Boolean(data[7] & 0x20); // or unsafe

    if (!this._hasIHDR && type !== constants.TYPE_IHDR) {
      this.error(new Error('Expected IHDR on beggining'));
      return;
    }

    this._crc = new crc$1();

    this._crc.write(new Buffer(name));

    if (this._chunks[type]) {
      return this._chunks[type](length);
    }

    if (!ancillary) {
      this.error(new Error('Unsupported critical chunk type ' + name));
      return;
    }

    this.read(length + 4, this._skipChunk.bind(this));
  };

  Parser.prototype._skipChunk = function () {
    this.read(8, this._parseChunkBegin.bind(this));
  };

  Parser.prototype._handleChunkEnd = function () {
    this.read(4, this._parseChunkEnd.bind(this));
  };

  Parser.prototype._parseChunkEnd = function (data) {
    var fileCrc = data.readInt32BE(0);

    var calcCrc = this._crc.crc32(); // check CRC


    if (this._options.checkCRC && calcCrc !== fileCrc) {
      this.error(new Error('Crc error - ' + fileCrc + ' - ' + calcCrc));
      return;
    }

    if (!this._hasIEND) {
      this.read(8, this._parseChunkBegin.bind(this));
    }
  };

  Parser.prototype._handleIHDR = function (length) {
    this.read(length, this._parseIHDR.bind(this));
  };

  Parser.prototype._parseIHDR = function (data) {
    this._crc.write(data);

    var width = data.readUInt32BE(0);
    var height = data.readUInt32BE(4);
    var depth = data[8];
    var colorType = data[9]; // bits: 1 palette, 2 color, 4 alpha

    var compr = data[10];
    var filter = data[11];
    var interlace = data[12]; // console.log('    width', width, 'height', height,
    //     'depth', depth, 'colorType', colorType,
    //     'compr', compr, 'filter', filter, 'interlace', interlace
    // );

    if (depth !== 8 && depth !== 4 && depth !== 2 && depth !== 1 && depth !== 16) {
      this.error(new Error('Unsupported bit depth ' + depth));
      return;
    }

    if (!(colorType in constants.COLORTYPE_TO_BPP_MAP)) {
      this.error(new Error('Unsupported color type'));
      return;
    }

    if (compr !== 0) {
      this.error(new Error('Unsupported compression method'));
      return;
    }

    if (filter !== 0) {
      this.error(new Error('Unsupported filter method'));
      return;
    }

    if (interlace !== 0 && interlace !== 1) {
      this.error(new Error('Unsupported interlace method'));
      return;
    }

    this._colorType = colorType;
    var bpp = constants.COLORTYPE_TO_BPP_MAP[this._colorType];
    this._hasIHDR = true;
    this.metadata({
      width: width,
      height: height,
      depth: depth,
      interlace: Boolean(interlace),
      palette: Boolean(colorType & constants.COLORTYPE_PALETTE),
      color: Boolean(colorType & constants.COLORTYPE_COLOR),
      alpha: Boolean(colorType & constants.COLORTYPE_ALPHA),
      bpp: bpp,
      colorType: colorType
    });

    this._handleChunkEnd();
  };

  Parser.prototype._handlePLTE = function (length) {
    this.read(length, this._parsePLTE.bind(this));
  };

  Parser.prototype._parsePLTE = function (data) {
    this._crc.write(data);

    var entries = Math.floor(data.length / 3); // console.log('Palette:', entries);

    for (var i = 0; i < entries; i++) {
      this._palette.push([data[i * 3], data[i * 3 + 1], data[i * 3 + 2], 0xff]);
    }

    this.palette(this._palette);

    this._handleChunkEnd();
  };

  Parser.prototype._handleTRNS = function (length) {
    this.simpleTransparency();
    this.read(length, this._parseTRNS.bind(this));
  };

  Parser.prototype._parseTRNS = function (data) {
    this._crc.write(data); // palette


    if (this._colorType === constants.COLORTYPE_PALETTE_COLOR) {
      if (this._palette.length === 0) {
        this.error(new Error('Transparency chunk must be after palette'));
        return;
      }

      if (data.length > this._palette.length) {
        this.error(new Error('More transparent colors than palette size'));
        return;
      }

      for (var i = 0; i < data.length; i++) {
        this._palette[i][3] = data[i];
      }

      this.palette(this._palette);
    } // for colorType 0 (grayscale) and 2 (rgb)
    // there might be one gray/color defined as transparent


    if (this._colorType === constants.COLORTYPE_GRAYSCALE) {
      // grey, 2 bytes
      this.transColor([data.readUInt16BE(0)]);
    }

    if (this._colorType === constants.COLORTYPE_COLOR) {
      this.transColor([data.readUInt16BE(0), data.readUInt16BE(2), data.readUInt16BE(4)]);
    }

    this._handleChunkEnd();
  };

  Parser.prototype._handleGAMA = function (length) {
    this.read(length, this._parseGAMA.bind(this));
  };

  Parser.prototype._parseGAMA = function (data) {
    this._crc.write(data);

    this.gamma(data.readUInt32BE(0) / constants.GAMMA_DIVISION);

    this._handleChunkEnd();
  };

  Parser.prototype._handleIDAT = function (length) {
    if (!this._emittedHeadersFinished) {
      this._emittedHeadersFinished = true;
      this.headersFinished();
    }

    this.read(-length, this._parseIDAT.bind(this, length));
  };

  Parser.prototype._parseIDAT = function (length, data) {
    this._crc.write(data);

    if (this._colorType === constants.COLORTYPE_PALETTE_COLOR && this._palette.length === 0) {
      throw new Error('Expected palette not found');
    }

    this.inflateData(data);
    var leftOverLength = length - data.length;

    if (leftOverLength > 0) {
      this._handleIDAT(leftOverLength);
    } else {
      this._handleChunkEnd();
    }
  };

  Parser.prototype._handleIEND = function (length) {
    this.read(length, this._parseIEND.bind(this));
  };

  Parser.prototype._parseIEND = function (data) {
    this._crc.write(data);

    this._hasIEND = true;

    this._handleChunkEnd();

    if (this.finished) {
      this.finished();
    }
  };
});
var pixelBppMapper = [// 0 - dummy entry
function () {}, // 1 - L
// 0: 0, 1: 0, 2: 0, 3: 0xff
function (pxData, data, pxPos, rawPos) {
  if (rawPos === data.length) {
    throw new Error('Ran out of data');
  }

  var pixel = data[rawPos];
  pxData[pxPos] = pixel;
  pxData[pxPos + 1] = pixel;
  pxData[pxPos + 2] = pixel;
  pxData[pxPos + 3] = 0xff;
}, // 2 - LA
// 0: 0, 1: 0, 2: 0, 3: 1
function (pxData, data, pxPos, rawPos) {
  if (rawPos + 1 >= data.length) {
    throw new Error('Ran out of data');
  }

  var pixel = data[rawPos];
  pxData[pxPos] = pixel;
  pxData[pxPos + 1] = pixel;
  pxData[pxPos + 2] = pixel;
  pxData[pxPos + 3] = data[rawPos + 1];
}, // 3 - RGB
// 0: 0, 1: 1, 2: 2, 3: 0xff
function (pxData, data, pxPos, rawPos) {
  if (rawPos + 2 >= data.length) {
    throw new Error('Ran out of data');
  }

  pxData[pxPos] = data[rawPos];
  pxData[pxPos + 1] = data[rawPos + 1];
  pxData[pxPos + 2] = data[rawPos + 2];
  pxData[pxPos + 3] = 0xff;
}, // 4 - RGBA
// 0: 0, 1: 1, 2: 2, 3: 3
function (pxData, data, pxPos, rawPos) {
  if (rawPos + 3 >= data.length) {
    throw new Error('Ran out of data');
  }

  pxData[pxPos] = data[rawPos];
  pxData[pxPos + 1] = data[rawPos + 1];
  pxData[pxPos + 2] = data[rawPos + 2];
  pxData[pxPos + 3] = data[rawPos + 3];
}];
var pixelBppCustomMapper = [// 0 - dummy entry
function () {}, // 1 - L
// 0: 0, 1: 0, 2: 0, 3: 0xff
function (pxData, pixelData, pxPos, maxBit) {
  var pixel = pixelData[0];
  pxData[pxPos] = pixel;
  pxData[pxPos + 1] = pixel;
  pxData[pxPos + 2] = pixel;
  pxData[pxPos + 3] = maxBit;
}, // 2 - LA
// 0: 0, 1: 0, 2: 0, 3: 1
function (pxData, pixelData, pxPos) {
  var pixel = pixelData[0];
  pxData[pxPos] = pixel;
  pxData[pxPos + 1] = pixel;
  pxData[pxPos + 2] = pixel;
  pxData[pxPos + 3] = pixelData[1];
}, // 3 - RGB
// 0: 0, 1: 1, 2: 2, 3: 0xff
function (pxData, pixelData, pxPos, maxBit) {
  pxData[pxPos] = pixelData[0];
  pxData[pxPos + 1] = pixelData[1];
  pxData[pxPos + 2] = pixelData[2];
  pxData[pxPos + 3] = maxBit;
}, // 4 - RGBA
// 0: 0, 1: 1, 2: 2, 3: 3
function (pxData, pixelData, pxPos) {
  pxData[pxPos] = pixelData[0];
  pxData[pxPos + 1] = pixelData[1];
  pxData[pxPos + 2] = pixelData[2];
  pxData[pxPos + 3] = pixelData[3];
}];

function bitRetriever(data, depth) {
  var leftOver = [];
  var i = 0;

  function split() {
    if (i === data.length) {
      throw new Error('Ran out of data');
    }

    var _byte2 = data[i];
    i++;
    var byte8, byte7, byte6, byte5, byte4, byte3, byte2, byte1;

    switch (depth) {
      default:
        throw new Error('unrecognised depth');

      case 16:
        byte2 = data[i];
        i++;
        leftOver.push((_byte2 << 8) + byte2);
        break;

      case 4:
        byte2 = _byte2 & 0x0f;
        byte1 = _byte2 >> 4;
        leftOver.push(byte1, byte2);
        break;

      case 2:
        byte4 = _byte2 & 3;
        byte3 = _byte2 >> 2 & 3;
        byte2 = _byte2 >> 4 & 3;
        byte1 = _byte2 >> 6 & 3;
        leftOver.push(byte1, byte2, byte3, byte4);
        break;

      case 1:
        byte8 = _byte2 & 1;
        byte7 = _byte2 >> 1 & 1;
        byte6 = _byte2 >> 2 & 1;
        byte5 = _byte2 >> 3 & 1;
        byte4 = _byte2 >> 4 & 1;
        byte3 = _byte2 >> 5 & 1;
        byte2 = _byte2 >> 6 & 1;
        byte1 = _byte2 >> 7 & 1;
        leftOver.push(byte1, byte2, byte3, byte4, byte5, byte6, byte7, byte8);
        break;
    }
  }

  return {
    get: function get(count) {
      while (leftOver.length < count) {
        split();
      }

      var returner = leftOver.slice(0, count);
      leftOver = leftOver.slice(count);
      return returner;
    },
    resetAfterLine: function resetAfterLine() {
      leftOver.length = 0;
    },
    end: function end() {
      if (i !== data.length) {
        throw new Error('extra data found');
      }
    }
  };
}

function mapImage8Bit(image, pxData, getPxPos, bpp, data, rawPos) {
  var imageWidth = image.width;
  var imageHeight = image.height;
  var imagePass = image.index;

  for (var y = 0; y < imageHeight; y++) {
    for (var x = 0; x < imageWidth; x++) {
      var pxPos = getPxPos(x, y, imagePass);
      pixelBppMapper[bpp](pxData, data, pxPos, rawPos);
      rawPos += bpp; //eslint-disable-line no-param-reassign
    }
  }

  return rawPos;
}

function mapImageCustomBit(image, pxData, getPxPos, bpp, bits, maxBit) {
  var imageWidth = image.width;
  var imageHeight = image.height;
  var imagePass = image.index;

  for (var y = 0; y < imageHeight; y++) {
    for (var x = 0; x < imageWidth; x++) {
      var pixelData = bits.get(bpp);
      var pxPos = getPxPos(x, y, imagePass);
      pixelBppCustomMapper[bpp](pxData, pixelData, pxPos, maxBit);
    }

    bits.resetAfterLine();
  }
}

var dataToBitMap = function dataToBitMap(data, bitmapInfo) {
  var width = bitmapInfo.width;
  var height = bitmapInfo.height;
  var depth = bitmapInfo.depth;
  var bpp = bitmapInfo.bpp;
  var interlace$1 = bitmapInfo.interlace;

  if (depth !== 8) {
    var bits = bitRetriever(data, depth);
  }

  var pxData;

  if (depth <= 8) {
    pxData = new Buffer(width * height * 4);
  } else {
    pxData = new Uint16Array(width * height * 4);
  }

  var maxBit = Math.pow(2, depth) - 1;
  var rawPos = 0;
  var images;
  var getPxPos;

  if (interlace$1) {
    images = interlace.getImagePasses(width, height);
    getPxPos = interlace.getInterlaceIterator(width, height);
  } else {
    var nonInterlacedPxPos = 0;

    getPxPos = function getPxPos() {
      var returner = nonInterlacedPxPos;
      nonInterlacedPxPos += 4;
      return returner;
    };

    images = [{
      width: width,
      height: height
    }];
  }

  for (var imageIndex = 0; imageIndex < images.length; imageIndex++) {
    if (depth === 8) {
      rawPos = mapImage8Bit(images[imageIndex], pxData, getPxPos, bpp, data, rawPos);
    } else {
      mapImageCustomBit(images[imageIndex], pxData, getPxPos, bpp, bits, maxBit);
    }
  }

  if (depth === 8) {
    if (rawPos !== data.length) {
      throw new Error('extra data found');
    }
  } else {
    bits.end();
  }

  return pxData;
};

var bitmapper = {
  dataToBitMap: dataToBitMap
};

function dePalette(indata, outdata, width, height, palette) {
  var pxPos = 0; // use values from palette

  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var color = palette[indata[pxPos]];

      if (!color) {
        throw new Error('index ' + indata[pxPos] + ' not in palette');
      }

      for (var i = 0; i < 4; i++) {
        outdata[pxPos + i] = color[i];
      }

      pxPos += 4;
    }
  }
}

function replaceTransparentColor(indata, outdata, width, height, transColor) {
  var pxPos = 0;

  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var makeTrans = false;

      if (transColor.length === 1) {
        if (transColor[0] === indata[pxPos]) {
          makeTrans = true;
        }
      } else if (transColor[0] === indata[pxPos] && transColor[1] === indata[pxPos + 1] && transColor[2] === indata[pxPos + 2]) {
        makeTrans = true;
      }

      if (makeTrans) {
        for (var i = 0; i < 4; i++) {
          outdata[pxPos + i] = 0;
        }
      }

      pxPos += 4;
    }
  }
}

function scaleDepth(indata, outdata, width, height, depth) {
  var maxOutSample = 255;
  var maxInSample = Math.pow(2, depth) - 1;
  var pxPos = 0;

  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      for (var i = 0; i < 4; i++) {
        outdata[pxPos + i] = Math.floor(indata[pxPos + i] * maxOutSample / maxInSample + 0.5);
      }

      pxPos += 4;
    }
  }
}

var formatNormaliser = function formatNormaliser(indata, imageData) {
  var depth = imageData.depth;
  var width = imageData.width;
  var height = imageData.height;
  var colorType = imageData.colorType;
  var transColor = imageData.transColor;
  var palette = imageData.palette;
  var outdata = indata; // only different for 16 bits

  if (colorType === 3) {
    // paletted
    dePalette(indata, outdata, width, height, palette);
  } else {
    if (transColor) {
      replaceTransparentColor(indata, outdata, width, height, transColor);
    } // if it needs scaling


    if (depth !== 8) {
      // if we need to change the buffer size
      if (depth === 16) {
        outdata = new Buffer(width * height * 4);
      }

      scaleDepth(indata, outdata, width, height, depth);
    }
  }

  return outdata;
};

var parserAsync = createCommonjsModule(function (module) {
  var ParserAsync = module.exports = function (options) {
    chunkstream$1.call(this);
    this._parser = new parser$1(options, {
      read: this.read.bind(this),
      error: this._handleError.bind(this),
      metadata: this._handleMetaData.bind(this),
      gamma: this.emit.bind(this, 'gamma'),
      palette: this._handlePalette.bind(this),
      transColor: this._handleTransColor.bind(this),
      finished: this._finished.bind(this),
      inflateData: this._inflateData.bind(this),
      simpleTransparency: this._simpleTransparency.bind(this),
      headersFinished: this._headersFinished.bind(this)
    });
    this._options = options;
    this.writable = true;

    this._parser.start();
  };

  util__WEBPACK_IMPORTED_MODULE_10___default.a.inherits(ParserAsync, chunkstream$1);

  ParserAsync.prototype._handleError = function (err) {
    this.emit('error', err);
    this.writable = false;
    this.destroy();

    if (this._inflate && this._inflate.destroy) {
      this._inflate.destroy();
    }

    if (this._filter) {
      this._filter.destroy(); // For backward compatibility with Node 7 and below.
      // Suppress errors due to _inflate calling write() even after
      // it's destroy()'ed.


      this._filter.on('error', function () {});
    }

    this.errord = true;
  };

  ParserAsync.prototype._inflateData = function (data) {
    if (!this._inflate) {
      if (this._bitmapInfo.interlace) {
        this._inflate = zlib__WEBPACK_IMPORTED_MODULE_12___default.a.createInflate();

        this._inflate.on('error', this.emit.bind(this, 'error'));

        this._filter.on('complete', this._complete.bind(this));

        this._inflate.pipe(this._filter);
      } else {
        var rowSize = (this._bitmapInfo.width * this._bitmapInfo.bpp * this._bitmapInfo.depth + 7 >> 3) + 1;
        var imageSize = rowSize * this._bitmapInfo.height;
        var chunkSize = Math.max(imageSize, zlib__WEBPACK_IMPORTED_MODULE_12___default.a.Z_MIN_CHUNK);
        this._inflate = zlib__WEBPACK_IMPORTED_MODULE_12___default.a.createInflate({
          chunkSize: chunkSize
        });
        var leftToInflate = imageSize;
        var emitError = this.emit.bind(this, 'error');

        this._inflate.on('error', function (err) {
          if (!leftToInflate) {
            return;
          }

          emitError(err);
        });

        this._filter.on('complete', this._complete.bind(this));

        var filterWrite = this._filter.write.bind(this._filter);

        this._inflate.on('data', function (chunk) {
          if (!leftToInflate) {
            return;
          }

          if (chunk.length > leftToInflate) {
            chunk = chunk.slice(0, leftToInflate);
          }

          leftToInflate -= chunk.length;
          filterWrite(chunk);
        });

        this._inflate.on('end', this._filter.end.bind(this._filter));
      }
    }

    this._inflate.write(data);
  };

  ParserAsync.prototype._handleMetaData = function (metaData) {
    this._metaData = metaData;
    this._bitmapInfo = Object.create(metaData);
    this._filter = new filterParseAsync$1(this._bitmapInfo);
  };

  ParserAsync.prototype._handleTransColor = function (transColor) {
    this._bitmapInfo.transColor = transColor;
  };

  ParserAsync.prototype._handlePalette = function (palette) {
    this._bitmapInfo.palette = palette;
  };

  ParserAsync.prototype._simpleTransparency = function () {
    this._metaData.alpha = true;
  };

  ParserAsync.prototype._headersFinished = function () {
    // Up until this point, we don't know if we have a tRNS chunk (alpha)
    // so we can't emit metadata any earlier
    this.emit('metadata', this._metaData);
  };

  ParserAsync.prototype._finished = function () {
    if (this.errord) {
      return;
    }

    if (!this._inflate) {
      this.emit('error', 'No Inflate block');
    } else {
      // no more data to inflate
      this._inflate.end();
    }

    this.destroySoon();
  };

  ParserAsync.prototype._complete = function (filteredData) {
    if (this.errord) {
      return;
    }

    try {
      var bitmapData = bitmapper.dataToBitMap(filteredData, this._bitmapInfo);
      var normalisedBitmapData = formatNormaliser(bitmapData, this._bitmapInfo);
      bitmapData = null;
    } catch (ex) {
      this._handleError(ex);

      return;
    }

    this.emit('parsed', normalisedBitmapData);
  };
});

var bitpacker = function bitpacker(dataIn, width, height, options) {
  var outHasAlpha = [constants.COLORTYPE_COLOR_ALPHA, constants.COLORTYPE_ALPHA].indexOf(options.colorType) !== -1;

  if (options.colorType === options.inputColorType) {
    var bigEndian = function () {
      var buffer = new ArrayBuffer(2);
      new DataView(buffer).setInt16(0, 256, true
      /* littleEndian */
      ); // Int16Array uses the platform's endianness.

      return new Int16Array(buffer)[0] !== 256;
    }(); // If no need to convert to grayscale and alpha is present/absent in both, take a fast route


    if (options.bitDepth === 8 || options.bitDepth === 16 && bigEndian) {
      return dataIn;
    }
  } // map to a UInt16 array if data is 16bit, fix endianness below


  var data = options.bitDepth !== 16 ? dataIn : new Uint16Array(dataIn.buffer);
  var maxValue = 255;
  var inBpp = constants.COLORTYPE_TO_BPP_MAP[options.inputColorType];

  if (inBpp === 4 && !options.inputHasAlpha) {
    inBpp = 3;
  }

  var outBpp = constants.COLORTYPE_TO_BPP_MAP[options.colorType];

  if (options.bitDepth === 16) {
    maxValue = 65535;
    outBpp *= 2;
  }

  var outData = new Buffer(width * height * outBpp);
  var inIndex = 0;
  var outIndex = 0;
  var bgColor = options.bgColor || {};

  if (bgColor.red === undefined) {
    bgColor.red = maxValue;
  }

  if (bgColor.green === undefined) {
    bgColor.green = maxValue;
  }

  if (bgColor.blue === undefined) {
    bgColor.blue = maxValue;
  }

  function getRGBA() {
    var red;
    var green;
    var blue;
    var alpha = maxValue;

    switch (options.inputColorType) {
      case constants.COLORTYPE_COLOR_ALPHA:
        alpha = data[inIndex + 3];
        red = data[inIndex];
        green = data[inIndex + 1];
        blue = data[inIndex + 2];
        break;

      case constants.COLORTYPE_COLOR:
        red = data[inIndex];
        green = data[inIndex + 1];
        blue = data[inIndex + 2];
        break;

      case constants.COLORTYPE_ALPHA:
        alpha = data[inIndex + 1];
        red = data[inIndex];
        green = red;
        blue = red;
        break;

      case constants.COLORTYPE_GRAYSCALE:
        red = data[inIndex];
        green = red;
        blue = red;
        break;

      default:
        throw new Error('input color type:' + options.inputColorType + ' is not supported at present');
    }

    if (options.inputHasAlpha) {
      if (!outHasAlpha) {
        alpha /= maxValue;
        red = Math.min(Math.max(Math.round((1 - alpha) * bgColor.red + alpha * red), 0), maxValue);
        green = Math.min(Math.max(Math.round((1 - alpha) * bgColor.green + alpha * green), 0), maxValue);
        blue = Math.min(Math.max(Math.round((1 - alpha) * bgColor.blue + alpha * blue), 0), maxValue);
      }
    }

    return {
      red: red,
      green: green,
      blue: blue,
      alpha: alpha
    };
  }

  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var rgba = getRGBA();

      switch (options.colorType) {
        case constants.COLORTYPE_COLOR_ALPHA:
        case constants.COLORTYPE_COLOR:
          if (options.bitDepth === 8) {
            outData[outIndex] = rgba.red;
            outData[outIndex + 1] = rgba.green;
            outData[outIndex + 2] = rgba.blue;

            if (outHasAlpha) {
              outData[outIndex + 3] = rgba.alpha;
            }
          } else {
            outData.writeUInt16BE(rgba.red, outIndex);
            outData.writeUInt16BE(rgba.green, outIndex + 2);
            outData.writeUInt16BE(rgba.blue, outIndex + 4);

            if (outHasAlpha) {
              outData.writeUInt16BE(rgba.alpha, outIndex + 6);
            }
          }

          break;

        case constants.COLORTYPE_ALPHA:
        case constants.COLORTYPE_GRAYSCALE:
          // Convert to grayscale and alpha
          var grayscale = (rgba.red + rgba.green + rgba.blue) / 3;

          if (options.bitDepth === 8) {
            outData[outIndex] = grayscale;

            if (outHasAlpha) {
              outData[outIndex + 1] = rgba.alpha;
            }
          } else {
            outData.writeUInt16BE(grayscale, outIndex);

            if (outHasAlpha) {
              outData.writeUInt16BE(rgba.alpha, outIndex + 2);
            }
          }

          break;

        default:
          throw new Error('unrecognised color Type ' + options.colorType);
      }

      inIndex += inBpp;
      outIndex += outBpp;
    }
  }

  return outData;
};

function filterNone(pxData, pxPos, byteWidth, rawData, rawPos) {
  for (var x = 0; x < byteWidth; x++) {
    rawData[rawPos + x] = pxData[pxPos + x];
  }
}

function filterSumNone(pxData, pxPos, byteWidth) {
  var sum = 0;
  var length = pxPos + byteWidth;

  for (var i = pxPos; i < length; i++) {
    sum += Math.abs(pxData[i]);
  }

  return sum;
}

function filterSub(pxData, pxPos, byteWidth, rawData, rawPos, bpp) {
  for (var x = 0; x < byteWidth; x++) {
    var left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
    var val = pxData[pxPos + x] - left;
    rawData[rawPos + x] = val;
  }
}

function filterSumSub(pxData, pxPos, byteWidth, bpp) {
  var sum = 0;

  for (var x = 0; x < byteWidth; x++) {
    var left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
    var val = pxData[pxPos + x] - left;
    sum += Math.abs(val);
  }

  return sum;
}

function filterUp(pxData, pxPos, byteWidth, rawData, rawPos) {
  for (var x = 0; x < byteWidth; x++) {
    var up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
    var val = pxData[pxPos + x] - up;
    rawData[rawPos + x] = val;
  }
}

function filterSumUp(pxData, pxPos, byteWidth) {
  var sum = 0;
  var length = pxPos + byteWidth;

  for (var x = pxPos; x < length; x++) {
    var up = pxPos > 0 ? pxData[x - byteWidth] : 0;
    var val = pxData[x] - up;
    sum += Math.abs(val);
  }

  return sum;
}

function filterAvg(pxData, pxPos, byteWidth, rawData, rawPos, bpp) {
  for (var x = 0; x < byteWidth; x++) {
    var left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
    var up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
    var val = pxData[pxPos + x] - (left + up >> 1);
    rawData[rawPos + x] = val;
  }
}

function filterSumAvg(pxData, pxPos, byteWidth, bpp) {
  var sum = 0;

  for (var x = 0; x < byteWidth; x++) {
    var left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
    var up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
    var val = pxData[pxPos + x] - (left + up >> 1);
    sum += Math.abs(val);
  }

  return sum;
}

function filterPaeth(pxData, pxPos, byteWidth, rawData, rawPos, bpp) {
  for (var x = 0; x < byteWidth; x++) {
    var left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
    var up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
    var upleft = pxPos > 0 && x >= bpp ? pxData[pxPos + x - (byteWidth + bpp)] : 0;
    var val = pxData[pxPos + x] - paethPredictor(left, up, upleft);
    rawData[rawPos + x] = val;
  }
}

function filterSumPaeth(pxData, pxPos, byteWidth, bpp) {
  var sum = 0;

  for (var x = 0; x < byteWidth; x++) {
    var left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
    var up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
    var upleft = pxPos > 0 && x >= bpp ? pxData[pxPos + x - (byteWidth + bpp)] : 0;
    var val = pxData[pxPos + x] - paethPredictor(left, up, upleft);
    sum += Math.abs(val);
  }

  return sum;
}

var filters = {
  0: filterNone,
  1: filterSub,
  2: filterUp,
  3: filterAvg,
  4: filterPaeth
};
var filterSums = {
  0: filterSumNone,
  1: filterSumSub,
  2: filterSumUp,
  3: filterSumAvg,
  4: filterSumPaeth
};

var filterPack = function filterPack(pxData, width, height, options, bpp) {
  var filterTypes;

  if (!('filterType' in options) || options.filterType === -1) {
    filterTypes = [0, 1, 2, 3, 4];
  } else if (typeof options.filterType === 'number') {
    filterTypes = [options.filterType];
  } else {
    throw new Error('unrecognised filter types');
  }

  if (options.bitDepth === 16) {
    bpp *= 2;
  }

  var byteWidth = width * bpp;
  var rawPos = 0;
  var pxPos = 0;
  var rawData = new Buffer((byteWidth + 1) * height);
  var sel = filterTypes[0];

  for (var y = 0; y < height; y++) {
    if (filterTypes.length > 1) {
      // find best filter for this line (with lowest sum of values)
      var min = Infinity;

      for (var i = 0; i < filterTypes.length; i++) {
        var sum = filterSums[filterTypes[i]](pxData, pxPos, byteWidth, bpp);

        if (sum < min) {
          sel = filterTypes[i];
          min = sum;
        }
      }
    }

    rawData[rawPos] = sel;
    rawPos++;
    filters[sel](pxData, pxPos, byteWidth, rawData, rawPos, bpp);
    rawPos += byteWidth;
    pxPos += byteWidth;
  }

  return rawData;
};

var packer = createCommonjsModule(function (module) {
  var Packer = module.exports = function (options) {
    this._options = options;
    options.deflateChunkSize = options.deflateChunkSize || 32 * 1024;
    options.deflateLevel = options.deflateLevel != null ? options.deflateLevel : 9;
    options.deflateStrategy = options.deflateStrategy != null ? options.deflateStrategy : 3;
    options.inputHasAlpha = options.inputHasAlpha != null ? options.inputHasAlpha : true;
    options.deflateFactory = options.deflateFactory || zlib__WEBPACK_IMPORTED_MODULE_12___default.a.createDeflate;
    options.bitDepth = options.bitDepth || 8; // This is outputColorType

    options.colorType = typeof options.colorType === 'number' ? options.colorType : constants.COLORTYPE_COLOR_ALPHA;
    options.inputColorType = typeof options.inputColorType === 'number' ? options.inputColorType : constants.COLORTYPE_COLOR_ALPHA;

    if ([constants.COLORTYPE_GRAYSCALE, constants.COLORTYPE_COLOR, constants.COLORTYPE_COLOR_ALPHA, constants.COLORTYPE_ALPHA].indexOf(options.colorType) === -1) {
      throw new Error('option color type:' + options.colorType + ' is not supported at present');
    }

    if ([constants.COLORTYPE_GRAYSCALE, constants.COLORTYPE_COLOR, constants.COLORTYPE_COLOR_ALPHA, constants.COLORTYPE_ALPHA].indexOf(options.inputColorType) === -1) {
      throw new Error('option input color type:' + options.inputColorType + ' is not supported at present');
    }

    if (options.bitDepth !== 8 && options.bitDepth !== 16) {
      throw new Error('option bit depth:' + options.bitDepth + ' is not supported at present');
    }
  };

  Packer.prototype.getDeflateOptions = function () {
    return {
      chunkSize: this._options.deflateChunkSize,
      level: this._options.deflateLevel,
      strategy: this._options.deflateStrategy
    };
  };

  Packer.prototype.createDeflate = function () {
    return this._options.deflateFactory(this.getDeflateOptions());
  };

  Packer.prototype.filterData = function (data, width, height) {
    // convert to correct format for filtering (e.g. right bpp and bit depth)
    var packedData = bitpacker(data, width, height, this._options); // filter pixel data

    var bpp = constants.COLORTYPE_TO_BPP_MAP[this._options.colorType];
    var filteredData = filterPack(packedData, width, height, this._options, bpp);
    return filteredData;
  };

  Packer.prototype._packChunk = function (type, data) {
    var len = data ? data.length : 0;
    var buf = new Buffer(len + 12);
    buf.writeUInt32BE(len, 0);
    buf.writeUInt32BE(type, 4);

    if (data) {
      data.copy(buf, 8);
    }

    buf.writeInt32BE(crc$1.crc32(buf.slice(4, buf.length - 4)), buf.length - 4);
    return buf;
  };

  Packer.prototype.packGAMA = function (gamma) {
    var buf = new Buffer(4);
    buf.writeUInt32BE(Math.floor(gamma * constants.GAMMA_DIVISION), 0);
    return this._packChunk(constants.TYPE_gAMA, buf);
  };

  Packer.prototype.packIHDR = function (width, height) {
    var buf = new Buffer(13);
    buf.writeUInt32BE(width, 0);
    buf.writeUInt32BE(height, 4);
    buf[8] = this._options.bitDepth; // Bit depth

    buf[9] = this._options.colorType; // colorType

    buf[10] = 0; // compression

    buf[11] = 0; // filter

    buf[12] = 0; // interlace

    return this._packChunk(constants.TYPE_IHDR, buf);
  };

  Packer.prototype.packIDAT = function (data) {
    return this._packChunk(constants.TYPE_IDAT, data);
  };

  Packer.prototype.packIEND = function () {
    return this._packChunk(constants.TYPE_IEND, null);
  };
});
var packer$1 = createCommonjsModule(function (module) {
  var Packer = module.exports = function (options) {
    this._options = options;
    options.deflateChunkSize = options.deflateChunkSize || 32 * 1024;
    options.deflateLevel = options.deflateLevel != null ? options.deflateLevel : 9;
    options.deflateStrategy = options.deflateStrategy != null ? options.deflateStrategy : 3;
    options.inputHasAlpha = options.inputHasAlpha != null ? options.inputHasAlpha : true;
    options.deflateFactory = options.deflateFactory || zlib__WEBPACK_IMPORTED_MODULE_12___default.a.createDeflate;
    options.bitDepth = options.bitDepth || 8; // This is outputColorType

    options.colorType = typeof options.colorType === 'number' ? options.colorType : constants.COLORTYPE_COLOR_ALPHA;
    options.inputColorType = typeof options.inputColorType === 'number' ? options.inputColorType : constants.COLORTYPE_COLOR_ALPHA;

    if ([constants.COLORTYPE_GRAYSCALE, constants.COLORTYPE_COLOR, constants.COLORTYPE_COLOR_ALPHA, constants.COLORTYPE_ALPHA].indexOf(options.colorType) === -1) {
      throw new Error('option color type:' + options.colorType + ' is not supported at present');
    }

    if ([constants.COLORTYPE_GRAYSCALE, constants.COLORTYPE_COLOR, constants.COLORTYPE_COLOR_ALPHA, constants.COLORTYPE_ALPHA].indexOf(options.inputColorType) === -1) {
      throw new Error('option input color type:' + options.inputColorType + ' is not supported at present');
    }

    if (options.bitDepth !== 8 && options.bitDepth !== 16) {
      throw new Error('option bit depth:' + options.bitDepth + ' is not supported at present');
    }
  };

  Packer.prototype.getDeflateOptions = function () {
    return {
      chunkSize: this._options.deflateChunkSize,
      level: this._options.deflateLevel,
      strategy: this._options.deflateStrategy
    };
  };

  Packer.prototype.createDeflate = function () {
    return this._options.deflateFactory(this.getDeflateOptions());
  };

  Packer.prototype.filterData = function (data, width, height) {
    // convert to correct format for filtering (e.g. right bpp and bit depth)
    var packedData = bitpacker(data, width, height, this._options); // filter pixel data

    var bpp = constants.COLORTYPE_TO_BPP_MAP[this._options.colorType];
    var filteredData = filterPack(packedData, width, height, this._options, bpp);
    return filteredData;
  };

  Packer.prototype._packChunk = function (type, data) {
    var len = data ? data.length : 0;
    var buf = new Buffer(len + 12);
    buf.writeUInt32BE(len, 0);
    buf.writeUInt32BE(type, 4);

    if (data) {
      data.copy(buf, 8);
    }

    buf.writeInt32BE(crc$1.crc32(buf.slice(4, buf.length - 4)), buf.length - 4);
    return buf;
  };

  Packer.prototype.packGAMA = function (gamma) {
    var buf = new Buffer(4);
    buf.writeUInt32BE(Math.floor(gamma * constants.GAMMA_DIVISION), 0);
    return this._packChunk(constants.TYPE_gAMA, buf);
  };

  Packer.prototype.packIHDR = function (width, height) {
    var buf = new Buffer(13);
    buf.writeUInt32BE(width, 0);
    buf.writeUInt32BE(height, 4);
    buf[8] = this._options.bitDepth; // Bit depth

    buf[9] = this._options.colorType; // colorType

    buf[10] = 0; // compression

    buf[11] = 0; // filter

    buf[12] = 0; // interlace

    return this._packChunk(constants.TYPE_IHDR, buf);
  };

  Packer.prototype.packIDAT = function (data) {
    return this._packChunk(constants.TYPE_IDAT, data);
  };

  Packer.prototype.packIEND = function () {
    return this._packChunk(constants.TYPE_IEND, null);
  };
});
var packerAsync = createCommonjsModule(function (module) {
  var PackerAsync = module.exports = function (opt) {
    stream__WEBPACK_IMPORTED_MODULE_11___default.a.call(this);
    var options = opt || {};
    this._packer = new packer$1(options);
    this._deflate = this._packer.createDeflate();
    this.readable = true;
  };

  util__WEBPACK_IMPORTED_MODULE_10___default.a.inherits(PackerAsync, stream__WEBPACK_IMPORTED_MODULE_11___default.a);

  PackerAsync.prototype.pack = function (data, width, height, gamma) {
    // Signature
    this.emit('data', new Buffer(constants.PNG_SIGNATURE));
    this.emit('data', this._packer.packIHDR(width, height));

    if (gamma) {
      this.emit('data', this._packer.packGAMA(gamma));
    }

    var filteredData = this._packer.filterData(data, width, height); // compress it


    this._deflate.on('error', this.emit.bind(this, 'error'));

    this._deflate.on('data', function (compressedData) {
      this.emit('data', this._packer.packIDAT(compressedData));
    }.bind(this));

    this._deflate.on('end', function () {
      this.emit('data', this._packer.packIEND());
      this.emit('end');
    }.bind(this));

    this._deflate.end(filteredData);
  };
});
var syncInflate = createCommonjsModule(function (module, exports) {
  var assert$1 = assert__WEBPACK_IMPORTED_MODULE_13___default.a.ok;
  var kMaxLength = buffer__WEBPACK_IMPORTED_MODULE_8___default.a.kMaxLength;

  function Inflate(opts) {
    if (!(this instanceof Inflate)) {
      return new Inflate(opts);
    }

    if (opts && opts.chunkSize < zlib__WEBPACK_IMPORTED_MODULE_12___default.a.Z_MIN_CHUNK) {
      opts.chunkSize = zlib__WEBPACK_IMPORTED_MODULE_12___default.a.Z_MIN_CHUNK;
    }

    zlib__WEBPACK_IMPORTED_MODULE_12___default.a.Inflate.call(this, opts); // Node 8 --> 9 compatibility check

    this._offset = this._offset === undefined ? this._outOffset : this._offset;
    this._buffer = this._buffer || this._outBuffer;

    if (opts && opts.maxLength != null) {
      this._maxLength = opts.maxLength;
    }
  }

  function createInflate(opts) {
    return new Inflate(opts);
  }

  function _close(engine, callback) {
    if (callback) {
      process.nextTick(callback);
    } // Caller may invoke .close after a zlib error (which will null _handle).


    if (!engine._handle) {
      return;
    }

    engine._handle.close();

    engine._handle = null;
  }

  Inflate.prototype._processChunk = function (chunk, flushFlag, asyncCb) {
    if (typeof asyncCb === 'function') {
      return zlib__WEBPACK_IMPORTED_MODULE_12___default.a.Inflate._processChunk.call(this, chunk, flushFlag, asyncCb);
    }

    var self = this;
    var availInBefore = chunk && chunk.length;
    var availOutBefore = this._chunkSize - this._offset;
    var leftToInflate = this._maxLength;
    var inOff = 0;
    var buffers = [];
    var nread = 0;
    var error;
    this.on('error', function (err) {
      error = err;
    });

    function handleChunk(availInAfter, availOutAfter) {
      if (self._hadError) {
        return;
      }

      var have = availOutBefore - availOutAfter;
      assert$1(have >= 0, 'have should not go down');

      if (have > 0) {
        var out = self._buffer.slice(self._offset, self._offset + have);

        self._offset += have;

        if (out.length > leftToInflate) {
          out = out.slice(0, leftToInflate);
        }

        buffers.push(out);
        nread += out.length;
        leftToInflate -= out.length;

        if (leftToInflate === 0) {
          return false;
        }
      }

      if (availOutAfter === 0 || self._offset >= self._chunkSize) {
        availOutBefore = self._chunkSize;
        self._offset = 0;
        self._buffer = Buffer.allocUnsafe(self._chunkSize);
      }

      if (availOutAfter === 0) {
        inOff += availInBefore - availInAfter;
        availInBefore = availInAfter;
        return true;
      }

      return false;
    }

    assert$1(this._handle, 'zlib binding closed');

    do {
      var res = this._handle.writeSync(flushFlag, chunk, // in
      inOff, // in_off
      availInBefore, // in_len
      this._buffer, // out
      this._offset, //out_off
      availOutBefore); // out_len
      // Node 8 --> 9 compatibility check


      res = res || this._writeState;
    } while (!this._hadError && handleChunk(res[0], res[1]));

    if (this._hadError) {
      throw error;
    }

    if (nread >= kMaxLength) {
      _close(this);

      throw new RangeError('Cannot create final Buffer. It would be larger than 0x' + kMaxLength.toString(16) + ' bytes');
    }

    var buf = Buffer.concat(buffers, nread);

    _close(this);

    return buf;
  };

  util__WEBPACK_IMPORTED_MODULE_10___default.a.inherits(Inflate, zlib__WEBPACK_IMPORTED_MODULE_12___default.a.Inflate);

  function zlibBufferSync(engine, buffer) {
    if (typeof buffer === 'string') {
      buffer = Buffer.from(buffer);
    }

    if (!(buffer instanceof Buffer)) {
      throw new TypeError('Not a string or buffer');
    }

    var flushFlag = engine._finishFlushFlag;

    if (flushFlag == null) {
      flushFlag = zlib__WEBPACK_IMPORTED_MODULE_12___default.a.Z_FINISH;
    }

    return engine._processChunk(buffer, flushFlag);
  }

  function inflateSync(buffer, opts) {
    return zlibBufferSync(new Inflate(opts), buffer);
  }

  module.exports = exports = inflateSync;
  exports.Inflate = Inflate;
  exports.createInflate = createInflate;
  exports.inflateSync = inflateSync;
});
var syncReader = createCommonjsModule(function (module) {
  var SyncReader = module.exports = function (buffer) {
    this._buffer = buffer;
    this._reads = [];
  };

  SyncReader.prototype.read = function (length, callback) {
    this._reads.push({
      length: Math.abs(length),
      allowLess: length < 0,
      func: callback
    });
  };

  SyncReader.prototype.process = function () {
    // as long as there is any data and read requests
    while (this._reads.length > 0 && this._buffer.length) {
      var read = this._reads[0];

      if (this._buffer.length && (this._buffer.length >= read.length || read.allowLess)) {
        // ok there is any data so that we can satisfy this request
        this._reads.shift(); // == read


        var buf = this._buffer;
        this._buffer = buf.slice(read.length);
        read.func.call(this, buf.slice(0, read.length));
      } else {
        break;
      }
    }

    if (this._reads.length > 0) {
      return new Error('There are some read requests waitng on finished stream');
    }

    if (this._buffer.length > 0) {
      return new Error('unrecognised content at end of stream');
    }
  };
});
var syncReader$1 = createCommonjsModule(function (module) {
  var SyncReader = module.exports = function (buffer) {
    this._buffer = buffer;
    this._reads = [];
  };

  SyncReader.prototype.read = function (length, callback) {
    this._reads.push({
      length: Math.abs(length),
      allowLess: length < 0,
      func: callback
    });
  };

  SyncReader.prototype.process = function () {
    // as long as there is any data and read requests
    while (this._reads.length > 0 && this._buffer.length) {
      var read = this._reads[0];

      if (this._buffer.length && (this._buffer.length >= read.length || read.allowLess)) {
        // ok there is any data so that we can satisfy this request
        this._reads.shift(); // == read


        var buf = this._buffer;
        this._buffer = buf.slice(read.length);
        read.func.call(this, buf.slice(0, read.length));
      } else {
        break;
      }
    }

    if (this._reads.length > 0) {
      return new Error('There are some read requests waitng on finished stream');
    }

    if (this._buffer.length > 0) {
      return new Error('unrecognised content at end of stream');
    }
  };
});
var syncInflate$1 = createCommonjsModule(function (module, exports) {
  var assert$1 = assert__WEBPACK_IMPORTED_MODULE_13___default.a.ok;
  var kMaxLength = buffer__WEBPACK_IMPORTED_MODULE_8___default.a.kMaxLength;

  function Inflate(opts) {
    if (!(this instanceof Inflate)) {
      return new Inflate(opts);
    }

    if (opts && opts.chunkSize < zlib__WEBPACK_IMPORTED_MODULE_12___default.a.Z_MIN_CHUNK) {
      opts.chunkSize = zlib__WEBPACK_IMPORTED_MODULE_12___default.a.Z_MIN_CHUNK;
    }

    zlib__WEBPACK_IMPORTED_MODULE_12___default.a.Inflate.call(this, opts); // Node 8 --> 9 compatibility check

    this._offset = this._offset === undefined ? this._outOffset : this._offset;
    this._buffer = this._buffer || this._outBuffer;

    if (opts && opts.maxLength != null) {
      this._maxLength = opts.maxLength;
    }
  }

  function createInflate(opts) {
    return new Inflate(opts);
  }

  function _close(engine, callback) {
    if (callback) {
      process.nextTick(callback);
    } // Caller may invoke .close after a zlib error (which will null _handle).


    if (!engine._handle) {
      return;
    }

    engine._handle.close();

    engine._handle = null;
  }

  Inflate.prototype._processChunk = function (chunk, flushFlag, asyncCb) {
    if (typeof asyncCb === 'function') {
      return zlib__WEBPACK_IMPORTED_MODULE_12___default.a.Inflate._processChunk.call(this, chunk, flushFlag, asyncCb);
    }

    var self = this;
    var availInBefore = chunk && chunk.length;
    var availOutBefore = this._chunkSize - this._offset;
    var leftToInflate = this._maxLength;
    var inOff = 0;
    var buffers = [];
    var nread = 0;
    var error;
    this.on('error', function (err) {
      error = err;
    });

    function handleChunk(availInAfter, availOutAfter) {
      if (self._hadError) {
        return;
      }

      var have = availOutBefore - availOutAfter;
      assert$1(have >= 0, 'have should not go down');

      if (have > 0) {
        var out = self._buffer.slice(self._offset, self._offset + have);

        self._offset += have;

        if (out.length > leftToInflate) {
          out = out.slice(0, leftToInflate);
        }

        buffers.push(out);
        nread += out.length;
        leftToInflate -= out.length;

        if (leftToInflate === 0) {
          return false;
        }
      }

      if (availOutAfter === 0 || self._offset >= self._chunkSize) {
        availOutBefore = self._chunkSize;
        self._offset = 0;
        self._buffer = Buffer.allocUnsafe(self._chunkSize);
      }

      if (availOutAfter === 0) {
        inOff += availInBefore - availInAfter;
        availInBefore = availInAfter;
        return true;
      }

      return false;
    }

    assert$1(this._handle, 'zlib binding closed');

    do {
      var res = this._handle.writeSync(flushFlag, chunk, // in
      inOff, // in_off
      availInBefore, // in_len
      this._buffer, // out
      this._offset, //out_off
      availOutBefore); // out_len
      // Node 8 --> 9 compatibility check


      res = res || this._writeState;
    } while (!this._hadError && handleChunk(res[0], res[1]));

    if (this._hadError) {
      throw error;
    }

    if (nread >= kMaxLength) {
      _close(this);

      throw new RangeError('Cannot create final Buffer. It would be larger than 0x' + kMaxLength.toString(16) + ' bytes');
    }

    var buf = Buffer.concat(buffers, nread);

    _close(this);

    return buf;
  };

  util__WEBPACK_IMPORTED_MODULE_10___default.a.inherits(Inflate, zlib__WEBPACK_IMPORTED_MODULE_12___default.a.Inflate);

  function zlibBufferSync(engine, buffer) {
    if (typeof buffer === 'string') {
      buffer = Buffer.from(buffer);
    }

    if (!(buffer instanceof Buffer)) {
      throw new TypeError('Not a string or buffer');
    }

    var flushFlag = engine._finishFlushFlag;

    if (flushFlag == null) {
      flushFlag = zlib__WEBPACK_IMPORTED_MODULE_12___default.a.Z_FINISH;
    }

    return engine._processChunk(buffer, flushFlag);
  }

  function inflateSync(buffer, opts) {
    return zlibBufferSync(new Inflate(opts), buffer);
  }

  module.exports = exports = inflateSync;
  exports.Inflate = Inflate;
  exports.createInflate = createInflate;
  exports.inflateSync = inflateSync;
});

var process_1 = function process_1(inBuffer, bitmapInfo) {
  var outBuffers = [];
  var reader = new syncReader$1(inBuffer);
  var filter = new filterParse$1(bitmapInfo, {
    read: reader.read.bind(reader),
    write: function write(bufferPart) {
      outBuffers.push(bufferPart);
    },
    complete: function complete() {}
  });
  filter.start();
  reader.process();
  return Buffer.concat(outBuffers);
};

var filterParseSync = {
  process: process_1
};
var hasSyncZlib = true;

if (!zlib__WEBPACK_IMPORTED_MODULE_12___default.a.deflateSync) {
  hasSyncZlib = false;
}

var parserSync = function parserSync(buffer, options) {
  if (!hasSyncZlib) {
    throw new Error('To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0');
  }

  var err;

  function handleError(_err_) {
    err = _err_;
  }

  var metaData;

  function handleMetaData(_metaData_) {
    metaData = _metaData_;
  }

  function handleTransColor(transColor) {
    metaData.transColor = transColor;
  }

  function handlePalette(palette) {
    metaData.palette = palette;
  }

  function handleSimpleTransparency() {
    metaData.alpha = true;
  }

  var gamma;

  function handleGamma(_gamma_) {
    gamma = _gamma_;
  }

  var inflateDataList = [];

  function handleInflateData(inflatedData) {
    inflateDataList.push(inflatedData);
  }

  var reader = new syncReader$1(buffer);
  var parser = new parser$1(options, {
    read: reader.read.bind(reader),
    error: handleError,
    metadata: handleMetaData,
    gamma: handleGamma,
    palette: handlePalette,
    transColor: handleTransColor,
    inflateData: handleInflateData,
    simpleTransparency: handleSimpleTransparency
  });
  parser.start();
  reader.process();

  if (err) {
    throw err;
  } //join together the inflate datas


  var inflateData = Buffer.concat(inflateDataList);
  inflateDataList.length = 0;
  var inflatedData;

  if (metaData.interlace) {
    inflatedData = zlib__WEBPACK_IMPORTED_MODULE_12___default.a.inflateSync(inflateData);
  } else {
    var rowSize = (metaData.width * metaData.bpp * metaData.depth + 7 >> 3) + 1;
    var imageSize = rowSize * metaData.height;
    inflatedData = syncInflate$1(inflateData, {
      chunkSize: imageSize,
      maxLength: imageSize
    });
  }

  inflateData = null;

  if (!inflatedData || !inflatedData.length) {
    throw new Error('bad png - invalid inflate data response');
  }

  var unfilteredData = filterParseSync.process(inflatedData, metaData);
  inflateData = null;
  var bitmapData = bitmapper.dataToBitMap(unfilteredData, metaData);
  unfilteredData = null;
  var normalisedBitmapData = formatNormaliser(bitmapData, metaData);
  metaData.data = normalisedBitmapData;
  metaData.gamma = gamma || 0;
  return metaData;
};

var hasSyncZlib$1 = true;

if (!zlib__WEBPACK_IMPORTED_MODULE_12___default.a.deflateSync) {
  hasSyncZlib$1 = false;
}

var packerSync = function packerSync(metaData, opt) {
  if (!hasSyncZlib$1) {
    throw new Error('To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0');
  }

  var options = opt || {};
  var packer = new packer$1(options);
  var chunks = []; // Signature

  chunks.push(new Buffer(constants.PNG_SIGNATURE)); // Header

  chunks.push(packer.packIHDR(metaData.width, metaData.height));

  if (metaData.gamma) {
    chunks.push(packer.packGAMA(metaData.gamma));
  }

  var filteredData = packer.filterData(metaData.data, metaData.width, metaData.height); // compress it

  var compressedData = zlib__WEBPACK_IMPORTED_MODULE_12___default.a.deflateSync(filteredData, packer.getDeflateOptions());
  filteredData = null;

  if (!compressedData || !compressedData.length) {
    throw new Error('bad png - invalid compressed data response');
  }

  chunks.push(packer.packIDAT(compressedData)); // End

  chunks.push(packer.packIEND());
  return Buffer.concat(chunks);
};

var parserAsync$1 = createCommonjsModule(function (module) {
  var ParserAsync = module.exports = function (options) {
    chunkstream$1.call(this);
    this._parser = new parser$1(options, {
      read: this.read.bind(this),
      error: this._handleError.bind(this),
      metadata: this._handleMetaData.bind(this),
      gamma: this.emit.bind(this, 'gamma'),
      palette: this._handlePalette.bind(this),
      transColor: this._handleTransColor.bind(this),
      finished: this._finished.bind(this),
      inflateData: this._inflateData.bind(this),
      simpleTransparency: this._simpleTransparency.bind(this),
      headersFinished: this._headersFinished.bind(this)
    });
    this._options = options;
    this.writable = true;

    this._parser.start();
  };

  util__WEBPACK_IMPORTED_MODULE_10___default.a.inherits(ParserAsync, chunkstream$1);

  ParserAsync.prototype._handleError = function (err) {
    this.emit('error', err);
    this.writable = false;
    this.destroy();

    if (this._inflate && this._inflate.destroy) {
      this._inflate.destroy();
    }

    if (this._filter) {
      this._filter.destroy(); // For backward compatibility with Node 7 and below.
      // Suppress errors due to _inflate calling write() even after
      // it's destroy()'ed.


      this._filter.on('error', function () {});
    }

    this.errord = true;
  };

  ParserAsync.prototype._inflateData = function (data) {
    if (!this._inflate) {
      if (this._bitmapInfo.interlace) {
        this._inflate = zlib__WEBPACK_IMPORTED_MODULE_12___default.a.createInflate();

        this._inflate.on('error', this.emit.bind(this, 'error'));

        this._filter.on('complete', this._complete.bind(this));

        this._inflate.pipe(this._filter);
      } else {
        var rowSize = (this._bitmapInfo.width * this._bitmapInfo.bpp * this._bitmapInfo.depth + 7 >> 3) + 1;
        var imageSize = rowSize * this._bitmapInfo.height;
        var chunkSize = Math.max(imageSize, zlib__WEBPACK_IMPORTED_MODULE_12___default.a.Z_MIN_CHUNK);
        this._inflate = zlib__WEBPACK_IMPORTED_MODULE_12___default.a.createInflate({
          chunkSize: chunkSize
        });
        var leftToInflate = imageSize;
        var emitError = this.emit.bind(this, 'error');

        this._inflate.on('error', function (err) {
          if (!leftToInflate) {
            return;
          }

          emitError(err);
        });

        this._filter.on('complete', this._complete.bind(this));

        var filterWrite = this._filter.write.bind(this._filter);

        this._inflate.on('data', function (chunk) {
          if (!leftToInflate) {
            return;
          }

          if (chunk.length > leftToInflate) {
            chunk = chunk.slice(0, leftToInflate);
          }

          leftToInflate -= chunk.length;
          filterWrite(chunk);
        });

        this._inflate.on('end', this._filter.end.bind(this._filter));
      }
    }

    this._inflate.write(data);
  };

  ParserAsync.prototype._handleMetaData = function (metaData) {
    this._metaData = metaData;
    this._bitmapInfo = Object.create(metaData);
    this._filter = new filterParseAsync$1(this._bitmapInfo);
  };

  ParserAsync.prototype._handleTransColor = function (transColor) {
    this._bitmapInfo.transColor = transColor;
  };

  ParserAsync.prototype._handlePalette = function (palette) {
    this._bitmapInfo.palette = palette;
  };

  ParserAsync.prototype._simpleTransparency = function () {
    this._metaData.alpha = true;
  };

  ParserAsync.prototype._headersFinished = function () {
    // Up until this point, we don't know if we have a tRNS chunk (alpha)
    // so we can't emit metadata any earlier
    this.emit('metadata', this._metaData);
  };

  ParserAsync.prototype._finished = function () {
    if (this.errord) {
      return;
    }

    if (!this._inflate) {
      this.emit('error', 'No Inflate block');
    } else {
      // no more data to inflate
      this._inflate.end();
    }

    this.destroySoon();
  };

  ParserAsync.prototype._complete = function (filteredData) {
    if (this.errord) {
      return;
    }

    try {
      var bitmapData = bitmapper.dataToBitMap(filteredData, this._bitmapInfo);
      var normalisedBitmapData = formatNormaliser(bitmapData, this._bitmapInfo);
      bitmapData = null;
    } catch (ex) {
      this._handleError(ex);

      return;
    }

    this.emit('parsed', normalisedBitmapData);
  };
});
var packerAsync$1 = createCommonjsModule(function (module) {
  var PackerAsync = module.exports = function (opt) {
    stream__WEBPACK_IMPORTED_MODULE_11___default.a.call(this);
    var options = opt || {};
    this._packer = new packer$1(options);
    this._deflate = this._packer.createDeflate();
    this.readable = true;
  };

  util__WEBPACK_IMPORTED_MODULE_10___default.a.inherits(PackerAsync, stream__WEBPACK_IMPORTED_MODULE_11___default.a);

  PackerAsync.prototype.pack = function (data, width, height, gamma) {
    // Signature
    this.emit('data', new Buffer(constants.PNG_SIGNATURE));
    this.emit('data', this._packer.packIHDR(width, height));

    if (gamma) {
      this.emit('data', this._packer.packGAMA(gamma));
    }

    var filteredData = this._packer.filterData(data, width, height); // compress it


    this._deflate.on('error', this.emit.bind(this, 'error'));

    this._deflate.on('data', function (compressedData) {
      this.emit('data', this._packer.packIDAT(compressedData));
    }.bind(this));

    this._deflate.on('end', function () {
      this.emit('data', this._packer.packIEND());
      this.emit('end');
    }.bind(this));

    this._deflate.end(filteredData);
  };
});

var read = function read(buffer, options) {
  return parserSync(buffer, options || {});
};

var write = function write(png, options) {
  return packerSync(png, options);
};

var pngSync = {
  read: read,
  write: write
};
var png = createCommonjsModule(function (module, exports) {
  var PNG = exports.PNG = function (options) {
    stream__WEBPACK_IMPORTED_MODULE_11___default.a.call(this);
    options = options || {}; // eslint-disable-line no-param-reassign
    // coerce pixel dimensions to integers (also coerces undefined -> 0):

    this.width = options.width | 0;
    this.height = options.height | 0;
    this.data = this.width > 0 && this.height > 0 ? new Buffer(4 * this.width * this.height) : null;

    if (options.fill && this.data) {
      this.data.fill(0);
    }

    this.gamma = 0;
    this.readable = this.writable = true;
    this._parser = new parserAsync$1(options);

    this._parser.on('error', this.emit.bind(this, 'error'));

    this._parser.on('close', this._handleClose.bind(this));

    this._parser.on('metadata', this._metadata.bind(this));

    this._parser.on('gamma', this._gamma.bind(this));

    this._parser.on('parsed', function (data) {
      this.data = data;
      this.emit('parsed', data);
    }.bind(this));

    this._packer = new packerAsync$1(options);

    this._packer.on('data', this.emit.bind(this, 'data'));

    this._packer.on('end', this.emit.bind(this, 'end'));

    this._parser.on('close', this._handleClose.bind(this));

    this._packer.on('error', this.emit.bind(this, 'error'));
  };

  util__WEBPACK_IMPORTED_MODULE_10___default.a.inherits(PNG, stream__WEBPACK_IMPORTED_MODULE_11___default.a);
  PNG.sync = pngSync;

  PNG.prototype.pack = function () {
    if (!this.data || !this.data.length) {
      this.emit('error', 'No data provided');
      return this;
    }

    process.nextTick(function () {
      this._packer.pack(this.data, this.width, this.height, this.gamma);
    }.bind(this));
    return this;
  };

  PNG.prototype.parse = function (data, callback) {
    if (callback) {
      var onParsed, onError;

      onParsed = function (parsedData) {
        this.removeListener('error', onError);
        this.data = parsedData;
        callback(null, this);
      }.bind(this);

      onError = function (err) {
        this.removeListener('parsed', onParsed);
        callback(err, null);
      }.bind(this);

      this.once('parsed', onParsed);
      this.once('error', onError);
    }

    this.end(data);
    return this;
  };

  PNG.prototype.write = function (data) {
    this._parser.write(data);

    return true;
  };

  PNG.prototype.end = function (data) {
    this._parser.end(data);
  };

  PNG.prototype._metadata = function (metadata) {
    this.width = metadata.width;
    this.height = metadata.height;
    this.emit('metadata', metadata);
  };

  PNG.prototype._gamma = function (gamma) {
    this.gamma = gamma;
  };

  PNG.prototype._handleClose = function () {
    if (!this._parser.writable && !this._packer.readable) {
      this.emit('close');
    }
  };

  PNG.bitblt = function (src, dst, srcX, srcY, width, height, deltaX, deltaY) {
    // coerce pixel dimensions to integers (also coerces undefined -> 0):

    /* eslint-disable no-param-reassign */
    srcX |= 0;
    srcY |= 0;
    width |= 0;
    height |= 0;
    deltaX |= 0;
    deltaY |= 0;
    /* eslint-enable no-param-reassign */

    if (srcX > src.width || srcY > src.height || srcX + width > src.width || srcY + height > src.height) {
      throw new Error('bitblt reading outside image');
    }

    if (deltaX > dst.width || deltaY > dst.height || deltaX + width > dst.width || deltaY + height > dst.height) {
      throw new Error('bitblt writing outside image');
    }

    for (var y = 0; y < height; y++) {
      src.data.copy(dst.data, (deltaY + y) * dst.width + deltaX << 2, (srcY + y) * src.width + srcX << 2, (srcY + y) * src.width + srcX + width << 2);
    }
  };

  PNG.prototype.bitblt = function (dst, srcX, srcY, width, height, deltaX, deltaY) {
    PNG.bitblt(this, dst, srcX, srcY, width, height, deltaX, deltaY);
    return this;
  };

  PNG.adjustGamma = function (src) {
    if (src.gamma) {
      for (var y = 0; y < src.height; y++) {
        for (var x = 0; x < src.width; x++) {
          var idx = src.width * y + x << 2;

          for (var i = 0; i < 3; i++) {
            var sample = src.data[idx + i] / 255;
            sample = Math.pow(sample, 1 / 2.2 / src.gamma);
            src.data[idx + i] = Math.round(sample * 255);
          }
        }
      }

      src.gamma = 0;
    }
  };

  PNG.prototype.adjustGamma = function () {
    PNG.adjustGamma(this);
  };
});
var utils$1 = createCommonjsModule(function (module, exports) {
  function hex2rgba(hex) {
    if (typeof hex === 'number') {
      hex = hex.toString();
    }

    if (typeof hex !== 'string') {
      throw new Error('Color should be defined as hex string');
    }

    var hexCode = hex.slice().replace('#', '').split('');

    if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
      throw new Error('Invalid hex color: ' + hex);
    } // Convert from short to long form (fff -> ffffff)


    if (hexCode.length === 3 || hexCode.length === 4) {
      hexCode = Array.prototype.concat.apply([], hexCode.map(function (c) {
        return [c, c];
      }));
    } // Add default alpha value


    if (hexCode.length === 6) hexCode.push('F', 'F');
    var hexValue = parseInt(hexCode.join(''), 16);
    return {
      r: hexValue >> 24 & 255,
      g: hexValue >> 16 & 255,
      b: hexValue >> 8 & 255,
      a: hexValue & 255,
      hex: '#' + hexCode.slice(0, 6).join('')
    };
  }

  exports.getOptions = function getOptions(options) {
    if (!options) options = {};
    if (!options.color) options.color = {};
    var margin = typeof options.margin === 'undefined' || options.margin === null || options.margin < 0 ? 4 : options.margin;
    var width = options.width && options.width >= 21 ? options.width : undefined;
    var scale = options.scale || 4;
    return {
      width: width,
      scale: width ? 4 : scale,
      margin: margin,
      color: {
        dark: hex2rgba(options.color.dark || '#000000ff'),
        light: hex2rgba(options.color.light || '#ffffffff')
      },
      type: options.type,
      rendererOpts: options.rendererOpts || {}
    };
  };

  exports.getScale = function getScale(qrSize, opts) {
    return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
  };

  exports.getImageWidth = function getImageWidth(qrSize, opts) {
    var scale = exports.getScale(qrSize, opts);
    return Math.floor((qrSize + opts.margin * 2) * scale);
  };

  exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
    var size = qr.modules.size;
    var data = qr.modules.data;
    var scale = exports.getScale(size, opts);
    var symbolSize = Math.floor((size + opts.margin * 2) * scale);
    var scaledMargin = opts.margin * scale;
    var palette = [opts.color.light, opts.color.dark];

    for (var i = 0; i < symbolSize; i++) {
      for (var j = 0; j < symbolSize; j++) {
        var posDst = (i * symbolSize + j) * 4;
        var pxColor = opts.color.light;

        if (i >= scaledMargin && j >= scaledMargin && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
          var iSrc = Math.floor((i - scaledMargin) / scale);
          var jSrc = Math.floor((j - scaledMargin) / scale);
          pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
        }

        imgData[posDst++] = pxColor.r;
        imgData[posDst++] = pxColor.g;
        imgData[posDst++] = pxColor.b;
        imgData[posDst] = pxColor.a;
      }
    }
  };
});
var png$1 = createCommonjsModule(function (module, exports) {
  var PNG = exports.PNG = function (options) {
    stream__WEBPACK_IMPORTED_MODULE_11___default.a.call(this);
    options = options || {}; // eslint-disable-line no-param-reassign
    // coerce pixel dimensions to integers (also coerces undefined -> 0):

    this.width = options.width | 0;
    this.height = options.height | 0;
    this.data = this.width > 0 && this.height > 0 ? new Buffer(4 * this.width * this.height) : null;

    if (options.fill && this.data) {
      this.data.fill(0);
    }

    this.gamma = 0;
    this.readable = this.writable = true;
    this._parser = new parserAsync$1(options);

    this._parser.on('error', this.emit.bind(this, 'error'));

    this._parser.on('close', this._handleClose.bind(this));

    this._parser.on('metadata', this._metadata.bind(this));

    this._parser.on('gamma', this._gamma.bind(this));

    this._parser.on('parsed', function (data) {
      this.data = data;
      this.emit('parsed', data);
    }.bind(this));

    this._packer = new packerAsync$1(options);

    this._packer.on('data', this.emit.bind(this, 'data'));

    this._packer.on('end', this.emit.bind(this, 'end'));

    this._parser.on('close', this._handleClose.bind(this));

    this._packer.on('error', this.emit.bind(this, 'error'));
  };

  util__WEBPACK_IMPORTED_MODULE_10___default.a.inherits(PNG, stream__WEBPACK_IMPORTED_MODULE_11___default.a);
  PNG.sync = pngSync;

  PNG.prototype.pack = function () {
    if (!this.data || !this.data.length) {
      this.emit('error', 'No data provided');
      return this;
    }

    process.nextTick(function () {
      this._packer.pack(this.data, this.width, this.height, this.gamma);
    }.bind(this));
    return this;
  };

  PNG.prototype.parse = function (data, callback) {
    if (callback) {
      var onParsed, onError;

      onParsed = function (parsedData) {
        this.removeListener('error', onError);
        this.data = parsedData;
        callback(null, this);
      }.bind(this);

      onError = function (err) {
        this.removeListener('parsed', onParsed);
        callback(err, null);
      }.bind(this);

      this.once('parsed', onParsed);
      this.once('error', onError);
    }

    this.end(data);
    return this;
  };

  PNG.prototype.write = function (data) {
    this._parser.write(data);

    return true;
  };

  PNG.prototype.end = function (data) {
    this._parser.end(data);
  };

  PNG.prototype._metadata = function (metadata) {
    this.width = metadata.width;
    this.height = metadata.height;
    this.emit('metadata', metadata);
  };

  PNG.prototype._gamma = function (gamma) {
    this.gamma = gamma;
  };

  PNG.prototype._handleClose = function () {
    if (!this._parser.writable && !this._packer.readable) {
      this.emit('close');
    }
  };

  PNG.bitblt = function (src, dst, srcX, srcY, width, height, deltaX, deltaY) {
    // coerce pixel dimensions to integers (also coerces undefined -> 0):

    /* eslint-disable no-param-reassign */
    srcX |= 0;
    srcY |= 0;
    width |= 0;
    height |= 0;
    deltaX |= 0;
    deltaY |= 0;
    /* eslint-enable no-param-reassign */

    if (srcX > src.width || srcY > src.height || srcX + width > src.width || srcY + height > src.height) {
      throw new Error('bitblt reading outside image');
    }

    if (deltaX > dst.width || deltaY > dst.height || deltaX + width > dst.width || deltaY + height > dst.height) {
      throw new Error('bitblt writing outside image');
    }

    for (var y = 0; y < height; y++) {
      src.data.copy(dst.data, (deltaY + y) * dst.width + deltaX << 2, (srcY + y) * src.width + srcX << 2, (srcY + y) * src.width + srcX + width << 2);
    }
  };

  PNG.prototype.bitblt = function (dst, srcX, srcY, width, height, deltaX, deltaY) {
    PNG.bitblt(this, dst, srcX, srcY, width, height, deltaX, deltaY);
    return this;
  };

  PNG.adjustGamma = function (src) {
    if (src.gamma) {
      for (var y = 0; y < src.height; y++) {
        for (var x = 0; x < src.width; x++) {
          var idx = src.width * y + x << 2;

          for (var i = 0; i < 3; i++) {
            var sample = src.data[idx + i] / 255;
            sample = Math.pow(sample, 1 / 2.2 / src.gamma);
            src.data[idx + i] = Math.round(sample * 255);
          }
        }
      }

      src.gamma = 0;
    }
  };

  PNG.prototype.adjustGamma = function () {
    PNG.adjustGamma(this);
  };
});
var utils$2 = createCommonjsModule(function (module, exports) {
  function hex2rgba(hex) {
    if (typeof hex === 'number') {
      hex = hex.toString();
    }

    if (typeof hex !== 'string') {
      throw new Error('Color should be defined as hex string');
    }

    var hexCode = hex.slice().replace('#', '').split('');

    if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
      throw new Error('Invalid hex color: ' + hex);
    } // Convert from short to long form (fff -> ffffff)


    if (hexCode.length === 3 || hexCode.length === 4) {
      hexCode = Array.prototype.concat.apply([], hexCode.map(function (c) {
        return [c, c];
      }));
    } // Add default alpha value


    if (hexCode.length === 6) hexCode.push('F', 'F');
    var hexValue = parseInt(hexCode.join(''), 16);
    return {
      r: hexValue >> 24 & 255,
      g: hexValue >> 16 & 255,
      b: hexValue >> 8 & 255,
      a: hexValue & 255,
      hex: '#' + hexCode.slice(0, 6).join('')
    };
  }

  exports.getOptions = function getOptions(options) {
    if (!options) options = {};
    if (!options.color) options.color = {};
    var margin = typeof options.margin === 'undefined' || options.margin === null || options.margin < 0 ? 4 : options.margin;
    var width = options.width && options.width >= 21 ? options.width : undefined;
    var scale = options.scale || 4;
    return {
      width: width,
      scale: width ? 4 : scale,
      margin: margin,
      color: {
        dark: hex2rgba(options.color.dark || '#000000ff'),
        light: hex2rgba(options.color.light || '#ffffffff')
      },
      type: options.type,
      rendererOpts: options.rendererOpts || {}
    };
  };

  exports.getScale = function getScale(qrSize, opts) {
    return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
  };

  exports.getImageWidth = function getImageWidth(qrSize, opts) {
    var scale = exports.getScale(qrSize, opts);
    return Math.floor((qrSize + opts.margin * 2) * scale);
  };

  exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
    var size = qr.modules.size;
    var data = qr.modules.data;
    var scale = exports.getScale(size, opts);
    var symbolSize = Math.floor((size + opts.margin * 2) * scale);
    var scaledMargin = opts.margin * scale;
    var palette = [opts.color.light, opts.color.dark];

    for (var i = 0; i < symbolSize; i++) {
      for (var j = 0; j < symbolSize; j++) {
        var posDst = (i * symbolSize + j) * 4;
        var pxColor = opts.color.light;

        if (i >= scaledMargin && j >= scaledMargin && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
          var iSrc = Math.floor((i - scaledMargin) / scale);
          var jSrc = Math.floor((j - scaledMargin) / scale);
          pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
        }

        imgData[posDst++] = pxColor.r;
        imgData[posDst++] = pxColor.g;
        imgData[posDst++] = pxColor.b;
        imgData[posDst] = pxColor.a;
      }
    }
  };
});
var png$2 = createCommonjsModule(function (module, exports) {
  var PNG = png$1.PNG;

  exports.render = function render(qrData, options) {
    var opts = utils$2.getOptions(options);
    var pngOpts = opts.rendererOpts;
    var size = utils$2.getImageWidth(qrData.modules.size, opts);
    pngOpts.width = size;
    pngOpts.height = size;
    var pngImage = new PNG(pngOpts);
    utils$2.qrToImageData(pngImage.data, qrData, opts);
    return pngImage;
  };

  exports.renderToDataURL = function renderToDataURL(qrData, options, cb) {
    if (typeof cb === 'undefined') {
      cb = options;
      options = undefined;
    }

    exports.renderToBuffer(qrData, options, function (err, output) {
      if (err) cb(err);
      var url = 'data:image/png;base64,';
      url += output.toString('base64');
      cb(null, url);
    });
  };

  exports.renderToBuffer = function renderToBuffer(qrData, options, cb) {
    if (typeof cb === 'undefined') {
      cb = options;
      options = undefined;
    }

    var png = exports.render(qrData, options);
    var buffer = [];
    png.on('error', cb);
    png.on('data', function (data) {
      buffer.push(data);
    });
    png.on('end', function () {
      cb(null, Buffer.concat(buffer));
    });
    png.pack();
  };

  exports.renderToFile = function renderToFile(path, qrData, options, cb) {
    if (typeof cb === 'undefined') {
      cb = options;
      options = undefined;
    }

    var stream = fs__WEBPACK_IMPORTED_MODULE_9___default.a.createWriteStream(path);
    stream.on('error', cb);
    stream.on('close', cb);
    exports.renderToFileStream(stream, qrData, options);
  };

  exports.renderToFileStream = function renderToFileStream(stream, qrData, options) {
    var png = exports.render(qrData, options);
    png.pack().pipe(stream);
  };
});
var utf8 = createCommonjsModule(function (module, exports) {
  var BLOCK_CHAR = {
    WW: ' ',
    WB: '▄',
    BB: '█',
    BW: '▀'
  };
  var INVERTED_BLOCK_CHAR = {
    BB: ' ',
    BW: '▄',
    WW: '█',
    WB: '▀'
  };

  function getBlockChar(top, bottom, blocks) {
    if (top && bottom) return blocks.BB;
    if (top && !bottom) return blocks.BW;
    if (!top && bottom) return blocks.WB;
    return blocks.WW;
  }

  exports.render = function (qrData, options, cb) {
    var opts = utils$2.getOptions(options);
    var blocks = BLOCK_CHAR;

    if (opts.color.dark.hex === '#ffffff' || opts.color.light.hex === '#000000') {
      blocks = INVERTED_BLOCK_CHAR;
    }

    var size = qrData.modules.size;
    var data = qrData.modules.data;
    var output = '';
    var hMargin = Array(size + opts.margin * 2 + 1).join(blocks.WW);
    hMargin = Array(opts.margin / 2 + 1).join(hMargin + '\n');
    var vMargin = Array(opts.margin + 1).join(blocks.WW);
    output += hMargin;

    for (var i = 0; i < size; i += 2) {
      output += vMargin;

      for (var j = 0; j < size; j++) {
        var topModule = data[i * size + j];
        var bottomModule = data[(i + 1) * size + j];
        output += getBlockChar(topModule, bottomModule, blocks);
      }

      output += vMargin + '\n';
    }

    output += hMargin.slice(0, -1);

    if (typeof cb === 'function') {
      cb(null, output);
    }

    return output;
  };

  exports.renderToFile = function renderToFile(path, qrData, options, cb) {
    if (typeof cb === 'undefined') {
      cb = options;
      options = undefined;
    }

    var fs$1 = fs__WEBPACK_IMPORTED_MODULE_9___default.a;
    var utf8 = exports.render(qrData, options);
    fs$1.writeFile(path, utf8, cb);
  };
});

function getColorAttrib(color, attrib) {
  var alpha = color.a / 255;
  var str = attrib + '="' + color.hex + '"';
  return alpha < 1 ? str + ' ' + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
}

function svgCmd(cmd, x, y) {
  var str = cmd + x;
  if (typeof y !== 'undefined') str += ' ' + y;
  return str;
}

function qrToPath(data, size, margin) {
  var path = '';
  var moveBy = 0;
  var newRow = false;
  var lineLength = 0;

  for (var i = 0; i < data.length; i++) {
    var col = Math.floor(i % size);
    var row = Math.floor(i / size);
    if (!col && !newRow) newRow = true;

    if (data[i]) {
      lineLength++;

      if (!(i > 0 && col > 0 && data[i - 1])) {
        path += newRow ? svgCmd('M', col + margin, 0.5 + row + margin) : svgCmd('m', moveBy, 0);
        moveBy = 0;
        newRow = false;
      }

      if (!(col + 1 < size && data[i + 1])) {
        path += svgCmd('h', lineLength);
        lineLength = 0;
      }
    } else {
      moveBy++;
    }
  }

  return path;
}

var render = function render(qrData, options, cb) {
  var opts = utils$2.getOptions(options);
  var size = qrData.modules.size;
  var data = qrData.modules.data;
  var qrcodesize = size + opts.margin * 2;
  var bg = !opts.color.light.a ? '' : '<path ' + getColorAttrib(opts.color.light, 'fill') + ' d="M0 0h' + qrcodesize + 'v' + qrcodesize + 'H0z"/>';
  var path = '<path ' + getColorAttrib(opts.color.dark, 'stroke') + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
  var viewBox = 'viewBox="' + '0 0 ' + qrcodesize + ' ' + qrcodesize + '"';
  var width = !opts.width ? '' : 'width="' + opts.width + '" height="' + opts.width + '" ';
  var svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + '</svg>\n';

  if (typeof cb === 'function') {
    cb(null, svgTag);
  }

  return svgTag;
};

var svgTag = {
  render: render
};
var svg = createCommonjsModule(function (module, exports) {
  exports.render = svgTag.render;

  exports.renderToFile = function renderToFile(path, qrData, options, cb) {
    if (typeof cb === 'undefined') {
      cb = options;
      options = undefined;
    }

    var fs$1 = fs__WEBPACK_IMPORTED_MODULE_9___default.a;
    var svgTag = exports.render(qrData, options);
    var xmlStr = '<?xml version="1.0" encoding="utf-8"?>' + '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">' + svgTag;
    fs$1.writeFile(path, xmlStr, cb);
  };
});
var canvas = createCommonjsModule(function (module, exports) {
  function clearCanvas(ctx, canvas, size) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!canvas.style) canvas.style = {};
    canvas.height = size;
    canvas.width = size;
    canvas.style.height = size + 'px';
    canvas.style.width = size + 'px';
  }

  function getCanvasElement() {
    try {
      return document.createElement('canvas');
    } catch (e) {
      throw new Error('You need to specify a canvas element');
    }
  }

  exports.render = function render(qrData, canvas, options) {
    var opts = options;
    var canvasEl = canvas;

    if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
      opts = canvas;
      canvas = undefined;
    }

    if (!canvas) {
      canvasEl = getCanvasElement();
    }

    opts = utils$2.getOptions(opts);
    var size = utils$2.getImageWidth(qrData.modules.size, opts);
    var ctx = canvasEl.getContext('2d');
    var image = ctx.createImageData(size, size);
    utils$2.qrToImageData(image.data, qrData, opts);
    clearCanvas(ctx, canvasEl, size);
    ctx.putImageData(image, 0, 0);
    return canvasEl;
  };

  exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
    var opts = options;

    if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
      opts = canvas;
      canvas = undefined;
    }

    if (!opts) opts = {};
    var canvasEl = exports.render(qrData, canvas, opts);
    var type = opts.type || 'image/png';
    var rendererOpts = opts.rendererOpts || {};
    return canvasEl.toDataURL(type, rendererOpts.quality);
  };
}); // can-promise has a crash in some versions of react native that dont have
// standard global objects
// https://github.com/soldair/node-qrcode/issues/157

var canPromise = function canPromise() {
  return typeof Promise === 'function' && Promise.prototype && Promise.prototype.then;
};
/**
 * QRCode for JavaScript
 *
 * modified by Ryan Day for nodejs support
 * Copyright (c) 2011 Ryan Day
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
*/

/**
 * Add finder patterns bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */


function setupFinderPattern(matrix, version) {
  var size = matrix.size;
  var pos = finderPattern.getPositions(version);

  for (var i = 0; i < pos.length; i++) {
    var row = pos[i][0];
    var col = pos[i][1];

    for (var r = -1; r <= 7; r++) {
      if (row + r <= -1 || size <= row + r) continue;

      for (var c = -1; c <= 7; c++) {
        if (col + c <= -1 || size <= col + c) continue;

        if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) {
          matrix.set(row + r, col + c, true, true);
        } else {
          matrix.set(row + r, col + c, false, true);
        }
      }
    }
  }
}
/**
 * Add timing pattern bits to matrix
 *
 * Note: this function must be called before {@link setupAlignmentPattern}
 *
 * @param  {BitMatrix} matrix Modules matrix
 */


function setupTimingPattern(matrix) {
  var size = matrix.size;

  for (var r = 8; r < size - 8; r++) {
    var value = r % 2 === 0;
    matrix.set(r, 6, value, true);
    matrix.set(6, r, value, true);
  }
}
/**
 * Add alignment patterns bits to matrix
 *
 * Note: this function must be called after {@link setupTimingPattern}
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */


function setupAlignmentPattern(matrix, version) {
  var pos = alignmentPattern$1.getPositions(version);

  for (var i = 0; i < pos.length; i++) {
    var row = pos[i][0];
    var col = pos[i][1];

    for (var r = -2; r <= 2; r++) {
      for (var c = -2; c <= 2; c++) {
        if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) {
          matrix.set(row + r, col + c, true, true);
        } else {
          matrix.set(row + r, col + c, false, true);
        }
      }
    }
  }
}
/**
 * Add version info bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */


function setupVersionInfo(matrix, version) {
  var size = matrix.size;
  var bits = version$1.getEncodedBits(version);
  var row, col, mod;

  for (var i = 0; i < 18; i++) {
    row = Math.floor(i / 3);
    col = i % 3 + size - 8 - 3;
    mod = (bits >> i & 1) === 1;
    matrix.set(row, col, mod, true);
    matrix.set(col, row, mod, true);
  }
}
/**
 * Add format info bits to matrix
 *
 * @param  {BitMatrix} matrix               Modules matrix
 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
 * @param  {Number}    maskPattern          Mask pattern reference value
 */


function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
  var size = matrix.size;
  var bits = formatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
  var i, mod;

  for (i = 0; i < 15; i++) {
    mod = (bits >> i & 1) === 1; // vertical

    if (i < 6) {
      matrix.set(i, 8, mod, true);
    } else if (i < 8) {
      matrix.set(i + 1, 8, mod, true);
    } else {
      matrix.set(size - 15 + i, 8, mod, true);
    } // horizontal


    if (i < 8) {
      matrix.set(8, size - i - 1, mod, true);
    } else if (i < 9) {
      matrix.set(8, 15 - i - 1 + 1, mod, true);
    } else {
      matrix.set(8, 15 - i - 1, mod, true);
    }
  } // fixed module


  matrix.set(size - 8, 8, 1, true);
}
/**
 * Add encoded data bits to matrix
 *
 * @param  {BitMatrix} matrix Modules matrix
 * @param  {Buffer}    data   Data codewords
 */


function setupData(matrix, data) {
  var size = matrix.size;
  var inc = -1;
  var row = size - 1;
  var bitIndex = 7;
  var byteIndex = 0;

  for (var col = size - 1; col > 0; col -= 2) {
    if (col === 6) col--;

    while (true) {
      for (var c = 0; c < 2; c++) {
        if (!matrix.isReserved(row, col - c)) {
          var dark = false;

          if (byteIndex < data.length) {
            dark = (data[byteIndex] >>> bitIndex & 1) === 1;
          }

          matrix.set(row, col - c, dark);
          bitIndex--;

          if (bitIndex === -1) {
            byteIndex++;
            bitIndex = 7;
          }
        }
      }

      row += inc;

      if (row < 0 || size <= row) {
        row -= inc;
        inc = -inc;
        break;
      }
    }
  }
}
/**
 * Create encoded codewords from data input
 *
 * @param  {Number}   version              QR Code version
 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
 * @param  {ByteData} data                 Data input
 * @return {Buffer}                        Buffer containing encoded codewords
 */


function createData(version, errorCorrectionLevel, segments) {
  // Prepare data buffer
  var buffer = new bitBuffer();
  segments.forEach(function (data) {
    // prefix data with mode indicator (4 bits)
    buffer.put(data.mode.bit, 4); // Prefix data with character count indicator.
    // The character count indicator is a string of bits that represents the
    // number of characters that are being encoded.
    // The character count indicator must be placed after the mode indicator
    // and must be a certain number of bits long, depending on the QR version
    // and data mode
    // @see {@link Mode.getCharCountIndicator}.

    buffer.put(data.getLength(), mode$1.getCharCountIndicator(data.mode, version)); // add binary data sequence to buffer

    data.write(buffer);
  }); // Calculate required number of bits

  var totalCodewords = utils.getSymbolTotalCodewords(version);
  var ecTotalCodewords = errorCorrectionCode.getTotalCodewordsCount(version, errorCorrectionLevel);
  var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8; // Add a terminator.
  // If the bit string is shorter than the total number of required bits,
  // a terminator of up to four 0s must be added to the right side of the string.
  // If the bit string is more than four bits shorter than the required number of bits,
  // add four 0s to the end.

  if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
    buffer.put(0, 4);
  } // If the bit string is fewer than four bits shorter, add only the number of 0s that
  // are needed to reach the required number of bits.
  // After adding the terminator, if the number of bits in the string is not a multiple of 8,
  // pad the string on the right with 0s to make the string's length a multiple of 8.


  while (buffer.getLengthInBits() % 8 !== 0) {
    buffer.putBit(0);
  } // Add pad bytes if the string is still shorter than the total number of required bits.
  // Extend the buffer to fill the data capacity of the symbol corresponding to
  // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
  // and 00010001 (0x11) alternately.


  var remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;

  for (var i = 0; i < remainingByte; i++) {
    buffer.put(i % 2 ? 0x11 : 0xEC, 8);
  }

  return createCodewords(buffer, version, errorCorrectionLevel);
}
/**
 * Encode input data with Reed-Solomon and return codewords with
 * relative error correction bits
 *
 * @param  {BitBuffer} bitBuffer            Data to encode
 * @param  {Number}    version              QR Code version
 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
 * @return {Buffer}                         Buffer containing encoded codewords
 */


function createCodewords(bitBuffer, version, errorCorrectionLevel) {
  // Total codewords for this QR code version (Data + Error correction)
  var totalCodewords = utils.getSymbolTotalCodewords(version); // Total number of error correction codewords

  var ecTotalCodewords = errorCorrectionCode.getTotalCodewordsCount(version, errorCorrectionLevel); // Total number of data codewords

  var dataTotalCodewords = totalCodewords - ecTotalCodewords; // Total number of blocks

  var ecTotalBlocks = errorCorrectionCode.getBlocksCount(version, errorCorrectionLevel); // Calculate how many blocks each group should contain

  var blocksInGroup2 = totalCodewords % ecTotalBlocks;
  var blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
  var totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
  var dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
  var dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1; // Number of EC codewords is the same for both groups

  var ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1; // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount

  var rs = new reedSolomonEncoder(ecCount);
  var offset = 0;
  var dcData = new Array(ecTotalBlocks);
  var ecData = new Array(ecTotalBlocks);
  var maxDataSize = 0;
  var buffer$1 = buffer.from(bitBuffer.buffer); // Divide the buffer into the required number of blocks

  for (var b = 0; b < ecTotalBlocks; b++) {
    var dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2; // extract a block of data from buffer

    dcData[b] = buffer$1.slice(offset, offset + dataSize); // Calculate EC codewords for this data block

    ecData[b] = rs.encode(dcData[b]);
    offset += dataSize;
    maxDataSize = Math.max(maxDataSize, dataSize);
  } // Create final data
  // Interleave the data and error correction codewords from each block


  var data = buffer.alloc(totalCodewords);
  var index = 0;
  var i, r; // Add data codewords

  for (i = 0; i < maxDataSize; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      if (i < dcData[r].length) {
        data[index++] = dcData[r][i];
      }
    }
  } // Apped EC codewords


  for (i = 0; i < ecCount; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      data[index++] = ecData[r][i];
    }
  }

  return data;
}
/**
 * Build QR Code symbol
 *
 * @param  {String} data                 Input string
 * @param  {Number} version              QR Code version
 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
 * @param  {MaskPattern} maskPattern     Mask pattern
 * @return {Object}                      Object containing symbol data
 */


function createSymbol(data, version, errorCorrectionLevel, maskPattern) {
  var segments;

  if (C__4keyps_local_modules_amplifyJs_node_modules_qrcode_node_modules_isarray(data)) {
    segments = segments$1.fromArray(data);
  } else if (typeof data === 'string') {
    var estimatedVersion = version;

    if (!estimatedVersion) {
      var rawSegments = segments$1.rawSplit(data); // Estimate best version that can contain raw splitted segments

      estimatedVersion = version$1.getBestVersionForData(rawSegments, errorCorrectionLevel);
    } // Build optimized segments
    // If estimated version is undefined, try with the highest version


    segments = segments$1.fromString(data, estimatedVersion || 40);
  } else {
    throw new Error('Invalid data');
  } // Get the min version that can contain data


  var bestVersion = version$1.getBestVersionForData(segments, errorCorrectionLevel); // If no version is found, data cannot be stored

  if (!bestVersion) {
    throw new Error('The amount of data is too big to be stored in a QR Code');
  } // If not specified, use min version as default


  if (!version) {
    version = bestVersion; // Check if the specified version can contain the data
  } else if (version < bestVersion) {
    throw new Error('\n' + 'The chosen QR Code version cannot contain this amount of data.\n' + 'Minimum version required to store current data is: ' + bestVersion + '.\n');
  }

  var dataBits = createData(version, errorCorrectionLevel, segments); // Allocate matrix buffer

  var moduleCount = utils.getSymbolSize(version);
  var modules = new bitMatrix(moduleCount); // Add function modules

  setupFinderPattern(modules, version);
  setupTimingPattern(modules);
  setupAlignmentPattern(modules, version); // Add temporary dummy bits for format info just to set them as reserved.
  // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
  // since the masking operation must be performed only on the encoding region.
  // These blocks will be replaced with correct values later in code.

  setupFormatInfo(modules, errorCorrectionLevel, 0);

  if (version >= 7) {
    setupVersionInfo(modules, version);
  } // Add data codewords


  setupData(modules, dataBits);

  if (isNaN(maskPattern)) {
    // Find best mask pattern
    maskPattern = maskPattern$1.getBestMask(modules, setupFormatInfo.bind(null, modules, errorCorrectionLevel));
  } // Apply mask pattern


  maskPattern$1.applyMask(maskPattern, modules); // Replace format info bits with correct values

  setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
  return {
    modules: modules,
    version: version,
    errorCorrectionLevel: errorCorrectionLevel,
    maskPattern: maskPattern,
    segments: segments
  };
}
/**
 * QR Code
 *
 * @param {String | Array} data                 Input data
 * @param {Object} options                      Optional configurations
 * @param {Number} options.version              QR Code version
 * @param {String} options.errorCorrectionLevel Error correction level
 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
 */


var create = function create(data, options) {
  if (typeof data === 'undefined' || data === '') {
    throw new Error('No input text');
  }

  var errorCorrectionLevel = errorCorrectionLevel$1.M;
  var version;
  var mask;

  if (typeof options !== 'undefined') {
    // Use higher error correction level as default
    errorCorrectionLevel = errorCorrectionLevel$1.from(options.errorCorrectionLevel, errorCorrectionLevel$1.M);
    version = version$1.from(options.version);
    mask = maskPattern$1.from(options.maskPattern);

    if (options.toSJISFunc) {
      utils.setToSJISFunction(options.toSJISFunc);
    }
  }

  return createSymbol(data, version, errorCorrectionLevel, mask);
};

var qrcode = {
  create: create
};
var canvas$1 = createCommonjsModule(function (module, exports) {
  function clearCanvas(ctx, canvas, size) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!canvas.style) canvas.style = {};
    canvas.height = size;
    canvas.width = size;
    canvas.style.height = size + 'px';
    canvas.style.width = size + 'px';
  }

  function getCanvasElement() {
    try {
      return document.createElement('canvas');
    } catch (e) {
      throw new Error('You need to specify a canvas element');
    }
  }

  exports.render = function render(qrData, canvas, options) {
    var opts = options;
    var canvasEl = canvas;

    if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
      opts = canvas;
      canvas = undefined;
    }

    if (!canvas) {
      canvasEl = getCanvasElement();
    }

    opts = utils$2.getOptions(opts);
    var size = utils$2.getImageWidth(qrData.modules.size, opts);
    var ctx = canvasEl.getContext('2d');
    var image = ctx.createImageData(size, size);
    utils$2.qrToImageData(image.data, qrData, opts);
    clearCanvas(ctx, canvasEl, size);
    ctx.putImageData(image, 0, 0);
    return canvasEl;
  };

  exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
    var opts = options;

    if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
      opts = canvas;
      canvas = undefined;
    }

    if (!opts) opts = {};
    var canvasEl = exports.render(qrData, canvas, opts);
    var type = opts.type || 'image/png';
    var rendererOpts = opts.rendererOpts || {};
    return canvasEl.toDataURL(type, rendererOpts.quality);
  };
});

function renderCanvas(renderFunc, canvas, text, opts, cb) {
  var args = [].slice.call(arguments, 1);
  var argsNum = args.length;
  var isLastArgCb = typeof args[argsNum - 1] === 'function';

  if (!isLastArgCb && !canPromise()) {
    throw new Error('Callback required as last argument');
  }

  if (isLastArgCb) {
    if (argsNum < 2) {
      throw new Error('Too few arguments provided');
    }

    if (argsNum === 2) {
      cb = text;
      text = canvas;
      canvas = opts = undefined;
    } else if (argsNum === 3) {
      if (canvas.getContext && typeof cb === 'undefined') {
        cb = opts;
        opts = undefined;
      } else {
        cb = opts;
        opts = text;
        text = canvas;
        canvas = undefined;
      }
    }
  } else {
    if (argsNum < 1) {
      throw new Error('Too few arguments provided');
    }

    if (argsNum === 1) {
      text = canvas;
      canvas = opts = undefined;
    } else if (argsNum === 2 && !canvas.getContext) {
      opts = text;
      text = canvas;
      canvas = undefined;
    }

    return new Promise(function (resolve, reject) {
      try {
        var data = qrcode.create(text, opts);
        resolve(renderFunc(data, canvas, opts));
      } catch (e) {
        reject(e);
      }
    });
  }

  try {
    var data = qrcode.create(text, opts);
    cb(null, renderFunc(data, canvas, opts));
  } catch (e) {
    cb(e);
  }
}

var toCanvas = renderCanvas.bind(null, canvas$1.render);
var toDataURL = renderCanvas.bind(null, canvas$1.renderToDataURL); // only svg for now.

var toString_1 = renderCanvas.bind(null, function (data, _, opts) {
  return svgTag.render(data, opts);
});
var png$3 = createCommonjsModule(function (module, exports) {
  var PNG = png$1.PNG;

  exports.render = function render(qrData, options) {
    var opts = utils$2.getOptions(options);
    var pngOpts = opts.rendererOpts;
    var size = utils$2.getImageWidth(qrData.modules.size, opts);
    pngOpts.width = size;
    pngOpts.height = size;
    var pngImage = new PNG(pngOpts);
    utils$2.qrToImageData(pngImage.data, qrData, opts);
    return pngImage;
  };

  exports.renderToDataURL = function renderToDataURL(qrData, options, cb) {
    if (typeof cb === 'undefined') {
      cb = options;
      options = undefined;
    }

    exports.renderToBuffer(qrData, options, function (err, output) {
      if (err) cb(err);
      var url = 'data:image/png;base64,';
      url += output.toString('base64');
      cb(null, url);
    });
  };

  exports.renderToBuffer = function renderToBuffer(qrData, options, cb) {
    if (typeof cb === 'undefined') {
      cb = options;
      options = undefined;
    }

    var png = exports.render(qrData, options);
    var buffer = [];
    png.on('error', cb);
    png.on('data', function (data) {
      buffer.push(data);
    });
    png.on('end', function () {
      cb(null, Buffer.concat(buffer));
    });
    png.pack();
  };

  exports.renderToFile = function renderToFile(path, qrData, options, cb) {
    if (typeof cb === 'undefined') {
      cb = options;
      options = undefined;
    }

    var stream = fs__WEBPACK_IMPORTED_MODULE_9___default.a.createWriteStream(path);
    stream.on('error', cb);
    stream.on('close', cb);
    exports.renderToFileStream(stream, qrData, options);
  };

  exports.renderToFileStream = function renderToFileStream(stream, qrData, options) {
    var png = exports.render(qrData, options);
    png.pack().pipe(stream);
  };
});
var utf8$1 = createCommonjsModule(function (module, exports) {
  var BLOCK_CHAR = {
    WW: ' ',
    WB: '▄',
    BB: '█',
    BW: '▀'
  };
  var INVERTED_BLOCK_CHAR = {
    BB: ' ',
    BW: '▄',
    WW: '█',
    WB: '▀'
  };

  function getBlockChar(top, bottom, blocks) {
    if (top && bottom) return blocks.BB;
    if (top && !bottom) return blocks.BW;
    if (!top && bottom) return blocks.WB;
    return blocks.WW;
  }

  exports.render = function (qrData, options, cb) {
    var opts = utils$2.getOptions(options);
    var blocks = BLOCK_CHAR;

    if (opts.color.dark.hex === '#ffffff' || opts.color.light.hex === '#000000') {
      blocks = INVERTED_BLOCK_CHAR;
    }

    var size = qrData.modules.size;
    var data = qrData.modules.data;
    var output = '';
    var hMargin = Array(size + opts.margin * 2 + 1).join(blocks.WW);
    hMargin = Array(opts.margin / 2 + 1).join(hMargin + '\n');
    var vMargin = Array(opts.margin + 1).join(blocks.WW);
    output += hMargin;

    for (var i = 0; i < size; i += 2) {
      output += vMargin;

      for (var j = 0; j < size; j++) {
        var topModule = data[i * size + j];
        var bottomModule = data[(i + 1) * size + j];
        output += getBlockChar(topModule, bottomModule, blocks);
      }

      output += vMargin + '\n';
    }

    output += hMargin.slice(0, -1);

    if (typeof cb === 'function') {
      cb(null, output);
    }

    return output;
  };

  exports.renderToFile = function renderToFile(path, qrData, options, cb) {
    if (typeof cb === 'undefined') {
      cb = options;
      options = undefined;
    }

    var fs$1 = fs__WEBPACK_IMPORTED_MODULE_9___default.a;
    var utf8 = exports.render(qrData, options);
    fs$1.writeFile(path, utf8, cb);
  };
}); // var Utils = require('./utils')

var render$1 = function render$1(qrData, options, cb) {
  var size = qrData.modules.size;
  var data = qrData.modules.data; // var opts = Utils.getOptions(options)
  // use same scheme as https://github.com/gtanner/qrcode-terminal because it actually works! =)

  var black = '\x1b[40m  \x1b[0m';
  var white = '\x1b[47m  \x1b[0m';
  var output = '';
  var hMargin = Array(size + 3).join(white);
  var vMargin = Array(2).join(white);
  output += hMargin + '\n';

  for (var i = 0; i < size; ++i) {
    output += white;

    for (var j = 0; j < size; j++) {
      // var topModule = data[i * size + j]
      // var bottomModule = data[(i + 1) * size + j]
      output += data[i * size + j] ? black : white; // getBlockChar(topModule, bottomModule)
    } // output += white+'\n'


    output += vMargin + '\n';
  }

  output += hMargin + '\n';

  if (typeof cb === 'function') {
    cb(null, output);
  }

  return output;
};
/*
exports.renderToFile = function renderToFile (path, qrData, options, cb) {
  if (typeof cb === 'undefined') {
    cb = options
    options = undefined
  }

  var fs = require('fs')
  var utf8 = exports.render(qrData, options)
  fs.writeFile(path, utf8, cb)
}
*/


var terminal = {
  render: render$1
};
var svg$1 = createCommonjsModule(function (module, exports) {
  exports.render = svgTag.render;

  exports.renderToFile = function renderToFile(path, qrData, options, cb) {
    if (typeof cb === 'undefined') {
      cb = options;
      options = undefined;
    }

    var fs$1 = fs__WEBPACK_IMPORTED_MODULE_9___default.a;
    var svgTag = exports.render(qrData, options);
    var xmlStr = '<?xml version="1.0" encoding="utf-8"?>' + '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">' + svgTag;
    fs$1.writeFile(path, xmlStr, cb);
  };
});

function renderCanvas$1(renderFunc, canvas, text, opts, cb) {
  var args = [].slice.call(arguments, 1);
  var argsNum = args.length;
  var isLastArgCb = typeof args[argsNum - 1] === 'function';

  if (!isLastArgCb && !canPromise()) {
    throw new Error('Callback required as last argument');
  }

  if (isLastArgCb) {
    if (argsNum < 2) {
      throw new Error('Too few arguments provided');
    }

    if (argsNum === 2) {
      cb = text;
      text = canvas;
      canvas = opts = undefined;
    } else if (argsNum === 3) {
      if (canvas.getContext && typeof cb === 'undefined') {
        cb = opts;
        opts = undefined;
      } else {
        cb = opts;
        opts = text;
        text = canvas;
        canvas = undefined;
      }
    }
  } else {
    if (argsNum < 1) {
      throw new Error('Too few arguments provided');
    }

    if (argsNum === 1) {
      text = canvas;
      canvas = opts = undefined;
    } else if (argsNum === 2 && !canvas.getContext) {
      opts = text;
      text = canvas;
      canvas = undefined;
    }

    return new Promise(function (resolve, reject) {
      try {
        var data = qrcode.create(text, opts);
        resolve(renderFunc(data, canvas, opts));
      } catch (e) {
        reject(e);
      }
    });
  }

  try {
    var data = qrcode.create(text, opts);
    cb(null, renderFunc(data, canvas, opts));
  } catch (e) {
    cb(e);
  }
}

var create$1 = qrcode.create;
var toCanvas$1 = renderCanvas$1.bind(null, canvas$1.render);
var toDataURL$1 = renderCanvas$1.bind(null, canvas$1.renderToDataURL); // only svg for now.

var toString_1$1 = renderCanvas$1.bind(null, function (data, _, opts) {
  return svgTag.render(data, opts);
});
var browser = {
  create: create$1,
  toCanvas: toCanvas$1,
  toDataURL: toDataURL$1,
  toString: toString_1$1
};

function checkParams(text, opts, cb) {
  if (typeof text === 'undefined') {
    throw new Error('String required as first argument');
  }

  if (typeof cb === 'undefined') {
    cb = opts;
    opts = {};
  }

  if (typeof cb !== 'function') {
    if (!canPromise()) {
      throw new Error('Callback required as last argument');
    } else {
      opts = cb || {};
      cb = null;
    }
  }

  return {
    opts: opts,
    cb: cb
  };
}

function getTypeFromFilename(path) {
  return path.slice((path.lastIndexOf('.') - 1 >>> 0) + 2).toLowerCase();
}

function getRendererFromType(type) {
  switch (type) {
    case 'svg':
      return svg$1;

    case 'txt':
    case 'utf8':
      return utf8$1;

    case 'png':
    case 'image/png':
    default:
      return png$3;
  }
}

function getStringRendererFromType(type) {
  switch (type) {
    case 'svg':
      return svg$1;

    case 'terminal':
      return terminal;

    case 'utf8':
    default:
      return utf8$1;
  }
}

function render$2(renderFunc, text, params) {
  if (!params.cb) {
    return new Promise(function (resolve, reject) {
      try {
        var data = qrcode.create(text, params.opts);
        return renderFunc(data, params.opts, function (err, data) {
          return err ? reject(err) : resolve(data);
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  try {
    var data = qrcode.create(text, params.opts);
    return renderFunc(data, params.opts, params.cb);
  } catch (e) {
    params.cb(e);
  }
}

var create$2 = qrcode.create;
var toCanvas$2 = browser.toCanvas;

var toString_1$2 = function toString(text, opts, cb) {
  var params = checkParams(text, opts, cb);
  var renderer = getStringRendererFromType(params.opts.type);
  return render$2(renderer.render, text, params);
};

var toDataURL$2 = function toDataURL(text, opts, cb) {
  var params = checkParams(text, opts, cb);
  var renderer = getRendererFromType(params.opts.type);
  return render$2(renderer.renderToDataURL, text, params);
};

var toBuffer = function toBuffer(text, opts, cb) {
  var params = checkParams(text, opts, cb);
  var renderer = getRendererFromType(params.opts.type);
  return render$2(renderer.renderToBuffer, text, params);
};

var toFile = function toFile(path, text, opts, cb) {
  if (typeof path !== 'string' || !(typeof text === 'string' || _typeof(text) === 'object')) {
    throw new Error('Invalid argument');
  }

  if (arguments.length < 3 && !canPromise()) {
    throw new Error('Too few arguments provided');
  }

  var params = checkParams(text, opts, cb);
  var type = params.opts.type || getTypeFromFilename(path);
  var renderer = getRendererFromType(type);
  var renderToFile = renderer.renderToFile.bind(null, path);
  return render$2(renderToFile, text, params);
};

var toFileStream = function toFileStream(stream, text, opts) {
  if (arguments.length < 2) {
    throw new Error('Too few arguments provided');
  }

  var params = checkParams(text, opts, stream.emit.bind(stream, 'error'));
  var renderer = getRendererFromType('png'); // Only png support for now

  var renderToFileStream = renderer.renderToFileStream.bind(null, stream);
  render$2(renderToFileStream, text, params);
};

var server = {
  create: create$2,
  toCanvas: toCanvas$2,
  toString: toString_1$2,
  toDataURL: toDataURL$2,
  toBuffer: toBuffer,
  toFile: toFile,
  toFileStream: toFileStream
};
/*
*copyright Ryan Day 2012
*
* Licensed under the MIT license:
*   http://www.opensource.org/licenses/mit-license.php
*
* this is the main server side application file for node-qrcode.
* these exports use serverside canvas api methods for file IO and buffers
*
*/

var lib = server;
var amplifyTotpSetupCss = ".totp-setup{text-align:center;margin-bottom:30px}.totp-setup img{height:128px;width:128px}";
var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Logger"]('TOTP');

var AmplifyTOTPSetup = function () {
  function class_1(hostRef) {
    Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.inputProps = {
      autoFocus: true
    };
    /** Auth state change handler for this component */

    this.handleAuthStateChange = _helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["d"];
    /** Used for header text in totp setup component */

    this.headerText = _Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].TOTP_HEADER_TEXT;
    /** Used for customizing the issuer string in the qr code image */

    this.issuer = _Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].TOTP_ISSUER;
    /** This is run after totp setup is complete. Useful if using this as standalone. */

    this.handleComplete = this.onTOTPEvent;
    /** Set this to true if this component is running outside the default `amplify-authenticator` usage */

    this.standalone = false;
    this.code = null;
    this.setupMessage = null;
    this.qrCodeInput = null;
    this.loading = false;
  }

  class_1.prototype.componentWillLoad = function () {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            /**
             * If this component is being used internally by the authenticator, we want to re-run
             * setup only when the current auth state is `AuthState.TOTPSetup`.
             *
             * Ideally, we would only run the setup once when the component is mounted. This is not possible
             * due to a bug with slots -- a slotted component will run its `componentWillLoad` lifecycle before
             * it is even rendered. So instead we watch for authstate changes and run setup conditionally.
             */
            if (!this.standalone) {
              this.removeHubListener = Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["o"])(function (authState) {
                if (authState === _auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["A"].TOTPSetup) _this.setup();
              });
            }

            return [4
            /*yield*/
            , this.setup()];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };
  /**
   * If this component is being used externally, we can use `@Watch` as normal.
   */


  class_1.prototype.handleUserChange = function () {
    this.standalone && this.setup();
  };

  class_1.prototype.disconnectedCallback = function () {
    this.removeHubListener && this.removeHubListener(); // stop listening to `onAuthUIStateChange`
  };

  class_1.prototype.buildOtpAuthPath = function (user, issuer, secretKey) {
    return "otpauth://totp/" + issuer + ":" + user.username + "?secret=" + secretKey + "&issuer=" + issuer;
  };

  class_1.prototype.onTOTPEvent = function (user) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            logger.debug('on totp event');
            return [4
            /*yield*/
            , Object(_auth_helpers_c42c7a9e_js__WEBPACK_IMPORTED_MODULE_7__["c"])(user, this.handleAuthStateChange)];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  class_1.prototype.handleTotpInputChange = function (event) {
    this.setupMessage = null;
    this.qrCodeInput = event.target.value;
  };

  class_1.prototype.generateQRCode = function (codeFromTotp) {
    return __awaiter(this, void 0, void 0, function () {
      var _a, error_1;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            _b.trys.push([0, 2,, 3]);

            _a = this;
            return [4
            /*yield*/
            , lib.toDataURL(codeFromTotp)];

          case 1:
            _a.qrCodeImageSource = _b.sent();
            return [3
            /*break*/
            , 3];

          case 2:
            error_1 = _b.sent();
            Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error_1);
            return [3
            /*break*/
            , 3];

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  class_1.prototype.setup = function () {
    return __awaiter(this, void 0, void 0, function () {
      var encodedIssuer, secretKey, error_2;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            // ensure setup is only run once after totp setup is available
            if (this.code || this.loading) {
              logger.debug('setup was attempted while another is in progress, skipping setup.');
              return [2
              /*return*/
              ];
            }

            if (!this.user || !this.user.associateSoftwareToken) {
              logger.debug('setup was attempted with invalid `user`, skipping setup.', this.user);
              return [2
              /*return*/
              ];
            }

            if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].setupTOTP !== 'function') {
              throw new Error(_constants_56d75870_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
            }

            this.setupMessage = null;
            encodedIssuer = encodeURI(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.issuer));
            this.loading = true;
            _a.label = 1;

          case 1:
            _a.trys.push([1, 3, 4, 5]);

            return [4
            /*yield*/
            , _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].setupTOTP(this.user)];

          case 2:
            secretKey = _a.sent();
            logger.debug('secret key', secretKey);
            this.code = this.buildOtpAuthPath(this.user, encodedIssuer, secretKey);
            this.generateQRCode(this.code);
            return [3
            /*break*/
            , 5];

          case 3:
            error_2 = _a.sent();
            Object(_helpers_3e41b1da_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error_2);
            logger.debug(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].TOTP_SETUP_FAILURE), error_2);
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

  class_1.prototype.verifyTotpToken = function (event) {
    return __awaiter(this, void 0, void 0, function () {
      var user, error_3;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (event) {
              event.preventDefault();
            }

            if (!this.qrCodeInput) {
              logger.debug('No TOTP Code provided');
              return [2
              /*return*/
              ];
            }

            user = this.user;

            if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].verifyTotpToken !== 'function' || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].setPreferredMFA !== 'function') {
              throw new Error(_constants_56d75870_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
            }

            _a.label = 1;

          case 1:
            _a.trys.push([1, 5,, 6]);

            return [4
            /*yield*/
            , _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].verifyTotpToken(user, this.qrCodeInput)];

          case 2:
            _a.sent();

            return [4
            /*yield*/
            , _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].setPreferredMFA(user, _auth_types_caf635db_js__WEBPACK_IMPORTED_MODULE_2__["M"].TOTP)];

          case 3:
            _a.sent();

            this.setupMessage = _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].TOTP_SUCCESS_MESSAGE);
            logger.debug(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].TOTP_SUCCESS_MESSAGE));
            return [4
            /*yield*/
            , this.handleComplete(user)];

          case 4:
            _a.sent();

            return [3
            /*break*/
            , 6];

          case 5:
            error_3 = _a.sent();
            this.setupMessage = _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].TOTP_SETUP_FAILURE);
            logger.error(error_3);
            return [3
            /*break*/
            , 6];

          case 6:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  class_1.prototype.render = function () {
    var _this = this;

    return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-section", {
      headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.headerText),
      submitButtonText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].TOTP_SUBMIT_BUTTON_TEXT),
      handleSubmit: function handleSubmit(event) {
        return _this.verifyTotpToken(event);
      },
      loading: this.loading
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      "class": "totp-setup"
    }, this.qrCodeImageSource && Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", {
      src: this.qrCodeImageSource,
      alt: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].QR_CODE_ALT)
    }), Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-field", {
      label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_4__["T"].TOTP_LABEL),
      inputProps: this.inputProps,
      fieldId: "totpCode",
      name: "totpCode",
      handleInputChange: function handleInputChange(event) {
        return _this.handleTotpInputChange(event);
      }
    }))));
  };

  Object.defineProperty(class_1, "watchers", {
    get: function get() {
      return {
        "user": ["handleUserChange"]
      };
    },
    enumerable: false,
    configurable: true
  });
  return class_1;
}();

AmplifyTOTPSetup.style = amplifyTotpSetupCss;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/buffer/index.js */ "../../node_modules/buffer/index.js").Buffer, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ "../../node_modules/process/browser.js")))

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

/***/ })

}]);
//# sourceMappingURL=5.js.map