import React, {Component} from 'react'
import { NavLink } from 'react-router-dom';

const link = {
    padding: "8px 10px",
    margin: "0 3px",
    color: "#ffff",
    backgroundColor: 'black',
    textDecoration: 'none'
}

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <NavLink to="/" exact style={link} activeStyle={{ backgroundColor: "gray" }}>Home</NavLink>
                <NavLink to="/chats" exact style={link} activeStyle={{ backgroundColor: "gray" }}>Chats</NavLink>
                <NavLink to="/chats/new" exact style={link} activeStyle={{ backgroundColor: "gray" }}>NewChat</NavLink>
                <NavLink to="/guests" exact style={link} activeStyle={{ backgroundColor: "gray" }}>Guests</NavLink>
           </div>
        )
    }
}