import React, { useState, useEffect } from "react";
import { dataUser } from "../api/Users";

export const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        // Obtener la lista de usuarios
        const responseUsers = await fetch("http://localhost:8080/admin/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!responseUsers.ok) {
          throw new Error("Network response was not ok");
        }

        const dataUsers = await responseUsers.json();
        setUsers(dataUsers);

        // Obtener las fotos para cada usuario
        const promises = dataUsers.map(async (user) => {
          const responsePhoto = await fetch(
            `http://localhost:8080/photo/perfil/${user.email}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (responsePhoto.ok) {
            const imageBlob = await responsePhoto.blob();
            return {
              ...user,
              photoUrl: URL.createObjectURL(imageBlob),
            };
          } else {
            // Manejar el caso en el que no se puede cargar la imagen del usuario
            console.error(
              `No se pudo cargar la imagen del usuario ${user.email}`
            );
            return {
              ...user,
              photoUrl: null,
            };
          }
        });

        // Esperar a que todas las promesas se resuelvan y actualizar el estado de los usuarios
        const usersWithPhotos = await Promise.all(promises);
        setUsers(usersWithPhotos);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Manejar errores, puedes establecer un estado de error si es necesario
      }
    };

    fetchData();
  }, []);

  const deshabilitarUser = async (userId) => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `http://localhost:8080/user/disable/${userId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        // Actualizar el estado local eliminando al usuario deshabilitado
        const updatedUsers = users.map((user) => {
          if (user.id === userId) {
            return {
              ...user,
              active: false, // Suponiendo que 'active' es el campo que se actualiza al deshabilitar
            };
          }
          return user;
        });

        // Establecer el nuevo estado con el usuario deshabilitado
        setUsers(updatedUsers);
      } else {
        // Manejar el caso en el que la solicitud no es exitosa
        console.error("Error al deshabilitar usuario");
      }
    } catch (error) {
      alert("Error", error);
    }
  };

  const habilitarUser = async (userId) => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `http://localhost:8080/user/activate/${userId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        // Actualizar el estado local eliminando al usuario deshabilitado
        const updatedUsers = users.map((user) => {
          if (user.id === userId) {
            return {
              ...user,
              active: true, // Suponiendo que 'active' es el campo que se actualiza al deshabilitar
            };
          }
          return user;
        });

        // Establecer el nuevo estado con el usuario deshabilitado
        setUsers(updatedUsers);
      } else {
        // Manejar el caso en el que la solicitud no es exitosa
        console.error("Error al deshabilitar usuario");
      }
    } catch (error) {
      alert("Error", error);
    }
  };

  return (
    <>
      <div data-theme="light" className="m-6 overflow-x-auto">
        <h2 className="mt-4 text-2xl border-b-2 md:text-3xl font-bold text-black mb-2 p-2 text-center">
          Lista de Usuarios
        </h2>

        <table className="table m-6 max-w-lg mx-auto p-6 bg-white rounded-md shadow-2xl">
          <thead>
            <tr className="mt-6">
              <th className="text-black text-lg font-bold">Nombre Completo</th>
              <th className="text-black text-lg font-bold">Direccion</th>
              <th className="text-black text-lg font-bold mt-8">Telefono</th>
              <th className="text-black text-lg font-bold mt-8">
                Correo Electronico
              </th>
              <th className="text-black text-lg font-bold mt-8">Alta/Baja</th>
              <th className="text-black text-lg font-bold mt-8">Rol</th>
              <th className="text-black text-lg font-bold mt-8"></th>
            </tr>
          </thead>

          <tbody>
            {users
              .slice()
              .filter((user) => user.role !== "ADMIN") // Filtrar usuarios con rol ADMIN
              .sort((a, b) => {
                // Comparar los nombres para ordenar alfabéticamente
                const nameA = `${a.name} ${a.lastName}`.toUpperCase();
                const nameB = `${b.name} ${b.lastName}`.toUpperCase();

                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
                return 0;
              })
              .map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-16 h-16">
                          <img src={user.photoUrl} alt="Photo User" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user.name}</div>
                        <div className="text-sm opacity-50">
                          {user.lastName}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>{user.address}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.email}</td>
                  <td>{user.active ? "Activo" : "Inactivo"}</td>
                  <td>{user.role}</td>
                  <th>
                    <button
                      className="btn btnReservas btn-sm p-4 mt-1"
                      onClick={() => habilitarUser(user.id)}
                    >
                      Habilitar
                    </button>
                    <button
                      className="btn btnReservas btn-sm p-4 mt-1"
                      onClick={() => deshabilitarUser(user.id)}
                    >
                      Deshabilitar
                    </button>
                  </th>
                </tr>
              ))}
            ,
          </tbody>
        </table>
      </div>
    </>
  );
};
