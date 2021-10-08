"use strict";
self["webpackHotUpdate_N_E"]("pages/listarpredios",{

/***/ "./pages/listarpredios.js":
/*!********************************!*\
  !*** ./pages/listarpredios.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/index.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _Components_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/Container */ "./Components/Container.js");
/* harmony import */ var _Components_CardPredio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/CardPredio */ "./Components/CardPredio.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\judaz\\Documents\\VS CODE\\Next, Graphql y postgres\\Proyecto Predios\\Client-predios\\pages\\listarpredios.js",
    _templateObject,
    _templateObject2,
    _this = undefined;











var GET_PREDIOS = (0,apollo_boost__WEBPACK_IMPORTED_MODULE_10__.gql)(_templateObject || (_templateObject = (0,C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n    query getPredios {\n        allPredios {\n            nodes {\n              numeroPredial\n              nombre\n              municipio\n              departamento\n              terrenoId\n            }\n          }\n        }\n"])));
var DROP_PREDIO = (0,apollo_boost__WEBPACK_IMPORTED_MODULE_10__.gql)(_templateObject2 || (_templateObject2 = (0,C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n    mutation DeletePredioByNumeroPredial($numeroPredial:Int!){\n        deletePredioByNumeroPredial(input: {numeroPredial:$numeroPredial}) {\n            clientMutationId\n            deletedPredioId\n          }\n    }\n"])));

var ListPredios = /*#__PURE__*/function () {
  var _s = $RefreshSig$();

  var _ref = (0,C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)(_s( /*#__PURE__*/C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
    var navigate, _yield$useQuery, loading, error, data, _useMutation, _useMutation2, deletePredioByNumeroPredial, dropPredio;

    return C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _s();

            navigate = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
            _context.next = 4;
            return (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_11__.useQuery)(GET_PREDIOS);

          case 4:
            _yield$useQuery = _context.sent;
            loading = _yield$useQuery.loading;
            error = _yield$useQuery.error;
            data = _yield$useQuery.data;
            console.log(data);
            _useMutation = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_11__.useMutation)(DROP_PREDIO), _useMutation2 = (0,C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useMutation, 1), deletePredioByNumeroPredial = _useMutation2[0];

            dropPredio = function dropPredio(numPre) {
              deletePredioByNumeroPredial({
                variables: {
                  numeroPredial: numPre
                }
              });
            };

            if (!loading) {
              _context.next = 13;
              break;
            }

            return _context.abrupt("return", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
              children: "Loading Users..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 22
            }, _this));

          case 13:
            if (!error) {
              _context.next = 15;
              break;
            }

            return _context.abrupt("return", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
              children: "Error-- No se pudo cargar los predios"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 22
            }, _this));

          case 15:
            return _context.abrupt("return", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Components_Container__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 13
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h1", {
                className: "p-4 text-3xl font-light",
                children: "Predios"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 13
              }, _this), data.allPredios.nodes.map(function (_ref2) {
                var numeroPredial = _ref2.numeroPredial,
                    nombre = _ref2.nombre,
                    municipio = _ref2.municipio,
                    departamento = _ref2.departamento,
                    terrenoId = _ref2.terrenoId;
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                  className: "h-full p-5 m-2 bg-white rounded shadow-lg",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                    className: "items-center m-6 h-2/6",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
                      className: "mb-2 text-xl font-bold",
                      children: ["Numero Predial:", ' ', numeroPredial]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 57,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
                      className: "block",
                      children: ["Nombre predio:", ' ', nombre]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 58,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
                      className: "block",
                      children: ["Departamento:", ' ', departamento]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 59,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
                      className: "block",
                      children: ["Municipio:", ' ', municipio]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 60,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
                      className: "block",
                      children: ["Terreno:", ' ', terrenoId ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
                        children: "Terreno propio"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 62,
                        columnNumber: 42
                      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
                        children: "Ejido"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 62,
                        columnNumber: 66
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 61,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("button", {
                      className: "m-5 text-2xl",
                      onClick: function onClick() {
                        return dropPredio(numeroPredial);
                      },
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faTrashAlt
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 64,
                        columnNumber: 98
                      }, _this), "Eliminar"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 64,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("button", {
                      className: "m-5 text-2xl",
                      onClick: function onClick() {
                        return navigate.push("/updatepredio");
                      },
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faPen
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 65,
                        columnNumber: 103
                      }, _this), "Actualizar"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 65,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("button", {
                      className: "m-5 text-2xl",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faMapMarker
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 66,
                        columnNumber: 58
                      }, _this), "Agregar Terreno"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 66,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("button", {
                      className: "m-5 text-2xl",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faHotel
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 67,
                        columnNumber: 58
                      }, _this), "Agregar Construci\xF3n"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 67,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 56,
                    columnNumber: 21
                  }, _this)
                }, numeroPredial, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 28
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 9
            }, _this));

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }), "uzK0YN1CA+8L3+0Sep9sJVAR8Mk=", false, function () {
    return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter, _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_11__.useQuery, _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_11__.useMutation];
  }));

  return function ListPredios() {
    return _ref.apply(this, arguments);
  };
}();

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


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGlzdGFycHJlZGlvcy4zZTljODFlNDllNjFkNjQwZDM5ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNZSxXQUFXLEdBQUVULGtEQUFGLHlkQUFqQjtBQWNBLElBQU1VLFdBQVcsR0FBRVYsa0RBQUYsNmNBQWpCOztBQVNBLElBQU1XLFdBQVc7QUFBQTs7QUFBQSxrWUFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRVZDLFlBQUFBLFFBRlUsR0FFQ2Ysc0RBQVMsRUFGVjtBQUFBO0FBQUEsbUJBR29CQyw4REFBUSxDQUFDVyxXQUFELENBSDVCOztBQUFBO0FBQUE7QUFHUkksWUFBQUEsT0FIUSxtQkFHUkEsT0FIUTtBQUdBQyxZQUFBQSxLQUhBLG1CQUdBQSxLQUhBO0FBR01DLFlBQUFBLElBSE4sbUJBR01BLElBSE47QUFJaEJDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBSmdCLDJCQU1xQmhCLGlFQUFXLENBQUNXLFdBQUQsQ0FOaEMsME5BTVRRLDJCQU5TOztBQVFWQyxZQUFBQSxVQVJVLEdBUUMsU0FBWEEsVUFBVyxDQUFDQyxNQUFELEVBQVU7QUFDdkJGLGNBQUFBLDJCQUEyQixDQUFDO0FBQUNHLGdCQUFBQSxTQUFTLEVBQUM7QUFBQ0Msa0JBQUFBLGFBQWEsRUFBQ0Y7QUFBZjtBQUFYLGVBQUQsQ0FBM0I7QUFFSCxhQVhlOztBQUFBLGlCQWFiUCxPQWJhO0FBQUE7QUFBQTtBQUFBOztBQUFBLDBEQWFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWJEOztBQUFBO0FBQUEsaUJBY2JDLEtBZGE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsMERBY0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJB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QUFBQSxHQUFIO0FBQUEsWUFFSXpCLGtEQUZKLEVBR3VCQywwREFIdkIsRUFNd0JDLDZEQU54QjtBQUFBOztBQUFBLGtCQUFYWSxXQUFXO0FBQUE7QUFBQTtBQUFBLEdBQWpCOztLQUFNQTtBQTBDTiwrREFBZUEsV0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGlzdGFycHJlZGlvcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7dXNlUXVlcnksdXNlTXV0YXRpb259ZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IHtncWx9IGZyb20gJ2Fwb2xsby1ib29zdCdcclxuaW1wb3J0IHsgZmFUcmFzaEFsdCxmYVBlbixmYU1hcE1hcmtlcixmYUhvdGVsLCBmYVRoZXJtb21ldGVyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcblxyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGFpbmVyJztcclxuaW1wb3J0IENhcmRQcmVkaW8gZnJvbSAnLi4vQ29tcG9uZW50cy9DYXJkUHJlZGlvJztcclxuXHJcbmNvbnN0IEdFVF9QUkVESU9TID1ncWxgXHJcbiAgICBxdWVyeSBnZXRQcmVkaW9zIHtcclxuICAgICAgICBhbGxQcmVkaW9zIHtcclxuICAgICAgICAgICAgbm9kZXMge1xyXG4gICAgICAgICAgICAgIG51bWVyb1ByZWRpYWxcclxuICAgICAgICAgICAgICBub21icmVcclxuICAgICAgICAgICAgICBtdW5pY2lwaW9cclxuICAgICAgICAgICAgICBkZXBhcnRhbWVudG9cclxuICAgICAgICAgICAgICB0ZXJyZW5vSWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IERST1BfUFJFRElPID1ncWxgXHJcbiAgICBtdXRhdGlvbiBEZWxldGVQcmVkaW9CeU51bWVyb1ByZWRpYWwoJG51bWVyb1ByZWRpYWw6SW50ISl7XHJcbiAgICAgICAgZGVsZXRlUHJlZGlvQnlOdW1lcm9QcmVkaWFsKGlucHV0OiB7bnVtZXJvUHJlZGlhbDokbnVtZXJvUHJlZGlhbH0pIHtcclxuICAgICAgICAgICAgY2xpZW50TXV0YXRpb25JZFxyXG4gICAgICAgICAgICBkZWxldGVkUHJlZGlvSWRcclxuICAgICAgICAgIH1cclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IExpc3RQcmVkaW9zID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlUm91dGVyKCk7XHJcbiAgICAgY29uc3Qge2xvYWRpbmcsZXJyb3IsZGF0YX0gPSBhd2FpdCB1c2VRdWVyeShHRVRfUFJFRElPUylcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBcclxuICAgIGNvbnN0IFtkZWxldGVQcmVkaW9CeU51bWVyb1ByZWRpYWxdPSB1c2VNdXRhdGlvbihEUk9QX1BSRURJTylcclxuXHJcbiAgICBjb25zdCBkcm9wUHJlZGlvPShudW1QcmUpPT57XHJcbiAgICAgICAgZGVsZXRlUHJlZGlvQnlOdW1lcm9QcmVkaWFsKHt2YXJpYWJsZXM6e251bWVyb1ByZWRpYWw6bnVtUHJlfX0pXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaWYobG9hZGluZylyZXR1cm48cD5Mb2FkaW5nIFVzZXJzLi4uPC9wPlxyXG4gICAgaWYoZXJyb3IpIHJldHVybiA8cD5FcnJvci0tIE5vIHNlIHB1ZG8gY2FyZ2FyIGxvcyBwcmVkaW9zPC9wPlxyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPENvbnRhaW5lci8+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwLTQgdGV4dC0zeGwgZm9udC1saWdodFwiPlByZWRpb3M8L2gxPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmFsbFByZWRpb3Mubm9kZXMubWFwKCh7bnVtZXJvUHJlZGlhbCxub21icmUsbXVuaWNpcGlvLGRlcGFydGFtZW50byx0ZXJyZW5vSWR9KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17bnVtZXJvUHJlZGlhbH0gY2xhc3NOYW1lPVwiaC1mdWxsIHAtNSBtLTIgYmctd2hpdGUgcm91bmRlZCBzaGFkb3ctbGdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciBtLTYgaC0yLzZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWItMiB0ZXh0LXhsIGZvbnQtYm9sZFwiPk51bWVybyBQcmVkaWFsOnsnICd9e251bWVyb1ByZWRpYWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9ja1wiID5Ob21icmUgcHJlZGlvOnsnICd9e25vbWJyZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrXCIgPkRlcGFydGFtZW50bzp7JyAnfXtkZXBhcnRhbWVudG99PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9ja1wiID5NdW5pY2lwaW86eycgJ317bXVuaWNpcGlvfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2tcIiA+VGVycmVubzp7JyAnfXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlcnJlbm9JZCA/ICg8YT5UZXJyZW5vIHByb3BpbzwvYT4pOig8YT5FamlkbzwvYT4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibS01IHRleHQtMnhsXCIgb25DbGljaz17KCk9PmRyb3BQcmVkaW8obnVtZXJvUHJlZGlhbCl9PjxGb250QXdlc29tZUljb24gaWNvbj17ZmFUcmFzaEFsdH0vPkVsaW1pbmFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibS01IHRleHQtMnhsXCIgb25DbGljaz17KCk9Pm5hdmlnYXRlLnB1c2goXCIvdXBkYXRlcHJlZGlvXCIpfT48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGVufS8+QWN0dWFsaXphcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm0tNSB0ZXh0LTJ4bFwiPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFNYXBNYXJrZXJ9Lz5BZ3JlZ2FyIFRlcnJlbm88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtLTUgdGV4dC0yeGxcIj48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSG90ZWx9Lz5BZ3JlZ2FyIENvbnN0cnVjacOzbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBMaXN0UHJlZGlvczsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsInVzZVF1ZXJ5IiwidXNlTXV0YXRpb24iLCJncWwiLCJmYVRyYXNoQWx0IiwiZmFQZW4iLCJmYU1hcE1hcmtlciIsImZhSG90ZWwiLCJmYVRoZXJtb21ldGVyIiwiRm9udEF3ZXNvbWVJY29uIiwiQ29udGFpbmVyIiwiQ2FyZFByZWRpbyIsIkdFVF9QUkVESU9TIiwiRFJPUF9QUkVESU8iLCJMaXN0UHJlZGlvcyIsIm5hdmlnYXRlIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkZWxldGVQcmVkaW9CeU51bWVyb1ByZWRpYWwiLCJkcm9wUHJlZGlvIiwibnVtUHJlIiwidmFyaWFibGVzIiwibnVtZXJvUHJlZGlhbCIsImFsbFByZWRpb3MiLCJub2RlcyIsIm1hcCIsIm5vbWJyZSIsIm11bmljaXBpbyIsImRlcGFydGFtZW50byIsInRlcnJlbm9JZCIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9