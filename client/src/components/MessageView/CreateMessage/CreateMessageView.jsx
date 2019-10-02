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

const CreateMessageView = (props) => {

    return (
        <MDBCard className="mb-4">
            <form onSubmit={props.onFormSubmit}>
                <MDBCardHeader>Send Message</MDBCardHeader>
                <MDBCardBody>
                    <MDBInput
                        label="Contact or User_ID"
                        type="text"
                        value={props.personValue}
                        onChange={props.onPersonChange}
                    />
                    <MDBInput
                        label="Your title"
                        type="text"
                        value={props.titleValue}
                        onChange={props.onTitleChange}
                    />
                    <MDBInput
                        label="Your message"
                        type="textarea"
                        value={props.messageValue}
                        onChange={props.onMessageChange}
                    />
                </MDBCardBody>
                <MDBCardFooter className="text-center">
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