import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import ProfileTweet from "./ProfileTweet";
import FollowButton from "./FollowButton";

function Profile() {
  const [profile, setProfile] = useState();
  const [tweets, setTweets] = useState([]);
  const [clickedUserTweets, setClickedUserTweets] = useState([]);
  const [following, setFollowing] = useState(false);

  const token = useSelector((state) => state.user.token);
  const { user } = useSelector((state) => state.user);
  const params = useParams();

  const getFollowing = async () => {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "get",
      url: `http://localhost:8000/usuarios/following/${user.username}`,
    });
   
    const followingUser = response.data.following.some(
      (user) => user._id === profile._id
    );
    
    setFollowing(followingUser);
  };
  
  useEffect(() => {
    if (user && profile) {
      getFollowing();
    }
  }, [profile, user]);

  const handleFollow = async () => {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "get",
      url: `http://localhost:8000/usuarios/${profile._id}/userFollow`,
    });
      getFollowing();
    // setUser(response.data.loggedUser);
    // setRefresh((prev) => !prev);
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
    setTweets(response.data);
    // setClickedUserTweets(response.data);
  };

  const getClickedUserTweets = async () => {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "get",
      url: `http://localhost:8000/tweets/${params.username}/show`,
    });
    setClickedUserTweets(response.data);
  };

  useEffect(() => {
    getTweets();
    getClickedUserTweets();
  }, []);

  return (
    <div className="min-vh-100 col-sm-9 col-9 col-md-10 col-lg-6">
      {profile && (
        <div className="content-container h-50 p-0">
          <div className="bgTweeter bg-height position-relative">
            <img
              className="profileImageHero"
              alt="imgHero"
              src={profile.avatar}
            />
          </div>
          {user.username === params.username ? (
            <form
              className="d-flex"
              action="/usuarios/profileUser.id/follow"
              method="post"
            >
              <button
                disabled
                className="btn text-white rounded-pill ms-auto mt-3 mb-3"
              >
                Follow
              </button>
            </form>
          ) : (
            <div
              className="d-flex pt-2 mw-fit-content ms-auto"
              onClick={() => handleFollow()}
            >
              {user && <FollowButton isFollowing={following} />}
            </div>
          )}

          <h5 className="fs-4 ms-4">
            {profile.firstname} {profile.lastname}
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
            <Link
              to={`/${profile.username}/followers`}
              className="ms-3 text-decoration-none text-muted"
            >
              Followers
            </Link>
          </div>

          <div className="border-top p-3">
            {user.username === params.username
              ? tweets.map((tweet) => {
                  return (
                    <ProfileTweet
                      key={tweet.id}
                      profile={profile}
                      tweet={tweet}
                      getTweets={getTweets}
                    />
                  );
                })
              : clickedUserTweets.map((tweet) => {
                  return (
                    <ProfileTweet
                      key={tweet.id}
                      profile={profile}
                      tweet={tweet}
                      getClickedUserTweets={getClickedUserTweets}
                    />
                  );
                })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
