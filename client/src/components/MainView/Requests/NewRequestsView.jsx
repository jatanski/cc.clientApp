import React from "react";

const NewRequests = ({
  name,
  surname,
  avatar,
  date,
  acceptRequest,
  declineRequest
}) => {
  return (
    <div className="card">
      <div className="card-header">
        <b>New client request!</b>
      </div>
      <div className="card-body">
        <div className="avatar-name-display">
          <div>
            <img src={avatar} alt={`${name} ${surname}`} className="rounded-circle z-depth-1-half mr-2" />
          </div>
          <div>
            <p className="card-text label">
              <b>{name}</b><br />
              <b>{surname}</b>
            </p>
          </div>
        </div>
        <br />
        <div className="text-center">
          <div className="btn-group-vertical btn-group-sm" role="group" aria-label="Basic example">
            <button 
              type="submit" 
              className="btn btn-outline-success waves-effect"
              onClick={acceptRequest}
            >
              Accept
            </button>
            <button 
              type="button" 
              className="btn btn-outline-danger waves-effect"
              onClick={declineRequest}
            >
                Decline
            </button>
          </div>
        </div>
      </div>
      <div className="card-footer text-center">
        <small className="text-muted">Recieved at {date}</small><br />
      </div>
    </div>
  );
}
  
  export default NewRequests;