import React from 'react';
import {NavLink} from "react-router-dom";

const Login = () => {
    return (
        <div className="registration__main">
            <section className="registration__section">
                <div className="registration__container">
                    <div className="registration__content">
                        <form action="" className="signup-form">
                            <h5 className="form-title" >Log in</h5>

                            <div className="form-group">
                                <input type="email" className="form-input" placeholder={'Your Email'}/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-input" placeholder={'Password'}/>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Sign in" className="form-submit"/>
                            </div>
                        </form>
                        <p className="loginhere">
                            Don't have an account?
                            <NavLink to={'/registration'} className="loginhere-link"> Register here!</NavLink>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;