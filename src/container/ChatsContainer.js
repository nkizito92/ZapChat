import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chats from "../components/Chats"

import { fetchChats } from "../action/chatActions"
import ChatsInput from "../components/ChatsInput"

class ChatsContainer extends Component {
    componentDidMount() {
        this.props.fetchChats()
    }

    render() {
        return (
            <div>
                <ChatsInput />
                <Chats />
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

export default connect(mapStateToProps, mapDispatchToProps)(ChatsContainer)