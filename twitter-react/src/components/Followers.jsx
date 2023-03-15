import React from "react";
import { Link } from "react-router-dom";

function Followers() {
  return (
    <div className="container-fluid d-flex justify-content-evenly">
      <div className="row">
        <div className="col-3 col-sm-3 col-md-2">Sidebar</div>
        <div className="p-3 min-vh-100 col-sm-9 col-9 col-md-6 mb-2">
          <div className="row text-center mb-4">
            <div className="col-6">
              <Link
                to={"/usuarios/followers/:id"}
                className="fs-5 text-muted text-decoration-none celeste"
              >
                Followers
              </Link>
            </div>
            <div className="col-6">
              <a
                href="/usuarios/following/<%= profileUser.username %>"
                className="fs-5 text-muted text-decoration-none"
              >
                Following
              </a>
            </div>
          </div>

          {/* <% for(const follower of followers ){ %> */}

          <div className="row mb-3">
            <div className="col-3 text-center">
              <img
                className="rounded-circle img-fluid w-100 useravatar-fol"
                src="<%= follower.avatar%>"
                alt="Profilmage"
              />
            </div>
            <div className="col-6 p-0">
              <p className="mb-0">
                <strong>firstname lastname</strong>
              </p>
              <small className="text-muted">@.username</small>
            </div>
            <div className="col-3 p-0">
              <button
                type="button"
                className="btn btn-primary rounded-pill mr-2"
              >
                Follow
              </button>
            </div>
          </div>
          {/* <% } %> */}
        </div>

        <div className="col-md-4 hidden-sm">RightSidebar</div>
      </div>
    </div>
  );
}

export default Followers;
