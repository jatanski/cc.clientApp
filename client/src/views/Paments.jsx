import React from "react";
import PaymentsList from "../components/Payments/PaymentsList/PaymentsList";
import "../scss/views/payments.scss";
import { MDBTable, MDBTableBody, MDBTableHead, MDBContainer } from 'mdbreact';

const Payments = () => {
    return <PaymentsList></PaymentsList>;
}


export default Payments;