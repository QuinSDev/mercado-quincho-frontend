import React, { useState } from 'react';
import { UserList } from './UserList';
import { QuinchoList } from "./QuinchoList";
import { ComentaryList } from "./ComentaryList";
import { ImageList } from './ImageList';
import users from "../assets/images/users.png"
import home from "../assets/images/home.png"
import comentary from "../assets/images/comentary.png"
import image from "../assets/images/image.png"

export const AdminBar = () => {

    const [option, setOption] = useState('');

    const changeUser = () => {
        setOption('users');
    };

    const changeQuincho = () => {
        setOption('quinchos');
    };

    const changeComentary = () => {
        setOption('comentaries');
    };

    const changeImage = () => {
        setOption('photos');
    };


    const filterOption = (option) => {
        if (option === 'users') {
            return <UserList />
        }
        if (option === 'quinchos') {
            return <QuinchoList />
        }
        if (option === 'comentaries') {
            return <ComentaryList />
        }
        if (option === 'photos') {
            return <ImageList />
        }
        else {
            return <UserList />
        }


    };



    return (

        <>

            <div data-theme="light" className="mt-10 md:flex md:items-center md:justify-center bg-white">
                <ul className="shadow-lg m-4 menu bg-base-200 lg:menu-horizontal rounded-box">

                    <li className="m-3 text-2xl font-bold">
                        Panel de Control
                    </li>

                    <li className="font-semibold text-lg hover:bg-[#35C5DF] rounded-md" >

                        <a onClick={changeUser}>
                            <img
                                className="h-10 w-10"
                                src={users}
                                alt="Logo de usuarios"
                            />
                            Usuarios
                        </a>
                    </li>
                    <li className="font-semibold text-lg hover:bg-[#35C5DF] rounded-md" >

                        <a onClick={changeQuincho}>
                            <img
                                className="h-10 w-10"
                                src={home}
                                alt="Logo de quinchos"
                            />
                            Quinchos
                        </a>
                    </li>
                    <li className="font-semibold text-lg hover:bg-[#35C5DF] rounded-md" >

                        <a onClick={changeComentary}>
                            <img
                                className="h-10 w-10"
                                src={comentary}
                                alt="Logo de comentarios"
                            />
                            Comentarios
                        </a>
                    </li>
                    <li className="font-semibold text-lg hover:bg-[#35C5DF] rounded-md" >

                        <a onClick={changeImage}>
                            <img
                                className="h-10 w-10"
                                src={image}
                                alt="Logo de imagenes"
                            />
                            Imagenes
                        </a>
                    </li>

                </ul>
            </div>

            {filterOption(option)}
        </>
    )
}
