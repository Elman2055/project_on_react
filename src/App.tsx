import ToolBar from "./components/toolBar/ToolBar";
import UserListContainer from "./containers/UserListContainer";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <ToolBar />
      <UserListContainer />
    </div>
  );
};

export default App;
