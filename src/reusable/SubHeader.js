import React, { Component, Fragment } from "react";

class SubHeader extends Component {
  render() {
    const { title } = this.props
    return (
      <Fragment>
        <h3 className="fs-3">{title}</h3>
        <hr />
      </Fragment>
    );
  }
}

export default SubHeader;
