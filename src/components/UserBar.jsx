import React, { useState } from 'react';
import { UserList } from './UserList';
import { QuinchoList } from "./QuinchoList";
import { ComentaryList } from "./ComentaryList";
import { ImageList } from './ImageList';
import { Profile } from './Profile';
import home from "../assets/images/home.png"
import user from "../assets/images/user.png"
import reservation from "../assets/images/reservation.png"

export const UserBar = () => {

    const [option,setOption]= useState('');

    const changeUser = () => {
        setOption('profile');
      };

    const changeQuincho = () => {
        setOption('quinchos');
      };

    const changeComentary = () => {
        setOption('reservations');
      };


    const filterOption = (option) => {
        if (option === 'profile') {
           return <Profile/>
        }
        if (option === 'quinchos') {
           return <QuinchoList/>
        }
        if (option === 'reservations') {
           return <ComentaryList/>
        }
        else{
            return <Profile />
        }

        
    };



    return (

        <>

            <div data-theme="light" className="mt-10 md:flex md:items-center md:justify-center bg-white">
                <ul className="shadow-lg m-4 menu bg-base-200 lg:menu-horizontal rounded-box">

                    <li className="m-3 text-2xl font-bold">
                        Tu cuenta
                    </li>

                    <li className="font-semibold text-lg hover:bg-[#35C5DF] rounded-md" >

                        <a onClick={changeUser}>
                                
                            {/*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>*/}
                            <img
                                className="h-10 w-10"
                                src={user}
                                alt="Logo de quinchos"
                            />
                            Tu Perfil
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
                            Tus Quinchos
                        </a>
                    </li>
                    <li className="font-semibold text-lg hover:bg-[#35C5DF] rounded-md" >

                        <a onClick={changeComentary}>
                            {/*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>*/}
                            <img
                                className="h-10 w-10"
                                src={reservation}
                                alt="Logo de reservas"
                            />
                            Tus Reservas
                        </a>
                    </li>

                </ul>
            </div>

            {filterOption(option)}
        </>
    )
}
