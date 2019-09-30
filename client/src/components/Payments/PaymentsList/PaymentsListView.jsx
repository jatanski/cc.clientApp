import React from "react";
import "./paymentsList.scss";
import PaymentCard from "../PaymentCard/PaymentCard"
import { MDBCardHeader, MDBCard, MDBNavLink, MDBContainer, MDBIcon, MDBRow, MDBCol } from 'mdbreact';

const Payments = ({users}) => {
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
                <MDBCard className="mb-4">
                    <p className="h4 text-center py-4">List of my clients paymets</p>
                </MDBCard>    
                <MDBNavLink  to="/myclientspayments">
                    <div className="text-center" >
                        <i  className="h1" >
                            <MDBIcon style={{ color: 'white' }} onClick={() => console.log('see')} icon="plus" />
                        </i>
                    </div>
                </MDBNavLink>
                <MDBRow>
                    {renderCard}
                </MDBRow>
            </MDBContainer>
        </section>
  );
}


export default Payments;