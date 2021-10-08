"use strict";
self["webpackHotUpdate_N_E"]("pages/createpredio",{

/***/ "./pages/createpredio.js":
/*!*******************************!*\
  !*** ./pages/createpredio.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Container */ "./Components/Container.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/index.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\judaz\\Documents\\VS CODE\\Next, Graphql y postgres\\Proyecto Predios\\Client-predios\\pages\\createpredio.js",
    _templateObject,
    _this = undefined,
    _s = $RefreshSig$();






var CREATE_PREDIOS = (0,apollo_boost__WEBPACK_IMPORTED_MODULE_5__.gql)(_templateObject || (_templateObject = (0,C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n    mutation CreatePredio($numeroPredial:Int!,$nombre:String!,$departamento:String!,$municipio:String!,$terrenoId:Int!){\n        createPredio(input: {predio: {numeroPredial: $numeroPredial, nombre: $nombre, departamento:$departamento, municipio: $municipio, terrenoId: $terrenoId}}\n      ) {\n        clientMutationId\n      }\n    }\n    \n"])));

var CreatePredio = function CreatePredio() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
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
      setMinicipio = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      terrenoId = _useState5[0],
      setTerrenoId = _useState5[1];

  var _useMutation = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__.useMutation)(CREATE_PREDIOS),
      _useMutation2 = (0,C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useMutation, 1),
      createPredio = _useMutation2[0];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Components_Container__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
      className: "p-4 text-3xl font-light",
      children: "Crear Nuevo Predio"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "flex justify-center mt-10",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "w-full max-w-3xl p-3 bg-white",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
          onSubmit: function onSubmit(e) {
            e.preventDefault();
            createPredio({
              variables: {
                numeroPredial: numeroPredial,
                nombre: nombre,
                departamento: departamento,
                municipio: municipio,
                terrenoId: terrenoId
              }
            });
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "mb-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
              className: "block text-sm font-bold text-gray-700 md-2",
              htmlFor: "nombre",
              children: "Numero Predial"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 30
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
              className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
              id: "numeroPredial"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 30
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 26
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "mb-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
              className: "block text-sm font-bold text-gray-700 md-2",
              htmlFor: "nombre",
              children: "Nombre"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 30
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
              className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
              id: "nombre"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 30
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 26
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "mb-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
              className: "block text-sm font-bold text-gray-700 md-2",
              htmlFor: "nombre",
              children: "Departamento"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 30
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
              className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
              id: "departamento"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 30
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 26
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "mb-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
              className: "block text-sm font-bold text-gray-700 md-2",
              htmlFor: "nombre",
              children: "Municipio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 30
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
              className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
              id: "municipio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 30
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 26
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "mb-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
              className: "block text-sm font-bold text-gray-700 md-2",
              htmlFor: "nombre",
              children: "Terreno Id"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 30
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
              className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
              id: "terrenoId"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 30
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 26
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "submit",
            className: "w-full p-2 mt-5 font-bold text-white uppercase bg-green-500 rounded hover:bg-gray-900",
            value: "Agregar Predio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 26
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 22
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, _this);
};

_s(CreatePredio, "ksQGXZNY1PSoEJxR5MMs2ryWHQI=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__.useMutation];
});

_c = CreatePredio;
/* harmony default export */ __webpack_exports__["default"] = (CreatePredio);

var _c;

$RefreshReg$(_c, "CreatePredio");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3JlYXRlcHJlZGlvLjQ1OTA3NmFiMTgwZjE2ZmY4NTU5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1NLGNBQWMsR0FBRUQsaURBQUYscWtCQUFwQjs7QUFVQSxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBRXZCLGtCQUFrQ04sK0NBQVEsQ0FBQyxFQUFELENBQTFDO0FBQUEsTUFBT08sYUFBUDtBQUFBLE1BQXFCQyxTQUFyQjs7QUFDQSxtQkFBMkJSLCtDQUFRLENBQUMsRUFBRCxDQUFuQztBQUFBLE1BQU9TLE1BQVA7QUFBQSxNQUFjQyxTQUFkOztBQUNBLG1CQUF1Q1YsK0NBQVEsQ0FBQyxFQUFELENBQS9DO0FBQUEsTUFBT1csWUFBUDtBQUFBLE1BQW9CQyxlQUFwQjs7QUFDQSxtQkFBaUNaLCtDQUFRLENBQUMsRUFBRCxDQUF6QztBQUFBLE1BQU9hLFNBQVA7QUFBQSxNQUFpQkMsWUFBakI7O0FBQ0EsbUJBQWlDZCwrQ0FBUSxDQUFDLEVBQUQsQ0FBekM7QUFBQSxNQUFPZSxTQUFQO0FBQUEsTUFBaUJDLFlBQWpCOztBQUNBLHFCQUFzQmIsZ0VBQVcsQ0FBQ0UsY0FBRCxDQUFqQztBQUFBO0FBQUEsTUFBT1ksWUFBUDs7QUFFQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUksZUFBUyxFQUFDLHlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFJSTtBQUFLLGVBQVMsRUFBRSwyQkFBaEI7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUUsK0JBQWhCO0FBQUEsK0JBQ0s7QUFBTSxrQkFBUSxFQUFFLGtCQUFDQyxDQUFELEVBQUs7QUFDZEEsWUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FGLFlBQUFBLFlBQVksQ0FBQztBQUFDRyxjQUFBQSxTQUFTLEVBQUM7QUFBQ2IsZ0JBQUFBLGFBQWEsRUFBQ0EsYUFBZjtBQUE2QkUsZ0JBQUFBLE1BQU0sRUFBQ0EsTUFBcEM7QUFBMkNFLGdCQUFBQSxZQUFZLEVBQUNBLFlBQXhEO0FBQXFFRSxnQkFBQUEsU0FBUyxFQUFDQSxTQUEvRTtBQUF5RkUsZ0JBQUFBLFNBQVMsRUFBQ0E7QUFBbkc7QUFBWCxhQUFELENBQVo7QUFDSCxXQUhKO0FBQUEsa0NBSUk7QUFBSyxxQkFBUyxFQUFFLE1BQWhCO0FBQUEsb0NBQ0k7QUFBTyx1QkFBUyxFQUFFLDRDQUFsQjtBQUNBLHFCQUFPLEVBQUMsUUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUtJO0FBQ0EsdUJBQVMsRUFBRSw0SEFEWDtBQUVBLGdCQUFFLEVBQUM7QUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSixlQWNJO0FBQUsscUJBQVMsRUFBRSxNQUFoQjtBQUFBLG9DQUNJO0FBQU8sdUJBQVMsRUFBRSw0Q0FBbEI7QUFDQSxxQkFBTyxFQUFDLFFBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFLSTtBQUNBLHVCQUFTLEVBQUUsNEhBRFg7QUFFQSxnQkFBRSxFQUFDO0FBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZEosZUF3Qkk7QUFBSyxxQkFBUyxFQUFFLE1BQWhCO0FBQUEsb0NBQ0k7QUFBTyx1QkFBUyxFQUFFLDRDQUFsQjtBQUNBLHFCQUFPLEVBQUMsUUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUtJO0FBQ0EsdUJBQVMsRUFBRSw0SEFEWDtBQUVBLGdCQUFFLEVBQUM7QUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF4QkosZUFrQ0k7QUFBSyxxQkFBUyxFQUFFLE1BQWhCO0FBQUEsb0NBQ0k7QUFBTyx1QkFBUyxFQUFFLDRDQUFsQjtBQUNBLHFCQUFPLEVBQUMsUUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUtJO0FBQ0EsdUJBQVMsRUFBRSw0SEFEWDtBQUVBLGdCQUFFLEVBQUM7QUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFsQ0osZUE0Q0k7QUFBSyxxQkFBUyxFQUFFLE1BQWhCO0FBQUEsb0NBQ0k7QUFBTyx1QkFBUyxFQUFFLDRDQUFsQjtBQUNBLHFCQUFPLEVBQUMsUUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUtJO0FBQ0EsdUJBQVMsRUFBRSw0SEFEWDtBQUVBLGdCQUFFLEVBQUM7QUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE1Q0osZUFzREk7QUFBTyxnQkFBSSxFQUFDLFFBQVo7QUFDQSxxQkFBUyxFQUFFLHVGQURYO0FBRUMsaUJBQUssRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBdERKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFxRUgsQ0E5RUQ7O0dBQU1UO1VBT29CSDs7O0tBUHBCRztBQWdGTiwrREFBZUEsWUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jcmVhdGVwcmVkaW8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGFpbmVyJztcclxuaW1wb3J0IHt1c2VRdWVyeSx1c2VNdXRhdGlvbn1mcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQge2dxbH0gZnJvbSAnYXBvbGxvLWJvb3N0J1xyXG5cclxuY29uc3QgQ1JFQVRFX1BSRURJT1MgPWdxbGBcclxuICAgIG11dGF0aW9uIENyZWF0ZVByZWRpbygkbnVtZXJvUHJlZGlhbDpJbnQhLCRub21icmU6U3RyaW5nISwkZGVwYXJ0YW1lbnRvOlN0cmluZyEsJG11bmljaXBpbzpTdHJpbmchLCR0ZXJyZW5vSWQ6SW50ISl7XHJcbiAgICAgICAgY3JlYXRlUHJlZGlvKGlucHV0OiB7cHJlZGlvOiB7bnVtZXJvUHJlZGlhbDogJG51bWVyb1ByZWRpYWwsIG5vbWJyZTogJG5vbWJyZSwgZGVwYXJ0YW1lbnRvOiRkZXBhcnRhbWVudG8sIG11bmljaXBpbzogJG11bmljaXBpbywgdGVycmVub0lkOiAkdGVycmVub0lkfX1cclxuICAgICAgKSB7XHJcbiAgICAgICAgY2xpZW50TXV0YXRpb25JZFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuYDtcclxuXHJcbmNvbnN0IENyZWF0ZVByZWRpbyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbbnVtZXJvUHJlZGlhbCxzZXROdW1lcm9dID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbbm9tYnJlLHNldE5vbWJyZV0gPSB1c2VTdGF0ZSgnJykgXHJcbiAgICBjb25zdCBbZGVwYXJ0YW1lbnRvLHNldERlcGFydGFtZW50b10gPSB1c2VTdGF0ZSgnJykgXHJcbiAgICBjb25zdCBbbXVuaWNpcGlvLHNldE1pbmljaXBpb10gPSB1c2VTdGF0ZSgnJykgXHJcbiAgICBjb25zdCBbdGVycmVub0lkLHNldFRlcnJlbm9JZF0gPSB1c2VTdGF0ZSgnJykgXHJcbiAgICBjb25zdCBbY3JlYXRlUHJlZGlvXT0gdXNlTXV0YXRpb24oQ1JFQVRFX1BSRURJT1MpXHJcblxyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPENvbnRhaW5lci8+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwLTQgdGV4dC0zeGwgZm9udC1saWdodFwiPkNyZWFyIE51ZXZvIFByZWRpbzwvaDE+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTEwXCI+ICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cInctZnVsbCBtYXgtdy0zeGwgcC0zIGJnLXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVByZWRpbyh7dmFyaWFibGVzOntudW1lcm9QcmVkaWFsOm51bWVyb1ByZWRpYWwsbm9tYnJlOm5vbWJyZSxkZXBhcnRhbWVudG86ZGVwYXJ0YW1lbnRvLG11bmljaXBpbzptdW5pY2lwaW8sdGVycmVub0lkOnRlcnJlbm9JZH19KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9XCJibG9jayB0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIG1kLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJub21icmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1lcm8gUHJlZGlhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9XCJ3LWZ1bGwgcHgtMyBweS0yIHRleHQtZ3JheS03MDAgYm9yZGVyIHJvdW5kZWQgc2hhZG93IGFwcGVhcmVuY2Utbm9uZSBsZWFkaW5nLWxpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3R1bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJudW1lcm9QcmVkaWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9XCJibG9jayB0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIG1kLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJub21icmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb21icmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwidy1mdWxsIHB4LTMgcHktMiB0ZXh0LWdyYXktNzAwIGJvcmRlciByb3VuZGVkIHNoYWRvdyBhcHBlYXJlbmNlLW5vbmUgbGVhZGluZy1saWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW90dWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibm9tYnJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9XCJibG9jayB0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIG1kLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJub21icmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXBhcnRhbWVudG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwidy1mdWxsIHB4LTMgcHktMiB0ZXh0LWdyYXktNzAwIGJvcmRlciByb3VuZGVkIHNoYWRvdyBhcHBlYXJlbmNlLW5vbmUgbGVhZGluZy1saWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW90dWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVwYXJ0YW1lbnRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9XCJibG9jayB0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIG1kLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJub21icmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNdW5pY2lwaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwidy1mdWxsIHB4LTMgcHktMiB0ZXh0LWdyYXktNzAwIGJvcmRlciByb3VuZGVkIHNoYWRvdyBhcHBlYXJlbmNlLW5vbmUgbGVhZGluZy1saWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW90dWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibXVuaWNpcGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9XCJibG9jayB0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIG1kLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJub21icmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXJyZW5vIElkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID1cInctZnVsbCBweC0zIHB5LTIgdGV4dC1ncmF5LTcwMCBib3JkZXIgcm91bmRlZCBzaGFkb3cgYXBwZWFyZW5jZS1ub25lIGxlYWRpbmctbGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdHVsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRlcnJlbm9JZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID1cInctZnVsbCBwLTIgbXQtNSBmb250LWJvbGQgdGV4dC13aGl0ZSB1cHBlcmNhc2UgYmctZ3JlZW4tNTAwIHJvdW5kZWQgaG92ZXI6YmctZ3JheS05MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiQWdyZWdhciBQcmVkaW9cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVQcmVkaW87Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDb250YWluZXIiLCJ1c2VRdWVyeSIsInVzZU11dGF0aW9uIiwiZ3FsIiwiQ1JFQVRFX1BSRURJT1MiLCJDcmVhdGVQcmVkaW8iLCJudW1lcm9QcmVkaWFsIiwic2V0TnVtZXJvIiwibm9tYnJlIiwic2V0Tm9tYnJlIiwiZGVwYXJ0YW1lbnRvIiwic2V0RGVwYXJ0YW1lbnRvIiwibXVuaWNpcGlvIiwic2V0TWluaWNpcGlvIiwidGVycmVub0lkIiwic2V0VGVycmVub0lkIiwiY3JlYXRlUHJlZGlvIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFyaWFibGVzIl0sInNvdXJjZVJvb3QiOiIifQ==