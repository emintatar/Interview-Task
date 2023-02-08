import React from "react";

const User = ({ userData }) => {
  return (
    <div className="user">
      <img src={userData.picture.large} alt="" />
      <div className="user-info">
        <h3>
          {userData.name.first} {userData.name.last}
        </h3>
        <p className="user-mail">{userData.email}</p>
        <p className="user-location">
          {userData.location.country} | {userData.location.city}
        </p>
      </div>
    </div>
  );
};

export default User;
