import React, { Component } from 'react';
import '../css/App.css';
import '../css/basic.css'
import "../assets/iconsmind/iconsmind.css";
import NavBar from '../constants/NavBar';
import Content from './Content';
import Footer from '../constants/Footer';
import Header from "../reusable/Header";


class App extends Component {

  render () {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
