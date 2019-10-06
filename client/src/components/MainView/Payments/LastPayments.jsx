import React, { Component } from "react";
import { MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";

class LastPayments extends Component {
  render = () => {
    return (
      <div className="card">
        <div className="card-header">
          <b>Last payments: </b>
        </div>
        <div className="card-body">
          <p className="card-text">
            <b>Title: </b>Subscription<br />
            <b>Amount:</b> 150$ <br />
            <b>State:</b> Pending
          </p>
          <hr></hr>
          <p className="card-text">
            <b>Title:</b> Removing Adds<br />
            <b>Amount:</b> 10$<br />
            <b>State:</b> Completed
          </p>
        </div>
        <div className="card-footer text-center">
          <small className="text-muted">Last payment 2 days ago</small><br />
          <Link to="/payment">
            <MDBBtn color="deep-orange" type="button">          
              Payments
            </MDBBtn>
          </Link>
        </div>
      </div>
    );
  };
  }
  
  export default LastPayments;