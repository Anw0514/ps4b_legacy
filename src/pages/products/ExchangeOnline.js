import React, { Component, Fragment } from 'react'
import { Grid, Card, Image } from 'semantic-ui-react'
import IconParagraph from '../../reusable/IconParagraph'
import SubHeader from '../../reusable/SubHeader'

class ExchangeOnline extends Component {
    render() {
        const plans = [{ id: "1", content: "50 GB of inbox storage and can send messages up to 150 MB, inbox management, sharing of calendars", price: "4"},
            { id: "2", content: "100 GB of inbox storage and can send messages up to 150 MB, inbox management, sharing of calendars Data Loss Prevention (DLP), voicemail", price: "8"}]
        return (
          <Fragment>
            <div className="bg-white">
              <div className="narrow-section">
                <h3>Microsoft Exchange Online</h3>
                  <p>
                    Fully hosted email plans complete with online calendars and 
                    contacts migration and support included!
                  </p>
                  <hr />
              </div>
              <h5>WE MAKE EXCHANGE ONLINE ADOPTION CHAOS FREE</h5>
              <Grid stackable columns={3} className="bg-white m-top-3 narrow-section">
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
            </div>
            <div className="bg-light-grey">
              <div className="narrow-width top-pad-1">
                <SubHeader paddingTop title="Exchange Online Plans for Your Business" marginBottom />
                <Grid relaxed='very' columns={2}>
                  { plans.map(plan => {
                    return (
                      <Grid.Column>
                        <div className='rounded-corners bg-white fluid' style={{minHeight: "100%", overflow: "hidden"}}>
                          <div className='exchange-online-img' />
                          <div className='padded'>
                            <h5>Exchange Online Plan {plan.id}</h5>
                            <p>{plan.content}</p>
                            <h6>${plan.price}.00</h6>
                            <p>per user/per month</p>
                          </div>
                        </div>
                      </Grid.Column>
                    )
                  }) }
                </Grid>
              </div>
              <div className="filler" />
            </div>
          </Fragment>
        )
    }
}

export default ExchangeOnline