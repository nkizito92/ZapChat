import React from 'react'
import ChatsContainer from './container/ChatsContainer'
import Chats from './components/chatComponents/Chats'
import ChatShow from './components/chatComponents/ChatShow'
import CommentsContainer from './container/CommentsContainer'
import CommentShow from './components/commentComponents/CommentShow'
import Guests from './components/guestComponents/Guests'
import ChatsInput from './components/chatComponents/ChatsInput'
import { Route, Switch } from 'react-router-dom'
import Navbar from './headers/Navbar'
import "./style.css"


export default class App extends React.Component {
    componentDidMount() {
        fetch("http://localhost:3000/chats")
            .then(res => res.json())
            .then(chats => this.setState({ chats }))

        fetch("http://localhost:3000/comments")
            .then(res => res.json())
            .then(comments => this.setState({ comments }))
    }

    state = {
        chats: []
    }
    render() {
        return (
            <div className="App">
                <nav id="nav">
                    <Navbar />
                    <br />
                </nav>
                <Switch>
                    <Route exact path="/" component={ChatsContainer} />
                    <Route exact path="/chats" component={Chats} />
                    <Route exact path="/chats/new" render={() => <ChatsInput />} />
                    <Route exact path="/chats/:id" component={({ match, history }) => <ChatShow chats={this.state.chats} id={match.params.id} history={history} />} />
                    <Route exact path="/comments/:id" component={({ match }) => <CommentShow comments={this.state.comments} id={match.params.id} />} />
                    <Route exact path="/guests" component={Guests} />
                    <Route exact path="/comments" component={CommentsContainer} />
                </Switch>
            </div>
        )
    }

}