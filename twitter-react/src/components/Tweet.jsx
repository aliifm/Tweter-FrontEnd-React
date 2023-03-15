import React from "react";

function Tweet() {
  return (
    <div className="d-flex p-2 w-100">
      <img
        src="IMAGEN DE PERFIL DE TWEET"
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
              <strong> firstname.lastname </strong>
            </h6>
          </a>
          <p className="text-muted m-0 fs-6">profileUser username </p>
        </div>
        <p className="m-0" id="tweet-content">
          lorem sdoiasd sdjboad aosbd{" "}
        </p>
        <div className="d-flex p-2 justify-content-between">
          <form method="post" action="/tweets/<%= tweet.id  %>/like">
            <button
              id="cora_<% tweet.id %>"
              type="submit"
              className="border-0 bg-transparent"
            >
              <i className="<% if(tweet.likes.includes(locals.user.id)){%> fa-solid <%} else {%> fa-regular <%}%> text-danger fa-heart"></i>
            </button>
            <span> Cantidad de likes </span>
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
