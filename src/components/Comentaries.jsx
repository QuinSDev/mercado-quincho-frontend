import React, { useEffect, useState } from "react";

export const Comentaries = ({ comentaries }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");

        const usersData = await Promise.all(
          comentaries.map(async (comment) => {
            try {
              const responseUser = await fetch(
                `https://mucho-cattle-production.up.railway.app/customer-opinions/user/${comment.id}`,
                {
                  
                }
              );

              if (!responseUser.ok) {
                throw new Error(
                  `Failed to fetch user data for comment ID: ${comment.id}`
                );
              }

              const userData = await responseUser.json();
              const responsePhoto = await fetch(
                `https://mucho-cattle-production.up.railway.app/photo/perfil/${userData.email}`,
                {
                  
                }
              );

              if (responsePhoto.ok) {
                const imageBlob = await responsePhoto.blob();
                const photoUrl = URL.createObjectURL(imageBlob);

                return {
                  ...userData,
                  photoUrl,
                };
              } else {
                console.error(
                  `Failed to fetch photo for user with email: ${userData.email}`
                );
                return null;
              }
            } catch (error) {
              console.error("Error fetching user data:", error);
              return null;
            }
          })
        );

        setUsers(usersData.filter((user) => user !== null));
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Handle errors here
      }
    };

    fetchUserData();
  }, [comentaries]);

  return (
    <div className="flex justify-start ml-10">
      <div className="grid grid-cols-2 gap-8">
        {users.map((user, index) => (
          <div
            key={index}
            className="card bg-white text-primary-content mt-6 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] flex items-start p-1"
            style={{ width: "550px" }}
          >
            <div className="flex items-center pt-4 ml-4">
              <div className="avatar">
                <div className="w-20 rounded-full">
                  <img src={user.photoUrl} />
                </div>
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-bold text-black">{user.name}</h2>
                <p className="text-sm text-black">{user.address}</p>
              </div>
            </div>
            <div className="mt-4 px-4 py-2">
              <p className="text-lg text-black">
                {comentaries[index]?.comment}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
