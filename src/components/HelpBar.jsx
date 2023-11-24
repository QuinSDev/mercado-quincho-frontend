import React, { useState } from "react";
import alquilar from "../assets/images/alquilar.png"
import user from "../assets/images/user.png"
import mail from "../assets/images/mail.png"
import { Customer } from '../components/Customer';
import { Owner } from '../components/Owner';
import { Help } from "./Help";
import { Mail } from "./Mail";

export const HelpBar = () => {

    const [option,setOption]= useState('');

    const changeCustomer = () => {
        setOption('customer');
      };

    const changeOwner = () => {
        setOption('owner');
      };
    
    const changeMail = () => {
        setOption('mail');
      };

    const filterOption = (option) => {
        if (option === 'customer') {
           return <Customer />
        }
        if (option === 'owner') {
           return <Owner />
        } 
        if (option === 'mail') {
            return <Mail />
         }   
        else{
            return <Help />
        }
    };


    return (

        <>
            <div data-theme="light" className="mt-10 md:flex md:items-center md:justify-center bg-white">
                <ul className="shadow-lg m-4 menu bg-base-200 lg:menu-horizontal rounded-box">

                    <li className="m-3 text-2xl font-bold">
                        Centro de ayuda
                    </li>

                    <li className="font-semibold text-lg hover:bg-[#35C5DF] rounded-md" >

                        <a onClick={changeCustomer}>                         
                            <img
                                className="h-12 w-12"
                                src={user}
                                alt="Logo de owner"
                            />
                            Quieres alquilar un quincho?
                        </a>
                    </li>
                    <li className="font-semibold text-lg hover:bg-[#35C5DF] rounded-md" >

                        <a onClick={changeOwner}>                         
                            <img
                                className="h-12 w-10"
                                src={alquilar}
                                alt="Logo de owner"
                            />
                            Quieres ofrecer tu quincho?
                        </a>
                    </li>
                    <li className="font-semibold text-lg hover:bg-[#35C5DF] rounded-md" >

                        <a onClick={changeMail}>                         
                            <img
                                className="h-12 w-12"
                                src={mail}
                                alt="Logo de mail"
                            />
                            Contáctanos
                        </a>
                    </li>

                </ul>
            </div>

            {filterOption(option)}
        </>
    )
}
