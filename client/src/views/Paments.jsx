import React from "react";
import PaymentsList from "../components/Payments/PaymentsList/PaymentsList";
import PaymentForm from "../components/Payments/PaymentForm/PaymentForm";
import ClientPayments from "../components/Payments/ClientPayments/ClientPayments";
import "../scss/views/payments.scss";
import { MDBTable, MDBTableBody, MDBTableHead, MDBContainer } from 'mdbreact';
import ClientPaymentsView from "../components/Payments/ClientPayments/ClientPaymentsView";


class Payments extends React.Component {
    state = {
        users: [
            {
                name: 'Jan Burak',
                payments: [
                    {
                        amount: 100,
                        state: 'Completed',
                        dateOfFinalize: new Date('2011-04-11T10:20:30Z')
                    },
                    {
                        amount: 1010,
                        state: 'Completed',
                        dateOfFinalize: new Date('2011-04-11T10:20:30Z')
                    }
                ]
                
            },
            {
                name: 'Karek lorka',
                payments: [{
                        amount: 10120,
                        state: 'Completed',
                        dateOfFinalize: new Date('2011-04-11T10:20:30Z')
                    },
                    {
                        amount: 103210,
                        state: 'Completed',
                        dateOfFinalize: new Date('2011-04-11T10:20:30Z')
                    }, {
                        amount: 100,
                        state: 'Completed',
                        dateOfFinalize: new Date('2011-04-11T10:20:30Z')
                    }
                ]

            },
            {
                name: 'Dobra morda',
                payments: [{
                        amount: 100,
                        state: 'Completed',
                        dateOfFinalize: new Date('2011-04-11T10:20:30Z')
                    }
                ]

            },
            {
                name: 'Jan Betoniarek',
                payments: [{
                        amount: 100,
                        state: 'Completed',
                        dateOfFinalize: new Date('2011-04-11T10:20:30Z')
                    },
                    {
                        amount: 1010,
                        state: 'Completed',
                        dateOfFinalize: new Date('2011-04-11T10:20:30Z')
                    }
                ]

            }
        ]
    }


    render() {
        return <PaymentsList users={this.state.users}></PaymentsList>
        // return <PaymentForm></PaymentForm>
        //  return <ClientPaymentsView></ClientPaymentsView>
    }
}


export default Payments;