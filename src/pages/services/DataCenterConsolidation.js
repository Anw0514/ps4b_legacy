import React, { Component } from 'react'
import SubHeader from '../../reusable/SubHeader'
import LoneParagraph from '../../reusable/LoneParagraph'
import ImgDiv from '../../reusable/ImgDiv'

class DataCenterConsolidation extends Component {
    render() {
        return (
            <div className="page-content bg-light-grey">
                <SubHeader paddingTop title="How do we consolidate your data?" />
                <LoneParagraph text={["A common problem enterprise IT groups face is the resource flooding that occurs in their data centers throughout the years. This cycle is inevitable in most environments and is typically the result of a growing collection of small inefficiencies. When combined, these inefficiencies create a bloated environment that wastes significant resources and causes frustration that often makes its way to the organization’s clients. There comes a time when it makes the best financial sense to invest in a data consolidation effort.",
                                      "Practical Solutions, Inc. (PSI) has solidified its reputation throughout the years as an expert in consolidating data centers using proprietary strategies along with current technologies to provide the most efficient custom architecture. PSI partners with clients of any size and industry to select the desired optimum technology, the right level of engineering complexity, and the capabilities of management in order to realize efficiencies and reduce resources while growing functionality. The PSI team will help clients:"]} />
                <ImgDiv 
                  image={require("../../assets/imgDivs/data-center-consolidation-page-2.jpg")}
                  list={["Lower computing costs", 
                         "Lower infrastructure footprint and facility costs", 
                         "Identify world class SAS 70 AICPA data center facilities", 
                         "Attain a competitive advantage for Time to Market and operational mobility",
                         "Lower manpower footprint to support IT infrastructure",
                         "De-couple applications from infrastructure constraints"
                       ]}
                  title="The PSI team will help clients:"
                />
                <div className="narrow-section bg-white lone-paragraph text-left">
                    <p>PSI’s Solution Delivery Methodology (SDM©) looks at all three dimensions that make up the desired solution: Technology, Engineering, and Management to structure the delivery of any solution in a prescribed Solution Delivery Lifecycle (SDL©). PSI will work with clients to identify all three dimensions of the desired solution:</p>
                    <p>Technology dimension: Identifying the specific cloud platform, and whether a standard or hybrid platform consisting of multiple vendors is appropriate.</p>
                    <p>Engineering dimension: Working with the client to identify desired services such as moving computers, storage, and/or network services, and selecting the appropriate cloud provider.</p>
                    <p>Management dimension: Identifying measures to set risk parameters that may prompt the transfer of operations to the cloud when existing operations are at risk. Another example is setting policies for data back up with alternative providers and developing policies to ensure security and compliance standards in the cloud.</p>
                </div>
            </div>
        )
    }
}

export default DataCenterConsolidation