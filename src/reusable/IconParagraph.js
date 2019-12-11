import React, { Component } from "react";
import StyledList from "./StyledList";

class IconParagraph extends Component {
  render() {
    const { title, iconName, paragraph, list } = this.props
    return (
      <div>
        <span className={`icon-${iconName} fs-7`} style={{ fontWeight: "600" }}></span>
        <h6 className="fs-2">{title}</h6>
        {paragraph ?
          <p>{paragraph}</p> 
        : null}
        {list ?
          <StyledList items={list} />
        : null}
      </div>
    );
  }
}

export default IconParagraph;
