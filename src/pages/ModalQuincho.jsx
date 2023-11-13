import React from 'react';

export const CardQ = () => {
    const buttonStyle = {
        backgroundColor: '#35c5df',
        color: '#000', // Cambia el color del texto a negro (#000)
    };

    const cardStyle = {
        backgroundColor: '#fff', // Cambia el color de fondo a blanco
        color: '#000', // Cambia el color del texto a negro (#000)
        border: '1px solid #000', // Agrega un borde de 1 píxel de grosor en negro (#000)
    };

    return (
        <div className="card w-96 bg-neutral text-neutral-content" style={cardStyle}>
            <div className="card-body items-center text-center">
                <h2 className="card-title" style={{ color: '#000' }}>¡Felicidades!</h2> {/* Cambia el color del título a negro (#000) */}
                <p style={{ color: '#000' }}>Tu quincho ya ha sido registrado</p> {/* Cambia el color del texto a negro (#000) */}
                <p> </p>
                <div className="card-actions justify-center">
                    <p style={{ color: '#000' }}>Si quieres ver las reservas de tus quinchos</p>
                    <button style={buttonStyle}>Reservas</button>
                </div>
                
                <div className="card-actions justify-center">
                    <p style={{ color: '#000' }}>Si quieres las calificaciones y comentarios de tus clientes</p>
                    <button style={buttonStyle}>Comentarios</button>
                </div>
                <p> </p>
                <div className="card-actions justify-center">
                
                    <button style={buttonStyle}>Home</button>
                </div>
            </div>
        </div>
    );
}