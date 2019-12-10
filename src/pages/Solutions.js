import React, { Component } from 'react'
import SubHeader from '../reusable/SubHeader'
import ImgDiv from '../reusable/ImgDiv'
import IconParagraph from '../reusable/IconParagraph'
import LoneParagraph from '../reusable/LoneParagraph'

class Solutions extends Component {

    constructor() {
        this.m365Data = [
            {
                name: "Business",
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
                name: "Enterprise",
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

    render() {
        return (
            <div>
                <div className="bg-white regular-width">
                
                </div>
                Solutions
            </div>
        )
    }
}

export default Solutions