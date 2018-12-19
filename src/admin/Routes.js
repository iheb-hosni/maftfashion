import React from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Authentif from './Authentif';
import Header from './Header'




const Routes = () => {
    return <Router>
    <Switch>
    <Route exact path="/admin" component={Authentif} />
    <Route path="/user" component={user} />  
    </Switch>
    </Router>

}   

export default Routes