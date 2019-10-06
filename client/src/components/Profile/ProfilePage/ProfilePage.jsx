import React, { Component } from "react";
import ProfilePageView from './ProfilePageView';
import baseModel from "../../../baseModel";

class ProfilePage extends Component {

    state = {
        user: '',
        profileFormName: ''
    }


    componentDidMount = () => {
        this.init();
    }

    init = async () => {

        const token = baseModel.getAuthTokenHeaderObj();
        const response = await fetch(baseModel.baseApiUrl + "users/", {
          method: "GET",
          headers: { 
            "x-auth-token": token["x-auth-token"]
          },
        });
        const user = await response.json();
        console.log(user);
        this.setState({
            user: user
        });
        console.log(user);        
    }

    endpoint = "editUser";

    handleInputChange = e => {
        const state = {};
        state[`${e.target.id}`] = e.target.value;
        this.setState(state);
      };

      changeDetails = async e => {
        e.preventDefault();
    
        try {
          const changeData = {
            name: this.state.profileFormName
          };
    
          const token = baseModel.getAuthTokenHeaderObj();
          this.setState( async () => {
            const response = await fetch(baseModel.baseApiUrl + this.endpoint, {
              method: "POST",
              headers: { 
                "Content-Type": "application/json",
                "x-auth-token": token["x-auth-token"],
                'Accept': 'application/json'
              },
              body: JSON.stringify(changeData)
            });
            const data = await response.json();
            baseModel.save("user", data);
          });
          window.location.reload(false);

        } catch (error) {
          console.error(error);
        }
      };
    
    changeFormProps = {
        handleInputChange: this.handleInputChange,
        changeDetails: this.changeDetails
    }

    render() {
        return (
            <ProfilePageView 
                user={this.state.user}
                {...this.changeFormProps}
                >   
            </ProfilePageView>
        ) 
    }
}

export default ProfilePage;