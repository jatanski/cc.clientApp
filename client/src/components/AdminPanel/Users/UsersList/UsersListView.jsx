import React from 'react';
import {
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBListGroup,
    MDBListGroupItem,
    MDBIcon
} from "mdbreact";

const UsersListView = ({contacts, onDelete, onEdit}) => {

    const usersJSX = contacts.map(contact => (
        <MDBListGroupItem 
            className="d-flex justify-content-between align-items-center"
            key={contact.id}>
            {contact.name}
            <div className='user-actions'>
                <MDBIcon 
                    icon="pencil-alt" 
                    className="indigo-text"
                    onClick={() => onEdit(contact.id)}
                    fixed />
                <MDBIcon 
                    icon="trash-alt"
                    className="red-text"
                    onDoubleClick ={() => onDelete(contact.id)} 
                    fixed />
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