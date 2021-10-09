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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Container */ "./Components/Container.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/index.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\judaz\\Documents\\VS CODE\\Next, Graphql y postgres\\Proyecto Predios\\Client-predios\\pages\\createpredio.js",
    _templateObject,
    _templateObject2,
    _this = undefined,
    _s = $RefreshSig$();







var CREATE_PREDIOS = (0,apollo_boost__WEBPACK_IMPORTED_MODULE_6__.gql)(_templateObject || (_templateObject = (0,C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n    mutation CreatePredio($numeroPredial:Int!,$nombre:String!,$departamento:String!,$municipio:String!,$terrenoId:Int){\n        createPredio(input: {predio: {numeroPredial: $numeroPredial, nombre: $nombre, departamento:$departamento, municipio: $municipio, terrenoId: $terrenoId}}\n      ) {\n        clientMutationId\n      }\n    }\n    \n"])));
var CREATE_PERSONA_NATURAL = (0,apollo_boost__WEBPACK_IMPORTED_MODULE_6__.gql)(_templateObject2 || (_templateObject2 = (0,C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n    mutation CreatePersonaNatural($numeroDocumento:Int!,$tipoDocumento:String!,$nombre:String!,$apellido:String!,$direccion:String!,$telefono:String!,$correo:String,$fknumeroPredial:Int!){\n        createPesonasNaturale(\n            input: {pesonasNaturale: {numeroDocumento: $numeroDocumento, tipoDocumento: $tipoDocumento, nombre: $nombre, apellido: $apellido, direccion: $direccion, telefono: $telefono, correo: $correo}}\n          ) {\n            clientMutationId\n          }\n          createPropietariosNaturale(\n            input: {propietariosNaturale: {fknumeroPredial: $fknumeroPredial, numeroDocumento: $numeroDocumento}}\n          ) {\n            clientMutationId\n          }\n    }\n\n"])));

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

  var _useMutation = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__.useMutation)(CREATE_PREDIOS),
      _useMutation2 = (0,C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useMutation, 1),
      createPredio = _useMutation2[0];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      nombrePersona = _useState6[0],
      setNombrePers = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      numeroDocume = _useState7[0],
      setNumeroDocumento = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      tipo = _useState8[0],
      setTipo = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      apellidoPersona = _useState9[0],
      setApellido = _useState9[1];

  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      direccion = _useState10[0],
      setDireccion = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      telefono = _useState11[0],
      setTelefono = _useState11[1];

  var _useState12 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      correo = _useState12[0],
      setCorreo = _useState12[1];

  var _useMutation3 = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__.useMutation)(CREATE_PERSONA_NATURAL),
      _useMutation4 = (0,C_Users_judaz_Documents_VS_CODE_Next_Graphql_y_postgres_Proyecto_Predios_Client_predios_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useMutation3, 1),
      createPersonaNatural = _useMutation4[0];

  var navigate = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Components_Container__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
      className: "p-4 text-3xl font-light",
      children: "Crear Nuevo Predio"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "flex justify-center mt-10",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "w-full max-w-3xl p-3 bg-white",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("form", {
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
            navigate.push('/listarpredios');
            createPersonaNatural({
              variables: {
                nombre: nombrePersona,
                numeroDocumento: numeroDocume,
                tipoDocumento: tipo,
                apellido: apellidoPersona,
                direccion: direccion,
                telefono: telefono,
                correo: correo,
                fknumeroPredial: numeroPredial
              }
            });
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "mb-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
              className: "block text-sm font-bold text-gray-700 md-2",
              htmlFor: "nombre",
              children: "Numero Predial"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 30
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
              type: "text",
              className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
              id: "numeroPredial",
              onChange: function onChange(e) {
                setNumero(parseInt(e.target.value));
              },
              value: numeroPredial
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 30
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 26
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "mb-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
              className: "block text-sm font-bold text-gray-700 md-2",
              htmlFor: "nombre",
              children: "Nombre"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 30
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
              className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
              id: "nombre",
              onChange: function onChange(e) {
                setNombre(e.target.value);
              },
              value: nombre
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 30
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 26
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "mb-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
              className: "block text-sm font-bold text-gray-700 md-2",
              htmlFor: "nombre",
              children: "Departamento"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 30
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
              className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
              id: "departamento",
              onChange: function onChange(e) {
                setDepartamento(e.target.value);
              },
              value: departamento
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 30
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 26
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "mb-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
              className: "block text-sm font-bold text-gray-700 md-2",
              htmlFor: "nombre",
              children: "Municipio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 30
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
              className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
              id: "municipio",
              onChange: function onChange(e) {
                setMunicipio(e.target.value);
              },
              value: municipio
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 30
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 26
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "mb-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
              className: "block text-sm font-bold text-gray-700 md-2",
              htmlFor: "nombre",
              children: "Terreno Id"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 30
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
              type: "text",
              className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
              id: "terrenoId",
              onChange: function onChange(e) {
                setTerrenoId(parseInt(e.target.value));
              },
              value: terrenoId
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 30
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 26
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h2", {
              className: "p-4 text-2xl font-light",
              children: "Perona Natural"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: "mb-4",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
                className: "block text-sm font-bold text-gray-700 md-2",
                htmlFor: "nombre",
                children: "Numero Documento"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 30
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
                type: "text",
                className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
                id: "numeroPredial",
                onChange: function onChange(e) {
                  setNumeroDocumento(parseInt(e.target.value));
                },
                value: numeroDocume
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 30
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: "mb-4",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
                className: "block text-sm font-bold text-gray-700 md-2",
                htmlFor: "nombre",
                children: "Tipo documento"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 30
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
                type: "text",
                className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
                id: "numeroPredial",
                onChange: function onChange(e) {
                  setTipo(e.target.value);
                },
                value: tipo
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 30
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 26
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: "mb-4",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
                className: "block text-sm font-bold text-gray-700 md-2",
                htmlFor: "nombre",
                children: "Nombre Persona"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 30
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
                type: "text",
                className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
                id: "numeroPredial",
                onChange: function onChange(e) {
                  setNombrePers(e.target.value);
                },
                value: nombrePersona
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 30
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 26
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: "mb-4",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
                className: "block text-sm font-bold text-gray-700 md-2",
                htmlFor: "nombre",
                children: "Apellido"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 30
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
                type: "text",
                className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
                id: "numeroPredial",
                onChange: function onChange(e) {
                  setApellido(e.target.value);
                },
                value: apellidoPersona
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 177,
                columnNumber: 30
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 26
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: "mb-4",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
                className: "block text-sm font-bold text-gray-700 md-2",
                htmlFor: "nombre",
                children: "Direcci\xF3n"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 30
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
                type: "text",
                className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
                id: "numeroPredial",
                onChange: function onChange(e) {
                  setDireccion(e.target.value);
                },
                value: direccion
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 30
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 26
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: "mb-4",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
                className: "block text-sm font-bold text-gray-700 md-2",
                htmlFor: "nombre",
                children: "Telefono"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 201,
                columnNumber: 30
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
                type: "text",
                className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
                id: "numeroPredial",
                onChange: function onChange(e) {
                  setTelefono(e.target.value);
                },
                value: telefono
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 30
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 26
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: "mb-4",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
                className: "block text-sm font-bold text-gray-700 md-2",
                htmlFor: "nombre",
                children: "Correo"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 215,
                columnNumber: 30
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
                type: "text",
                className: "w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline",
                id: "numeroPredial",
                onChange: function onChange(e) {
                  setCorreo(e.target.value);
                },
                value: correo
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 30
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 26
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 26
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h2", {
              className: "p-4 text-2xl font-light",
              children: "Perona Juridica"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 230,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
            type: "submit",
            className: "w-full p-2 mt-5 font-bold text-white uppercase bg-green-500 rounded hover:bg-gray-900",
            value: "Agregar Predio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 26
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 22
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 9
  }, _this);
};

_s(CreatePredio, "yu/ZXvcU3164xu85c1tRhH3yivU=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__.useMutation, _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__.useMutation, next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3JlYXRlcHJlZGlvLmRkNzdiMGVkMTkyNzYzY2EzM2IzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTU8sY0FBYyxHQUFFRCxpREFBRixva0JBQXBCO0FBVUEsSUFBTUUsc0JBQXNCLEdBQUVGLGlEQUFGLGs3QkFBNUI7O0FBZ0JBLElBQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFFdkIsa0JBQWtDUiwrQ0FBUSxFQUExQztBQUFBLE1BQU9TLGFBQVA7QUFBQSxNQUFxQkMsU0FBckI7O0FBQ0EsbUJBQTJCViwrQ0FBUSxDQUFDLEVBQUQsQ0FBbkM7QUFBQSxNQUFPVyxNQUFQO0FBQUEsTUFBY0MsU0FBZDs7QUFDQSxtQkFBdUNaLCtDQUFRLENBQUMsRUFBRCxDQUEvQztBQUFBLE1BQU9hLFlBQVA7QUFBQSxNQUFvQkMsZUFBcEI7O0FBQ0EsbUJBQWlDZCwrQ0FBUSxDQUFDLEVBQUQsQ0FBekM7QUFBQSxNQUFPZSxTQUFQO0FBQUEsTUFBaUJDLFlBQWpCOztBQUNBLG1CQUFpQ2hCLCtDQUFRLEVBQXpDO0FBQUEsTUFBT2lCLFNBQVA7QUFBQSxNQUFpQkMsWUFBakI7O0FBQ0EscUJBQXNCZCxnRUFBVyxDQUFDRSxjQUFELENBQWpDO0FBQUE7QUFBQSxNQUFPYSxZQUFQOztBQUNBLG1CQUFzQ25CLCtDQUFRLENBQUMsRUFBRCxDQUE5QztBQUFBLE1BQU9vQixhQUFQO0FBQUEsTUFBcUJDLGFBQXJCOztBQUNBLG1CQUEwQ3JCLCtDQUFRLENBQUMsRUFBRCxDQUFsRDtBQUFBLE1BQU9zQixZQUFQO0FBQUEsTUFBb0JDLGtCQUFwQjs7QUFDQSxtQkFBdUJ2QiwrQ0FBUSxDQUFDLEVBQUQsQ0FBL0I7QUFBQSxNQUFPd0IsSUFBUDtBQUFBLE1BQVlDLE9BQVo7O0FBQ0EsbUJBQXNDekIsK0NB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QUFPLHlCQUFTLEVBQUUsNENBQWxCO0FBQ0EsdUJBQU8sRUFBQyxRQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBS0k7QUFDQSxvQkFBSSxFQUFDLE1BREw7QUFFQSx5QkFBUyxFQUFFLDRIQUZYO0FBR0Esa0JBQUUsRUFBQyxlQUhIO0FBSUEsd0JBQVEsRUFBRSxrQkFBQ00sQ0FBRCxFQUFLO0FBQUNILGtCQUFBQSxTQUFTLENBQUNHLENBQUMsQ0FBQ1MsTUFBRixDQUFTQyxLQUFWLENBQVQ7QUFBMEIsaUJBSjFDO0FBS0EscUJBQUssRUFBRWQ7QUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF0RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXRFSixlQTJLRztBQUFBLG1DQUNJO0FBQUksdUJBQVMsRUFBQyx5QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBM0tILGVBK0tJO0FBQU8sZ0JBQUksRUFBQyxRQUFaO0FBQ0EscUJBQVMsRUFBRSx1RkFEWDtBQUVDLGlCQUFLLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQS9LSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBOExILENBaE5EOztHQUFNeEI7VUFPb0JKLDhEQVFTQSw4REFDZEg7OztLQWhCZk87QUFrTk4sK0RBQWVBLFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3JlYXRlcHJlZGlvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGFpbmVyJztcclxuaW1wb3J0IHt1c2VRdWVyeSx1c2VNdXRhdGlvbn1mcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQge2dxbH0gZnJvbSAnYXBvbGxvLWJvb3N0J1xyXG5cclxuY29uc3QgQ1JFQVRFX1BSRURJT1MgPWdxbGBcclxuICAgIG11dGF0aW9uIENyZWF0ZVByZWRpbygkbnVtZXJvUHJlZGlhbDpJbnQhLCRub21icmU6U3RyaW5nISwkZGVwYXJ0YW1lbnRvOlN0cmluZyEsJG11bmljaXBpbzpTdHJpbmchLCR0ZXJyZW5vSWQ6SW50KXtcclxuICAgICAgICBjcmVhdGVQcmVkaW8oaW5wdXQ6IHtwcmVkaW86IHtudW1lcm9QcmVkaWFsOiAkbnVtZXJvUHJlZGlhbCwgbm9tYnJlOiAkbm9tYnJlLCBkZXBhcnRhbWVudG86JGRlcGFydGFtZW50bywgbXVuaWNpcGlvOiAkbXVuaWNpcGlvLCB0ZXJyZW5vSWQ6ICR0ZXJyZW5vSWR9fVxyXG4gICAgICApIHtcclxuICAgICAgICBjbGllbnRNdXRhdGlvbklkXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5gO1xyXG5cclxuY29uc3QgQ1JFQVRFX1BFUlNPTkFfTkFUVVJBTCA9Z3FsYFxyXG4gICAgbXV0YXRpb24gQ3JlYXRlUGVyc29uYU5hdHVyYWwoJG51bWVyb0RvY3VtZW50bzpJbnQhLCR0aXBvRG9jdW1lbnRvOlN0cmluZyEsJG5vbWJyZTpTdHJpbmchLCRhcGVsbGlkbzpTdHJpbmchLCRkaXJlY2Npb246U3RyaW5nISwkdGVsZWZvbm86U3RyaW5nISwkY29ycmVvOlN0cmluZywkZmtudW1lcm9QcmVkaWFsOkludCEpe1xyXG4gICAgICAgIGNyZWF0ZVBlc29uYXNOYXR1cmFsZShcclxuICAgICAgICAgICAgaW5wdXQ6IHtwZXNvbmFzTmF0dXJhbGU6IHtudW1lcm9Eb2N1bWVudG86ICRudW1lcm9Eb2N1bWVudG8sIHRpcG9Eb2N1bWVudG86ICR0aXBvRG9jdW1lbnRvLCBub21icmU6ICRub21icmUsIGFwZWxsaWRvOiAkYXBlbGxpZG8sIGRpcmVjY2lvbjogJGRpcmVjY2lvbiwgdGVsZWZvbm86ICR0ZWxlZm9ubywgY29ycmVvOiAkY29ycmVvfX1cclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBjbGllbnRNdXRhdGlvbklkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjcmVhdGVQcm9waWV0YXJpb3NOYXR1cmFsZShcclxuICAgICAgICAgICAgaW5wdXQ6IHtwcm9waWV0YXJpb3NOYXR1cmFsZToge2ZrbnVtZXJvUHJlZGlhbDogJGZrbnVtZXJvUHJlZGlhbCwgbnVtZXJvRG9jdW1lbnRvOiAkbnVtZXJvRG9jdW1lbnRvfX1cclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBjbGllbnRNdXRhdGlvbklkXHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5gXHJcblxyXG5jb25zdCBDcmVhdGVQcmVkaW8gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW251bWVyb1ByZWRpYWwsc2V0TnVtZXJvXSA9IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IFtub21icmUsc2V0Tm9tYnJlXSA9IHVzZVN0YXRlKCcnKSBcclxuICAgIGNvbnN0IFtkZXBhcnRhbWVudG8sc2V0RGVwYXJ0YW1lbnRvXSA9IHVzZVN0YXRlKCcnKSBcclxuICAgIGNvbnN0IFttdW5pY2lwaW8sc2V0TXVuaWNpcGlvXSA9IHVzZVN0YXRlKCcnKSBcclxuICAgIGNvbnN0IFt0ZXJyZW5vSWQsc2V0VGVycmVub0lkXSA9IHVzZVN0YXRlKCkgXHJcbiAgICBjb25zdCBbY3JlYXRlUHJlZGlvXT0gdXNlTXV0YXRpb24oQ1JFQVRFX1BSRURJT1MpXHJcbiAgICBjb25zdCBbbm9tYnJlUGVyc29uYSxzZXROb21icmVQZXJzXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW251bWVyb0RvY3VtZSxzZXROdW1lcm9Eb2N1bWVudG9dID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbdGlwbyxzZXRUaXBvXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2FwZWxsaWRvUGVyc29uYSxzZXRBcGVsbGlkb10gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtkaXJlY2Npb24sc2V0RGlyZWNjaW9uXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3RlbGVmb25vLHNldFRlbGVmb25vXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2NvcnJlbyxzZXRDb3JyZW9dID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbY3JlYXRlUGVyc29uYU5hdHVyYWxdID0gdXNlTXV0YXRpb24oQ1JFQVRFX1BFUlNPTkFfTkFUVVJBTClcclxuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPENvbnRhaW5lci8+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwLTQgdGV4dC0zeGwgZm9udC1saWdodFwiPkNyZWFyIE51ZXZvIFByZWRpbzwvaDE+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTEwXCI+ICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cInctZnVsbCBtYXgtdy0zeGwgcC0zIGJnLXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVQcmVkaW8oe3ZhcmlhYmxlczp7bnVtZXJvUHJlZGlhbDpudW1lcm9QcmVkaWFsLG5vbWJyZTpub21icmUsZGVwYXJ0YW1lbnRvOmRlcGFydGFtZW50byxtdW5pY2lwaW86bXVuaWNpcGlvLHRlcnJlbm9JZDp0ZXJyZW5vSWR9fSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlLnB1c2goJy9saXN0YXJwcmVkaW9zJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVQZXJzb25hTmF0dXJhbCh7dmFyaWFibGVzOntub21icmU6bm9tYnJlUGVyc29uYSxudW1lcm9Eb2N1bWVudG86bnVtZXJvRG9jdW1lLHRpcG9Eb2N1bWVudG86dGlwbyxhcGVsbGlkbzphcGVsbGlkb1BlcnNvbmEsZGlyZWNjaW9uOmRpcmVjY2lvbix0ZWxlZm9ubzp0ZWxlZm9ubyxjb3JyZW86Y29ycmVvLGZrbnVtZXJvUHJlZGlhbDpudW1lcm9QcmVkaWFsfX0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9XCJibG9jayB0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIG1kLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJub21icmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1lcm8gUHJlZGlhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwidy1mdWxsIHB4LTMgcHktMiB0ZXh0LWdyYXktNzAwIGJvcmRlciByb3VuZGVkIHNoYWRvdyBhcHBlYXJlbmNlLW5vbmUgbGVhZGluZy1saWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW90dWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibnVtZXJvUHJlZGlhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+e3NldE51bWVybyhwYXJzZUludChlLnRhcmdldC52YWx1ZSkpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bnVtZXJvUHJlZGlhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9XCJibG9jayB0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIG1kLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJub21icmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb21icmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwidy1mdWxsIHB4LTMgcHktMiB0ZXh0LWdyYXktNzAwIGJvcmRlciByb3VuZGVkIHNoYWRvdyBhcHBlYXJlbmNlLW5vbmUgbGVhZGluZy1saWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW90dWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibm9tYnJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT57c2V0Tm9tYnJlKGUudGFyZ2V0LnZhbHVlKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25vbWJyZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9XCJibG9jayB0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIG1kLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJub21icmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXBhcnRhbWVudG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwidy1mdWxsIHB4LTMgcHktMiB0ZXh0LWdyYXktNzAwIGJvcmRlciByb3VuZGVkIHNoYWRvdyBhcHBlYXJlbmNlLW5vbmUgbGVhZGluZy1saWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW90dWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVwYXJ0YW1lbnRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT57c2V0RGVwYXJ0YW1lbnRvKGUudGFyZ2V0LnZhbHVlKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RlcGFydGFtZW50b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9XCJibG9jayB0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIG1kLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJub21icmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNdW5pY2lwaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwidy1mdWxsIHB4LTMgcHktMiB0ZXh0LWdyYXktNzAwIGJvcmRlciByb3VuZGVkIHNoYWRvdyBhcHBlYXJlbmNlLW5vbmUgbGVhZGluZy1saWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW90dWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibXVuaWNpcGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT57c2V0TXVuaWNpcGlvKGUudGFyZ2V0LnZhbHVlKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e211bmljaXBpb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9XCJibG9jayB0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIG1kLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJub21icmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXJyZW5vIElkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9XCJ3LWZ1bGwgcHgtMyBweS0yIHRleHQtZ3JheS03MDAgYm9yZGVyIHJvdW5kZWQgc2hhZG93IGFwcGVhcmVuY2Utbm9uZSBsZWFkaW5nLWxpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3R1bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0ZXJyZW5vSWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PntzZXRUZXJyZW5vSWQocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RlcnJlbm9JZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwLTQgdGV4dC0yeGwgZm9udC1saWdodFwiPlBlcm9uYSBOYXR1cmFsPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID1cImJsb2NrIHRleHQtc20gZm9udC1ib2xkIHRleHQtZ3JheS03MDAgbWQtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm5vbWJyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWVybyBEb2N1bWVudG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID1cInctZnVsbCBweC0zIHB5LTIgdGV4dC1ncmF5LTcwMCBib3JkZXIgcm91bmRlZCBzaGFkb3cgYXBwZWFyZW5jZS1ub25lIGxlYWRpbmctbGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdHVsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm51bWVyb1ByZWRpYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PntzZXROdW1lcm9Eb2N1bWVudG8ocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e251bWVyb0RvY3VtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPVwiYmxvY2sgdGV4dC1zbSBmb250LWJvbGQgdGV4dC1ncmF5LTcwMCBtZC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwibm9tYnJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGlwbyBkb2N1bWVudG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID1cInctZnVsbCBweC0zIHB5LTIgdGV4dC1ncmF5LTcwMCBib3JkZXIgcm91bmRlZCBzaGFkb3cgYXBwZWFyZW5jZS1ub25lIGxlYWRpbmctbGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdHVsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm51bWVyb1ByZWRpYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PntzZXRUaXBvKGUudGFyZ2V0LnZhbHVlKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RpcG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID1cImJsb2NrIHRleHQtc20gZm9udC1ib2xkIHRleHQtZ3JheS03MDAgbWQtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm5vbWJyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vbWJyZSBQZXJzb25hXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9XCJ3LWZ1bGwgcHgtMyBweS0yIHRleHQtZ3JheS03MDAgYm9yZGVyIHJvdW5kZWQgc2hhZG93IGFwcGVhcmVuY2Utbm9uZSBsZWFkaW5nLWxpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3R1bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJudW1lcm9QcmVkaWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT57c2V0Tm9tYnJlUGVycyhlLnRhcmdldC52YWx1ZSl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtub21icmVQZXJzb25hfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9XCJibG9jayB0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIG1kLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJub21icmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcGVsbGlkb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwidy1mdWxsIHB4LTMgcHktMiB0ZXh0LWdyYXktNzAwIGJvcmRlciByb3VuZGVkIHNoYWRvdyBhcHBlYXJlbmNlLW5vbmUgbGVhZGluZy1saWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW90dWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibnVtZXJvUHJlZGlhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+e3NldEFwZWxsaWRvKGUudGFyZ2V0LnZhbHVlKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FwZWxsaWRvUGVyc29uYX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPVwiYmxvY2sgdGV4dC1zbSBmb250LWJvbGQgdGV4dC1ncmF5LTcwMCBtZC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwibm9tYnJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGlyZWNjacOzblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwidy1mdWxsIHB4LTMgcHktMiB0ZXh0LWdyYXktNzAwIGJvcmRlciByb3VuZGVkIHNoYWRvdyBhcHBlYXJlbmNlLW5vbmUgbGVhZGluZy1saWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW90dWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibnVtZXJvUHJlZGlhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+e3NldERpcmVjY2lvbihlLnRhcmdldC52YWx1ZSl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkaXJlY2Npb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID1cImJsb2NrIHRleHQtc20gZm9udC1ib2xkIHRleHQtZ3JheS03MDAgbWQtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm5vbWJyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlbGVmb25vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9XCJ3LWZ1bGwgcHgtMyBweS0yIHRleHQtZ3JheS03MDAgYm9yZGVyIHJvdW5kZWQgc2hhZG93IGFwcGVhcmVuY2Utbm9uZSBsZWFkaW5nLWxpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3R1bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJudW1lcm9QcmVkaWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT57c2V0VGVsZWZvbm8oZS50YXJnZXQudmFsdWUpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGVsZWZvbm99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID1cImJsb2NrIHRleHQtc20gZm9udC1ib2xkIHRleHQtZ3JheS03MDAgbWQtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm5vbWJyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcnJlb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPVwidy1mdWxsIHB4LTMgcHktMiB0ZXh0LWdyYXktNzAwIGJvcmRlciByb3VuZGVkIHNoYWRvdyBhcHBlYXJlbmNlLW5vbmUgbGVhZGluZy1saWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW90dWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibnVtZXJvUHJlZGlhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+e3NldENvcnJlbyhlLnRhcmdldC52YWx1ZSl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb3JyZW99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicC00IHRleHQtMnhsIGZvbnQtbGlnaHRcIj5QZXJvbmEgSnVyaWRpY2E8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID1cInctZnVsbCBwLTIgbXQtNSBmb250LWJvbGQgdGV4dC13aGl0ZSB1cHBlcmNhc2UgYmctZ3JlZW4tNTAwIHJvdW5kZWQgaG92ZXI6YmctZ3JheS05MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiQWdyZWdhciBQcmVkaW9cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVQcmVkaW87Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJDb250YWluZXIiLCJ1c2VRdWVyeSIsInVzZU11dGF0aW9uIiwiZ3FsIiwiQ1JFQVRFX1BSRURJT1MiLCJDUkVBVEVfUEVSU09OQV9OQVRVUkFMIiwiQ3JlYXRlUHJlZGlvIiwibnVtZXJvUHJlZGlhbCIsInNldE51bWVybyIsIm5vbWJyZSIsInNldE5vbWJyZSIsImRlcGFydGFtZW50byIsInNldERlcGFydGFtZW50byIsIm11bmljaXBpbyIsInNldE11bmljaXBpbyIsInRlcnJlbm9JZCIsInNldFRlcnJlbm9JZCIsImNyZWF0ZVByZWRpbyIsIm5vbWJyZVBlcnNvbmEiLCJzZXROb21icmVQZXJzIiwibnVtZXJvRG9jdW1lIiwic2V0TnVtZXJvRG9jdW1lbnRvIiwidGlwbyIsInNldFRpcG8iLCJhcGVsbGlkb1BlcnNvbmEiLCJzZXRBcGVsbGlkbyIsImRpcmVjY2lvbiIsInNldERpcmVjY2lvbiIsInRlbGVmb25vIiwic2V0VGVsZWZvbm8iLCJjb3JyZW8iLCJzZXRDb3JyZW8iLCJjcmVhdGVQZXJzb25hTmF0dXJhbCIsIm5hdmlnYXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFyaWFibGVzIiwicHVzaCIsIm51bWVyb0RvY3VtZW50byIsInRpcG9Eb2N1bWVudG8iLCJhcGVsbGlkbyIsImZrbnVtZXJvUHJlZGlhbCIsInBhcnNlSW50IiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9