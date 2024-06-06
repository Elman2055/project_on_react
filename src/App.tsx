import React from "react";
import ToolBar from "./components/toolBar/ToolBar";
import UserListContainer from "./containers/UserListContainer";
import "./App.css";

const App = () => {
  return (
    <>
      <ToolBar />
      <UserListContainer />
    </>
  );
};

export default App;
