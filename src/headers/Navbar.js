import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

const link = {
    padding: "8px 10px",
    margin: "0 3px",
    color: "#ffff",
    textDecoration: 'none'
}

export default class Navbar extends Component {
    render() {
        return (
            <>
                <NavLink to="/" exact style={link} activeStyle={{ backgroundColor: "navy" }}>Home</NavLink>
                <NavLink to="/chats" exact style={link} activeStyle={{ backgroundColor: "navy" }}>Chats</NavLink>
                <NavLink to="/chats/new" exact style={link} activeStyle={{ backgroundColor: "navy" }}>Create Chat</NavLink>
                <NavLink to="/guests" exact style={link} activeStyle={{ backgroundColor: "navy" }}>Guests</NavLink>
            </>
        )
    }
}