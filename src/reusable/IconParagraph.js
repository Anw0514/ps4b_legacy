import React, { Component } from "react";

class IconParagraph extends Component {
  render() {
    return (
      <div>
        <span className={`icon-${this.props.iconName} fs-5`}></span>
        <h5>{this.props.title}</h5>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default IconParagraph;
