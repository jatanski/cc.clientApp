import React, { Component } from 'react';
import UsersListView from './UsersListView';

class UsersList extends Component {
    state = {
        contacts: [
            { id: 1, name: 'Aleksandra Przytuła' },
            { id: 2, name: 'Bartosz robak' },
            { id: 3, name: 'Grzegorz Witczak'},
            { id: 4, name: 'Jakub Tański'},
            { id: 5, name: 'Michał Olech' },
            { id: 6, name: 'Paweł Praczyk'},
        ],
    }
    componentDidUpdate() {
        console.log('update')
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

    onUserEdit = id => {
        console.log(id)
        // Display modal / component below

        // Fill inputs with user data

        // After editing create updatedUserObj and send request

        // Update user on front adn redirect to users list
    }

    viewProps = {
        onDelete: this.onUserDelete,
        onEdit: this.onUserEdit
    }

    render() {
        return (
            <UsersListView contacts={this.state.contacts} {...this.viewProps} />
        )
    }
}

export default UsersList;