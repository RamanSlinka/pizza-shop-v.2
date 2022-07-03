import React, {ChangeEvent, useState} from 'react';
import {NavLink} from "react-router-dom";
import {registration} from "../store/actions/auth";

const Registration = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')


    const registrationClickHandler = () => {
        console.log('regist')
       registration(email, password)
        setEmail('')
        setPassword('')
    }

    return (
        <div className="registration__main">
            <section className="registration__section">
                <div className="registration__container">
                    <div className="registration__content">
                        <div  className="signup-form">
                            <h3 className="form-title">Create account</h3>

                            {/*<div className="form-group">*/}
                            {/*    <input                                     */}
                            {/*        type="text" className="form-input" placeholder={'Your Name'}/>*/}
                            {/*</div>*/}

                            <div className="form-group">
                                <input
                                    value={email}
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                                    type="email" className="form-input" placeholder={'Your Email'}/>
                            </div>
                            <div className="form-group">
                                <input
                                    value={password}
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                                    type="password" className="form-input" placeholder={'Password'}/>
                            </div>
                            <div className="form-group">
                                <input
                                    onClick={() =>registrationClickHandler()}
                                    type="submit" value="Sign up" className="form-submit"/>
                            </div>
                        </div>
                        <p className="loginhere">
                            Have already an account ?
                            <NavLink to={'/login'} className="loginhere-link"> Login here</NavLink>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Registration;