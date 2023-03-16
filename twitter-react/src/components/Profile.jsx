import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function Profile() {
  const [profile, setProfile] = useState([]);
  const token = useSelector((state) => state.user.token);
  const params = useParams();

  useEffect(() => {
    const getUser = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "get",
        url: `http://localhost:8000/usuarios/${params.username}`,
      });
      setProfile(response.data.user);
      console.log(response.data.user);
    };
    getUser();
  }, []);

  return (
    <div className="min-vh-100 col-sm-9 col-9 col-md-10 col-lg-6">
      <div className="content-container h-50 p-0">
        <div className="h-25 bgTweeter position-relative">
          <img
            className="profileImageHero"
            alt="imgHero"
            src={profile.avatar}
          />
        </div>

        <form
          className="d-flex"
          action="/usuarios/profileUser.id/follow"
          method="post"
        >
          <button
            type="submit"
            className="btn bgTweeter rounded-pill ms-auto mt-3 mb-3"
          >
            Follow
          </button>
        </form>

        <form
          className="d-flex"
          action="/usuarios/<%= profileUser.id %>/follow"
          method="post"
        >
          <button
            className="btn text-white rounded-pill ms-auto mt-3 mb-3 text-transparent"
            type="submit"
          >
            Unfollow
          </button>

          <button
            type="submit"
            className="btn text-white rounded-pill ms-auto mt-3 mb-3"
          >
            Follow
          </button>
        </form>

        <h5 className="fs-4 ms-4">
          {profile.firstname}
          {profile.lastname}
        </h5>
        <div className="d-flex flex-column">
          <p className="ms-4">@{profile.username}</p>
          <p className="ms-4">{profile.description}</p>
        </div>
        <div className="d-flex justify-content-end">
          <Link
            to={`/${profile.username}/following`}
            className="ms-auto text-decoration-none text-muted"
          >
            Following
          </Link>
          {console.log(params)}
          <Link
            to={`/${profile.username}/followers`}
            className="ms-3 text-decoration-none text-muted"
          >
            Followers
          </Link>
        </div>
        <div>
          <p className="ms-4 fw-bold border-bottom">Tweets </p>

          {/* ///map */}
        </div>
      </div>
    </div>
  );
}

export default Profile;
