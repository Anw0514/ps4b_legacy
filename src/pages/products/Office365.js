import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import ComparisonTable from '../../reusable/ComparisonTable'
import AlternatingMedia from '../../reusable/AlternatingMedia'
import SubHeader from '../../reusable/SubHeader'
import { office365 } from '../../Data'

class Office365 extends Component {

    constructor() {
        super()
        this.state = {
            compare: false,
            selectedPlans: [1, 2, 3, 4, 5, 6, 7]
        }
    }

    buildCard(card) {
      return (
        <Card>
          <Card.Content>
            <Card.Header className="blue-1">{card.Title}</Card.Header>
            <Card.Meta>{card.Price} per user / month</Card.Meta>
            <Card.Description>
              { card.description }
            </Card.Description>
          </Card.Content>
        </Card>
      );

    }

    render() {

      const { plans, criteria, altMedia } = office365

        return (
            <div className='bg-white top-pad-3'>
              <h3>Office 365</h3>
              <p> 
                Get the best productivity suite for your business! 
                <br />
                Migration and support included
              </p>
              <hr />
              <div className="narrow-width">
              <AlternatingMedia 
                images={altMedia.images} 
                content={altMedia.content} 
              />
              </div>
              <SubHeader marginTop title="All the Office 365 Plans for Your Business" />
              <div className="wide-section">
                { window.innerWidth < 760 ?
                  <Card.Group centered>
                    { plans.map(plan => this.buildCard(plan)) }
                  </Card.Group>
                  :
                  <ComparisonTable criteria={criteria} items={plans} />
                }
              </div>
            </div>
        )
    }
}

export default Office365