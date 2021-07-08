import React, { forwardRef, useState } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Post = forwardRef(
  (
    {
      displayName,
      userName,
      verified,
      text,
      image,
      avatar,
      numberOfLikes,
      like,
      handleLike,
    },
    ref
  ) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />} @
                  {userName}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <Button>
              <ChatBubbleOutlineIcon fontSize="small" />
            </Button>
            <Button>
              <RepeatIcon fontSize="small" />
            </Button>
            <Button onClick={handleLike}>
              {like ? (
                <FavoriteIcon fontSize="small" style={{ color: "red" }} />
              ) : (
                <FavoriteBorderIcon fontSize="small" />
              )}
              {numberOfLikes}
            </Button>
            <Button>
              {" "}
              <PublishIcon fontSize="small" />
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
