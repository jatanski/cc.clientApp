import React from "react";
import { MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";

const NoPayments = () => {
  return (
    <div className="card">
      <div className="card-header">
          <b>You don't have any payments yet!</b>
      </div>
      <div className="card-body text-center">
        <i className="far fa-credit-card fa-8x deep-orange-text"></i>
      </div>
      <div className="card-footer text-center">
        <Link to="/payment">
          <MDBBtn color="deep-orange" type="button">          
            Payments
          </MDBBtn>
        </Link>
      </div>
    </div>
  );
}
  
export default NoPayments;