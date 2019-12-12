import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import ReCAPTCHA from 'react-google-recaptcha'
import { toast } from "react-toastify";

class ContactForm extends Component {

    constructor() {
        super()
        this.state = {
            captcha: null
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (!!this.state.captcha) {
            console.log("submitted!")
            // !!! document.getElementById('form').submit()
            toast.success("Successfully submitted form")
        } else {
            console.log("form didn't submit :/")
            toast.error("Please check the form and resubmit")
        }
    }

    handleCaptcha = (captcha) => {
        this.setState({ captcha })
    }

    render() {

        const subjects = [
            { key: "1", text: "Security Optimization", value: "1" },
            { key: "2", text: "Data Center Consolidation", value: "2" },
            { key: "3", text: "e-Learning", value: "3" },
            { key: "4", text: "Network Transformation", value: "4" },
            { key: "5", text: "Workplace Modernization", value: "5" },
            { key: "6", text: "Microsoft 365 Solutions", value: "6" },
            { key: "7", text: "Microsoft 365 Products", value: "7" },
            { key: "8", text: "Business Apps", value: "8" },
            { key: "9", text: "Data and BI", value: "9" },
            { key: "10", text: "Apps and Infrastructure", value: "10" },
            { key: "11", text: "Exchange Online", value: "11" },
            { key: "12", text: "Office 365", value: "12" },
            { key: "13", text: "Dynamics 365", value: "13" }
        ]

        return (
          <Form
            id="form"
            className="text-left padded"
            action="http://analytics.clickdimensions.com/forms/h/aR0OIOK7EX0eCGJAY8Ne0A"
          >
            <Form.Group widths="equal">
              <Form.Input fluid id="name" label="Name" placeholder="Name" />
              <Form.Input
                fluid
                id="phone-number"
                label="Phone Number"
                placeholder="Phone Number"
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input fluid id="email" label="Email" placeholder="Email" />
              <Form.Select
                fluid
                id="subject"
                onChange={this.props.changeSubject}
                label="Subject"
                options={subjects}
                value={this.props.subject}
                placeholder="Choose a subject"
              />
            </Form.Group>
            <Form.TextArea fluid id="tell-us-more" label="Tell Us More" />
            <ReCAPTCHA
              sitekey="6LdvRscUAAAAAGc-ciLEJnQQ3atePh1I8PiEjs6P"
              onChange={this.handleCaptcha}
            />
            <Button circular className="bg-blue m-top-1" onClick={this.handleSubmit}>
              Submit
            </Button>
          </Form>
        );
    }
}

export default ContactForm