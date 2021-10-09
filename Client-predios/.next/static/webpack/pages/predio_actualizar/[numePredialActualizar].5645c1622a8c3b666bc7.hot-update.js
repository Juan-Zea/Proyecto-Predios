"use strict";
self["webpackHotUpdate_N_E"]("pages/predio_actualizar/[numePredialActualizar]",{

/***/ "./pages/predio_actualizar/[numePredialActualizar].js":
/*!************************************************************!*\
  !*** ./pages/predio_actualizar/[numePredialActualizar].js ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ numeroPredialActualizar; }
/* harmony export */ });
/* harmony import */ var C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/Container */ "./Components/Container.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/index.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\judaz\\Documents\\VS CODE\\Next, Graphql y postgres\\Proyecto Predios\\Client-predios\\pages\\predio_actualizar\\[numePredialActualizar].js",
    _templateObject,
    _s = $RefreshSig$();







var UPDATE_PREDIOS = (0,apollo_boost__WEBPACK_IMPORTED_MODULE_6__.gql)(_templateObject || (_templateObject = (0,C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n    mutation UpdatePredioByNumeroPredial($numeroPredial:Int!,$nombre:String!,$departamento:String!,$municipio:String!){\n        updatePredioByNumeroPredial(\n            input: {predioPatch: {departamento: $departamento, municipio: $municipio, nombre: $nombre}, numeroPredial:$numeroPredial}\n          ) {\n            clientMutationId\n          }\n    }  \n"])));
function numeroPredialActualizar() {
  _s();

  var route = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      numeroPredial = _useState[0],
      setNumero = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      nombre = _useState2[0],
      setNombre = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      departamento = _useState3[0],
      setDepartamento = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      municipio = _useState4[0],
      setMunicipio = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(),
      terrenoId = _useState5[0],
      setTerrenoId = _useState5[1];

  var _useMutation = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__.useMutation)(UPDATE_PREDIOS),
      _useMutation2 = (0,C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useMutation, 1),
      updatePredio = _useMutation2[0];

  var navigate = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  setNumero(route.query.numePredialActualizar);
  console.log(route);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Components_Container__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
        className: "p-4 text-3xl font-light",
        children: "Modificar Predio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "flex justify-center mt-10",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "w-full max-w-3xl p-3 bg-white",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("form", {
            onSubmit: function onSubmit(e) {
              e.preventDefault();
              updatePredio({
                variables: {
                  numeroPredial: numeroPredial,
                  nombre: nombre,
                  departamento: departamento,
                  municipio: municipio,
                  terrenoId: terrenoId
                }
              });
              navigate.push('/listarpredios');
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: "mb-4",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
                className: "block text-sm font-bold text-gray-700 md-2",
                htmlFor: "nombre",
                children: "Nombre"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 30
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
                className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
                id: "nombre",
                onChange: function onChange(e) {
                  setNombre(e.target.value);
                },
                value: nombre
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 30
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 26
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: "mb-4",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
                className: "block text-sm font-bold text-gray-700 md-2",
                htmlFor: "nombre",
                children: "Departamento"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 30
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
                className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
                id: "departamento",
                onChange: function onChange(e) {
                  setDepartamento(e.target.value);
                },
                value: departamento
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 30
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 26
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: "mb-4",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
                className: "block text-sm font-bold text-gray-700 md-2",
                htmlFor: "nombre",
                children: "Municipio"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 30
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
                className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
                id: "municipio",
                onChange: function onChange(e) {
                  setMunicipio(e.target.value);
                },
                value: municipio
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 30
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 26
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
              type: "submit",
              className: "w-full p-2 mt-5 font-bold text-white uppercase bg-green-500 rounded hover:bg-gray-900",
              value: "Agregar Cambios"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 26
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 22
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }, this);
}

_s(numeroPredialActualizar, "mCuoapsq6JhFLt/OSnwG9yxCdwY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter, _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__.useMutation, next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJlZGlvX2FjdHVhbGl6YXIvW251bWVQcmVkaWFsQWN0dWFsaXphcl0uNTY0NWMxNjIyYThjM2I2NjZiYzcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTVEsY0FBYyxHQUFFRCxpREFBRix1bEJBQXBCO0FBV2dCLFNBQVNFLHVCQUFULEdBQWtDO0FBQUE7O0FBRTlDLE1BQU1DLEtBQUssR0FBSVQsc0RBQVMsRUFBeEI7O0FBRUEsa0JBQWtDRywrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQSxNQUFPTyxhQUFQO0FBQUEsTUFBcUJDLFNBQXJCOztBQUNBLG1CQUEyQlIsK0NBQVEsQ0FBQyxFQUFELENBQW5DO0FBQUEsTUFBT1MsTUFBUDtBQUFBLE1BQWNDLFNBQWQ7O0FBQ0EsbUJBQXVDViwrQ0FBUSxDQUFDLEVBQUQsQ0FBL0M7QUFBQSxNQUFPVyxZQUFQO0FBQUEsTUFBb0JDLGVBQXBCOztBQUNBLG1CQUFpQ1osK0NBQVEsQ0FBQyxFQUFELENBQXpDO0FBQUEsTUFBT2EsU0FBUDtBQUFBLE1BQWlCQyxZQUFqQjs7QUFDQSxtQkFBaUNkLCtDQUFRLEVBQXpDO0FBQUEsTUFBT2UsU0FBUDtBQUFBLE1BQWlCQyxZQUFqQjs7QUFDQSxxQkFBc0JkLGdFQUFXLENBQUNFLGNBQUQsQ0FBakM7QUFBQTtBQUFBLE1BQU9hLFlBQVA7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHckIsc0RBQVMsRUFBMUI7QUFFQVcsRUFBQUEsU0FBUyxDQUFDRixLQUFLLENBQUNhLEtBQU4sQ0FBWUMscUJBQWIsQ0FBVDtBQUVBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWhCLEtBQVo7QUFDQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUEsOEJBQ0E7QUFBSSxp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RS8uL3BhZ2VzL3ByZWRpb19hY3R1YWxpemFyL1tudW1lUHJlZGlhbEFjdHVhbGl6YXJdLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi8uLi9Db21wb25lbnRzL0NvbnRhaW5lcic7XHJcbmltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHt1c2VRdWVyeSx1c2VNdXRhdGlvbn1mcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQge2dxbH0gZnJvbSAnYXBvbGxvLWJvb3N0J1xyXG5cclxuY29uc3QgVVBEQVRFX1BSRURJT1MgPWdxbGBcclxuICAgIG11dGF0aW9uIFVwZGF0ZVByZWRpb0J5TnVtZXJvUHJlZGlhbCgkbnVtZXJvUHJlZGlhbDpJbnQhLCRub21icmU6U3RyaW5nISwkZGVwYXJ0YW1lbnRvOlN0cmluZyEsJG11bmljaXBpbzpTdHJpbmchKXtcclxuICAgICAgICB1cGRhdGVQcmVkaW9CeU51bWVyb1ByZWRpYWwoXHJcbiAgICAgICAgICAgIGlucHV0OiB7cHJlZGlvUGF0Y2g6IHtkZXBhcnRhbWVudG86ICRkZXBhcnRhbWVudG8sIG11bmljaXBpbzogJG11bmljaXBpbywgbm9tYnJlOiAkbm9tYnJlfSwgbnVtZXJvUHJlZGlhbDokbnVtZXJvUHJlZGlhbH1cclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBjbGllbnRNdXRhdGlvbklkXHJcbiAgICAgICAgICB9XHJcbiAgICB9ICBcclxuYDtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAgZnVuY3Rpb24gbnVtZXJvUHJlZGlhbEFjdHVhbGl6YXIoKXtcclxuXHJcbiAgICBjb25zdCByb3V0ZSAgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGNvbnN0IFtudW1lcm9QcmVkaWFsLHNldE51bWVyb10gPSB1c2VTdGF0ZSgnJykgXHJcbiAgICBjb25zdCBbbm9tYnJlLHNldE5vbWJyZV0gPSB1c2VTdGF0ZSgnJykgXHJcbiAgICBjb25zdCBbZGVwYXJ0YW1lbnRvLHNldERlcGFydGFtZW50b10gPSB1c2VTdGF0ZSgnJykgXHJcbiAgICBjb25zdCBbbXVuaWNpcGlvLHNldE11bmljaXBpb10gPSB1c2VTdGF0ZSgnJykgXHJcbiAgICBjb25zdCBbdGVycmVub0lkLHNldFRlcnJlbm9JZF0gPSB1c2VTdGF0ZSgpIFxyXG4gICAgY29uc3QgW3VwZGF0ZVByZWRpb109IHVzZU11dGF0aW9uKFVQREFURV9QUkVESU9TKVxyXG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBzZXROdW1lcm8ocm91dGUucXVlcnkubnVtZVByZWRpYWxBY3R1YWxpemFyKVxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhyb3V0ZSlcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyLz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInAtNCB0ZXh0LTN4bCBmb250LWxpZ2h0XCI+TW9kaWZpY2FyIFByZWRpbzwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtMTBcIj4gIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwidy1mdWxsIG1heC13LTN4bCBwLTMgYmctd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVByZWRpbyh7dmFyaWFibGVzOntudW1lcm9QcmVkaWFsOm51bWVyb1ByZWRpYWwsbm9tYnJlOm5vbWJyZSxkZXBhcnRhbWVudG86ZGVwYXJ0YW1lbnRvLG11bmljaXBpbzptdW5pY2lwaW8sdGVycmVub0lkOnRlcnJlbm9JZH19ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGUucHVzaCgnL2xpc3RhcnByZWRpb3MnKSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9XCJibG9jayB0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIG1kLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJub21icmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb21icmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwidy1mdWxsIHB4LTMgcHktMiB0ZXh0LWdyYXktNzAwIGJvcmRlciByb3VuZGVkIHNoYWRvdyBhcHBlYXJlbmNlLW5vbmUgbGVhZGluZy1saWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW90dWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibm9tYnJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT57c2V0Tm9tYnJlKGUudGFyZ2V0LnZhbHVlKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25vbWJyZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9XCJibG9jayB0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIG1kLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJub21icmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXBhcnRhbWVudG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwidy1mdWxsIHB4LTMgcHktMiB0ZXh0LWdyYXktNzAwIGJvcmRlciByb3VuZGVkIHNoYWRvdyBhcHBlYXJlbmNlLW5vbmUgbGVhZGluZy1saWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW90dWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVwYXJ0YW1lbnRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT57c2V0RGVwYXJ0YW1lbnRvKGUudGFyZ2V0LnZhbHVlKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RlcGFydGFtZW50b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9XCJibG9jayB0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIG1kLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJub21icmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNdW5pY2lwaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwidy1mdWxsIHB4LTMgcHktMiB0ZXh0LWdyYXktNzAwIGJvcmRlciByb3VuZGVkIHNoYWRvdyBhcHBlYXJlbmNlLW5vbmUgbGVhZGluZy1saWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW90dWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibXVuaWNpcGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT57c2V0TXVuaWNpcGlvKGUudGFyZ2V0LnZhbHVlKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e211bmljaXBpb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwidy1mdWxsIHAtMiBtdC01IGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHVwcGVyY2FzZSBiZy1ncmVlbi01MDAgcm91bmRlZCBob3ZlcjpiZy1ncmF5LTkwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJBZ3JlZ2FyIENhbWJpb3NcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInJvdXRlciIsInVzZVJvdXRlciIsIkNvbnRhaW5lciIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VRdWVyeSIsInVzZU11dGF0aW9uIiwiZ3FsIiwiVVBEQVRFX1BSRURJT1MiLCJudW1lcm9QcmVkaWFsQWN0dWFsaXphciIsInJvdXRlIiwibnVtZXJvUHJlZGlhbCIsInNldE51bWVybyIsIm5vbWJyZSIsInNldE5vbWJyZSIsImRlcGFydGFtZW50byIsInNldERlcGFydGFtZW50byIsIm11bmljaXBpbyIsInNldE11bmljaXBpbyIsInRlcnJlbm9JZCIsInNldFRlcnJlbm9JZCIsInVwZGF0ZVByZWRpbyIsIm5hdmlnYXRlIiwicXVlcnkiLCJudW1lUHJlZGlhbEFjdHVhbGl6YXIiLCJjb25zb2xlIiwibG9nIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFyaWFibGVzIiwicHVzaCIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==