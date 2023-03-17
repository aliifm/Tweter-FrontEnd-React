import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/userReducer";
import FollowButton from "./FollowButton";

function Followers() {
  const [followers, setFollowers] = useState([]);
  const [user, setUser] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const user1 = useSelector((state) => state.user.user);
  const params = useParams();

  const getFollowers = async () => {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "get",
      url: `http://localhost:8000/usuarios/followers/${params.username}`,
    });
    setFollowers(response.data.profileFollowers);
    setUser(response.data.profileUser);
  };

  useEffect(() => {
    getFollowers();
  }, [refresh]);

  const handleFollow = async (follower) => {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "post",
      url: `http://localhost:8000/usuarios/${follower._id}/userFollow`,
    });
    setUser(response.data.loggedUser);
    setRefresh((prev) => !prev);
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
            <div className="col-3 p-0" onClick={() => handleFollow(follower)}>
              {/* include para objetos no es muy bueno porque los objetos por mas que sean iguales no son los mismos, include es solamente para cuando trabajamos con strings pelados!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
              {user && <FollowButton isFollowing={user.following.some((item) => item._id === follower._id)} />}

              {console.log("follow:", user.following)}
              {console.log("f._id: ", follower._id)}
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Followers;
