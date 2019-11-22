import React, { Component, Fragment } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import IconParagraph from '../reusable/IconParagraph';

class Home extends Component {
    render() {

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
          <Fragment>
            <div className="bg-white text-section">
              <h3 className="fs-3">Welcome To PSI</h3>
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
            <div className='bg-grey'>
              <Grid>
                <Grid.Row>
                  <Grid.Column className='center-items' width={16}>
                    <Image className='item' src={require('../assets/logos/MSLogoGIFfinal.gif')} />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={16}>
                    Carousel
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
            <h3 className="fs-3">Who We Are</h3>
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
            <Grid className="regular-section" relaxed columns={3}>
              <Grid.Column>
                <Image src={require("../assets/logos/CMMI_DEV_Color.png")} />
              </Grid.Column>
              <Grid.Column>
                <Image src={require("../assets/logos/ISOcert.png")} />
              </Grid.Column>
              <Grid.Column>
                <Image src={require("../assets/logos/CMMI_SVC_Color.png")} />
              </Grid.Column>
            </Grid>
          </Fragment>
        );
    }
}

export default Home