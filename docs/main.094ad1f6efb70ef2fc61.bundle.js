(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../nodejs/node_modules/mhy/node_modules/css-loader/dist/cjs.js?!../../nodejs/node_modules/mhy/node_modules/postcss-loader/src/index.js?!../../nodejs/node_modules/mhy/node_modules/sass-loader/dist/cjs.js?!./src/story.css":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Work/nodejs/node_modules/mhy/node_modules/css-loader/dist/cjs.js??ref--7-1!C:/Work/nodejs/node_modules/mhy/node_modules/postcss-loader/src??ref--7-2!C:/Work/nodejs/node_modules/mhy/node_modules/sass-loader/dist/cjs.js??ref--7-3!./src/story.css ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../nodejs/node_modules/mhy/node_modules/css-loader/dist/runtime/api.js */ "../../nodejs/node_modules/mhy/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "body {\n  box-sizing: border-box;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n", "",{"version":3,"sources":["C:\\Work\\Repos\\use-breakpoint/src\\story.css"],"names":[],"mappings":"AAAA;EACC,sBAAsB;EACtB,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,uBAAuB,EAAA","file":"story.css","sourcesContent":["body {\n\tbox-sizing: border-box;\n\tmargin: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src sync recursive \\.?(story|stories|book)\\.[jt]sx?$":
/*!****************************************************!*\
  !*** ./src sync \.?(story|stories|book)\.[jt]sx?$ ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./story.tsx": "./src/story.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src sync recursive \\.?(story|stories|book)\\.[jt]sx?$";

/***/ }),

/***/ "./src sync recursive storybook\\.setup\\.[jt]sx?$":
/*!*********************************************!*\
  !*** ./src sync storybook\.setup\.[jt]sx?$ ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src sync recursive storybook\\.setup\\.[jt]sx?$";

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: UP, DOWN, LANDSCAPE, PORTRAIT, options, setup, breakpoints, default, useResize, mediaQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UP", function() { return UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWN", function() { return DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANDSCAPE", function() { return LANDSCAPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORTRAIT", function() { return PORTRAIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return setup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpoints", function() { return breakpoints; });
/* harmony import */ var _useBreakpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useBreakpoint */ "./src/useBreakpoint.ts");
/* harmony import */ var _useResize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useResize */ "./src/useResize.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useResize", function() { return _useResize__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _mediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mediaQuery */ "./src/mediaQuery.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mediaQuery", function() { return _mediaQuery__WEBPACK_IMPORTED_MODULE_2__["default"]; });

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




const UP = '+';
const DOWN = '-';
const LANDSCAPE = '-';
const PORTRAIT = '|';
let options;
const setup = function setup(opts) {
  Object.entries(opts.breakpoints).forEach((_ref) => {
    let [name, [from, to]] = _ref;
    return [['', [from, to]], [UP, [from, 10000]], [DOWN, [0, to]]].forEach((_ref2) => {
      let [symbol, fromTo] = _ref2;
      return ['', LANDSCAPE, PORTRAIT].forEach(orientation => {
        // eslint-disable-next-line
        opts.breakpoints[`${orientation}${name}${symbol}`] = fromTo;
      });
    });
  });
  options = opts;
};
const breakpoints = {
  micro: [0, 375],
  mi: [0, 375],
  mobile: [376, 639],
  m: [376, 639],
  tablet: [640, 1023],
  t: [640, 1023],
  small: [1024, 1439],
  s: [1024, 1439],
  medium: [1440, 1919],
  med: [1440, 1919],
  large: [1920, 10000],
  l: [1920, 10000],
  // Multi range
  device: [0, 1023],
  d: [0, 1023],
  smallDevice: [0, 639],
  sd: [0, 639]
};
setup({
  breakpoints
});
const _default = _useBreakpoint__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ __webpack_exports__["default"] = (_default);

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(UP, "UP", "C:\\Work\\Repos\\use-breakpoint\\src\\index.ts");
  reactHotLoader.register(DOWN, "DOWN", "C:\\Work\\Repos\\use-breakpoint\\src\\index.ts");
  reactHotLoader.register(LANDSCAPE, "LANDSCAPE", "C:\\Work\\Repos\\use-breakpoint\\src\\index.ts");
  reactHotLoader.register(PORTRAIT, "PORTRAIT", "C:\\Work\\Repos\\use-breakpoint\\src\\index.ts");
  reactHotLoader.register(options, "options", "C:\\Work\\Repos\\use-breakpoint\\src\\index.ts");
  reactHotLoader.register(setup, "setup", "C:\\Work\\Repos\\use-breakpoint\\src\\index.ts");
  reactHotLoader.register(breakpoints, "breakpoints", "C:\\Work\\Repos\\use-breakpoint\\src\\index.ts");
  reactHotLoader.register(_default, "default", "C:\\Work\\Repos\\use-breakpoint\\src\\index.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../nodejs/node_modules/mhy/node_modules/webpack/buildin/harmony-module.js */ "../../nodejs/node_modules/mhy/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/mediaQuery.ts":
/*!***************************!*\
  !*** ./src/mediaQuery.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



const mediaQuery = function mediaQuery(input) {
  let returnType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String;
  let generated = returnType === String ? '' : {};

  if (typeof input[0] === 'string') {
    input = [input];
  }

  for (const value of input) {
    const bp = ___WEBPACK_IMPORTED_MODULE_0__["options"].breakpoints[value[0]];
    if (!bp) continue;
    const key = value[0];
    const first = key[0];
    const last = key[key.length - 1];
    let query = `@media screen `;

    if (last === ___WEBPACK_IMPORTED_MODULE_0__["UP"]) {
      query += `and (min-width: ${bp[0]}px) `;
    } else if (last === ___WEBPACK_IMPORTED_MODULE_0__["DOWN"]) {
      query += `and (max-width: ${bp[1]}px) `;
    } else {
      query += `and (min-width: ${bp[0]}px) and (max-width: ${bp[1]}px) `;
    }

    if (first === ___WEBPACK_IMPORTED_MODULE_0__["PORTRAIT"]) {
      query += `and (orientation: portrait) `;
    } else if (first === ___WEBPACK_IMPORTED_MODULE_0__["LANDSCAPE"]) {
      query += `and (orientation: landscape) `;
    }

    if (returnType === String) {
      generated += query + `{ ${value[1]} }`;
    } else {
      generated[query] = value[1];
    }
  }

  return generated;
};

const _default = mediaQuery;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mediaQuery, "mediaQuery", "C:\\Work\\Repos\\use-breakpoint\\src\\mediaQuery.ts");
  reactHotLoader.register(_default, "default", "C:\\Work\\Repos\\use-breakpoint\\src\\mediaQuery.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../nodejs/node_modules/mhy/node_modules/webpack/buildin/harmony-module.js */ "../../nodejs/node_modules/mhy/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/readme.raw.md":
/*!***************************!*\
  !*** ./src/readme.raw.md ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("# Intro\r\n\r\nReact `useBreakpoint` hook to have different values for a variable\r\nbased on a breakpoints.\r\n\r\n# Setup\r\n\r\nBy default you don't need to do anything. The following default values\r\nare being used.\r\n\r\n```js\r\nconst breakpoints = {\r\n    micro: [0, 375],\r\n    mobile: [376, 639],\r\n    tablet: [640, 1023],\r\n    small: [1024, 1439],\r\n    medium: [1440, 1919],\r\n    large: [1920, 10000]\r\n}\r\n```\r\n\r\n## Override default settings\r\n\r\n```js\r\nimport { setup, breakpoints } from '@w11r/use-breakpoint'\r\n\r\nsetup({\r\n    breakpoints: {\r\n        // Extend default values\r\n        ...breakpoints,\r\n        alienDevice: [342, 43534] // from, to\r\n    }\r\n})\r\n```\r\n\r\n# Usage\r\n\r\n```js\r\nuseBreakpoint(defaultValue, breakpointValues)\r\n\r\n// breakpointValues: array of breakpoint based values\r\n[\r\n  ['mobile', 300],\r\n  ['tablet', 400]\r\n]\r\n\r\n// In case you have a single breakpoint value, `['mobile', 300]`\r\nis enough instead of `[['mobile', 300]]`\r\n```\r\n\r\nComponent example\r\n\r\n```jsx\r\nimport useBreakpoint from '@w11r/use-breakpoint'\r\n\r\nconst MyCmp = () => {\r\n    const columns = useBreakpoint([1,2], ['mobile', [2,1]])\r\n    \r\n    return <Grid cols={columns} />\r\n}\r\n\r\n// Or using inline\r\nconst MyCmp = () => {\r\n    return <Grid cols={useBreakpoint([1,2], ['mobile', [2,1]])} />\r\n}\r\n```\r\n\r\n> _Rules-of-Hooks_ are still true in this case as well. Make sure\r\n> your component will __ALWAYS__ run it without any condition!\r\n\r\n## Modifiers\r\n\r\nAll breakpoint names coming with modifiers included.\r\n\r\n### Orientation prefix\r\n\r\n- `` (none): all\r\n- `-`: Landscape\r\n- `|`: Portrait\r\n\r\n### Range suffix\r\n\r\nYou can also control your value to behave as `and up` and `and down`.\r\n\r\n- `` (none): all\r\n- `+`: `and up`\r\n- `-`: `and down`\r\n\r\n### Examples\r\n\r\n- `['|mobile', 300]`: on mobile, on portrait\r\n- `['|mobile+', 300]`: on mobile and up, on portrait\r\n- `['mobile+', 300]`: on mobile and up, both portrait and landscape\r\n- `['mobile', 300]`: on mobile, both portrait and landscape\r\n- `['tablet-', 300]`: on tablet and below, both portrait and landscape\r\n- `['mobile-', 300]`: on mobile and down, both portrait and landscape\r\n\r\n# FAQ\r\n\r\n## Which rule is being prioritized\r\n\r\nThe hook uses _eager_ evaluation, so the first truthy breakpoint value\r\ngets returned.\r\n");

/***/ }),

/***/ "./src/story.css":
/*!***********************!*\
  !*** ./src/story.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../nodejs/node_modules/mhy/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../nodejs/node_modules/mhy/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../nodejs/node_modules/mhy/node_modules/css-loader/dist/cjs.js??ref--7-1!../../../nodejs/node_modules/mhy/node_modules/postcss-loader/src??ref--7-2!../../../nodejs/node_modules/mhy/node_modules/sass-loader/dist/cjs.js??ref--7-3!./story.css */ "../../nodejs/node_modules/mhy/node_modules/css-loader/dist/cjs.js?!../../nodejs/node_modules/mhy/node_modules/postcss-loader/src/index.js?!../../nodejs/node_modules/mhy/node_modules/sass-loader/dist/cjs.js?!./src/story.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/story.tsx":
/*!***********************!*\
  !*** ./src/story.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../nodejs/node_modules/mhy/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/react */ "../../nodejs/node_modules/mhy/node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useBreakpoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useBreakpoint */ "./src/useBreakpoint.ts");
/* harmony import */ var _readme_raw_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./readme.raw.md */ "./src/readme.raw.md");
/* harmony import */ var _story_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./story.css */ "./src/story.css");
/* harmony import */ var _story_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_story_css__WEBPACK_IMPORTED_MODULE_4__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






const opts = {
  notes: {
    markdown: _readme_raw_md__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
};
Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__["storiesOf"])('Hooks|useBreakpoint', module).add('Default', __signature__(() => {
  const value = Object(_useBreakpoint__WEBPACK_IMPORTED_MODULE_2__["default"])('none', [['micro', 'is micro'], ['mobile', 'is mobile'], ['tablet', 'is tablet'], ['small', 'is small'], ['medium', 'is medium'], ['large', 'is large']]);
  console.log(Object(_useBreakpoint__WEBPACK_IMPORTED_MODULE_2__["default"])());
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Example code", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, `const value = useBreakpoint('none', [
    ['micro', 'is micro'],
    ['mobile', 'is mobile'],
    ['tablet', 'is tablet'],
    ['small', 'is small'],
    ['medium', 'is medium'],
    ['large', 'is large']
])`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "`", value, "` is the current value. Resize to change."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "For more info please see ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Notes"), " tab."));
}, "useBreakpoint{value}\nuseBreakpoint{}", () => [_useBreakpoint__WEBPACK_IMPORTED_MODULE_2__["default"], _useBreakpoint__WEBPACK_IMPORTED_MODULE_2__["default"]]), opts);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(opts, "opts", "C:\\Work\\Repos\\use-breakpoint\\src\\story.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../nodejs/node_modules/mhy/node_modules/webpack/buildin/harmony-module.js */ "../../nodejs/node_modules/mhy/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/useBreakpoint.ts":
/*!******************************!*\
  !*** ./src/useBreakpoint.ts ***!
  \******************************/
/*! exports provided: calculateValue, useBreakpoint, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateValue", function() { return calculateValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useBreakpoint", function() { return useBreakpoint; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../nodejs/node_modules/mhy/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



// We will save the calculated value until innerWidth changes
let cachedProplessValue = {};

const calculateProplessValue = function calculateProplessValue(iw, ih) {
  const key = `${iw}${ih}`;
  if (cachedProplessValue[key]) return cachedProplessValue[key];
  const isLandscape = iw > ih;
  const proplessValue = {
    isLandscape,
    isPortrait: !isLandscape,
    isHDPI: window.devicePixelRatio > 1,
    innerWidth: iw,
    innerHeight: ih,
    media: {}
  }; // @ts-ignore

  for (const [k, [from, to]] of Object.entries(___WEBPACK_IMPORTED_MODULE_1__["options"].breakpoints)) {
    const [firstLetter, secondLetter, ...restLetter] = k;
    const isOrientedLandscape = ___WEBPACK_IMPORTED_MODULE_1__["LANDSCAPE"] === firstLetter;
    const isOrientedPortrait = ___WEBPACK_IMPORTED_MODULE_1__["PORTRAIT"] === firstLetter;
    const isOriented = isOrientedLandscape || isOrientedPortrait;
    const key = isOriented ? `${firstLetter}${secondLetter.toUpperCase()}${restLetter.join('')}` : `${firstLetter.toUpperCase()}${secondLetter}${restLetter.join('')}`;
    proplessValue[`is${key}`] = iw > from && iw <= to && (!isOriented || isOrientedLandscape && isLandscape || isOrientedPortrait && !isLandscape);
    proplessValue.media[k] = `(min-width: ${from}px) and (max-width: ${to}px)`;
  }

  cachedProplessValue[key] = proplessValue;
  return proplessValue;
};
/* eslint-disable no-continue */


const calculateValue = function calculateValue(defaultValue) {
  let breakpointValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  let iw = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window.innerWidth;
  let ih = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : window.innerHeight;

  if (defaultValue === undefined && !breakpointValues.length) {
    return calculateProplessValue(iw, ih);
  }

  const isLandscape = iw > ih;

  if (!breakpointValues || !breakpointValues.length) {
    return defaultValue;
  }

  if (typeof breakpointValues[0] === 'string') {
    // @ts-ignore
    breakpointValues = [breakpointValues]; // eslint-disable-line
  }

  for (const [key, value] of breakpointValues) {
    if (!___WEBPACK_IMPORTED_MODULE_1__["options"].breakpoints[key]) continue;
    const bp = ___WEBPACK_IMPORTED_MODULE_1__["options"].breakpoints[key];
    if (isLandscape && key[0] === ___WEBPACK_IMPORTED_MODULE_1__["PORTRAIT"]) continue;
    if (!isLandscape && key[0] === ___WEBPACK_IMPORTED_MODULE_1__["LANDSCAPE"]) continue;
    if (iw >= bp[0] && iw <= bp[1]) return value;
  }

  return defaultValue;
}; // @ts-ignore

const getInnerWidth = () => typeof window !== 'undefined' ? window.innerWidth : global.innerWidth || 1920; // @ts-ignore


const getInnerHeight = () => typeof window !== 'undefined' ? window.innerHeight : global.innerHeight || 1080;

let cachedIw = getInnerWidth();
let cachedIh = getInnerHeight();
function useBreakpoint(defaultValue, breakpointValues) {
  const [[innerWidth, innerHeight], setInnerWidth] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([cachedIw, cachedIh]);
  Object(___WEBPACK_IMPORTED_MODULE_1__["useResize"])(() => {
    cachedIw = getInnerWidth();
    cachedIh = getInnerHeight();
    setInnerWidth([cachedIw, cachedIh]);
  });
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => calculateValue(defaultValue, breakpointValues, innerWidth, innerHeight), [innerWidth, innerHeight, defaultValue]);
}

__signature__(useBreakpoint, "useState{[[innerWidth, innerHeight], setInnerWidth]([cachedIw, cachedIh])}\nuseResize{}\nuseMemo{}", () => [___WEBPACK_IMPORTED_MODULE_1__["useResize"]]);

const _default = useBreakpoint;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(cachedProplessValue, "cachedProplessValue", "C:\\Work\\Repos\\use-breakpoint\\src\\useBreakpoint.ts");
  reactHotLoader.register(calculateProplessValue, "calculateProplessValue", "C:\\Work\\Repos\\use-breakpoint\\src\\useBreakpoint.ts");
  reactHotLoader.register(calculateValue, "calculateValue", "C:\\Work\\Repos\\use-breakpoint\\src\\useBreakpoint.ts");
  reactHotLoader.register(getInnerWidth, "getInnerWidth", "C:\\Work\\Repos\\use-breakpoint\\src\\useBreakpoint.ts");
  reactHotLoader.register(getInnerHeight, "getInnerHeight", "C:\\Work\\Repos\\use-breakpoint\\src\\useBreakpoint.ts");
  reactHotLoader.register(cachedIw, "cachedIw", "C:\\Work\\Repos\\use-breakpoint\\src\\useBreakpoint.ts");
  reactHotLoader.register(cachedIh, "cachedIh", "C:\\Work\\Repos\\use-breakpoint\\src\\useBreakpoint.ts");
  reactHotLoader.register(useBreakpoint, "useBreakpoint", "C:\\Work\\Repos\\use-breakpoint\\src\\useBreakpoint.ts");
  reactHotLoader.register(_default, "default", "C:\\Work\\Repos\\use-breakpoint\\src\\useBreakpoint.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../nodejs/node_modules/mhy/node_modules/webpack/buildin/harmony-module.js */ "../../nodejs/node_modules/mhy/node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__(/*! ./../../../nodejs/node_modules/mhy/node_modules/webpack/buildin/global.js */ "../../nodejs/node_modules/mhy/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/useResize.ts":
/*!**************************!*\
  !*** ./src/useResize.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useResize; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../nodejs/node_modules/mhy/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};


function useResize(callback) {
  let throttle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let timeout;

    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(callback, throttle);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
}

__signature__(useResize, "useEffect{}");

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useResize, "useResize", "C:\\Work\\Repos\\use-breakpoint\\src\\useResize.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../nodejs/node_modules/mhy/node_modules/webpack/buildin/harmony-module.js */ "../../nodejs/node_modules/mhy/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 0:
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi C:/Work/nodejs/node_modules/mhy/node_modules/@storybook/core/dist/server/common/polyfills.js C:/Work/nodejs/node_modules/mhy/node_modules/@storybook/core/dist/server/preview/globals.js C:/Work/nodejs/node_modules/mhy/dist/configs/storybook/.storybook/config.js ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Work\nodejs\node_modules\mhy\node_modules\@storybook\core\dist\server\common\polyfills.js */"../../nodejs/node_modules/mhy/node_modules/@storybook/core/dist/server/common/polyfills.js");
__webpack_require__(/*! C:\Work\nodejs\node_modules\mhy\node_modules\@storybook\core\dist\server\preview\globals.js */"../../nodejs/node_modules/mhy/node_modules/@storybook/core/dist/server/preview/globals.js");
module.exports = __webpack_require__(/*! C:\Work\nodejs\node_modules\mhy\dist\configs\storybook\.storybook\config.js */"../../nodejs/node_modules/mhy/dist/configs/storybook/.storybook/config.js");


/***/ }),

/***/ 1:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime~main","vendors~main"]]]);
//# sourceMappingURL=main.094ad1f6efb70ef2fc61.bundle.js.map