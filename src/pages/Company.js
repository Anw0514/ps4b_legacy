import React, { Component } from 'react'
import { List } from 'semantic-ui-react'
import SubHeader from '../reusable/SubHeader';
import ImgDiv from '../reusable/ImgDiv';

class Company extends Component {
    render() {
        return (
          <div className="bg-light-grey">
            <SubHeader title="Introduction" paddingTop />
            <div className="narrow-width bg-white lone-paragraph text-left rounded-corners">
              <p className="drop-cap">
                Practical Solutions Inc (PSI) was founded in 1997 by Mr. Jay
                Hajeer, who led the development of PSI into a modern
                high-performance global organization that embodies his vision:
                “We Deliver Practical Solutions”
              </p>
              <ul className="grey indented">
                <li className="list-item">
                  <p>
                    PSI serves several federal and commercial agencies of
                    various sizes with administrative, engineering, and
                    management challenges.
                  </p>
                </li>
                <li className="list-item">
                  <p>
                    PSI maintains a diverse portfolio that includes development,
                    project management, e-Learning, and strategic planning in
                    both business and IT.
                  </p>
                </li>
                <li className="list-item">
                  <p>
                    From certified project managers and business analysts to
                    solution architects and developers, we fit the right
                    resources to support clients with their business needs.
                  </p>
                </li>
                <li className="list-item">
                  <p>
                    We strategically partner with several industry leaders such
                    as Microsoft, IBM, Oracle, and many more.
                  </p>
                </li>
              </ul>
            </div>
            <SubHeader title="Our Methodology and Differentiators" marginTop />
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
        );
    }
}

export default Company