import React, { useContext, useState, useEffect } from "react";
import chalet from "../assets/images/chalet.png";
import quinta from "../assets/images/quinta.png";
import cabaña from "../assets/images/cabaña.png";
import placeblue from "../assets/images/placeblue.png";
import moneyblue from "../assets/images/moneyblue.png";
import bed from "../assets/images/bed.png";
import bathroom from "../assets/images/bathroom.png";
import blueman from "../assets/images/blueman.png";
import reservation from "../assets/images/reservation.png";
import reservablue from "../assets/images/reservablue.png";
import edit from "../assets/images/edit.png";
import cancel from "../assets/images/cancel.png";
import { Link } from "react-router-dom";
import imageCompression from "browser-image-compression";
import { QuinchoContext } from "./QuinchoProvider";
import { EditCalendarReservation } from "./EditCalendarReservation";
import { ComentaryUser } from "./ComentaryUser";

export const CardUserReservation = ({}) => {
  const { editReservation, selectedQuinchoR } = useContext(QuinchoContext);
  const [isDataUpdated, setIsDataUpdated] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleQuincho = (quincho) => {
    editReservation(quincho);
    setIsEditing(true);
  };

  const [reservations, setReservations] = useState([]);
  const [quinchos, setQuinchos] = useState();

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const userEmail = localStorage.getItem("userEmail");

      // Obtener las reservas
      const responseReservations = await fetch(
        `https://mucho-cattle-production.up.railway.app/reservation/user/${userEmail}`,
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
              `http://localhost:8080/reservation/quincho/${reservation.idReservation}`,
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
                  `http://localhost:8080/quinchos/fotos/${dataQuincho.id}/${index}`
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
              combinedData.push({
                ...dataQuincho,
                ...reservation,
                photoUrls: photoUrls,
              });
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
    if (isDataUpdated) {
      fetchData();
      setIsDataUpdated(false); // Restaurar el estado después de actualizar
    }
    fetchData();
  }, [isDataUpdated]);

  const cancelRservation = async (reservationId) => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `http://localhost:8080/reservation/delete/${reservationId}`,
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

  const showIcon = (option) => {
    if (option === "Chalet") {
      return <img className="h-7 w-7" src={chalet} alt="Logo de chalets" />;
    }
    if (option === "Quinta") {
      return <img className="h-7 w-7" src={quinta} alt="Logo de quintas" />;
    }
    if (option === "Cabaña") {
      return <img className="h-7 w-7" src={cabaña} alt="Logo de cabañas" />;
    }
  };

  const currentDate = new Date()

  const isStayOver = (endDate) => {
    const endReservationDate = new Date(endDate)
    return currentDate > endReservationDate
  }

 

  return (
    <>
      <div data-theme="light" className="mt-10 mx-auto max-w-screen-lg mb-10">
        {quinchos &&
          quinchos.map((quincho) => (
            <div
              data-theme="light"
              className="mt-10 max-w-5xl mx-auto bg-[#35C5DF] bg-opacity-40 rounded-md shadow-2xl"
            >
              <div className="mt-20 mx-6 rounded-md">
                {/*Titulo del quincho*/}
                <div className="mt-6 flex justify-center">
                  <div className="p-2">
                    <span>{showIcon(quincho.typeQuincho)}</span>
                  </div>

                  <div>
                    <h3 className="p-2 font-semibold text-lg text-gray-900">
                      <a>
                        <span aria-hidden="true" />
                        {quincho.nameQuincho}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>

              <div
                data-theme="light"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-md shadow-2xl"
              >
                {/*Quinchos*/}
                <div
                  key={quincho.id}
                  className="m-6 relative rounded-md bg-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] hover:shadow-gray-400 hover:scale-105 duration-700"
                  style={{ width: "290px" }}
                >
                  {/*imagen*/}
                  <div className="mt-2 w-full overflow-hidden  bg-gray-200 lg:h-52 group-hover:opacity-75">
                    <img
                      src={quincho.photoUrls[0]}
                      alt="imagen del quincho"
                      loading="lazy" // Agrega el atributo loading="lazy"
                      className="w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>

                  <div className="m-3 mt-2">
                    {/*Direccion*/}
                    <div className="mt-1 flex justify-between">
                      <div>
                        <span>
                          <img
                            className="h-7 w-7"
                            src={placeblue}
                            alt="Logo de direccion"
                          />
                        </span>
                      </div>

                      <div>
                        <h3 className="mt-0.5 text-sm text-gray-500">
                          <a>
                            <span aria-hidden="true" />
                            {quincho.location}
                          </a>
                        </h3>
                      </div>
                    </div>

                    {/*Numero de habitaciones y camas*/}
                    <div className="mt-1 flex justify-between">
                      <div>
                        <span>
                          <img
                            className="h-7 w-7"
                            src={bed}
                            alt="Logo de cama"
                          />
                        </span>
                      </div>

                      <div>
                        <h3 className="mt-0.5 text-sm text-gray-500">
                          <a>
                            <span aria-hidden="true" />
                            Habitaciones: {quincho.numBedroom}
                          </a>
                          <a>
                            <span aria-hidden="true" /> - Camas:{" "}
                            {quincho.numBed}
                          </a>
                        </h3>
                      </div>
                    </div>

                    {/*Numero de baños*/}
                    <div className="mt-1 flex justify-between">
                      <div>
                        <span>
                          <img
                            className="h-7 w-7"
                            src={bathroom}
                            alt="Logo de baño"
                          />
                        </span>
                      </div>

                      <div>
                        <h3 className="mt-0.5 text-sm text-gray-500">
                          <a>
                            <span aria-hidden="true" />
                            Baños: {quincho.numBathroom}
                          </a>
                        </h3>
                      </div>
                    </div>

                    {/*Huespedes*/}
                    <div className="mt-1 flex justify-between">
                      <div>
                        <span>
                          <img
                            className="h-7 w-7"
                            src={blueman}
                            alt="Logo de huesped"
                          />
                        </span>
                      </div>

                      <div>
                        <h3 className="mt-0.5 text-sm text-gray-500">
                          <a>
                            <span aria-hidden="true" />
                            Huespedes: {quincho.numGuest}
                          </a>
                        </h3>
                      </div>
                    </div>

                    {/*Precio*/}
                    <div className="mt-1 flex justify-between">
                      <div>
                        <span>
                          <img
                            className="h-7 w-7"
                            src={moneyblue}
                            alt="Logo de dolar"
                          />
                        </span>
                      </div>

                      <div>
                        <h3 className="mt-0.5 font-semibold text-sm text-gray-500">
                          <a>
                            <span aria-hidden="true" />$ {quincho.price} Por
                            noche
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/*Reservas*/}
                <div
                  className="m-6 relative rounded-md bg-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] hover:shadow-gray-400 hover:scale-105 duration-700"
                  style={{ width: "290px" }}
                >
                  {isEditing ? (
                    <div>
                      <EditCalendarReservation
                        quincho={quincho}
                        setIsEditing={setIsEditing}
                        setIsDataUpdated={setIsDataUpdated}
                      />
                    </div>
                  ) : (
                    <>
                      {/*Titulo de reservas*/}
                      <div className="mt-2 flex justify-center">
                        <div className="p-2">
                          <span>
                            <img
                              className="h-7 w-7"
                              src={reservation}
                              alt="Logo de reserva"
                            />
                          </span>
                        </div>
                        <div>
                          <h3 className="p-2 font-semibold text-lg text-gray-900">
                            <a>
                              <span aria-hidden="true" />
                              Reservas
                            </a>
                          </h3>
                        </div>
                      </div>

                      {/*lista de reservas*/}
                      <div className="m-2 flex flex-col justify-center border-2 rounded-md">
                        <img
                          className="h-7 w-7"
                          src={reservablue}
                          alt="Logo de reserva"
                        />
                        <div className="flex justify-center">
                          <h3 className="mt-0.5 font-semibold text-sm text-gray-500">
                            Fecha de Ingreso:
                          </h3>
                          <h3 className="ml-3 mt-0.5 text-sm text-gray-500">
                            {" "}
                            {quincho.startDate}
                          </h3>
                        </div>
                        <div className="mt-2 flex justify-center">
                          <h3 className="mt-0.5 font-semibold text-sm text-gray-500">
                            Check In:
                          </h3>
                          <h3 className="ml-3 mt-0.5 text-sm text-gray-500">
                            {quincho.checkIn} hs
                          </h3>
                        </div>
                        <div className="mt-2 flex justify-center">
                          <h3 className="mt-0.5 font-semibold text-sm text-gray-500">
                            Fecah de Salida:
                          </h3>
                          <h3 className="ml-3 mt-0.5 text-sm text-gray-500">
                            {quincho.endDate}
                          </h3>
                        </div>
                        <div className="mt-2 flex justify-center">
                          <h3 className="mt-0.5 font-semibold text-sm text-gray-500">
                            Check Out:
                          </h3>
                          <h3 className="ml-3 mt-0.5 text-sm text-gray-500">
                            {quincho.checkOut} hs
                          </h3>
                        </div>
                        <div className="ml-0 mt-2 flex justify-center">
                          <h3 className="mt-0.5 font-semibold text-sm text-gray-500">
                            Viajeros:
                          </h3>
                          <h3 className="ml-3 mt-0.5 text-sm text-gray-500">
                            {quincho.guest}
                          </h3>
                        </div>
                        <div className="mt-2 flex justify-center">
                          <h3 className="mt-0.5 font-semibold text-sm text-black">
                            Total:
                          </h3>
                          <h3 className="ml-3 mt-0.5 text-sm text-black">
                            ${quincho.totalPayment}
                          </h3>
                        </div>

                        <div className="mt-2 flex justify-center">
                          <button
                            className="m-2 p-2 bg-[#35C5DF] text-white hover:bg-black font-semibold py-2 rounded-md transition duration-300"
                            onClick={() => handleQuincho(quincho)}
                          >
                            <img
                              className="h-7 w-7"
                              src={edit}
                              alt="Logo de editar"
                            />
                          </button>
                          <button
                            className="m-2 p-2 bg-[#35C5DF] text-white hover:bg-black font-semibold py-2 rounded-md transition duration-300"
                            onClick={() =>
                              cancelRservation(quincho.idReservation)
                            }
                          >
                            <img
                              className="h-8 w-8"
                              src={cancel}
                              alt="Logo de cancelar"
                            />
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/*Comentarios*/}
                {isStayOver(quincho.endDate) && (
                  <ComentaryUser  quincho={quincho}/>
                )}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
