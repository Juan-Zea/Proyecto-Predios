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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/index.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _Components_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/Container */ "./Components/Container.js");
/* harmony import */ var _Components_CardPredio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/CardPredio */ "./Components/CardPredio.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\judaz\\Documents\\VS CODE\\Next, Graphql y postgres\\Proyecto Predios\\Client-predios\\pages\\listarpredios.js",
    _templateObject,
    _templateObject2,
    _this = undefined,
    _s = $RefreshSig$();










var GET_PREDIOS = (0,apollo_boost__WEBPACK_IMPORTED_MODULE_8__.gql)(_templateObject || (_templateObject = (0,C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n    query getPredios {\n        allPredios {\n            nodes {\n              numeroPredial\n              nombre\n              municipio\n              departamento\n              terrenoId\n            }\n          }\n        }\n"])));
var DROP_PREDIO = (0,apollo_boost__WEBPACK_IMPORTED_MODULE_8__.gql)(_templateObject2 || (_templateObject2 = (0,C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n    mutation DeletePredioByNumeroPredial($numeroPredial:Int!){\n        deletePredioByNumeroPredial(input: {numeroPredial:$numeroPredial}) {\n            clientMutationId\n            deletedPredioId\n          }\n    }\n"])));

var ListPredios = function ListPredios() {
  _s();

  var navigate = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  var _useQuery = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__.useQuery)(GET_PREDIOS),
      data = _useQuery.data;

  var _useMutation = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__.useMutation)(DROP_PREDIO),
      _useMutation2 = (0,C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useMutation, 1),
      deletePredioByNumeroPredial = _useMutation2[0];

  var dropPredio = function dropPredio(numPre) {
    deletePredioByNumeroPredial({
      variables: {
        numeroPredial: numPre
      }
    });
  }; // if(loading)return<p>Loading Users...</p>
  // if(error) return <p>Error-- No se pudo cargar los predios</p>


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_Components_Container__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h1", {
      className: "p-4 text-3xl font-light",
      children: "Predios"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, _this), data.allPredios.nodes.map(function (_ref) {
      var numeroPredial = _ref.numeroPredial,
          nombre = _ref.nombre,
          municipio = _ref.municipio,
          departamento = _ref.departamento,
          terrenoId = _ref.terrenoId;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "h-full p-5 m-2 bg-white rounded shadow-lg",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "items-center m-6 h-2/6",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
            className: "mb-2 text-xl font-bold",
            children: ["Numero Predial:", ' ', numeroPredial]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
            className: "block",
            children: ["Nombre predio:", ' ', nombre]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
            className: "block",
            children: ["Departamento:", ' ', departamento]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
            className: "block",
            children: ["Municipio:", ' ', municipio]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
            className: "block",
            children: ["Terreno:", ' ', terrenoId ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
              children: "Terreno propio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 42
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
              children: "Ejido"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 66
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
            className: "m-5 text-2xl",
            onClick: function onClick() {
              return dropPredio(numeroPredial);
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faTrashAlt
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 98
            }, _this), "Eliminar"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
            className: "m-5 text-2xl",
            onClick: function onClick() {
              return navigate.push("/updatepredio");
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faPen
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 103
            }, _this), "Actualizar"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
            className: "m-5 text-2xl",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faMapMarker
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 58
            }, _this), "Agregar Terreno"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
            className: "m-5 text-2xl",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faHotel
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 58
            }, _this), "Agregar Construci\xF3n"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, _this)
      }, numeroPredial, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 28
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 9
  }, _this);
};

_s(ListPredios, "9YfMgxtwz1P3VmbaZxSdZX5u4ns=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter, _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__.useQuery, _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__.useMutation];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGlzdGFycHJlZGlvcy43NGNiYmJjN2UwNDY3NGQ0OWI3My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1lLFdBQVcsR0FBRVQsaURBQUYseWRBQWpCO0FBY0EsSUFBTVUsV0FBVyxHQUFFVixpREFBRiw2Y0FBakI7O0FBU0EsSUFBTVcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUV0QixNQUFNQyxRQUFRLEdBQUdmLHNEQUFTLEVBQTFCOztBQUNBLGtCQUFlQyw2REFBUSxDQUFDVyxXQUFELENBQXZCO0FBQUEsTUFBT0ksSUFBUCxhQUFPQSxJQUFQOztBQUVBLHFCQUFxQ2QsZ0VBQVcsQ0FBQ1csV0FBRCxDQUFoRDtBQUFBO0FBQUEsTUFBT0ksMkJBQVA7O0FBRUEsTUFBTUMsVUFBVSxHQUFDLFNBQVhBLFVBQVcsQ0FBQ0MsTUFBRCxFQUFVO0FBQ3ZCRixJQUFBQSwyQkFBMkIsQ0FBQztBQUFDRyxNQUFBQSxTQUFTLEVBQUM7QUFBQ0MsUUFBQUEsYUFBYSxFQUFDRjtBQUFmO0FBQVgsS0FBRCxDQUEzQjtBQUVILEdBSEQsQ0FQc0IsQ0FZdEI7QUFDQTs7O0FBQ0Esc0JBQ0k7QUFBQSw0QkFDSSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFJLGVBQVMsRUFBQyx5QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLEVBSVFILElBQUksQ0FBQ00sVUFBTCxDQUFnQkMsS0FBaEIsQ0FBc0JDLEdBQXRCLENBQTBCLGdCQUEyRDtBQUFBLFVBQXpESCxhQUF5RCxRQUF6REEsYUFBeUQ7QUFBQSxVQUEzQ0ksTUFBMkMsUUFBM0NBLE1BQTJDO0FBQUEsVUFBcENDLFNBQW9DLFFBQXBDQSxTQUFvQztBQUFBLFVBQTFCQyxZQUEwQixRQUExQkEsWUFBMEI7QUFBQSxVQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDakYsMEJBQU87QUFBeUIsaUJBQVMsRUFBQywyQ0FBbkM7QUFBQSwrQkFDUDtBQUFLLG1CQUFTLEVBQUMsd0JBQWY7QUFBQSxrQ0FDSTtBQUFNLHFCQUFTLEVBQUMsd0JBQWhCO0FBQUEsMENBQXlELEdBQXpELEVBQThEUCxhQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFNLHFCQUFTLEVBQUMsT0FBaEI7QUFBQSx5Q0FBd0MsR0FBeEMsRUFBNkNJLE1BQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixlQUdJO0FBQU0scUJBQVMsRUFBQyxPQUFoQjtBQUFBLHdDQUF1QyxHQUF2QyxFQUE0Q0UsWUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKLGVBSUk7QUFBTSxxQkFBUyxFQUFDLE9BQWhCO0FBQUEscUNBQW9DLEdBQXBDLEVBQXlDRCxTQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkosZUFLSTtBQUFNLHFCQUFTLEVBQUMsT0FBaEI7QUFBQSxtQ0FBa0MsR0FBbEMsRUFDSUUsU0FBUyxnQkFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBSixnQkFBNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRHpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSixlQVFJO0FBQVEscUJBQVMsRUFBQyxjQUFsQjtBQUFpQyxtQkFBTyxFQUFFO0FBQUEscUJBQUlWLFVBQVUsQ0FBQ0csYUFBRCxDQUFkO0FBQUEsYUFBMUM7QUFBQSxvQ0FBeUUsOERBQUMsMkVBQUQ7QUFBaUIsa0JBQUksRUFBRWpCLDBFQUFVQTtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkosZUFTSTtBQUFRLHFCQUFTLEVBQUMsY0FBbEI7QUFBaUMsbUJBQU8sRUFBRTtBQUFBLHFCQUFJVyxRQUFRLENBQUNjLElBQVQsQ0FBYyxlQUFkLENBQUo7QUFBQSxhQUExQztBQUFBLG9DQUE4RSw4REFBQywyRUFBRDtBQUFpQixrQkFBSSxFQUFFeEIscUVBQUtBO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFUSixlQVVJO0FBQVEscUJBQVMsRUFBQyxjQUFsQjtBQUFBLG9DQUFpQyw4REFBQywyRUFBRDtBQUFpQixrQkFBSSxFQUFFQywyRUFBV0E7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZKLGVBV0k7QUFBUSxxQkFBUyxFQUFDLGNBQWxCO0FBQUEsb0NBQWlDLDhEQUFDLDJFQUFEO0FBQWlCLGtCQUFJLEVBQUVDLHVFQUFPQTtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE8sU0FBVWMsYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFlSCxLQWhCRCxDQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBeUJILENBdkNEOztHQUFNUDtVQUVlZCxvREFDRkMsMkRBRXNCQzs7O0tBTG5DWTtBQXlDTiwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9saXN0YXJwcmVkaW9zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQge3VzZVF1ZXJ5LHVzZU11dGF0aW9ufWZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCB7Z3FsfSBmcm9tICdhcG9sbG8tYm9vc3QnXHJcbmltcG9ydCB7IGZhVHJhc2hBbHQsZmFQZW4sZmFNYXBNYXJrZXIsZmFIb3RlbCwgZmFUaGVybW9tZXRlciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5cclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9Db21wb25lbnRzL0NvbnRhaW5lcic7XHJcbmltcG9ydCBDYXJkUHJlZGlvIGZyb20gJy4uL0NvbXBvbmVudHMvQ2FyZFByZWRpbyc7XHJcblxyXG5jb25zdCBHRVRfUFJFRElPUyA9Z3FsYFxyXG4gICAgcXVlcnkgZ2V0UHJlZGlvcyB7XHJcbiAgICAgICAgYWxsUHJlZGlvcyB7XHJcbiAgICAgICAgICAgIG5vZGVzIHtcclxuICAgICAgICAgICAgICBudW1lcm9QcmVkaWFsXHJcbiAgICAgICAgICAgICAgbm9tYnJlXHJcbiAgICAgICAgICAgICAgbXVuaWNpcGlvXHJcbiAgICAgICAgICAgICAgZGVwYXJ0YW1lbnRvXHJcbiAgICAgICAgICAgICAgdGVycmVub0lkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBEUk9QX1BSRURJTyA9Z3FsYFxyXG4gICAgbXV0YXRpb24gRGVsZXRlUHJlZGlvQnlOdW1lcm9QcmVkaWFsKCRudW1lcm9QcmVkaWFsOkludCEpe1xyXG4gICAgICAgIGRlbGV0ZVByZWRpb0J5TnVtZXJvUHJlZGlhbChpbnB1dDoge251bWVyb1ByZWRpYWw6JG51bWVyb1ByZWRpYWx9KSB7XHJcbiAgICAgICAgICAgIGNsaWVudE11dGF0aW9uSWRcclxuICAgICAgICAgICAgZGVsZXRlZFByZWRpb0lkXHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBMaXN0UHJlZGlvcyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3Qge2RhdGF9ID0gdXNlUXVlcnkoR0VUX1BSRURJT1MpXHJcbiAgICBcclxuICAgIGNvbnN0IFtkZWxldGVQcmVkaW9CeU51bWVyb1ByZWRpYWxdPSB1c2VNdXRhdGlvbihEUk9QX1BSRURJTylcclxuXHJcbiAgICBjb25zdCBkcm9wUHJlZGlvPShudW1QcmUpPT57XHJcbiAgICAgICAgZGVsZXRlUHJlZGlvQnlOdW1lcm9QcmVkaWFsKHt2YXJpYWJsZXM6e251bWVyb1ByZWRpYWw6bnVtUHJlfX0pXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYobG9hZGluZylyZXR1cm48cD5Mb2FkaW5nIFVzZXJzLi4uPC9wPlxyXG4gICAgLy8gaWYoZXJyb3IpIHJldHVybiA8cD5FcnJvci0tIE5vIHNlIHB1ZG8gY2FyZ2FyIGxvcyBwcmVkaW9zPC9wPlxyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPENvbnRhaW5lci8+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwLTQgdGV4dC0zeGwgZm9udC1saWdodFwiPlByZWRpb3M8L2gxPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmFsbFByZWRpb3Mubm9kZXMubWFwKCh7bnVtZXJvUHJlZGlhbCxub21icmUsbXVuaWNpcGlvLGRlcGFydGFtZW50byx0ZXJyZW5vSWR9KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17bnVtZXJvUHJlZGlhbH0gY2xhc3NOYW1lPVwiaC1mdWxsIHAtNSBtLTIgYmctd2hpdGUgcm91bmRlZCBzaGFkb3ctbGdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciBtLTYgaC0yLzZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWItMiB0ZXh0LXhsIGZvbnQtYm9sZFwiPk51bWVybyBQcmVkaWFsOnsnICd9e251bWVyb1ByZWRpYWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9ja1wiID5Ob21icmUgcHJlZGlvOnsnICd9e25vbWJyZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrXCIgPkRlcGFydGFtZW50bzp7JyAnfXtkZXBhcnRhbWVudG99PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9ja1wiID5NdW5pY2lwaW86eycgJ317bXVuaWNpcGlvfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2tcIiA+VGVycmVubzp7JyAnfXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlcnJlbm9JZCA/ICg8YT5UZXJyZW5vIHByb3BpbzwvYT4pOig8YT5FamlkbzwvYT4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibS01IHRleHQtMnhsXCIgb25DbGljaz17KCk9PmRyb3BQcmVkaW8obnVtZXJvUHJlZGlhbCl9PjxGb250QXdlc29tZUljb24gaWNvbj17ZmFUcmFzaEFsdH0vPkVsaW1pbmFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibS01IHRleHQtMnhsXCIgb25DbGljaz17KCk9Pm5hdmlnYXRlLnB1c2goXCIvdXBkYXRlcHJlZGlvXCIpfT48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGVufS8+QWN0dWFsaXphcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm0tNSB0ZXh0LTJ4bFwiPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFNYXBNYXJrZXJ9Lz5BZ3JlZ2FyIFRlcnJlbm88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtLTUgdGV4dC0yeGxcIj48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSG90ZWx9Lz5BZ3JlZ2FyIENvbnN0cnVjacOzbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBMaXN0UHJlZGlvczsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsInVzZVF1ZXJ5IiwidXNlTXV0YXRpb24iLCJncWwiLCJmYVRyYXNoQWx0IiwiZmFQZW4iLCJmYU1hcE1hcmtlciIsImZhSG90ZWwiLCJmYVRoZXJtb21ldGVyIiwiRm9udEF3ZXNvbWVJY29uIiwiQ29udGFpbmVyIiwiQ2FyZFByZWRpbyIsIkdFVF9QUkVESU9TIiwiRFJPUF9QUkVESU8iLCJMaXN0UHJlZGlvcyIsIm5hdmlnYXRlIiwiZGF0YSIsImRlbGV0ZVByZWRpb0J5TnVtZXJvUHJlZGlhbCIsImRyb3BQcmVkaW8iLCJudW1QcmUiLCJ2YXJpYWJsZXMiLCJudW1lcm9QcmVkaWFsIiwiYWxsUHJlZGlvcyIsIm5vZGVzIiwibWFwIiwibm9tYnJlIiwibXVuaWNpcGlvIiwiZGVwYXJ0YW1lbnRvIiwidGVycmVub0lkIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=