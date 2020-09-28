import {
  ADD_TO_MOVIES,
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITE,
  SET_SHOW_FAVOURITE,
} from '../actions'; //action type (variables used for comparison in reducer functions)

const initialMoviesState = {
  list: [],
  favourites: [],
  showFavourites: false,
};

//state and return should be always same
export default function movies(state = initialMoviesState, action) {
  //   if (action.type === ADD_MOVIES) {
  //     return { ...state, list: action.movies };
  //   }
  //   return state;
  switch (action.type) {
    case ADD_TO_MOVIES: {
      return {
        ...state,
        list: action.movies,
      };
    }
    case ADD_TO_FAVOURITE: {
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };
    }
    case REMOVE_FROM_FAVOURITE: {
      const filteredArray = state.favourites.filter((movie) => {
        return movie.Title !== action.movie.Title;
      });
      return {
        ...state,
        favourites: filteredArray,
      };
    }
    case ADD_TO_FAVOURITE: {
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };
    }
    case SET_SHOW_FAVOURITE: {
      return {
        ...state,
        showFavourites: action.value,
      };
    }

    default:
      return state;
  }
}
