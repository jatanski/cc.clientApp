import React from 'react';
import {
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBInput,
    MDBBtn,
    MDBCardFooter
} from "mdbreact";
import { connect } from 'react-redux';

const CreateMessageView = ({onFormSubmit, personValue}) => {

    return (
        <MDBCard className="mb-4">
            <form onSubmit={onFormSubmit}>
                <MDBCardHeader>Send Message</MDBCardHeader>
                <MDBCardBody>
                    <MDBInput
                        label="To"
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        value={personValue}
                    />
                    <MDBInput
                        label="Your message"
                        type="textarea"
                        validate
                        error="wrong"
                        success="right"
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
const mapStateToProps = (state) => {
    return {
    }
}
export default connect(mapStateToProps, null)(CreateMessageView);