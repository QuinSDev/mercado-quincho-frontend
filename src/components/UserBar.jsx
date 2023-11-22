import React, { useState } from 'react';
import { UserList } from './UserList';
import { QuinchoList } from "./QuinchoList";
import { ComentaryList } from "./ComentaryList";
import { ImageList } from './ImageList';
import { Profile } from './Profile';
import home from "../assets/images/home.png"
import user from "../assets/images/user.png"
import reservation from "../assets/images/reservation.png"
import { CardUserQuincho } from './CardUserQuincho';
import { Link } from "react-router-dom";
import { ReservationEdit } from './ReservationEdit';
import { CardUserReservation } from './CardUserReservation';

export const UserBar = ({ quinchos }) => {

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

      const changeToEditReserva = () => {
        setOption('editReserva');
      }


      const filterOption = (option) => {
        if (option === 'profile') {
           return <Profile/>
        }
        if (option === 'quinchos') {
           return <CardUserQuincho quinchos={quinchos}/>
        }
        if (option === 'reservations') {
            return <CardUserReservation />
         }
         
        if (option == 'editReserva') {
            return <ReservationEdit />
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
                    <Link to="/userAccount/profile">
                    <li className="font-semibold text-lg hover:bg-[#35C5DF] rounded-md" >
                        
                        <a onClick={changeUser}>
                             
                            <img
                                className="h-10 w-10"
                                src={user}
                                alt="Logo de quinchos"
                            />
                            Tu Perfil
                        </a>
                    </li>
                    </Link>
                    <Link to="/userAccount/quinchos">
                    <li className="font-semibold text-lg hover:bg-[#35C5DF] rounded-md" >

                        <a onClick={changeQuincho}>
                           
                            <img
                                className="h-10 w-10"
                                src={home}
                                alt="Logo de quinchos"
                            />
                            Tus Quinchos
                        </a>
                    </li>
                    </Link>
                    <Link to="/userAccount/reservations">
                    <li className="font-semibold text-lg hover:bg-[#35C5DF] rounded-md" >

                        <a onClick={changeComentary}>
                           
                            <img
                                className="h-10 w-10"
                                src={reservation}
                                alt="Logo de reservas"
                            />
                            Tus Reservas
                        </a>
                    </li>
                    </Link>
                </ul>
            </div>

            {filterOption(option)}
        </>
    )
}
