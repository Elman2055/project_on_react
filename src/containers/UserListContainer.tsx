import React, { useState } from "react";
import { TUsers } from "../types/data.types";
import UserList from "../components/userList/UserList";
import MyPicture from "../components/UI/images/MyPicture.png";
import FormUser from "../components/form/Form";
import "./UserListContainer.css";

const UserListContainer = () => {
  const [usersInfo, setUsersInfo] = useState<TUsers[]>([
    { image: MyPicture, id: 1, name: "Иван", userInfo: "Разработчик" },
    { image: MyPicture, id: 2, name: "Артём", userInfo: "Дизайнер" },
    { image: MyPicture, id: 3, name: "Михаил", userInfo: "SMM" },
    { image: MyPicture, id: 4, name: "Никита", userInfo: "Оператор" },
  ]);
  const [imgValue, setImgValue] = useState<string>("");
  const [nameValue, setNameValue] = useState<string>("");
  const [infoValue, setInfoValue] = useState<string>("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const copystate = [...usersInfo];
    const newUser = {
      image: MyPicture,
      id: usersInfo.length + 1,
      name: nameValue,
      userInfo: infoValue,
    };

    setUsersInfo([...copystate, newUser]);
  };

  const handleEditUser = (id: number) => {
    const newName = prompt("Введите новое имя:", usersInfo[id].name);
    const newUserInfo = prompt(
      "Введите новую информацию:",
      usersInfo[id].userInfo
    );

    if (newName && newUserInfo) {
      const updatedUsers = usersInfo.map((elem) =>
        elem.id === id
          ? { ...elem, name: newName, userInfo: newUserInfo }
          : elem
      );
      setUsersInfo(updatedUsers);
    }
  };

  const onRemoveUser = (id: number) => {
    setUsersInfo(usersInfo.filter((item) => item.id !== id));
  };

  return (
    <>
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
      <FormUser
        onSubmit={onSubmit}
        imgInp={setImgValue}
        nameInp={setNameValue}
        infoInp={setInfoValue}
      />
    </>
  );
};

export default UserListContainer;
