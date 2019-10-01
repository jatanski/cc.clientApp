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
      user: '',
      newMessage: '',
      isAdmin: '',
      requests: '',
      lastPayments: '',
    });
    
  };

  componentDidMount = () => {
    this.init();
  }

  findNewMessage = (receivedMessages) => {
    return receivedMessages.find((msg) => msg.new === true);
  }

  findPayments = (payments) => {
    // sprawdz czy user ma jakieś platnosci w tablicy, jeśli ma zwróć 2 lub 1 ostatnio dodane jeśli nie zwroc false
    // przypisz zwróconą wartość do this.state.payments
  }

  findClientRequests = (clientsRequests) => {
    // jesli tablica clientRequests coś zawiera zwróć pierwszy obiekt, jeśli pusta zwróć false
    // przypisz zwróconą wartość do this.state.newRequest
    return clientsRequests;
  }
  
  init = async () => {
    const user = await baseModel.load("user");

    // const payment = this.findPayments(this.state.user.payments);
    const msg = this.findNewMessage(user.messages.received);
    const requests = [
        {
          name: "Joe",
          surname: "Doe",
          avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg"
        },
        {
          name: "Kate",
          surname: "Smith",
          avatar: "https://d15gqlu8dfiqiu.cloudfront.net/s3fs-public/styles/avatar/public/twitter_avatars/32258_pN4g7qfg.jpg"
        }
      ];
    

    this.setState({
      // lastPayment: payment,
      requests: requests,
      newMessage: msg,
      isAdmin: true // user.isAdmin
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