import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

function Tweet({ tweet, like }) {
  // desestructure el state del UserReducer
  //para traer el user por separado
  const { token, user } = useSelector((state) => state.user);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   console.log(tweet);
  //   const response = await axios({
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //     method: "post",
  //     url: `http://localhost:8000/tweets/${tweet._id}/like`,
  //   });

  //   console.log(response.data);
  // };
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
          {/* "{like}" que seria la funcion que teniamos "handleSumbit" es pasado por props desde HomeComponent */}
          <form onSubmit={like}>
            <div className="d-flex align-items-baseline">
              <button type="submit" className="border-0 bg-transparent">
                <i
                  className={`${
                    // tweet.likes.includes(tweet.userId) asi estaba antes
                    //userId es un objeto, por ende no podria nunca estar incluido en el array de likes
                    // al traer user desestructurado de la store accedemos al _id de user, para meterlo en el array de likes
                    tweet.likes.includes(user._id)
                      ? "fa-solid text-danger fa-heart"
                      : "fa-heart fa-regular"
                  }`}
                ></i>
              </button>

              <span className="ms-1"> {tweet.likes.length} </span>
            </div>
          </form>

          {/* <!-- <p><--%=locals.user.id == tweet.userId._id%></p> --> */}
          {/* <!-- <--% if(localUser == tweet.userId._id){%> --> */}
          {/* <% if(user.id === profileUser.id){ %> */}
          {/* preguntar si el user logueado hizo el tweet
          si lo hizo mostrar basura sino no - HECHO
          */}
          {user._id === tweet.userId && <form method="POST" action="/tweets/<%= tweet._id %>?_method=DELETE">
            <button type="submit" className="border-0 bg-transparent">
            
               
               <i className="fa-solid fa-trash ms-auto"></i>
                 

            </button>
          </form>}
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
