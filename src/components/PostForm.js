import React from 'react';

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postTitle: ''
    }
  }

  submitHandler = (e) => {
    e.preventDefault()
  };

  inputChangeHandler = (e) => {
    const name = e.target.name,
      value = e.target.value;
    this.setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div className="form-group">
            <label htmlFor="title">Post name</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="postTitle"
              value={this.state.postTitle}
              onChange={this.inputChangeHandler}
            />
            <button type="submit" className="btn btn-success">Create post</button>
          </div>
        </form>
      </div>
    )
  }
}