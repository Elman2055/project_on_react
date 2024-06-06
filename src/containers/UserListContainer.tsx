import React, { useState } from "react";
import UserList from "../components/userList/UserList";
import MyPicture from "../components/UI/images/MyPicture.png";
import { TUsers } from "../types/data.types";
import "./UserListContainer.css";

const UserListContainer = () => {
  const [usersInfo, setUsersInfo] = useState<TUsers[]>([
    { image: MyPicture, id: 1, name: "Иван", userInfo: "Разработчик" },
    { image: MyPicture, id: 2, name: "Артём", userInfo: "Дизайнер" },
    { image: MyPicture, id: 3, name: "Михаил", userInfo: "SMM" },
    { image: MyPicture, id: 4, name: "Никита", userInfo: "Оператор" },
  ]);

  const handleEditUser = (index: number) => {
    const newName = prompt("Введите новое имя:", usersInfo[index].name);
    const newUserInfo = prompt(
      "Введите новую информацию:",
      usersInfo[index].userInfo
    );

    if (newName && newUserInfo) {
      const updatedUsers = usersInfo.map((user, i) =>
        i === index ? { ...user, name: newName, userInfo: newUserInfo } : user
      );
      setUsersInfo(updatedUsers);
    }
  };

  const onRemoveUser = (id: number) => {
    setUsersInfo(usersInfo.filter((item) => item.id !== id));
  };    

  return (
    <div className="userListContainer">
      <div className="title">
        <h2>Команда</h2>
        <button className="addBtn">Добавить пользователя</button>
      </div>
      {usersInfo.map((elem) => (
        <UserList
          key={elem.id}
          id={elem.id}
          image={elem.image}
          name={elem.name}
          userInfo={elem.userInfo}
          onEdit={() => handleEditUser(elem.id)}
          onRemove={() => onRemoveUser(elem.id)}
        />
      ))}
    </div>
  );
};

export default UserListContainer;
