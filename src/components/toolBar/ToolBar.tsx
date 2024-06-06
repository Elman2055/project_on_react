import React from "react";
import Logo from "../UI/images/Logo.png";
import MyPicture from "../UI/images/MyPicture.png";
import UpUnion from "../UI/images/UpUnion.png";
import Profile from "../UI/images/Profile.png";
import CheckList from "../UI/images/CheckList.png";
import Message from "../UI/images/Message.png";
import Gallerry from "../UI/images/Gallerry.png";
import Group from "../UI/images/Group.png";
import List from "../UI/images/List.png";
import Money from "../UI/images/Money.png";
import Cash from "../UI/images/Cash.png";
import Cancel from "../UI/images/Cancel.png";
import "./ToolBar.css";

const ToolBar = () => {
  return (
    <div className="toolBar">
      <div className="toolBarContainer">
        <img src={Logo} alt="logo" />
        <img src={MyPicture} alt="my_picture" className="myPicture" />
        <img src={UpUnion} alt="up_union" />
        <img src={Profile} alt="profile" />
        <img src={CheckList} alt="check_list" />
        <img src={Message} alt="message" />
        <img src={Gallerry} alt="gallerry" />
        <img src={Group} alt="group" />
        <img src={List} alt="list" />
        <img src={Money} alt="money" />
        <img src={Cash} alt="cash" />   
        <img src={Cancel} alt="cancel" />
      </div>
    </div>
  );
};

export default ToolBar;
