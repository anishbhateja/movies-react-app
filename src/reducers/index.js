import { ADD_MOVIES } from '../actions'; //action type (variables used for comparison in reducer functions)

export default function movies(state = [], action) {
  if (action.type === ADD_MOVIES) {
    return action.movies;
  }
  return state;
}
