import React, { useState, useEffect } from "react";
import Tweetbox from "./Tweetbox";
import Post from "./Post";
import "./Feed.css";
import db from "./firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts([]);
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => {
          return { id: doc.id, data: doc.data() };
        })
      );
    });
  }, []);

  const [like, setLike] = useState({});

  const handleLike = (post) => {
    let { numberOfLikes } = post.data;
    let { id } = post;
    if (like.hasOwnProperty(id)) {
      if (like[id]) {
        numberOfLikes -= 1;
        setLike({ ...like, [id]: false });
      } else {
        numberOfLikes += 1;
        setLike({ ...like, [id]: true });
      }
    } else {
      numberOfLikes += 1;
      setLike({ ...like, [id]: true });
    }

    db.collection("posts").doc(post.id).update({
      numberOfLikes: numberOfLikes,
    });
  };

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <Tweetbox />
      <FlipMove>
        {posts.map((post) => {
          {
            /* console.log("posts are", post); */
          }
          const {
            text,
            displayName,
            userName,
            verified,
            avatar,
            image,
            numberOfLikes,
          } = post.data || [];
          {
            /* console.log("text is", text); */
          }
          return (
            <Post
              key={post.id}
              displayName={displayName}
              userName={userName}
              verified={verified}
              text={text}
              avatar={avatar}
              image={image}
              numberOfLikes={numberOfLikes}
              handleLike={() => handleLike(post)}
              like={like[post.id]}
            />
          );
        })}
      </FlipMove>
    </div>
  );
}

export default Feed;
