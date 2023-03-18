import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function ProfileTweet({ tweet, profile, getTweets, getClickedUserTweets }) {
  const { token, user } = useSelector((state) => state.user);
  const params = useParams();

  const handleDelete = async () => {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "delete",
      url: `http://localhost:8000/tweets/${tweet._id}`,
    });
    getTweets();
    if (response.data.like) {
    }
  };

  const handleLike = async (e) => {
    e.preventDefault();
    const response = await axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "post",
      url: `http://localhost:8000/tweets/${tweet._id}/like`,
    });

    if (response.data.like) {
      if (user.username === params.username) {
        getTweets();
      } else {
        getClickedUserTweets();
      }
    }
  };

  return (
    <div className="d-flex p-2 w-100">
      <img src={profile.avatar} className="profileImage" alt="img-profile" />
      <div className="w-75">
        <div className="d-flex align-items-baseline w-100">
          <a className="text-decoration-none text-reset" href="/usuarios/<%= tweet.userId.username %>">
            <h6 className="mb-0 mr-2">
              <strong>
                {profile.firstname} {profile.lastname}
              </strong>
            </h6>
          </a>
          <p className="text-muted m-0 fs-6">@{profile.username} </p>
        </div>
        {
          <p className="m-0" id="tweet-content">
            {tweet.body}
          </p>
        }
        <div className="d-flex p-2 justify-content-between align-items-baseline">
          {
            <div className="d-flex align-items-baseline">
              <button onClick={handleLike} className="border-0 bg-transparent">
                <i className={`${tweet.likes.some((id) => id === user._id) ? "fa-solid text-danger fa-heart" : "fa-heart fa-regular"}`}></i>
              </button>
              <span className="ms-1"> {tweet.likes.length} </span>
            </div>
          }

          {user._id === tweet.userId && (
            <button type="submit" className="border-0 bg-transparent" onClick={handleDelete}>
              <i className="fa-solid fa-trash ms-auto"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
