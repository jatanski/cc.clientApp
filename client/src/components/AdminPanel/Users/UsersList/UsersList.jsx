import React, { Component } from 'react';
import UsersListView from './UsersListView';
import baseModel from '../../../../baseModel';
import { withRouter } from 'react-router-dom';
import { allActions } from '../../../../redux/store';

class UsersList extends Component {
    state = {
        contacts: [],
        notes: []
    }

    componentDidMount() {
        this.getContacts();
        this.getNotes();
    }

    getContacts = async () => {
        try {
            const response = await fetch(`${baseModel.baseApiUrl}users/list`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    ...baseModel.getAuthTokenHeaderObj()
                }
            });

            let data;
            if (response.headers.get("Content-Type").indexOf("text") >= 0) {
                data = await response.text();
            } else {
                data = await response.json();
                this.setState((state, props) => {
                    return {
                        contacts: data
                    }
                });
            }
            return data;
        } catch (ex) {
            console.log('Exception:', ex)
        }
    }

    getNotes = async () => {
        try {
            const response = await fetch(`${baseModel.baseApiUrl}notes`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    ...baseModel.getAuthTokenHeaderObj()
                }
            });

            let data;
            if (response.headers.get("Content-Type").indexOf("text") >= 0) {
                data = await response.text();
            } else {
                data = await response.json();
                this.setState((state, props) => {
                    return {
                        notes: data
                    }
                });
            }
            return data;
        } catch (ex) {
            console.log('Exception:', ex)
        }
    }

    onUserDelete = async (id, name) => {
        const answear = prompt(`You are trying to delete user: ${name}.\nType "YES" to confirm.`);
        if(answear && answear.toUpperCase() !== 'YES') return;

        try {
            const response = await fetch(`${baseModel.baseApiUrl}users/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    ...baseModel.getAuthTokenHeaderObj()
                }
            });

            let data;
            if (response.headers.get("Content-Type").indexOf("text") >= 0) {
                data = await response.text();
            } else {
                data = await response.json();
            }
            this.setState({
                contacts: this.state.contacts.filter(user => {
                    return user._id !== id
                })
            });
            return data;
        } catch (ex) {
            console.log('Exception:', ex)
        }
    }

    onEmailClickRedirect = (id, email) => {
        this.props.history.push({
            pathname: '/administration/mailing',
            search: `id=${id}&email=${email}`
        })
    }

    onMessageSend = (id, name) => {
        this.props.history.push('/messages')
        allActions.setRecipient({id, name})
    }

    onClientAddNoteWindow = (e) => {
        let box = e.target.parentNode.parentNode.parentNode.children[2];
        box.classList.toggle('hidden');
    }

    onClientAddNote = async (id, e) => {
        let note = e.target.parentNode.children[0].value;
        try {
            const response = await fetch(`${baseModel.baseApiUrl}notes`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...baseModel.getAuthTokenHeaderObj()
                },
                body: JSON.stringify({
                    userId: id,
                    comment: note
                })
            });
            this.getNotes();
            return response;
        } catch (ex) {
            console.log('Exception:', ex)
        }
    }

    onClientDeleteNote = async (id, e) => {
        try {
            const response = await fetch(`${baseModel.baseApiUrl}notes/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    ...baseModel.getAuthTokenHeaderObj()
                }
            });
            this.getNotes();
            return response;
        } catch (ex) {
            console.log('Exception:', ex)
        }
    }

    viewProps = {
        onDelete: this.onUserDelete,
        onEmailClick: this.onEmailClickRedirect,
        onClientAddNoteWindow: this.onClientAddNoteWindow,
        onClientAddNote: this.onClientAddNote,
        onClientDeleteNote: this.onClientDeleteNote,
        onMessageSend: this.onMessageSend
    }

    render() {
        return (
            <UsersListView contacts={this.state.contacts} notes={this.state.notes} {...this.viewProps} />
        )
    }
}

export default withRouter(UsersList);
