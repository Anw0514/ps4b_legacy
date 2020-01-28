import React, { Component } from 'react'
import { solutions } from '../Data'
import Microsoft365 from './sections/Microsoft365'
import AppsAndInfrastructure from './sections/AppsAndInfrastructure'
import BusinessApps from './sections/BusinessApps'
import DataAndBI from './sections/DataAndBI'

// !!! scroll shit is not dry at alllllll
class Solutions extends Component {
  constructor() {
    super();
    this.state = {
        section: ""
    }
  }

  componentDidMount() {
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    // !!! This way of getting the query only works when there's ONE
    const section = window.location.search.split("section=")[1];
    // if you end up with multiple queries in the url, uncomment the next line and use actualSection instead of section from then on
    // const actualSection = section.split("&")[0]
    if (section !== this.state.section) {
      this.setState({ section }, this.findAndScroll);
    }
  }

  findAndScroll() {
    if (this.state.section === "microsoft365") {
      window.scrollTo(0, 0);
    } else {
      const section = document.getElementById(this.state.section);
      const xPos = this.offset(section) - 60;
      window.scrollTo(0, xPos);
    }
  }

  offset(el) {
    var rect = el.getBoundingClientRect(),
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop;
  }

  render() {

    const { microsoftColumnData, iconObjects, altMedia } = solutions
    return (
      <div>
        <Microsoft365 microsoftColumnData={microsoftColumnData} />
        <div className="filler" />
        <AppsAndInfrastructure />
        <BusinessApps iconObjects={iconObjects} />
        <DataAndBI altMedia={altMedia} />
      </div>
    );
  }
}

export default Solutions