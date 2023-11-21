import React from 'react'
import loginblue from "../assets/images/loginblue.png"
import registerblue from "../assets/images/registerblue.png"
import cabañablue from "../assets/images/cabañablue.png"

export const Customer = () => {

    return (


        <div data-theme="light" className="bg-white">
            <div className="m-10 max-w-xl h-150 mx-auto p-10 bg-white rounded-md shadow-2xl">
                <h2 className=" text-2xl border-b-2 md:text-3xl font-bold text-black mb-2 p-2 text-center">Alquilar un quincho </h2>
                <div className=" m-4 text-justify">
                    <h3 className='mt-4'>
                        Alquilar un quincho con nosotros es fácil y seguro. Antes de comenzar, es necesario registrarse y luego iniciar sesión
                        en su cuenta para garantizar la seguridad de sus datos personales y para brindarle la mejor experiencia posible.</h3>
                    <br />
                    <p> ¿Cómo puede alquilar un quincho? Siga estos sencillos pasos:</p>

                    <div className='mt-2 flex'>                 
                    <img
                                className="mt-2 h-10 w-10"
                                src={registerblue}
                                alt="Logo de registro"
                            />
                            <h3 className='mt-4 ml-2 font-bold text-xl'>Registro</h3>
                    </div>

                    <h3 className='mt-4 font-semibold'>Crear una cuenta:</h3>
                    <p>Haga clic en "Regístrate" en el menu de la esquina superior derecha de la página y complete el formulario con la información
                        requerida, como nombre y apellido, dirección, teléfono, correo electrónico, contraseña segura, y suba una foto de perfil a su elección.</p>
                    <h3 className='mt-4 font-semibold'>Verificación:</h3>
                    <p>Recibirá un correo electrónico de confirmación para verificar su dirección de correo electrónico. Haga clic en el enlace proporcionado para confirmar su cuenta.</p>

                    <div className='mt-2 flex'>                 
                    <img
                                className="mt-2 h-10 w-10"
                                src={loginblue}
                                alt="Logo de login"
                            />
                            <h3 className='mt-4 ml-2 font-bold text-xl'>Iniciar sesión</h3>
                    </div>
                    <p className='mt-4'>Una vez que su cuenta esté verificada, inicie sesión en el sitio web utilizando su dirección de correo electrónico y contraseña registradas.</p>

                    <div className='mt-2 flex'>                 
                    <img
                                className="mt-2 h-10 w-10"
                                src={cabañablue}
                                alt="Logo de quincho"
                            />
                            <h3 className='mt-4 ml-2 font-bold text-xl'>Alquilar un quincho</h3>
                    </div>
                    <h3 className='mt-4 font-semibold'>Explorar quinchos disponibles:</h3>
                    <p>Navegue por nuestra selección de quinchos disponibles utilizando filtros como tipo de quincho y otros detalles relevantes.</p>
                    <h3 className='mt-4 font-semibold'>Reservar:</h3>
                    <p>Seleccione el quincho que mejor se adapte a sus necesidades y siga las instrucciones para completar la reserva. Puede verificar la disponibilidad, los precios y 
                        cualquier otro detalle adicional en esta etapa.</p>
                    <br />
                    <p> Recuerde, su seguridad es nuestra prioridad. Todos sus datos personales se manejan de manera segura y confidencial. Utilizamos medidas de seguridad robustas para 
                        proteger su información en todo momento. Si tiene alguna pregunta o necesita asistencia adicional durante el proceso de alquiler, no dude en ponerse en contacto 
                        con nuestro equipo de soporte. Estamos aquí para ayudarlo en cada paso del camino.</p>

                    <h3 className='mt-4 font-semibold'>¡Gracias por confiar en nosotros para su próxima experiencia de alquiler de quinchos!</h3>

                </div>
            </div>
        </div>

    )
}
