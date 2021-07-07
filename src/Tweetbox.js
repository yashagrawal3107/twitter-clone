import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./Tweetbox.css";
import db from "./firebase";
const Tweetbox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const postTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Yash Agrawal",
      userName: "justyash",
      verified: true,
      text: tweetMessage,
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4E03AQEeKhquuud0XQ/profile-displayphoto-shrink_400_400/0/1606232517711?e=1631145600&v=beta&t=0HH2eOoBy4C2EBATabngpusrBKPNcmoVxWUCW_9PnKY",
      image: tweetImage,
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQEeKhquuud0XQ/profile-displayphoto-shrink_400_400/0/1606232517711?e=1631145600&v=beta&t=0HH2eOoBy4C2EBATabngpusrBKPNcmoVxWUCW_9PnKY" />
          <input
            placeholder="What's happening"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
          {/* <input placeholder="Image url"></input>  */}
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          type="text"
        />
        <Button
          className="tweetBox__tweetButton"
          type="submit"
          onClick={postTweet}
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default Tweetbox;
