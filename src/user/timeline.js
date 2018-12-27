import React from 'react';
import {  Link } from 'react-router-dom'

class Timeline extends React.Component{
    render(){
        const pstyle ={
            clear:"both"
        };
        return(
           
            <div className="container timelines">
            <h1 className="fashion-his">Fashion History</h1>
              <ul>
              <li>
                     <div className="content">
                     <h3>fashion culture 1920s</h3>
                      </div>
                     <div className="time">
                      <h4 className="history"><Link to = "/1920">1920</Link></h4>

                     </div>
                 </li>
              <li>
                     <div className="content">
                     <h3>fashion culture 1930s</h3>
                      </div>
                     <div className="time">
                      <h4>1930</h4>

                     </div>
                 </li>
              <li>
                     <div className="content">
                     <h3>fashion culture 1940s</h3>
                      </div>
                     <div className="time">
                      <h4>1940</h4>

                     </div>
                 </li>
              <li>
                     <div className="content">
                     <h3>fashion culture 1950s</h3>
                      </div>
                     <div className="time">
                      <h4>1950</h4>

                     </div>
                 </li>
                 <li>
                     <div className="content">
                     <h3>fashion culture 1960s</h3>
                      </div>
                     <div className="time">
                      <h4>1960</h4>

                     </div>
                 </li>
                 <li>
                     <div className="content">
                     <h3>fashion culture 1970s</h3>
                      </div>
                     <div className="time">
                      <h4>1970</h4>

                     </div>
                 </li>
                 <li>
                     <div className="content">
                     <h3>fashion culture 1920s</h3>
                      </div>
                     <div className="time">
                      <h4>1980</h4>

                     </div>
                 </li>
                 <li>
                     <div className="content">
                     <h3>fashion culture 1990s</h3>
                      </div>
                     <div className="time">
                      <h4>1990</h4>

                     </div>
                 </li>
                 <li>
                     <div className="content">
                     <h3>fashion culture 2000s</h3>
                      </div>
                     <div className="time">
                      <h4>2000</h4>

                     </div>
                 </li>
                 <li>
                     <div className="content">
                     <h3>fashion culture 2010</h3>
                      </div>
                     <div className="time">
                      <h4>2010</h4>

                     </div>
                 </li>
                 <div style={pstyle}></div>
             </ul>

            </div>
        )
    }
}
export default Timeline;