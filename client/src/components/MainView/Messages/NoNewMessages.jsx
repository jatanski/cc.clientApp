import React from "react";
import { MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";

const NoNewMessages = () => {
  return (
    <div className="card">
      <div className="card-header">
          <b>You don't have any new messages!</b>
      </div>
      <div className="card-body text-center">
        <i className="far fa-envelope fa-8x deep-orange-text"></i>
      </div>  
      <div className="card-footer text-center">
        <Link to="/messages">
          <MDBBtn color="deep-orange" type="submit">
              Messages
          </MDBBtn>
        </Link>
      </div>
    </div>
  );
}
  
  export default NoNewMessages;