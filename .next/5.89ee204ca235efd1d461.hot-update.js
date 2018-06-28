webpackHotUpdate(5,{

/***/ "./src/styles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(theme) {
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
    footerIcon: {
      display: 'inline-block',
      textAlign: 'center',
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/nathanhayflick/Dev/portfolio18/src/styles.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.89ee204ca235efd1d461.hot-update.js.map