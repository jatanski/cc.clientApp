import React from 'react';
import {
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBListGroup,
    MDBListGroupItem,
    MDBCardFooter,
    MDBBtn,
    MDBIcon,
    MDBBadge
} from "mdbreact";

const ShowMessagesView = ({messages, load, onDelete, onRead, type}) => {

    const messagesJSXArr = messages.map(message => {
        const timeDiff = Date.now() - message.date;
        const timeDays = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
        return (
            <MDBListGroupItem 
                key={message._id} 
                hover >
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-1"> 
                        { message.new ? (<MDBBadge onClick={() => onRead(message._id)} pill color="primary" className="mr-2">NEW</MDBBadge>) : null }
                        <strong>{ message.title }</strong> - 
                            { message.receivers ? (<small> to: {message.receivers[0].email} </small> ) : null }
                            { message.sender ? (<small> from: { message.sender.email ? message.sender.email : message.sender.name } </small> ) : null }
                        </p>
                        <small>
                            { timeDays === 0 ? 'today' : timeDays + ' day ago'}
                            <MDBIcon onClick={() => onDelete(message._id)} icon="trash" className="indigo-text pl-3" />
                        </small>
                    </div>
                    <p className="mb-1">{ message.textContent }</p>
            </MDBListGroupItem>)
    });

    return (
        <MDBCard>
            <MDBCardHeader className="d-flex justify-content-between align-items-center">
                <span>Recent Messages</span>
                <code className="secondary-text">{type.toUpperCase()}</code>
            </MDBCardHeader>
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