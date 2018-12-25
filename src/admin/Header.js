import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Header extends React.Component {
  render() {
    return (
  
  // <Route path="/mafters" render={() => <div>sd sdf sdf </div>} />
        
  <div class="icon-bar">
  <a class="active" href="#"><i class="fa fa-home"></i></a> 
  <a href="#"><i class="fa fa-search"></i></a> 
  <a href="#"><i class="fa fa-envelope"></i></a> 
  <a href="#"><i class="fa fa-globe"></i></a>
  <a href="#"><i class="fa fa-trash"></i></a> 
</div>
     
    );
  }
}