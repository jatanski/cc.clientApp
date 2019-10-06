import React from 'react';
import PaymentsView from './PaymentsView';
import baseModel from '../../../baseModel';


class Payments extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        this.getContacts();
    }
    getContacts = async () => {
        try {
            const response = await fetch(`${baseModel.baseApiUrl}users/list`, {
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
                this.setState((state, props) => {
                    return {
                        users: data
                    }
                });
            }
            return data;
        } catch (ex) {
            console.log('Exception:', ex)
        }
    }
    render() {
        return (
            <PaymentsView users={this.state.users}/>
        )
    }
}

export default Payments;