import React, { Component } from 'react';
import UsersListView from './UsersListView';
import baseModel from '../../../../baseModel';
import { withRouter } from 'react-router-dom';

class UsersList extends Component {
    state = {
        contacts: []
    }

    componentDidMount() {
        this.getContacts();
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

    onUserDelete = async (id, name) => {
        const answear = prompt(`You are trying to delete user: ${name}.\nType "YES" to confirm.`);
        if(answear.toUpperCase() !== 'YES') return;

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
                    this.setState({
                        contacts: this.state.contacts.filter(user => {
                            return user._id !== id
                        })
                    });
            }
            console.log(data)
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

    onClientAddNoteWindow = (e) => {
        console.log(e.target.parentNode.parentNode.parentNode);
        let box = e.target.parentNode.parentNode.parentNode;
        let noteSection = "<div><input type=\"text\" class=\"form-control\" placeholder=\"Note\" aria-label=\"Note\" aria-describedby=\"material-addon1\"><button type=\"button\" class=\"btn btn-primary\">Submit Note</button></div>";
        box.innerHTML += noteSection;
    }

    viewProps = {
        onDelete: this.onUserDelete,
        onEmailClick: this.onEmailClickRedirect,
        onClientAddNoteWindow: this.onClientAddNoteWindow
    }

    render() {
        return (
            <UsersListView contacts={this.state.contacts} {...this.viewProps} />
        )
    }
}

export default withRouter(UsersList);
