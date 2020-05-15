import { combineReducers } from 'redux'
import chatsReducer from './chatsReducer'
import guestsReducer from './guestsReducer'
import commentsReducer from './commentsReducer'
import usersReducer from './usersReducer'


export default combineReducers({
    chatsReducer,
    commentsReducer,
    guestsReducer,
    usersReducer
})