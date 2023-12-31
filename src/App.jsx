import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { QuinchoForm } from "./pages/QuinchoForm";
import { UserRegisterForm } from "./pages/UserRegisterForm";
import { UserLoginForm } from "./pages/UserLoginForm";
import { HomeQuincho } from "./pages/HomeQuincho";
import { Dashboard } from "./pages/Dashboard";
import { UserAccount } from "./pages/UserAccount";
import { EditUserForm } from "./pages/EditUserForm";
import { jwtDecode } from "jwt-decode";
import { HelpCenter } from "./pages/HelpCenter";
import imageCompression from "browser-image-compression";
import { QuinchoDetails } from "./pages/QuinchoDetails";
import { EditQuinchoForm } from "./pages/EditQuinchoForm";
import { Profile } from "./components/Profile";
import { CardUserQuincho } from "./components/CardUserQuincho";
import { ComentaryList } from "./components/ComentaryList";
import { ReservationEdit } from "./components/ReservationEdit";
import { CardUserReservation } from "./components/CardUserReservation";
import { EditComentaryUser } from "./components/EditComentaryUser";

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userPhoto, setUserPhoto] = useState(null);
  const [userRole, setUserRole] = useState(false);

  // Función para actualizar el estado de autenticación
  const updateAuthStatus = async () => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
    console.log(isLoggedIn)

    if (token) {
      try {
        const decoded = jwtDecode(token);
        // const userEmail = decoded.sub;
        localStorage.setItem("userEmail", decoded.sub);
        // console.log(decoded)
        if (decoded.role === "ADMIN") {
          setUserRole(true);
        } else {
          setUserRole(false);
        }

        const response = await fetch(
          `https://mucho-cattle-production.up.railway.app/photo/perfil/${decoded.sub}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const imageBlob = await response.blob();
          setUserPhoto(URL.createObjectURL(imageBlob));
        } else {
          // Manejar el caso en el que no se puede cargar la imagen del usuario
          console.error("No se pudo cargar la imagen del usuario");
        }
      } catch (error) {
        console.error("Error al cargar la imagen del usuario", error);
      }
    }
  };

  const [quinchos, setQuinchos] = useState([]);

  const fetchDataQuincho = async () => {
    try {
      const responseQuincho = await fetch(
        "https://mucho-cattle-production.up.railway.app/quincho/lista-quinchos"
      );

      if (responseQuincho.ok) {
        const dataQuinchos = await responseQuincho.json();
        setQuinchos(dataQuinchos);

        const promises = dataQuinchos.map(async (quincho) => {
          const photoPromises = quincho.photos.map(async (_, index) => {
            const responsePhoto = await fetch(
              `https://mucho-cattle-production.up.railway.app/quinchos/fotos/${quincho.id}/${index}`
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
    fetchDataQuincho();
    updateAuthStatus();
  }, []);

  const handleLogout = () => {
    // Elimina el token de autenticación del almacenamiento local
    localStorage.removeItem("token");
    setUserPhoto(null);
    // Actualiza el estado de autenticación para mostrar el botón de inicio de sesión
    setIsLoggedIn(false);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                userRole={userRole}
                isLoggedIn={isLoggedIn}
                handleLogout={handleLogout}
                userPhoto={userPhoto}
                updateAuthStatus={updateAuthStatus}
              />
            }
          >
            <Route path="login" element={<UserLoginForm />} />
            <Route path="register" element={<UserRegisterForm />} />
          </Route>
          <Route
            path="/register/quincho"
            element={<QuinchoForm fetchDataQuincho={fetchDataQuincho} />}
          />
          <Route
            path="/quinchos/"
            element={
              <HomeQuincho
                userRole={userRole}
                isLoggedIn={isLoggedIn}
                userPhoto={userPhoto}
                handleLogout={handleLogout}
                updateAuthStatus={updateAuthStatus}
                quinchos={quinchos}
              />
            }
          >
            <Route path="login" element={<UserLoginForm />} />
            <Route path="register" element={<UserRegisterForm />} />
          </Route>
          <Route
            path="/dashboard"
            element={
              <Dashboard
                userRole={userRole}
                isLoggedIn={isLoggedIn}
                handleLogout={handleLogout}
                userPhoto={userPhoto}
                updateAuthStatus={updateAuthStatus}
              />
            }
          />
          <Route
            path="/userAccount"
            element={
              <UserAccount
                userRole={userRole}
                isLoggedIn={isLoggedIn}
                handleLogout={handleLogout}
                userPhoto={userPhoto}
                updateAuthStatus={updateAuthStatus}
              />
            }
          >
            <Route path="profile" element={<Profile />} />
            <Route path="quinchos" element={<CardUserQuincho />} />
            <Route path="reservations" element={<ComentaryList />} />
            <Route path="edit-comentary" element={<EditComentaryUser />}/>
            <Route path="edit-reservation" element={<ReservationEdit />} />
            <Route path="edit-reservation" element={<CardUserReservation />} />
          </Route>
          <Route
            path="/editUser"
            element={<EditUserForm updateAuthStatus={updateAuthStatus} />}
          />
          <Route
            path="/quinchosDetails"
            element={
              <QuinchoDetails
                userRole={userRole}
                isLoggedIn={isLoggedIn}
                handleLogout={handleLogout}
                userPhoto={userPhoto}
                updateAuthStatus={updateAuthStatus}
              />
            }
          />
          <Route
            path="/editQuincho"
            element={<EditQuinchoForm fetchDataQuincho={fetchDataQuincho} />}
          />
          <Route
            path="/helpCenter/"
            element={
              <HelpCenter
                userRole={userRole}
                isLoggedIn={isLoggedIn}
                handleLogout={handleLogout}
                userPhoto={userPhoto}
                updateAuthStatus={updateAuthStatus}
              />
            }
          >
            <Route path="login" element={<UserLoginForm />} />
            <Route path="register" element={<UserRegisterForm />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};
