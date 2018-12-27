import React from 'react';
import Navmenu from './navmenu'
const fashion=[
    {
        fashionimg:"http://www.pleasemagazine.com/wp-content/uploads/2015/10/demna-balenciaga-300x200.jpg",
        fashiontxt:" all course for just USD $240 per year"
    },
    {
        fashionimg:"http://www.pleasemagazine.com/wp-content/uploads/2018/01/phonegame_BCT_calypsomahieu_08-300x240.jpg",
        fashiontxt:"Build Your Dream Career"
    },
    {
        fashionimg:"http://www.pleasemagazine.com/wp-content/uploads/2015/11/bfa-3-300x200.jpg",
        fashiontxt:"Digital Marketing"
    },
    {
        fashionimg:"http://www.pleasemagazine.com/wp-content/uploads/2015/04/SPRING-FLORALS-300x200.jpg",
        fashiontxt:"Fashion Styling Image Making"
    },
    {
        fashionimg:"http://www.pleasemagazine.com/wp-content/uploads/2015/09/burberry-ss16-1-300x200.jpg",
        fashiontxt:"The Art and Science of Buying"
    },
    {
        fashionimg:"http://www.pleasemagazine.com/wp-content/uploads/2018/03/shot-5-300x240.jpg",
        fashiontxt:"Fashion History for Today"
    },
]
const Fashion = props =>{
    const element = props.element;
  return (
    <div className="fashion-busi">
      
        <img className="fashion-img" src={element.fashionimg} />
        <div className="fashion-info">
          <h2 className="fashion-name">{element.fashiontxt}</h2>
          <input type="submit" className="explore-course" value="Explore Course" />
          
        </div>
      
    </div>
  );
}
const Fashions = () => {
    return (
      <div className="fashions-info">
      <div className="container">
            <div className="row">
        {fashion.map(elm => (
            <div className="col-lg-4 col-md-6 col-sm-12">
          <Fashion element={elm} />
            </div>
        ))}
        </div>
        </div>
      </div>
    );
  };
  export default Fashions;
