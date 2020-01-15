import React, { Component } from 'react'
import SubHeader from '../../reusable/SubHeader'
import { Grid, Table } from 'semantic-ui-react'

export default class ContractVehicles extends Component {
  render() {
    return (
			<div id='contractvehicles'>
				<div className='filler' />
				<SubHeader title='Contract Vehicles' paddingTop />
				<Grid stackable className='regular-width' relaxed='very'>
					<Grid.Column stretched width={7}>
						<Table className='cv-table fluid' celled>
							<Table.Body>
								{this.props.contractRows.map(row => {
									return (
										<Table.Row>
											<Table.Cell className='cv-head-cell'>{row[0]}</Table.Cell>
											<Table.Cell>{row[1]}</Table.Cell>
										</Table.Row>
									);
								})}
							</Table.Body>
						</Table>
					</Grid.Column>
					<Grid.Column stretched width={9}>
						<Table className='cv-table' celled>
							<Table.Header>
								<Table.Row>
									<Table.Cell className='cv-head-cell'>SIN</Table.Cell>
									<Table.Cell className='cv-head-cell'>SIN Title</Table.Cell>
									<Table.Cell className='cv-head-cell'>NAICS</Table.Cell>
								</Table.Row>
							</Table.Header>
							<Table.Body>
								<Table.Row>
									<Table.Cell>132 51</Table.Cell>
									<Table.Cell>Information Technology Professional Services</Table.Cell>
									<Table.Cell>541511, 541512, 541513, 541519</Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell>132 40</Table.Cell>
									<Table.Cell>
										Cloud Computing Services – SUBJECT TO COOPERATIVE PURCHASING
									</Table.Cell>
									<Table.Cell>518210</Table.Cell>
								</Table.Row>
							</Table.Body>
						</Table>
						<Table className='cv-table' celled>
							<Table.Header>
								<Table.Row>
									<Table.Cell className='cv-head-cell'>SIN</Table.Cell>
									<Table.Cell className='cv-head-cell'>SIN Title</Table.Cell>
									<Table.Cell className='cv-head-cell'>NAICS</Table.Cell>
								</Table.Row>
							</Table.Header>
							<Table.Body>
								<Table.Row>
									<Table.Cell>132 51</Table.Cell>
									<Table.Cell>Information Technology Professional Services</Table.Cell>
									<Table.Cell>541511, 541512, 541513, 541519</Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell>132 40</Table.Cell>
									<Table.Cell>
										Cloud Computing Services – SUBJECT TO COOPERATIVE PURCHASING
									</Table.Cell>
									<Table.Cell>518210</Table.Cell>
								</Table.Row>
							</Table.Body>
						</Table>
					</Grid.Column>
				</Grid>
				<div className='filler' />
			</div>
		);
  }
}
