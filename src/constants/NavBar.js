import React, { Component } from 'react'
import { Grid, Image, Dropdown, Icon } from 'semantic-ui-react'
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
                      <Dropdown open={dropdown === "Company"} text="Company">
                        <Dropdown.Menu>
                          <NavLink
                            onClick={() => this.props.goToPage("/company")}
                            to="/company?section=about"
                          >
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="About"
                            />
                          </NavLink>
                          <NavLink
                            onClick={() => this.props.goToPage("/company")}
                            to="/company?section=partners"
                          >
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="Partners"
                            />
                          </NavLink>
                          <NavLink
                            onClick={() => this.props.goToPage("/company")}
                            to="/company?section=certifications"
                          >
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="Certifications"
                            />
                          </NavLink>
                          <NavLink
                            onClick={() => this.props.goToPage("/company")}
                            to="/company?section=contractvehicles"
                          >
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="Contract Vehicles"
                            />
                          </NavLink>
                          <NavLink
                            onClick={() => this.props.goToPage("/company")}
                            to="/company?section=ourteam"
                          >
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="Our Team"
                            />
                          </NavLink>
                          <NavLink
                            onClick={() => this.props.goToPage("/company")}
                            to="/company?section=careers"
                          >
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="Careers"
                            />
                          </NavLink>
                          <NavLink
                            onClick={() => this.props.goToPage("/contact")}
                            to="/contact"
                          >
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="Contact"
                            />
                          </NavLink>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Grid.Column>
                    <Grid.Column
                      onMouseEnter={() => this.props.dropdownNav("Services")}
                      onMouseLeave={() => this.props.closeNav()}
                    >
                      <Dropdown open={dropdown === "Services"} text="Services">
                        <Dropdown.Menu>
                          <NavLink
                            onClick={() =>
                              this.props.goToPage("/security-optimization", "1")
                            }
                            to="/security-optimization"
                          >
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="Security Optimization"
                            />
                          </NavLink>
                          <NavLink
                            onClick={() =>
                              this.props.goToPage(
                                "/workplace-modernization",
                                "5"
                              )
                            }
                            to="/workplace-modernization"
                          >
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="Workplace Modernization"
                            />
                          </NavLink>
                          <NavLink
                            onClick={() =>
                              this.props.goToPage(
                                "/network-transformation",
                                "4"
                              )
                            }
                            to="/network-transformation"
                          >
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="Network Transformation"
                            />
                          </NavLink>
                          <NavLink
                            onClick={() =>
                              this.props.goToPage(
                                "/data-center-consolidation",
                                "2"
                              )
                            }
                            to="/data-center-consolidation"
                          >
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="Data Center Consolidation"
                            />
                          </NavLink>
                          <NavLink
                            onClick={() =>
                              this.props.goToPage("/e-learning", "3")
                            }
                            to="/e-learning"
                          >
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="e-Learning"
                            />
                          </NavLink>
                          <NavLink
                            onClick={() =>
                              this.props.goToPage("/managed-services")
                            }
                            to="/managed-services"
                          >
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
                      <Dropdown
                        open={dropdown === "Solutions"}
                        text="Solutions"
                      >
                        <Dropdown.Menu>
                          <NavLink
                            onClick={() =>
                              this.props.goToPage("/solutions", "6")
                            }
                            to="/solutions?section=microsoft365"
                          >
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="Microsoft 365"
                            />
                          </NavLink>
                          <NavLink
                            onClick={() =>
                              this.props.goToPage("/solutions", "8")
                            }
                            to="/solutions?section=businessapps"
                          >
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="Business Apps"
                            />
                          </NavLink>
                          <NavLink
                            onClick={() =>
                              this.props.goToPage("/solutions", "9")
                            }
                            to="/solutions?section=dataandbi"
                          >
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="Data and BI"
                            />
                          </NavLink>
                          <NavLink
                            onClick={() =>
                              this.props.goToPage("/solutions", "10")
                            }
                            to="/solutions?section=appsandinfrastructure"
                          >
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="Apps & Infrastructure"
                            />
                          </NavLink>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Grid.Column>
                    <Grid.Column
                      onMouseEnter={() => this.props.dropdownNav("Products")}
                      onMouseLeave={() => this.props.closeNav()}
                    >
                      <Dropdown open={dropdown === "Products"} text="Products">
                        <Dropdown.Menu>
                          <NavLink
                            onClick={() =>
                              this.props.goToPage("/exchange-online", "11")
                            }
                            to="exchange-online"
                          >
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="Exchange Online"
                            />
                          </NavLink>
                          <NavLink
                            onClick={() =>
                              this.props.goToPage("/microsoft365", "7")
                            }
                            to="microsoft365"
                          >
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="Microsoft 365"
                            />
                          </NavLink>
                          <NavLink
                            onClick={() =>
                              this.props.goToPage("/office365", "12")
                            }
                            to="office365"
                          >
                            <Dropdown.Item
                              className="nav-dropdown-item"
                              text="Office 365"
                            />
                          </NavLink>
                          <NavLink
                            onClick={() =>
                              this.props.goToPage("/dynamics365", "13")
                            }
                            to="dynamics365"
                          >
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
            {mobile && dropdown === "mobile" ? (
              <MobileNav goToPage={this.props.goToPage} />
            ) : null}
          </Grid>
        </div>
      );
    }
}

export default NavBar
