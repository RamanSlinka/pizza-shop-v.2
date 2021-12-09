import React, {useEffect, useRef} from 'react';
import gsap from "gsap"

const WelcomePage = () => {


    // const wrapper = useRef<any>(null);
    //
    // useEffect(() => {
    //     const [element] = wrapper.current.children;
    //
    //     document.body.addEventListener("mousemove", evt => {
    //         const mouseX = evt.clientX;
    //         const mouseY = evt.clientY;
    //     })
    //
    //
    //     const text = element.getElementById('text');
    //     const mousemove = element.addEventListener('mousemove')
    //     const cursor = element.addEventListener('cursor')
    //
    //     gsap.set([text, mousemove, cursor],({autoAlpha: 0}));
    //     gsap.set([cursor],({
    //         x: mouseX,
    //         y: mouseY
    //     }));
    //
    //
    //
    //
    //
    //     // document.body.addEventListener("mousemove", evt => {
    //     //     const mouseX = evt.clientX;
    //     //     const mouseY = evt.clientY;
    //     //
    //     //
    //     //     gsap.set(".cursor", {
    //     //         x: mouseX,
    //     //         y: mouseY
    //     //     })
    //     //
    //     //     gsap.to(".shape", {
    //     //         x: mouseX,
    //     //         y: mouseY,
    //     //         stagger: -0.1
    //     //     })
    //     // });
    //
    //
    // }, [])
    return (
        <div className="welcome__wrapper ">
            <div   style={{color: "white"}}>
                <h1 id="text">Hello there</h1>
            </div>


            <div className="welcome__container">
                <div className="card card0">
                    <div className="border">
                        <h2>Pizza</h2>
                        <div className="icons">
                            <i className="fa fa-codepen" aria-hidden="true"></i>
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                            <i className="fa fa-dribbble" aria-hidden="true"></i>
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div className="card card1">
                    <div className="border">
                        <h2>Pizza</h2>
                        <div className="icons">
                            <i className="fa fa-codepen" aria-hidden="true"></i>
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                            <i className="fa fa-dribbble" aria-hidden="true"></i>
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div className="card card2">
                    <div className="border">
                        <h2>Pizza</h2>
                        <div className="icons">
                            <i className="fa fa-codepen" aria-hidden="true"></i>
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                            <i className="fa fa-dribbble" aria-hidden="true"></i>
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;