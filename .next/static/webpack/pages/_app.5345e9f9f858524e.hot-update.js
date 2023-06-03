"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/layout/Header/index.tsx":
/*!*************************************!*\
  !*** ./src/layout/Header/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constants_RoutePaths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/constants/RoutePaths */ \"./src/constants/RoutePaths.ts\");\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/redux/hooks */ \"./src/redux/hooks.ts\");\n/* harmony import */ var _services_auth_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/services/auth-helper.service */ \"./src/services/auth-helper.service.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const user = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)((state)=>state.Auth.user);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (user && user.Name && user.Name !== \"\") {\n            setIsLoggedIn(true);\n        }\n    }, [\n        user\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full sticky z-999 top-0 bg-white-50\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"main-container flex justify-between items-center py-16\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"rounded-full shrink-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            className: \"rounded-full\",\n                            src: \"/meldcx-logo.png\",\n                            width: \"150\",\n                            height: \"150\",\n                            alt: \"site-logo\",\n                            priority: true\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Meldcx-remote\\\\meldcx-assignment\\\\src\\\\layout\\\\Header\\\\index.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Meldcx-remote\\\\meldcx-assignment\\\\src\\\\layout\\\\Header\\\\index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\Meldcx-remote\\\\meldcx-assignment\\\\src\\\\layout\\\\Header\\\\index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined),\n                isLoggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    role: \"loggedIn\",\n                    className: \"btn-btn bg-primary-1100 text-white-50 text-16 leading-20\",\n                    onClick: ()=>(0,_services_auth_helper_service__WEBPACK_IMPORTED_MODULE_6__.gotToLogout)(),\n                    children: \"Logout\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\Meldcx-remote\\\\meldcx-assignment\\\\src\\\\layout\\\\Header\\\\index.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: _constants_RoutePaths__WEBPACK_IMPORTED_MODULE_4__.RoutePaths.LOGIN,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        role: \"singup-button\",\n                        className: \"btn-btn\",\n                        children: \"Signin/Signup\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Meldcx-remote\\\\meldcx-assignment\\\\src\\\\layout\\\\Header\\\\index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\Meldcx-remote\\\\meldcx-assignment\\\\src\\\\layout\\\\Header\\\\index.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Projects\\\\Meldcx-remote\\\\meldcx-assignment\\\\src\\\\layout\\\\Header\\\\index.tsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\Meldcx-remote\\\\meldcx-assignment\\\\src\\\\layout\\\\Header\\\\index.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"6pOfaZRBp5jSxn21yNtXjqYBAdA=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0L0hlYWRlci9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDRjtBQUNlO0FBT1E7QUFDTDtBQUNjO0FBRTdELE1BQU1PLFNBQVMsSUFBTTs7SUFDbkIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdOLCtDQUFRQSxDQUFDLEtBQUs7SUFDbEQsTUFBTU8sT0FBT0wsNERBQWNBLENBQUMsQ0FBQ00sUUFBVUEsTUFBTUMsSUFBSSxDQUFDRixJQUFJO0lBRXREUixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSVEsUUFBUUEsS0FBS0csSUFBSSxJQUFJSCxLQUFLRyxJQUFJLEtBQUssSUFBSTtZQUN6Q0osY0FBYyxJQUFJO1FBQ3BCLENBQUM7SUFDSCxHQUFHO1FBQUNDO0tBQUs7SUFFVCxxQkFDRSw4REFBQ0k7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ2YsbURBQUtBOzRCQUNKZSxXQUFVOzRCQUNWRSxLQUFJOzRCQUNKQyxPQUFNOzRCQUNOQyxRQUFPOzRCQUNQQyxLQUFJOzRCQUNKQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7O2dCQWtCYmIsMkJBQ0MsOERBQUNNO29CQUFJUSxNQUFLO29CQUFXUCxXQUFVO29CQUEyRFEsU0FBUyxJQUFNakIsMEVBQVdBOzhCQUFJOzs7Ozs4Q0FJeEgsOERBQUNMLGtEQUFJQTtvQkFBQ3VCLE1BQU1wQixtRUFBZ0I7OEJBQzFCLDRFQUFDc0I7d0JBQU9KLE1BQUs7d0JBQWdCUCxXQUFVO2tDQUFVOzs7Ozs7Ozs7OzZCQUVwRDs7Ozs7Ozs7Ozs7O0FBSVQ7R0FuRE1SOztRQUVTRix3REFBY0E7OztLQUZ2QkU7QUFxRE4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dC9IZWFkZXIvaW5kZXgudHN4P2Q3MjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIEZhSG9tZSxcclxuICBGYVNob3BwaW5nQ2FydCxcclxuICBGYVByb2R1Y3RIdW50LFxyXG59IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuXHJcbmltcG9ydCB7IFJvdXRlUGF0aHMgfSBmcm9tICdAL2NvbnN0YW50cy9Sb3V0ZVBhdGhzJztcclxuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICdAL3JlZHV4L2hvb2tzJztcclxuaW1wb3J0IHsgZ290VG9Mb2dvdXQgfSBmcm9tICdAL3NlcnZpY2VzL2F1dGgtaGVscGVyLnNlcnZpY2UnO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc0xvZ2dlZEluLCBzZXRJc0xvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB1c2VyID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5BdXRoLnVzZXIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHVzZXIgJiYgdXNlci5OYW1lICYmIHVzZXIuTmFtZSAhPT0gJycpIHtcclxuICAgICAgc2V0SXNMb2dnZWRJbih0cnVlKTtcclxuICAgIH1cclxuICB9LCBbdXNlcl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgc3RpY2t5IHotOTk5IHRvcC0wIGJnLXdoaXRlLTUwXCI+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibWFpbi1jb250YWluZXIgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHB5LTE2XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgc2hyaW5rLTBcIj5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCJcclxuICAgICAgICAgICAgICBzcmM9XCIvbWVsZGN4LWxvZ28ucG5nXCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjE1MFwiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTUwXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJzaXRlLWxvZ29cIlxyXG4gICAgICAgICAgICAgIHByaW9yaXR5XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGdhcC0zMiBpdGVtcy1jZW50ZXIgdGV4dC0yNCB0ZXh0LWJsYWNrXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1JvdXRlUGF0aHMuSE9NRX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNiBncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPEZhSG9tZSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHJvbGU9J2hvbWUnIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1lbmQgdGV4dC0xNiBsZWFkaW5nLTIwIGZvbnQtc2VtaWJvbGQgZ3JvdXAtaG92ZXI6dGV4dC13YXJuXCI+XHJcbiAgICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHtpc0xvZ2dlZEluID8gKFxyXG4gICAgICAgICAgPGRpdiByb2xlPSdsb2dnZWRJbicgY2xhc3NOYW1lPVwiYnRuLWJ0biBiZy1wcmltYXJ5LTExMDAgdGV4dC13aGl0ZS01MCB0ZXh0LTE2IGxlYWRpbmctMjBcIiBvbkNsaWNrPXsoKSA9PiBnb3RUb0xvZ291dCgpfT5cclxuICAgICAgICAgICAgTG9nb3V0XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPExpbmsgaHJlZj17Um91dGVQYXRocy5MT0dJTn0+XHJcbiAgICAgICAgICAgIDxidXR0b24gcm9sZT0nc2luZ3VwLWJ1dHRvbicgY2xhc3NOYW1lPVwiYnRuLWJ0blwiPlNpZ25pbi9TaWdudXA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApfVxyXG4gICAgICA8L25hdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJvdXRlUGF0aHMiLCJ1c2VBcHBTZWxlY3RvciIsImdvdFRvTG9nb3V0IiwiSGVhZGVyIiwiaXNMb2dnZWRJbiIsInNldElzTG9nZ2VkSW4iLCJ1c2VyIiwic3RhdGUiLCJBdXRoIiwiTmFtZSIsImRpdiIsImNsYXNzTmFtZSIsIm5hdiIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwicHJpb3JpdHkiLCJyb2xlIiwib25DbGljayIsImhyZWYiLCJMT0dJTiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/layout/Header/index.tsx\n"));

/***/ })

});