module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var routes = module.exports = __webpack_require__(11)();

routes.add('index', '/').add('product', '/:slug');

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/blueGrey");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getPageContext;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jss__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors_green__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors_green___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors_green__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_cyan__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_cyan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_cyan__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/* eslint-disable no-underscore-dangle */




var titleFonts = ['display4', 'display3', 'display2', 'display1', 'headline', 'title', 'subheading'];
var typography = Object.assign.apply(Object, _toConsumableArray(titleFonts.map(function (font) {
  return _defineProperty({}, font, {
    fontFamily: ['"Nunito"', 'Roboto', 'sans-serif'].join(',')
  });
}))); // A theme with custom primary and secondary color.
// It's optional.

var theme = Object(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__["createMuiTheme"])({
  palette: {
    primary: __WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_cyan___default.a,
    secondary: __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors_green___default.a,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  },
  typography: typography
});
var content = [{
  title: "Safety at Uber",
  body: "Working to make Uber the safest ridesharing platform for riders & drivers",
  products: [{
    slug: "rider-emergency-assistance",
    title: "Emergency Assistance",
    body: "Uber launched the original Emergency Assistance in response to safety concerns in India and over time it " + "began suffering from a costly UI problem: an unacceptably high rate of accidental dials " + "that threatened our urgent response team’s ability to filter out genuine incidents and meet their response time " + "SLAs. Working with our product designer and another Android engineer, we solved this problem by replacing the ‘Get Help’ " + "button with a custom slide-to-call flow that resulted in lower false-positive rates without affecting the success " + "rate for genuine incidents. Special attention was given to creating affordances for the swipe gesture (accomplished using " + "a subtle pulsing animation) while giving the interaction a sense of urgency (the slider fades from gray to bright red as you swipe towards the call threshold).",
    imageUrl: "/static/slider-sos-animated.gif",
    thumbnailImageUrl: "/static/911-thumb.png",
    color: __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors_green___default.a[200]
  }, {
    slug: "trusted-contacts",
    title: "Trusted Contacts",
    body: "As part of Uber’s Safety-focused 2018 strategy (https://www.uber.com/newsroom/getting-serious-safety/), we wanted " + "to reimagine the Share My Trip feature through the lense of Trust & Safety. We determined that the existing flow had " + "too much friction and lacked discoverability to be used habitually by our users. The Trusted Contacts feature solves " + "for this by giving riders a prominent, one-tap shortcut for sharing a trip with their loved ones or most important " + "contacts. Balancing safety with privacy was a key priority for us so shares always require the user’s explicit " + "opt-in while your trusted contact selection and the types of trips you are prompted to share are always user configurable.",
    imageUrl: "/static/trusted-contacts-mockup.png",
    color: __WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_cyan___default.a[300]
  }, {
    slug: "dhl",
    title: "Driving Hour Limits",
    body: "Driving research shows that too many consecutive hours behind the wheel increases the risk of accidents. In 2017, " + "we launched a global driving time policy that limits the number of hours our partners can drive per 24-hour window. We " + "communicate this policy through multiple touchpoints in Carbon - providing a persistent driving time tracker to partners " + "and warning them when they are approaching a forced break time. Since some cities have passed their own specific driving " + "limit laws for TNCs, it was critical to build a UI framework that was dynamic and flexible enough to accommodate many possible " + "regional variations.",
    imageUrl: "/static/dhl-mockup.png",
    color: __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors_green___default.a[600]
  }]
}, {
  title: "Uber Partnerships & Loyalty",
  body: "Built rich-integrations for third-party partners as well as tools to enhance rider loyalty.",
  products: [{
    slug: "autoplay-music",
    title: "Autoplay Music",
    body: "To help drive usage of Uber’s native Spotify/Pandora integration for riders, we developed an ‘autoplay’ feature that allowed riders to select a favorite music station that would automatically start playing whenever they entered a music-enabled Uber.",
    imageUrl: "/static/autoplay-mockup.png",
    color: __WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_cyan___default.a[100]
  }, {
    slug: "rrw",
    title: "Ride Request Widget",
    body: "AWorked with the business development team to encapsulate the core Uber ride request flow as a lightweight HTML5-based widget for integration into third-party mobile apps like Alipay. Because we were targeting partnerships in low-connectivity markets like India and China, we experimented with various styles of no-map ride request flows and ultimately chose to position the car on an animated progress bar to represent the driver’s progress towards the rider during pickup.",
    imageUrl: "/static/rrw-mockup.png",
    color: __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors_green___default.a[300]
  }, {
    slug: "contextual-notification",
    title: "Contextual Notifications",
    body: "Prototyped and productionized the first version of a Contextual Notification framework for the Uber rider app - a channel " + "for high-priority, temporal messages that inform riders of trip events without blocking any core UX. This project was originally " + "commissioned to inform riders when they are eligible for free upgrades or loyalty rewards but designed to accommodate diverse use cases.",
    imageUrl: "/static/contextual-notification-mockup.png",
    color: __WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_cyan___default.a[600]
  }]
}];

function createPageContext() {
  return {
    theme: theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new __WEBPACK_IMPORTED_MODULE_0_jss__["SheetsRegistry"](),
    // The standard class name generator.
    generateClassName: Object(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__["createGenerateClassName"])(),
    // Content
    content: content
  };
}

function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  } // Reuse context on the client-side.


  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/green");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/cyan");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_Divider__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Computer__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Computer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Computer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Pets__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Pets___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Pets__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Work__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Work___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Work__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_colors_blueGrey__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_colors_blueGrey___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_colors_blueGrey__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var Footer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          marginTop: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Divider___default.a, null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.innerContainer
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.contentSection
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.footerContainer
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.footerIcon
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core__["Button"], {
        href: "https://www.linkedin.com/pub/nathan-hayflick/35/a14/8b1",
        target: "on_blank"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Work___default.a, null))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.footerIcon
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core__["Button"], {
        href: "https://github.com/nhayflick",
        target: "on_blank"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Computer___default.a, null))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.footerIcon
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core__["Button"], {
        target: "on_blank"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Pets___default.a, null)))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core__["Typography"], {
        variant: "caption",
        className: classes.footerContainer
      }, "Nathan Hayflick // 2018"))));
    }
  }]);

  return Footer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Computer");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Pets");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Work");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_blueGrey__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_blueGrey___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_blueGrey__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["AppBar"], {
        position: "static",
        elevation: 0,
        style: {
          backgroundColor: __WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_blueGrey___default.a[50]
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["Toolbar"], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__routes__["Link"], {
        route: "index"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["Typography"], {
        variant: "title",
        color: "inherit",
        className: [this.props.classes.flex, classes.alignLeft].join(' ')
      }, "Nathan Hayflick")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__routes__["Link"], {
        route: "index"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["Button"], {
        color: "inherit"
      }, "Work")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["Button"], {
        color: "inherit",
        href: "https://soundcloud.com/manhattoes/tracks",
        target: "on_blank"
      }, "Sound")));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_CssBaseline__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_CssBaseline___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_CssBaseline__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getPageContext__ = __webpack_require__(6);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







function withRoot(Component) {
  var WithRoot =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(WithRoot, _React$Component);

    function WithRoot(props) {
      var _this;

      _classCallCheck(this, WithRoot);

      _this = _possibleConstructorReturn(this, (WithRoot.__proto__ || Object.getPrototypeOf(WithRoot)).call(this, props));
      Object.defineProperty(_assertThisInitialized(_this), "pageContext", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: null
      });
      _this.pageContext = _this.props.pageContext || Object(__WEBPACK_IMPORTED_MODULE_4__getPageContext__["a" /* default */])();
      return _this;
    }

    _createClass(WithRoot, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        // Remove the server-side injected CSS.
        var jssStyles = document.querySelector('#jss-server-side');

        if (jssStyles && jssStyles.parentNode) {
          jssStyles.parentNode.removeChild(jssStyles);
        }
      }
    }, {
      key: "render",
      value: function render() {
        // MuiThemeProvider makes the theme available down the React tree thanks to React context.
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["MuiThemeProvider"], {
          theme: this.pageContext.theme,
          sheetsManager: this.pageContext.sheetsManager
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_CssBaseline___default.a, null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, _extends({}, this.props, {
          content: this.pageContext.content
        })));
      }
    }]);

    return WithRoot;
  }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

  WithRoot.getInitialProps = function (ctx) {
    if (Component.getInitialProps) {
      return Component.getInitialProps(ctx);
    }

    return {};
  };

  return WithRoot;
}

/* harmony default export */ __webpack_exports__["a"] = (withRoot);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["a"] = (function (theme) {
  return {
    root: {
      margin: '0 auto'
    },
    outerContainer: _defineProperty({
      margin: '0 auto',
      paddingLeft: theme.spacing.unit * 4,
      paddingRight: theme.spacing.unit * 4,
      flex: '1 1 100%'
    }, theme.breakpoints.between('sm', 'xl'), {
      paddingLeft: theme.spacing.unit * 6,
      paddingRight: theme.spacing.unit * 6
    }),
    innerContainer: _defineProperty({
      margin: 'auto'
    }, theme.breakpoints.between('md', 'xl'), {
      maxWidth: theme.spacing.unit * 100
    }),
    portfolioHeading: {},
    bigLineSpacing: {
      paddingTop: theme.spacing.unit * 3,
      paddingBottom: theme.spacing.unit * 6
    },
    flex: {
      flex: 1,
      textAlign: 'left'
    },
    objectFitCover: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    contentSection: {
      textAlign: 'left',
      paddingTop: theme.spacing.unit * 4,
      paddingBottom: theme.spacing.unit * 4
    },
    productImage: {
      paddingTop: theme.spacing.unit * 2,
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
      marginBottom: 0
    },
    nextLink: {
      float: 'right'
    },
    footerContainer: {
      margin: 'auto',
      textAlign: 'center'
    },
    footerIcon: {
      display: 'inline-block',
      textAlign: 'center',
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 6,
      paddingLeft: theme.spacing.unit * 1,
      paddingRight: theme.spacing.unit * 1
    }
  };
});

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(34);


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Footer__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Header__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_styles__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_withRoot__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__routes__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var Product =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Product, _React$Component);

  function Product() {
    _classCallCheck(this, Product);

    return _possibleConstructorReturn(this, (Product.__proto__ || Object.getPrototypeOf(Product)).apply(this, arguments));
  }

  _createClass(Product, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          content = _props.content,
          url = _props.url;
      var products = content.map(function (sections) {
        return sections.products;
      }).reduce(function (a, b) {
        return a.concat(b);
      });
      var productIndex = products.findIndex(function (product) {
        return product.slug == url.query.slug;
      });
      var product = productIndex > -1 ? products[productIndex] : null;

      if (product == null) {
        return false;
      }

      var nextProduct = productIndex + 1 < products.length ? products[productIndex + 1] : products[0];
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Header__["a" /* default */], {
        classes: classes
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.outerContainer
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.innerContainer
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.contentSection
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core__["Grid"], {
        container: true,
        wrap: "nowrap",
        spacing: 32,
        className: classes.bigLineSpacing
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core__["Grid"], {
        item: true,
        xs: 5,
        style: {
          paddingLeft: 24,
          paddingRight: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core__["Typography"], {
        variant: "display2"
      }, product.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core__["Typography"], {
        variant: "body1",
        className: classes.bigLineSpacing
      }, product.body), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__routes__["Link"], {
        route: "product",
        params: {
          slug: nextProduct.slug
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core__["Button"], {
        className: classes.nextLink,
        disableRipple: true
      }, "Up Next: ", nextProduct.title))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core__["Grid"], {
        item: true,
        xs: 7
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: product.imageUrl,
        alt: product.title,
        className: classes.objectFitCover,
        style: {
          backgroundColor: product.color
        }
      })))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Footer__["a" /* default */], {
        classes: classes
      }));
    }
  }]);

  return Product;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_7__src_withRoot__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(__WEBPACK_IMPORTED_MODULE_6__src_styles__["a" /* default */])(Product)));

/***/ })
/******/ ]);