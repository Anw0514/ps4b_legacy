import React, { Component } from "react";

class LoneParagraph extends Component {
  render() {
    const first_paragraph = this.props.text.shift()

    return (
      <div className="narrow-section bg-white lone-paragraph text-left">
        <p className='drop-cap'>
        {first_paragraph}
        </p>
        {text.map(paragraph => {
          return <p>{paragraph}</p>
        })}
      </div>
    );
  }
}

export default LoneParagraph;
