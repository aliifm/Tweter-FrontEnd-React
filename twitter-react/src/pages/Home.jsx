import React from "react";
import Sidebar from "../components/Sidebar";
import HomeComponent from "../components/HomeComponent";
import RightSidebar from "../components/RightSidebar";
import "./PageStyles.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Home() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);

  return (
    <div className="container">
      <div className="row">
        <div className="col-3 col-sm-3 col-md-2 col-lg-2">
          <Sidebar />
        </div>
        <HomeComponent />
        <div className="col-md-4 col-lg-4 hidden-sm ">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

export default Home;
