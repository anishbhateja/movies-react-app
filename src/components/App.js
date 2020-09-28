import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies } from '../actions';

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    //make api calls
    //dispatch action
    store.subscribe(() => {
      //event lister for changes made to the state
      console.log('UPDATED');
      this.forceUpdate(); //will make the app component rerender
    });
    //takes in data and return the object which will be passed on to the reducer
    store.dispatch(addMovies(data)); //ACTION CREATOR-will return object that will be passed on to the reducer
    console.log('STATE', this.props.store.getState());
  }
  render() {
    const movies = this.props.store.getState();
    // console.log('STATE', this.props.store.getState());
    console.log('RENDER');
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {movies.map((movie, index) => {
              return <MovieCard movie={movie} key={`movies-${index}`} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
