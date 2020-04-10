import React from 'react';

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  submitHandler = (e) => {
    e.preventDefault()
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div className="form-group">
            <label htmlFor="title">Post name</label>
            <input type="text" className="form-control" id="title" />
            <button type="submit" className="btn btn-success">Create post</button>
          </div>
        </form>
      </div>
    )
  }
}