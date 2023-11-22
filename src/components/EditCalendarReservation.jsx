import React, { useState, useEffect, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { QuinchoContext } from "./QuinchoProvider";

export const EditCalendarReservation = ({
  quincho,
  setIsEditing,
  setIsDataUpdated,
}) => {
  const { selectedQuinchoR, editReservation } = useContext(QuinchoContext);
  const [quinchos, setQuinchos] = useState([]);

  useEffect(() => {
    setQuinchos([selectedQuinchoR]);
  }, [selectedQuinchoR]);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [guests, setGuests] = useState(1);
  const [price, setPrice] = useState();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setPrice(quincho.price);
  }, [quincho]);

  useEffect(() => {
    if (startDate && endDate) {
      const days = Math.floor(
        (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
      );
      setTotalPrice(days * price);
    }
  }, [startDate, endDate, price]);

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };

  const handleReservationSubmit = async (e) => {
    e.preventDefault();
    console.log(quincho);
    const userEmail = localStorage.getItem("userEmail");
    // Seteando la hora para check-in a las 3 PM y check-out a las 12 PM
    const checkInTime = "15:00"; // 3 PM
    const checkOutTime = "12:00"; // 12 PM

    const days = Math.floor(
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    const totalPrice = days * price;

    const requestData = new FormData();
    requestData.append("starDate", startDate.toISOString().split("T")[0]);
    requestData.append("endDate", endDate.toISOString().split("T")[0]);
    requestData.append("checkIn", checkInTime);
    requestData.append("checkOut", checkOutTime);
    requestData.append("totalPayment", totalPrice);
    requestData.append("guest", guests);

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:8080/reservation/update/${quincho.idReservation}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: requestData,
        }
      );

      const updatedQuinchoData = await response.json();
      if (response.ok) {
        setQuinchos((prevQuinchos) => {
          return prevQuinchos.map((prevQuincho) => {
            if (prevQuincho.id === updatedQuinchoData.id) {
              return updatedQuinchoData; // Reemplaza el quincho antiguo con el actualizado
            }
            return prevQuincho;
          });
        });
        editReservation(updatedQuinchoData);
        setIsEditing(false);
        setIsDataUpdated(true); // Marcar que los datos se actualizaron
      } else {
        alert(data.msg);
      }
    } catch (error) {
      console.error("Error al conectar con el servidor:", error);
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false)
  }

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Actualiza tu estancia</h2>
      <form onSubmit={handleReservationSubmit}>
        <div className="mb-4">
          <label
            htmlFor="checkInDate"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Check-in
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="checkOutDate"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Check-out
          </label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="guests"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Huéspedes
          </label>
          <input
            type="number"
            id="guests"
            className="border rounded w-full py-2 px-3"
            min="1"
            value={guests}
            onChange={handleGuestsChange}
            required
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="btn btnReservas btn-sm p-4"
          >
            Actualizar
          </button>
          <button
            type="submit"
            className="btn btnReservas btn-sm p-4"
            onClick={handleCancelClick}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};
