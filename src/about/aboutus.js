import React from 'react';
import Articles from '../articles/articleshome'

class About extends React.Component{
    render(){
        return(
            <div className="container-fuild about "> 
        <div className="row myrow">
        <div className="col-lg-10 col-md-6 col-sm-12" >
    <Articles />
              
            
</div>      
<div className=" col-lg-2 col-md-6 col-sm-12 ads">
            <p>ads</p>
               </div>
        
</div>
</div>
        )
    }
}
export default About;