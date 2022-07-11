import { FC, useState} from 'react';
import {NavLink} from "react-router-dom";
import {registration} from "../store/actions/auth";
import { useFormik} from "formik";


type FormikErrorType = {
    userName?: string
    email?: string
    password?: string
}

const Registration: FC = () => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')


    // const registrationClickHandler = () => {
    //     registration(name, email, password)
    //     setName('')
    //     setEmail('')
    //     setPassword('')
    // }


    const formik = useFormik({
        initialValues: {
            userName: '',
            email: '',
            password: ''
        },

        validate: (values) => {
            const errors: FormikErrorType = {}
            if(!values.email) {
            errors.email = 'Required';
                        } else if ((!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))) {
                errors.email = 'Invalid email address';
            } if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 4) {
                errors.password = 'Password must be 4 characters or more'
            } if(!values.userName) {
                errors.userName = 'Required';
            } else if (values.userName.length < 3 ) {
                errors.userName = 'Username must be 3 characters or more'
            }
        },

        onSubmit: values => {
            registration(values.userName, values.email, values.password)
        formik.resetForm();
    },
})


    return (
        <div className="registration__main">
            <section className="registration__section">
                <div className="registration__container">
                    <div className="registration__content">
                        <form
                            onSubmit={formik.handleSubmit}
                            className="signup-form">
                            <h3 className="form-title">Create account</h3>

                            <div className="form-group">
                                <input
                                    // value={name}
                                    // onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                                    {...formik.getFieldProps('userName')}
                                    type="text" className="form-input" placeholder={'Your Name'}/>
                                {formik.touched.userName && formik.errors.userName &&
                                    <span style={{'color': 'red'}}>{formik.errors.userName}</span>}

                            </div>

                            <div className="form-group">
                                <input
                                    // value={email}
                                    // onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                                    {...formik.getFieldProps('email')}
                                    type="email" className="form-input" placeholder={'Your Email'}/>
                                {formik.touched.email && formik.errors.email &&
                                    <span style={{'color': 'red'}}>{formik.errors.email}</span>}

                            </div>
                            <div className="form-group">
                                <input
                                    // value={password}
                                    // onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                                    {...formik.getFieldProps('password')}
                                    type="password" className="form-input" placeholder={'Password'}/>
                                {formik.touched.password && formik.errors.password &&
                                    <div style={{'color': 'red'}}>{formik.errors.password}</div>}
                            </div>
                            <div className="form-group">
                                <input
                                     // onClick={() => {}}
                                    type="submit" value="Sign up" className="form-submit"/>
                            </div>
                        </form>
                        <p className="loginhere">
                            Have already an account ?
                            <NavLink to={'/login'} className="loginhere-link"> Login here</NavLink>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
    ;

    export default Registration;