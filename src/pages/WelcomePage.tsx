import React from 'react';
import {NavLink} from "react-router-dom";
import {IoHome} from 'react-icons/io5';
import {BsInfoSquare} from 'react-icons/bs';
import {AiOutlineFacebook} from 'react-icons/ai';
import {FiInstagram} from 'react-icons/fi';

const WelcomePage = () => {

    return (
        <div className=" welcome__wrapper content_1">
            <div className="welcome__container">
                <div className="card card0">
                    <div className="border">
                        <NavLink to={'/'}>
                            <h2>Home</h2>
                            <div className="icons">
                                <i className="fa" aria-hidden="true">
                                    <IoHome/>
                                </i>
                            </div>
                        </NavLink>
                    </div>

                </div>
                <div className="card card1">
                    <div className="border">
                        <NavLink to={'/about_app'}>
                            <h2>About APP</h2>
                            <div className="icons">
                                <i className="fa" aria-hidden="true">
                                    <BsInfoSquare/>
                                </i>
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div className="card card2">
                    <div className="border">
                        <h2>Find us </h2>
                        <div className="icons">
                            <i  aria-hidden="true">
                                <a className="fa" href="https://www.facebook.com/" target="_blank">
                                    <AiOutlineFacebook/>
                                </a>
                            </i>
                            <i  aria-hidden="true">
                                <a className="fa"  href="https://www.instagram.com/" target="_blank">
                                    <FiInstagram/>
                                </a>
                            </i>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;