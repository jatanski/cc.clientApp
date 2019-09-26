import React, { Component } from "react";
import {
  MDBBtn
} from "mdbreact";

class LastPayments extends Component {
  render = () => {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Last payments:</h5>
          <p className="card-text"><b>Title:</b> Monthly subscription <br /><b>Amount:</b> 150$</p>
          <p className="card-text"><b>Title:</b> Removing Adds<br /><b>Amount:</b> 10$</p>
        </div>
        <div className="card-footer text-center">
          <small className="text-muted">Last payment 2 days ago</small><br />
          <MDBBtn color="deep-orange" type="submit">          
            Payments
          </MDBBtn>
        </div>
      </div>
    );
  };
  }
  
  export default LastPayments;