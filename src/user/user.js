import React from 'react';
import Navmenu from './navmenu'
import Slider from './sliders'
import Text from './celebrate'
import About from './aboutus'
import Citation from './paralex'
import Footer from './footer'



export default function user() {
  return (
    <div>
        <Navmenu />
        <Slider />
        <Text />
        <About />
        <Citation />
    </div>
  )
}
