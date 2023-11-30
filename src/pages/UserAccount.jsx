import React, { useState } from "react";
import { NavBar } from "../components/NavBar";
import { UserBar } from "../components/UserBar";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import imageCompression from "browser-image-compression";

export const UserAccount = ({
  userRole,
  openRegisterModal,
  isLoggedIn,
  handleLogout,
  userPhoto,
  updateAuthStatus,
}) => {
  const [quinchos, setQuinchos] = useState([]);

  const fetchDataQuinchos = async () => {
    try {
      const token = localStorage.getItem("token");
      const decoded = jwtDecode(token);
      const userEmail = decoded.sub;

      const responseQuincho = await fetch(
        `https://mucho-cattle-production.up.railway.app/quincho/user/quinchos/${userEmail}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (responseQuincho.ok) {
        const quinchoData = await responseQuincho.json();
        setQuinchos(quinchoData);

        const promises = quinchoData.map(async (quincho) => {
          const photoPromises = quincho.photos.map(async (_, index) => {
            const responsePhoto = await fetch(
              `http://localhost:8080/quinchos/fotos/${quincho.id}/${index}`
            );
        
            if (responsePhoto.ok) {
              const imageBlob = await responsePhoto.blob();
        
              const options = {
                maxSizeMB: 0.1, // Tamaño máximo de la imagen comprimida en megabytes
                maxWidthOrHeight: 800, // Ancho o altura máximo permitido
                useWebWorker: true,
              };
        
              const compressedImage = await imageCompression(imageBlob, options);
        
              return URL.createObjectURL(compressedImage);
            } else {
              console.error(
                `No se pudo cargar la imagen del quincho ${quincho.name}`
              );
              return null;
            }
          });
        
          const photoUrls = await Promise.all(photoPromises);
        
          return {
            ...quincho,
            photoUrls: photoUrls,
          };
        });
        const quinchoWithPhotos = await Promise.all(promises);
        setQuinchos(quinchoWithPhotos);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataQuinchos();
  }, []);

  return (
    <>
      <div data-theme="light">
        <NavBar
          userRole={userRole}
          openRegisterModal={openRegisterModal}
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
          userPhoto={userPhoto}
          updateAuthStatus={updateAuthStatus}
        />
        <UserBar quinchos={quinchos}/>
      </div>
    </>
  );
};
