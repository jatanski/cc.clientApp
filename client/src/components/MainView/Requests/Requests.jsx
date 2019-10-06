import React, { Component } from "react";
import NewRequestsView from "./NewRequestsView";
import NoNewRequestsView from "./NoNewRequestsView";
import SendRequestView from "./SendRequestView";
import MyAdminView from "./MyAdminView";
import baseModel from "../../../baseModel";

class Requests extends Component {
  constructor (props) {
    super(props);
    this.state = ({
      requests: this.props.requests,
      newRequest: this.props.requests[0],
      signedAdmin: this.props.signedAdmin
    });
  }

  componentDidUpdate = prevProps => {
    if (prevProps !== this.props) {
      this.setState({
        requests: this.props.requests,
        newRequest: this.props.requests[0],
        isAdmin: this.props.isAdmin,
        signedAdmin: this.props.signedAdmin
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
      const response = await fetch(`${baseModel.baseApiUrl}requests/${choice}/${newRequest.id}`, {
        method: "PUT",
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
      } 

      console.log('Response: ', data);
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
        console.log('Response: ', data);
      } catch (ex) {
        console.log('Exception:', ex)
      }
  }

  getAdmins = async () => {
    try {
      const response = await fetch(`${baseModel.baseApiUrl}users/list`, {
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
      }
      
      const admins = data.filter(user => user.isAdmin);
  
      return admins;

    } catch (ex) {
      console.log('Exception:', ex)
    }
  }
  
  showRequests = (isAdmin, newRequest, signedAdmin) => {
    if (!isAdmin && !signedAdmin) {
      return (
      <SendRequestView adminList={this.getAdmins()}></SendRequestView>
      );
    } else if (!isAdmin && signedAdmin) {
      return (
        <MyAdminView adminEmail={signedAdmin} changeAdmin={this.changeAdmin}></MyAdminView>
        );
    }


    if (newRequest) {
      return <NewRequestsView { ...newRequest }{...this.requestHandlers} />;
    } else {
      return <NoNewRequestsView loadRequests={this.loadRequests} />;
    };
  };

  changeAdmin = async () => {
    const confirm = window.confirm("Are You sure?");
    if (!confirm) return;

    await fetch(baseModel.baseApiUrl + "users/resetAdmin", {
      method: "PUT",
      headers: { 
        "Content-Type": "application/json",
        ...baseModel.getAuthTokenHeaderObj()
      },
    });

    this.setState({
      signedAdmin: ''
    });

  }

  requestHandlers = {
    acceptRequest: this.acceptRequest,
    declineRequest: this.declineRequest
  }



  render = () => {
    return (
      this.showRequests(this.state.isAdmin, this.state.newRequest, this.state.signedAdmin)
    )
  };
}
  
export default Requests;