import React, { useEffect, useState } from "react";

import UserCard from "../Components/UserCard";
import { axiosInstance } from "../Config/axiosInstance";
function UsersPage() {
  const [usersData, setUsersData] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let getUserData = async () => {
    try {
      let res = await axiosInstance.get("/users");

      console.log(res.data);
      setUsersData(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log("Error in user api", error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  if (isLoading) return <h1>Loading Users... </h1>;

  return (
    <div>
      <div className="grid grid-cols-4 gap-4  ">
        {" "}
        {usersData.map((val) => (
          <UserCard key={val.id} user={val} />
        ))}
      </div>
    </div>
  );
}

export default UsersPage;
