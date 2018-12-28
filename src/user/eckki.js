import React from 'react'
import Eckkkicarousel from './eckkicarousel'

class Eckki extends React.Component{
    render(){
        return(
            <div className="eckki-intro">
                <h1 className="text-focus-in">Discovering EKCCI</h1>
                 <p  className="eckki-text">
                 Since the beginning, Maft Fashion has been spotlighting incredible inspiring designers and Tunisian 
                 change-makers in the fashion industry. We come back once again with an interview with the Tunisian  jewelry designer behind EKCCI brand 
                 who launched it four years ago.
It was the day of our interview with Nesrine, when we discovered EKCCI ‘s world. We interacted with it when we assisted to Dhamma Live concert, held by Hors Lits. 
However, we had never seen what was hidden in this intriguing house.
We have met the designer Emna , Ekcci’s founder, at her showroom, where she presents her latest collection and other designers’ masterpieces.
 We were surprised when we discovered that two passionate women who happened to be sisters are actually managing the brand.
We were charmed by the coziness of the place and mostly the Atelier part when we Witnessed the Jewelry making manually. The first place that you discover when you enter the door is the showroom.  Surprisingly,
 you will not find only Ekkci’s jewelry and leather bags but also other Tunisian designers’ masterpieces. 
  We think that their products are very clean and minimal and are suitable for women who are looking for original details in small accessories.

                 </p>
                 <p className="eckki-brand">EXEMPLE OF OUR BRANDS</p>
                 
 <Eckkkicarousel />
 </div>
         )
    }
}
export default Eckki;