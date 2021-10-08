import React from 'react';
import Link from 'next/link'

const Navigator = () => {
    return (
        <ul className="flex p-4">
            <li className="mr-6">
                <Link  href="/" ><a className="text-xl text-blue-500 hover:text-blue-800">Home</a></Link>
            </li>
            <li className="mr-6">
                <Link  href="/createpredio"><a className="text-xl text-blue-500 hover:text-blue-800">Agregar nuevo Predio</a></Link>
            </li>
            <li className="mr-6">
                <Link  href="/listarpredios"><a className="text-xl text-blue-500 hover:text-blue-800">Listar Predios</a></Link>
            </li>
        </ul>
      );
}
 
export default Navigator;