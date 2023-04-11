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
exports.id = "pages/api/register";
exports.ids = ["pages/api/register"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/server/db.ts":
/*!**************************!*\
  !*** ./lib/server/db.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.db = db;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2VydmVyL2RiLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQU05QyxNQUFNQyxFQUFFLEdBQUcsSUFBSUQsd0RBQVksRUFBRTtBQUU3QixJQUFJRSxJQUFzQyxFQUFFQyxNQUFNLENBQUNGLEVBQUUsR0FBR0EsRUFBRSxDQUFDO0FBRTNELGlFQUFlQSxFQUFFLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXR5cGVzY3JpcHQtdGFpbHdpbmQtYmx1ZXByaW50Ly4vbGliL3NlcnZlci9kYi50cz82NDE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIHZhciBkYjogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xufVxuXG5jb25zdCBkYiA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIGdsb2JhbC5kYiA9IGRiO1xuXG5leHBvcnQgZGVmYXVsdCBkYjtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJkYiIsInByb2Nlc3MiLCJnbG9iYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/server/db.ts\n");

/***/ }),

/***/ "(api)/./pages/api/register.ts":
/*!*******************************!*\
  !*** ./pages/api/register.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_server_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/server/db */ \"(api)/./lib/server/db.ts\");\n\nasync function handler(req, res) {\n    const { email , name  } = req.body;\n    const isExisted = await _lib_server_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n        where: {\n            email\n        }\n    });\n    if (isExisted) {\n        res.send({\n            ok: false,\n            error: \"\\uD574\\uB2F9 \\uACC4\\uC815\\uC774 \\uC874\\uC7AC \\uD569\\uB2C8\\uB2E4. \\uB2E4\\uB978 \\uC774\\uBA54\\uC77C\\uC744 \\uC0AC\\uC6A9\\uD574\\uC8FC\\uC138\\uC694.\"\n        });\n        return;\n    }\n    await _lib_server_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.create({\n        data: {\n            name,\n            email\n        }\n    });\n    res.send({\n        ok: true\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVnaXN0ZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDeUM7QUFDMUIsZUFBZUMsT0FBTyxDQUNuQ0MsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ3BCO0lBQ0EsTUFBTSxFQUFFQyxLQUFLLEdBQUVDLElBQUksR0FBRSxHQUFHSCxHQUFHLENBQUNJLElBQUk7SUFFaEMsTUFBTUMsU0FBUyxHQUFHLE1BQU1QLHNFQUFzQixDQUFDO1FBQzdDVSxLQUFLLEVBQUU7WUFDTE4sS0FBSztTQUNOO0tBQ0YsQ0FBQztJQUVGLElBQUlHLFNBQVMsRUFBRTtRQUNiSixHQUFHLENBQUNRLElBQUksQ0FBQztZQUNQQyxFQUFFLEVBQUUsS0FBSztZQUNUQyxLQUFLLEVBQUUsOElBQWdDO1NBQ3hDLENBQUMsQ0FBQztRQUNILE9BQU87S0FDUjtJQUVELE1BQU1iLGtFQUFrQixDQUFDO1FBQ3ZCZSxJQUFJLEVBQUU7WUFDSlYsSUFBSTtZQUNKRCxLQUFLO1NBQ047S0FDRixDQUFDLENBQUM7SUFFSEQsR0FBRyxDQUFDUSxJQUFJLENBQUM7UUFDUEMsRUFBRSxFQUFFLElBQUk7S0FDVCxDQUFDLENBQUM7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9wYWdlcy9hcGkvcmVnaXN0ZXIudHM/N2RhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uLy4uL2xpYi9zZXJ2ZXIvZGJcIjtcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlXG4pIHtcbiAgY29uc3QgeyBlbWFpbCwgbmFtZSB9ID0gcmVxLmJvZHk7XG5cbiAgY29uc3QgaXNFeGlzdGVkID0gYXdhaXQgY2xpZW50LnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGVtYWlsLFxuICAgIH0sXG4gIH0pO1xuXG4gIGlmIChpc0V4aXN0ZWQpIHtcbiAgICByZXMuc2VuZCh7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBlcnJvcjogXCLtlbTri7kg6rOE7KCV7J20IOyhtOyerCDtlanri4jri6QuIOuLpOuluCDsnbTrqZTsnbzsnYQg7IKs7Jqp7ZW07KO87IS47JqULlwiLFxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGF3YWl0IGNsaWVudC51c2VyLmNyZWF0ZSh7XG4gICAgZGF0YToge1xuICAgICAgbmFtZSxcbiAgICAgIGVtYWlsLFxuICAgIH0sXG4gIH0pO1xuXG4gIHJlcy5zZW5kKHtcbiAgICBvazogdHJ1ZSxcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiY2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsImVtYWlsIiwibmFtZSIsImJvZHkiLCJpc0V4aXN0ZWQiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwic2VuZCIsIm9rIiwiZXJyb3IiLCJjcmVhdGUiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/register.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/register.ts"));
module.exports = __webpack_exports__;

})();