import React, { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from '../pages/Home'
import Company from '../pages/Company'
import Contact from '../pages/Contact'
import Solutions from '../pages/Solutions'
import Dynamics365 from '../pages/products/Dynamics365'
import ExchangeOnline from "../pages/products/ExchangeOnline";
import Microsoft365 from "../pages/products/Microsoft365";
import Office365 from "../pages/products/Office365";
import Products from "../pages/products/Products";
import DataCenterConsolidation from "../pages/services/DataCenterConsolidation";
import ELearning from "../pages/services/ELearning";
import NetworkTransformation from "../pages/services/NetworkTransformation";
import SecurityOptimization from "../pages/services/SecurityOptimization";
import Services from "../pages/services/Services";
import ManagedServices from "../pages/services/ManagedServices";
import WorkplaceModernization from "../pages/services/WorkplaceModernization";


class Content extends Component {

    constructor() {
        super()
        this.state = {
            scrollPosition: 0
        }
    }

    render() {
        return (
          <div className="content-page">
            <Switch>
              <Route exact path="/">
                <Home open={this.props.openModal} />
              </Route>
              <Route exact path="/company">
                <Company />
              </Route>
              <Route exact path="/contact">
                <Contact
                  subject={this.props.subject}
                  changeSubject={this.props.changeSubject}
                  submitForm={this.props.submitForm}
                />
              </Route>
              <Route exact path="/solutions">
                <Solutions />
              </Route>
              <Route exact path="/products">
                <Products />
              </Route>
              <Route exact path="/exchange-online">
                <ExchangeOnline />
              </Route>
              <Route exact path="/dynamics365">
                <Dynamics365 />
              </Route>
              <Route exact path="/microsoft365">
                <Microsoft365 />
              </Route>
              <Route exact path="/office365">
                <Office365 />
              </Route>
              <Route exact path="/services">
                <Services />
              </Route>
              <Route exact path="/managed-services">
                <ManagedServices />
              </Route>
              <Route exact path="/data-center-consolidation">
                <DataCenterConsolidation />
              </Route>
              <Route exact path="/e-learning">
                <ELearning />
              </Route>
              <Route exact path="/network-transformation">
                <NetworkTransformation />
              </Route>
              <Route exact path="/security-optimization">
                <SecurityOptimization />
              </Route>
              <Route exact path="/workplace-modernization">
                <WorkplaceModernization />
              </Route>
            </Switch>
          </div>
        );
    }
}

export default Content
