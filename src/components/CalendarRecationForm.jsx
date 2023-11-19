// CalendarReservationForm.jsx
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const CalendarReservationForm = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [guests, setGuests] = useState(1);
  
    const handleGuestsChange = (e) => {
      setGuests(e.target.value);
    };
  
    const handleReservationSubmit = async (e) => {
      e.preventDefault();
  
      // Simulación de la solicitud al servidor (ficticio)
      try {
        const response = await fetch('https://api.fakebooking.com/reservations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            checkIn: startDate,
            checkOut: endDate,
            guests: guests,
          }),
        });
  
        if (response.ok) {
          console.log('Reserva realizada con éxito');
        } else {
          console.error('Error al realizar la reserva');
        }
      } catch (error) {
        console.error('Error al conectar con el servidor:', error);
      }
    };

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Reserva tu estancia</h2>
      <form onSubmit={handleReservationSubmit}>
        <div className="mb-4">
          <label htmlFor="checkInDate" className="block text-gray-700 text-sm font-bold mb-2">
            Check-in
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="checkOutDate" className="block text-gray-700 text-sm font-bold mb-2">
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
          <label htmlFor="guests" className="block text-gray-700 text-sm font-bold mb-2">
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
      </form>
    </div>
  );
};

