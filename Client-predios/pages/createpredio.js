import React,{useState} from 'react';
import {useRouter} from 'next/router'
import Container from '../Components/Container';
import {useQuery,useMutation}from '@apollo/react-hooks'
import {gql} from 'apollo-boost'

const CREATE_PREDIOS =gql`
    mutation CreatePredio($numeroPredial:Int!,$nombre:String!,$departamento:String!,$municipio:String!,$terrenoId:Int){
        createPredio(input: {predio: {numeroPredial: $numeroPredial, nombre: $nombre, departamento:$departamento, municipio: $municipio, terrenoId: $terrenoId}}
      ) {
        clientMutationId
      }
    }
    
`;

const CREATE_PERSONA_NATURAL =gql`
    mutation CreatePersonaNatural($numeroDocumento:Int!,$tipoDocumento:String!,$nombre:String!,$apellido:String!,$direccion:String!,$telefono:String!,$correo:String,$fknumeroPredial:Int!){
        createPesonasNaturale(
            input: {pesonasNaturale: {numeroDocumento: $numeroDocumento, tipoDocumento: $tipoDocumento, nombre: $nombre, apellido: $apellido, direccion: $direccion, telefono: $telefono, correo: $correo}}
          ) {
            clientMutationId
          }
          createPropietariosNaturale(
            input: {propietariosNaturale: {fknumeroPredial: $fknumeroPredial, numeroDocumento: $numeroDocumento}}
          ) {
            clientMutationId
          }
    }

`

const CreatePredio = () => {

    const [numeroPredial,setNumero] = useState()
    const [nombre,setNombre] = useState('') 
    const [departamento,setDepartamento] = useState('') 
    const [municipio,setMunicipio] = useState('') 
    const [terrenoId,setTerrenoId] = useState() 
    const [createPredio]= useMutation(CREATE_PREDIOS)
    const [nombrePersona,setNombrePers] = useState('')
    const [numeroDocume,setNumeroDocumento] = useState('')
    const [tipo,setTipo] = useState('')
    const [apellidoPersona,setApellido] = useState('')
    const [direccion,setDireccion] = useState('')
    const [telefono,setTelefono] = useState('')
    const [correo,setCorreo] = useState('')
    const [createPersonaNatural] = useMutation(CREATE_PERSONA_NATURAL)
    const navigate = useRouter();

    return ( 
        <div>
            <Container/>
            <h1 className="p-4 text-3xl font-light">Crear Nuevo Predio</h1>

            <div className ="flex justify-center mt-10">  
                <div className ="w-full max-w-3xl p-3 bg-white">
                     <form onSubmit={(e)=>{
                            e.preventDefault();
                             createPredio({variables:{numeroPredial:numeroPredial,nombre:nombre,departamento:departamento,municipio:municipio,terrenoId:terrenoId}} );
                             navigate.push('/listarpredios')
                             createPersonaNatural({variables:{nombre:nombrePersona,numeroDocumento:numeroDocume,tipoDocumento:tipo,apellido:apellidoPersona,direccion:direccion,telefono:telefono,correo:correo,fknumeroPredial:numeroPredial}})
                        }}
                            >
                         <div className ="mb-4">
                             <label className ="block text-sm font-bold text-gray-700 md-2"
                             htmlFor="nombre">
                                Numero Predial
                             </label>
                             <input 
                             type="text"
                             className ="w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline"
                             id="numeroPredial"
                             onChange={(e)=>{setNumero(parseInt(e.target.value))}}
                             value={numeroPredial}
                             />
                         </div>
                         <div className ="mb-4">
                             <label className ="block text-sm font-bold text-gray-700 md-2"
                             htmlFor="nombre">
                                Nombre
                             </label>
                             <input 
                             className ="w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline"
                             id="nombre"
                             onChange={(e)=>{setNombre(e.target.value)}}
                             value={nombre}
                             />
                         </div>
                         <div className ="mb-4">
                             <label className ="block text-sm font-bold text-gray-700 md-2"
                             htmlFor="nombre">
                                Departamento
                             </label>
                             <input 
                             className ="w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline"
                             id="departamento"
                             onChange={(e)=>{setDepartamento(e.target.value)}}
                                value={departamento}
                             />
                         </div>
                         <div className ="mb-4">
                             <label className ="block text-sm font-bold text-gray-700 md-2"
                             htmlFor="nombre">
                                Municipio
                             </label>
                             <input 
                             className ="w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline"
                             id="municipio"
                             onChange={(e)=>{setMunicipio(e.target.value)}}
                                value={municipio}
                             />
                         </div>
                         <div className ="mb-4">
                             <label className ="block text-sm font-bold text-gray-700 md-2"
                             htmlFor="nombre">
                                Terreno Id
                             </label>
                             <input 
                             type="text"
                             className ="w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline"
                             id="terrenoId"
                             onChange={(e)=>{setTerrenoId(parseInt(e.target.value))}}
                                value={terrenoId}
                             />
                         </div>

                         <div>
                            <h2 className="p-4 text-2xl font-light">Perona Natural</h2>
                            <div className ="mb-4">
                             <label className ="block text-sm font-bold text-gray-700 md-2"
                             htmlFor="nombre">
                                Numero Documento
                             </label>
                             <input 
                             type="text"
                             className ="w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline"
                             id="numeroPredial"
                             onChange={(e)=>{setNumeroDocumento(parseInt(e.target.value))}}
                             value={numeroDocume}
                             />

                         </div>
                         <div className ="mb-4">
                             <label className ="block text-sm font-bold text-gray-700 md-2"
                             htmlFor="nombre">
                                Tipo documento
                             </label>
                             <input 
                             type="text"
                             className ="w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline"
                             id="numeroPredial"
                             onChange={(e)=>{setTipo(e.target.value)}}
                             value={tipo}
                             />

                         </div>
                         <div className ="mb-4">
                             <label className ="block text-sm font-bold text-gray-700 md-2"
                             htmlFor="nombre">
                                Nombre Persona
                             </label>
                             <input 
                             type="text"
                             className ="w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline"
                             id="numeroPredial"
                             onChange={(e)=>{setNombrePers(e.target.value)}}
                             value={nombrePersona}
                             />

                         </div>
                         <div className ="mb-4">
                             <label className ="block text-sm font-bold text-gray-700 md-2"
                             htmlFor="nombre">
                                Apellido
                             </label>
                             <input 
                             type="text"
                             className ="w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline"
                             id="numeroPredial"
                             onChange={(e)=>{setApellido(e.target.value)}}
                             value={apellidoPersona}
                             />

                         </div>
                         <div className ="mb-4">
                             <label className ="block text-sm font-bold text-gray-700 md-2"
                             htmlFor="nombre">
                                Dirección
                             </label>
                             <input 
                             type="text"
                             className ="w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline"
                             id="numeroPredial"
                             onChange={(e)=>{setDireccion(e.target.value)}}
                             value={direccion}
                             />

                         </div>
                         <div className ="mb-4">
                             <label className ="block text-sm font-bold text-gray-700 md-2"
                             htmlFor="nombre">
                                Telefono
                             </label>
                             <input 
                             type="text"
                             className ="w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline"
                             id="numeroPredial"
                             onChange={(e)=>{setTelefono(e.target.value)}}
                             value={telefono}
                             />

                         </div>
                         <div className ="mb-4">
                             <label className ="block text-sm font-bold text-gray-700 md-2"
                             htmlFor="nombre">
                                Correo
                             </label>
                             <input 
                             type="text"
                             className ="w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline"
                             id="numeroPredial"
                             onChange={(e)=>{setCorreo(e.target.value)}}
                             value={correo}
                             />

                         </div>
                        </div>
                        <div>
                            <h2 className="p-4 text-2xl font-light">Perona Juridica</h2>
                            
                        </div>
                         <input type="submit"
                         className ="w-full p-2 mt-5 font-bold text-white uppercase bg-green-500 rounded hover:bg-gray-900"
                          value="Agregar Predio"/>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default CreatePredio;