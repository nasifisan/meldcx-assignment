"use strict";
exports.id = 597;
exports.ids = [597];
exports.modules = {

/***/ 6209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ReducerMappers;
(function(ReducerMappers) {
    ReducerMappers["AUTH"] = "Auth";
    ReducerMappers["API"] = "Api";
})(ReducerMappers || (ReducerMappers = {}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReducerMappers);


/***/ }),

/***/ 7717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useAppSelector),
/* harmony export */   "T": () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ }),

/***/ 4944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E3": () => (/* binding */ initialState),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "av": () => (/* binding */ setUser)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_reducerMapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6209);


const initialState = {
    user: {
        Name: null
    }
};
const AuthSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: _constants_reducerMapper__WEBPACK_IMPORTED_MODULE_1__/* ["default"].AUTH */ .Z.AUTH,
    initialState,
    reducers: {
        setUser: (state, action)=>{
            const { payload  } = action;
            state.user.Name = payload?.Name;
        }
    }
});
const AuthReducer = AuthSlice.reducer;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthReducer);
const { setUser  } = AuthSlice.actions;


/***/ }),

/***/ 1653:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zq": () => (/* binding */ gotToLogout),
/* harmony export */   "ed": () => (/* binding */ createSession),
/* harmony export */   "hh": () => (/* binding */ goToLogin)
/* harmony export */ });
/* unused harmony exports ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, setAuthCredentials */
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(930);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1809);
/* harmony import */ var _redux_slices_AuthSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4944);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth_service__WEBPACK_IMPORTED_MODULE_2__]);
_auth_service__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const ACCESS_TOKEN_KEY = "ACCESS_TOKEN";
const REFRESH_TOKEN_KEY = "REFRESH_TOKEN";
const EXPIRE_TIME_KEY = "EXPIRES_IN";
const setAuthCredentials = (accessToken, dispatch)=>{
    const tokenInfo = new _utils_auth__WEBPACK_IMPORTED_MODULE_1__/* .TokenInfo */ .s(accessToken);
    const details = tokenInfo.getUserDetails();
    dispatch((0,_redux_slices_AuthSlice__WEBPACK_IMPORTED_MODULE_3__/* .setUser */ .av)(details));
    if (!(0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)(ACCESS_TOKEN_KEY) && accessToken && accessToken !== "") {
        (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.setCookie)(ACCESS_TOKEN_KEY, accessToken);
    }
};
const getAuthCredentials = (accessToken)=>{
    const tokenInfo = new TokenInfo(accessToken);
    const info = tokenInfo.getUserDetails();
    return info;
};
const createSession = (dispatch)=>{
    const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)(ACCESS_TOKEN_KEY);
    setAuthCredentials(token, dispatch);
};
const goToLogin = async (data, dispatch)=>{
    try {
        const authService = new _auth_service__WEBPACK_IMPORTED_MODULE_2__/* .AuthService */ .e();
        const response = await authService.getToLogin(data);
        if (response?.data) {
            const accessToken = response?.data;
            setAuthCredentials(accessToken, dispatch);
        }
        return true;
    } catch  {
        return false;
    }
};
const gotToLogout = ()=>{
    (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.deleteCookie)(ACCESS_TOKEN_KEY);
    (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.deleteCookie)(REFRESH_TOKEN_KEY);
    (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.deleteCookie)(EXPIRE_TIME_KEY);
    // getAnonymousSession(dispatch);
    window.location.href = "";
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1809:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _axiosClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3215);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axiosClient__WEBPACK_IMPORTED_MODULE_0__]);
_axiosClient__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

class AuthService {
    constructor(){
        this.httpClient = _axiosClient__WEBPACK_IMPORTED_MODULE_0__/* .HttpClient */ .e;
    }
    async getToLogin(data) {
        return await this.httpClient.request({
            method: "post",
            url: "http://35.201.2.209:8000/login",
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                email: data.email,
                password: data?.password
            }
        });
    }
    async renewAccessToken(refreshToken) {
        const bodyPrams = new URLSearchParams();
        // bodyPrams.append('email', data.email);
        // bodyPrams.append('password', data.password);
        bodyPrams.append("grant_type", "refresh");
        return await this.httpClient.request({
            method: "post",
            url: "/api/user/token",
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                grant_type: "refresh",
                refresh_token: refreshToken
            }
        });
    }
    async goToLogout() {}
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3215:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ HttpClient)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _auth_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1653);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _auth_helper_service__WEBPACK_IMPORTED_MODULE_1__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, _auth_helper_service__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const baseOptions = {
    timeout: 0,
    withCredentials: false
};
const HttpClient = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create(baseOptions);
// HttpClient.interceptors.request.use(
//   (config) => {
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
HttpClient.interceptors.response.use((res)=>res, async (error)=>{
    if (!error.response) {
        alert("NETWORK ERROR");
    } else {
        const code = error.response.status;
        const response = error.response.data;
        const originalRequest = error.config;
        if (code === 401 && !originalRequest._retry) {
            try {
            // await authResolver.getToken(makeStore().dispatch);
            // originalRequest._retry = true;
            // return HttpClient(error.config);
            } catch (err) {
                (0,_auth_helper_service__WEBPACK_IMPORTED_MODULE_1__/* .gotToLogout */ .Zq)();
            }
        }
        if (code === 400 && !originalRequest._retry) {
            (0,_auth_helper_service__WEBPACK_IMPORTED_MODULE_1__/* .gotToLogout */ .Zq)();
        }
        return Promise.reject(error);
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ TokenInfo)
/* harmony export */ });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5567);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_0__);

class TokenInfo {
    constructor(token){
        this.getUserDetails = ()=>{
            const details = {
                Name: this.Name
            };
            return details;
        };
        if (token && token !== "") {
            const decodedToken = jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(token);
            this.Name = decodedToken?.sender;
        } else {
            this.Name = "";
        }
    }
}


/***/ })

};
;