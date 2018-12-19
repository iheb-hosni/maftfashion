import React, { Component } from 'react';
import Navmenu from './user/navmenu';
import Slider from './user/sliders';
 import About from './user/aboutus'
 import Citation from './user/paralex'
 import Text from './user/celebrate'
import Footer from './user/footer'
import Authentif from './admin/Authentif'
import Concept from "./user/concept"
import {BrowserRouter as Router , Route} from 'react-router-dom'
import Routes from './Routes'
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
