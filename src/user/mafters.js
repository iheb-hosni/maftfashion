import React from 'react';
import SignUp from './signup'
import Signin from './signin'
class Mafters extends React.Component{
    render(){
        return(
            <div className="register-mafters">
 <SignUp />
 <Signin />
            </div>
        )
    }
}
export default Mafters;