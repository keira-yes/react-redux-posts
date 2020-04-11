import React from "react";
import Post from "./Post";
import {connect} from "react-redux";

const Posts = ({syncPosts}) => {
  return (
    <>
      {syncPosts.length ?
        syncPosts.map(post => <Post post={post} key={post.id}/>) :
        <p>Постов нет.</p>
      }
    </>
  )
};

const mapStateToProps = state => {
  return {
    syncPosts: state.posts.posts
  }
};

export default connect(mapStateToProps, null)(Posts);