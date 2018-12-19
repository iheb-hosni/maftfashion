import React, { Component } from 'react';
import Navmenu from './navbar/navmenu';
import Slider from './slider/sliders';
 import About from './about/aboutus'
 import Citation from './paralex/paralex'
 import Text from './celebrate/celebrate'
import Footer from './footer/footer'
 import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
           <Navmenu />
           <Slider />
           <Text />
            <About />
             <Citation />
            <Footer />
         </header>
      </div>
    );
  }
}

export default App;
