import React from 'react';

class Slider extends React.Component{
    render(){
        return(
            <div className="full-widh-container sliders">
                <div id="carouselExampleIndicators" className="col-lg-12 col-md-12 col-sm-12 carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://static1.squarespace.com/static/579095c1b8a79bc4629250d1/t/582afeb5d482e9ed3b94e55c/1477901857226/frontlinefashion-banner.jpg?format=1500w" alt="First slide" />
      
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="http://www.britishfashioncouncil.com/uploads/files/1/News/david.jpg" alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://cache.cosmopolitan.fr/data/photo/w1000_ci/57/cover-tendance-automne-hiver1.jpg" alt="Third slide" />
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
export default Slider;