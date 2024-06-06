import { TUsers } from "../../types/data.types";
import "./UserList.css";

const UserList = (props: TUsers) => {
  return (
    <div className="userList">
      <div className="user">
        <img src={props.image} alt="my_photo" className="myPhoto" />
        <div className="infoUser">
          <h3>{props.name}</h3>
          <p>{props.userInfo}</p>
        </div>
      </div>
      <div className="profileBtns">
        <button className="profileBtn" onClick={props.onEdit}>
          &#9997;
        </button>
        <button className="profileBtn removeBtn" onClick={props.onRemove}>
          &#128465;
        </button>
      </div>
    </div>
  );
};

export default UserList;
