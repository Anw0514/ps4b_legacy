import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import SubHeader from '../../reusable/SubHeader'

class ELearning extends Component {
    render() {
        return (
            <div className="page-content regular-section">
              <SubHeader title="Why e-Learning" />
              <Grid stackable padded relaxed='very' columns={2}>
                <Grid.Column>
                  <div style={{ width: "100%", height: "500px", backgroundColor: "blue"}}></div>
                </Grid.Column>
                <Grid.Column className="text-left">
                  <p className="drop-cap">
                    Whether your team has recently implemented new software or you are trying 
                    to improve efficiencies, our on-site & eLearning courses can make all the 
                    difference.
                  </p>
                  <p>
                    Did you know that 65% of employees report that they do not remember the 
                    specifics of on-site training they attended a week later? The simple fact 
                    is that once you implement a new software or process, it takes more than a 
                    1 or 2 day training course to get the most out of your investment.
                  </p>
                  <div style={{position: "relative"}}>
                  <blockquote className='blockquote'>
                    <h5 className="fs-2">
                      65% of employees report that they do not remember the specifics 
                      of on-site training they attended a week later
                    </h5>
                  </blockquote>
                  </div>
                  <p>
                    Our unique approach to training allows your team to continue eLearning several 
                    weeks and months after launch, this also allows you to accommodate for turnover 
                    and saves money.
                  </p>
                  <p>
                    PSI offers both free and paid training to help your organization with the transition 
                    to new software and processes. Please feel free to contact us and enjoy the training 
                    for you and your team. If you are looking for more advanced training in one of these 
                    or other subjects, please click here to request a detailed catalog of our training. 
                    Custom training for your proprietary software or processes is also available.
                  </p>
                </Grid.Column>
              </Grid>
            </div>
        )
    }
}

export default ELearning