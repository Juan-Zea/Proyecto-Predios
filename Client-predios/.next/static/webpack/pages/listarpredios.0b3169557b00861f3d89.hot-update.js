"use strict";
self["webpackHotUpdate_N_E"]("pages/listarpredios",{

/***/ "./pages/listarpredios.js":
/*!********************************!*\
  !*** ./pages/listarpredios.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/index.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _Components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Container */ "./Components/Container.js");
/* harmony import */ var _Components_CardPredio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/CardPredio */ "./Components/CardPredio.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\judaz\\Documents\\VS CODE\\Next, Graphql y postgres\\Proyecto Predios\\Client-predios\\pages\\listarpredios.js",
    _templateObject,
    _this = undefined,
    _s = $RefreshSig$();







var GET_PREDIOS = (0,apollo_boost__WEBPACK_IMPORTED_MODULE_5__.gql)(_templateObject || (_templateObject = (0,C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    query getPredios {\n        allPredios {\n            nodes {\n              numeroPredial\n              nombre\n              municipio\n              departamento\n              terrenoId\n            }\n          }\n        }\n"])));

var ListPredios = function ListPredios() {
  _s();

  var _useQuery = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__.useQuery)(GET_PREDIOS),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
    children: "Loading Users..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 22
  }, _this);
  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
    children: "Error-- No se pudo cargar los predios"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 22
  }, _this);
  console.log(data.allPredios.nodes);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Components_Container__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
      className: "p-4 text-3xl font-light",
      children: "Predios"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, _this), data.allPredios.nodes.map(function (predio) {
      {
        console.log(predio);
      }

      /*#__PURE__*/
      (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
        children: predio.numeroPredial
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }, _this); // <CardPredio
      // key={predio.numeroPredial}
      // predio ={predio}
      // />

    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, _this);
};

_s(ListPredios, "t0z2SrXJDzhl3h6STsA86t9Oe1U=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__.useQuery];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGlzdGFycHJlZGlvcy4wYjMxNjk1NTdiMDA4NjFmM2Q4OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTU0sV0FBVyxHQUFFSCxpREFBRix5ZEFBakI7O0FBY0EsSUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUV0QixrQkFBNkJOLDZEQUFRLENBQUNLLFdBQUQsQ0FBckM7QUFBQSxNQUFPRSxPQUFQLGFBQU9BLE9BQVA7QUFBQSxNQUFlQyxLQUFmLGFBQWVBLEtBQWY7QUFBQSxNQUFxQkMsSUFBckIsYUFBcUJBLElBQXJCOztBQUNBLE1BQUdGLE9BQUgsRUFBVyxvQkFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFOO0FBQ1gsTUFBR0MsS0FBSCxFQUFVLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDVkUsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQUksQ0FBQ0csVUFBTCxDQUFnQkMsS0FBNUI7QUFDQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUksZUFBUyxFQUFDLHlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosRUFJUUosSUFBSSxDQUFDRyxVQUFMLENBQWdCQyxLQUFoQixDQUFzQkMsR0FBdEIsQ0FBMEIsVUFBQUMsTUFBTSxFQUFFO0FBQzlCO0FBQ0lMLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSSxNQUFaO0FBQ0g7O0FBQ0Q7QUFBQTtBQUFBLGtCQUFLQSxNQUFNLENBQUNDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKOEIsQ0FLOUI7QUFDQTtBQUNBO0FBQ0E7O0FBQ0gsS0FURCxDQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBa0JILENBeEJEOztHQUFNVjtVQUUyQk47OztLQUYzQk07QUEwQk4sK0RBQWVBLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGlzdGFycHJlZGlvcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZVF1ZXJ5LHVzZU11dGF0aW9ufWZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCB7Z3FsfSBmcm9tICdhcG9sbG8tYm9vc3QnXHJcblxyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGFpbmVyJztcclxuaW1wb3J0IENhcmRQcmVkaW8gZnJvbSAnLi4vQ29tcG9uZW50cy9DYXJkUHJlZGlvJztcclxuXHJcbmNvbnN0IEdFVF9QUkVESU9TID1ncWxgXHJcbiAgICBxdWVyeSBnZXRQcmVkaW9zIHtcclxuICAgICAgICBhbGxQcmVkaW9zIHtcclxuICAgICAgICAgICAgbm9kZXMge1xyXG4gICAgICAgICAgICAgIG51bWVyb1ByZWRpYWxcclxuICAgICAgICAgICAgICBub21icmVcclxuICAgICAgICAgICAgICBtdW5pY2lwaW9cclxuICAgICAgICAgICAgICBkZXBhcnRhbWVudG9cclxuICAgICAgICAgICAgICB0ZXJyZW5vSWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IExpc3RQcmVkaW9zID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHtsb2FkaW5nLGVycm9yLGRhdGF9ID0gdXNlUXVlcnkoR0VUX1BSRURJT1MpXHJcbiAgICBpZihsb2FkaW5nKXJldHVybjxwPkxvYWRpbmcgVXNlcnMuLi48L3A+XHJcbiAgICBpZihlcnJvcikgcmV0dXJuIDxwPkVycm9yLS0gTm8gc2UgcHVkbyBjYXJnYXIgbG9zIHByZWRpb3M8L3A+XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLmFsbFByZWRpb3Mubm9kZXMpXHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyLz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInAtNCB0ZXh0LTN4bCBmb250LWxpZ2h0XCI+UHJlZGlvczwvaDE+XHJcbiAgICAgICAgICAgIHsgICBcclxuICAgICAgICAgICAgICAgIGRhdGEuYWxsUHJlZGlvcy5ub2Rlcy5tYXAocHJlZGlvPT57XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcmVkaW8pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT57cHJlZGlvLm51bWVyb1ByZWRpYWx9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAvLyA8Q2FyZFByZWRpb1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGtleT17cHJlZGlvLm51bWVyb1ByZWRpYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJlZGlvID17cHJlZGlvfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIC8+XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBMaXN0UHJlZGlvczsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VRdWVyeSIsInVzZU11dGF0aW9uIiwiZ3FsIiwiQ29udGFpbmVyIiwiQ2FyZFByZWRpbyIsIkdFVF9QUkVESU9TIiwiTGlzdFByZWRpb3MiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImFsbFByZWRpb3MiLCJub2RlcyIsIm1hcCIsInByZWRpbyIsIm51bWVyb1ByZWRpYWwiXSwic291cmNlUm9vdCI6IiJ9