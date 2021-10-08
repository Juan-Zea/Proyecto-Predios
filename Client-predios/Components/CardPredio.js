import React from 'react';

const CardPredio = (predio) => {

    const {numeroPredial,nombre,departamento,municipio,terrenoId} =predio
    return ( 
        <div key={predio.numeroPredial} className="h-full p-5 m-2 bg-white rounded shadow-lg">
            <div className="items-center m-6 h-2/6">
                <span className="mb-2 text-xl font-bold">Numero Predial:{' '}{predio.numeroPredial}</span>
                <span className="block" >Nombre predio:{' '}{predio.nombre}</span>
                <span className="block" >Municipio:{' '}{predio.municipio}</span>
            </div>
        </div>
     );
}
 
export default CardPredio;