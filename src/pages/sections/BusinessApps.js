import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import IconParagraph from '../../reusable/IconParagraph'

export default class BusinessApps extends Component {

  iconColumn({ iconName, title, list }) {
    return (
      <Grid.Column>
        <IconParagraph iconName={iconName} title={title} list={list} />
      </Grid.Column>
    );
  }

  render() {

    const { iconObjects } = this.props

    return (
			<div id='businessapps' className='bg-white'>
				<div className='filler' />
				<h3>Microsoft Business Apps</h3>
				<p className='hella-narrow-width'>
					Microsoft 365 Business Applications are native tools fully integrated with
					Microsoft 365 and Azure Applications that are meant to drive business efficiency
					and deliver the insights you need. Practical Solutions, Inc. (PSI) is an
					experienced service provider that you can rely on for solutions and help with
					your Business Apps. PSI enables you to build applications that simplify everyday
					tasks without the need for pro developers.
				</p>
				<hr />
				<div className='filler' />
				<Grid stackable className='regular-width' columns={3}>
					{iconObjects.map(icon => this.iconColumn(icon))}
				</Grid>
				<div className='filler' />
			</div>
		);
  }
}
