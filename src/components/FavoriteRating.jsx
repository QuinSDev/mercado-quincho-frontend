import React from "react";

const FavoriteRating = ({ totalReviews, averageRating }) => {
  // Puedes calcular el porcentaje de estrellas llenas
  const percentageFilled = (averageRating / 5) * 100;

  // Puedes redondear la calificación promedio a dos decimales
  const roundedAverage = averageRating.toFixed(2);

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Favorito</h2>
        <div className="flex items-center">
          <span className="text-3xl font-bold mr-2">{roundedAverage}</span>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`h-6 w-6 text-yellow-500 ${
                  star <= Math.floor(percentageFilled / 20) ? "fill-current" : ""
                }`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 2c-2.42 0-4.84.96-6.63 2.75-3.66 3.66-3.66 9.67 0 13.34 3.66 3.66 9.67 3.66 13.34 0 1.79-1.79 2.75-4.21 2.75-6.75s-.96-4.96-2.75-6.75c-1.79-1.79-4.21-2.75-6.75-2.75zM12 4v.01M12 20v.01"></path>
              </svg>
            ))}
          </div>
        </div>
      </div>
      <p>
        Lee todas las reseñas. Recibiste {totalReviews} reseñas con una
        calificación de {roundedAverage} sobre 5.
      </p>
      <p className="mt-2">
        <strong>{roundedAverage}</strong> - Favorito entre huéspedes. Uno de
        los alojamientos más populares en Airbnb según las valoraciones, las
        reseñas y la confiabilidad.
      </p>
    </div>
  );
};

export default FavoriteRating;
