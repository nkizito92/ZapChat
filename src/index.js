import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import chatsReducer from './reducers/chatsReducer'
import thunk from 'redux-thunk'

const store = createStore(chatsReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>

    <App />
    </Provider>,
    document.getElementById('root')
);
