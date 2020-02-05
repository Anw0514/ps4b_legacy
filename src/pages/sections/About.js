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
						'Practical Solutions Inc (PSI) was founded in 1997 by Mr. Jay Hajeer. He led the development of PSI, turning it into a modern, high-performance global organization that embodies his vision: “We Deliver Practical Solutions.”',
					]}
					list={this.props.introList}
				/>
				<SubHeader title='Our Methodology and Differentiators' marginBottom marginTop />
				<ImgDiv
					image={require('../../assets/about/about.jpg')}
					list={[
						'Many of our services and products are paired with eLearning, so clients get a faster ROI by having a more prepared team following the implementation of new solution.',
						'A lot of companies offer textbook solutions to their customers; PSI digs in, understands the customer and their unique characteristics, and provides a solution that is practical and unique.',
						'Our reputation and relationships are more important to us than a quick profit. Our solutions are designed to be sustainable within your organization beyond our working relationship.',
						'PSI has a seasoned team with decades of experience, click here to view our team.',
						'100% US-based team serving global clients.',
					]}
				/>
				<div className='filler' />
			</div>
		);
  }
}
