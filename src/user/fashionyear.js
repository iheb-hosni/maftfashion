import React from 'react';
import Navmenu from './navmenu'

const fashionyear =[
    {
        yearimg:"https://2lth8w1uv77536l8d72pqh10-wpengine.netdna-ssl.com/wp-content/uploads/1920s-mens-fashion-suits-vintagedancer-com-614x800.jpg",
        articletitle:" fashion 1920"
    },
    {
        yearimg:"http://www.catwalkyourself.com/wp-content/uploads/2012/08/H_catwalk_yourself_1920s_opening1.jpg",
        articletitle:"women's 1920 fashion"
    },
    {
        yearimg:"https://image.glamourdaze.com/2014/05/Coco-Chanel-suits-Paris-1926.jpg",
        articletitle:"1926 fashion"
    },
    {
        yearimg:"http://nextluxury.com/wp-content/uploads/1920s-mens-fashion-shoes-and-suits-with-hat.jpg",
        articletitle:"men's 1920 suits"
    },
    {
    yearimg:"http://jpninfo.com/wp-content/uploads/2015/11/fashion-1920s.jpg",
    articletitle:"1925 fashion"
    },
    {
        yearimg:"http://nextluxury.com/wp-content/uploads/1920s-fashion-mens-hats.jpg",
        articletitle:"1920s suits"
    }

]
const Fashionyear = props =>{
    const element = props.element;
  return (
    <div className=" fasion-year">
     
        <img className="fashionyear-img" src={element.yearimg} />
        <div className="fashionyear-info">
          <h2 className="fashion-year-name">{element.articletitle}</h2>
          
          
        
        </div>
    </div>
  );
}
const Fashionyears= () => {
    return (
      <div className="years-info">
      <Navmenu />
      <div className="container ">
         <div className="row">
         {fashionyear.map(elm => (
       <div className='col-lg-4 col-md-6 col-sm-12'>
          <Fashionyear element={elm} />
       </div>
        ))}
         </div>
      </div>
      </div>
    );
  };
  export default Fashionyears