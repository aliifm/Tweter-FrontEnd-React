import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

export default function ProfileTweet({ tweet, profile, like, getTweets }) {
  const { token, user } = useSelector((state) => state.user);

  const handleDelete = async () => {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "delete",
      url: `http://localhost:8000/tweets/${tweet._id}`,
    });
    console.log(response.data);
    getTweets();
    if (response.data.like) {
    }
  };
  console.log(tweet);
  console.log(user);
  return (
    <div className="d-flex p-2 w-100">
      <img src={profile.avatar} className="profileImage" alt="img-profile" />
      <div className="w-75">
        <div className="d-flex align-items-baseline w-100">
          <a
            className="text-decoration-none text-reset"
            href="/usuarios/<%= tweet.userId.username %>"
          >
            <h6 className="mb-0 mr-2">
              <strong>
                {" "}
                {profile.firstname} {profile.lastname}{" "}
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
          {/* { "{like}" que seria la funcion que teniamos "handleSumbit" es pasado por props desde HomeComponent */}
          {
            <form onSubmit={like}>
              <div className="d-flex align-items-baseline">
                <button type="submit" className="border-0 bg-transparent">
                  <i
                    className={`${
                      // tweet.likes.includes(tweet.userId) asi estaba antes
                      //userId es un objeto, por ende no podria nunca estar incluido en el array de likes
                      // al traer user desestructurado de la store accedemos al _id de user, para meterlo en el array de likes
                      tweet.likes.includes(user._id)
                        ? "fa-solid text-danger fa-heart"
                        : "fa-heart fa-regular"
                    }`}
                  ></i>
                </button>

                <span className="ms-1"> {tweet.likes.length} </span>
              </div>
            </form>
          }
          {console.log(profile._id)}
          {console.log(tweet.userId)}

          {profile._id === tweet.userId && (
            <button
              type="submit"
              className="border-0 bg-transparent"
              onClick={handleDelete}
            >
              <i className="fa-solid fa-trash ms-auto"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
