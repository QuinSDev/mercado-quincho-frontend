import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
/*El componente esta relacionado con EmailJS
Para poder utilizarlo:
En EmailJS:
- Crear cuenta, la cual se enlaza con una cuenta de correo electronico al cual van a llegar los comentarios
que se envien desde el sitio web
- Configurar Email Services y Email Templates
- En Email Services se encuentra el Service_ID
- En Email Templates, en settings se encuentra el Template_ID
- En Account se encuentra Public Key 
En nuestro proyecto:
- npm i @emailjs/browser
- importarlo en el encabezado del componente
- Debemos seguir la documentacion de EmailJS para la configuracion del componente
- En el formulario debemos respetar los nombres de acuerdo a lo configurado en el template de EmailJS
*/

export const Mail = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zpi08ol', 'template_tu1fliv', form.current, 'kM2IOsTCpYgbcbpAx')
            .then((result) => {
                alert("Mensaje enviado exitosamente");
                console.log(result.text);
            }, (error) => {
                alert("El mensaje no pudo ser enviado");
                console.log(error.text);
            });
    };


    return (

        <div data-theme="light" className="bg-white">
            <div className="m-10 max-w-xl h-150 mx-auto p-10 bg-white rounded-md shadow-2xl">
                <h2 className=" text-2xl border-b-2 md:text-3xl font-bold text-black mb-2 p-2 text-center">Necesitas contactarnos? </h2>
                <div className=" m-4 text-justify">
                    <p className='mt-4 font-semibold'>¿Necesitas ayuda o tienes alguna pregunta? </p>
                    <p className='mt-4'>¡Estamos aquí para asistirte! Si requieres asistencia adicional, no dudes en ponerte en contacto con nosotros. Puedes
                        enviar un comentario con tu consulta y nuestro equipo estará encantado de ayudarte. Nos esforzamos por responder
                        lo más pronto posible, así que no dudes en escribirnos. ¡Estamos comprometidos a brindarte el mejor servicio posible!</p>

                    <div className='mt-4'>

                        <form data-theme="light" ref={form} onSubmit={sendEmail}>

                            <div className="mt-6 formQuincho">
                                <input
                                    type="text"
                                    name="user_name"
                                    placeholder=" "
                                />
                                <label htmlFor="user_name">Nombre</label>
                            </div>

                            <div className="mt-6 formQuincho">
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder=" "
                                />
                                <label htmlFor="user_email">Email</label>
                            </div>

                            <label
                                htmlFor="typeQuincho"
                                className="mt-4 ml-2 block text-sm font-medium leading-6 text-gray-900"
                            >
                                Mensaje
                            </label>
                            <div className="formQuincho">
                                <textarea name="message"
                                   
                                />
                                
                            </div>

                            <button
                                type="submit"
                                value="Send"
                                className="mt-6 btn bg-[#35C5DF] text-white hover:bg-black hover:text-white font-semibold px-3 py-1.5 rounded-md transition duration-300"
                            >
                                Enviar Mensaje
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
