import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Concept from  "./concept"
class Navmenu extends React.Component{
    render(){
        return(
            <div className="navmenu">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><img data-at2x="http://maftfashion.com/wp-content/uploads/2018/06/logomaftfashion-1.png" src="http://maftfashion.com/wp-content/uploads/2018/06/logomaftfashion-1.png" height="50" width="60" alt="MAFT FASHION" /></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        About
        </a>
        <div className="dropdown-menu aboutmenu" aria-labelledby="Fashion">
          <a className="dropdown-item" href="#"><Link to="/concept">Concept</Link></a>
          <a className="dropdown-item" href="#">   <Link to="/manifesto">Manifesto</Link> </a>
          
           
        </div>
          
         
       
      
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Fashion
        </a>
        <div class="dropdown-menu" aria-labelledby="Fashion">
          <a class="dropdown-item" href="#"><Link to ="/news">News</Link></a>
          <a class="dropdown-item" href="#"><Link to ="/inspiration">Inspiration</Link></a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#"><Link to ="/designer of the month">Designer of the month</Link></a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Education
        </a>
        <div class="dropdown-menu" aria-labelledby="Fashion">
          <a class="dropdown-item" href="#">FASHION HISTORY</a>
          <a class="dropdown-item" href="#">FASHION BUSINESS</a>
          
           
        </div>
      </li>
      <li class="nav-item ">
        <a className="nav-link" href="#">MAFTERS<span Name="sr-only"></span></a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" href="#">CULTURE<span class="sr-only"></span></a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" href="#contactus">CONTACT<span class="sr-only"></span></a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
       <div className="modal-sign">
   
  </div>
    </form>
  </div>

</nav>
            </div>
        )
    }
}
export default Navmenu;