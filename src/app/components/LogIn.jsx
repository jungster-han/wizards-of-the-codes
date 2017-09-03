import React from 'react';
import {Button, Modal, ModalBody, ModalHeader, ModalTitle} from 'react-bootstrap'


export default class LogIn extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showModal:false,
      username: "",
      password: ""
    }
  }
  openModal(){
    this.setState({showModal:true})
  }
  closeModal(){
    this.setState({showModal:false})
  }
  handleChange(){
    this.setState({
      [event.target.id] : event.target.value
    })
  }
  render(){
    var userInfoStyle = {
      width:"100%",
      height:"30px",
      display:"inline-block",
      padding: "3%, 3%",
      border: "1px solid #ccc",
      borderRadius: "4px",
      marginBottom: "10px"
    }
    return(
      <li>
      <a onClick={this.openModal.bind(this)}><span className="glyphicon glyphicon-log-in"></span>{' '}Login</a>
      <Modal dialogClassName="login-modal" show={this.state.showModal} onHide={this.closeModal.bind(this)}>
        <ModalHeader>
          <ModalTitle id="modalTitle">
            Log in page but you can't log in yet. Sorry.
          </ModalTitle>
        </ModalHeader>
        <ModalBody>
          <form>
            username:<br/><input style={userInfoStyle} type="text" id="username" placeholder="username" onChange={this.handleChange.bind(this)}/>
          password:<br/><input style={userInfoStyle} type="text" id="password" placeholder="********" onChange={this.handleChange.bind(this)}/>
          </form>
          <Button>Log in with Github</Button>
        </ModalBody>
      </Modal>
    </li>
    )
  }

}
