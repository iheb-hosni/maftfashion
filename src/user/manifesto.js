import React from 'react';
import  CarouselCard from './carouselcard'
 class Manifesto extends React.Component{
    render(){
        return(
    <div className="manifesto">
        
        <h1 className="manifesto-title">Manifesto</h1>
          <div className="manifesto-texte">
              <p className="manifesto-txt">Maft Fashion gives designers a platform where they can connect with a global audience and expose their 
designs from anywhere in the world. 
Tunisia is a country where the fashion sector has the potential to shine in the future. Efforts will have to be made 
in the structuring and development of this sector. 
Maft Fashion is an online platform that promotes and supports emerging designers, artists 
and potential projects.</p>
        </div>  
        <div>
            <CarouselCard />
         </div>
            
        
       
    </div>
        )
    }
}
export default Manifesto;