import React from 'react'
import comentario from "../assets/images/comentario.png";
import edit from "../assets/images/edit.png";
import cancel from "../assets/images/cancel.png";

export const ComentaryUser = () => {
  return (
    <div
                  className="m-6 relative rounded-md bg-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] hover:shadow-gray-400 hover:scale-105 duration-700"
                  style={{ width: "290px" }}
                >
                  {/*titulo de comentarios*/}
                  <div className="mt-2 flex justify-center">
                    <div className="p-2">
                      <span>
                        <img
                          className="h-7 w-7"
                          src={comentario}
                          alt="Logo de comentario"
                        />
                      </span>
                    </div>
                    <div>
                      <h3 className="p-2 font-semibold text-lg text-gray-900">
                        <a>
                          <span aria-hidden="true" />
                          Comentarios
                        </a>
                      </h3>
                    </div>
                  </div>

                  {/*lista de comentarios*/}
                  <div className="m-2 flex flex-col justify-center border-2 rounded-md">
                    <div className="flex justify-center">
                      <h3 className="mt-0.5 font-semibold text-sm text-gray-500">
                        "Chalet muy lindo"
                      </h3>
                      {/*<h3 className="mt-0.5 text-sm text-gray-500">  chalet muy lindo</h3>*/}
                    </div>

                    <div className="mt-2 flex justify-center">
                      <button className="m-2 p-2 bg-[#35C5DF] text-white hover:bg-black font-semibold py-2 rounded-md transition duration-300">
                        <img
                          className="h-7 w-7"
                          src={edit}
                          alt="Logo de editar"
                        />
                      </button>
                      <button className="m-2 p-2 bg-[#35C5DF] text-white hover:bg-black font-semibold py-2 rounded-md transition duration-300">
                        <img
                          className="h-8 w-8"
                          src={cancel}
                          alt="Logo de cancelar"
                        />
                      </button>
                    </div>
                  </div>

                  {/*boton de agregar comentario*/}
                  <form data-theme="light" className="m-2">
                    <label
                      htmlFor="typeQuincho"
                      className="mt-4 ml-2 block text-sm font-medium leading-6 text-gray-900"
                    >
                      Nuevo Comentario
                    </label>
                    <div className="formQuincho">
                      <textarea name="message" />
                    </div>
                    <div className="mt-4 flex justify-center">
                      <button
                        type="submit"
                        className="btn bg-[#35C5DF] hover:bg-black text-white text-xs font-semibold px-3.5 py-1 rounded-md transition duration-300 mt-1"
                      >
                        Agregar Comentario
                      </button>
                    </div>
                  </form>
                </div>
  )
}
