import React, { Component, Fragment } from 'react'
import { Image, Grid } from 'semantic-ui-react'
import SubHeader from '../reusable/SubHeader';
import ImgDiv from '../reusable/ImgDiv';
import Carousel from '../reusable/Carousel';
import LoneParagraph from '../reusable/LoneParagraph';
import { company } from '../Data'
import Careers from './sections/Careers'
import ContractVehicles from './sections/ContractVehicles';
import Certifications from './sections/Certifications';
import OurTeam from './sections/OurTeam';
import Partners from './sections/Partners';
import About from './sections/About';


class Company extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      person: {
        name: "Jay Hajeer",
        role: "I built the ground you walk on",
        image: "andrea.jpeg",
        bio: "something clearly went wrong"
      },
      section: "about"
    };
  }

  componentDidMount() {
    // very hacky lol sorry
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
    if (this.state.section === "about") {
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

  toggleModal = person => {
    this.setState({
      open: !this.state.open,
      person: person ? person : {}
    });
  };

  render() {
    const { person, open } = this.state;

    const { partners, introList, contractRows, employees, execs } = company;

    return (
      <Fragment>
        <About introList={introList} />
        <Partners partners={partners} />
        <div className="bg-light-grey">
          <Certifications />
          <ContractVehicles contractRows={contractRows} />
        </div>
        <OurTeam toggleModal={this.toggleModal} open={open} employees={employees} person={person} execs={execs} />
        <Careers />
      </Fragment>
    );
  }
}

export default Company