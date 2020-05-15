import React from 'react'
import HomesContainer from './container/HomesContainer'
import ChatsContainer from './container/ChatsContainer'
import Login from './components/accountComponents/Login'
import GuestsContainer from './container/GuestsContainer'
import ChatShow from './components/chatComponents/ChatShow'
import CommentShow from './components/commentComponents/CommentShow'
import ChatsInput from './components/chatComponents/ChatsInput'
import { fetchChats } from './action/chatActions'
import { fetchComments } from './action/commentActions'
import { fetchGuests } from './action/guestActions'
import { fetchUsers} from './action/userActions'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Navbar from './headers/Navbar'
import "./style.css"


class App extends React.Component {
    componentDidMount() {
        this.props.fetchComments()
        this.props.fetchChats()
        this.props.fetchGuests()
        this.props.fetchUsers()
    }

    displayLogin () {
       
    }

    render() {
        return (
            <div>
                <nav id="nav">
                    <Navbar />
                    <br />
                </nav>
                <Switch>
                    <Route exact path="/" component={() => <HomesContainer guests={this.props.guests} chats={this.props.chats} />} />
                    <Route exact path="/chats" component={() => <ChatsContainer guests={this.props.guests} chats={this.props.chats} />} />
                    <Route exact path="/chats/new" component={({ history }) => <ChatsInput history={history} />} />
                    <Route exact path="/chats/:id" component={({ match, history }) => <ChatShow chats={this.props.chats} id={Number(parseInt(match.params.id))} history={history} />} />
                    <Route exact path="/comments/:id" component={({ match, history }) => <CommentShow history={history} comments={this.props.comments} id={match.params.id} />} />
                    <Route exact path="/guests" component={({ history }) => <GuestsContainer history={history} chats={this.props.chats} guests={this.props.guests} />} />
                    <Route exact path="/login" component={({ history }) => <Login history={history} />} />
                </Switch>
                <footer>Copy Rights Reserved by Kizito Njoku</footer>
            </div>
        )
    }

}
const mapStateToProps = state => {
    return {
        chats: state.chatsReducer.chats,
        guests: state.guestsReducer.guests
    }
}

export default connect(mapStateToProps, { fetchChats, fetchComments, fetchGuests, fetchUsers })(App)