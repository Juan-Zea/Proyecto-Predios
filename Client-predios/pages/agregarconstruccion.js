import React,{useState} from 'react';
import { useRouter } from 'next/router';
import {useQuery,useMutation}from '@apollo/react-hooks'
import {gql} from 'apollo-boost'

import { Consumer } from 'react';
import Container from '../Components/Container';

const CREATE_CONSTRUCCION =gql`
    mutation  createConstrucione($numeroPisos:Int!,$areaTotal:Int!,$tipoConstrucion:String!,$terrenoId:Int,$predioId:Int!){
        createConstrucione(
            input: {construcione: {numeroPisos: $numeroPisos, areaTotal: $areaTotal, tipoConstrucion: $tipoConstrucion, terrenoId: $terrenoId, predioId: $predioId}}
          ) {
            clientMutationId
          }
    }
    
`;

const AgregarConstrucion = () => {

    const [numeroPisos,setNumeroPisos] = useState('') 
    const [areaTotal,setAreaTotal] = useState('') 
    const [tipoConstrucion,setTipoConstucion] = useState('') 
    const [terrenoId,setTerrenoId] = useState() 
    const [predioId,setPredioId] = useState()
    const [createConstrucione]= useMutation(CREATE_CONSTRUCCION)
    const navigate = useRouter();

    return ( 
        <div>
            <Container/>
            <h1 className="p-4 text-3xl font-light">Agregar Construcciones</h1>
            <div className ="flex justify-center mt-10">  
                <div className ="w-full max-w-3xl p-3 bg-white">
                     <form onSubmit={(e)=>{
                            e.preventDefault();
                             createConstrucione({variables:{numeroPisos:numeroPisos,areaTotal:areaTotal,tipoConstrucion:tipoConstrucion,terrenoId:terrenoId,predioId:predioId}} );
                             navigate.push('/listarpredios')  
                        }}
                            >
                        
                        <div className ="mb-4">
                             <label className ="block text-sm font-bold text-gray-700 md-2"
                             htmlFor="nombre">
                                Numero Pisos
                             </label>
                             <input 
                             className ="w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline"
                             id="nombre"
                             onChange={(e)=>{setNumeroPisos(parseInt(e.target.value))}}
                             value={numeroPisos}
                             />
                         </div>
                         <div className ="mb-4">
                             <label className ="block text-sm font-bold text-gray-700 md-2"
                             htmlFor="nombre">
                                Área Total
                             </label>
                             <input 
                             className ="w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline"
                             id="nombre"
                             onChange={(e)=>{setAreaTotal(parseInt(e.target.value))}}
                             value={areaTotal}
                             />
                         </div>
                         <div className ="mb-4">
                             <label className ="block text-sm font-bold text-gray-700 md-2"
                             htmlFor="nombre">
                                Tipo Construcción
                             </label>
                             <input 
                             className ="w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline"
                             id="departamento"
                             onChange={(e)=>{setTipoConstucion(e.target.value)}}
                                value={tipoConstrucion}
                             />
                         </div>
                         <div className ="mb-4">
                             <label className ="block text-sm font-bold text-gray-700 md-2"
                             htmlFor="nombre">
                                Predio Id
                             </label>
                             <input 
                             className ="w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline"
                             id="municipio"
                             onChange={(e)=>{setPredioId(parseInt(e.target.value))}}
                                value={predioId}
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
 
export default AgregarConstrucion;