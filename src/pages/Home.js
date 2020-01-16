import React, { Component } from 'react'
import { Grid, Image, Statistic, Icon } from 'semantic-ui-react'
import IconParagraph from '../reusable/IconParagraph';
import SubHeader from '../reusable/SubHeader';
import ContactButton from '../reusable/ContactButton';
import Carousel from '../reusable/Carousel'
import { home } from '../Data'


class Home extends Component {
    render() {

      const { slides, iconObjects } = home

      const slideElems = slides.map(slide => (
        <h6>
          <Icon className={`${slide.color}`} name="trophy" />
          {slide.name}
        </h6>
      ))

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
                const { title, paragraph, iconName } = iconObj;
                return (
                  <Grid.Column>
                    <IconParagraph
                      title={title}
                      paragraph={paragraph}
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
                    <Carousel slides={slideElems} width="hella-narrow-width" />
                    <div className="filler" />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
            <SubHeader marginTop title="Who We Are" />
            <Grid className="regular-section" doubling stackable columns={4}>
              {iconObjects[2].map(iconObj => {
                const { title, paragraph, iconName } = iconObj;
                return (
                  <Grid.Column>
                    <IconParagraph
                      title={title}
                      paragraph={paragraph}
                      iconName={iconName}
                    />
                  </Grid.Column>
                );
              })}
            </Grid>
            <ContactButton open={this.props.open} />
            <div className="track-record">
              <h3 className="tr-h3">Our Track Record</h3>
              <Grid doubling stackable columns={4}>
                <Grid.Column>
                  <Statistic inverted label='Data Secured' value='223TB' />
                </Grid.Column>
                <Grid.Column>
                  <Statistic inverted label='Employees Trained' value='2743' />
                </Grid.Column>
                <Grid.Column>
                  <Statistic inverted label='Consulting Hours Delivered' value='956k+' />
                </Grid.Column>
                <Grid.Column>
                  <Statistic inverted label='We Saved Our Clients' value='$528M' />
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