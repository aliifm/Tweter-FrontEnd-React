import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// comentario
function Tweet({ tweet, like, getTweets }) {
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

  const handleLike = async () => {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "post",
      url: `http://localhost:8000/tweets/${tweet._id}/like`,
    });

    if (response.data.like) {
      getTweets();
    }
  };
  return (
    <div className="d-flex p-2 w-100">
      <img src={tweet.userId.avatar} className="profileImage" alt="img-profile" />
      <div className="w-75">
        <div className="d-flex align-items-baseline w-100">
          <Link to={`/profile/${tweet.userId.username}`} className="text-decoration-none text-reset">
            <h6 className="mb-0 mr-2">
              <strong>
                {" "}
                {tweet.userId.firstname} {tweet.userId.lastname}{" "}
              </strong>
            </h6>
          </Link>
          <p className="text-muted m-0 fs-6">@{tweet.userId.username} </p>
        </div>
        <p className="m-0" id="tweet-content">
          {tweet.body}
        </p>
        <div className="d-flex p-2 justify-content-between align-items-baseline">
          <div className="d-flex align-items-baseline">
            <button onClick={() => handleLike()} className="border-0 bg-transparent">
              <i className={`${tweet.likes.includes(user._id) ? "fa-solid text-danger fa-heart" : "fa-heart fa-regular"}`}></i>
            </button>
            <span className="ms-1"> {tweet.likes.length} </span>
          </div>

          <button type="submit" className="border-0 bg-transparent" onClick={handleDelete}>
            {user._id === tweet.userId._id && <i className="fa-solid fa-trash ms-auto"></i>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
