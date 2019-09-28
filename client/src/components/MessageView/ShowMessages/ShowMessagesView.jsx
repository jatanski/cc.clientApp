import React from 'react';
import {
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBListGroup,
    MDBListGroupItem,
    MDBCardFooter,
    MDBBtn,
    MDBIcon
} from "mdbreact";

const ShowMessagesView = ({messages, onLoadMore, disableBtn}) => {

    const messagesJSXArr = messages.map(message => {
        const timeDiff = Date.now() - message.when;
        const timeDays = Math.ceil(timeDiff / 1000 / 60 / 60 / 24);
        return (
            <MDBListGroupItem 
                key={message.from} 
                hover >
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1"> { message.from} </h5>
                        <small>{ timeDays } day ago</small>
                    </div>
                    <p className="mb-1">{ message.body }</p>
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
            <MDBCardFooter>
                <MDBBtn 
                    color="deep-orange"
                    size="sm"
                    onClick={onLoadMore}
                    disabled={disableBtn}
                     > Show All
                </MDBBtn>
            </MDBCardFooter>
        </MDBCard>
    )
}

export default ShowMessagesView;