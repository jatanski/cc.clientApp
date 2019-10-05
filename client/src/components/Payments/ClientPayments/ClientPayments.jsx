import React from 'react';
import ClientPaymentsView from './ClientPaymentsView';
import baseModel from "../../../baseModel";


class ClientPayments extends React.Component {
    state = {
        user: '',
        payments: []
    }

    endpoint = "payments";

    componentDidMount = () => {
        this.init();
    }

    addpayment = async (ev) => {

        const paymentBody = {
            amount: 100
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
            payments: user.payments
        });
    }

    render() {
        return (
            <ClientPaymentsView user={this.state.user} add={this.addpayment} payments={this.state.payments}>
            </ClientPaymentsView>
        );
    }
}
export default ClientPayments;