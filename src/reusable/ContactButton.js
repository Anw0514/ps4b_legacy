import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'

class ContactButton extends Component {
    render() {
        return (
            <div className="bg-blue fluid hella-padded">
                <Grid stackable centered>
                    <Grid.Column verticalAlign="middle" className="text-center" width={11}>
                        <h4 className="white" >How can we help? Schedule a free consultation!</h4>
                    </Grid.Column>
                    <Grid.Column verticalAlign="middle" width={5}>
                        <Button circular inverted size="big" onClick={this.props.open}>Contact Us</Button>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default ContactButton