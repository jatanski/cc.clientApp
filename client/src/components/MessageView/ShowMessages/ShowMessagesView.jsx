import React from 'react';
import {
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBListGroup,
    MDBListGroupItem,
    MDBCardFooter,
    MDBBtn,
} from "mdbreact";

const ShowMessagesView = ({messages, load }) => {

    const messagesJSXArr = messages.reverse().map(message => {
        const timeDiff = Date.now() - message.date;
        const timeDays = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
        return (
            <MDBListGroupItem 
                key={message._id} 
                hover >
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1"> { message.title } - <small>{ message.receivers[0].email } </small></h5>
                        <small>{ timeDays === 0 ? 'today' : timeDays + ' day ago'}</small>
                    </div>
                    <p className="mb-1">{ message.textContent }</p>
            </MDBListGroupItem>)
    });

    return (
        <MDBCard>
            <MDBCardHeader>Recent Messages</MDBCardHeader>
            <MDBCardBody>
                
                <MDBListGroup>
                    { messagesJSXArr }
                </MDBListGroup>

            </MDBCardBody>
            <MDBCardFooter className="flex-footer">
                <MDBBtn
                    outline
                    className="mr-auto"
                    color="primary"
                    size="sm"
                    onClick={() => load('refresh')}
                     > Refresh
                </MDBBtn>
                <MDBBtn 
                    color="deep-orange"
                    size="sm"
                    onClick={() => load('sent')}
                     > Sent
                </MDBBtn>
                <MDBBtn 
                    color="indigo"
                    size="sm"
                    onClick={() => load('received')}
                     > Received
                </MDBBtn>
                <MDBBtn 
                    color="unique"
                    size="sm"
                    onClick={() => load('bin')}
                     > Bin
                </MDBBtn>
                
            </MDBCardFooter>
        </MDBCard>
    )
}

export default ShowMessagesView;