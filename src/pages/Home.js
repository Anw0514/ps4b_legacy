import React, { Component, Fragment } from 'react'
import { Grid, Image, Icon } from 'semantic-ui-react'
import IconParagraph from '../reusable/IconParagraph';
import SubHeader from '../reusable/SubHeader';
import ContactButton from '../reusable/ContactButton';
import Carousel from '../reusable/Carousel'


class Home extends Component {
    render() {

      const slides = [
        <h5>
          <Icon className='gold' name="trophy" />
          Cloud Platform
        </h5>,
        <h5>
          <Icon className='gold' name="trophy" />
          ISV
        </h5>,
        <h5>
          <Icon className='gold' name="trophy" />
          Data Platform
        </h5>,
        <h5>
          <Icon className='gold' name="trophy" />
          Azure DevOps
        </h5>,
        <h5>
          <Icon className='gold' name="trophy" />
          Windows and Devices
        </h5>,
        <h5>
          <Icon className='gold' name="trophy" />
          Data Analytics
        </h5>,
        <h5>
          <Icon className='silver' name="trophy" />
          Small and Midmarket Cloud Solutions
        </h5>
      ]

        const iconObjects = {
          1: [
            {
              title: "Microsoft Solutions",
              content:
                "Design, implement, and support an end-to-end cloud infrastructure.",
              iconName: "Cloud"
            },
            {
              title: "Cybersecurity",
              content:
                "Dedicated to keeping our clients' enterprise data and network secure.",
              iconName: "Computer-Secure"
            },
            {
              title: "Planning and Strategy",
              content:
                "Helping clients with their strategic planning in both business and IT contexts.",
              iconName: "Idea-2"
            },
            {
              title: "e-Learning",
              content:
                "Offering a wide catalog of free and subscription-based online courses.",
              iconName: "Student-Hat2"
            }
          ],
          2: [
            {
              title: "Engineers",
              content:
                "Designing and integrating solutions within our clients’ diverse environments.",
              iconName: "Engineering"
            },
            {
              title: "Consultants",
              content:
                "Partnering with our clients to identify their root challenges and help them resolve efficiently.",
              iconName: "Consulting"
            },
            {
              title: "Analysts",
              content:
                "Studying and dissecting quantitative and qualitative data to guide decisions.",
              iconName: "Monitor-Analytics"
            },
            {
              title: "Strategists",
              content:
                "Reconciling our teams’ efforts to develop the ideal roadmap to efficiency and productivity.",
              iconName: "Tactic"
            }
          ]
        };

        return (
          <div className="page-content">
            <div className="bg-white text-section">
              <SubHeader marginTop title="Welcome To PSI" />
              <p>
                Since 1997, Practical Solutions, Inc. (PSI) has been turning
                chaos to order in complex enterprise systems where changes are
                neither easily predicted nor effectively managed. As your
                trusted professionals, we are here to help you along the journey
                from chaos to order, especially when your needs revolve around
                cybersecurity or cloud solutions.
              </p>
            </div>
            <Grid className="regular-section" doubling stackable columns={4}>
              {iconObjects[1].map(iconObj => {
                const { title, content, iconName } = iconObj;
                return (
                  <Grid.Column>
                    <IconParagraph
                      title={title}
                      content={content}
                      iconName={iconName}
                    />
                  </Grid.Column>
                );
              })}
            </Grid>
            <div className="bg-grey">
              <Grid style={{ marginBottom: "0" }}>
                <Grid.Row>
                  <Grid.Column className="center-items" width={16}>
                    <Image
                      className="item"
                      src={require("../assets/logos/MSLogoGIFfinal.gif")}
                    />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={16} textAlign="center">
                    <Carousel slides={slides} width="hella-narrow-width" />
                    <div className="filler" />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
            <SubHeader marginTop title="Who We Are" />
            <Grid className="regular-section" doubling stackable columns={4}>
              {iconObjects[2].map(iconObj => {
                const { title, content, iconName } = iconObj;
                return (
                  <Grid.Column>
                    <IconParagraph
                      title={title}
                      content={content}
                      iconName={iconName}
                    />
                  </Grid.Column>
                );
              })}
            </Grid>
            <ContactButton />
            <div className="track-record">
              <h3 className="fs-3 tr-h3">Our Track Record</h3>
              <Grid doubling stackable columns={4}>
                <Grid.Column>
                  <h1 className="white">223TB</h1>
                  <h6 className="white">Data Secured</h6>
                </Grid.Column>
                <Grid.Column>
                  <h1 className="white">2743</h1>
                  <h6 className="white">Employees Trained</h6>
                </Grid.Column>
                <Grid.Column>
                  <h1 className="white">956k+</h1>
                  <h6 className="white">Consulting Hours Delivered</h6>
                </Grid.Column>
                <Grid.Column>
                  <h1 className="white">$528M</h1>
                  <h6 className="white">We Saved our Clients</h6>
                </Grid.Column>
              </Grid>
            </div>
            <Grid className="wide-width" relaxed columns={3}>
              <Grid.Column verticalAlign="middle">
                <Image src={require("../assets/logos/CMMI_DEV_Color.png")} />
              </Grid.Column>
              <Grid.Column verticalAlign="middle">
                <Image src={require("../assets/logos/ISOcert.png")} />
              </Grid.Column>
              <Grid.Column verticalAlign="middle">
                <Image src={require("../assets/logos/CMMI_SVC_Color.png")} />
              </Grid.Column>
            </Grid>
          </div>
        );
    }
}

export default Home