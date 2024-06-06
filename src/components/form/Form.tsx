import React from "react";
import "./Form.css";

const FormUser = () => {
  return (
    <div className="formUserContainer">
      <form className="formUser">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <button>Save</button>
      </form>
    </div>
  );
};

export default FormUser;
