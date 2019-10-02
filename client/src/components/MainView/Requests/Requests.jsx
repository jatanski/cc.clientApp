import React, { Component } from "react";
import NewRequestsView from "./NewRequestsView";
import NoNewRequestsView from "./NoNewRequestsView";

class Requests extends Component {
  constructor (props) {
    super(props);
    this.state = ({
      requests: this.props.requests,
      newRequest: this.props.requests[0]
    });
  }

  componentDidUpdate = prevProps => {
    if (prevProps !== this.props) {
      this.setState({
        requests: this.props.requests,
        newRequest: this.props.requests[0],
        isAdmin: this.props.isAdmin
      });
    };
  }

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

  showRequests(isAdmin, newRequest) {
    if (isAdmin && newRequest) {
      return <NewRequestsView { ...newRequest }{...this.requestHandlers} />;
    } else if (isAdmin && !newRequest) {
      return <NoNewRequestsView />;
    } else return ''
  };

  requestHandlers = {
    acceptRequest: this.acceptRequest,
    declineRequest: this.declineRequest
  }

  render = () => {
    return (
      this.showRequests(this.state.isAdmin, this.state.newRequest)
    )
  };
}
  
export default Requests;