import React from "react";
import { MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";

const MyAdminView = (props) => {
  return (
    <div className="card">
      <div className="card-header">
          <b>You are signed to this Admin!</b>
      </div>
      <div className="card-body text-center">
        <div>
          <img 
            src="https://osclass.calinbehtuk.ro/oc-content/themes/vrisko/images/no_user.png" 
            alt="Your Admin" 
            className="rounded-circle z-depth-1-half mb-3 w-50" 
          />
        </div>
        <span className="mb-2" >{props.adminEmail}</span>
      
        <button 
          type="button" 
          className="btn btn-outline-danger waves-effect"
          onClick={props.changeAdmin}
        >
          Change Admin
        </button>
      </div>
      <div className="card-footer text-center">
        <Link to="#">
          <MDBBtn color="deep-orange" type="button">          
            Admin Profile
          </MDBBtn>
        </Link>
      </div>
    </div>
  );
}
  
export default MyAdminView;