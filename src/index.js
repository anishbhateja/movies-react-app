import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import movies from './reducers';

//created store, if no prev state exists, default value of state from reducer is taken as state
const store = createStore(movies);
console.log('store', store);
console.log('store.getState()', store.getState());

ReactDOM.render(<App />, document.getElementById('root'));
