import React from 'react';
import {
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBCardFooter,
    MDBInput,
    MDBBtn
} from "mdbreact";

const SendMessagesView = () => {

    return (
        <MDBCard>
            <MDBCardHeader>Send message to all users</MDBCardHeader>
            <form>
                <MDBCardBody>
                        <MDBInput
                            label="Your e-mail message"
                            type="textarea"
                            validate
                            success="right"
                            error="wrong"
                        />
                </MDBCardBody>
                <MDBCardFooter className="text-center ">
                    <MDBBtn 
                        color="deep-orange" 
                        type="submit"
                        size="sm"> Send
                    </MDBBtn>
                </MDBCardFooter>
            </form>
        </MDBCard>
    )
}

export default SendMessagesView;