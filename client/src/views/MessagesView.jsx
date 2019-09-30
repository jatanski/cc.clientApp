import React, { Component } from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
} from "mdbreact";

import ShowContacts from '../components/MessageView/ShowContacts/ShowContacts';
import ShowMessages from '../components/MessageView/ShowMessages/ShowMessages';
import CreateMessage from '../components/MessageView/CreateMessage/CreateMessage';

class MessagesView extends Component {
    state = {
        contacts: [
            'Aleksandra Przytuła',
            'Bartosz robak',
            'Grzegorz Witczak',
            'Jakub Tański',
            'Michał Olech',
            'Paweł Praczyk'
        ],
        messages: [
            {
                from: 'Marcin Cyboran',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                when: new Date('2019,09,28')
            },
            {
                from: 'Marcin Cyboran - 1',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. . ',
                when: new Date('2019,09,27')
            },
            {
                from: 'Marcin Cyboran - 2',
                body: 'Lorem ipsum dolor sit amet, consectetur adipua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                when: new Date('2019,09,19')
            },
            {
                from: 'Marcin Cyboran - 3',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mnsequat. ',
                when: new Date('2019,09,18')
            },
            {
                from: 'Marcin Cyboran - 4',
                body: 'Lorem ipsum  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                when: new Date('2019,09,08')
            },
            {
                from: 'Marcin Cyboran - 5',
                body: 'Lorem ipsum dolor sitat. ',
                when: new Date('2019,09,02')
            },
        ]
    }

    render() {
        return (
            <MDBContainer className="Messages">
                <MDBRow>
                    <MDBCol md="4">
                        <ShowContacts contacts={this.state.contacts} />
                        <CreateMessage />
                    </MDBCol>
                    <MDBCol md="8">
                        <ShowMessages messages={this.state.messages} />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default MessagesView;