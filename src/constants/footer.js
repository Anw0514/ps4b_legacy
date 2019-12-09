import React, { Component } from 'react'
import { Grid, Button, Image, Icon } from 'semantic-ui-react'

class Footer extends Component {
    render() {
        return (
            <div className="bg-blue-2 fluid pretty-padded">
                <Grid doubling stackable centered columns={5} className='footer-grid'>
                    <Grid.Column verticalAlign="middle">
                        <Image src={require('../assets/PSI_Logo_Dark.png')} centered />
                    </Grid.Column>
                    <Grid.Column verticalAlign="middle" className="text-left">
                        <h4 className="white" >Headquarters</h4>
                        <p className="white">
                            20 F Street NW, Suite 700 <br />
                            Washington, DC 20001 <br />
                            USA
                        </p>
                    </Grid.Column>
                    <Grid.Column verticalAlign="middle" textAlign='left'>
                        <h6 className="white" >Privacy Policy</h6>
                        <h6 className="white" >Other Locations</h6>
                        <p className="white indented-s">
                            McLean, Virginia<br />
                            West Chester Pennsylvania<br />
                            Phoenix, Arizona
                        </p>
                    </Grid.Column>
                    <Grid.Column verticalAlign="middle" textAlign='left'>
                        <h5 className="white" >Give Us a Call</h5>
                        <p className="white">+1 (202)239-6247</p>
                        <h5 className="white" >Email Us</h5>
                        <p className="white">info@ps4b.com</p>
                    </Grid.Column>
                    <Grid.Column verticalAlign="middle">
                        <Grid columns={2} relaxed>
                            <Grid.Row>
                                <Grid.Column>
                                    <Icon name='linkedin alternate' size='big' />
                                </Grid.Column>
                                <Grid.Column>
                                    <Icon name='twitter square' size='big' />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Icon name='facebook square' size='big' />
                                </Grid.Column>
                                <Grid.Column>
                                    <Icon name='youtube' size='big' />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default Footer