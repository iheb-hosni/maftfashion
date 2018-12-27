import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Editor from './editor'
import axios from 'axios';


class Addarticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      articletitle:"",
      articletext:"",
      articleposter:"",
      image:""
      
     };

    this.toggle = this.toggle.bind(this);
  }
  onChangeTxt =(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  onChangeContent = string => {
    this.setState({
      content: string
    })
  }
  
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  onAdd = () => {
    axios.post("/add-post",{articletitle:this.state.articletitle,
    articletext:this.state.articletext,
    articleposter:this.state.articleposter,image:this.state.image
    }).then(() => {
      this.toggle()
    })
    .catch(() => {
      console.log('error')
    })
  }
  
  render() {
    return (
      <div className="addarticle-modal">
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel} Add article</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <form>
    <ModalHeader toggle={this.toggle}>Add Articles</ModalHeader>
          <ModalBody>
          <form role="form" name="f" onsubmit="return false">
        
                    
        <div className="form-group">
        <input type="text" className="form-control" id="name" name="articletitle" placeholder="Article title" onChange={this.onChangeTxt} required />
        <span id="num"></span>
        <span id="nums"></span>
      </div>
      <div className="form-group">
        <input type="text" className="form-control"  name="articleposter" placeholder="Postred By" onChange={this.onChangeTxt} required />
        <span id="mail"></span>
      </div> 
      
     
                <div className="form-group">
                <textarea className="form-control" type="textarea" id="message" name="articletext" placeholder="Article" maxlength="140" rows="7" onChange={this.onChangeTxt}  required></textarea>
                </div>
              
                <div className="form-group">
        <input type="text" className="form-control"  name="image" placeholder="enter the image link" onChange={this.onChangeTxt}required />
        <span id="mail"></span>
      </div>
    </form>

              {/* <input type="text" placeholder="article title" id="title" name="articletitle" onChange={this.onChangeTxt} />
                
               <input type="text" placeholder="postred by" name="articleposter"  onChange={this.onChangeTxt}/> */}
           </ModalBody>
           
          <ModalFooter>
            <Button color="primary" onClick={this.onAdd}>Add</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}

export default Addarticle;