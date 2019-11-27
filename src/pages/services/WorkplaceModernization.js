import React, { Component } from 'react'
import AlternatingMedia from '../../reusable/AlternatingMedia'

class WorkplaceModernization extends Component {
    render() {
        return (
            <div>
                <AlternatingMedia 
                    images={[require('../../assets/backgrounds/background-2.jpg'), require('../../assets/imgDivs/data-center-consolidation-page-2.jpg')]}
                    content={[{ title: "Microsoft 365", paragraphs: ["Microsoft 365 brings together the productivity of Office 365, Windows 10, and work-anywhere mobility and always-on security in a cost-effective, subscription-based cloud service built for any size organization. With Microsoft 365, you can bring people, information, and insights together by creating a modern hub that fosters collaboration and keeps people productive on a platform that's always up to date.", "Put your move to Microsoft 365 in the hands of the PSI cloud professionals. Our certified Microsoft engineers and cloud specialists will walk you through every step from deployment to management to get you ready to compete in our digital world."]},
                        { title: "Office 365", paragraphs: ["The cloud is delivering on its promises – anywhere and anytime access to data and apps using any device. And so is Office 365, a complete suite of familiar Office communications and collaboration apps plus cloud services – all built around a solid security framework."]}]} 
                    mobile={this.props.mobile}
                />
            </div>
        )
    }
}

export default WorkplaceModernization