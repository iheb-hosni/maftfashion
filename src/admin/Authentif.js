import React from 'react'

const Authentif = () => {
  return (
  <div>
    <form action="/action_page.php" style="max-width:500px;margin:auto">
        <h2>Register Form</h2>
  <div class="input-container">
    <i class="fa fa-user icon"></i>
    <input class="input-field" type="text" placeholder="Username" name="usrnm"  />
  </div>

  <div class="input-container">
    <i class="fa fa-envelope icon"></i>
    <input class="input-field" type="text" placeholder="Email" name="email" />
  </div>
  
  <div class="input-container">
    <i class="fa fa-key icon"></i>
    <input class="input-field" type="password" placeholder="Password" name="psw" />
  </div>

  <button type="submit" class="btn">Register</button>
</form>
</div>
  )
}

export default Authentif