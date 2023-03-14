import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
// import Profile from "./components/Profile";
// import Sidebar from "./components/Sidebar";
// import RightSidebar from "./components/RightSidebar";
// import Following from "./components/Following";
// import Error from "./components/404";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prueba" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
