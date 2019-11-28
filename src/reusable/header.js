import React, { Component } from 'react'

class Header extends Component {

  
  constructor() {
    super()
    this.locationObj  = {
      "/company": "About",
      "/contact": "Contact",
      "/solutions": "Solutions",
      "/products": "Products",
      "/exchange-online": "Exchange Online",
      "/dynamics365": "Dynamics 365",
      "/microsoft365": "Microsoft 365",
      "/office365": "Office 365",
      "/services": "Services",
      "/data-center-consolidation": "Data Center Consolidation",
      "/e-learning": "e-Learning",
      "/network-transformation": "Network Transformation",
      "/security-optimization": "Security Optimization",
      "/workplace-modernization": "Workplace Modernization"
    }
  }

  render() {
    const pageName = this.locationObj[this.props.page];
    return (
      <div className="pageTitle">
        <div className="text-left">
          <h1 className="fs-5 white">{pageName}</h1>
        </div>
      </div>
    )
  }
}

export default Header