import React, { Component } from 'react'
import ImgDiv from '../../reusable/ImgDiv'

class NetworkTransformation extends Component {
    render() {
        return (
          <div className="bg-light-grey">
            NetworkTransformation
            <ImgDiv
              image={require("../../assets/imgDivs/network-transformation-page.jpg")}
              list={[
                "Assess your network’s security to ensure the necessary controls are in place",
                "Network mapping",
                "Assess your organization’s readiness for alternative network architectures",
                "Design and deploy the most efficient architecture that is customized for your specific requirements and priorities",
                "Provide you with a realistic plan to evolve your network based upon current and future standards and recommendations while considering logistical constraints",
                "Provide network infrastructure managed services"
              ]}
              title="Here is how PSI can help your network transformation:"
            />
          </div>
        );
    }
}

export default NetworkTransformation