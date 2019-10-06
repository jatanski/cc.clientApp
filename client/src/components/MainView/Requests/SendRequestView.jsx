import React, { Component } from "react";
import { 
  MDBBtn,
  MDBListGroup, 
  MDBListGroupItem, 
  MDBContainer
 } from "mdbreact";
 import baseModel from "../../../baseModel";

class SendRequest extends Component { 
  constructor (props) {
    super(props);
    this.state = ({
      admins: '',
      choosenAdmin: ''
    });

    this.myRef = React.createRef(); 
  }

  componentDidMount = async (prevProps) => {
    if (prevProps !== this.props) {
      this.setState({
        admins: await this.createAdminList()
      });
    };
  }

  createAdminList = async () => {
    let admins = await this.props.adminList;
    
    const adminsJSXArr = admins.map(admin => {
      return (
        <MDBListGroupItem 
            key={admin._id} 
            onClick={this.setActive}
            hover
            color="dark" >
          {admin.email}        
        </MDBListGroupItem>
      )
    });

    return adminsJSXArr;
  }

  setActive = (e) => {
    const list = e.target.parentElement.children
    const admin = e.target.innerText;

    for (let item of list) {
      item.classList.remove('active');
    }
    
    e.target.classList.add('active')

    this.setState({
      choosenAdmin: admin
    })
  }

  sendRequest = async () => {
    const admin = this.state.choosenAdmin;
    console.log("Sending to: ", admin)

    const requestBody = {
      adminEmail: admin
    }

    try {
        const response = await fetch(`${baseModel.baseApiUrl}requests`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...baseModel.getAuthTokenHeaderObj()
            },
            body: JSON.stringify(requestBody)
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
  }
 
  render = () => {
    return (
      <div className="card">
        <div className="card-header">
          <b>Sign up to Admin from list below!</b>
        </div>  
        <div className="card-body text-center">
          <MDBContainer>
            <MDBListGroup>
              {this.state.admins}
            </MDBListGroup>
          </MDBContainer>
        </div>
        <div className="card-footer text-center">
          <MDBBtn color="deep-orange" type="submit" onClick={this.sendRequest}>
              Send Request
          </MDBBtn>
        </div>
      </div>
    );
  }
}
  
  export default SendRequest;