import React from 'react';
import {connect} from "react-redux";
import {createPost} from "../redux/actions";

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    }
  }

  submitHandler = (e) => {
    e.preventDefault();
    const {title} = this.state;

    if(!title.trim()) {
      return;
    }

    const newPost = {
      title,
      id: Date.now().toString()
    };

    this.props.createPost(newPost);

    this.setState({title: ''})
  };

  inputChangeHandler = (e) => {
    e.persist();
    this.setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  render() {
    const {title} = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler} className="mb-5">
          <div className="form-group">
            <label htmlFor="title">Post name</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={title}
              onChange={this.inputChangeHandler}
            />
            <button type="submit" className="btn btn-success mt-3">Create post</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  createPost
};

export default connect(null, mapDispatchToProps)(PostForm)