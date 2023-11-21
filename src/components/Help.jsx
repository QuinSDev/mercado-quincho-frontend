import React from 'react'
import logo from "../assets/images/logoazul.png"

export const Help = () => {
    return (
        <div data-theme="light" className="bg-white">
            <div className="m-10 max-w-xl h-150 mx-auto p-10 bg-white rounded-md shadow-2xl">
                <h2 className=" text-2xl border-b-2 md:text-3xl font-bold text-black mb-2 p-2 text-center">¡Bienvenido al centro de ayuda!</h2>

                <div className='text-justify'>
                    <p className='mt-4'>En este espacio, nos esforzamos por brindarte la mejor asistencia y orientación para hacer que tu experiencia
                        sea excepcional. Ya sea que necesites ayuda para navegar por nuestro sitio o desees sacar el máximo provecho
                        de nuestros servicios, estás en el lugar adecuado.</p>
                    <p className='mt-2'>Si no encuentras lo que buscas, no dudes en contactarnos directamente. Estamos listos para escucharte y ayudarte
                        en cualquier momento.</p>

                    <p className='mt-2'>Apreciamos tu confianza al elegirnos para tu próximo paso. Estamos emocionados de acompañarte en esta experiencia
                        y asegurarnos de que obtengas lo mejor de nuestro servicio.</p>

                    <h3 className='mt-4 font-semibold'>Gracias por formar parte de nuestra comunidad y por permitirnos ser parte de tu viaje.</h3>
                </div>

                <div className='mt-2 flex flex-col justify-center items-center'>
                    <img
                        className="mt-4 h-20 w-20 items-center"
                        src={logo}
                        alt="Logo de registro"
                    />
                </div>
            </div>
        </div>
    )
}
