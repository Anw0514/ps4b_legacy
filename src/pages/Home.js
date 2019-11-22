import React, { Component, Fragment } from 'react'
import { Grid } from 'semantic-ui-react'
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
            <div className="bg-white">
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
            <Grid doubling stackable columns={4}>
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
            <h3 className="fs-3">Who We Are</h3>
            <Grid doubling stackable columns={4}>
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
          </Fragment>
        );
    }
}

export default Home