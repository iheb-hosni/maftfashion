import React from 'react';
import {Link} from 'react-router-dom'

class Text extends React.Component{
    render(){
        return(
            <div  className=" container-fuild mafttext">
              <div className="row maftext-row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                <p className="mafttext-intro"> <Link to ="/manifesto"> We Celebrate the difference </Link></p>
                </div>
                </div>
            </div>
        )
    }
}
export default Text;