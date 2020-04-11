import {CREATE_POST, FETCH_POSTS} from "./types";

const initialState = {
  posts: [],
  postsFetch: []
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return {...state, posts: [...state.posts, action.payload]};
    case FETCH_POSTS:
      return {...state, postsFetch: action.payload}
    default: return state;
  }
};