import React, { Component, Fragment } from 'react'
import { List, Image, Grid, Table, Card, Modal } from 'semantic-ui-react'
import SubHeader from '../reusable/SubHeader';
import ImgDiv from '../reusable/ImgDiv';
import Carousel from '../reusable/Carousel';
import LoneParagraph from '../reusable/LoneParagraph';
import StyledList from '../reusable/StyledList'


// !!! extract all the consts to constructor method

class Company extends Component {

  constructor() {
    super()
    this.state = {
      open: false,
      person: { name: "Jay Hajeer", role: "I built the ground you walk on", image: "andrea.jpeg", bio: "something clearly went wrong" },
      section: "about"
    }
  }

  toggleModal = (person) => {
    this.setState({
      open: !this.state.open,
      person: person ? person : {}
    })
  }

  componentDidMount() {
    this.componentDidUpdate()
  }
  
  componentDidUpdate() {
    // !!! This way of getting the query only works when there's ONE
    const section = window.location.search.split("=")[1];
    if (section !== this.state.section) {
      this.setState({ section });
    }
    this.findAndScroll()
  }

  findAndScroll() {
    if (this.state.section === "about") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    } else {
      const section = document.getElementById(this.state.section);
      const xPos = this.offset(section) - 60
      window.scrollTo(0, xPos)
    }
  } 

  offset(el) {
    var rect = el.getBoundingClientRect(),
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop
  }


  buildCard(person) {
    return (
      <Card onClick={() => this.toggleModal(person)} fluid>
        <Image src={require(`../assets/ourteam/${person.image}`)} />
        <Card.Content className="text-left">
          <Card.Header>{ person.name }</Card.Header>
          <Card.Meta>{person.role}</Card.Meta>
        </Card.Content>
      </Card>
    )
  }

  buildPartners() {
    const imgNames = [
      ["z-imperium.png", "ibm-bp.png", "fire-eye-silver.png", "dell-technologies.jpg"],
      ["fortinet-gold.png", "click-dimensions.png", "silver-peak.png", "oracle.png"],
      ["redhat-ready.png", "vmware.png", "hp.png"]
    ];

    return imgNames.map(imgName => {

      return (
        <Grid centered columns={2}>
          <Grid.Row>
            <Grid.Column verticalAlign="middle">
              <Image
                centered
                src={require(`../assets/about/${imgName[0]}`)}
              />
            </Grid.Column>
            <Grid.Column verticalAlign="middle">
              {imgName[1] ? (
                <Image
                  centered
                  src={require(`../assets/about/${imgName[1]}`)}
                />
              ) : (
                  <div></div>
                )}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column verticalAlign="middle">
              {imgName[2] ? (
                <Image
                  centered
                  src={require(`../assets/about/${imgName[2]}`)}
                />
              ) : (
                  <div></div>
                )}
            </Grid.Column>
            {imgName[3] ? (
              <Grid.Column verticalAlign="middle">
                <Image
                  centered
                  src={require(`../assets/about/${imgName[3]}`)}
                />
              </Grid.Column>
            ) : null}
          </Grid.Row>
        </Grid>
      );
    })
  }







  render() {

    const introList = [
      "PSI serves several federal and commercial agencies of various sizes with administrative, engineering, and management challenges.",
      "PSI maintains a diverse portfolio that includes development, project management, e-Learning, and strategic planning in both business and IT.",
      "From certified project managers and business analysts to solution architects and developers, we fit the right resources to support clients with their business needs.",
      "We strategically partner with several industry leaders such as Microsoft, IBM, Oracle, and many more."
    ]

    const tableRows = [
      ["Contract #", "47QTCA18D007V"],
      ["Contractor", "PRACTICAL SOLUTIONS, INC."],
      ["Address", "20 F ST NW STE 700 WASHINGTON, DC 20001-6705"],
      ["Phone", "5713341395"],
      ["E-mail", "jhajeer@ps4b.com"],
      ["Web Address", "http://www.ps4b.com"],
      ["DUNS", "110321374"],
      ["NAICS", "541512"]
    ]

    const employees = [
      { name: "Samad Haider", role: "Dynamics Analyst", avitar: "samad.jpeg" },
      { name: "Sam Ashtar", role: "Software Engineer", avitar: "sam.jpeg" },
      { name: "Andrea Williams", role: "Internal Application Developer", avitar: "andrea.jpeg" },
      { name: "Leroy Okpara", role: "Jr Network Engineer", avitar: "leroy.jpeg" }
    ]

    const execs = {
      jay: {
        name: "Jay Hajeer",
        role: "CEO",
        image: "jay.jpeg",
        bio: [
          <p className="white">
            Since he founded the company in 1997, Mr. Hajeer
            has been instrumental in developing PSI into a
            modern high performance organization that embodies
            his vision: “We Deliver Practical Solutions!”
          </p>,
          <p className="white">
            Mr. Hajeer has built PSI into the trusted solution
            delivery partner of choice for our clients by drawing
            from his experience in leading technical programs and
            projects for several federal agencies as well as
            private sector entities.
          </p>,
          <p className="white">
            Mr. Hajeer’s vision for PSI is embodiedin his
            established approach known as Solution Delivery
            Methodology (SDM©). This structured methodology
            materialized gradually from the lessons learned in
            helping many organizations overcome Administrative,
            Engineering, and Management challenges.
          </p>
        ]
      },
      nik: { 
        name: "Nikolis Pirelli", 
        role: "Director of Data and Analytics", 
        image: "nik.jpeg", 
        bio: [
          <p className="white">
            Nikolis G. Pirelli is the Director of Data and 
            Analytics at PSI. He spent most of his professional 
            career involved in the entire spectrum of data, from 
            its creation and storage to its consumption and 
            communication.
          </p>,
          <p className="white">
            He has held several leadership and technical roles 
            throughout his career at various organizations and is 
            well-known for his efficient and realistic 
            methodologies along with his passion for data and its 
            role in business strategy.
          </p>,
          <p className="white">
            Mr. Pirelli holds a B.S. in Finance from Arizona State 
            University and a M.S. in Business Intelligence and 
            Analytics from Saint Joseph’s University.
          </p>
        ]
      },
      bob: { 
        name: "Bob Michels", 
        role: "President", 
        image: "bob.jpg", 
        bio: [
          <p className="white">
            Mr. Michels leads development and implementation of 
            PSI’s strategy for the public sector and overall growth. 
            His responsibilities include corporate direction, 
            business development, and smart business partnerships.
          </p>,
          <p className="white">
            Mr. Michels has over 41 years experience in the federal 
            sector prior to PSI. He has led the business growth of 
            several firms helping them navigate the public sector 
            marketplace. He was the Founder/CEO of Mobile Commerce & 
            Computing, Inc. which was the first company to develop 
            applications on hand-held devices.
          </p>,
          <p className="white">
            Mr. Michels has been featured a number of industry 
            publications such as Forbes, Washington Technology, New 
            York Reporter, and others.
          </p>
        ]
      },
      dave: { 
        name: "David Foresman", 
        role: "Vice President", 
        image: "dave.png", 
        bio: [
          <p className="white">
            David Foresman is Vice President at PSI. David is an 
            experienced management executive specializing in 
            Information Security, Program Management and Solution 
            delivery.
          </p>,
          <p className="white">
            David has been a key driver in business development 
            and has led technical operations providing technical 
            oversight and program management of several Federal 
            and commercial contracts.
          </p>,
          <p className="white">
            Prior to PSI, David served on the board of Evolver Inc. 
            and as the Director of the Knowledge management division. 
            He also served as Vice President of the Enterprise 
            services group for Business Strategies International.
          </p>
        ]
      }
    }

    const person = this.state.person

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
            slides={this.buildPartners()}
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
                  {tableRows.map(row => {
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