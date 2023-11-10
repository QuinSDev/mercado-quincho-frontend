import React from 'react'
import { useState, useEffect } from 'react';
import { MenuQuinchos } from './MenuQuinchos';

const quinchos1 =
    [
        {
            id: 1,
            nameQuincho: 'Quincho 1',
            location: 'Mendoza, Argentina',
            description: 'Chalet muy bonito',
            typeQuincho: 'Chalets',
            price: 35,
            numGuest: 3,
            numBedroon: 2,
            numBed: 2,
            numBathRoon: 1,
            image: 'https://st3.idealista.com/news/archivos/styles/fullwidth_xl_2x/public/2022-05/pexels-max-vakhtbovych-5997993.jpg?VersionId=hJiPIWETw1oclR_7x4IxPGHC6.J3lF0y&itok=mSMR8F3K',
        },

        {
            id: 2,
            nameQuincho: 'Quincho 2',
            location: 'Buenos Aires, Argentina',
            description: 'Chalet muy bonito',
            typeQuincho: 'Chalets',
            price: 135,
            numGuest: 4,
            numBedroon: 2,
            numBed: 2,
            numBathRoon: 2,
            image: 'https://st3.idealista.com/news/archivos/styles/fullwidth_xl_2x/public/2022-05/pexels-max-vakhtbovych-5997993.jpg?VersionId=hJiPIWETw1oclR_7x4IxPGHC6.J3lF0y&itok=mSMR8F3K',
        },

        {
            id: 3,
            nameQuincho: 'Quincho 3',
            location: 'Bogota, Colombia',
            description: 'Quinta muy bonita',
            typeQuincho: 'Quintas',
            price: 35,
            numGuest: 3,
            numBedroon: 2,
            numBed: 2,
            numBathRoon: 1,
            image: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/348392973.jpg?k=1ebf441d212b9e54c1aae282e5c3ecd2ab66beac82508fc8ff05f0d811049a3b&o=&hp=1',
        },

        {
            id: 4,
            nameQuincho: 'Quincho 4',
            location: 'Lima, Peru',
            description: 'Quinta muy bonita',
            typeQuincho: 'Quintas',
            price: 145,
            numGuest: 5,
            numBedroon: 3,
            numBed: 2,
            numBathRoon: 2,
            image: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/348392973.jpg?k=1ebf441d212b9e54c1aae282e5c3ecd2ab66beac82508fc8ff05f0d811049a3b&o=&hp=1',
        },

        {
            id: 5,
            nameQuincho: 'Quincho 5',
            location: 'Quito, Ecuador',
            description: 'Casa con Piscina muy bonita',
            typeQuincho: 'CasaPiscina',
            price: 150,
            numGuest: 5,
            numBedroon: 4,
            numBed: 3,
            numBathRoon: 3,
            image: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/276566186.jpg?k=681761e36f575662ecb29ab4d70e64e6fcb7a586cbfd69fe794275259c31eb5a&o=&hp=1',
        },

        {
            id: 6,
            nameQuincho: 'Quincho 6',
            location: 'Guayaquil, Ecuador',
            description: 'Casa con Piscina muy bonita',
            typeQuincho: 'CasaPiscina',
            price: 80,
            numGuest: 2,
            numBedroon: 1,
            numBed: 1,
            numBathRoon: 1,
            image: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/276566186.jpg?k=681761e36f575662ecb29ab4d70e64e6fcb7a586cbfd69fe794275259c31eb5a&o=&hp=1',
        },

    ]

const [quinchos, setQuinchos] = useState([]);

useEffect(() => {
    const filteredQuinchos = quinchos1.filter(
        (item) => item.typeQuincho === "Chalets"
    );
    setQuinchos(filteredQuinchos)
},
    []);



export const ChaletsList = () => {
    return (

        <>

            <MenuQuinchos />

            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Nuestros Chalets</h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {quinchos.map((quincho) => (

                            <div key={quincho.id} className="group relative">

                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img
                                        src={quincho.image}
                                        alt="imagen del quincho"
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                    <span aria-hidden="true" className="absolute inset-3 p-2" >
                                        <div className="rating">
                                            <input type="radio" name="rating-3" className="mask mask-heart" checked />
                                        </div>

                                    </span>

                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>



                                        <p className="mt-1 text-l font-semibold text-gray-900">{quincho.nameQuincho}</p>

                                        <p className="mt-1 text-sm text-gray-500">{quincho.location}</p>
                                        <p className="mt-1 text-sm font-medium text-gray-900">$ {quincho.price} Por Noche</p>


                                        <button className="btn bg-[#35C5DF] text-white hover:bg-black hover:text-white font-semibold px-3 py-1.5 rounded-md transition duration-300 mt-2">Ver Quincho</button>


                                    </div>

                                </div>
                            </div>

                        ))}


                    </div>
                </div>
            </div>

        </>

    )
}
