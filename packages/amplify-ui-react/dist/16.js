(this["webpackJsonpaws_amplify_react"] = this["webpackJsonpaws_amplify_react"] || []).push([[16],{

/***/ "../amplify-ui-components/dist/esm-es5/amplify-chatbot.entry.js":
/*!**********************************************************************!*\
  !*** ../amplify-ui-components/dist/esm-es5/amplify-chatbot.entry.js ***!
  \**********************************************************************/
/*! exports provided: amplify_chatbot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_chatbot", function() { return AmplifyChatbot; });
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-83f2275b.js */ "../amplify-ui-components/dist/esm-es5/index-83f2275b.js");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "@aws-amplify/core");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/auth */ "@aws-amplify/auth");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Translations-97eed81d.js */ "../amplify-ui-components/dist/esm-es5/Translations-97eed81d.js");
/* harmony import */ var _constants_56d75870_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants-56d75870.js */ "../amplify-ui-components/dist/esm-es5/constants-56d75870.js");
/* harmony import */ var _aws_amplify_interactions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aws-amplify/interactions */ "@aws-amplify/interactions");
/* harmony import */ var _aws_amplify_interactions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_aws_amplify_interactions__WEBPACK_IMPORTED_MODULE_5__);
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






 // AudioRecorder settings

var RECORDER_EXPORT_MIME_TYPE = 'application/octet-stream';
var DEFAULT_EXPORT_SAMPLE_RATE = 16000;
var FFT_SIZE = 2048; // window size in samples for Fast Fourier Transform (FFT)

var FFT_MAX_DECIBELS = -10; // maximum power value in the scaling range for the FFT analysis data

var FFT_MIN_DECIBELS = -90; // minimum power value in the scaling range for the FFT analysis data

var FFT_SMOOTHING_TIME_CONSTANT = 0.85; // averaging constant with the last analysis frame

/**
 * Merges multiple buffers into one.
 */

var mergeBuffers = function mergeBuffers(bufferArray, recLength) {
  var result = new Float32Array(recLength);
  var offset = 0;

  for (var i = 0; i < bufferArray.length; i++) {
    result.set(bufferArray[i], offset);
    offset += bufferArray[i].length;
  }

  return result;
};
/**
 * Downsamples audio to desired export sample rate.
 */


var downsampleBuffer = function downsampleBuffer(buffer, recordSampleRate, exportSampleRate) {
  if (exportSampleRate === recordSampleRate) {
    return buffer;
  }

  var sampleRateRatio = recordSampleRate / exportSampleRate;
  var newLength = Math.round(buffer.length / sampleRateRatio);
  var result = new Float32Array(newLength);
  var offsetResult = 0;
  var offsetBuffer = 0;

  while (offsetResult < result.length) {
    var nextOffsetBuffer = Math.round((offsetResult + 1) * sampleRateRatio);
    var accum = 0,
        count = 0;

    for (var i = offsetBuffer; i < nextOffsetBuffer && i < buffer.length; i++) {
      accum += buffer[i];
      count++;
    }

    result[offsetResult] = accum / count;
    offsetResult++;
    offsetBuffer = nextOffsetBuffer;
  }

  return result;
};
/**
 * converts raw audio values to 16 bit pcm.
 */


var floatTo16BitPCM = function floatTo16BitPCM(output, offset, input) {
  var byteOffset = offset;

  for (var i = 0; i < input.length; i++, byteOffset += 2) {
    var s = Math.max(-1, Math.min(1, input[i]));
    output.setInt16(byteOffset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
  }
};
/**
 * Write given strings in big-endian order.
 */


var writeString = function writeString(view, offset, string) {
  for (var i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
};
/**
 * Encodes raw pcm audio into a wav file.
 */


var encodeWAV = function encodeWAV(samples, exportSampleRate) {
  /**
   * WAV file consists of three parts: RIFF header, WAVE subchunk, and data subchunk. We precompute the size of them.
   */
  var audioSize = samples.length * 2; // We use 16-bit samples, so we have (2 * sampleLength) bytes.

  var fmtSize = 24; // Byte size of the fmt subchunk: 24 bytes that the audio information that we'll set below.

  var dataSize = 8 + audioSize; // Byte size of the data subchunk: raw sound data plus 8 bytes for the subchunk descriptions.

  var totalByteSize = 12 + fmtSize + dataSize; // Byte size of the whole file, including the chunk header / descriptor.
  // create DataView object to write byte values into

  var buffer = new ArrayBuffer(totalByteSize); // buffer to write the chunk values in.

  var view = new DataView(buffer);
  /**
   * Start writing the .wav file. We write top to bottom, so byte offset (first numeric argument) increases strictly.
   */
  // RIFF header

  writeString(view, 0, 'RIFF'); // At offset 0, write the letters "RIFF"

  view.setUint32(4, fmtSize + dataSize, true); // At offset 4, write the size of fmt and data chunk size combined.

  writeString(view, 8, 'WAVE'); // At offset 8, write the format type "WAVE"
  // fmt subchunk

  writeString(view, 12, 'fmt '); //chunkdId 'fmt '

  view.setUint32(16, fmtSize - 8, true); // fmt subchunk size below this value. We set 8 bytes already, so subtract 8 bytes from fmtSize.

  view.setUint16(20, 1, true); // Audio format code, which is 1 for PCM.

  view.setUint16(22, 1, true); // Number of audio channels. We use mono, ie 1.

  view.setUint32(24, exportSampleRate, true); // Sample rate of the audio file.

  view.setUint32(28, exportSampleRate * 2, true); // Data rate, or # of data bytes per second. Since each sample is 2 bytes, this is 2 * sampleRate.

  view.setUint16(32, 2, true); // block align, # of bytes per sample including all channels, ie. 2 bytes.

  view.setUint16(34, 16, true); // bits per sample, ie. 16 bits
  // data subchunk

  writeString(view, 36, 'data'); // write the chunkId 'data'

  view.setUint32(40, audioSize, true); // Audio byte size

  floatTo16BitPCM(view, 44, samples); // raw pcm values then go here.

  return view;
};
/**
 * Given arrays of raw pcm audio, downsamples the audio to desired sample rate and encodes it to a wav audio file.
 *
 * @param recBuffer {Float32Array[]} - 2d float array containing the recorded raw audio
 * @param recLength {number} - total length of recorded audio
 * @param recordSampleRate {number} - sample rate of the recorded audio
 * @param exportSampleRate {number} - desired sample rate of the exported file
 */


var exportBuffer = function exportBuffer(recBuffer, recLength, recordSampleRate, exportSampleRate) {
  var mergedBuffers = mergeBuffers(recBuffer, recLength);
  var downsampledBuffer = downsampleBuffer(mergedBuffers, recordSampleRate, exportSampleRate);
  var encodedWav = encodeWAV(downsampledBuffer, exportSampleRate);
  var audioBlob = new Blob([encodedWav], {
    type: RECORDER_EXPORT_MIME_TYPE
  });
  return audioBlob;
};

var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Logger"]('AudioRecorder');

var AudioRecorder = function () {
  function AudioRecorder(options) {
    // input mic stream is stored in a buffer
    this.streamBuffer = [];
    this.streamBufferLength = 0;
    this.recording = false;
    this.options = options;
  }
  /**
   * This must be called first to enable audio context and request microphone access.
   * Once access granted, it connects all the necessary audio nodes to the context so that it can begin recording or playing.
   */


  AudioRecorder.prototype.init = function () {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!Object(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["browserOrNode"])().isBrowser) return [3
            /*break*/
            , 2];
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            this.audioContext = new AudioContext();
            return [4
            /*yield*/
            , navigator.mediaDevices.getUserMedia({
              audio: true
            }).then(function (stream) {
              _this.audioSupported = true;

              _this.setupAudioNodes(stream);
            })["catch"](function () {
              _this.audioSupported = false;
              return Promise.reject('Audio is not supported');
            })];

          case 1:
            _a.sent();

            return [3
            /*break*/
            , 3];

          case 2:
            this.audioSupported = false;
            return [2
            /*return*/
            , Promise.reject('Audio is not supported')];

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  };
  /**
   * Setup audio nodes after successful `init`.
   */


  AudioRecorder.prototype.setupAudioNodes = function (stream) {
    return __awaiter(this, void 0, void 0, function () {
      var err_1, sourceNode, processorNode, analyserNode;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2,, 3]);

            return [4
            /*yield*/
            , this.audioContext.resume()];

          case 1:
            _a.sent();

            return [3
            /*break*/
            , 3];

          case 2:
            err_1 = _a.sent();
            logger.error(err_1);
            return [3
            /*break*/
            , 3];

          case 3:
            sourceNode = this.audioContext.createMediaStreamSource(stream);
            processorNode = this.audioContext.createScriptProcessor(4096, 1, 1);

            processorNode.onaudioprocess = function (audioProcessingEvent) {
              if (!_this.recording) return;
              var stream = audioProcessingEvent.inputBuffer.getChannelData(0);

              _this.streamBuffer.push(new Float32Array(stream)); // set to a copy of the stream


              _this.streamBufferLength += stream.length;

              _this.analyse();
            };

            analyserNode = this.audioContext.createAnalyser();
            analyserNode.minDecibels = FFT_MIN_DECIBELS;
            analyserNode.maxDecibels = FFT_MAX_DECIBELS;
            analyserNode.smoothingTimeConstant = FFT_SMOOTHING_TIME_CONSTANT;
            sourceNode.connect(analyserNode);
            analyserNode.connect(processorNode);
            processorNode.connect(sourceNode.context.destination);
            this.analyserNode = analyserNode;
            return [2
            /*return*/
            ];
        }
      });
    });
  };
  /**
   * Start recording audio and listen for silence.
   *
   * @param onSilence {SilenceHandler} - called whenever silence is detected
   * @param visualizer {Visualizer} - called with audio data on each audio process to be used for visualization.
   */


  AudioRecorder.prototype.startRecording = function (onSilence, visualizer) {
    return __awaiter(this, void 0, void 0, function () {
      var context, err_2;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (this.recording || !this.audioSupported) return [2
            /*return*/
            ];

            this.onSilence = onSilence || function () {};

            this.visualizer = visualizer || function () {};

            context = this.audioContext;
            _a.label = 1;

          case 1:
            _a.trys.push([1, 3,, 4]);

            return [4
            /*yield*/
            , context.resume()];

          case 2:
            _a.sent();

            return [3
            /*break*/
            , 4];

          case 3:
            err_2 = _a.sent();
            logger.error(err_2);
            return [3
            /*break*/
            , 4];

          case 4:
            this.start = Date.now();
            this.recording = true;
            return [2
            /*return*/
            ];
        }
      });
    });
  };
  /**
   * Pause recording
   */


  AudioRecorder.prototype.stopRecording = function () {
    if (!this.audioSupported) return;
    this.recording = false;
  };
  /**
   * Pause recording and clear audio buffer
   */


  AudioRecorder.prototype.clear = function () {
    this.stopRecording();
    this.streamBufferLength = 0;
    this.streamBuffer = [];
  };
  /**
   * Plays given audioStream with audioContext
   *
   * @param buffer {Uint8Array} - audioStream to be played
   */


  AudioRecorder.prototype.play = function (buffer) {
    var _this = this;

    if (!buffer || !this.audioSupported) return;
    var myBlob = new Blob([buffer]);
    return new Promise(function (res, rej) {
      var fileReader = new FileReader();

      fileReader.onload = function () {
        if (_this.playbackSource) _this.playbackSource.disconnect(); // disconnect previous playback source

        _this.playbackSource = _this.audioContext.createBufferSource();

        var successCallback = function successCallback(buf) {
          _this.playbackSource.buffer = buf;

          _this.playbackSource.connect(_this.audioContext.destination);

          _this.playbackSource.onended = function () {
            return res();
          };

          _this.playbackSource.start(0);
        };

        var errorCallback = function errorCallback(err) {
          return rej(err);
        };

        _this.audioContext.decodeAudioData(fileReader.result, successCallback, errorCallback);
      };

      fileReader.onerror = function () {
        return rej();
      };

      fileReader.readAsArrayBuffer(myBlob);
    });
  };
  /**
   * Stops playing audio if there's a playback source connected.
   */


  AudioRecorder.prototype.stop = function () {
    if (this.playbackSource) {
      this.playbackSource.stop();
    }
  };
  /**
   * Called after each audioProcess. Check for silence and give fft time domain data to visualizer.
   */


  AudioRecorder.prototype.analyse = function () {
    if (!this.audioSupported) return;
    var analyser = this.analyserNode;
    analyser.fftSize = FFT_SIZE;
    var bufferLength = analyser.fftSize;
    var dataArray = new Uint8Array(bufferLength);
    var amplitude = this.options.amplitude;
    var time = this.options.time;
    analyser.getByteTimeDomainData(dataArray);
    this.visualizer(dataArray, bufferLength);

    for (var i = 0; i < bufferLength; i++) {
      // Normalize between -1 and 1.
      var curr_value_time = dataArray[i] / 128 - 1.0;

      if (curr_value_time > amplitude || curr_value_time < -1 * amplitude) {
        this.start = Date.now();
      }
    }

    var newtime = Date.now();
    var elapsedTime = newtime - this.start;

    if (elapsedTime > time) {
      this.onSilence();
    }
  };
  /**
   * Encodes recorded buffer to a wav file and exports it to a blob.
   *
   * @param exportSampleRate {number} - desired sample rate of the exported buffer
   */


  AudioRecorder.prototype.exportWAV = function (exportSampleRate) {
    if (exportSampleRate === void 0) {
      exportSampleRate = DEFAULT_EXPORT_SAMPLE_RATE;
    }

    return __awaiter(this, void 0, void 0, function () {
      var recordSampleRate, blob;
      return __generator(this, function (_a) {
        if (!this.audioSupported) return [2
        /*return*/
        ];
        recordSampleRate = this.audioContext.sampleRate;
        blob = exportBuffer(this.streamBuffer, this.streamBufferLength, recordSampleRate, exportSampleRate);
        this.clear();
        return [2
        /*return*/
        , blob];
      });
    });
  };

  return AudioRecorder;
}();

var visualize = function visualize(dataArray, bufferLength, canvas) {
  if (!canvas) return;
  if (!Object(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["browserOrNode"])().isBrowser) throw new Error('Visualization is not supported on non-browsers.');

  var _a = canvas.getBoundingClientRect(),
      width = _a.width,
      height = _a.height; // need to update the default canvas width and height


  canvas.width = width;
  canvas.height = height;
  var canvasCtx = canvas.getContext('2d');
  canvasCtx.fillStyle = 'white';
  canvasCtx.clearRect(0, 0, width, height);

  var draw = function draw() {
    canvasCtx.fillRect(0, 0, width, height);
    canvasCtx.lineWidth = 1;
    var color = getComputedStyle(document.documentElement).getPropertyValue('--amplify-primary-color');
    canvasCtx.strokeStyle = !color || color === '' ? '#ff9900' : color; // TODO: try separate css variable

    canvasCtx.beginPath();
    var sliceWidth = width * 1.0 / bufferLength;
    var x = 0;

    for (var i = 0; i < bufferLength || i % 3 === 0; i++) {
      var value = dataArray[i] / 128.0;
      var y = value * height / 2;

      if (i === 0) {
        canvasCtx.moveTo(x, y);
      } else {
        canvasCtx.lineTo(x, y);
      }

      x += sliceWidth;
    }

    canvasCtx.lineTo(canvas.width, canvas.height / 2);
    canvasCtx.stroke();
  }; // Register our draw function with requestAnimationFrame.


  requestAnimationFrame(draw);
};

var amplifyChatbotCss = ".bot .dot{background-color:var(--bot-dot-color)}.user .dot{background-color:var(--user-dot-color)}.dot-flashing{width:2.625rem}.dot-flashing .dot{display:inline-block;width:0.625rem;height:0.625rem;border-radius:10rem;opacity:0.65}.dot-flashing .left{-webkit-animation:dot-flashing 1s infinite alternate;animation:dot-flashing 1s infinite alternate;-webkit-animation-delay:0s;animation-delay:0s}.dot-flashing .middle{margin-left:0.375rem;margin-right:0.375rem;-webkit-animation:dot-flashing 1s infinite linear alternate;animation:dot-flashing 1s infinite linear alternate;-webkit-animation-delay:0.5s;animation-delay:0.5s}.dot-flashing .right{-webkit-animation:dot-flashing 1s infinite alternate;animation:dot-flashing 1s infinite alternate;-webkit-animation-delay:1s;animation-delay:1s}@-webkit-keyframes dot-flashing{0%{opacity:0.65}50%,100%{opacity:0.1}}@keyframes dot-flashing{0%{opacity:0.65}50%,100%{opacity:0.1}}:host{--width:28.75rem;--height:37.5rem;--header-color:var(--amplify-secondary-color);--header-size:var(--amplify-text-lg);--bot-background-color:rgb(230, 230, 230);--bot-text-color:black;--bot-dot-color:var(--bot-text-color);--user-background-color:var(--amplify-blue);--user-text-color:var(--amplify-white);--user-dot-color:var(--user-text-color)}.amplify-chatbot{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;background-color:var(--background-color);border-radius:0.375rem;-webkit-box-shadow:0.0625rem 0rem 0.25rem 0 rgba(0, 0, 0, 0.15);box-shadow:0.0625rem 0rem 0.25rem 0 rgba(0, 0, 0, 0.15);-webkit-box-sizing:border-box;box-sizing:border-box;font-family:var(--amplify-font-family);margin-bottom:1rem;width:100%;height:var(--height);max-width:var(--width)}@media (min-width: 672px){.amplify-chatbot{width:var(--width)}}.header{padding:1.25rem 0.375rem 1.25rem 0.375rem;color:var(--header-color);font-size:var(--header-size);font-weight:bold;text-align:center;word-wrap:break-word}.body{border-top:0.0625rem solid rgba(0, 0, 0, 0.05);padding:1.5rem 1rem 0 1rem;display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-direction:column;flex-direction:column;overflow:auto}.bubble{max-width:100%;padding:0.8em 1.4em;text-align:left;word-wrap:break-word;margin-bottom:0.625rem}.bot{margin-right:auto;background-color:var(--bot-background-color);color:var(--bot-text-color);border-radius:1.5rem 1.5rem 1.5rem 0}.user{margin-left:auto;background-color:var(--user-background-color);color:var(--user-text-color);border-radius:1.5rem 1.5rem 0 1.5rem}.footer{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border-top:0.062rem solid rgba(0, 0, 0, 0.05);padding-right:0.625rem;min-height:3.125rem}.footer amplify-input{--border:none;--margin:0;-ms-flex-positive:1;flex-grow:1}canvas{margin-left:0.625rem;margin-right:0.625rem;-ms-flex-positive:1;flex-grow:1;height:3.125rem}.icon-button{--icon-height:1.25rem;--icon-fill:var(--amplify-primary-color);--padding:0.625rem;--width:auto}"; // enum for possible bot states

var ChatState;

(function (ChatState) {
  ChatState[ChatState["Initial"] = 0] = "Initial";
  ChatState[ChatState["Listening"] = 1] = "Listening";
  ChatState[ChatState["SendingText"] = 2] = "SendingText";
  ChatState[ChatState["SendingVoice"] = 3] = "SendingVoice";
  ChatState[ChatState["Error"] = 4] = "Error";
})(ChatState || (ChatState = {})); // Message types


var MessageFrom;

(function (MessageFrom) {
  MessageFrom["Bot"] = "bot";
  MessageFrom["User"] = "user";
})(MessageFrom || (MessageFrom = {})); // Error types


var ChatErrorType;

(function (ChatErrorType) {
  ChatErrorType[ChatErrorType["Recoverable"] = 0] = "Recoverable";
  ChatErrorType[ChatErrorType["Unrecoverable"] = 1] = "Unrecoverable";
})(ChatErrorType || (ChatErrorType = {}));

var AmplifyChatbot = function () {
  function class_1(hostRef) {
    var _this = this;

    Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /** Clear messages when conversation finishes */

    this.clearOnComplete = false;
    /** Continue listening to users after they send the message */

    this.conversationModeOn = false;
    /** Text placed in the top header */

    this.botTitle = _Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_3__["T"].CHATBOT_TITLE;
    /** Whether voice chat is enabled */

    this.voiceEnabled = false;
    /** Whether text chat is enabled */

    this.textEnabled = true;
    /** Amount of silence (in ms) to wait for */

    this.silenceTime = 1500;
    /** Noise threshold between -1 and 1. Anything below is considered a silence. */

    this.silenceThreshold = 0.2;
    /** Messages in current session */

    this.messages = [];
    /** Text input box value  */

    this.text = '';
    /** Current app state */

    this.chatState = ChatState.Initial;
    /**
     * Rendering methods
     */

    this.messageJSX = function (messages) {
      var messageList = messages.map(function (message) {
        return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          "class": "bubble " + message.from
        }, message.content);
      });

      if (_this.chatState === ChatState.SendingText || _this.chatState === ChatState.SendingVoice) {
        // if waiting for voice message, show animation on user side because app is waiting for transcript. Else put it on bot side.
        var client = _this.chatState === ChatState.SendingText ? MessageFrom.Bot : MessageFrom.User;
        messageList.push(Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          "class": "bubble " + client
        }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          "class": "dot-flashing " + client
        }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
          "class": "dot left"
        }), Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
          "class": "dot middle"
        }), Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
          "class": "dot right"
        }))));
      }

      return messageList;
    };

    this.chatCompleted = Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "chatCompleted", 7);
  } // Occurs when user presses enter in input box


  class_1.prototype.submitHandler = function (_event) {
    this.sendTextMessage();
  };
  /**
   * Lifecycle functions
   */


  class_1.prototype.componentWillLoad = function () {
    if (!_aws_amplify_interactions__WEBPACK_IMPORTED_MODULE_5__["Interactions"] || typeof _aws_amplify_interactions__WEBPACK_IMPORTED_MODULE_5__["Interactions"].onComplete !== 'function') {
      throw new Error(_constants_56d75870_js__WEBPACK_IMPORTED_MODULE_4__["d"]);
    }

    this.validateProps();
  };

  class_1.prototype.componentDidRender = function () {
    // scroll to the bottom if necessary
    var body = this.element.shadowRoot.querySelector('.body');
    body.scrollTop = body.scrollHeight;
  };

  class_1.prototype.validateProps = function () {
    var _this = this;

    if (!this.voiceEnabled && !this.textEnabled) {
      this.setError(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_3__["T"].CHAT_DISABLED_ERROR, ChatErrorType.Unrecoverable);
      return;
    } else if (!this.botName) {
      this.setError(_Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_3__["T"].NO_BOT_NAME_ERROR, ChatErrorType.Unrecoverable);
      return;
    }

    if (this.welcomeMessage) this.appendToChat(this.welcomeMessage, MessageFrom.Bot); // Initialize AudioRecorder if voice is enabled

    if (this.voiceEnabled) {
      this.audioRecorder = new AudioRecorder({
        time: this.silenceTime,
        amplitude: this.silenceThreshold
      });
      this.audioRecorder.init()["catch"](function (err) {
        _this.setError(err, ChatErrorType.Recoverable);
      });
    } // Callback function to be called after chat is completed


    var onComplete = function onComplete(err, data) {
      _this.chatCompleted.emit({
        data: data,
        err: err
      });

      if (_this.clearOnComplete) {
        _this.reset();
      } else {
        _this.chatState = ChatState.Initial;
      }
    };

    try {
      _aws_amplify_interactions__WEBPACK_IMPORTED_MODULE_5__["Interactions"].onComplete(this.botName, onComplete);
    } catch (err) {
      this.setError(err, ChatErrorType.Unrecoverable);
    }
  };
  /**
   * Handlers
   */


  class_1.prototype.handleSubmit = function (event) {
    event.preventDefault();
    this.sendTextMessage();
  };

  class_1.prototype.handleMicButton = function () {
    var _this = this;

    if (this.chatState !== ChatState.Initial) return;
    this.audioRecorder.stop();
    this.chatState = ChatState.Listening;
    this.audioRecorder.startRecording(function () {
      return _this.handleSilence();
    }, function (data, length) {
      return _this.visualizer(data, length);
    });
  };

  class_1.prototype.handleSilence = function () {
    var _this = this;

    this.chatState = ChatState.SendingVoice;
    this.audioRecorder.stopRecording();
    this.audioRecorder.exportWAV().then(function (blob) {
      _this.sendVoiceMessage(blob);
    });
  };

  class_1.prototype.handleTextChange = function (event) {
    var target = event.target;
    this.text = target.value;
  };

  class_1.prototype.handleCancelButton = function () {
    this.audioRecorder.clear();
    this.chatState = ChatState.Initial;
  };

  class_1.prototype.handleToastClose = function (errorType) {
    this.error = undefined; // clear error
    // if error is recoverable, reset the app state to initial

    if (errorType === ChatErrorType.Recoverable) {
      this.chatState = ChatState.Initial;
    }
  };
  /**
   * Visualization
   */


  class_1.prototype.visualizer = function (dataArray, bufferLength) {
    var canvas = this.element.shadowRoot.querySelector('canvas');
    visualize(dataArray, bufferLength, canvas);
  };
  /**
   * Interactions helpers
   */


  class_1.prototype.sendTextMessage = function () {
    return __awaiter(this, void 0, void 0, function () {
      var text, response, err_3;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (this.text.length === 0 || this.chatState !== ChatState.Initial) return [2
            /*return*/
            ];
            text = this.text;
            this.text = '';
            this.appendToChat(text, MessageFrom.User);
            this.chatState = ChatState.SendingText;
            _a.label = 1;

          case 1:
            _a.trys.push([1, 3,, 4]);

            return [4
            /*yield*/
            , _aws_amplify_interactions__WEBPACK_IMPORTED_MODULE_5__["Interactions"].send(this.botName, text)];

          case 2:
            response = _a.sent();
            return [3
            /*break*/
            , 4];

          case 3:
            err_3 = _a.sent();
            this.setError(err_3, ChatErrorType.Recoverable);
            return [2
            /*return*/
            ];

          case 4:
            if (response.message) {
              this.appendToChat(response.message, MessageFrom.Bot);
            }

            this.chatState = ChatState.Initial;
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  class_1.prototype.sendVoiceMessage = function (audioInput) {
    return __awaiter(this, void 0, void 0, function () {
      var interactionsMessage, response, err_4, dialogState;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            interactionsMessage = {
              content: audioInput,
              options: {
                messageType: 'voice'
              }
            };
            _a.label = 1;

          case 1:
            _a.trys.push([1, 3,, 4]);

            return [4
            /*yield*/
            , _aws_amplify_interactions__WEBPACK_IMPORTED_MODULE_5__["Interactions"].send(this.botName, interactionsMessage)];

          case 2:
            response = _a.sent();
            return [3
            /*break*/
            , 4];

          case 3:
            err_4 = _a.sent();
            this.setError(err_4, ChatErrorType.Recoverable);
            return [2
            /*return*/
            ];

          case 4:
            this.chatState = ChatState.Initial;
            dialogState = response.dialogState;
            if (response.inputTranscript) this.appendToChat(response.inputTranscript, MessageFrom.User);
            this.appendToChat(response.message, MessageFrom.Bot);
            return [4
            /*yield*/
            , this.audioRecorder.play(response.audioStream).then(function () {
              // if conversationMode is on, chat is incomplete, and mic button isn't pressed yet, resume listening.
              if (_this.conversationModeOn && dialogState !== 'Fulfilled' && dialogState !== 'Failed' && _this.chatState === ChatState.Initial) {
                _this.handleMicButton();
              }
            })["catch"](function (err) {
              return _this.setError(err, ChatErrorType.Recoverable);
            })];

          case 5:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  class_1.prototype.appendToChat = function (content, from) {
    this.messages = __spreadArrays(this.messages, [{
      content: content,
      from: from
    }]);
  };
  /**
   * State control methods
   */


  class_1.prototype.setError = function (error, errorType) {
    var message = typeof error === 'string' ? error : error.message;
    this.chatState = ChatState.Error;
    this.error = {
      message: message,
      errorType: errorType
    };
  };

  class_1.prototype.reset = function () {
    this.chatState = ChatState.Initial;
    this.text = '';
    this.error = undefined;
    this.messages = [];
    if (this.welcomeMessage) this.appendToChat(this.welcomeMessage, MessageFrom.Bot);
    this.audioRecorder && this.audioRecorder.clear();
  };

  class_1.prototype.listeningFooterJSX = function () {
    var _this = this;

    var visualization = Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("canvas", {
      height: "50"
    });
    var cancelButton = Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", {
      "data-test": "chatbot-cancel-button",
      handleButtonClick: function handleButtonClick() {
        return _this.handleCancelButton();
      },
      "class": "icon-button",
      variant: "icon",
      icon: "ban"
    });
    return [visualization, cancelButton];
  };

  class_1.prototype.footerJSX = function () {
    var _this = this;

    if (this.chatState === ChatState.Listening) return this.listeningFooterJSX();
    var inputPlaceholder = this.textEnabled ? _Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_3__["T"].TEXT_INPUT_PLACEHOLDER : _Translations_97eed81d_js__WEBPACK_IMPORTED_MODULE_3__["T"].VOICE_INPUT_PLACEHOLDER;
    var textInput = Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-input", {
      placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(inputPlaceholder),
      description: "text",
      handleInputChange: function handleInputChange(evt) {
        return _this.handleTextChange(evt);
      },
      value: this.text,
      disabled: this.chatState === ChatState.Error || !this.textEnabled
    });
    var micButton = this.voiceEnabled && Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", {
      "data-test": "chatbot-mic-button",
      handleButtonClick: function handleButtonClick() {
        return _this.handleMicButton();
      },
      "class": "icon-button",
      variant: "icon",
      icon: "microphone",
      disabled: this.chatState === ChatState.Error || this.chatState !== ChatState.Initial
    });
    var sendButton = this.textEnabled && Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", {
      "data-test": "chatbot-send-button",
      "class": "icon-button",
      variant: "icon",
      icon: "send",
      handleButtonClick: function handleButtonClick() {
        return _this.sendTextMessage();
      },
      disabled: this.chatState === ChatState.Error || this.chatState !== ChatState.Initial
    });
    return [textInput, micButton, sendButton];
  };

  class_1.prototype.errorToast = function () {
    var _this = this;

    if (!this.error) return;
    var _a = this.error,
        message = _a.message,
        errorType = _a.errorType;
    return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-toast", {
      message: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(message),
      handleClose: function handleClose() {
        return _this.handleToastClose(errorType);
      }
    });
  };

  class_1.prototype.render = function () {
    var _this = this;

    return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      "class": "amplify-chatbot"
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
      name: "header"
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      "class": "header",
      "data-test": "chatbot-header"
    }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.botTitle))), Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      "class": "body",
      "data-test": "chatbot-body"
    }, this.messageJSX(this.messages)), Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("form", {
      onSubmit: function onSubmit(e) {
        return _this.handleSubmit(e);
      }
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      "class": "footer",
      "data-test": "chatbot-footer"
    }, this.footerJSX())), this.errorToast()));
  };

  Object.defineProperty(class_1.prototype, "element", {
    get: function get() {
      return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this);
    },
    enumerable: false,
    configurable: true
  });
  return class_1;
}();

AmplifyChatbot.style = amplifyChatbotCss;


/***/ })

}]);
//# sourceMappingURL=16.js.map