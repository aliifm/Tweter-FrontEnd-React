import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import { login } from "../redux/userReducer";
import Tweet from "./Tweet";
import { useEffect } from "react";

function TwitterModal() {
  const token = useSelector((state) => state.user.token);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [tweet, setTweet] = React.useState([]);
  const [newTweet, setNewTweet] = React.useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "post",
      url: "http://localhost:8000/tweets/store",
      data: {
        body: newTweet,
      },
    });

    const getTweets = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "get",
        url: `http://localhost:8000/tweets`,
      });
      setTweet(response.data.tweets);
    };
    getTweets();
    setNewTweet("");
  };

  return (
    <>
      <Button className="btn bgTweeter rounded-pill" onClick={handleShow}>
        Tweet
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="bg-light ">
          <Modal.Title>New Tweet</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-light  p-3">
          <form
            action=""
            className="d-flex"
            method="post"
            onSubmit={handleSubmit}
          >
            <input
              className="form-control"
              type="text"
              value={newTweet}
              placeholder=" What's happening?"
              onChange={(e) => setNewTweet(e.target.value)}
            />
            <button type="submit" className="btn bg-light border ">
              Tweet
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer className="bg-light ">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TwitterModal;
