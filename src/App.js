import React, { Component } from 'react';
import Navmenu from './user/navmenu';
import Slider from './user/sliders';
 import About from './user/aboutus'
 import Citation from './user/paralex'
 import Text from './user/celebrate'
import Footer from './user/footer'
import Authentif from './admin/Authentif'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './admin/Routes'
 import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
       
        <Routes />
               
      </div>
      </Router>
    );
  }
}

export default App;
