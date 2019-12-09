import React, { Component } from "react";

class IconParagraph extends Component {
  render() {
    const { title, iconName, content } = this.props
    return (
      <div>
        <span className={`icon-${iconName} fs-7`} style={{ fontWeight: "600" }}></span>
        <h6 className="fs-2">{title}</h6>
        {content ?
          <p>{content}</p> 
        : null}
      </div>
    );
  }
}

export default IconParagraph;
