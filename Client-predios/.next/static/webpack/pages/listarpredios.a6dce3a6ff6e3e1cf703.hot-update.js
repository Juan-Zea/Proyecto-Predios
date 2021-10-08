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
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/index.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _Components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Container */ "./Components/Container.js");
/* harmony import */ var _Components_CardPredio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/CardPredio */ "./Components/CardPredio.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\judaz\\Documents\\VS CODE\\Next, Graphql y postgres\\Proyecto Predios\\Client-predios\\pages\\listarpredios.js",
    _templateObject,
    _templateObject2,
    _this = undefined,
    _s = $RefreshSig$();









var GET_PREDIOS = (0,apollo_boost__WEBPACK_IMPORTED_MODULE_6__.gql)(_templateObject || (_templateObject = (0,C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    query getPredios {\n        allPredios {\n            nodes {\n              numeroPredial\n              nombre\n              municipio\n              departamento\n              terrenoId\n            }\n          }\n        }\n"])));
var DROP_PREDIO = (0,apollo_boost__WEBPACK_IMPORTED_MODULE_6__.gql)(_templateObject2 || (_templateObject2 = (0,C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    mutation DeletePredioByNumeroPredial($numeroPredial:Int!){\n        deletePredioByNumeroPredial(input: {numeroPredial:$numeroPredial}) {\n            clientMutationId\n            deletedPredioId\n          }\n    }\n"])));

var ListPredios = function ListPredios() {
  _s();

  var _useQuery = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__.useQuery)(GET_PREDIOS),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
    children: "Loading Users..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 22
  }, _this);
  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
    children: "Error-- No se pudo cargar los predios"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 22
  }, _this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Components_Container__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
      className: "p-4 text-3xl font-light",
      children: "Predios"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, _this), data.allPredios.nodes.map(function (_ref) {
      var numeroPredial = _ref.numeroPredial,
          nombre = _ref.nombre,
          municipio = _ref.municipio,
          departamento = _ref.departamento,
          terrenoId = _ref.terrenoId;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "h-full p-5 m-2 bg-white rounded shadow-lg",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "items-center m-6 h-2/6",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
            className: "mb-2 text-xl font-bold",
            children: ["Numero Predial:", ' ', numeroPredial]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
            className: "block",
            children: ["Nombre predio:", ' ', nombre]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
            className: "block",
            children: ["Departamento:", ' ', departamento]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
            className: "block",
            children: ["Municipio:", ' ', municipio]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
            className: "block",
            children: ["Terreno:", ' ', terrenoId ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
              children: "Terreno propio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 42
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
              children: "Ejido"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 66
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
            className: "m-5 text-2xl",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faTrashAlt
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 58
            }, _this), "Eliminar"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
            className: "m-5 text-2xl",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faPen
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 58
            }, _this), "Actualizar"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
            className: "m-5 text-2xl",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faMapMarker
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 58
            }, _this), "Agregar Terreno"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
            className: "m-5 text-2xl",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faHotel
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 58
            }, _this), "Agregar Construci\xF3n"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, _this)
      }, numeroPredial, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 28
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, _this);
};

_s(ListPredios, "t0z2SrXJDzhl3h6STsA86t9Oe1U=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__.useQuery];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGlzdGFycHJlZGlvcy5hNmRjZTNhNmZmNmUzZTFjZjcwMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1ZLFdBQVcsR0FBRVQsaURBQUYseWRBQWpCO0FBY0EsSUFBTVUsV0FBVyxHQUFFVixpREFBRiw2Y0FBakI7O0FBU0EsSUFBTVcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUV0QixrQkFBNkJiLDZEQUFRLENBQUNXLFdBQUQsQ0FBckM7QUFBQSxNQUFPRyxPQUFQLGFBQU9BLE9BQVA7QUFBQSxNQUFlQyxLQUFmLGFBQWVBLEtBQWY7QUFBQSxNQUFxQkMsSUFBckIsYUFBcUJBLElBQXJCOztBQUNBLE1BQUdGLE9BQUgsRUFBVyxvQkFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFOO0FBQ1gsTUFBR0MsS0FBSCxFQUFVLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDVixzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUksZUFBUyxFQUFDLHlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosRUFJUUMsSUFBSSxDQUFDQyxVQUFMLENBQWdCQyxLQUFoQixDQUFzQkMsR0FBdEIsQ0FBMEIsZ0JBQTJEO0FBQUEsVUFBekRDLGFBQXlELFFBQXpEQSxhQUF5RDtBQUFBLFVBQTNDQyxNQUEyQyxRQUEzQ0EsTUFBMkM7QUFBQSxVQUFwQ0MsU0FBb0MsUUFBcENBLFNBQW9DO0FBQUEsVUFBMUJDLFlBQTBCLFFBQTFCQSxZQUEwQjtBQUFBLFVBQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUNqRiwwQkFBTztBQUF5QixpQkFBUyxFQUFDLDJDQUFuQztBQUFBLCtCQUNQO0FBQUssbUJBQVMsRUFBQyx3QkFBZjtBQUFBLGtDQUNJO0FBQU0scUJBQVMsRUFBQyx3QkFBaEI7QUFBQSwwQ0FBeUQsR0FBekQsRUFBOERKLGFBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQU0scUJBQVMsRUFBQyxPQUFoQjtBQUFBLHlDQUF3QyxHQUF4QyxFQUE2Q0MsTUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLGVBR0k7QUFBTSxxQkFBUyxFQUFDLE9BQWhCO0FBQUEsd0NBQXVDLEdBQXZDLEVBQTRDRSxZQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEosZUFJSTtBQUFNLHFCQUFTLEVBQUMsT0FBaEI7QUFBQSxxQ0FBb0MsR0FBcEMsRUFBeUNELFNBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSixlQUtJO0FBQU0scUJBQVMsRUFBQyxPQUFoQjtBQUFBLG1DQUFrQyxHQUFsQyxFQUNJRSxTQUFTLGdCQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFKLGdCQUE0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKLGVBUUk7QUFBUSxxQkFBUyxFQUFDLGNBQWxCO0FBQUEsb0NBQWlDLDhEQUFDLDJFQUFEO0FBQWlCLGtCQUFJLEVBQUVyQix5RUFBVUE7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJKLGVBU0k7QUFBUSxxQkFBUyxFQUFDLGNBQWxCO0FBQUEsb0NBQWlDLDhEQUFDLDJFQUFEO0FBQWlCLGtCQUFJLEVBQUVDLG9FQUFLQTtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEosZUFVSTtBQUFRLHFCQUFTLEVBQUMsY0FBbEI7QUFBQSxvQ0FBaUMsOERBQUMsMkVBQUQ7QUFBaUIsa0JBQUksRUFBRUMsMEVBQVdBO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWSixlQVdJO0FBQVEscUJBQVMsRUFBQyxjQUFsQjtBQUFBLG9DQUFpQyw4REFBQywyRUFBRDtBQUFpQixrQkFBSSxFQUFFQyxzRUFBT0E7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURPLFNBQVVjLGFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBZUgsS0FoQkQsQ0FKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXlCSCxDQTlCRDs7R0FBTVA7VUFFMkJiOzs7S0FGM0JhO0FBZ0NOLCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xpc3RhcnByZWRpb3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHt1c2VRdWVyeSx1c2VNdXRhdGlvbn1mcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQge2dxbH0gZnJvbSAnYXBvbGxvLWJvb3N0J1xyXG5pbXBvcnQgeyBmYVRyYXNoQWx0LGZhUGVuLGZhTWFwTWFya2VyLGZhSG90ZWwsIGZhVGhlcm1vbWV0ZXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vQ29tcG9uZW50cy9Db250YWluZXInO1xyXG5pbXBvcnQgQ2FyZFByZWRpbyBmcm9tICcuLi9Db21wb25lbnRzL0NhcmRQcmVkaW8nO1xyXG5cclxuY29uc3QgR0VUX1BSRURJT1MgPWdxbGBcclxuICAgIHF1ZXJ5IGdldFByZWRpb3Mge1xyXG4gICAgICAgIGFsbFByZWRpb3Mge1xyXG4gICAgICAgICAgICBub2RlcyB7XHJcbiAgICAgICAgICAgICAgbnVtZXJvUHJlZGlhbFxyXG4gICAgICAgICAgICAgIG5vbWJyZVxyXG4gICAgICAgICAgICAgIG11bmljaXBpb1xyXG4gICAgICAgICAgICAgIGRlcGFydGFtZW50b1xyXG4gICAgICAgICAgICAgIHRlcnJlbm9JZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5gO1xyXG5cclxuY29uc3QgRFJPUF9QUkVESU8gPWdxbGBcclxuICAgIG11dGF0aW9uIERlbGV0ZVByZWRpb0J5TnVtZXJvUHJlZGlhbCgkbnVtZXJvUHJlZGlhbDpJbnQhKXtcclxuICAgICAgICBkZWxldGVQcmVkaW9CeU51bWVyb1ByZWRpYWwoaW5wdXQ6IHtudW1lcm9QcmVkaWFsOiRudW1lcm9QcmVkaWFsfSkge1xyXG4gICAgICAgICAgICBjbGllbnRNdXRhdGlvbklkXHJcbiAgICAgICAgICAgIGRlbGV0ZWRQcmVkaW9JZFxyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgTGlzdFByZWRpb3MgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qge2xvYWRpbmcsZXJyb3IsZGF0YX0gPSB1c2VRdWVyeShHRVRfUFJFRElPUylcclxuICAgIGlmKGxvYWRpbmcpcmV0dXJuPHA+TG9hZGluZyBVc2Vycy4uLjwvcD5cclxuICAgIGlmKGVycm9yKSByZXR1cm4gPHA+RXJyb3ItLSBObyBzZSBwdWRvIGNhcmdhciBsb3MgcHJlZGlvczwvcD5cclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDb250YWluZXIvPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicC00IHRleHQtM3hsIGZvbnQtbGlnaHRcIj5QcmVkaW9zPC9oMT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5hbGxQcmVkaW9zLm5vZGVzLm1hcCgoe251bWVyb1ByZWRpYWwsbm9tYnJlLG11bmljaXBpbyxkZXBhcnRhbWVudG8sdGVycmVub0lkfSk9PntcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e251bWVyb1ByZWRpYWx9IGNsYXNzTmFtZT1cImgtZnVsbCBwLTUgbS0yIGJnLXdoaXRlIHJvdW5kZWQgc2hhZG93LWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtcy1jZW50ZXIgbS02IGgtMi82XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC14bCBmb250LWJvbGRcIj5OdW1lcm8gUHJlZGlhbDp7JyAnfXtudW1lcm9QcmVkaWFsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2tcIiA+Tm9tYnJlIHByZWRpbzp7JyAnfXtub21icmV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9ja1wiID5EZXBhcnRhbWVudG86eycgJ317ZGVwYXJ0YW1lbnRvfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2tcIiA+TXVuaWNpcGlvOnsnICd9e211bmljaXBpb308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrXCIgPlRlcnJlbm86eycgJ317XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXJyZW5vSWQgPyAoPGE+VGVycmVubyBwcm9waW88L2E+KTooPGE+RWppZG88L2E+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm0tNSB0ZXh0LTJ4bFwiPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFUcmFzaEFsdH0vPkVsaW1pbmFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibS01IHRleHQtMnhsXCI+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBlbn0vPkFjdHVhbGl6YXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtLTUgdGV4dC0yeGxcIj48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTWFwTWFya2VyfS8+QWdyZWdhciBUZXJyZW5vPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibS01IHRleHQtMnhsXCI+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUhvdGVsfS8+QWdyZWdhciBDb25zdHJ1Y2nDs248L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgTGlzdFByZWRpb3M7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUXVlcnkiLCJ1c2VNdXRhdGlvbiIsImdxbCIsImZhVHJhc2hBbHQiLCJmYVBlbiIsImZhTWFwTWFya2VyIiwiZmFIb3RlbCIsImZhVGhlcm1vbWV0ZXIiLCJGb250QXdlc29tZUljb24iLCJDb250YWluZXIiLCJDYXJkUHJlZGlvIiwiR0VUX1BSRURJT1MiLCJEUk9QX1BSRURJTyIsIkxpc3RQcmVkaW9zIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImFsbFByZWRpb3MiLCJub2RlcyIsIm1hcCIsIm51bWVyb1ByZWRpYWwiLCJub21icmUiLCJtdW5pY2lwaW8iLCJkZXBhcnRhbWVudG8iLCJ0ZXJyZW5vSWQiXSwic291cmNlUm9vdCI6IiJ9