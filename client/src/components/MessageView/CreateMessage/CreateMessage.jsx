import React, { Component } from 'react';
import { connect } from 'react-redux';
import baseModel from "../../../baseModel";

import CreateMessageView from './CreateMessageView';

class CreateMessage extends Component  {
    state = {
        recipient: '',
        message: ''
    }

    messagesEndpoint = 'messages';
    newMessageEndpoint = 'messages/new';

    componentDidUpdate(prevProps) {
        if(this.props.recipient !== prevProps.recipient) {
            this.setState(state => {
                return {
                    ...state,
                    recipient: this.props.recipient
                }
            })
        }
    }

    onFormSubmit = async (ev) => {
        ev.preventDefault();
        console.log(ev)

        const messageBody = {
            message: this.state.message,
            to: this.state.recipient,
            from: this.props.myId,
            date: Date.now()
        }

        try {
            const response = await fetch(`${baseModel.baseApiUrl}${this.newMessageEndpoint}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(messageBody)
            });

            let data;
            if (response.headers.get("Content-Type").indexOf("text") >= 0) {
                data = await response.text();
            } else {
                data = await response.json();
            } 
            console.log('Response: ', data);
        } catch (ex) {
            console.log('Exception:', ex)
        }
    }

    onPersonChange = (ev) => {
        this.setState({
            ...this.state,
            recipient: ev.target.value
        })
    }

    onMessageChange = (ev) => {
        this.setState({
            ...this.state,
            message: ev.target.value
        })
    }

    render() {
        return (
            <CreateMessageView 
                onPersonChange={this.onPersonChange}
                onMessageChange={this.onMessageChange} 
                personValue={this.state.recipient} 
                messageValue={this.state.message}
                onFormSubmit={this.onFormSubmit} 
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recipient: state.messages.recipient,
        myId: state.login.user.id
    }
}

export default connect(mapStateToProps, null)(CreateMessage);