import React, { Component } from "react";
import NewMessages from "./Messages/NewMessages";
import NoNewMessages from "./Messages/NoNewMessages";
import Requests from "./Requests/Requests";
import LastPayments from "./Payments/LastPayments";
import NoPayments from "./Payments/NoPayments";
import baseModel from "../../baseModel";

import "../../scss/views/mainView.scss";

class PanelsDeck extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      newMessage: '',
      isAdmin: '',
      requests: '',
      lastPayments: ''
    });
  };

  componentDidMount = () => {
    this.init();
  }
  
  init = async () => {

      const token = baseModel.getAuthTokenHeaderObj()
      const response = await fetch(baseModel.baseApiUrl + "users/", {
        method: "GET",
        headers: { 
          "Content-Type": "application/json",
          "x-auth-token": token["x-auth-token"]
        },
      });
      const user = await response.json();

    // const payment = this.findPayments(this.state.user.payments);
    const msg = user.messages.received.find((msg) => msg.new === true);
    const requests = user.clientsRequests.map(request => {
      return {
        id: request._id,
        date: request.date,
        name: request.user.name,
        surname: request.user.surname || "Surname",
        avatar: request.user.avatar || "https://osclass.calinbehtuk.ro/oc-content/themes/vrisko/images/no_user.png"
      }
    });
    
    this.setState({
      // lastPayment: payment,
      requests: requests,
      newMessage: msg,
      isAdmin: user.isAdmin
    });
  }

  render = () => {
    return (
      <div className="card-deck mx-2 my-2 text-center">
        {this.state.newMessage ? <NewMessages {...this.state.newMessage} /> : <NoNewMessages />}
        <Requests requests={ this.state.requests } isAdmin={this.state.isAdmin}></Requests>
        {this.state.lastPayments ? <LastPayments /> : <NoPayments />}
      </div>
    );
  };
  }
  
  export default PanelsDeck;