import React,{useState,useEffect} from 'react';
import { useRouter } from "next/router"
import Container from '../../Components/Container';
import {useQuery,useMutation}from '@apollo/react-hooks'
import {gql} from 'apollo-boost'

const CREATE_TERRENO =gql`
    mutation createTerreno($areaTotal:String!,$valorComercial:Int!,$tipoTerreno:String!,$fuentesAgua:Boolean!){
        createTerreno(
            input: {terreno: {areaTotal: $areaTotal, valorComercial: $valorComercial, tipoTerreno: $tipoTerreno, fuentesAgua: $fuentesAgua}}
          ) {
            terreno {
                id
              }
          }
    }
`;

export default function terreno (){

    const route = useRouter()
    const numeroPredial = parseInt(route.query.numePredialActualizar) 
    const [areaTotal,setAreaTotal] = useState('') 
    const [fuentesAgua,setFuentes] = useState('') 
    const [tipoTerreno,setTipoTerreno] = useState('') 
    const [valorComercial,setValorComercial] = useState('')
    const [updatePredio,{data, loading, error}]= useMutation(CREATE_TERRENO)
    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;

    // no puedo Avanzar me retorno undefined 
    if(typeof data === undefined){ console.log(data)}
    return(
        <div>
            <Container/>
            <h1 className="p-4 text-3xl font-light">Asignar un terreno</h1>
            <div className ="flex justify-center mt-10">  
                <div className ="w-full max-w-3xl p-3 bg-white">
                     <form onSubmit={(e)=>{
                            e.preventDefault();
                            updatePredio({variables:{areaTotal:areaTotal,fuentesAgua:fuentesAgua,tipoTerreno:tipoTerreno,valorComercial:valorComercial}})
                            
                        }}
                            >
                         <div className ="mb-4">
                             <label className ="block text-sm font-bold text-gray-700 md-2"
                             htmlFor="nombre">
                                Área Total
                             </label>
                             <input 
                             className ="w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline"
                             id="nombre"
                             onChange={(e)=>{setAreaTotal(e.target.value)}}
                             value={areaTotal}
                             />
                         </div>
                         <div className ="mb-4">
                             <label className ="block text-sm font-bold text-gray-700 md-2"
                             htmlFor="nombre">
                                Existen fuentes de agua cercanas
                             </label>
                             <input 
                             className ="w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline"
                             id="departamento"
                             onChange={(e)=>{setFuentes(e.target.value==='true' ? (true):(false))}}
                             />
                         </div>
                         <div className ="mb-4">
                             <label className ="block text-sm font-bold text-gray-700 md-2"
                             htmlFor="nombre">
                                Tipo Terreno
                             </label>
                             <input 
                             className ="w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline"
                             id="municipio"
                             onChange={(e)=>{setTipoTerreno(e.target.value)}}
                                value={tipoTerreno}
                             />
                         </div>
                         <div className ="mb-4">
                             <label className ="block text-sm font-bold text-gray-700 md-2"
                             htmlFor="nombre">
                                Valor Comercial
                             </label>
                             <input 
                             className ="w-full px-3 py-2 text-gray-700 border rounded shadow appearence-none leading-light focus:outline-none focus:shadow-otuline"
                             id="municipio"
                             onChange={(e)=>{setValorComercial(parseInt(e.target.value))}}
                                value={valorComercial}
                             />
                         </div>
                         <input type="submit"
                         className ="w-full p-2 mt-5 font-bold text-white uppercase bg-green-500 rounded hover:bg-gray-900"
                          value="Agregar Cambios"/>
                    </form>
                </div>
            </div>
        </div>
    )
}