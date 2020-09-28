import { ADD_MOVIES, ADD_FAVOURITE } from '../actions'; //action type (variables used for comparison in reducer functions)

const initialMoviesState = {
  list: [],
  favourites: [],
};

//state and return should be always same
export default function movies(state = initialMoviesState, action) {
  //   if (action.type === ADD_MOVIES) {
  //     return { ...state, list: action.movies };
  //   }
  //   return state;
  switch (action.type) {
    case ADD_MOVIES: {
      return {
        ...state,
        list: action.movies,
      };
    }
    case ADD_FAVOURITE: {
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };
    }
    default:
      return state;
  }
}
