import React, { useState, useEffect, useContext } from "react";
import address from "../assets/images/address.png";
import phone from "../assets/images/phone.png";
import email from "../assets/images/email.png";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { UserContext } from "./UserProvider";

export const Profile = () => {
  const { updateSelectedUser } = useContext(UserContext)
  const [users, setUsers] = useState([]);

  const handSelectUser = (user) => {
    updateSelectedUser(user)
  }

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const decoded = jwtDecode(token);
        const userEmail = decoded.sub;
        

        const response = await fetch(
          `https://mucho-cattle-production.up.railway.app/user/datos/${userEmail}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const userData = await response.json();
          setUsers([userData]);
          localStorage.setItem("role", userData.role)
          const responsePhoto = await fetch(
            `https://mucho-cattle-production.up.railway.app/photo/perfil/${userEmail}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (responsePhoto.ok) {
            const imageBlob = await responsePhoto.blob();
            setUsers([
              {
                ...userData,
                photoUrl: URL.createObjectURL(imageBlob),
              },
            ]);
          } else {
            console.error("Error fetching user photo:", responsePhoto.status);
          }
        } else {
          console.error("Error fetching user data:", response.status);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      <div className="m-6 h-screen">
        <div
          data-theme="light"
          className="m-10 max-w-xl h-150 mx-auto p-10 bg-white rounded-md shadow-2xl"
        >
          {users.map((user) => (
            <div key={user.id}>
              <div className="bg-[#35C5DF] rounded-md shadow-2xl grid grid-cols-2 gap-4 bg-opacity-80">
                <div className="m-6 avatar shadow-2xl rounded-md mask mask-square w-40 h-40">
                  <img className="rounded-md" src={user.photoUrl} />
                </div>

                <div className="m-6">
                  <h1 className="text-center mt-6 text-3xl font-bold border-b-2 border-gray-900/10">
                    {user.name} {user.lastName}
                  </h1>
                  <h2 className="text-center m-0 text-1xl font-semibold">
                    {user.role}
                  </h2>
                </div>
              </div>

              <div className="flex mt-6 border-[#706c6c] border-2 rounded-md">
                <img
                  className="flex-none m-2 w-10 uppercase cursor-pointer"
                  src={address}
                  alt="Logo de direccion"
                />
                <h3 className="flex-1 m-3">
                  <b>Dirección: </b> {user.address}
                </h3>
              </div>

              <div className="flex mt-6 border-[#706c6c] border-2 rounded-md">
                <img
                  className="flex-none m-2 w-10 uppercase cursor-pointer"
                  src={phone}
                  alt="Logo de telefono"
                />
                <h3 className="flex-1 m-3">
                  <b>Teléfono: </b> {user.phoneNumber}
                </h3>
              </div>

              <div className="flex mt-6 border-[#706c6c] border-2 rounded-md">
                <img
                  className="flex-none m-2 w-10 uppercase cursor-pointer"
                  src={email}
                  alt="Logo de email"
                />
                <h3 className="flex-1 m-3">
                  <b>Email: </b> {user.email}
                </h3>
              </div>
              <Link to="/editUser" onClick={() => handSelectUser(user)}>
                <button className="mt-8 btnQuincho">Actualizar Datos</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
