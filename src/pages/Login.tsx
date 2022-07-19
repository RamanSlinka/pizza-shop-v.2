import React from 'react';
import {Navigate, NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../store/actions/auth";
import Loader from "../components/Loader";
import {AppRootStateType} from "../store";
import {useFormik} from "formik";
import {FormikErrorType} from "./Registration";
import {UserStateType} from "../store/reducers/user";
import {PATH} from "../components/RoutesPage";


const Login = () => {


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const appLoader = useSelector<AppRootStateType, boolean>(state => state.appReducer.loader)
    const user = useSelector<AppRootStateType, UserStateType>(state => state.user)
    const isAuth = user.isAuth

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Required'
            } else if ((!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))) {
                errors.email = 'Invalid email address'
            }
            if (!values.password) {
                errors.password = 'Required'
            } else if (values.password.length < 4) {
                errors.password = 'Password must be 4 characters or more'
            }
            return errors
        },
        onSubmit: values => {
            dispatch(login(values.email, values.password))
            formik.resetForm();
            if (isAuth) {
                navigate(PATH.HOME)
            }
        }
    })


    if (appLoader) {
        return (
            <> <Loader/> </>
        )
    }
    return (
        <>
            {!isAuth
                ?
                <div className="registration__main">
                    <section className="registration__section">
                        <div className="registration__container">
                            <div className="registration__content">
                                <form
                                    onSubmit={formik.handleSubmit}
                                    className="signup-form">
                                    <h5 className="form-title">Log in</h5>

                                    <div className="form-group">
                                        {formik.touched.email && formik.errors.email &&
                                            <span className="inputError">{formik.errors.email}</span>}
                                        <input
                                            {...formik.getFieldProps('email')}
                                            type="email" className="form-input" placeholder={'Your Email'}

                                        />

                                    </div>
                                    <div className="form-group">
                                        {formik.touched.password && formik.errors.password &&
                                            <span className="inputError">{formik.errors.password}</span>}
                                        <input
                                            type="password" className="form-input" placeholder={'Password'}
                                            {...formik.getFieldProps('password')}
                                        />

                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Sign in" className="form-submit"/>
                                    </div>
                                </form>
                                <p className="loginhere">
                                    Don't have an account?
                                    <NavLink to={PATH.REGISTRATION} className="loginhere-link"> Register here!</NavLink>
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
                : <Navigate to={PATH.HOME} replace/>
            }

        </>
    );
};

export default Login;