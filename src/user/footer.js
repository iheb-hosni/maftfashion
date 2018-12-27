import React from 'react';
 import {Link} from 'react-router-dom'
class Footer extends React.Component{
    render(){
        return(
            
                <div className="container-fluid social">
		<div className="row">
			<div className="col-lg-8 col-md-6 col-sm-12 ">
               <div className= "col-lg-4 col-md-6 col-sm-12 img">
               <ul className="lien">
               	<li><Link to ="/concept"><a href="#">CONCEPT</a></Link></li>
               	<li><Link to ="/mafters"><a href="#">MAFTERS</a></Link></li>
               	<li><Link to ="/culture"><a href="#">CULTURE</a></Link></li>
                <li><Link to ="/inspiration"><a href="#">INSPIRATION</a></Link></li>
                	 
               </ul>
</div>
			</div>
			<div className="col-lg-4 col-md-4 col-sm-12 soc">
				<h1 className="titre-txt">MAFTFASHION</h1>
				<h2 className="titre-adr">MAFTFASHION ,Cité Venus menzah 7, Tunis 2037</h2>
      <ul>
                   <li> <a href="#"><i className="fa fa-facebook-square"></i></a> </li>
                
                   
                   <li> <a href="#"><i className="fa fa-linkedin-square"></i></a> </li>
                
                
                   <li> <a href="#"><i className="fa fa-instagram"></i></a> </li>
                    <li> <a href="#"><i className="fa fa-twitter"></i></a> </li>

                
                
               
</ul>
		</div>

	</div>


            </div>
        )
    }
}
export default Footer