import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import Chats from './components/Chats'
import Guests from './components/guestComponents/Guests'
import ChatsInput from './components/ChatsInput'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import chatsReducer from './reducers/chatsReducer'
import guestsReducer from './reducers/guestsReducer'
import thunk from 'redux-thunk'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './headers/Navbar'

const store = createStore(chatsReducer, guestsReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
    <Router>
        <nav>
            <Navbar />
        </nav>
            <Route exact path="/" component={App} />
            <Route exact path="/chats" component={Chats} />
            <Route exact path="/chats/new" component={ChatsInput} />
            <Route exact path="/guests" component={Guests} />
    </Router>

    </Provider>,
    document.getElementById('root')
);
