import React, { Component } from "react";
import {
  MDBBtn
} from "mdbreact";

class NewRequests extends Component {
  render = () => {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">New client request!</h5>
          <p className="card-text label">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg" className="rounded-circle z-depth-1-half mr-2" alt="avatar" />
            <b>John Doe</b>
          </p>
          <div className="text-center">
            <div className="btn-group-vertical btn-group-sm" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-outline-success waves-effect">Accept</button>
              <button type="button" className="btn btn-outline-danger waves-effect">Decline</button>
            </div>
          </div>
        </div>
        <div className="card-footer text-center">
          <small className="text-muted">Recieved 28 mins ago</small><br />
            <MDBBtn color="deep-orange" type="submit">          
              Requests
            </MDBBtn>
        </div>
      </div>
    );
  };
  }
  
  export default NewRequests;