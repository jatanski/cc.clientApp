import React, { Component } from 'react';
import { connect } from 'react-redux';

import CreateMessageView from './CreateMessageView';

class CreateMessage extends Component {
    state = {
        recipient: this.props.recipient
    }

    onFormSubmit = (ev) => {
        ev.preventDefault();
        console.log('Create Message form submitted')
    }

    onPersonChange = (ev) => {
        
    }

    render() {
        console.log(this.props);

        return (
            <CreateMessageView 
                onPersonChange={this.onPersonChange} 
                personValue={this.state.recipient} 
                onFormSubmit={this.onFormSubmit} 
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recipient: state.messages.recipient
    }
}

export default connect(mapStateToProps, null)(CreateMessage);