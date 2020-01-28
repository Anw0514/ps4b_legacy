import React, { Component } from 'react'
import SubHeader from '../../reusable/SubHeader';
import { Grid } from 'semantic-ui-react';
import StyledList from '../../reusable/StyledList';


export default class Microsoft365 extends Component {

  microsoftColumns({ title, description, data }) {
    return (
      <Grid.Column>
        <h5>{title}</h5>
        <p>{description}</p>
        <Grid stackable centered columns={2}>
          {data.map(d => {
            return this.buildLittleList(d);
          })}
        </Grid>
      </Grid.Column>
    );
  }

  buildLittleList(data) {
    const items = data.slice(1);
    return (
      <Grid.Column>
        <h6 className="fs-2">{data[0]}</h6>
        <StyledList items={items} />
      </Grid.Column>
    );
  }

  render() {
    const { microsoftColumnData } = this.props 
    return (
			<div id='microsoft365' className='bg-white regular-width'>
				<SubHeader title='Microsoft 365' marginTop marginBottom />
				<Grid stackable divided columns={2}>
					{microsoftColumnData.map(c => {
						return this.microsoftColumns(c);
					})}
				</Grid>
			</div>
		);
  }
}
