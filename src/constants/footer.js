import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'

class Footer extends Component {
    render() {
        return (
            <div className="bg-blue fluid hella-padded">
                <Grid stackable centered>
                    <Grid.Column verticalAlign="middle" className="text-center" width={11}>
                        <h1 className="white fs-3" >How can we help? Schedule a free consultation!</h1>
                    </Grid.Column>
                    <Grid.Column verticalAlign="middle" width={5}>
                        <Button circular inverted size="big">Contact Us</Button>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default Footer