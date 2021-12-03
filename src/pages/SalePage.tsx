import React from 'react';
import app_mobile from './../assets/img/app_mobile.png'
import {BsArrowRightCircle} from "react-icons/all";

const SalePage = () => {
    return (
        <div className="sale">
            <h2> Promotional campaigns</h2>
            <div className="sale__wrapper">
                <div>
                    <img className="app__img"
                        src={app_mobile} alt=""/>
                </div>
                <div className="sale__description">
                    <h3>Receive a free piece in the "PIZZA SHOP" APP!</h3>
                    <p>Receive a free slice of pizza after registering on the "PIZZA SHOP" mobile app!</p>
                    <h4>
                        What should be done:
                    </h4>
                    <ol>
                        <li> <BsArrowRightCircle className="sale__icon"/>&ensp;download the "PIZZA SHOP" app from the App Store or Google Play</li>
                        <li><BsArrowRightCircle className="sale__icon"/>&ensp;register</li>
                        <li><BsArrowRightCircle className="sale__icon"/>&ensp;come to the PIZZA SHOP Rondo ONZ pizzeria</li>
                        <li><BsArrowRightCircle className="sale__icon"/>&ensp;show the cashier your active profile in the app</li>
                        <li><BsArrowRightCircle className="sale__icon"/>&ensp;enter the promotional code COOL_PIZZA and the phone number for which the profile was
                            registered
                        </li>
                        <li><BsArrowRightCircle className="sale__icon"/>&ensp;Receive a tasty hot piece of PIZZA SHOP for free</li>
                    </ol>
                <h4>Conditions of the action:</h4>
                    <ol>
                        <li><BsArrowRightCircle className="sale__icon"/>&ensp;the action lasts until May 30, 2022</li>
                        <li><BsArrowRightCircle className="sale__icon"/>&ensp;valid at the  Pizza Shop pizzeria ul. Bukowska, 3 Poznan</li>
                        <li><BsArrowRightCircle className="sale__icon"/>&ensp;1 user can redeem the code 1 time and receive 1 piece of free pizza</li>
                    </ol>
                </div>

            </div>
        </div>
    );
};

export default SalePage;