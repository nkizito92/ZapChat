import React, { Component } from 'react'
import Chat from "../components/Chat"
import { fetchChats } from "../action/chatActions"
import { connect } from 'react-redux'
class Chats extends Component {
    componentDidMount() {
        this.props.fetchChats()
    }
    render() {
        const {chats} = this.props   
        // delete will be added later 
        const listChats = chats.map(chat => <Chat key={chat.id} chat={chat} guest={chat.guest} />)
        return (
            <div>
                <ul>
                    {listChats}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        chats: state.chats,
        loading: state.loading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchChats: () => dispatch(fetchChats())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chats)