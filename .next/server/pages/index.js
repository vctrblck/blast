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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n// index.js\n// Modules:\n\n\n\n\n\n// Code:\nfunction Home() {\n    // Component Hooks\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    /*const { status, data: session } = useSession({\r\n    required: true,\r\n    onUnauthenticated() {\r\n      router.push(\"/auth/login\");\r\n    },\r\n  });*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (session) {\n            router.push(\"/search\");\n        } else {\n            router.push(\"/auth/login\");\n        }\n    }, [\n        session\n    ]);\n    // Component Render\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Blast\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Katlego Masemene\\\\Documents\\\\Third_Year\\\\Software Design Project\\\\New folder\\\\blast\\\\pages\\\\index.js\",\n                    lineNumber: 39,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"icon\",\n                    href: \"/favicon.ico\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Katlego Masemene\\\\Documents\\\\Third_Year\\\\Software Design Project\\\\New folder\\\\blast\\\\pages\\\\index.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"preconnect\",\n                    href: \"https://fonts.googleapis.com\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Katlego Masemene\\\\Documents\\\\Third_Year\\\\Software Design Project\\\\New folder\\\\blast\\\\pages\\\\index.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"preconnect\",\n                    href: \"https://fonts.gstatic.com\",\n                    crossorigin: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Katlego Masemene\\\\Documents\\\\Third_Year\\\\Software Design Project\\\\New folder\\\\blast\\\\pages\\\\index.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"stylesheet\",\n                    href: \"https://fonts.googleapis.com/css2?family=Ubuntu:wght@400&display=swap\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Katlego Masemene\\\\Documents\\\\Third_Year\\\\Software Design Project\\\\New folder\\\\blast\\\\pages\\\\index.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Katlego Masemene\\\\Documents\\\\Third_Year\\\\Software Design Project\\\\New folder\\\\blast\\\\pages\\\\index.js\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Katlego Masemene\\\\Documents\\\\Third_Year\\\\Software Design Project\\\\New folder\\\\blast\\\\pages\\\\index.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home); // index.js ends here\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLFdBQVc7QUFFWCxXQUFXO0FBRVg7QUFBeUM7QUFDWjtBQUNnQjtBQUNMO0FBRXhDLFFBQVE7QUFFUixTQUFTSyxJQUFJLEdBQ2I7SUFDRSxrQkFBa0I7SUFFbEIsTUFBTUMsTUFBTSxHQUFHRixzREFBUyxFQUFFO0lBQzFCLE1BQU0sRUFBRUcsSUFBSSxFQUFFQyxPQUFPLEdBQUUsR0FBR0wsMkRBQVUsRUFBRTtJQUV0QztRQVFFLElBQUlLLE9BQU87WUFDVEYsTUFBTSxDQUFDRyxJQUFJLENBQUM7U0FDYixNQUFNOzt3REFFTjtLQUNGLEVBQUU7UUFBQ0QsT0FBTztLQUFDLENBQUMsQ0FBQztJQUVkLG1CQUFtQjtJQUVuQjs7Ozs7Ozs7O3dCQUd3Qjs4QkFDbEI7b0JBQU1LLEdBQUcsRUFBQyxNQUFNO29CQUFDQyxJQUFJLEVBQUM7Ozs7O3dCQUFzQjs4QkFDNUM7b0JBQU1ELEdBQUcsRUFBQyxZQUFZO29CQUFDQyxJQUFJLEVBQUM7Ozs7O3dCQUFzQzs4QkFDbEU7b0JBQU1ELEdBQUcsRUFBQyxZQUFZO29CQUFDQyxJQUFJLEVBQUM7b0JBQTRCQyxXQUFXOzs7Ozt3QkFBUTs4QkFDM0U7b0JBQU1GLEdBQUcsRUFBQyxZQUFZO29CQUFDQyxJQUFJLEVBQUM7Ozs7O3dCQUErRTs7Ozs7Ozs7Ozs7WUFFekcsQ0FDTjtDQUNIO0FBRUQsZUFBZVQsSUFBSSxDQUFDLENBRXBCLHFCQUFxQiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW5kZXguanNcclxuXHJcbi8vIE1vZHVsZXM6XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG4vLyBDb2RlOlxyXG5cclxuZnVuY3Rpb24gSG9tZSgpXHJcbntcclxuICAvLyBDb21wb25lbnQgSG9va3NcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XHJcblxyXG4gIC8qY29uc3QgeyBzdGF0dXMsIGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oe1xyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICBvblVuYXV0aGVudGljYXRlZCgpIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvYXV0aC9sb2dpblwiKTtcclxuICAgIH0sXHJcbiAgfSk7Ki9cclxuXHJcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKHNlc3Npb24pIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvc2VhcmNoXCIpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9hdXRoL2xvZ2luXCIpXHJcbiAgICB9XHJcbiAgfSwgW3Nlc3Npb25dKTtcclxuXHJcbiAgLy8gQ29tcG9uZW50IFJlbmRlclxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5CbGFzdDwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIj48L2xpbms+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCI+PC9saW5rPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIGNyb3Nzb3JpZ2luPjwvbGluaz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VWJ1bnR1OndnaHRANDAwJmRpc3BsYXk9c3dhcFwiPjwvbGluaz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuXHJcbi8vIGluZGV4LmpzIGVuZHMgaGVyZSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkhlYWQiLCJ1c2VTZXNzaW9uIiwidXNlUm91dGVyIiwiSG9tZSIsInJvdXRlciIsImRhdGEiLCJzZXNzaW9uIiwicHVzaCIsImRpdiIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiLCJjcm9zc29yaWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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