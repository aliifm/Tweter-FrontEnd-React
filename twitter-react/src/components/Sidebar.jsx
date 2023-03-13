import React from "react";

function Sidebar() {
  return (
    <div className="col-sm-auto sticky-top vh-100">
      <div className="d-flex flex-column align-items-center sticky-top h-100">
        <a
          href="/"
          className="d-block p-3 link-primary text-decoration-none fs-2"
          title=""
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-original-title="Icon-only"
        >
          <i className="fa-brands fa-twitter"></i>
        </a>
        <ul className="nav nav-pills nav-flush flex-column mb-auto mx-auto text-center align-items-center">
          <li className="nav-item">
            <a
              href="/"
              className="d-block nav-link py-3 px-2 link-dark fs-3"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Home"
            >
              <i className="fa-solid fa-house"></i>
            </a>
          </li>
          <li>
            <a
              href="/usuarios/<%=locals.user.username%>"
              className="d-block nav-link py-3 px-2 link-dark fs-2"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Dashboard"
            >
              <i className="fa-regular fa-user"></i>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="d-block nav-link py-3 px-2"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Orders"
            >
              <a href="/" className="btn bgTweeter rounded-pill">
                Tweet
              </a>
            </a>
          </li>
        </ul>
        <a href="/auth/logout">
          <button className="btn btn-danger rounded-pill mb-3">Logout</button>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
