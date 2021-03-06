import React from "react";
import avatar from "../../../assets/avatar.png"
import { MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";

const NewMessages = ({
  title,
  sender,
  date,
  textContent,
}) => {
    sender.surname = sender.surname || 'Smith';
    sender.avatar = sender.avatar || avatar;
    // date = new Date(parseInt(date));
    const timeDiff = parseInt(date) - Date.now();
    const timeDays = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
    return (
      <div className="card">
        <div className="card-header">
          <b>New Message!</b>
        </div>
        <div className="card-body">
          <div className="avatar-name-display">
            <div>
              <img src={sender.avatar} alt={sender.name} className="rounded-circle z-depth-1-half mr-2" />
            </div>
            <div>
              <p className="card-text label">
                <b>{sender.name}</b><br />
                <b>{sender.surname}</b>
              </p>
            </div>
          </div>
          <br />
          <p className="card-text"><b>Title:</b> {title}</p>
          <p className="card-text">{textContent.slice(0, 60)}...</p>
        </div>
        <div className="card-footer text-center">
          <small className="text-muted">
            Received { timeDays < 1 ? ` today` : ` ${timeDiff} day ago`}
          </small><br />
          <Link to="/messages">
            <MDBBtn color="deep-orange" type="button">
                Messages
            </MDBBtn>
          </Link>
        </div>
      </div>
    );
};
  
  export default NewMessages;