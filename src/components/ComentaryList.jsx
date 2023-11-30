import React, { useContext, useEffect, useState } from "react";
import imageCompression from "browser-image-compression";
import { Link } from "react-router-dom";
import { QuinchoContext } from "./QuinchoProvider";

export const ComentaryList = ({ changeToEditReserva }) => {
  const { editReservation } = useContext(QuinchoContext);

  const handleQuincho = (quincho, event) => {
    editReservation(quincho);
    event.preventDefault();
  };

  const [reservations, setReservations] = useState([]);
  const [quinchos, setQuinchos] = useState();

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const userEmail = localStorage.getItem("userEmail");

      // Obtener las reservas
      const responseReservations = await fetch(
        `https://mucho-cattle-production.up.railway.app/reservation/quincho-reservations/${userEmail}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (responseReservations.ok) {
        const dataReservas = await responseReservations.json();
        setReservations(dataReservas);

        // Obtener los quinchos si existen reservas
        if (dataReservas.length > 0) {
          const combinedData = [];

          for (const reservation of dataReservas) {
            const responseQuincho = await fetch(
              `https://mucho-cattle-production.up.railway.app/reservation/quincho/${reservation.idReservation}`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

            if (responseQuincho.ok) {
              const dataQuincho = await responseQuincho.json();

              const photoPromises = dataQuincho.photos.map(async (_, index) => {
                const responsePhoto = await fetch(
                  `https://mucho-cattle-production.up.railway.app/quinchos/fotos/${dataQuincho.id}/${index}`
                );

                if (responsePhoto.ok) {
                  const imageBlob = await responsePhoto.blob();

                  const options = {
                    maxSizeMB: 0.1, // Tamaño máximo de la imagen comprimida en megabytes
                    maxWidthOrHeight: 800, // Ancho o altura máximo permitido
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
              });

              const photoUrls = await Promise.all(photoPromises);

              // Combina los datos de quincho y reservation en un solo objeto
              const responseUser = await fetch(
                `https://mucho-cattle-production.up.railway.app/reservation/user-reservations/${reservation.idReservation}`,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );

              if (responseUser.ok) {
                const dataUser = await responseUser.json();

                combinedData.push({
                  ...dataQuincho,
                  ...reservation,
                  ...dataUser,
                  photoUrls: photoUrls,
                });
              }
            }
          }

          // Ahora puedes usar combinedData para acceder a los datos de quinchos y reservations juntos
          setQuinchos(combinedData);
          console.log(combinedData);
        }
      } else {
        console.error("No se pudieron obtener las reservas");
      }
    } catch (error) {
      alert("Error al obtener datos: " + error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const cancelRservation = async (reservationId) => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `https://mucho-cattle-production.up.railway.app/reservation/delete/${reservationId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        // Actualiza el estado local 'quinchos' para eliminar la reserva cancelada
        const updatedQuinchos = quinchos.filter(
          (quincho) => quincho.idReservation !== reservationId
        );
        setQuinchos(updatedQuinchos);
      } else {
        console.error("No se pudo cancelar la reserva");
      }
    } catch (error) {
      console.error("Error al cancelar la reserva:", error);
    }
  };

  return (
    <>
      <div data-theme="light" className="m-6 overflow-x-auto">
        <h2 className="mt-4 text-2xl border-b-2 md:text-3xl font-bold text-black mb-2 p-2 text-center">
          Reservas hechas
        </h2>
        <div>
        <table className="table m-6 w- max-w-lg mx-auto p-6 bg-white rounded-md shadow-2xl">
          <thead>
            <tr className="mt-6">
              <th className="text-black text-lg font-bold text-center ">Quincho</th>
              <th className="text-black text-lg font-bold">Cliente</th>
              <th className="text-black text-lg font-bold">Invitados</th>
              <th className="text-black text-lg font-bold">Fecha ingreso</th>
              <th className="text-black text-lg font-bold">Fecha salida</th>
              <th className="text-black text-lg font-bold mt-8">Total</th>
              <th className="text-black text-lg font-bold mt-8"></th>
            </tr>
          </thead>
          {quinchos &&
            quinchos.map((quincho) => (
              <tbody key={quincho.idReservation}>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-16 h-16">
                          <img src={quincho.photoUrls[0]} alt="Photo User" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-center">{quincho.nameQuincho}</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">{quincho.name}</td>
                  <td className="text-center">{quincho.guest}</td>
                  {/* Agrega las demás columnas de la tabla aquí */}
                  <td className="text-center">
                    {quincho.startDate}
                  </td>
                  <td className="text-center">{quincho.endDate}</td>
                  <td className="text-center">$ {quincho.totalPayment}</td>
                  <th>
                    <button
                      className="btn btnReservas btn-sm p-4 mt-1"
                      onClick={() => cancelRservation(quincho.idReservation)}
                    >
                      Cancelar
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
