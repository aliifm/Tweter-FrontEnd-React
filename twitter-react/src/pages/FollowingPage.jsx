import React from "react";
import Sidebar from "../components/Sidebar";
import Following from "../components/Following";
import RightSidebar from "../components/RightSidebar";
import "./PageStyles.css";

function FollowingPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3 col-sm-3 col-md-2 col-lg-2">
          <Sidebar />
        </div>
        <Following />
        <div className="col-md-4 col-lg-4 hidden-sm ">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

export default FollowingPage;
