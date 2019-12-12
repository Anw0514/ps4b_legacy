import React, { Component } from 'react'
import { Grid, Image, Icon } from 'semantic-ui-react'

class Footer extends Component {
    render() {
        return (
          <div className="bg-blue-2 fluid padded">
            <Grid
              doubling
              stackable
              centered
              columns={5}
              className="footer-grid"
            >
              <Grid.Column verticalAlign="middle">
                <Image src={require("../assets/PSI_Logo_Dark.png")} centered />
              </Grid.Column>
              <Grid.Column verticalAlign="middle" className="text-left">
                <h6 className="white">Headquarters</h6>
                <p className="white">
                  20 F Street NW, Suite 700 <br />
                  Washington, DC 20001 <br />
                  USA
                </p>
              </Grid.Column>
              <Grid.Column verticalAlign="middle" textAlign="left">
                <h6 className="white fs-2">Privacy Policy</h6>
                <h6 className="white fs-2">Other Locations</h6>
                <p className="white indented-s">
                  McLean, Virginia
                  <br />
                  West Chester Pennsylvania
                  <br />
                  Phoenix, Arizona
                </p>
              </Grid.Column>
              <Grid.Column verticalAlign="middle" textAlign="left">
                <h6 className="white">Give Us a Call</h6>
                <p className="white">+1 (202)239-6247</p>
                <h6 className="white">Email Us</h6>
                <p className="white">info@ps4b.com</p>
              </Grid.Column>
              <Grid.Column verticalAlign="middle">
                <Grid columns={2} relaxed>
                  <Grid.Row>
                    <Grid.Column>
                      <Icon
                        name="linkedin alternate"
                        size="big"
                        className="white clickable"
                        onClick={() => {
                            window.location.assign(
                              "https://www.linkedin.com/company/practical-solutions-inc-/"
                            );
                        }}
                      />
                    </Grid.Column>
                    <Grid.Column>
                      <Icon
                        name="youtube"
                        size="big"
                        className="white clickable"
                        onClick={() => {
                            window.location.assign(
                              "https://www.youtube.com/channel/UC48iAEISc55XhEs2sDV9TFg/"
                            );
                        }}
                      />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
            </Grid>
          </div>
        );
    }
}

export default Footer