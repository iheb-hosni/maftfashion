import React from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Authentif from './admin/Authentif';
import user from './user/user';
import manifesto from './user/manifesto'
import Concept from './user/concept'



const Routes = () => {
    return <Router>
    <Switch>
    <Route exact path="/admin" component={Authentif} />
    <Route path="/user" component={user} />  
    <Route path ="/concept" component={Concept}/>
    <Route path ="/manifesto" component={manifesto} />
    </Switch>
    </Router>

}   

export default Routes