import React, { Component } from "react";
import { Icon, Grid, Accordion } from "semantic-ui-react";
import { Link as NavLink } from 'react-router-dom'

class MobileNav extends Component {

  constructor() {
    super()
    this.state = {
      activeIndex: -1
    }
  }

  changeActiveTitle(index) {
    const activeIndex = this.state.activeIndex === index ? -1 : index
    this.setState({ activeIndex })
  }

  render() {
    const { activeIndex } = this.state
    return (
      <Grid.Row>
        <Accordion className="mobile-accordion">
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={() => this.changeActiveTitle(0)}
            className="nav-dropdown-item"
          >
            <Icon name="dropdown" />
            Company
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <NavLink to="/company" className="mobile-accordion">
              About
            </NavLink>
            <NavLink to="/company" className="mobile-accordion">
              Partners
            </NavLink>
            <NavLink to="/company" className="mobile-accordion">
              Certifications
            </NavLink>
            <NavLink to="/company" className="mobile-accordion">
              Contract Vehicles
            </NavLink>
            <NavLink to="/company" className="mobile-accordion">
              Our Team
            </NavLink>
            <NavLink to="/company" className="mobile-accordion">
              Careers
            </NavLink>
            <NavLink to="/company" className="mobile-accordion">
              Contact
            </NavLink>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={() => this.changeActiveTitle(1)}
            className="nav-dropdown-item"
          >
            <Icon name="dropdown" />
            Services
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <NavLink to="/security-optimization" className="mobile-accordion">
              Security Optimization
            </NavLink>
            <NavLink to="/workplace-modernization" className="mobile-accordion">
              Workplace Modernization
            </NavLink>
            <NavLink to="/network-transformation" className="mobile-accordion">
              Network Transformation
            </NavLink>
            <NavLink
              to="/data-center-consolidation"
              className="mobile-accordion"
            >
              Data Center Consolidation
            </NavLink>
            <NavLink to="/e-learning" className="mobile-accordion">
              E-Learning
            </NavLink>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={() => this.changeActiveTitle(2)}
            className="nav-dropdown-item"
          >
            <Icon name="dropdown" />
            Solutions
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <NavLink to="/solutions" className="mobile-accordion">
              Microsoft 365
            </NavLink>
            <NavLink to="/solutions" className="mobile-accordion">
              Business Apps
            </NavLink>
            <NavLink to="/solutions" className="mobile-accordion">
              Data and BI
            </NavLink>
            <NavLink to="/solutions" className="mobile-accordion">
              Apps & Infrostructure
            </NavLink>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 3}
            index={3}
            onClick={() => this.changeActiveTitle(3)}
            className="nav-dropdown-item"
          >
            <Icon name="dropdown" />
            Products
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 3}>
            <NavLink to="/solutions" className="mobile-accordion">
              Exchange Online
            </NavLink>
            <NavLink to="/solutions" className="mobile-accordion">
              Microsoft 365
            </NavLink>
            <NavLink to="/solutions" className="mobile-accordion">
              Office 365
            </NavLink>
            <NavLink to="/solutions" className="mobile-accordion">
              Dynamics 365
            </NavLink>
          </Accordion.Content>
        </Accordion>
      </Grid.Row>
    );
  }
}

export default MobileNav;
