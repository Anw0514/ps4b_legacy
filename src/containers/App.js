import React, { Component } from 'react';
import '../css/App.css';
import NavBar from '../constants/NavBar';
import Content from './Content';
import Footer from '../constants/Footer';

class App extends Component {

  render () {
    return (
      <div className="App">
        <NavBar />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
