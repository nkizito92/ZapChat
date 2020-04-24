import React, { Component } from 'react'
import { connect } from 'react-redux'
import Home from "../components/Home"
import { fetchChats } from "../action/chatActions"

class HomesContainer extends Component {
    componentDidMount() {
        this.props.fetchChats()
    }

    render() {
        return (
            <div>
                <Home chats={this.props.chats}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomesContainer)