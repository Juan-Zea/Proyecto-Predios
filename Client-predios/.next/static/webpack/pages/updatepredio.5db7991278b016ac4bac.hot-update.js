"use strict";
self["webpackHotUpdate_N_E"]("pages/updatepredio",{

/***/ "./pages/updatepredio.js":
/*!*******************************!*\
  !*** ./pages/updatepredio.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/index.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _Components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Container */ "./Components/Container.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\judaz\\Documents\\VS CODE\\Next, Graphql y postgres\\Proyecto Predios\\Client-predios\\pages\\updatepredio.js",
    _templateObject,
    _this = undefined,
    _s = $RefreshSig$();







var UPDATE_PREDIOS = (0,apollo_boost__WEBPACK_IMPORTED_MODULE_6__.gql)(_templateObject || (_templateObject = (0,C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n    mutation CreatePredio($numeroPredial:Int!,$nombre:String!,$departamento:String!,$municipio:String!,$terrenoId:Int){\n        createPredio(input: {predio: {numeroPredial: $numeroPredial, nombre: $nombre, departamento:$departamento, municipio: $municipio, terrenoId: $terrenoId}}\n      ) {\n        clientMutationId\n      }\n    }\n    \n"])));

var UpdatePredio = function UpdatePredio() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      numeroPredial = _useState[0],
      setNumero = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      nombre = _useState2[0],
      setNombre = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      departamento = _useState3[0],
      setDepartamento = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      municipio = _useState4[0],
      setMunicipio = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      terrenoId = _useState5[0],
      setTerrenoId = _useState5[1];

  var _useMutation = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__.useMutation)(CREATE_PREDIOS),
      _useMutation2 = (0,C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useMutation, 1),
      createPredio = _useMutation2[0];

  var navigate = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Components_Container__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
      className: "p-4 text-3xl font-light",
      children: "Modificar Predio"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, _this);
};

_s(UpdatePredio, "ISrdaGd52QFRiBRIPtPKAat07NU=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__.useMutation, next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = UpdatePredio;
/* harmony default export */ __webpack_exports__["default"] = (UpdatePredio);

var _c;

$RefreshReg$(_c, "UpdatePredio");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXBkYXRlcHJlZGlvLjVkYjc5OTEyNzhiMDE2YWM0YmFjLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNTyxjQUFjLEdBQUVGLGlEQUFGLG9rQkFBcEI7O0FBVUEsSUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUV2QixrQkFBa0NQLCtDQUFRLEVBQTFDO0FBQUEsTUFBT1EsYUFBUDtBQUFBLE1BQXFCQyxTQUFyQjs7QUFDQSxtQkFBMkJULCtDQUFRLENBQUMsRUFBRCxDQUFuQztBQUFBLE1BQU9VLE1BQVA7QUFBQSxNQUFjQyxTQUFkOztBQUNBLG1CQUF1Q1gsK0NBQVEsQ0FBQyxFQUFELENBQS9DO0FBQUEsTUFBT1ksWUFBUDtBQUFBLE1BQW9CQyxlQUFwQjs7QUFDQSxtQkFBaUNiLCtDQUFRLENBQUMsRUFBRCxDQUF6QztBQUFBLE1BQU9jLFNBQVA7QUFBQSxNQUFpQkMsWUFBakI7O0FBQ0EsbUJBQWlDZiwrQ0FBUSxFQUF6QztBQUFBLE1BQU9nQixTQUFQO0FBQUEsTUFBaUJDLFlBQWpCOztBQUNBLHFCQUFzQmQsZ0VBQVcsQ0FBQ2UsY0FBRCxDQUFqQztBQUFBO0FBQUEsTUFBT0MsWUFBUDs7QUFDQSxNQUFNQyxRQUFRLEdBQUduQixzREFBUyxFQUExQjtBQUVBLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBSSxlQUFTLEVBQUMseUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQU1ILENBaEJEOztHQUFNTTtVQU9vQkosOERBQ0xGOzs7S0FSZk07QUFrQk4sK0RBQWVBLFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXBkYXRlcHJlZGlvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQge3VzZVF1ZXJ5LHVzZU11dGF0aW9ufWZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCB7Z3FsfSBmcm9tICdhcG9sbG8tYm9vc3QnXHJcblxyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGFpbmVyJztcclxuXHJcbmNvbnN0IFVQREFURV9QUkVESU9TID1ncWxgXHJcbiAgICBtdXRhdGlvbiBDcmVhdGVQcmVkaW8oJG51bWVyb1ByZWRpYWw6SW50ISwkbm9tYnJlOlN0cmluZyEsJGRlcGFydGFtZW50bzpTdHJpbmchLCRtdW5pY2lwaW86U3RyaW5nISwkdGVycmVub0lkOkludCl7XHJcbiAgICAgICAgY3JlYXRlUHJlZGlvKGlucHV0OiB7cHJlZGlvOiB7bnVtZXJvUHJlZGlhbDogJG51bWVyb1ByZWRpYWwsIG5vbWJyZTogJG5vbWJyZSwgZGVwYXJ0YW1lbnRvOiRkZXBhcnRhbWVudG8sIG11bmljaXBpbzogJG11bmljaXBpbywgdGVycmVub0lkOiAkdGVycmVub0lkfX1cclxuICAgICAgKSB7XHJcbiAgICAgICAgY2xpZW50TXV0YXRpb25JZFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuYDtcclxuXHJcbmNvbnN0IFVwZGF0ZVByZWRpbyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbbnVtZXJvUHJlZGlhbCxzZXROdW1lcm9dID0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3QgW25vbWJyZSxzZXROb21icmVdID0gdXNlU3RhdGUoJycpIFxyXG4gICAgY29uc3QgW2RlcGFydGFtZW50byxzZXREZXBhcnRhbWVudG9dID0gdXNlU3RhdGUoJycpIFxyXG4gICAgY29uc3QgW211bmljaXBpbyxzZXRNdW5pY2lwaW9dID0gdXNlU3RhdGUoJycpIFxyXG4gICAgY29uc3QgW3RlcnJlbm9JZCxzZXRUZXJyZW5vSWRdID0gdXNlU3RhdGUoKSBcclxuICAgIGNvbnN0IFtjcmVhdGVQcmVkaW9dPSB1c2VNdXRhdGlvbihDUkVBVEVfUFJFRElPUylcclxuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgcmV0dXJuICggIFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDb250YWluZXIvPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicC00IHRleHQtM3hsIGZvbnQtbGlnaHRcIj5Nb2RpZmljYXIgUHJlZGlvPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBVcGRhdGVQcmVkaW87Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJ1c2VRdWVyeSIsInVzZU11dGF0aW9uIiwiZ3FsIiwiQ29udGFpbmVyIiwiVVBEQVRFX1BSRURJT1MiLCJVcGRhdGVQcmVkaW8iLCJudW1lcm9QcmVkaWFsIiwic2V0TnVtZXJvIiwibm9tYnJlIiwic2V0Tm9tYnJlIiwiZGVwYXJ0YW1lbnRvIiwic2V0RGVwYXJ0YW1lbnRvIiwibXVuaWNpcGlvIiwic2V0TXVuaWNpcGlvIiwidGVycmVub0lkIiwic2V0VGVycmVub0lkIiwiQ1JFQVRFX1BSRURJT1MiLCJjcmVhdGVQcmVkaW8iLCJuYXZpZ2F0ZSJdLCJzb3VyY2VSb290IjoiIn0=