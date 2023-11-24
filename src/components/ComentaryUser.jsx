import React, { useState } from "react";
import comentario from "../assets/images/comentario.png";
import edit from "../assets/images/edit.png";
import cancel from "../assets/images/cancel.png";

export const ComentaryUser = ({ quincho }) => {
  const [comentary, setComentary] = useState("");
  const [showComment, setShowComment] = useState(false);
  const [commentToShow, setCommentToShow] = useState("");

  const handleComentaryChange = (e) => {
    setComentary(e.target.value);
  };

  const handleClick = () => {
    setShowComment(true);
    setCommentToShow(comentary); // Guardar el comentario para mostrarlo
    setComentary(""); // Vaciar el textarea
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const userEmail = localStorage.getItem("userEmail");

      const requestData = new FormData();
      requestData.append("comment", commentToShow);

      const responseOpinion = await fetch(
        `http://localhost:8080/customer-opinions/register/${userEmail}/${quincho.id}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: requestData,
        }
      );

      const responseData = await responseOpinion.json();
      if (responseOpinion.ok) {
        alert(responseData.msg)
      } else {
        alert(responseData.msg)
      }

    } catch (error) {}
  };

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
        {/* Mostrar solo cuando showComment es true */}
        {showComment && (
          <div className="flex justify-center">
            <h3 className="mt-0.5 font-semibold text-sm text-gray-500">
              {commentToShow}
            </h3>
          </div>
        )}
      </div>

      {/* Mostrar el área de texto siempre */}
      <form data-theme="light" className="m-2" onSubmit={handleSubmit}>
        <label
          htmlFor="typeQuincho"
          className="mt-4 ml-2 block text-sm font-medium leading-6 text-gray-900"
        >
          Nuevo Comentario
        </label>
        <div className="formQuincho">
          <textarea
            name="message"
            value={comentary}
            onChange={handleComentaryChange}
          />
        </div>
        <div className="mt-4 flex justify-center">
          {/* Mostrar solo si no se ha mostrado el comentario aún */}

          <button
            type="submit"
            className="btn bg-[#35C5DF] hover:bg-black text-white text-xs font-semibold px-3.5 py-1 rounded-md transition duration-300 mt-1"
            onClick={handleClick}
          >
            Agregar Comentario
          </button>
        </div>
      </form>
    </div>
  );
};
