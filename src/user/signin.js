import React from 'react';

class Signin extends React.Component{
    render(){
        return(
            <div className="signin-modal">
 <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  SigniN
</button>

 <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">SigniN</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form>
  <div class="form-group">
     <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
     <input type="password" class="form-control" id="Password1" placeholder="Password" />
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="Check" />
    <label class="form-check-label" for="exampleCheck1" >Remember me</label>
  </div>
   

</form>
      </div>
      <div class="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">SigniN</button>
      </div>
    </div>
  </div>
</div>
                </div>
            )
    }
}
export default Signin
