import React, { Component, Fragment } from "react";

class SubHeader extends Component {
  render() {
    const { title } = this.props
    return (
      <div className="subheader">
        <h3 className="fs-3">{title}</h3>
        <hr />
      </div>
    );
  }
}

export default SubHeader;
