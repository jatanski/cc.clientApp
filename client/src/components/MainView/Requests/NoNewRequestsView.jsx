import React from "react";
import {
  MDBBtn
} from "mdbreact";

const NoNewRequests = () => {
    return (
      <div className="card">
        <div className="card-header">
          <b>You don't have any client requests!</b>
        </div>  
        <div className="card-body text-center">
          <i className="far fa-address-card fa-8x deep-orange-text"></i>
        </div>
        <div className="card-footer text-center">
            <MDBBtn color="deep-orange" type="submit">          
              Requests
            </MDBBtn>
        </div>
      </div>
    );
  }
  
  export default NoNewRequests;