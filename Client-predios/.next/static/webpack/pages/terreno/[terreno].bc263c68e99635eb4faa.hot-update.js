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

  if (typeof data === undefined) {
    console.log(data);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Components_Container__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
      className: "p-4 text-3xl font-light",
      children: "Asignar un terreno"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
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
          lineNumber: 37,
          columnNumber: 22
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVycmVuby9bdGVycmVub10uYmMyNjNjNjhlOTk2MzVlYjRmYWEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTVEsY0FBYyxHQUFFRCxpREFBRixvbUJBQXBCO0FBWWUsU0FBU0UsT0FBVCxHQUFtQjtBQUFBOztBQUU5QixNQUFNQyxLQUFLLEdBQUdQLHNEQUFTLEVBQXZCO0FBQ0EsTUFBTVEsYUFBYSxHQUFHQyxRQUFRLENBQUNGLEtBQUssQ0FBQ0csS0FBTixDQUFZQyxxQkFBYixDQUE5Qjs7QUFDQSxrQkFBaUNiLCtDQUFRLENBQUMsRUFBRCxDQUF6QztBQUFBLE1BQU9jLFNBQVA7QUFBQSxNQUFpQkMsWUFBakI7O0FBQ0EsbUJBQWlDZiwrQ0FBUSxDQUFDLEVBQUQsQ0FBekM7QUFBQSxNQUFPZ0IsV0FBUDtBQUFBLE1BQW1CQyxVQUFuQjs7QUFDQSxtQkFBcUNqQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBN0M7QUFBQSxNQUFPa0IsV0FBUDtBQUFBLE1BQW1CQyxjQUFuQjs7QUFDQSxtQkFBMkNuQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbkQ7QUFBQSxNQUFPb0IsY0FBUDtBQUFBLE1BQXNCQyxpQkFBdEI7O0FBQ0EscUJBQStDaEIsZ0VBQVcsQ0FBQ0UsY0FBRCxDQUExRDtBQUFBO0FBQUEsTUFBT2UsWUFBUDtBQUFBO0FBQUEsTUFBc0JDLElBQXRCLGtCQUFzQkEsSUFBdEI7QUFBQSxNQUE0QkMsT0FBNUIsa0JBQTRCQSxPQUE1QjtBQUFBLE1BQXFDQyxLQUFyQyxrQkFBcUNBLEtBQXJDOztBQUNBLE1BQUlELE9BQUosRUFBYSxPQUFPLGVBQVA7QUFDYixNQUFJQyxLQUFKLEVBQVcsbUNBQTRCQSxLQUFLLENBQUNDLE9BQWxDOztBQUNYLE1BQUcsT0FBT0gsSUFBUCxLQUFnQkksU0FBbkIsRUFBNkI7QUFB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Q0csTUFBRixDQUFTQyxLQUFWLENBQVQsQ0FBakI7QUFBNEMsZUFINUQ7QUFJRyxtQkFBSyxFQUFFZDtBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXpDSixlQXFESTtBQUFPLGdCQUFJLEVBQUMsUUFBWjtBQUNBLHFCQUFTLEVBQUUsdUZBRFg7QUFFQyxpQkFBSyxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFyREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW1FSDs7R0EvRXVCWjtVQUVOTixvREFNaUNHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3RlcnJlbm8vW3RlcnJlbm9dLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9Db250YWluZXInO1xyXG5pbXBvcnQge3VzZVF1ZXJ5LHVzZU11dGF0aW9ufWZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCB7Z3FsfSBmcm9tICdhcG9sbG8tYm9vc3QnXHJcblxyXG5jb25zdCBDUkVBVEVfVEVSUkVOTyA9Z3FsYFxyXG4gICAgbXV0YXRpb24gY3JlYXRlVGVycmVubygkYXJlYVRvdGFsOlN0cmluZyEsJHZhbG9yQ29tZXJjaWFsOkludCEsJHRpcG9UZXJyZW5vOlN0cmluZyEsJGZ1ZW50ZXNBZ3VhOkJvb2xlYW4hKXtcclxuICAgICAgICBjcmVhdGVUZXJyZW5vKFxyXG4gICAgICAgICAgICBpbnB1dDoge3RlcnJlbm86IHthcmVhVG90YWw6ICRhcmVhVG90YWwsIHZhbG9yQ29tZXJjaWFsOiAkdmFsb3JDb21lcmNpYWwsIHRpcG9UZXJyZW5vOiAkdGlwb1RlcnJlbm8sIGZ1ZW50ZXNBZ3VhOiAkZnVlbnRlc0FndWF9fVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRlcnJlbm8ge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0ZXJyZW5vICgpe1xyXG5cclxuICAgIGNvbnN0IHJvdXRlID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IG51bWVyb1ByZWRpYWwgPSBwYXJzZUludChyb3V0ZS5xdWVyeS5udW1lUHJlZGlhbEFjdHVhbGl6YXIpIFxyXG4gICAgY29uc3QgW2FyZWFUb3RhbCxzZXRBcmVhVG90YWxdID0gdXNlU3RhdGUoJycpIFxyXG4gICAgY29uc3QgW2Z1ZW50ZXNBZ3VhLHNldEZ1ZW50ZXNdID0gdXNlU3RhdGUoJycpIFxyXG4gICAgY29uc3QgW3RpcG9UZXJyZW5vLHNldFRpcG9UZXJyZW5vXSA9IHVzZVN0YXRlKCcnKSBcclxuICAgIGNvbnN0IFt2YWxvckNvbWVyY2lhbCxzZXRWYWxvckNvbWVyY2lhbF0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFt1cGRhdGVQcmVkaW8seyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XT0gdXNlTXV0YXRpb24oQ1JFQVRFX1RFUlJFTk8pXHJcbiAgICBpZiAobG9hZGluZykgcmV0dXJuICdTdWJtaXR0aW5nLi4uJztcclxuICAgIGlmIChlcnJvcikgcmV0dXJuIGBTdWJtaXNzaW9uIGVycm9yISAke2Vycm9yLm1lc3NhZ2V9YDtcclxuICAgIGlmKHR5cGVvZiBkYXRhID09PSB1bmRlZmluZWQpeyBjb25zb2xlLmxvZyhkYXRhKX1cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyLz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInAtNCB0ZXh0LTN4bCBmb250LWxpZ2h0XCI+QXNpZ25hciB1biB0ZXJyZW5vPC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0xMFwiPiAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJ3LWZ1bGwgbWF4LXctM3hsIHAtMyBiZy13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVQcmVkaW8oe3ZhcmlhYmxlczp7YXJlYVRvdGFsOmFyZWFUb3RhbCxmdWVudGVzQWd1YTpmdWVudGVzQWd1YSx0aXBvVGVycmVubzp0aXBvVGVycmVubyx2YWxvckNvbWVyY2lhbDp2YWxvckNvbWVyY2lhbH19KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9XCJibG9jayB0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIG1kLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJub21icmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDDgXJlYSBUb3RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9XCJ3LWZ1bGwgcHgtMyBweS0yIHRleHQtZ3JheS03MDAgYm9yZGVyIHJvdW5kZWQgc2hhZG93IGFwcGVhcmVuY2Utbm9uZSBsZWFkaW5nLWxpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3R1bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJub21icmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PntzZXRBcmVhVG90YWwoZS50YXJnZXQudmFsdWUpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YXJlYVRvdGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID1cImJsb2NrIHRleHQtc20gZm9udC1ib2xkIHRleHQtZ3JheS03MDAgbWQtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm5vbWJyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV4aXN0ZW4gZnVlbnRlcyBkZSBhZ3VhIGNlcmNhbmFzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID1cInctZnVsbCBweC0zIHB5LTIgdGV4dC1ncmF5LTcwMCBib3JkZXIgcm91bmRlZCBzaGFkb3cgYXBwZWFyZW5jZS1ub25lIGxlYWRpbmctbGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdHVsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRlcGFydGFtZW50b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+e3NldEZ1ZW50ZXMoZS50YXJnZXQudmFsdWU9PT0ndHJ1ZScgPyAodHJ1ZSk6KGZhbHNlKSl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID1cImJsb2NrIHRleHQtc20gZm9udC1ib2xkIHRleHQtZ3JheS03MDAgbWQtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm5vbWJyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRpcG8gVGVycmVub1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9XCJ3LWZ1bGwgcHgtMyBweS0yIHRleHQtZ3JheS03MDAgYm9yZGVyIHJvdW5kZWQgc2hhZG93IGFwcGVhcmVuY2Utbm9uZSBsZWFkaW5nLWxpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3R1bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJtdW5pY2lwaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PntzZXRUaXBvVGVycmVubyhlLnRhcmdldC52YWx1ZSl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aXBvVGVycmVub31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9XCJibG9jayB0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIG1kLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJub21icmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWxvciBDb21lcmNpYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwidy1mdWxsIHB4LTMgcHktMiB0ZXh0LWdyYXktNzAwIGJvcmRlciByb3VuZGVkIHNoYWRvdyBhcHBlYXJlbmNlLW5vbmUgbGVhZGluZy1saWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW90dWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibXVuaWNpcGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT57c2V0VmFsb3JDb21lcmNpYWwocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbG9yQ29tZXJjaWFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9XCJ3LWZ1bGwgcC0yIG10LTUgZm9udC1ib2xkIHRleHQtd2hpdGUgdXBwZXJjYXNlIGJnLWdyZWVuLTUwMCByb3VuZGVkIGhvdmVyOmJnLWdyYXktOTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIkFncmVnYXIgQ2FtYmlvc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkNvbnRhaW5lciIsInVzZVF1ZXJ5IiwidXNlTXV0YXRpb24iLCJncWwiLCJDUkVBVEVfVEVSUkVOTyIsInRlcnJlbm8iLCJyb3V0ZSIsIm51bWVyb1ByZWRpYWwiLCJwYXJzZUludCIsInF1ZXJ5IiwibnVtZVByZWRpYWxBY3R1YWxpemFyIiwiYXJlYVRvdGFsIiwic2V0QXJlYVRvdGFsIiwiZnVlbnRlc0FndWEiLCJzZXRGdWVudGVzIiwidGlwb1RlcnJlbm8iLCJzZXRUaXBvVGVycmVubyIsInZhbG9yQ29tZXJjaWFsIiwic2V0VmFsb3JDb21lcmNpYWwiLCJ1cGRhdGVQcmVkaW8iLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwibWVzc2FnZSIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YXJpYWJsZXMiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=