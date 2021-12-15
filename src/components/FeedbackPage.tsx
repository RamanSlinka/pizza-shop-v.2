import React, {useRef, useState} from 'react';
import emailjs from 'emailjs-com';
import {useFormik} from "formik";


type FormikErrorType = {
    email?: string
    userName?: string
    textarea?: string
}


const FeedbackPage = () => {


    const [success, setSuccess] = useState(false);
    let [error, setError] = useState(false);


    const formRef = useRef(null)
    let sendEmail = () => {
        emailjs.send('service_4e1ddah', 'template_9x2ipjy',
            {
                to_name: formik.values.userName,
                from_name: formik.values.email,
                message: formik.values.textarea
            }, 'user_mnUCEEr4By9wSIzyUVj9X')
            .then(() => {

                setSuccess(true);
                setTimeout(function () {
                    setSuccess(false);
                }, 6000);
            }, () => {
                // console.log(error.text);
                setError(true)
                setTimeout(function () {
                    setError(false);
                }, 10000);
            });

    }

    const formik = useFormik({
        initialValues: {
            email: '',
            userName: '',
            textarea: ''
        },
        validate: (values) => {

            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.userName) {
                errors.userName = 'Required';
            } else if (values.userName.length < 3) {
                errors.userName = 'Your name must be 3 characters or more'

            }
            if (values.textarea.length < 3) {
                errors.textarea = 'Required';
            }
            return errors;

        },
        onSubmit: (values) => {
            if (values.email !== '' && values.userName !== '' && values.textarea !== '') {
                sendEmail()
                formik.resetForm();
            }
        },
    })


    return (

        <div className="content">

            <div className="feedback--wrapper">
                <div>
                    <h3>Hi ! Glad to see you :) </h3>
                    <p> If you got here  I ask you to leave a review about the site. Fill in the fields and write
                        a review. I will definitely answer your message.</p>
                </div>

                <form className="form" ref={formRef} onSubmit={formik.handleSubmit}>
                    <input type="text"
                           placeholder={'Name'}
                        //  name='to_name'
                           {...formik.getFieldProps('userName')}
                    />
                    {formik.touched.userName && formik.errors.userName &&
                        <div style={{'color': 'red'}}>{formik.errors.userName}</div>}

                    <input type="email"
                           placeholder={'E-mail'}
                        // name='from_name'

                           {...formik.getFieldProps('email')}
                    />
                    <div>

                    </div>
                    {formik.touched.email && formik.errors.email &&
                        <div style={{'color': 'red'}}>{formik.errors.email}</div>}

                    <textarea

                        placeholder={'Enter your question'}
                        //  name='message'
                        {...formik.getFieldProps('textarea')}
                    />
                    {formik.touched.textarea && formik.errors.textarea &&
                        <div style={{'color': 'red'}}>{formik.errors.textarea}</div>}
                    <div>
                        {success ? <p>Your message is submit </p> : ''}
                        {error ? <p style={{'color': 'red'}}>Sorry, there was an error sending</p> : ''}
                    </div>
                    <button type="submit"

                    ><span>Send message</span>
                    </button>
                </form>

            </div>
        </div>

    )
}

export default FeedbackPage;