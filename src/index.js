import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom'
import thunk from 'redux-thunk'
import combineReducers from './reducers/index'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(combineReducers, composeEnhancers(
    applyMiddleware(thunk)
  ));
ReactDOM.render(
    <Provider store={store} >
            <Router>
                <App />
            </Router>
    </Provider>,
    document.getElementById('root')
);
