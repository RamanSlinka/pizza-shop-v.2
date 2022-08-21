import React from 'react';
import googlePlay from './../assets/img/google.png';
import appStore from './../assets/img/app-store.svg';
import { NavLink } from 'react-router-dom';
import {PATH} from "./RoutesPage";

const Footer = () => {
    return (
        <div className="footer__wrapper">
            <hr style={{color: "grey"}}/>
            <div className="upper__row">

                    <div className="mini_title_item">
                       <h4>About us</h4>
                       <p>  Pizza Shop - Our brands</p>
                    </div>
                    <div className="mini_title_item">
                       <h4> We are looking for</h4>
                      <p>  Pizza staff</p>
                    </div>
                    <div className="mini_title_item feedback_item">
                       <h4> Feedback</h4>
                        <div>
                            call me <br/>
                            <a href="tel:+18 90 321-00-01"> +18 90 321-00-01</a><br/>
                            <a href={PATH.FEEDBACK} target="_blank">feedback@pizza.com</a>
                        </div>
                        <p>or </p>
                        <NavLink to={PATH.FEEDBACK}>
                            <button>Click me</button>
                        </NavLink>
                    </div>
                </div>

            <div className="application">
                <a href="https://play.google.com/store/apps" target="_blank">
                    <img src={googlePlay} alt="googlePlay" className="store__logo" />
                </a>
                <a href="https://www.apple.com/pl/app-store/" target="_blank">
                    <img src={appStore} alt="appStore" className="store__logo"/>
                </a>
            </div>
            <div className="medium__row">
                <div className="medium__row__item">
                    <h4>$ 999,888.00</h4>
                    <p>Revenues of the Polish network this month. In the previous one - PLN 125 380.00</p>
                </div>
                <div className="medium__row__item">
                    <h4>15 pizzerias</h4>
                    <p>in 15 countries from Great Britain to Belarus</p>
                </div>
            </div>
            <hr style={{color: "grey"}}/>
            <div className="down__row">
             <p className="name__shop">   PIZZA SHOP </p>
                 <p>&#169; 2022  Campaign and promotion regulations
                 </p>
                <p>Allergens and Nutritional Information
                privacy policy </p>
            </div>

        </div>
    );
};

export default Footer;