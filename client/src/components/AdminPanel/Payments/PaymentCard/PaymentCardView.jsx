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

    function addZero(i) {
        if (i < 10) {
            i = "0" + i
        };
        return i;
    }

    const renderPayments = payments.map(item => {
        var date = new Date(parseInt(item.date));
        const day = date.getDate();
        const month = date.getMonth()+1;
        const year = date.getFullYear();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        return (
            <MDBListGroupItem key={item._id}>
                Amount: {item.amount} <br />
                Date: {`${addZero(day)}-${addZero(month)}-${year} ${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`}
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