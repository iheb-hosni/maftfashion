import React from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Authentif from './admin/Authentif';
import user from './user/user';
import Manifesto from './user/manifesto'
import Concept from './user/concept'
import Contact from './user/contact'
import News from './user/news'
import Fashionhistory from './user/fashionhistory'
import Fashion from './user/fashionbusiness'
import Designer from './user/designerofM'



const Routes = () => {
    return <Router>
    <Switch>
    <Route exact path="/admin" component={Authentif} />
    <Route path="/home" component={user} />  
    <Route path ="/concept" component={Concept}/>
    <Route path ="/manifesto" component={Manifesto} />
    <Route path ="/contact" component={Contact} />
    <Route path ="/news" component={News} />
    <Route path ="/fashion-history" component={Fashionhistory} />
    <Route path ="/fashion-business" component={Fashion} />
    <Route path ="/designer-of-the-month" component={Designer} />
    </Switch>
    </Router>

}   

export default Routes