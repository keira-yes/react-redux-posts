import React from 'react';
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import PostsFetch from "./components/PostsFetch";

function App() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Posts</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Fetch posts</h2>
          <PostsFetch posts={[]}/>
        </div>
      </div>
    </div>
  );
}

export default App;
