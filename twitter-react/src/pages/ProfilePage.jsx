import Profile from "../components/Profile";
import Sidebar from "../components/Sidebar";
import RightSidebar from "../components/RightSidebar";
import "./PageStyles.css";
function ProfilePage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3 col-sm-3 col-md-2 col-lg-2">
          <Sidebar />
        </div>
        <Profile />
        <div className="col-md-4 col-lg-4 hidden-sm ">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
