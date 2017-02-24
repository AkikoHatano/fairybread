/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function _toConsumableArray(a) {
  if (Array.isArray(a)) {
    for (var b = 0, c = Array(a.length); b < a.length; b++) {
      c[b] = a[b];
    }return c;
  }return Array.from(a);
}function _classCallCheck(a, b) {
  if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
}Object.defineProperty(exports, "__esModule", { value: !0 });var _createClass = function () {
  function a(a, b) {
    for (var c = 0; c < b.length; c++) {
      var d = b[c];d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d);
    }
  }return function (b, c, d) {
    return c && a(b.prototype, c), d && a(b, d), b;
  };
}(),
    Fairybread = function () {
  function a() {
    _classCallCheck(this, a), this.id = this.makeId(), this.masterClass = "." + this.id, this.sheet = !1, this.specialSheet = !1, this.specialId = this.makeId() + "_special", this.rules, this.index = 0, this.specialIndex = 0, this.global = !1;
  }return _createClass(a, [{ key: "makeId", value: function value() {
      var b = "fairybread_",
          c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";return [].concat(_toConsumableArray(Array(20))).map(function (a, d) {
        b += c.charAt(Math.floor(Math.random() * c.length));
      }), b;
    } }, { key: "getAll", value: function value() {
      var b = this,
          c = this.sheet.cssRules || this.sheet.rules || {},
          d = {};return Object.keys(c).map(function (a) {
        var e = c[a].selectorText.replace(b.masterClass + " ", ""),
            f = c[a].cssText.slice(c[a].cssText.indexOf("{") + 1).split(";"),
            g = {};f.map(function (a, b) {
          var c = a.split(":");2 === c.length && (g[c[0].trim()] = c[1].trim());
        }), d[e] = g;
      }), d;
    } }, { key: "extend", value: function value(b) {
      var c = this.getAll();return c[b];
    } }, { key: "add", value: function value(b, c) {
      this.sheet.insertRule ? this.sheet.insertRule(this.masterClass + " " + b + " { " + c + " }", this.index) : this.sheet.addRule(this.masterClass + " " + b, c, this.index), this.index++;
    } }, { key: "addSpecial", value: function value(b) {
      var c = this.specialId;if (this.specialSheet === !1) {
        var d = document.createElement("style");d.type = "text/css", d.id = c, d.rel = "stylesheet", document.head.appendChild(d), this.specialSheet = document.getElementById(c), this.specialSheet.innerHTML = b;
      } else console.log(this.specialSheet), this.specialSheet.innerHTML += "\n" + b;
    } }, { key: "createScope", value: function value() {
      if (this.sheet === !1) {
        var b = document.createElement("style");b.type = "text/css", b.id = this.id, b.rel = "stylesheet", document.head.appendChild(b), this.sheet = b.sheet;
      } else console.error("You have already made a sheet on this instance");return this.id;
    } }, { key: "createGlobal", value: function value() {
      if (this.sheet === !1) {
        this.masterClass = " ";var b = document.createElement("style");b.type = "text/css", b.id = this.id, b.rel = "stylesheet", document.head.appendChild(b), this.sheet = b.sheet;
      } else console.error("You have already made a sheet on this instance");
    } }]), a;
}();exports.default = Fairybread;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var _fairybread = __webpack_require__(0);

var _fairybread2 = _interopRequireDefault(_fairybread);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vars = {
  colors: {
    yellow: '#FFFFBE',
    orange: '#F7CD99',
    pink: '#FF77A1',
    purple: '#9886E8',
    blue: '#97CACB'

  }
};

var globalSheet = new _fairybread2.default();
globalSheet.createGlobal();
globalSheet.add('body', 'background:' + vars.colors.yellow);

var sheet = new _fairybread2.default();
var id = sheet.createScope();

sheet.add('a', 'color:red;');
sheet.add('a', 'color:blue;');

sheet.add('a:hover', 'color:green;');
sheet.add('h1', 'font-family:"Permanent Marker"');
sheet.add('p', 'color:blue; font-family: \'Roboto\';');
sheet.add('#main', '\n              background:#efefef;\n              font-weight:bold;\n              width:900px;\n              margin:0 auto;\n              padding:1em;\n              ');
sheet.addSpecial(' @font-face {\n    font-family: \'Permanent Marker\';\n    font-style: normal;\n    font-weight: 400;\n    src: local(\'Permanent Marker\'), local(\'PermanentMarker\'), url(https://fonts.gstatic.com/s/permanentmarker/v5/9vYsg5VgPHKK8SXYbf3sMio-5Z6V1O0VBgfXWFfbB4c.woff2) format(\'woff2\');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;\n};');
sheet.addSpecial('\n@font-face {\n  font-family: \'Roboto\';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\'Roboto\'), local(\'Roboto-Regular\'), url(https://fonts.gstatic.com/s/roboto/v15/ek4gzZ-GeXAPcSbHtCeQI_esZW2xOQ-xsNqO47m55DA.woff2) format(\'woff2\');\n  unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F;\n};');
console.log(globalSheet.extend('body'));
console.log(sheet.getAll());
var tag_color = sheet.getAll()['a'];
sheet.add('.button', 'color:' + tag_color);

// console.log(id);
document.querySelector('#main').className = id;

/***/ })
/******/ ]);