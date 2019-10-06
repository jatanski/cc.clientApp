import React from 'react';
import {
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBListGroup,
    MDBListGroupItem,
    MDBIcon
} from "mdbreact";

const UsersListView = ({contacts, onEmailClick, onDelete, onClientAddNoteWindow}) => {

    const usersJSX = contacts.map(contact => (
        <MDBListGroupItem
            key={contact._id}>
            <div className="d-flex justify-content-between align-items-center">
                <span>Name: {contact.name}</span>
                <div className="user-actions">
                    <MDBIcon
                        icon="pencil-alt"
                        className="blue-text"
                        onClick ={onClientAddNoteWindow.bind(this)}
                        fixed />
                    <MDBIcon
                        icon="at"
                        className="blue-text"
                        onClick ={() => onEmailClick(contact._id, contact.email)}
                        fixed />
                    <MDBIcon
                        icon="trash-alt"
                        className="red-text"
                        onDoubleClick ={() => onDelete(contact._id, contact.name)}
                        fixed />
                </div>
            </div>

            <div className=' d-flex justify-content-between align-items-center'>
                <span style={{ marginRight: '1rem'}}>E-mail: { contact.email }</span>
                <small>_id: { contact._id }</small>

            </div>
        </MDBListGroupItem>
    ))

    return (
        <MDBCard>
            <MDBCardHeader>Users</MDBCardHeader>
            <MDBCardBody>
                <MDBListGroup>
                    { usersJSX }
                </MDBListGroup>
            </MDBCardBody>
        </MDBCard>
    )
}

export default UsersListView;
