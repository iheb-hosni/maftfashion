import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'
 class Navmenu extends React.Component{
    render(){
        return(
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#"><img data-at2x="http://maftfashion.com/wp-content/uploads/2018/06/logomaftfashion-1.png" src="http://maftfashion.com/wp-content/uploads/2018/06/logomaftfashion-1.png" height="50" width="60" alt="MAFT FASHION" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
               <Link to ="/home"> <a className="nav-link" href="#">Home</a></Link>
              </li>
              <li class="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                About
                </a>
                <div className="dropdown-menu aboutmenu" aria-labelledby="Fashion">
                  <Link to="/concept"><a className="dropdown-item" href="#">Concept</a></Link>
                  <Link to="/manifesto"> <a className="dropdown-item" href="#">Manifesto</a></Link> 
                  
                   
                </div>
                  
                 
               
              
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Fashion
                </a>
                <div className="dropdown-menu" aria-labelledby="Fashion">
                  <Link to ="/news"><a className="dropdown-item" href="#">News</a></Link>
                  <Link to ="/inspiration"><a className="dropdown-item" href="#">Inspiration</a></Link>
                  <div className="dropdown-divider"></div>
                  <Link to ="/designer-of-the-month"><a className="dropdown-item" href="#">Designer of the month</a></Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Education
                </a>
                <div className="dropdown-menu" aria-labelledby="Fashion">
                  <Link to="/fashion-history" ><a className="dropdown-item" href="#">FASHION HISTORY</a></Link>
                  <Link to ="/fashion-business" ><a className="dropdown-item" href="#">FASHION BUSINESS</a></Link>
                  
                   
                </div>
              </li>
              <li className="nav-item ">
                <Link to ="/mafters"><a className="nav-link" href="#">MAFTERS<span Name="sr-only"></span></a></Link>
              </li>
              <li className="nav-item ">
                <Link to ="/culture"><a className="nav-link" href="#">CULTURE<span class="sr-only"></span></a></Link>
              </li>
              <li className="nav-item ">
               <Link to="/contact"><a className="nav-link" href="#">CONTACT<span class="sr-only"></span></a></Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <Route
                path='/mafters'
                render={(props) => 
                  <input class="form-control mr-sm-2" type="search" placeholder="Search the article" value={this.props.search} onChange={this.props.changeme} aria-label="Search"  />
                }
              />
               <div className="modal-sign">
           
          </div>
            </form>
          </div>
        
        </nav>
        )
    }
}
export default Navmenu;