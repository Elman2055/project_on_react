import React from "react";
import { TModal } from "../../types/data.types";
import "./Form.css";

const FormUser = (props: TModal) => {
  return (
    <>
      <div className="backdrop"></div>
      <div className="formUserContainer">
        <form className="formUser" onSubmit={props.onSubmit}>
          <input
            type="text"
            placeholder="Введите ссылку на фото"
            onChange={(e) => props.imgInp(e.target.value)}
          />
          <input
            type="text"
            placeholder="Введите Ф.И.О"
            onChange={(e) => props.nameInp(e.target.value)}
          />
          <input
            type="text"
            placeholder="Введите информацию о вас"
            onChange={(e) => props.infoInp(e.target.value)}
          />
          <button className="saveBtn">Save</button>
        </form>
      </div>
    </>
  );
};

export default FormUser;
