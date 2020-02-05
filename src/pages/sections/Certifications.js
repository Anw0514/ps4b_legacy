import React, { Component } from 'react'
import SubHeader from '../../reusable/SubHeader'
import StyledList from '../../reusable/StyledList'

export default class Certifications extends Component {
  render() {
    return (
			<div id="certifications">
				<SubHeader title='Certifications' paddingTop />
				<div className='hella-narrow-width bg-white lone-paragraph text-left rounded-corners'>
					<p className='drop-cap'>
						PSI embodies a process of continues improvement, driving us to continuously seek
						industry-recognized certifications and credentials.
					</p>
					<StyledList
						indented
						items={[
							'2018: Capability Maturity Model Integration (CMMI) Development (DEV) and CMMI Services (SVC) appraisals at maturity level 3',
							'2018: ISO X000',
							'2012: Practical Solutions, Inc. (PSI) became a U.S. Small Business Administration (SBA) certified 8(a) Disadvantaged Small Business (DSB) and Economically Disadvantaged Small Business (EDSB).',
						]}
					/>
					<p>
						Members of our team maintain certifications and continued professional
						development in their fields along with valuable memberships and positions with
						outside agencies.
					</p>
					<StyledList
						indented
						items={[
							'Project Management Institute (PMI) Staff members certified',
							'Information Technology Infrastructure Library (ITIL®)',
							'International Information Systems Security Certification Consortium ((ISC)²)',
							'TBM Council',
						]}
					/>
				</div>
			</div>
		);
  }
}
