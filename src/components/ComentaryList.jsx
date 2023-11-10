import React, { useState } from 'react'
import { dataComentary } from '../api/Comentaries';

export const ComentaryList = () => {

    const [comentaries, setComentaries] = useState(dataComentary);
    
    return (
        <>
            <div data-theme="light" className="m-6 overflow-x-auto">
        
            <h2 className="mt-4 text-2xl border-b-2 md:text-3xl font-bold text-black mb-2 p-2 text-center">Comentarios Publicados</h2>

                <table className="table m-6 max-w-lg mx-auto p-6 bg-white rounded-md shadow-2xl">
                
                    <thead>
                
                        <tr className='mt-6'>
                            <th className="text-black text-lg font-bold">Usuario</th>
                            <th className="text-black text-lg font-bold">Quincho</th>
                            <th className="text-black text-lg font-bold mt-8">Tipo de Quincho</th>
                            <th className="text-black text-lg font-bold mt-8">Comentario</th>
                            <th className="text-black text-lg font-bold mt-8"></th>
                           
                        
                        </tr>
                    </thead>

                    {comentaries.map((comentary) => (
                        <tbody key={comentary.id}>
                            <tr >
                                <td className="hover:text-[#35C5DF] hover:font-semibold">{comentary.owner}</td>{/*link a quinchos*/}
                                <td>{comentary.nameQuincho}</td>
                                <td>{comentary.typeQuincho}</td>
                                <td>{comentary.comentary}</td>
                                <th>
                                    <button className="btn btnQuincho p-4">Eliminar</button>
                                </th>
                            </tr>
                        </tbody>
                    ))},
                </table>
            </div>
        </>
    )
}
