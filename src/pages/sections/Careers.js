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
						'Practical Solutions, Inc. (PSI) is looking for highly motivated, highly skilled individuals who believe in our mission of turning chaos into order, and who are ready for exciting opportunities with a growing company. The PSI team members hold themselves to very high professional and ethical standards. All of our employees are expected to expand their existing skillset and to develop new skills in different areas to support our mission. Each employee takes pride in their commitment to the company, their ability to add value, and their contributions to our growth and success.',
						'PSI is eagerly seeking talented, creative, and flexible problem solvers to join our growing team. We continue to expand our internal operations, consulting, and staffing services divisions. PSI is an Equal Opportunity Employer and we are always accepting resumes and actively looking for partners. If you are interested in opportunities at PSI, send in your resume and salary requirements to jobs@ps4b.com.',
					]}
				/>
				<div className='filler' />
			</div>
		);
  }
}
