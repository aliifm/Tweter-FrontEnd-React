import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <body className="background-color-login">
      <section className="container vh-100 d-flex justify-content-center align-items-center my-auto">
        <div className="row">
          <div className="hidden-md col-md-7 bgTweeter text-primary d-flex flex-column rounded-start">
            <i className="fa-brands fa-twitter fs-1 p-4 text-white"></i>
            <p className="text-white fs-4 mt-auto p-4">
              Hey! Nice to see you again🥰
            </p>
          </div>
          <div className="col-md-5 col-12 bg-white p-5 rounded-end flex-column my-auto h-100 login-style">
            <h4>Sign up</h4>
            <p>Create an account and start using Twitter</p>
            <form
              className="mb-5"
              action="/registeruser"
              method="post"
              enctype="multipart/form-data"
            >
              <div className="mb-3">
                <input
                  type="text"
                  name="firstname"
                  placeholder="First name"
                  className="form-control"
                  id="firstname"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="lastname"
                  placeholder="Last name"
                  id="lastname"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  id="email"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Username"
                  id="username"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  id="password"
                />
              </div>
              <div className="mb-3">
                <label for="image" className="form-label">
                  Seleccionar una imagen
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="avatar"
                  name="avatar"
                />
              </div>
              <button
                type="submit"
                className="btn bgTweeter rounded-pill w-100"
              >
                Sign Up
              </button>
            </form>
            <a
              className="text-decoration-none text-dark text-center d-block "
              href="/"
            >
              Already have an account?
              <Link to="/"> Sign in </Link>
            </a>
          </div>
        </div>
      </section>
    </body>
  );
}

export default Register;