import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'

import { Card, CardImg, CardText, CardBody,
    
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const cardinfo =[
    {
    cardimg:"https://i.imgur.com/dc1t9ze.png",
    CardText:"About Mariem"
    },
    {
        cardimg:"https://i.imgur.com/2eOB90i.png",
        CardText:"About Malek"
        }
]
const Cardd = (props) => {
    const element =props.element
  return (
    <div>
      <Card>
        <CardImg className="card-img" src={element.cardimg} alt="Card image cap" />
        <CardBody>
           <CardSubtitle className="card-txt"><Link to ="/{{element.cardText}}">{element.CardText}</Link></CardSubtitle>
          </CardBody>
      </Card>
    </div>
  );
};
const Cards =()=>{
    return(
        <div className=" row">
         <div className="col-md-12 col-sm-12 cards">
            {cardinfo.map(el=>(
                <Cardd element={el} />
            ))} 
            </div>
        </div>
    )
}
export default Cards;