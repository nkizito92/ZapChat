import { combineReducers } from 'redux'
import chatsReducer from './chatsReducer'
import guestsReducer from './guestsReducer'
import commentsReducer from './commentsReducer'

export default combineReducers({
    chatsReducer,
    guestsReducer,
    commentsReducer
})