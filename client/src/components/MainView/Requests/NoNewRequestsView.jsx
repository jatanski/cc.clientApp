import React from "react";
import { MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";

const NoNewRequests = ({ loadRequests }) => {
    return (
      <div className="card">
        <div className="card-header">
          <b>You don't have any client requests!</b>
        </div>  
        <div className="card-body text-center">
          <i className="far fa-address-card fa-8x deep-orange-text"></i>
        </div>
        <div className="card-footer text-center">
          <Link to="/home">
            <MDBBtn color="deep-orange" type="button" onClick={loadRequests}>
                Refresh
            </MDBBtn>
          </Link>
        </div>
      </div>
    );
  }
  
  export default NoNewRequests;