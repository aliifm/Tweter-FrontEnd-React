import React from "react";

function Tweet({ tweet }) {
  console.log(tweet.likes);

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
        <div className="d-flex p-2 justify-content-between align-items-baseline">
          <form method="post" action={`/tweets/${tweet._id}/like`}>
            {console.log(tweet)}
            <div className="d-flex align-items-baseline">
              <button type="submit" className="border-0 bg-transparent">
                <i
                  className={`${
                    tweet.likes.includes(tweet.userId)
                      ? "fa-solid text-danger fa-heart"
                      : "fa-heart fa-regular"
                  }`}
                ></i>
                {console.log(tweet.likes.includes(tweet.userId))}
              </button>

              <span className="ms-1"> {tweet.likes.length} </span>
            </div>
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

{
  /* <div className={`alert ${condicion ? "alert-success" : "alert-danger"}`}>
  {condicion ? "Verdadero" : "Falso"}
</div> */
}
