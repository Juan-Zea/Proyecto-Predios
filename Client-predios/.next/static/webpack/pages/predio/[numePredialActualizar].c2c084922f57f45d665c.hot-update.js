"use strict";
self["webpackHotUpdate_N_E"]("pages/predio/[numePredialActualizar]",{

/***/ "./pages/predio/[numePredialActualizar].js":
/*!*************************************************!*\
  !*** ./pages/predio/[numePredialActualizar].js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ numeroPredialActualizar; }
/* harmony export */ });
/* harmony import */ var C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/index.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\judaz\\Documents\\VS CODE\\Next, Graphql y postgres\\Proyecto Predios\\Client-predios\\pages\\predio\\[numePredialActualizar].js",
    _templateObject,
    _s = $RefreshSig$();






var UPDATE_PREDIOS = (0,apollo_boost__WEBPACK_IMPORTED_MODULE_5__.gql)(_templateObject || (_templateObject = (0,C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n    mutation UpdatePredioByNumeroPredial($numeroPredial:Int!,$nombre:String!,$departamento:String!,$municipio:String!){\n        updatePredioByNumeroPredial(\n            input: {predioPatch: {departamento: $departamento, municipio: $municipio, nombre: $nombre}, numeroPredial:$numeroPredial}\n          ) {\n            clientMutationId\n          }\n    }  \n"])));
function numeroPredialActualizar() {
  _s();

  var route = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      numeroPredial = _useState[0],
      setNumero = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      nombre = _useState2[0],
      setNombre = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      departamento = _useState3[0],
      setDepartamento = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      municipio = _useState4[0],
      setMunicipio = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),
      terrenoId = _useState5[0],
      setTerrenoId = _useState5[1];

  var _useMutation = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__.useMutation)(UPDATE_PREDIOS),
      _useMutation2 = (0,C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useMutation, 1),
      updatePredio = _useMutation2[0];

  var navigate = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  console.log(route);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
        className: "p-4 text-3xl font-light",
        children: "Modificar Predio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "flex justify-center mt-10",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "w-full max-w-3xl p-3 bg-white",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
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
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "mb-4",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
                className: "block text-sm font-bold text-gray-700 md-2",
                htmlFor: "nombre",
                children: "Numero"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 30
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
                className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
                id: "nombre",
                onChange: function onChange(e) {
                  setNumero(parseInt(e.target.value));
                },
                value: numeroPredial
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 30
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "mb-4",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
                className: "block text-sm font-bold text-gray-700 md-2",
                htmlFor: "nombre",
                children: "Nombre"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 30
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
                className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
                id: "nombre",
                onChange: function onChange(e) {
                  setNombre(e.target.value);
                },
                value: nombre
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 30
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 26
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "mb-4",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
                className: "block text-sm font-bold text-gray-700 md-2",
                htmlFor: "nombre",
                children: "Departamento"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 30
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
                className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
                id: "departamento",
                onChange: function onChange(e) {
                  setDepartamento(e.target.value);
                },
                value: departamento
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 30
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 26
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "mb-4",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
                className: "block text-sm font-bold text-gray-700 md-2",
                htmlFor: "nombre",
                children: "Municipio"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 30
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
                className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
                id: "municipio",
                onChange: function onChange(e) {
                  setMunicipio(e.target.value);
                },
                value: municipio
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 30
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 26
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "mb-4",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
                className: "block text-sm font-bold text-gray-700 md-2",
                htmlFor: "nombre",
                children: "Terreno Id"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 30
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
                type: "text",
                className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
                id: "terrenoId",
                onChange: function onChange(e) {
                  setTerrenoId(parseInt(e.target.value));
                },
                value: terrenoId
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 30
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 26
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
              type: "submit",
              className: "w-full p-2 mt-5 font-bold text-white uppercase bg-green-500 rounded hover:bg-gray-900",
              value: "Agregar Cambios"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
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
      lineNumber: 32,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }, this);
}

_s(numeroPredialActualizar, "mCuoapsq6JhFLt/OSnwG9yxCdwY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter, _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__.useMutation, next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJlZGlvL1tudW1lUHJlZGlhbEFjdHVhbGl6YXJdLmMyYzA4NDkyMmY1N2Y0NWQ2NjVjLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1PLGNBQWMsR0FBRUQsaURBQUYsdWxCQUFwQjtBQVdnQixTQUFTRSx1QkFBVCxHQUFrQztBQUFBOztBQUU5QyxNQUFNQyxLQUFLLEdBQUlSLHNEQUFTLEVBQXhCOztBQUVBLGtCQUFrQ0UsK0NBQVEsQ0FBQyxFQUFELENBQTFDO0FBQUEsTUFBT08sYUFBUDtBQUFBLE1BQXFCQyxTQUFyQjs7QUFDQSxtQkFBMkJSLCtDQUFRLENBQUMsRUFBRCxDQUFuQztBQUFBLE1BQU9TLE1BQVA7QUFBQSxNQUFjQyxTQUFkOztBQUNBLG1CQUF1Q1YsK0NBQVEsQ0FBQyxFQUFELENBQS9DO0FBQUEsTUFBT1csWUFBUDtBQUFBLE1BQW9CQyxlQUFwQjs7QUFDQSxtQkFBaUNaLCtDQUFRLENBQUMsRUFBRCxDQUF6QztBQUFBLE1BQU9hLFNBQVA7QUFBQSxNQUFpQkMsWUFBakI7O0FBQ0EsbUJBQWlDZCwrQ0FBUSxFQUF6QztBQUFBLE1BQU9lLFNBQVA7QUFBQSxNQUFpQkMsWUFBakI7O0FBQ0EscUJBQXNCZCxnRUFBVyxDQUFDRSxjQUFELENBQWpDO0FBQUE7QUFBQSxNQUFPYSxZQUFQOztBQUNBLE1BQU1DLFFBQVEsR0FBR3BCLHNEQUFTLEVBQTFCO0FBRUFxQixFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWQsS0FBWjtBQUNBLHNCQUNJO0FBQUEsMkJBQ0k7QUFBQSw4QkFDQTtBQUFJLGlCQUFTLEVBQUMseUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUVBO0FBQUssaUJBQVMsRUFBRSwyQkFBaEI7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUUsK0JBQWhCO0FB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QVMsRUFBRSw0Q0FBbEI7QUFDQSx1QkFBTyxFQUFDLFFBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUFLSTtBQUNBLG9CQUFJLEVBQUMsTUFETDtBQUVBLHlCQUFTLEVBQUUsNEhBRlg7QUFHQSxrQkFBRSxFQUFDLFdBSEg7QUFJQSx3QkFBUSxFQUFFLGtCQUFDUSxDQUFELEVBQUs7QUFBQ0wsa0JBQUFBLFlBQVksQ0FBQ1MsUUFBUSxDQUFDSixDQUFDLENBQUNLLE1BQUYsQ0FBU0MsS0FBVixDQUFULENBQVo7QUFBdUMsaUJBSnZEO0FBS0cscUJBQUssRUFBRVo7QUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkF2REosZUFvRUk7QUFBTyxrQkFBSSxFQUFDLFFBQVo7QUFDQSx1QkFBUyxFQUFFLHVGQURYO0FBRUMsbUJBQUssRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBcEVKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBbUZIOztHQWhHd0JWO1VBRU5QLG9EQU9PSSw4REFDTEoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJlZGlvL1tudW1lUHJlZGlhbEFjdHVhbGl6YXJdLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZVF1ZXJ5LHVzZU11dGF0aW9ufWZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCB7Z3FsfSBmcm9tICdhcG9sbG8tYm9vc3QnXHJcblxyXG5jb25zdCBVUERBVEVfUFJFRElPUyA9Z3FsYFxyXG4gICAgbXV0YXRpb24gVXBkYXRlUHJlZGlvQnlOdW1lcm9QcmVkaWFsKCRudW1lcm9QcmVkaWFsOkludCEsJG5vbWJyZTpTdHJpbmchLCRkZXBhcnRhbWVudG86U3RyaW5nISwkbXVuaWNpcGlvOlN0cmluZyEpe1xyXG4gICAgICAgIHVwZGF0ZVByZWRpb0J5TnVtZXJvUHJlZGlhbChcclxuICAgICAgICAgICAgaW5wdXQ6IHtwcmVkaW9QYXRjaDoge2RlcGFydGFtZW50bzogJGRlcGFydGFtZW50bywgbXVuaWNpcGlvOiAkbXVuaWNpcGlvLCBub21icmU6ICRub21icmV9LCBudW1lcm9QcmVkaWFsOiRudW1lcm9QcmVkaWFsfVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNsaWVudE11dGF0aW9uSWRcclxuICAgICAgICAgIH1cclxuICAgIH0gIFxyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICBmdW5jdGlvbiBudW1lcm9QcmVkaWFsQWN0dWFsaXphcigpe1xyXG5cclxuICAgIGNvbnN0IHJvdXRlICA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgY29uc3QgW251bWVyb1ByZWRpYWwsc2V0TnVtZXJvXSA9IHVzZVN0YXRlKCcnKSBcclxuICAgIGNvbnN0IFtub21icmUsc2V0Tm9tYnJlXSA9IHVzZVN0YXRlKCcnKSBcclxuICAgIGNvbnN0IFtkZXBhcnRhbWVudG8sc2V0RGVwYXJ0YW1lbnRvXSA9IHVzZVN0YXRlKCcnKSBcclxuICAgIGNvbnN0IFttdW5pY2lwaW8sc2V0TXVuaWNpcGlvXSA9IHVzZVN0YXRlKCcnKSBcclxuICAgIGNvbnN0IFt0ZXJyZW5vSWQsc2V0VGVycmVub0lkXSA9IHVzZVN0YXRlKCkgXHJcbiAgICBjb25zdCBbdXBkYXRlUHJlZGlvXT0gdXNlTXV0YXRpb24oVVBEQVRFX1BSRURJT1MpXHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZVJvdXRlcigpO1xyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhyb3V0ZSlcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicC00IHRleHQtM3hsIGZvbnQtbGlnaHRcIj5Nb2RpZmljYXIgUHJlZGlvPC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0xMFwiPiAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJ3LWZ1bGwgbWF4LXctM3hsIHAtMyBiZy13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUHJlZGlvKHt2YXJpYWJsZXM6e251bWVyb1ByZWRpYWw6bnVtZXJvUHJlZGlhbCxub21icmU6bm9tYnJlLGRlcGFydGFtZW50bzpkZXBhcnRhbWVudG8sbXVuaWNpcGlvOm11bmljaXBpbyx0ZXJyZW5vSWQ6dGVycmVub0lkfX0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZS5wdXNoKCcvbGlzdGFycHJlZGlvcycpICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID1cImJsb2NrIHRleHQtc20gZm9udC1ib2xkIHRleHQtZ3JheS03MDAgbWQtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm5vbWJyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWVyb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9XCJ3LWZ1bGwgcHgtMyBweS0yIHRleHQtZ3JheS03MDAgYm9yZGVyIHJvdW5kZWQgc2hhZG93IGFwcGVhcmVuY2Utbm9uZSBsZWFkaW5nLWxpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3R1bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJub21icmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PntzZXROdW1lcm8ocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e251bWVyb1ByZWRpYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPVwiYmxvY2sgdGV4dC1zbSBmb250LWJvbGQgdGV4dC1ncmF5LTcwMCBtZC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwibm9tYnJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm9tYnJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID1cInctZnVsbCBweC0zIHB5LTIgdGV4dC1ncmF5LTcwMCBib3JkZXIgcm91bmRlZCBzaGFkb3cgYXBwZWFyZW5jZS1ub25lIGxlYWRpbmctbGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdHVsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+e3NldE5vbWJyZShlLnRhcmdldC52YWx1ZSl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtub21icmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPVwiYmxvY2sgdGV4dC1zbSBmb250LWJvbGQgdGV4dC1ncmF5LTcwMCBtZC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwibm9tYnJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVwYXJ0YW1lbnRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID1cInctZnVsbCBweC0zIHB5LTIgdGV4dC1ncmF5LTcwMCBib3JkZXIgcm91bmRlZCBzaGFkb3cgYXBwZWFyZW5jZS1ub25lIGxlYWRpbmctbGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdHVsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRlcGFydGFtZW50b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+e3NldERlcGFydGFtZW50byhlLnRhcmdldC52YWx1ZSl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXBhcnRhbWVudG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPVwiYmxvY2sgdGV4dC1zbSBmb250LWJvbGQgdGV4dC1ncmF5LTcwMCBtZC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwibm9tYnJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTXVuaWNpcGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID1cInctZnVsbCBweC0zIHB5LTIgdGV4dC1ncmF5LTcwMCBib3JkZXIgcm91bmRlZCBzaGFkb3cgYXBwZWFyZW5jZS1ub25lIGxlYWRpbmctbGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdHVsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm11bmljaXBpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+e3NldE11bmljaXBpbyhlLnRhcmdldC52YWx1ZSl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttdW5pY2lwaW99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPVwiYmxvY2sgdGV4dC1zbSBmb250LWJvbGQgdGV4dC1ncmF5LTcwMCBtZC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwibm9tYnJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVycmVubyBJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwidy1mdWxsIHB4LTMgcHktMiB0ZXh0LWdyYXktNzAwIGJvcmRlciByb3VuZGVkIHNoYWRvdyBhcHBlYXJlbmNlLW5vbmUgbGVhZGluZy1saWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW90dWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidGVycmVub0lkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT57c2V0VGVycmVub0lkKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0ZXJyZW5vSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID1cInctZnVsbCBwLTIgbXQtNSBmb250LWJvbGQgdGV4dC13aGl0ZSB1cHBlcmNhc2UgYmctZ3JlZW4tNTAwIHJvdW5kZWQgaG92ZXI6YmctZ3JheS05MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiQWdyZWdhciBDYW1iaW9zXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlUXVlcnkiLCJ1c2VNdXRhdGlvbiIsImdxbCIsIlVQREFURV9QUkVESU9TIiwibnVtZXJvUHJlZGlhbEFjdHVhbGl6YXIiLCJyb3V0ZSIsIm51bWVyb1ByZWRpYWwiLCJzZXROdW1lcm8iLCJub21icmUiLCJzZXROb21icmUiLCJkZXBhcnRhbWVudG8iLCJzZXREZXBhcnRhbWVudG8iLCJtdW5pY2lwaW8iLCJzZXRNdW5pY2lwaW8iLCJ0ZXJyZW5vSWQiLCJzZXRUZXJyZW5vSWQiLCJ1cGRhdGVQcmVkaW8iLCJuYXZpZ2F0ZSIsImNvbnNvbGUiLCJsb2ciLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YXJpYWJsZXMiLCJwdXNoIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=