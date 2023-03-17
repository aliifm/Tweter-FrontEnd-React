import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function Followers() {
  const [followers, setFollowers] = useState([]);
  const token = useSelector((state) => state.user.token);
  const user = useSelector((state) => state.user.user);
  const params = useParams();

  useEffect(() => {
    const getFollowers = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "get",
        url: `http://localhost:8000/usuarios/followers/${params.username}`,
      });
      setFollowers(response.data.profileFollowers);
    };
    getFollowers();
  }, []);

  const handleFollow = async (follower) => {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "post",
      url: `http://localhost:8000/usuarios/${follower._id}/userFollow`,
    });
    console.log(response);
    // setFollowers(response.data.profileFollowers);
  };

  return (
    <div className="p-3 min-vh-100 col-sm-9 col-9 col-md-6 mb-2">
      <div className="row text-center mb-4">
        <div className="col-6">
          <Link to={`/${params.username}/followers`} className="fs-5 text-muted text-decoration-none celeste">
            Followers
          </Link>
        </div>
        <div className="col-6">
          <Link to={`/${params.username}/following`} className="fs-5 text-muted text-decoration-none">
            Following
          </Link>
        </div>
      </div>

      {/* <% for(const follower of followers ){ %> */}
      {followers.map((follower) => {
        return (
          <div className="row mb-3">
            <div className="col-3 text-center">
              <img className="rounded-circle img-fluid w-100 useravatar-fol" src={follower.avatar} alt="Profilmage" />
            </div>
            <div className="col-6 p-0">
              <p className="mb-0">
                <strong>
                  {follower.firstname} {follower.lastname}
                </strong>
              </p>
              <small className="text-muted">@{follower.username}</small>
            </div>
            <div className="col-3 p-0">
              {user.following.includes(follower._id) ? "sigo" : "no sigo"}
              {console.log(follower._id)}
              <button type="button" className="btn btn-primary rounded-pill mr-2" onClick={() => handleFollow(follower)}>
                Follow
              </button>
              {/* <button type="button" className="btn btn-primary rounded-pill mr-2" onClick={() => handleFollow()}>
                Unfollow
              </button> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Followers;
