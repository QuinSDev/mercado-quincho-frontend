import React from 'react';

export const Card = () => {
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
                <h2 className="card-title" style={{ color: '#000' }}>¡Felicidades ya estas registrado!</h2> {/* Cambia el color del título a negro (#000) */}
                <p style={{ color: '#000' }}>Ya puedes empezar a reservar tu Quincho</p> {/* Cambia el color del texto a negro (#000) */}
                <p> </p>
                
                <div className="card-actions justify-center">
                
                    <button style={buttonStyle}>Home</button>
                </div>
            </div>
        </div>
    );
}