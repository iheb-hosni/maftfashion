import React from "react";
 
const CarouselCard = ({ image, title }) => (
  <div className="carousel-card">
    <div
      className="carousel-card-image"
      style={{ backgroundImage: `url(${image})` }}
    />
    <div className="carousel-card-title">{title}</div>
  </div>
);

function CarouselCardImage() {
  return (
    <div className="carousel-card-image">
      <CarouselCard
        image="http://maftfashion.com/wp-content/uploads/2018/09/IMG_901328129-300x450.jpg"
        title="Why Freeping ?"
      />
      <CarouselCard
        image="https://i.imgur.com/gYwDLcS.jpg"
        title="NO MAKEUP MOVEMENT"
      />
      <CarouselCard
        image="http://maftfashion.com/wp-content/uploads/2018/04/cover-840x441-300x441.jpg"
        title="SPRING IT UP"
      />
      <CarouselCard
        image="http://maftfashion.com/wp-content/uploads/2018/09/sewing-machine2x1500-850x563-300x450.jpg"
        title="ETHICAL FASHION"
      />
      <CarouselCard
        image="http://maftfashion.com/wp-content/uploads/2018/05/33342196_383885262112424_18058473463873536_n-300x450.jpg"
        title="FASHION WEEK TUNIS"
      />
    </div>
  );
}
export default CarouselCardImage;