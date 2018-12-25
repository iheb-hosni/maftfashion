 import React from 'react'
 const CarouselCards = ({ image, title }) => (
    <div className="carousel-card">
      <div
        className="carousel-card-image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="carousel-card-title">{title}</div>
    </div>
  );
  
  function CarouselCardSImage() {
    return (
      <div className="carousel-card-image">
        <CarouselCards
          image="http://maftfashion.com/wp-content/uploads/2018/11/balenciaga-triple-s-red-blue-2-300x437.jpg"
          title="How the ugly dad shoes became trendy? ?"
        />
        <CarouselCards
          image="http://maftfashion.com/wp-content/uploads/2018/05/33342196_383885262112424_18058473463873536_n-300x450.jpg"
          title="Fashion Week Tunis 2018 : Review"
        />
        <CarouselCards
          image="http://maftfashion.com/wp-content/uploads/2018/04/cover-840x441-300x441.jpg"
          title="SPRING IT UP"
        />
        <CarouselCards
          image="http://maftfashion.com/wp-content/uploads/2018/09/sewing-machine2x1500-850x563-300x450.jpg"
          title="ETHICAL FASHION"
        />
        <CarouselCards
          image="http://maftfashion.com/wp-content/uploads/2018/06/AliciaKeys-300x450.jpg"
          title="NO MAKEUP MOVEMENT"
        />
      </div>
    );
  }
  export default CarouselCardSImage;