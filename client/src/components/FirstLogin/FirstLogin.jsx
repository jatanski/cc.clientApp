import React, { Component } from "react";
import FirstLoginView from "./FirstLoginView";
import baseModel from '../../baseModel';

class FirstLogin extends Component {

    endpoint = "users/subscriptionPrice";
    setSubscriptionPrice = async (price) => {

        const requestBody = {
            subscriptionPrice: price
        }
        

        try {
            const response = await fetch(`${baseModel.baseApiUrl}${this.endpoint}`, {
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
        } catch (ex) {
            console.log('Exception:', ex)
        }
    }

    render() {
        return (
            <FirstLoginView request={this.setSubscriptionPrice}></FirstLoginView>
        );
    }
}

export default FirstLogin;