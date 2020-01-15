import React, { Component } from 'react'
import { Grid, Image, Modal, Card } from 'semantic-ui-react'
import SubHeader from '../../reusable/SubHeader'

export default class OurTeam extends Component {

  buildCard = (person) => {
    return (
      <Card onClick={() => this.props.toggleModal(person)} fluid>
        <Image src={require(`../../assets/ourteam/${person.image}`)} />
        <Card.Content className="text-left">
          <Card.Header>{person.name}</Card.Header>
          <Card.Meta>{person.role}</Card.Meta>
        </Card.Content>
      </Card>
    );
  }

  render() {
    const { employees, execs, person, toggleModal, open } = this.props
    return (
			<div id='ourteam' className='bg-white regular-width'>
				<SubHeader title='Our Team' paddingTop marginBottom />
				<Grid verticalAlign='middle' stackable columns={3}>
					<Grid.Column width={5}>
						{this.buildCard(execs.jay)}
						{this.buildCard(execs.bob)}
					</Grid.Column>
					<Grid.Column width={5}>
						{this.buildCard(execs.nik)}
						{this.buildCard(execs.dave)}
					</Grid.Column>
					<Grid.Column width={6}>
						<Grid verticalAlign='middle'>
							{employees.map(e => {
								return (
									<Grid.Row>
										<Grid.Column
											style={{objectFit: 'contain', paddingRight: '0'}}
											width={5}
										>
											<Image
												circular
												fluid
												src={require(`../../assets/ourteam/${e.avitar}`)}
											/>
										</Grid.Column>
										<Grid.Column width={11}>
											{window.innerWidth > 768 ? (
												<div>
													<h1 className='fs-2'>{e.name}</h1>
													<p>{e.role}</p>
												</div>
											) : (
												<div>
													<h3>{e.name}</h3>
													<p className='fs-5'>{e.role}</p>
												</div>
											)}
										</Grid.Column>
									</Grid.Row>
								);
							})}
						</Grid>

						<Modal
							closeIcon
							dimmer='blurring'
							basic
							open={open}
							onClose={() =>
								toggleModal({
									name: 'Jay Hajeer',
									role: 'I built the ground you walk on',
									image: 'andrea.jpeg',
									bio: 'something clearly went wrong',
								})
							}
						>
							<Modal.Header>
								{person.name} - {person.role}
							</Modal.Header>
							<Modal.Content scrolling>
								<Modal.Description>
									<Image
										size='medium'
										floated='left'
										src={require(`../../assets/ourteam/${person.image}`)}
									/>
									{person.bio}
								</Modal.Description>
							</Modal.Content>
						</Modal>
					</Grid.Column>
				</Grid>
				<div className='filler' />
			</div>
		);
  }
}
