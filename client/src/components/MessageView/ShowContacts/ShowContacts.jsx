import React, { Component } from 'react';

import ShowContactsView from './ShowContactsView';

class ShowContacts extends Component {
    state = {
        contacts: [
            'Aleksandra Przytuła',
            'Bartosz robak',
            'Grzegorz Witczak',
            'Jakub Tański',
            'Michał Olech',
            'Paweł Praczyk',
            '5d94c67a1b06920c9c938bb7'
        ]
    }

    render() {
        return (
            <ShowContactsView {...this.state}/>
        )
    }
}

export default ShowContacts;