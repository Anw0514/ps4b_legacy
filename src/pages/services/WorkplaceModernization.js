import React, { Component } from 'react'
import AlternatingMedia from '../../reusable/AlternatingMedia'

class WorkplaceModernization extends Component {
    render() {
        return (
        <div className='bg-light-grey'>
            <div className='page-content'>
                <AlternatingMedia 
                    images={[
                        require('../../assets/workplace-modernization/microsoft365.jpg'), 
                        require('../../assets/workplace-modernization/office365.png'), 
                        require('../../assets/workplace-modernization/ten-enterprise.png'), 
                        require('../../assets/workplace-modernization/exchange-online.png'), 
                        require('../../assets/workplace-modernization/teams.png'), 
                        require('../../assets/workplace-modernization/surface.png'), 
                    ]}
                    content={[
                        { 
                          title: "Microsoft 365", 
                          paragraphs: [
                            "Microsoft 365 brings together the productivity of Office 365, Windows 10, and work-anywhere mobility and always-on security in a cost-effective, subscription-based cloud service built for any size organization. With Microsoft 365, you can bring people, information, and insights together by creating a modern hub that fosters collaboration and keeps people productive on a platform that's always up to date.", 
                            "Put your move to Microsoft 365 in the hands of the PSI cloud professionals. Our certified Microsoft engineers and cloud specialists will walk you through every step from deployment to management to get you ready to compete in our digital world."
                          ]
                        },
                        { 
                          title: "Office 365", 
                          paragraphs: [
                            "The cloud is delivering on its promises – anywhere and anytime access to data and apps using any device. And so is Office 365, a complete suite of familiar Office communications and collaboration apps plus cloud services – all built around a solid security framework.",
                            "When it's time, the cloud professionals at PSI will oversee your move to Office 365, guiding you through every step of the way, way including deployment, migration, and training your employees how to make the most of their new Office 365 productivity tools. Specialized plans are also available to suit the needs of government and non-profit entities and first line workers."
                          ]
                        },
                        { 
                          title: "Windows 10 Enterprise", 
                          paragraphs: [
                            "Windows 10 Enterprise is the most secure Windows ever, protecting your sensitive data, your devices, your customer identities, and your intellectual property – with enterprise-grade protection and control. With Windows 10, you can scale up or down month-to-month, reducing up-front costs with a pay-as-you-go subscription model. And it's easy to reassign licenses, onboard new employees, or add and manage additional cloud services as necessary.",
                            "And with PSI as your Microsoft Cloud Solutions Provider you've got a partner to manage everything – from pre-migration consulting, assessment services, and security strategy to deployment and ongoing management. You can focus on strategic priorities while we handle the day-to-day aspects of device configuration, implementation, and post-migration support."
                          ]
                        },
                        { 
                          title: "Exchange Online", 
                          paragraphs: [
                            "Exchange Online lets you maintain control over your environment while gaining the advantage of hosting your email on Microsoft servers. With automatic patching and robust security, Exchange Online eliminates the time and effort of maintaining your system. Now you can provide your users with anywhere access to email, calendar, and contacts on all major browsers and across most devices. And integration with Outlook means they'll enjoy a rich, familiar email experience with offline access."
                          ]
                        },
                        { 
                          title: "Microsoft Teams", 
                          paragraphs: [
                            "With Teams, everyone stays secure and connected with chat, calls, and meetings within team, private, or small group conversations. Team members can easily schedule and join online Skype meetings with HD video, VoIP, and dial-in audio conferencing options, and share files, apps, or desktops in online meetings. And Teams seamlessly integrates with Office 365 apps like SharePoint, OneNote, PowerBI, Planner, and more."
                          ]
                        },
                        { 
                          title: "Microsoft Surface", 
                          paragraphs: [
                              "Dive into the next generation of creativity and productivity with Surface from Microsoft and PSI. Experience unprecedented versatility and power with devices you can use as tablets, laptops, or even portable studios. Whether you need the lightweight portability of the Surface Go or the powerhouse performance of the Surface Book 2, there's something for everybody with Surface."
                          ]
                        }
                    ]} 
                    mobile={this.props.mobile}
                    left
                />
            </div>
        </div>
        )
    }
}

export default WorkplaceModernization