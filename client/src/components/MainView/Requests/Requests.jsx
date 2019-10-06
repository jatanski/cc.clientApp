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

  loadRequests = () => {
    console.log("Loading requests...",)
      // try {
      //   const response = await fetch(`${baseModel.baseApiUrl}requests`, {
      //     method: "GET",
      //     headers: {
      //       "Content-Type": "application/json",
      //       ...baseModel.getAuthTokenHeaderObj()
      //     }
      //   });

      //   let data;
      //   if (response.headers.get("Content-Type").indexOf("text") >= 0) {
      //     data = await response.text();
      //   } else {
      //     data = await response.json();
      //     this.setState({
      //         requests: data,
      //         newRequest: data[0]
      //     });
      //   }
      //   console.log(data)
      // } catch (ex) {
      //   console.log('Exception:', ex)
      // }
  }

  showRequests(isAdmin, newRequest) {
    if (!isAdmin) return '';

    if (newRequest) {
      return <NewRequestsView { ...newRequest }{...this.requestHandlers} />;
    } else {
      return <NoNewRequestsView loadRequests={this.loadRequests} />;
    };
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