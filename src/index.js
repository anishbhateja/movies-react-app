import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import movies from './reducers';

//created store, if no prev state exists, default value of state from reducer is taken as state
const store = createStore(movies);
console.log('store', store);
// console.log('Before State', store.getState());

// //.dispatch is used to send actions to the state
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{ name: 'Superman' }],
// });

// console.log('After State', store.getState());

ReactDOM.render(<App store={store} />, document.getElementById('root'));
