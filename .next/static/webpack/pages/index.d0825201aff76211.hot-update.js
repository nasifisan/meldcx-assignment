"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/container/Home/active-device.tsx":
/*!**********************************************!*\
  !*** ./src/container/Home/active-device.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/redux/hooks */ \"./src/redux/hooks.ts\");\n/* harmony import */ var _redux_thunks_thunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/thunks/thunks */ \"./src/redux/thunks/thunks.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst ActiveDevice = ()=>{\n    _s();\n    const [deviceCount, setDeviceCount] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(10);\n    const [degree, setDegree] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        dispatch((0,_redux_thunks_thunks__WEBPACK_IMPORTED_MODULE_2__.getActiveDeviceThunk)());\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (deviceCount) {\n            setDegree(369 / (deviceCount - 2));\n        }\n    }, [\n        deviceCount\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"orbit\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"device-count\",\n                children: \"13\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\Meldcx-remote\\\\meldcx-assignment\\\\src\\\\container\\\\Home\\\\active-device.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"inner-circle-1\",\n                children: deviceCount && Array.from(Array(deviceCount <= 2 ? deviceCount : 2)).map((item, idx)=>{\n                    if (idx == 0) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"inner-device-1\",\n                            style: {\n                                transform: \"translate(35px,35px)\"\n                            }\n                        }, idx, false, {\n                            fileName: \"D:\\\\Projects\\\\Meldcx-remote\\\\meldcx-assignment\\\\src\\\\container\\\\Home\\\\active-device.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 19\n                        }, undefined);\n                    } else {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"inner-device-1\",\n                            style: {\n                                transform: \"rotate(180deg) translate(35px,35px)\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Meldcx-remote\\\\meldcx-assignment\\\\src\\\\container\\\\Home\\\\active-device.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 19\n                        }, undefined);\n                    }\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\Meldcx-remote\\\\meldcx-assignment\\\\src\\\\container\\\\Home\\\\active-device.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"inner-circle-2\",\n                children: deviceCount && deviceCount > 2 && Array.from(Array(deviceCount - 2)).map((item, idx)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"inner-device-2\",\n                        style: {\n                            transform: \"rotate(\".concat(idx * degree, \"deg) translate(70px,70px)\")\n                        }\n                    }, idx, false, {\n                        fileName: \"D:\\\\Projects\\\\Meldcx-remote\\\\meldcx-assignment\\\\src\\\\container\\\\Home\\\\active-device.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 15\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\Meldcx-remote\\\\meldcx-assignment\\\\src\\\\container\\\\Home\\\\active-device.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Projects\\\\Meldcx-remote\\\\meldcx-assignment\\\\src\\\\container\\\\Home\\\\active-device.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ActiveDevice, \"vzGbFSRFKvAarWPxcAnMKxVpKGI=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch\n    ];\n});\n_c = ActiveDevice;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActiveDevice);\nvar _c;\n$RefreshReg$(_c, \"ActiveDevice\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVyL0hvbWUvYWN0aXZlLWRldmljZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQStDO0FBQ2M7QUFDVjtBQUVuRCxNQUFNSyxlQUFlLElBQU07O0lBQ3pCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHSCwrQ0FBUUEsQ0FBUztJQUN2RCxNQUFNLENBQUNJLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQVM7SUFDN0MsTUFBTU0sV0FBV1YsNERBQWNBO0lBRS9CRyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RPLFNBQVNULDBFQUFvQkE7SUFDL0IsR0FBRyxFQUFFO0lBRUxFLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJRyxhQUFhO1lBQ2ZHLFVBQVUsTUFBT0gsQ0FBQUEsY0FBYztRQUNqQyxDQUFDO0lBQ0gsR0FBRztRQUFDQTtLQUFZO0lBRWhCLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQWU7Ozs7OzswQkFDOUIsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNaTixlQUNDTyxNQUFNQyxJQUFJLENBQUNELE1BQU1QLGVBQWUsSUFBSUEsY0FBYyxDQUFDLEdBQUdTLEdBQUcsQ0FDdkQsQ0FBQ0MsTUFBTUMsTUFBUTtvQkFDYixJQUFJQSxPQUFPLEdBQUc7d0JBQ1oscUJBQ0UsOERBQUNOOzRCQUVDQyxXQUFVOzRCQUNWTSxPQUFPO2dDQUNMQyxXQUFXOzRCQUNiOzJCQUpLRjs7Ozs7b0JBT1gsT0FBTzt3QkFDTCxxQkFDRSw4REFBQ047NEJBQ0NDLFdBQVU7NEJBQ1ZNLE9BQU87Z0NBQ0xDLFdBQ0U7NEJBQ0o7Ozs7OztvQkFHTixDQUFDO2dCQUNIOzs7Ozs7MEJBSU4sOERBQUNSO2dCQUFJQyxXQUFVOzBCQUNaTixlQUNDQSxjQUFjLEtBQ2RPLE1BQU1DLElBQUksQ0FBQ0QsTUFBTVAsY0FBYyxJQUFJUyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsTUFBUTtvQkFDcEQscUJBQ0UsOERBQUNOO3dCQUVDQyxXQUFVO3dCQUNWTSxPQUFPOzRCQUNMQyxXQUFXLFVBRVYsT0FEQ0YsTUFBTVQsUUFDUDt3QkFDSDt1QkFOS1M7Ozs7O2dCQVNYOzs7Ozs7Ozs7Ozs7QUFJVjtHQWxFTVo7O1FBR2FMLHdEQUFjQTs7O0tBSDNCSztBQW9FTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGFpbmVyL0hvbWUvYWN0aXZlLWRldmljZS50c3g/YzkxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gJ0AvcmVkdXgvaG9va3MnO1xyXG5pbXBvcnQgeyBnZXRBY3RpdmVEZXZpY2VUaHVuayB9IGZyb20gJ0AvcmVkdXgvdGh1bmtzL3RodW5rcyc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQWN0aXZlRGV2aWNlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtkZXZpY2VDb3VudCwgc2V0RGV2aWNlQ291bnRdID0gdXNlU3RhdGU8bnVtYmVyPigxMCk7XHJcbiAgY29uc3QgW2RlZ3JlZSwgc2V0RGVncmVlXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZ2V0QWN0aXZlRGV2aWNlVGh1bmsoKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGRldmljZUNvdW50KSB7XHJcbiAgICAgIHNldERlZ3JlZSgzNjkgLyAoZGV2aWNlQ291bnQgLSAyKSk7XHJcbiAgICB9XHJcbiAgfSwgW2RldmljZUNvdW50XSk7XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwib3JiaXRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXZpY2UtY291bnRcIj4xMzwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLWNpcmNsZS0xXCI+XHJcbiAgICAgICAge2RldmljZUNvdW50ICYmXHJcbiAgICAgICAgICBBcnJheS5mcm9tKEFycmF5KGRldmljZUNvdW50IDw9IDIgPyBkZXZpY2VDb3VudCA6IDIpKS5tYXAoXHJcbiAgICAgICAgICAgIChpdGVtLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoaWR4ID09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbm5lci1kZXZpY2UtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgzNXB4LDM1cHgpJyxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5uZXItZGV2aWNlLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdyb3RhdGUoMTgwZGVnKSB0cmFuc2xhdGUoMzVweCwzNXB4KScsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci1jaXJjbGUtMlwiPlxyXG4gICAgICAgIHtkZXZpY2VDb3VudCAmJlxyXG4gICAgICAgICAgZGV2aWNlQ291bnQgPiAyICYmXHJcbiAgICAgICAgICBBcnJheS5mcm9tKEFycmF5KGRldmljZUNvdW50IC0gMikpLm1hcCgoaXRlbSwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAga2V5PXtpZHh9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbm5lci1kZXZpY2UtMlwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGUoJHtcclxuICAgICAgICAgICAgICAgICAgICBpZHggKiBkZWdyZWVcclxuICAgICAgICAgICAgICAgICAgfWRlZykgdHJhbnNsYXRlKDcwcHgsNzBweClgLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWN0aXZlRGV2aWNlO1xyXG4iXSwibmFtZXMiOlsidXNlQXBwRGlzcGF0Y2giLCJnZXRBY3RpdmVEZXZpY2VUaHVuayIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBY3RpdmVEZXZpY2UiLCJkZXZpY2VDb3VudCIsInNldERldmljZUNvdW50IiwiZGVncmVlIiwic2V0RGVncmVlIiwiZGlzcGF0Y2giLCJkaXYiLCJjbGFzc05hbWUiLCJBcnJheSIsImZyb20iLCJtYXAiLCJpdGVtIiwiaWR4Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/container/Home/active-device.tsx\n"));

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _container_Home_active_device__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/container/Home/active-device */ \"./src/container/Home/active-device.tsx\");\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"hello\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\Meldcx-remote\\\\meldcx-assignment\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\Meldcx-remote\\\\meldcx-assignment\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                role: \"home-section\",\n                className: \"main-container flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_container_Home_active_device__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\Meldcx-remote\\\\meldcx-assignment\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\Meldcx-remote\\\\meldcx-assignment\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Home;\nHome.pageOptions = {\n    requiresAuth: true\n};\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBNkI7QUFFNkI7QUFDM0MsU0FBU0UsT0FBTztJQUU3QixxQkFDRTs7MEJBQ0UsOERBQUNGLGtEQUFJQTswQkFDSCw0RUFBQ0c7OEJBQU07Ozs7Ozs7Ozs7OzBCQUVULDhEQUFDQztnQkFDQ0MsTUFBSztnQkFDTEMsV0FBVTswQkFFViw0RUFBQ0wscUVBQVlBOzs7Ozs7Ozs7Ozs7QUFJckIsQ0FBQztLQWZ1QkM7QUFpQnhCQSxLQUFLSyxXQUFXLEdBQUc7SUFDakJDLGNBQWMsSUFBSTtBQUNwQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmltcG9ydCBBY3RpdmVEZXZpY2UgZnJvbSAnQC9jb250YWluZXIvSG9tZS9hY3RpdmUtZGV2aWNlJztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5oZWxsbzwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPHNlY3Rpb25cclxuICAgICAgICByb2xlPVwiaG9tZS1zZWN0aW9uXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJtYWluLWNvbnRhaW5lciBmbGV4IGp1c3RpZnktY2VudGVyXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxBY3RpdmVEZXZpY2UgLz5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuSG9tZS5wYWdlT3B0aW9ucyA9IHtcclxuICByZXF1aXJlc0F1dGg6IHRydWUsXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiQWN0aXZlRGV2aWNlIiwiSG9tZSIsInRpdGxlIiwic2VjdGlvbiIsInJvbGUiLCJjbGFzc05hbWUiLCJwYWdlT3B0aW9ucyIsInJlcXVpcmVzQXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});