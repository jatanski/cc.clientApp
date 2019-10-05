import React, { Component } from "react";
import ProfilePageView from './ProfilePageView';
import baseModel from "../../../baseModel";
class ProfilePage extends Component {

    state = {user: ''}

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
        console.log(user);
        this.setState({
            user: user
        });        
    }

    render() {
        return (
            <ProfilePageView 
                user={this.state.user}
                >   
            </ProfilePageView>
        ) 
    }
}

export default ProfilePage;