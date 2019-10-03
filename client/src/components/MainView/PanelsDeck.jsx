import React, { Component } from "react";
import NewMessages from "./Messages/NewMessages";
import NoNewMessages from "./Messages/NoNewMessages";
import Requests from "./Requests/Requests";
import LastPayments from "./Payments/LastPayments";
import NoPayments from "./Payments/NoPayments";
import baseModel from "../../baseModel";

import "../../scss/views/mainView.scss";

class PanelsDeck extends Component {
  constructor () {
    super();
    this.state = ({
      newMessage: '',
      isAdmin: '',
      requests: '',
      lastPayments: '',
    });
  };

  componentDidMount = () => {
    this.init();
  }

  findPayments = (payments) => {
    // sprawdz czy user ma jakieś platnosci w tablicy, jeśli ma zwróć 2 lub 1 ostatnio dodane jeśli nie zwroc false
    // przypisz zwróconą wartość do this.state.payments
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

    let date = new Date;
    date = date.toLocaleString(undefined, {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
      
    // const payment = this.findPayments(this.state.user.payments);
    const msg = user.messages.received.find((msg) => msg.new === true);
    const requests = [
        {
          name: "Joe",
          surname: "Doe",
          avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg",
          date: date
        },
        {
          name: "Kate",
          surname: "Smith",
          avatar: "https://d15gqlu8dfiqiu.cloudfront.net/s3fs-public/styles/avatar/public/twitter_avatars/32258_pN4g7qfg.jpg",
          date: date
        }
      ];
    
    this.setState({
      // lastPayment: payment,
      requests: requests,
      newMessage: msg,
      isAdmin: true, // user.isAdmin
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