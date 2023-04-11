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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_server_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/server/db */ \"(api)/./lib/server/db.ts\");\n\nasync function handler(req, res) {\n    const { email , name  } = req.body;\n    console.log(email);\n    const isExisted = await _lib_server_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n        where: {\n            email\n        }\n    });\n    console.log(isExisted);\n    if (isExisted) {\n        res.send({\n            ok: false,\n            error: \"user already exists please login\"\n        });\n        return;\n    }\n    await _lib_server_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.create({\n        data: {\n            name,\n            email\n        }\n    });\n    res.send({\n        ok: true\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVnaXN0ZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDeUM7QUFDMUIsZUFBZUMsT0FBTyxDQUNuQ0MsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ3BCO0lBQ0EsTUFBTSxFQUFFQyxLQUFLLEdBQUVDLElBQUksR0FBRSxHQUFHSCxHQUFHLENBQUNJLElBQUk7SUFFaENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixLQUFLLENBQUMsQ0FBQztJQUVuQixNQUFNSyxTQUFTLEdBQUcsTUFBTVQsc0VBQXNCLENBQUM7UUFDN0NZLEtBQUssRUFBRTtZQUNMUixLQUFLO1NBQ047S0FDRixDQUFDO0lBRUZHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxTQUFTLENBQUMsQ0FBQztJQUV2QixJQUFJQSxTQUFTLEVBQUU7UUFDYk4sR0FBRyxDQUFDVSxJQUFJLENBQUM7WUFDUEMsRUFBRSxFQUFFLEtBQUs7WUFDVEMsS0FBSyxFQUFFLGtDQUFrQztTQUMxQyxDQUFDLENBQUM7UUFDSCxPQUFPO0tBQ1I7SUFFRCxNQUFNZixrRUFBa0IsQ0FBQztRQUN2QmlCLElBQUksRUFBRTtZQUNKWixJQUFJO1lBQ0pELEtBQUs7U0FDTjtLQUNGLENBQUMsQ0FBQztJQUVIRCxHQUFHLENBQUNVLElBQUksQ0FBQztRQUNQQyxFQUFFLEVBQUUsSUFBSTtLQUNULENBQUMsQ0FBQztDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS10eXBlc2NyaXB0LXRhaWx3aW5kLWJsdWVwcmludC8uL3BhZ2VzL2FwaS9yZWdpc3Rlci50cz83ZGE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vLi4vbGliL3NlcnZlci9kYlwiO1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuICBjb25zdCB7IGVtYWlsLCBuYW1lIH0gPSByZXEuYm9keTtcblxuICBjb25zb2xlLmxvZyhlbWFpbCk7XG5cbiAgY29uc3QgaXNFeGlzdGVkID0gYXdhaXQgY2xpZW50LnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGVtYWlsLFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKGlzRXhpc3RlZCk7XG5cbiAgaWYgKGlzRXhpc3RlZCkge1xuICAgIHJlcy5zZW5kKHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIGVycm9yOiBcInVzZXIgYWxyZWFkeSBleGlzdHMgcGxlYXNlIGxvZ2luXCIsXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgYXdhaXQgY2xpZW50LnVzZXIuY3JlYXRlKHtcbiAgICBkYXRhOiB7XG4gICAgICBuYW1lLFxuICAgICAgZW1haWwsXG4gICAgfSxcbiAgfSk7XG5cbiAgcmVzLnNlbmQoe1xuICAgIG9rOiB0cnVlLFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJjbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZW1haWwiLCJuYW1lIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJpc0V4aXN0ZWQiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwic2VuZCIsIm9rIiwiZXJyb3IiLCJjcmVhdGUiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/register.ts\n");

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