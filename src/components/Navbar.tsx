import React from 'react';
import {Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar_wrapper">
            <Nav fill variant="pills" defaultActiveKey="/home">
                <Nav.Item className="navbar_item">
                    <NavLink to={'/'}
                             className="NavLink"
                             style={(params) => {
                                 return {color: params.isActive ? "orange" : "black"}
                             }}
                    >Pizza</NavLink>
                </Nav.Item>

                <Nav.Item className="navbar_item">
                    <NavLink to={'/*'}
                             className="NavLink"
                             style={(params) => {
                                 return {color: params.isActive ? "orange" : "black"}
                             }}
                    >About us</NavLink>
                </Nav.Item>
                <Nav.Item className="navbar_item">
                    <NavLink to={'/*'}
                             className="NavLink"
                             style={(params) => {
                                 return {color: params.isActive ? "orange" : "black"}
                             }}
                    >Contacts</NavLink>
                </Nav.Item>

                <Nav.Item className="navbar_item">
                    <NavLink to={'/cart'}
                             className="NavLink"
                             style={(params) => {
                                 return {color: params.isActive ? "orange" : "black"}
                             }}
                    >Cart</NavLink>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Navbar;