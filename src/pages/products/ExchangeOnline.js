import React, { Component, Fragment } from 'react'
import { Grid } from 'semantic-ui-react'
import IconParagraph from '../../reusable/IconParagraph'
import SubHeader from '../../reusable/SubHeader'

class ExchangeOnline extends Component {
    render() {
        return (
            <Fragment>
                <div className="bg-white narrow-section">
                    <div className="subheader">
                        <h3 className="fs-3">Microsoft Exchange Online</h3>
                        <p>
                            Fully hosted email plans complete with online calendars and 
                            contacts migration and support included!
                        </p>
                        <hr />
                    </div>
                    <h4 className="fs-2 subheader">WE MAKE EXCHANGE ONLINE ADOPTION CHAOS FREE</h4>
                    <Grid stackable columns={3} className="bg-white m-top-3">
                        <Grid.Column>
                            <IconParagraph
                                title="Expert and dedicated migration from any email platform."
                                iconName="Tactic"
                            /> 
                        </Grid.Column>
                        <Grid.Column>
                            <IconParagraph
                                title="30-day money back guarantee. No setup fees or yearly contracts."
                                iconName="Money"
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <IconParagraph
                                title="Free Support."
                                iconName="Support"
                            />
                        </Grid.Column>
                    </Grid>
                </div>
                <div className="bg-light-grey page-content">
                    <div className="narrow-section top-pad-1">
                        <SubHeader title="All the Exchange Online Plans for Your Business" />
                        <Grid relaxed='very' columns={2}>
                        </Grid>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ExchangeOnline