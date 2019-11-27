import React, { Component, Fragment } from "react";

class SubHeader extends Component {
  render() {
    const { title, marginTop, marginBottom, paddingTop } = this.props
    const t = marginTop ? "m-top-3" : ""
    const b = marginBottom ? "m-botttom-3" : ""
    const p = paddingTop ? "top-pad-3" : ""
    return (
      <div className={`${t} ${b} ${p}`}>
        <h3 className="fs-3">{title}</h3>
        <hr />
      </div>
    );
  }
}

export default SubHeader;
