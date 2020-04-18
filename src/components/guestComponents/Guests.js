import React, {Component} from 'react'
import {connect} from 'react-redux'
class Guests extends Component {
    render () {
        return (
            <div>
                Hello!!
            </div>
        )
    }
}



export default connect(dull)(Guests)