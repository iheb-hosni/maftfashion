import React from 'react'
import Navmenu from './navmenu'
class Designer extends React.Component{
    render(){
        return(

            <div className="container-fuild">
                        <Navmenu />

            <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12 designer-articles">
              <h1>Designer of the month</h1>
              
                <div className="crowned">
                 
                </div>
            </div>
            <div className="col-log-4 col-md-12 col-sm-12">
              <h2>Designer of the month</h2>
            
            </div>
            </div>
            </div>
        )
    }
}
export default Designer;