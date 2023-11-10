import React, { useState } from 'react'
import { dataUser } from "../api/Users";

export const UserList = () => {

    const [users, setUsers] = useState(dataUser);
    
    return (
        <>
            <div data-theme="light" className="m-6 overflow-x-auto">
        
            <h2 className="mt-4 text-2xl border-b-2 md:text-3xl font-bold text-black mb-2 p-2 text-center">Lista de Usuarios</h2>

                <table className="table m-6 max-w-lg mx-auto p-6 bg-white rounded-md shadow-2xl">
                
                    <thead>
                
                        <tr className='mt-6'>
                            <th className="text-black text-lg font-bold">Nombre Completo</th>
                            <th className="text-black text-lg font-bold">Direccion</th>
                            <th className="text-black text-lg font-bold mt-8">Telefono</th>
                            <th className="text-black text-lg font-bold mt-8">Correo Electronico</th>
                            <th className="text-black text-lg font-bold mt-8">Rol</th>
                            <th className="text-black text-lg font-bold mt-8">Quinchos</th>
                            <th className="text-black text-lg font-bold mt-8">Comentarios</th>
                            <th className="text-black text-lg font-bold mt-8">Imagenes</th>
                            <th className="text-black text-lg font-bold mt-8"></th>
                        </tr>
                    </thead>

                    {users.map((user) => (
                        <tbody key={user.idUser}>
                            <tr >
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-16 h-16">
                                                <img src={user.photo} alt="Photo User" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.lastName}</div>
                                            <div className="text-sm opacity-50">{user.name}</div>
                                        </div>
                                    </div>
                                </td>

                                <td>{user.address}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td className="hover:text-[#35C5DF] hover:font-semibold">Quinchos Publicados</td>{/*link a quinchos*/}
                                <td className="hover:text-[#35C5DF] hover:font-semibold">Comentarios Publicados</td>{/*link a comentario/s*/}
                                <td className="hover:text-[#35C5DF] hover:font-semibold">Imagenes Posteadas</td>{/*link a foto/s*/}
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
