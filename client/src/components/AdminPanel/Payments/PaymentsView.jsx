import React from "react";
import "./paymentsList.scss";
import PaymentCard from "./PaymentCard/PaymentCard"
import { MDBCardHeader, MDBCard, MDBNavLink, MDBContainer, MDBIcon, MDBRow, MDBCol } from 'mdbreact';

const PaymentsView = ({users}) => {
    const renderCard = users.map(user => {
        return (
            <MDBCol key={user.name}>
                <PaymentCard  user={user}></PaymentCard>
            </MDBCol>
            
        );
    }); 

    return (
        <section className="payments">
            <MDBContainer>
                    <MDBRow>
                        {renderCard}
                    </MDBRow> 
            </MDBContainer>
        </section>
  );
}


export default PaymentsView;