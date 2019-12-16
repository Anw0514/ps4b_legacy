import React, { Component } from "react";
import { Icon, Grid, Accordion, Item } from "semantic-ui-react";
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
      <Grid.Row fluid>
        <Accordion fluid className="mobile-accordion">
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={() => this.changeActiveTitle(0)}
            className="nav-dropdown-item text-left"
          >
            <Icon name="dropdown" />
            Company
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <Item.Group divided>
              <Item>
                <Item.Content verticalAlign="middle">
                  <NavLink
                    onClick={() => this.props.goToPage("/company")}
                    to="/company?section=about"
                    className="mobile-accordion"
                  >
                    About
                  </NavLink>
                </Item.Content>
              </Item>
              <Item>
                <Item.Content verticalAlign="middle">
                  <NavLink
                    onClick={() => this.props.goToPage("/company")}
                    to="/company?section=partners"
                    className="mobile-accordion"
                  >
                    Partners
                  </NavLink>
                </Item.Content>
              </Item>
              <Item>
                <Item.Content verticalAlign="middle">
                  <NavLink
                    onClick={() => this.props.goToPage("/company")}
                    to="/company?section=certifications"
                    className="mobile-accordion"
                  >
                    Certifications
                  </NavLink>
                </Item.Content>
              </Item>
              <Item>
                <Item.Content verticalAlign="middle">
                  <NavLink
                    onClick={() => this.props.goToPage("/company")}
                    to="/company?section=contractvehicles"
                    className="mobile-accordion"
                  >
                    Contract Vehicles
                  </NavLink>
                </Item.Content>
              </Item>
              <Item>
                <Item.Content verticalAlign="middle">
                  <NavLink
                    onClick={() => this.props.goToPage("/company")}
                    to="/company?section=ourteam"
                    className="mobile-accordion"
                  >
                    Our Team
                  </NavLink>
                </Item.Content>
              </Item>
              <Item>
                <Item.Content verticalAlign="middle">
                  <NavLink
                    onClick={() => this.props.goToPage("/company")}
                    to="/company?section=careers"
                    className="mobile-accordion"
                  >
                    Careers
                  </NavLink>
                </Item.Content>
              </Item>
              <Item>
                <Item.Content verticalAlign="middle">
                  <NavLink
                    onClick={() => this.props.goToPage("/contact")}
                    to="/contact"
                    className="mobile-accordion"
                  >
                    Contact
                  </NavLink>
                </Item.Content>
              </Item>
            </Item.Group>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={() => this.changeActiveTitle(1)}
            className="nav-dropdown-item text-left"
          >
            <Icon name="dropdown" />
            Services
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <Item.Group divided>
              <Item>
                <Item.Content verticalAlign="middle">
                  <NavLink
                    onClick={() =>
                      this.props.goToPage("/security-optimization")
                    }
                    to="/security-optimization"
                    className="mobile-accordion"
                  >
                    Security Optimization
                  </NavLink>
                </Item.Content>
              </Item>
              <Item>
                <NavLink
                  onClick={() =>
                    this.props.goToPage("/workplace-modernization")
                  }
                  to="/workplace-modernization"
                  className="mobile-accordion"
                >
                  Workplace Modernization
                </NavLink>
              </Item>
              <Item>
                <Item.Content verticalAlign="middle">
                  <NavLink
                    onClick={() =>
                      this.props.goToPage("/network-transformation")
                    }
                    to="/network-transformation"
                    className="mobile-accordion"
                  >
                    Network Transformation
                  </NavLink>
                </Item.Content>
              </Item>
              <Item>
                <Item.Content verticalAlign="middle">
                  <NavLink
                    onClick={() =>
                      this.props.goToPage("/data-center-consolidation")
                    }
                    to="/data-center-consolidation"
                    className="mobile-accordion"
                  >
                    Data Center Consolidation
                  </NavLink>
                </Item.Content>
              </Item>
              <Item>
                <Item.Content verticalAlign="middle">
                  <NavLink
                    onClick={() => this.props.goToPage("/e-learning")}
                    to="/e-learning"
                    className="mobile-accordion"
                  >
                    E-Learning
                  </NavLink>
                </Item.Content>
              </Item>
            </Item.Group>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={() => this.changeActiveTitle(2)}
            className="nav-dropdown-item text-left"
          >
            <Icon name="dropdown" />
            Solutions
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <Item.Group divided>
              <Item>
                <Item.Content verticalAlign="middle">
                  <NavLink
                    onClick={() => this.props.goToPage("/solutions")}
                    to="/solutions?section=microsoft365"
                    className="mobile-accordion"
                  >
                    Microsoft 365
                  </NavLink>
                </Item.Content>
              </Item>
              <Item>
                <Item.Content verticalAlign="middle">
                  <NavLink
                    onClick={() => this.props.goToPage("/solutions")}
                    to="/solutions?section=businessapps"
                    className="mobile-accordion"
                  >
                    Business Apps
                  </NavLink>
                </Item.Content>
              </Item>
              <Item>
                <Item.Content verticalAlign="middle">
                  <NavLink
                    onClick={() => this.props.goToPage("/solutions")}
                    to="/solutions?section=dataandbi"
                    className="mobile-accordion"
                  >
                    Data and BI
                  </NavLink>
                </Item.Content>
              </Item>
              <Item>
                <Item.Content verticalAlign="middle">
                  <NavLink
                    onClick={() => this.props.goToPage("/solutions")}
                    to="/solutions?section=appsandinfrastructure"
                    className="mobile-accordion"
                  >
                    Apps & Infrostructure
                  </NavLink>
                </Item.Content>
              </Item>
            </Item.Group>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 3}
            index={3}
            onClick={() => this.changeActiveTitle(3)}
            className="nav-dropdown-item text-left"
          >
            <Icon name="dropdown" />
            Products
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 3}>
            <Item.Group divided>
              <Item>
                <Item.Content verticalAlign="middle">
                  <NavLink
                    onClick={() => this.props.goToPage("/exchange-online")}
                    to="/exchange-online"
                    className="mobile-accordion"
                  >
                    Exchange Online
                  </NavLink>
                </Item.Content>
              </Item>
              <Item>
                <Item.Content verticalAlign="middle">
                  <NavLink
                    onClick={() => this.props.goToPage("/microsoft365")}
                    to="/microsoft365"
                    className="mobile-accordion"
                  >
                    Microsoft 365
                  </NavLink>
                </Item.Content>
              </Item>
              <Item>
                <Item.Content verticalAlign="middle">
                  <NavLink
                    onClick={() => this.props.goToPage("/office365")}
                    to="/office365"
                    className="mobile-accordion"
                  >
                    Office 365
                  </NavLink>
                </Item.Content>
              </Item>
              <Item>
                <Item.Content verticalAlign="middle">
                  <NavLink
                    onClick={() => this.props.goToPage("/dynamics365")}
                    to="/dynamics365"
                    className="mobile-accordion"
                  >
                    Dynamics 365
                  </NavLink>
                </Item.Content>
              </Item>
            </Item.Group>
          </Accordion.Content>
        </Accordion>
      </Grid.Row>
    );
  }
}

export default MobileNav;
