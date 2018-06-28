webpackHotUpdate(6,{

/***/ "./src/getPageContext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, process, global) {/* harmony export (immutable) */ __webpack_exports__["a"] = getPageContext;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jss__ = __webpack_require__("./node_modules/jss/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__ = __webpack_require__("./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors_green__ = __webpack_require__("./node_modules/@material-ui/core/colors/green.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors_green___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors_green__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_cyan__ = __webpack_require__("./node_modules/@material-ui/core/colors/cyan.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_cyan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_cyan__);
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
  dates: "2017–NOW",
  body: "Developing products to make Uber the safety Ridesharing platform for riders & drivers",
  products: [{
    slug: "rider-emergency-assistance",
    title: "Emergency Assistance",
    body: "Uber’s original Emergency Assistance feature was rolled out in 2017 in response to safety concerns " + "in India and over time began suffering from a costly UI problem: an unacceptably high rate of accidental dials " + "that threatened our urgent response team’s ability to filter out genuine incidents and meet their response time " + "SLAs. Working with our product designer and another Android engineer, we solved this problem by replacing the ‘Get Help’ " + "button with a custom slide-to-call flow that resulted in lower false-positive rates without affecting the success " + "rate for genuine incidents. Special attention was given to creating affordances for the swipe gesture (accomplished using " + "a subtle pulsing animation) while giving the interaction a sense of urgency (the slider fades from gray to bright red as you swipe towards the call threshold).",
    imageUrl: "/static/slider-animated.gif",
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
  dates: "2016-2017",
  body: "",
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
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(titleFonts, "titleFonts", "/Users/nathanhayflick/Dev/portfolio18/src/getPageContext.js");
  reactHotLoader.register(typography, "typography", "/Users/nathanhayflick/Dev/portfolio18/src/getPageContext.js");
  reactHotLoader.register(theme, "theme", "/Users/nathanhayflick/Dev/portfolio18/src/getPageContext.js");
  reactHotLoader.register(content, "content", "/Users/nathanhayflick/Dev/portfolio18/src/getPageContext.js");
  reactHotLoader.register(createPageContext, "createPageContext", "/Users/nathanhayflick/Dev/portfolio18/src/getPageContext.js");
  reactHotLoader.register(getPageContext, "getPageContext", "/Users/nathanhayflick/Dev/portfolio18/src/getPageContext.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__("./node_modules/process/browser.js"), __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=6.d6bbeaa972247bf2b236.hot-update.js.map