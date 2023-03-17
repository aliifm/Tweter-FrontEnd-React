import React from "react";
import { Link } from "react-router-dom";

import { logout } from "../redux/userReducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Sidebar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  return (
    <div className="col-sm-auto sticky-top vh-100">
      <div className="d-flex flex-column align-items-center sticky-top h-100">
        <Link
          to={"/"}
          className="d-block p-3 link-primary text-decoration-none fs-2"
          title=""
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-original-title="Icon-only"
        >
          <i className="fa-brands fa-twitter"></i>
        </Link>
        <ul className="nav nav-pills nav-flush flex-column mb-auto mx-auto text-center align-items-center">
          <li className="nav-item">
            <Link
              to={"/"}
              className="d-block nav-link py-3 px-2 link-dark fs-3"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Home"
            >
              <i className="fa-solid fa-house"></i>
            </Link>
          </li>
          <li>
            <Link
              to={`/profile/${user.username}`}
              className="d-block nav-link py-3 px-2 link-dark fs-2"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Dashboard"
            >
              <i className="fa-regular fa-user"></i>
            </Link>
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
              <span className="btn bgTweeter rounded-pill">
                Tweet
              </span>
            </a>
          </li>
        </ul>

        <button
          className="btn btn-danger rounded-pill mb-3"
          onClick={() => dispatch(logout())}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
