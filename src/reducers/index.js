import { ADD_MOVIES } from '../actions'; //action type (variables used for comparison in reducer functions)

const initialMoviesState = {
  list: [],
  favourites: [],
};

//state and return should be always same
export default function movies(state = initialMoviesState, action) {
  if (action.type === ADD_MOVIES) {
    return { ...state, list: action.movies };
  }
  return state;
}
