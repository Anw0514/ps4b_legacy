import React, { Component } from "react";
import { List, Button } from 'semantic-ui-react'
import StyledList from "./StyledList";

class LoneParagraph extends Component {

  render() {
    const { text, list, contact, contactText } = this.props
    const first_paragraph = text.shift()
    return (
      <div className="narrow-width bg-white lone-paragraph text-left rounded-corners">
        <p className='drop-cap'>
          {first_paragraph}
        </p>
        {text.map(paragraph => {
          return <p>{paragraph}</p>
        })}
        { list ? <StyledList indented items={list} /> : null}
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
