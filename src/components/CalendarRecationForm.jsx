// CalendarReservationForm.jsx
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const CalendarReservationForm = ({ quincho, isLoggedIn }) => {
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
    if (!isLoggedIn) {
      alert("Debes iniciar sesión para realizar una reserva.");
      return;
    }
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
    requestData.append("guest", guests)

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:8080/reservation/register/${userEmail}/${quincho.id}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: requestData,
        }
      );
      const data = await response.json();
      if (data.msg === "Tu reserva fue exitosa") {
        alert(data.msg);
      } else {
        alert(data.msg);
      }
    } catch (error) {
      console.error("Error al conectar con el servidor:", error);
    }
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Reserva tu estancia</h2>
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
            // minDate={new Date()}
            minDate={startDate}
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

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Reservar
        </button>
        <div className="mt-5 grid grid-cols-2">
          <p className="justify-self-start"><u>${price} USD X noche</u></p>
          <p className="justify-self-end">${totalPrice} USD</p>
        </div>
      </form>
    </div>
  );
};
