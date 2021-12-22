import React from 'react';
import {Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {PATH} from "./RoutesPage";

const Navbar = () => {
    return (
        <div className=" container navbar_wrapper ">
            <Nav fill variant="pills" defaultActiveKey="/home">
                <Nav.Item className="navbar_item">
                    <NavLink to={PATH.WELCOME}
                             className="NavLink"
                             style={(params) => {
                                 return {color: params.isActive ? "orange" : "black"}
                             }}
                    >Start Page</NavLink>
                </Nav.Item>

                <Nav.Item className="navbar_item">
                    <NavLink to={PATH.HOME}
                             className="NavLink"
                             style={(params) => {
                                 return {color: params.isActive ? "orange" : "black"}
                             }}
                    >Pizza</NavLink>
                </Nav.Item>


                <Nav.Item className="navbar_item">
                    <NavLink to={PATH.ABOUT_US}
                             className="NavLink"
                             style={(params) => {
                                 return {color: params.isActive ? "orange" : "black"}
                             }}
                    >About us</NavLink>
                </Nav.Item>
                <Nav.Item className="navbar_item">
                    <NavLink to={PATH.CONTACTS}
                             className="NavLink"
                             style={(params) => {
                                 return {color: params.isActive ? "orange" : "black"}
                             }}
                    >Contacts</NavLink>
                </Nav.Item>
                <Nav.Item className="navbar_item">
                    <NavLink to={PATH.SALE}
                             className="NavLink"
                             style={(params) => {
                                 return {color: params.isActive ? "orange" : "black"}
                             }}
                    >Sale</NavLink>
                </Nav.Item>

                <Nav.Item className="navbar_item">
                    <NavLink to={PATH.CART}
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