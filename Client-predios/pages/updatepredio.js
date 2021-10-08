import React,{useState} from 'react';
import { useRouter } from 'next/router';
import {useQuery,useMutation}from '@apollo/react-hooks'
import {gql} from 'apollo-boost'

import Container from '../Components/Container';

const UPDATE_PREDIOS =gql`
    mutation UpdatePredioByNumeroPredial($numeroPredial:Int!,$nombre:String!,$departamento:String!,$municipio:String!){
        updatePredioByNumeroPredial(
            input: {predioPatch: {departamento: $departamento, municipio: $municipio, nombre: $nombre}, numeroPredial:$numeroPredial}
          ) {
            clientMutationId
          }
    }  
`;

const UpdatePredio = () => {

    const [numeroPredial,setNumero] = useState('') 
    const [nombre,setNombre] = useState('') 
    const [departamento,setDepartamento] = useState('') 
    const [municipio,setMunicipio] = useState('') 
    const [terrenoId,setTerrenoId] = useState() 
    const [updatePredio]= useMutation(UPDATE_PREDIOS)
    const navigate = useRouter();

    return (  
        <div>
            <Container/>
            <h1 className="p-4 text-3xl font-light">Modificar Predio</h1>
            <div className ="flex justify-center mt-10">  
                <div className ="w-full max-w-3xl p-3 bg-white">
                     <form onSubmit={(e)=>{
                            e.preventDefault();
                             updatePredio({variables:{numeroPredial:numeroPredial,nombre:nombre,departamento:departamento,municipio:municipio,terrenoId:terrenoId}} );
                             navigate.push('/listarpredios')  
                        }}
                            >
                        
                        <div className ="mb-4">
                             <label className ="block text-sm font-bold text-gray-700 md-2"
                             htmlFor="nombre">
                                Numero
                             </label>
                             <input 
                             className ="w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline"
                             id="nombre"
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
                         <input type="submit"
                         className ="w-full p-2 mt-5 font-bold text-white uppercase bg-green-500 rounded hover:bg-gray-900"
                          value="Agregar Cambios"/>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default UpdatePredio;