import React from "react";
import UserList from "../components/userList/UserList";
import "./UserListContainer.css";

const UserListContainer = () => {
  return (
    <div className="userListContainer">
      <div className="title">
        <h2>Команда</h2>
        <button className="addBtn">Добавить пользователя</button>
      </div>
      <UserList />
    </div>
  );
};

export default UserListContainer;
