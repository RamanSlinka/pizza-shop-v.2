import React, {ChangeEvent, useState} from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login} from "../store/actions/auth";

const Login = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const dispatch = useDispatch()


    const loginClickHandler = () => {
        dispatch(login(email, password))
        setEmail('')
        setPassword('')
    }

    return (
        <div className="registration__main">
            <section className="registration__section">
                <div className="registration__container">
                    <div className="registration__content">
                        <div  className="signup-form">
                            <h5 className="form-title">Log in</h5>

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
                                    onClick={() => loginClickHandler()}
                                    type="submit" value="Sign in" className="form-submit"/>
                            </div>
                        </div>
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