import React from 'react';

class SignUp extends React.Component{
    render(){
        return(
            <div>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  SignUp
</button>

<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
       <div>
      <form  onsubmit="return false">
        	<div className="form-group">
    <label for="exampleInputPassword1">name</label>
    <input type="text" className="form-control" id="name" placeholder="name" />
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1"> last name</label>
    <input type="text" className="form-control" id="lastname" placeholder="last name" />
  </div>
        	<div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="Password" placeholder="Password" />
  </div>
<div className="radio">

  <label><input type="radio" name="optradio" id="sexe" value="m" />MALE</label>
</div>
<div className="radio">
  <label><input type="radio" name="optradio" id="sexe" value="f" />FEMALE</label>
</div>
<div className="form-group">
    <label for="exampleInputAge">Age :</label><br/>
    <input id="userAge" type="number" name="age" min="18" max="45" className="input-field" placeholder="age" />
  </div>
        
         
       
  <button type="submit" className="btn btn-primary" >Valider</button>
    <button type="reset" className="btn btn-primary">Annuler</button>



     
     
        </form>
        </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">SignUp</button>
      </div>
    </div>
  </div>
</div>
            </div>
            )
    }
}
export default SignUp
