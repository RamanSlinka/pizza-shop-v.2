import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {PATH} from "./RoutesPage";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../store";


const NavbarPage = () => {

    const user = useSelector<AppRootStateType, string | undefined>(store => store.user.currentUser.email)
    const user2 = useSelector<AppRootStateType, any>(store => store.user)

    console.log(user2)

    return (
        <div className=" container navbar_wrapper ">

            <Navbar collapseOnSelect expand="lg" variant="light" >
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" fill variant="pills">
                            <Nav.Link className="navbar_item"  >
                                <NavLink
                                    to={PATH.WELCOME}
                                    className="NavLink"
                                    style={(params) => {
                                        return {color: params.isActive ? "orange" : "black"}
                                    }}
                                >Start Page</NavLink>
                            </Nav.Link>

                            <Nav.Link className="navbar_item">
                                <NavLink to={PATH.HOME}
                                         className="NavLink"
                                         style={(params) => {
                                             return {color: params.isActive ? "orange" : "black"}
                                         }}
                                >Pizza</NavLink>
                            </Nav.Link>


                            <Nav.Link className="navbar_item">
                                <NavLink to={PATH.ABOUT_US}
                                         className="NavLink"
                                         style={(params) => {
                                             return {color: params.isActive ? "orange" : "black"}
                                         }}
                                >About us</NavLink>
                            </Nav.Link>
                            <Nav.Link className="navbar_item">
                                <NavLink to={PATH.CONTACTS}
                                         className="NavLink"
                                         style={(params) => {
                                             return {color: params.isActive ? "orange" : "black"}
                                         }}
                                >Contacts</NavLink>
                            </Nav.Link>
                            <Nav.Link className="navbar_item">
                                <NavLink to={PATH.SALE}
                                         className="NavLink"
                                         style={(params) => {
                                             return {color: params.isActive ? "orange" : "black"}
                                         }}
                                >Sale</NavLink>
                            </Nav.Link>

                            <Nav.Link className="navbar_item">
                                <NavLink to={PATH.CART}
                                         className="NavLink"
                                         style={(params) => {
                                             return {color: params.isActive ? "orange" : "black"}
                                         }}
                                >Cart</NavLink>
                            </Nav.Link>
                            { user === "admin@admin.com"
                                ?
                                <Nav.Link className="navbar_item">
                                <NavLink to={PATH.ADMIN}
                                         className="NavLink"
                                         style={(params) => {
                                             return {color: params.isActive ? "orange" : "black"}
                                         }}
                                >Admin Panel</NavLink>
                            </Nav.Link>
                            : ""
                            }

                        </Nav>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarPage;