import { TModal } from "../../types/data.types";
import "./Form.css";

const FormUser = (props: TModal) => {
  return (
    <>
      <div className="backdrop" onClick={props.onClose}></div>
      <div className="formUserContainer">
        <form className="formUser" onSubmit={props.onSubmit}>
          <input
            type="text"
            placeholder="Введите ссылку на фото"
            value={props.imgVal}
            onChange={(e) => props.imgInp(e.target.value)}
          />
          <input
            type="text"
            placeholder="Введите Ф.И.О"
            value={props.nameVal}
            onChange={(e) => props.nameInp(e.target.value)}
          />
          <input
            type="text"
            placeholder="Введите информацию о вас"
            value={props.infoVal}
            onChange={(e) => props.infoInp(e.target.value)}
          />
          <button className="saveBtn">Save</button>
        </form>
      </div>
    </>
  );
};

export default FormUser;
