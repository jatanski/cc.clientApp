import React from 'react';
import { connect } from 'react-redux';

import MenuView from './MenuView';

class Menu extends React.Component {
    state = {
        isOpen: false
    }

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    menuProps = {
        toggleCollapse: this.toggleCollapse,
        setActiveLink: this.setActiveLink
    }

    render() {
        return (
            <>
            { this.props.loginStatus ? (
                <MenuView 
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
        loginStatus: state.login.loginStatus
    }
}

export default connect(mapStateToProps, null)(Menu);