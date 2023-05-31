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

/***/ "./src/components/AuthManager.tsx":
/*!****************************************!*\
  !*** ./src/components/AuthManager.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_auth_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/auth-helper.service */ \"./src/services/auth-helper.service.ts\");\n/* harmony import */ var _Skeleton_HomePageLoading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Skeleton/HomePageLoading */ \"./src/components/Skeleton/HomePageLoading.tsx\");\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/hooks */ \"./src/redux/hooks.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst AuthManager = (param)=>{\n    let { Component , children , router  } = param;\n    _s();\n    const [can, setCan] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();\n    const user = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.Auth.user);\n    const { requiresAuth =false  } = Component.pageOptions || {};\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,_services_auth_helper_service__WEBPACK_IMPORTED_MODULE_2__.createSession)(dispatch);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (requiresAuth && user && user.Name !== null && user.Name == \"\") {\n            router.push(\"/login\");\n        }\n        if (user && user.Name !== null && user.Name !== \"\") {\n            setCan(true);\n        }\n        if (!requiresAuth && user && user.Name !== null) {\n            setCan(true);\n        }\n    }, [\n        requiresAuth,\n        user\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: can ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: children\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\Meldcx-remote\\\\meldcx-assignment\\\\src\\\\components\\\\AuthManager.tsx\",\n            lineNumber: 48,\n            columnNumber: 19\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Skeleton_HomePageLoading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\Meldcx-remote\\\\meldcx-assignment\\\\src\\\\components\\\\AuthManager.tsx\",\n            lineNumber: 48,\n            columnNumber: 43\n        }, undefined)\n    }, void 0, false);\n};\n_s(AuthManager, \"GiYQ/IBeH8Omutn+0pu7c04tVgc=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector\n    ];\n});\n_c = AuthManager;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthManager);\nvar _c;\n$RefreshReg$(_c, \"AuthManager\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BdXRoTWFuYWdlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUMrRDtBQUt2QjtBQUNpQjtBQUNNO0FBRS9ELE1BQU1NLGNBQWMsU0FJZTtRQUpkLEVBQ25CQyxVQUFTLEVBQ1RDLFNBQVEsRUFDUkMsT0FBTSxFQUNzQjs7SUFDNUIsTUFBTSxDQUFDQyxLQUFLQyxPQUFPLEdBQUdWLCtDQUFRQSxDQUFDLEtBQUs7SUFDcEMsTUFBTVcsV0FBV1IsNERBQWNBO0lBQy9CLE1BQU1TLE9BQU9SLDREQUFjQSxDQUFDLENBQUNTLFFBQVVBLE1BQU1DLElBQUksQ0FBQ0YsSUFBSTtJQUN0RCxNQUFNLEVBQUVHLGNBQWUsS0FBSyxHQUFFLEdBQUdULFVBQVVVLFdBQVcsSUFBSSxDQUFDO0lBRTNEakIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkRSw0RUFBYUEsQ0FBQ1U7SUFDaEIsR0FBRyxFQUFFO0lBRUxaLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUNFZ0IsZ0JBQ0FILFFBQ0FBLEtBQUtLLElBQUksS0FBSyxJQUFJLElBQ2xCTCxLQUFLSyxJQUFJLElBQUksSUFDYjtZQUNBVCxPQUFPVSxJQUFJLENBQUM7UUFDZCxDQUFDO1FBRUQsSUFDRU4sUUFDQUEsS0FBS0ssSUFBSSxLQUFLLElBQUksSUFDbEJMLEtBQUtLLElBQUksS0FBSyxJQUNkO1lBQ0FQLE9BQU8sSUFBSTtRQUNiLENBQUM7UUFFRCxJQUFJLENBQUNLLGdCQUFnQkgsUUFBUUEsS0FBS0ssSUFBSSxLQUFLLElBQUksRUFBRTtZQUMvQ1AsT0FBTyxJQUFJO1FBQ2IsQ0FBQztJQUNILEdBQUc7UUFBQ0s7UUFBY0g7S0FBSztJQUV2QixxQkFBTztrQkFBR0gsb0JBQU0sOERBQUNVO3NCQUFLWjs7Ozs7c0NBQWtCLDhEQUFDTCxpRUFBZUE7Ozs7cUJBQUc7O0FBQzdEO0dBdENNRzs7UUFNYUYsd0RBQWNBO1FBQ2xCQyx3REFBY0E7OztLQVB2QkM7QUF3Q04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQXV0aE1hbmFnZXIudHN4PzU0OTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCB7IFByb3BzV2l0aENoaWxkcmVuLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlU2Vzc2lvbixcclxufSBmcm9tICdAL3NlcnZpY2VzL2F1dGgtaGVscGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgSG9tZVBhZ2VMb2FkaW5nIGZyb20gJy4vU2tlbGV0b24vSG9tZVBhZ2VMb2FkaW5nJztcclxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnQC9yZWR1eC9ob29rcyc7XHJcblxyXG5jb25zdCBBdXRoTWFuYWdlciA9ICh7XHJcbiAgQ29tcG9uZW50LFxyXG4gIGNoaWxkcmVuLFxyXG4gIHJvdXRlcixcclxufTogUHJvcHNXaXRoQ2hpbGRyZW48QXBwUHJvcHM+KSA9PiB7XHJcbiAgY29uc3QgW2Nhbiwgc2V0Q2FuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XHJcbiAgY29uc3QgdXNlciA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuQXV0aC51c2VyKTtcclxuICBjb25zdCB7IHJlcXVpcmVzQXV0aCA9IGZhbHNlIH0gPSBDb21wb25lbnQucGFnZU9wdGlvbnMgfHwge307XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjcmVhdGVTZXNzaW9uKGRpc3BhdGNoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHJlcXVpcmVzQXV0aCAmJlxyXG4gICAgICB1c2VyICYmXHJcbiAgICAgIHVzZXIuTmFtZSAhPT0gbnVsbCAmJlxyXG4gICAgICB1c2VyLk5hbWUgPT0gJydcclxuICAgICkge1xyXG4gICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICB1c2VyICYmXHJcbiAgICAgIHVzZXIuTmFtZSAhPT0gbnVsbCAmJlxyXG4gICAgICB1c2VyLk5hbWUgIT09ICcnXHJcbiAgICApIHtcclxuICAgICAgc2V0Q2FuKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghcmVxdWlyZXNBdXRoICYmIHVzZXIgJiYgdXNlci5OYW1lICE9PSBudWxsKSB7XHJcbiAgICAgIHNldENhbih0cnVlKTtcclxuICAgIH1cclxuICB9LCBbcmVxdWlyZXNBdXRoLCB1c2VyXSk7XHJcblxyXG4gIHJldHVybiA8PntjYW4gPyA8ZGl2PntjaGlsZHJlbn08L2Rpdj4gOiA8SG9tZVBhZ2VMb2FkaW5nIC8+fTwvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhNYW5hZ2VyO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjcmVhdGVTZXNzaW9uIiwiSG9tZVBhZ2VMb2FkaW5nIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsIkF1dGhNYW5hZ2VyIiwiQ29tcG9uZW50IiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJjYW4iLCJzZXRDYW4iLCJkaXNwYXRjaCIsInVzZXIiLCJzdGF0ZSIsIkF1dGgiLCJyZXF1aXJlc0F1dGgiLCJwYWdlT3B0aW9ucyIsIk5hbWUiLCJwdXNoIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/AuthManager.tsx\n"));

/***/ })

});