import React, { Component } from "react";
import { List, Button } from 'semantic-ui-react'

class LoneParagraph extends Component {

  render() {
    const { text, list, contact, contactText } = this.props
    const first_paragraph = text.shift()
    return (
      <div className="narrow-section bg-white lone-paragraph text-left rounded-corners">
        <p className='drop-cap'>
          {first_paragraph}
        </p>
        {text.map(paragraph => {
          return <p>{paragraph}</p>
        })}
        { list ? <List className="grey indented" bulleted size="large" items={list} /> : null}
        { contact ? (
          <Button circular className="bg-blue"> 
            { contactText ? contactText : "Contact Us!" }
          </Button>
        ) : null }
      </div>
    );
  }
}

export default LoneParagraph;
