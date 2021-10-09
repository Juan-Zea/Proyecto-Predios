"use strict";
self["webpackHotUpdate_N_E"]("pages/terreno/[terreno]",{

/***/ "./pages/terreno/[terreno].js":
/*!************************************!*\
  !*** ./pages/terreno/[terreno].js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ terreno; }
/* harmony export */ });
/* harmony import */ var C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/Container */ "./Components/Container.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/index.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\judaz\\Documents\\VS CODE\\Next, Graphql y postgres\\Proyecto Predios\\Client-predios\\pages\\terreno\\[terreno].js",
    _templateObject,
    _s = $RefreshSig$();







var CREATE_TERRENO = (0,apollo_boost__WEBPACK_IMPORTED_MODULE_6__.gql)(_templateObject || (_templateObject = (0,C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n    mutation createTerreno($areaTotal:String!,$valorComercial:Int!,$tipoTerreno:String!,$fuentesAgua:Boolean!){\n        createTerreno(\n            input: {terreno: {areaTotal: $areaTotal, valorComercial: $valorComercial, tipoTerreno: $tipoTerreno, fuentesAgua: $fuentesAgua}}\n          ) {\n            terreno {\n                id\n              }\n          }\n    }\n"])));
function terreno() {
  _s();

  var route = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  var numeroPredial = parseInt(route.query.numePredialActualizar);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      areaTotal = _useState[0],
      setAreaTotal = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      fuentesAgua = _useState2[0],
      setFuentes = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      tipoTerreno = _useState3[0],
      setTipoTerreno = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      valorComercial = _useState4[0],
      setValorComercial = _useState4[1];

  var _useMutation = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__.useMutation)(CREATE_TERRENO),
      _useMutation2 = (0,C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useMutation, 2),
      updatePredio = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      data = _useMutation2$.data,
      loading = _useMutation2$.loading,
      error = _useMutation2$.error;

  if (loading) return 'Submitting...';
  if (error) return "Submission error! ".concat(error.message);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Components_Container__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
      className: "p-4 text-3xl font-light",
      children: "Asignar un terreno"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
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
                areaTotal: areaTotal,
                fuentesAgua: fuentesAgua,
                tipoTerreno: tipoTerreno,
                valorComercial: valorComercial
              }
            });
            console.log(data);
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "mb-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
              className: "block text-sm font-bold text-gray-700 md-2",
              htmlFor: "nombre",
              children: "\xC1rea Total"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 30
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
              className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
              id: "nombre",
              onChange: function onChange(e) {
                setAreaTotal(e.target.value);
              },
              value: areaTotal
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 30
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 26
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "mb-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
              className: "block text-sm font-bold text-gray-700 md-2",
              htmlFor: "nombre",
              children: "Existen fuentes de agua cercanas"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 30
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
              className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
              id: "departamento",
              onChange: function onChange(e) {
                setFuentes(e.target.value === 'true' ? true : false);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 30
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 26
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "mb-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
              className: "block text-sm font-bold text-gray-700 md-2",
              htmlFor: "nombre",
              children: "Tipo Terreno"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 30
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
              className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
              id: "municipio",
              onChange: function onChange(e) {
                setTipoTerreno(e.target.value);
              },
              value: tipoTerreno
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 30
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 26
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "mb-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
              className: "block text-sm font-bold text-gray-700 md-2",
              htmlFor: "nombre",
              children: "Valor Comercial"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 30
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
              className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
              id: "municipio",
              onChange: function onChange(e) {
                setValorComercial(parseInt(e.target.value));
              },
              value: valorComercial
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 30
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 26
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
            type: "submit",
            className: "w-full p-2 mt-5 font-bold text-white uppercase bg-green-500 rounded hover:bg-gray-900",
            value: "Agregar Cambios"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 26
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 22
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }, this);
}

_s(terreno, "Vcw8+mv+lCHriG4XG0Qz/oOS8WU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter, _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__.useMutation];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVycmVuby9bdGVycmVub10uNmFkZTk0YzdmMDYzZGIxMjFiYzkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTVEsY0FBYyxHQUFFRCxpREFBRixvbUJBQXBCO0FBWWUsU0FBU0UsT0FBVCxHQUFtQjtBQUFBOztBQUU5QixNQUFNQyxLQUFLLEdBQUdQLHNEQUFTLEVBQXZCO0FBQ0EsTUFBTVEsYUFBYSxHQUFHQyxRQUFRLENBQUNGLEtBQUssQ0FBQ0csS0FBTixDQUFZQyxxQkFBYixDQUE5Qjs7QUFDQSxrQkFBaUNiLCtDQUFRLENBQUMsRUFBRCxDQUF6QztBQUFBLE1BQU9jLFNBQVA7QUFBQSxNQUFpQkMsWUFBakI7O0FBQ0EsbUJBQWlDZiwrQ0FBUSxDQUFDLEVBQUQsQ0FBekM7QUFBQSxNQUFPZ0IsV0FBUDtBQUFBLE1BQW1CQyxVQUFuQjs7QUFDQSxtQkFBcUNqQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBN0M7QUFBQSxNQUFPa0IsV0FBUDtBQUFBLE1BQW1CQyxjQUFuQjs7QUFDQSxtQkFBMkNuQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbkQ7QUFBQSxNQUFPb0IsY0FBUDtBQUFBLE1BQXNCQyxpQkFBdEI7O0FBQ0EscUJBQStDaEIsZ0VBQVcsQ0FBQ0UsY0FBRCxDQUExRDtBQUFBO0FBQUEsTUFBT2UsWUFBUDtBQUFBO0FBQUEsTUFBc0JDLElBQXRCLGtCQUFzQkEsSUFBdEI7QUFBQSxNQUE0QkMsT0FBNUIsa0JBQTRCQSxPQUE1QjtBQUFBLE1BQXFDQyxLQUFyQyxrQkFBcUNBLEtBQXJDOztBQUNBLE1BQUlELE9BQUosRUFBYSxPQUFPLGVBQVA7QUFDYixNQUFJQyxLQUFKLEVBQVcsbUNBQTRCQSxLQUFLLENBQUNDLE9BQWxDO0FBQ1gsc0JBQ0k7QUFBQSw0QkFDSSw4REFBQywwREFBRDtBQUFBO0FBQUE7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LEVBQUViO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBekNKLGVBcURJO0FBQU8sZ0JBQUksRUFBQyxRQUFaO0FBQ0EscUJBQVMsRUFBRSx1RkFEWDtBQUVDLGlCQUFLLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXJESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBbUVIOztHQTlFdUJaO1VBRU5OLG9EQU1pQ0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVycmVuby9bdGVycmVub10uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi8uLi9Db21wb25lbnRzL0NvbnRhaW5lcic7XHJcbmltcG9ydCB7dXNlUXVlcnksdXNlTXV0YXRpb259ZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IHtncWx9IGZyb20gJ2Fwb2xsby1ib29zdCdcclxuXHJcbmNvbnN0IENSRUFURV9URVJSRU5PID1ncWxgXHJcbiAgICBtdXRhdGlvbiBjcmVhdGVUZXJyZW5vKCRhcmVhVG90YWw6U3RyaW5nISwkdmFsb3JDb21lcmNpYWw6SW50ISwkdGlwb1RlcnJlbm86U3RyaW5nISwkZnVlbnRlc0FndWE6Qm9vbGVhbiEpe1xyXG4gICAgICAgIGNyZWF0ZVRlcnJlbm8oXHJcbiAgICAgICAgICAgIGlucHV0OiB7dGVycmVubzoge2FyZWFUb3RhbDogJGFyZWFUb3RhbCwgdmFsb3JDb21lcmNpYWw6ICR2YWxvckNvbWVyY2lhbCwgdGlwb1RlcnJlbm86ICR0aXBvVGVycmVubywgZnVlbnRlc0FndWE6ICRmdWVudGVzQWd1YX19XHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgdGVycmVubyB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRlcnJlbm8gKCl7XHJcblxyXG4gICAgY29uc3Qgcm91dGUgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgbnVtZXJvUHJlZGlhbCA9IHBhcnNlSW50KHJvdXRlLnF1ZXJ5Lm51bWVQcmVkaWFsQWN0dWFsaXphcikgXHJcbiAgICBjb25zdCBbYXJlYVRvdGFsLHNldEFyZWFUb3RhbF0gPSB1c2VTdGF0ZSgnJykgXHJcbiAgICBjb25zdCBbZnVlbnRlc0FndWEsc2V0RnVlbnRlc10gPSB1c2VTdGF0ZSgnJykgXHJcbiAgICBjb25zdCBbdGlwb1RlcnJlbm8sc2V0VGlwb1RlcnJlbm9dID0gdXNlU3RhdGUoJycpIFxyXG4gICAgY29uc3QgW3ZhbG9yQ29tZXJjaWFsLHNldFZhbG9yQ29tZXJjaWFsXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3VwZGF0ZVByZWRpbyx7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dPSB1c2VNdXRhdGlvbihDUkVBVEVfVEVSUkVOTylcclxuICAgIGlmIChsb2FkaW5nKSByZXR1cm4gJ1N1Ym1pdHRpbmcuLi4nO1xyXG4gICAgaWYgKGVycm9yKSByZXR1cm4gYFN1Ym1pc3Npb24gZXJyb3IhICR7ZXJyb3IubWVzc2FnZX1gO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDb250YWluZXIvPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicC00IHRleHQtM3hsIGZvbnQtbGlnaHRcIj5Bc2lnbmFyIHVuIHRlcnJlbm88L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTEwXCI+ICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cInctZnVsbCBtYXgtdy0zeGwgcC0zIGJnLXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVByZWRpbyh7dmFyaWFibGVzOnthcmVhVG90YWw6YXJlYVRvdGFsLGZ1ZW50ZXNBZ3VhOmZ1ZW50ZXNBZ3VhLHRpcG9UZXJyZW5vOnRpcG9UZXJyZW5vLHZhbG9yQ29tZXJjaWFsOnZhbG9yQ29tZXJjaWFsfX0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPVwiYmxvY2sgdGV4dC1zbSBmb250LWJvbGQgdGV4dC1ncmF5LTcwMCBtZC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwibm9tYnJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgw4FyZWEgVG90YWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwidy1mdWxsIHB4LTMgcHktMiB0ZXh0LWdyYXktNzAwIGJvcmRlciByb3VuZGVkIHNoYWRvdyBhcHBlYXJlbmNlLW5vbmUgbGVhZGluZy1saWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW90dWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibm9tYnJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT57c2V0QXJlYVRvdGFsKGUudGFyZ2V0LnZhbHVlKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FyZWFUb3RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9XCJibG9jayB0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIG1kLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJub21icmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeGlzdGVuIGZ1ZW50ZXMgZGUgYWd1YSBjZXJjYW5hc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9XCJ3LWZ1bGwgcHgtMyBweS0yIHRleHQtZ3JheS03MDAgYm9yZGVyIHJvdW5kZWQgc2hhZG93IGFwcGVhcmVuY2Utbm9uZSBsZWFkaW5nLWxpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3R1bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZXBhcnRhbWVudG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PntzZXRGdWVudGVzKGUudGFyZ2V0LnZhbHVlPT09J3RydWUnID8gKHRydWUpOihmYWxzZSkpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9XCJibG9jayB0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIG1kLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJub21icmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaXBvIFRlcnJlbm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwidy1mdWxsIHB4LTMgcHktMiB0ZXh0LWdyYXktNzAwIGJvcmRlciByb3VuZGVkIHNoYWRvdyBhcHBlYXJlbmNlLW5vbmUgbGVhZGluZy1saWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW90dWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibXVuaWNpcGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT57c2V0VGlwb1RlcnJlbm8oZS50YXJnZXQudmFsdWUpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGlwb1RlcnJlbm99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPVwiYmxvY2sgdGV4dC1zbSBmb250LWJvbGQgdGV4dC1ncmF5LTcwMCBtZC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwibm9tYnJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsb3IgQ29tZXJjaWFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID1cInctZnVsbCBweC0zIHB5LTIgdGV4dC1ncmF5LTcwMCBib3JkZXIgcm91bmRlZCBzaGFkb3cgYXBwZWFyZW5jZS1ub25lIGxlYWRpbmctbGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdHVsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm11bmljaXBpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+e3NldFZhbG9yQ29tZXJjaWFsKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWxvckNvbWVyY2lhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwidy1mdWxsIHAtMiBtdC01IGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHVwcGVyY2FzZSBiZy1ncmVlbi01MDAgcm91bmRlZCBob3ZlcjpiZy1ncmF5LTkwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJBZ3JlZ2FyIENhbWJpb3NcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJDb250YWluZXIiLCJ1c2VRdWVyeSIsInVzZU11dGF0aW9uIiwiZ3FsIiwiQ1JFQVRFX1RFUlJFTk8iLCJ0ZXJyZW5vIiwicm91dGUiLCJudW1lcm9QcmVkaWFsIiwicGFyc2VJbnQiLCJxdWVyeSIsIm51bWVQcmVkaWFsQWN0dWFsaXphciIsImFyZWFUb3RhbCIsInNldEFyZWFUb3RhbCIsImZ1ZW50ZXNBZ3VhIiwic2V0RnVlbnRlcyIsInRpcG9UZXJyZW5vIiwic2V0VGlwb1RlcnJlbm8iLCJ2YWxvckNvbWVyY2lhbCIsInNldFZhbG9yQ29tZXJjaWFsIiwidXBkYXRlUHJlZGlvIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsIm1lc3NhZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YXJpYWJsZXMiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9