import React from "react";

function RightSidebar() {
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
        <div className="row mb-3">
          <div className="col-3 text-center">
            <img
              className="profileImage"
              src="https://media.idownloadblog.com/wp-content/uploads/2017/03/Twitter-new-2017-avatar-001.png"
              alt="Profimage "
            />
          </div>
          <div className="col-6 p-0">
            <p className="mb-0">
              <strong> Hack Academy</strong>
            </p>
            <small className="text-muted">@HackAcadamy123</small>
          </div>
          <div className="col-3 p-0">
            <button type="button" className="btn bgTweeter rounded-pill mr-2">
              Follow
            </button>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-3 text-center">
            <img
              className="profileImage"
              src="https://media.idownloadblog.com/wp-content/uploads/2017/03/Twitter-new-2017-avatar-001.png"
              alt="Profilage"
            />
          </div>

          <div className="col-6 p-0">
            <p className="mb-0">
              <strong> Hack Academy</strong>
            </p>
            <small className="text-muted">@HackAcadamy123</small>
          </div>
          <div className="col-3 p-0">
            <button type="button" className="btn bgTweeter rounded-pill mr-2">
              Follow
            </button>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-3 text-center">
            <img
              className="profileImage"
              src="https://media.idownloadblog.com/wp-content/uploads/2017/03/Twitter-new-2017-avatar-001.png"
              alt="Profilemage"
            />
          </div>
          <div className="col-6 p-0">
            <p className="mb-0">
              <strong> Hack Academy</strong>
            </p>
            <small className="text-muted">@HackAcadamy123</small>
          </div>
          <div className="col-3 p-0">
            <button type="button" className="btn bgTweeter rounded-pill mr-2">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
