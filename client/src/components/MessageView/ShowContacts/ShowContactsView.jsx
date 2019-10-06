import React from 'react';
import {
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBListGroup,
    MDBListGroupItem
} from "mdbreact";

import { allActions } from '../../../redux/store';

const ShowContactsView = ({contacts}) => {

    const contactsJSXArr = contacts.map(person => {
        return (
            <MDBListGroupItem 
                key={person}
                onClick={() => allActions.setRecipient(person)}
                hover> { person }
            </MDBListGroupItem>)
    });

    return (
        <MDBCard className="mb-4">
            <MDBCardHeader>Contact List</MDBCardHeader>
            <MDBCardBody>
                <MDBListGroup>
                    { contactsJSXArr }
                </MDBListGroup>
            </MDBCardBody>
        </MDBCard>
    )
}

export default ShowContactsView;