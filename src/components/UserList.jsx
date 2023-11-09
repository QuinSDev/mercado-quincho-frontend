import React from 'react'

export const UserList = () => {

    const users = [
        {
            idUser: 1,
            name: "Laura",
            lastName: "Perez",
            address: "calle 2, departamento, provincia, pais",
            phoneNumber: 2615882266,
            email: "laura@gmail.com",
            role: "owner",
            photo: "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg",
        },

        {
            idUser: 2,
            name: "Federico",
            lastName: "Perez",
            address: "calle 2, departamento, provincia, pais",
            phoneNumber: 2615882266,
            email: "fede@gmail.com",
            role: "owner",
            photo: "https://www.infobae.com/new-resizer/YUHwdChjidsi6q1oOt07qWGGkTk=/1440x960/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/R2E3MWK5PFCKPHEMWA2ZRTDVJQ.jpg",
        },

        {
            idUser: 3,
            name: "Laura",
            lastName: "Perez",
            address: "calle 2, departamento, provincia, pais",
            phoneNumber: 2615882266,
            email: "laura@gmail.com",
            role: "client",
            photo: "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg",
        },
        {
            idUser: 2,
            name: "Federico",
            lastName: "Perez",
            address: "calle 2, departamento, provincia, pais",
            phoneNumber: 2615882266,
            email: "fede@gmail.com",
            role: "owner",
            photo: "https://www.infobae.com/new-resizer/YUHwdChjidsi6q1oOt07qWGGkTk=/1440x960/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/R2E3MWK5PFCKPHEMWA2ZRTDVJQ.jpg",
        },

    ]

    return (
        <>
            <div data-theme="light" className="m-6 overflow-x-auto">
            <h2 className="m-4 text-2xl font-bold tracking-tight text-gray-900">
            Lista de Usuarios
          </h2>
                

                <table className="table">
                    <thead>
                        <tr>
                            <th className="text-black text-lg font-bold">Nombre Completo</th>
                            <th className="text-black text-lg font-bold">Direccion</th>
                            <th className="text-black text-lg font-bold">Telefono</th>
                            <th className="text-black text-lg font-bold">Correo Electronico</th>
                            <th className="text-black text-lg font-bold">Rol</th>
                            <th className="text-black text-lg font-bold">Acciones</th>
                        </tr>
                    </thead>

                    {users.map((user) => (
                        <tbody key={user.idUser}>
                            <tr >
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
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

                                <th>
                                    <button className="btn btnQuincho p-4">Actualizar</button>
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
