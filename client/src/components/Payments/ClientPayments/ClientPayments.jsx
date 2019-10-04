import React from 'react';
import ClientPaymentsView from './ClientPaymentsView';

class ClientPayments extends React.Component {
    state = {
        users: [{
                name: 'Jan Burak',
                payments: [{
                        amount: 100,
                        state: 'Completed',
                        dateOfFinalize: new Date('2011-04-11T10:20:30Z')
                    },
                    {
                        amount: 1010,
                        state: 'Completed',
                        dateOfFinalize: new Date('2011-04-11T10:20:30Z')
                    }
                ]

            }
        ]
    }

    render() {
        return (
            <ClientPaymentsView users={this.state.users}></ClientPaymentsView>
        );
    }
}
export default ClientPayments;