import React, { Component } from 'react'
import { Menu, Grid, Image, Dropdown, Icon } from 'semantic-ui-react'
import { Link as NavLink } from 'react-router-dom'
import MobileNav from './MobileNav'

class NavBar extends Component {

    render() {
      const { mobile, dropdown } = this.props

      return (
        <div className="navbar">
          <Grid>
            <Grid.Row>
              <Grid.Column
                floated="left"
                width={6}
                tablet={3}
                largeScreen={3}
                widescreen={3}
              >
                <NavLink onClick={() => this.props.goToPage("/")} to="/">
                  <Image src={require("../assets/PSI_Logo_Blue.png")} />
                </NavLink>
              </Grid.Column>
              {mobile ? (
                <Grid.Column
                  width={10}
                  floated="right"
                  textAlign="right"
                  verticalAlign="middle"
                  onClick={() => this.props.dropdownNav("mobile")}
                >
                  <Icon
                    className="mobile-dropdown clickable"
                    name="list ul"
                    size="large"
                  />
                </Grid.Column>
              ) : (
                <Grid.Column
                  floated="right"
                  width={10}
                  tablet={10}
                  largeScreen={8}
                  widescreen={6}
                  verticalAlign="middle"
                  textAlign="right"
                >
                  <Grid columns={4}>
                    <Grid.Column
                      onMouseEnter={() => this.props.dropdownNav("Company")}
                      onMouseLeave={() => this.props.closeNav()}
                    >
                      <NavLink
                        onClick={() => this.props.goToPage("/company")}
                        to="/company"
                      >
                        <Dropdown open={dropdown === "Company"} text="Company">
                          <Dropdown.Menu>
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="About"
                            />
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="Partners"
                            />
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="Certifications"
                            />
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="Contract Vehicles"
                            />
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="Our Team"
                            />
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="Careers"
                            />
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="Contact"
                            />
                          </Dropdown.Menu>
                        </Dropdown>
                      </NavLink>
                    </Grid.Column>
                    <Grid.Column
                      onMouseEnter={() => this.props.dropdownNav("Services")}
                      onMouseLeave={() => this.props.closeNav()}
                    >
                      <Dropdown open={dropdown === "Services"} text="Services">
                        <Dropdown.Menu>
                          <NavLink onClick={() => this.props.goToPage("/security-optimization")} to="/security-optimization">
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="Security Optimization"
                            />
                          </NavLink>
                          <NavLink onClick={() => this.props.goToPage("/workplace-modernization")} to="/workplace-modernization">
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="Workplace Modernization"
                            />
                          </NavLink>
                          <NavLink onClick={() => this.props.goToPage("/network-transformation")} to="/network-transformation">
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="Network Transformation"
                            />
                          </NavLink>
                          <NavLink onClick={() => this.props.goToPage("/data-center-consolidation")} to="/data-center-consolidation">
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="Data Center Consolidation"
                            />
                          </NavLink>
                          <NavLink onClick={() => this.props.goToPage("/e-learning")} to="/e-learning">
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="e-Learning"
                            />
                          </NavLink>
                          <NavLink onClick={() => this.props.goToPage("/managed-services")} to="/managed-services">
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="Managed Services"
                            />
                          </NavLink>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Grid.Column>
                    <Grid.Column
                      onMouseEnter={() => this.props.dropdownNav("Solutions")}
                      onMouseLeave={() => this.props.closeNav()}
                    >
                      <NavLink onClick={() => this.props.goToPage("/solutions")} to="/solutions">
                        <Dropdown
                          open={dropdown === "Solutions"}
                          text="Solutions"
                        >
                          <Dropdown.Menu>
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="Microsoft 365"
                            />
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="Business Apps"
                            />
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="Data and BI"
                            />
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="Apps & Infrastructure"
                            />
                          </Dropdown.Menu>
                        </Dropdown>
                      </NavLink>
                    </Grid.Column>
                    <Grid.Column
                      onMouseEnter={() => this.props.dropdownNav("Products")}
                      onMouseLeave={() => this.props.closeNav()}
                    >
                      <Dropdown open={dropdown === "Products"} text="Products">
                        <Dropdown.Menu>
                          <NavLink onClick={() => this.props.goToPage("/exchange-online")}  to="exchange-online">
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="Exchange Online"
                            />
                          </NavLink>
                          <NavLink onClick={() => this.props.goToPage("/microsoft365")} to="microsoft365">
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="Microsoft 365"
                            />
                          </NavLink>
                          <NavLink onClick={() => this.props.goToPage("/office365")}  to="office365">
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="Office 365"
                            />
                          </NavLink>
                          <NavLink onClick={() => this.props.goToPage("/dynamics365")}  to="dynamics365">
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="Dynamics 365"
                            />
                          </NavLink>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Grid.Column>
                  </Grid>
                </Grid.Column>
              )}
            </Grid.Row>
            {mobile && dropdown === "mobile" ? <MobileNav goToPage={this.props.goToPage} /> : null}
          </Grid>
        </div>
      );
    }
}

export default NavBar