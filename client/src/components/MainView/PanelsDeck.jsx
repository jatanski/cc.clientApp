import React, { Component } from "react";
import NewMessages from "./NewMessages/NewMessages";
import NewRequests from "./NewRequests/NewRequests";
import LastPayments from "./LastPayments/LastPayments";
import "../../scss/views/mainView.scss";

class PanelsDeck extends Component {
  render = () => {
    return (
      <div className="card-deck mx-2 my-2">
        <NewMessages />
        <NewRequests />
        <LastPayments />
      </div>
    );
  };
  }
  
  export default PanelsDeck;