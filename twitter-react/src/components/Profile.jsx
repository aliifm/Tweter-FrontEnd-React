import React from "react";

function Profile() {
  return (
    <body>
      <div className="container">
        <div className="row">
          <div className="col-3 col-sm-3 col-md-2 col-lg-2">LEFT SIDEBAR</div>
          <div className="min-vh-100 col-sm-9 col-9 col-md-10 col-lg-6">
            <div className="content-container h-50 p-0">
              <div className="h-25 bgTweeter position-relative">{/* Imagen de Avatar (usuario) */}</div>
              {/* <!-- Primer if muestra el boton follow/unfollow y el else no muestra si el perfil es del usuario logeado --> */}
              {/* <% if (profileUser.username !== myUser.username) {%> */}
              <form className="d-flex" action="/usuarios/<%= profileUser.id %>/follow" method="post">
                {/* <% if(user.following.includes(profileUser.id)){ %> */}
                <button className="btn btn-outline-dark rounded-pill ms-auto mt-3 mb-3" type="submit">
                  Unfollow
                </button>
                {/* <% }else{ %> */}
                <button type="submit" className="btn bgTweeter rounded-pill ms-auto mt-3 mb-3">
                  Follow
                </button>
                {/* <% } %> */}
              </form>
              {/* <% } else { %> */}
              <form className="d-flex" action="/usuarios/<%= profileUser.id %>/follow" method="post">
                {/* <% if(user.following.includes(profileUser.id)){ %> */}
                <button className="btn text-white rounded-pill ms-auto mt-3 mb-3 text-transparent" type="submit">
                  Unfollow
                </button>
                {/* <% }else{ %> */}
                <button type="submit" className="btn text-white rounded-pill ms-auto mt-3 mb-3">
                  Follow
                </button>
                {/* <% } %> */}
              </form>
              {/* <% }%> */}
              <h5 className="fs-4 ms-4">Nombre y Apellido</h5>
              <div className="d-flex flex-column">
                <p className="ms-4">@username</p>
                <p className="ms-4">Descripcion</p>
              </div>
              <div className="d-flex justify-content-end">
                <a href="/usuarios/following/<%= profileUser.username %>" className="ms-auto text-decoration-none text-muted">
                  Following
                </a>
                <a href="/usuarios/followers/<%= profileUser.username %>" className="ms-3 text-decoration-none text-muted">
                  Followers
                </a>
              </div>
              <div>
                <p className="ms-4 fw-bold border-bottom">Tweets </p>
                {/* <% for (const tweet of profileUser.tweets.reverse()) { %> */}

                <div className="d-flex p-2 w-100">
                  <img src="IMAGEN DE PERFIL DE TWEET" className="profileImage" />
                  <div className="w-75">
                    <div className="d-flex align-items-baseline w-100">
                      <a className="text-decoration-none text-reset" href="/usuarios/<%= tweet.userId.username %>">
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
                        <button id="cora_<% tweet.id %>" type="submit" className="border-0 bg-transparent">
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
                {/* <% } %> */}
              </div>
            </div>
          </div>

          <div className="col-lg-4 hidden-sm">rightside-partial</div>
        </div>
      </div>
      <script src="https://kit.fontawesome.com/9f0d5f7751.js" crossorigin="anonymous"></script>
    </body>
  );
}

export default Profile;
