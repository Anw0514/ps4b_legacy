import React, { Component } from 'react'
import SubHeader from '../../reusable/SubHeader'
import ImgDiv from '../../reusable/ImgDiv'

export default class Careers extends Component {
  render() {
    return (
			<div id='careers' className='bg-light-grey'>
				<SubHeader title='Careers' paddingTop marginBottom />
				<ImgDiv
					image={require('../../assets/about/careers.jpg')}
					paragraphs={[
						'Practical Solutions, Inc. (PSI) is looking for highly motivated and highly skilled individuals who believe in our mission “Turn Chaos into Order” and are ready for exciting opportunities with a growing company. The PSI team hold themselves to very high standards, both professionally and ethically. All our employees are expected to expand their existing skillset and develop new skills in different areas to support our mission. Each employee prides themselves on their commitment to the company, ability to add value and contribute to our growth and success.',
						'PSI is eagerly seeking talented, creative, and flexible problem solvers to join our growing team. We continue to expand our internal operations, consulting, and staffing services divisions. PSI is an Equal Opportunity Employer and we are always accepting resumes and actively looking for partners. If you are interested in opportunities at PSI, send in your resume and salary requirements to jobs@ps4b.com.',
					]}
				/>
				<div className='filler' />
			</div>
		);
  }
}
