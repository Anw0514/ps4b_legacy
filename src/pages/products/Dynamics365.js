import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import IconParagraph from '../../reusable/IconParagraph'
import Carousel from '../../reusable/Carousel'

class Dynamics365 extends Component {
    render() {

        const slides = [
            { title: "Dynamics 365 Sales (CRM)", text: "Simplify complex data to learn more about your customers. Automate the sales cycle, boost productivity, and reduce costs. You will get a better view of your sales team’s performance so you can meet your objectives." },
            { title: "Business Central (Financials)", text: "Complete view of your company’s financial situation, monitor cash flow, manage inventory and invoice customers. Stay up to date on your Account Schedules, Budgets, Sales Orders and Vendor Management. When you can have a complete view of your business, you can make better business decisions." },
            { title: "Customer Service", text: "360-degree view of each client, full history of their interactions with your department plus their personal preferences. For customers who want to do their own research, Dynamics 365 has a self-service portal with a user-friendly knowledge base and online community" },
            { title: "Field Service", text: "Team productivity and efficiency where they can track customer warranties, view repair history as well as maintenance schedules from one application. Manage your inventory from your mobile device. Need a specific technician for a job? Find out who has the right skills with Dynamics 365 for Field Service." },
            { title: "Project Service Automation", text: "Project Service Automation by building plans with specially designed templates that can be used again and adjusted for each project. Get a clear view of what stage you’re at and who is working on what. Determine at a glance if the project is profitable and will meet the customer’s expectations. All project details — from the quote to the invoice — is stored in a single system." },
            { title: "Operations (ERP)", text: "Operate your warehouse, transport your company’s products and control your inventory. Consolidate your shipments to reduce transportation costs. Give your warehouse managers automated workflow tools so they can respond quickly to changing demands in your business. Manage your workforce and streamline your hiring processes to help reduce errors and save time and money." }
        ]

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
              <div className="filler" />
            </div>
        )
    }
}

export default Dynamics365