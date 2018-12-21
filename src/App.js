import React, { Component } from 'react';

import {BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import Navmenu from './user/navmenu'
import  Footer from './user/footer'
 import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Navmenu />
          <Routes />       
       <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
