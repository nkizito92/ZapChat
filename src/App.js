import React from 'react'
import ChatsContainer from './container/ChatsContainer'
import Chats from './components/chatComponents/Chats'
import ChatShow from './components/chatComponents/ChatShow'
import Guests from './components/guestComponents/Guests'
import ChatsInput from './components/chatComponents/ChatsInput'
import { Route, Switch } from 'react-router-dom'
import Navbar from './headers/Navbar'


export default class App extends React.Component {
    componentDidMount() {
        fetch("http://localhost:3000/chats")
            .then(res => res.json())
            .then(chats => this.setState({ chats }))
    }

    state = {
        chats: []
    }
    render() {
        debugger
        return (
            <div className="App">
                <nav>
                    <Navbar />
                    <br />
                </nav>
                <Switch>
                    <Route exact path="/" component={ChatsContainer} />
                    <Route exact path="/chats" component={Chats} />
                    <Route exact path="/chats/new" render={() => <ChatsInput />} />

                    <Route exact path="/chats/:id" component={({ match }) => <ChatShow chats={this.state.chats} id={match.params.id} />} />
                    <Route exact path="/guests" component={Guests} />
                </Switch>
            </div>
        )
    }

}