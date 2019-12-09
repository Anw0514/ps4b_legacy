import React, { Component, Fragment } from 'react'
import { List, Image, Grid, Table, Card } from 'semantic-ui-react'
import SubHeader from '../reusable/SubHeader';
import ImgDiv from '../reusable/ImgDiv';
import Carousel from '../reusable/Carousel';
import LoneParagraph from '../reusable/LoneParagraph';
import StyledList from '../reusable/StyledList'

class Company extends Component {


    buildPartners() {
        const imgNames = [
          ["z-imperium.png", "ibm-bp.png", "fire-eye-silver.png", "dell-technologies.jpg"],
          ["fortinet-gold.png", "click-dimensions.png", "silver-peak.png", "oracle.png"],
          ["redhat-ready.png", "vmware.png",  "hp.png"]
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
        { name: "Samad Haider", role: "Dynamics Analyst" },
        { name: "Sam Ashtar", role: "Software Engineer" },
        { name: "Andrea Williams", role: "Internal Application Developer" },
        { name: "Leeroy Okpara", role: "Jr Network Engineer" }
      ]

      return (
        <Fragment>
          <div className="bg-light-grey">
            <SubHeader title="Introduction" marginBottom paddingTop />
            <LoneParagraph 
              text={["Practical Solutions Inc (PSI) was founded in 1997 by Mr. JayHajeer, who led the development of PSI into a modernhigh-performance global organization that embodies his vision: “We Deliver Practical Solutions”"]}
              list={introList}
            />
            <SubHeader title="Our Methodology and Differentiators" marginBottom marginTop />
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
          <div className="bg-white">
            <SubHeader title="Our Partners" paddingTop marginBottom />
            <Carousel arrows width="hella-narrow-width" slides={this.buildPartners()} show={1} scroll={1} />
            <div className="filler" />
          </div>
          <div className="bg-light-grey">
            <SubHeader title="Certifications" paddingTop />
            <div className="hella-narrow-width bg-white lone-paragraph text-left rounded-corners">
              <p className='drop-cap'>
                PSI embodies a process of continues improvement which 
                drives us to seek industry recognized certifications 
                and credentials.
              </p>
              <StyledList indented items={[
                "2018: Capability Maturity Model Integration (CMMI) Development (DEV) and CMMI Services (SVC) appraisals at maturity level 3",
                "2018: ISO X000",
                "2012: Practical Solutions, Inc. (PSI) became a U.S. Small Business Administration (SBA) certified 8(a) Disadvantaged Small Business (DSB) and Economically Disadvantaged Small Business (EDSB)."
              ]} />
              <p>
                Members of our team maintain certifications and 
                continued professional development in their fields 
                along with valuable memberships and positions with 
                outside agencies.
              </p>
              <StyledList indented items={[
                "Project Management Institute (PMI) Staff members certified",
                "Information Technology Infrastructure Library (ITIL®)",
                "International Information Systems Security Certification Consortium ((ISC)²)",
                "TBM Council"
              ]} />
            </div>
            <div className="filler" />
            <SubHeader title="Contract Vehicles" paddingTop />
            <Grid stackable className="regular-width" relaxed="very">
              <Grid.Column stretched width={7}>
                <Table className="cv-table fluid" celled>
                <Table.Body>
                  { tableRows.map(row => {
                    return (
                      <Table.Row>
                        <Table.Cell className="cv-head-cell">
                          {row[0]}
                        </Table.Cell>
                        <Table.Cell>
                          {row[1]}
                        </Table.Cell>
                      </Table.Row>
                    )
                  })}
                </Table.Body>
                </Table>
              </Grid.Column>
              <Grid.Column stretched width={9}>
                <Table className="cv-table" celled>
                <Table.Header>
                  <Table.Row>
                    <Table.Cell className="cv-head-cell">
                      SIN
                    </Table.Cell>
                    <Table.Cell className="cv-head-cell">
                      SIN Title
                    </Table.Cell>
                    <Table.Cell className="cv-head-cell">
                      NAICS
                    </Table.Cell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      132 51
                    </Table.Cell>
                    <Table.Cell>
                      Information Technology Professional Services
                    </Table.Cell>
                    <Table.Cell>
                      541511, 541512, 541513, 541519
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      132 40
                    </Table.Cell>
                    <Table.Cell>
                      Cloud Computing Services – SUBJECT TO COOPERATIVE PURCHASING
                    </Table.Cell>
                    <Table.Cell>
                      518210
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
                </Table>
                <Table className="cv-table" celled>
                  <Table.Header>
                    <Table.Row>
                      <Table.Cell className="cv-head-cell">
                        SIN
                      </Table.Cell>
                      <Table.Cell className="cv-head-cell">
                        SIN Title
                      </Table.Cell>
                      <Table.Cell className="cv-head-cell">
                        NAICS
                      </Table.Cell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        132 51
                      </Table.Cell>
                      <Table.Cell>
                        Information Technology Professional Services
                      </Table.Cell>
                      <Table.Cell>
                        541511, 541512, 541513, 541519
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        132 40
                      </Table.Cell>
                      <Table.Cell>
                        Cloud Computing Services – SUBJECT TO COOPERATIVE PURCHASING
                      </Table.Cell>
                      <Table.Cell>
                        518210
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Grid.Column>
            </Grid>
            <div className="filler" />
          </div>
          <div className="bg-white narrow-width">
            <SubHeader title="Our Team" paddingTop />
            <Grid stackable columns={3}>
              <Grid.Column>
                <Card fluid>
                  <Image src={require('../assets/readme/spongebob_computer.jpg')} />
                  <Card.Content className="text-left">
                    <Card.Header>Jay Hajeer</Card.Header>
                    <Card.Meta>CEO</Card.Meta>
                  </Card.Content>
                </Card>
                <Card fluid>
                  <Image src={require('../assets/readme/spongebob_computer.jpg')} />
                  <Card.Content className="text-left">
                    <Card.Header>Jay Hajeer</Card.Header>
                    <Card.Meta>CEO</Card.Meta>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card fluid>
                  <Image src={require('../assets/readme/spongebob_computer.jpg')} />
                  <Card.Content className="text-left">
                    <Card.Header>Jay Hajeer</Card.Header>
                    <Card.Meta>CEO</Card.Meta>
                  </Card.Content>
                </Card>
                <Card fluid>
                  <Image src={require('../assets/readme/spongebob_computer.jpg')} />
                  <Card.Content className="text-left">
                    <Card.Header>Jay Hajeer</Card.Header>
                    <Card.Meta>CEO</Card.Meta>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <Image fluid src={require('../assets/readme/kitty.jpeg')} />
                    </Grid.Column>
                    <Grid.Column width={11}>
                      <h1 className="fs-3">Name</h1>
                      <p>Position</p>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <Image fluid src={require('../assets/readme/kitty.jpeg')} />
                    </Grid.Column>
                    <Grid.Column width={11}>
                      <h1 className="fs-3">Name</h1>
                      <p>Position</p>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <Image fluid src={require('../assets/readme/kitty.jpeg')} />
                    </Grid.Column>
                    <Grid.Column width={11}>
                      <h1 className="fs-3">Name</h1>
                      <p>Position</p>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <Image fluid src={require('../assets/readme/kitty.jpeg')} />
                    </Grid.Column>
                    <Grid.Column width={11}>
                      <h1 className="fs-3">Name</h1>
                      <p>Position</p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
            </Grid>
          </div>
          <div className="bg-light-grey">
            <SubHeader title="Careers" paddingTop marginBottom />
            <ImgDiv 
              image={require('../assets/about/careers.jpg')}
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