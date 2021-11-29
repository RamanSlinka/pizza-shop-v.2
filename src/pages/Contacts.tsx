import React from 'react';

const Contacts = () => {
    return (
        <div className="container contacts__wrapper">
            <div className="contacts__addresses">
                <div className="contacts__address">
                    <h3 className="address__title"> Nyhavn</h3>
                    23 minutes

                    <p> st. Nyhavn, 8</p>
                    <p> Delivery and pickup</p>
                    09:00 - 23:00
                    <p> A restaurant</p>
                    09:00 - 23:00
                </div>
                <div className="contacts__address">
                    <h3 className="address__title"> Victoria Street</h3>
                    30 minutes

                    <p> st. Victoria, 19/2</p>
                    <p> Delivery and pickup</p>
                    09:00 - 23:00
                   <p> A restaurant</p>
                    09:00 - 23:00
                </div>
                <div className="contacts__address">
                   <h3 className="address__title"> Grinn Shopping Center</h3>
                    <p>NS. Kromsk, 4</p>
                    <p>A restaurant</p>
                    10:00 - 22:00
                </div>
            </div>
            <div className="contacts__phone">
                Phone :
                <a href="tel:+18 90 321-00-01"> +18 90 321-00-01</a>
                 Questions, feedback and suggestions:
                <a href="feedback@pizza.com" target="_blank">feedback@pizza.com</a>
            </div>
        </div>
    );
};

export default Contacts;