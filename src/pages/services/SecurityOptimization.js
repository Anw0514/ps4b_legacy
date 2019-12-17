import React, { Component } from 'react'
import AlternatingMedia from '../../reusable/AlternatingMedia'
import SubHeader from '../../reusable/SubHeader'
import LoneParagraph from '../../reusable/LoneParagraph'
import { securityOptimization } from '../../Data'

class SecurityOptimization extends Component {
    render() {

        const { images, content } = securityOptimization.altMedia

        return (
            <div className='bg-light-grey'>
                <div className='page-content'>
                    <SubHeader paddingTop title='How do we protect your enterprise?' />
                    <LoneParagraph text={["PSI professionals work with our clients to secure their Data and protect their people wherever they are. Hackers and malicious actors are always seeking a window of opportunity to harm companies and individuals by gaining access to sensitive and valuable information. PSI professionals as part of your team will ensure the security of your endpoints, networks, data center, and presence in the cloud. PSI provides number of solutions designed specifically to safeguard the information you store and share."]} />
                    <div className="regular-width">
                        <AlternatingMedia
                            images={images}
                            content={content}
                            mobile={this.props.mobile}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default SecurityOptimization