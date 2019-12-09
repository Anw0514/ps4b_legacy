import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import ComparisonTable from '../../reusable/ComparisonTable'
import AlternatingMedia from '../../reusable/AlternatingMedia'
import SubHeader from '../../reusable/SubHeader'

class Office365 extends Component {

    constructor() {
        super()
        this.plans = [
            { 
              "id": 1,
              "Title": "Business Essentials",
              "Price": "$5.00",
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
              "Price": "$8.30",
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
              "Price": "$12.50",
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
              "Price": "$11.99",
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
              "Price": "$7.99",
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
              "Price": "$19.99",
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
              "Price": "$34.99",
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
            <div className='bg-white top-pad-3'>
              <h3>Office 365</h3>
              <p> 
                Get the best productivity suite for your business! 
                <br />
                Migration and support included
              </p>
              <hr />
              <div className="narrow-width">
              <AlternatingMedia 
                images={[
                  require('../../assets/office365/be-mobile.jpg'),
                  require('../../assets/office365/collaboration.jpg'),
                  require('../../assets/office365/growth.jpg')
                ]} 
                content={[
                  {
                    title: "Be mobile! Access Office 365 from any location",
                    paragraphs: [
                      "Take your office with you wherever you go! Work from anywhere, on any device. Access Office 365 from your mobile phone, tablet or PC. No extra fees or configurations. Just login to your Office 365 portal, and you’re ready to work! Connect with the right people and share ideas and information at any time, from anywhere."
                    ]
                  },
                  {
                    title: "Collaborate better! Work from anywhere, anytime",
                    paragraphs: [
                      "Share and co-author documents in Office desktop and web-based apps. Use Lync to instantly connect with colleagues and customers as if they were sitting right next to you. Set up online meetings in minutes, send email and coordinate team work wherever you are!"
                    ]
                  },
                  {
                    title: "Grow Your Business! Simplify your IT",
                    paragraphs: [
                      "Simplify IT and give your team the best user experience. Free, automatic updates mean that small business owners can stop worrying about IT problems and focus on what matters most: growing their business."
                    ]
                  }
                ]} 
              />
              </div>
              <SubHeader marginTop title="All the Office 365 Plans for Your Business" />
              <div className="wide-section">
                <Card.Group centered>
                  <Card>
                    <Card.Content>
                      <Card.Header className="blue-1">Business Essentials</Card.Header>
                      <Card.Meta>$5.00 per user / month</Card.Meta>
                      <Card.Description>
                        Best for businesses that need business email and other business services. Office apps not included.
                      </Card.Description>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Content>
                      <Card.Header className="blue-1">Business</Card.Header>
                      <Card.Meta>$8.30 per user / month</Card.Meta>
                      <Card.Description>
                        Best for businesses that need Office apps plus cloud file storage and sharing. Business email not included.
                      </Card.Description>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Content>
                      <Card.Header className="blue-1">Business Premium</Card.Header>
                      <Card.Meta>$12.50 per user / month</Card.Meta>
                      <Card.Description>
                        Best for businesses that need business email, Office apps, and other business services.
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Card.Group>
                <Card.Group className="m-bottom-3" centered>
                  <Card>
                    <Card.Content>
                      <Card.Header className="blue-1">Pro Plus</Card.Header>
                      <Card.Meta>$11.99 per user / month</Card.Meta>
                      <Card.Description>
                        Office applications plus cloud file-storage and sharing. Business email not included.
                      </Card.Description>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Content>
                      <Card.Header className="blue-1">E1</Card.Header>
                      <Card.Meta>$7.99 per user / month</Card.Meta>
                      <Card.Description>
                        Business services—email, file storage and sharing, Office Online, meetings and IM, and more. Office applications not included.
                      </Card.Description>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Content>
                      <Card.Header className="blue-1">E3</Card.Header>
                      <Card.Meta>$19.99 per user / month</Card.Meta>
                      <Card.Description>
                        All the features of ProPlus and Office 365 E1 plus security and compliance tools, such as legal hold, data loss prevention, and more.
                      </Card.Description>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Content>
                      <Card.Header className="blue-1">E5</Card.Header>
                      <Card.Meta>$34.99 per user / month</Card.Meta>
                      <Card.Description>
                        All the features of Office 365 E3 plus advanced security, analytics, and voice capabilities.
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Card.Group>
                <ComparisonTable criterion={this.criteria} items={this.plans} />

              </div>
            </div>
        )
    }
}

export default Office365