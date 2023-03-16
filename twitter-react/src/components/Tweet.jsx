import React from "react";

function Tweet({ tweet }) {
  return (
    <div className="d-flex p-2 w-100">
      <img
        src={tweet.userId.avatar}
        className="profileImage"
        alt="img-profile"
      />
      <div className="w-75">
        <div className="d-flex align-items-baseline w-100">
          <a
            className="text-decoration-none text-reset"
            href="/usuarios/<%= tweet.userId.username %>"
          >
            <h6 className="mb-0 mr-2">
              <strong>
                {" "}
                {tweet.userId.firstname} {tweet.userId.lastname}{" "}
              </strong>
            </h6>
          </a>
          <p className="text-muted m-0 fs-6">@{tweet.userId.username} </p>
        </div>
        <p className="m-0" id="tweet-content">
          {tweet.body}
        </p>
        <div className="d-flex p-2 justify-content-between">
          <form method="post" action="/tweets/<%= tweet.id  %>/like">
            <label className="container-heart">
              <input checked="checked" type="checkbox" />
              <div className="checkmark">
                <svg viewBox="0 0 256 256">
                  <rect fill="none" height="256" width="256"></rect>
                  <path
                    d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                    stroke-width="20px"
                    stroke="#FFF"
                    fill="none"
                  ></path>
                </svg>
              </div>
            </label>
            <span> {tweet.likes.length} </span>
          </form>

          {/* <!-- <p><--%=locals.user.id == tweet.userId._id%></p> --> */}
          {/* <!-- <--% if(localUser == tweet.userId._id){%> --> */}
          {/* <% if(user.id === profileUser.id){ %> */}
          <form method="POST" action="/tweets/<%= tweet._id %>?_method=DELETE">
            <button type="submit" className="border-0 bg-transparent">
              <i className="fa-solid fa-trash ms-auto"></i>
            </button>
          </form>
          {/* <%}%> */}
        </div>
      </div>
    </div>
  );
}

export default Tweet;
