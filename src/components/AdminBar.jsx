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

    const [option,setOption]= useState('');

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
        switch (option) {
          case "users":
            return <UserList />;
          case "quinchos":
            return <QuinchoList />;
          case "comentaries":
            return <ComentaryList />;
          case "photos":
            return <ImageList />;
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

                        <a onClick={changeQuincho}>
                            {/*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>*/}
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
                    <li className="font-semibold text-lg hover:bg-[#35C5DF] rounded-md" >

                        <a onClick={changeImage}>
                            {/*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>*/}
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
