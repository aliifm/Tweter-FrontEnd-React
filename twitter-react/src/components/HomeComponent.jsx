import React from "react";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Tweet from "./Tweet";
import { useSelector } from "react-redux";

function Home() {
  const token = useSelector((state) => state.user.token);

  const [count, setCount] = useState(0);
  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState("");

  const handleChildChange = (newCount) => {
    setCount(newCount);
  };

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

  useEffect(() => {
    getTweets();
  }, []);

  //la logica del like la use aca xq aca esta la llamada axios que trae todos los tweets
  //la funcion handleLike envia el id del tweet likeado al back, la respuesta devuelve un booleano en true "return res.json({"like":true});"
  //en el if pregunto por esa respuesta y adentro llamo a "getTweets();" para que se renderice solo el componente y asi cambia el color del
  //cora en tiempo real
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
    };

    return (
      <div className="min-vh-100 col-sm-9 col-9 col-md-10 col-lg-6 my-3">
        <div className="content-container">
          <div className="px-2 pb-2 border-end border-start border-bottom border-top">
            <h3>Home</h3>
            <div className="d-flex align-items-center">
              <form className="w-100" method="post" onSubmit={handleSubmit}>
                <input type="text" id="newTweet" name="newTweet" value={newTweet} className="w-100 form-control" placeholder=" What's happening?" onChange={(e) => setNewTweet(e.target.value)} />

                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn bgTweeter rounded-pill mt-2">
                    Tweet
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="border">
            {tweets.map((tweet) => {
              return (
                <Tweet
                  key={tweet.id}
                  tweet={tweet}
                  like={(e) => {
                    handleLike(tweet);
                    e.preventDefault();
                  }}
                  count={count}
                  onChange={handleChildChange}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
