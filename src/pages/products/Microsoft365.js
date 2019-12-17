import React, { Component, Fragment } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import ComparisonTable from '../../reusable/ComparisonTable'
import IconParagraph from '../../reusable/IconParagraph'
import { microsoft365 } from '../../Data'

class Microsoft365 extends Component {
    render() {

      const { plans, criteria } = microsoft365

        return (
          <Fragment>
            <div className="narrow-section">
              <h3>Microsoft 365</h3>
                <p>
                  Microsoft bundled the best features from Office 365 and Windows 
                  10 with cross-device security to create Microsoft 365, the most 
                  innovative, intelligent, and secure solution on the market. This 
                  bundle includes everything you need to stay empowered, creative, 
                  and productive, all with just a single monthly subscription.
                </p>
                <hr />
            </div>
            <div className="regular-section">
              <Image className='m-bottom-3' centered src={require('../../assets/microsoft365-equation.png')} />
              <h4 className='m-bottom-3'>All the Microsoft 365 Plans for Your Business or Enterprise</h4>
            </div>
            <Grid stackable className="narrow-width" columns="equal">
              <Grid.Column>
                <IconParagraph iconName="Mail-Send" title="Expert and dedicated migration from any email platform." />
              </Grid.Column>
              <Grid.Column>
                <IconParagraph iconName="Phone-2" title="Free Support" />
              </Grid.Column>
              <Grid.Column>
                <IconParagraph iconName="Money" title="30-day money back guarantee. No setup fees or yearly contracts." />
              </Grid.Column>
            </Grid>
            <div className='regular-section'>
              <ComparisonTable
                items={plans}
                criteria={criteria}
              />
            </div>
          </Fragment>
        )
    }
}

export default Microsoft365