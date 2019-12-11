import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class ContactForm extends Component {
    render() {
        return (
            <Form>
                <Form.Group widths="equal">
                    <Form.Input fluid />
                    <Form.Input fluid />
                    <Form.Input fluid />
                </Form.Group>
            </Form>
        )
    }
}

export default ContactForm