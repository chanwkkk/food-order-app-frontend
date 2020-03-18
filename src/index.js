import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import dishReducer from './reducers/dishReducer.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(dishReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
    document.getElementById('root')
);


