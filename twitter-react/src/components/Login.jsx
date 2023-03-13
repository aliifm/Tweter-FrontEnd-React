import React from "react";

function Login() {
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
            >
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
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
              <button
                type="submit"
                className="btn bgTweeter rounded-pill w-100"
              >
                Login
              </button>
            </form>
            <a
              className="text-decoration-none text-dark text-center d-block"
              href="/register"
            >
              Don't have an account?{" "}
              <span className="text-primary"> Sign up </span>
            </a>
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
