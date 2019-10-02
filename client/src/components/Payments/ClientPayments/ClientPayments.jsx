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

            },
            {
                name: 'Karek lorka',
                payments: [{
                        amount: 10120,
                        state: 'Completed',
                        dateOfFinalize: new Date('2011-04-11T10:20:30Z')
                    },
                    {
                        amount: 103210,
                        state: 'Completed',
                        dateOfFinalize: new Date('2011-04-11T10:20:30Z')
                    }, {
                        amount: 100,
                        state: 'Completed',
                        dateOfFinalize: new Date('2011-04-11T10:20:30Z')
                    }
                ]

            },
            {
                name: 'Dobra morda',
                payments: [{
                    amount: 100,
                    state: 'Completed',
                    dateOfFinalize: new Date('2011-04-11T10:20:30Z')
                }]

            },
            {
                name: 'Jan Betoniarek',
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