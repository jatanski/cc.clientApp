import React from "react";
import { MDBListGroup, MDBCardTitle, MDBCardHeader, MDBContainer, MDBCard, MDBRow, MDBCol, MDBCardBody, MDBListGroupItem, MDBNavLink } from 'mdbreact';
const ClientPaymentsView = ({user, add, payments, deadline}) => {

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

    const renderButton = () => {
        const a = true;
        if (deadline.days > 0)
        {
            return (<div>
                <h6>Your next payment should be made in {deadline.days} days</h6>
                <h3>Thanks for your support</h3>
            </div> );
        }
        return (
            <button 
                onClick={add}
                type="submit" 
                className="btn btn-outline-success waves-effect">
                    Pay for Subscription
                </button>
        );
    }

    return (
        <section className="payments">
            <MDBContainer >
                <MDBRow>
                    <MDBCol key={user.name}>
                    <MDBCard   className="mb-4">
                        <MDBCardHeader>{user.name}</MDBCardHeader>
                        <MDBCardBody>
                            <MDBCardTitle>Recent payments</MDBCardTitle>
                            <MDBListGroup>
                                {renderPayments}
                            </MDBListGroup>
                            <div className="bottom-element">
                                {renderButton()}
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                    </MDBCol>
                </MDBRow> 
            </MDBContainer>
        </section>
  );
}


export default ClientPaymentsView;