import React from 'react';
import { Link } from 'react-router-dom'

import './nav.css'
class Nav extends React.Component{
    render(){
        return(
            <div>
                <nav>
<div id="logo"></div>

<label for="drop" class="toggle">Menu</label>
<input type="checkbox" id="drop" />
    <ul class="menu">
    <li><Link to ="/home"><a href="#">Home</a></Link></li>
        <li>
            <a href="#">About</a>
            <input type="checkbox" id="drop-1"/>
            <ul>
               <Link to="/concept"> <li><a href="#">Concept</a></li></Link>
                <Link to="/manifesto"><li><a href="#">Manifesto</a></li></Link>
             </ul> 

        </li>
        <li>

         <a href="#">Web Design</a>
        <input type="checkbox" id="drop-2"/>
        <ul>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Links</a></li>
            <li>
               
            <label for="drop-3" class="toggle">Tutorials +</label>
            <a href="#">Tutorials</a>         
            <input type="checkbox" id="drop-3"/>

            <ul>
                <li><a href="#">HTML/CSS</a></li>
                <li><a href="#">jQuery</a></li>
                <li><a href="#">Other</a></li>
            </ul>
            </li>
        </ul>
        </li>
        <li><a href="#">Graphic Design</a></li>
        <li><a href="#">Inspiration</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">About</a></li>
    </ul>
</nav>

            </div>
        )
    }
}
export default Nav ;


