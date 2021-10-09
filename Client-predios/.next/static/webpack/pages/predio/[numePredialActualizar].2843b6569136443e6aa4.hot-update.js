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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\judaz\\Documents\\VS CODE\\Next, Graphql y postgres\\Proyecto Predios\\Client-predios\\pages\\predio\\[numePredialActualizar].js",
    _s = $RefreshSig$();



function numeroPredialActualizar() {
  _s();

  var route = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  console.log(route);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        className: "p-4 text-3xl font-light",
        children: "Modificar Predio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "flex justify-center mt-10",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "w-full max-w-3xl p-3 bg-white",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
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
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "mb-4",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
                className: "block text-sm font-bold text-gray-700 md-2",
                htmlFor: "nombre",
                children: "Numero"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 30
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
                className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
                id: "nombre",
                onChange: function onChange(e) {
                  setNumero(parseInt(e.target.value));
                },
                value: numeroPredial
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 30
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "mb-4",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
                className: "block text-sm font-bold text-gray-700 md-2",
                htmlFor: "nombre",
                children: "Nombre"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 30
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
                className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
                id: "nombre",
                onChange: function onChange(e) {
                  setNombre(e.target.value);
                },
                value: nombre
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 30
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 26
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "mb-4",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
                className: "block text-sm font-bold text-gray-700 md-2",
                htmlFor: "nombre",
                children: "Departamento"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 30
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
                className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
                id: "departamento",
                onChange: function onChange(e) {
                  setDepartamento(e.target.value);
                },
                value: departamento
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 30
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 26
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "mb-4",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
                className: "block text-sm font-bold text-gray-700 md-2",
                htmlFor: "nombre",
                children: "Municipio"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 30
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
                className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
                id: "municipio",
                onChange: function onChange(e) {
                  setMunicipio(e.target.value);
                },
                value: municipio
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 30
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 26
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "mb-4",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
                className: "block text-sm font-bold text-gray-700 md-2",
                htmlFor: "nombre",
                children: "Terreno Id"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 30
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
                type: "text",
                className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
                id: "terrenoId",
                onChange: function onChange(e) {
                  setTerrenoId(parseInt(e.target.value));
                },
                value: terrenoId
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 30
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 26
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
              type: "submit",
              className: "w-full p-2 mt-5 font-bold text-white uppercase bg-green-500 rounded hover:bg-gray-900",
              value: "Agregar Cambios"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 26
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 22
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

_s(numeroPredialActualizar, "JD5qVJBo0MNDbUb5oI+DMKChels=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJlZGlvL1tudW1lUHJlZGlhbEFjdHVhbGl6YXJdLjI4NDNiNjU2OTEzNjQ0M2U2YWE0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRWdCLFNBQVNFLHVCQUFULEdBQWtDO0FBQUE7O0FBRTlDLE1BQU1DLEtBQUssR0FBSUYsc0RBQVMsRUFBeEI7QUFFQUcsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDQSxzQkFDSTtBQUFBLDJCQUNJO0FBQUEsOEJBQ0EsOERBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFFQTtBQUFJLGlCQUFTLEVBQUMseUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQSxlQUdBO0FBQUssaUJBQVMsRUFBRSwyQkFBaEI7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUUsK0JBQWhCO0FBQUEsaUNBQ0s7QUFBTSxvQkFBUSxFQUFFLGtCQUFDRyxDQUFELEVBQUs7QUFDZEEsY0FBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0NDLGNBQUFBLFlBQVksQ0FBQztBQUFDQyxnQkFBQUEsU0FBUyxFQUFDO0FBQUNDLGtCQUFBQSxhQUFhLEVBQUNBLGFBQWY7QUFBNkJDLGtCQUFBQSxNQUFNLEVBQUNBLE1BQXBDO0FBQTJDQyxrQkFBQUEsWUFBWSxFQUFDQSxZQUF4RDtBQUFxRUMsa0JBQUFBLFNBQVMsRUFBQ0EsU0FBL0U7QUFBeUZDLGtCQUFBQSxTQUFTLEVBQUNBO0FBQW5HO0FBQVgsZUFBRCxDQUFaO0FBQ0FDLGNBQUFBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjLGdCQUFkO0FBQ0osYUFKSjtBQUFBLG9DQU9HO0FBQUssdUJBQVMsRUFBRSxNQUFoQjtBQUFBLHNDQUNLO0FBQU8seUJBQVMsRUFBRSw0Q0FBbEI7QUFDQSx1QkFBTyxFQUFDLFFBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREwsZUFLSztBQUNBLHlCQUFTLEVBQUUsNEhBRFg7QUFFQSxrQkFBRSxFQUFDLFFBRkg7QUFHQSx3QkFBUSxFQUFFLGtCQUFDVixDQUFELEVBQUs7QUFBQ1csa0JBQUFBLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDWixDQUFDLENBQUNhLE1BQUYsQ0FBU0MsS0FBVixDQUFULENBQVQ7QUFBb0MsaUJBSHBEO0FBSUEscUJBQUssRUFBRVY7QUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFQSCxlQW1CSTtBQUFLLHVCQUFTLEVBQUUsTUFBaEI7QUFBQSxzQ0FDSTtBQUFPLHlCQUFTLEVBQUUsNENBQWxCO0FBQ0EsdUJBQU8sRUFBQyxRQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLGVBS0k7QUFDQSx5QkFBUyxFQUFFLDRIQURYO0FBRUEsa0JBQUUsRUFBQyxRQUZIO0FBR0Esd0JBQVEsRUFBRSxrQkFBQ0osQ0FBRCxFQUFLO0FBQUNlLGtCQUFBQSxTQUFTLENBQUNmLENBQUMsQ0FBQ2EsTUFBRixDQUFTQyxLQUFWLENBQVQ7QUFBMEIsaUJBSDFDO0FBSUEscUJBQUssRUFBRVQ7QUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFuQkosZUErQkk7QUFBSyx1QkFBUyxFQUFFLE1BQWhCO0FBQUEsc0NBQ0k7QUFBTyx5QkFBUyxFQUFFLDRDQUFsQjtBQUNBLHVCQUFPLEVBQUMsUUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQUtJO0FBQ0EseUJBQVMsRUFBRSw0SEFEWDtBQUVBLGtCQUFFLEVBQUMsY0FGSDtBQUdBLHdCQUFRLEVBQUUsa0JBQUNMLENBQUQsRUFBSztBQUFDZ0Isa0JBQUFBLGVBQWUsQ0FBQ2hCLENBQUMsQ0FBQ2EsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFBZ0MsaUJBSGhEO0FBSUcscUJBQUssRUFBRVI7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkEvQkosZUEyQ0k7QUFBSyx1QkFBUyxFQUFFLE1BQWhCO0FBQUEsc0NBQ0k7QUFBTyx5QkFBUyxFQUFFLDRDQUFsQjtBQUNBLHVCQUFPLEVBQUMsUUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQUtJO0FBQ0EseUJBQVMsRUFBRSw0SEFEWDtBQUVBLGtCQUFFLEVBQUMsV0FGSDtBQUdBLHdCQUFRLEVBQUUsa0JBQUNOLENBQUQsRUFBSztBQUFDaUIsa0JBQUFBLFlBQVksQ0FBQ2pCLENBQUMsQ0FBQ2EsTUFBRixDQUFTQyxLQUFWLENBQVo7QUFBNkIsaUJBSDdDO0FBSUcscUJBQUssRUFBRVA7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkEzQ0osZUF1REk7QUFBSyx1QkFBUyxFQUFFLE1BQWhCO0FBQUEsc0NBQ0k7QUFBTyx5QkFBUyxFQUFFLDRDQUFsQjtBQUNBLHVCQUFPLEVBQUMsUUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQUtJO0FBQ0Esb0JBQUksRUFBQyxNQURMO0FBRUEseUJBQVMsRUFBRSw0SEFGWDtBQUdBLGtCQUFFLEVBQUMsV0FISDtBQUlBLHdCQUFRLEVBQUUsa0JBQUNQLENBQUQsRUFBSztBQUFDa0Isa0JBQUFBLFlBQVksQ0FBQ04sUUFBUSxDQUFDWixDQUFDLENBQUNhLE1BQUYsQ0FBU0MsS0FBVixDQUFULENBQVo7QUFBdUMsaUJBSnZEO0FBS0cscUJBQUssRUFBRU47QUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkF2REosZUFvRUk7QUFBTyxrQkFBSSxFQUFDLFFBQVo7QUFDQSx1QkFBUyxFQUFFLHVGQURYO0FBRUMsbUJBQUssRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBcEVKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBb0ZIOztHQXpGd0JaO1VBRU5EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3ByZWRpby9bbnVtZVByZWRpYWxBY3R1YWxpemFyXS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCAgZnVuY3Rpb24gbnVtZXJvUHJlZGlhbEFjdHVhbGl6YXIoKXtcclxuXHJcbiAgICBjb25zdCByb3V0ZSAgPSB1c2VSb3V0ZXIoKVxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhyb3V0ZSlcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyLz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInAtNCB0ZXh0LTN4bCBmb250LWxpZ2h0XCI+TW9kaWZpY2FyIFByZWRpbzwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtMTBcIj4gIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwidy1mdWxsIG1heC13LTN4bCBwLTMgYmctd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVByZWRpbyh7dmFyaWFibGVzOntudW1lcm9QcmVkaWFsOm51bWVyb1ByZWRpYWwsbm9tYnJlOm5vbWJyZSxkZXBhcnRhbWVudG86ZGVwYXJ0YW1lbnRvLG11bmljaXBpbzptdW5pY2lwaW8sdGVycmVub0lkOnRlcnJlbm9JZH19ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGUucHVzaCgnL2xpc3RhcnByZWRpb3MnKSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9XCJibG9jayB0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIG1kLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJub21icmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1lcm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwidy1mdWxsIHB4LTMgcHktMiB0ZXh0LWdyYXktNzAwIGJvcmRlciByb3VuZGVkIHNoYWRvdyBhcHBlYXJlbmNlLW5vbmUgbGVhZGluZy1saWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW90dWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibm9tYnJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT57c2V0TnVtZXJvKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtudW1lcm9QcmVkaWFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID1cImJsb2NrIHRleHQtc20gZm9udC1ib2xkIHRleHQtZ3JheS03MDAgbWQtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm5vbWJyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vbWJyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9XCJ3LWZ1bGwgcHgtMyBweS0yIHRleHQtZ3JheS03MDAgYm9yZGVyIHJvdW5kZWQgc2hhZG93IGFwcGVhcmVuY2Utbm9uZSBsZWFkaW5nLWxpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3R1bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJub21icmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PntzZXROb21icmUoZS50YXJnZXQudmFsdWUpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bm9tYnJlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID1cImJsb2NrIHRleHQtc20gZm9udC1ib2xkIHRleHQtZ3JheS03MDAgbWQtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm5vbWJyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlcGFydGFtZW50b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9XCJ3LWZ1bGwgcHgtMyBweS0yIHRleHQtZ3JheS03MDAgYm9yZGVyIHJvdW5kZWQgc2hhZG93IGFwcGVhcmVuY2Utbm9uZSBsZWFkaW5nLWxpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3R1bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZXBhcnRhbWVudG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PntzZXREZXBhcnRhbWVudG8oZS50YXJnZXQudmFsdWUpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVwYXJ0YW1lbnRvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID1cImJsb2NrIHRleHQtc20gZm9udC1ib2xkIHRleHQtZ3JheS03MDAgbWQtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm5vbWJyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE11bmljaXBpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9XCJ3LWZ1bGwgcHgtMyBweS0yIHRleHQtZ3JheS03MDAgYm9yZGVyIHJvdW5kZWQgc2hhZG93IGFwcGVhcmVuY2Utbm9uZSBsZWFkaW5nLWxpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3R1bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJtdW5pY2lwaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PntzZXRNdW5pY2lwaW8oZS50YXJnZXQudmFsdWUpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bXVuaWNpcGlvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID1cImJsb2NrIHRleHQtc20gZm9udC1ib2xkIHRleHQtZ3JheS03MDAgbWQtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm5vbWJyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlcnJlbm8gSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID1cInctZnVsbCBweC0zIHB5LTIgdGV4dC1ncmF5LTcwMCBib3JkZXIgcm91bmRlZCBzaGFkb3cgYXBwZWFyZW5jZS1ub25lIGxlYWRpbmctbGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdHVsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRlcnJlbm9JZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+e3NldFRlcnJlbm9JZChwYXJzZUludChlLnRhcmdldC52YWx1ZSkpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGVycmVub0lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9XCJ3LWZ1bGwgcC0yIG10LTUgZm9udC1ib2xkIHRleHQtd2hpdGUgdXBwZXJjYXNlIGJnLWdyZWVuLTUwMCByb3VuZGVkIGhvdmVyOmJnLWdyYXktOTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIkFncmVnYXIgQ2FtYmlvc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsicm91dGVyIiwidXNlUm91dGVyIiwibnVtZXJvUHJlZGlhbEFjdHVhbGl6YXIiLCJyb3V0ZSIsImNvbnNvbGUiLCJsb2ciLCJlIiwicHJldmVudERlZmF1bHQiLCJ1cGRhdGVQcmVkaW8iLCJ2YXJpYWJsZXMiLCJudW1lcm9QcmVkaWFsIiwibm9tYnJlIiwiZGVwYXJ0YW1lbnRvIiwibXVuaWNpcGlvIiwidGVycmVub0lkIiwibmF2aWdhdGUiLCJwdXNoIiwic2V0TnVtZXJvIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldE5vbWJyZSIsInNldERlcGFydGFtZW50byIsInNldE11bmljaXBpbyIsInNldFRlcnJlbm9JZCJdLCJzb3VyY2VSb290IjoiIn0=