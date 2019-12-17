import React, { Component } from 'react'
import AlternatingMedia from '../../reusable/AlternatingMedia'
import SubHeader from '../../reusable/SubHeader'
import LoneParagraph from '../../reusable/LoneParagraph'
import { workplaceModernization } from '../../Data'

class WorkplaceModernization extends Component {
    render() {
      const { images, content } = workplaceModernization.altMedia
        return (
          <div className='bg-light-grey'>
            <div className='page-content'>
              <SubHeader paddingTop title="Workplace Modernization" />
              <LoneParagraph
                text={["Transform your workplace without the chaos. To be mobile, remote, and constantly connected are some today's workforce needs. PSI professionals will help you create a more modernized workplace to accommodate workforce needs and reduce the chaos. As your trusted professionals we will work together to help your team achieve improved collaboration, update their devices, and help bring your business up to speed"]}
                list={["Microsoft 365", "Office 365", "Windows 10 Enterprise", "Exchange Online", "Microsoft Teams", "Microsoft Surface"]}
              />
              <div className="regular-width">
                <AlternatingMedia
                  images={images}
                  content={content}
                  mobile={this.props.mobile}
                  left
                />
              </div>
            </div>
          </div>
        )
    }
}

export default WorkplaceModernization