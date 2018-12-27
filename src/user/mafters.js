import React from 'react';
import SignUp from './signup'
import Signin from './signin'
import axios from 'axios';
import Addarticle from './addarticle'
import Navmenu from './navmenu'
class Mafters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articleList: [],
            search:""
        };
    }
    componentDidMount() {
        axios.get("/get-post")
            .then(res => {
                this.setState({
                    articleList: res.data
                })
            })
            .catch(err => console.log("err"));
    }
    changeme = e => {
        this.setState({
          search: e.target.value
        });
      };
    render() {


        return (
            <div className="register-mafters">
            <div className="register-btn">
                <SignUp />
                <Signin />
                <Addarticle />
            </div>

                <div className="  article-items">
                     
                    {this.state.articleList.filter(
                       el =>
                       el.articletitle
                         .toLowerCase()
                         .indexOf(this.state.search.toLowerCase()) !== -1 
                    ) 
                    .map((el, i) =>
                        <div className="article-item"  key={el._id}>
                           <div > <span className="article-title"> {el.articletitle}</span></div>
                           <div><img className="article-image" src={el.image}/></div>
                           <div className="articletxt"> <span className="article-txt">{el.articletext}</span></div>
                          <div>   <span className="article-poster">postred by  :{el.articleposter}</span></div>

                        </div>
                    )}
                    
 
                </div>
                <div className="filter-articles">
             <Navmenu articleList={this.state.articleList} />
             <Navmenu search={this.state.search} />
             <Navmenu changeme={this.changeme} />


         </div>           
          </div>
            

        )
    }
}
export default Mafters;