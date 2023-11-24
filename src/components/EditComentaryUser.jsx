import React, { useEffect, useState } from "react";
import imageCompression from "browser-image-compression";
import { Comentaries } from "./Comentaries";

export const EditComentaryUser = () => {
  const [comentaries, setComentaries] = useState([]);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedComment, setEditedComment] = useState("");
  const token = localStorage.getItem("token");
  const userEmail = localStorage.getItem("userEmail");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseComentaries = await fetch(
          `http://localhost:8080/customer-opinions/comentary/user/${userEmail}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (responseComentaries.ok) {
          const dataComentaries = await responseComentaries.json();

          if (dataComentaries.length > 0) {
            const newCombinedData = [];

            for (const quincho of dataComentaries) {
              const responseQuincho = await fetch(
                `http://localhost:8080/customer-opinions/comentary/quincho/${quincho.id}`,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );

              if (responseQuincho.ok) {
                const dataQuincho = await responseQuincho.json();

                const photoPromises = dataQuincho.photos.map(
                  async (_, index) => {
                    const responsePhoto = await fetch(
                      `http://localhost:8080/quinchos/fotos/${dataQuincho.id}/${index}`
                    );

                    if (responsePhoto.ok) {
                      const imageBlob = await responsePhoto.blob();

                      const options = {
                        maxSizeMB: 0.1,
                        maxWidthOrHeight: 800,
                        useWebWorker: true,
                      };

                      const compressedImage = await imageCompression(
                        imageBlob,
                        options
                      );

                      return URL.createObjectURL(compressedImage);
                    } else {
                      console.error(
                        `No se pudo cargar la imagen del quincho ${dataQuincho.name}`
                      );
                      return null;
                    }
                  }
                );

                const photoUrls = await Promise.all(photoPromises);

                newCombinedData.push({
                  ...quincho,
                  ...dataQuincho,
                  photoUrls: photoUrls,
                  commentId: quincho.id,
                });
              }
            }
            setComentaries(newCombinedData);
          }
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  const eliminarComentario = async (comentaryId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/customer-opinions/delete/${comentaryId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        setComentaries((prevComentaries) =>
          prevComentaries.filter(
            (comentary) => comentary.commentId !== comentaryId
          )
        );
      } else {
        console.error("No se pudo eliminar el comentario");
      }
    } catch (error) {
      console.error("Error al eliminar el comentario:", error);
    }
  };

  const updateComentary = async (comentaryId) => {
    

    try {
      const userEmail = localStorage.getItem("userEmail");

      const requestData = new FormData();
      requestData.append("comment", editedComment);

      const responseOpinion = await fetch(
        `http://localhost:8080/customer-opinions/update/${comentaryId}`,
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
        // Si la actualización fue exitosa, actualiza el estado local de comentarios
        setComentaries((prevComentaries) =>
          prevComentaries.map((comment) =>
            comment.commentId === comentaryId
              ? { ...comment, comment: editedComment }
              : comment
          )
        );
        setEditingCommentId(null); // Sale del modo de edición
      } else {
        alert(responseData.msg);
      }
    } catch (error) {}
  };

  return (
    <>
      <div data-theme="light" className="m-6 overflow-x-auto">
        <h2 className="mt-4 text-2xl border-b-2 md:text-3xl font-bold text-black mb-2 p-2 text-center">
          Tus Comentarios
        </h2>
        <div>
          <table className="table m-6 w- max-w-3xl mx-auto p-6 bg-white rounded-md shadow-2xl">
            <thead>
              <tr className="mt-6">
                <th className="text-black text-lg font-bold text-center ">
                  Quincho
                </th>
                <th className="text-black text-lg font-bold text-center">
                  Comentario
                </th>
                <th className="text-black text-lg font-bold mt-8"></th>
              </tr>
            </thead>
            {comentaries &&
              comentaries.map((comentary) => (
                <tbody key={comentary.comentaryId}>
                  <tr>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-16 h-16">
                            <img
                              src={comentary.photoUrls[0]}
                              alt="Photo User"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-center">
                            {comentary.nameQuincho}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      {editingCommentId === comentary.commentId ? (
                        <textarea
                          className="border border-gray-300 p-2 w-full"
                          value={editedComment}
                          onChange={(e) => setEditedComment(e.target.value)}
                        />
                      ) : (
                        comentary.comment
                      )}
                    </td>
                    <th>
                      <button
                        className="btn btnReservas btn-sm mt-1 block"
                        onClick={() => {
                          if (editingCommentId === comentary.commentId) {
                            updateComentary(comentary.commentId);
                          } else {
                            setEditingCommentId(comentary.commentId);
                            setEditedComment(comentary.comment);
                          }
                        }}
                      >
                        {editingCommentId === comentary.commentId
                          ? "Guardar"
                          : "Modificar"}
                      </button>
                      <button
                        className="btn btnReservas btn-sm p-4 mt-1"
                        onClick={() => eliminarComentario(comentary.commentId)}
                      >
                        Eliminar
                      </button>
                    </th>
                  </tr>
                </tbody>
              ))}
          </table>
        </div>
      </div>
    </>
  );
};
