// {
//     type : 'ADD_MOVIES',
//     movies : [m1,m2,m3]
// }
// {
//     type : 'ADD_MOVIES',
//     movies : [m1,m2,m3]
// }

//action types (variables used for comparison in reducer functions)
export const ADD_MOVIES = 'ADD_MOVIES';

//action creators , takes in data and return the object which will be passed on to the reducer
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}
