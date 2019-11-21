import React, { Component } from 'react';
import NavBar from '../constants/NavBar';
import Content from './Content';
import Footer from '../constants/Footer';
import Header from "../reusable/Header";
import HomeHeader from "../reusable/HomeHeader"
import { BrowserRouter as Router } from 'react-router-dom'


class App extends Component {

  constructor() {
    super()
    this.state = {
      page: "/",
      lastPage: null
    }
  }

  componentDidMount() {
    this.setState({
      page: window.location.pathname
    })
  }

  goToPage(page) {
    this.setState({ page })
  }

  render () {
    return (
      <Router>
        <div className="App">
          <NavBar />
          {this.state.page === '/' ? 
            <HomeHeader /> : 
            <Header page={this.state.page} />
          }
          <Content goToPage={this.goToPage} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
