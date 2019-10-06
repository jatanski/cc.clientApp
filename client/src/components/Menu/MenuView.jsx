import React from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon
} from 'mdbreact';
import './menu.scss';
import { Link } from "react-router-dom";

const MenuView = ({toggleCollapse, isOpen, logOut, user}) => {
    return (
      <MDBNavbar color="unique-color-dark" dark expand="md">
        <MDBNavbarBrand href="/bad-route">
          <strong className="white-text">LOGO</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to="/home" exact >Dashboard</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/messages">Messages</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/payment">Payment</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/administration">Admin</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
              { user.name ? (
                <MDBNavbarBrand style={{marginRight: "1rem"}}>
                   <span className="white-text">{user.email}</span> 
                </MDBNavbarBrand>
              ) : null }
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right>
                  <Link to ="/profile">
                      <MDBDropdownItem >My Profile</MDBDropdownItem>
                  </Link>
                  <MDBDropdownItem onClick={logOut} >Logout</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
  );
};

export default MenuView;
