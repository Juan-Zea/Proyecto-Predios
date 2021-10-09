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
      data = _useMutation2[1].data;

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      terrenoId = _useState5[0],
      setTerreno = _useState5[1];

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
            console.log([data]);
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "mb-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
              className: "block text-sm font-bold text-gray-700 md-2",
              htmlFor: "nombre",
              children: "\xC1rea Total"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
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
              lineNumber: 48,
              columnNumber: 30
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 26
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "mb-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
              className: "block text-sm font-bold text-gray-700 md-2",
              htmlFor: "nombre",
              children: "Existen fuentes de agua cercanas"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 30
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
              className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
              id: "departamento",
              onChange: function onChange(e) {
                setFuentes(e.target.value === 'true' ? true : false);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 30
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 26
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "mb-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
              className: "block text-sm font-bold text-gray-700 md-2",
              htmlFor: "nombre",
              children: "Tipo Terreno"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
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
              lineNumber: 71,
              columnNumber: 30
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 26
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "mb-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
              className: "block text-sm font-bold text-gray-700 md-2",
              htmlFor: "nombre",
              children: "Valor Comercial"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
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
              lineNumber: 83,
              columnNumber: 30
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 26
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
            type: "submit",
            className: "w-full p-2 mt-5 font-bold text-white uppercase bg-green-500 rounded hover:bg-gray-900",
            value: "Agregar Cambios"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
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

_s(terreno, "PQYRxBlr365DBuMJQzLLCfTVeoY=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVycmVuby9bdGVycmVub10uMWMxZTIyNjBkMWI4YmEzNzE0ZjEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNUSxjQUFjLEdBQUVGLGlEQUFGLG9tQkFBcEI7QUFZZSxTQUFTRyxPQUFULEdBQW1CO0FBQUE7O0FBRTlCLE1BQU1DLEtBQUssR0FBR1Isc0RBQVMsRUFBdkI7QUFDQSxNQUFNUyxhQUFhLEdBQUdDLFFBQVEsQ0FBQ0YsS0FBSyxDQUFDRyxLQUFOLENBQVlDLHFCQUFiLENBQTlCOztBQUNBLGtCQUFpQ2IsK0NBQVEsQ0FBQyxFQUFELENBQXpDO0FBQUEsTUFBT2MsU0FBUDtBQUFBLE1BQWlCQyxZQUFqQjs7QUFDQSxtQkFBaUNmLCtDQUFRLENBQUMsRUFBRCxDQUF6QztBQUFBLE1BQU9nQixXQUFQO0FBQUEsTUFBbUJDLFVBQW5COztBQUNBLG1CQUFxQ2pCLCtDQUFRLENBQUMsRUFBRCxDQUE3QztBQUFBLE1BQU9rQixXQUFQO0FBQUEsTUFBbUJDLGNBQW5COztBQUNBLG1CQUEyQ25CLCtDQUFRLENBQUMsRUFBRCxDQUFuRDtBQUFBLE1BQU9vQixjQUFQO0FBQUEsTUFBc0JDLGlCQUF0Qjs7QUFDQSxxQkFBNkJqQixnRUFBVyxDQUFDRyxjQUFELENBQXhDO0FBQUE7QUFBQSxNQUFPZSxZQUFQO0FBQUEsTUFBcUJDLElBQXJCLG9CQUFxQkEsSUFBckI7O0FBQ0EsbUJBQStCdkIsK0NBQVEsQ0FBQyxFQUFELENBQXZDO0FBQUEsTUFBT3dCLFNBQVA7QUFBQSxNQUFpQkMsVUFBakI7O0FBQ0Esc0JBQ0k7QUFBQSw0QkFDSSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFJLGVBQVMsRUFBQyx5QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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QUEsa0JBMUNKLGVBc0RJO0FBQU8sZ0JBQUksRUFBQyxRQUFaO0FBQ0EscUJBQVMsRUFBRSx1RkFEWDtBQUVDLGlCQUFLLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXRESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBb0VIOztHQTlFdUJaO1VBRU5QLG9EQU1lRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90ZXJyZW5vL1t0ZXJyZW5vXS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9Db250YWluZXInO1xyXG5pbXBvcnQge3VzZVF1ZXJ5LHVzZU11dGF0aW9ufWZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCB7Z3FsfSBmcm9tICdhcG9sbG8tYm9vc3QnXHJcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSAnZ3JhcGhxbCc7XHJcblxyXG5jb25zdCBDUkVBVEVfVEVSUkVOTyA9Z3FsYFxyXG4gICAgbXV0YXRpb24gY3JlYXRlVGVycmVubygkYXJlYVRvdGFsOlN0cmluZyEsJHZhbG9yQ29tZXJjaWFsOkludCEsJHRpcG9UZXJyZW5vOlN0cmluZyEsJGZ1ZW50ZXNBZ3VhOkJvb2xlYW4hKXtcclxuICAgICAgICBjcmVhdGVUZXJyZW5vKFxyXG4gICAgICAgICAgICBpbnB1dDoge3RlcnJlbm86IHthcmVhVG90YWw6ICRhcmVhVG90YWwsIHZhbG9yQ29tZXJjaWFsOiAkdmFsb3JDb21lcmNpYWwsIHRpcG9UZXJyZW5vOiAkdGlwb1RlcnJlbm8sIGZ1ZW50ZXNBZ3VhOiAkZnVlbnRlc0FndWF9fVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRlcnJlbm8ge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0ZXJyZW5vICgpe1xyXG5cclxuICAgIGNvbnN0IHJvdXRlID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IG51bWVyb1ByZWRpYWwgPSBwYXJzZUludChyb3V0ZS5xdWVyeS5udW1lUHJlZGlhbEFjdHVhbGl6YXIpIFxyXG4gICAgY29uc3QgW2FyZWFUb3RhbCxzZXRBcmVhVG90YWxdID0gdXNlU3RhdGUoJycpIFxyXG4gICAgY29uc3QgW2Z1ZW50ZXNBZ3VhLHNldEZ1ZW50ZXNdID0gdXNlU3RhdGUoJycpIFxyXG4gICAgY29uc3QgW3RpcG9UZXJyZW5vLHNldFRpcG9UZXJyZW5vXSA9IHVzZVN0YXRlKCcnKSBcclxuICAgIGNvbnN0IFt2YWxvckNvbWVyY2lhbCxzZXRWYWxvckNvbWVyY2lhbF0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFt1cGRhdGVQcmVkaW8se2RhdGF9XT0gdXNlTXV0YXRpb24oQ1JFQVRFX1RFUlJFTk8pXHJcbiAgICBjb25zdCBbdGVycmVub0lkLHNldFRlcnJlbm9dID0gdXNlU3RhdGUoJycpXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPENvbnRhaW5lci8+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwLTQgdGV4dC0zeGwgZm9udC1saWdodFwiPkFzaWduYXIgdW4gdGVycmVubzwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtMTBcIj4gIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwidy1mdWxsIG1heC13LTN4bCBwLTMgYmctd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUHJlZGlvKHt2YXJpYWJsZXM6e2FyZWFUb3RhbDphcmVhVG90YWwsZnVlbnRlc0FndWE6ZnVlbnRlc0FndWEsdGlwb1RlcnJlbm86dGlwb1RlcnJlbm8sdmFsb3JDb21lcmNpYWw6dmFsb3JDb21lcmNpYWx9fSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coW2RhdGFdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPVwiYmxvY2sgdGV4dC1zbSBmb250LWJvbGQgdGV4dC1ncmF5LTcwMCBtZC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwibm9tYnJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgw4FyZWEgVG90YWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwidy1mdWxsIHB4LTMgcHktMiB0ZXh0LWdyYXktNzAwIGJvcmRlciByb3VuZGVkIHNoYWRvdyBhcHBlYXJlbmNlLW5vbmUgbGVhZGluZy1saWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW90dWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibm9tYnJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT57c2V0QXJlYVRvdGFsKGUudGFyZ2V0LnZhbHVlKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FyZWFUb3RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9XCJibG9jayB0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIG1kLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJub21icmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeGlzdGVuIGZ1ZW50ZXMgZGUgYWd1YSBjZXJjYW5hc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9XCJ3LWZ1bGwgcHgtMyBweS0yIHRleHQtZ3JheS03MDAgYm9yZGVyIHJvdW5kZWQgc2hhZG93IGFwcGVhcmVuY2Utbm9uZSBsZWFkaW5nLWxpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3R1bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZXBhcnRhbWVudG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PntzZXRGdWVudGVzKGUudGFyZ2V0LnZhbHVlPT09J3RydWUnID8gKHRydWUpOihmYWxzZSkpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9XCJibG9jayB0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIG1kLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJub21icmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaXBvIFRlcnJlbm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwidy1mdWxsIHB4LTMgcHktMiB0ZXh0LWdyYXktNzAwIGJvcmRlciByb3VuZGVkIHNoYWRvdyBhcHBlYXJlbmNlLW5vbmUgbGVhZGluZy1saWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW90dWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibXVuaWNpcGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT57c2V0VGlwb1RlcnJlbm8oZS50YXJnZXQudmFsdWUpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGlwb1RlcnJlbm99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPVwiYmxvY2sgdGV4dC1zbSBmb250LWJvbGQgdGV4dC1ncmF5LTcwMCBtZC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwibm9tYnJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsb3IgQ29tZXJjaWFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID1cInctZnVsbCBweC0zIHB5LTIgdGV4dC1ncmF5LTcwMCBib3JkZXIgcm91bmRlZCBzaGFkb3cgYXBwZWFyZW5jZS1ub25lIGxlYWRpbmctbGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdHVsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm11bmljaXBpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+e3NldFZhbG9yQ29tZXJjaWFsKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWxvckNvbWVyY2lhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwidy1mdWxsIHAtMiBtdC01IGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHVwcGVyY2FzZSBiZy1ncmVlbi01MDAgcm91bmRlZCBob3ZlcjpiZy1ncmF5LTkwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJBZ3JlZ2FyIENhbWJpb3NcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJDb250YWluZXIiLCJ1c2VRdWVyeSIsInVzZU11dGF0aW9uIiwiZ3FsIiwicGFyc2UiLCJDUkVBVEVfVEVSUkVOTyIsInRlcnJlbm8iLCJyb3V0ZSIsIm51bWVyb1ByZWRpYWwiLCJwYXJzZUludCIsInF1ZXJ5IiwibnVtZVByZWRpYWxBY3R1YWxpemFyIiwiYXJlYVRvdGFsIiwic2V0QXJlYVRvdGFsIiwiZnVlbnRlc0FndWEiLCJzZXRGdWVudGVzIiwidGlwb1RlcnJlbm8iLCJzZXRUaXBvVGVycmVubyIsInZhbG9yQ29tZXJjaWFsIiwic2V0VmFsb3JDb21lcmNpYWwiLCJ1cGRhdGVQcmVkaW8iLCJkYXRhIiwidGVycmVub0lkIiwic2V0VGVycmVubyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhcmlhYmxlcyIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=