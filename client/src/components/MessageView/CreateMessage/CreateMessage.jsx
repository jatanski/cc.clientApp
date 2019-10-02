import React, { Component } from 'react';
import { connect } from 'react-redux';
import baseModel from "../../../baseModel";

import CreateMessageView from './CreateMessageView';

class CreateMessage extends Component  {
    state = {
        recipient: '',
        recipientID: '',
        title: '',
        message: '',
    }

    endpoint = 'messages/';

    componentDidUpdate(prevProps) {
        if(this.props.recipient !== prevProps.recipient) {
            this.setState(state => {
                return {
                    ...state,
                    recipient: this.props.recipient,
                    recipientID: this.props.recipient
                }
            })
        }
    }

    onFormSubmit = async (ev) => {
        ev.preventDefault();

        // VALIDATE INPUTS - TODO

        const messageBody = {
            title: this.state.title,
            textContent: this.state.message,
        }

        try {
            const response = await fetch(`${baseModel.baseApiUrl}${this.endpoint}${this.state.recipientID}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...baseModel.getAuthTokenHeaderObj()
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

    onPersonChange = ev => this.setState({recipient: ev.target.value})
    onTitleChange = ev => this.setState({title: ev.target.value});
    onMessageChange = ev => this.setState({message: ev.target.value});

    render() {
        return (
            <CreateMessageView 
                onFormSubmit={this.onFormSubmit} 
                personValue={this.state.recipient} 
                onPersonChange={this.onPersonChange}
                titleValue={this.state.title}
                onTitleChange={this.onTitleChange} 
                messageValue={this.state.message}
                onMessageChange={this.onMessageChange} 
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
// get:
// api/messages/:target    (target może być sent|received|bin) zwraca wszystkie msg z danego targetu,
// api/messages/:target/:id     zwraca konkretną msg z danego targetu,

// put:
// api/messages/:id (zwraca wiadomosc o konkretnym id TYLKO Z RECEIVED i zmienia new: true na new: false - odczytana)

// post:
// api/messages/:id (wysyla wiadomosc do usera z podanym id, u nas ląduje ona w messages.sent, u odbiorcy w messages.received)

// delete:
// api/messages/:target/:id (usuwa wiadomosc o konkretnym id z podanego targetu, jeśli usuwamy z received lub sent trafia do kosza (bin) jesli usuwamy z kosza znika całkiem)

// Do poprawnego posta potrzebne
//      title 
//      textContent (stringi con. 5 znaków) reszte sie samo ogarnia xd
// dla zwrotu tylko nowych/nieodczytanych wiadomosci już nic nie robilem, wystarczy puscić geta na api/messages/received i filtrować msg.new === true