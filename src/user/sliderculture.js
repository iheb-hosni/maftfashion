import React from 'react';
import {Link} from 'react-router-dom'
 
class CultureSlider extends React.Component{
    render(){
        return(
            <div className="cultureSlider">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="http://maftfashion.com/wp-content/uploads/2018/03/29547194_356241048210179_1158680745_n-960x840-960x840.jpg" alt="First slide" />
      <div className="carousel-caption d-none d-md-block">
    <h2 className="caption">THE CITY OF CULTURE A DREAM COME TRUE</h2>
     </div>
 </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="http://maftfashion.com/wp-content/uploads/2018/06/AliciaKeys-1400x840.jpg" alt="Second slide" />
      <div className="carousel-caption d-none d-md-block">
    <h2 className="caption">NO MAKEUP MOVEMENT</h2>
   
    </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="http://maftfashion.com/wp-content/uploads/2018/09/IMG_901328129-1400x840.jpg" alt="Third slide" />
      <div className="carousel-caption d-none d-md-block">
      <h2 className="caption"><Link to ="/why-freeping">WHY FREEPING ?</Link></h2>
    
    </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
            </div>
        )
    }
}
export default CultureSlider;