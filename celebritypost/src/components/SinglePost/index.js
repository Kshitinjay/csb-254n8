import React from "react";
import "./singlepost.css";
const SinglePost = ({ heading, details, imgLink }) => {
  return (
    <div id="posts">
      <div id="postImage">
        <img src={imgLink} alt="noImage" />
      </div>
      <div className="postData">
        <h4>{heading}</h4>
        <p>{details}</p>
      </div>
      <div className="postData">
        <img
          src="https://img.icons8.com/metro/26/000000/visible.png"
          alt="noImage"
        />
        <img
          src="https://img.icons8.com/ios-filled/26/000000/facebook-like.png"
          alt="noImage"
          id="likeButton"
        />
      </div>
    </div>
  );
};

export default SinglePost;
