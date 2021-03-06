import React from 'react';
import {Link} from 'react-router-dom'

class Slider extends React.Component{
    render(){
        return(
           
             
               <div id="carouselExampleIndicators" className="col-lg-12 col-md-12 col-sm-12 carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 rr" src="https://i.imgur.com/8L4MuqV.jpg" alt="First slide"/>
    </div>
    <div className="carousel-item">
     <Link to ="/ekcci"> <img className="d-block w-100 rr" src="https://i.imgur.com/FFnCuCL.jpg" alt="Second slide" /></Link>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 rr" src="https://i.imgur.com/PlVUDzd.jpg" alt="Third slide" />
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
               
               
                
            
        )
    }
}
export default Slider;