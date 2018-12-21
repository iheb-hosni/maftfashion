import React from 'react'

const designerOfTheMonthArticle=[
        {
            articleimage:"https://i.imgur.com/YZsjr9A.jpg",
            articletitle:"article"
        },
        {
            articleimage:"https://i.imgur.com/jYdaRxG.jpg",
            articletitle:"article"
        },
        {
            articleimage:"https://i.imgur.com/zlDayzo.jpg",
            articletitle:"article"
        }
    ]
    const DesignerOfTheMonthArticle = props =>{
        const element = props.element;
      return (
        <div className="designofthemonth-article">
          
            <img className="designoftheMonth-img" src={element.articleimage} />
            <div className="designOfTheMonth-info">
              <h2 className="designOfTheMonthArticle-name">{element.articletitle}</h2>
               
            </div>
          
        </div>
      );
    }
    const DesignerOfTheMonthArticles = () => {
        return (
          <div className="designerOfTheMonth-infos">

           <div className="container">
                <div className="row">
            {designerOfTheMonthArticle.map(elm => (
                <div className="col-lg-4 col-md-6 col-sm-12">
              <DesignerOfTheMonthArticle element={elm} />
                </div>
            ))}
            </div>
            </div>
          </div>
        );
      };
      export default DesignerOfTheMonthArticles;