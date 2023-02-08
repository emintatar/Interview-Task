import React, { useState, useEffect } from "react";
import User from "./User";
import axios from "axios";

const UserList = () => {
  const [userDatas, setUserDatas] = useState([]);

  async function getUsers() {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=5");

      setUserDatas(response.data.results);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="user-list">
      <ul>
        {userDatas.map((userData, index) => {
          return <User key={index} userData={userData} />;
        })}
      </ul>
    </div>
  );
};

export default UserList;
