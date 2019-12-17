import React, { Component } from 'react'
import { header } from '../Data'

class Header extends Component {

  render() {
    const { page, mobile } = this.props
    const { locationObj } = header
    const fs = mobile ? "fs-8" : "fs-9"
    return (
      <div className="pageTitle">
        <div className="text-left">
          <h1 className={`${fs} white`}>{locationObj[page]}</h1>
        </div>
      </div>
    )
  }
}

export default Header