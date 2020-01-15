import React, { Component } from 'react'
import SubHeader from '../../reusable/SubHeader'
import Carousel from '../../reusable/Carousel'
import { Grid, Image } from 'semantic-ui-react'

export default class Partners extends Component {

  buildPartner(partner) {
    return (
      <Grid centered columns={2}>
        <Grid.Row>
          <Grid.Column verticalAlign="middle">
            <Image centered src={require(`../../assets/about/${partner[0]}`)} />
          </Grid.Column>
          <Grid.Column verticalAlign="middle">
            {partner[1] ? (
              <Image centered src={require(`../../assets/about/${partner[1]}`)} />
            ) : (
              <div></div>
            )}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column verticalAlign="middle">
            {partner[2] ? (
              <Image centered src={require(`../../assets/about/${partner[2]}`)} />
            ) : (
              <div></div>
            )}
          </Grid.Column>
          {partner[3] ? (
            <Grid.Column verticalAlign="middle">
              <Image centered src={require(`../../assets/about/${partner[3]}`)} />
            </Grid.Column>
          ) : null}
        </Grid.Row>
      </Grid>
    );
  }

  render() {
    const { partners } = this.props
    return (
			<div id='partners' className='bg-white'>
				<SubHeader title='Our Partners' paddingTop marginBottom />
				<Carousel
					arrows
					width='hella-narrow-width'
					slides={partners.map(partner => this.buildPartner(partner))}
					show={1}
					scroll={1}
				/>
				<div className='filler' />
			</div>
		);
  }
}
