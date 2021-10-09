"use strict";
self["webpackHotUpdate_N_E"]("pages/listarpredios",{

/***/ "./pages/listarpredios.js":
/*!********************************!*\
  !*** ./pages/listarpredios.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/index.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _Components_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/Container */ "./Components/Container.js");
/* harmony import */ var _Components_CardPredio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/CardPredio */ "./Components/CardPredio.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\judaz\\Documents\\VS CODE\\Next, Graphql y postgres\\Proyecto Predios\\Client-predios\\pages\\listarpredios.js",
    _templateObject,
    _templateObject2,
    _this = undefined,
    _s = $RefreshSig$();












var GET_PREDIOS = (0,apollo_boost__WEBPACK_IMPORTED_MODULE_9__.gql)(_templateObject || (_templateObject = (0,C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n    query getPredios {\n        allPredios {\n            nodes {\n              numeroPredial\n              nombre\n              municipio\n              departamento\n              terrenoId\n            }\n          }\n        }\n"])));
var DROP_PREDIO = (0,apollo_boost__WEBPACK_IMPORTED_MODULE_9__.gql)(_templateObject2 || (_templateObject2 = (0,C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n    mutation DeletePredioByNumeroPredial($numeroPredial:Int!){\n        deletePredioByNumeroPredial(input: {numeroPredial:$numeroPredial}) {\n            clientMutationId\n            deletedPredioId\n          }\n    }\n"])));

var ListPredios = function ListPredios() {
  _s();

  var navigate = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();

  var _useQuery = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_10__.useQuery)(GET_PREDIOS),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  var _useMutation = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_10__.useMutation)(DROP_PREDIO),
      _useMutation2 = (0,C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useMutation, 1),
      deletePredioByNumeroPredial = _useMutation2[0];

  var dropPredio = function dropPredio(numPre) {
    deletePredioByNumeroPredial({
      variables: {
        numeroPredial: numPre
      }
    });
  };

  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
    children: "Loading Users..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 22
  }, _this);
  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
    children: "Error-- No se pudo cargar los predios"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 22
  }, _this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Components_Container__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h1", {
      className: "p-4 text-3xl font-light",
      children: "Predios"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, _this), data.allPredios.nodes.map(function (_ref) {
      var numeroPredial = _ref.numeroPredial,
          nombre = _ref.nombre,
          municipio = _ref.municipio,
          departamento = _ref.departamento,
          terrenoId = _ref.terrenoId;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "h-full p-5 m-2 bg-white rounded shadow-lg",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "items-center m-6 h-2/6",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
            className: "mb-2 text-xl font-bold",
            children: ["Numero Predial:", ' ', numeroPredial]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
            className: "block",
            children: ["Nombre predio:", ' ', nombre]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
            className: "block",
            children: ["Departamento:", ' ', departamento]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
            className: "block",
            children: ["Municipio:", ' ', municipio]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
            className: "block",
            children: ["Terreno:", ' ', terrenoId ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
              children: "Terreno propio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 42
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
              children: "Ejido"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 66
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("button", {
            className: "m-5 text-2xl",
            onClick: function onClick() {
              return dropPredio(numeroPredial);
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faTrashAlt
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 98
            }, _this), "Eliminar"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("button", {
            className: "m-5 text-2xl",
            onClick: function onClick() {
              return navigate.push("/updatepredio");
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faPen
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 103
            }, _this), "Actualizar"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 25
          }, _this), terrenoId == null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            className: "m-5 text-2xl",
            href: {
              pathname: '/agregarterreno',
              query: {
                numeroPredial: numeroPredial
              }
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faMapMarker
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 161
            }, _this), "Agregar Terreno"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 49
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {}, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("button", {
            className: "m-5 text-2xl",
            onClick: function onClick() {
              return navigate.push("/agregarconstruccion");
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faHotel
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 110
            }, _this), "Agregar Construcci\xF3n"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, _this)
      }, numeroPredial, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 28
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 9
  }, _this);
};

_s(ListPredios, "Fi5Xt7ftbFfSGyszCR5uimj8W/Q=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter, _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_10__.useQuery, _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_10__.useMutation];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGlzdGFycHJlZGlvcy5lZmZkNTU3MTI1ODhhZmQyM2ExMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUEsSUFBTWlCLFdBQVcsR0FBRVQsaURBQUYseWRBQWpCO0FBY0EsSUFBTVUsV0FBVyxHQUFFVixpREFBRiw2Y0FBakI7O0FBU0EsSUFBTVcsV0FBVyxHQUFJLFNBQWZBLFdBQWUsR0FBTTtBQUFBOztBQUV2QixNQUFNQyxRQUFRLEdBQUdoQixzREFBUyxFQUExQjs7QUFDQSxrQkFBNkJFLDhEQUFRLENBQUNXLFdBQUQsQ0FBckM7QUFBQSxNQUFPSSxPQUFQLGFBQU9BLE9BQVA7QUFBQSxNQUFlQyxLQUFmLGFBQWVBLEtBQWY7QUFBQSxNQUFxQkMsSUFBckIsYUFBcUJBLElBQXJCOztBQUNBLHFCQUFxQ2hCLGlFQUFXLENBQUNXLFdBQUQsQ0FBaEQ7QUFBQTtBQUFBLE1BQU9NLDJCQUFQOztBQUNBLE1BQU1DLFVBQVUsR0FBQyxTQUFYQSxVQUFXLENBQUNDLE1BQUQsRUFBVTtBQUN2QkYsSUFBQUEsMkJBQTJCLENBQUM7QUFBQ0csTUFBQUEsU0FBUyxFQUFDO0FBQUNDLFFBQUFBLGFBQWEsRUFBQ0Y7QUFBZjtBQUFYLEtBQUQsQ0FBM0I7QUFDSCxHQUZEOztBQUlBLE1BQUdMLE9BQUgsRUFBVyxvQkFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFOO0FBQ1gsTUFBR0MsS0FBSCxFQUFVLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDVixzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUksZUFBUyxFQUFDLHlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7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YUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFrQkgsS0FuQkQsQ0FKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTRCSCxDQXZDRDs7R0FBTVQ7VUFFZWYsb0RBQ1lFLDREQUNRQzs7O0tBSm5DWTtBQXlDTiwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9saXN0YXJwcmVkaW9zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlUm91dGVyLHVzZVBhcmF9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHt1c2VRdWVyeSx1c2VNdXRhdGlvbn1mcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQge2dxbH0gZnJvbSAnYXBvbGxvLWJvb3N0J1xyXG5pbXBvcnQgeyBmYVRyYXNoQWx0LGZhUGVuLGZhTWFwTWFya2VyLGZhSG90ZWwsIGZhVGhlcm1vbWV0ZXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vQ29tcG9uZW50cy9Db250YWluZXInO1xyXG5pbXBvcnQgQ2FyZFByZWRpbyBmcm9tICcuLi9Db21wb25lbnRzL0NhcmRQcmVkaW8nO1xyXG5cclxuY29uc3QgR0VUX1BSRURJT1MgPWdxbGBcclxuICAgIHF1ZXJ5IGdldFByZWRpb3Mge1xyXG4gICAgICAgIGFsbFByZWRpb3Mge1xyXG4gICAgICAgICAgICBub2RlcyB7XHJcbiAgICAgICAgICAgICAgbnVtZXJvUHJlZGlhbFxyXG4gICAgICAgICAgICAgIG5vbWJyZVxyXG4gICAgICAgICAgICAgIG11bmljaXBpb1xyXG4gICAgICAgICAgICAgIGRlcGFydGFtZW50b1xyXG4gICAgICAgICAgICAgIHRlcnJlbm9JZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5gO1xyXG5cclxuY29uc3QgRFJPUF9QUkVESU8gPWdxbGBcclxuICAgIG11dGF0aW9uIERlbGV0ZVByZWRpb0J5TnVtZXJvUHJlZGlhbCgkbnVtZXJvUHJlZGlhbDpJbnQhKXtcclxuICAgICAgICBkZWxldGVQcmVkaW9CeU51bWVyb1ByZWRpYWwoaW5wdXQ6IHtudW1lcm9QcmVkaWFsOiRudW1lcm9QcmVkaWFsfSkge1xyXG4gICAgICAgICAgICBjbGllbnRNdXRhdGlvbklkXHJcbiAgICAgICAgICAgIGRlbGV0ZWRQcmVkaW9JZFxyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgTGlzdFByZWRpb3MgPSAgKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7bG9hZGluZyxlcnJvcixkYXRhfSA9IHVzZVF1ZXJ5KEdFVF9QUkVESU9TKVxyXG4gICAgY29uc3QgW2RlbGV0ZVByZWRpb0J5TnVtZXJvUHJlZGlhbF09IHVzZU11dGF0aW9uKERST1BfUFJFRElPKVxyXG4gICAgY29uc3QgZHJvcFByZWRpbz0obnVtUHJlKT0+e1xyXG4gICAgICAgIGRlbGV0ZVByZWRpb0J5TnVtZXJvUHJlZGlhbCh7dmFyaWFibGVzOntudW1lcm9QcmVkaWFsOm51bVByZX19KVxyXG4gICAgfVxyXG5cclxuICAgIGlmKGxvYWRpbmcpcmV0dXJuPHA+TG9hZGluZyBVc2Vycy4uLjwvcD5cclxuICAgIGlmKGVycm9yKSByZXR1cm4gPHA+RXJyb3ItLSBObyBzZSBwdWRvIGNhcmdhciBsb3MgcHJlZGlvczwvcD5cclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDb250YWluZXIvPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicC00IHRleHQtM3hsIGZvbnQtbGlnaHRcIj5QcmVkaW9zPC9oMT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5hbGxQcmVkaW9zLm5vZGVzLm1hcCgoe251bWVyb1ByZWRpYWwsbm9tYnJlLG11bmljaXBpbyxkZXBhcnRhbWVudG8sdGVycmVub0lkfSk9PntcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e251bWVyb1ByZWRpYWx9IGNsYXNzTmFtZT1cImgtZnVsbCBwLTUgbS0yIGJnLXdoaXRlIHJvdW5kZWQgc2hhZG93LWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtcy1jZW50ZXIgbS02IGgtMi82XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC14bCBmb250LWJvbGRcIj5OdW1lcm8gUHJlZGlhbDp7JyAnfXtudW1lcm9QcmVkaWFsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2tcIiA+Tm9tYnJlIHByZWRpbzp7JyAnfXtub21icmV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9ja1wiID5EZXBhcnRhbWVudG86eycgJ317ZGVwYXJ0YW1lbnRvfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2tcIiA+TXVuaWNpcGlvOnsnICd9e211bmljaXBpb308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrXCIgPlRlcnJlbm86eycgJ317XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXJyZW5vSWQgPyAoPGE+VGVycmVubyBwcm9waW88L2E+KTooPGE+RWppZG88L2E+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm0tNSB0ZXh0LTJ4bFwiIG9uQ2xpY2s9eygpPT5kcm9wUHJlZGlvKG51bWVyb1ByZWRpYWwpfT48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVHJhc2hBbHR9Lz5FbGltaW5hcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm0tNSB0ZXh0LTJ4bFwiIG9uQ2xpY2s9eygpPT5uYXZpZ2F0ZS5wdXNoKFwiL3VwZGF0ZXByZWRpb1wiKX0+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBlbn0vPkFjdHVhbGl6YXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVycmVub0lkPT1udWxsID8gKCA8TGluayBjbGFzc05hbWU9XCJtLTUgdGV4dC0yeGxcIiBocmVmPXt7IHBhdGhuYW1lOiAnL2FncmVnYXJ0ZXJyZW5vJywgcXVlcnk6IHsgbnVtZXJvUHJlZGlhbDogbnVtZXJvUHJlZGlhbCB9IH19ID48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTWFwTWFya2VyfS8+QWdyZWdhciBUZXJyZW5vPC9MaW5rPik6KDw+PC8+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibS01IHRleHQtMnhsXCIgb25DbGljaz17KCk9Pm5hdmlnYXRlLnB1c2goXCIvYWdyZWdhcmNvbnN0cnVjY2lvblwiKX0+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUhvdGVsfS8+QWdyZWdhciBDb25zdHJ1Y2Npw7NuPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj4gXHJcbiAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RQcmVkaW9zOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsInVzZVJvdXRlciIsInVzZVBhcmEiLCJ1c2VRdWVyeSIsInVzZU11dGF0aW9uIiwiZ3FsIiwiZmFUcmFzaEFsdCIsImZhUGVuIiwiZmFNYXBNYXJrZXIiLCJmYUhvdGVsIiwiZmFUaGVybW9tZXRlciIsIkZvbnRBd2Vzb21lSWNvbiIsIkNvbnRhaW5lciIsIkNhcmRQcmVkaW8iLCJHRVRfUFJFRElPUyIsIkRST1BfUFJFRElPIiwiTGlzdFByZWRpb3MiLCJuYXZpZ2F0ZSIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJkZWxldGVQcmVkaW9CeU51bWVyb1ByZWRpYWwiLCJkcm9wUHJlZGlvIiwibnVtUHJlIiwidmFyaWFibGVzIiwibnVtZXJvUHJlZGlhbCIsImFsbFByZWRpb3MiLCJub2RlcyIsIm1hcCIsIm5vbWJyZSIsIm11bmljaXBpbyIsImRlcGFydGFtZW50byIsInRlcnJlbm9JZCIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==