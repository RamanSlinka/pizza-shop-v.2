import {FC} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {registration} from "../store/actions/auth";
import {useFormik} from "formik";
import {PATH} from "../components/RoutesPage";


export type FormikErrorType = {
    userName?: string
    email?: string
    password?: string
}

const Registration: FC = () => {

        const navigate = useNavigate()
        const formik = useFormik({
            initialValues: {
                userName: '',
                email: '',
                password: ''
            },

            validate: (values) => {
                const errors: FormikErrorType = {}
                if (!values.userName) {
                    errors.userName = 'Required';
                } else if (values.userName.length < 3) {
                    errors.userName = 'The username must be 3 characters or more (*but not more than 10)'
                }
                if (!values.email) {
                    errors.email = 'Required';
                } else if ((!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))) {
                    errors.email = 'Invalid email address';
                }
                if (!values.password) {
                    errors.password = 'Required';
                } else if (values.password.length < 4) {
                    errors.password = 'Password must be 4 characters or more'
                }
                return errors
            },

            onSubmit: values => {
                registration(values.userName, values.email, values.password);

                formik.resetForm();
                setTimeout(() => {
                    navigate(PATH.LOGIN)
                }, 1000)

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
                                    {formik.touched.userName && formik.errors.userName &&
                                        <span className="inputError">{formik.errors.userName}</span>}
                                    <input
                                        {...formik.getFieldProps('userName')}
                                        type="text" className="form-input" placeholder={'Your Name'}/>


                                </div>

                                <div className="form-group">
                                    {formik.touched.email && formik.errors.email &&
                                        <span className="inputError">{formik.errors.email}</span>}
                                    <input
                                        {...formik.getFieldProps('email')}
                                        type="email" className="form-input" placeholder={'Your Email'}/>


                                </div>
                                <div className="form-group">
                                    {formik.touched.password && formik.errors.password &&
                                        <span className="inputError">{formik.errors.password}</span>}
                                    <input
                                        {...formik.getFieldProps('password')}
                                        type="password" className="form-input" placeholder={'Password'}/>

                                </div>
                                <div className="form-group">
                                    <input
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