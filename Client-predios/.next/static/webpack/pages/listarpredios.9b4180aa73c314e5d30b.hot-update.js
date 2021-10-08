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
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/index.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _Components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Container */ "./Components/Container.js");
/* harmony import */ var _Components_CardPredio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/CardPredio */ "./Components/CardPredio.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\judaz\\Documents\\VS CODE\\Next, Graphql y postgres\\Proyecto Predios\\Client-predios\\pages\\listarpredios.js",
    _templateObject,
    _templateObject2,
    _this = undefined,
    _s = $RefreshSig$();









var GET_PREDIOS = (0,apollo_boost__WEBPACK_IMPORTED_MODULE_7__.gql)(_templateObject || (_templateObject = (0,C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n    query getPredios {\n        allPredios {\n            nodes {\n              numeroPredial\n              nombre\n              municipio\n              departamento\n              terrenoId\n            }\n          }\n        }\n"])));
var DROP_PREDIO = (0,apollo_boost__WEBPACK_IMPORTED_MODULE_7__.gql)(_templateObject2 || (_templateObject2 = (0,C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n    mutation DeletePredioByNumeroPredial($numeroPredial:Int!){\n        deletePredioByNumeroPredial(input: {numeroPredial:$numeroPredial}) {\n            clientMutationId\n            deletedPredioId\n          }\n    }\n"])));

var ListPredios = function ListPredios() {
  _s();

  var _useQuery = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__.useQuery)(GET_PREDIOS),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  var _useMutation = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__.useMutation)(DROP_PREDIO),
      _useMutation2 = (0,C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useMutation, 1),
      deletePredioByNumeroPredial = _useMutation2[0];

  var dropPredio = function dropPredio(numPre) {
    deletePredioByNumeroPredial({
      variables: {
        numeroPredial: numPre
      }
    });
  };

  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
    children: "Loading Users..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 22
  }, _this);
  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
    children: "Error-- No se pudo cargar los predios"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 22
  }, _this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Components_Container__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
      className: "p-4 text-3xl font-light",
      children: "Predios"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, _this), data.allPredios.nodes.map(function (_ref) {
      var numeroPredial = _ref.numeroPredial,
          nombre = _ref.nombre,
          municipio = _ref.municipio,
          departamento = _ref.departamento,
          terrenoId = _ref.terrenoId;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "h-full p-5 m-2 bg-white rounded shadow-lg",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "items-center m-6 h-2/6",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            className: "mb-2 text-xl font-bold",
            children: ["Numero Predial:", ' ', numeroPredial]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            className: "block",
            children: ["Nombre predio:", ' ', nombre]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            className: "block",
            children: ["Departamento:", ' ', departamento]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            className: "block",
            children: ["Municipio:", ' ', municipio]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            className: "block",
            children: ["Terreno:", ' ', terrenoId ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
              children: "Terreno propio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 42
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
              children: "Ejido"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 66
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            className: "m-5 text-2xl",
            onClick: function onClick() {
              return dropPredio(numeroPredial);
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faTrashAlt
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 98
            }, _this), "Eliminar"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            className: "m-5 text-2xl",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faPen
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 58
            }, _this), "Actualizar"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            className: "m-5 text-2xl",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faMapMarker
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 58
            }, _this), "Agregar Terreno"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            className: "m-5 text-2xl",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faHotel
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 58
            }, _this), "Agregar Construci\xF3n"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, _this)
      }, numeroPredial, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 28
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 9
  }, _this);
};

_s(ListPredios, "6/SvTY5pA48SAKo2kPHG688PutM=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__.useQuery, _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__.useMutation];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGlzdGFycHJlZGlvcy45YjQxODBhYTczYzMxNGU1ZDMwYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTVksV0FBVyxHQUFFVCxpREFBRix5ZEFBakI7QUFjQSxJQUFNVSxXQUFXLEdBQUVWLGlEQUFGLDZjQUFqQjs7QUFTQSxJQUFNVyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBRXRCLGtCQUE2QmIsNkRBQVEsQ0FBQ1csV0FBRCxDQUFyQztBQUFBLE1BQU9HLE9BQVAsYUFBT0EsT0FBUDtBQUFBLE1BQWVDLEtBQWYsYUFBZUEsS0FBZjtBQUFBLE1BQXFCQyxJQUFyQixhQUFxQkEsSUFBckI7O0FBQ0EscUJBQXFDZixnRUFBVyxDQUFDVyxXQUFELENBQWhEO0FBQUE7QUFBQSxNQUFPSywyQkFBUDs7QUFFQSxNQUFNQyxVQUFVLEdBQUMsU0FBWEEsVUFBVyxDQUFDQyxNQUFELEVBQVU7QUFDdkJGLElBQUFBLDJCQUEyQixDQUFDO0FBQUNHLE1BQUFBLFNBQVMsRUFBQztBQUFDQyxRQUFBQSxhQUFhLEVBQUNGO0FBQWY7QUFBWCxLQUFELENBQTNCO0FBQ0gsR0FGRDs7QUFJQSxNQUFHTCxPQUFILEVBQVcsb0JBQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBTjtBQUNYLE1BQUdDLEtBQUgsRUFBVSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ1Ysc0JBQ0k7QUFBQSw0QkFDSSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFJLGVBQVMsRUFBQyx5QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLEVBSVFDLElBQUksQ0FBQ00sVUFBTCxDQUFnQkMsS0FBaEIsQ0FBc0JDLEdBQXRCLENBQTBCLGdCQUEyRDtBQUFBLFVBQXpESCxhQUF5RCxRQUF6REEsYUFBeUQ7QUFBQSxVQUEzQ0ksTUFBMkMsUUFBM0NBLE1BQTJDO0FBQUEsVUFBcENDLFNBQW9DLFFBQXBDQSxTQUFvQztBQUFBLFVBQTFCQyxZQUEwQixRQUExQkEsWUFBMEI7QUFBQSxVQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDakYsMEJBQU87QUFBeUIsaUJBQVMsRUFBQywyQ0FBbkM7QUFBQSwrQkFDUDtBQUFLLG1CQUFTLEVBQUMsd0JBQWY7QUFBQSxrQ0FDSTtBQUFNLHFCQUFTLEVBQUMsd0JBQWhCO0FBQUEsMENBQXlELEdBQXpELEVBQThEUCxhQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFNLHFCQUFTLEVBQUMsT0FBaEI7QUFBQSx5Q0FBd0MsR0FBeEMsRUFBNkNJLE1BQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixlQUdJO0FBQU0scUJBQVMsRUFBQyxPQUFoQjtBQUFBLHdDQUF1QyxHQUF2QyxFQUE0Q0UsWUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKLGVBSUk7QUFBTSxxQkFBUyxFQUFDLE9BQWhCO0FBQUEscUNBQW9DLEdBQXBDLEVBQXlDRCxTQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkosZUFLSTtBQUFNLHFCQUFTLEVBQUMsT0FBaEI7QUFBQSxtQ0FBa0MsR0FBbEMsRUFDSUUsU0FBUyxnQkFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBSixnQkFBNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRHpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSixlQVFJO0FBQVEscUJBQVMsRUFBQyxjQUFsQjtBQUFpQyxtQkFBTyxFQUFFO0FBQUEscUJBQUlWLFVBQVUsQ0FBQ0csYUFBRCxDQUFkO0FBQUEsYUFBMUM7QUFBQSxvQ0FBeUUsOERBQUMsMkVBQUQ7QUFBaUIsa0JBQUksRUFBRWxCLHlFQUFVQTtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkosZUFTSTtBQUFRLHFCQUFTLEVBQUMsY0FBbEI7QUFBQSxvQ0FBaUMsOERBQUMsMkVBQUQ7QUFBaUIsa0JBQUksRUFBRUMsb0VBQUtBO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFUSixlQVVJO0FBQVEscUJBQVMsRUFBQyxjQUFsQjtBQUFBLG9DQUFpQyw4REFBQywyRUFBRDtBQUFpQixrQkFBSSxFQUFFQywwRUFBV0E7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZKLGVBV0k7QUFBUSxxQkFBUyxFQUFDLGNBQWxCO0FBQUEsb0NBQWlDLDhEQUFDLDJFQUFEO0FBQWlCLGtCQUFJLEVBQUVDLHNFQUFPQTtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE8sU0FBVWUsYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFlSCxLQWhCRCxDQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBeUJILENBcENEOztHQUFNUjtVQUUyQmIsMkRBQ1FDOzs7S0FIbkNZO0FBc0NOLCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xpc3RhcnByZWRpb3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHt1c2VRdWVyeSx1c2VNdXRhdGlvbn1mcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQge2dxbH0gZnJvbSAnYXBvbGxvLWJvb3N0J1xyXG5pbXBvcnQgeyBmYVRyYXNoQWx0LGZhUGVuLGZhTWFwTWFya2VyLGZhSG90ZWwsIGZhVGhlcm1vbWV0ZXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vQ29tcG9uZW50cy9Db250YWluZXInO1xyXG5pbXBvcnQgQ2FyZFByZWRpbyBmcm9tICcuLi9Db21wb25lbnRzL0NhcmRQcmVkaW8nO1xyXG5cclxuY29uc3QgR0VUX1BSRURJT1MgPWdxbGBcclxuICAgIHF1ZXJ5IGdldFByZWRpb3Mge1xyXG4gICAgICAgIGFsbFByZWRpb3Mge1xyXG4gICAgICAgICAgICBub2RlcyB7XHJcbiAgICAgICAgICAgICAgbnVtZXJvUHJlZGlhbFxyXG4gICAgICAgICAgICAgIG5vbWJyZVxyXG4gICAgICAgICAgICAgIG11bmljaXBpb1xyXG4gICAgICAgICAgICAgIGRlcGFydGFtZW50b1xyXG4gICAgICAgICAgICAgIHRlcnJlbm9JZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5gO1xyXG5cclxuY29uc3QgRFJPUF9QUkVESU8gPWdxbGBcclxuICAgIG11dGF0aW9uIERlbGV0ZVByZWRpb0J5TnVtZXJvUHJlZGlhbCgkbnVtZXJvUHJlZGlhbDpJbnQhKXtcclxuICAgICAgICBkZWxldGVQcmVkaW9CeU51bWVyb1ByZWRpYWwoaW5wdXQ6IHtudW1lcm9QcmVkaWFsOiRudW1lcm9QcmVkaWFsfSkge1xyXG4gICAgICAgICAgICBjbGllbnRNdXRhdGlvbklkXHJcbiAgICAgICAgICAgIGRlbGV0ZWRQcmVkaW9JZFxyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgTGlzdFByZWRpb3MgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qge2xvYWRpbmcsZXJyb3IsZGF0YX0gPSB1c2VRdWVyeShHRVRfUFJFRElPUylcclxuICAgIGNvbnN0IFtkZWxldGVQcmVkaW9CeU51bWVyb1ByZWRpYWxdPSB1c2VNdXRhdGlvbihEUk9QX1BSRURJTylcclxuXHJcbiAgICBjb25zdCBkcm9wUHJlZGlvPShudW1QcmUpPT57XHJcbiAgICAgICAgZGVsZXRlUHJlZGlvQnlOdW1lcm9QcmVkaWFsKHt2YXJpYWJsZXM6e251bWVyb1ByZWRpYWw6bnVtUHJlfX0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYobG9hZGluZylyZXR1cm48cD5Mb2FkaW5nIFVzZXJzLi4uPC9wPlxyXG4gICAgaWYoZXJyb3IpIHJldHVybiA8cD5FcnJvci0tIE5vIHNlIHB1ZG8gY2FyZ2FyIGxvcyBwcmVkaW9zPC9wPlxyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPENvbnRhaW5lci8+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwLTQgdGV4dC0zeGwgZm9udC1saWdodFwiPlByZWRpb3M8L2gxPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmFsbFByZWRpb3Mubm9kZXMubWFwKCh7bnVtZXJvUHJlZGlhbCxub21icmUsbXVuaWNpcGlvLGRlcGFydGFtZW50byx0ZXJyZW5vSWR9KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17bnVtZXJvUHJlZGlhbH0gY2xhc3NOYW1lPVwiaC1mdWxsIHAtNSBtLTIgYmctd2hpdGUgcm91bmRlZCBzaGFkb3ctbGdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciBtLTYgaC0yLzZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWItMiB0ZXh0LXhsIGZvbnQtYm9sZFwiPk51bWVybyBQcmVkaWFsOnsnICd9e251bWVyb1ByZWRpYWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9ja1wiID5Ob21icmUgcHJlZGlvOnsnICd9e25vbWJyZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrXCIgPkRlcGFydGFtZW50bzp7JyAnfXtkZXBhcnRhbWVudG99PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9ja1wiID5NdW5pY2lwaW86eycgJ317bXVuaWNpcGlvfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2tcIiA+VGVycmVubzp7JyAnfXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlcnJlbm9JZCA/ICg8YT5UZXJyZW5vIHByb3BpbzwvYT4pOig8YT5FamlkbzwvYT4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibS01IHRleHQtMnhsXCIgb25DbGljaz17KCk9PmRyb3BQcmVkaW8obnVtZXJvUHJlZGlhbCl9PjxGb250QXdlc29tZUljb24gaWNvbj17ZmFUcmFzaEFsdH0vPkVsaW1pbmFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibS01IHRleHQtMnhsXCI+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBlbn0vPkFjdHVhbGl6YXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtLTUgdGV4dC0yeGxcIj48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTWFwTWFya2VyfS8+QWdyZWdhciBUZXJyZW5vPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibS01IHRleHQtMnhsXCI+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUhvdGVsfS8+QWdyZWdhciBDb25zdHJ1Y2nDs248L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgTGlzdFByZWRpb3M7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUXVlcnkiLCJ1c2VNdXRhdGlvbiIsImdxbCIsImZhVHJhc2hBbHQiLCJmYVBlbiIsImZhTWFwTWFya2VyIiwiZmFIb3RlbCIsImZhVGhlcm1vbWV0ZXIiLCJGb250QXdlc29tZUljb24iLCJDb250YWluZXIiLCJDYXJkUHJlZGlvIiwiR0VUX1BSRURJT1MiLCJEUk9QX1BSRURJTyIsIkxpc3RQcmVkaW9zIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImRlbGV0ZVByZWRpb0J5TnVtZXJvUHJlZGlhbCIsImRyb3BQcmVkaW8iLCJudW1QcmUiLCJ2YXJpYWJsZXMiLCJudW1lcm9QcmVkaWFsIiwiYWxsUHJlZGlvcyIsIm5vZGVzIiwibWFwIiwibm9tYnJlIiwibXVuaWNpcGlvIiwiZGVwYXJ0YW1lbnRvIiwidGVycmVub0lkIl0sInNvdXJjZVJvb3QiOiIifQ==