import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Authentif from './admin/Authentif';
import user from './user/user';
import Manifesto from './user/manifesto'
import Concept from './user/concept'
import Contact from './user/contact'
import News from './user/news'
import Fashionhistory from './user/fashionhistory'
import Fashion from './user/fashionbusiness'
import Designer from './user/designerofM'
import Adminpage from './admin/Adminpage';
import Fashionyears from './user/fashionyear'
import Culture from './user/culture'
import Inspiration from './user/inspiration'
import Mafters from './user/mafters';
import Eckki from './user/eckki'
import Freeping from './user/whyfreeping'


const Routes = () => {
    return <Switch>
        <Route exact path="/admin" component={Authentif} />
        <Route path="/pageadmin" component={Adminpage} />
        <Route exact path="/" component={user} />
        <Route path="/concept" component={Concept} />
        <Route path="/manifesto" component={Manifesto} />
        <Route path="/contact" component={Contact} />
        <Route path="/news" component={News} />
        <Route path="/fashion-history" component={Fashionhistory} />
        <Route path="/fashion-business" component={Fashion} />
        <Route path="/designer-of-the-month" component={Designer} />
        <Route path="/home" component={user} />
        <Route path="/1920" component={Fashionyears} />
        <Route path="/culture" component={Culture} />
        <Route path="/inspiration" component={Inspiration} />
        <Route path="/mafters" component={Mafters} />
        <Route path="/ekcci" component={Eckki} />
        <Route path ="/why-freeping" component={Freeping} />
    </Switch>

}

export default Routes