import React from "react";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Tweet from "./Tweet";
import { useSelector } from "react-redux";

function Home() {
  const token = useSelector((state) => state.user.token);

  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState("");

  useEffect(() => {
    const getTweets = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "get",
        url: `http://localhost:8000/tweets`,
      });
      setTweets(response.data.tweets);
    };
    getTweets();
  }, []);

  if (!token) {
    return <Navigate to="/login" />;
  } else {
    const handleSubmit = async (event) => {
      event.preventDefault();

      await axios({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "post",
        url: "http://localhost:8000/tweets/store",
        data: {
          body: newTweet,
        },
      });
    };

    return (
      <div className="min-vh-100 col-sm-9 col-9 col-md-10 col-lg-6 my-3">
        <div className="content-container">
          {console.log(newTweet)}
          <div className="px-2 pb-2 border-end border-start border-bottom border-top">
            <h3>Home</h3>
            <div className="d-flex align-items-center">
              <form className="w-100" method="post" onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="newTweet"
                  name="newTweet"
                  value={newTweet}
                  className="w-100 form-control"
                  placeholder=" What's happening?"
                  onChange={(e) => setNewTweet(e.target.value)}
                />

                <div className="d-flex justify-content-end">
                  <button
                    type="submit"
                    className="btn bgTweeter rounded-pill mt-2"
                  >
                    Tweet
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="border">
            {tweets.map((tweet) => {
              return <Tweet key={tweet.id} tweet={tweet} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
