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

/***/ "./lib/client/useUser.ts":
/*!*******************************!*\
  !*** ./lib/client/useUser.ts ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useUser)\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__]);\nswr__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction useUser() {\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api/me\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (data && !data.ok) {\n            router.replace(\"/log-in\");\n        }\n    }, [\n        data,\n        router\n    ]);\n    return {\n        user: data?.profile,\n        isLoading: !data && !error\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY2xpZW50L3VzZVVzZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ047QUFDVDtBQUVWLFNBQVNHLE9BQU8sR0FBRztJQUNoQyxNQUFNLEVBQUVDLElBQUksR0FBRUMsS0FBSyxHQUFFLEdBQUdILCtDQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3pDLE1BQU1JLE1BQU0sR0FBR04sc0RBQVMsRUFBRTtJQUMxQkMsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsSUFBSUcsSUFBSSxJQUFJLENBQUNBLElBQUksQ0FBQ0csRUFBRSxFQUFFO1lBQ3BCRCxNQUFNLENBQUNFLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMzQjtLQUNGLEVBQUU7UUFBQ0osSUFBSTtRQUFFRSxNQUFNO0tBQUMsQ0FBQyxDQUFDO0lBQ25CLE9BQU87UUFBRUcsSUFBSSxFQUFFTCxJQUFJLEVBQUVNLE9BQU87UUFBRUMsU0FBUyxFQUFFLENBQUNQLElBQUksSUFBSSxDQUFDQyxLQUFLO0tBQUUsQ0FBQztDQUM1RCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9saWIvY2xpZW50L3VzZVVzZXIudHM/ZWQ4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVVzZXIoKSB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcIi9hcGkvbWVcIik7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhICYmICFkYXRhLm9rKSB7XG4gICAgICByb3V0ZXIucmVwbGFjZShcIi9sb2ctaW5cIik7XG4gICAgfVxuICB9LCBbZGF0YSwgcm91dGVyXSk7XG4gIHJldHVybiB7IHVzZXI6IGRhdGE/LnByb2ZpbGUsIGlzTG9hZGluZzogIWRhdGEgJiYgIWVycm9yIH07XG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU1dSIiwidXNlVXNlciIsImRhdGEiLCJlcnJvciIsInJvdXRlciIsIm9rIiwicmVwbGFjZSIsInVzZXIiLCJwcm9maWxlIiwiaXNMb2FkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/client/useUser.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_client_useUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/client/useUser */ \"./lib/client/useUser.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_client_useUser__WEBPACK_IMPORTED_MODULE_1__]);\n_lib_client_useUser__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{\n    const { user , isLoading  } = (0,_lib_client_useUser__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    console.log(user, \"user\");\n    return isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/jh/Downloads/react-final/pages/index.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        \"Welcome \",\n                        user.name,\n                        \"!!\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jh/Downloads/react-final/pages/index.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: [\n                        \"Your email is: \",\n                        user.email\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jh/Downloads/react-final/pages/index.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"You are not logged in\"\n        }, void 0, false, {\n            fileName: \"/Users/jh/Downloads/react-final/pages/index.tsx\",\n            lineNumber: 16,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTRDO0FBRTVDLGlFQUFlLElBQU07SUFDbkIsTUFBTSxFQUFFQyxJQUFJLEdBQUVDLFNBQVMsR0FBRSxHQUFHRiwrREFBTyxFQUFFO0lBQ3JDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzFCLE9BQU9DLFNBQVMsaUJBQ2QsOERBQUNHLElBQUU7a0JBQUMsWUFBVTs7Ozs7aUJBQUssaUJBRW5CO2tCQUNHSixJQUFJLGlCQUNIOzs4QkFDRSw4REFBQ0ksSUFBRTs7d0JBQUMsVUFBUTt3QkFBQ0osSUFBSSxDQUFDSyxJQUFJO3dCQUFDLElBQUU7Ozs7Ozs2QkFBSzs4QkFDOUIsOERBQUNDLElBQUU7O3dCQUFDLGlCQUFlO3dCQUFDTixJQUFJLENBQUNPLEtBQUs7Ozs7Ozs2QkFBTTs7d0JBQ25DLGlCQUVILDhEQUFDSCxJQUFFO3NCQUFDLHVCQUFxQjs7Ozs7cUJBQUs7cUJBRS9CLENBQ0g7Q0FDSCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS10eXBlc2NyaXB0LXRhaWx3aW5kLWJsdWVwcmludC8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VVc2VyIGZyb20gXCIuLi9saWIvY2xpZW50L3VzZVVzZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCB7IHVzZXIsIGlzTG9hZGluZyB9ID0gdXNlVXNlcigpO1xuICBjb25zb2xlLmxvZyh1c2VyLCBcInVzZXJcIik7XG4gIHJldHVybiBpc0xvYWRpbmcgPyAoXG4gICAgPGgxPkxvYWRpbmcuLi48L2gxPlxuICApIDogKFxuICAgIDw+XG4gICAgICB7dXNlciA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8aDE+V2VsY29tZSB7dXNlci5uYW1lfSEhPC9oMT5cbiAgICAgICAgICA8aDI+WW91ciBlbWFpbCBpczoge3VzZXIuZW1haWx9PC9oMj5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8aDE+WW91IGFyZSBub3QgbG9nZ2VkIGluPC9oMT5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInVzZVVzZXIiLCJ1c2VyIiwiaXNMb2FkaW5nIiwiY29uc29sZSIsImxvZyIsImgxIiwibmFtZSIsImgyIiwiZW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

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

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();