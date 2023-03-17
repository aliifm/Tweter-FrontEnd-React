import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import ProfileTweet from "./ProfileTweet";

function Profile() {
  const [profile, setProfile] = useState([]);
  const [tweets, setTweet] = useState([]);
  const [count, setCount] = useState(0);

  const token = useSelector((state) => state.user.token);
  const { user } = useSelector((state) => state.user);
  const params = useParams();

  const handleChildChange = (newCount) => {
    setCount(newCount);
  };

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

  const getTweets = async () => {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "get",
      url: `http://localhost:8000/tweets/show`,
    });
    setTweet(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getTweets();
  }, []);

  const handleLike = async (tweet) => {
    console.log(tweet._id);
    const response = await axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "post",
      url: `http://localhost:8000/tweets/${tweet._id}/like`,
    });

    console.log(response.data.like);
    if (response.data.like) {
      getTweets();
    }
  };

  const handleDelete = async (tweet) => {
    console.log(tweet._id);
    const response = await axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "delete",
      url: `http://localhost:8000/tweets/${tweet._id}`,
    });
    console.log(response.data.like);
    if (response.data.like) {
      getTweets();
    }
  };

  return (
    <div className="min-vh-100 col-sm-9 col-9 col-md-10 col-lg-6">
      <div className="content-container h-50 p-0">
        <div className="bgTweeter bg-height position-relative">
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

        <h5 className="fs-4 ms-4">
          {profile.firstname}
          {profile.lastname}
        </h5>
        <div className="d-flex flex-column">
          <p className="ms-4">@{profile.username}</p>
          <p className="ms-4">{profile.description}</p>
        </div>
        <div className="d-flex justify-content-end">
          <div>
            <p className="ms-4 fw-bold">Tweets </p>
          </div>
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

        <div className="border-top p-3">
          {tweets.map((tweet) => {
            return (
              <ProfileTweet
                key={tweet.id}
                profile={profile}
                tweet={tweet}
                like={(e) => {
                  handleLike(tweet);
                  e.preventDefault();
                }}
                // count={count}
                // onChange={handleChildChange}
                getTweets={getTweets}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Profile;
