import React from "react";
import {
  MDBBtn
} from "mdbreact";

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
        <MDBBtn color="deep-orange" type="submit">
            Messages
        </MDBBtn>
      </div>
    </div>
  );
}
  
  export default NoNewMessages;