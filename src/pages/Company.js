import React, { Component, Fragment } from 'react'
import { List, Image, Grid } from 'semantic-ui-react'
import SubHeader from '../reusable/SubHeader';
import ImgDiv from '../reusable/ImgDiv';
import Carousel from '../reusable/Carousel';
import LoneParagraph from '../reusable/LoneParagraph';

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
            <Carousel arrows width="super-narrow-width" slides={this.buildPartners()} show={1} scroll={1} />
            <div className="filler" />
          </div>
          <div className="bg-light-grey">
              
          </div>
        </Fragment>
      );
    }
}

export default Company