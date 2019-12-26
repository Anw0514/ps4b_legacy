import React, { Component, Fragment } from 'react'
import { Image, Grid, Table, Card, Modal } from 'semantic-ui-react'
import SubHeader from '../reusable/SubHeader';
import ImgDiv from '../reusable/ImgDiv';
import Carousel from '../reusable/Carousel';
import LoneParagraph from '../reusable/LoneParagraph';
import StyledList from '../reusable/StyledList'
import { company } from '../Data'


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

  buildCard(person) {
    return (
      <Card onClick={() => this.toggleModal(person)} fluid>
        <Image src={require(`../assets/ourteam/${person.image}`)} />
        <Card.Content className="text-left">
          <Card.Header>{person.name}</Card.Header>
          <Card.Meta>{person.role}</Card.Meta>
        </Card.Content>
      </Card>
    );
  }

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
    const person = this.state.person;

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
        <div id="certifications" className="bg-light-grey">
          <SubHeader title="Certifications" paddingTop />
          <div className="hella-narrow-width bg-white lone-paragraph text-left rounded-corners">
            <p className="drop-cap">
              PSI embodies a process of continues improvement which drives us to
              seek industry recognized certifications and credentials.
            </p>
            <StyledList
              indented
              items={[
                "2018: Capability Maturity Model Integration (CMMI) Development (DEV) and CMMI Services (SVC) appraisals at maturity level 3",
                "2018: ISO X000",
                "2012: Practical Solutions, Inc. (PSI) became a U.S. Small Business Administration (SBA) certified 8(a) Disadvantaged Small Business (DSB) and Economically Disadvantaged Small Business (EDSB)."
              ]}
            />
            <p>
              Members of our team maintain certifications and continued
              professional development in their fields along with valuable
              memberships and positions with outside agencies.
            </p>
            <StyledList
              indented
              items={[
                "Project Management Institute (PMI) Staff members certified",
                "Information Technology Infrastructure Library (ITIL®)",
                "International Information Systems Security Certification Consortium ((ISC)²)",
                "TBM Council"
              ]}
            />
          </div>
          <div id="contractvehicles" className="filler" />
          <SubHeader title="Contract Vehicles" paddingTop />
          <Grid stackable className="regular-width" relaxed="very">
            <Grid.Column stretched width={7}>
              <Table className="cv-table fluid" celled>
                <Table.Body>
                  {contractRows.map(row => {
                    return (
                      <Table.Row>
                        <Table.Cell className="cv-head-cell">
                          {row[0]}
                        </Table.Cell>
                        <Table.Cell>{row[1]}</Table.Cell>
                      </Table.Row>
                    );
                  })}
                </Table.Body>
              </Table>
            </Grid.Column>
            <Grid.Column stretched width={9}>
              <Table className="cv-table" celled>
                <Table.Header>
                  <Table.Row>
                    <Table.Cell className="cv-head-cell">SIN</Table.Cell>
                    <Table.Cell className="cv-head-cell">SIN Title</Table.Cell>
                    <Table.Cell className="cv-head-cell">NAICS</Table.Cell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>132 51</Table.Cell>
                    <Table.Cell>
                      Information Technology Professional Services
                    </Table.Cell>
                    <Table.Cell>541511, 541512, 541513, 541519</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>132 40</Table.Cell>
                    <Table.Cell>
                      Cloud Computing Services – SUBJECT TO COOPERATIVE
                      PURCHASING
                    </Table.Cell>
                    <Table.Cell>518210</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
              <Table className="cv-table" celled>
                <Table.Header>
                  <Table.Row>
                    <Table.Cell className="cv-head-cell">SIN</Table.Cell>
                    <Table.Cell className="cv-head-cell">SIN Title</Table.Cell>
                    <Table.Cell className="cv-head-cell">NAICS</Table.Cell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>132 51</Table.Cell>
                    <Table.Cell>
                      Information Technology Professional Services
                    </Table.Cell>
                    <Table.Cell>541511, 541512, 541513, 541519</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>132 40</Table.Cell>
                    <Table.Cell>
                      Cloud Computing Services – SUBJECT TO COOPERATIVE
                      PURCHASING
                    </Table.Cell>
                    <Table.Cell>518210</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Column>
          </Grid>
          <div className="filler" />
        </div>
        <div id="ourteam" className="bg-white regular-width">
          <SubHeader title="Our Team" paddingTop marginBottom />
          <Grid verticalAlign="middle" stackable columns={3}>
            <Grid.Column width={5}>
              {this.buildCard(execs.jay, 1)}
              {this.buildCard(execs.bob, 2)}
            </Grid.Column>
            <Grid.Column width={5}>
              {this.buildCard(execs.nik, 3)}
              {this.buildCard(execs.dave, 4)}
            </Grid.Column>
            <Grid.Column width={6}>
              <Grid verticalAlign="middle">
                {employees.map(e => {
                  return (
                    <Grid.Row>
                      <Grid.Column
                        style={{ objectFit: "contain", paddingRight: "0" }}
                        width={5}
                      >
                        <Image
                          circular
                          fluid
                          src={require(`../assets/ourteam/${e.avitar}`)}
                        />
                      </Grid.Column>
                      <Grid.Column width={11}>
                        {window.innerWidth > 768 ? (
                          <div>
                            <h1 className="fs-2">{e.name}</h1>
                            <p>{e.role}</p>
                          </div>
                        ) : (
                          <div>
                            <h3>{e.name}</h3>
                            <p className="fs-5">{e.role}</p>
                          </div>
                        )}
                      </Grid.Column>
                    </Grid.Row>
                  );
                })}
              </Grid>

              <Modal
                closeIcon
                dimmer="blurring"
                basic
                open={this.state.open}
                onClose={() =>
                  this.toggleModal({
                    name: "Jay Hajeer",
                    role: "I built the ground you walk on",
                    image: "andrea.jpeg",
                    bio: "something clearly went wrong"
                  })
                }
              >
                <Modal.Header>
                  {person.name} - {person.role}
                </Modal.Header>
                <Modal.Content scrolling>
                  <Modal.Description>
                    <Image
                      size="medium"
                      floated="left"
                      src={require(`../assets/ourteam/${person.image}`)}
                    />
                    {person.bio}
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </Grid.Column>
          </Grid>
          <div className="filler" />
        </div>
        <div id="careers" className="bg-light-grey">
          <SubHeader title="Careers" paddingTop marginBottom />
          <ImgDiv
            image={require("../assets/about/careers.jpg")}
            paragraphs={[
              "Practical Solutions, Inc. (PSI) is looking for highly motivated and highly skilled individuals who believe in our mission “Turn Chaos into Order” and are ready for exciting opportunities with a growing company. The PSI team hold themselves to very high standards, both professionally and ethically. All our employees are expected to expand their existing skillset and develop new skills in different areas to support our mission. Each employee prides themselves on their commitment to the company, ability to add value and contribute to our growth and success.",
              "PSI is eagerly seeking talented, creative, and flexible problem solvers to join our growing team. We continue to expand our internal operations, consulting, and staffing services divisions. PSI is an Equal Opportunity Employer and we are always accepting resumes and actively looking for partners. If you are interested in opportunities at PSI, send in your resume and salary requirements to jobs@ps4b.com."
            ]}
          />
          <div className="filler" />
        </div>
      </Fragment>
    );
  }
}

export default Company