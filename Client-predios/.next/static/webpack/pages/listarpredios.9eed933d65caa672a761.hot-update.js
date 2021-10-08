"use strict";
self["webpackHotUpdate_N_E"]("pages/listarpredios",{

/***/ "./pages/listarpredios.js":
/*!********************************!*\
  !*** ./pages/listarpredios.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/index.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _Components_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/Container */ "./Components/Container.js");
/* harmony import */ var _Components_CardPredio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/CardPredio */ "./Components/CardPredio.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\judaz\\Documents\\VS CODE\\Next, Graphql y postgres\\Proyecto Predios\\Client-predios\\pages\\listarpredios.js",
    _templateObject,
    _templateObject2,
    _this = undefined,
    _s = $RefreshSig$();










var GET_PREDIOS = (0,apollo_boost__WEBPACK_IMPORTED_MODULE_8__.gql)(_templateObject || (_templateObject = (0,C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n    query getPredios {\n        allPredios {\n            nodes {\n              numeroPredial\n              nombre\n              municipio\n              departamento\n              terrenoId\n            }\n          }\n        }\n"])));
var DROP_PREDIO = (0,apollo_boost__WEBPACK_IMPORTED_MODULE_8__.gql)(_templateObject2 || (_templateObject2 = (0,C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n    mutation DeletePredioByNumeroPredial($numeroPredial:Int!){\n        deletePredioByNumeroPredial(input: {numeroPredial:$numeroPredial}) {\n            clientMutationId\n            deletedPredioId\n          }\n    }\n"])));

var ListPredios = function ListPredios() {
  _s();

  var navigate = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  var _useQuery = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__.useQuery)(GET_PREDIOS),
      data = _useQuery.data;

  console.log(data);

  var _useMutation = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__.useMutation)(DROP_PREDIO),
      _useMutation2 = (0,C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useMutation, 1),
      deletePredioByNumeroPredial = _useMutation2[0];

  var dropPredio = function dropPredio(numPre) {
    deletePredioByNumeroPredial({
      variables: {
        numeroPredial: numPre
      }
    });
  }; // if(loading)return<p>Loading Users...</p>
  // if(error) return <p>Error-- No se pudo cargar los predios</p>


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 9
  }, _this);
};

_s(ListPredios, "9YfMgxtwz1P3VmbaZxSdZX5u4ns=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter, _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__.useQuery, _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__.useMutation];
});

_c = ListPredios;
/* harmony default export */ __webpack_exports__["default"] = (ListPredios);

var _c;

$RefreshReg$(_c, "ListPredios");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGlzdGFycHJlZGlvcy45ZWVkOTMzZDY1Y2FhNjcyYTc2MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTWUsV0FBVyxHQUFFVCxpREFBRix5ZEFBakI7QUFjQSxJQUFNVSxXQUFXLEdBQUVWLGlEQUFGLDZjQUFqQjs7QUFTQSxJQUFNVyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBRXRCLE1BQU1DLFFBQVEsR0FBR2Ysc0RBQVMsRUFBMUI7O0FBQ0Esa0JBQWVDLDZEQUFRLENBQUNXLFdBQUQsQ0FBdkI7QUFBQSxNQUFPSSxJQUFQLGFBQU9BLElBQVA7O0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaOztBQUVBLHFCQUFxQ2QsZ0VBQVcsQ0FBQ1csV0FBRCxDQUFoRDtBQUFBO0FBQUEsTUFBT00sMkJBQVA7O0FBRUEsTUFBTUMsVUFBVSxHQUFDLFNBQVhBLFVBQVcsQ0FBQ0MsTUFBRCxFQUFVO0FBQ3ZCRixJQUFBQSwyQkFBMkIsQ0FBQztBQUFDRyxNQUFBQSxTQUFTLEVBQUM7QUFBQ0MsUUFBQUEsYUFBYSxFQUFDRjtBQUFmO0FBQVgsS0FBRCxDQUEzQjtBQUVILEdBSEQsQ0FSc0IsQ0FhdEI7QUFDQTs7O0FBQ0Esc0JBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBeUJILENBeENEOztHQUFNUDtVQUVlZCxvREFDRkMsMkRBR3NCQzs7O0tBTm5DWTtBQTBDTiwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9saXN0YXJwcmVkaW9zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQge3VzZVF1ZXJ5LHVzZU11dGF0aW9ufWZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCB7Z3FsfSBmcm9tICdhcG9sbG8tYm9vc3QnXHJcbmltcG9ydCB7IGZhVHJhc2hBbHQsZmFQZW4sZmFNYXBNYXJrZXIsZmFIb3RlbCwgZmFUaGVybW9tZXRlciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5cclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9Db21wb25lbnRzL0NvbnRhaW5lcic7XHJcbmltcG9ydCBDYXJkUHJlZGlvIGZyb20gJy4uL0NvbXBvbmVudHMvQ2FyZFByZWRpbyc7XHJcblxyXG5jb25zdCBHRVRfUFJFRElPUyA9Z3FsYFxyXG4gICAgcXVlcnkgZ2V0UHJlZGlvcyB7XHJcbiAgICAgICAgYWxsUHJlZGlvcyB7XHJcbiAgICAgICAgICAgIG5vZGVzIHtcclxuICAgICAgICAgICAgICBudW1lcm9QcmVkaWFsXHJcbiAgICAgICAgICAgICAgbm9tYnJlXHJcbiAgICAgICAgICAgICAgbXVuaWNpcGlvXHJcbiAgICAgICAgICAgICAgZGVwYXJ0YW1lbnRvXHJcbiAgICAgICAgICAgICAgdGVycmVub0lkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBEUk9QX1BSRURJTyA9Z3FsYFxyXG4gICAgbXV0YXRpb24gRGVsZXRlUHJlZGlvQnlOdW1lcm9QcmVkaWFsKCRudW1lcm9QcmVkaWFsOkludCEpe1xyXG4gICAgICAgIGRlbGV0ZVByZWRpb0J5TnVtZXJvUHJlZGlhbChpbnB1dDoge251bWVyb1ByZWRpYWw6JG51bWVyb1ByZWRpYWx9KSB7XHJcbiAgICAgICAgICAgIGNsaWVudE11dGF0aW9uSWRcclxuICAgICAgICAgICAgZGVsZXRlZFByZWRpb0lkXHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBMaXN0UHJlZGlvcyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3Qge2RhdGF9ID0gdXNlUXVlcnkoR0VUX1BSRURJT1MpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgXHJcbiAgICBjb25zdCBbZGVsZXRlUHJlZGlvQnlOdW1lcm9QcmVkaWFsXT0gdXNlTXV0YXRpb24oRFJPUF9QUkVESU8pXHJcblxyXG4gICAgY29uc3QgZHJvcFByZWRpbz0obnVtUHJlKT0+e1xyXG4gICAgICAgIGRlbGV0ZVByZWRpb0J5TnVtZXJvUHJlZGlhbCh7dmFyaWFibGVzOntudW1lcm9QcmVkaWFsOm51bVByZX19KVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vIGlmKGxvYWRpbmcpcmV0dXJuPHA+TG9hZGluZyBVc2Vycy4uLjwvcD5cclxuICAgIC8vIGlmKGVycm9yKSByZXR1cm4gPHA+RXJyb3ItLSBObyBzZSBwdWRvIGNhcmdhciBsb3MgcHJlZGlvczwvcD5cclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHsvKiA8Q29udGFpbmVyLz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInAtNCB0ZXh0LTN4bCBmb250LWxpZ2h0XCI+UHJlZGlvczwvaDE+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGEuYWxsUHJlZGlvcy5ub2Rlcy5tYXAoKHtudW1lcm9QcmVkaWFsLG5vbWJyZSxtdW5pY2lwaW8sZGVwYXJ0YW1lbnRvLHRlcnJlbm9JZH0pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtudW1lcm9QcmVkaWFsfSBjbGFzc05hbWU9XCJoLWZ1bGwgcC01IG0tMiBiZy13aGl0ZSByb3VuZGVkIHNoYWRvdy1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyIG0tNiBoLTIvNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYi0yIHRleHQteGwgZm9udC1ib2xkXCI+TnVtZXJvIFByZWRpYWw6eycgJ317bnVtZXJvUHJlZGlhbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrXCIgPk5vbWJyZSBwcmVkaW86eycgJ317bm9tYnJlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2tcIiA+RGVwYXJ0YW1lbnRvOnsnICd9e2RlcGFydGFtZW50b308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrXCIgPk11bmljaXBpbzp7JyAnfXttdW5pY2lwaW99PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9ja1wiID5UZXJyZW5vOnsnICd9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVycmVub0lkID8gKDxhPlRlcnJlbm8gcHJvcGlvPC9hPik6KDxhPkVqaWRvPC9hPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtLTUgdGV4dC0yeGxcIiBvbkNsaWNrPXsoKT0+ZHJvcFByZWRpbyhudW1lcm9QcmVkaWFsKX0+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRyYXNoQWx0fS8+RWxpbWluYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtLTUgdGV4dC0yeGxcIiBvbkNsaWNrPXsoKT0+bmF2aWdhdGUucHVzaChcIi91cGRhdGVwcmVkaW9cIil9PjxGb250QXdlc29tZUljb24gaWNvbj17ZmFQZW59Lz5BY3R1YWxpemFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibS01IHRleHQtMnhsXCI+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYU1hcE1hcmtlcn0vPkFncmVnYXIgVGVycmVubzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm0tNSB0ZXh0LTJ4bFwiPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFIb3RlbH0vPkFncmVnYXIgQ29uc3RydWNpw7NuPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gKi99XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBMaXN0UHJlZGlvczsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsInVzZVF1ZXJ5IiwidXNlTXV0YXRpb24iLCJncWwiLCJmYVRyYXNoQWx0IiwiZmFQZW4iLCJmYU1hcE1hcmtlciIsImZhSG90ZWwiLCJmYVRoZXJtb21ldGVyIiwiRm9udEF3ZXNvbWVJY29uIiwiQ29udGFpbmVyIiwiQ2FyZFByZWRpbyIsIkdFVF9QUkVESU9TIiwiRFJPUF9QUkVESU8iLCJMaXN0UHJlZGlvcyIsIm5hdmlnYXRlIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkZWxldGVQcmVkaW9CeU51bWVyb1ByZWRpYWwiLCJkcm9wUHJlZGlvIiwibnVtUHJlIiwidmFyaWFibGVzIiwibnVtZXJvUHJlZGlhbCJdLCJzb3VyY2VSb290IjoiIn0=