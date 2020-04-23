import React, { Component } from 'react'
import Guest from './Guest'
class Guests extends Component {
    displayGuest = () => {
        const { guests } = this.props
        let listOfGuest;
        if (guests !== undefined) {
            listOfGuest = guests.map(guest => <Guest key={guest.id} guest={guest} id={guest.id} />)
        } else {
            return (
                <h2 className="chatShow">There are no Guest</h2>
            )
        }
        return (
            <div>
                {listOfGuest}
            </div>
        )
    }
    render() {
        return (
            <div className="main" key={this.props.id}>
                <h1 className="chatShow">Guests</h1>
                {this.displayGuest()}
            </div>
        )
    }
}



export default Guests