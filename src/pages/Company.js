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

  buildPartner(partner) {
    return (
      <Grid centered columns={2}>
        <Grid.Row>
          <Grid.Column verticalAlign="middle">
            <Image centered src={require(`../assets/about/${partner[0]}`)} />
          </Grid.Column>
          <Grid.Column verticalAlign="middle">
            {partner[1] ? (
              <Image centered src={require(`../assets/about/${partner[1]}`)} />
            ) : (
              <div></div>
            )}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column verticalAlign="middle">
            {partner[2] ? (
              <Image centered src={require(`../assets/about/${partner[2]}`)} />
            ) : (
              <div></div>
            )}
          </Grid.Column>
          {partner[3] ? (
            <Grid.Column verticalAlign="middle">
              <Image centered src={require(`../assets/about/${partner[3]}`)} />
            </Grid.Column>
          ) : null}
        </Grid.Row>
      </Grid>
    );
  }

  render() {
    const { person, open } = this.state;

    const { partners, introList, contractRows, employees, execs } = company;

    return (
      <Fragment>
        <div id="about" className="bg-light-grey">
          <SubHeader title="Introduction" marginBottom paddingTop />
          <LoneParagraph
            text={[
              "Practical Solutions Inc (PSI) was founded in 1997 by Mr. JayHajeer, who led the development of PSI into a modernhigh-performance global organization that embodies his vision: “We Deliver Practical Solutions”"
            ]}
            list={introList}
          />
          <SubHeader
            title="Our Methodology and Differentiators"
            marginBottom
            marginTop
          />
          <ImgDiv
            image={require("../assets/about/about.jpg")}
            list={[
              "Many of our services and products are paired with eLearning so clients get a faster ROI by having a more prepared team following implementation of new solution.",
              "A lot of companies will offer text book solutions to their customers, we dig in, understand the company, its unique characteristics and provide a solution that is practical and unique.",
              "Our ongoing Reputation and relationships are more important to us than a quick profit. Our solutions are designed to be sustainable within your organization beyond our relationship.",
              "PSI has a seasoned team with decades of experience, click here to view our team.",
              "100% US Based team serving global clients."
            ]}
          />
          <div className="filler" />
        </div>
        <div id="partners" className="bg-white">
          <SubHeader title="Our Partners" paddingTop marginBottom />
          <Carousel
            arrows
            width="hella-narrow-width"
            slides={partners.map(partner => this.buildPartner(partner))}
            show={1}
            scroll={1}
          />
          <div className="filler" />
        </div>
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