import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateGuest } from '../../action/guestActions'

class Guest extends Component {
    state = {
        id: '',
        name: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        const editing = {
            id: this.props.guest.id,
            name: this.state.name
        }
        this.props.updateGuest(editing)
        this.setState({
            name: ""
        })
    }

    render() {
        return (
                <form className="guestForm" onSubmit={e => this.handleOnSubmit(e)}>
                <p>{this.props.guest.name}</p>
                    <input type="text" name="name" onChange={e => this.handleChange(e)} value={this.props.guest.name}/> <br />
                    <input className="btn" type="submit" value="Edit Name" />
                </form>
        )
    }
}


export default connect(null, { updateGuest })(Guest)