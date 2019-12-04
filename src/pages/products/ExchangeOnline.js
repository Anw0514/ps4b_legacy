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
                <h3 className="fs-3">Microsoft Exchange Online</h3>
                  <p>
                    Fully hosted email plans complete with online calendars and 
                    contacts migration and support included!
                  </p>
                  <hr />
              </div>
              <h4 className="fs-2 subheader">WE MAKE EXCHANGE ONLINE ADOPTION CHAOS FREE</h4>
              <Grid stackable columns={3} className="bg-white m-top-3 narrow-section">
                <Grid.Column>
                  <IconParagraph
                    title="Expert and dedicated migration from any email platform."
                    iconName="Tactic"
                  /> 
                </Grid.Column>
                <Grid.Column>
                  <IconParagraph
                    title="Free Support."
                    iconName="Support"
                  />
                </Grid.Column>
                <Grid.Column>
                  <IconParagraph
                    title="30-day money back guarantee. No setup fees or yearly contracts."
                    iconName="Money"
                  />
                </Grid.Column>
              </Grid>
            </div>
            <div className="bg-light-grey">
              <div className="narrow-width top-pad-1">
                <SubHeader paddingTop title="Exchange Online Plans for Your Business" />
                <Grid relaxed='very' columns={2}>
                  { plans.map(plan => {
                    return (
                      <Grid.Column>
                        <div className='rounded-corners bg-white fluid' style={{minHeight: "100%", overflow: "hidden"}}>
                          <div className='exchange-online-img' />
                          <div className='padded'>
                            <h4 className="fs-2">Exchange Online Plan {plan.id}</h4>
                            <p>{plan.content}</p>
                            <h3 className="fs-3">${plan.price}.00</h3>
                            <p className="fs-0">per user/per month</p>
                          </div>
                        </div>
                      </Grid.Column>
                    )
                  }) }
                </Grid>
              </div>
            </div>
          </Fragment>
        )
    }
}

export default ExchangeOnline