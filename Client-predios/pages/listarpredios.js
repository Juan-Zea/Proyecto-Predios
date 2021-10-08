import React, { useState,useEffect} from 'react';
import { useRouter } from 'next/router';
import {useQuery,useMutation}from '@apollo/react-hooks'
import {gql} from 'apollo-boost'
import { faTrashAlt,faPen,faMapMarker,faHotel, faThermometer } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Container from '../Components/Container';
import CardPredio from '../Components/CardPredio';

const GET_PREDIOS =gql`
    query getPredios {
        allPredios {
            nodes {
              numeroPredial
              nombre
              municipio
              departamento
              terrenoId
            }
          }
        }
`;

const DROP_PREDIO =gql`
    mutation DeletePredioByNumeroPredial($numeroPredial:Int!){
        deletePredioByNumeroPredial(input: {numeroPredial:$numeroPredial}) {
            clientMutationId
            deletedPredioId
          }
    }
`;

const ListPredios =  () => {

    const navigate = useRouter();
    const {loading,error,data} = useQuery(GET_PREDIOS)
    const [deletePredioByNumeroPredial]= useMutation(DROP_PREDIO)
    const dropPredio=(numPre)=>{
        deletePredioByNumeroPredial({variables:{numeroPredial:numPre}})
    }

    if(loading)return<p>Loading Users...</p>
    if(error) return <p>Error-- No se pudo cargar los predios</p>
    return ( 
        <div>
            <Container/>
            <h1 className="p-4 text-3xl font-light">Predios</h1>
            {
                data.allPredios.nodes.map(({numeroPredial,nombre,municipio,departamento,terrenoId})=>{
                    return <div key={numeroPredial} className="h-full p-5 m-2 bg-white rounded shadow-lg">
                    <div className="items-center m-6 h-2/6">
                        <span className="mb-2 text-xl font-bold">Numero Predial:{' '}{numeroPredial}</span>
                        <span className="block" >Nombre predio:{' '}{nombre}</span>
                        <span className="block" >Departamento:{' '}{departamento}</span>
                        <span className="block" >Municipio:{' '}{municipio}</span>
                        <span className="block" >Terreno:{' '}{
                            terrenoId ? (<a>Terreno propio</a>):(<a>Ejido</a>)
                        }</span>
                        <button className="m-5 text-2xl" onClick={()=>dropPredio(numeroPredial)}><FontAwesomeIcon icon={faTrashAlt}/>Eliminar</button>
                        <button className="m-5 text-2xl" onClick={()=>navigate.push("/updatepredio")}><FontAwesomeIcon icon={faPen}/>Actualizar</button>
                        {
                            terrenoId==null ? ( <button className="m-5 text-2xl" onClick={()=>navigate.push("/agregarterreno")}><FontAwesomeIcon icon={faMapMarker}/>Agregar Terreno</button>):(<></>)
                        }
                       
                        <button className="m-5 text-2xl" onClick={()=>navigate.push("/agregarconstruccion")}><FontAwesomeIcon icon={faHotel}/>Agregar Construcción</button>
                    </div>
                </div>
                })
            }
        </div> 
     );
}
 
export default ListPredios;