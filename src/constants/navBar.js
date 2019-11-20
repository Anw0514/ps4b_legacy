import React, { Component } from 'react'
import { Menu, Grid, Image, Dropdown } from 'semantic-ui-react'

class NavBar extends Component {

    constructor() {
        super()
        this.state = {
            mobile: true
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

    render() {
        return (
          <div className="navbar">
            <Grid>
              <Grid.Column floated="left" width={6}>
                <Image src={require("../assets/PSI_Logo_Blue.png")} />
              </Grid.Column>
              <Grid.Column
                floated="right"
                width={8}
                verticalAlign="middle"
                textAlign="right"
              >
                <Grid columns={4}>
                  <Grid.Column>
                    <Dropdown pointing text="Company">
                      <Dropdown.Menu>
                        <Dropdown.Item text="About" />
                        <Dropdown.Item text="Partners" />
                        <Dropdown.Item text="Certifications" />
                        <Dropdown.Item text="Contract Vehicles" />
                        <Dropdown.Item text="Our Team" />
                        <Dropdown.Item text="Careers" />
                        <Dropdown.Item text="Contact" />
                      </Dropdown.Menu>
                    </Dropdown>
                  </Grid.Column>
                  <Grid.Column>
                    <Dropdown pointing text="Services">
                      <Dropdown.Menu>
                        <Dropdown.Item text="Security Optimization" />
                        <Dropdown.Item text="Workplace Modernization" />
                        <Dropdown.Item text="Network Transformation" />
                        <Dropdown.Item text="Data Center Consolidation" />
                        <Dropdown.Item text="e-Learning" />
                      </Dropdown.Menu>
                    </Dropdown>
                  </Grid.Column>
                  <Grid.Column>
                    <Dropdown pointing text="Solutions">
                      <Dropdown.Menu>
                        <Dropdown.Item text="Microsoft 365" />
                        <Dropdown.Item text="Business Apps" />
                        <Dropdown.Item text="Data and BI" />
                        <Dropdown.Item text="Apps & Infrastructure" />
                      </Dropdown.Menu>
                    </Dropdown>
                  </Grid.Column>
                  <Grid.Column>
                    <Dropdown pointing text="Products">
                      <Dropdown.Menu>
                        <Dropdown.Item text="Exchange Online" />
                        <Dropdown.Item text="Microsoft 365" />
                        <Dropdown.Item text="Office 365" />
                        <Dropdown.Item text="Dynamics 365" />
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