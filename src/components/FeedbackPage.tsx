import React, {useRef, useState} from 'react';
import emailjs from 'emailjs-com';
import {useFormik} from "formik";


type FormikErrorType = {
    email?: string
    userName?: string
    textarea?: string
}


const FeedbackPage = () => {

//added from codePen
    document.querySelectorAll(".button__submit").forEach((button) => {
        button.addEventListener("click", () => button.classList.toggle("clicked"));
    });
//

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
                }, 6000000);
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
                    <p> If you got here please leave a review about the site. Fill in the fields and write
                        a review. I will definitely answer your message.</p>
                </div>

                <form className="form" ref={formRef} onSubmit={formik.handleSubmit}>

                    <div className="singleInputWrapper">
                        {formik.touched.userName && formik.errors.userName &&
                            <span className="inputError">{formik.errors.userName}</span>}
                        <input
                            className="input"
                            type="text"
                            placeholder={'Name'}
                            //  name='to_name'
                            {...formik.getFieldProps('userName')}
                        />
                    </div>

                    <div className="singleInputWrapper">
                        {formik.touched.email && formik.errors.email &&
                            <span className="inputError">{formik.errors.email}</span>}
                        <input
                            className="input"
                            type="email"
                            placeholder={'E-mail'}
                            // name='from_name'

                            {...formik.getFieldProps('email')}
                        />
                    </div>

                    <div className="singleInputWrapper">
                        {formik.touched.textarea && formik.errors.textarea &&
                            <span className="inputError">{formik.errors.textarea}</span>}
                        <textarea
                            className="input"
                            style={{height:"90px"}}
                            placeholder={'Enter your feedback or question'}
                            //  name='message'
                            {...formik.getFieldProps('textarea')}
                        />
                    </div>


                    <div>
                        {success ? <p className="success" >Your message is submit </p> : ''}
                        {error ? <p style={{'color': 'red'}}>Sorry, there was an error sending</p> : ''}
                    </div>

                    <ButtonSubmit/>
                </form>


            </div>
        </div>

    )
}

const ButtonSubmit = () => {
    return (
        <div>
            <button className="button__submit" type="submit">
                <div className="wrapper">
                    <div className="front">Submit</div>
                    <div className="top"></div>
                    <div className="right"></div>
                    <div className="bottom"></div>
                    <div className="left"></div>
                    <div className="back">Thank You!</div>
                </div>
            </button>
        </div>
    )
}

export default FeedbackPage;