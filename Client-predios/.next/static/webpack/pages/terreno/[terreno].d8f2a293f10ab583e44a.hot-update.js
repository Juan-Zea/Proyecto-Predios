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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/Container */ "./Components/Container.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\judaz\\Documents\\VS CODE\\Next, Graphql y postgres\\Proyecto Predios\\Client-predios\\pages\\terreno\\[terreno].js",
    _s = $RefreshSig$();





function terreno() {
  _s();

  var route = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  var numeroPredial = parseInt(route.query.numePredialActualizar);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      nombre = _useState[0],
      setNombre = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      departamento = _useState2[0],
      setDepartamento = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      municipio = _useState3[0],
      setMunicipio = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      terrenoId = _useState4[0],
      setTerrenoId = _useState4[1];

  console.log(route);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Components_Container__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
      className: "p-4 text-3xl font-light",
      children: "Asignar un terreno"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "flex justify-center mt-10",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "w-full max-w-3xl p-3 bg-white",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("form", {
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
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "mb-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
              className: "block text-sm font-bold text-gray-700 md-2",
              htmlFor: "nombre",
              children: "Numero"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 30
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
              className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
              id: "nombre",
              onChange: function onChange(e) {
                setNumero(parseInt(e.target.value));
              },
              value: numeroPredial
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 30
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "mb-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
              className: "block text-sm font-bold text-gray-700 md-2",
              htmlFor: "nombre",
              children: "Nombre"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 30
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
              className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
              id: "nombre",
              onChange: function onChange(e) {
                setNombre(e.target.value);
              },
              value: nombre
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 30
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 26
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "mb-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
              className: "block text-sm font-bold text-gray-700 md-2",
              htmlFor: "nombre",
              children: "Departamento"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 30
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
              className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
              id: "departamento",
              onChange: function onChange(e) {
                setDepartamento(e.target.value);
              },
              value: departamento
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 30
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 26
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "mb-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
              className: "block text-sm font-bold text-gray-700 md-2",
              htmlFor: "nombre",
              children: "Municipio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 30
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
              className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
              id: "municipio",
              onChange: function onChange(e) {
                setMunicipio(e.target.value);
              },
              value: municipio
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 30
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 26
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "mb-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
              className: "block text-sm font-bold text-gray-700 md-2",
              htmlFor: "nombre",
              children: "Terreno Id"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 30
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
              type: "text",
              className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
              id: "terrenoId",
              onChange: function onChange(e) {
                setTerrenoId(parseInt(e.target.value));
              },
              value: terrenoId
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 30
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 26
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
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
          lineNumber: 21,
          columnNumber: 22
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

_s(terreno, "zOc46qd1aaBZlyolmU3Gdk2q0s8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVycmVuby9bdGVycmVub10uZDhmMmEyOTNmMTBhYjU4M2U0NGEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0ksT0FBVCxHQUFtQjtBQUFBOztBQUU5QixNQUFNQyxLQUFLLEdBQUdILHNEQUFTLEVBQXZCO0FBQ0EsTUFBTUksYUFBYSxHQUFHQyxRQUFRLENBQUNGLEtBQUssQ0FBQ0csS0FBTixDQUFZQyxxQkFBYixDQUE5Qjs7QUFDQSxrQkFBMkJSLCtDQUFRLENBQUMsRUFBRCxDQUFuQztBQUFBLE1BQU9TLE1BQVA7QUFBQSxNQUFjQyxTQUFkOztBQUNBLG1CQUF1Q1YsK0NBQVEsQ0FBQyxFQUFELENBQS9DO0FBQUEsTUFBT1csWUFBUDtBQUFBLE1BQW9CQyxlQUFwQjs7QUFDQSxtQkFBaUNaLCtDQUFRLENBQUMsRUFBRCxDQUF6QztBQUFBLE1BQU9hLFNBQVA7QUFBQSxNQUFpQkMsWUFBakI7O0FBQ0EsbUJBQWlDZCwrQ0FBUSxFQUF6QztBQUFBLE1BQU9lLFNBQVA7QUFBQSxNQUFpQkMsWUFBakI7O0FBRUFDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZCxLQUFaO0FBQ0Esc0JBQ0k7QUFBQSw0QkFDSSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFJLGVBQVMsRUFBQyx5QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0k7QUFBSyxlQUFTLEVBQUUsMkJBQWhCO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFFLCtCQUFoQjtBQUFBLCtCQUNLO0FBQU0sa0JBQVEsRUFBRSxrQkFBQ2UsQ0FBRCxFQUFLO0FBQ2RBLFlBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNDQyxZQUFBQSxZQUFZLENBQUM7QUFBQ0MsY0FBQUEsU0FBUyxFQUFDO0FBQUNqQixnQkFBQUEsYUFB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V0FISDtBQUlBLHNCQUFRLEVBQUUsa0JBQUNNLENBQUQsRUFBSztBQUFDSCxnQkFBQUEsWUFBWSxDQUFDVixRQUFRLENBQUNhLENBQUMsQ0FBQ08sTUFBRixDQUFTQyxLQUFWLENBQVQsQ0FBWjtBQUF1QyxlQUp2RDtBQUtHLG1CQUFLLEVBQUVaO0FBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBdkRKLGVBb0VJO0FBQU8sZ0JBQUksRUFBQyxRQUFaO0FBQ0EscUJBQVMsRUFBRSx1RkFEWDtBQUVDLGlCQUFLLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXBFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBa0ZIOztHQTVGdUJaO1VBRU5GIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3RlcnJlbm8vW3RlcnJlbm9dLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi8uLi9Db21wb25lbnRzL0NvbnRhaW5lcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0ZXJyZW5vICgpe1xyXG5cclxuICAgIGNvbnN0IHJvdXRlID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IG51bWVyb1ByZWRpYWwgPSBwYXJzZUludChyb3V0ZS5xdWVyeS5udW1lUHJlZGlhbEFjdHVhbGl6YXIpIFxyXG4gICAgY29uc3QgW25vbWJyZSxzZXROb21icmVdID0gdXNlU3RhdGUoJycpIFxyXG4gICAgY29uc3QgW2RlcGFydGFtZW50byxzZXREZXBhcnRhbWVudG9dID0gdXNlU3RhdGUoJycpIFxyXG4gICAgY29uc3QgW211bmljaXBpbyxzZXRNdW5pY2lwaW9dID0gdXNlU3RhdGUoJycpIFxyXG4gICAgY29uc3QgW3RlcnJlbm9JZCxzZXRUZXJyZW5vSWRdID0gdXNlU3RhdGUoKSBcclxuXHJcbiAgICBjb25zb2xlLmxvZyhyb3V0ZSlcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyLz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInAtNCB0ZXh0LTN4bCBmb250LWxpZ2h0XCI+QXNpZ25hciB1biB0ZXJyZW5vPC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0xMFwiPiAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJ3LWZ1bGwgbWF4LXctM3hsIHAtMyBiZy13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUHJlZGlvKHt2YXJpYWJsZXM6e251bWVyb1ByZWRpYWw6bnVtZXJvUHJlZGlhbCxub21icmU6bm9tYnJlLGRlcGFydGFtZW50bzpkZXBhcnRhbWVudG8sbXVuaWNpcGlvOm11bmljaXBpbyx0ZXJyZW5vSWQ6dGVycmVub0lkfX0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZS5wdXNoKCcvbGlzdGFycHJlZGlvcycpICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID1cImJsb2NrIHRleHQtc20gZm9udC1ib2xkIHRleHQtZ3JheS03MDAgbWQtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm5vbWJyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWVyb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9XCJ3LWZ1bGwgcHgtMyBweS0yIHRleHQtZ3JheS03MDAgYm9yZGVyIHJvdW5kZWQgc2hhZG93IGFwcGVhcmVuY2Utbm9uZSBsZWFkaW5nLWxpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3R1bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJub21icmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PntzZXROdW1lcm8ocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e251bWVyb1ByZWRpYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPVwiYmxvY2sgdGV4dC1zbSBmb250LWJvbGQgdGV4dC1ncmF5LTcwMCBtZC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwibm9tYnJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm9tYnJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID1cInctZnVsbCBweC0zIHB5LTIgdGV4dC1ncmF5LTcwMCBib3JkZXIgcm91bmRlZCBzaGFkb3cgYXBwZWFyZW5jZS1ub25lIGxlYWRpbmctbGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdHVsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+e3NldE5vbWJyZShlLnRhcmdldC52YWx1ZSl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtub21icmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPVwiYmxvY2sgdGV4dC1zbSBmb250LWJvbGQgdGV4dC1ncmF5LTcwMCBtZC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwibm9tYnJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVwYXJ0YW1lbnRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID1cInctZnVsbCBweC0zIHB5LTIgdGV4dC1ncmF5LTcwMCBib3JkZXIgcm91bmRlZCBzaGFkb3cgYXBwZWFyZW5jZS1ub25lIGxlYWRpbmctbGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdHVsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRlcGFydGFtZW50b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+e3NldERlcGFydGFtZW50byhlLnRhcmdldC52YWx1ZSl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXBhcnRhbWVudG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPVwiYmxvY2sgdGV4dC1zbSBmb250LWJvbGQgdGV4dC1ncmF5LTcwMCBtZC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwibm9tYnJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTXVuaWNpcGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID1cInctZnVsbCBweC0zIHB5LTIgdGV4dC1ncmF5LTcwMCBib3JkZXIgcm91bmRlZCBzaGFkb3cgYXBwZWFyZW5jZS1ub25lIGxlYWRpbmctbGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdHVsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm11bmljaXBpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+e3NldE11bmljaXBpbyhlLnRhcmdldC52YWx1ZSl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttdW5pY2lwaW99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPVwiYmxvY2sgdGV4dC1zbSBmb250LWJvbGQgdGV4dC1ncmF5LTcwMCBtZC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwibm9tYnJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVycmVubyBJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwidy1mdWxsIHB4LTMgcHktMiB0ZXh0LWdyYXktNzAwIGJvcmRlciByb3VuZGVkIHNoYWRvdyBhcHBlYXJlbmNlLW5vbmUgbGVhZGluZy1saWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW90dWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidGVycmVub0lkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT57c2V0VGVycmVub0lkKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0ZXJyZW5vSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID1cInctZnVsbCBwLTIgbXQtNSBmb250LWJvbGQgdGV4dC13aGl0ZSB1cHBlcmNhc2UgYmctZ3JlZW4tNTAwIHJvdW5kZWQgaG92ZXI6YmctZ3JheS05MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiQWdyZWdhciBDYW1iaW9zXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiQ29udGFpbmVyIiwidGVycmVubyIsInJvdXRlIiwibnVtZXJvUHJlZGlhbCIsInBhcnNlSW50IiwicXVlcnkiLCJudW1lUHJlZGlhbEFjdHVhbGl6YXIiLCJub21icmUiLCJzZXROb21icmUiLCJkZXBhcnRhbWVudG8iLCJzZXREZXBhcnRhbWVudG8iLCJtdW5pY2lwaW8iLCJzZXRNdW5pY2lwaW8iLCJ0ZXJyZW5vSWQiLCJzZXRUZXJyZW5vSWQiLCJjb25zb2xlIiwibG9nIiwiZSIsInByZXZlbnREZWZhdWx0IiwidXBkYXRlUHJlZGlvIiwidmFyaWFibGVzIiwibmF2aWdhdGUiLCJwdXNoIiwic2V0TnVtZXJvIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9