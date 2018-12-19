import React, { Component } from 'react';
import Navmenu from './navbar/navmenu';
import Slider from './slider/sliders';
 import About from './about/aboutus'
 import Citation from './paralex/paralex'
import Footer from './footer/footer'
import Authentif from './admin/Authnetif'
 import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
           <Navmenu />
           <Slider />
            <About />
             <Citation />
            <Footer />
            <Authentif />
         </header>
      </div>
    );
  }
}

export default App;
