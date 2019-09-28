import React, { Component } from "react";
import NewMessages from "./Messages/NewMessages";
import NoNewMessages from "./Messages/NoNewMessages";
import NewRequests from "./Requests/NewRequests";
import NoNewRequests from "./Requests/NoNewRequests";
import LastPayments from "./Payments/LastPayments";
import NoPayments from "./Payments/NoPayments";
import "../../scss/views/mainView.scss";

class PanelsDeck extends Component {
  state = {
    // user: "fetched user" 
    newMessage: false,
    newRequest: true,
    isAdmin: true,
    lastPayments: true,
    requests: [ // tablica z obiektami userów
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
    ]
  };

  getFakeMessage = () => {
    let date = new Date()
    date = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    return {
      title: "Nowa wiadomość",
      name: "Name",
      surname: "Surname",
      avatar: "https://mdbootstrap.com/img/Photos/Avatars/img%20(18)-mini.jpg",
      date: date,
      textContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  }

  findNewMessage = (receivedMessages) => {
    // znajdz pierwsza nowa wiadomosc w tablicy receivedMessages, zwróc ją lub false jeśli nie ma
    // przypisz zwrocona wartosc do this.state.newMessage
    const msg = this.getFakeMessage()
    this.setState({newMessage: msg});
  }

  findPayments = (payments) => {
    // sprawdz czy user ma jakieś platnosci w tablicy, jeśli ma zwróć 2 lub 1 ostatnio dodane jeśli nie zwroc false
    // przypisz zwróconą wartość do this.state.payments
  }

  findClientRequests = (clientsRequests) => {
    // jesli tablica clientRequests coś zawiera zwróć pierwszy obiekt, jeśli pusta zwróć false
    // przypisz zwróconą wartość do this.state.newRequest
    this.setState({ newRequest: clientsRequests[0] });
  }

  showRequests(isAdmin, newRequest) {
    if (isAdmin && newRequest) {
      return <NewRequests { ...newRequest }{...this.requestHandlers} />;
    } else if (isAdmin && !newRequest) {
      return <NoNewRequests />;
    } else return ''
  };

  acceptRequest = (e) => {
    e.preventDefault();
    const requests = this.state.requests
    requests.shift()
    console.log("Accepted from: " + this.state.newRequest.name);
    this.setState({ 
      requests: requests,
      newRequest: requests[0]
     });
  }

  declineRequest = () => {
    const confirm = window.confirm("Are You sure?");
    if (!confirm) return;
    const requests = this.state.requests
    requests.shift()
    console.log("Declined from: " + this.state.newRequest.name);
    this.setState({ 
      requests: requests,
      newRequest: requests[0]
     });
  }

  componentDidMount = () => {
    this.init();
  }
  
  init = () => {
    this.findNewMessage('');
    // this.findPayments(this.state.user.payments);
    this.findClientRequests(this.state.requests);
  }

  requestHandlers = {
    acceptRequest: this.acceptRequest,
    declineRequest: this.declineRequest
  }

  render = () => {
    return (
      <div className="card-deck mx-2 my-2 text-center">
        {this.state.newMessage ? <NewMessages {...this.state.newMessage} /> : <NoNewMessages />}
        {this.showRequests(this.state.isAdmin, this.state.newRequest)}
        {this.state.lastPayments ? <LastPayments /> : <NoPayments />}
      </div>
    );
  };
  }
  
  export default PanelsDeck;