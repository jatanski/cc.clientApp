import React, { Component } from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBNav,
    MDBNavLink,
    MDBIcon
} from "mdbreact";
import { Switch, Route, Redirect } from 'react-router-dom';

import UsersList from '../components/AdminPanel/Users/UsersList/UsersList';
import SendEmails from '../components/AdminPanel/SendEmails/SendEmails';
import SendMessages from '../components/AdminPanel/SendMessages/SendMessages';
import Payments from '../components/AdminPanel/Payments/Payments';

class MessagesView extends Component {

    render() {
        return (
            <MDBContainer className="AdminPanel">
                    <MDBRow>
                        <MDBCol md="3" className="mb-4">
                            <MDBNav color="unique-color-dark" className="flex-column font-weight-bold">
                                <MDBNavLink 
                                    className="white-text" 
                                    to={this.props.match.url + '/users'}>
                                    Users
                                    <MDBIcon icon="user"  fixed />
                                </MDBNavLink>
                                <MDBNavLink 
                                    className="white-text" 
                                    to={this.props.match.url + '/mailing'}>
                                    Mailing
                                    <MDBIcon icon="at" fixed />
                                </MDBNavLink>
                                <MDBNavLink 
                                    className="white-text" 
                                    to={this.props.match.url + '/messages'}>
                                    Messages
                                    <MDBIcon icon="envelope" fixed />
                                </MDBNavLink>
                                <MDBNavLink 
                                    className="white-text" 
                                    to={this.props.match.url + '/payments'}>
                                    Payments
                                    <MDBIcon icon="money-bill" fixed />
                                </MDBNavLink>
                            </MDBNav>
                        </MDBCol>
                        <MDBCol md="9">
                            <Switch>
                                <Redirect exact from={this.props.match.url} to={this.props.match.url + '/users'} />
                                <Route path={this.props.match.url + '/users'} component={UsersList} />
                                <Route path={this.props.match.url + '/mailing'} component={SendEmails} />
                                <Route path={this.props.match.url + '/messages'} component={SendMessages} />
                                <Route path={this.props.match.url + '/payments'} component={Payments} />
                            </Switch>
                        </MDBCol>
                    </MDBRow>
            </MDBContainer>
        )
    }
}

export default MessagesView;