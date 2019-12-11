import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import ContactForm from '../reusable/ContactForm'

class Contact extends Component {
    render() {
        return (
            <div className="bg-light-grey">
                <Grid stretched stackable columns={3} relaxed className="narrow-width">
                    <Grid.Column>
                        <div className="bg-white rounded-corners">
                            <h6>Headquarters</h6>
                            <p>
                                20 F Street NW, Suite 700 <br />
                                Washington, DC 20001 <br/>
                                USA
                            </p>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className="bg-white rounded-corners">
                            <h6>Hours</h6>
                            <p>
                                Mon - Fri <br />
                                9:00 a.m. - 6:00 p.m. EST
                            </p>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className="bg-white rounded-corners">
                            <h6>Phone Number</h6>
                            <p>+1 (202)239-6247</p>
                            <h6>Email</h6>
                            <p>info@ps4b.com</p>
                        </div>
                    </Grid.Column>
                </Grid>
                <div className="filler" />
                <div className="hella-narrow-width">
                    <div className="bg-white rounded-corners padded">
                        <ContactForm />
                    </div>
                </div>
                <div className="filler" />
            </div>
        )
    }
}

export default Contact