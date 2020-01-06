import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import IconParagraph from '../../reusable/IconParagraph'
import Carousel from '../../reusable/Carousel'
import { dynamics365 } from '../../Data'
import ComparisonTableTwo from '../../reusable/ComparisonTableTwo'

class Dynamics365 extends Component {
    render() {

        const { slides, tables } = dynamics365

        return (
            <div>
              <div className="top-pad-3 m-bottom-3">
                <h3>Microsoft Dynamics 365</h3>
                <p className="fs-2">Manage Your Entire Business With One Application </p>
                <hr />
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
              <div className="filler" />
              <Carousel
                width="hella-narrow-width"
                arrows
                slides={slides.map(s => {
                  return (
                    <div>
                      <h5>{s.title}</h5>
                      <p style={{ padding: "0 2em" }}>{s.text}</p>
                    </div>
                  )
                })}
                show={1}
                scroll={1}
              />
              { tables.map(table => (
                <div className="regular-section">
                  <ComparisonTableTwo header={table.header} rows={table.rows} />
                </div>
              )) }
              <div className="filler" />
            </div>
        )
    }
}

export default Dynamics365