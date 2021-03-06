import React from 'react';
import axios from 'axios'
class SignUp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      
      name:"",
      lastName:"",
      email:"",
      password:""
     };

   }
   onChange = e =>{
     this.setState({
       [e.target.name]:e.target.value
     })
   }
   onAddMafters = ()=>{
  axios.post("/add-mafter", {
    name:this.state.name,
    lastName:this.state.lastname,
    email:this.state.email,
  password:this.state.password}) 
   }
    render(){
        return(
            <div className="signup-modal">
                <button type="button" className="btn btn-primary butt" data-toggle="modal" data-target="#exampleModal">
  SignUp
</button>

<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Sign Up</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
       <div>
      <form  onsubmit="return false">
        	<div className="form-group">
     <input type="text" className="form-control" id="name" placeholder="name" name="name" onChange={this.onChange} required />
  </div>
  <div className="form-group">
     <input type="text" className="form-control" id="lastname" placeholder="last name"  name="lastname"  onChange={this.onChange} required/>
  </div>
        	<div className="form-group">
     <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"  name="email"  onChange={this.onChange} required/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
     <input type="password" className="form-control" id="Password" placeholder="Password"  name="password"  onChange={this.onChange} required />
  </div>
<div className="radio">

 </div>
<div className="radio">
 </div>
 
        </form>
        </div>

      </div>
      <div class="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={this.onAddMafters}>SignUp</button>
      </div>
    </div>
  </div>
</div>
            </div>
            )
    }
}
export default SignUp
