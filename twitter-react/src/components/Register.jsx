import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../redux/userReducer";

function Register() {
  const [inputFirstname, setInputFirstname] = useState("");
  const [inputLastname, setInputLastname] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputAvatar, setInputAvatar] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("firstname", inputFirstname);
    formData.append("lastname", inputLastname);
    formData.append("email", inputEmail);
    formData.append("username", inputUsername);
    formData.append("password", inputPassword);
    formData.append("avatar", inputAvatar);

    const response = await axios.post(
      "http://localhost:8000/usuarios",

      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    dispatch(login(response.data));
  };

  return (
    <div className="background-color-login h-100">
      <section className="h-50 container d-flex justify-content-center align-items-center ">
        <div className="row h-50">
          <div className="hidden-md col-md-7 bgTweeter text-primary d-flex flex-column rounded-start">
            <i className="fa-brands fa-twitter fs-1 p-4 text-white"></i>
            <p className="text-white fs-4 mt-auto p-4">
              Hey! Nice to see you again🥰
            </p>
          </div>
          <div className="col-md-5 col-12 bg-white p-3 rounded-end flex-column login-style">
            <h4>Sign up</h4>
            <p>Create an account and start using Twitter</p>
            <form
              className="mb-5"
              action="/registeruser"
              method="post"
              enctype="multipart/form-data"
              onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <input
                  type="text"
                  name="firstname"
                  placeholder="First name"
                  className="form-control"
                  id="firstname"
                  aria-describedby="emailHelp"
                  value={inputFirstname}
                  onChange={(e) => setInputFirstname(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="lastname"
                  placeholder="Last name"
                  id="lastname"
                  value={inputLastname}
                  onChange={(e) => setInputLastname(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  id="email"
                  value={inputEmail}
                  onChange={(e) => setInputEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Username"
                  id="username"
                  value={inputUsername}
                  onChange={(e) => setInputUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  id="password"
                  value={inputPassword}
                  onChange={(e) => setInputPassword(e.target.value)}
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
                  onChange={(event) => {
                    //                   const ImageName = event.target.value.split('\\')[2];
                    // const Image = event.target.value;
                    // console.log('Imageon Kevel: ', Image); // Image on Kevel
                    // console.log('ImageName on Kevel: ', ImageName); // ImageName on Kevel
                    // console.log('ImageLink on Kevel: ', event.target.value); // ImageLink on Kevel
                    // console.log('event current Target files: ', event.target.files[0].path);
                    setInputAvatar(event.target.files[0]);
                  }}
                />
              </div>
              <button
                type="submit"
                className="btn bgTweeter rounded-pill w-100"
              >
                <Link to={"/login"}>Sign Up</Link>
              </button>
            </form>
            <a className="text-decoration-none text-dark text-center d-block ">
              Already have an account?
              <Link to="/login"> Sign in </Link>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
