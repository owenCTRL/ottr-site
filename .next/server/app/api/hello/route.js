(() => {
var exports = {};
exports.id = 234;
exports.ids = [234];
exports.modules = {

/***/ 7783:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 9170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handlers": () => (/* reexport module object */ _Users_owentillger_Documents_GitHub_ottr_site_app_api_hello_route_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "headerHooks": () => (/* reexport module object */ next_dist_client_components_headers__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   "requestAsyncStorage": () => (/* reexport safe */ next_dist_client_components_request_async_storage__WEBPACK_IMPORTED_MODULE_6__.requestAsyncStorage),
/* harmony export */   "resolvedPagePath": () => (/* binding */ resolvedPagePath),
/* harmony export */   "serverHooks": () => (/* reexport module object */ next_dist_client_components_hooks_server_context__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   "staticGenerationAsyncStorage": () => (/* reexport safe */ next_dist_client_components_static_generation_async_storage__WEBPACK_IMPORTED_MODULE_2__.staticGenerationAsyncStorage),
/* harmony export */   "staticGenerationBailout": () => (/* reexport safe */ next_dist_client_components_static_generation_bailout__WEBPACK_IMPORTED_MODULE_4__.staticGenerationBailout)
/* harmony export */ });
/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7952);
/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_owentillger_Documents_GitHub_ottr_site_app_api_hello_route_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(169);
/* harmony import */ var _Users_owentillger_Documents_GitHub_ottr_site_app_api_hello_route_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_owentillger_Documents_GitHub_ottr_site_app_api_hello_route_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_client_components_static_generation_async_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5959);
/* harmony import */ var next_dist_client_components_static_generation_async_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_static_generation_async_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_client_components_hooks_server_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(665);
/* harmony import */ var next_dist_client_components_hooks_server_context__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_hooks_server_context__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dist_client_components_static_generation_bailout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3373);
/* harmony import */ var next_dist_client_components_static_generation_bailout__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_static_generation_bailout__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dist_client_components_headers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5109);
/* harmony import */ var next_dist_client_components_headers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_headers__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_client_components_request_async_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3444);
/* harmony import */ var next_dist_client_components_request_async_storage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_request_async_storage__WEBPACK_IMPORTED_MODULE_6__);

    

    
    const resolvedPagePath = "/Users/owentillger/Documents/GitHub/ottr-site/app/api/hello/route.js"

    
  
    
    
    
    
    
  
    
  

/***/ }),

/***/ 169:
/***/ (() => {



/***/ }),

/***/ 5109:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.headers = headers;
exports.previewData = previewData;
exports.cookies = cookies;
var _cookies = __webpack_require__(3752);
var _requestAsyncStorage = __webpack_require__(3444);
var _staticGenerationBailout = __webpack_require__(3373);
function headers() {
    if ((0, _staticGenerationBailout).staticGenerationBailout("headers")) {
        return new Headers({});
    }
    const requestStore = _requestAsyncStorage.requestAsyncStorage.getStore();
    if (!requestStore) {
        throw new Error(`Invariant: Method expects to have requestAsyncStorage, none available`);
    }
    return requestStore.headers;
}
function previewData() {
    const requestStore = _requestAsyncStorage.requestAsyncStorage.getStore();
    if (!requestStore) {
        throw new Error(`Invariant: Method expects to have requestAsyncStorage, none available`);
    }
    return requestStore.previewData;
}
function cookies() {
    if ((0, _staticGenerationBailout).staticGenerationBailout("cookies")) {
        return new _cookies.RequestCookies(new Headers({}));
    }
    const requestStore = _requestAsyncStorage.requestAsyncStorage.getStore();
    if (!requestStore) {
        throw new Error(`Invariant: Method expects to have requestAsyncStorage, none available`);
    }
    return requestStore.cookies;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=headers.js.map


/***/ }),

/***/ 3373:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.staticGenerationBailout = staticGenerationBailout;
var _hooksServerContext = __webpack_require__(665);
var _staticGenerationAsyncStorage = __webpack_require__(5959);
function staticGenerationBailout(reason) {
    const staticGenerationStore = _staticGenerationAsyncStorage.staticGenerationAsyncStorage.getStore();
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.forceStatic) {
        return true;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.dynamicShouldError) {
        throw new Error(`Page with \`dynamic = "error"\` couldn't be rendered statically because it used \`${reason}\``);
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.isStaticGeneration) {
        staticGenerationStore.revalidate = 0;
        const err = new _hooksServerContext.DynamicServerError(reason);
        staticGenerationStore.dynamicUsageDescription = reason;
        staticGenerationStore.dynamicUsageStack = err.stack;
        throw err;
    }
    return false;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-bailout.js.map


/***/ }),

/***/ 7952:
/***/ (() => {

"use strict";

/**
 * Polyfills the `Headers.getAll(name)` method so it'll work in the edge
 * runtime.
 */ if (!("getAll" in Headers.prototype)) {
    // @ts-expect-error - this is polyfilling this method so it doesn't exist yet
    Headers.prototype.getAll = function(name) {
        name = name.toLowerCase();
        if (name !== "set-cookie") throw new Error("Headers.getAll is only supported for Set-Cookie header");
        const headers = [
            ...this.entries()
        ].filter(([key])=>key === name);
        return headers.map(([, value])=>value);
    };
} //# sourceMappingURL=node-polyfill-headers.js.map


/***/ }),

/***/ 3752:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var _cookies = _interopRequireWildcard(__webpack_require__(7783));
Object.keys(_cookies).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _cookies[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _cookies[key];
        }
    });
});
function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function() {
        return cache;
    };
    return cache;
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
} //# sourceMappingURL=cookies.js.map


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [443], () => (__webpack_exec__(9170)));
module.exports = __webpack_exports__;

})();