import React, { Component } from 'react';
import baseModel from '../../../baseModel';
import ShowMessagesView from './ShowMessagesView';

class ShowMessages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            loader: false,
            messagesType: 'sent'
        };
    }

    endpoints = {
        sent: 'sent',
        received: 'received',
        bin: 'bin'
    }

    componentDidMount() {
        this.getMessages('received')
    }

    getMessages = async (type) => {
        type = (type === 'refresh') ? this.state.messagesType : type;

        try {
            const response = await fetch(`${baseModel.baseApiUrl}messages/${this.endpoints[type]}`, {
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
                this.setState({
                    messages: data,
                    messagesType: type,
                    loader: false,
                });
            }
            console.log(data)
        } catch (ex) {
            console.log('Exception:', ex)
        }
    }

    loadMessagesByType = (type) => {
        this.getMessages(type)
    }

    render() {
        console.log('ShowMessages render', this.props, this.state);
        return (
            <ShowMessagesView 
                messages={ this.state.messages } 
                load={ this.loadMessagesByType }
                loader={ this.state.loader }
                disableBtn={ true } />
        )
    }
}

export default ShowMessages;
