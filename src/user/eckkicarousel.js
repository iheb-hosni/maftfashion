import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const options = {
    items: 4,
};
class Eckkicarousel extends React.Component{
  render()
  {
    return (
    <OwlCarousel
    className="owl-theme"
    loop
     nav
     autoplay
>
      <div class="item"><img className="owl-img" src="https://i.imgur.com/0FnGym8.jpg"/>
       </div>
     <div class="item"><img className="owl-img" src="https://i.imgur.com/rI24erp.jpg"/>
      </div>
     <div class="item"><img className="owl-img" src="http://maftfashion.com/wp-content/uploads/2018/11/DSC_0566.jpg"/>
      </div>
     <div class="item"><img className="owl-img" src="http://maftfashion.com/wp-content/uploads/2018/11/DSC_0558.jpg"/>
      </div>
     <div class="item"><img className="owl-img" src="http://maftfashion.com/wp-content/uploads/2018/11/DSC_0555.jpg"/>
 
     </div>
 </OwlCarousel>
    )
  }
}
export default Eckkicarousel