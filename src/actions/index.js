// {
//     type : 'ADD_MOVIES',
//     movies : [m1,m2,m3]
// }
// {
//     type : 'ADD_MOVIES',
//     movies : [m1,m2,m3]
// }

//action types (variables used for comparison in reducer functions)
export const ADD_TO_MOVIES = 'ADD_TO_MOVIES';
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const SET_SHOW_FAVOURITE = 'SET_SHOW_FAVOURITE';

//action creators , takes in data and return the object which will be passed on to the reducer
export function addMovies(movies) {
  return {
    type: ADD_TO_MOVIES,
    movies,
  };
}

export function addFavourite(movie) {
  return {
    type: ADD_TO_FAVOURITE,
    movie,
  };
}

export function removeFromFavourite(movie) {
  return {
    type: REMOVE_FROM_FAVOURITE,
    movie,
  };
}
export function setShowFavourite(value) {
  return {
    type: SET_SHOW_FAVOURITE,
    value,
  };
}
