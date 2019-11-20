import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class NavBar extends Component {

    constructor() {
        super()
        this.state = {
            mobile: true
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this))
        this.resize()
    }

    resize() {
        console.log(this)
        this.setState({
            mobile: window.innerWidth < 760
        })
    }

    render() {
        return (
            <div className='navbar'>
                NavBar
            </div>
        )
    }
}

export default NavBar