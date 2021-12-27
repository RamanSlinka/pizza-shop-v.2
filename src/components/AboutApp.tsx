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

        <div  className=" about__app__wrapper">
            <div >
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
                <h3>This application is made using technologies such as:</h3>
                <ul>
                    <li>Hooks: useState, useEffect, useContext. Custom hook</li>
                    <li>React router. Page navigation. BrowserRouter, Route.</li>
                    <li>Typescript.</li>
                    <li>Redux, react-redux, redux-thunk.</li>
                    <li>Search. Filtration.</li>
                    <li>Working with the server. Axios. Indication of loading data from the server.</li>
                    <li>Using "JSON" as BackEnd</li>
                    <li>Loader component.React Skeleton, react-content-loader.</li>
                    <li>SCSS. CSS Animations.Library React icons.</li>
                    <li>  CSS Animations.React-awesome-reveal, Library React icons.</li>
                    <li>React Bootstrap. Slider.</li>
                    <li>Gsap.</li>
                    <li>Classnames.</li>
                </ul>

            </div>

        </div>
        </div>
            );
};

export default AboutApp;