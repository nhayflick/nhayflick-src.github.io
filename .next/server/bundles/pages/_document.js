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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
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
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
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
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_document__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_document___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_document__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_jss_lib_JssProvider__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_jss_lib_JssProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_jss_lib_JssProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_jsx_server__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_jsx_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_jsx_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_getPageContext__ = __webpack_require__(6);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var MyDocument =
/*#__PURE__*/
function (_Document) {
  _inherits(MyDocument, _Document);

  function MyDocument() {
    _classCallCheck(this, MyDocument);

    return _possibleConstructorReturn(this, (MyDocument.__proto__ || Object.getPrototypeOf(MyDocument)).apply(this, arguments));
  }

  _createClass(MyDocument, [{
    key: "render",
    value: function render() {
      var pageContext = this.props.pageContext;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("html", {
        lang: "en",
        dir: "ltr"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_document__["Head"], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", null, "Nathan Hayflick Portfolio"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        charSet: "utf-8"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "viewport",
        content: 'user-scalable=0, initial-scale=1, ' + 'minimum-scale=1, width=device-width, height=device-height'
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "theme-color",
        content: pageContext.theme.palette.primary.main
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Lato|Nunito",
        rel: "stylesheet"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("body", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_document__["Main"], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_document__["NextScript"], null)));
    }
  }]);

  return MyDocument;
}(__WEBPACK_IMPORTED_MODULE_1_next_document___default.a);

MyDocument.getInitialProps = function (ctx) {
  // Resolution order
  //
  // On the server:
  // 1. page.getInitialProps
  // 2. document.getInitialProps
  // 3. page.render
  // 4. document.render
  //
  // On the server with error:
  // 2. document.getInitialProps
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. page.getInitialProps
  // 3. page.render
  // Get the context of the page to collected side effects.
  var pageContext = Object(__WEBPACK_IMPORTED_MODULE_4__src_getPageContext__["a" /* default */])();
  var page = ctx.renderPage(function (Component) {
    return function (props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_jss_lib_JssProvider___default.a, {
        registry: pageContext.sheetsRegistry,
        generateClassName: pageContext.generateClassName
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, _extends({
        pageContext: pageContext
      }, props)));
    };
  });
  return _objectSpread({}, page, {
    pageContext: pageContext,
    styles: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
      id: "jss-server-side" // eslint-disable-next-line react/no-danger
      ,
      dangerouslySetInnerHTML: {
        __html: pageContext.sheetsRegistry.toString()
      }
    }), __WEBPACK_IMPORTED_MODULE_3_styled_jsx_server___default()() || null)
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MyDocument);

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("next/document");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-jss/lib/JssProvider");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ })
/******/ ]);