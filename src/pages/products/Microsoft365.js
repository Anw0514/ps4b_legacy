import React, { Component, Fragment } from 'react'
import { Table, Icon, Image } from 'semantic-ui-react'
import ComparisonTable from '../../reusable/ComparisonTable'

class Microsoft365 extends Component {
    render() {
        return (
          <Fragment>
            <div className="narrow-section">
              <div className="subheader">
                <h3 className="fs-3">Microsoft 365</h3>
                  <p>
                    Microsoft bundled the best features from Office 365 and Windows 
                    10 with cross-device security to create Microsoft 365, the most 
                    innovative, intelligent, and secure solution on the market. This 
                    bundle includes everything you need to stay empowered, creative, 
                    and productive, all with just a single monthly subscription.
                  </p>
                  <hr />
              </div>
            </div>
            <div className='regular-section'>
              <Image className='m-bottom-3' centered src={require('../../assets/microsoft365-equation.png')} />
              <div className='subheader'>
                <h3 className='fs-3 m-bottom-3'>All the Microsoft 365 Plans for Your Business or Enterprise</h3>
              </div>
              <ComparisonTable
                items={[
                  {
                    "Title": "Business",
                    "Price": "$21.95",
                    "User maximum": "300",
                    "Office 365 applications": true,
                    "1 TB file storage and sharing": true,
                    "Microsoft Teams chat-based workspace": true,
                    "Protect company data across devices": true,
                    "Secure access to documents on mobile devices": true,
                    "Protect Windows 10 devices against malware, viruses, and spyware with Windows Defender": true,
                    "Self-service PC deployment with Windows AutoPilot": false,
                    "Automatically deploy Office apps to Windows 10 PCs": false,
                    "PSTN Conferencing, Cloud PBX with OneDrive": false,
                    "Windows Defender Advanced Threat Protection, Office 365 Advanced Threat Protection, Office 365 Threat Intelligence": false,
                    "Power BI Pro, MyAnalytics": false
                  },
                  {
                    "Title": "E3",
                    "Price": "$35.95",
                    "User maximum": "Unlimited",
                    "Office 365 applications": true,
                    "1 TB file storage and sharing": true,
                    "Microsoft Teams chat-based workspace": true,
                    "Protect company data across devices": true,
                    "Secure access to documents on mobile devices": true,
                    "Protect Windows 10 devices against malware, viruses, and spyware with Windows Defender": true,
                    "Self-service PC deployment with Windows AutoPilot": true,
                    "Automatically deploy Office apps to Windows 10 PCs": true,
                    "PSTN Conferencing, Cloud PBX with OneDrive": false,
                    "Windows Defender Advanced Threat Protection, Office 365 Advanced Threat Protection, Office 365 Threat Intelligence": false,
                    "Power BI Pro, MyAnalytics": false
                  },
                  {
                    "Title": "E5",
                    "Price": "$63.95",
                    "User maximum": "Unlimited",
                    "Office 365 applications": true,
                    "1 TB file storage and sharing": true,
                    "Microsoft Teams chat-based workspace": true,
                    "Protect company data across devices": true,
                    "Secure access to documents on mobile devices": true,
                    "Protect Windows 10 devices against malware, viruses, and spyware with Windows Defender": true,
                    "Self-service PC deployment with Windows AutoPilot": true,
                    "Automatically deploy Office apps to Windows 10 PCs": true,
                    "PSTN Conferencing, Cloud PBX with OneDrive": true,
                    "Windows Defender Advanced Threat Protection, Office 365 Advanced Threat Protection, Office 365 Threat Intelligence": true,
                    "Power BI Pro, MyAnalytics": true
                  }
                ]}
                criterion={[
                  "User maximum",
                  "Office 365 applications",
                  "1 TB file storage and sharing",
                  "Microsoft Teams chat-based workspace",
                  "Protect company data across devices",
                  "Secure access to documents on mobile devices",
                  "Protect Windows 10 devices against malware, viruses, and spyware with Windows Defender",
                  "Self-service PC deployment with Windows AutoPilot",
                  "Automatically deploy Office apps to Windows 10 PCs",
                  "PSTN Conferencing, Cloud PBX with OneDrive",
                  "Windows Defender Advanced Threat Protection, Office 365 Advanced Threat Protection, Office 365 Threat Intelligence",
                  "Power BI Pro, MyAnalytics"
                ]}
              />
            </div>
          </Fragment>
        )
    }
}

export default Microsoft365