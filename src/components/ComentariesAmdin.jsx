import React, { useEffect, useState } from "react";
import imageCompression from "browser-image-compression";

export const ComentariesAdmin = () => {
  const [opinions, setOpinions] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseComentaries = await fetch(
          "http://localhost:8080/admin/opinions",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!responseComentaries.ok) {
          throw new Error("Network response was not ok");
        }

        const dataComentaries = await responseComentaries.json();

        const combinedData = [];

        for (const comment of dataComentaries) {
          const userResponse = await fetch(
            `http://localhost:8080/customer-opinions/user/${comment.id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (userResponse.ok) {
            const userData = await userResponse.json();
            console.log(userData);

            const quinchoResponse = await fetch(
              `http://localhost:8080/customer-opinions/comentary/quincho/${comment.id}`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

            if (quinchoResponse.ok) {
              const quinchoData = await quinchoResponse.json();

              const photoUrls = await Promise.all(
                quinchoData.photos.map(async (_, index) => {
                  const responsePhoto = await fetch(
                    `http://localhost:8080/quinchos/fotos/${quinchoData.id}/${index}`
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
                      `No se pudo cargar la imagen del quincho ${quinchoData.name}`
                    );
                    return null;
                  }
                })
              );

              combinedData.push({
                commentData: comment,
                userData: userData,
                quinchoData: quinchoData,
                photoUrls: photoUrls,
              });

              // Aquí se puede agregar un console.log para verificar si combinedData contiene datos
              console.log(combinedData);
            }
          }
        }

        // Verificar si combinedData contiene datos
        console.log(combinedData);

        setOpinions(combinedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [token]);

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
        setOpinions((prevOpinions) =>
          prevOpinions.filter(
            (opinion) => opinion.commentData.id !== comentaryId
          )
        );
      } else {
        console.error("No se pudo eliminar el comentario");
      }
    } catch (error) {
      console.error("Error al eliminar el comentario:", error);
    }
  };

  return (
    <div data-theme="light" className="m-6 overflow-x-auto">
      <h2 className="mt-4 text-2xl border-b-2 md:text-3xl font-bold text-black mb-2 p-2 text-center">
        Comentarios de Usuarios
      </h2>
      <div>
        <table className="table m-6 w-max-w-lg mx-auto p-6 bg-white rounded-md shadow-2xl">
          <thead>
            <tr className="mt-6">
              <th className="text-black text-lg font-bold text-center ">
                Quincho
              </th>
              <th className="text-black text-lg font-bold text-center">
                Cliente
              </th>
              <th className="text-black text-lg font-bold text-center">
                Comentarios
              </th>
              <th className="text-black text-lg font-bold mt-8"></th>
            </tr>
          </thead>
          <tbody>
            {opinions.map((opinion, index) => (
              <tr key={index}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold text-center">
                        {opinion.quinchoData.nameQuincho}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="font-bold text-center">
                      {opinion.userData.name}
                    </div>
                  </div>
                </td>
                <td className="text-center">{opinion.commentData.comment}</td>
                <th>
                  <button
                    className="btn btnReservas btn-sm p-4 mt-1"
                    onClick={() => eliminarComentario(opinion.commentData.id)}
                  >
                    Cancelar
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
