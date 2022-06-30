import React from 'react';
import {NavLink} from "react-router-dom";

const Registration = () => {
    return (
        <div className="registration__main">
            <section className="registration__section">
                <div className="registration__container">
                    <div className="registration__content">
                        <form action="" className="signup-form">
                            <h3 className="form-title" >Create account</h3>
                            <div className="form-group">
                                <input type="text" className="form-input" placeholder={'Your Name'}/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-input" placeholder={'Your Email'}/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-input" placeholder={'Password'}/>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Sign up" className="form-submit"/>
                            </div>
                        </form>
                        <p className="loginhere">
                            Have already an account ?
                            <NavLink to={'/login'} className="loginhere-link">Login here</NavLink>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Registration;