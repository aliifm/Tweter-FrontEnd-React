import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import FollowButton from "./FollowButton";

function RightSidebar() {
  const token = useSelector((state) => state.user.token);
  const loggedUser = useSelector((state) => state.user.user);
  const [users, setUsers] = useState([]);
  const [follow, setFollow] = useState([]);

  const getUsers = async () => {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "get",
      url: `http://localhost:8000/usuarios`,
    });
    setUsers(response.data.user);
  };
  console.log(loggedUser);

  useEffect(() => {
    getUsers();
  }, []);

  const handleFollow = async (user) => {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "post",
      url: `http://localhost:8000/usuarios/${user._id}/follow`,
    });
    setFollow(response.data);
  };

  return (
    <div className="row container-fluid d-flex justify-content sticky-top my-3">
      <div className="rounded bg-light p-3 mb-3">
        <div>
          <h3>What's happening</h3>
        </div>
        <div className="mb-3">
          <small className="text-muted">Programming · Trending</small>
          <p className="fs-6 fw-bold m-0">#MongoVsSequelize</p>
          <small className="text-muted">97.5K Tweets</small>
        </div>
        <div className="mb-3">
          <small className="text-muted">Entertainment · Trending</small>
          <p className="fs-6 fw-bold m-0">#StarWars</p>
          <small className="text-muted">97.5K Tweets</small>
        </div>
        <div className="mb-3">
          <small className="text-muted">News · Trending</small>
          <p className="fs-6 fw-bold m-0">#LifeInMars</p>
          <small className="text-muted">97.5K Tweets</small>
        </div>
      </div>
      <div className="rounded bg-light p-3">
        <h3 className="mb-3">Who to follow</h3>
        {users.map((user) => {
          return (
            <div className="row mb-3">
              <div className="col-3 text-center">
                <img
                  className="profileImage"
                  src={user?.avatar}
                  alt="Profimage "
                />
              </div>
              <div className="col-6 p-0">
                <p className="mb-0">
                  <strong>
                    {" "}
                    {user?.firstname} {user?.lastname}{" "}
                  </strong>
                </p>
                <small className="text-muted">@{user?.username}</small>
              </div>
              <div
                className="mw-fit-content col-3 p-0 "
                onClick={() => handleFollow(user)}
              >
                {loggedUser && (
                  <FollowButton
                    isFollowing={loggedUser.following.some(
                      (item) => item._id === user._id
                    )}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RightSidebar;
