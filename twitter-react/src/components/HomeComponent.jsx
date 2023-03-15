import React from "react";

function Home() {
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

        <div className="d-flex p-2 border-end border-start border-bottom w-100">
          <div className="w-75">
            <div className="d-flex align-items-baseline w-100">
              <a
                className="text-decoration-none text-reset"
                href="/usuarios/<%= tweet.userId.username %>"
              >
                <h6 className="mb-0 mr-2">Algo</h6>
              </a>
            </div>

            <div className="d-flex p-2 justify-content-between">
              <form method="post" action="/tweets/<%= tweet.id  %>/like">
                <button
                  id="cora_<% tweet._id %>"
                  type="submit"
                  className="border-0 bg-transparent"
                >
                  <i className="<% if(tweet.likes.includes(locals.user.id)){%> fa-solid <%} else {%> fa-regular <%}%> text-danger fa-heart"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
