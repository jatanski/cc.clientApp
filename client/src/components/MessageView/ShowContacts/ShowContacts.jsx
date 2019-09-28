import React, { Component } from 'react';

import ShowContactsView from './ShowContactsView';

class ShowContacts extends Component {

    render() {
        return (
            <ShowContactsView {...this.props}/>
        )
    }
}

export default ShowContacts;