import React from 'react'
import {
    MDBCardHeader,
    MDBCard,
    MDBListGroup,
    MDBListGroupItem,
    MDBCardBody,
    MDBCardTitle
} from 'mdbreact';

const PaymentCardView = ({name, payments}) => {

    const renderPayments = payments.map(item => {
        const day = item.dateOfFinalize.getDate();
        const month = item.dateOfFinalize.getMonth();
        const year = item.dateOfFinalize.getFullYear();
        return (
            <MDBListGroupItem key={item.amount}>
                Amount: {item.amount} <br />
                Date: {`${day}/${month}/${year}`}
            </MDBListGroupItem>);
    })

    return (
        <MDBCard className="mb-4">
            <MDBCardHeader>{name}</MDBCardHeader>
            <MDBCardBody>
                <MDBCardTitle>Recent payments</MDBCardTitle>
                <MDBListGroup>
                    {renderPayments}
                </MDBListGroup>
            </MDBCardBody>
        </MDBCard>
    );
}

export default PaymentCardView;