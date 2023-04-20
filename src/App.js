import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact Component={LoginPage}></Route>
        <Route path="/home" Component={HomePage}></Route>
      </Routes>
    </>
  );
}

export default App;
