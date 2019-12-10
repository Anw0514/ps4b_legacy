import React, { Component } from 'react'
import SubHeader from '../reusable/SubHeader'
import ImgDiv from '../reusable/ImgDiv'
import IconParagraph from '../reusable/IconParagraph'
import LoneParagraph from '../reusable/LoneParagraph'
import { Grid } from 'semantic-ui-react'
import StyledList from '../reusable/StyledList'

class Solutions extends Component {

    constructor() {
        super()
        this.mColData = [
            {
                title: "Business",
                description: "Microsoft 365 brings together the best-in-class productivity of Office 365 with simple device management and security to connect people and information in an intelligent new way.",
                data: [
                    [
                        "Everything you need, everywhere you need it", 
                        "Comes with Office", 
                        "Email and calendaring", 
                        "Chat, call, and meet",
                        "Cloud Storage"
                    ], 
                    [
                        "Don't drown in paperwork", 
                        "Manage your customers", 
                        "Streamline customer feedback", 
                        "Make repetitive tasks easy",
                        "Work with what you have"
                    ],
                    [
                        "Protect what matters most", 
                        "Defend against malware",
                        "Stay in control", 
                        "Keep customer data safe"
                    ]
                ]
            },
            {
                title: "Enterprise",
                description: "Microsoft 365 combines best-in-class productivity apps with intelligent cloud services to transform the way you work.",
                data: [
                    [
                        "Optimize your workplace",
                        "Engage employees",
                        "Transform workplace collaboration",
                        "Harness organizational insights",
                        "Create a data driven culture"
                    ],
                    [
                        "Protect your business",
                        "Secure access to your enterprise",
                        "Safeguard your sensitive data",
                        "Respond to and manage risk",
                        "Defend your digital landscape"
                    ],
                    [
                        "Streamline business processes",
                        "Centralize apps and workflows",
                        "Automate routine tasks",
                        "Digitize your workflow"
                    ]
                ]
            }
        ]
    }

    buildLittleList(data) {
        const items = data.slice(1)
        return (
            <Grid.Column>
                <h6 className="fs-2">{ data[0] }</h6>
                <StyledList items={items} />
            </Grid.Column>
        )
    }

    microsoftColumns(col) {
        return (
            <Grid.Column>
                <h5>{col.title}</h5>
                <p>{ col.description }</p>
                <Grid stackable centered columns={2}>
                    { col.data.map( d => {
                        return this.buildLittleList(d)
                    }) }
                </Grid>
            </Grid.Column>
        )
    }

    render() {
        return (
            <div>
                <div className="bg-white regular-width">
                    <SubHeader title="Microsoft 365" marginTop marginBottom />
                    <Grid stackable divided columns={2}>
                        { this.mColData.map(c => {
                            return this.microsoftColumns(c)
                        }) }
                    </Grid>
                </div>
                <div className="filler" />
                <div className="bg-light-grey">
                    <SubHeader paddingTop marginBottom title="Apps and Infrastructure" />
                    <div className="narrow-width bg-white lone-paragraph rounded-corners">
                        <h5>How do we transform your infrastructure?</h5>
                        <p className="text-left drop-cap">
                            Practical Solutions, Inc. (PSI) is a leader in helping businesses 
                            transform and grow by optimizing their IT infrastructure. PSI 
                            understands that the key to transformation is an IT foundation 
                            that is stable, robust, and secure. As a Microsoft Gold partner, 
                            we rely heavily on Microsoft applications and infrastructure to 
                            ensure our clients have the right foundation to enable their 
                            business transformation.
                        </p>
                        <p className="text-left">
                            The PSI team can design, implement, and manage a complete 
                            end-to-end infrastructure optimization solution — transforming the 
                            IT infrastructure from a cost center into a strategic asset. We 
                            work closely with clients to develop a balanced solution that takes 
                            advantage of infrastructure optimization guidance from Microsoft, 
                            in order to help our clients create an efficient and sustainable IT 
                            environment. PSI can help clients assess basic IT capabilities within 
                            their infrastructure, and then execute a multi-tier improvement plan.
                        </p>
                    </div>
                    <div className="filler" />

                </div>
            </div>
        )
    }
}

export default Solutions