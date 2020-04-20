import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom'
import thunk from 'redux-thunk'
import combineReducers from './reducers/index'

const store = createStore(combineReducers, applyMiddleware(thunk))
ReactDOM.render(
    <Provider store={store} >
        <React.StrictMode>

            <Router>
                <App />
            </Router>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);
