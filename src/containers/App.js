import React, { Component } from 'react';
import NavBar from '../constants/NavBar';
import Content from './Content';
import Footer from '../constants/Footer';
import Header from "../constants/Header";
import HomeHeader from "../constants/HomeHeader"
import { BrowserRouter as Router } from 'react-router-dom'


class App extends Component {
  constructor() {
    super();
    this.state = {
      page: window.location.pathname,
      lastPage: null,
      mobile: true,
      dropdown: "",
      tablet: false
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    // Manages mobile state for conditional rendering
    this.setState({
      mobile: window.innerWidth < 760
    });
  }

  goToPage = (page) => {
    // Function to be clicked when moving to different path
    this.setState({ page, dropdown: "" });
  }

  //  Functions to show the Nav dropdowns on hover
  dropdownNav = (dropdown) => {
    // onMouseEnter for each dropdown
    if (this.state.dropdown === "mobile" && dropdown === "mobile") {
      this.closeNav() 
    } else {
      this.setState({ dropdown });
    }
  }

  closeNav = () => {
    // onMouseLeave for each dropdown
    this.setState({ dropdown: "" });
  }

  render() {
    const { page, mobile, dropdown } = this.state
    return (
      <Router>
        <div className="App">
          <NavBar 
            mobile={mobile}
            dropdown={dropdown}
            dropdownNav={this.dropdownNav}
            closeNav={this.closeNav}
            goToPage={this.goToPage}
          />
          <div onClick={this.closeNav}>
          {page === "/" ? (
            <HomeHeader />
          ) : (
            <Header page={page} mobile={mobile} />
          )}
            <Content mobile={mobile} />
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
