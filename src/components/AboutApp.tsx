import React, {useRef} from 'react';
import gsap from "gsap";
import ButtonAnimation from "./ButtonAnimation";

const AboutApp = () => {
    const Ref = useRef<any>(null);


    document.body.addEventListener("mousemove", evt => {
        const mouseX = evt.clientX;
        const mouseY = evt.clientY;

        gsap.set(".cursor", {
            x: mouseX,
            y: mouseY
        })

        gsap.to(".shape", {
            x: mouseX,
            y: mouseY,
            stagger: -0.1
        })
    })

    return (

        <div className=" about__app__wrapper">
            <div>
                <div className="cursor"></div>
                <div className="shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                </div>
                <div className="content__about ">
                    <h1 id="text" ref={Ref}>Hello there !</h1>
                    <div>
                        <ButtonAnimation/>
                    </div>
                    <h3>Pizza Shop</h3>
                    <span>ver.2.0.42</span>
                    <h3>This application is made using MERN technologies such as: MongoDB, Express, React, NodeJs</h3>
                    <div className="about__app_description">
                        <h4>Frontend:</h4>
                        <ul>
                            <li>Hooks: useState, useEffect, useContext. Custom hook</li>
                            <li>React router. Page navigation. BrowserRouter, Route.</li>
                            <li>Typescript.</li>
                            <li>Redux, react-redux, redux-thunk.</li>
                            <li>Formik. EmailJs-com (for feedback).</li>
                            <li>Payment with helping "react-stripe-js".</li>
                            <li>Registration.Authorisation.</li>
                            <li>Unit tests - Jest. </li>
                            <li>Filtration. </li>
                            <li>Conditional rendering. </li>
                            <li>Working with the server. Axios. Indication of loading data from the server. </li>
                            <li>Loader component.React Skeleton, react-content-loader. </li>
                            <li>SCSS. CSS Animations.Library React icons. </li>
                            <li>React-awesome-reveal. </li>
                            <li>React Bootstrap. Slider. Modals. </li>
                            <li>Gsap. </li>
                            <li>Classnames. </li>
                        </ul>
                        <h4>Backend:</h4>
                        <ul>
                            <li>REST Api.</li>
                            <li> Registration on the server.</li>
                            <li> JWT token, authorization.</li>
                            <li> File Model.</li>
                            <li> Get and POST files to DATA.</li>
                            <li> Sorting and filtration files.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutApp;