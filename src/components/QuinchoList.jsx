import React, { useState } from 'react'
import { data } from "../api/Quinchos";

export const QuinchoList = () => {

    const [quinchos, setQuinchos] = useState(data);
    
    return (
        <>
            <div data-theme="light" className="m-6 overflow-x-auto">
        
            <h2 className="mt-4 text-2xl border-b-2 md:text-3xl font-bold text-black mb-2 p-2 text-center">Lista de Quinchos</h2>

                <table className="table m-6 max-w-lg mx-auto p-6 bg-white rounded-md shadow-2xl">
                
                    <thead>
                
                        <tr className='mt-6'>
                            <th className="text-black text-lg font-bold">Nombre</th>
                            <th className="text-black text-lg font-bold">Direccion</th>
                            <th className="text-black text-lg font-bold mt-8">Tipo de Quincho</th>
                            <th className="text-black text-lg font-bold mt-8">Precio</th>
                            <th className="text-black text-lg font-bold mt-8">Propietario</th>
                            <th className="text-black text-lg font-bold mt-8">Comentarios</th>
                        
                        </tr>
                    </thead>

                    {quinchos.map((quincho) => (
                        <tbody key={quincho.id}>
                            <tr >
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-16 h-16">
                                                <img src={quincho.image} alt="Photo User" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{quincho.nameQuincho}</div>
                                        </div>
                                    </div>
                                </td>

                                <td>{quincho.location}</td>
                                <td>{quincho.typeQuincho}</td>
                                <td>$ {quincho.price}</td>
                                <td className="hover:text-[#35C5DF] hover:font-semibold">Propietario</td>{/*link a quinchos*/}
                                <td className="hover:text-[#35C5DF] hover:font-semibold">Comentarios Publicados</td>{/*link a comentario/s*/}
                                
                            </tr>
                        </tbody>
                    ))},
                </table>
            </div>
        </>
    )
}
