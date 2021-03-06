import React from 'react';
 
class Contact extends React.Component{
    render(){
        return(
             <div className="contact-us">
 
                <h1 className="adress-txt text-focus-in" id="contactus"><span className="our-adr">Contact US</span></h1>
<div className="container">
<div className='row'>
<div className="col-lg-12 col-md-12 col-sm-12 adr">
<div className="form-area" >  
        <form role="form" name="f" onsubmit="return false">
        
                    
    				<div className="form-group">
						<input type="text" className="form-control" id="names" name="names" placeholder="Name" required />
						<span id="num"></span>
						<span id="nums"></span>
					</div>
					<div className="form-group">
						<input type="text" className="form-control" id="emails" name="email" placeholder="Email" required />
						<span id="mail"></span>
					</div>
					
					<div className="form-group">
						<input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" required />
						<span id="sub"></span>
					</div>
                    <div className="form-group">
                    <textarea className="form-control" type="textarea" id="message" placeholder="Message" maxlength="140" rows="7" required></textarea>
                     </div>
                     
                   <button type="reset" id="reset" name="reset" class="btn btn-primary pull-right">annuler</button>
                     <button type="submit" id="submit" name="submit" class="btn btn-primary pull-right">envoyer</button>
                    
                
        </form>
    </div>
</div>
</div>
</div>
            </div>
        )
    }
}
export default Contact