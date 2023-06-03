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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/redux/hooks */ \"./src/redux/hooks.ts\");\n/* harmony import */ var _redux_thunks_thunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/thunks/thunks */ \"./src/redux/thunks/thunks.ts\");\n/* harmony import */ var _utils_common_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/common/common */ \"./src/utils/common/common.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ActiveDevice = ()=>{\n    _s();\n    const [degree, setDegree] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [deviceCount, setDeviceCount] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch)();\n    const devices = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((state)=>state.Api.getActiveDevices.data);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        dispatch((0,_redux_thunks_thunks__WEBPACK_IMPORTED_MODULE_2__.getActiveDeviceThunk)());\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (devices && devices.devices && Array.isArray(devices.devices)) {\n            setDeviceCount(Number(devices.devices.length));\n            if (devices.devices.length > 2) {\n                setDegree(Number(369 / (devices.devices.length - 2)));\n            }\n        }\n    }, [\n        devices\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"orbit\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"device-count\",\n                children: deviceCount\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\Meldcx-remote\\\\meldcx-assignment\\\\src\\\\container\\\\Home\\\\active-device.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"inner-circle-1\",\n                children: devices && devices.devices && Array.isArray(devices.devices) && devices.devices.slice(0, devices.devices.length >= 2 ? 2 : 1).map((item, idx)=>{\n                    if (idx == 0) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"inner-device-1\",\n                            style: {\n                                transform: \"translate(35px,35px)\"\n                            }\n                        }, (0,_utils_common_common__WEBPACK_IMPORTED_MODULE_3__.getValue)(item, \"id\") | idx, false, {\n                            fileName: \"D:\\\\Projects\\\\Meldcx-remote\\\\meldcx-assignment\\\\src\\\\container\\\\Home\\\\active-device.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 19\n                        }, undefined);\n                    } else {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"inner-device-1\",\n                            style: {\n                                transform: \"rotate(180deg) translate(35px,35px)\"\n                            }\n                        }, (item === null || item === void 0 ? void 0 : item.id) | idx, false, {\n                            fileName: \"D:\\\\Projects\\\\Meldcx-remote\\\\meldcx-assignment\\\\src\\\\container\\\\Home\\\\active-device.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 19\n                        }, undefined);\n                    }\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\Meldcx-remote\\\\meldcx-assignment\\\\src\\\\container\\\\Home\\\\active-device.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"inner-circle-2\",\n                children: devices && devices.devices && Array.isArray(devices.devices) && devices.devices.length > 2 && devices.devices.slice(2, devices.devices.length).map((item, idx)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"inner-device-2\",\n                        style: {\n                            transform: \"rotate(\".concat(idx * degree, \"deg) translate(70px,70px)\")\n                        }\n                    }, (item === null || item === void 0 ? void 0 : item.id) | idx, false, {\n                        fileName: \"D:\\\\Projects\\\\Meldcx-remote\\\\meldcx-assignment\\\\src\\\\container\\\\Home\\\\active-device.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\Meldcx-remote\\\\meldcx-assignment\\\\src\\\\container\\\\Home\\\\active-device.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Projects\\\\Meldcx-remote\\\\meldcx-assignment\\\\src\\\\container\\\\Home\\\\active-device.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ActiveDevice, \"GYsf6HZDQDm27/ESF/WEFp5IXtI=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector\n    ];\n});\n_c = ActiveDevice;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActiveDevice);\nvar _c;\n$RefreshReg$(_c, \"ActiveDevice\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVyL0hvbWUvYWN0aXZlLWRldmljZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUMrRDtBQUNGO0FBQ1o7QUFDRTtBQUVuRCxNQUFNTyxlQUFlLElBQU07O0lBQ3pCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHSCwrQ0FBUUEsQ0FBUztJQUM3QyxNQUFNLENBQUNJLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQVcsRUFBRTtJQUUzRCxNQUFNTSxXQUFXWiw0REFBY0E7SUFDL0IsTUFBTWEsVUFBaUNaLDREQUFjQSxDQUNuRCxDQUFDYSxRQUFVQSxNQUFNQyxHQUFHLENBQUNDLGdCQUFnQixDQUFDQyxJQUFJO0lBRzVDWixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RPLFNBQVNWLDBFQUFvQkE7SUFDL0IsR0FBRyxFQUFFO0lBRUxHLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUNFUSxXQUNBQSxRQUFRQSxPQUFPLElBQ2ZLLE1BQU1DLE9BQU8sQ0FBQ04sUUFBUUEsT0FBTyxHQUM3QjtZQUNBRixlQUFlUyxPQUFPUCxRQUFRQSxPQUFPLENBQUNRLE1BQU07WUFFNUMsSUFBSVIsUUFBUUEsT0FBTyxDQUFDUSxNQUFNLEdBQUcsR0FBRztnQkFDOUJaLFVBQVVXLE9BQU8sTUFBT1AsQ0FBQUEsUUFBUUEsT0FBTyxDQUFDUSxNQUFNLEdBQUc7WUFDbkQsQ0FBQztRQUNILENBQUM7SUFDSCxHQUFHO1FBQUNSO0tBQVE7SUFFWixxQkFDRSw4REFBQ1M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUFnQmI7Ozs7OzswQkFDL0IsOERBQUNZO2dCQUFJQyxXQUFVOzBCQUNaVixXQUNDQSxRQUFRQSxPQUFPLElBQ2ZLLE1BQU1DLE9BQU8sQ0FBQ04sUUFBUUEsT0FBTyxLQUM3QkEsUUFBUUEsT0FBTyxDQUNaVyxLQUFLLENBQUMsR0FBR1gsUUFBUUEsT0FBTyxDQUFDUSxNQUFNLElBQUksSUFBSSxJQUFJLENBQUMsRUFDNUNJLEdBQUcsQ0FBQyxDQUFDQyxNQUFjQyxNQUFRO29CQUMxQixJQUFJQSxPQUFPLEdBQUc7d0JBQ1oscUJBQ0UsOERBQUNMOzRCQUVDQyxXQUFVOzRCQUNWSyxPQUFPO2dDQUNMQyxXQUFXOzRCQUNiOzJCQUpLMUIsOERBQVFBLENBQUN1QixNQUFNLFFBQVFDOzs7OztvQkFPbEMsT0FBTzt3QkFDTCxxQkFDRSw4REFBQ0w7NEJBRUNDLFdBQVU7NEJBQ1ZLLE9BQU87Z0NBQ0xDLFdBQ0U7NEJBQ0o7MkJBTEtILENBQUFBLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTUksRUFBRSxJQUFHSDs7Ozs7b0JBUXRCLENBQUM7Z0JBQ0g7Ozs7OzswQkFHTiw4REFBQ0w7Z0JBQUlDLFdBQVU7MEJBQ1pWLFdBQ0NBLFFBQVFBLE9BQU8sSUFDZkssTUFBTUMsT0FBTyxDQUFDTixRQUFRQSxPQUFPLEtBQzdCQSxRQUFRQSxPQUFPLENBQUNRLE1BQU0sR0FBRyxLQUN6QlIsUUFBUUEsT0FBTyxDQUNaVyxLQUFLLENBQUMsR0FBR1gsUUFBUUEsT0FBTyxDQUFDUSxNQUFNLEVBQy9CSSxHQUFHLENBQUMsQ0FBQ0MsTUFBY0MsTUFBUTtvQkFDMUIscUJBQ0UsOERBQUNMO3dCQUVDQyxXQUFVO3dCQUNWSyxPQUFPOzRCQUNMQyxXQUFXLFVBRVYsT0FEQ0YsTUFBTW5CLFFBQ1A7d0JBQ0g7dUJBTktrQixDQUFBQSxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1JLEVBQUUsSUFBR0g7Ozs7O2dCQVN0Qjs7Ozs7Ozs7Ozs7O0FBSVo7R0FyRk1wQjs7UUFJYVAsd0RBQWNBO1FBQ1FDLHdEQUFjQTs7O0tBTGpETTtBQXVGTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGFpbmVyL0hvbWUvYWN0aXZlLWRldmljZS50c3g/YzkxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZXZpY2UsIFBhcnRpYWxEZXZpY2VSZXNwb25zZSB9IGZyb20gJ0AvbW9kZWxzL0FwaSc7XHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gJ0AvcmVkdXgvaG9va3MnO1xyXG5pbXBvcnQgeyBnZXRBY3RpdmVEZXZpY2VUaHVuayB9IGZyb20gJ0AvcmVkdXgvdGh1bmtzL3RodW5rcyc7XHJcbmltcG9ydCB7IGdldFZhbHVlIH0gZnJvbSAnQC91dGlscy9jb21tb24vY29tbW9uJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBBY3RpdmVEZXZpY2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2RlZ3JlZSwgc2V0RGVncmVlXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XHJcbiAgY29uc3QgW2RldmljZUNvdW50LCBzZXREZXZpY2VDb3VudF0gPSB1c2VTdGF0ZTxEZXZpY2VbXT4oW10pO1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XHJcbiAgY29uc3QgZGV2aWNlczogUGFydGlhbERldmljZVJlc3BvbnNlID0gdXNlQXBwU2VsZWN0b3IoXHJcbiAgICAoc3RhdGUpID0+IHN0YXRlLkFwaS5nZXRBY3RpdmVEZXZpY2VzLmRhdGFcclxuICApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZ2V0QWN0aXZlRGV2aWNlVGh1bmsoKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBkZXZpY2VzICYmXHJcbiAgICAgIGRldmljZXMuZGV2aWNlcyAmJlxyXG4gICAgICBBcnJheS5pc0FycmF5KGRldmljZXMuZGV2aWNlcylcclxuICAgICkge1xyXG4gICAgICBzZXREZXZpY2VDb3VudChOdW1iZXIoZGV2aWNlcy5kZXZpY2VzLmxlbmd0aCkpO1xyXG5cclxuICAgICAgaWYgKGRldmljZXMuZGV2aWNlcy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgc2V0RGVncmVlKE51bWJlcigzNjkgLyAoZGV2aWNlcy5kZXZpY2VzLmxlbmd0aCAtIDIpKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbZGV2aWNlc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvcmJpdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldmljZS1jb3VudFwiPntkZXZpY2VDb3VudH08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci1jaXJjbGUtMVwiPlxyXG4gICAgICAgIHtkZXZpY2VzICYmXHJcbiAgICAgICAgICBkZXZpY2VzLmRldmljZXMgJiZcclxuICAgICAgICAgIEFycmF5LmlzQXJyYXkoZGV2aWNlcy5kZXZpY2VzKSAmJlxyXG4gICAgICAgICAgZGV2aWNlcy5kZXZpY2VzXHJcbiAgICAgICAgICAgIC5zbGljZSgwLCBkZXZpY2VzLmRldmljZXMubGVuZ3RoID49IDIgPyAyIDogMSlcclxuICAgICAgICAgICAgLm1hcCgoaXRlbTogRGV2aWNlLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoaWR4ID09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2dldFZhbHVlKGl0ZW0sICdpZCcpIHwgaWR4fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubmVyLWRldmljZS0xXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDM1cHgsMzVweCknLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0/LmlkIHwgaWR4fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubmVyLWRldmljZS0xXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAncm90YXRlKDE4MGRlZykgdHJhbnNsYXRlKDM1cHgsMzVweCknLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLWNpcmNsZS0yXCI+XHJcbiAgICAgICAge2RldmljZXMgJiZcclxuICAgICAgICAgIGRldmljZXMuZGV2aWNlcyAmJlxyXG4gICAgICAgICAgQXJyYXkuaXNBcnJheShkZXZpY2VzLmRldmljZXMpICYmXHJcbiAgICAgICAgICBkZXZpY2VzLmRldmljZXMubGVuZ3RoID4gMiAmJlxyXG4gICAgICAgICAgZGV2aWNlcy5kZXZpY2VzXHJcbiAgICAgICAgICAgIC5zbGljZSgyLCBkZXZpY2VzLmRldmljZXMubGVuZ3RoKVxyXG4gICAgICAgICAgICAubWFwKChpdGVtOiBEZXZpY2UsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGtleT17aXRlbT8uaWQgfCBpZHh9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubmVyLWRldmljZS0yXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGUoJHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlkeCAqIGRlZ3JlZVxyXG4gICAgICAgICAgICAgICAgICAgIH1kZWcpIHRyYW5zbGF0ZSg3MHB4LDcwcHgpYCxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWN0aXZlRGV2aWNlO1xyXG4iXSwibmFtZXMiOlsidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsImdldEFjdGl2ZURldmljZVRodW5rIiwiZ2V0VmFsdWUiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQWN0aXZlRGV2aWNlIiwiZGVncmVlIiwic2V0RGVncmVlIiwiZGV2aWNlQ291bnQiLCJzZXREZXZpY2VDb3VudCIsImRpc3BhdGNoIiwiZGV2aWNlcyIsInN0YXRlIiwiQXBpIiwiZ2V0QWN0aXZlRGV2aWNlcyIsImRhdGEiLCJBcnJheSIsImlzQXJyYXkiLCJOdW1iZXIiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJzbGljZSIsIm1hcCIsIml0ZW0iLCJpZHgiLCJzdHlsZSIsInRyYW5zZm9ybSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/container/Home/active-device.tsx\n"));

/***/ })

});