import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    //make api calls
    //dispatch action
    store.subscribe(() => {
      //event lister for changes made to the state
      console.log('UPDATED');
      this.forceUpdate(); //will make the render function execute again
    });
    store.dispatch({
      //action being sent
      type: 'ADD_MOVIES',
      movies: data,
    });
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
