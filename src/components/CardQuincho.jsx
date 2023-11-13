import React, { useState } from 'react'
import heart from "../assets/images/heart.png"
import chalet from "../assets/images/chalet.png"
import quinta from "../assets/images/quinta.png"
import cabaña from "../assets/images/cabaña.png"
import location from "../assets/images/location.png"
import money from "../assets/images/money.png"


export const CardQuincho = ({ quinchos }) => {

    {/*const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    };*/}


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

        <div data-theme="light" className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="mt-0 text-2xl border-b-2 md:text-3xl font-bold text-black mb-2 p-2 text-center">Nuestros Quinchos</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {quinchos.map((quincho) => (

                        <div key={quincho.id} className="relative rounded-md shadow-2xl">

                            {/*imagen*/}
                            <div className="w-full overflow-hidden rounded-md bg-gray-200 lg:h-80 group-hover:opacity-75">
                                {/*hover:opacity-75*/}
                                <img
                                    src={quincho.image}
                                    alt="imagen del quincho"
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                                <span aria-hidden="true"
                                    className="absolute inset-3 p-2"
                                >
                                    <img
                                        className="h-8 w-8"
                                        src={heart}
                                        alt="Logo de corazon"
                                    />
                                </span>
                            </div>


                            <div className="m-4">

                                {/*Titulo*/}
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <span>
                                            {showIcon(quincho.typeQuincho)}
                                        </span>
                                    </div>

                                    <div>
                                        <h3 className="mt-1 text-l font-bold text-gray-900">
                                            <a >
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {quincho.nameQuincho}
                                            </a>
                                        </h3>
                                    </div>
                                </div>


                                {/*Direccion*/}
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <span>
                                            <img
                                                className="h-8 w-8"
                                                src={location}
                                                alt="Logo de direccion"
                                            />
                                        </span>

                                    </div>

                                    <div>
                                        <h3 className="mt-1 text-sm text-gray-500">
                                            <a >
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {quincho.location}
                                            </a>
                                        </h3>
                                    </div>
                                </div>

                                {/*Precio*/}
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <span>
                                            <img
                                                className="h-8 w-8"
                                                src={money}
                                                alt="Logo de dolar"
                                            />
                                        </span>
                                    </div>

                                    <div>
                                        <h3 className="mt-1 font-semibold text-sm text-gray-500">
                                            <a >
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                $ {quincho.price} Por noche
                                            </a>
                                        </h3>
                                    </div>
                                </div>

                                <button className='mt-8 btnQuincho'>Ver Quincho</button>

                            </div>
                        </div>

                    ))}

                </div>
            </div>
        </div>
    )
}
