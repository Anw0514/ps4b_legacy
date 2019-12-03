import React, { Component } from 'react'

class Office365 extends Component {

    constructor() {
        super()
        this.plans = [
            { 
              "id": 1,
              "Title": "Business Essentials",
              "Standard Rate": "$5.00",
              "User Maximum": "300",
              "Office Online": true,
              "Office Desktop": false,
              "Office Mobile": false,
              "Personalized Search": true,
              "Corporate Video Portal": false,
              "Enterprise Management": false,
              "Self-Service Business Intelligence": false,
              "EDiscovery Center": false,
              "Compliance and Information Protection": false,
              "oneDrive": true,
              "Stream": true,
              "Exchange": true,
              "Teams": true,
              "Sharepoint": true,
              "Yammer": true,
              "PowerBI": false
            },
            { 
              "id": 2,
              "Title": "Business",
              "Standard Rate": "$8.30",
              "User Maximum": "300",
              "Office Online": true,
              "Office Desktop": true,
              "Office Mobile": true,
              "Personalized Search": false,
              "Corporate Video Portal": false,
              "Enterprise Management": false,
              "Self-Service Business Intelligence": false,
              "EDiscovery Center": false,
              "Compliance and Information Protection": false,
              "oneDrive": true,
              "Stream": true,
              "Exchange": false,
              "Teams": false,
              "Sharepoint": false,
              "Yammer": false,
              "PowerBI": false
            },
            { 
              "id": 3,
              "Title": "Business Premium",
              "Standard Rate": "$12.50",
              "User Maximum": "300",
              "Office Online": true,
              "Office Desktop": true,
              "Office Mobile": true,
              "Personalized Search": true,
              "Corporate Video Portal": false,
              "Enterprise Management": false,
              "Self-Service Business Intelligence": false,
              "EDiscovery Center": false,
              "Compliance and Information Protection": false,
              "oneDrive": true,
              "Stream": true,
              "Exchange": true,
              "Teams": true,
              "Sharepoint": true,
              "Yammer": true,
              "PowerBI": false
            },
            { 
              "id": 4,
              "Title": "Pro Plus",
              "Standard Rate": "$11.99",
              "User Maximum": "Unlimited",
              "Office Online": true,
              "Office Desktop": true,
              "Office Mobile": true,
              "Personalized Search": false,
              "Corporate Video Portal": false,
              "Enterprise Management": true,
              "Self-Service Business Intelligence": true,
              "EDiscovery Center": false,
              "Compliance and Information Protection": false,
              "oneDrive": true,
              "Stream": false,
              "Exchange": false,
              "Teams": false,
              "Sharepoint": false,
              "Yammer": false,
              "PowerBI": false
            },
            { 
              "id": 5,
              "Title": "E1",
              "Standard Rate": "$7.99",
              "User Maximum": "Unlimited",
              "Office Online": true,
              "Office Desktop": false,
              "Office Mobile": false,
              "Personalized Search": true,
              "Corporate Video Portal": true,
              "Enterprise Management": false,
              "Self-Service Business Intelligence": false,
              "EDiscovery Center": false,
              "Compliance and Information Protection": false,
              "oneDrive": true,
              "Stream": true,
              "Exchange": true,
              "Teams": true,
              "Sharepoint": true,
              "Yammer": true,
              "PowerBI": false
            },
            { 
              "id": 6,
              "Title": "E3",
              "Standard Rate": "$19.99",
              "User Maximum": "Unlimited",
              "Office Online": true,
              "Office Desktop": true,
              "Office Mobile": true,
              "Personalized Search": true,
              "Corporate Video Portal": true,
              "Enterprise Management": true,
              "Self-Service Business Intelligence": true,
              "EDiscovery Center": true,
              "Compliance and Information Protection": true,
              "oneDrive": true,
              "Stream": true,
              "Exchange": true,
              "Teams": true,
              "Sharepoint": true,
              "Yammer": true,
              "PowerBI": false
            },
            { 
              "id": 7,
              "Title": "E5",
              "Standard Rate": "$34.99",
              "User Maximum": "Unlimited",
              "Office Online": true,
              "Office Desktop": true,
              "Office Mobile": true,
              "Personalized Search": true,
              "Corporate Video Portal": true,
              "Enterprise Management": true,
              "Self-Service Business Intelligence": true,
              "EDiscovery Center": true,
              "Compliance and Information Protection": true,
              "oneDrive": true,
              "Stream": true,
              "Exchange": true,
              "Teams": true,
              "Sharepoint": true,
              "Yammer": true,
              "PowerBI": true
            }
        ]
        this.criteria = [
          "Title",
          "Standard Rate",
          "User Maximum",
          "Office Online",
          "Office Desktop",
          "Office Mobile",
          "Personalized Search",
          "Corporate Video Portal",
          "Enterprise Management",
          "Self-Service Business Intelligence",
          "EDiscovery Center",
          "Compliance and Information Protection",
          "oneDrive",
          "Stream",
          "Exchange",
          "Teams",
          "Sharepoint",
          "Yammer",
          "PowerBI"
        ]
        this.state = {
            compare: false,
            selectedPlans: [1, 2, 3, 4, 5, 6, 7]
        }
    }



    render() {
        return (
            <div className='bg-light-grey'>
              <h3 className="fs-3 top-pad-3">Office 365</h3>
              <p> 
                Get the best productivity suite for your business! 
                <br />
                Migration and support included
              </p>
              <hr />
              
            </div>
        )
    }
}

export default Office365