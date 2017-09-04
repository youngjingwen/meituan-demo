import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import {
  BrowserRouter as Router
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <div className="header-wrap">
            <Header />
          </div>
          <div className="main-wrap">
            <Main />
          </div>
          <div className="footer-wrap">
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
