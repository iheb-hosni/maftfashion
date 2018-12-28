import React from 'react';
import Navmenu from './navmenu'
import Cards from './card'
 class Concept extends React.Component{
    render(){
        return(
            <div>
             <div className="maft-info">
                <h1 className="concept-title text-focus-in">Concept</h1>
                <p className="maft-concept">
                Maft Fashion gives designers a platform where they can connect with a global audience and expose their <br />
                 designs from anywhere in the world. <br />
Tunisia is a country where the fashion sector has the potential to shine in the future. Efforts will have to be made <br /> 
in the structuring and development of this sector. <br />
Maft Fashion is an online platform that promotes and supports emerging designers, artists <br />
 and potential projects. It will be devoted mainly to facilitate growth and creative innovation within the fashion industry. <br />
The idea is to bring together designers, artists, photographers, stylists and models who are creating a new wave <br /> in the fashion scene but also to tell their stories and to share their portfolios and their collections. <br />
  The platform has an educational purpose by offering online courses, guides and especially talking about fashion <br />
   history… Our educational section gives future fashion professionals all the information they need while taking <br />
    their first Steps in the fashion world. <br/>
Maft Fashion is a resource for opening up the fashion industry to a new audience, giving young people access to <br/>
 valuable content about fashion education not previously provided.
                </p>

            </div>
            <div>
                <Cards />
             </div>
            </div>
        )
    }
}
export default Concept;