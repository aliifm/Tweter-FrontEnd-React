import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function Following() {
  const [following, setFollowing] = useState([]);
  const [user, setUser] = useState(null);
  const token = useSelector((state) => state.user.token);
  const params = useParams();

  useEffect(() => {
    const getFollowing = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "get",
        url: `http://localhost:8000/usuarios/followers/${params.username}`,
      });
      setFollowing(response.data.profileFollowing);
      setUser(response.data.profileUser);
      console.log(response.data.profileUser);
    };
    getFollowing();
  }, []);

  const stopFollowing = async (followed) => {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "get",
      url: `http://localhost:8000/usuarios/${followed._id}/userFollow`,
    });
    console.log(response.data.loggedUserFollowing);
    setFollowing(response.data.loggedUserFollowing);
  };

  return (
    <div className="p-3 min-vh-100 col-sm-9 col-9 col-md-6 mb-2">
      <div className="row text-center mb-4">
        <div className="col-6">
          <Link to={`/${params.username}/followers`} className="fs-5 text-muted text-decoration-none">
            Followers
          </Link>
        </div>
        <div className="col-6">
          <Link to={`/${params.username}/following`} className="fs-5 text-muted text-decoration-none celeste">
            Following
          </Link>
        </div>
      </div>

      {following.map((followed) => {
        return (
          <div className="row mb-3">
            <div className="col-3 text-center">
              <img className="rounded-circle img-fluid w-100 useravatar-fol" src={followed.avatar} alt="Profilmage" />
            </div>
            <div className="col-6 p-0">
              <p className="mb-0">
                <strong>
                  {followed.firstname} {followed.lastname}
                </strong>
              </p>
              <small className="text-muted">@{followed.username}</small>
            </div>
            <div className="col-3 p-0">
              {}
              <button onClick={() => stopFollowing(followed)} type="button" className="btn btn-transparent border rounded-pill mr-2">
                Unfollow
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Following;
