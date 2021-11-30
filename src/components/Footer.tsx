import React from 'react';
import googlePlay from './../assets/img/googlePlay.png';
import appStore from './../assets/img/app-store.svg';

const Footer = () => {
    return (
        <div className="footer__wrapper">
            <div className="upper__row">
                <div className="mini_title">
                    <div className="mini_title_item">
                       <h4>About us</h4>
                       <p> Dodo Pizza - Our brands</p>
                    </div>
                    <div className="mini_title_item">
                       <h4> We are looking for</h4>
                      <p>  Pizza staff</p>
                    </div>
                </div>
                <div className="contacts__links">
                    <div>
                        <a href="https://play.google.com/store/apps" target="_blank">
                            <img src={googlePlay} alt="googlePlay" className="store__logo" />
                        </a>
                        <a href="https://www.apple.com/pl/app-store/" target="_blank">
                            <img src={appStore} alt="appStore" className="store__logo"/>
                        </a>

                    </div>
                    <div>
                        call me <br/>
                        <a href="tel:+18 90 321-00-01"> +18 90 321-00-01</a><br/>
                        <a href="feedback@pizza.com" target="_blank">feedback@pizza.com</a>
                    </div>
                </div>
            </div>
            <div className="medium__row">
                <div className="medium__row__item">
                    <h2>$ 999,888.00</h2>
                    <p>Revenues of the Polish network this month. In the previous one - PLN 125 380.00</p>
                </div>
                <div className="medium__row__item">
                    <h2>15 pizzerias</h2>
                    <p>in 15 countries from Great Britain to Belarus</p>
                </div>
            </div>
            <hr style={{color: "grey"}}/>
            <div className="down__row">
             <p className="name__shop">   PIZZA SHOP </p>
                 <p>&#169; 2021  Campaign and promotion regulations
                 </p>
                <p>Allergens and Nutritional Information
                privacy policy </p>
            </div>

        </div>
    );
};

export default Footer;