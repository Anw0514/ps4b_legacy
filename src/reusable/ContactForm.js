import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import ReCAPTCHA from 'react-google-recaptcha'
import { toast } from "react-toastify";
import { contactForm } from '../Data'

class ContactForm extends Component {

    constructor() {
      super()
      this.state = {
          captcha: null,
          name: "",
          email: "",
          tellusmore: "",
          phonenumber: ""
      }
    }

    handleSubmit = (e) => {
      e.preventDefault()
      const { captcha, name, email, tellusmore, phonenumber } = this.state
      const valid = !!captcha && !!email && !!tellusmore && !!phonenumber && !!name && !!captcha 
      if (valid) {
        document.getElementById('form').submit()
        this.props.submitForm()
      } else {
        toast.error("Please check the form and resubmit")
      }
    }

    handleCaptcha = (captcha) => {
      this.setState({ captcha })
    }

    handleChange = (e, {id, value}) => {
      if (id === 'subject') {
        this.props.changeSubject(value)
      } else {
        const key = id.split("-").join("")
        this.setState({
          [key]: value
        })
      }
    }

    render() {

      return (
				<div className='text-left padded'>
					<Form
						id='form'
            action='http://analytics.clickdimensions.com/forms/h/aR0OIOK7EX0eCGJAY8Ne0A'
            method="POST"
					>
						<Form.Group widths='equal'>
							<Form.Input
								fluid
								id='name'
								name='name'
								label='Name'
								placeholder='Name'
								onChange={this.handleChange}
							/>
							<Form.Input
								fluid
								id='phone-number'
								name='phone-number'
								label='Phone Number'
								placeholder='Phone Number'
								onChange={this.handleChange}
							/>
						</Form.Group>
						<Form.Group widths='equal'>
							<Form.Input
								fluid
								id='email'
								name='email'
								label='Email'
								placeholder='Email'
								onChange={this.handleChange}
							/>
							<Form.Select
								fluid
								id='subject'
								name='subject'
								onChange={this.handleChange}
								label='Subject'
								options={contactForm.subjects}
								value={this.props.subject}
								placeholder='Choose a subject'
							/>
						</Form.Group>
						<Form.TextArea
							fluid
							id='tell-us-more'
							name='tell-us-more'
							label='Tell Us More'
							onChange={this.handleChange}
						/>
						<Button circular className='bg-blue m-top-1' onClick={this.handleSubmit}>
							Submit
						</Button>
					</Form>
          <ReCAPTCHA
            sitekey='6LdvRscUAAAAAGc-ciLEJnQQ3atePh1I8PiEjs6P'
            onChange={this.handleCaptcha}
          />
				</div>
			);
    }
}

export default ContactForm