import React, { Component } from 'react'
import SubHeader from '../../reusable/SubHeader'
import LoneParagraph from '../../reusable/LoneParagraph'
import ImgDiv from '../../reusable/ImgDiv'

class ManagedServices extends Component {
    render() {
        return (
            <div className="page-content bg-light-grey">
                <SubHeader paddingTop title="How do we effectively manage services?" />
                <LoneParagraph text={["PSI takes pride in delivering world class IT managed services to our clients. For small to mid-size businesses, oftentimes it is too expensive and not economically feasible to invest in an internal IT group. That’s why we are here to step in where you need us – whether overseeing specific areas such as administering Office 365 or your back-end servers to help your current IT staff, or for end-to-end services where you don’t even have to think about your IT – we take care of everything.",
                                      "Our service models have various tiers that spread our services, from basic to premium, depending on your needs. We provide you with a friendly and responsive service team located in the US, along with a self-service ticketing system for efficient support and communication. We have several pricing structures and packages that we customize for each client, so please contact us to discuss the best option for your business."]} />
                <div className='filler' />
                <ImgDiv 
                  image={require("../../assets/imgDivs/managed-services.jpg")}
                  list={["IT Change management and communication",
                         "Asset consolidation and management",
                         "Network and Server infrastructure oversight",
                         "Mobile Device Management",
                         "Hardware/Software",
                         "Monitoring",
                         "Patching",
                         "Data Backup and Recovery",
                         "Custom plans/pricing models available",
                         "US-based team",
                         "Custom reporting",
                         "Self-Service Ticketing",
                         "Periodical Reviews"
                       ]}
                  title="Some highlights of the services we offer include:"
                />
                <SubHeader paddingTop title="We are your Practical IT Department" />
                <LoneParagraph contactText="Contact us and see for yourself!" text={["Within our managed services, PSI emphasizes proactive maintenance and security. Our staff are continuously trained on the latest technologies and security threats and take a vigilant approach with all our clients to ensure their IT assets and domains remain safe and fully operational. We deploy the most current and stable cutting-edge tools and techniques to manage, monitor, and correct your IT environment. We adopt our unique strategy along with applying our staff’s relevant experience to build a unique service model tailored specifically to your needs and budget.",
                                      "As your managed service provider, we are an extension of your team and your one-stop partner for all your IT needs. Our driving goals are to improve your operations and cut your expenses. We use this philosophy as a foundation to our service approach from beginning to end. We are real people and we know not everyone understands intricate and technical IT concepts, so we know when to simply these concepts to enable the best decisions for your organization."]} />
                <div className='filler' />
            </div>
        )
    }
}

export default ManagedServices