import React from 'react';
import {
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBCardFooter,
    MDBInput,
    MDBBtn
} from "mdbreact";

const SendEmailsView = (props) => {

    return (
        <MDBCard>
            <MDBCardHeader>Send e-mail</MDBCardHeader>
            <form onSubmit={props.onSend}>
                <MDBCardBody>
                        <p>To: {props.email ? props.email : 'Send to all users - not supported yet'}</p>
                        <MDBInput
                            label="Subject"
                            type="text"
                            onChange={props.onSubjectChange}
                        />
                        <MDBInput
                            label="Your e-mail message"
                            type="textarea"
                            onChange={props.onBodyChange}
                        />
                        { props.info ? (<p style={{textAlign: 'center'}}>{props.info}</p>) : null }
                        <small style={{fontStyle: 'italic', color: '#aaa'}}>* html tags available</small>
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

export default SendEmailsView;