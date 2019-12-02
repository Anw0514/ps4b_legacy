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
      "/managed-services": "Managed Services",
      "/data-center-consolidation": "Data Center Consolidation",
      "/e-learning": "e-Learning",
      "/network-transformation": "Network Transformation",
      "/security-optimization": "Security Optimization",
      "/workplace-modernization": "Workplace Modernization"
    }
  }

  render() {
    const { page, mobile } = this.props
    const fs = mobile ? "fs-3" : "fs-5"
    return (
      <div className="pageTitle">
        <div className="text-left">
          <h1 className={`${fs} white`}>{this.locationObj[page]}</h1>
        </div>
      </div>
    )
  }
}

export default Header