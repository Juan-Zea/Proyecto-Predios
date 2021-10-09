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
  var numeroPredial = parseInt(route.query.numePredialActualizar);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      nombre = _useState[0],
      setNombre = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      departamento = _useState2[0],
      setDepartamento = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      municipio = _useState3[0],
      setMunicipio = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(),
      terrenoId = _useState4[0],
      setTerrenoId = _useState4[1];

  var _useMutation = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__.useMutation)(UPDATE_PREDIOS),
      _useMutation2 = (0,C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useMutation, 1),
      updatePredio = _useMutation2[0];

  var navigate = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  console.log(route);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Components_Container__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
        className: "p-4 text-3xl font-light",
        children: "Modificar Predio"
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
                lineNumber: 44,
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
                children: "Departamento"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
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
                children: "Municipio"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
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
                lineNumber: 72,
                columnNumber: 30
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 26
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
              type: "submit",
              className: "w-full p-2 mt-5 font-bold text-white uppercase bg-green-500 rounded hover:bg-gray-900",
              value: "Agregar Cambios"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
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
      lineNumber: 33,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }, this);
}

_s(numeroPredialActualizar, "EDsDQaxqTLRk3cFuF5aiyUc0Tac=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJlZGlvX2FjdHVhbGl6YXIvW251bWVQcmVkaWFsQWN0dWFsaXphcl0uY2E0Mzg4NzBiNWEyNzIwMGYxOTcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTVEsY0FBYyxHQUFFRCxpREFBRix1bEJBQXBCO0FBV2dCLFNBQVNFLHVCQUFULEdBQWtDO0FBQUE7O0FBRTlDLE1BQU1DLEtBQUssR0FBSVQsc0RBQVMsRUFBeEI7QUFDQSxNQUFNVSxhQUFhLEdBQUdDLFFBQVEsQ0FBQ0YsS0FBSyxDQUFDRyxLQUFOLENBQVlDLHFCQUFiLENBQTlCOztBQUNBLGtCQUEyQlYsK0NBQVEsQ0FBQyxFQUFELENBQW5DO0FBQUEsTUFBT1csTUFBUDtBQUFBLE1BQWNDLFNBQWQ7O0FBQ0EsbUJBQXVDWiwrQ0FBUSxDQUFDLEVBQUQsQ0FBL0M7QUFBQSxNQUFPYSxZQUFQO0FBQUEsTUFBb0JDLGVBQXBCOztBQUNBLG1CQUFpQ2QsK0NBQVEsQ0FBQyxFQUFELENBQXpDO0FBQUEsTUFBT2UsU0FBUDtBQUFBLE1BQWlCQyxZQUFqQjs7QUFDQSxtQkFBaUNoQiwrQ0FBUSxFQUF6QztBQUFBLE1BQU9pQixTQUFQO0FBQUEsTUFBaUJDLFlBQWpCOztBQUNBLHFCQUFzQmhCLGdFQUFXLENBQUNFLGNBQUQsQ0FBakM7QUFBQTtBQUFBLE1BQU9lLFlBQVA7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHdkIsc0RBQVMsRUFBMUI7QUFFQXdCLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZaEIsS0FBWjtBQUNBLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBQSw4QkFDQTtBQUFJLGlCQUFTLEVBQUMseUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUVBO0FBQUssaUJBQVMsRUFBRSwyQkFBaEI7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUUsK0JBQWhCO0FBQUEsaUNBQ0s7QUFBTSxvQkFBUSxFQUFFLGtCQUFDaUIsQ0FBRCxFQUFLO0FBQ2RBLGNBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNDTCxjQUFBQSxZQUFZLENBQUM7QUFBQ00sZ0JBQUFBLFNBQVMsRUFBQztBQUFDbEIsa0JBQUFBLGFBQWEsRUFBQ0EsYUFBZjtBQUE2Qkksa0JBQUFBLE1BQU0sRUFBQ0EsTUFBcEM7QUFBMkNFLGtCQUFBQSxZQUFZLEVBQUNBLFlBQXhEO0FBQXFFRSxrQkFBQUEsU0FBUyxFQUFDQSxTQUEvRTtBQUF5RkUsa0JBQUFBLFNBQVMsRUFBQ0E7QUFBbkc7QUFBWCxlQUFELENBQVo7QUFDQUcsY0FBQUEsUUFBUSxDQUFDTSxJQUFULENBQWMsZ0JBQWQ7QUFDSixhQUpKO0FBQUEsb0NBTUk7QUFBSyx1QkFBUyxFQUFFLE1BQWhCO0FBQUEsc0NBQ0k7QUFBTyx5QkFBUyxFQUFFLDRDQUFsQjtBQUNBLHVCQUFPLEVBQUMsUUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQUtJO0FBQ0EseUJBQVMsRUFBRSw0SEFEWDtBQUVBLGtCQUFFLEVBQUMsUUFGSDtBQUdBLHdCQUFRLEVBQUUsa0JBQUNILENBQUQsRUFBSztBQUFDWCxrQkFBQUEsU0FBUyxDQUFDVyxDQUFDLENBQUNJLE1BQUYsQ0FBU0MsS0FBVixDQUFUO0FBQTBCLGlCQUgxQztBQUlBLHFCQUFLLEVBQUVqQjtBQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU5KLGVBa0JJO0FBQUssdUJBQVMsRUFBRSxNQUFoQjtBQUFBLHNDQUNJO0FBQU8seUJBQVMsRUFBRSw0Q0FBbEI7QUFDQSx1QkFBTyxFQUFDLFFBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUFLSTtBQUNBLHlCQUFTLEVBQUUsNEhBRFg7QUFFQSxrQkFBRSxFQUFDLGNBRkg7QUFHQSx3QkFBUSxFQUFFLGtCQUFDWSxDQUFELEVBQUs7QUFBQ1Qsa0JBQUFBLGVBQWUsQ0FBQ1MsQ0FBQyxDQUFDSSxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFnQyxpQkFIaEQ7QUFJRyxxQkFBSyxFQUFFZjtBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWxCSixlQThCSTtBQUFLLHVCQUFTLEVBQUUsTUFBaEI7QUFBQSxzQ0FDSTtBQUFPLHlCQUFTLEVBQUUsNENBQWxCO0FBQ0EsdUJBQU8sRUFBQyxRQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLGVBS0k7QUFDQSx5QkFBUyxFQUFFLDRIQURYO0FBRUEsa0JBQUUsRUFBQyxXQUZIO0FBR0Esd0JBQVEsRUFBRSxrQkFBQ1UsQ0FBRCxFQUFLO0FBQUNQLGtCQUFBQSxZQUFZLENBQUNPLENBQUMsQ0FBQ0ksTUFBRixDQUFTQyxLQUFWLENBQVo7QUFBNkIsaUJBSDdDO0FBSUcscUJBQUssRUFBRWI7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkE5QkosZUEwQ0k7QUFBTyxrQkFBSSxFQUFDLFFBQVo7QUFDQSx1QkFBUyxFQUFFLHVGQURYO0FBRUMsbUJBQUssRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBMUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEwREg7O0dBdEV3QlY7VUFFTlIsb0RBTU9LLDhEQUNMTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcmVkaW9fYWN0dWFsaXphci9bbnVtZVByZWRpYWxBY3R1YWxpemFyXS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9Db250YWluZXInO1xyXG5pbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlUXVlcnksdXNlTXV0YXRpb259ZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IHtncWx9IGZyb20gJ2Fwb2xsby1ib29zdCdcclxuXHJcbmNvbnN0IFVQREFURV9QUkVESU9TID1ncWxgXHJcbiAgICBtdXRhdGlvbiBVcGRhdGVQcmVkaW9CeU51bWVyb1ByZWRpYWwoJG51bWVyb1ByZWRpYWw6SW50ISwkbm9tYnJlOlN0cmluZyEsJGRlcGFydGFtZW50bzpTdHJpbmchLCRtdW5pY2lwaW86U3RyaW5nISl7XHJcbiAgICAgICAgdXBkYXRlUHJlZGlvQnlOdW1lcm9QcmVkaWFsKFxyXG4gICAgICAgICAgICBpbnB1dDoge3ByZWRpb1BhdGNoOiB7ZGVwYXJ0YW1lbnRvOiAkZGVwYXJ0YW1lbnRvLCBtdW5pY2lwaW86ICRtdW5pY2lwaW8sIG5vbWJyZTogJG5vbWJyZX0sIG51bWVyb1ByZWRpYWw6JG51bWVyb1ByZWRpYWx9XHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgY2xpZW50TXV0YXRpb25JZFxyXG4gICAgICAgICAgfVxyXG4gICAgfSAgXHJcbmA7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgIGZ1bmN0aW9uIG51bWVyb1ByZWRpYWxBY3R1YWxpemFyKCl7XHJcblxyXG4gICAgY29uc3Qgcm91dGUgID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IG51bWVyb1ByZWRpYWwgPSBwYXJzZUludChyb3V0ZS5xdWVyeS5udW1lUHJlZGlhbEFjdHVhbGl6YXIpIFxyXG4gICAgY29uc3QgW25vbWJyZSxzZXROb21icmVdID0gdXNlU3RhdGUoJycpIFxyXG4gICAgY29uc3QgW2RlcGFydGFtZW50byxzZXREZXBhcnRhbWVudG9dID0gdXNlU3RhdGUoJycpIFxyXG4gICAgY29uc3QgW211bmljaXBpbyxzZXRNdW5pY2lwaW9dID0gdXNlU3RhdGUoJycpIFxyXG4gICAgY29uc3QgW3RlcnJlbm9JZCxzZXRUZXJyZW5vSWRdID0gdXNlU3RhdGUoKSBcclxuICAgIGNvbnN0IFt1cGRhdGVQcmVkaW9dPSB1c2VNdXRhdGlvbihVUERBVEVfUFJFRElPUylcclxuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlUm91dGVyKCk7XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKHJvdXRlKVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDb250YWluZXIvPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicC00IHRleHQtM3hsIGZvbnQtbGlnaHRcIj5Nb2RpZmljYXIgUHJlZGlvPC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0xMFwiPiAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJ3LWZ1bGwgbWF4LXctM3hsIHAtMyBiZy13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUHJlZGlvKHt2YXJpYWJsZXM6e251bWVyb1ByZWRpYWw6bnVtZXJvUHJlZGlhbCxub21icmU6bm9tYnJlLGRlcGFydGFtZW50bzpkZXBhcnRhbWVudG8sbXVuaWNpcGlvOm11bmljaXBpbyx0ZXJyZW5vSWQ6dGVycmVub0lkfX0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZS5wdXNoKCcvbGlzdGFycHJlZGlvcycpICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID1cImJsb2NrIHRleHQtc20gZm9udC1ib2xkIHRleHQtZ3JheS03MDAgbWQtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm5vbWJyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vbWJyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9XCJ3LWZ1bGwgcHgtMyBweS0yIHRleHQtZ3JheS03MDAgYm9yZGVyIHJvdW5kZWQgc2hhZG93IGFwcGVhcmVuY2Utbm9uZSBsZWFkaW5nLWxpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3R1bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJub21icmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PntzZXROb21icmUoZS50YXJnZXQudmFsdWUpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bm9tYnJlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID1cImJsb2NrIHRleHQtc20gZm9udC1ib2xkIHRleHQtZ3JheS03MDAgbWQtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm5vbWJyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlcGFydGFtZW50b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9XCJ3LWZ1bGwgcHgtMyBweS0yIHRleHQtZ3JheS03MDAgYm9yZGVyIHJvdW5kZWQgc2hhZG93IGFwcGVhcmVuY2Utbm9uZSBsZWFkaW5nLWxpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3R1bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZXBhcnRhbWVudG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PntzZXREZXBhcnRhbWVudG8oZS50YXJnZXQudmFsdWUpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVwYXJ0YW1lbnRvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID1cImJsb2NrIHRleHQtc20gZm9udC1ib2xkIHRleHQtZ3JheS03MDAgbWQtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm5vbWJyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE11bmljaXBpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9XCJ3LWZ1bGwgcHgtMyBweS0yIHRleHQtZ3JheS03MDAgYm9yZGVyIHJvdW5kZWQgc2hhZG93IGFwcGVhcmVuY2Utbm9uZSBsZWFkaW5nLWxpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3R1bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJtdW5pY2lwaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PntzZXRNdW5pY2lwaW8oZS50YXJnZXQudmFsdWUpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bXVuaWNpcGlvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9XCJ3LWZ1bGwgcC0yIG10LTUgZm9udC1ib2xkIHRleHQtd2hpdGUgdXBwZXJjYXNlIGJnLWdyZWVuLTUwMCByb3VuZGVkIGhvdmVyOmJnLWdyYXktOTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIkFncmVnYXIgQ2FtYmlvc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsicm91dGVyIiwidXNlUm91dGVyIiwiQ29udGFpbmVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVF1ZXJ5IiwidXNlTXV0YXRpb24iLCJncWwiLCJVUERBVEVfUFJFRElPUyIsIm51bWVyb1ByZWRpYWxBY3R1YWxpemFyIiwicm91dGUiLCJudW1lcm9QcmVkaWFsIiwicGFyc2VJbnQiLCJxdWVyeSIsIm51bWVQcmVkaWFsQWN0dWFsaXphciIsIm5vbWJyZSIsInNldE5vbWJyZSIsImRlcGFydGFtZW50byIsInNldERlcGFydGFtZW50byIsIm11bmljaXBpbyIsInNldE11bmljaXBpbyIsInRlcnJlbm9JZCIsInNldFRlcnJlbm9JZCIsInVwZGF0ZVByZWRpbyIsIm5hdmlnYXRlIiwiY29uc29sZSIsImxvZyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhcmlhYmxlcyIsInB1c2giLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=