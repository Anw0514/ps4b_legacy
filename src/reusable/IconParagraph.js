import React, { Component } from "react";

class IconParagraph extends Component {
  render() {
    const { title, iconName, content } = this.props
    return (
      <div>
        <span className={`icon-${iconName} fs-5`} style={{ fontWeight: "600" }}></span>
        <h4>{title}</h4>
        {content ?
          <p>{content}</p> 
        : null}
      </div>
    );
  }
}

export default IconParagraph;
