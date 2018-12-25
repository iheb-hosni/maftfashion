import React from 'react';
import Navmenu from './navmenu'
import Slider from './sliders'
import Text from './celebrate'
import About from './aboutus'
import Citation from './paralex'
 


export default function user() {
  return (
    <div>
         <Slider />
        <Text />
        <About />
        <Citation />
    </div>
  )
}
