import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import LoginPage from "./pages/LoginPage";
import FollowersPage from "./pages/FollowersPage";
import FollowingPage from "./pages/FollowingPage";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import PersonalProfile from "./pages/PersonalProfile";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <div className="App h-100">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoutes redirectPath={"/login"} />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:username" element={<ProfilePage />} />
          <Route path="/:username" element={<PersonalProfile />} />
          <Route path="/:username/followers" element={<FollowersPage />} />
          <Route path="/:username/following" element={<FollowingPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
