import React, { Component } from "react";
import PaymentsListView from "./PaymentsListView";
import baseModel from "../../../baseModel";
class PaymentsList extends Component {

    async getClients () {
        const token = baseModel.getAuthTokenHeaderObj();
        try {
            const response = await fetch(baseModel.baseApiUrl + "clientpayments", {
                method: "GET",
                headers: { ...token }
            });
            const userData = await response.json();
            return userData;
        } catch (err) {
            console.error(err);
        }
    }
    render() {
        return (
            <PaymentsListView {...this.props}></PaymentsListView>
        );
    }
}

export default PaymentsList;