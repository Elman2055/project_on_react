import React from "react";
import Logo from "../UI/images/MyPicture.png";
import "./UserList.css";

const UserList = () => {
  return (
    <div className="userList">
      <img src={Logo} alt="my_photo" className="myPhoto" />
      <div className="infoUser">
        <h3>Артём</h3>
        <p>Разработчик</p>
      </div>
    </div>
  );
};

export default UserList;
