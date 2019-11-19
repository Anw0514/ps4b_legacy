import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
          <div className="pageTitle">
            <div className="text-left">
              <h1 className="fs-4 white">Practical Solutions, Inc.</h1>
              <h5 className="fs-2 white">
                Over 20 years of experience in helping clients<br /> 
                Turn Chaos to Order
              </h5>
            </div>
          </div>
        );
    }
}

export default Header