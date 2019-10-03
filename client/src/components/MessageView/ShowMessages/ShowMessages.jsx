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
        if(type === this.state.messagesType) return;

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

    onReadMessage = async (id) => {
        if(!this.state.messagesType === 'received') return;
        console.log(`${baseModel.baseApiUrl}messages/${id}`)
        try {
            const response = await fetch(`${baseModel.baseApiUrl}messages/${id}`, {
                method: "PUT",
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
                    messages: this.state.messages.map(el => {
                        if(el._id === id) {
                            el.new = false
                            return el;
                        }
                        return el;
                    })
                })
            }
        } catch (ex) {
            console.log('Exception:', ex)
        }
    }

    onDeleteMessage = async (id) => {
        try {
            const response = await fetch(`${baseModel.baseApiUrl}messages/${this.endpoints[this.state.messagesType]}/${id}`, {
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
                    messages: this.state.messages.filter(el => el._id !== id)
                })
            }
        } catch (ex) {
            console.log('Exception:', ex)
        }
    }

    render() {
        return (
            <ShowMessagesView 
                messages={ this.state.messages } 
                load={ this.loadMessagesByType }
                loader={ this.state.loader }
                onDelete={ this.onDeleteMessage }
                onRead={ this.onReadMessage }
                disableBtn={ true } />
        )
    }
}

export default ShowMessages;
