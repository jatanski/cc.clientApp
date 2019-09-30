import React, { Component } from "react";
import PaymentCardView from './PaymentCardView';

class PaymentCard extends Component {

    render() {
        return (
            
            <PaymentCardView  name={this.props.user.name} payments={this.props.user.payments}></PaymentCardView>
        );
    }
}

export default PaymentCard;