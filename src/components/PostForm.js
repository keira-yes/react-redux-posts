import React from 'react';

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postTitle: ''
    }
  }

  submitHandler = (e) => {
    e.preventDefault();
    const {postTitle} = this.state;

    const newPost = {
      postTitle,
      id: Date.now().toString()
    };

    this.setState({postTitle: ''})
  };

  inputChangeHandler = (e) => {
    e.persist();
    this.setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  render() {
    const {postTitle} = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler} className="mb-5">
          <div className="form-group">
            <label htmlFor="title">Post name</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="postTitle"
              value={postTitle}
              onChange={this.inputChangeHandler}
            />
            <button type="submit" className="btn btn-success mt-3">Create post</button>
          </div>
        </form>
      </div>
    )
  }
}