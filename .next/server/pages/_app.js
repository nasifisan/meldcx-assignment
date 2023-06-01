(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3361:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_auth_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1653);
/* harmony import */ var _Skeleton_HomePageLoading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9399);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7717);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_auth_helper_service__WEBPACK_IMPORTED_MODULE_2__]);
_services_auth_helper_service__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const AuthManager = ({ Component , children , router  })=>{
    const [can, setCan] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
    const user = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .C)((state)=>state.Auth.user);
    const { requiresAuth =false  } = Component.pageOptions || {};
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_services_auth_helper_service__WEBPACK_IMPORTED_MODULE_2__/* .createSession */ .ed)(dispatch);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (requiresAuth && user && user.Name !== null && user.Name == "") {
            router.push("/login");
        }
        if (user && user.Name !== null && user.Name !== "") {
            setCan(true);
        }
        if (!requiresAuth && user && user.Name !== null) {
            setCan(true);
        }
    }, [
        requiresAuth,
        user
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: can ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: children
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Skeleton_HomePageLoading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthManager);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const HomePageLoading = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full h-screen flex justify-center",
        children: "Loading..."
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePageLoading);


/***/ }),

/***/ 3676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZR": () => (/* binding */ headerLessRoutes),
/* harmony export */   "s2": () => (/* binding */ RoutePaths)
/* harmony export */ });
/* unused harmony exports RouteName, RouteTexts, RouteMaps */
var RouteName;
(function(RouteName) {
    RouteName["HOME"] = "HOME";
    RouteName["LOGIN"] = "LOGIN";
})(RouteName || (RouteName = {}));
const RoutePaths = {
    HOME: "/",
    LOGIN: "/login"
};
const RouteTexts = {
    HOME: "Home",
    LOGIN: "Login"
};
const RouteMaps = {
    ...Object.keys(RoutePaths).reduce((v, k)=>{
        v[RoutePaths[k]] = RouteTexts[k];
        return v;
    }, {})
};
const headerLessRoutes = [
    //RoutePaths.Home
    RoutePaths.LOGIN
];


/***/ }),

/***/ 415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Footer = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "min-h-200 bg-black text-white text-center",
        children: "footer"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 9528:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_RoutePaths__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3676);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7717);
/* harmony import */ var _services_auth_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1653);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_auth_helper_service__WEBPACK_IMPORTED_MODULE_7__]);
_services_auth_helper_service__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const Header = ()=>{
    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const user = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useAppSelector */ .C)((state)=>state.Auth.user);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (user && user.Name && user.Name !== "") {
            setIsLoggedIn(true);
        }
    }, [
        user
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full sticky z-999 top-0 bg-white-50",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
            className: "main-container flex justify-between items-center py-16",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "rounded-full shrink-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                className: "rounded-full",
                                src: "/meldcx-logo.png",
                                width: "150",
                                height: "150",
                                alt: "site-logo",
                                priority: true
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-row gap-32 items-center text-24 text-black",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: _constants_RoutePaths__WEBPACK_IMPORTED_MODULE_5__/* .RoutePaths.HOME */ .s2.HOME,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex space-x-6 group",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaHome, {})
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            role: "home",
                                            className: "flex flex-col justify-end text-16 leading-20 font-semibold group-hover:text-warn",
                                            children: "Home"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                }),
                isLoggedIn ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    role: "loggedIn",
                    className: "btn-btn",
                    onClick: ()=>(0,_services_auth_helper_service__WEBPACK_IMPORTED_MODULE_7__/* .gotToLogout */ .Zq)(),
                    children: "Logout"
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: _constants_RoutePaths__WEBPACK_IMPORTED_MODULE_5__/* .RoutePaths.LOGIN */ .s2.LOGIN,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        role: "singup-button",
                        className: "btn-btn",
                        children: "Signin/Signup"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5219:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9528);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(415);
/* harmony import */ var _constants_RoutePaths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3676);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Header__WEBPACK_IMPORTED_MODULE_2__]);
_Header__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const SiteLayout = ({ children  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            _constants_RoutePaths__WEBPACK_IMPORTED_MODULE_4__/* .headerLessRoutes.includes */ .ZR.includes(router.pathname) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                children: children
            }),
            _constants_RoutePaths__WEBPACK_IMPORTED_MODULE_4__/* .headerLessRoutes.includes */ .ZR.includes(router.pathname) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SiteLayout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_SiteLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5219);
/* harmony import */ var _components_AuthManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3361);
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6961);
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8985);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout_SiteLayout__WEBPACK_IMPORTED_MODULE_1__, _components_AuthManager__WEBPACK_IMPORTED_MODULE_2__, _redux_store__WEBPACK_IMPORTED_MODULE_4__]);
([_layout_SiteLayout__WEBPACK_IMPORTED_MODULE_1__, _components_AuthManager__WEBPACK_IMPORTED_MODULE_2__, _redux_store__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const getDefaultLayout = (children)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_SiteLayout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: children
    });
};
function App(props) {
    const { Component , pageProps  } = props;
    const renderLayout = ()=>{
        const children = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        });
        const { getLayout =getDefaultLayout  } = Component.pageOptions || {};
        return getLayout(children);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AuthManager__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            ...props,
            children: renderLayout()
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_redux_store__WEBPACK_IMPORTED_MODULE_4__/* .storeWrapper.withRedux */ .C.withRedux(App));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6080:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export initialState */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_reducerMapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6209);
/* harmony import */ var _thunks_thunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4863);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_thunks_thunks__WEBPACK_IMPORTED_MODULE_2__]);
_thunks_thunks__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const initialState = {
    getActiveDevices: {
        loading: false,
        data: null,
        error: ""
    }
};
const ApiSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: _constants_reducerMapper__WEBPACK_IMPORTED_MODULE_1__/* ["default"].API */ .Z.API,
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(_thunks_thunks__WEBPACK_IMPORTED_MODULE_2__/* .getActiveDeviceThunk.pending */ .q.pending, (state, action)=>{
            state.getActiveDevices.loading = true;
        }), builder.addCase(_thunks_thunks__WEBPACK_IMPORTED_MODULE_2__/* .getActiveDeviceThunk.fulfilled */ .q.fulfilled, (state, action)=>{
            state.getActiveDevices.loading = false;
            state.getActiveDevices.data = action.payload;
        }), builder.addCase(_thunks_thunks__WEBPACK_IMPORTED_MODULE_2__/* .getActiveDeviceThunk.rejected */ .q.rejected, (state, action)=>{
            state.getActiveDevices.loading = false;
            state.getActiveDevices.data = null;
            state.getActiveDevices.error = action.error.message;
        });
    }
});
const ApiReducer = ApiSlice.reducer;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiReducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8985:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ storeWrapper)
/* harmony export */ });
/* unused harmony export makeStore */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _slices_AuthSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4944);
/* harmony import */ var _constants_reducerMapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6209);
/* harmony import */ var _slices_ApiSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6080);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_slices_ApiSlice__WEBPACK_IMPORTED_MODULE_5__]);
_slices_ApiSlice__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const createReducer = ()=>{
    return (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
        [_constants_reducerMapper__WEBPACK_IMPORTED_MODULE_4__/* ["default"].AUTH */ .Z.AUTH]: _slices_AuthSlice__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP,
        [_constants_reducerMapper__WEBPACK_IMPORTED_MODULE_4__/* ["default"].API */ .Z.API]: _slices_ApiSlice__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
    });
};
const combinedReducer = createReducer();
const mainReducer = (state, action)=>{
    //it would be redundant if i use it in slices
    if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__.HYDRATE) {
        return {
            ...state
        };
    } else {
        return combinedReducer(state, action);
    }
};
const defaultInitState = {
    [_constants_reducerMapper__WEBPACK_IMPORTED_MODULE_4__/* ["default"].AUTH */ .Z.AUTH]: _slices_AuthSlice__WEBPACK_IMPORTED_MODULE_3__/* .initialState */ .E3
};
const makeStore = ()=>{
    return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
        reducer: mainReducer,
        preloadedState: defaultInitState,
        devTools: "production" !== "production",
        middleware: (getDefaultMiddleware)=>getDefaultMiddleware({}).concat([])
    });
};
const storeWrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__.createWrapper)(makeStore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4863:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ getActiveDeviceThunk)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_axiosClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3215);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_axiosClient__WEBPACK_IMPORTED_MODULE_1__]);
_services_axiosClient__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const getActiveDeviceThunk = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("get/device/active", async ()=>{
    const res = await _services_axiosClient__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.request */ .e.request({
        method: "get",
        url: `${"http://35.201.2.209:8000"}/devices`,
        headers: {
            "Content-Type": "application/json"
        }
    });
    return res.data;
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6961:
/***/ (() => {



/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 8982:
/***/ ((module) => {

"use strict";
module.exports = require("cookies-next");

/***/ }),

/***/ 5567:
/***/ ((module) => {

"use strict";
module.exports = require("jwt-decode");

/***/ }),

/***/ 5648:
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,675,664,597], () => (__webpack_exec__(9212)));
module.exports = __webpack_exports__;

})();