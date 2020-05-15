import React, { Component } from 'react'
import { addUser } from '../../action/userActions'
import { connect } from 'react-redux'

class Login extends Component {
    state = {
        username: "",
        password: "",
        failed: ''
    }

    handleLogin = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        let currentUser = {
            username: this.state.username,
            password: this.state.password,
            failed: this.state.failed
        }
        this.props.addUser(currentUser)
        this.setState({
            username: "",
            password: ""
        })
    }

    render() {
        return (
            <div className="main">
                <form onSubmit={e => this.handleSubmit(e)} className="form">
                    <h1>Login:</h1> <br />
                    <div id="updated">{this.state.update}</div><br />
                    <div className="error">{this.state.error}</div>
                    <input id="username" name="username" onChange={e => this.handleLogin(e)} placeholder="Username" value={this.state.username} /> <br />
                    <input type="password" name="password" onChange={e => this.handleLogin(e)} placeholder="Password" value={this.state.password} /> <br />
                    <button className="btn" onClick={this.handleSubmit}>Login</button>
                </form>
            </div>
        )
    }
}


export default connect(null, { addUser })(Login)