import React from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Authentif from './Authentif';
import user from '../user/user';
import Adminpage from './Adminpage';





const Routes = () => {
    return <Router>
    <Switch>
    <Route exact path="/admin" component={Authentif} />
    <Route path="/user" component={user} />  
    <Route path="/pageadmin" component={Adminpage} />
    </Switch>
    </Router>

}   

export default Routes