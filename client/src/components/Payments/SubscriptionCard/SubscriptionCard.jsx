import React, { Component } from "react";
import SubscriptionCardView from "./SubscriptionCardView";

class SubscriptionCard extends Component {

    render() {
        return (
            <SubscriptionCardView name={this.props.user.name} payments={this.props.user.payments}></SubscriptionCardView>
        );
    }
}

export default SubscriptionCard;