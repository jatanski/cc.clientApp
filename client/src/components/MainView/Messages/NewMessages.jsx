import React from "react";
import {
  MDBBtn
} from "mdbreact";

const NewMessages = ({
  title,
  name,
  surname,
  avatar,
  date,
  textContent
}) => {
    return (
      <div className="card">
        <div className="card-header">
          <b>New Message!</b>
        </div>
        <div className="card-body">
          <div className="avatar-name-display">
            <div>
              <img src={avatar} alt={name} className="rounded-circle z-depth-1-half mr-2" />
            </div>
            <div>
              <p className="card-text label">
                <b>{name}</b><br />
                <b>{surname}</b>
              </p>
            </div>
          </div>
          <br />
          <p className="card-text"><b>Title:</b> {title}</p>
          <p className="card-text">{textContent.slice(0, 60)}...</p>
        </div>
        <div className="card-footer text-center">
          <small className="text-muted">Recieved at {date}</small><br />
          <MDBBtn color="deep-orange" type="submit">
              Messages
          </MDBBtn>
        </div>
      </div>
    );
};
  
  export default NewMessages;