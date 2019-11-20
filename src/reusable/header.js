import React, { Component } from 'react'

class Header extends Component {

  
  constructor() {
    super()
    this.locationObj  = {
      "/": "Home",
      "/company": "About",
      "/contact": "Contact",
      "/solutions": "Solutions",
      "/products": "Products",
      "/dynamics365": "Dynamics 365",
      "/microsoft365": "Microsoft 365",
      "/office365": "Office 365",
      "/services": "Services",
      "/data-center-consolidation": "Data Center Consolidation",
      "/e-learning": "eLearning",
      "/network-transformation": "Network Transformation",
      "/security-optimization": "Security Optimization",
      "/workplace-modernization": "Workplace Modernization"
    }
    this.state = {
      pageName: this.locationObj[window.location.pathname]
    }
  }

  render() {
      return this.state.pageName === "Home" ? (
        <div className="pageTitle home">
          <div className="text-left">
            <h1 className="fs-4 white">Practical Solutions, Inc.</h1>
            <h5 className="fs-2 white">
              Over 20 years of experience in helping clients
              <br />
              Turn Chaos to Order
            </h5>
          </div>
        </div>
      ) : (
        <div className="pageTitle">
          <div className="text-left">
            <h1 className="fs-4 white">{this.state.pageName}</h1>
          </div>
        </div>
      );
  }
}

export default Header