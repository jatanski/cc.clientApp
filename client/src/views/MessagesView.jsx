import React, { Component } from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
} from "mdbreact";

import ShowMessages from '../components/MessageView/ShowMessages/ShowMessages';
import CreateMessage from '../components/MessageView/CreateMessage/CreateMessage';

class MessagesView extends Component {
    
    render() {
        return (
            <MDBContainer className="Messages">
                <MDBRow>
                    <MDBCol md="4">
                        <CreateMessage />
                    </MDBCol>
                    <MDBCol md="8">
                        <ShowMessages />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default MessagesView;