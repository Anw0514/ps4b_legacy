import React, { Component } from "react";

class StyledList extends Component {
  render() {
    const indented = this.props.indented ? "indented" : null
    return (
      <ul className={`grey ${indented}`}>
        {this.props.items.map(item => {
          return (
            <li className="list-item">
              <p>{item}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default StyledList;
