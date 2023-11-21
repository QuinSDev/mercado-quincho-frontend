import React from 'react'
import loginblue from "../assets/images/loginblue.png"
import registerblue from "../assets/images/registerblue.png"
import cabañablue from "../assets/images/cabañablue.png"
import moneyblue from "../assets/images/moneyblue.png"

export const Owner = () => {

    return (


        <div data-theme="light" className="bg-white">
            <div className="m-10 max-w-xl h-150 mx-auto p-10 bg-white rounded-md shadow-2xl">
                <h2 className=" text-2xl border-b-2 md:text-3xl font-bold text-black mb-2 p-2 text-center">Ofrecer en alquiler un quincho </h2>
                <div className=" m-4 text-justify">
                    <h3 className='mt-4'>
                       Colocar tu quincho en nuestro sitio web para alquilarlo es fácil y seguro. Solo es necesario registrarse y completar toda 
                       la informacion de tu quincho para garantizar la mejor experiencia posible de manera segura.</h3>
                    <br />
                    <p> ¿Cómo puede ofrecer un quincho en alquiler? Siga estos sencillos pasos:</p>

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
                            <h3 className='mt-4 ml-2 font-bold text-xl'>Listar tu quincho</h3>
                    </div>
                    <h3 className='mt-4 font-semibold'>Crear tu anuncio:</h3>
                    <p>Una vez que hayas iniciado sesión, podrás crear tu anuncio para tu quincho. Proporciona detalles completos y precisos sobre tu propiedad, como nombre, ubicación, 
                        descripcion, capacidad de huespedes, tipo de quincho, servicios, y fotografías de alta calidad.</p>
                    <h3 className='mt-4 font-semibold'>Establecer tarifas y disponibilidad:</h3>
                    <p>Define las tarifas por noche o por período de alquiler, y establece el calendario de disponibilidad para que los huéspedes puedan ver cuándo está disponible tu quincho.</p>
                    
                    <div className='mt-2 flex'>                 
                    <img
                                className="mt-2 h-10 w-10"
                                src={moneyblue}
                                alt="Logo de quincho"
                            />
                            <h3 className='mt-4 ml-2 font-bold text-xl'>Método de cobro y cancelación de reservas</h3>
                    </div>
                    <h3 className='mt-4 font-semibold'>Cobro seguro:</h3>
                    <p>Utilizamos métodos de pago seguros para garantizar transacciones seguras entre anfitriones y huéspedes. Los pagos se procesan de manera segura a través de nuestra plataforma.</p>
                    <h3 className='mt-4 font-semibold'>Política de cancelación:</h3>
                    <p>Establece tu propia política de cancelación para las reservas. Puedes elegir entre distintas opciones para brindar flexibilidad a los huéspedes y proteger tu tiempo y propiedad.</p>
                    <br />
                    <p> Recuerda, tu seguridad y la de tus datos son nuestra prioridad. Utilizamos medidas de seguridad robustas para proteger tu información en todo momento. Si tienes alguna pregunta 
                        o necesitas asistencia adicional al momento de listar tu quincho, no dudes en ponerte en contacto con nuestro equipo de soporte. Estamos aquí para ayudarte en cada paso del camino.</p>

                    <h3 className='mt-4 font-semibold'>¡Gracias por elegir nuestra plataforma para compartir tu increíble quincho con futuros huéspedes!</h3>

                </div>
            </div>
        </div>

    )
}
