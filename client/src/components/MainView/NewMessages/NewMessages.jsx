import React, { Component } from "react";
import {
  MDBBtn
} from "mdbreact";

class NewMessages extends Component {
  render = () => {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">New message!</h5>
          <p className="card-text label">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(18)-mini.jpg" alt="avatar" className="rounded-circle z-depth-1-half mr-2" /> 
            <b>Lili Rose</b>
          </p>
          <p className="card-text"><b>Title:</b> "Title of the message"</p>
        </div>
        <div className="card-footer text-center">
          <small className="text-muted">Recieved 3 mins ago</small><br />
          <MDBBtn color="deep-orange" type="submit">
              Messages
          </MDBBtn>
        </div>
      </div>
    );
  };
  }
  
  export default NewMessages;