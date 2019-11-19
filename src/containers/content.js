import React, { Component } from 'react'
import Home from '../pages/Home'
import Header from '../reusable/Header'

class Content extends Component {
    render() {
        return (
            <div className="content">
                <Header />
                <Home />
            </div>
        )
    }
}

export default Content