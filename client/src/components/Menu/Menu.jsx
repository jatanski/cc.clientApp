import React from 'react';
import { connect } from 'react-redux';
import MenuView from './MenuView';
import { allActions } from "../../redux/store";
import baseModel from "../../baseModel";
import { withRouter } from "react-router-dom";

class Menu extends React.Component {
    state = {
        isOpen: false
    }

    componentDidMount() {
        if( baseModel.isUserLoggedIn() ) {
            allActions.logIn();
            allActions.setUser(baseModel.getUserFromLocal());
            // this.props.history.push("/home");
        }
    }

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    menuProps = {
        toggleCollapse: this.toggleCollapse,
        setActiveLink: this.setActiveLink
    }

    logOut = () => {
        allActions.logOut();
        baseModel.onLogout();
        this.props.history.push("/");
    }

    render() {
        return (
            <>
            { this.props.loginStatus ? (
                <MenuView
                    user={this.props.user}
                    logOut={this.logOut}
                    isOpen={this.state.isOpen}
                    {...this.menuProps}>
                </MenuView>
            ) : null }
            </>
        ) 
    }
}

const mapStateToProps = (state) => {
    return {
        loginStatus: state.login.loginStatus,
        user: state.login.user
    }
}

export default connect(mapStateToProps, null)(withRouter(Menu));