import React from 'react';
import Navmenu from '../navbar/navmenu'
import Example from '../concept/slider'
class Concept extends React.Component{
    render(){
        return(
            <div>
            <Navmenu />
            <div className="maft-info">
                <h1>Concept</h1>
                <p>
                Maft Fashion gives designers a platform where they can connect with a global audience and expose their designs from anywhere in the world.
Tunisia is a country where the fashion sector has the potential to shine in the future. Efforts will have to be made in the structuring and development of this sector.
Maft Fashion is an online platform that promotes and supports emerging designers, artists, and potential projects. It will be devoted mainly to facilitate growth and creative innovation within the fashion industry.
The idea is to bring together designers, artists, photographers, stylists and models who are creating a new wave in the fashion scene but also to tell their stories and to share their portfolios and their collections. The platform has an educational purpose by offering online courses, guides and especially talking about fashion history… Our educational section gives future fashion professionals all the information they need while taking their first Steps in the fashion world.
Maft Fashion is a resource for opening up the fashion industry to a new audience, giving young people access to valuable content about fashion education not previously provided.
                </p>

            </div>
            <div>
                <Example />
            </div>
            </div>
        )
    }
}
export default Concept;