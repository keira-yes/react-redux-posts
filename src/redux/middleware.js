import {CREATE_POST} from "./types";
import {showAlert} from "./actions";

const forbidden = ['fuck', 'spam'];

export function forbiddenWordsMiddleware({dispatch}) {
  return function(next) {
    return function(action) {
      if (action.type === CREATE_POST) {
        const founded = forbidden.filter(word => action.payload.title.includes(word));
        if (founded.length) {
          return dispatch(showAlert('Это спам'))
        }
      }

      return next(action);
    }
  }
}