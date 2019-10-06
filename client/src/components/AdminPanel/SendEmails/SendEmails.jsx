import React, { Component } from 'react';
import SendEmailsView from './SendEmailsView';
import baseModel from '../../../baseModel';

class SendEmails extends Component {
    
    state = {
        subject: '',
        body: '',
        id: '',
        email: '',
        info: ''
    }

    componentDidMount() {
        if(this.props.location.search) {
            const serachObj = baseModel.mapSearchToObject(this.props.location.search);
            this.setState(state => {
                return {
                    ...serachObj
                }
            }, () => console.log(this.state))
        }
    }

    onSend = async ev => {
        ev.preventDefault()
        
        if(!this.state.id) return;

        try {
            const response = await fetch(`${baseModel.baseApiUrl}mailer`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...baseModel.getAuthTokenHeaderObj()
                },
                body: JSON.stringify({
                    to: this.state.email,
                    subject: this.state.subject,
                    html: this.state.body,
                })
            });

            let data;
            if (response.headers.get("Content-Type").indexOf("text") >= 0) {
                data = await response.text();
            } else {
                data = await response.json();
            }
            this.setState({
                info: data
            })
            console.log(data)
            return data;
        } catch (ex) {
            console.log('Exception:', ex)
        }
    }

    onSubjectChange = ev => {
        this.setState({
            subject: ev.target.value
        })
    }

    onBodyChange = (ev) => {
        this.setState({
            body: ev.target.value
        })
    }

    propsObj = {
        onBodyChange: this.onBodyChange,
        onSubjectChange: this.onSubjectChange,
        onSend: this.onSend
    }

    render() {
        console.log(this.state)
        return (
            <SendEmailsView {...this.state} {...this.propsObj} />
        )
    }
}

export default SendEmails;