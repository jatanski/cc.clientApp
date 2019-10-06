import React, { Component } from "react";
import NewRequestsView from "./NewRequestsView";
import NoNewRequestsView from "./NoNewRequestsView";
import baseModel from "../../../baseModel";

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

  acceptRequest = async () => this.handleClickOnRequest("accept");

  declineRequest = async () => {
    const confirm = window.confirm("Are You sure?");
    if (!confirm) return;

    this.handleClickOnRequest("decline");
  }

  handleClickOnRequest = async (choice) => {
    const newRequest = this.state.newRequest

    try {
      await fetch(`${baseModel.baseApiUrl}requests/${choice}/${newRequest.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          ...baseModel.getAuthTokenHeaderObj()
        }
      });
    } catch (ex) {
      console.log('Exception:', ex)
    }
    
    const requests = this.state.requests
    requests.shift()
    console.log(`${choice.toUpperCase()}: ${this.state.newRequest.name}`);
    this.setState({ 
      requests: requests,
      newRequest: requests[0]
     });
  }

  loadRequests = async () => {
    console.log("Loading requests...",)
      try {
        const response = await fetch(`${baseModel.baseApiUrl}requests`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            ...baseModel.getAuthTokenHeaderObj()
          }
        });

        let data;
        if (response.headers.get("Content-Type").indexOf("text") >= 0) {
          data = await response.text();
        } else {
          data = await response.json();
          
          const requests = data.map(request => {
            return {
              id: request._id,
              date: request.date,
              name: request.user.name,
              surname: request.user.surname || "Surname",
              avatar: request.user.avatar || "https://osclass.calinbehtuk.ro/oc-content/themes/vrisko/images/no_user.png"
            }
          });

          this.setState({
            requests: requests,
            newRequest: requests[0]
          });
        }
      } catch (ex) {
        console.log('Exception:', ex)
      }
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