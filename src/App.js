import React from 'react'
import Chats from './components/chats'
import Chat from './components/chat'
export default class App extends React.Component {

    render (){
        return (
            <div>
                <Chats />
                <Chat />
            </div>
        )
    }

}