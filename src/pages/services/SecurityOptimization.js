import React, { Component } from 'react'
import AlternatingMedia from '../../reusable/AlternatingMedia'
import SubHeader from '../../reusable/SubHeader'
import LoneParagraph from '../../reusable/LoneParagraph'

class SecurityOptimization extends Component {
    render() {
        return (
            <div className='bg-light-grey'>
                <div className='page-content'>
                    <SubHeader paddingTop title='How do we protect your enterprise?' />
                    <LoneParagraph text={["PSI professionals work with our clients to secure their Data and protect their people wherever they are. Hackers and malicious actors are always seeking a window of opportunity to harm companies and individuals by gaining access to sensitive and valuable information. PSI professionals as part of your team will ensure the security of your endpoints, networks, data center, and presence in the cloud. PSI provides number of solutions designed specifically to safeguard the information you store and share."]} />
                    <div className="regular-width">
                        <AlternatingMedia
                            images={[
                                require('../../assets/security-optimization/security-assesment.jpg'),
                                require('../../assets/security-optimization/network-risk-assessment.jpg'),
                                require('../../assets/security-optimization/application-security-assesment.jpg'),
                                require('../../assets/security-optimization/HIPAA-security-assessment.jpg'),
                                require('../../assets/security-optimization/Authentication-Design-security.jpg'),
                                require('../../assets/security-optimization/web-email-security-assessment.jpg'),
                                require('../../assets/security-optimization/Authentication-security.jpg'),
                                require('../../assets/security-optimization/datal-loss-security.jpg'),
                                require('../../assets/security-optimization/endpoint-security-assessment.jpg'),
                            ]}
                            content={[
                                {
                                    title: "Security Assesments",
                                    paragraphs: [
                                        "Security and compliance should always be top of mind for modern businesses. Our assessments can identify shortcomings and suggest improvements that'll put you on solid ground.PSI professionals and solutions will help define your security strategy, improve your security posture, and achieve your compliance goals."
                                    ]
                                },
                                {
                                    title: "Network Risk & Vulnerability Assesments",
                                    paragraphs: [
                                        "PSI professionals as members of your team will help you define the current and future state of your security environment with a complete internal and external cybersecurity assessment. We'll determine how your organization maps to best practices, along with the steps needed to get to the next level of security and maintain a robust security environment as change occurs."
                                    ]
                                },
                                {
                                    title: "Application Security Assesment",
                                    paragraphs: [
                                        "PSI application security assessments include advisory services to provide an in-depth look at vulnerabilities in software."
                                    ]
                                },
                                {
                                    title: "HIPAA Security & Compliance Assesment",
                                    paragraphs: [
                                        "Our HIPAA Security Assessment is an in-depth appraisal of your organization's adherence to existing policies and industry best practices. After identifying any areas of weakness, we'll develop countermeasures in three areas – people, process, and technology – for HIPAA Security Rule requirements"
                                    ]
                                },
                                {
                                    title: "Endpoint Security Design & Implementation",
                                    paragraphs: [
                                        "The most proactive organizations leverage a layered and integrated approach in protecting every IT asset, whether a desktop, laptop, tablet, or smartphone. Modern-day endpoint protection solutions may include anti-virus, anti-spyware, personal firewall, application control, and elements of host intrusion prevention."
                                    ]
                                },
                                {
                                    title: "Web & Email Security Design & Implementation",
                                    paragraphs: [
                                        "Our team of security experts will design Web and Email Security Solutions custom to your environment to help protect your data, your business, and your reputation."
                                    ]
                                },
                                {
                                    title: "Authentication & Data Security",
                                    paragraphs: [
                                        "Managing data access is an important part of any company's security plan. Our experts can help you design and implement solutions for controlling and authenticating users on your network."
                                    ]
                                },
                                {
                                    title: "Data Loss Prevention Design & Implementation",
                                    paragraphs: [
                                        "PSI professionals will work with your team to identify and classify data critical to your business, who has access to it, and what they do with it. Our featured Data Loss Prevention Solutions detect potential data breaches/data loss transmissions and can execute responses ranging from simple notifications to active blocking – based on policy and rules defined to address the risk of inadvertent or accidental leaks or exposure of sensitive data outside authorized means."
                                    ]
                                },
                                {
                                    title: "Authentication Design & Implementation",
                                    paragraphs: [
                                        "PSI professionals and solutions will help define your security strategy, improve your security posture, and achieve your compliance goals."
                                    ]
                                }
                            ]}
                            mobile={this.props.mobile}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default SecurityOptimization