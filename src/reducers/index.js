import { combineReducers } from 'redux'
import chatsReducer from './chatsReducer'
import guestsReducer from './guestsReducer'

export default combineReducers({
    chatsReducer,
    guestsReducer
})