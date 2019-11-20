import React, { Component } from 'react'
import { Menu, Grid, Image, Dropdown } from 'semantic-ui-react'
import { Link as NavLink } from 'react-router-dom'

class NavBar extends Component {

    constructor() {
        super()
        this.state = {
            mobile: true,
            dropdown: ""
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

    dropdown(dropdown) {
        this.setState({ dropdown })
    }

    close() {
        this.setState({ dropdown: "" })
    }

    render() {
        const { mobile, dropdown } = this.state

        return (
          <div className="navbar">
            <Grid>
              <Grid.Column
                floated="left"
                width={6}
                tablet={3}
                largeScreen={3}
                widescreen={3}
              >
                <NavLink to="/">
                  <Image src={require("../assets/PSI_Logo_Blue.png")} />
                </NavLink>
              </Grid.Column>
              <Grid.Column
                floated="right"
                width={10}
                tablet={10}
                largeScreen={8}
                widescreen={4}
                verticalAlign="middle"
                textAlign="right"
              >
                <Grid columns={4}>
                  <Grid.Column>
                    <NavLink to="/company">
                      <Dropdown
                        open={dropdown === "Company"}
                        text="Company"
                        onMouseEnter={() => this.dropdown("Company")}
                        onMouseLeave={() => this.close()}
                      >
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
                  <Grid.Column>
                    <Dropdown
                      open={dropdown === "Services"}
                      text="Services"
                      onMouseEnter={() => this.dropdown("Services")}
                      onMouseLeave={() => this.close()}
                    >
                      <Dropdown.Menu>
                        <NavLink to="/security-optimization">
                          <Dropdown.Item
                            className="nav-dropdown-item"
                            text="Security Optimization"
                          />
                        </NavLink>
                        <NavLink to="/workplace-modernization">
                          <Dropdown.Item
                            className="nav-dropdown-item"
                            text="Workplace Modernization"
                          />
                        </NavLink>
                        <NavLink to="/network-transformation">
                          <Dropdown.Item
                            className="nav-dropdown-item"
                            text="Network Transformation"
                          />
                        </NavLink>
                        <NavLink to="/data-center-consolidation">
                          <Dropdown.Item
                            className="nav-dropdown-item"
                            text="Data Center Consolidation"
                          />
                        </NavLink>
                        <NavLink to="/e-learning">
                          <Dropdown.Item
                            className="nav-dropdown-item"
                            text="e-Learning"
                          />
                        </NavLink>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Grid.Column>
                  <Grid.Column>
                    <NavLink to="/solutions">
                      <Dropdown
                        open={dropdown === "Solutions"}
                        text="Solutions"
                        onMouseEnter={() => this.dropdown("Solutions")}
                        onMouseLeave={() => this.close()}
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
                  <Grid.Column>
                    <Dropdown
                      open={dropdown === "Products"}
                      text="Products"
                      onMouseEnter={() => this.dropdown("Products")}
                      onMouseLeave={() => this.close()}
                    >
                      <Dropdown.Menu>
                        <Dropdown.Item
                          className="nav-dropdown-item"
                          text="Exchange Online"
                        />
                        <Dropdown.Item
                          className="nav-dropdown-item"
                          text="Microsoft 365"
                        />
                        <Dropdown.Item
                          className="nav-dropdown-item"
                          text="Office 365"
                        />
                        <Dropdown.Item
                          className="nav-dropdown-item"
                          text="Dynamics 365"
                        />
                      </Dropdown.Menu>
                    </Dropdown>
                  </Grid.Column>
                </Grid>
              </Grid.Column>
            </Grid>
          </div>
        );
    }
}

export default NavBar