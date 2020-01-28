import React, { Component } from 'react'
import StyledList from '../../reusable/StyledList';
import SubHeader from '../../reusable/SubHeader';
import AlternatingMedia from '../../reusable/AlternatingMedia';

export default class DataAndBI extends Component {
  render() {
    const { altMedia } = this.props

    return (
			<div id='dataandbi' className='bg-light-grey'>
				<SubHeader paddingTop marginBottom title='Data and Business Intelligence' />
				<div className='narrow-width bg-white lone-paragraph rounded-corners text-left'>
					<p className='drop-cap'>
						The Practical Solutions, Inc. (PSI) Data and Business Intelligence program
						encompasses a wide spectrum of data and analytical disciplines. Which are
						centered on the tactical and strategic use of data in support of decision
						making.
					</p>
					<p>
						PSI holds Microsoft Gold Competencies in both Data Analytics and Data
						Platform. We take a holistic approach in evaluating each data challenge and
						applying the most ideal solution based on enterprise data maturity.
					</p>
					<h6>Examples of applied solutions include:</h6>
					<StyledList
						items={[
							"Consolidated and standardized data infrastructure",
							"Seamless access to all data available to each role",
							"Automated operational reports and dashboards that are easy to use, navigate, and drill down",
							"Advanced models that take full advantage of all available data that can predict future events, segment clients for a specific strategy, provide an accurate probability score for a specific response, and many other developments where critical decision support is necessary"
						]}
					/>
				</div>
				<SubHeader marginTop marginBottom title='How do we solve data challenges?' />
				<div className='regular-width'>
					<AlternatingMedia images={altMedia.images} content={altMedia.content} large />
				</div>
			</div>
		);
  }
}
