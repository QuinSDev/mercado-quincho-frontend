import React, { useState, useEffect } from 'react'
import { dataUser } from "../api/Users"
import address from "../assets/images/address.png"
import phone from "../assets/images/phone.png"
import email from "../assets/images/email.png"
import password from "../assets/images/password.png"
import { Link } from 'react-router-dom';

export const Profile = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUserData = () => {
            const filterUser = dataUser.filter((user) => user.idUser === 1);
            setUsers(filterUser);
        };

        fetchUserData();
    }, []);


    return (
        <>

<div className='m-6 h-screen'>
            <div data-theme="light" className="m-10 max-w-xl h-150 mx-auto p-10 bg-white rounded-md shadow-2xl">

                {users.map((user) => (

                    <div key={user.idUser}>

                        <div className='bg-[#35C5DF] rounded-md shadow-2xl grid grid-cols-2 gap-4 bg-opacity-80'>
                            <div className="m-6 avatar shadow-2xl rounded-md" >
                                <img className="rounded-md" src={user.photo} />
                            </div>

                            <div className='m-6'>
                                <h1 className="text-center mt-6 text-3xl font-bold border-b-2 border-gray-900/10">{user.name} {user.lastName}</h1>
                                <h2 className="text-center m-0 text-1xl font-semibold">{user.role}</h2>
                            </div>
                        </div>

                        <div className="flex mt-6 border-[#706c6c] border-2 rounded-md">
                            <img
                                className="flex-none m-2 w-10 uppercase cursor-pointer"
                                src={address}
                                alt="Logo de direccion"
                            />
                            <h3 className='flex-1 m-3'><b>Dirección: </b> {user.address}</h3>
                        </div>

                        <div className="flex mt-6 border-[#706c6c] border-2 rounded-md">
                            <img
                                className="flex-none m-2 w-10 uppercase cursor-pointer"
                                src={phone}
                                alt="Logo de telefono"
                            />
                            <h3 className='flex-1 m-3'><b>Teléfono: </b> {user.phoneNumber}</h3>
                        </div>

                        <div className="flex mt-6 border-[#706c6c] border-2 rounded-md">
                            <img
                                className="flex-none m-2 w-10 uppercase cursor-pointer"
                                src={email}
                                alt="Logo de email"
                            />
                            <h3 className='flex-1 m-3'><b>Email: </b> {user.email}</h3>
                        </div>

                        <div className="flex mt-6 border-[#706c6c] border-2 rounded-md">
                            <img
                                className="flex-none m-2 w-10 uppercase cursor-pointer"
                                src={password}
                                alt="Logo de email"
                            />
                            <h3 className='flex-1 m-3'><b>Contraseña: </b> {user.password}</h3>
                        </div>

                        <button className='mt-8 btnQuincho'>
                            <Link to="/editUser"> Actualizar Datos </Link>
                        </button>



                    </div>

                ))}
            </div>

            </div>

        </>
    )
}
