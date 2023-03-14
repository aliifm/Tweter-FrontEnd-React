import React from "react";
import Sidebar from "../components/Sidebar";
import HomeComponent from "../components/HomeComponent";
import RightSidebar from "../components/RightSidebar";

function Home() {
  return (
    <div className="d-flex">
      <Sidebar />
      <HomeComponent />
      <RightSidebar />
    </div>
  );
}

export default Home;
