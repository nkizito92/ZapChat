import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chats from "../components/chatComponents/Chats"
import { fetchChats } from "../action/chatActions"

class ChatsContainer extends Component {
    componentDidMount() {
        this.props.fetchChats()
    }

    render() {
        return (
            <div>
                <Chats chats={this.props.chats}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        chats: state.chatsReducer.chats,
        loading: state.chatsReducer.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchChats: () => dispatch(fetchChats())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatsContainer)