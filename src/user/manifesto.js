import React from 'react';
import  CarouselCard from './carouselcard'
 class Manifesto extends React.Component{
    render(){
        return(
    <div className="manifesto">
        
        <h1 className="manifesto-title">Manifesto</h1>
            
        <div>
            <CarouselCard />
         </div>
            
        
       
    </div>
        )
    }
}
export default Manifesto;