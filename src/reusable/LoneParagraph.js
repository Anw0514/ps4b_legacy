import React, { Component } from "react";

class LoneParagraph extends Component {
  render() {
    return (
      <div className="narrow-section bg-white lone-paragraph">
        <p className='drop-cap text-left'>
        {this.props.text}
        </p>
      </div>
    );
  }
}

export default LoneParagraph;
