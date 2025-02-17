(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@aws-amplify/core"));
	else if(typeof define === 'function' && define.amd)
		define("aws_amplify_auth", ["@aws-amplify/core"], factory);
	else if(typeof exports === 'object')
		exports["aws_amplify_auth"] = factory(require("@aws-amplify/core"));
	else
		root["aws_amplify_auth"] = factory(root["@aws-amplify/core"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__aws_amplify_core__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib-esm/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/base64-js/index.js":
/*!**************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/base64-js/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "../../node_modules/buffer/index.js":
/*!***********************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/buffer/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "../../node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "../../node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "../../node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/ieee754/index.js":
/*!************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/ieee754/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "../../node_modules/isarray/index.js":
/*!************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/isarray/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "../../node_modules/isomorphic-unfetch/browser.js":
/*!*************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/isomorphic-unfetch/browser.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = self.fetch || (self.fetch = __webpack_require__(/*! unfetch */ "../../node_modules/unfetch/dist/unfetch.module.js").default || __webpack_require__(/*! unfetch */ "../../node_modules/unfetch/dist/unfetch.module.js"));


/***/ }),

/***/ "../../node_modules/js-cookie/src/js.cookie.js":
/*!**********************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/js-cookie/src/js.cookie.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ "../../node_modules/punycode/punycode.js":
/*!****************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/punycode/punycode.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports =  true && exports &&
		!exports.nodeType && exports;
	var freeModule =  true && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "../../node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/querystring-es3/decode.js":
/*!*********************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/querystring-es3/decode.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "../../node_modules/querystring-es3/encode.js":
/*!*********************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/querystring-es3/encode.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "../../node_modules/querystring-es3/index.js":
/*!********************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/querystring-es3/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "../../node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "../../node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "../../node_modules/unfetch/dist/unfetch.module.js":
/*!**************************************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/unfetch/dist/unfetch.module.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest,o=[],u=[],i={},a=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(s.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var l in s.open(n.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){o.push(n=n.toLowerCase()),u.push([n,t]),i[n]=i[n]?i[n]+","+t:t}),t(a())},s.onerror=r,s.withCredentials="include"==n.credentials,n.headers)s.setRequestHeader(l,n.headers[l]);s.send(n.body||null)})});
//# sourceMappingURL=unfetch.module.js.map


/***/ }),

/***/ "../../node_modules/url/url.js":
/*!******************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/url/url.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(/*! punycode */ "../../node_modules/punycode/punycode.js");
var util = __webpack_require__(/*! ./util */ "../../node_modules/url/util.js");

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(/*! querystring */ "../../node_modules/querystring-es3/index.js");

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),

/***/ "../../node_modules/url/util.js":
/*!*******************************************************************!*\
  !*** C:/4keyps/local_modules/amplify-js/node_modules/url/util.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),

/***/ "../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../../node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "../amazon-cognito-identity-js/es/AuthenticationDetails.js":
/*!*****************************************************************!*\
  !*** ../amazon-cognito-identity-js/es/AuthenticationDetails.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthenticationDetails; });
/*!
 * Copyright 2016 Amazon.com,
 * Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the
 * License. A copy of the License is located at
 *
 *     http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, express or implied. See the License
 * for the specific language governing permissions and
 * limitations under the License.
 */

/** @class */
var AuthenticationDetails = /*#__PURE__*/function () {
  /**
   * Constructs a new AuthenticationDetails object
   * @param {object=} data Creation options.
   * @param {string} data.Username User being authenticated.
   * @param {string} data.Password Plain-text password to authenticate with.
   * @param {(AttributeArg[])?} data.ValidationData Application extra metadata.
   * @param {(AttributeArg[])?} data.AuthParamaters Authentication paramaters for custom auth.
   */
  function AuthenticationDetails(data) {
    var _ref = data || {},
        ValidationData = _ref.ValidationData,
        Username = _ref.Username,
        Password = _ref.Password,
        AuthParameters = _ref.AuthParameters,
        ClientMetadata = _ref.ClientMetadata;

    this.validationData = ValidationData || {};
    this.authParameters = AuthParameters || {};
    this.clientMetadata = ClientMetadata || {};
    this.username = Username;
    this.password = Password;
  }
  /**
   * @returns {string} the record's username
   */


  var _proto = AuthenticationDetails.prototype;

  _proto.getUsername = function getUsername() {
    return this.username;
  }
  /**
   * @returns {string} the record's password
   */
  ;

  _proto.getPassword = function getPassword() {
    return this.password;
  }
  /**
   * @returns {Array} the record's validationData
   */
  ;

  _proto.getValidationData = function getValidationData() {
    return this.validationData;
  }
  /**
   * @returns {Array} the record's authParameters
   */
  ;

  _proto.getAuthParameters = function getAuthParameters() {
    return this.authParameters;
  }
  /**
   * @returns {ClientMetadata} the clientMetadata for a Lambda trigger
   */
  ;

  _proto.getClientMetadata = function getClientMetadata() {
    return this.clientMetadata;
  };

  return AuthenticationDetails;
}();



/***/ }),

/***/ "../amazon-cognito-identity-js/es/AuthenticationHelper.js":
/*!****************************************************************!*\
  !*** ../amazon-cognito-identity-js/es/AuthenticationHelper.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthenticationHelper; });
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! buffer */ "../../node_modules/buffer/index.js");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var crypto_js_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js/core */ "../amazon-cognito-identity-js/node_modules/crypto-js/core.js");
/* harmony import */ var crypto_js_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var crypto_js_lib_typedarrays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-js/lib-typedarrays */ "../amazon-cognito-identity-js/node_modules/crypto-js/lib-typedarrays.js");
/* harmony import */ var crypto_js_lib_typedarrays__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js_lib_typedarrays__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var crypto_js_sha256__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto-js/sha256 */ "../amazon-cognito-identity-js/node_modules/crypto-js/sha256.js");
/* harmony import */ var crypto_js_sha256__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto_js_sha256__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var crypto_js_hmac_sha256__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto-js/hmac-sha256 */ "../amazon-cognito-identity-js/node_modules/crypto-js/hmac-sha256.js");
/* harmony import */ var crypto_js_hmac_sha256__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto_js_hmac_sha256__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_WordArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/WordArray */ "../amazon-cognito-identity-js/es/utils/WordArray.js");
/* harmony import */ var _BigInteger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BigInteger */ "../amazon-cognito-identity-js/es/BigInteger.js");
/*!
 * Copyright 2016 Amazon.com,
 * Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the
 * License. A copy of the License is located at
 *
 *     http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, express or implied. See the License
 * for the specific language governing permissions and
 * limitations under the License.
 */


 // necessary for crypto js




/**
 * Returns a Buffer with a sequence of random nBytes
 *
 * @param {number} nBytes
 * @returns {Buffer} fixed-length sequence of random bytes
 */

function randomBytes(nBytes) {
  return buffer__WEBPACK_IMPORTED_MODULE_0__["Buffer"].from(new _utils_WordArray__WEBPACK_IMPORTED_MODULE_5__["default"]().random(nBytes).toString(), 'hex');
}


/**
 * Tests if a hex string has it most significant bit set (case-insensitive regex)
 */

var HEX_MSB_REGEX = /^[89a-f]/i;
var initN = 'FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD1' + '29024E088A67CC74020BBEA63B139B22514A08798E3404DD' + 'EF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245' + 'E485B576625E7EC6F44C42E9A637ED6B0BFF5CB6F406B7ED' + 'EE386BFB5A899FA5AE9F24117C4B1FE649286651ECE45B3D' + 'C2007CB8A163BF0598DA48361C55D39A69163FA8FD24CF5F' + '83655D23DCA3AD961C62F356208552BB9ED529077096966D' + '670C354E4ABC9804F1746C08CA18217C32905E462E36CE3B' + 'E39E772C180E86039B2783A2EC07A28FB5C55DF06F4C52C9' + 'DE2BCBF6955817183995497CEA956AE515D2261898FA0510' + '15728E5A8AAAC42DAD33170D04507A33A85521ABDF1CBA64' + 'ECFB850458DBEF0A8AEA71575D060C7DB3970F85A6E1E4C7' + 'ABF5AE8CDB0933D71E8C94E04A25619DCEE3D2261AD2EE6B' + 'F12FFA06D98A0864D87602733EC86A64521F2B18177B200C' + 'BBE117577A615D6C770988C0BAD946E208E24FA074E5AB31' + '43DB5BFCE0FD108E4B82D120A93AD2CAFFFFFFFFFFFFFFFF';
var newPasswordRequiredChallengeUserAttributePrefix = 'userAttributes.';
/** @class */

var AuthenticationHelper = /*#__PURE__*/function () {
  /**
   * Constructs a new AuthenticationHelper object
   * @param {string} PoolName Cognito user pool name.
   */
  function AuthenticationHelper(PoolName) {
    this.N = new _BigInteger__WEBPACK_IMPORTED_MODULE_6__["default"](initN, 16);
    this.g = new _BigInteger__WEBPACK_IMPORTED_MODULE_6__["default"]('2', 16);
    this.k = new _BigInteger__WEBPACK_IMPORTED_MODULE_6__["default"](this.hexHash("" + this.padHex(this.N) + this.padHex(this.g)), 16);
    this.smallAValue = this.generateRandomSmallA();
    this.getLargeAValue(function () {});
    this.infoBits = buffer__WEBPACK_IMPORTED_MODULE_0__["Buffer"].from('Caldera Derived Key', 'utf8');
    this.poolName = PoolName;
  }
  /**
   * @returns {BigInteger} small A, a random number
   */


  var _proto = AuthenticationHelper.prototype;

  _proto.getSmallAValue = function getSmallAValue() {
    return this.smallAValue;
  }
  /**
   * @param {nodeCallback<BigInteger>} callback Called with (err, largeAValue)
   * @returns {void}
   */
  ;

  _proto.getLargeAValue = function getLargeAValue(callback) {
    var _this = this;

    if (this.largeAValue) {
      callback(null, this.largeAValue);
    } else {
      this.calculateA(this.smallAValue, function (err, largeAValue) {
        if (err) {
          callback(err, null);
        }

        _this.largeAValue = largeAValue;
        callback(null, _this.largeAValue);
      });
    }
  }
  /**
   * helper function to generate a random big integer
   * @returns {BigInteger} a random value.
   * @private
   */
  ;

  _proto.generateRandomSmallA = function generateRandomSmallA() {
    // This will be interpreted as a postive 128-bit integer
    var hexRandom = randomBytes(128).toString('hex');
    var randomBigInt = new _BigInteger__WEBPACK_IMPORTED_MODULE_6__["default"](hexRandom, 16); // There is no need to do randomBigInt.mod(this.N - 1) as N (3072-bit) is > 128 bytes (1024-bit)

    return randomBigInt;
  }
  /**
   * helper function to generate a random string
   * @returns {string} a random value.
   * @private
   */
  ;

  _proto.generateRandomString = function generateRandomString() {
    return randomBytes(40).toString('base64');
  }
  /**
   * @returns {string} Generated random value included in password hash.
   */
  ;

  _proto.getRandomPassword = function getRandomPassword() {
    return this.randomPassword;
  }
  /**
   * @returns {string} Generated random value included in devices hash.
   */
  ;

  _proto.getSaltDevices = function getSaltDevices() {
    return this.SaltToHashDevices;
  }
  /**
   * @returns {string} Value used to verify devices.
   */
  ;

  _proto.getVerifierDevices = function getVerifierDevices() {
    return this.verifierDevices;
  }
  /**
   * Generate salts and compute verifier.
   * @param {string} deviceGroupKey Devices to generate verifier for.
   * @param {string} username User to generate verifier for.
   * @param {nodeCallback<null>} callback Called with (err, null)
   * @returns {void}
   */
  ;

  _proto.generateHashDevice = function generateHashDevice(deviceGroupKey, username, callback) {
    var _this2 = this;

    this.randomPassword = this.generateRandomString();
    var combinedString = "" + deviceGroupKey + username + ":" + this.randomPassword;
    var hashedString = this.hash(combinedString);
    var hexRandom = randomBytes(16).toString('hex'); // The random hex will be unambiguously represented as a postive integer

    this.SaltToHashDevices = this.padHex(new _BigInteger__WEBPACK_IMPORTED_MODULE_6__["default"](hexRandom, 16));
    this.g.modPow(new _BigInteger__WEBPACK_IMPORTED_MODULE_6__["default"](this.hexHash(this.SaltToHashDevices + hashedString), 16), this.N, function (err, verifierDevicesNotPadded) {
      if (err) {
        callback(err, null);
      }

      _this2.verifierDevices = _this2.padHex(verifierDevicesNotPadded);
      callback(null, null);
    });
  }
  /**
   * Calculate the client's public value A = g^a%N
   * with the generated random number a
   * @param {BigInteger} a Randomly generated small A.
   * @param {nodeCallback<BigInteger>} callback Called with (err, largeAValue)
   * @returns {void}
   * @private
   */
  ;

  _proto.calculateA = function calculateA(a, callback) {
    var _this3 = this;

    this.g.modPow(a, this.N, function (err, A) {
      if (err) {
        callback(err, null);
      }

      if (A.mod(_this3.N).equals(_BigInteger__WEBPACK_IMPORTED_MODULE_6__["default"].ZERO)) {
        callback(new Error('Illegal paramater. A mod N cannot be 0.'), null);
      }

      callback(null, A);
    });
  }
  /**
   * Calculate the client's value U which is the hash of A and B
   * @param {BigInteger} A Large A value.
   * @param {BigInteger} B Server B value.
   * @returns {BigInteger} Computed U value.
   * @private
   */
  ;

  _proto.calculateU = function calculateU(A, B) {
    this.UHexHash = this.hexHash(this.padHex(A) + this.padHex(B));
    var finalU = new _BigInteger__WEBPACK_IMPORTED_MODULE_6__["default"](this.UHexHash, 16);
    return finalU;
  }
  /**
   * Calculate a hash from a bitArray
   * @param {Buffer} buf Value to hash.
   * @returns {String} Hex-encoded hash.
   * @private
   */
  ;

  _proto.hash = function hash(buf) {
    var str = buf instanceof buffer__WEBPACK_IMPORTED_MODULE_0__["Buffer"] ? crypto_js_core__WEBPACK_IMPORTED_MODULE_1___default.a.lib.WordArray.create(buf) : buf;
    var hashHex = crypto_js_sha256__WEBPACK_IMPORTED_MODULE_3___default()(str).toString();
    return new Array(64 - hashHex.length).join('0') + hashHex;
  }
  /**
   * Calculate a hash from a hex string
   * @param {String} hexStr Value to hash.
   * @returns {String} Hex-encoded hash.
   * @private
   */
  ;

  _proto.hexHash = function hexHash(hexStr) {
    return this.hash(buffer__WEBPACK_IMPORTED_MODULE_0__["Buffer"].from(hexStr, 'hex'));
  }
  /**
   * Standard hkdf algorithm
   * @param {Buffer} ikm Input key material.
   * @param {Buffer} salt Salt value.
   * @returns {Buffer} Strong key material.
   * @private
   */
  ;

  _proto.computehkdf = function computehkdf(ikm, salt) {
    var infoBitsWordArray = crypto_js_core__WEBPACK_IMPORTED_MODULE_1___default.a.lib.WordArray.create(buffer__WEBPACK_IMPORTED_MODULE_0__["Buffer"].concat([this.infoBits, buffer__WEBPACK_IMPORTED_MODULE_0__["Buffer"].from(String.fromCharCode(1), 'utf8')]));
    var ikmWordArray = ikm instanceof buffer__WEBPACK_IMPORTED_MODULE_0__["Buffer"] ? crypto_js_core__WEBPACK_IMPORTED_MODULE_1___default.a.lib.WordArray.create(ikm) : ikm;
    var saltWordArray = salt instanceof buffer__WEBPACK_IMPORTED_MODULE_0__["Buffer"] ? crypto_js_core__WEBPACK_IMPORTED_MODULE_1___default.a.lib.WordArray.create(salt) : salt;
    var prk = crypto_js_hmac_sha256__WEBPACK_IMPORTED_MODULE_4___default()(ikmWordArray, saltWordArray);
    var hmac = crypto_js_hmac_sha256__WEBPACK_IMPORTED_MODULE_4___default()(infoBitsWordArray, prk);
    return buffer__WEBPACK_IMPORTED_MODULE_0__["Buffer"].from(hmac.toString(), 'hex').slice(0, 16);
  }
  /**
   * Calculates the final hkdf based on computed S value, and computed U value and the key
   * @param {String} username Username.
   * @param {String} password Password.
   * @param {BigInteger} serverBValue Server B value.
   * @param {BigInteger} salt Generated salt.
   * @param {nodeCallback<Buffer>} callback Called with (err, hkdfValue)
   * @returns {void}
   */
  ;

  _proto.getPasswordAuthenticationKey = function getPasswordAuthenticationKey(username, password, serverBValue, salt, callback) {
    var _this4 = this;

    if (serverBValue.mod(this.N).equals(_BigInteger__WEBPACK_IMPORTED_MODULE_6__["default"].ZERO)) {
      throw new Error('B cannot be zero.');
    }

    this.UValue = this.calculateU(this.largeAValue, serverBValue);

    if (this.UValue.equals(_BigInteger__WEBPACK_IMPORTED_MODULE_6__["default"].ZERO)) {
      throw new Error('U cannot be zero.');
    }

    var usernamePassword = "" + this.poolName + username + ":" + password;
    var usernamePasswordHash = this.hash(usernamePassword);
    var xValue = new _BigInteger__WEBPACK_IMPORTED_MODULE_6__["default"](this.hexHash(this.padHex(salt) + usernamePasswordHash), 16);
    this.calculateS(xValue, serverBValue, function (err, sValue) {
      if (err) {
        callback(err, null);
      }

      var hkdf = _this4.computehkdf(buffer__WEBPACK_IMPORTED_MODULE_0__["Buffer"].from(_this4.padHex(sValue), 'hex'), buffer__WEBPACK_IMPORTED_MODULE_0__["Buffer"].from(_this4.padHex(_this4.UValue), 'hex'));

      callback(null, hkdf);
    });
  }
  /**
   * Calculates the S value used in getPasswordAuthenticationKey
   * @param {BigInteger} xValue Salted password hash value.
   * @param {BigInteger} serverBValue Server B value.
   * @param {nodeCallback<string>} callback Called on success or error.
   * @returns {void}
   */
  ;

  _proto.calculateS = function calculateS(xValue, serverBValue, callback) {
    var _this5 = this;

    this.g.modPow(xValue, this.N, function (err, gModPowXN) {
      if (err) {
        callback(err, null);
      }

      var intValue2 = serverBValue.subtract(_this5.k.multiply(gModPowXN));
      intValue2.modPow(_this5.smallAValue.add(_this5.UValue.multiply(xValue)), _this5.N, function (err2, result) {
        if (err2) {
          callback(err2, null);
        }

        callback(null, result.mod(_this5.N));
      });
    });
  }
  /**
   * Return constant newPasswordRequiredChallengeUserAttributePrefix
   * @return {newPasswordRequiredChallengeUserAttributePrefix} constant prefix value
   */
  ;

  _proto.getNewPasswordRequiredChallengeUserAttributePrefix = function getNewPasswordRequiredChallengeUserAttributePrefix() {
    return newPasswordRequiredChallengeUserAttributePrefix;
  }
  /**
   * Returns an unambiguous, even-length hex string of the two's complement encoding of an integer.
   *
   * It is compatible with the hex encoding of Java's BigInteger's toByteArray(), wich returns a
   * byte array containing the two's-complement representation of a BigInteger. The array contains
   * the minimum number of bytes required to represent the BigInteger, including at least one sign bit.
   *
   * Examples showing how ambiguity is avoided by left padding with:
   * 	"00" (for positive values where the most-significant-bit is set)
   *  "FF" (for negative values where the most-significant-bit is set)
   *
   * padHex(bigInteger.fromInt(-236))  === "FF14"
   * padHex(bigInteger.fromInt(20))    === "14"
   *
   * padHex(bigInteger.fromInt(-200))  === "FF38"
   * padHex(bigInteger.fromInt(56))    === "38"
   *
   * padHex(bigInteger.fromInt(-20))   === "EC"
   * padHex(bigInteger.fromInt(236))   === "00EC"
   *
   * padHex(bigInteger.fromInt(-56))   === "C8"
   * padHex(bigInteger.fromInt(200))   === "00C8"
   *
   * @param {BigInteger} bigInt Number to encode.
   * @returns {String} even-length hex string of the two's complement encoding.
   */
  ;

  _proto.padHex = function padHex(bigInt) {
    if (!(bigInt instanceof _BigInteger__WEBPACK_IMPORTED_MODULE_6__["default"])) {
      throw new Error('Not a BigInteger');
    }

    var isNegative = bigInt.compareTo(_BigInteger__WEBPACK_IMPORTED_MODULE_6__["default"].ZERO) < 0;
    /* Get a hex string for abs(bigInt) */

    var hexStr = bigInt.abs().toString(16);
    /* Pad hex to even length if needed */

    hexStr = hexStr.length % 2 !== 0 ? "0" + hexStr : hexStr;
    /* Prepend "00" if the most significant bit is set */

    hexStr = HEX_MSB_REGEX.test(hexStr) ? "00" + hexStr : hexStr;

    if (isNegative) {
      /* Flip the bits of the representation */
      var invertedNibbles = hexStr.split('').map(function (x) {
        var invertedNibble = ~parseInt(x, 16) & 0xf;
        return '0123456789ABCDEF'.charAt(invertedNibble);
      }).join('');
      /* After flipping the bits, add one to get the 2's complement representation */

      var flippedBitsBI = new _BigInteger__WEBPACK_IMPORTED_MODULE_6__["default"](invertedNibbles, 16).add(_BigInteger__WEBPACK_IMPORTED_MODULE_6__["default"].ONE);
      hexStr = flippedBitsBI.toString(16);
      /*
      For hex strings starting with 'FF8', 'FF' can be dropped, e.g. 0xFFFF80=0xFF80=0x80=-128
      			Any sequence of '1' bits on the left can always be substituted with a single '1' bit
      without changing the represented value.
      			This only happens in the case when the input is 80...00
      */

      if (hexStr.toUpperCase().startsWith('FF8')) {
        hexStr = hexStr.substring(2);
      }
    }

    return hexStr;
  };

  return AuthenticationHelper;
}();



/***/ }),

/***/ "../amazon-cognito-identity-js/es/BigInteger.js":
/*!******************************************************!*\
  !*** ../amazon-cognito-identity-js/es/BigInteger.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// A small implementation of BigInteger based on http://www-cs-students.stanford.edu/~tjw/jsbn/
//
// All public methods have been removed except the following:
//   new BigInteger(a, b) (only radix 2, 4, 8, 16 and 32 supported)
//   toString (only radix 2, 4, 8, 16 and 32 supported)
//   negate
//   abs
//   compareTo
//   bitLength
//   mod
//   equals
//   add
//   subtract
//   multiply
//   divide
//   modPow
/* harmony default export */ __webpack_exports__["default"] = (BigInteger);
/*
 * Copyright (c) 2003-2005  Tom Wu
 * All Rights Reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS-IS" AND WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS, IMPLIED OR OTHERWISE, INCLUDING WITHOUT LIMITATION, ANY
 * WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.
 *
 * IN NO EVENT SHALL TOM WU BE LIABLE FOR ANY SPECIAL, INCIDENTAL,
 * INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND, OR ANY DAMAGES WHATSOEVER
 * RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER OR NOT ADVISED OF
 * THE POSSIBILITY OF DAMAGE, AND ON ANY THEORY OF LIABILITY, ARISING OUT
 * OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * In addition, the following condition applies:
 *
 * All redistributions must retain an intact copy of this copyright notice
 * and disclaimer.
 */
// (public) Constructor

function BigInteger(a, b) {
  if (a != null) this.fromString(a, b);
} // return new, unset BigInteger


function nbi() {
  return new BigInteger(null);
} // Bits per digit


var dbits; // JavaScript engine analysis

var canary = 0xdeadbeefcafe;
var j_lm = (canary & 0xffffff) == 0xefcafe; // am: Compute w_j += (x*this_i), propagate carries,
// c is initial carry, returns final carry.
// c < 3*dvalue, x < 2*dvalue, this_i < dvalue
// We need to select the fastest one that works in this environment.
// am1: use a single mult and divide to get the high bits,
// max digit bits should be 26 because
// max internal value = 2*dvalue^2-2*dvalue (< 2^53)

function am1(i, x, w, j, c, n) {
  while (--n >= 0) {
    var v = x * this[i++] + w[j] + c;
    c = Math.floor(v / 0x4000000);
    w[j++] = v & 0x3ffffff;
  }

  return c;
} // am2 avoids a big mult-and-extract completely.
// Max digit bits should be <= 30 because we do bitwise ops
// on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)


function am2(i, x, w, j, c, n) {
  var xl = x & 0x7fff,
      xh = x >> 15;

  while (--n >= 0) {
    var l = this[i] & 0x7fff;
    var h = this[i++] >> 15;
    var m = xh * l + h * xl;
    l = xl * l + ((m & 0x7fff) << 15) + w[j] + (c & 0x3fffffff);
    c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
    w[j++] = l & 0x3fffffff;
  }

  return c;
} // Alternately, set max digit bits to 28 since some
// browsers slow down when dealing with 32-bit numbers.


function am3(i, x, w, j, c, n) {
  var xl = x & 0x3fff,
      xh = x >> 14;

  while (--n >= 0) {
    var l = this[i] & 0x3fff;
    var h = this[i++] >> 14;
    var m = xh * l + h * xl;
    l = xl * l + ((m & 0x3fff) << 14) + w[j] + c;
    c = (l >> 28) + (m >> 14) + xh * h;
    w[j++] = l & 0xfffffff;
  }

  return c;
}

var inBrowser = typeof navigator !== 'undefined';

if (inBrowser && j_lm && navigator.appName == 'Microsoft Internet Explorer') {
  BigInteger.prototype.am = am2;
  dbits = 30;
} else if (inBrowser && j_lm && navigator.appName != 'Netscape') {
  BigInteger.prototype.am = am1;
  dbits = 26;
} else {
  // Mozilla/Netscape seems to prefer am3
  BigInteger.prototype.am = am3;
  dbits = 28;
}

BigInteger.prototype.DB = dbits;
BigInteger.prototype.DM = (1 << dbits) - 1;
BigInteger.prototype.DV = 1 << dbits;
var BI_FP = 52;
BigInteger.prototype.FV = Math.pow(2, BI_FP);
BigInteger.prototype.F1 = BI_FP - dbits;
BigInteger.prototype.F2 = 2 * dbits - BI_FP; // Digit conversions

var BI_RM = '0123456789abcdefghijklmnopqrstuvwxyz';
var BI_RC = new Array();
var rr, vv;
rr = '0'.charCodeAt(0);

for (vv = 0; vv <= 9; ++vv) {
  BI_RC[rr++] = vv;
}

rr = 'a'.charCodeAt(0);

for (vv = 10; vv < 36; ++vv) {
  BI_RC[rr++] = vv;
}

rr = 'A'.charCodeAt(0);

for (vv = 10; vv < 36; ++vv) {
  BI_RC[rr++] = vv;
}

function int2char(n) {
  return BI_RM.charAt(n);
}

function intAt(s, i) {
  var c = BI_RC[s.charCodeAt(i)];
  return c == null ? -1 : c;
} // (protected) copy this to r


function bnpCopyTo(r) {
  for (var i = this.t - 1; i >= 0; --i) {
    r[i] = this[i];
  }

  r.t = this.t;
  r.s = this.s;
} // (protected) set from integer value x, -DV <= x < DV


function bnpFromInt(x) {
  this.t = 1;
  this.s = x < 0 ? -1 : 0;
  if (x > 0) this[0] = x;else if (x < -1) this[0] = x + this.DV;else this.t = 0;
} // return bigint initialized to value


function nbv(i) {
  var r = nbi();
  r.fromInt(i);
  return r;
} // (protected) set from string and radix


function bnpFromString(s, b) {
  var k;
  if (b == 16) k = 4;else if (b == 8) k = 3;else if (b == 2) k = 1;else if (b == 32) k = 5;else if (b == 4) k = 2;else throw new Error('Only radix 2, 4, 8, 16, 32 are supported');
  this.t = 0;
  this.s = 0;
  var i = s.length,
      mi = false,
      sh = 0;

  while (--i >= 0) {
    var x = intAt(s, i);

    if (x < 0) {
      if (s.charAt(i) == '-') mi = true;
      continue;
    }

    mi = false;
    if (sh == 0) this[this.t++] = x;else if (sh + k > this.DB) {
      this[this.t - 1] |= (x & (1 << this.DB - sh) - 1) << sh;
      this[this.t++] = x >> this.DB - sh;
    } else this[this.t - 1] |= x << sh;
    sh += k;
    if (sh >= this.DB) sh -= this.DB;
  }

  this.clamp();
  if (mi) BigInteger.ZERO.subTo(this, this);
} // (protected) clamp off excess high words


function bnpClamp() {
  var c = this.s & this.DM;

  while (this.t > 0 && this[this.t - 1] == c) {
    --this.t;
  }
} // (public) return string representation in given radix


function bnToString(b) {
  if (this.s < 0) return '-' + this.negate().toString(b);
  var k;
  if (b == 16) k = 4;else if (b == 8) k = 3;else if (b == 2) k = 1;else if (b == 32) k = 5;else if (b == 4) k = 2;else throw new Error('Only radix 2, 4, 8, 16, 32 are supported');
  var km = (1 << k) - 1,
      d,
      m = false,
      r = '',
      i = this.t;
  var p = this.DB - i * this.DB % k;

  if (i-- > 0) {
    if (p < this.DB && (d = this[i] >> p) > 0) {
      m = true;
      r = int2char(d);
    }

    while (i >= 0) {
      if (p < k) {
        d = (this[i] & (1 << p) - 1) << k - p;
        d |= this[--i] >> (p += this.DB - k);
      } else {
        d = this[i] >> (p -= k) & km;

        if (p <= 0) {
          p += this.DB;
          --i;
        }
      }

      if (d > 0) m = true;
      if (m) r += int2char(d);
    }
  }

  return m ? r : '0';
} // (public) -this


function bnNegate() {
  var r = nbi();
  BigInteger.ZERO.subTo(this, r);
  return r;
} // (public) |this|


function bnAbs() {
  return this.s < 0 ? this.negate() : this;
} // (public) return + if this > a, - if this < a, 0 if equal


function bnCompareTo(a) {
  var r = this.s - a.s;
  if (r != 0) return r;
  var i = this.t;
  r = i - a.t;
  if (r != 0) return this.s < 0 ? -r : r;

  while (--i >= 0) {
    if ((r = this[i] - a[i]) != 0) return r;
  }

  return 0;
} // returns bit length of the integer x


function nbits(x) {
  var r = 1,
      t;

  if ((t = x >>> 16) != 0) {
    x = t;
    r += 16;
  }

  if ((t = x >> 8) != 0) {
    x = t;
    r += 8;
  }

  if ((t = x >> 4) != 0) {
    x = t;
    r += 4;
  }

  if ((t = x >> 2) != 0) {
    x = t;
    r += 2;
  }

  if ((t = x >> 1) != 0) {
    x = t;
    r += 1;
  }

  return r;
} // (public) return the number of bits in "this"


function bnBitLength() {
  if (this.t <= 0) return 0;
  return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM);
} // (protected) r = this << n*DB


function bnpDLShiftTo(n, r) {
  var i;

  for (i = this.t - 1; i >= 0; --i) {
    r[i + n] = this[i];
  }

  for (i = n - 1; i >= 0; --i) {
    r[i] = 0;
  }

  r.t = this.t + n;
  r.s = this.s;
} // (protected) r = this >> n*DB


function bnpDRShiftTo(n, r) {
  for (var i = n; i < this.t; ++i) {
    r[i - n] = this[i];
  }

  r.t = Math.max(this.t - n, 0);
  r.s = this.s;
} // (protected) r = this << n


function bnpLShiftTo(n, r) {
  var bs = n % this.DB;
  var cbs = this.DB - bs;
  var bm = (1 << cbs) - 1;
  var ds = Math.floor(n / this.DB),
      c = this.s << bs & this.DM,
      i;

  for (i = this.t - 1; i >= 0; --i) {
    r[i + ds + 1] = this[i] >> cbs | c;
    c = (this[i] & bm) << bs;
  }

  for (i = ds - 1; i >= 0; --i) {
    r[i] = 0;
  }

  r[ds] = c;
  r.t = this.t + ds + 1;
  r.s = this.s;
  r.clamp();
} // (protected) r = this >> n


function bnpRShiftTo(n, r) {
  r.s = this.s;
  var ds = Math.floor(n / this.DB);

  if (ds >= this.t) {
    r.t = 0;
    return;
  }

  var bs = n % this.DB;
  var cbs = this.DB - bs;
  var bm = (1 << bs) - 1;
  r[0] = this[ds] >> bs;

  for (var i = ds + 1; i < this.t; ++i) {
    r[i - ds - 1] |= (this[i] & bm) << cbs;
    r[i - ds] = this[i] >> bs;
  }

  if (bs > 0) r[this.t - ds - 1] |= (this.s & bm) << cbs;
  r.t = this.t - ds;
  r.clamp();
} // (protected) r = this - a


function bnpSubTo(a, r) {
  var i = 0,
      c = 0,
      m = Math.min(a.t, this.t);

  while (i < m) {
    c += this[i] - a[i];
    r[i++] = c & this.DM;
    c >>= this.DB;
  }

  if (a.t < this.t) {
    c -= a.s;

    while (i < this.t) {
      c += this[i];
      r[i++] = c & this.DM;
      c >>= this.DB;
    }

    c += this.s;
  } else {
    c += this.s;

    while (i < a.t) {
      c -= a[i];
      r[i++] = c & this.DM;
      c >>= this.DB;
    }

    c -= a.s;
  }

  r.s = c < 0 ? -1 : 0;
  if (c < -1) r[i++] = this.DV + c;else if (c > 0) r[i++] = c;
  r.t = i;
  r.clamp();
} // (protected) r = this * a, r != this,a (HAC 14.12)
// "this" should be the larger one if appropriate.


function bnpMultiplyTo(a, r) {
  var x = this.abs(),
      y = a.abs();
  var i = x.t;
  r.t = i + y.t;

  while (--i >= 0) {
    r[i] = 0;
  }

  for (i = 0; i < y.t; ++i) {
    r[i + x.t] = x.am(0, y[i], r, i, 0, x.t);
  }

  r.s = 0;
  r.clamp();
  if (this.s != a.s) BigInteger.ZERO.subTo(r, r);
} // (protected) r = this^2, r != this (HAC 14.16)


function bnpSquareTo(r) {
  var x = this.abs();
  var i = r.t = 2 * x.t;

  while (--i >= 0) {
    r[i] = 0;
  }

  for (i = 0; i < x.t - 1; ++i) {
    var c = x.am(i, x[i], r, 2 * i, 0, 1);

    if ((r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.DV) {
      r[i + x.t] -= x.DV;
      r[i + x.t + 1] = 1;
    }
  }

  if (r.t > 0) r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1);
  r.s = 0;
  r.clamp();
} // (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
// r != q, this != m.  q or r may be null.


function bnpDivRemTo(m, q, r) {
  var pm = m.abs();
  if (pm.t <= 0) return;
  var pt = this.abs();

  if (pt.t < pm.t) {
    if (q != null) q.fromInt(0);
    if (r != null) this.copyTo(r);
    return;
  }

  if (r == null) r = nbi();
  var y = nbi(),
      ts = this.s,
      ms = m.s;
  var nsh = this.DB - nbits(pm[pm.t - 1]); // normalize modulus

  if (nsh > 0) {
    pm.lShiftTo(nsh, y);
    pt.lShiftTo(nsh, r);
  } else {
    pm.copyTo(y);
    pt.copyTo(r);
  }

  var ys = y.t;
  var y0 = y[ys - 1];
  if (y0 == 0) return;
  var yt = y0 * (1 << this.F1) + (ys > 1 ? y[ys - 2] >> this.F2 : 0);
  var d1 = this.FV / yt,
      d2 = (1 << this.F1) / yt,
      e = 1 << this.F2;
  var i = r.t,
      j = i - ys,
      t = q == null ? nbi() : q;
  y.dlShiftTo(j, t);

  if (r.compareTo(t) >= 0) {
    r[r.t++] = 1;
    r.subTo(t, r);
  }

  BigInteger.ONE.dlShiftTo(ys, t);
  t.subTo(y, y); // "negative" y so we can replace sub with am later

  while (y.t < ys) {
    y[y.t++] = 0;
  }

  while (--j >= 0) {
    // Estimate quotient digit
    var qd = r[--i] == y0 ? this.DM : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);

    if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd) {
      // Try it out
      y.dlShiftTo(j, t);
      r.subTo(t, r);

      while (r[i] < --qd) {
        r.subTo(t, r);
      }
    }
  }

  if (q != null) {
    r.drShiftTo(ys, q);
    if (ts != ms) BigInteger.ZERO.subTo(q, q);
  }

  r.t = ys;
  r.clamp();
  if (nsh > 0) r.rShiftTo(nsh, r); // Denormalize remainder

  if (ts < 0) BigInteger.ZERO.subTo(r, r);
} // (public) this mod a


function bnMod(a) {
  var r = nbi();
  this.abs().divRemTo(a, null, r);
  if (this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r, r);
  return r;
} // (protected) return "-1/this % 2^DB"; useful for Mont. reduction
// justification:
//         xy == 1 (mod m)
//         xy =  1+km
//   xy(2-xy) = (1+km)(1-km)
// x[y(2-xy)] = 1-k^2m^2
// x[y(2-xy)] == 1 (mod m^2)
// if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
// should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
// JS multiply "overflows" differently from C/C++, so care is needed here.


function bnpInvDigit() {
  if (this.t < 1) return 0;
  var x = this[0];
  if ((x & 1) == 0) return 0;
  var y = x & 3; // y == 1/x mod 2^2

  y = y * (2 - (x & 0xf) * y) & 0xf; // y == 1/x mod 2^4

  y = y * (2 - (x & 0xff) * y) & 0xff; // y == 1/x mod 2^8

  y = y * (2 - ((x & 0xffff) * y & 0xffff)) & 0xffff; // y == 1/x mod 2^16
  // last step - calculate inverse mod DV directly;
  // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints

  y = y * (2 - x * y % this.DV) % this.DV; // y == 1/x mod 2^dbits
  // we really want the negative inverse, and -DV < y < DV

  return y > 0 ? this.DV - y : -y;
}

function bnEquals(a) {
  return this.compareTo(a) == 0;
} // (protected) r = this + a


function bnpAddTo(a, r) {
  var i = 0,
      c = 0,
      m = Math.min(a.t, this.t);

  while (i < m) {
    c += this[i] + a[i];
    r[i++] = c & this.DM;
    c >>= this.DB;
  }

  if (a.t < this.t) {
    c += a.s;

    while (i < this.t) {
      c += this[i];
      r[i++] = c & this.DM;
      c >>= this.DB;
    }

    c += this.s;
  } else {
    c += this.s;

    while (i < a.t) {
      c += a[i];
      r[i++] = c & this.DM;
      c >>= this.DB;
    }

    c += a.s;
  }

  r.s = c < 0 ? -1 : 0;
  if (c > 0) r[i++] = c;else if (c < -1) r[i++] = this.DV + c;
  r.t = i;
  r.clamp();
} // (public) this + a


function bnAdd(a) {
  var r = nbi();
  this.addTo(a, r);
  return r;
} // (public) this - a


function bnSubtract(a) {
  var r = nbi();
  this.subTo(a, r);
  return r;
} // (public) this * a


function bnMultiply(a) {
  var r = nbi();
  this.multiplyTo(a, r);
  return r;
} // (public) this / a


function bnDivide(a) {
  var r = nbi();
  this.divRemTo(a, r, null);
  return r;
} // Montgomery reduction


function Montgomery(m) {
  this.m = m;
  this.mp = m.invDigit();
  this.mpl = this.mp & 0x7fff;
  this.mph = this.mp >> 15;
  this.um = (1 << m.DB - 15) - 1;
  this.mt2 = 2 * m.t;
} // xR mod m


function montConvert(x) {
  var r = nbi();
  x.abs().dlShiftTo(this.m.t, r);
  r.divRemTo(this.m, null, r);
  if (x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r, r);
  return r;
} // x/R mod m


function montRevert(x) {
  var r = nbi();
  x.copyTo(r);
  this.reduce(r);
  return r;
} // x = x/R mod m (HAC 14.32)


function montReduce(x) {
  while (x.t <= this.mt2) {
    // pad x so am has enough room later
    x[x.t++] = 0;
  }

  for (var i = 0; i < this.m.t; ++i) {
    // faster way of calculating u0 = x[i]*mp mod DV
    var j = x[i] & 0x7fff;
    var u0 = j * this.mpl + ((j * this.mph + (x[i] >> 15) * this.mpl & this.um) << 15) & x.DM; // use am to combine the multiply-shift-add into one call

    j = i + this.m.t;
    x[j] += this.m.am(0, u0, x, i, 0, this.m.t); // propagate carry

    while (x[j] >= x.DV) {
      x[j] -= x.DV;
      x[++j]++;
    }
  }

  x.clamp();
  x.drShiftTo(this.m.t, x);
  if (x.compareTo(this.m) >= 0) x.subTo(this.m, x);
} // r = "x^2/R mod m"; x != r


function montSqrTo(x, r) {
  x.squareTo(r);
  this.reduce(r);
} // r = "xy/R mod m"; x,y != r


function montMulTo(x, y, r) {
  x.multiplyTo(y, r);
  this.reduce(r);
}

Montgomery.prototype.convert = montConvert;
Montgomery.prototype.revert = montRevert;
Montgomery.prototype.reduce = montReduce;
Montgomery.prototype.mulTo = montMulTo;
Montgomery.prototype.sqrTo = montSqrTo; // (public) this^e % m (HAC 14.85)

function bnModPow(e, m, callback) {
  var i = e.bitLength(),
      k,
      r = nbv(1),
      z = new Montgomery(m);
  if (i <= 0) return r;else if (i < 18) k = 1;else if (i < 48) k = 3;else if (i < 144) k = 4;else if (i < 768) k = 5;else k = 6; // precomputation

  var g = new Array(),
      n = 3,
      k1 = k - 1,
      km = (1 << k) - 1;
  g[1] = z.convert(this);

  if (k > 1) {
    var g2 = nbi();
    z.sqrTo(g[1], g2);

    while (n <= km) {
      g[n] = nbi();
      z.mulTo(g2, g[n - 2], g[n]);
      n += 2;
    }
  }

  var j = e.t - 1,
      w,
      is1 = true,
      r2 = nbi(),
      t;
  i = nbits(e[j]) - 1;

  while (j >= 0) {
    if (i >= k1) w = e[j] >> i - k1 & km;else {
      w = (e[j] & (1 << i + 1) - 1) << k1 - i;
      if (j > 0) w |= e[j - 1] >> this.DB + i - k1;
    }
    n = k;

    while ((w & 1) == 0) {
      w >>= 1;
      --n;
    }

    if ((i -= n) < 0) {
      i += this.DB;
      --j;
    }

    if (is1) {
      // ret == 1, don't bother squaring or multiplying it
      g[w].copyTo(r);
      is1 = false;
    } else {
      while (n > 1) {
        z.sqrTo(r, r2);
        z.sqrTo(r2, r);
        n -= 2;
      }

      if (n > 0) z.sqrTo(r, r2);else {
        t = r;
        r = r2;
        r2 = t;
      }
      z.mulTo(r2, g[w], r);
    }

    while (j >= 0 && (e[j] & 1 << i) == 0) {
      z.sqrTo(r, r2);
      t = r;
      r = r2;
      r2 = t;

      if (--i < 0) {
        i = this.DB - 1;
        --j;
      }
    }
  }

  var result = z.revert(r);
  callback(null, result);
  return result;
} // protected


BigInteger.prototype.copyTo = bnpCopyTo;
BigInteger.prototype.fromInt = bnpFromInt;
BigInteger.prototype.fromString = bnpFromString;
BigInteger.prototype.clamp = bnpClamp;
BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
BigInteger.prototype.drShiftTo = bnpDRShiftTo;
BigInteger.prototype.lShiftTo = bnpLShiftTo;
BigInteger.prototype.rShiftTo = bnpRShiftTo;
BigInteger.prototype.subTo = bnpSubTo;
BigInteger.prototype.multiplyTo = bnpMultiplyTo;
BigInteger.prototype.squareTo = bnpSquareTo;
BigInteger.prototype.divRemTo = bnpDivRemTo;
BigInteger.prototype.invDigit = bnpInvDigit;
BigInteger.prototype.addTo = bnpAddTo; // public

BigInteger.prototype.toString = bnToString;
BigInteger.prototype.negate = bnNegate;
BigInteger.prototype.abs = bnAbs;
BigInteger.prototype.compareTo = bnCompareTo;
BigInteger.prototype.bitLength = bnBitLength;
BigInteger.prototype.mod = bnMod;
BigInteger.prototype.equals = bnEquals;
BigInteger.prototype.add = bnAdd;
BigInteger.prototype.subtract = bnSubtract;
BigInteger.prototype.multiply = bnMultiply;
BigInteger.prototype.divide = bnDivide;
BigInteger.prototype.modPow = bnModPow; // "constants"

BigInteger.ZERO = nbv(0);
BigInteger.ONE = nbv(1);

/***/ }),

/***/ "../amazon-cognito-identity-js/es/Client.js":
/*!**************************************************!*\
  !*** ../amazon-cognito-identity-js/es/Client.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Client; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "../../node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UserAgent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserAgent */ "../amazon-cognito-identity-js/es/UserAgent.js");
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}




var CognitoError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(CognitoError, _Error);

  function CognitoError(message, code, name, statusCode) {
    var _this;

    _this = _Error.call(this, message) || this;
    _this.code = code;
    _this.name = name;
    _this.statusCode = statusCode;
    return _this;
  }

  return CognitoError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/** @class */


var Client = /*#__PURE__*/function () {
  /**
   * Constructs a new AWS Cognito Identity Provider client object
   * @param {string} region AWS region
   * @param {string} endpoint endpoint
   * @param {object} fetchOptions options for fetch API (only credentials is supported)
   */
  function Client(region, endpoint, fetchOptions) {
    this.endpoint = endpoint || "https://cognito-idp." + region + ".amazonaws.com/";

    var _ref = fetchOptions || {},
        credentials = _ref.credentials;

    this.fetchOptions = credentials ? {
      credentials: credentials
    } : {};
  }
  /**
   * Makes an unauthenticated request on AWS Cognito Identity Provider API
   * using fetch
   * @param {string} operation API operation
   * @param {object} params Input parameters
   * @returns Promise<object>
   */


  var _proto = Client.prototype;

  _proto.promisifyRequest = function promisifyRequest(operation, params) {
    var _this2 = this;

    return new Promise(function (resolve, reject) {
      _this2.request(operation, params, function (err, data) {
        if (err) {
          reject(new CognitoError(err.message, err.code, err.name, err.statusCode));
        } else {
          resolve(data);
        }
      });
    });
  };

  _proto.requestWithRetry = function requestWithRetry(operation, params, callback) {
    var _this3 = this;

    var MAX_DELAY_IN_MILLIS = 5 * 1000;
    jitteredExponentialRetry(function (p) {
      return new Promise(function (res, rej) {
        _this3.request(operation, p, function (error, result) {
          if (error) {
            rej(error);
          } else {
            res(result);
          }
        });
      });
    }, [params], MAX_DELAY_IN_MILLIS).then(function (result) {
      return callback(null, result);
    })["catch"](function (error) {
      return callback(error);
    });
  }
  /**
   * Makes an unauthenticated request on AWS Cognito Identity Provider API
   * using fetch
   * @param {string} operation API operation
   * @param {object} params Input parameters
   * @param {function} callback Callback called when a response is returned
   * @returns {void}
   */
  ;

  _proto.request = function request(operation, params, callback) {
    var headers = {
      'Content-Type': 'application/x-amz-json-1.1',
      'X-Amz-Target': "AWSCognitoIdentityProviderService." + operation,
      'X-Amz-User-Agent': _UserAgent__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.userAgent
    };
    var options = Object.assign({}, this.fetchOptions, {
      headers: headers,
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      body: JSON.stringify(params)
    });
    var response;
    var responseJsonData;
    fetch(this.endpoint, options).then(function (resp) {
      response = resp;
      return resp;
    }, function (err) {
      // If error happens here, the request failed
      // if it is TypeError throw network error
      if (err instanceof TypeError) {
        throw new Error('Network error');
      }

      throw err;
    }).then(function (resp) {
      return resp.json()["catch"](function () {
        return {};
      });
    }).then(function (data) {
      // return parsed body stream
      if (response.ok) return callback(null, data);
      responseJsonData = data; // Taken from aws-sdk-js/lib/protocol/json.js
      // eslint-disable-next-line no-underscore-dangle

      var code = (data.__type || data.code).split('#').pop();
      var error = {
        code: code,
        name: code,
        message: data.message || data.Message || null
      };
      return callback(error);
    })["catch"](function (err) {
      // first check if we have a service error
      if (response && response.headers && response.headers.get('x-amzn-errortype')) {
        try {
          var code = response.headers.get('x-amzn-errortype').split(':')[0];
          var error = {
            code: code,
            name: code,
            statusCode: response.status,
            message: response.status ? response.status.toString() : null
          };
          return callback(error);
        } catch (ex) {
          return callback(err);
        } // otherwise check if error is Network error

      } else if (err instanceof Error && err.message === 'Network error') {
        var _error = {
          code: 'NetworkError',
          name: err.name,
          message: err.message
        };
        return callback(_error);
      } else {
        return callback(err);
      }
    });
  };

  return Client;
}();


var logger = {
  debug: function debug() {// Intentionally blank. This package doesn't have logging
  }
};
/**
 * For now, all errors are retryable.
 */

var NonRetryableError = /*#__PURE__*/function (_Error2) {
  _inheritsLoose(NonRetryableError, _Error2);

  function NonRetryableError(message) {
    var _this4;

    _this4 = _Error2.call(this, message) || this;
    _this4.nonRetryable = true;
    return _this4;
  }

  return NonRetryableError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

var isNonRetryableError = function isNonRetryableError(obj) {
  var key = 'nonRetryable';
  return obj && obj[key];
};

function retry(functionToRetry, args, delayFn, attempt) {
  if (attempt === void 0) {
    attempt = 1;
  }

  if (typeof functionToRetry !== 'function') {
    throw Error('functionToRetry must be a function');
  }

  logger.debug(functionToRetry.name + " attempt #" + attempt + " with args: " + JSON.stringify(args));
  return functionToRetry.apply(void 0, args)["catch"](function (err) {
    logger.debug("error on " + functionToRetry.name, err);

    if (isNonRetryableError(err)) {
      logger.debug(functionToRetry.name + " non retryable error", err);
      throw err;
    }

    var retryIn = delayFn(attempt, args, err);
    logger.debug(functionToRetry.name + " retrying in " + retryIn + " ms");

    if (retryIn !== false) {
      return new Promise(function (res) {
        return setTimeout(res, retryIn);
      }).then(function () {
        return retry(functionToRetry, args, delayFn, attempt + 1);
      });
    } else {
      throw err;
    }
  });
}

function jitteredBackoff(maxDelayMs) {
  var BASE_TIME_MS = 100;
  var JITTER_FACTOR = 100;
  return function (attempt) {
    var delay = Math.pow(2, attempt) * BASE_TIME_MS + JITTER_FACTOR * Math.random();
    return delay > maxDelayMs ? false : delay;
  };
}

var MAX_DELAY_MS = 5 * 60 * 1000;

function jitteredExponentialRetry(functionToRetry, args, maxDelayMs) {
  if (maxDelayMs === void 0) {
    maxDelayMs = MAX_DELAY_MS;
  }

  return retry(functionToRetry, args, jitteredBackoff(maxDelayMs));
}

;

/***/ }),

/***/ "../amazon-cognito-identity-js/es/CognitoAccessToken.js":
/*!**************************************************************!*\
  !*** ../amazon-cognito-identity-js/es/CognitoAccessToken.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CognitoAccessToken; });
/* harmony import */ var _CognitoJwtToken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CognitoJwtToken */ "../amazon-cognito-identity-js/es/CognitoJwtToken.js");
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/*
 * Copyright 2016 Amazon.com,
 * Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the
 * License. A copy of the License is located at
 *
 *     http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, express or implied. See the License
 * for the specific language governing permissions and
 * limitations under the License.
 */



/** @class */

var CognitoAccessToken = /*#__PURE__*/function (_CognitoJwtToken) {
  _inheritsLoose(CognitoAccessToken, _CognitoJwtToken);
  /**
   * Constructs a new CognitoAccessToken object
   * @param {string=} AccessToken The JWT access token.
   */


  function CognitoAccessToken(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        AccessToken = _ref.AccessToken;

    return _CognitoJwtToken.call(this, AccessToken || '') || this;
  }

  return CognitoAccessToken;
}(_CognitoJwtToken__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "../amazon-cognito-identity-js/es/CognitoIdToken.js":
/*!**********************************************************!*\
  !*** ../amazon-cognito-identity-js/es/CognitoIdToken.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CognitoIdToken; });
/* harmony import */ var _CognitoJwtToken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CognitoJwtToken */ "../amazon-cognito-identity-js/es/CognitoJwtToken.js");
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/*!
 * Copyright 2016 Amazon.com,
 * Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the
 * License. A copy of the License is located at
 *
 *     http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, express or implied. See the License
 * for the specific language governing permissions and
 * limitations under the License.
 */



/** @class */

var CognitoIdToken = /*#__PURE__*/function (_CognitoJwtToken) {
  _inheritsLoose(CognitoIdToken, _CognitoJwtToken);
  /**
   * Constructs a new CognitoIdToken object
   * @param {string=} IdToken The JWT Id token
   */


  function CognitoIdToken(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        IdToken = _ref.IdToken;

    return _CognitoJwtToken.call(this, IdToken || '') || this;
  }

  return CognitoIdToken;
}(_CognitoJwtToken__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "../amazon-cognito-identity-js/es/CognitoJwtToken.js":
/*!***********************************************************!*\
  !*** ../amazon-cognito-identity-js/es/CognitoJwtToken.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CognitoJwtToken; });
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! buffer */ "../../node_modules/buffer/index.js");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_0__);
/*!
 * Copyright 2016 Amazon.com,
 * Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the
 * License. A copy of the License is located at
 *
 *     http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, express or implied. See the License
 * for the specific language governing permissions and
 * limitations under the License.
 */

/** @class */

var CognitoJwtToken = /*#__PURE__*/function () {
  /**
   * Constructs a new CognitoJwtToken object
   * @param {string=} token The JWT token.
   */
  function CognitoJwtToken(token) {
    // Assign object
    this.jwtToken = token || '';
    this.payload = this.decodePayload();
  }
  /**
   * @returns {string} the record's token.
   */


  var _proto = CognitoJwtToken.prototype;

  _proto.getJwtToken = function getJwtToken() {
    return this.jwtToken;
  }
  /**
   * @returns {int} the token's expiration (exp member).
   */
  ;

  _proto.getExpiration = function getExpiration() {
    return this.payload.exp;
  }
  /**
   * @returns {int} the token's "issued at" (iat member).
   */
  ;

  _proto.getIssuedAt = function getIssuedAt() {
    return this.payload.iat;
  }
  /**
   * @returns {object} the token's payload.
   */
  ;

  _proto.decodePayload = function decodePayload() {
    var payload = this.jwtToken.split('.')[1];

    try {
      return JSON.parse(buffer__WEBPACK_IMPORTED_MODULE_0__["Buffer"].from(payload, 'base64').toString('utf8'));
    } catch (err) {
      return {};
    }
  };

  return CognitoJwtToken;
}();



/***/ }),

/***/ "../amazon-cognito-identity-js/es/CognitoRefreshToken.js":
/*!***************************************************************!*\
  !*** ../amazon-cognito-identity-js/es/CognitoRefreshToken.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CognitoRefreshToken; });
/*!
 * Copyright 2016 Amazon.com,
 * Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the
 * License. A copy of the License is located at
 *
 *     http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, express or implied. See the License
 * for the specific language governing permissions and
 * limitations under the License.
 */

/** @class */
var CognitoRefreshToken = /*#__PURE__*/function () {
  /**
   * Constructs a new CognitoRefreshToken object
   * @param {string=} RefreshToken The JWT refresh token.
   */
  function CognitoRefreshToken(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        RefreshToken = _ref.RefreshToken; // Assign object


    this.token = RefreshToken || '';
  }
  /**
   * @returns {string} the record's token.
   */


  var _proto = CognitoRefreshToken.prototype;

  _proto.getToken = function getToken() {
    return this.token;
  };

  return CognitoRefreshToken;
}();



/***/ }),

/***/ "../amazon-cognito-identity-js/es/CognitoUser.js":
/*!*******************************************************!*\
  !*** ../amazon-cognito-identity-js/es/CognitoUser.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CognitoUser; });
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! buffer */ "../../node_modules/buffer/index.js");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var crypto_js_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js/core */ "../amazon-cognito-identity-js/node_modules/crypto-js/core.js");
/* harmony import */ var crypto_js_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var crypto_js_lib_typedarrays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-js/lib-typedarrays */ "../amazon-cognito-identity-js/node_modules/crypto-js/lib-typedarrays.js");
/* harmony import */ var crypto_js_lib_typedarrays__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js_lib_typedarrays__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var crypto_js_enc_base64__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto-js/enc-base64 */ "../amazon-cognito-identity-js/node_modules/crypto-js/enc-base64.js");
/* harmony import */ var crypto_js_enc_base64__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto_js_enc_base64__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var crypto_js_hmac_sha256__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto-js/hmac-sha256 */ "../amazon-cognito-identity-js/node_modules/crypto-js/hmac-sha256.js");
/* harmony import */ var crypto_js_hmac_sha256__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto_js_hmac_sha256__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _BigInteger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BigInteger */ "../amazon-cognito-identity-js/es/BigInteger.js");
/* harmony import */ var _AuthenticationHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AuthenticationHelper */ "../amazon-cognito-identity-js/es/AuthenticationHelper.js");
/* harmony import */ var _CognitoAccessToken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CognitoAccessToken */ "../amazon-cognito-identity-js/es/CognitoAccessToken.js");
/* harmony import */ var _CognitoIdToken__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CognitoIdToken */ "../amazon-cognito-identity-js/es/CognitoIdToken.js");
/* harmony import */ var _CognitoRefreshToken__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CognitoRefreshToken */ "../amazon-cognito-identity-js/es/CognitoRefreshToken.js");
/* harmony import */ var _CognitoUserSession__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CognitoUserSession */ "../amazon-cognito-identity-js/es/CognitoUserSession.js");
/* harmony import */ var _DateHelper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DateHelper */ "../amazon-cognito-identity-js/es/DateHelper.js");
/* harmony import */ var _CognitoUserAttribute__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CognitoUserAttribute */ "../amazon-cognito-identity-js/es/CognitoUserAttribute.js");
/* harmony import */ var _StorageHelper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./StorageHelper */ "../amazon-cognito-identity-js/es/StorageHelper.js");
/*!
 * Copyright 2016 Amazon.com,
 * Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the
 * License. A copy of the License is located at
 *
 *     http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, express or implied. See the License
 * for the specific language governing permissions and
 * limitations under the License.
 */


 // necessary for crypto js












/**
 * @callback nodeCallback
 * @template T result
 * @param {*} err The operation failure reason, or null.
 * @param {T} result The operation result.
 */

/**
 * @callback onFailure
 * @param {*} err Failure reason.
 */

/**
 * @callback onSuccess
 * @template T result
 * @param {T} result The operation result.
 */

/**
 * @callback mfaRequired
 * @param {*} details MFA challenge details.
 */

/**
 * @callback customChallenge
 * @param {*} details Custom challenge details.
 */

/**
 * @callback inputVerificationCode
 * @param {*} data Server response.
 */

/**
 * @callback authSuccess
 * @param {CognitoUserSession} session The new session.
 * @param {bool=} userConfirmationNecessary User must be confirmed.
 */

var isBrowser = typeof navigator !== 'undefined';
var userAgent = isBrowser ? navigator.userAgent : 'nodejs';
/** @class */

var CognitoUser = /*#__PURE__*/function () {
  /**
   * Constructs a new CognitoUser object
   * @param {object} data Creation options
   * @param {string} data.Username The user's username.
   * @param {CognitoUserPool} data.Pool Pool containing the user.
   * @param {object} data.Storage Optional storage object.
   */
  function CognitoUser(data) {
    if (data == null || data.Username == null || data.Pool == null) {
      throw new Error('Username and Pool information are required.');
    }

    this.username = data.Username || '';
    this.pool = data.Pool;
    this.Session = null;
    this.client = data.Pool.client;
    this.signInUserSession = null;
    this.authenticationFlowType = 'USER_SRP_AUTH';
    this.storage = data.Storage || new _StorageHelper__WEBPACK_IMPORTED_MODULE_13__["default"]().getStorage();
    this.keyPrefix = "CognitoIdentityServiceProvider." + this.pool.getClientId();
    this.userDataKey = this.keyPrefix + "." + this.username + ".userData";
  }
  /**
   * Sets the session for this user
   * @param {CognitoUserSession} signInUserSession the session
   * @returns {void}
   */


  var _proto = CognitoUser.prototype;

  _proto.setSignInUserSession = function setSignInUserSession(signInUserSession) {
    this.clearCachedUserData();
    this.signInUserSession = signInUserSession;
    this.cacheTokens();
  }
  /**
   * @returns {CognitoUserSession} the current session for this user
   */
  ;

  _proto.getSignInUserSession = function getSignInUserSession() {
    return this.signInUserSession;
  }
  /**
   * @returns {string} the user's username
   */
  ;

  _proto.getUsername = function getUsername() {
    return this.username;
  }
  /**
   * @returns {String} the authentication flow type
   */
  ;

  _proto.getAuthenticationFlowType = function getAuthenticationFlowType() {
    return this.authenticationFlowType;
  }
  /**
   * sets authentication flow type
   * @param {string} authenticationFlowType New value.
   * @returns {void}
   */
  ;

  _proto.setAuthenticationFlowType = function setAuthenticationFlowType(authenticationFlowType) {
    this.authenticationFlowType = authenticationFlowType;
  }
  /**
   * This is used for authenticating the user through the custom authentication flow.
   * @param {AuthenticationDetails} authDetails Contains the authentication data
   * @param {object} callback Result callback map.
   * @param {onFailure} callback.onFailure Called on any error.
   * @param {customChallenge} callback.customChallenge Custom challenge
   *        response required to continue.
   * @param {authSuccess} callback.onSuccess Called on success with the new session.
   * @returns {void}
   */
  ;

  _proto.initiateAuth = function initiateAuth(authDetails, callback) {
    var _this = this;

    var authParameters = authDetails.getAuthParameters();
    authParameters.USERNAME = this.username;
    var clientMetaData = Object.keys(authDetails.getValidationData()).length !== 0 ? authDetails.getValidationData() : authDetails.getClientMetadata();
    var jsonReq = {
      AuthFlow: 'CUSTOM_AUTH',
      ClientId: this.pool.getClientId(),
      AuthParameters: authParameters,
      ClientMetadata: clientMetaData
    };

    if (this.getUserContextData()) {
      jsonReq.UserContextData = this.getUserContextData();
    }

    this.client.request('InitiateAuth', jsonReq, function (err, data) {
      if (err) {
        return callback.onFailure(err);
      }

      var challengeName = data.ChallengeName;
      var challengeParameters = data.ChallengeParameters;

      if (challengeName === 'CUSTOM_CHALLENGE') {
        _this.Session = data.Session;
        return callback.customChallenge(challengeParameters);
      }

      _this.signInUserSession = _this.getCognitoUserSession(data.AuthenticationResult);

      _this.cacheTokens();

      return callback.onSuccess(_this.signInUserSession);
    });
  }
  /**
   * This is used for authenticating the user.
   * stuff
   * @param {AuthenticationDetails} authDetails Contains the authentication data
   * @param {object} callback Result callback map.
   * @param {onFailure} callback.onFailure Called on any error.
   * @param {newPasswordRequired} callback.newPasswordRequired new
   *        password and any required attributes are required to continue
   * @param {mfaRequired} callback.mfaRequired MFA code
   *        required to continue.
   * @param {customChallenge} callback.customChallenge Custom challenge
   *        response required to continue.
   * @param {authSuccess} callback.onSuccess Called on success with the new session.
   * @returns {void}
   */
  ;

  _proto.authenticateUser = function authenticateUser(authDetails, callback) {
    if (this.authenticationFlowType === 'USER_PASSWORD_AUTH') {
      return this.authenticateUserPlainUsernamePassword(authDetails, callback);
    } else if (this.authenticationFlowType === 'USER_SRP_AUTH' || this.authenticationFlowType === 'CUSTOM_AUTH') {
      return this.authenticateUserDefaultAuth(authDetails, callback);
    }

    return callback.onFailure(new Error('Authentication flow type is invalid.'));
  }
  /**
   * PRIVATE ONLY: This is an internal only method and should not
   * be directly called by the consumers.
   * It calls the AuthenticationHelper for SRP related
   * stuff
   * @param {AuthenticationDetails} authDetails Contains the authentication data
   * @param {object} callback Result callback map.
   * @param {onFailure} callback.onFailure Called on any error.
   * @param {newPasswordRequired} callback.newPasswordRequired new
   *        password and any required attributes are required to continue
   * @param {mfaRequired} callback.mfaRequired MFA code
   *        required to continue.
   * @param {customChallenge} callback.customChallenge Custom challenge
   *        response required to continue.
   * @param {authSuccess} callback.onSuccess Called on success with the new session.
   * @returns {void}
   */
  ;

  _proto.authenticateUserDefaultAuth = function authenticateUserDefaultAuth(authDetails, callback) {
    var _this2 = this;

    var authenticationHelper = new _AuthenticationHelper__WEBPACK_IMPORTED_MODULE_6__["default"](this.pool.getUserPoolId().split('_')[1]);
    var dateHelper = new _DateHelper__WEBPACK_IMPORTED_MODULE_11__["default"]();
    var serverBValue;
    var salt;
    var authParameters = {};

    if (this.deviceKey != null) {
      authParameters.DEVICE_KEY = this.deviceKey;
    }

    authParameters.USERNAME = this.username;
    authenticationHelper.getLargeAValue(function (errOnAValue, aValue) {
      // getLargeAValue callback start
      if (errOnAValue) {
        callback.onFailure(errOnAValue);
      }

      authParameters.SRP_A = aValue.toString(16);

      if (_this2.authenticationFlowType === 'CUSTOM_AUTH') {
        authParameters.CHALLENGE_NAME = 'SRP_A';
      }

      var clientMetaData = Object.keys(authDetails.getValidationData()).length !== 0 ? authDetails.getValidationData() : authDetails.getClientMetadata();
      var jsonReq = {
        AuthFlow: _this2.authenticationFlowType,
        ClientId: _this2.pool.getClientId(),
        AuthParameters: authParameters,
        ClientMetadata: clientMetaData
      };

      if (_this2.getUserContextData(_this2.username)) {
        jsonReq.UserContextData = _this2.getUserContextData(_this2.username);
      }

      _this2.client.request('InitiateAuth', jsonReq, function (err, data) {
        if (err) {
          return callback.onFailure(err);
        }

        var challengeParameters = data.ChallengeParameters;
        _this2.username = challengeParameters.USER_ID_FOR_SRP;
        _this2.userDataKey = _this2.keyPrefix + "." + _this2.username + ".userData";
        serverBValue = new _BigInteger__WEBPACK_IMPORTED_MODULE_5__["default"](challengeParameters.SRP_B, 16);
        salt = new _BigInteger__WEBPACK_IMPORTED_MODULE_5__["default"](challengeParameters.SALT, 16);

        _this2.getCachedDeviceKeyAndPassword();

        authenticationHelper.getPasswordAuthenticationKey(_this2.username, authDetails.getPassword(), serverBValue, salt, function (errOnHkdf, hkdf) {
          // getPasswordAuthenticationKey callback start
          if (errOnHkdf) {
            callback.onFailure(errOnHkdf);
          }

          var dateNow = dateHelper.getNowString();
          var message = crypto_js_core__WEBPACK_IMPORTED_MODULE_1___default.a.lib.WordArray.create(buffer__WEBPACK_IMPORTED_MODULE_0__["Buffer"].concat([buffer__WEBPACK_IMPORTED_MODULE_0__["Buffer"].from(_this2.pool.getUserPoolId().split('_')[1], 'utf8'), buffer__WEBPACK_IMPORTED_MODULE_0__["Buffer"].from(_this2.username, 'utf8'), buffer__WEBPACK_IMPORTED_MODULE_0__["Buffer"].from(challengeParameters.SECRET_BLOCK, 'base64'), buffer__WEBPACK_IMPORTED_MODULE_0__["Buffer"].from(dateNow, 'utf8')]));
          var key = crypto_js_core__WEBPACK_IMPORTED_MODULE_1___default.a.lib.WordArray.create(hkdf);
          var signatureString = crypto_js_enc_base64__WEBPACK_IMPORTED_MODULE_3___default.a.stringify(crypto_js_hmac_sha256__WEBPACK_IMPORTED_MODULE_4___default()(message, key));
          var challengeResponses = {};
          challengeResponses.USERNAME = _this2.username;
          challengeResponses.PASSWORD_CLAIM_SECRET_BLOCK = challengeParameters.SECRET_BLOCK;
          challengeResponses.TIMESTAMP = dateNow;
          challengeResponses.PASSWORD_CLAIM_SIGNATURE = signatureString;

          if (_this2.deviceKey != null) {
            challengeResponses.DEVICE_KEY = _this2.deviceKey;
          }

          var respondToAuthChallenge = function respondToAuthChallenge(challenge, challengeCallback) {
            return _this2.client.request('RespondToAuthChallenge', challenge, function (errChallenge, dataChallenge) {
              if (errChallenge && errChallenge.code === 'ResourceNotFoundException' && errChallenge.message.toLowerCase().indexOf('device') !== -1) {
                challengeResponses.DEVICE_KEY = null;
                _this2.deviceKey = null;
                _this2.randomPassword = null;
                _this2.deviceGroupKey = null;

                _this2.clearCachedDeviceKeyAndPassword();

                return respondToAuthChallenge(challenge, challengeCallback);
              }

              return challengeCallback(errChallenge, dataChallenge);
            });
          };

          var jsonReqResp = {
            ChallengeName: 'PASSWORD_VERIFIER',
            ClientId: _this2.pool.getClientId(),
            ChallengeResponses: challengeResponses,
            Session: data.Session,
            ClientMetadata: clientMetaData
          };

          if (_this2.getUserContextData()) {
            jsonReqResp.UserContextData = _this2.getUserContextData();
          }

          respondToAuthChallenge(jsonReqResp, function (errAuthenticate, dataAuthenticate) {
            if (errAuthenticate) {
              return callback.onFailure(errAuthenticate);
            }

            return _this2.authenticateUserInternal(dataAuthenticate, authenticationHelper, callback);
          });
          return undefined; // getPasswordAuthenticationKey callback end
        });
        return undefined;
      }); // getLargeAValue callback end

    });
  }
  /**
   * PRIVATE ONLY: This is an internal only method and should not
   * be directly called by the consumers.
   * @param {AuthenticationDetails} authDetails Contains the authentication data.
   * @param {object} callback Result callback map.
   * @param {onFailure} callback.onFailure Called on any error.
   * @param {mfaRequired} callback.mfaRequired MFA code
   *        required to continue.
   * @param {authSuccess} callback.onSuccess Called on success with the new session.
   * @returns {void}
   */
  ;

  _proto.authenticateUserPlainUsernamePassword = function authenticateUserPlainUsernamePassword(authDetails, callback) {
    var _this3 = this;

    var authParameters = {};
    authParameters.USERNAME = this.username;
    authParameters.PASSWORD = authDetails.getPassword();

    if (!authParameters.PASSWORD) {
      callback.onFailure(new Error('PASSWORD parameter is required'));
      return;
    }

    var authenticationHelper = new _AuthenticationHelper__WEBPACK_IMPORTED_MODULE_6__["default"](this.pool.getUserPoolId().split('_')[1]);
    this.getCachedDeviceKeyAndPassword();

    if (this.deviceKey != null) {
      authParameters.DEVICE_KEY = this.deviceKey;
    }

    var clientMetaData = Object.keys(authDetails.getValidationData()).length !== 0 ? authDetails.getValidationData() : authDetails.getClientMetadata();
    var jsonReq = {
      AuthFlow: 'USER_PASSWORD_AUTH',
      ClientId: this.pool.getClientId(),
      AuthParameters: authParameters,
      ClientMetadata: clientMetaData
    };

    if (this.getUserContextData(this.username)) {
      jsonReq.UserContextData = this.getUserContextData(this.username);
    } // USER_PASSWORD_AUTH happens in a single round-trip: client sends userName and password,
    // Cognito UserPools verifies password and returns tokens.


    this.client.request('InitiateAuth', jsonReq, function (err, authResult) {
      if (err) {
        return callback.onFailure(err);
      }

      return _this3.authenticateUserInternal(authResult, authenticationHelper, callback);
    });
  }
  /**
   * PRIVATE ONLY: This is an internal only method and should not
   * be directly called by the consumers.
   * @param {object} dataAuthenticate authentication data
   * @param {object} authenticationHelper helper created
   * @param {callback} callback passed on from caller
   * @returns {void}
   */
  ;

  _proto.authenticateUserInternal = function authenticateUserInternal(dataAuthenticate, authenticationHelper, callback) {
    var _this4 = this;

    var challengeName = dataAuthenticate.ChallengeName;
    var challengeParameters = dataAuthenticate.ChallengeParameters;

    if (challengeName === 'SMS_MFA') {
      this.Session = dataAuthenticate.Session;
      return callback.mfaRequired(challengeName, challengeParameters);
    }

    if (challengeName === 'SELECT_MFA_TYPE') {
      this.Session = dataAuthenticate.Session;
      return callback.selectMFAType(challengeName, challengeParameters);
    }

    if (challengeName === 'MFA_SETUP') {
      this.Session = dataAuthenticate.Session;
      return callback.mfaSetup(challengeName, challengeParameters);
    }

    if (challengeName === 'SOFTWARE_TOKEN_MFA') {
      this.Session = dataAuthenticate.Session;
      return callback.totpRequired(challengeName, challengeParameters);
    }

    if (challengeName === 'CUSTOM_CHALLENGE') {
      this.Session = dataAuthenticate.Session;
      return callback.customChallenge(challengeParameters);
    }

    if (challengeName === 'NEW_PASSWORD_REQUIRED') {
      this.Session = dataAuthenticate.Session;
      var userAttributes = null;
      var rawRequiredAttributes = null;
      var requiredAttributes = [];
      var userAttributesPrefix = authenticationHelper.getNewPasswordRequiredChallengeUserAttributePrefix();

      if (challengeParameters) {
        userAttributes = JSON.parse(dataAuthenticate.ChallengeParameters.userAttributes);
        rawRequiredAttributes = JSON.parse(dataAuthenticate.ChallengeParameters.requiredAttributes);
      }

      if (rawRequiredAttributes) {
        for (var i = 0; i < rawRequiredAttributes.length; i++) {
          requiredAttributes[i] = rawRequiredAttributes[i].substr(userAttributesPrefix.length);
        }
      }

      return callback.newPasswordRequired(userAttributes, requiredAttributes);
    }

    if (challengeName === 'DEVICE_SRP_AUTH') {
      this.Session = dataAuthenticate.Session;
      this.getDeviceResponse(callback);
      return undefined;
    }

    this.signInUserSession = this.getCognitoUserSession(dataAuthenticate.AuthenticationResult);
    this.challengeName = challengeName;
    this.cacheTokens();
    var newDeviceMetadata = dataAuthenticate.AuthenticationResult.NewDeviceMetadata;

    if (newDeviceMetadata == null) {
      return callback.onSuccess(this.signInUserSession);
    }

    authenticationHelper.generateHashDevice(dataAuthenticate.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey, dataAuthenticate.AuthenticationResult.NewDeviceMetadata.DeviceKey, function (errGenHash) {
      if (errGenHash) {
        return callback.onFailure(errGenHash);
      }

      var deviceSecretVerifierConfig = {
        Salt: buffer__WEBPACK_IMPORTED_MODULE_0__["Buffer"].from(authenticationHelper.getSaltDevices(), 'hex').toString('base64'),
        PasswordVerifier: buffer__WEBPACK_IMPORTED_MODULE_0__["Buffer"].from(authenticationHelper.getVerifierDevices(), 'hex').toString('base64')
      };
      _this4.verifierDevices = deviceSecretVerifierConfig.PasswordVerifier;
      _this4.deviceGroupKey = newDeviceMetadata.DeviceGroupKey;
      _this4.randomPassword = authenticationHelper.getRandomPassword();

      _this4.client.request('ConfirmDevice', {
        DeviceKey: newDeviceMetadata.DeviceKey,
        AccessToken: _this4.signInUserSession.getAccessToken().getJwtToken(),
        DeviceSecretVerifierConfig: deviceSecretVerifierConfig,
        DeviceName: userAgent
      }, function (errConfirm, dataConfirm) {
        if (errConfirm) {
          return callback.onFailure(errConfirm);
        }

        _this4.deviceKey = dataAuthenticate.AuthenticationResult.NewDeviceMetadata.DeviceKey;

        _this4.cacheDeviceKeyAndPassword();

        if (dataConfirm.UserConfirmationNecessary === true) {
          return callback.onSuccess(_this4.signInUserSession, dataConfirm.UserConfirmationNecessary);
        }

        return callback.onSuccess(_this4.signInUserSession);
      });

      return undefined;
    });
    return undefined;
  }
  /**
   * This method is user to complete the NEW_PASSWORD_REQUIRED challenge.
   * Pass the new password with any new user attributes to be updated.
   * User attribute keys must be of format userAttributes.<attribute_name>.
   * @param {string} newPassword new password for this user
   * @param {object} requiredAttributeData map with values for all required attributes
   * @param {object} callback Result callback map.
   * @param {onFailure} callback.onFailure Called on any error.
   * @param {mfaRequired} callback.mfaRequired MFA code required to continue.
   * @param {customChallenge} callback.customChallenge Custom challenge
   *         response required to continue.
   * @param {authSuccess} callback.onSuccess Called on success with the new session.
   * @param {ClientMetadata} clientMetadata object which is passed from client to Cognito Lambda trigger
   * @returns {void}
   */
  ;

  _proto.completeNewPasswordChallenge = function completeNewPasswordChallenge(newPassword, requiredAttributeData, callback, clientMetadata) {
    var _this5 = this;

    if (!newPassword) {
      return callback.onFailure(new Error('New password is required.'));
    }

    var authenticationHelper = new _AuthenticationHelper__WEBPACK_IMPORTED_MODULE_6__["default"](this.pool.getUserPoolId().split('_')[1]);
    var userAttributesPrefix = authenticationHelper.getNewPasswordRequiredChallengeUserAttributePrefix();
    var finalUserAttributes = {};

    if (requiredAttributeData) {
      Object.keys(requiredAttributeData).forEach(function (key) {
        finalUserAttributes[userAttributesPrefix + key] = requiredAttributeData[key];
      });
    }

    finalUserAttributes.NEW_PASSWORD = newPassword;
    finalUserAttributes.USERNAME = this.username;
    var jsonReq = {
      ChallengeName: 'NEW_PASSWORD_REQUIRED',
      ClientId: this.pool.getClientId(),
      ChallengeResponses: finalUserAttributes,
      Session: this.Session,
      ClientMetadata: clientMetadata
    };

    if (this.getUserContextData()) {
      jsonReq.UserContextData = this.getUserContextData();
    }

    this.client.request('RespondToAuthChallenge', jsonReq, function (errAuthenticate, dataAuthenticate) {
      if (errAuthenticate) {
        return callback.onFailure(errAuthenticate);
      }

      return _this5.authenticateUserInternal(dataAuthenticate, authenticationHelper, callback);
    });
    return undefined;
  }
  /**
   * This is used to get a session using device authentication. It is called at the end of user
   * authentication
   *
   * @param {object} callback Result callback map.
   * @param {onFailure} callback.onFailure Called on any error.
   * @param {authSuccess} callback.onSuccess Called on success with the new session.
   * @param {ClientMetadata} clientMetadata object which is passed from client to Cognito Lambda trigger
   * @returns {void}
   * @private
   */
  ;

  _proto.getDeviceResponse = function getDeviceResponse(callback, clientMetadata) {
    var _this6 = this;

    var authenticationHelper = new _AuthenticationHelper__WEBPACK_IMPORTED_MODULE_6__["default"](this.deviceGroupKey);
    var dateHelper = new _DateHelper__WEBPACK_IMPORTED_MODULE_11__["default"]();
    var authParameters = {};
    authParameters.USERNAME = this.username;
    authParameters.DEVICE_KEY = this.deviceKey;
    authenticationHelper.getLargeAValue(function (errAValue, aValue) {
      // getLargeAValue callback start
      if (errAValue) {
        callback.onFailure(errAValue);
      }

      authParameters.SRP_A = aValue.toString(16);
      var jsonReq = {
        ChallengeName: 'DEVICE_SRP_AUTH',
        ClientId: _this6.pool.getClientId(),
        ChallengeResponses: authParameters,
        ClientMetadata: clientMetadata,
        Session: _this6.Session
      };

      if (_this6.getUserContextData()) {
        jsonReq.UserContextData = _this6.getUserContextData();
      }

      _this6.client.request('RespondToAuthChallenge', jsonReq, function (err, data) {
        if (err) {
          return callback.onFailure(err);
        }

        var challengeParameters = data.ChallengeParameters;
        var serverBValue = new _BigInteger__WEBPACK_IMPORTED_MODULE_5__["default"](challengeParameters.SRP_B, 16);
        var salt = new _BigInteger__WEBPACK_IMPORTED_MODULE_5__["default"](challengeParameters.SALT, 16);
        authenticationHelper.getPasswordAuthenticationKey(_this6.deviceKey, _this6.randomPassword, serverBValue, salt, function (errHkdf, hkdf) {
          // getPasswordAuthenticationKey callback start
          if (errHkdf) {
            return callback.onFailure(errHkdf);
          }

          var dateNow = dateHelper.getNowString();
          var message = crypto_js_core__WEBPACK_IMPORTED_MODULE_1___default.a.lib.WordArray.create(buffer__WEBPACK_IMPORTED_MODULE_0__["Buffer"].concat([buffer__WEBPACK_IMPORTED_MODULE_0__["Buffer"].from(_this6.deviceGroupKey, 'utf8'), buffer__WEBPACK_IMPORTED_MODULE_0__["Buffer"].from(_this6.deviceKey, 'utf8'), buffer__WEBPACK_IMPORTED_MODULE_0__["Buffer"].from(challengeParameters.SECRET_BLOCK, 'base64'), buffer__WEBPACK_IMPORTED_MODULE_0__["Buffer"].from(dateNow, 'utf8')]));
          var key = crypto_js_core__WEBPACK_IMPORTED_MODULE_1___default.a.lib.WordArray.create(hkdf);
          var signatureString = crypto_js_enc_base64__WEBPACK_IMPORTED_MODULE_3___default.a.stringify(crypto_js_hmac_sha256__WEBPACK_IMPORTED_MODULE_4___default()(message, key));
          var challengeResponses = {};
          challengeResponses.USERNAME = _this6.username;
          challengeResponses.PASSWORD_CLAIM_SECRET_BLOCK = challengeParameters.SECRET_BLOCK;
          challengeResponses.TIMESTAMP = dateNow;
          challengeResponses.PASSWORD_CLAIM_SIGNATURE = signatureString;
          challengeResponses.DEVICE_KEY = _this6.deviceKey;
          var jsonReqResp = {
            ChallengeName: 'DEVICE_PASSWORD_VERIFIER',
            ClientId: _this6.pool.getClientId(),
            ChallengeResponses: challengeResponses,
            Session: data.Session
          };

          if (_this6.getUserContextData()) {
            jsonReqResp.UserContextData = _this6.getUserContextData();
          }

          _this6.client.request('RespondToAuthChallenge', jsonReqResp, function (errAuthenticate, dataAuthenticate) {
            if (errAuthenticate) {
              return callback.onFailure(errAuthenticate);
            }

            _this6.signInUserSession = _this6.getCognitoUserSession(dataAuthenticate.AuthenticationResult);

            _this6.cacheTokens();

            return callback.onSuccess(_this6.signInUserSession);
          });

          return undefined; // getPasswordAuthenticationKey callback end
        });
        return undefined;
      }); // getLargeAValue callback end

    });
  }
  /**
   * This is used for a certain user to confirm the registration by using a confirmation code
   * @param {string} confirmationCode Code entered by user.
   * @param {bool} forceAliasCreation Allow migrating from an existing email / phone number.
   * @param {nodeCallback<string>} callback Called on success or error.
   * @param {ClientMetadata} clientMetadata object which is passed from client to Cognito Lambda trigger
   * @returns {void}
   */
  ;

  _proto.confirmRegistration = function confirmRegistration(confirmationCode, forceAliasCreation, callback, clientMetadata) {
    var jsonReq = {
      ClientId: this.pool.getClientId(),
      ConfirmationCode: confirmationCode,
      Username: this.username,
      ForceAliasCreation: forceAliasCreation,
      ClientMetadata: clientMetadata
    };

    if (this.getUserContextData()) {
      jsonReq.UserContextData = this.getUserContextData();
    }

    this.client.request('ConfirmSignUp', jsonReq, function (err) {
      if (err) {
        return callback(err, null);
      }

      return callback(null, 'SUCCESS');
    });
  }
  /**
   * This is used by the user once he has the responses to a custom challenge
   * @param {string} answerChallenge The custom challenge answer.
   * @param {object} callback Result callback map.
   * @param {onFailure} callback.onFailure Called on any error.
   * @param {customChallenge} callback.customChallenge
   *    Custom challenge response required to continue.
   * @param {authSuccess} callback.onSuccess Called on success with the new session.
   * @param {ClientMetadata} clientMetadata object which is passed from client to Cognito Lambda trigger
   * @returns {void}
   */
  ;

  _proto.sendCustomChallengeAnswer = function sendCustomChallengeAnswer(answerChallenge, callback, clientMetadata) {
    var _this7 = this;

    var challengeResponses = {};
    challengeResponses.USERNAME = this.username;
    challengeResponses.ANSWER = answerChallenge;
    var authenticationHelper = new _AuthenticationHelper__WEBPACK_IMPORTED_MODULE_6__["default"](this.pool.getUserPoolId().split('_')[1]);
    this.getCachedDeviceKeyAndPassword();

    if (this.deviceKey != null) {
      challengeResponses.DEVICE_KEY = this.deviceKey;
    }

    var jsonReq = {
      ChallengeName: 'CUSTOM_CHALLENGE',
      ChallengeResponses: challengeResponses,
      ClientId: this.pool.getClientId(),
      Session: this.Session,
      ClientMetadata: clientMetadata
    };

    if (this.getUserContextData()) {
      jsonReq.UserContextData = this.getUserContextData();
    }

    this.client.request('RespondToAuthChallenge', jsonReq, function (err, data) {
      if (err) {
        return callback.onFailure(err);
      }

      return _this7.authenticateUserInternal(data, authenticationHelper, callback);
    });
  }
  /**
   * This is used by the user once he has an MFA code
   * @param {string} confirmationCode The MFA code entered by the user.
   * @param {object} callback Result callback map.
   * @param {string} mfaType The mfa we are replying to.
   * @param {onFailure} callback.onFailure Called on any error.
   * @param {authSuccess} callback.onSuccess Called on success with the new session.
   * @param {ClientMetadata} clientMetadata object which is passed from client to Cognito Lambda trigger
   * @returns {void}
   */
  ;

  _proto.sendMFACode = function sendMFACode(confirmationCode, callback, mfaType, clientMetadata) {
    var _this8 = this;

    var challengeResponses = {};
    challengeResponses.USERNAME = this.username;
    challengeResponses.SMS_MFA_CODE = confirmationCode;
    var mfaTypeSelection = mfaType || 'SMS_MFA';

    if (mfaTypeSelection === 'SOFTWARE_TOKEN_MFA') {
      challengeResponses.SOFTWARE_TOKEN_MFA_CODE = confirmationCode;
    }

    if (this.deviceKey != null) {
      challengeResponses.DEVICE_KEY = this.deviceKey;
    }

    var jsonReq = {
      ChallengeName: mfaTypeSelection,
      ChallengeResponses: challengeResponses,
      ClientId: this.pool.getClientId(),
      Session: this.Session,
      ClientMetadata: clientMetadata
    };

    if (this.getUserContextData()) {
      jsonReq.UserContextData = this.getUserContextData();
    }

    this.client.request('RespondToAuthChallenge', jsonReq, function (err, dataAuthenticate) {
      if (err) {
        return callback.onFailure(err);
      }

      var challengeName = dataAuthenticate.ChallengeName;

      if (challengeName === 'DEVICE_SRP_AUTH') {
        _this8.getDeviceResponse(callback);

        return undefined;
      }

      _this8.signInUserSession = _this8.getCognitoUserSession(dataAuthenticate.AuthenticationResult);

      _this8.cacheTokens();

      if (dataAuthenticate.AuthenticationResult.NewDeviceMetadata == null) {
        return callback.onSuccess(_this8.signInUserSession);
      }

      var authenticationHelper = new _AuthenticationHelper__WEBPACK_IMPORTED_MODULE_6__["default"](_this8.pool.getUserPoolId().split('_')[1]);
      authenticationHelper.generateHashDevice(dataAuthenticate.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey, dataAuthenticate.AuthenticationResult.NewDeviceMetadata.DeviceKey, function (errGenHash) {
        if (errGenHash) {
          return callback.onFailure(errGenHash);
        }

        var deviceSecretVerifierConfig = {
          Salt: buffer__WEBPACK_IMPORTED_MODULE_0__["Buffer"].from(authenticationHelper.getSaltDevices(), 'hex').toString('base64'),
          PasswordVerifier: buffer__WEBPACK_IMPORTED_MODULE_0__["Buffer"].from(authenticationHelper.getVerifierDevices(), 'hex').toString('base64')
        };
        _this8.verifierDevices = deviceSecretVerifierConfig.PasswordVerifier;
        _this8.deviceGroupKey = dataAuthenticate.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey;
        _this8.randomPassword = authenticationHelper.getRandomPassword();

        _this8.client.request('ConfirmDevice', {
          DeviceKey: dataAuthenticate.AuthenticationResult.NewDeviceMetadata.DeviceKey,
          AccessToken: _this8.signInUserSession.getAccessToken().getJwtToken(),
          DeviceSecretVerifierConfig: deviceSecretVerifierConfig,
          DeviceName: userAgent
        }, function (errConfirm, dataConfirm) {
          if (errConfirm) {
            return callback.onFailure(errConfirm);
          }

          _this8.deviceKey = dataAuthenticate.AuthenticationResult.NewDeviceMetadata.DeviceKey;

          _this8.cacheDeviceKeyAndPassword();

          if (dataConfirm.UserConfirmationNecessary === true) {
            return callback.onSuccess(_this8.signInUserSession, dataConfirm.UserConfirmationNecessary);
          }

          return callback.onSuccess(_this8.signInUserSession);
        });

        return undefined;
      });
      return undefined;
    });
  }
  /**
   * This is used by an authenticated user to change the current password
   * @param {string} oldUserPassword The current password.
   * @param {string} newUserPassword The requested new password.
   * @param {nodeCallback<string>} callback Called on success or error.
   * @param {ClientMetadata} clientMetadata object which is passed from client to Cognito Lambda trigger
   * @returns {void}
   */
  ;

  _proto.changePassword = function changePassword(oldUserPassword, newUserPassword, callback, clientMetadata) {
    if (!(this.signInUserSession != null && this.signInUserSession.isValid())) {
      return callback(new Error('User is not authenticated'), null);
    }

    this.client.request('ChangePassword', {
      PreviousPassword: oldUserPassword,
      ProposedPassword: newUserPassword,
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      ClientMetadata: clientMetadata
    }, function (err) {
      if (err) {
        return callback(err, null);
      }

      return callback(null, 'SUCCESS');
    });
    return undefined;
  }
  /**
   * This is used by an authenticated user to enable MFA for itself
   * @deprecated
   * @param {nodeCallback<string>} callback Called on success or error.
   * @returns {void}
   */
  ;

  _proto.enableMFA = function enableMFA(callback) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid()) {
      return callback(new Error('User is not authenticated'), null);
    }

    var mfaOptions = [];
    var mfaEnabled = {
      DeliveryMedium: 'SMS',
      AttributeName: 'phone_number'
    };
    mfaOptions.push(mfaEnabled);
    this.client.request('SetUserSettings', {
      MFAOptions: mfaOptions,
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function (err) {
      if (err) {
        return callback(err, null);
      }

      return callback(null, 'SUCCESS');
    });
    return undefined;
  }
  /**
   * This is used by an authenticated user to enable MFA for itself
   * @param {IMfaSettings} smsMfaSettings the sms mfa settings
   * @param {IMFASettings} softwareTokenMfaSettings the software token mfa settings
   * @param {nodeCallback<string>} callback Called on success or error.
   * @returns {void}
   */
  ;

  _proto.setUserMfaPreference = function setUserMfaPreference(smsMfaSettings, softwareTokenMfaSettings, callback) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid()) {
      return callback(new Error('User is not authenticated'), null);
    }

    this.client.request('SetUserMFAPreference', {
      SMSMfaSettings: smsMfaSettings,
      SoftwareTokenMfaSettings: softwareTokenMfaSettings,
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function (err) {
      if (err) {
        return callback(err, null);
      }

      return callback(null, 'SUCCESS');
    });
    return undefined;
  }
  /**
   * This is used by an authenticated user to disable MFA for itself
   * @deprecated
   * @param {nodeCallback<string>} callback Called on success or error.
   * @returns {void}
   */
  ;

  _proto.disableMFA = function disableMFA(callback) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid()) {
      return callback(new Error('User is not authenticated'), null);
    }

    var mfaOptions = [];
    this.client.request('SetUserSettings', {
      MFAOptions: mfaOptions,
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function (err) {
      if (err) {
        return callback(err, null);
      }

      return callback(null, 'SUCCESS');
    });
    return undefined;
  }
  /**
   * This is used by an authenticated user to delete itself
   * @param {nodeCallback<string>} callback Called on success or error.
   * @param {ClientMetadata} clientMetadata object which is passed from client to Cognito Lambda trigger
   * @returns {void}
   */
  ;

  _proto.deleteUser = function deleteUser(callback, clientMetadata) {
    var _this9 = this;

    if (this.signInUserSession == null || !this.signInUserSession.isValid()) {
      return callback(new Error('User is not authenticated'), null);
    }

    this.client.request('DeleteUser', {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      ClientMetadata: clientMetadata
    }, function (err) {
      if (err) {
        return callback(err, null);
      }

      _this9.clearCachedUser();

      return callback(null, 'SUCCESS');
    });
    return undefined;
  }
  /**
   * @typedef {CognitoUserAttribute | { Name:string, Value:string }} AttributeArg
   */

  /**
   * This is used by an authenticated user to change a list of attributes
   * @param {AttributeArg[]} attributes A list of the new user attributes.
   * @param {nodeCallback<string>} callback Called on success or error.
   * @param {ClientMetadata} clientMetadata object which is passed from client to Cognito Lambda trigger
   * @returns {void}
   */
  ;

  _proto.updateAttributes = function updateAttributes(attributes, callback, clientMetadata) {
    var _this10 = this;

    if (this.signInUserSession == null || !this.signInUserSession.isValid()) {
      return callback(new Error('User is not authenticated'), null);
    }

    this.client.request('UpdateUserAttributes', {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      UserAttributes: attributes,
      ClientMetadata: clientMetadata
    }, function (err) {
      if (err) {
        return callback(err, null);
      } // update cached user


      return _this10.getUserData(function () {
        return callback(null, 'SUCCESS');
      }, {
        bypassCache: true
      });
    });
    return undefined;
  }
  /**
   * This is used by an authenticated user to get a list of attributes
   * @param {nodeCallback<CognitoUserAttribute[]>} callback Called on success or error.
   * @returns {void}
   */
  ;

  _proto.getUserAttributes = function getUserAttributes(callback) {
    if (!(this.signInUserSession != null && this.signInUserSession.isValid())) {
      return callback(new Error('User is not authenticated'), null);
    }

    this.client.request('GetUser', {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function (err, userData) {
      if (err) {
        return callback(err, null);
      }

      var attributeList = [];

      for (var i = 0; i < userData.UserAttributes.length; i++) {
        var attribute = {
          Name: userData.UserAttributes[i].Name,
          Value: userData.UserAttributes[i].Value
        };
        var userAttribute = new _CognitoUserAttribute__WEBPACK_IMPORTED_MODULE_12__["default"](attribute);
        attributeList.push(userAttribute);
      }

      return callback(null, attributeList);
    });
    return undefined;
  }
  /**
   * This was previously used by an authenticated user to get MFAOptions,
   * but no longer returns a meaningful response. Refer to the documentation for
   * how to setup and use MFA: https://docs.amplify.aws/lib/auth/mfa/q/platform/js
   * @deprecated
   * @param {nodeCallback<MFAOptions>} callback Called on success or error.
   * @returns {void}
   */
  ;

  _proto.getMFAOptions = function getMFAOptions(callback) {
    if (!(this.signInUserSession != null && this.signInUserSession.isValid())) {
      return callback(new Error('User is not authenticated'), null);
    }

    this.client.request('GetUser', {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function (err, userData) {
      if (err) {
        return callback(err, null);
      }

      return callback(null, userData.MFAOptions);
    });
    return undefined;
  }
  /**
   * PRIVATE ONLY: This is an internal only method and should not
   * be directly called by the consumers.
   */
  ;

  _proto.createGetUserRequest = function createGetUserRequest() {
    return this.client.promisifyRequest('GetUser', {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    });
  }
  /**
   * PRIVATE ONLY: This is an internal only method and should not
   * be directly called by the consumers.
   */
  ;

  _proto.refreshSessionIfPossible = function refreshSessionIfPossible(options) {
    var _this11 = this;

    if (options === void 0) {
      options = {};
    } // best effort, if not possible


    return new Promise(function (resolve) {
      var refresh = _this11.signInUserSession.getRefreshToken();

      if (refresh && refresh.getToken()) {
        _this11.refreshSession(refresh, resolve, options.clientMetadata);
      } else {
        resolve();
      }
    });
  }
  /**
   * @typedef {Object} GetUserDataOptions
   * @property {boolean} bypassCache - force getting data from Cognito service
   * @property {Record<string, string>} clientMetadata - clientMetadata for getSession
   */

  /**
   * This is used by an authenticated users to get the userData
   * @param {nodeCallback<UserData>} callback Called on success or error.
   * @param {GetUserDataOptions} params
   * @returns {void}
   */
  ;

  _proto.getUserData = function getUserData(callback, params) {
    var _this12 = this;

    if (!(this.signInUserSession != null && this.signInUserSession.isValid())) {
      this.clearCachedUserData();
      return callback(new Error('User is not authenticated'), null);
    }

    var userData = this.getUserDataFromCache();

    if (!userData) {
      this.fetchUserData().then(function (data) {
        callback(null, data);
      })["catch"](callback);
      return;
    }

    if (this.isFetchUserDataAndTokenRequired(params)) {
      this.fetchUserData().then(function (data) {
        return _this12.refreshSessionIfPossible(params).then(function () {
          return data;
        });
      }).then(function (data) {
        return callback(null, data);
      })["catch"](callback);
      return;
    }

    try {
      callback(null, JSON.parse(userData));
      return;
    } catch (err) {
      this.clearCachedUserData();
      callback(err, null);
      return;
    }
  }
  /**
   *
   * PRIVATE ONLY: This is an internal only method and should not
   * be directly called by the consumers.
   */
  ;

  _proto.getUserDataFromCache = function getUserDataFromCache() {
    var userData = this.storage.getItem(this.userDataKey);
    return userData;
  }
  /**
   *
   * PRIVATE ONLY: This is an internal only method and should not
   * be directly called by the consumers.
   */
  ;

  _proto.isFetchUserDataAndTokenRequired = function isFetchUserDataAndTokenRequired(params) {
    var _ref = params || {},
        _ref$bypassCache = _ref.bypassCache,
        bypassCache = _ref$bypassCache === void 0 ? false : _ref$bypassCache;

    return bypassCache;
  }
  /**
   *
   * PRIVATE ONLY: This is an internal only method and should not
   * be directly called by the consumers.
   */
  ;

  _proto.fetchUserData = function fetchUserData() {
    var _this13 = this;

    return this.createGetUserRequest().then(function (data) {
      _this13.cacheUserData(data);

      return data;
    });
  }
  /**
   * This is used by an authenticated user to delete a list of attributes
   * @param {string[]} attributeList Names of the attributes to delete.
   * @param {nodeCallback<string>} callback Called on success or error.
   * @returns {void}
   */
  ;

  _proto.deleteAttributes = function deleteAttributes(attributeList, callback) {
    var _this14 = this;

    if (!(this.signInUserSession != null && this.signInUserSession.isValid())) {
      return callback(new Error('User is not authenticated'), null);
    }

    this.client.request('DeleteUserAttributes', {
      UserAttributeNames: attributeList,
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function (err) {
      if (err) {
        return callback(err, null);
      } // update cached user


      return _this14.getUserData(function () {
        return callback(null, 'SUCCESS');
      }, {
        bypassCache: true
      });
    });
    return undefined;
  }
  /**
   * This is used by a user to resend a confirmation code
   * @param {nodeCallback<string>} callback Called on success or error.
   * @param {ClientMetadata} clientMetadata object which is passed from client to Cognito Lambda trigger
   * @returns {void}
   */
  ;

  _proto.resendConfirmationCode = function resendConfirmationCode(callback, clientMetadata) {
    var jsonReq = {
      ClientId: this.pool.getClientId(),
      Username: this.username,
      ClientMetadata: clientMetadata
    };
    this.client.request('ResendConfirmationCode', jsonReq, function (err, result) {
      if (err) {
        return callback(err, null);
      }

      return callback(null, result);
    });
  }
  /**
   * @typedef {Object} GetSessionOptions
   * @property {Record<string, string>} clientMetadata - clientMetadata for getSession
   */

  /**
   * This is used to get a session, either from the session object
   * or from  the local storage, or by using a refresh token
   *
   * @param {nodeCallback<CognitoUserSession>} callback Called on success or error.
   * @param {GetSessionOptions} options
   * @returns {void}
   */
  ;

  _proto.getSession = function getSession(callback, options) {
    if (options === void 0) {
      options = {};
    }

    if (this.username == null) {
      return callback(new Error('Username is null. Cannot retrieve a new session'), null);
    }

    if (this.signInUserSession != null && this.signInUserSession.isValid()) {
      return callback(null, this.signInUserSession);
    }

    var keyPrefix = "CognitoIdentityServiceProvider." + this.pool.getClientId() + "." + this.username;
    var idTokenKey = keyPrefix + ".idToken";
    var accessTokenKey = keyPrefix + ".accessToken";
    var refreshTokenKey = keyPrefix + ".refreshToken";
    var clockDriftKey = keyPrefix + ".clockDrift";

    if (this.storage.getItem(idTokenKey)) {
      var idToken = new _CognitoIdToken__WEBPACK_IMPORTED_MODULE_8__["default"]({
        IdToken: this.storage.getItem(idTokenKey)
      });
      var accessToken = new _CognitoAccessToken__WEBPACK_IMPORTED_MODULE_7__["default"]({
        AccessToken: this.storage.getItem(accessTokenKey)
      });
      var refreshToken = new _CognitoRefreshToken__WEBPACK_IMPORTED_MODULE_9__["default"]({
        RefreshToken: this.storage.getItem(refreshTokenKey)
      });
      var clockDrift = parseInt(this.storage.getItem(clockDriftKey), 0) || 0;
      var sessionData = {
        IdToken: idToken,
        AccessToken: accessToken,
        RefreshToken: refreshToken,
        ClockDrift: clockDrift
      };
      var cachedSession = new _CognitoUserSession__WEBPACK_IMPORTED_MODULE_10__["default"](sessionData);

      if (cachedSession.isValid()) {
        this.signInUserSession = cachedSession;
        return callback(null, this.signInUserSession);
      }

      if (!refreshToken.getToken()) {
        return callback(new Error('Cannot retrieve a new session. Please authenticate.'), null);
      }

      this.refreshSession(refreshToken, callback, options.clientMetadata);
    } else {
      callback(new Error('Local storage is missing an ID Token, Please authenticate'), null);
    }

    return undefined;
  }
  /**
   * This uses the refreshToken to retrieve a new session
   * @param {CognitoRefreshToken} refreshToken A previous session's refresh token.
   * @param {nodeCallback<CognitoUserSession>} callback Called on success or error.
   * @param {ClientMetadata} clientMetadata object which is passed from client to Cognito Lambda trigger
   * @returns {void}
   */
  ;

  _proto.refreshSession = function refreshSession(refreshToken, callback, clientMetadata) {
    var _this15 = this;

    var wrappedCallback = this.pool.wrapRefreshSessionCallback ? this.pool.wrapRefreshSessionCallback(callback) : callback;
    var authParameters = {};
    authParameters.REFRESH_TOKEN = refreshToken.getToken();
    var keyPrefix = "CognitoIdentityServiceProvider." + this.pool.getClientId();
    var lastUserKey = keyPrefix + ".LastAuthUser";

    if (this.storage.getItem(lastUserKey)) {
      this.username = this.storage.getItem(lastUserKey);
      var deviceKeyKey = keyPrefix + "." + this.username + ".deviceKey";
      this.deviceKey = this.storage.getItem(deviceKeyKey);
      authParameters.DEVICE_KEY = this.deviceKey;
    }

    var jsonReq = {
      ClientId: this.pool.getClientId(),
      AuthFlow: 'REFRESH_TOKEN_AUTH',
      AuthParameters: authParameters,
      ClientMetadata: clientMetadata
    };

    if (this.getUserContextData()) {
      jsonReq.UserContextData = this.getUserContextData();
    }

    this.client.request('InitiateAuth', jsonReq, function (err, authResult) {
      if (err) {
        if (err.code === 'NotAuthorizedException') {
          _this15.clearCachedUser();
        }

        return wrappedCallback(err, null);
      }

      if (authResult) {
        var authenticationResult = authResult.AuthenticationResult;

        if (!Object.prototype.hasOwnProperty.call(authenticationResult, 'RefreshToken')) {
          authenticationResult.RefreshToken = refreshToken.getToken();
        }

        _this15.signInUserSession = _this15.getCognitoUserSession(authenticationResult);

        _this15.cacheTokens();

        return wrappedCallback(null, _this15.signInUserSession);
      }

      return undefined;
    });
  }
  /**
   * This is used to save the session tokens to local storage
   * @returns {void}
   */
  ;

  _proto.cacheTokens = function cacheTokens() {
    var keyPrefix = "CognitoIdentityServiceProvider." + this.pool.getClientId();
    var idTokenKey = keyPrefix + "." + this.username + ".idToken";
    var accessTokenKey = keyPrefix + "." + this.username + ".accessToken";
    var refreshTokenKey = keyPrefix + "." + this.username + ".refreshToken";
    var clockDriftKey = keyPrefix + "." + this.username + ".clockDrift";
    var lastUserKey = keyPrefix + ".LastAuthUser";
    this.storage.setItem(idTokenKey, this.signInUserSession.getIdToken().getJwtToken());
    this.storage.setItem(accessTokenKey, this.signInUserSession.getAccessToken().getJwtToken());
    this.storage.setItem(refreshTokenKey, this.signInUserSession.getRefreshToken().getToken());
    this.storage.setItem(clockDriftKey, "" + this.signInUserSession.getClockDrift());
    this.storage.setItem(lastUserKey, this.username);
  }
  /**
   * This is to cache user data
   */
  ;

  _proto.cacheUserData = function cacheUserData(userData) {
    this.storage.setItem(this.userDataKey, JSON.stringify(userData));
  }
  /**
   * This is to remove cached user data
   */
  ;

  _proto.clearCachedUserData = function clearCachedUserData() {
    this.storage.removeItem(this.userDataKey);
  };

  _proto.clearCachedUser = function clearCachedUser() {
    this.clearCachedTokens();
    this.clearCachedUserData();
  }
  /**
   * This is used to cache the device key and device group and device password
   * @returns {void}
   */
  ;

  _proto.cacheDeviceKeyAndPassword = function cacheDeviceKeyAndPassword() {
    var keyPrefix = "CognitoIdentityServiceProvider." + this.pool.getClientId() + "." + this.username;
    var deviceKeyKey = keyPrefix + ".deviceKey";
    var randomPasswordKey = keyPrefix + ".randomPasswordKey";
    var deviceGroupKeyKey = keyPrefix + ".deviceGroupKey";
    this.storage.setItem(deviceKeyKey, this.deviceKey);
    this.storage.setItem(randomPasswordKey, this.randomPassword);
    this.storage.setItem(deviceGroupKeyKey, this.deviceGroupKey);
  }
  /**
   * This is used to get current device key and device group and device password
   * @returns {void}
   */
  ;

  _proto.getCachedDeviceKeyAndPassword = function getCachedDeviceKeyAndPassword() {
    var keyPrefix = "CognitoIdentityServiceProvider." + this.pool.getClientId() + "." + this.username;
    var deviceKeyKey = keyPrefix + ".deviceKey";
    var randomPasswordKey = keyPrefix + ".randomPasswordKey";
    var deviceGroupKeyKey = keyPrefix + ".deviceGroupKey";

    if (this.storage.getItem(deviceKeyKey)) {
      this.deviceKey = this.storage.getItem(deviceKeyKey);
      this.randomPassword = this.storage.getItem(randomPasswordKey);
      this.deviceGroupKey = this.storage.getItem(deviceGroupKeyKey);
    }
  }
  /**
   * This is used to clear the device key info from local storage
   * @returns {void}
   */
  ;

  _proto.clearCachedDeviceKeyAndPassword = function clearCachedDeviceKeyAndPassword() {
    var keyPrefix = "CognitoIdentityServiceProvider." + this.pool.getClientId() + "." + this.username;
    var deviceKeyKey = keyPrefix + ".deviceKey";
    var randomPasswordKey = keyPrefix + ".randomPasswordKey";
    var deviceGroupKeyKey = keyPrefix + ".deviceGroupKey";
    this.storage.removeItem(deviceKeyKey);
    this.storage.removeItem(randomPasswordKey);
    this.storage.removeItem(deviceGroupKeyKey);
  }
  /**
   * This is used to clear the session tokens from local storage
   * @returns {void}
   */
  ;

  _proto.clearCachedTokens = function clearCachedTokens() {
    var keyPrefix = "CognitoIdentityServiceProvider." + this.pool.getClientId();
    var idTokenKey = keyPrefix + "." + this.username + ".idToken";
    var accessTokenKey = keyPrefix + "." + this.username + ".accessToken";
    var refreshTokenKey = keyPrefix + "." + this.username + ".refreshToken";
    var lastUserKey = keyPrefix + ".LastAuthUser";
    var clockDriftKey = keyPrefix + "." + this.username + ".clockDrift";
    this.storage.removeItem(idTokenKey);
    this.storage.removeItem(accessTokenKey);
    this.storage.removeItem(refreshTokenKey);
    this.storage.removeItem(lastUserKey);
    this.storage.removeItem(clockDriftKey);
  }
  /**
   * This is used to build a user session from tokens retrieved in the authentication result
   * @param {object} authResult Successful auth response from server.
   * @returns {CognitoUserSession} The new user session.
   * @private
   */
  ;

  _proto.getCognitoUserSession = function getCognitoUserSession(authResult) {
    var idToken = new _CognitoIdToken__WEBPACK_IMPORTED_MODULE_8__["default"](authResult);
    var accessToken = new _CognitoAccessToken__WEBPACK_IMPORTED_MODULE_7__["default"](authResult);
    var refreshToken = new _CognitoRefreshToken__WEBPACK_IMPORTED_MODULE_9__["default"](authResult);
    var sessionData = {
      IdToken: idToken,
      AccessToken: accessToken,
      RefreshToken: refreshToken
    };
    return new _CognitoUserSession__WEBPACK_IMPORTED_MODULE_10__["default"](sessionData);
  }
  /**
   * This is used to initiate a forgot password request
   * @param {object} callback Result callback map.
   * @param {onFailure} callback.onFailure Called on any error.
   * @param {inputVerificationCode?} callback.inputVerificationCode
   *    Optional callback raised instead of onSuccess with response data.
   * @param {onSuccess} callback.onSuccess Called on success.
   * @param {ClientMetadata} clientMetadata object which is passed from client to Cognito Lambda trigger
   * @returns {void}
   */
  ;

  _proto.forgotPassword = function forgotPassword(callback, clientMetadata) {
    var jsonReq = {
      ClientId: this.pool.getClientId(),
      Username: this.username,
      ClientMetadata: clientMetadata
    };

    if (this.getUserContextData()) {
      jsonReq.UserContextData = this.getUserContextData();
    }

    this.client.request('ForgotPassword', jsonReq, function (err, data) {
      if (err) {
        return callback.onFailure(err);
      }

      if (typeof callback.inputVerificationCode === 'function') {
        return callback.inputVerificationCode(data);
      }

      return callback.onSuccess(data);
    });
  }
  /**
   * This is used to confirm a new password using a confirmationCode
   * @param {string} confirmationCode Code entered by user.
   * @param {string} newPassword Confirm new password.
   * @param {object} callback Result callback map.
   * @param {onFailure} callback.onFailure Called on any error.
   * @param {onSuccess<void>} callback.onSuccess Called on success.
   * @param {ClientMetadata} clientMetadata object which is passed from client to Cognito Lambda trigger
   * @returns {void}
   */
  ;

  _proto.confirmPassword = function confirmPassword(confirmationCode, newPassword, callback, clientMetadata) {
    var jsonReq = {
      ClientId: this.pool.getClientId(),
      Username: this.username,
      ConfirmationCode: confirmationCode,
      Password: newPassword,
      ClientMetadata: clientMetadata
    };

    if (this.getUserContextData()) {
      jsonReq.UserContextData = this.getUserContextData();
    }

    this.client.request('ConfirmForgotPassword', jsonReq, function (err) {
      if (err) {
        return callback.onFailure(err);
      }

      return callback.onSuccess();
    });
  }
  /**
   * This is used to initiate an attribute confirmation request
   * @param {string} attributeName User attribute that needs confirmation.
   * @param {object} callback Result callback map.
   * @param {onFailure} callback.onFailure Called on any error.
   * @param {inputVerificationCode} callback.inputVerificationCode Called on success.
   * @param {ClientMetadata} clientMetadata object which is passed from client to Cognito Lambda trigger
   * @returns {void}
   */
  ;

  _proto.getAttributeVerificationCode = function getAttributeVerificationCode(attributeName, callback, clientMetadata) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid()) {
      return callback.onFailure(new Error('User is not authenticated'));
    }

    this.client.request('GetUserAttributeVerificationCode', {
      AttributeName: attributeName,
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      ClientMetadata: clientMetadata
    }, function (err, data) {
      if (err) {
        return callback.onFailure(err);
      }

      if (typeof callback.inputVerificationCode === 'function') {
        return callback.inputVerificationCode(data);
      }

      return callback.onSuccess();
    });
    return undefined;
  }
  /**
   * This is used to confirm an attribute using a confirmation code
   * @param {string} attributeName Attribute being confirmed.
   * @param {string} confirmationCode Code entered by user.
   * @param {object} callback Result callback map.
   * @param {onFailure} callback.onFailure Called on any error.
   * @param {onSuccess<string>} callback.onSuccess Called on success.
   * @returns {void}
   */
  ;

  _proto.verifyAttribute = function verifyAttribute(attributeName, confirmationCode, callback) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid()) {
      return callback.onFailure(new Error('User is not authenticated'));
    }

    this.client.request('VerifyUserAttribute', {
      AttributeName: attributeName,
      Code: confirmationCode,
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function (err) {
      if (err) {
        return callback.onFailure(err);
      }

      return callback.onSuccess('SUCCESS');
    });
    return undefined;
  }
  /**
   * This is used to get the device information using the current device key
   * @param {object} callback Result callback map.
   * @param {onFailure} callback.onFailure Called on any error.
   * @param {onSuccess<*>} callback.onSuccess Called on success with device data.
   * @returns {void}
   */
  ;

  _proto.getDevice = function getDevice(callback) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid()) {
      return callback.onFailure(new Error('User is not authenticated'));
    }

    this.client.request('GetDevice', {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      DeviceKey: this.deviceKey
    }, function (err, data) {
      if (err) {
        return callback.onFailure(err);
      }

      return callback.onSuccess(data);
    });
    return undefined;
  }
  /**
   * This is used to forget a specific device
   * @param {string} deviceKey Device key.
   * @param {object} callback Result callback map.
   * @param {onFailure} callback.onFailure Called on any error.
   * @param {onSuccess<string>} callback.onSuccess Called on success.
   * @returns {void}
   */
  ;

  _proto.forgetSpecificDevice = function forgetSpecificDevice(deviceKey, callback) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid()) {
      return callback.onFailure(new Error('User is not authenticated'));
    }

    this.client.request('ForgetDevice', {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      DeviceKey: deviceKey
    }, function (err) {
      if (err) {
        return callback.onFailure(err);
      }

      return callback.onSuccess('SUCCESS');
    });
    return undefined;
  }
  /**
   * This is used to forget the current device
   * @param {object} callback Result callback map.
   * @param {onFailure} callback.onFailure Called on any error.
   * @param {onSuccess<string>} callback.onSuccess Called on success.
   * @returns {void}
   */
  ;

  _proto.forgetDevice = function forgetDevice(callback) {
    var _this16 = this;

    this.forgetSpecificDevice(this.deviceKey, {
      onFailure: callback.onFailure,
      onSuccess: function onSuccess(result) {
        _this16.deviceKey = null;
        _this16.deviceGroupKey = null;
        _this16.randomPassword = null;

        _this16.clearCachedDeviceKeyAndPassword();

        return callback.onSuccess(result);
      }
    });
  }
  /**
   * This is used to set the device status as remembered
   * @param {object} callback Result callback map.
   * @param {onFailure} callback.onFailure Called on any error.
   * @param {onSuccess<string>} callback.onSuccess Called on success.
   * @returns {void}
   */
  ;

  _proto.setDeviceStatusRemembered = function setDeviceStatusRemembered(callback) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid()) {
      return callback.onFailure(new Error('User is not authenticated'));
    }

    this.client.request('UpdateDeviceStatus', {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      DeviceKey: this.deviceKey,
      DeviceRememberedStatus: 'remembered'
    }, function (err) {
      if (err) {
        return callback.onFailure(err);
      }

      return callback.onSuccess('SUCCESS');
    });
    return undefined;
  }
  /**
   * This is used to set the device status as not remembered
   * @param {object} callback Result callback map.
   * @param {onFailure} callback.onFailure Called on any error.
   * @param {onSuccess<string>} callback.onSuccess Called on success.
   * @returns {void}
   */
  ;

  _proto.setDeviceStatusNotRemembered = function setDeviceStatusNotRemembered(callback) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid()) {
      return callback.onFailure(new Error('User is not authenticated'));
    }

    this.client.request('UpdateDeviceStatus', {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      DeviceKey: this.deviceKey,
      DeviceRememberedStatus: 'not_remembered'
    }, function (err) {
      if (err) {
        return callback.onFailure(err);
      }

      return callback.onSuccess('SUCCESS');
    });
    return undefined;
  }
  /**
   * This is used to list all devices for a user
   *
   * @param {int} limit the number of devices returned in a call
   * @param {string | null} paginationToken the pagination token in case any was returned before
   * @param {object} callback Result callback map.
   * @param {onFailure} callback.onFailure Called on any error.
   * @param {onSuccess<*>} callback.onSuccess Called on success with device list.
   * @returns {void}
   */
  ;

  _proto.listDevices = function listDevices(limit, paginationToken, callback) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid()) {
      return callback.onFailure(new Error('User is not authenticated'));
    }

    var requestParams = {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      Limit: limit
    };

    if (paginationToken) {
      requestParams.PaginationToken = paginationToken;
    }

    this.client.request('ListDevices', requestParams, function (err, data) {
      if (err) {
        return callback.onFailure(err);
      }

      return callback.onSuccess(data);
    });
    return undefined;
  }
  /**
   * This is used to globally revoke all tokens issued to a user
   * @param {object} callback Result callback map.
   * @param {onFailure} callback.onFailure Called on any error.
   * @param {onSuccess<string>} callback.onSuccess Called on success.
   * @returns {void}
   */
  ;

  _proto.globalSignOut = function globalSignOut(callback) {
    var _this17 = this;

    if (this.signInUserSession == null || !this.signInUserSession.isValid()) {
      return callback.onFailure(new Error('User is not authenticated'));
    }

    this.client.request('GlobalSignOut', {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function (err) {
      if (err) {
        return callback.onFailure(err);
      }

      _this17.clearCachedUser();

      return callback.onSuccess('SUCCESS');
    });
    return undefined;
  }
  /**
   * This is used for the user to signOut of the application and clear the cached tokens.
   * @returns {void}
   */
  ;

  _proto.signOut = function signOut(revokeTokenCallback) {
    var _this18 = this; // If tokens won't be revoked, we just clean the client data.


    if (!revokeTokenCallback || typeof revokeTokenCallback !== "function") {
      this.cleanClientData();
      return;
    }

    this.getSession(function (error, _session) {
      if (error) {
        return revokeTokenCallback(error);
      }

      _this18.revokeTokens(function (err) {
        _this18.cleanClientData();

        revokeTokenCallback(err);
      });
    });
  };

  _proto.revokeTokens = function revokeTokens(revokeTokenCallback) {
    if (revokeTokenCallback === void 0) {
      revokeTokenCallback = function revokeTokenCallback() {};
    }

    if (typeof revokeTokenCallback !== 'function') {
      throw new Error('Invalid revokeTokenCallback. It should be a function.');
    }

    var tokensToBeRevoked = [];

    if (!this.signInUserSession) {
      var error = new Error('User is not authenticated');
      return revokeTokenCallback(error);
    }

    if (!this.signInUserSession.getAccessToken()) {
      var _error = new Error('No Access token available');

      return revokeTokenCallback(_error);
    }

    var refreshToken = this.signInUserSession.getRefreshToken().getToken();
    var accessToken = this.signInUserSession.getAccessToken();

    if (this.isSessionRevocable(accessToken)) {
      if (refreshToken) {
        return this.revokeToken({
          token: refreshToken,
          callback: revokeTokenCallback
        });
      }
    }

    revokeTokenCallback();
  };

  _proto.isSessionRevocable = function isSessionRevocable(token) {
    if (token && typeof token.decodePayload === 'function') {
      try {
        var _token$decodePayload = token.decodePayload(),
            origin_jti = _token$decodePayload.origin_jti;

        return !!origin_jti;
      } catch (err) {// Nothing to do, token doesnt have origin_jti claim
      }
    }

    return false;
  };

  _proto.cleanClientData = function cleanClientData() {
    this.signInUserSession = null;
    this.clearCachedUser();
  };

  _proto.revokeToken = function revokeToken(_ref2) {
    var token = _ref2.token,
        callback = _ref2.callback;
    this.client.requestWithRetry('RevokeToken', {
      Token: token,
      ClientId: this.pool.getClientId()
    }, function (err) {
      if (err) {
        return callback(err);
      }

      callback();
    });
  }
  /**
   * This is used by a user trying to select a given MFA
   * @param {string} answerChallenge the mfa the user wants
   * @param {nodeCallback<string>} callback Called on success or error.
   * @returns {void}
   */
  ;

  _proto.sendMFASelectionAnswer = function sendMFASelectionAnswer(answerChallenge, callback) {
    var _this19 = this;

    var challengeResponses = {};
    challengeResponses.USERNAME = this.username;
    challengeResponses.ANSWER = answerChallenge;
    var jsonReq = {
      ChallengeName: 'SELECT_MFA_TYPE',
      ChallengeResponses: challengeResponses,
      ClientId: this.pool.getClientId(),
      Session: this.Session
    };

    if (this.getUserContextData()) {
      jsonReq.UserContextData = this.getUserContextData();
    }

    this.client.request('RespondToAuthChallenge', jsonReq, function (err, data) {
      if (err) {
        return callback.onFailure(err);
      }

      _this19.Session = data.Session;

      if (answerChallenge === 'SMS_MFA') {
        return callback.mfaRequired(data.ChallengeName, data.ChallengeParameters);
      }

      if (answerChallenge === 'SOFTWARE_TOKEN_MFA') {
        return callback.totpRequired(data.ChallengeName, data.ChallengeParameters);
      }

      return undefined;
    });
  }
  /**
   * This returns the user context data for advanced security feature.
   * @returns {string} the user context data from CognitoUserPool
   */
  ;

  _proto.getUserContextData = function getUserContextData() {
    var pool = this.pool;
    return pool.getUserContextData(this.username);
  }
  /**
   * This is used by an authenticated or a user trying to authenticate to associate a TOTP MFA
   * @param {nodeCallback<string>} callback Called on success or error.
   * @returns {void}
   */
  ;

  _proto.associateSoftwareToken = function associateSoftwareToken(callback) {
    var _this20 = this;

    if (!(this.signInUserSession != null && this.signInUserSession.isValid())) {
      this.client.request('AssociateSoftwareToken', {
        Session: this.Session
      }, function (err, data) {
        if (err) {
          return callback.onFailure(err);
        }

        _this20.Session = data.Session;
        return callback.associateSecretCode(data.SecretCode);
      });
    } else {
      this.client.request('AssociateSoftwareToken', {
        AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
      }, function (err, data) {
        if (err) {
          return callback.onFailure(err);
        }

        return callback.associateSecretCode(data.SecretCode);
      });
    }
  }
  /**
   * This is used by an authenticated or a user trying to authenticate to verify a TOTP MFA
   * @param {string} totpCode The MFA code entered by the user.
   * @param {string} friendlyDeviceName The device name we are assigning to the device.
   * @param {nodeCallback<string>} callback Called on success or error.
   * @returns {void}
   */
  ;

  _proto.verifySoftwareToken = function verifySoftwareToken(totpCode, friendlyDeviceName, callback) {
    var _this21 = this;

    if (!(this.signInUserSession != null && this.signInUserSession.isValid())) {
      this.client.request('VerifySoftwareToken', {
        Session: this.Session,
        UserCode: totpCode,
        FriendlyDeviceName: friendlyDeviceName
      }, function (err, data) {
        if (err) {
          return callback.onFailure(err);
        }

        _this21.Session = data.Session;
        var challengeResponses = {};
        challengeResponses.USERNAME = _this21.username;
        var jsonReq = {
          ChallengeName: 'MFA_SETUP',
          ClientId: _this21.pool.getClientId(),
          ChallengeResponses: challengeResponses,
          Session: _this21.Session
        };

        if (_this21.getUserContextData()) {
          jsonReq.UserContextData = _this21.getUserContextData();
        }

        _this21.client.request('RespondToAuthChallenge', jsonReq, function (errRespond, dataRespond) {
          if (errRespond) {
            return callback.onFailure(errRespond);
          }

          _this21.signInUserSession = _this21.getCognitoUserSession(dataRespond.AuthenticationResult);

          _this21.cacheTokens();

          return callback.onSuccess(_this21.signInUserSession);
        });

        return undefined;
      });
    } else {
      this.client.request('VerifySoftwareToken', {
        AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
        UserCode: totpCode,
        FriendlyDeviceName: friendlyDeviceName
      }, function (err, data) {
        if (err) {
          return callback.onFailure(err);
        }

        return callback.onSuccess(data);
      });
    }
  };

  return CognitoUser;
}();



/***/ }),

/***/ "../amazon-cognito-identity-js/es/CognitoUserAttribute.js":
/*!****************************************************************!*\
  !*** ../amazon-cognito-identity-js/es/CognitoUserAttribute.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CognitoUserAttribute; });
/*!
 * Copyright 2016 Amazon.com,
 * Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the
 * License. A copy of the License is located at
 *
 *     http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, express or implied. See the License
 * for the specific language governing permissions and
 * limitations under the License.
 */

/** @class */
var CognitoUserAttribute = /*#__PURE__*/function () {
  /**
   * Constructs a new CognitoUserAttribute object
   * @param {string=} Name The record's name
   * @param {string=} Value The record's value
   */
  function CognitoUserAttribute(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        Name = _ref.Name,
        Value = _ref.Value;

    this.Name = Name || '';
    this.Value = Value || '';
  }
  /**
   * @returns {string} the record's value.
   */


  var _proto = CognitoUserAttribute.prototype;

  _proto.getValue = function getValue() {
    return this.Value;
  }
  /**
   * Sets the record's value.
   * @param {string} value The new value.
   * @returns {CognitoUserAttribute} The record for method chaining.
   */
  ;

  _proto.setValue = function setValue(value) {
    this.Value = value;
    return this;
  }
  /**
   * @returns {string} the record's name.
   */
  ;

  _proto.getName = function getName() {
    return this.Name;
  }
  /**
   * Sets the record's name
   * @param {string} name The new name.
   * @returns {CognitoUserAttribute} The record for method chaining.
   */
  ;

  _proto.setName = function setName(name) {
    this.Name = name;
    return this;
  }
  /**
   * @returns {string} a string representation of the record.
   */
  ;

  _proto.toString = function toString() {
    return JSON.stringify(this);
  }
  /**
   * @returns {object} a flat object representing the record.
   */
  ;

  _proto.toJSON = function toJSON() {
    return {
      Name: this.Name,
      Value: this.Value
    };
  };

  return CognitoUserAttribute;
}();



/***/ }),

/***/ "../amazon-cognito-identity-js/es/CognitoUserPool.js":
/*!***********************************************************!*\
  !*** ../amazon-cognito-identity-js/es/CognitoUserPool.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CognitoUserPool; });
/* harmony import */ var _Client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Client */ "../amazon-cognito-identity-js/es/Client.js");
/* harmony import */ var _CognitoUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CognitoUser */ "../amazon-cognito-identity-js/es/CognitoUser.js");
/* harmony import */ var _StorageHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StorageHelper */ "../amazon-cognito-identity-js/es/StorageHelper.js");
/*!
 * Copyright 2016 Amazon.com,
 * Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the
 * License. A copy of the License is located at
 *
 *     http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, express or implied. See the License
 * for the specific language governing permissions and
 * limitations under the License.
 */



/** @class */

var CognitoUserPool = /*#__PURE__*/function () {
  /**
   * Constructs a new CognitoUserPool object
   * @param {object} data Creation options.
   * @param {string} data.UserPoolId Cognito user pool id.
   * @param {string} data.ClientId User pool application client id.
   * @param {string} data.endpoint Optional custom service endpoint.
   * @param {object} data.fetchOptions Optional options for fetch API.
   *        (only credentials option is supported)
   * @param {object} data.Storage Optional storage object.
   * @param {boolean} data.AdvancedSecurityDataCollectionFlag Optional:
   *        boolean flag indicating if the data collection is enabled
   *        to support cognito advanced security features. By default, this
   *        flag is set to true.
   */
  function CognitoUserPool(data, wrapRefreshSessionCallback) {
    var _ref = data || {},
        UserPoolId = _ref.UserPoolId,
        ClientId = _ref.ClientId,
        endpoint = _ref.endpoint,
        fetchOptions = _ref.fetchOptions,
        AdvancedSecurityDataCollectionFlag = _ref.AdvancedSecurityDataCollectionFlag;

    if (!UserPoolId || !ClientId) {
      throw new Error('Both UserPoolId and ClientId are required.');
    }

    if (!/^[\w-]+_.+$/.test(UserPoolId)) {
      throw new Error('Invalid UserPoolId format.');
    }

    var region = UserPoolId.split('_')[0];
    this.userPoolId = UserPoolId;
    this.clientId = ClientId;
    this.client = new _Client__WEBPACK_IMPORTED_MODULE_0__["default"](region, endpoint, fetchOptions);
    /**
     * By default, AdvancedSecurityDataCollectionFlag is set to true,
     * if no input value is provided.
     */

    this.advancedSecurityDataCollectionFlag = AdvancedSecurityDataCollectionFlag !== false;
    this.storage = data.Storage || new _StorageHelper__WEBPACK_IMPORTED_MODULE_2__["default"]().getStorage();

    if (wrapRefreshSessionCallback) {
      this.wrapRefreshSessionCallback = wrapRefreshSessionCallback;
    }
  }
  /**
   * @returns {string} the user pool id
   */


  var _proto = CognitoUserPool.prototype;

  _proto.getUserPoolId = function getUserPoolId() {
    return this.userPoolId;
  }
  /**
   * @returns {string} the client id
   */
  ;

  _proto.getClientId = function getClientId() {
    return this.clientId;
  }
  /**
   * @typedef {object} SignUpResult
   * @property {CognitoUser} user New user.
   * @property {bool} userConfirmed If the user is already confirmed.
   */

  /**
   * method for signing up a user
   * @param {string} username User's username.
   * @param {string} password Plain-text initial password entered by user.
   * @param {(AttributeArg[])=} userAttributes New user attributes.
   * @param {(AttributeArg[])=} validationData Application metadata.
   * @param {(AttributeArg[])=} clientMetadata Client metadata.
   * @param {nodeCallback<SignUpResult>} callback Called on error or with the new user.
   * @param {ClientMetadata} clientMetadata object which is passed from client to Cognito Lambda trigger
   * @returns {void}
   */
  ;

  _proto.signUp = function signUp(username, password, userAttributes, validationData, callback, clientMetadata) {
    var _this = this;

    var jsonReq = {
      ClientId: this.clientId,
      Username: username,
      Password: password,
      UserAttributes: userAttributes,
      ValidationData: validationData,
      ClientMetadata: clientMetadata
    };

    if (this.getUserContextData(username)) {
      jsonReq.UserContextData = this.getUserContextData(username);
    }

    this.client.request('SignUp', jsonReq, function (err, data) {
      if (err) {
        return callback(err, null);
      }

      var cognitoUser = {
        Username: username,
        Pool: _this,
        Storage: _this.storage
      };
      var returnData = {
        user: new _CognitoUser__WEBPACK_IMPORTED_MODULE_1__["default"](cognitoUser),
        userConfirmed: data.UserConfirmed,
        userSub: data.UserSub,
        codeDeliveryDetails: data.CodeDeliveryDetails
      };
      return callback(null, returnData);
    });
  }
  /**
   * method for getting the current user of the application from the local storage
   *
   * @returns {CognitoUser} the user retrieved from storage
   */
  ;

  _proto.getCurrentUser = function getCurrentUser() {
    var lastUserKey = "CognitoIdentityServiceProvider." + this.clientId + ".LastAuthUser";
    var lastAuthUser = this.storage.getItem(lastUserKey);

    if (lastAuthUser) {
      var cognitoUser = {
        Username: lastAuthUser,
        Pool: this,
        Storage: this.storage
      };
      return new _CognitoUser__WEBPACK_IMPORTED_MODULE_1__["default"](cognitoUser);
    }

    return null;
  }
  /**
   * This method returns the encoded data string used for cognito advanced security feature.
   * This would be generated only when developer has included the JS used for collecting the
   * data on their client. Please refer to documentation to know more about using AdvancedSecurity
   * features
   * @param {string} username the username for the context data
   * @returns {string} the user context data
   **/
  ;

  _proto.getUserContextData = function getUserContextData(username) {
    if (typeof AmazonCognitoAdvancedSecurityData === 'undefined') {
      return undefined;
    }
    /* eslint-disable */


    var amazonCognitoAdvancedSecurityDataConst = AmazonCognitoAdvancedSecurityData;
    /* eslint-enable */

    if (this.advancedSecurityDataCollectionFlag) {
      var advancedSecurityData = amazonCognitoAdvancedSecurityDataConst.getData(username, this.userPoolId, this.clientId);

      if (advancedSecurityData) {
        var userContextData = {
          EncodedData: advancedSecurityData
        };
        return userContextData;
      }
    }

    return {};
  };

  return CognitoUserPool;
}();



/***/ }),

/***/ "../amazon-cognito-identity-js/es/CognitoUserSession.js":
/*!**************************************************************!*\
  !*** ../amazon-cognito-identity-js/es/CognitoUserSession.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CognitoUserSession; });
/*!
 * Copyright 2016 Amazon.com,
 * Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the
 * License. A copy of the License is located at
 *
 *     http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, express or implied. See the License
 * for the specific language governing permissions and
 * limitations under the License.
 */

/** @class */
var CognitoUserSession = /*#__PURE__*/function () {
  /**
   * Constructs a new CognitoUserSession object
   * @param {CognitoIdToken} IdToken The session's Id token.
   * @param {CognitoRefreshToken=} RefreshToken The session's refresh token.
   * @param {CognitoAccessToken} AccessToken The session's access token.
   * @param {int} ClockDrift The saved computer's clock drift or undefined to force calculation.
   */
  function CognitoUserSession(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        IdToken = _ref.IdToken,
        RefreshToken = _ref.RefreshToken,
        AccessToken = _ref.AccessToken,
        ClockDrift = _ref.ClockDrift;

    if (AccessToken == null || IdToken == null) {
      throw new Error('Id token and Access Token must be present.');
    }

    this.idToken = IdToken;
    this.refreshToken = RefreshToken;
    this.accessToken = AccessToken;
    this.clockDrift = ClockDrift === undefined ? this.calculateClockDrift() : ClockDrift;
  }
  /**
   * @returns {CognitoIdToken} the session's Id token
   */


  var _proto = CognitoUserSession.prototype;

  _proto.getIdToken = function getIdToken() {
    return this.idToken;
  }
  /**
   * @returns {CognitoRefreshToken} the session's refresh token
   */
  ;

  _proto.getRefreshToken = function getRefreshToken() {
    return this.refreshToken;
  }
  /**
   * @returns {CognitoAccessToken} the session's access token
   */
  ;

  _proto.getAccessToken = function getAccessToken() {
    return this.accessToken;
  }
  /**
   * @returns {int} the session's clock drift
   */
  ;

  _proto.getClockDrift = function getClockDrift() {
    return this.clockDrift;
  }
  /**
   * @returns {int} the computer's clock drift
   */
  ;

  _proto.calculateClockDrift = function calculateClockDrift() {
    var now = Math.floor(new Date() / 1000);
    var iat = Math.min(this.accessToken.getIssuedAt(), this.idToken.getIssuedAt());
    return now - iat;
  }
  /**
   * Checks to see if the session is still valid based on session expiry information found
   * in tokens and the current time (adjusted with clock drift)
   * @returns {boolean} if the session is still valid
   */
  ;

  _proto.isValid = function isValid() {
    var now = Math.floor(new Date() / 1000);
    var adjusted = now - this.clockDrift;
    return adjusted < this.accessToken.getExpiration() && adjusted < this.idToken.getExpiration();
  };

  return CognitoUserSession;
}();



/***/ }),

/***/ "../amazon-cognito-identity-js/es/CookieStorage.js":
/*!*********************************************************!*\
  !*** ../amazon-cognito-identity-js/es/CookieStorage.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CookieStorage; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "../../node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);

/** @class */

var CookieStorage = /*#__PURE__*/function () {
  /**
   * Constructs a new CookieStorage object
   * @param {object} data Creation options.
   * @param {string} data.domain Cookies domain (mandatory).
   * @param {string} data.path Cookies path (default: '/')
   * @param {integer} data.expires Cookie expiration (in days, default: 365)
   * @param {boolean} data.secure Cookie secure flag (default: true)
   * @param {string} data.sameSite Cookie request behaviour (default: null)
   */
  function CookieStorage(data) {
    if (data.domain) {
      this.domain = data.domain;
    } else {
      throw new Error('The domain of cookieStorage can not be undefined.');
    }

    if (data.path) {
      this.path = data.path;
    } else {
      this.path = '/';
    }

    if (Object.prototype.hasOwnProperty.call(data, 'expires')) {
      this.expires = data.expires;
    } else {
      this.expires = 365;
    }

    if (Object.prototype.hasOwnProperty.call(data, 'secure')) {
      this.secure = data.secure;
    } else {
      this.secure = true;
    }

    if (Object.prototype.hasOwnProperty.call(data, 'sameSite')) {
      if (!['strict', 'lax', 'none'].includes(data.sameSite)) {
        throw new Error('The sameSite value of cookieStorage must be "lax", "strict" or "none".');
      }

      if (data.sameSite === 'none' && !this.secure) {
        throw new Error('sameSite = None requires the Secure attribute in latest browser versions.');
      }

      this.sameSite = data.sameSite;
    } else {
      this.sameSite = null;
    }
  }
  /**
   * This is used to set a specific item in storage
   * @param {string} key - the key for the item
   * @param {object} value - the value
   * @returns {string} value that was set
   */


  var _proto = CookieStorage.prototype;

  _proto.setItem = function setItem(key, value) {
    var options = {
      path: this.path,
      expires: this.expires,
      domain: this.domain,
      secure: this.secure
    };

    if (this.sameSite) {
      options.sameSite = this.sameSite;
    }

    js_cookie__WEBPACK_IMPORTED_MODULE_0__["set"](key, value, options);
    return js_cookie__WEBPACK_IMPORTED_MODULE_0__["get"](key);
  }
  /**
   * This is used to get a specific key from storage
   * @param {string} key - the key for the item
   * This is used to clear the storage
   * @returns {string} the data item
   */
  ;

  _proto.getItem = function getItem(key) {
    return js_cookie__WEBPACK_IMPORTED_MODULE_0__["get"](key);
  }
  /**
   * This is used to remove an item from storage
   * @param {string} key - the key being set
   * @returns {string} value - value that was deleted
   */
  ;

  _proto.removeItem = function removeItem(key) {
    var options = {
      path: this.path,
      expires: this.expires,
      domain: this.domain,
      secure: this.secure
    };

    if (this.sameSite) {
      options.sameSite = this.sameSite;
    }

    return js_cookie__WEBPACK_IMPORTED_MODULE_0__["remove"](key, options);
  }
  /**
   * This is used to clear the storage of optional
   * items that were previously set
   * @returns {} an empty object
   */
  ;

  _proto.clear = function clear() {
    var cookies = js_cookie__WEBPACK_IMPORTED_MODULE_0__["get"]();
    var numKeys = Object.keys(cookies).length;

    for (var index = 0; index < numKeys; ++index) {
      this.removeItem(Object.keys(cookies)[index]);
    }

    return {};
  };

  return CookieStorage;
}();



/***/ }),

/***/ "../amazon-cognito-identity-js/es/DateHelper.js":
/*!******************************************************!*\
  !*** ../amazon-cognito-identity-js/es/DateHelper.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DateHelper; });
/*!
 * Copyright 2016 Amazon.com,
 * Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the
 * License. A copy of the License is located at
 *
 *     http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, express or implied. See the License
 * for the specific language governing permissions and
 * limitations under the License.
 */
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var weekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
/** @class */

var DateHelper = /*#__PURE__*/function () {
  function DateHelper() {}

  var _proto = DateHelper.prototype;
  /**
   * @returns {string} The current time in "ddd MMM D HH:mm:ss UTC YYYY" format.
   */

  _proto.getNowString = function getNowString() {
    var now = new Date();
    var weekDay = weekNames[now.getUTCDay()];
    var month = monthNames[now.getUTCMonth()];
    var day = now.getUTCDate();
    var hours = now.getUTCHours();

    if (hours < 10) {
      hours = "0" + hours;
    }

    var minutes = now.getUTCMinutes();

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    var seconds = now.getUTCSeconds();

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    var year = now.getUTCFullYear(); // ddd MMM D HH:mm:ss UTC YYYY

    var dateNow = weekDay + " " + month + " " + day + " " + hours + ":" + minutes + ":" + seconds + " UTC " + year;
    return dateNow;
  };

  return DateHelper;
}();



/***/ }),

/***/ "../amazon-cognito-identity-js/es/Platform/index.js":
/*!**********************************************************!*\
  !*** ../amazon-cognito-identity-js/es/Platform/index.js ***!
  \**********************************************************/
/*! exports provided: Platform, getUserAgent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return Platform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserAgent", function() { return getUserAgent; });
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version */ "../amazon-cognito-identity-js/es/Platform/version.js");
/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

var BASE_USER_AGENT = "aws-amplify/" + _version__WEBPACK_IMPORTED_MODULE_0__["version"];
var Platform = {
  userAgent: BASE_USER_AGENT + " js",
  product: '',
  navigator: null,
  isReactNative: false
};

if (typeof navigator !== 'undefined' && navigator.product) {
  Platform.product = navigator.product || '';
  Platform.navigator = navigator || null;

  switch (navigator.product) {
    case 'ReactNative':
      Platform.userAgent = BASE_USER_AGENT + " react-native";
      Platform.isReactNative = true;
      break;

    default:
      Platform.userAgent = BASE_USER_AGENT + " js";
      Platform.isReactNative = false;
      break;
  }
}

var getUserAgent = function getUserAgent() {
  return Platform.userAgent;
};
/**
 * @deprecated use named import
 */

/* harmony default export */ __webpack_exports__["default"] = (Platform);

/***/ }),

/***/ "../amazon-cognito-identity-js/es/Platform/version.js":
/*!************************************************************!*\
  !*** ../amazon-cognito-identity-js/es/Platform/version.js ***!
  \************************************************************/
/*! exports provided: version */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
// generated by genversion
var version = '5.0.4';

/***/ }),

/***/ "../amazon-cognito-identity-js/es/StorageHelper.js":
/*!*********************************************************!*\
  !*** ../amazon-cognito-identity-js/es/StorageHelper.js ***!
  \*********************************************************/
/*! exports provided: MemoryStorage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryStorage", function() { return MemoryStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StorageHelper; });
/*!
 * Copyright 2016 Amazon.com,
 * Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the
 * License. A copy of the License is located at
 *
 *     http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, express or implied. See the License
 * for the specific language governing permissions and
 * limitations under the License.
 */
var dataMemory = {};
/** @class */

var MemoryStorage = /*#__PURE__*/function () {
  function MemoryStorage() {}
  /**
   * This is used to set a specific item in storage
   * @param {string} key - the key for the item
   * @param {object} value - the value
   * @returns {string} value that was set
   */


  MemoryStorage.setItem = function setItem(key, value) {
    dataMemory[key] = value;
    return dataMemory[key];
  }
  /**
   * This is used to get a specific key from storage
   * @param {string} key - the key for the item
   * This is used to clear the storage
   * @returns {string} the data item
   */
  ;

  MemoryStorage.getItem = function getItem(key) {
    return Object.prototype.hasOwnProperty.call(dataMemory, key) ? dataMemory[key] : undefined;
  }
  /**
   * This is used to remove an item from storage
   * @param {string} key - the key being set
   * @returns {boolean} return true
   */
  ;

  MemoryStorage.removeItem = function removeItem(key) {
    return delete dataMemory[key];
  }
  /**
   * This is used to clear the storage
   * @returns {string} nothing
   */
  ;

  MemoryStorage.clear = function clear() {
    dataMemory = {};
    return dataMemory;
  };

  return MemoryStorage;
}();
/** @class */

var StorageHelper = /*#__PURE__*/function () {
  /**
   * This is used to get a storage object
   * @returns {object} the storage
   */
  function StorageHelper() {
    try {
      this.storageWindow = window.localStorage;
      this.storageWindow.setItem('aws.cognito.test-ls', 1);
      this.storageWindow.removeItem('aws.cognito.test-ls');
    } catch (exception) {
      this.storageWindow = MemoryStorage;
    }
  }
  /**
   * This is used to return the storage
   * @returns {object} the storage
   */


  var _proto = StorageHelper.prototype;

  _proto.getStorage = function getStorage() {
    return this.storageWindow;
  };

  return StorageHelper;
}();



/***/ }),

/***/ "../amazon-cognito-identity-js/es/UserAgent.js":
/*!*****************************************************!*\
  !*** ../amazon-cognito-identity-js/es/UserAgent.js ***!
  \*****************************************************/
/*! exports provided: appendToCognitoUserAgent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendToCognitoUserAgent", function() { return appendToCognitoUserAgent; });
/* harmony import */ var _Platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Platform */ "../amazon-cognito-identity-js/es/Platform/index.js");
 // constructor

function UserAgent() {} // public


UserAgent.prototype.userAgent = Object(_Platform__WEBPACK_IMPORTED_MODULE_0__["getUserAgent"])();
var appendToCognitoUserAgent = function appendToCognitoUserAgent(content) {
  if (!content) {
    return;
  }

  if (UserAgent.prototype.userAgent && !UserAgent.prototype.userAgent.includes(content)) {
    UserAgent.prototype.userAgent = UserAgent.prototype.userAgent.concat(' ', content);
  }

  if (!UserAgent.prototype.userAgent || UserAgent.prototype.userAgent === '') {
    UserAgent.prototype.userAgent = content;
  }
}; // class for defining the amzn user-agent

/* harmony default export */ __webpack_exports__["default"] = (UserAgent);

/***/ }),

/***/ "../amazon-cognito-identity-js/es/index.js":
/*!*************************************************!*\
  !*** ../amazon-cognito-identity-js/es/index.js ***!
  \*************************************************/
/*! exports provided: AuthenticationDetails, AuthenticationHelper, CognitoAccessToken, CognitoIdToken, CognitoRefreshToken, CognitoUser, CognitoUserAttribute, CognitoUserPool, CognitoUserSession, CookieStorage, DateHelper, appendToCognitoUserAgent, WordArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthenticationDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthenticationDetails */ "../amazon-cognito-identity-js/es/AuthenticationDetails.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationDetails", function() { return _AuthenticationDetails__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _AuthenticationHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthenticationHelper */ "../amazon-cognito-identity-js/es/AuthenticationHelper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationHelper", function() { return _AuthenticationHelper__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _CognitoAccessToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CognitoAccessToken */ "../amazon-cognito-identity-js/es/CognitoAccessToken.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CognitoAccessToken", function() { return _CognitoAccessToken__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _CognitoIdToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CognitoIdToken */ "../amazon-cognito-identity-js/es/CognitoIdToken.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CognitoIdToken", function() { return _CognitoIdToken__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _CognitoRefreshToken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CognitoRefreshToken */ "../amazon-cognito-identity-js/es/CognitoRefreshToken.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CognitoRefreshToken", function() { return _CognitoRefreshToken__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _CognitoUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CognitoUser */ "../amazon-cognito-identity-js/es/CognitoUser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CognitoUser", function() { return _CognitoUser__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _CognitoUserAttribute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CognitoUserAttribute */ "../amazon-cognito-identity-js/es/CognitoUserAttribute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CognitoUserAttribute", function() { return _CognitoUserAttribute__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _CognitoUserPool__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CognitoUserPool */ "../amazon-cognito-identity-js/es/CognitoUserPool.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CognitoUserPool", function() { return _CognitoUserPool__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _CognitoUserSession__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CognitoUserSession */ "../amazon-cognito-identity-js/es/CognitoUserSession.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CognitoUserSession", function() { return _CognitoUserSession__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _CookieStorage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CookieStorage */ "../amazon-cognito-identity-js/es/CookieStorage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CookieStorage", function() { return _CookieStorage__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _DateHelper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DateHelper */ "../amazon-cognito-identity-js/es/DateHelper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateHelper", function() { return _DateHelper__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _UserAgent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./UserAgent */ "../amazon-cognito-identity-js/es/UserAgent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appendToCognitoUserAgent", function() { return _UserAgent__WEBPACK_IMPORTED_MODULE_11__["appendToCognitoUserAgent"]; });

/* harmony import */ var _utils_WordArray__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/WordArray */ "../amazon-cognito-identity-js/es/utils/WordArray.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WordArray", function() { return _utils_WordArray__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/*!
 * Copyright 2016 Amazon.com,
 * Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the
 * License. A copy of the License is located at
 *
 *     http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, express or implied. See the License
 * for the specific language governing permissions and
 * limitations under the License.
 */














/***/ }),

/***/ "../amazon-cognito-identity-js/es/utils/WordArray.js":
/*!***********************************************************!*\
  !*** ../amazon-cognito-identity-js/es/utils/WordArray.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WordArray; });
/* harmony import */ var _cryptoSecureRandomInt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cryptoSecureRandomInt */ "../amazon-cognito-identity-js/es/utils/cryptoSecureRandomInt.js");

/**
 * Hex encoding strategy.
 * Converts a word array to a hex string.
 * @param {WordArray} wordArray The word array.
 * @return {string} The hex string.
 * @static
 */

function hexStringify(wordArray) {
  // Shortcuts
  var words = wordArray.words;
  var sigBytes = wordArray.sigBytes; // Convert

  var hexChars = [];

  for (var i = 0; i < sigBytes; i++) {
    var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
    hexChars.push((bite >>> 4).toString(16));
    hexChars.push((bite & 0x0f).toString(16));
  }

  return hexChars.join('');
}

var WordArray = /*#__PURE__*/function () {
  function WordArray(words, sigBytes) {
    words = this.words = words || [];

    if (sigBytes != undefined) {
      this.sigBytes = sigBytes;
    } else {
      this.sigBytes = words.length * 4;
    }
  }

  var _proto = WordArray.prototype;

  _proto.random = function random(nBytes) {
    var words = [];

    for (var i = 0; i < nBytes; i += 4) {
      words.push(Object(_cryptoSecureRandomInt__WEBPACK_IMPORTED_MODULE_0__["default"])());
    }

    return new WordArray(words, nBytes);
  };

  _proto.toString = function toString() {
    return hexStringify(this);
  };

  return WordArray;
}();



/***/ }),

/***/ "../amazon-cognito-identity-js/es/utils/cryptoSecureRandomInt.js":
/*!***********************************************************************!*\
  !*** ../amazon-cognito-identity-js/es/utils/cryptoSecureRandomInt.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cryptoSecureRandomInt; });
var crypto; // Native crypto from window (Browser)

if (typeof window !== 'undefined' && window.crypto) {
  crypto = window.crypto;
} // Native (experimental IE 11) crypto from window (Browser)


if (!crypto && typeof window !== 'undefined' && window.msCrypto) {
  crypto = window.msCrypto;
} // Native crypto from global (NodeJS)


if (!crypto && typeof global !== 'undefined' && global.crypto) {
  crypto = global.crypto;
} // Native crypto import via require (NodeJS)


if (!crypto && "function" === 'function') {
  try {
    crypto = __webpack_require__(/*! crypto */ 1);
  } catch (err) {}
}
/*
 * Cryptographically secure pseudorandom number generator
 * As Math.random() is cryptographically not safe to use
 */


function cryptoSecureRandomInt() {
  if (crypto) {
    // Use getRandomValues method (Browser)
    if (typeof crypto.getRandomValues === 'function') {
      try {
        return crypto.getRandomValues(new Uint32Array(1))[0];
      } catch (err) {}
    } // Use randomBytes method (NodeJS)


    if (typeof crypto.randomBytes === 'function') {
      try {
        return crypto.randomBytes(4).readInt32LE();
      } catch (err) {}
    }
  }

  throw new Error('Native crypto module could not be used to get secure random number.');
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../amazon-cognito-identity-js/node_modules/crypto-js/core.js":
/*!********************************************************************!*\
  !*** ../amazon-cognito-identity-js/node_modules/crypto-js/core.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory();
	}
	else {}
}(this, function () {

	/*globals window, global, require*/

	/**
	 * CryptoJS core components.
	 */
	var CryptoJS = CryptoJS || (function (Math, undefined) {

	    var crypto;

	    // Native crypto from window (Browser)
	    if (typeof window !== 'undefined' && window.crypto) {
	        crypto = window.crypto;
	    }

	    // Native crypto in web worker (Browser)
	    if (typeof self !== 'undefined' && self.crypto) {
	        crypto = self.crypto;
	    }

	    // Native crypto from worker
	    if (typeof globalThis !== 'undefined' && globalThis.crypto) {
	        crypto = globalThis.crypto;
	    }

	    // Native (experimental IE 11) crypto from window (Browser)
	    if (!crypto && typeof window !== 'undefined' && window.msCrypto) {
	        crypto = window.msCrypto;
	    }

	    // Native crypto from global (NodeJS)
	    if (!crypto && typeof global !== 'undefined' && global.crypto) {
	        crypto = global.crypto;
	    }

	    // Native crypto import via require (NodeJS)
	    if (!crypto && "function" === 'function') {
	        try {
	            crypto = __webpack_require__(/*! crypto */ 0);
	        } catch (err) {}
	    }

	    /*
	     * Cryptographically secure pseudorandom number generator
	     *
	     * As Math.random() is cryptographically not safe to use
	     */
	    var cryptoSecureRandomInt = function () {
	        if (crypto) {
	            // Use getRandomValues method (Browser)
	            if (typeof crypto.getRandomValues === 'function') {
	                try {
	                    return crypto.getRandomValues(new Uint32Array(1))[0];
	                } catch (err) {}
	            }

	            // Use randomBytes method (NodeJS)
	            if (typeof crypto.randomBytes === 'function') {
	                try {
	                    return crypto.randomBytes(4).readInt32LE();
	                } catch (err) {}
	            }
	        }

	        throw new Error('Native crypto module could not be used to get secure random number.');
	    };

	    /*
	     * Local polyfill of Object.create

	     */
	    var create = Object.create || (function () {
	        function F() {}

	        return function (obj) {
	            var subtype;

	            F.prototype = obj;

	            subtype = new F();

	            F.prototype = null;

	            return subtype;
	        };
	    }());

	    /**
	     * CryptoJS namespace.
	     */
	    var C = {};

	    /**
	     * Library namespace.
	     */
	    var C_lib = C.lib = {};

	    /**
	     * Base object for prototypal inheritance.
	     */
	    var Base = C_lib.Base = (function () {


	        return {
	            /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */
	            extend: function (overrides) {
	                // Spawn
	                var subtype = create(this);

	                // Augment
	                if (overrides) {
	                    subtype.mixIn(overrides);
	                }

	                // Create default initializer
	                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
	                    subtype.init = function () {
	                        subtype.$super.init.apply(this, arguments);
	                    };
	                }

	                // Initializer's prototype is the subtype object
	                subtype.init.prototype = subtype;

	                // Reference supertype
	                subtype.$super = this;

	                return subtype;
	            },

	            /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */
	            create: function () {
	                var instance = this.extend();
	                instance.init.apply(instance, arguments);

	                return instance;
	            },

	            /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */
	            init: function () {
	            },

	            /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */
	            mixIn: function (properties) {
	                for (var propertyName in properties) {
	                    if (properties.hasOwnProperty(propertyName)) {
	                        this[propertyName] = properties[propertyName];
	                    }
	                }

	                // IE won't copy toString using the loop above
	                if (properties.hasOwnProperty('toString')) {
	                    this.toString = properties.toString;
	                }
	            },

	            /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */
	            clone: function () {
	                return this.init.prototype.extend(this);
	            }
	        };
	    }());

	    /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var WordArray = C_lib.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 4;
	            }
	        },

	        /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */
	        toString: function (encoder) {
	            return (encoder || Hex).stringify(this);
	        },

	        /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */
	        concat: function (wordArray) {
	            // Shortcuts
	            var thisWords = this.words;
	            var thatWords = wordArray.words;
	            var thisSigBytes = this.sigBytes;
	            var thatSigBytes = wordArray.sigBytes;

	            // Clamp excess bits
	            this.clamp();

	            // Concat
	            if (thisSigBytes % 4) {
	                // Copy one byte at a time
	                for (var i = 0; i < thatSigBytes; i++) {
	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
	                }
	            } else {
	                // Copy one word at a time
	                for (var j = 0; j < thatSigBytes; j += 4) {
	                    thisWords[(thisSigBytes + j) >>> 2] = thatWords[j >>> 2];
	                }
	            }
	            this.sigBytes += thatSigBytes;

	            // Chainable
	            return this;
	        },

	        /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */
	        clamp: function () {
	            // Shortcuts
	            var words = this.words;
	            var sigBytes = this.sigBytes;

	            // Clamp
	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
	            words.length = Math.ceil(sigBytes / 4);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone.words = this.words.slice(0);

	            return clone;
	        },

	        /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */
	        random: function (nBytes) {
	            var words = [];

	            for (var i = 0; i < nBytes; i += 4) {
	                words.push(cryptoSecureRandomInt());
	            }

	            return new WordArray.init(words, nBytes);
	        }
	    });

	    /**
	     * Encoder namespace.
	     */
	    var C_enc = C.enc = {};

	    /**
	     * Hex encoding strategy.
	     */
	    var Hex = C_enc.Hex = {
	        /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var hexChars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                hexChars.push((bite >>> 4).toString(16));
	                hexChars.push((bite & 0x0f).toString(16));
	            }

	            return hexChars.join('');
	        },

	        /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */
	        parse: function (hexStr) {
	            // Shortcut
	            var hexStrLength = hexStr.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < hexStrLength; i += 2) {
	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
	            }

	            return new WordArray.init(words, hexStrLength / 2);
	        }
	    };

	    /**
	     * Latin1 encoding strategy.
	     */
	    var Latin1 = C_enc.Latin1 = {
	        /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var latin1Chars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                latin1Chars.push(String.fromCharCode(bite));
	            }

	            return latin1Chars.join('');
	        },

	        /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */
	        parse: function (latin1Str) {
	            // Shortcut
	            var latin1StrLength = latin1Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < latin1StrLength; i++) {
	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
	            }

	            return new WordArray.init(words, latin1StrLength);
	        }
	    };

	    /**
	     * UTF-8 encoding strategy.
	     */
	    var Utf8 = C_enc.Utf8 = {
	        /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            try {
	                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
	            } catch (e) {
	                throw new Error('Malformed UTF-8 data');
	            }
	        },

	        /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */
	        parse: function (utf8Str) {
	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
	        }
	    };

	    /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
	        /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */
	        reset: function () {
	            // Initial values
	            this._data = new WordArray.init();
	            this._nDataBytes = 0;
	        },

	        /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */
	        _append: function (data) {
	            // Convert string to WordArray, else assume WordArray already
	            if (typeof data == 'string') {
	                data = Utf8.parse(data);
	            }

	            // Append
	            this._data.concat(data);
	            this._nDataBytes += data.sigBytes;
	        },

	        /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */
	        _process: function (doFlush) {
	            var processedWords;

	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var dataSigBytes = data.sigBytes;
	            var blockSize = this.blockSize;
	            var blockSizeBytes = blockSize * 4;

	            // Count blocks ready
	            var nBlocksReady = dataSigBytes / blockSizeBytes;
	            if (doFlush) {
	                // Round up to include partial blocks
	                nBlocksReady = Math.ceil(nBlocksReady);
	            } else {
	                // Round down to include only full blocks,
	                // less the number of blocks that must remain in the buffer
	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
	            }

	            // Count words ready
	            var nWordsReady = nBlocksReady * blockSize;

	            // Count bytes ready
	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

	            // Process blocks
	            if (nWordsReady) {
	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
	                    // Perform concrete-algorithm logic
	                    this._doProcessBlock(dataWords, offset);
	                }

	                // Remove processed words
	                processedWords = dataWords.splice(0, nWordsReady);
	                data.sigBytes -= nBytesReady;
	            }

	            // Return processed words
	            return new WordArray.init(processedWords, nBytesReady);
	        },

	        /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone._data = this._data.clone();

	            return clone;
	        },

	        _minBufferSize: 0
	    });

	    /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */
	    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         */
	        cfg: Base.extend(),

	        /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */
	        init: function (cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-hasher logic
	            this._doReset();
	        },

	        /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            // Append
	            this._append(messageUpdate);

	            // Update the hash
	            this._process();

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Final message update
	            if (messageUpdate) {
	                this._append(messageUpdate);
	            }

	            // Perform concrete-hasher logic
	            var hash = this._doFinalize();

	            return hash;
	        },

	        blockSize: 512/32,

	        /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */
	        _createHelper: function (hasher) {
	            return function (message, cfg) {
	                return new hasher.init(cfg).finalize(message);
	            };
	        },

	        /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */
	        _createHmacHelper: function (hasher) {
	            return function (message, key) {
	                return new C_algo.HMAC.init(hasher, key).finalize(message);
	            };
	        }
	    });

	    /**
	     * Algorithm namespace.
	     */
	    var C_algo = C.algo = {};

	    return C;
	}(Math));


	return CryptoJS;

}));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../amazon-cognito-identity-js/node_modules/crypto-js/enc-base64.js":
/*!**************************************************************************!*\
  !*** ../amazon-cognito-identity-js/node_modules/crypto-js/enc-base64.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "../amazon-cognito-identity-js/node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_enc = C.enc;

	    /**
	     * Base64 encoding strategy.
	     */
	    var Base64 = C_enc.Base64 = {
	        /**
	         * Converts a word array to a Base64 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Base64 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;
	            var map = this._map;

	            // Clamp excess bits
	            wordArray.clamp();

	            // Convert
	            var base64Chars = [];
	            for (var i = 0; i < sigBytes; i += 3) {
	                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
	                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
	                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

	                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

	                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
	                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
	                }
	            }

	            // Add padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                while (base64Chars.length % 4) {
	                    base64Chars.push(paddingChar);
	                }
	            }

	            return base64Chars.join('');
	        },

	        /**
	         * Converts a Base64 string to a word array.
	         *
	         * @param {string} base64Str The Base64 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
	         */
	        parse: function (base64Str) {
	            // Shortcuts
	            var base64StrLength = base64Str.length;
	            var map = this._map;
	            var reverseMap = this._reverseMap;

	            if (!reverseMap) {
	                    reverseMap = this._reverseMap = [];
	                    for (var j = 0; j < map.length; j++) {
	                        reverseMap[map.charCodeAt(j)] = j;
	                    }
	            }

	            // Ignore padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                var paddingIndex = base64Str.indexOf(paddingChar);
	                if (paddingIndex !== -1) {
	                    base64StrLength = paddingIndex;
	                }
	            }

	            // Convert
	            return parseLoop(base64Str, base64StrLength, reverseMap);

	        },

	        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
	    };

	    function parseLoop(base64Str, base64StrLength, reverseMap) {
	      var words = [];
	      var nBytes = 0;
	      for (var i = 0; i < base64StrLength; i++) {
	          if (i % 4) {
	              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
	              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
	              var bitsCombined = bits1 | bits2;
	              words[nBytes >>> 2] |= bitsCombined << (24 - (nBytes % 4) * 8);
	              nBytes++;
	          }
	      }
	      return WordArray.create(words, nBytes);
	    }
	}());


	return CryptoJS.enc.Base64;

}));

/***/ }),

/***/ "../amazon-cognito-identity-js/node_modules/crypto-js/hmac-sha256.js":
/*!***************************************************************************!*\
  !*** ../amazon-cognito-identity-js/node_modules/crypto-js/hmac-sha256.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "../amazon-cognito-identity-js/node_modules/crypto-js/core.js"), __webpack_require__(/*! ./sha256 */ "../amazon-cognito-identity-js/node_modules/crypto-js/sha256.js"), __webpack_require__(/*! ./hmac */ "../amazon-cognito-identity-js/node_modules/crypto-js/hmac.js"));
	}
	else {}
}(this, function (CryptoJS) {

	return CryptoJS.HmacSHA256;

}));

/***/ }),

/***/ "../amazon-cognito-identity-js/node_modules/crypto-js/hmac.js":
/*!********************************************************************!*\
  !*** ../amazon-cognito-identity-js/node_modules/crypto-js/hmac.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "../amazon-cognito-identity-js/node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var C_enc = C.enc;
	    var Utf8 = C_enc.Utf8;
	    var C_algo = C.algo;

	    /**
	     * HMAC algorithm.
	     */
	    var HMAC = C_algo.HMAC = Base.extend({
	        /**
	         * Initializes a newly created HMAC.
	         *
	         * @param {Hasher} hasher The hash algorithm to use.
	         * @param {WordArray|string} key The secret key.
	         *
	         * @example
	         *
	         *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
	         */
	        init: function (hasher, key) {
	            // Init hasher
	            hasher = this._hasher = new hasher.init();

	            // Convert string to WordArray, else assume WordArray already
	            if (typeof key == 'string') {
	                key = Utf8.parse(key);
	            }

	            // Shortcuts
	            var hasherBlockSize = hasher.blockSize;
	            var hasherBlockSizeBytes = hasherBlockSize * 4;

	            // Allow arbitrary length keys
	            if (key.sigBytes > hasherBlockSizeBytes) {
	                key = hasher.finalize(key);
	            }

	            // Clamp excess bits
	            key.clamp();

	            // Clone key for inner and outer pads
	            var oKey = this._oKey = key.clone();
	            var iKey = this._iKey = key.clone();

	            // Shortcuts
	            var oKeyWords = oKey.words;
	            var iKeyWords = iKey.words;

	            // XOR keys with pad constants
	            for (var i = 0; i < hasherBlockSize; i++) {
	                oKeyWords[i] ^= 0x5c5c5c5c;
	                iKeyWords[i] ^= 0x36363636;
	            }
	            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this HMAC to its initial state.
	         *
	         * @example
	         *
	         *     hmacHasher.reset();
	         */
	        reset: function () {
	            // Shortcut
	            var hasher = this._hasher;

	            // Reset
	            hasher.reset();
	            hasher.update(this._iKey);
	        },

	        /**
	         * Updates this HMAC with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {HMAC} This HMAC instance.
	         *
	         * @example
	         *
	         *     hmacHasher.update('message');
	         *     hmacHasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            this._hasher.update(messageUpdate);

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the HMAC computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The HMAC.
	         *
	         * @example
	         *
	         *     var hmac = hmacHasher.finalize();
	         *     var hmac = hmacHasher.finalize('message');
	         *     var hmac = hmacHasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Shortcut
	            var hasher = this._hasher;

	            // Compute HMAC
	            var innerHash = hasher.finalize(messageUpdate);
	            hasher.reset();
	            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));

	            return hmac;
	        }
	    });
	}());


}));

/***/ }),

/***/ "../amazon-cognito-identity-js/node_modules/crypto-js/lib-typedarrays.js":
/*!*******************************************************************************!*\
  !*** ../amazon-cognito-identity-js/node_modules/crypto-js/lib-typedarrays.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "../amazon-cognito-identity-js/node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Check if typed arrays are supported
	    if (typeof ArrayBuffer != 'function') {
	        return;
	    }

	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;

	    // Reference original init
	    var superInit = WordArray.init;

	    // Augment WordArray.init to handle typed arrays
	    var subInit = WordArray.init = function (typedArray) {
	        // Convert buffers to uint8
	        if (typedArray instanceof ArrayBuffer) {
	            typedArray = new Uint8Array(typedArray);
	        }

	        // Convert other array views to uint8
	        if (
	            typedArray instanceof Int8Array ||
	            (typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray) ||
	            typedArray instanceof Int16Array ||
	            typedArray instanceof Uint16Array ||
	            typedArray instanceof Int32Array ||
	            typedArray instanceof Uint32Array ||
	            typedArray instanceof Float32Array ||
	            typedArray instanceof Float64Array
	        ) {
	            typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
	        }

	        // Handle Uint8Array
	        if (typedArray instanceof Uint8Array) {
	            // Shortcut
	            var typedArrayByteLength = typedArray.byteLength;

	            // Extract bytes
	            var words = [];
	            for (var i = 0; i < typedArrayByteLength; i++) {
	                words[i >>> 2] |= typedArray[i] << (24 - (i % 4) * 8);
	            }

	            // Initialize this word array
	            superInit.call(this, words, typedArrayByteLength);
	        } else {
	            // Else call normal init
	            superInit.apply(this, arguments);
	        }
	    };

	    subInit.prototype = WordArray;
	}());


	return CryptoJS.lib.WordArray;

}));

/***/ }),

/***/ "../amazon-cognito-identity-js/node_modules/crypto-js/sha256.js":
/*!**********************************************************************!*\
  !*** ../amazon-cognito-identity-js/node_modules/crypto-js/sha256.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "../amazon-cognito-identity-js/node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Initialization and round constants tables
	    var H = [];
	    var K = [];

	    // Compute constants
	    (function () {
	        function isPrime(n) {
	            var sqrtN = Math.sqrt(n);
	            for (var factor = 2; factor <= sqrtN; factor++) {
	                if (!(n % factor)) {
	                    return false;
	                }
	            }

	            return true;
	        }

	        function getFractionalBits(n) {
	            return ((n - (n | 0)) * 0x100000000) | 0;
	        }

	        var n = 2;
	        var nPrime = 0;
	        while (nPrime < 64) {
	            if (isPrime(n)) {
	                if (nPrime < 8) {
	                    H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
	                }
	                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

	                nPrime++;
	            }

	            n++;
	        }
	    }());

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-256 hash algorithm.
	     */
	    var SHA256 = C_algo.SHA256 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init(H.slice(0));
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];
	            var f = H[5];
	            var g = H[6];
	            var h = H[7];

	            // Computation
	            for (var i = 0; i < 64; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var gamma0x = W[i - 15];
	                    var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
	                                  ((gamma0x << 14) | (gamma0x >>> 18)) ^
	                                   (gamma0x >>> 3);

	                    var gamma1x = W[i - 2];
	                    var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
	                                  ((gamma1x << 13) | (gamma1x >>> 19)) ^
	                                   (gamma1x >>> 10);

	                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
	                }

	                var ch  = (e & f) ^ (~e & g);
	                var maj = (a & b) ^ (a & c) ^ (b & c);

	                var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
	                var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));

	                var t1 = h + sigma1 + ch + K[i] + W[i];
	                var t2 = sigma0 + maj;

	                h = g;
	                g = f;
	                f = e;
	                e = (d + t1) | 0;
	                d = c;
	                c = b;
	                b = a;
	                a = (t1 + t2) | 0;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	            H[5] = (H[5] + f) | 0;
	            H[6] = (H[6] + g) | 0;
	            H[7] = (H[7] + h) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA256('message');
	     *     var hash = CryptoJS.SHA256(wordArray);
	     */
	    C.SHA256 = Hasher._createHelper(SHA256);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA256(message, key);
	     */
	    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
	}(Math));


	return CryptoJS.SHA256;

}));

/***/ }),

/***/ "./lib-esm/Auth.js":
/*!*************************!*\
  !*** ./lib-esm/Auth.js ***!
  \*************************/
/*! exports provided: AuthClass, Auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthClass", function() { return AuthClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Auth", function() { return Auth; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./lib-esm/types/index.js");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "@aws-amplify/core");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amazon-cognito-identity-js */ "../amazon-cognito-identity-js/es/index.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url */ "../../node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _OAuth_OAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OAuth/OAuth */ "./lib-esm/OAuth/OAuth.js");
/* harmony import */ var _urlListener__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./urlListener */ "./lib-esm/urlListener.js");
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Errors */ "./lib-esm/Errors.js");
/* harmony import */ var _types_Auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types/Auth */ "./lib-esm/types/Auth.js");
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
/*
 * Copyright 2017-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *	 http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */


var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

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

var __read = undefined && undefined.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};









var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["ConsoleLogger"]('AuthClass');
var USER_ADMIN_SCOPE = 'aws.cognito.signin.user.admin'; // 10 sec, following this guide https://www.nngroup.com/articles/response-times-3-important-limits/

var OAUTH_FLOW_MS_TIMEOUT = 10 * 1000;
var AMPLIFY_SYMBOL = typeof Symbol !== 'undefined' && typeof Symbol["for"] === 'function' ? Symbol["for"]('amplify_default') : '@@amplify_default';

var dispatchAuthEvent = function dispatchAuthEvent(event, data, message) {
  _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Hub"].dispatch('auth', {
    event: event,
    data: data,
    message: message
  }, 'Auth', AMPLIFY_SYMBOL);
}; // Cognito Documentation for max device
// tslint:disable-next-line:max-line-length
// https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListDevices.html#API_ListDevices_RequestSyntax


var MAX_DEVICES = 60;
/**
 * Provide authentication steps
 */

var AuthClass = function () {
  /**
   * Initialize Auth with AWS configurations
   * @param {Object} config - Configuration of the Auth
   */
  function AuthClass(config) {
    var _this = this;

    this.userPool = null;
    this.user = null;
    this.oAuthFlowInProgress = false;
    this.Credentials = _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Credentials"];

    this.wrapRefreshSessionCallback = function (callback) {
      var wrapped = function wrapped(error, data) {
        if (data) {
          dispatchAuthEvent('tokenRefresh', undefined, "New token retrieved");
        } else {
          dispatchAuthEvent('tokenRefresh_failure', error, "Failed to retrieve new token");
        }

        return callback(error, data);
      };

      return wrapped;
    }; // prettier-ignore


    this.configure(config);
    this.currentCredentials = this.currentCredentials.bind(this);
    this.currentUserCredentials = this.currentUserCredentials.bind(this);
    _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Hub"].listen('auth', function (_a) {
      var payload = _a.payload;
      var event = payload.event;

      switch (event) {
        case 'signIn':
          _this._storage.setItem('amplify-signin-with-hostedUI', 'false');

          break;

        case 'signOut':
          _this._storage.removeItem('amplify-signin-with-hostedUI');

          break;

        case 'cognitoHostedUI':
          _this._storage.setItem('amplify-signin-with-hostedUI', 'true');

          break;
      }
    });
  }

  AuthClass.prototype.getModuleName = function () {
    return 'Auth';
  };

  AuthClass.prototype.configure = function (config) {
    var _this = this;

    if (!config) return this._config || {};
    logger.debug('configure Auth');
    var conf = Object.assign({}, this._config, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Parser"].parseMobilehubConfig(config).Auth, config);
    this._config = conf;
    var _a = this._config,
        userPoolId = _a.userPoolId,
        userPoolWebClientId = _a.userPoolWebClientId,
        cookieStorage = _a.cookieStorage,
        oauth = _a.oauth,
        region = _a.region,
        identityPoolId = _a.identityPoolId,
        mandatorySignIn = _a.mandatorySignIn,
        refreshHandlers = _a.refreshHandlers,
        identityPoolRegion = _a.identityPoolRegion,
        clientMetadata = _a.clientMetadata,
        endpoint = _a.endpoint;

    if (!this._config.storage) {
      // backward compatability
      if (cookieStorage) this._storage = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["CookieStorage"](cookieStorage);else {
        this._storage = config.ssr ? new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["UniversalStorage"]() : new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["StorageHelper"]().getStorage();
      }
    } else {
      if (!this._isValidAuthStorage(this._config.storage)) {
        logger.error('The storage in the Auth config is not valid!');
        throw new Error('Empty storage object');
      }

      this._storage = this._config.storage;
    }

    this._storageSync = Promise.resolve();

    if (typeof this._storage['sync'] === 'function') {
      this._storageSync = this._storage['sync']();
    }

    if (userPoolId) {
      var userPoolData = {
        UserPoolId: userPoolId,
        ClientId: userPoolWebClientId,
        endpoint: endpoint
      };
      userPoolData.Storage = this._storage;
      this.userPool = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["CognitoUserPool"](userPoolData, this.wrapRefreshSessionCallback);
    }

    this.Credentials.configure({
      mandatorySignIn: mandatorySignIn,
      region: identityPoolRegion || region,
      userPoolId: userPoolId,
      identityPoolId: identityPoolId,
      refreshHandlers: refreshHandlers,
      storage: this._storage
    }); // initialize cognitoauth client if hosted ui options provided
    // to keep backward compatibility:

    var cognitoHostedUIConfig = oauth ? Object(_types__WEBPACK_IMPORTED_MODULE_0__["isCognitoHostedOpts"])(this._config.oauth) ? oauth : oauth.awsCognito : undefined;

    if (cognitoHostedUIConfig) {
      var cognitoAuthParams = Object.assign({
        cognitoClientId: userPoolWebClientId,
        UserPoolId: userPoolId,
        domain: cognitoHostedUIConfig['domain'],
        scopes: cognitoHostedUIConfig['scope'],
        redirectSignIn: cognitoHostedUIConfig['redirectSignIn'],
        redirectSignOut: cognitoHostedUIConfig['redirectSignOut'],
        responseType: cognitoHostedUIConfig['responseType'],
        Storage: this._storage,
        urlOpener: cognitoHostedUIConfig['urlOpener'],
        clientMetadata: clientMetadata
      }, cognitoHostedUIConfig['options']);
      this._oAuthHandler = new _OAuth_OAuth__WEBPACK_IMPORTED_MODULE_4__["default"]({
        scopes: cognitoAuthParams.scopes,
        config: cognitoAuthParams,
        cognitoClientId: cognitoAuthParams.cognitoClientId
      }); // **NOTE** - Remove this in a future major release as it is a breaking change
      // Prevents _handleAuthResponse from being called multiple times in Expo
      // See https://github.com/aws-amplify/amplify-js/issues/4388

      var usedResponseUrls_1 = {};
      Object(_urlListener__WEBPACK_IMPORTED_MODULE_5__["default"])(function (_a) {
        var url = _a.url;

        if (usedResponseUrls_1[url]) {
          return;
        }

        usedResponseUrls_1[url] = true;

        _this._handleAuthResponse(url);
      });
    }

    dispatchAuthEvent('configured', null, "The Auth category has been configured successfully");
    return this._config;
  };
  /**
   * Sign up with username, password and other attributes like phone, email
   * @param {String | object} params - The user attributes used for signin
   * @param {String[]} restOfAttrs - for the backward compatability
   * @return - A promise resolves callback data if success
   */


  AuthClass.prototype.signUp = function (params) {
    var _this = this;

    var restOfAttrs = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      restOfAttrs[_i - 1] = arguments[_i];
    }

    if (!this.userPool) {
      return this.rejectNoUserPool();
    }

    var username = null;
    var password = null;
    var attributes = [];
    var validationData = null;
    var clientMetadata;

    if (params && typeof params === 'string') {
      username = params;
      password = restOfAttrs ? restOfAttrs[0] : null;
      var email = restOfAttrs ? restOfAttrs[1] : null;
      var phone_number = restOfAttrs ? restOfAttrs[2] : null;
      if (email) attributes.push(new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["CognitoUserAttribute"]({
        Name: 'email',
        Value: email
      }));
      if (phone_number) attributes.push(new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["CognitoUserAttribute"]({
        Name: 'phone_number',
        Value: phone_number
      }));
    } else if (params && _typeof(params) === 'object') {
      username = params['username'];
      password = params['password'];

      if (params && params.clientMetadata) {
        clientMetadata = params.clientMetadata;
      } else if (this._config.clientMetadata) {
        clientMetadata = this._config.clientMetadata;
      }

      var attrs_1 = params['attributes'];

      if (attrs_1) {
        Object.keys(attrs_1).map(function (key) {
          attributes.push(new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["CognitoUserAttribute"]({
            Name: key,
            Value: attrs_1[key]
          }));
        });
      }

      var validationDataObject_1 = params['validationData'];

      if (validationDataObject_1) {
        validationData = [];
        Object.keys(validationDataObject_1).map(function (key) {
          validationData.push(new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["CognitoUserAttribute"]({
            Name: key,
            Value: validationDataObject_1[key]
          }));
        });
      }
    } else {
      return this.rejectAuthError(_types_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthErrorTypes"].SignUpError);
    }

    if (!username) {
      return this.rejectAuthError(_types_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthErrorTypes"].EmptyUsername);
    }

    if (!password) {
      return this.rejectAuthError(_types_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthErrorTypes"].EmptyPassword);
    }

    logger.debug('signUp attrs:', attributes);
    logger.debug('signUp validation data:', validationData);
    return new Promise(function (resolve, reject) {
      _this.userPool.signUp(username, password, attributes, validationData, function (err, data) {
        if (err) {
          dispatchAuthEvent('signUp_failure', err, username + " failed to signup");
          reject(err);
        } else {
          dispatchAuthEvent('signUp', data, username + " has signed up successfully");
          resolve(data);
        }
      }, clientMetadata);
    });
  };
  /**
   * Send the verification code to confirm sign up
   * @param {String} username - The username to be confirmed
   * @param {String} code - The verification code
   * @param {ConfirmSignUpOptions} options - other options for confirm signup
   * @return - A promise resolves callback data if success
   */


  AuthClass.prototype.confirmSignUp = function (username, code, options) {
    if (!this.userPool) {
      return this.rejectNoUserPool();
    }

    if (!username) {
      return this.rejectAuthError(_types_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthErrorTypes"].EmptyUsername);
    }

    if (!code) {
      return this.rejectAuthError(_types_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthErrorTypes"].EmptyCode);
    }

    var user = this.createCognitoUser(username);
    var forceAliasCreation = options && typeof options.forceAliasCreation === 'boolean' ? options.forceAliasCreation : true;
    var clientMetadata;

    if (options && options.clientMetadata) {
      clientMetadata = options.clientMetadata;
    } else if (this._config.clientMetadata) {
      clientMetadata = this._config.clientMetadata;
    }

    return new Promise(function (resolve, reject) {
      user.confirmRegistration(code, forceAliasCreation, function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      }, clientMetadata);
    });
  };
  /**
   * Resend the verification code
   * @param {String} username - The username to be confirmed
   * @param {ClientMetadata} clientMetadata - Metadata to be passed to Cognito Lambda triggers
   * @return - A promise resolves code delivery details if successful
   */


  AuthClass.prototype.resendSignUp = function (username, clientMetadata) {
    if (clientMetadata === void 0) {
      clientMetadata = this._config.clientMetadata;
    }

    if (!this.userPool) {
      return this.rejectNoUserPool();
    }

    if (!username) {
      return this.rejectAuthError(_types_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthErrorTypes"].EmptyUsername);
    }

    var user = this.createCognitoUser(username);
    return new Promise(function (resolve, reject) {
      user.resendConfirmationCode(function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      }, clientMetadata);
    });
  };
  /**
   * Sign in
   * @param {String | SignInOpts} usernameOrSignInOpts - The username to be signed in or the sign in options
   * @param {String} password - The password of the username
   * @return - A promise resolves the CognitoUser
   */


  AuthClass.prototype.signIn = function (usernameOrSignInOpts, pw, clientMetadata) {
    if (clientMetadata === void 0) {
      clientMetadata = this._config.clientMetadata;
    }

    if (!this.userPool) {
      return this.rejectNoUserPool();
    }

    var username = null;
    var password = null;
    var validationData = {}; // for backward compatibility

    if (typeof usernameOrSignInOpts === 'string') {
      username = usernameOrSignInOpts;
      password = pw;
    } else if (Object(_types__WEBPACK_IMPORTED_MODULE_0__["isUsernamePasswordOpts"])(usernameOrSignInOpts)) {
      if (typeof pw !== 'undefined') {
        logger.warn('The password should be defined under the first parameter object!');
      }

      username = usernameOrSignInOpts.username;
      password = usernameOrSignInOpts.password;
      validationData = usernameOrSignInOpts.validationData;
    } else {
      return this.rejectAuthError(_types_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthErrorTypes"].InvalidUsername);
    }

    if (!username) {
      return this.rejectAuthError(_types_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthErrorTypes"].EmptyUsername);
    }

    var authDetails = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["AuthenticationDetails"]({
      Username: username,
      Password: password,
      ValidationData: validationData,
      ClientMetadata: clientMetadata
    });

    if (password) {
      return this.signInWithPassword(authDetails);
    } else {
      return this.signInWithoutPassword(authDetails);
    }
  };
  /**
   * Return an object with the authentication callbacks
   * @param {CognitoUser} user - the cognito user object
   * @param {} resolve - function called when resolving the current step
   * @param {} reject - function called when rejecting the current step
   * @return - an object with the callback methods for user authentication
   */


  AuthClass.prototype.authCallbacks = function (user, resolve, reject) {
    var _this = this;

    var that = this;
    return {
      onSuccess: function onSuccess(session) {
        return __awaiter(_this, void 0, void 0, function () {
          var cred, e_1, currentUser, e_2;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                logger.debug(session);
                delete user['challengeName'];
                delete user['challengeParam'];
                _a.label = 1;

              case 1:
                _a.trys.push([1, 4, 5, 9]);

                return [4
                /*yield*/
                , this.Credentials.clear()];

              case 2:
                _a.sent();

                return [4
                /*yield*/
                , this.Credentials.set(session, 'session')];

              case 3:
                cred = _a.sent();
                logger.debug('succeed to get cognito credentials', cred);
                return [3
                /*break*/
                , 9];

              case 4:
                e_1 = _a.sent();
                logger.debug('cannot get cognito credentials', e_1);
                return [3
                /*break*/
                , 9];

              case 5:
                _a.trys.push([5, 7,, 8]);

                return [4
                /*yield*/
                , this.currentUserPoolUser()];

              case 6:
                currentUser = _a.sent();
                that.user = currentUser;
                dispatchAuthEvent('signIn', currentUser, "A user " + user.getUsername() + " has been signed in");
                resolve(currentUser);
                return [3
                /*break*/
                , 8];

              case 7:
                e_2 = _a.sent();
                logger.error('Failed to get the signed in user', e_2);
                reject(e_2);
                return [3
                /*break*/
                , 8];

              case 8:
                return [7
                /*endfinally*/
                ];

              case 9:
                return [2
                /*return*/
                ];
            }
          });
        });
      },
      onFailure: function onFailure(err) {
        logger.debug('signIn failure', err);
        dispatchAuthEvent('signIn_failure', err, user.getUsername() + " failed to signin");
        reject(err);
      },
      customChallenge: function customChallenge(challengeParam) {
        logger.debug('signIn custom challenge answer required');
        user['challengeName'] = 'CUSTOM_CHALLENGE';
        user['challengeParam'] = challengeParam;
        resolve(user);
      },
      mfaRequired: function mfaRequired(challengeName, challengeParam) {
        logger.debug('signIn MFA required');
        user['challengeName'] = challengeName;
        user['challengeParam'] = challengeParam;
        resolve(user);
      },
      mfaSetup: function mfaSetup(challengeName, challengeParam) {
        logger.debug('signIn mfa setup', challengeName);
        user['challengeName'] = challengeName;
        user['challengeParam'] = challengeParam;
        resolve(user);
      },
      newPasswordRequired: function newPasswordRequired(userAttributes, requiredAttributes) {
        logger.debug('signIn new password');
        user['challengeName'] = 'NEW_PASSWORD_REQUIRED';
        user['challengeParam'] = {
          userAttributes: userAttributes,
          requiredAttributes: requiredAttributes
        };
        resolve(user);
      },
      totpRequired: function totpRequired(challengeName, challengeParam) {
        logger.debug('signIn totpRequired');
        user['challengeName'] = challengeName;
        user['challengeParam'] = challengeParam;
        resolve(user);
      },
      selectMFAType: function selectMFAType(challengeName, challengeParam) {
        logger.debug('signIn selectMFAType', challengeName);
        user['challengeName'] = challengeName;
        user['challengeParam'] = challengeParam;
        resolve(user);
      }
    };
  };
  /**
   * Sign in with a password
   * @private
   * @param {AuthenticationDetails} authDetails - the user sign in data
   * @return - A promise resolves the CognitoUser object if success or mfa required
   */


  AuthClass.prototype.signInWithPassword = function (authDetails) {
    var _this = this;

    if (this.pendingSignIn) {
      throw new Error('Pending sign-in attempt already in progress');
    }

    var user = this.createCognitoUser(authDetails.getUsername());
    this.pendingSignIn = new Promise(function (resolve, reject) {
      user.authenticateUser(authDetails, _this.authCallbacks(user, function (value) {
        _this.pendingSignIn = null;
        resolve(value);
      }, function (error) {
        _this.pendingSignIn = null;
        reject(error);
      }));
    });
    return this.pendingSignIn;
  };
  /**
   * Sign in without a password
   * @private
   * @param {AuthenticationDetails} authDetails - the user sign in data
   * @return - A promise resolves the CognitoUser object if success or mfa required
   */


  AuthClass.prototype.signInWithoutPassword = function (authDetails) {
    var _this = this;

    var user = this.createCognitoUser(authDetails.getUsername());
    user.setAuthenticationFlowType('CUSTOM_AUTH');
    return new Promise(function (resolve, reject) {
      user.initiateAuth(authDetails, _this.authCallbacks(user, resolve, reject));
    });
  };
  /**
   * This was previously used by an authenticated user to get MFAOptions,
   * but no longer returns a meaningful response. Refer to the documentation for
   * how to setup and use MFA: https://docs.amplify.aws/lib/auth/mfa/q/platform/js
   * @deprecated
   * @param {CognitoUser} user - the current user
   * @return - A promise resolves the current preferred mfa option if success
   */


  AuthClass.prototype.getMFAOptions = function (user) {
    return new Promise(function (res, rej) {
      user.getMFAOptions(function (err, mfaOptions) {
        if (err) {
          logger.debug('get MFA Options failed', err);
          rej(err);
          return;
        }

        logger.debug('get MFA options success', mfaOptions);
        res(mfaOptions);
        return;
      });
    });
  };
  /**
   * get preferred mfa method
   * @param {CognitoUser} user - the current cognito user
   * @param {GetPreferredMFAOpts} params - options for getting the current user preferred MFA
   */


  AuthClass.prototype.getPreferredMFA = function (user, params) {
    var _this = this;

    var that = this;
    return new Promise(function (res, rej) {
      var clientMetadata = _this._config.clientMetadata; // TODO: verify behavior if this is override during signIn

      var bypassCache = params ? params.bypassCache : false;
      user.getUserData(function (err, data) {
        if (err) {
          logger.debug('getting preferred mfa failed', err);
          rej(err);
          return;
        }

        var mfaType = that._getMfaTypeFromUserData(data);

        if (!mfaType) {
          rej('invalid MFA Type');
          return;
        } else {
          res(mfaType);
          return;
        }
      }, {
        bypassCache: bypassCache,
        clientMetadata: clientMetadata
      });
    });
  };

  AuthClass.prototype._getMfaTypeFromUserData = function (data) {
    var ret = null;
    var preferredMFA = data.PreferredMfaSetting; // if the user has used Auth.setPreferredMFA() to setup the mfa type
    // then the "PreferredMfaSetting" would exist in the response

    if (preferredMFA) {
      ret = preferredMFA;
    } else {
      // if mfaList exists but empty, then its noMFA
      var mfaList = data.UserMFASettingList;

      if (!mfaList) {
        // if SMS was enabled by using Auth.enableSMS(),
        // the response would contain MFAOptions
        // as for now Cognito only supports for SMS, so we will say it is 'SMS_MFA'
        // if it does not exist, then it should be NOMFA
        var MFAOptions = data.MFAOptions;

        if (MFAOptions) {
          ret = 'SMS_MFA';
        } else {
          ret = 'NOMFA';
        }
      } else if (mfaList.length === 0) {
        ret = 'NOMFA';
      } else {
        logger.debug('invalid case for getPreferredMFA', data);
      }
    }

    return ret;
  };

  AuthClass.prototype._getUserData = function (user, params) {
    return new Promise(function (res, rej) {
      user.getUserData(function (err, data) {
        if (err) {
          logger.debug('getting user data failed', err);
          rej(err);
          return;
        } else {
          res(data);
          return;
        }
      }, params);
    });
  };
  /**
   * set preferred MFA method
   * @param {CognitoUser} user - the current Cognito user
   * @param {string} mfaMethod - preferred mfa method
   * @return - A promise resolve if success
   */


  AuthClass.prototype.setPreferredMFA = function (user, mfaMethod) {
    return __awaiter(this, void 0, void 0, function () {
      var clientMetadata, userData, smsMfaSettings, totpMfaSettings, _a, mfaList, currentMFAType, that;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            clientMetadata = this._config.clientMetadata;
            return [4
            /*yield*/
            , this._getUserData(user, {
              bypassCache: true,
              clientMetadata: clientMetadata
            })];

          case 1:
            userData = _b.sent();
            smsMfaSettings = null;
            totpMfaSettings = null;
            _a = mfaMethod;

            switch (_a) {
              case 'TOTP' || false:
                return [3
                /*break*/
                , 2];

              case 'SMS' || false:
                return [3
                /*break*/
                , 3];

              case 'NOMFA':
                return [3
                /*break*/
                , 4];
            }

            return [3
            /*break*/
            , 6];

          case 2:
            totpMfaSettings = {
              PreferredMfa: true,
              Enabled: true
            };
            return [3
            /*break*/
            , 7];

          case 3:
            smsMfaSettings = {
              PreferredMfa: true,
              Enabled: true
            };
            return [3
            /*break*/
            , 7];

          case 4:
            mfaList = userData['UserMFASettingList'];
            return [4
            /*yield*/
            , this._getMfaTypeFromUserData(userData)];

          case 5:
            currentMFAType = _b.sent();

            if (currentMFAType === 'NOMFA') {
              return [2
              /*return*/
              , Promise.resolve('No change for mfa type')];
            } else if (currentMFAType === 'SMS_MFA') {
              smsMfaSettings = {
                PreferredMfa: false,
                Enabled: false
              };
            } else if (currentMFAType === 'SOFTWARE_TOKEN_MFA') {
              totpMfaSettings = {
                PreferredMfa: false,
                Enabled: false
              };
            } else {
              return [2
              /*return*/
              , this.rejectAuthError(_types_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthErrorTypes"].InvalidMFA)];
            } // if there is a UserMFASettingList in the response
            // we need to disable every mfa type in that list


            if (mfaList && mfaList.length !== 0) {
              // to disable SMS or TOTP if exists in that list
              mfaList.forEach(function (mfaType) {
                if (mfaType === 'SMS_MFA') {
                  smsMfaSettings = {
                    PreferredMfa: false,
                    Enabled: false
                  };
                } else if (mfaType === 'SOFTWARE_TOKEN_MFA') {
                  totpMfaSettings = {
                    PreferredMfa: false,
                    Enabled: false
                  };
                }
              });
            }

            return [3
            /*break*/
            , 7];

          case 6:
            logger.debug('no validmfa method provided');
            return [2
            /*return*/
            , this.rejectAuthError(_types_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthErrorTypes"].NoMFA)];

          case 7:
            that = this;
            return [2
            /*return*/
            , new Promise(function (res, rej) {
              user.setUserMfaPreference(smsMfaSettings, totpMfaSettings, function (err, result) {
                if (err) {
                  logger.debug('Set user mfa preference error', err);
                  return rej(err);
                }

                logger.debug('Set user mfa success', result);
                logger.debug('Caching the latest user data into local'); // cache the latest result into user data

                user.getUserData(function (err, data) {
                  if (err) {
                    logger.debug('getting user data failed', err);
                    return rej(err);
                  } else {
                    return res(result);
                  }
                }, {
                  bypassCache: true,
                  clientMetadata: clientMetadata
                });
              });
            })];
        }
      });
    });
  };
  /**
   * diable SMS
   * @deprecated
   * @param {CognitoUser} user - the current user
   * @return - A promise resolves is success
   */


  AuthClass.prototype.disableSMS = function (user) {
    return new Promise(function (res, rej) {
      user.disableMFA(function (err, data) {
        if (err) {
          logger.debug('disable mfa failed', err);
          rej(err);
          return;
        }

        logger.debug('disable mfa succeed', data);
        res(data);
        return;
      });
    });
  };
  /**
   * enable SMS
   * @deprecated
   * @param {CognitoUser} user - the current user
   * @return - A promise resolves is success
   */


  AuthClass.prototype.enableSMS = function (user) {
    return new Promise(function (res, rej) {
      user.enableMFA(function (err, data) {
        if (err) {
          logger.debug('enable mfa failed', err);
          rej(err);
          return;
        }

        logger.debug('enable mfa succeed', data);
        res(data);
        return;
      });
    });
  };
  /**
   * Setup TOTP
   * @param {CognitoUser} user - the current user
   * @return - A promise resolves with the secret code if success
   */


  AuthClass.prototype.setupTOTP = function (user) {
    return new Promise(function (res, rej) {
      user.associateSoftwareToken({
        onFailure: function onFailure(err) {
          logger.debug('associateSoftwareToken failed', err);
          rej(err);
          return;
        },
        associateSecretCode: function associateSecretCode(secretCode) {
          logger.debug('associateSoftwareToken sucess', secretCode);
          res(secretCode);
          return;
        }
      });
    });
  };
  /**
   * verify TOTP setup
   * @param {CognitoUser} user - the current user
   * @param {string} challengeAnswer - challenge answer
   * @return - A promise resolves is success
   */


  AuthClass.prototype.verifyTotpToken = function (user, challengeAnswer) {
    logger.debug('verification totp token', user, challengeAnswer);
    return new Promise(function (res, rej) {
      user.verifySoftwareToken(challengeAnswer, 'My TOTP device', {
        onFailure: function onFailure(err) {
          logger.debug('verifyTotpToken failed', err);
          rej(err);
          return;
        },
        onSuccess: function onSuccess(data) {
          dispatchAuthEvent('signIn', user, "A user " + user.getUsername() + " has been signed in");
          logger.debug('verifyTotpToken success', data);
          res(data);
          return;
        }
      });
    });
  };
  /**
   * Send MFA code to confirm sign in
   * @param {Object} user - The CognitoUser object
   * @param {String} code - The confirmation code
   */


  AuthClass.prototype.confirmSignIn = function (user, code, mfaType, clientMetadata) {
    var _this = this;

    if (clientMetadata === void 0) {
      clientMetadata = this._config.clientMetadata;
    }

    if (!code) {
      return this.rejectAuthError(_types_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthErrorTypes"].EmptyCode);
    }

    var that = this;
    return new Promise(function (resolve, reject) {
      user.sendMFACode(code, {
        onSuccess: function onSuccess(session) {
          return __awaiter(_this, void 0, void 0, function () {
            var cred, e_3;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  logger.debug(session);
                  _a.label = 1;

                case 1:
                  _a.trys.push([1, 4, 5, 6]);

                  return [4
                  /*yield*/
                  , this.Credentials.clear()];

                case 2:
                  _a.sent();

                  return [4
                  /*yield*/
                  , this.Credentials.set(session, 'session')];

                case 3:
                  cred = _a.sent();
                  logger.debug('succeed to get cognito credentials', cred);
                  return [3
                  /*break*/
                  , 6];

                case 4:
                  e_3 = _a.sent();
                  logger.debug('cannot get cognito credentials', e_3);
                  return [3
                  /*break*/
                  , 6];

                case 5:
                  that.user = user;
                  dispatchAuthEvent('signIn', user, "A user " + user.getUsername() + " has been signed in");
                  resolve(user);
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
        },
        onFailure: function onFailure(err) {
          logger.debug('confirm signIn failure', err);
          reject(err);
        }
      }, mfaType, clientMetadata);
    });
  };

  AuthClass.prototype.completeNewPassword = function (user, password, requiredAttributes, clientMetadata) {
    var _this = this;

    if (requiredAttributes === void 0) {
      requiredAttributes = {};
    }

    if (clientMetadata === void 0) {
      clientMetadata = this._config.clientMetadata;
    }

    if (!password) {
      return this.rejectAuthError(_types_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthErrorTypes"].EmptyPassword);
    }

    var that = this;
    return new Promise(function (resolve, reject) {
      user.completeNewPasswordChallenge(password, requiredAttributes, {
        onSuccess: function onSuccess(session) {
          return __awaiter(_this, void 0, void 0, function () {
            var cred, e_4;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  logger.debug(session);
                  _a.label = 1;

                case 1:
                  _a.trys.push([1, 4, 5, 6]);

                  return [4
                  /*yield*/
                  , this.Credentials.clear()];

                case 2:
                  _a.sent();

                  return [4
                  /*yield*/
                  , this.Credentials.set(session, 'session')];

                case 3:
                  cred = _a.sent();
                  logger.debug('succeed to get cognito credentials', cred);
                  return [3
                  /*break*/
                  , 6];

                case 4:
                  e_4 = _a.sent();
                  logger.debug('cannot get cognito credentials', e_4);
                  return [3
                  /*break*/
                  , 6];

                case 5:
                  that.user = user;
                  dispatchAuthEvent('signIn', user, "A user " + user.getUsername() + " has been signed in");
                  resolve(user);
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
        },
        onFailure: function onFailure(err) {
          logger.debug('completeNewPassword failure', err);
          dispatchAuthEvent('completeNewPassword_failure', err, _this.user + " failed to complete the new password flow");
          reject(err);
        },
        mfaRequired: function mfaRequired(challengeName, challengeParam) {
          logger.debug('signIn MFA required');
          user['challengeName'] = challengeName;
          user['challengeParam'] = challengeParam;
          resolve(user);
        },
        mfaSetup: function mfaSetup(challengeName, challengeParam) {
          logger.debug('signIn mfa setup', challengeName);
          user['challengeName'] = challengeName;
          user['challengeParam'] = challengeParam;
          resolve(user);
        },
        totpRequired: function totpRequired(challengeName, challengeParam) {
          logger.debug('signIn mfa setup', challengeName);
          user['challengeName'] = challengeName;
          user['challengeParam'] = challengeParam;
          resolve(user);
        }
      }, clientMetadata);
    });
  };
  /**
   * Send the answer to a custom challenge
   * @param {CognitoUser} user - The CognitoUser object
   * @param {String} challengeResponses - The confirmation code
   */


  AuthClass.prototype.sendCustomChallengeAnswer = function (user, challengeResponses, clientMetadata) {
    var _this = this;

    if (clientMetadata === void 0) {
      clientMetadata = this._config.clientMetadata;
    }

    if (!this.userPool) {
      return this.rejectNoUserPool();
    }

    if (!challengeResponses) {
      return this.rejectAuthError(_types_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthErrorTypes"].EmptyChallengeResponse);
    }

    var that = this;
    return new Promise(function (resolve, reject) {
      user.sendCustomChallengeAnswer(challengeResponses, _this.authCallbacks(user, resolve, reject), clientMetadata);
    });
  };
  /**
   * Delete an authenticated users' attributes
   * @param {CognitoUser} - The currently logged in user object
   * @return {Promise}
   **/


  AuthClass.prototype.deleteUserAttributes = function (user, attributeNames) {
    var that = this;
    return new Promise(function (resolve, reject) {
      that.userSession(user).then(function (session) {
        user.deleteAttributes(attributeNames, function (err, result) {
          if (err) {
            return reject(err);
          } else {
            return resolve(result);
          }
        });
      });
    });
  };
  /**
   * Update an authenticated users' attributes
   * @param {CognitoUser} - The currently logged in user object
   * @return {Promise}
   **/


  AuthClass.prototype.updateUserAttributes = function (user, attributes, clientMetadata) {
    if (clientMetadata === void 0) {
      clientMetadata = this._config.clientMetadata;
    }

    var attributeList = [];
    var that = this;
    return new Promise(function (resolve, reject) {
      that.userSession(user).then(function (session) {
        for (var key in attributes) {
          if (key !== 'sub' && key.indexOf('_verified') < 0) {
            var attr = {
              Name: key,
              Value: attributes[key]
            };
            attributeList.push(attr);
          }
        }

        user.updateAttributes(attributeList, function (err, result) {
          if (err) {
            return reject(err);
          } else {
            return resolve(result);
          }
        }, clientMetadata);
      });
    });
  };
  /**
   * Return user attributes
   * @param {Object} user - The CognitoUser object
   * @return - A promise resolves to user attributes if success
   */


  AuthClass.prototype.userAttributes = function (user) {
    var _this = this;

    return new Promise(function (resolve, reject) {
      _this.userSession(user).then(function (session) {
        user.getUserAttributes(function (err, attributes) {
          if (err) {
            reject(err);
          } else {
            resolve(attributes);
          }
        });
      });
    });
  };

  AuthClass.prototype.verifiedContact = function (user) {
    var that = this;
    return this.userAttributes(user).then(function (attributes) {
      var attrs = that.attributesToObject(attributes);
      var unverified = {};
      var verified = {};

      if (attrs['email']) {
        if (attrs['email_verified']) {
          verified['email'] = attrs['email'];
        } else {
          unverified['email'] = attrs['email'];
        }
      }

      if (attrs['phone_number']) {
        if (attrs['phone_number_verified']) {
          verified['phone_number'] = attrs['phone_number'];
        } else {
          unverified['phone_number'] = attrs['phone_number'];
        }
      }

      return {
        verified: verified,
        unverified: unverified
      };
    });
  };
  /**
   * Get current authenticated user
   * @return - A promise resolves to current authenticated CognitoUser if success
   */


  AuthClass.prototype.currentUserPoolUser = function (params) {
    var _this = this;

    if (!this.userPool) {
      return this.rejectNoUserPool();
    }

    return new Promise(function (res, rej) {
      _this._storageSync.then(function () {
        return __awaiter(_this, void 0, void 0, function () {
          var user, clientMetadata;

          var _this = this;

          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                if (!this.isOAuthInProgress()) return [3
                /*break*/
                , 2];
                logger.debug('OAuth signIn in progress, waiting for resolution...');
                return [4
                /*yield*/
                , new Promise(function (res) {
                  var timeoutId = setTimeout(function () {
                    logger.debug('OAuth signIn in progress timeout');
                    _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Hub"].remove('auth', hostedUISignCallback);
                    res();
                  }, OAUTH_FLOW_MS_TIMEOUT);
                  _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Hub"].listen('auth', hostedUISignCallback);

                  function hostedUISignCallback(_a) {
                    var payload = _a.payload;
                    var event = payload.event;

                    if (event === 'cognitoHostedUI' || event === 'cognitoHostedUI_failure') {
                      logger.debug("OAuth signIn resolved: " + event);
                      clearTimeout(timeoutId);
                      _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Hub"].remove('auth', hostedUISignCallback);
                      res();
                    }
                  }
                })];

              case 1:
                _a.sent();

                _a.label = 2;

              case 2:
                user = this.userPool.getCurrentUser();

                if (!user) {
                  logger.debug('Failed to get user from user pool');
                  rej('No current user');
                  return [2
                  /*return*/
                  ];
                }

                clientMetadata = this._config.clientMetadata; // refresh the session if the session expired.

                user.getSession(function (err, session) {
                  return __awaiter(_this, void 0, void 0, function () {
                    var bypassCache, clientMetadata, _a, scope;

                    var _this = this;

                    return __generator(this, function (_b) {
                      switch (_b.label) {
                        case 0:
                          if (err) {
                            logger.debug('Failed to get the user session', err);
                            rej(err);
                            return [2
                            /*return*/
                            ];
                          }

                          bypassCache = params ? params.bypassCache : false;
                          if (!bypassCache) return [3
                          /*break*/
                          , 2];
                          return [4
                          /*yield*/
                          , this.Credentials.clear()];

                        case 1:
                          _b.sent();

                          _b.label = 2;

                        case 2:
                          clientMetadata = this._config.clientMetadata;
                          _a = session.getAccessToken().decodePayload().scope, scope = _a === void 0 ? '' : _a;

                          if (scope.split(' ').includes(USER_ADMIN_SCOPE)) {
                            user.getUserData(function (err, data) {
                              if (err) {
                                logger.debug('getting user data failed', err); // Make sure the user is still valid

                                if (err.message === 'User is disabled.' || err.message === 'User does not exist.' || err.message === 'Access Token has been revoked' // Session revoked by another app
                                ) {
                                  rej(err);
                                } else {
                                  // the error may also be thrown when lack of permissions to get user info etc
                                  // in that case we just bypass the error
                                  res(user);
                                }

                                return;
                              }

                              var preferredMFA = data.PreferredMfaSetting || 'NOMFA';
                              var attributeList = [];

                              for (var i = 0; i < data.UserAttributes.length; i++) {
                                var attribute = {
                                  Name: data.UserAttributes[i].Name,
                                  Value: data.UserAttributes[i].Value
                                };
                                var userAttribute = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["CognitoUserAttribute"](attribute);
                                attributeList.push(userAttribute);
                              }

                              var attributes = _this.attributesToObject(attributeList);

                              Object.assign(user, {
                                attributes: attributes,
                                preferredMFA: preferredMFA
                              });
                              return res(user);
                            }, {
                              bypassCache: bypassCache,
                              clientMetadata: clientMetadata
                            });
                          } else {
                            logger.debug("Unable to get the user data because the " + USER_ADMIN_SCOPE + " " + "is not in the scopes of the access token");
                            return [2
                            /*return*/
                            , res(user)];
                          }

                          return [2
                          /*return*/
                          ];
                      }
                    });
                  });
                }, {
                  clientMetadata: clientMetadata
                });
                return [2
                /*return*/
                ];
            }
          });
        });
      })["catch"](function (e) {
        logger.debug('Failed to sync cache info into memory', e);
        return rej(e);
      });
    });
  };

  AuthClass.prototype.isOAuthInProgress = function () {
    return this.oAuthFlowInProgress;
  };
  /**
   * Get current authenticated user
   * @param {CurrentUserOpts} - options for getting the current user
   * @return - A promise resolves to current authenticated CognitoUser if success
   */


  AuthClass.prototype.currentAuthenticatedUser = function (params) {
    return __awaiter(this, void 0, void 0, function () {
      var federatedUser, e_5, federatedInfo, user, e_6;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            logger.debug('getting current authenticated user');
            federatedUser = null;
            _a.label = 1;

          case 1:
            _a.trys.push([1, 3,, 4]);

            return [4
            /*yield*/
            , this._storageSync];

          case 2:
            _a.sent();

            return [3
            /*break*/
            , 4];

          case 3:
            e_5 = _a.sent();
            logger.debug('Failed to sync cache info into memory', e_5);
            throw e_5;

          case 4:
            try {
              federatedInfo = JSON.parse(this._storage.getItem('aws-amplify-federatedInfo'));

              if (federatedInfo) {
                federatedUser = __assign(__assign({}, federatedInfo.user), {
                  token: federatedInfo.token
                });
              }
            } catch (e) {
              logger.debug('cannot load federated user from auth storage');
            }

            if (!federatedUser) return [3
            /*break*/
            , 5];
            this.user = federatedUser;
            logger.debug('get current authenticated federated user', this.user);
            return [2
            /*return*/
            , this.user];

          case 5:
            logger.debug('get current authenticated userpool user');
            user = null;
            _a.label = 6;

          case 6:
            _a.trys.push([6, 8,, 9]);

            return [4
            /*yield*/
            , this.currentUserPoolUser(params)];

          case 7:
            user = _a.sent();
            return [3
            /*break*/
            , 9];

          case 8:
            e_6 = _a.sent();

            if (e_6 === 'No userPool') {
              logger.error('Cannot get the current user because the user pool is missing. ' + 'Please make sure the Auth module is configured with a valid Cognito User Pool ID');
            }

            logger.debug('The user is not authenticated by the error', e_6);
            return [2
            /*return*/
            , Promise.reject('The user is not authenticated')];

          case 9:
            this.user = user;
            return [2
            /*return*/
            , this.user];
        }
      });
    });
  };
  /**
   * Get current user's session
   * @return - A promise resolves to session object if success
   */


  AuthClass.prototype.currentSession = function () {
    var that = this;
    logger.debug('Getting current session'); // Purposely not calling the reject method here because we don't need a console error

    if (!this.userPool) {
      return Promise.reject();
    }

    return new Promise(function (res, rej) {
      that.currentUserPoolUser().then(function (user) {
        that.userSession(user).then(function (session) {
          res(session);
          return;
        })["catch"](function (e) {
          logger.debug('Failed to get the current session', e);
          rej(e);
          return;
        });
      })["catch"](function (e) {
        logger.debug('Failed to get the current user', e);
        rej(e);
        return;
      });
    });
  };
  /**
   * Get the corresponding user session
   * @param {Object} user - The CognitoUser object
   * @return - A promise resolves to the session
   */


  AuthClass.prototype.userSession = function (user) {
    if (!user) {
      logger.debug('the user is null');
      return this.rejectAuthError(_types_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthErrorTypes"].NoUserSession);
    }

    var clientMetadata = this._config.clientMetadata; // TODO: verify behavior if this is override during signIn

    return new Promise(function (resolve, reject) {
      logger.debug('Getting the session from this user:', user);
      user.getSession(function (err, session) {
        if (err) {
          logger.debug('Failed to get the session from user', user);
          reject(err);
          return;
        } else {
          logger.debug('Succeed to get the user session', session);
          resolve(session);
          return;
        }
      }, {
        clientMetadata: clientMetadata
      });
    });
  };
  /**
   * Get authenticated credentials of current user.
   * @return - A promise resolves to be current user's credentials
   */


  AuthClass.prototype.currentUserCredentials = function () {
    return __awaiter(this, void 0, void 0, function () {
      var e_7, federatedInfo;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            logger.debug('Getting current user credentials');
            _a.label = 1;

          case 1:
            _a.trys.push([1, 3,, 4]);

            return [4
            /*yield*/
            , this._storageSync];

          case 2:
            _a.sent();

            return [3
            /*break*/
            , 4];

          case 3:
            e_7 = _a.sent();
            logger.debug('Failed to sync cache info into memory', e_7);
            throw e_7;

          case 4:
            federatedInfo = null;

            try {
              federatedInfo = JSON.parse(this._storage.getItem('aws-amplify-federatedInfo'));
            } catch (e) {
              logger.debug('failed to get or parse item aws-amplify-federatedInfo', e);
            }

            if (federatedInfo) {
              // refresh the jwt token here if necessary
              return [2
              /*return*/
              , this.Credentials.refreshFederatedToken(federatedInfo)];
            } else {
              return [2
              /*return*/
              , this.currentSession().then(function (session) {
                logger.debug('getting session success', session);
                return _this.Credentials.set(session, 'session');
              })["catch"](function (error) {
                logger.debug('getting session failed', error);
                return _this.Credentials.set(null, 'guest');
              })];
            }

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  AuthClass.prototype.currentCredentials = function () {
    logger.debug('getting current credentials');
    return this.Credentials.get();
  };
  /**
   * Initiate an attribute confirmation request
   * @param {Object} user - The CognitoUser
   * @param {Object} attr - The attributes to be verified
   * @return - A promise resolves to callback data if success
   */


  AuthClass.prototype.verifyUserAttribute = function (user, attr, clientMetadata) {
    if (clientMetadata === void 0) {
      clientMetadata = this._config.clientMetadata;
    }

    return new Promise(function (resolve, reject) {
      user.getAttributeVerificationCode(attr, {
        onSuccess: function onSuccess() {
          return resolve();
        },
        onFailure: function onFailure(err) {
          return reject(err);
        }
      }, clientMetadata);
    });
  };
  /**
   * Confirm an attribute using a confirmation code
   * @param {Object} user - The CognitoUser
   * @param {Object} attr - The attribute to be verified
   * @param {String} code - The confirmation code
   * @return - A promise resolves to callback data if success
   */


  AuthClass.prototype.verifyUserAttributeSubmit = function (user, attr, code) {
    if (!code) {
      return this.rejectAuthError(_types_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthErrorTypes"].EmptyCode);
    }

    return new Promise(function (resolve, reject) {
      user.verifyAttribute(attr, code, {
        onSuccess: function onSuccess(data) {
          resolve(data);
          return;
        },
        onFailure: function onFailure(err) {
          reject(err);
          return;
        }
      });
    });
  };

  AuthClass.prototype.verifyCurrentUserAttribute = function (attr) {
    var that = this;
    return that.currentUserPoolUser().then(function (user) {
      return that.verifyUserAttribute(user, attr);
    });
  };
  /**
   * Confirm current user's attribute using a confirmation code
   * @param {Object} attr - The attribute to be verified
   * @param {String} code - The confirmation code
   * @return - A promise resolves to callback data if success
   */


  AuthClass.prototype.verifyCurrentUserAttributeSubmit = function (attr, code) {
    var that = this;
    return that.currentUserPoolUser().then(function (user) {
      return that.verifyUserAttributeSubmit(user, attr, code);
    });
  };

  AuthClass.prototype.cognitoIdentitySignOut = function (opts, user) {
    return __awaiter(this, void 0, void 0, function () {
      var e_8, isSignedInHostedUI;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2,, 3]);

            return [4
            /*yield*/
            , this._storageSync];

          case 1:
            _a.sent();

            return [3
            /*break*/
            , 3];

          case 2:
            e_8 = _a.sent();
            logger.debug('Failed to sync cache info into memory', e_8);
            throw e_8;

          case 3:
            isSignedInHostedUI = this._oAuthHandler && this._storage.getItem('amplify-signin-with-hostedUI') === 'true';
            return [2
            /*return*/
            , new Promise(function (res, rej) {
              if (opts && opts.global) {
                logger.debug('user global sign out', user); // in order to use global signout
                // we must validate the user as an authenticated user by using getSession

                var clientMetadata = _this._config.clientMetadata; // TODO: verify behavior if this is override during signIn

                user.getSession(function (err, result) {
                  if (err) {
                    logger.debug('failed to get the user session', err);
                    return rej(err);
                  }

                  user.globalSignOut({
                    onSuccess: function onSuccess(data) {
                      logger.debug('global sign out success');

                      if (isSignedInHostedUI) {
                        _this.oAuthSignOutRedirect(res, rej);
                      } else {
                        return res();
                      }
                    },
                    onFailure: function onFailure(err) {
                      logger.debug('global sign out failed', err);
                      return rej(err);
                    }
                  });
                }, {
                  clientMetadata: clientMetadata
                });
              } else {
                logger.debug('user sign out', user);
                user.signOut(function () {
                  if (isSignedInHostedUI) {
                    _this.oAuthSignOutRedirect(res, rej);
                  } else {
                    return res();
                  }
                });
              }
            })];
        }
      });
    });
  };

  AuthClass.prototype.oAuthSignOutRedirect = function (resolve, reject) {
    var isBrowser = _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["JS"].browserOrNode().isBrowser;

    if (isBrowser) {
      this.oAuthSignOutRedirectOrReject(reject);
    } else {
      this.oAuthSignOutAndResolve(resolve);
    }
  };

  AuthClass.prototype.oAuthSignOutAndResolve = function (resolve) {
    this._oAuthHandler.signOut();

    resolve();
  };

  AuthClass.prototype.oAuthSignOutRedirectOrReject = function (reject) {
    this._oAuthHandler.signOut(); // this method redirects url
    // App should be redirected to another url otherwise it will reject


    setTimeout(function () {
      return reject('Signout timeout fail');
    }, 3000);
  };
  /**
   * Sign out method
   * @
   * @return - A promise resolved if success
   */


  AuthClass.prototype.signOut = function (opts) {
    return __awaiter(this, void 0, void 0, function () {
      var e_9, user;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2,, 3]);

            return [4
            /*yield*/
            , this.cleanCachedItems()];

          case 1:
            _a.sent();

            return [3
            /*break*/
            , 3];

          case 2:
            e_9 = _a.sent();
            logger.debug('failed to clear cached items');
            return [3
            /*break*/
            , 3];

          case 3:
            if (!this.userPool) return [3
            /*break*/
            , 7];
            user = this.userPool.getCurrentUser();
            if (!user) return [3
            /*break*/
            , 5];
            return [4
            /*yield*/
            , this.cognitoIdentitySignOut(opts, user)];

          case 4:
            _a.sent();

            return [3
            /*break*/
            , 6];

          case 5:
            logger.debug('no current Cognito user');
            _a.label = 6;

          case 6:
            return [3
            /*break*/
            , 8];

          case 7:
            logger.debug('no Congito User pool');
            _a.label = 8;

          case 8:
            /**
             * Note for future refactor - no reliable way to get username with
             * Cognito User Pools vs Identity when federating with Social Providers
             * This is why we need a well structured session object that can be inspected
             * and information passed back in the message below for Hub dispatch
             */
            dispatchAuthEvent('signOut', this.user, "A user has been signed out");
            this.user = null;
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  AuthClass.prototype.cleanCachedItems = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            // clear cognito cached item
            return [4
            /*yield*/
            , this.Credentials.clear()];

          case 1:
            // clear cognito cached item
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };
  /**
   * Change a password for an authenticated user
   * @param {Object} user - The CognitoUser object
   * @param {String} oldPassword - the current password
   * @param {String} newPassword - the requested new password
   * @return - A promise resolves if success
   */


  AuthClass.prototype.changePassword = function (user, oldPassword, newPassword, clientMetadata) {
    var _this = this;

    if (clientMetadata === void 0) {
      clientMetadata = this._config.clientMetadata;
    }

    return new Promise(function (resolve, reject) {
      _this.userSession(user).then(function (session) {
        user.changePassword(oldPassword, newPassword, function (err, data) {
          if (err) {
            logger.debug('change password failure', err);
            return reject(err);
          } else {
            return resolve(data);
          }
        }, clientMetadata);
      });
    });
  };
  /**
   * Initiate a forgot password request
   * @param {String} username - the username to change password
   * @return - A promise resolves if success
   */


  AuthClass.prototype.forgotPassword = function (username, clientMetadata) {
    if (clientMetadata === void 0) {
      clientMetadata = this._config.clientMetadata;
    }

    if (!this.userPool) {
      return this.rejectNoUserPool();
    }

    if (!username) {
      return this.rejectAuthError(_types_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthErrorTypes"].EmptyUsername);
    }

    var user = this.createCognitoUser(username);
    return new Promise(function (resolve, reject) {
      user.forgotPassword({
        onSuccess: function onSuccess() {
          resolve();
          return;
        },
        onFailure: function onFailure(err) {
          logger.debug('forgot password failure', err);
          dispatchAuthEvent('forgotPassword_failure', err, username + " forgotPassword failed");
          reject(err);
          return;
        },
        inputVerificationCode: function inputVerificationCode(data) {
          dispatchAuthEvent('forgotPassword', user, username + " has initiated forgot password flow");
          resolve(data);
          return;
        }
      }, clientMetadata);
    });
  };
  /**
   * Confirm a new password using a confirmation Code
   * @param {String} username - The username
   * @param {String} code - The confirmation code
   * @param {String} password - The new password
   * @return - A promise that resolves if success
   */


  AuthClass.prototype.forgotPasswordSubmit = function (username, code, password, clientMetadata) {
    if (clientMetadata === void 0) {
      clientMetadata = this._config.clientMetadata;
    }

    if (!this.userPool) {
      return this.rejectNoUserPool();
    }

    if (!username) {
      return this.rejectAuthError(_types_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthErrorTypes"].EmptyUsername);
    }

    if (!code) {
      return this.rejectAuthError(_types_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthErrorTypes"].EmptyCode);
    }

    if (!password) {
      return this.rejectAuthError(_types_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthErrorTypes"].EmptyPassword);
    }

    var user = this.createCognitoUser(username);
    return new Promise(function (resolve, reject) {
      user.confirmPassword(code, password, {
        onSuccess: function onSuccess() {
          dispatchAuthEvent('forgotPasswordSubmit', user, username + " forgotPasswordSubmit successful");
          resolve();
          return;
        },
        onFailure: function onFailure(err) {
          dispatchAuthEvent('forgotPasswordSubmit_failure', err, username + " forgotPasswordSubmit failed");
          reject(err);
          return;
        }
      }, clientMetadata);
    });
  };
  /**
   * Get user information
   * @async
   * @return {Object }- current User's information
   */


  AuthClass.prototype.currentUserInfo = function () {
    return __awaiter(this, void 0, void 0, function () {
      var source, user, attributes, userAttrs, credentials, e_10, info, err_1, user;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            source = this.Credentials.getCredSource();
            if (!(!source || source === 'aws' || source === 'userPool')) return [3
            /*break*/
            , 9];
            return [4
            /*yield*/
            , this.currentUserPoolUser()["catch"](function (err) {
              return logger.debug(err);
            })];

          case 1:
            user = _a.sent();

            if (!user) {
              return [2
              /*return*/
              , null];
            }

            _a.label = 2;

          case 2:
            _a.trys.push([2, 8,, 9]);

            return [4
            /*yield*/
            , this.userAttributes(user)];

          case 3:
            attributes = _a.sent();
            userAttrs = this.attributesToObject(attributes);
            credentials = null;
            _a.label = 4;

          case 4:
            _a.trys.push([4, 6,, 7]);

            return [4
            /*yield*/
            , this.currentCredentials()];

          case 5:
            credentials = _a.sent();
            return [3
            /*break*/
            , 7];

          case 6:
            e_10 = _a.sent();
            logger.debug('Failed to retrieve credentials while getting current user info', e_10);
            return [3
            /*break*/
            , 7];

          case 7:
            info = {
              id: credentials ? credentials.identityId : undefined,
              username: user.getUsername(),
              attributes: userAttrs
            };
            return [2
            /*return*/
            , info];

          case 8:
            err_1 = _a.sent();
            logger.debug('currentUserInfo error', err_1);
            return [2
            /*return*/
            , {}];

          case 9:
            if (source === 'federated') {
              user = this.user;
              return [2
              /*return*/
              , user ? user : {}];
            }

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  AuthClass.prototype.federatedSignIn = function (providerOrOptions, response, user) {
    return __awaiter(this, void 0, void 0, function () {
      var options, provider, customState, client_id, redirect_uri, provider, loggedInUser, token, identity_id, expires_at, credentials, currentUser;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!this._config.identityPoolId && !this._config.userPoolId) {
              throw new Error("Federation requires either a User Pool or Identity Pool in config");
            } // Ensure backwards compatability


            if (typeof providerOrOptions === 'undefined') {
              if (this._config.identityPoolId && !this._config.userPoolId) {
                throw new Error("Federation with Identity Pools requires tokens passed as arguments");
              }
            }

            if (!(Object(_types__WEBPACK_IMPORTED_MODULE_0__["isFederatedSignInOptions"])(providerOrOptions) || Object(_types__WEBPACK_IMPORTED_MODULE_0__["isFederatedSignInOptionsCustom"])(providerOrOptions) || Object(_types__WEBPACK_IMPORTED_MODULE_0__["hasCustomState"])(providerOrOptions) || typeof providerOrOptions === 'undefined')) return [3
            /*break*/
            , 1];
            options = providerOrOptions || {
              provider: _types_Auth__WEBPACK_IMPORTED_MODULE_7__["CognitoHostedUIIdentityProvider"].Cognito
            };
            provider = Object(_types__WEBPACK_IMPORTED_MODULE_0__["isFederatedSignInOptions"])(options) ? options.provider : options.customProvider;
            customState = Object(_types__WEBPACK_IMPORTED_MODULE_0__["isFederatedSignInOptions"])(options) ? options.customState : options.customState;

            if (this._config.userPoolId) {
              client_id = Object(_types__WEBPACK_IMPORTED_MODULE_0__["isCognitoHostedOpts"])(this._config.oauth) ? this._config.userPoolWebClientId : this._config.oauth.clientID;
              redirect_uri = Object(_types__WEBPACK_IMPORTED_MODULE_0__["isCognitoHostedOpts"])(this._config.oauth) ? this._config.oauth.redirectSignIn : this._config.oauth.redirectUri;

              this._oAuthHandler.oauthSignIn(this._config.oauth.responseType, this._config.oauth.domain, redirect_uri, client_id, provider, customState);
            }

            return [3
            /*break*/
            , 4];

          case 1:
            provider = providerOrOptions; // To check if the user is already logged in

            try {
              loggedInUser = JSON.stringify(JSON.parse(this._storage.getItem('aws-amplify-federatedInfo')).user);

              if (loggedInUser) {
                logger.warn("There is already a signed in user: " + loggedInUser + " in your app.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tYou should not call Auth.federatedSignIn method again as it may cause unexpected behavior.");
              }
            } catch (e) {}

            token = response.token, identity_id = response.identity_id, expires_at = response.expires_at;
            return [4
            /*yield*/
            , this.Credentials.set({
              provider: provider,
              token: token,
              identity_id: identity_id,
              user: user,
              expires_at: expires_at
            }, 'federation')];

          case 2:
            credentials = _a.sent();
            return [4
            /*yield*/
            , this.currentAuthenticatedUser()];

          case 3:
            currentUser = _a.sent();
            dispatchAuthEvent('signIn', currentUser, "A user " + currentUser.username + " has been signed in");
            logger.debug('federated sign in credentials', credentials);
            return [2
            /*return*/
            , credentials];

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  };
  /**
   * Used to complete the OAuth flow with or without the Cognito Hosted UI
   * @param {String} URL - optional parameter for customers to pass in the response URL
   */


  AuthClass.prototype._handleAuthResponse = function (URL) {
    return __awaiter(this, void 0, void 0, function () {
      var currentUrl, hasCodeOrError, hasTokenOrError, _a, accessToken, idToken, refreshToken, state, session, credentials, isCustomStateIncluded, currentUser, customState, err_2;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            if (this.oAuthFlowInProgress) {
              logger.debug("Skipping URL " + URL + " current flow in progress");
              return [2
              /*return*/
              ];
            }

            _b.label = 1;

          case 1:
            _b.trys.push([1,, 8, 9]);

            this.oAuthFlowInProgress = true;

            if (!this._config.userPoolId) {
              throw new Error("OAuth responses require a User Pool defined in config");
            }

            dispatchAuthEvent('parsingCallbackUrl', {
              url: URL
            }, "The callback url is being parsed");
            currentUrl = URL || (_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["JS"].browserOrNode().isBrowser ? window.location.href : '');
            hasCodeOrError = !!(Object(url__WEBPACK_IMPORTED_MODULE_3__["parse"])(currentUrl).query || '').split('&').map(function (entry) {
              return entry.split('=');
            }).find(function (_a) {
              var _b = __read(_a, 1),
                  k = _b[0];

              return k === 'code' || k === 'error';
            });
            hasTokenOrError = !!(Object(url__WEBPACK_IMPORTED_MODULE_3__["parse"])(currentUrl).hash || '#').substr(1).split('&').map(function (entry) {
              return entry.split('=');
            }).find(function (_a) {
              var _b = __read(_a, 1),
                  k = _b[0];

              return k === 'access_token' || k === 'error';
            });
            if (!(hasCodeOrError || hasTokenOrError)) return [3
            /*break*/
            , 7];

            this._storage.setItem('amplify-redirected-from-hosted-ui', 'true');

            _b.label = 2;

          case 2:
            _b.trys.push([2, 6,, 7]);

            return [4
            /*yield*/
            , this._oAuthHandler.handleAuthResponse(currentUrl)];

          case 3:
            _a = _b.sent(), accessToken = _a.accessToken, idToken = _a.idToken, refreshToken = _a.refreshToken, state = _a.state;
            session = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["CognitoUserSession"]({
              IdToken: new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["CognitoIdToken"]({
                IdToken: idToken
              }),
              RefreshToken: new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["CognitoRefreshToken"]({
                RefreshToken: refreshToken
              }),
              AccessToken: new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["CognitoAccessToken"]({
                AccessToken: accessToken
              })
            });
            credentials = void 0;
            if (!this._config.identityPoolId) return [3
            /*break*/
            , 5];
            return [4
            /*yield*/
            , this.Credentials.set(session, 'session')];

          case 4:
            credentials = _b.sent();
            logger.debug('AWS credentials', credentials);
            _b.label = 5;

          case 5:
            isCustomStateIncluded = /-/.test(state);
            currentUser = this.createCognitoUser(session.getIdToken().decodePayload()['cognito:username']); // This calls cacheTokens() in Cognito SDK

            currentUser.setSignInUserSession(session);

            if (window && typeof window.history !== 'undefined') {
              window.history.replaceState({}, null, this._config.oauth.redirectSignIn);
            }

            dispatchAuthEvent('signIn', currentUser, "A user " + currentUser.getUsername() + " has been signed in");
            dispatchAuthEvent('cognitoHostedUI', currentUser, "A user " + currentUser.getUsername() + " has been signed in via Cognito Hosted UI");

            if (isCustomStateIncluded) {
              customState = state.split('-').splice(1).join('-');
              dispatchAuthEvent('customOAuthState', Object(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["urlSafeDecode"])(customState), "State for user " + currentUser.getUsername());
            } //#endregion


            return [2
            /*return*/
            , credentials];

          case 6:
            err_2 = _b.sent();
            logger.debug('Error in cognito hosted auth response', err_2);
            dispatchAuthEvent('signIn_failure', err_2, "The OAuth response flow failed");
            dispatchAuthEvent('cognitoHostedUI_failure', err_2, "A failure occurred when returning to the Cognito Hosted UI");
            dispatchAuthEvent('customState_failure', err_2, "A failure occurred when returning state");
            return [3
            /*break*/
            , 7];

          case 7:
            return [3
            /*break*/
            , 9];

          case 8:
            this.oAuthFlowInProgress = false;
            return [7
            /*endfinally*/
            ];

          case 9:
            return [2
            /*return*/
            ];
        }
      });
    });
  };
  /**
   * Compact version of credentials
   * @param {Object} credentials
   * @return {Object} - Credentials
   */


  AuthClass.prototype.essentialCredentials = function (credentials) {
    return {
      accessKeyId: credentials.accessKeyId,
      sessionToken: credentials.sessionToken,
      secretAccessKey: credentials.secretAccessKey,
      identityId: credentials.identityId,
      authenticated: credentials.authenticated
    };
  };

  AuthClass.prototype.attributesToObject = function (attributes) {
    var _this = this;

    var obj = {};

    if (attributes) {
      attributes.map(function (attribute) {
        if (attribute.Name === 'email_verified' || attribute.Name === 'phone_number_verified') {
          obj[attribute.Name] = _this.isTruthyString(attribute.Value) || attribute.Value === true;
        } else {
          obj[attribute.Name] = attribute.Value;
        }
      });
    }

    return obj;
  };

  AuthClass.prototype.isTruthyString = function (value) {
    return typeof value.toLowerCase === 'function' && value.toLowerCase() === 'true';
  };

  AuthClass.prototype.createCognitoUser = function (username) {
    var userData = {
      Username: username,
      Pool: this.userPool
    };
    userData.Storage = this._storage;
    var authenticationFlowType = this._config.authenticationFlowType;
    var user = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["CognitoUser"](userData);

    if (authenticationFlowType) {
      user.setAuthenticationFlowType(authenticationFlowType);
    }

    return user;
  };

  AuthClass.prototype._isValidAuthStorage = function (obj) {
    // We need to check if the obj has the functions of Storage
    return !!obj && typeof obj.getItem === 'function' && typeof obj.setItem === 'function' && typeof obj.removeItem === 'function' && typeof obj.clear === 'function';
  };

  AuthClass.prototype.noUserPoolErrorHandler = function (config) {
    if (config) {
      if (!config.userPoolId || !config.identityPoolId) {
        return _types_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthErrorTypes"].MissingAuthConfig;
      }
    }

    return _types_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthErrorTypes"].NoConfig;
  };

  AuthClass.prototype.rejectAuthError = function (type) {
    return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_6__["AuthError"](type));
  };

  AuthClass.prototype.rejectNoUserPool = function () {
    var type = this.noUserPoolErrorHandler(this._config);
    return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_6__["NoUserPoolError"](type));
  };

  AuthClass.prototype.rememberDevice = function () {
    return __awaiter(this, void 0, void 0, function () {
      var currUser, error_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2,, 3]);

            return [4
            /*yield*/
            , this.currentUserPoolUser()];

          case 1:
            currUser = _a.sent();
            return [3
            /*break*/
            , 3];

          case 2:
            error_1 = _a.sent();
            logger.debug('The user is not authenticated by the error', error_1);
            return [2
            /*return*/
            , Promise.reject('The user is not authenticated')];

          case 3:
            currUser.getCachedDeviceKeyAndPassword();
            return [2
            /*return*/
            , new Promise(function (res, rej) {
              currUser.setDeviceStatusRemembered({
                onSuccess: function onSuccess(data) {
                  res(data);
                },
                onFailure: function onFailure(err) {
                  if (err.code === 'InvalidParameterException') {
                    rej(new _Errors__WEBPACK_IMPORTED_MODULE_6__["AuthError"](_types_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthErrorTypes"].DeviceConfig));
                  } else if (err.code === 'NetworkError') {
                    rej(new _Errors__WEBPACK_IMPORTED_MODULE_6__["AuthError"](_types_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthErrorTypes"].NetworkError));
                  } else {
                    rej(err);
                  }
                }
              });
            })];
        }
      });
    });
  };

  AuthClass.prototype.forgetDevice = function () {
    return __awaiter(this, void 0, void 0, function () {
      var currUser, error_2;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2,, 3]);

            return [4
            /*yield*/
            , this.currentUserPoolUser()];

          case 1:
            currUser = _a.sent();
            return [3
            /*break*/
            , 3];

          case 2:
            error_2 = _a.sent();
            logger.debug('The user is not authenticated by the error', error_2);
            return [2
            /*return*/
            , Promise.reject('The user is not authenticated')];

          case 3:
            currUser.getCachedDeviceKeyAndPassword();
            return [2
            /*return*/
            , new Promise(function (res, rej) {
              currUser.forgetDevice({
                onSuccess: function onSuccess(data) {
                  res(data);
                },
                onFailure: function onFailure(err) {
                  if (err.code === 'InvalidParameterException') {
                    rej(new _Errors__WEBPACK_IMPORTED_MODULE_6__["AuthError"](_types_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthErrorTypes"].DeviceConfig));
                  } else if (err.code === 'NetworkError') {
                    rej(new _Errors__WEBPACK_IMPORTED_MODULE_6__["AuthError"](_types_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthErrorTypes"].NetworkError));
                  } else {
                    rej(err);
                  }
                }
              });
            })];
        }
      });
    });
  };

  AuthClass.prototype.fetchDevices = function () {
    return __awaiter(this, void 0, void 0, function () {
      var currUser, error_3;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2,, 3]);

            return [4
            /*yield*/
            , this.currentUserPoolUser()];

          case 1:
            currUser = _a.sent();
            return [3
            /*break*/
            , 3];

          case 2:
            error_3 = _a.sent();
            logger.debug('The user is not authenticated by the error', error_3);
            throw new Error('The user is not authenticated');

          case 3:
            currUser.getCachedDeviceKeyAndPassword();
            return [2
            /*return*/
            , new Promise(function (res, rej) {
              var cb = {
                onSuccess: function onSuccess(data) {
                  var deviceList = data.Devices.map(function (device) {
                    var deviceName = device.DeviceAttributes.find(function (_a) {
                      var Name = _a.Name;
                      return Name === 'device_name';
                    }) || {};
                    var deviceInfo = {
                      id: device.DeviceKey,
                      name: deviceName.Value
                    };
                    return deviceInfo;
                  });
                  res(deviceList);
                },
                onFailure: function onFailure(err) {
                  if (err.code === 'InvalidParameterException') {
                    rej(new _Errors__WEBPACK_IMPORTED_MODULE_6__["AuthError"](_types_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthErrorTypes"].DeviceConfig));
                  } else if (err.code === 'NetworkError') {
                    rej(new _Errors__WEBPACK_IMPORTED_MODULE_6__["AuthError"](_types_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthErrorTypes"].NetworkError));
                  } else {
                    rej(err);
                  }
                }
              };
              currUser.listDevices(MAX_DEVICES, null, cb);
            })];
        }
      });
    });
  };

  return AuthClass;
}();


var Auth = new AuthClass(null);
_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Amplify"].register(Auth);

/***/ }),

/***/ "./lib-esm/Errors.js":
/*!***************************!*\
  !*** ./lib-esm/Errors.js ***!
  \***************************/
/*! exports provided: AuthError, NoUserPoolError, authErrorMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthError", function() { return AuthError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoUserPoolError", function() { return NoUserPoolError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authErrorMessages", function() { return authErrorMessages; });
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-amplify/core */ "@aws-amplify/core");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_AuthErrorStrings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/AuthErrorStrings */ "./lib-esm/common/AuthErrorStrings.js");
/*
 * Copyright 2019-2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();



var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["ConsoleLogger"]('AuthError');

var AuthError = function (_super) {
  __extends(AuthError, _super);

  function AuthError(type) {
    var _this = this;

    var _a = authErrorMessages[type],
        message = _a.message,
        log = _a.log;
    _this = _super.call(this, message) || this; // Hack for making the custom error class work when transpiled to es5
    // TODO: Delete the following 2 lines after we change the build target to >= es2015

    _this.constructor = AuthError;
    Object.setPrototypeOf(_this, AuthError.prototype);
    _this.name = 'AuthError';
    _this.log = log || message;
    logger.error(_this.log);
    return _this;
  }

  return AuthError;
}(Error);



var NoUserPoolError = function (_super) {
  __extends(NoUserPoolError, _super);

  function NoUserPoolError(type) {
    var _this = _super.call(this, type) || this; // Hack for making the custom error class work when transpiled to es5
    // TODO: Delete the following 2 lines after we change the build target to >= es2015


    _this.constructor = NoUserPoolError;
    Object.setPrototypeOf(_this, NoUserPoolError.prototype);
    _this.name = 'NoUserPoolError';
    return _this;
  }

  return NoUserPoolError;
}(AuthError);


var authErrorMessages = {
  noConfig: {
    message: _common_AuthErrorStrings__WEBPACK_IMPORTED_MODULE_1__["AuthErrorStrings"].DEFAULT_MSG,
    log: "\n            Error: Amplify has not been configured correctly.\n            This error is typically caused by one of the following scenarios:\n\n            1. Make sure you're passing the awsconfig object to Amplify.configure() in your app's entry point\n                See https://aws-amplify.github.io/docs/js/authentication#configure-your-app for more information\n            \n            2. There might be multiple conflicting versions of amplify packages in your node_modules.\n\t\t\t\tRefer to our docs site for help upgrading Amplify packages (https://docs.amplify.aws/lib/troubleshooting/upgrading/q/platform/js)\n        "
  },
  missingAuthConfig: {
    message: _common_AuthErrorStrings__WEBPACK_IMPORTED_MODULE_1__["AuthErrorStrings"].DEFAULT_MSG,
    log: "\n            Error: Amplify has not been configured correctly. \n            The configuration object is missing required auth properties.\n            This error is typically caused by one of the following scenarios:\n\n            1. Did you run `amplify push` after adding auth via `amplify add auth`?\n                See https://aws-amplify.github.io/docs/js/authentication#amplify-project-setup for more information\n\n            2. This could also be caused by multiple conflicting versions of amplify packages, see (https://docs.amplify.aws/lib/troubleshooting/upgrading/q/platform/js) for help upgrading Amplify packages.\n        "
  },
  emptyUsername: {
    message: _common_AuthErrorStrings__WEBPACK_IMPORTED_MODULE_1__["AuthErrorStrings"].EMPTY_USERNAME
  },
  // TODO: should include a list of valid sign-in types
  invalidUsername: {
    message: _common_AuthErrorStrings__WEBPACK_IMPORTED_MODULE_1__["AuthErrorStrings"].INVALID_USERNAME
  },
  emptyPassword: {
    message: _common_AuthErrorStrings__WEBPACK_IMPORTED_MODULE_1__["AuthErrorStrings"].EMPTY_PASSWORD
  },
  emptyCode: {
    message: _common_AuthErrorStrings__WEBPACK_IMPORTED_MODULE_1__["AuthErrorStrings"].EMPTY_CODE
  },
  signUpError: {
    message: _common_AuthErrorStrings__WEBPACK_IMPORTED_MODULE_1__["AuthErrorStrings"].SIGN_UP_ERROR,
    log: 'The first parameter should either be non-null string or object'
  },
  noMFA: {
    message: _common_AuthErrorStrings__WEBPACK_IMPORTED_MODULE_1__["AuthErrorStrings"].NO_MFA
  },
  invalidMFA: {
    message: _common_AuthErrorStrings__WEBPACK_IMPORTED_MODULE_1__["AuthErrorStrings"].INVALID_MFA
  },
  emptyChallengeResponse: {
    message: _common_AuthErrorStrings__WEBPACK_IMPORTED_MODULE_1__["AuthErrorStrings"].EMPTY_CHALLENGE
  },
  noUserSession: {
    message: _common_AuthErrorStrings__WEBPACK_IMPORTED_MODULE_1__["AuthErrorStrings"].NO_USER_SESSION
  },
  deviceConfig: {
    message: _common_AuthErrorStrings__WEBPACK_IMPORTED_MODULE_1__["AuthErrorStrings"].DEVICE_CONFIG
  },
  networkError: {
    message: _common_AuthErrorStrings__WEBPACK_IMPORTED_MODULE_1__["AuthErrorStrings"].NETWORK_ERROR
  },
  "default": {
    message: _common_AuthErrorStrings__WEBPACK_IMPORTED_MODULE_1__["AuthErrorStrings"].DEFAULT_MSG
  }
};

/***/ }),

/***/ "./lib-esm/OAuth/OAuth.js":
/*!********************************!*\
  !*** ./lib-esm/OAuth/OAuth.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ "../../node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _urlOpener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./urlOpener */ "./lib-esm/OAuth/urlOpener.js");
/* harmony import */ var _oauthStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./oauthStorage */ "./lib-esm/OAuth/oauthStorage.js");
/* harmony import */ var _types_Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/Auth */ "./lib-esm/types/Auth.js");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aws-amplify/core */ "@aws-amplify/core");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var crypto_js_sha256__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! crypto-js/sha256 */ "./node_modules/crypto-js/sha256.js");
/* harmony import */ var crypto_js_sha256__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(crypto_js_sha256__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var crypto_js_enc_base64__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! crypto-js/enc-base64 */ "./node_modules/crypto-js/enc-base64.js");
/* harmony import */ var crypto_js_enc_base64__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(crypto_js_enc_base64__WEBPACK_IMPORTED_MODULE_6__);
/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

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

var __read = undefined && undefined.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

 // Used for OAuth parsing of Cognito Hosted UI







var AMPLIFY_SYMBOL = typeof Symbol !== 'undefined' && typeof Symbol["for"] === 'function' ? Symbol["for"]('amplify_default') : '@@amplify_default';

var dispatchAuthEvent = function dispatchAuthEvent(event, data, message) {
  _aws_amplify_core__WEBPACK_IMPORTED_MODULE_4__["Hub"].dispatch('auth', {
    event: event,
    data: data,
    message: message
  }, 'Auth', AMPLIFY_SYMBOL);
};

var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_4__["ConsoleLogger"]('OAuth');

var OAuth = function () {
  function OAuth(_a) {
    var config = _a.config,
        cognitoClientId = _a.cognitoClientId,
        _b = _a.scopes,
        scopes = _b === void 0 ? [] : _b;
    this._urlOpener = config.urlOpener || _urlOpener__WEBPACK_IMPORTED_MODULE_1__["launchUri"];
    this._config = config;
    this._cognitoClientId = cognitoClientId;
    if (!this.isValidScopes(scopes)) throw Error('scopes must be a String Array');
    this._scopes = scopes;
  }

  OAuth.prototype.isValidScopes = function (scopes) {
    return Array.isArray(scopes) && scopes.every(function (scope) {
      return typeof scope === 'string';
    });
  };

  OAuth.prototype.oauthSignIn = function (responseType, domain, redirectSignIn, clientId, provider, customState) {
    if (responseType === void 0) {
      responseType = 'code';
    }

    if (provider === void 0) {
      provider = _types_Auth__WEBPACK_IMPORTED_MODULE_3__["CognitoHostedUIIdentityProvider"].Cognito;
    }

    var generatedState = this._generateState(32);
    /* encodeURIComponent is not URL safe, use urlSafeEncode instead. Cognito
    single-encodes/decodes url on first sign in and double-encodes/decodes url
    when user already signed in. Using encodeURIComponent, Base32, Base64 add
    characters % or = which on further encoding becomes unsafe. '=' create issue
    for parsing query params.
    Refer: https://github.com/aws-amplify/amplify-js/issues/5218 */


    var state = customState ? generatedState + "-" + Object(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_4__["urlSafeEncode"])(customState) : generatedState;
    _oauthStorage__WEBPACK_IMPORTED_MODULE_2__["setState"](state);

    var pkce_key = this._generateRandom(128);

    _oauthStorage__WEBPACK_IMPORTED_MODULE_2__["setPKCE"](pkce_key);

    var code_challenge = this._generateChallenge(pkce_key);

    var code_challenge_method = 'S256';

    var scopesString = this._scopes.join(' ');

    var queryString = Object.entries(__assign(__assign({
      redirect_uri: redirectSignIn,
      response_type: responseType,
      client_id: clientId,
      identity_provider: provider,
      scope: scopesString,
      state: state
    }, responseType === 'code' ? {
      code_challenge: code_challenge
    } : {}), responseType === 'code' ? {
      code_challenge_method: code_challenge_method
    } : {})).map(function (_a) {
      var _b = __read(_a, 2),
          k = _b[0],
          v = _b[1];

      return encodeURIComponent(k) + "=" + encodeURIComponent(v);
    }).join('&');
    var URL = "https://" + domain + "/oauth2/authorize?" + queryString;
    logger.debug("Redirecting to " + URL);

    this._urlOpener(URL, redirectSignIn);
  };

  OAuth.prototype._handleCodeFlow = function (currentUrl) {
    return __awaiter(this, void 0, void 0, function () {
      var code, currentUrlPathname, redirectSignInPathname, oAuthTokenEndpoint, client_id, redirect_uri, code_verifier, oAuthTokenBody, body, _a, access_token, refresh_token, id_token, error;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            code = (Object(url__WEBPACK_IMPORTED_MODULE_0__["parse"])(currentUrl).query || '').split('&').map(function (pairings) {
              return pairings.split('=');
            }).reduce(function (accum, _a) {
              var _b;

              var _c = __read(_a, 2),
                  k = _c[0],
                  v = _c[1];

              return __assign(__assign({}, accum), (_b = {}, _b[k] = v, _b));
            }, {
              code: undefined
            }).code;
            currentUrlPathname = Object(url__WEBPACK_IMPORTED_MODULE_0__["parse"])(currentUrl).pathname || '/';
            redirectSignInPathname = Object(url__WEBPACK_IMPORTED_MODULE_0__["parse"])(this._config.redirectSignIn).pathname || '/';

            if (!code || currentUrlPathname !== redirectSignInPathname) {
              return [2
              /*return*/
              ];
            }

            oAuthTokenEndpoint = 'https://' + this._config.domain + '/oauth2/token';
            dispatchAuthEvent('codeFlow', {}, "Retrieving tokens from " + oAuthTokenEndpoint);
            client_id = Object(_types_Auth__WEBPACK_IMPORTED_MODULE_3__["isCognitoHostedOpts"])(this._config) ? this._cognitoClientId : this._config.clientID;
            redirect_uri = Object(_types_Auth__WEBPACK_IMPORTED_MODULE_3__["isCognitoHostedOpts"])(this._config) ? this._config.redirectSignIn : this._config.redirectUri;
            code_verifier = _oauthStorage__WEBPACK_IMPORTED_MODULE_2__["getPKCE"]();
            oAuthTokenBody = __assign({
              grant_type: 'authorization_code',
              code: code,
              client_id: client_id,
              redirect_uri: redirect_uri
            }, code_verifier ? {
              code_verifier: code_verifier
            } : {});
            logger.debug("Calling token endpoint: " + oAuthTokenEndpoint + " with", oAuthTokenBody);
            body = Object.entries(oAuthTokenBody).map(function (_a) {
              var _b = __read(_a, 2),
                  k = _b[0],
                  v = _b[1];

              return encodeURIComponent(k) + "=" + encodeURIComponent(v);
            }).join('&');
            return [4
            /*yield*/
            , fetch(oAuthTokenEndpoint, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              body: body
            })];

          case 1:
            return [4
            /*yield*/
            , _b.sent().json()];

          case 2:
            _a = _b.sent(), access_token = _a.access_token, refresh_token = _a.refresh_token, id_token = _a.id_token, error = _a.error;

            if (error) {
              throw new Error(error);
            }

            return [2
            /*return*/
            , {
              accessToken: access_token,
              refreshToken: refresh_token,
              idToken: id_token
            }];
        }
      });
    });
  };

  OAuth.prototype._handleImplicitFlow = function (currentUrl) {
    return __awaiter(this, void 0, void 0, function () {
      var _a, id_token, access_token;

      return __generator(this, function (_b) {
        _a = (Object(url__WEBPACK_IMPORTED_MODULE_0__["parse"])(currentUrl).hash || '#').substr(1) // Remove # from returned code
        .split('&').map(function (pairings) {
          return pairings.split('=');
        }).reduce(function (accum, _a) {
          var _b;

          var _c = __read(_a, 2),
              k = _c[0],
              v = _c[1];

          return __assign(__assign({}, accum), (_b = {}, _b[k] = v, _b));
        }, {
          id_token: undefined,
          access_token: undefined
        }), id_token = _a.id_token, access_token = _a.access_token;
        dispatchAuthEvent('implicitFlow', {}, "Got tokens from " + currentUrl);
        logger.debug("Retrieving implicit tokens from " + currentUrl + " with");
        return [2
        /*return*/
        , {
          accessToken: access_token,
          idToken: id_token,
          refreshToken: null
        }];
      });
    });
  };

  OAuth.prototype.handleAuthResponse = function (currentUrl) {
    return __awaiter(this, void 0, void 0, function () {
      var urlParams, error, error_description, state, _a, _b, e_1;

      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            _c.trys.push([0, 5,, 6]);

            urlParams = currentUrl ? __assign(__assign({}, (Object(url__WEBPACK_IMPORTED_MODULE_0__["parse"])(currentUrl).hash || '#').substr(1).split('&').map(function (entry) {
              return entry.split('=');
            }).reduce(function (acc, _a) {
              var _b = __read(_a, 2),
                  k = _b[0],
                  v = _b[1];

              return acc[k] = v, acc;
            }, {})), (Object(url__WEBPACK_IMPORTED_MODULE_0__["parse"])(currentUrl).query || '').split('&').map(function (entry) {
              return entry.split('=');
            }).reduce(function (acc, _a) {
              var _b = __read(_a, 2),
                  k = _b[0],
                  v = _b[1];

              return acc[k] = v, acc;
            }, {})) : {};
            error = urlParams.error, error_description = urlParams.error_description;

            if (error) {
              throw new Error(error_description);
            }

            state = this._validateState(urlParams);
            logger.debug("Starting " + this._config.responseType + " flow with " + currentUrl);
            if (!(this._config.responseType === 'code')) return [3
            /*break*/
            , 2];
            _a = [{}];
            return [4
            /*yield*/
            , this._handleCodeFlow(currentUrl)];

          case 1:
            return [2
            /*return*/
            , __assign.apply(void 0, [__assign.apply(void 0, _a.concat([_c.sent()])), {
              state: state
            }])];

          case 2:
            _b = [{}];
            return [4
            /*yield*/
            , this._handleImplicitFlow(currentUrl)];

          case 3:
            return [2
            /*return*/
            , __assign.apply(void 0, [__assign.apply(void 0, _b.concat([_c.sent()])), {
              state: state
            }])];

          case 4:
            return [3
            /*break*/
            , 6];

          case 5:
            e_1 = _c.sent();
            logger.error("Error handling auth response.", e_1);
            throw e_1;

          case 6:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  OAuth.prototype._validateState = function (urlParams) {
    if (!urlParams) {
      return;
    }

    var savedState = _oauthStorage__WEBPACK_IMPORTED_MODULE_2__["getState"]();
    var returnedState = urlParams.state; // This is because savedState only exists if the flow was initiated by Amplify

    if (savedState && savedState !== returnedState) {
      throw new Error('Invalid state in OAuth flow');
    }

    return returnedState;
  };

  OAuth.prototype.signOut = function () {
    return __awaiter(this, void 0, void 0, function () {
      var oAuthLogoutEndpoint, client_id, signout_uri;
      return __generator(this, function (_a) {
        oAuthLogoutEndpoint = 'https://' + this._config.domain + '/logout?';
        client_id = Object(_types_Auth__WEBPACK_IMPORTED_MODULE_3__["isCognitoHostedOpts"])(this._config) ? this._cognitoClientId : this._config.oauth.clientID;
        signout_uri = Object(_types_Auth__WEBPACK_IMPORTED_MODULE_3__["isCognitoHostedOpts"])(this._config) ? this._config.redirectSignOut : this._config.returnTo;
        oAuthLogoutEndpoint += Object.entries({
          client_id: client_id,
          logout_uri: encodeURIComponent(signout_uri)
        }).map(function (_a) {
          var _b = __read(_a, 2),
              k = _b[0],
              v = _b[1];

          return k + "=" + v;
        }).join('&');
        dispatchAuthEvent('oAuthSignOut', {
          oAuth: 'signOut'
        }, "Signing out from " + oAuthLogoutEndpoint);
        logger.debug("Signing out from " + oAuthLogoutEndpoint);
        return [2
        /*return*/
        , this._urlOpener(oAuthLogoutEndpoint)];
      });
    });
  };

  OAuth.prototype._generateState = function (length) {
    var result = '';
    var i = length;
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (; i > 0; --i) {
      result += chars[Math.round(Math.random() * (chars.length - 1))];
    }

    return result;
  };

  OAuth.prototype._generateChallenge = function (code) {
    return this._base64URL(crypto_js_sha256__WEBPACK_IMPORTED_MODULE_5___default()(code));
  };

  OAuth.prototype._base64URL = function (string) {
    return string.toString(crypto_js_enc_base64__WEBPACK_IMPORTED_MODULE_6___default.a).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  };

  OAuth.prototype._generateRandom = function (size) {
    var CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
    var buffer = new Uint8Array(size);

    if (typeof window !== 'undefined' && !!window.crypto) {
      window.crypto.getRandomValues(buffer);
    } else {
      for (var i = 0; i < size; i += 1) {
        buffer[i] = Math.random() * CHARSET.length | 0;
      }
    }

    return this._bufferToString(buffer);
  };

  OAuth.prototype._bufferToString = function (buffer) {
    var CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var state = [];

    for (var i = 0; i < buffer.byteLength; i += 1) {
      var index = buffer[i] % CHARSET.length;
      state.push(CHARSET[index]);
    }

    return state.join('');
  };

  return OAuth;
}();

/* harmony default export */ __webpack_exports__["default"] = (OAuth);

/***/ }),

/***/ "./lib-esm/OAuth/oauthStorage.js":
/*!***************************************!*\
  !*** ./lib-esm/OAuth/oauthStorage.js ***!
  \***************************************/
/*! exports provided: setState, getState, setPKCE, getPKCE, clearAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setState", function() { return setState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPKCE", function() { return setPKCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPKCE", function() { return getPKCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearAll", function() { return clearAll; });
/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
var setState = function setState(state) {
  window.sessionStorage.setItem('oauth_state', state);
};
var getState = function getState() {
  var oauth_state = window.sessionStorage.getItem('oauth_state');
  window.sessionStorage.removeItem('oauth_state');
  return oauth_state;
};
var setPKCE = function setPKCE(private_key) {
  window.sessionStorage.setItem('ouath_pkce_key', private_key);
};
var getPKCE = function getPKCE() {
  var ouath_pkce_key = window.sessionStorage.getItem('ouath_pkce_key');
  window.sessionStorage.removeItem('ouath_pkce_key');
  return ouath_pkce_key;
};
var clearAll = function clearAll() {
  window.sessionStorage.removeItem('ouath_pkce_key');
  window.sessionStorage.removeItem('oauth_state');
};

/***/ }),

/***/ "./lib-esm/OAuth/urlOpener.js":
/*!************************************!*\
  !*** ./lib-esm/OAuth/urlOpener.js ***!
  \************************************/
/*! exports provided: launchUri */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "launchUri", function() { return launchUri; });
/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
var SELF = '_self';
var launchUri = function launchUri(url) {
  var windowProxy = window.open(url, SELF);

  if (windowProxy) {
    return Promise.resolve(windowProxy);
  } else {
    return Promise.reject();
  }
};

/***/ }),

/***/ "./lib-esm/common/AuthErrorStrings.js":
/*!********************************************!*\
  !*** ./lib-esm/common/AuthErrorStrings.js ***!
  \********************************************/
/*! exports provided: AuthErrorStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthErrorStrings", function() { return AuthErrorStrings; });
var AuthErrorStrings;

(function (AuthErrorStrings) {
  AuthErrorStrings["DEFAULT_MSG"] = "Authentication Error";
  AuthErrorStrings["EMPTY_EMAIL"] = "Email cannot be empty";
  AuthErrorStrings["EMPTY_PHONE"] = "Phone number cannot be empty";
  AuthErrorStrings["EMPTY_USERNAME"] = "Username cannot be empty";
  AuthErrorStrings["INVALID_USERNAME"] = "The username should either be a string or one of the sign in types";
  AuthErrorStrings["EMPTY_PASSWORD"] = "Password cannot be empty";
  AuthErrorStrings["EMPTY_CODE"] = "Confirmation code cannot be empty";
  AuthErrorStrings["SIGN_UP_ERROR"] = "Error creating account";
  AuthErrorStrings["NO_MFA"] = "No valid MFA method provided";
  AuthErrorStrings["INVALID_MFA"] = "Invalid MFA type";
  AuthErrorStrings["EMPTY_CHALLENGE"] = "Challenge response cannot be empty";
  AuthErrorStrings["NO_USER_SESSION"] = "Failed to get the session because the user is empty";
  AuthErrorStrings["NETWORK_ERROR"] = "Network Error";
  AuthErrorStrings["DEVICE_CONFIG"] = "Device tracking has not been configured in this User Pool";
})(AuthErrorStrings || (AuthErrorStrings = {}));

/***/ }),

/***/ "./lib-esm/index.js":
/*!**************************!*\
  !*** ./lib-esm/index.js ***!
  \**************************/
/*! exports provided: default, Auth, CognitoUser, CookieStorage, CognitoHostedUIIdentityProvider, appendToCognitoUserAgent, AuthErrorStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Auth */ "./lib-esm/Auth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Auth", function() { return _Auth__WEBPACK_IMPORTED_MODULE_0__["Auth"]; });

/* harmony import */ var _types_Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/Auth */ "./lib-esm/types/Auth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CognitoHostedUIIdentityProvider", function() { return _types_Auth__WEBPACK_IMPORTED_MODULE_1__["CognitoHostedUIIdentityProvider"]; });

/* harmony import */ var amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amazon-cognito-identity-js */ "../amazon-cognito-identity-js/es/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CognitoUser", function() { return amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["CognitoUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CookieStorage", function() { return amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["CookieStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appendToCognitoUserAgent", function() { return amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["appendToCognitoUserAgent"]; });

/* harmony import */ var _common_AuthErrorStrings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/AuthErrorStrings */ "./lib-esm/common/AuthErrorStrings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthErrorStrings", function() { return _common_AuthErrorStrings__WEBPACK_IMPORTED_MODULE_3__["AuthErrorStrings"]; });

/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */




/**
 * @deprecated use named import
 */

/* harmony default export */ __webpack_exports__["default"] = (_Auth__WEBPACK_IMPORTED_MODULE_0__["Auth"]);


/***/ }),

/***/ "./lib-esm/types/Auth.js":
/*!*******************************!*\
  !*** ./lib-esm/types/Auth.js ***!
  \*******************************/
/*! exports provided: CognitoHostedUIIdentityProvider, isFederatedSignInOptions, isFederatedSignInOptionsCustom, hasCustomState, isCognitoHostedOpts, AuthErrorTypes, isUsernamePasswordOpts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CognitoHostedUIIdentityProvider", function() { return CognitoHostedUIIdentityProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFederatedSignInOptions", function() { return isFederatedSignInOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFederatedSignInOptionsCustom", function() { return isFederatedSignInOptionsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasCustomState", function() { return hasCustomState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCognitoHostedOpts", function() { return isCognitoHostedOpts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthErrorTypes", function() { return AuthErrorTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUsernamePasswordOpts", function() { return isUsernamePasswordOpts; });
/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
var CognitoHostedUIIdentityProvider;

(function (CognitoHostedUIIdentityProvider) {
  CognitoHostedUIIdentityProvider["Cognito"] = "COGNITO";
  CognitoHostedUIIdentityProvider["Google"] = "Google";
  CognitoHostedUIIdentityProvider["Facebook"] = "Facebook";
  CognitoHostedUIIdentityProvider["Amazon"] = "LoginWithAmazon";
  CognitoHostedUIIdentityProvider["Apple"] = "SignInWithApple";
})(CognitoHostedUIIdentityProvider || (CognitoHostedUIIdentityProvider = {}));

function isFederatedSignInOptions(obj) {
  var keys = ['provider'];
  return obj && !!keys.find(function (k) {
    return obj.hasOwnProperty(k);
  });
}
function isFederatedSignInOptionsCustom(obj) {
  var keys = ['customProvider'];
  return obj && !!keys.find(function (k) {
    return obj.hasOwnProperty(k);
  });
}
function hasCustomState(obj) {
  var keys = ['customState'];
  return obj && !!keys.find(function (k) {
    return obj.hasOwnProperty(k);
  });
}
function isCognitoHostedOpts(oauth) {
  return oauth.redirectSignIn !== undefined;
}
var AuthErrorTypes;

(function (AuthErrorTypes) {
  AuthErrorTypes["NoConfig"] = "noConfig";
  AuthErrorTypes["MissingAuthConfig"] = "missingAuthConfig";
  AuthErrorTypes["EmptyUsername"] = "emptyUsername";
  AuthErrorTypes["InvalidUsername"] = "invalidUsername";
  AuthErrorTypes["EmptyPassword"] = "emptyPassword";
  AuthErrorTypes["EmptyCode"] = "emptyCode";
  AuthErrorTypes["SignUpError"] = "signUpError";
  AuthErrorTypes["NoMFA"] = "noMFA";
  AuthErrorTypes["InvalidMFA"] = "invalidMFA";
  AuthErrorTypes["EmptyChallengeResponse"] = "emptyChallengeResponse";
  AuthErrorTypes["NoUserSession"] = "noUserSession";
  AuthErrorTypes["Default"] = "default";
  AuthErrorTypes["DeviceConfig"] = "deviceConfig";
  AuthErrorTypes["NetworkError"] = "networkError";
})(AuthErrorTypes || (AuthErrorTypes = {}));

function isUsernamePasswordOpts(obj) {
  return !!obj.username;
}

/***/ }),

/***/ "./lib-esm/types/index.js":
/*!********************************!*\
  !*** ./lib-esm/types/index.js ***!
  \********************************/
/*! exports provided: CognitoHostedUIIdentityProvider, isFederatedSignInOptions, isFederatedSignInOptionsCustom, hasCustomState, isCognitoHostedOpts, AuthErrorTypes, isUsernamePasswordOpts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Auth */ "./lib-esm/types/Auth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CognitoHostedUIIdentityProvider", function() { return _Auth__WEBPACK_IMPORTED_MODULE_0__["CognitoHostedUIIdentityProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFederatedSignInOptions", function() { return _Auth__WEBPACK_IMPORTED_MODULE_0__["isFederatedSignInOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFederatedSignInOptionsCustom", function() { return _Auth__WEBPACK_IMPORTED_MODULE_0__["isFederatedSignInOptionsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasCustomState", function() { return _Auth__WEBPACK_IMPORTED_MODULE_0__["hasCustomState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCognitoHostedOpts", function() { return _Auth__WEBPACK_IMPORTED_MODULE_0__["isCognitoHostedOpts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthErrorTypes", function() { return _Auth__WEBPACK_IMPORTED_MODULE_0__["AuthErrorTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUsernamePasswordOpts", function() { return _Auth__WEBPACK_IMPORTED_MODULE_0__["isUsernamePasswordOpts"]; });

/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */


/***/ }),

/***/ "./lib-esm/urlListener.js":
/*!********************************!*\
  !*** ./lib-esm/urlListener.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-amplify/core */ "@aws-amplify/core");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright 2017-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

/* harmony default export */ __webpack_exports__["default"] = (function (callback) {
  if (_aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["JS"].browserOrNode().isBrowser && window.location) {
    var url = window.location.href;
    callback({
      url: url
    });
  } else if (_aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["JS"].browserOrNode().isNode) {
    // continue building on ssr
    (function () {}); // noop

  } else {
    throw new Error('Not supported');
  }
});

/***/ }),

/***/ "./node_modules/crypto-js/core.js":
/*!****************************************!*\
  !*** ./node_modules/crypto-js/core.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory();
	}
	else {}
}(this, function () {

	/*globals window, global, require*/

	/**
	 * CryptoJS core components.
	 */
	var CryptoJS = CryptoJS || (function (Math, undefined) {

	    var crypto;

	    // Native crypto from window (Browser)
	    if (typeof window !== 'undefined' && window.crypto) {
	        crypto = window.crypto;
	    }

	    // Native crypto in web worker (Browser)
	    if (typeof self !== 'undefined' && self.crypto) {
	        crypto = self.crypto;
	    }

	    // Native crypto from worker
	    if (typeof globalThis !== 'undefined' && globalThis.crypto) {
	        crypto = globalThis.crypto;
	    }

	    // Native (experimental IE 11) crypto from window (Browser)
	    if (!crypto && typeof window !== 'undefined' && window.msCrypto) {
	        crypto = window.msCrypto;
	    }

	    // Native crypto from global (NodeJS)
	    if (!crypto && typeof global !== 'undefined' && global.crypto) {
	        crypto = global.crypto;
	    }

	    // Native crypto import via require (NodeJS)
	    if (!crypto && "function" === 'function') {
	        try {
	            crypto = __webpack_require__(/*! crypto */ 2);
	        } catch (err) {}
	    }

	    /*
	     * Cryptographically secure pseudorandom number generator
	     *
	     * As Math.random() is cryptographically not safe to use
	     */
	    var cryptoSecureRandomInt = function () {
	        if (crypto) {
	            // Use getRandomValues method (Browser)
	            if (typeof crypto.getRandomValues === 'function') {
	                try {
	                    return crypto.getRandomValues(new Uint32Array(1))[0];
	                } catch (err) {}
	            }

	            // Use randomBytes method (NodeJS)
	            if (typeof crypto.randomBytes === 'function') {
	                try {
	                    return crypto.randomBytes(4).readInt32LE();
	                } catch (err) {}
	            }
	        }

	        throw new Error('Native crypto module could not be used to get secure random number.');
	    };

	    /*
	     * Local polyfill of Object.create

	     */
	    var create = Object.create || (function () {
	        function F() {}

	        return function (obj) {
	            var subtype;

	            F.prototype = obj;

	            subtype = new F();

	            F.prototype = null;

	            return subtype;
	        };
	    }());

	    /**
	     * CryptoJS namespace.
	     */
	    var C = {};

	    /**
	     * Library namespace.
	     */
	    var C_lib = C.lib = {};

	    /**
	     * Base object for prototypal inheritance.
	     */
	    var Base = C_lib.Base = (function () {


	        return {
	            /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */
	            extend: function (overrides) {
	                // Spawn
	                var subtype = create(this);

	                // Augment
	                if (overrides) {
	                    subtype.mixIn(overrides);
	                }

	                // Create default initializer
	                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
	                    subtype.init = function () {
	                        subtype.$super.init.apply(this, arguments);
	                    };
	                }

	                // Initializer's prototype is the subtype object
	                subtype.init.prototype = subtype;

	                // Reference supertype
	                subtype.$super = this;

	                return subtype;
	            },

	            /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */
	            create: function () {
	                var instance = this.extend();
	                instance.init.apply(instance, arguments);

	                return instance;
	            },

	            /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */
	            init: function () {
	            },

	            /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */
	            mixIn: function (properties) {
	                for (var propertyName in properties) {
	                    if (properties.hasOwnProperty(propertyName)) {
	                        this[propertyName] = properties[propertyName];
	                    }
	                }

	                // IE won't copy toString using the loop above
	                if (properties.hasOwnProperty('toString')) {
	                    this.toString = properties.toString;
	                }
	            },

	            /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */
	            clone: function () {
	                return this.init.prototype.extend(this);
	            }
	        };
	    }());

	    /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var WordArray = C_lib.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 4;
	            }
	        },

	        /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */
	        toString: function (encoder) {
	            return (encoder || Hex).stringify(this);
	        },

	        /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */
	        concat: function (wordArray) {
	            // Shortcuts
	            var thisWords = this.words;
	            var thatWords = wordArray.words;
	            var thisSigBytes = this.sigBytes;
	            var thatSigBytes = wordArray.sigBytes;

	            // Clamp excess bits
	            this.clamp();

	            // Concat
	            if (thisSigBytes % 4) {
	                // Copy one byte at a time
	                for (var i = 0; i < thatSigBytes; i++) {
	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
	                }
	            } else {
	                // Copy one word at a time
	                for (var j = 0; j < thatSigBytes; j += 4) {
	                    thisWords[(thisSigBytes + j) >>> 2] = thatWords[j >>> 2];
	                }
	            }
	            this.sigBytes += thatSigBytes;

	            // Chainable
	            return this;
	        },

	        /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */
	        clamp: function () {
	            // Shortcuts
	            var words = this.words;
	            var sigBytes = this.sigBytes;

	            // Clamp
	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
	            words.length = Math.ceil(sigBytes / 4);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone.words = this.words.slice(0);

	            return clone;
	        },

	        /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */
	        random: function (nBytes) {
	            var words = [];

	            for (var i = 0; i < nBytes; i += 4) {
	                words.push(cryptoSecureRandomInt());
	            }

	            return new WordArray.init(words, nBytes);
	        }
	    });

	    /**
	     * Encoder namespace.
	     */
	    var C_enc = C.enc = {};

	    /**
	     * Hex encoding strategy.
	     */
	    var Hex = C_enc.Hex = {
	        /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var hexChars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                hexChars.push((bite >>> 4).toString(16));
	                hexChars.push((bite & 0x0f).toString(16));
	            }

	            return hexChars.join('');
	        },

	        /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */
	        parse: function (hexStr) {
	            // Shortcut
	            var hexStrLength = hexStr.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < hexStrLength; i += 2) {
	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
	            }

	            return new WordArray.init(words, hexStrLength / 2);
	        }
	    };

	    /**
	     * Latin1 encoding strategy.
	     */
	    var Latin1 = C_enc.Latin1 = {
	        /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var latin1Chars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                latin1Chars.push(String.fromCharCode(bite));
	            }

	            return latin1Chars.join('');
	        },

	        /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */
	        parse: function (latin1Str) {
	            // Shortcut
	            var latin1StrLength = latin1Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < latin1StrLength; i++) {
	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
	            }

	            return new WordArray.init(words, latin1StrLength);
	        }
	    };

	    /**
	     * UTF-8 encoding strategy.
	     */
	    var Utf8 = C_enc.Utf8 = {
	        /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            try {
	                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
	            } catch (e) {
	                throw new Error('Malformed UTF-8 data');
	            }
	        },

	        /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */
	        parse: function (utf8Str) {
	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
	        }
	    };

	    /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
	        /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */
	        reset: function () {
	            // Initial values
	            this._data = new WordArray.init();
	            this._nDataBytes = 0;
	        },

	        /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */
	        _append: function (data) {
	            // Convert string to WordArray, else assume WordArray already
	            if (typeof data == 'string') {
	                data = Utf8.parse(data);
	            }

	            // Append
	            this._data.concat(data);
	            this._nDataBytes += data.sigBytes;
	        },

	        /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */
	        _process: function (doFlush) {
	            var processedWords;

	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var dataSigBytes = data.sigBytes;
	            var blockSize = this.blockSize;
	            var blockSizeBytes = blockSize * 4;

	            // Count blocks ready
	            var nBlocksReady = dataSigBytes / blockSizeBytes;
	            if (doFlush) {
	                // Round up to include partial blocks
	                nBlocksReady = Math.ceil(nBlocksReady);
	            } else {
	                // Round down to include only full blocks,
	                // less the number of blocks that must remain in the buffer
	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
	            }

	            // Count words ready
	            var nWordsReady = nBlocksReady * blockSize;

	            // Count bytes ready
	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

	            // Process blocks
	            if (nWordsReady) {
	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
	                    // Perform concrete-algorithm logic
	                    this._doProcessBlock(dataWords, offset);
	                }

	                // Remove processed words
	                processedWords = dataWords.splice(0, nWordsReady);
	                data.sigBytes -= nBytesReady;
	            }

	            // Return processed words
	            return new WordArray.init(processedWords, nBytesReady);
	        },

	        /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone._data = this._data.clone();

	            return clone;
	        },

	        _minBufferSize: 0
	    });

	    /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */
	    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         */
	        cfg: Base.extend(),

	        /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */
	        init: function (cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-hasher logic
	            this._doReset();
	        },

	        /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            // Append
	            this._append(messageUpdate);

	            // Update the hash
	            this._process();

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Final message update
	            if (messageUpdate) {
	                this._append(messageUpdate);
	            }

	            // Perform concrete-hasher logic
	            var hash = this._doFinalize();

	            return hash;
	        },

	        blockSize: 512/32,

	        /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */
	        _createHelper: function (hasher) {
	            return function (message, cfg) {
	                return new hasher.init(cfg).finalize(message);
	            };
	        },

	        /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */
	        _createHmacHelper: function (hasher) {
	            return function (message, key) {
	                return new C_algo.HMAC.init(hasher, key).finalize(message);
	            };
	        }
	    });

	    /**
	     * Algorithm namespace.
	     */
	    var C_algo = C.algo = {};

	    return C;
	}(Math));


	return CryptoJS;

}));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/crypto-js/enc-base64.js":
/*!**********************************************!*\
  !*** ./node_modules/crypto-js/enc-base64.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_enc = C.enc;

	    /**
	     * Base64 encoding strategy.
	     */
	    var Base64 = C_enc.Base64 = {
	        /**
	         * Converts a word array to a Base64 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Base64 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;
	            var map = this._map;

	            // Clamp excess bits
	            wordArray.clamp();

	            // Convert
	            var base64Chars = [];
	            for (var i = 0; i < sigBytes; i += 3) {
	                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
	                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
	                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

	                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

	                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
	                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
	                }
	            }

	            // Add padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                while (base64Chars.length % 4) {
	                    base64Chars.push(paddingChar);
	                }
	            }

	            return base64Chars.join('');
	        },

	        /**
	         * Converts a Base64 string to a word array.
	         *
	         * @param {string} base64Str The Base64 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
	         */
	        parse: function (base64Str) {
	            // Shortcuts
	            var base64StrLength = base64Str.length;
	            var map = this._map;
	            var reverseMap = this._reverseMap;

	            if (!reverseMap) {
	                    reverseMap = this._reverseMap = [];
	                    for (var j = 0; j < map.length; j++) {
	                        reverseMap[map.charCodeAt(j)] = j;
	                    }
	            }

	            // Ignore padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                var paddingIndex = base64Str.indexOf(paddingChar);
	                if (paddingIndex !== -1) {
	                    base64StrLength = paddingIndex;
	                }
	            }

	            // Convert
	            return parseLoop(base64Str, base64StrLength, reverseMap);

	        },

	        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
	    };

	    function parseLoop(base64Str, base64StrLength, reverseMap) {
	      var words = [];
	      var nBytes = 0;
	      for (var i = 0; i < base64StrLength; i++) {
	          if (i % 4) {
	              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
	              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
	              var bitsCombined = bits1 | bits2;
	              words[nBytes >>> 2] |= bitsCombined << (24 - (nBytes % 4) * 8);
	              nBytes++;
	          }
	      }
	      return WordArray.create(words, nBytes);
	    }
	}());


	return CryptoJS.enc.Base64;

}));

/***/ }),

/***/ "./node_modules/crypto-js/sha256.js":
/*!******************************************!*\
  !*** ./node_modules/crypto-js/sha256.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Initialization and round constants tables
	    var H = [];
	    var K = [];

	    // Compute constants
	    (function () {
	        function isPrime(n) {
	            var sqrtN = Math.sqrt(n);
	            for (var factor = 2; factor <= sqrtN; factor++) {
	                if (!(n % factor)) {
	                    return false;
	                }
	            }

	            return true;
	        }

	        function getFractionalBits(n) {
	            return ((n - (n | 0)) * 0x100000000) | 0;
	        }

	        var n = 2;
	        var nPrime = 0;
	        while (nPrime < 64) {
	            if (isPrime(n)) {
	                if (nPrime < 8) {
	                    H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
	                }
	                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

	                nPrime++;
	            }

	            n++;
	        }
	    }());

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-256 hash algorithm.
	     */
	    var SHA256 = C_algo.SHA256 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init(H.slice(0));
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];
	            var f = H[5];
	            var g = H[6];
	            var h = H[7];

	            // Computation
	            for (var i = 0; i < 64; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var gamma0x = W[i - 15];
	                    var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
	                                  ((gamma0x << 14) | (gamma0x >>> 18)) ^
	                                   (gamma0x >>> 3);

	                    var gamma1x = W[i - 2];
	                    var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
	                                  ((gamma1x << 13) | (gamma1x >>> 19)) ^
	                                   (gamma1x >>> 10);

	                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
	                }

	                var ch  = (e & f) ^ (~e & g);
	                var maj = (a & b) ^ (a & c) ^ (b & c);

	                var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
	                var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));

	                var t1 = h + sigma1 + ch + K[i] + W[i];
	                var t2 = sigma0 + maj;

	                h = g;
	                g = f;
	                f = e;
	                e = (d + t1) | 0;
	                d = c;
	                c = b;
	                b = a;
	                a = (t1 + t2) | 0;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	            H[5] = (H[5] + f) | 0;
	            H[6] = (H[6] + g) | 0;
	            H[7] = (H[7] + h) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA256('message');
	     *     var hash = CryptoJS.SHA256(wordArray);
	     */
	    C.SHA256 = Hasher._createHelper(SHA256);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA256(message, key);
	     */
	    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
	}(Math));


	return CryptoJS.SHA256;

}));

/***/ }),

/***/ 0:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "@aws-amplify/core":
/*!************************************!*\
  !*** external "@aws-amplify/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__aws_amplify_core__;

/***/ })

/******/ });
});
//# sourceMappingURL=aws-amplify-auth.js.map