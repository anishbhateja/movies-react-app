import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies, setShowFavourite } from '../actions';

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    //make api calls,dispatch action
    store.subscribe(() => {
      //event lister for changes made to the state
      // console.log('UPDATED');
      this.forceUpdate(); //will make the app component rerender
    });
    //takes in data and return the object which will be passed on to the reducer
    store.dispatch(addMovies(data)); //ACTION CREATOR-will return object that will be passed on to the reducer
    console.log('STATE', this.props.store.getState());
  }
  isMovieFavourite = (movie) => {
    //check if movie is in favourite list
    const { favourites } = this.props.store.getState();
    const index = favourites.indexOf(movie);
    if (index !== -1) {
      //found the movie
      return true;
    }
    return false;
  };
  onChangeTab = (value) => {
    this.props.store.dispatch(setShowFavourite(value));
  };
  render() {
    const { list, favourites, showFavourites } = this.props.store.getState(); // { list:[], favourites:[]}
    console.log('STATE', this.props.store.getState());
    // console.log('RENDER');
    const displayMovies = showFavourites ? favourites : list;
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div
              onClick={() => {
                this.onChangeTab(false);
              }}
              className={`tab ${showFavourites ? '' : 'active-tabs'}`}
            >
              Movies
            </div>
            <div
              onClick={() => {
                this.onChangeTab(true);
              }}
              className={`tab ${showFavourites ? 'active-tabs' : null}`}
            >
              Favourites
            </div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => {
              return (
                <MovieCard
                  movie={movie}
                  key={`movies-${index}`}
                  dispatch={this.props.store.dispatch}
                  isFavourite={this.isMovieFavourite(movie)}
                />
              );
            })}
          </div>
          {displayMovies.length === 0 ? (
            <div className="no-movies"> No movies to dislay!</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
