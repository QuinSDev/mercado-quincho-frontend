import React, { useState } from 'react';
import { UserList } from './UserList';
import { QuinchoList } from "./QuinchoList";
import { ComentaryList } from "./ComentaryList";
import { ImageList } from './ImageList';
import users from "../assets/images/users.png"
import home from "../assets/images/home.png"
import comentary from "../assets/images/comentary.png"
import image from "../assets/images/image.png"
import { ComentariesAdmin } from './ComentariesAmdin';

export const AdminBar = () => {

    const [option,setOption]= useState('');

    const changeUser = () => {
        setOption('users');
      };

    const changeComentary = () => {
        setOption('comentaries');
      };



      const filterOption = (option) => {
        switch (option) {
          case "users":
            return <UserList />;
          case "comentaries":
            return <ComentariesAdmin />;
          default:
            return <UserList />;
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
                                
                            {/*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>*/}
                            <img
                                className="h-10 w-10"
                                src={users}
                                alt="Logo de usuarios"
                            />
                            Usuarios
                        </a>
                    </li>
                    
                    <li className="font-semibold text-lg hover:bg-[#35C5DF] rounded-md" >

                        <a onClick={changeComentary}>
                            {/*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>*/}
                            <img
                                className="h-10 w-10"
                                src={comentary}
                                alt="Logo de comentarios"
                            />
                            Comentarios
                        </a>
                    </li>

                </ul>
            </div>

            {filterOption(option)}
        </>
    )
}
