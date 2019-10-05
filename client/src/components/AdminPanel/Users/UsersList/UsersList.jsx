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
            console.log(data)
            return data;
        } catch (ex) {
            console.log('Exception:', ex)
        }
    }

    onUserDelete = id => {
        this.setState({
                contacts: this.state.contacts.filter(user => {
                    return user.id !== id
                })
        })

        // Send user delete request to api

        // When 200 delete user from redux adn update view
    }

    onEmailClickRedirect = id => {
        this.props.history.push(`/administration/mailing/${id}`);
    }

    viewProps = {
        onDelete: this.onUserDelete,
        onEmailClick: this.onEmailClickRedirect
    }

    render() {
        return (
            <UsersListView contacts={this.state.contacts} {...this.viewProps} />
        )
    }
}

export default withRouter(UsersList);