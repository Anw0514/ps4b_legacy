import React, { Component } from "react";

class IconParagraph extends Component {
  render() {
    return (
      <div>
        <span className={`icon-${this.props.iconName} fs-5`}></span>
        <h4>{this.props.title}</h4>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default IconParagraph;
