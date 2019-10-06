import React from 'react';
import ClientPaymentsView from './ClientPaymentsView';
import baseModel from "../../../baseModel";
import { Date } from 'core-js';


class ClientPayments extends React.Component {
    state = {
        user: '',
        payments: [],
        price: 110,
        deadline: new Date()
    }

    endpoint = "payments";

    componentDidMount = () => {
        this.init();
        this.getDeadline();
    }

    addpayment = async (ev) => {

        const paymentBody = {
            amount: this.state.price
        }

        try {
            const response = await fetch(`${baseModel.baseApiUrl}${this.endpoint}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...baseModel.getAuthTokenHeaderObj()
                },
                body: JSON.stringify(paymentBody)
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
    
    init = async () => {
        const token = baseModel.getAuthTokenHeaderObj()
        const response = await fetch(baseModel.baseApiUrl + `users/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": token["x-auth-token"]
            },
        });
        const user = await response.json();
        console.log(user);
        user.balance = 200
        this.setState({
            user: user,
            payments: user.payments,
            price: user.subscriptionPrice
        });
    }

    getDeadline = async () => {
        const token = baseModel.getAuthTokenHeaderObj()
        const response = await fetch(baseModel.baseApiUrl + `users/deadline/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": token["x-auth-token"]
            },
        });
        const user = await response.json();
        console.log(user);
        
        this.setState({
            deadline: user
        });
    }

    render() {
        return (
            <ClientPaymentsView user={this.state.user} add={this.addpayment} payments={this.state.payments} deadline={this.state.deadline}>
            </ClientPaymentsView>
        );
    }
}
export default ClientPayments;