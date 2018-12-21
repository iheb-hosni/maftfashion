import React from 'react'
import Navmenu from './navmenu'
import DesignerOfTheMonthArticles from './designerOfTheMonthArticle'
class Designer extends React.Component{
    
    render(){
        return(

        <div className="container-fluid">
                        <Navmenu />


            <div className="row">
             
                <div className="col-lg-8 col-md-12 col-sm-12 designer-articles">
                     <h2 className="designerOfTheMonth">Designer of the month</h2>
              
                <div className="crowned">
                    </div>
                     <h3 className="designerOfTheMonth">Designer Name</h3>
                      <img className="designerOfTheMonth-article" src="https://imgur.com/rHwHwwj.jpg" />
                      <h2 >article</h2>
                      <div>
                          <DesignerOfTheMonthArticles />
                      </div>
                    </div>
             <div className="col-lg-4 col-md-12 col-sm-12 designer-blok">
              <h2 className="designerOfTheMonth-identif">Designer of the month</h2>
            
             </div>
             
            </div>
        </div>
        )
    }
}
export default Designer;