import React, { Component } from 'react'
import SubHeader from '../../reusable/SubHeader'
import ImgDiv from '../../reusable/ImgDiv'
import LoneParagraph from '../../reusable/LoneParagraph'

export default class About extends Component {
  render() {
    return (
			<div id='about' className='bg-light-grey'>
				<SubHeader title='Introduction' marginBottom paddingTop />
				<LoneParagraph
					text={[
						'Practical Solutions Inc (PSI) was founded in 1997 by Mr. JayHajeer, who led the development of PSI into a modernhigh-performance global organization that embodies his vision: “We Deliver Practical Solutions”',
					]}
					list={this.props.introList}
				/>
				<SubHeader title='Our Methodology and Differentiators' marginBottom marginTop />
				<ImgDiv
					image={require('../../assets/about/about.jpg')}
					list={[
						'Many of our services and products are paired with eLearning so clients get a faster ROI by having a more prepared team following implementation of new solution.',
						'A lot of companies will offer text book solutions to their customers, we dig in, understand the company, its unique characteristics and provide a solution that is practical and unique.',
						'Our ongoing Reputation and relationships are more important to us than a quick profit. Our solutions are designed to be sustainable within your organization beyond our relationship.',
						'PSI has a seasoned team with decades of experience, click here to view our team.',
						'100% US Based team serving global clients.',
					]}
				/>
				<div className='filler' />
			</div>
		);
  }
}
