import React, { Component } from 'react'
import SubHeader from "../../reusable/SubHeader";
import ImgDiv from '../../reusable/ImgDiv'

export default class AppsAndInfrastructure extends Component {
  render() {
    return (
			<div id='appsandinfrastructure' className='bg-light-grey'>
				<SubHeader paddingTop marginBottom title='Apps and Infrastructure' />
				<div className='narrow-width bg-white lone-paragraph rounded-corners'>
					<h5>How do we transform your infrastructure?</h5>
					<p className='text-left drop-cap'>
						Practical Solutions, Inc. (PSI) is a leader in helping businesses transform
						and grow by optimizing their IT infrastructure. PSI understands that the key
						to transformation is an IT foundation that is stable, robust, and secure. As a
						Microsoft Gold partner, we rely heavily on Microsoft applications and
						infrastructure to ensure our clients have the right foundation to enable their
						business transformation.
					</p>
					<p className='text-left'>
						The PSI team can design, implement, and manage a complete end-to-end
						infrastructure optimization solution — transforming the IT infrastructure from
						a cost center into a strategic asset. We work closely with clients to develop
						a balanced solution that takes advantage of infrastructure optimization
						guidance from Microsoft, in order to help our clients create an efficient and
						sustainable IT environment. PSI can help clients assess basic IT capabilities
						within their infrastructure, and then execute a multi-tier improvement plan.
					</p>
				</div>
				<div className='filler' />
				<ImgDiv
					title='This plan enables proactive monitoring and problem solving resulting in:'
					list={[
						"Reduced costs",
						"Increased IT insights",
						"More energy focused on providing new business capabilities",
						"Improved service levels",
						"Increased organizational agility",
						"Reduced system complexity"
					]}
					image={require("../../assets/imgDivs/app-and-i.jpg")}
				/>
				<div className='filler' />
			</div>
		);
  }
}
