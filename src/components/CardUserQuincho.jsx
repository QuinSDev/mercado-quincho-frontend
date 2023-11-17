import React, { useState } from 'react'
import { data } from '../api/Quinchos'
import chalet from "../assets/images/chalet.png"
import quinta from "../assets/images/quinta.png"
import cabaña from "../assets/images/cabaña.png"
import { Link } from "react-router-dom";


export const CardUserQuincho = () => {

    const [quinchos, setQuinchos] = useState(data);

    const showIcon = (option) => {

        if (option === 'Chalets') {
            return <img
                className="h-8 w-8"
                src={chalet}
                alt="Logo de chalets"
            />
        }
        if (option === 'Quintas') {
            return <img
                className="h-8 w-8"
                src={quinta}
                alt="Logo de quintas"
            />
        }
        if (option === 'Cabañas') {
            return <img
                className="h-8 w-8"
                src={cabaña}
                alt="Logo de cabañas"
            />
        }
    };

    

    return (
        <>
            <div className="mt-10 mx-auto max-w-screen-lg mb-10">

                <div data-theme="light" className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-6">

                    {quinchos.map((quincho) => (
                        <div key={quincho.id} className='mt-6 mb-1 md:flex md:items-center md:justify-center flex-col'>

                            <div className="bg-white w-[300px] rounded-md hover:scale-105 duration-700 p-5 marker:rounded-md shadow-2xl hover:shadow-slate-500">

                                <div className="relative" style={{ maxHeight: '200px', minHeight: '200px' } }>
                                    <img
                                        src={quincho.image}
                                        alt="imagen del quincho"
                                        className=" w-full h-full object-cover object-center rounded-md"
                                    />

                                    <span aria-hidden="true"
                                        className="absolute inset-3 p-2"
                                    >
                                        {showIcon(quincho.typeQuincho)}
                                    </span>
                                </div>

                                <h4 className="pt-2 text-black font-bold">{quincho.nameQuincho}</h4>
                                <p className="text-base leading-7 text-gray-500 font-semibold space-y-4">{quincho.location}</p>


                                <div className="mt-4 flex justify-center">

                                    <Link to="/editQuincho">
                                        <button className="btn bg-[#35C5DF] hover:bg-black text-white font-semibold px-3 py-1.5 rounded-md transition duration-300 mt-2">Actualizar Quincho</button>
                                    </Link>

                                </div>

                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};