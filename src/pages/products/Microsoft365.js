import React, { Component } from 'react'
import { Table, TabPane, Icon } from 'semantic-ui-react'

class Microsoft365 extends Component {
    render() {
        return (
            <div className='regular-section'>
              <Table className='text-center' basic='very' celled columns={4}>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell></Table.HeaderCell>
                    <Table.HeaderCell>
                      <h4 className="fs-2">Business</h4>
                      <div className="fs-2 grey">$21.95</div>
                      <p className="fs--1">per user / per month</p>
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                      <h4 className="fs-2">E3</h4>
                      <div className="fs-2 grey">$35.95</div>
                      <p className="fs--1">per user / per month</p>
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                      <h4 className="fs-2">E5</h4>
                      <div className="fs-2 grey">$63.95</div>
                      <p className="fs--1">per user / per month</p>
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      Max number of users
                    </Table.Cell>
                    <Table.Cell className='checked-cell'>
                      300
                    </Table.Cell>
                    <Table.Cell className='checked-cell'>
                      Unlimited
                    </Table.Cell>
                    <Table.Cell className='checked-cell'>
                      Unlimited
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      Office 365 applications
                    </Table.Cell>
                    <Table.Cell className='checked-cell'>
                      <Icon name='checkmark' />
                    </Table.Cell>
                    <Table.Cell className='checked-cell'>
                      <Icon name='checkmark' />
                    </Table.Cell>
                    <Table.Cell className='checked-cell'>
                      <Icon name='checkmark' />
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      1 TB file storage and sharing
                    </Table.Cell>
                    <Table.Cell className='checked-cell'>
                      <Icon name='checkmark' />
                    </Table.Cell>
                    <Table.Cell className='checked-cell'>
                      <Icon name='checkmark' />
                    </Table.Cell>
                    <Table.Cell className='checked-cell'>
                      <Icon name='checkmark' />
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      Microsoft Teams chat-based workspace
                    </Table.Cell>
                    <Table.Cell className='checked-cell'>
                      <Icon name='checkmark' />
                    </Table.Cell>
                    <Table.Cell className='checked-cell'>
                      <Icon name='checkmark' />
                    </Table.Cell>
                    <Table.Cell className='checked-cell'>
                      <Icon name='checkmark' />
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      Protect company data across devices
                    </Table.Cell>
                    <Table.Cell className='checked-cell'>
                      <Icon name='checkmark' />
                    </Table.Cell>
                    <Table.Cell className='checked-cell'>
                      <Icon name='checkmark' />
                    </Table.Cell>
                    <Table.Cell className='checked-cell'>
                      <Icon name='checkmark' />
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      Secure access to documents on mobile devices
                    </Table.Cell>
                    <Table.Cell className='checked-cell'>
                      <Icon name='checkmark' />
                    </Table.Cell>
                    <Table.Cell className='checked-cell'>
                      <Icon name='checkmark' />
                    </Table.Cell>
                    <Table.Cell className='checked-cell'>
                      <Icon name='checkmark' />
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      Protect Windows 10 devices against malware, viruses, and spyware with Windows Defender
                    </Table.Cell>
                    <Table.Cell className='checked-cell'>
                      <Icon name='checkmark' />
                    </Table.Cell>
                    <Table.Cell className='checked-cell'>
                      <Icon name='checkmark' />
                    </Table.Cell>
                    <Table.Cell className='checked-cell'>
                      <Icon name='checkmark' />
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      Self-service PC deployment with Windows AutoPilot
                    </Table.Cell>
                    <Table.Cell>
                      -
                    </Table.Cell>
                    <Table.Cell className='checked-cell'>
                      <Icon name='checkmark' />
                    </Table.Cell>
                    <Table.Cell className='checked-cell'>
                      <Icon name='checkmark' />
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      Automatically deploy Office apps to Windows 10 PCs
                    </Table.Cell>
                    <Table.Cell>
                      -
                    </Table.Cell>
                    <Table.Cell className='checked-cell'>
                      <Icon name='checkmark' />
                    </Table.Cell>
                    <Table.Cell className='checked-cell'>
                      <Icon name='checkmark' />
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      PSTN Conferencing, Cloud PBX with OneDrive
                    </Table.Cell>
                    <Table.Cell>
                      -
                    </Table.Cell>
                    <Table.Cell>
                      -
                    </Table.Cell>
                    <Table.Cell className='checked-cell'>
                      <Icon name='checkmark' />
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      Windows Defender Advanced Threat Protection, Office 365 Advanced Threat Protection, Office 365 Threat Intelligence
                    </Table.Cell>
                    <Table.Cell>
                      -
                    </Table.Cell>
                    <Table.Cell>
                      -
                    </Table.Cell>
                    <Table.Cell className='checked-cell'>
                      <Icon name='checkmark' />
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      Power BI Pro, MyAnalytics
                    </Table.Cell>
                    <Table.Cell>
                      -
                    </Table.Cell>
                    <Table.Cell>
                      -
                    </Table.Cell>
                    <Table.Cell className='checked-cell'>
                      <Icon name='checkmark' />
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
        )
    }
}

export default Microsoft365