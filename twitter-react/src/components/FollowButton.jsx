import React, { useState, useEffect } from "react";

function FollowButton({ isFollowing }) {
  const [classes, setClasses] = useState("btn btn-transparent border rounded-pill mr-2");

  useEffect(() => {
    if (isFollowing) {
      setClasses("btn btn-transparent border rounded-pill mr-2");
    } else {
      setClasses("btn btn-primary rounded-pill mr-2");
    }
  }, [isFollowing]);

  return (
    <div>
      {isFollowing ? (
        <button type="button" className={`${classes}`}>
          Unfollow
        </button>
      ) : (
        <button type="button" className={`${classes}`}>
          Follow
        </button>
      )}
    </div>
  );
}

export default FollowButton;
