import React from "react";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import userReducer from "../redux/userReducer";
import { login, logout } from "../redux/userReducer";
import Tweet from "./Tweet";

function Home() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const userStore = useSelector((state) => state.user.user);
  const params = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [tweets, setTweets] = useState([]);

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
      console.log(response.data);
    };
    getTweets();
  }, []);

  if (!token) {
    return <Navigate to="/login" />;
  } else {
    return (
      <div className="min-vh-100 col-sm-9 col-9 col-md-10 col-lg-6 my-3">
        <div className="content-container">
          <div className="px-2 pb-2 border-end border-start border-bottom border-top">
            <h3>Home</h3>
            <div className="d-flex align-items-center">
              <form action="/tweets/store" className="w-100" method="post">
                <input
                  type="text"
                  id="newTweet"
                  name="newTweet"
                  className="w-100 form-control"
                  placeholder=" What's happening?"
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
