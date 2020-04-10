import React from "react";
import Post from "./Post";

export default ({posts}) => {
  return (
    <>
      {posts.length ?
          posts.map(post => <Post post={post} key={post}/>) :
          <p>Постов нет.</p>
      }
    </>
  )
}