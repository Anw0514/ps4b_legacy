import React, { Component } from 'react';
import '../css/App.css';
import '../css/basic.css'
import "../assets/iconsmind/iconsmind.css";
import NavBar from '../constants/NavBar';
import Content from './Content';
import Footer from '../constants/Footer';
import Header from "../reusable/Header";
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

  render () {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Header page={this.state.page} />
          <Content />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
