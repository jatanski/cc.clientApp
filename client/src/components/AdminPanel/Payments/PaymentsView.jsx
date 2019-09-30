import React from 'react';
import {
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBCardText
} from "mdbreact";

const PaymentsView = () => {

    return (
        <MDBCard>
            <MDBCardHeader>Payments</MDBCardHeader>
                <MDBCardBody>
                <MDBCardText>
                    With supporting text below as a natural lead-in to additional
                    content.
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
    )
}

export default PaymentsView;