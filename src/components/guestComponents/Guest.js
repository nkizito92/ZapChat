import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateChat } from '../../action/chatActions'

class Guest extends Component {
    state = {
        id: '',
        name: '',
        error: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        const editing = {
            id: this.props.id,
            name: this.state.name
        }
        if (!this.state.name) {
            this.setState({
                error: "Please fill out the name field"
            })
        } else {
            this.props.updateChat(editing)
            this.setState({
                name: "",
                error: ""
            })
        }
    }


    render() {
        const { chat } = this.props
        return (
            <form className="guestForm" onSubmit={e => this.handleOnSubmit(e)}>
                <h4>{chat.guest.name}</h4>
                <div className="error">{this.state.error}</div>
                <input id="name" type="text" name="name" onChange={e => this.handleChange(e)} value={this.state.name} /> <br />
                <input className="btn" type="submit" value="Edit Name" /> <br />
            </form>
        )
    }
}


export default connect(null, { updateChat })(Guest)