import React, { Component } from 'react'
import { Grid, Button, Image, Icon } from 'semantic-ui-react'

class Footer extends Component {
    render() {
        return (
            <div className="bg-blue-2 fluid pretty-padded">
                <Grid doubling centered columns={5} className='regular-width'>
                    <Grid.Column verticalAlign="middle" textAlign='right'>
                        <Image src={require('../assets/PSI_Logo_Dark.png')} floated='right' />
                    </Grid.Column>
                    <Grid.Column verticalAlign="middle" className="text-left">
                        <h2 className="white fs-2" >Headquarters</h2>
                        <p className="white fs-0">
                            20 F Street NW, Suite 700 <br />
                            Washington, DC 20001 <br />
                            USA
                        </p>
                    </Grid.Column>
                    <Grid.Column verticalAlign="middle" textAlign='left'>
                        <h2 className="white fs-1" >Privacy Policy</h2>
                        <h2 className="white fs-1" >Other Locations</h2>
                        <p className="white indented-s fs-0">
                            McLean, Virginia<br />
                            West Chester Pennsylvania<br />
                            Phoenix, Arizona
                        </p>
                    </Grid.Column>
                    <Grid.Column verticalAlign="middle" textAlign='left'>
                        <h2 className="white fs-1" >Give Us a Call</h2>
                        <p className="white">+1 (202)239-6247</p>
                        <h2 className="white fs-1" >Email Us</h2>
                        <p className="white">info@ps4b.com</p>
                    </Grid.Column>
                    <Grid.Column verticalAlign="middle" textAlign='left'>
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