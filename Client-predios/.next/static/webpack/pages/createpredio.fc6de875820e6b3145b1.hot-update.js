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






var CREATE_PREDIOS = (0,apollo_boost__WEBPACK_IMPORTED_MODULE_5__.gql)(_templateObject || (_templateObject = (0,C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n    mutation CreatePredio($numeroPredial:Int!,$nombre:String!,$departamento:String!,$municipio:String!,$terrenoId:Int){\n        createPredio(input: {predio: {numeroPredial: $numeroPredial, nombre: $nombre, departamento:$departamento, municipio: $municipio, terrenoId: $terrenoId}}\n      ) {\n        clientMutationId\n      }\n    }\n    \n"])));

var CreatePredio = function CreatePredio() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
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
      setMunicipio = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
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
              lineNumber: 38,
              columnNumber: 30
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
              type: "text",
              className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
              id: "numeroPredial",
              onChange: function onChange(e) {
                setNumero(parseInt(e.target.value));
              },
              value: numeroPredial
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 30
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 26
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "mb-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
              className: "block text-sm font-bold text-gray-700 md-2",
              htmlFor: "nombre",
              children: "Nombre"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 30
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
              className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
              id: "nombre",
              onChange: function onChange(e) {
                setNombre(e.target.value);
              },
              value: nombre
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 30
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 26
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "mb-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
              className: "block text-sm font-bold text-gray-700 md-2",
              htmlFor: "nombre",
              children: "Departamento"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 30
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
              className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
              id: "departamento",
              onChange: function onChange(e) {
                setDepartamento(e.target.value);
              },
              value: departamento
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 30
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 26
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "mb-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
              className: "block text-sm font-bold text-gray-700 md-2",
              htmlFor: "nombre",
              children: "Municipio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 30
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
              className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
              id: "municipio",
              onChange: function onChange(e) {
                setMunicipio(e.target.value);
              },
              value: municipio
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 30
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 26
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "mb-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
              className: "block text-sm font-bold text-gray-700 md-2",
              htmlFor: "nombre",
              children: "Terreno Id"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 30
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
              type: "text",
              className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
              id: "terrenoId",
              onChange: function onChange(e) {
                setTerrenoId(parseInt(e.target.value));
              },
              value: terrenoId
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 30
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 26
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "submit",
            className: "w-full p-2 mt-5 font-bold text-white uppercase bg-green-500 rounded hover:bg-gray-900",
            value: "Agregar Predio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
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

_s(CreatePredio, "8HCdDZj1Fqch2ktWbLrgGTfwGcU=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3JlYXRlcHJlZGlvLmZjNmRlODc1ODIwZTZiMzE0NWIxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1NLGNBQWMsR0FBRUQsaURBQUYsb2tCQUFwQjs7QUFVQSxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBRXZCLGtCQUFrQ04sK0NBQVEsRUFBMUM7QUFBQSxNQUFPTyxhQUFQO0FBQUEsTUFBcUJDLFNBQXJCOztBQUNBLG1CQUEyQlIsK0NBQVEsQ0FBQyxFQUFELENBQW5DO0FBQUEsTUFBT1MsTUFBUDtBQUFBLE1BQWNDLFNBQWQ7O0FBQ0EsbUJBQXVDViwrQ0FBUSxDQUFDLEVBQUQsQ0FBL0M7QUFBQSxNQUFPVyxZQUFQO0FBQUEsTUFBb0JDLGVBQXBCOztBQUNBLG1CQUFpQ1osK0NBQVEsQ0FBQyxFQUFELENBQXpDO0FBQUEsTUFBT2EsU0FBUDtBQUFBLE1BQWlCQyxZQUFqQjs7QUFDQSxtQkFBaUNkLCtDQUFRLEVBQXpDO0FBQUEsTUFBT2UsU0FBUDtBQUFBLE1BQWlCQyxZQUFqQjs7QUFDQSxxQkFBc0JiLGdFQUFXLENBQUNFLGNBQUQsQ0FBakM7QUFBQTtBQUFBLE1BQU9ZLFlBQVA7O0FBRUEsc0JBQ0k7QUFBQSw0QkFDSSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFJLGVBQVMsRUFBQyx5QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBSUk7QUFBSyxlQUFTLEVBQUUsMkJBQWhCO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFFLCtCQUFoQjtBQUFBLCtCQUNLO0FBQU0sa0JBQVEsRUFBRSxrQkFBQ0MsQ0FBRCxFQUFLO0FBQ2RBLFlBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNDRixZQUFBQSxZQUFZLENBQUM7QUFBQ0cs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Z0JBQUUsRUFBQyxXQUhIO0FBSUEsc0JBQVEsRUFBRSxrQkFBQ0ssQ0FBRCxFQUFLO0FBQUNGLGdCQUFBQSxZQUFZLENBQUNLLFFBQVEsQ0FBQ0gsQ0FBQyxDQUFDSSxNQUFGLENBQVNDLEtBQVYsQ0FBVCxDQUFaO0FBQXVDLGVBSnZEO0FBS0csbUJBQUssRUFBRVI7QUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF0REosZUFtRUk7QUFBTyxnQkFBSSxFQUFDLFFBQVo7QUFDQSxxQkFBUyxFQUFFLHVGQURYO0FBRUMsaUJBQUssRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbkVKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFrRkgsQ0EzRkQ7O0dBQU1UO1VBT29CSDs7O0tBUHBCRztBQTZGTiwrREFBZUEsWUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jcmVhdGVwcmVkaW8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGFpbmVyJztcclxuaW1wb3J0IHt1c2VRdWVyeSx1c2VNdXRhdGlvbn1mcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQge2dxbH0gZnJvbSAnYXBvbGxvLWJvb3N0J1xyXG5cclxuY29uc3QgQ1JFQVRFX1BSRURJT1MgPWdxbGBcclxuICAgIG11dGF0aW9uIENyZWF0ZVByZWRpbygkbnVtZXJvUHJlZGlhbDpJbnQhLCRub21icmU6U3RyaW5nISwkZGVwYXJ0YW1lbnRvOlN0cmluZyEsJG11bmljaXBpbzpTdHJpbmchLCR0ZXJyZW5vSWQ6SW50KXtcclxuICAgICAgICBjcmVhdGVQcmVkaW8oaW5wdXQ6IHtwcmVkaW86IHtudW1lcm9QcmVkaWFsOiAkbnVtZXJvUHJlZGlhbCwgbm9tYnJlOiAkbm9tYnJlLCBkZXBhcnRhbWVudG86JGRlcGFydGFtZW50bywgbXVuaWNpcGlvOiAkbXVuaWNpcGlvLCB0ZXJyZW5vSWQ6ICR0ZXJyZW5vSWR9fVxyXG4gICAgICApIHtcclxuICAgICAgICBjbGllbnRNdXRhdGlvbklkXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5gO1xyXG5cclxuY29uc3QgQ3JlYXRlUHJlZGlvID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtudW1lcm9QcmVkaWFsLHNldE51bWVyb10gPSB1c2VTdGF0ZSgpXHJcbiAgICBjb25zdCBbbm9tYnJlLHNldE5vbWJyZV0gPSB1c2VTdGF0ZSgnJykgXHJcbiAgICBjb25zdCBbZGVwYXJ0YW1lbnRvLHNldERlcGFydGFtZW50b10gPSB1c2VTdGF0ZSgnJykgXHJcbiAgICBjb25zdCBbbXVuaWNpcGlvLHNldE11bmljaXBpb10gPSB1c2VTdGF0ZSgnJykgXHJcbiAgICBjb25zdCBbdGVycmVub0lkLHNldFRlcnJlbm9JZF0gPSB1c2VTdGF0ZSgpIFxyXG4gICAgY29uc3QgW2NyZWF0ZVByZWRpb109IHVzZU11dGF0aW9uKENSRUFURV9QUkVESU9TKVxyXG5cclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDb250YWluZXIvPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicC00IHRleHQtM3hsIGZvbnQtbGlnaHRcIj5DcmVhciBOdWV2byBQcmVkaW88L2gxPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0xMFwiPiAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJ3LWZ1bGwgbWF4LXctM3hsIHAtMyBiZy13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlUHJlZGlvKHt2YXJpYWJsZXM6e251bWVyb1ByZWRpYWw6bnVtZXJvUHJlZGlhbCxub21icmU6bm9tYnJlLGRlcGFydGFtZW50bzpkZXBhcnRhbWVudG8sbXVuaWNpcGlvOm11bmljaXBpbyx0ZXJyZW5vSWQ6dGVycmVub0lkfX0gKSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9XCJibG9jayB0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIG1kLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJub21icmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1lcm8gUHJlZGlhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwidy1mdWxsIHB4LTMgcHktMiB0ZXh0LWdyYXktNzAwIGJvcmRlciByb3VuZGVkIHNoYWRvdyBhcHBlYXJlbmNlLW5vbmUgbGVhZGluZy1saWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW90dWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibnVtZXJvUHJlZGlhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+e3NldE51bWVybyhwYXJzZUludChlLnRhcmdldC52YWx1ZSkpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bnVtZXJvUHJlZGlhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9XCJibG9jayB0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIG1kLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJub21icmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb21icmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwidy1mdWxsIHB4LTMgcHktMiB0ZXh0LWdyYXktNzAwIGJvcmRlciByb3VuZGVkIHNoYWRvdyBhcHBlYXJlbmNlLW5vbmUgbGVhZGluZy1saWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW90dWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibm9tYnJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT57c2V0Tm9tYnJlKGUudGFyZ2V0LnZhbHVlKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25vbWJyZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9XCJibG9jayB0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIG1kLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJub21icmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXBhcnRhbWVudG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwidy1mdWxsIHB4LTMgcHktMiB0ZXh0LWdyYXktNzAwIGJvcmRlciByb3VuZGVkIHNoYWRvdyBhcHBlYXJlbmNlLW5vbmUgbGVhZGluZy1saWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW90dWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVwYXJ0YW1lbnRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT57c2V0RGVwYXJ0YW1lbnRvKGUudGFyZ2V0LnZhbHVlKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RlcGFydGFtZW50b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9XCJibG9jayB0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIG1kLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJub21icmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNdW5pY2lwaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwidy1mdWxsIHB4LTMgcHktMiB0ZXh0LWdyYXktNzAwIGJvcmRlciByb3VuZGVkIHNoYWRvdyBhcHBlYXJlbmNlLW5vbmUgbGVhZGluZy1saWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW90dWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibXVuaWNpcGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT57c2V0TXVuaWNpcGlvKGUudGFyZ2V0LnZhbHVlKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e211bmljaXBpb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9XCJibG9jayB0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIG1kLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJub21icmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXJyZW5vIElkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9XCJ3LWZ1bGwgcHgtMyBweS0yIHRleHQtZ3JheS03MDAgYm9yZGVyIHJvdW5kZWQgc2hhZG93IGFwcGVhcmVuY2Utbm9uZSBsZWFkaW5nLWxpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3R1bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0ZXJyZW5vSWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PntzZXRUZXJyZW5vSWQocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RlcnJlbm9JZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwidy1mdWxsIHAtMiBtdC01IGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHVwcGVyY2FzZSBiZy1ncmVlbi01MDAgcm91bmRlZCBob3ZlcjpiZy1ncmF5LTkwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJBZ3JlZ2FyIFByZWRpb1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVByZWRpbzsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNvbnRhaW5lciIsInVzZVF1ZXJ5IiwidXNlTXV0YXRpb24iLCJncWwiLCJDUkVBVEVfUFJFRElPUyIsIkNyZWF0ZVByZWRpbyIsIm51bWVyb1ByZWRpYWwiLCJzZXROdW1lcm8iLCJub21icmUiLCJzZXROb21icmUiLCJkZXBhcnRhbWVudG8iLCJzZXREZXBhcnRhbWVudG8iLCJtdW5pY2lwaW8iLCJzZXRNdW5pY2lwaW8iLCJ0ZXJyZW5vSWQiLCJzZXRUZXJyZW5vSWQiLCJjcmVhdGVQcmVkaW8iLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YXJpYWJsZXMiLCJwYXJzZUludCIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==