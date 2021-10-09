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
            href: "/agregarterreno",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faMapMarker
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 104
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGlzdGFycHJlZGlvcy4zZmVjNTY0NGI3MTQ3MjMzMDNiMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUEsSUFBTWlCLFdBQVcsR0FBRVQsaURBQUYseWRBQWpCO0FBY0EsSUFBTVUsV0FBVyxHQUFFVixpREFBRiw2Y0FBakI7O0FBU0EsSUFBTVcsV0FBVyxHQUFJLFNBQWZBLFdBQWUsR0FBTTtBQUFBOztBQUV2QixNQUFNQyxRQUFRLEdBQUdoQixzREFBUyxFQUExQjs7QUFDQSxrQkFBNkJFLDhEQUFRLENBQUNXLFdBQUQsQ0FBckM7QUFBQSxNQUFPSSxPQUFQLGFBQU9BLE9BQVA7QUFBQSxNQUFlQyxLQUFmLGFBQWVBLEtBQWY7QUFBQSxNQUFxQkMsSUFBckIsYUFBcUJBLElBQXJCOztBQUNBLHFCQUFxQ2hCLGlFQUFXLENBQUNXLFdBQUQsQ0FBaEQ7QUFBQTtBQUFBLE1BQU9NLDJCQUFQOztBQUNBLE1BQU1DLFVBQVUsR0FBQyxTQUFYQSxVQUFXLENBQUNDLE1BQUQsRUFBVTtBQUN2QkYsSUFBQUEsMkJBQTJCLENBQUM7QUFBQ0csTUFBQUEsU0FBUyxFQUFDO0FBQUNDLFFBQUFBLGFBQWEsRUFBQ0Y7QUFBZjtBQUFYLEtBQUQsQ0FBM0I7QUFDSCxHQUZEOztBQUlBLE1BQUdMLE9BQUgsRUFBVyxvQkFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFOO0FBQ1gsTUFBR0MsS0FBSCxFQUFVLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDVixzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUksZUFBUyxFQUFDLHlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7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Q0Q7O0dBQU1UO1VBRWVmLG9EQUNZRSw0REFDUUM7OztLQUpuQ1k7QUF5Q04sK0RBQWVBLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGlzdGFycHJlZGlvcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlcix1c2VQYXJhfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7dXNlUXVlcnksdXNlTXV0YXRpb259ZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IHtncWx9IGZyb20gJ2Fwb2xsby1ib29zdCdcclxuaW1wb3J0IHsgZmFUcmFzaEFsdCxmYVBlbixmYU1hcE1hcmtlcixmYUhvdGVsLCBmYVRoZXJtb21ldGVyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcblxyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGFpbmVyJztcclxuaW1wb3J0IENhcmRQcmVkaW8gZnJvbSAnLi4vQ29tcG9uZW50cy9DYXJkUHJlZGlvJztcclxuXHJcbmNvbnN0IEdFVF9QUkVESU9TID1ncWxgXHJcbiAgICBxdWVyeSBnZXRQcmVkaW9zIHtcclxuICAgICAgICBhbGxQcmVkaW9zIHtcclxuICAgICAgICAgICAgbm9kZXMge1xyXG4gICAgICAgICAgICAgIG51bWVyb1ByZWRpYWxcclxuICAgICAgICAgICAgICBub21icmVcclxuICAgICAgICAgICAgICBtdW5pY2lwaW9cclxuICAgICAgICAgICAgICBkZXBhcnRhbWVudG9cclxuICAgICAgICAgICAgICB0ZXJyZW5vSWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IERST1BfUFJFRElPID1ncWxgXHJcbiAgICBtdXRhdGlvbiBEZWxldGVQcmVkaW9CeU51bWVyb1ByZWRpYWwoJG51bWVyb1ByZWRpYWw6SW50ISl7XHJcbiAgICAgICAgZGVsZXRlUHJlZGlvQnlOdW1lcm9QcmVkaWFsKGlucHV0OiB7bnVtZXJvUHJlZGlhbDokbnVtZXJvUHJlZGlhbH0pIHtcclxuICAgICAgICAgICAgY2xpZW50TXV0YXRpb25JZFxyXG4gICAgICAgICAgICBkZWxldGVkUHJlZGlvSWRcclxuICAgICAgICAgIH1cclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IExpc3RQcmVkaW9zID0gICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3Qge2xvYWRpbmcsZXJyb3IsZGF0YX0gPSB1c2VRdWVyeShHRVRfUFJFRElPUylcclxuICAgIGNvbnN0IFtkZWxldGVQcmVkaW9CeU51bWVyb1ByZWRpYWxdPSB1c2VNdXRhdGlvbihEUk9QX1BSRURJTylcclxuICAgIGNvbnN0IGRyb3BQcmVkaW89KG51bVByZSk9PntcclxuICAgICAgICBkZWxldGVQcmVkaW9CeU51bWVyb1ByZWRpYWwoe3ZhcmlhYmxlczp7bnVtZXJvUHJlZGlhbDpudW1QcmV9fSlcclxuICAgIH1cclxuXHJcbiAgICBpZihsb2FkaW5nKXJldHVybjxwPkxvYWRpbmcgVXNlcnMuLi48L3A+XHJcbiAgICBpZihlcnJvcikgcmV0dXJuIDxwPkVycm9yLS0gTm8gc2UgcHVkbyBjYXJnYXIgbG9zIHByZWRpb3M8L3A+XHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyLz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInAtNCB0ZXh0LTN4bCBmb250LWxpZ2h0XCI+UHJlZGlvczwvaDE+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGEuYWxsUHJlZGlvcy5ub2Rlcy5tYXAoKHtudW1lcm9QcmVkaWFsLG5vbWJyZSxtdW5pY2lwaW8sZGVwYXJ0YW1lbnRvLHRlcnJlbm9JZH0pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtudW1lcm9QcmVkaWFsfSBjbGFzc05hbWU9XCJoLWZ1bGwgcC01IG0tMiBiZy13aGl0ZSByb3VuZGVkIHNoYWRvdy1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyIG0tNiBoLTIvNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYi0yIHRleHQteGwgZm9udC1ib2xkXCI+TnVtZXJvIFByZWRpYWw6eycgJ317bnVtZXJvUHJlZGlhbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrXCIgPk5vbWJyZSBwcmVkaW86eycgJ317bm9tYnJlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2tcIiA+RGVwYXJ0YW1lbnRvOnsnICd9e2RlcGFydGFtZW50b308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrXCIgPk11bmljaXBpbzp7JyAnfXttdW5pY2lwaW99PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9ja1wiID5UZXJyZW5vOnsnICd9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVycmVub0lkID8gKDxhPlRlcnJlbm8gcHJvcGlvPC9hPik6KDxhPkVqaWRvPC9hPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtLTUgdGV4dC0yeGxcIiBvbkNsaWNrPXsoKT0+ZHJvcFByZWRpbyhudW1lcm9QcmVkaWFsKX0+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRyYXNoQWx0fS8+RWxpbWluYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtLTUgdGV4dC0yeGxcIiBvbkNsaWNrPXsoKT0+bmF2aWdhdGUucHVzaChcIi91cGRhdGVwcmVkaW9cIil9PjxGb250QXdlc29tZUljb24gaWNvbj17ZmFQZW59Lz5BY3R1YWxpemFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlcnJlbm9JZD09bnVsbCA/ICggPExpbmsgY2xhc3NOYW1lPVwibS01IHRleHQtMnhsXCIgaHJlZj1cIi9hZ3JlZ2FydGVycmVub1wiID48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTWFwTWFya2VyfS8+QWdyZWdhciBUZXJyZW5vPC9MaW5rPik6KDw+PC8+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibS01IHRleHQtMnhsXCIgb25DbGljaz17KCk9Pm5hdmlnYXRlLnB1c2goXCIvYWdyZWdhcmNvbnN0cnVjY2lvblwiKX0+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUhvdGVsfS8+QWdyZWdhciBDb25zdHJ1Y2Npw7NuPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj4gXHJcbiAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RQcmVkaW9zOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsInVzZVJvdXRlciIsInVzZVBhcmEiLCJ1c2VRdWVyeSIsInVzZU11dGF0aW9uIiwiZ3FsIiwiZmFUcmFzaEFsdCIsImZhUGVuIiwiZmFNYXBNYXJrZXIiLCJmYUhvdGVsIiwiZmFUaGVybW9tZXRlciIsIkZvbnRBd2Vzb21lSWNvbiIsIkNvbnRhaW5lciIsIkNhcmRQcmVkaW8iLCJHRVRfUFJFRElPUyIsIkRST1BfUFJFRElPIiwiTGlzdFByZWRpb3MiLCJuYXZpZ2F0ZSIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJkZWxldGVQcmVkaW9CeU51bWVyb1ByZWRpYWwiLCJkcm9wUHJlZGlvIiwibnVtUHJlIiwidmFyaWFibGVzIiwibnVtZXJvUHJlZGlhbCIsImFsbFByZWRpb3MiLCJub2RlcyIsIm1hcCIsIm5vbWJyZSIsIm11bmljaXBpbyIsImRlcGFydGFtZW50byIsInRlcnJlbm9JZCIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9