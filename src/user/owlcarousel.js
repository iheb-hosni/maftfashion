import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const options = {
    items: 4,
};
class Hello extends React.Component{
  render()
  {
    return (
    <OwlCarousel
    className="owl-theme"
    loop
     nav
     autoplay
>
      <div class="item"><img className="owl-img" src="http://maftfashion.com/wp-content/uploads/2018/09/IMG_901328129-300x450.jpg"/>
      <span className="owl-title">Why Freeping</span>
      </div>
     <div class="item"><img className="owl-img" src="http://maftfashion.com/wp-content/uploads/2018/11/balenciaga-triple-s-red-blue-2-300x437.jpg"/>
     <span className="owl-title">How the ugly dad shoes became trendy?</span>
     </div>
     <div class="item"><img className="owl-img" src="http://maftfashion.com/wp-content/uploads/2018/02/nyfw-fw18-street-style-day5-tyler-joe-015-1518557046-300x450.jpg"/>
     <span className="owl-title" >THE BEST STREET STYLE <br/> LOOKS  FROM NEW YORK FASHION <br/> WEEK FALL 2018</span>
     </div>
     <div class="item"><img className="owl-img" src="http://maftfashion.com/wp-content/uploads/2018/06/AliciaKeys-300x450.jpg"/>
     <span className="owl-title">NO MAKEUP MOVEMENT</span>
     </div>
     <div class="item"><img className="owl-img" src="http://maftfashion.com/wp-content/uploads/2018/04/cover-840x441-300x441.jpg"/>
     <span className="owl-title">Spring it UP</span>

     </div>
 </OwlCarousel>
    )
  }
}
export default Hello