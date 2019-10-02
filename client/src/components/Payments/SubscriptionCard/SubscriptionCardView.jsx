import React from 'react'
import {
    MDBCardHeader,
    MDBCard,
    MDBListGroup,
    MDBListGroupItem,
    MDBCardBody,
    MDBCardTitle,
    MDBBtn
} from 'mdbreact';
import './subscriptionCard.scss'
import { defaultProps } from 'recompose';

const renderButton = () => {
    const a = true;
    if (a)
    {
        return (<button 
                type="button" 
            className="btn btn-outline-danger waves-effect">
                Cancel Subscription
            </button>);
    }
    return (
        <h3>Thanks for your support</h3>
    );
        
}
const SubscriptionCardView = ({name, payments}) => {

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
        <MDBCard   className="mb-4">
            <MDBCardHeader>{name}</MDBCardHeader>
            <MDBCardBody>
                <MDBCardTitle>Recent payments</MDBCardTitle>
                <MDBListGroup>
                    {renderPayments}
                </MDBListGroup>
                <div className="bottom-element">
                    <button 
                        type="submit" 
                        className="btn btn-outline-success waves-effect">
                        Pay for Subscription
                    </button>
                    {renderButton()}
                </div>
            </MDBCardBody>
        </MDBCard>
    );
}

export default SubscriptionCardView;