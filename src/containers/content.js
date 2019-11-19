import React, { Component } from 'react'
import Home from '../pages/Home'

class Content extends Component {

    constructor() {
        super()
        this.state = {
            scrollPosition: 0,
            modal: false
        }
    }

    render() {
        return (
            <div className="content">
                <Home />
            </div>
        )
    }
}

export default Content