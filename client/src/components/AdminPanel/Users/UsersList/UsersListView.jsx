import React from 'react';
import {
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBListGroup,
    MDBListGroupItem,
    MDBIcon
} from "mdbreact";

const UsersListView = ({contacts, notes, onEmailClick, onDelete, onClientAddNoteWindow, onClientAddNote}) => {

    const usersJSX = contacts.map(contact =>{ let note = notes.forEach((e) => {if(e.userId === contact._id) console.log(e);});
    return (
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

                {
                note ?
                    <div className="md-form input-group mb-4 hidden">
                        <h4>{note}</h4>
                    </div> :
                    <div className="md-form input-group mb-4 hidden">
                        <input type="text" className="form-control" placeholder="Note" aria-label="Note" aria-describedby="material-addon2"/>
                        <button type="button" className="btn btn-primary" onClick={onClientAddNote.bind(this, contact._id)}>Submit Note</button>
                    </div>
                }

        </MDBListGroupItem>
    )});

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
