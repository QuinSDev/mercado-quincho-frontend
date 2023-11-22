import React, { useContext, useEffect, useState } from "react";
import { QuinchoContext } from "./QuinchoProvider";
import { EditCalendarReservation } from "./EditCalendarReservation";

export const ReservationEdit = () => {
  const { selectedQuinchoR } = useContext(QuinchoContext);
  const [quincho, setQuincho] = useState([])

  useEffect(() => {
    setQuincho(selectedQuinchoR)
  });

  return (
    <>
      <div data-theme="light" className="m-6 overflow-x-auto">
        <h2 className="mt-4 text-2xl border-b-2 md:text-3xl font-bold text-black mb-2 p-2 text-center">
          Editar Reserva
        </h2>
        <div className="card lg:card-side mr-36 ml-36 m-2 p-6 bg-white shadow-2xl">
          <figure>
            <img
              src={selectedQuinchoR.photoUrls[0]}
              alt="Photo Quincho"
              className="w-full object-cover object-center rounded-md lg:h-60 lg:w-60"
            />
          </figure>
          <div className="card-body mt-2 ml-10 p-1">
            <h2 className="md:text-3xl font-bold text-black">
              {selectedQuinchoR.nameQuincho}
            </h2>
            <p className="text-lg">{selectedQuinchoR.location}</p>
            <p className="text-lg">{selectedQuinchoR.description}</p>
          </div>
          {/* <div className=" card-actions grid grid-cols-2 pb-52">
            <p className="text-lg">
              Habitaciones: {selectedQuinchoR.numBedroom}
            </p>
            <p className="text-lg">Camas: {selectedQuinchoR.numBed}</p>
            <p className="text-lg">Baños: {selectedQuinchoR.numBathroom}</p>
            <p className="text-lg">
              Capacidad: {selectedQuinchoR.numGuest} personas
            </p>
          </div> */}
          <div>
            <EditCalendarReservation quincho={quincho}/>
          </div>
        </div>
      </div>
    </>
  );
};
