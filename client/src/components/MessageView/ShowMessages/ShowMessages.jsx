import React, { Component } from 'react';

import ShowMessagesView from './ShowMessagesView';

class ShowMessages extends Component {
    state = {
        recentMessages: this.props.messages.slice(0, 5),
        disableBtn: this.props.messages.length > 5 ? false : true,
    }

    loadMore = () => {
        this.setState((state, props) => {
            return {...state,
                recentMessages: props.messages,
                disableBtn: true
            }
        });
    }

    render() {
        return (
            <ShowMessagesView 
                messages={ this.state.recentMessages } 
                onLoadMore={ this.loadMore }
                disableBtn={ this.state.disableBtn } />
        )
    }
}

export default ShowMessages;