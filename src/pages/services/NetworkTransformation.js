import React, { Component } from 'react'
import ImgDiv from '../../reusable/ImgDiv'
import SubHeader from '../../reusable/SubHeader';
import LoneParagraph from '../../reusable/LoneParagraph';

class NetworkTransformation extends Component {
    render() {
        return (
          <div className="bg-light-grey">
            <SubHeader paddingTop title="How do we transform your network?" />
            <LoneParagraph text={["Practical Solutions, Inc. (PSI) is a trusted network transformation partner to many organizations of various sizes and industries. PSI specializes in network engineering, deployment, infrastructure management, and network transformation/evolution. From simple network deployments in smaller businesses to complex enterprise transformations and expansions, the PSI team is ready to help our clients move their networking goals forward with our dedicated team of experts."]} />
            <div className='filler' />
            <ImgDiv
              image={require("../../assets/imgDivs/network-transformation-page.jpg")}
              paragraphs={[
                "Assess your network’s security to ensure the necessary controls are in place",
                "Network mapping",
                "Assess your organization’s readiness for alternative network architectures",
                "Design and deploy the most efficient architecture that is customized for your specific requirements and priorities",
                "Provide you with a realistic plan to evolve your network based upon current and future standards and recommendations while considering logistical constraints",
                "Provide network infrastructure managed services"
              ]}
              title="Here is how PSI can help your network transformation:"
            />
            <div className='filler' />
          </div>
        );
    }
}

export default NetworkTransformation