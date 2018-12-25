import React from 'react';
import CarouselCardSImage from './slidersnews'
 
class News extends React.Component{
    render(){
        return(
    <div className="manifesto">
            <h1 className="news-title">News</h1>

                <div>
                <CarouselCardSImage />
                </div>
   </div>
         )

    }
   
}
export default News;