import React, { Component } from 'react';
import NavBar from '../constants/NavBar';
import Content from './Content';
import Footer from '../constants/Footer';
import Header from "../constants/Header";
import HomeHeader from "../constants/HomeHeader"
import { BrowserRouter as Router } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ContactButton from '../reusable/ContactButton';
import { Modal } from 'semantic-ui-react'
import ContactForm from '../reusable/ContactForm'
import PrivacyPolicy from '../constants/PrivacyPolicy';

toast.configure({
  autoClose: 3000,
  position: "top-center"
})


class App extends Component {
  constructor() {
    super();
    this.state = {
      page: window.location.pathname,
      lastPage: null,
      mobile: true,
      dropdown: "",
      subject: "",
      contactModal: false,
      privacyPolicy: false
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

  goToPage = (page, subject) => {
    // Function to be clicked when moving to different path
    this.setState({
      page,
      dropdown: "",
      subject: subject ? subject : this.state.subject
    });
  };

  //  Functions to show the Nav dropdowns on hover
  dropdownNav = dropdown => {
    // onMouseEnter for each dropdown
    if (this.state.dropdown === "mobile" && dropdown === "mobile") {
      this.closeNav();
    } else {
      this.setState({ dropdown });
    }
  };

  closeNav = () => {
    // onMouseLeave for each dropdown
    this.setState({ dropdown: "" });
  };

  changeSubject = subject => {
    this.setState({ subject: subject.value });
  };

  toggleModal = () => {
    this.setState({ contactModal: !this.state.contactModal });
  };

  togglePP = () => {
    this.setState({ privacyPolicy: !this.state.privacyPolicy });
  };

  submitForm = () => {
    this.setState({ contactModal: false }, () => {
      toast.success("Successfully submitted form");
    });
  };

  render() {
    const {
      page,
      mobile,
      dropdown,
      subject,
      contactModal,
      privacyPolicy
    } = this.state;

    const noContactButton = page === "/" || page === "/contact";
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
            <Content
              changeSubject={this.changeSubject}
              submitForm={this.submitForm}
              subject={subject}
              mobile={mobile}
              openModal={this.toggleModal}
            />
            <Modal closeIcon open={contactModal} onClose={this.toggleModal}>
              <Modal.Header content="Contact Us" />
              <Modal.Content>
                <ContactForm
                  subject={this.props.subject}
                  changeSubject={this.props.changeSubject}
                  submitForm={this.submitForm}
                />
              </Modal.Content>
            </Modal>
            <PrivacyPolicy open={privacyPolicy} close={this.togglePP} />
            {noContactButton ? null : <ContactButton open={this.toggleModal} />}
            <Footer togglePP={this.togglePP} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
