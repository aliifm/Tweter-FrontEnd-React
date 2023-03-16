import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/userReducer";

function Login() {
  const navigate = useNavigate();
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [token, setToken] = useState("");

  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();

  console.log(user);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios({
      method: "post",
      url: "http://localhost:8000/tokens",
      data: {
        email: inputEmail,
        password: inputPassword,
      },
    });
    setToken(response.data);
    dispatch(login(response.data));
    console.log(response.data);
  };
  if (token) {
    navigate("/");
  }
  return (
    <div className="background-color-login">
      <section className="container vh-100 d-flex justify-content-center align-items-center my-auto">
        <div className="row h-75 w-75">
          <div className="hidden-md col-md-7 bgTweeter text-primary d-flex flex-column rounded-start">
            <i className="fa-brands fa-twitter fs-1 p-4 text-white"></i>
            <p className="text-white fs-4 mt-auto p-4">
              Hey! Nice to see you again🥰
            </p>
          </div>
          <div className="col-md-5 col-12 bg-white p-5 rounded-end flex-column my-auto h-100 login-style">
            <h4>Login</h4>
            <p>Ready to start using Twitter?</p>
            <form
              className="mb-5"
              action="/auth/login"
              id="createForm"
              name="createForm"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={inputEmail}
                  className="form-control"
                  id="email"
                  onChange={(e) => setInputEmail(e.target.value)}
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  value={inputPassword}
                  name="password"
                  onChange={(e) => setInputPassword(e.target.value)}
                  placeholder="Password"
                  id="password"
                />
              </div>
              <button
                type="submit"
                className="btn bgTweeter rounded-pill w-100"
              >
                Login
              </button>
            </form>
            <p className="text-decoration-none text-dark text-center d-block">
              Don't have an account? <Link to="/register">Sign up </Link>
            </p>
          </div>
        </div>
      </section>
      <script
        src="https://kit.fontawesome.com/9f0d5f7751.js"
        crossorigin="anonymous"
      ></script>
    </div>
  );
}

export default Login;
