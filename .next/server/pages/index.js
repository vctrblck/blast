"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n// index.js\n// Modules:\n\n\n\n\n\n// Code:\nfunction Home() {\n    // Component Hooks\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (session) {\n            router.push(\"/search\");\n        } else {\n            router.push(\"/auth/login\");\n        }\n    }, [\n        session\n    ]);\n    // Component Render\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Blast\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Katlego Masemene\\\\Documents\\\\Third_Year\\\\Software Design Project\\\\New folder\\\\blast\\\\pages\\\\index.js\",\n                    lineNumber: 32,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"icon\",\n                    href: \"/favicon.ico\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Katlego Masemene\\\\Documents\\\\Third_Year\\\\Software Design Project\\\\New folder\\\\blast\\\\pages\\\\index.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"preconnect\",\n                    href: \"https://fonts.googleapis.com\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Katlego Masemene\\\\Documents\\\\Third_Year\\\\Software Design Project\\\\New folder\\\\blast\\\\pages\\\\index.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"preconnect\",\n                    href: \"https://fonts.gstatic.com\",\n                    crossorigin: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Katlego Masemene\\\\Documents\\\\Third_Year\\\\Software Design Project\\\\New folder\\\\blast\\\\pages\\\\index.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"stylesheet\",\n                    href: \"https://fonts.googleapis.com/css2?family=Ubuntu:wght@400&display=swap\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Katlego Masemene\\\\Documents\\\\Third_Year\\\\Software Design Project\\\\New folder\\\\blast\\\\pages\\\\index.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Katlego Masemene\\\\Documents\\\\Third_Year\\\\Software Design Project\\\\New folder\\\\blast\\\\pages\\\\index.js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Katlego Masemene\\\\Documents\\\\Third_Year\\\\Software Design Project\\\\New folder\\\\blast\\\\pages\\\\index.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home); // index.js ends here\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLFdBQVc7QUFFWCxXQUFXO0FBRVg7QUFBeUM7QUFDWjtBQUNnQjtBQUNMO0FBRXhDLFFBQVE7QUFFUixTQUFTSyxJQUFJLEdBQ2I7SUFDRSxrQkFBa0I7SUFFbEIsTUFBTUMsTUFBTSxHQUFHRixzREFBUyxFQUFFO0lBQzFCLE1BQU0sRUFBRUcsSUFBSSxFQUFFQyxPQUFPLEdBQUUsR0FBR0wsMkRBQVUsRUFBRTtJQUV0Q0YsZ0RBQVMsQ0FBQyxXQUFXO1FBQ25CLElBQUlPLE9BQU8sRUFBRTtZQUNYRixNQUFNLENBQUNHLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDdkIsTUFBTTtZQUNMSCxNQUFNLENBQUNHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDM0I7S0FDRixFQUFFO1FBQUNELE9BQU87S0FBQyxDQUFDLENBQUM7SUFFZCxtQkFBbUI7SUFFbkIscUJBQ0UsOERBQUNFLEtBQUc7a0JBQ0YsNEVBQUNSLGtEQUFJOzs4QkFDTCw4REFBQ1MsT0FBSzs4QkFBQyxPQUFLOzs7Ozt3QkFBUTs4QkFDbEIsOERBQUNDLE1BQUk7b0JBQUNDLEdBQUcsRUFBQyxNQUFNO29CQUFDQyxJQUFJLEVBQUMsY0FBYzs7Ozs7d0JBQVE7OEJBQzVDLDhEQUFDRixNQUFJO29CQUFDQyxHQUFHLEVBQUMsWUFBWTtvQkFBQ0MsSUFBSSxFQUFDLDhCQUE4Qjs7Ozs7d0JBQVE7OEJBQ2xFLDhEQUFDRixNQUFJO29CQUFDQyxHQUFHLEVBQUMsWUFBWTtvQkFBQ0MsSUFBSSxFQUFDLDJCQUEyQjtvQkFBQ0MsV0FBVzs7Ozs7d0JBQVE7OEJBQzNFLDhEQUFDSCxNQUFJO29CQUFDQyxHQUFHLEVBQUMsWUFBWTtvQkFBQ0MsSUFBSSxFQUFDLHVFQUF1RTs7Ozs7d0JBQVE7Ozs7OztnQkFDdEc7Ozs7O1lBQ0gsQ0FDTjtDQUNIO0FBRUQsaUVBQWVULElBQUksRUFBQyxDQUVwQixxQkFBcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGluZGV4LmpzXHJcblxyXG4vLyBNb2R1bGVzOlxyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuLy8gQ29kZTpcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKVxyXG57XHJcbiAgLy8gQ29tcG9uZW50IEhvb2tzXHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xyXG5cclxuICB1c2VFZmZlY3QoZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoc2Vzc2lvbikge1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9zZWFyY2hcIilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL2F1dGgvbG9naW5cIilcclxuICAgIH1cclxuICB9LCBbc2Vzc2lvbl0pO1xyXG5cclxuICAvLyBDb21wb25lbnQgUmVuZGVyXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPkJsYXN0PC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiPjwvbGluaz5cclxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIj48L2xpbms+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgY3Jvc3NvcmlnaW4+PC9saW5rPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1VYnVudHU6d2dodEA0MDAmZGlzcGxheT1zd2FwXCI+PC9saW5rPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG5cclxuLy8gaW5kZXguanMgZW5kcyBoZXJlIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiSGVhZCIsInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJIb21lIiwicm91dGVyIiwiZGF0YSIsInNlc3Npb24iLCJwdXNoIiwiZGl2IiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsImNyb3Nzb3JpZ2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();