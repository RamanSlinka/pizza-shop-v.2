import React from 'react';
import {BiTimer, FaCarSide, FaPhotoVideo, IoFastFoodOutline} from "react-icons/all";
import {Fade} from "react-awesome-reveal";

const AboutUs = () => {
    return (
        <div className="container">
            <section>
                <div className="promotional__table">
                    <Fade direction={"left"}>
                        <div className="promotional__item">

                            <div className="promotional__image">
                                <FaCarSide/>
                            </div>
                            <h3 className="promotional__title">Delivery to the customer</h3>
                            <p>Delivery to the customer above 40$. One-time fee for each delivery 5$. Delivery up to
                                3km - no additional kilometers charged, delivery up to 10km for min.
                                80$ - no fee for additional kilometers. The fee for additional kilometers is 1$ /
                                1km.</p>

                        </div>
                    </Fade>
                    <Fade direction={"right"}>
                        <div className="promotional__item">

                            <div className="promotional__image">
                                <BiTimer/>
                            </div>
                            <h3 className="promotional__title">Lead time</h3>
                            <p>There are delays in deliveries, because we serve the area within a radius of 20 km, but
                                we
                                deliver where others are softening</p>

                        </div>
                    </Fade>
                    <Fade direction={"left"}>
                        <div className="promotional__item">

                            <div className="promotional__image">

                                <IoFastFoodOutline/>
                            </div>
                            <h3 className="promotional__title">Only delicacies</h3>
                            <p>That is Pizza, Kebab, Burgers, Casseroles, French fries with various additions, Dinner
                                sets,
                                Salads, and CATERING</p>

                        </div>
                    </Fade>
                    <Fade direction={"right"}>
                        <div className="promotional__item">

                            <div className="promotional__image">
                                <FaPhotoVideo/>
                            </div>
                            <h3 className="promotional__title">You can watch TV TRANSMISSIONS here</h3>
                            <p>All sports broadcasts - always LIVE on the big screen</p>

                        </div>
                    </Fade>
                </div>
            </section>
            <section style={{marginTop: "20px"}}>
                <h2>We</h2>
                <p>
                    Usually people come to Pizza just to eat. Our promoters distribute leaflets about a slice of
                    pizza
                    for one dollar or something else profitable. We do this as the first step to get to know each
                    other.

                    But for us, Pizza Shop is not only pizza. This is pizza too, but first of all it is a big business
                    that
                    inspires us, makes us wake up every morning and continue to work with interest.

                    What is our interest? Let's tell you now.
                </p>
            </section>
            <section>
                <h2>Perfect Ingredients</h2>
                <p>
                    Why are we so eager to get to know each other? Because then the pizza does everything by itself.
                    People see that it tastes good and come back again. The main thing for us is to show it for the
                    first time.

                    In general, pizza is a very simple thing, it is difficult to spoil it. Enough good ingredients and
                    correct dough. This is a constructor, if the parts are of high quality, then the result will be
                    fine. Here are our details:
                </p>
                <div className="ingredients__table">
                    <div className="ingredient__item">
                        <h2 className="ingredient__title">Dough</h2>
                        <p>The most subtle thing. The main thing is to make it "alive".
                            This is a whole quest of grams, degrees, percentages and hours and minutes.
                            The process is not easy, but we succeed!</p>
                    </div>
                    <div className="ingredient__item">
                        <h2 className="ingredient__title">Mozzarella</h2>
                        <p>
                            Pizza cheese is a key ingredient.
                            We use real mozzarella from better suppliers.
                            The cheese should stretch like in the picture.
                        </p>
                    </div>
                    <div className="ingredient__item">
                        <h2 className="ingredient__title">Filling</h2>
                        <p>
                            There are two main rules for a tasty filling:
                            do not skimp on the filling;
                            fanatically observe the storage regime.
                            This is the whole secret.
                        </p>
                    </div>
                    <div className="ingredient__item">
                        <h2 className="ingredient__title">Tomato sauce</h2>
                        <p>
                            The main thing to know about a good tomato sauce is that
                            it must be made from tomatoes.
                            Sounds logical, but think about it!
                        </p>
                    </div>
                </div>
            </section>
            <section style={{marginTop: "20px"}}>
                <h2>Uniform standards</h2>
                <p>
                    Digital technology helps us to notice in time when something goes wrong.
                    But how do you know what is right and what is wrong?
                    We have standards for this.
                </p>
                <p>
                    Our standards are not some abstruse schemes and formulas, but super-understandable rules.
                    We have hundreds of them, literally about everything.
                    This is how we manage to do everything well and grow quickly at the same time.
                </p>
            </section>
            <section>
                <h2> Openness in everything</h2>
                <p> Anyone can write a hundred rules, but it doesn't work by itself.
                    It takes strength to keep standards upheld. For us, this force has become openness.
                    We have made everything so transparent that it is simply impossible to deviate from the standards.
                </p>
                <p>It is openness that drives us to deliver on promises,
                    adhere to standards and operate strictly within the framework of the law.
                    But openness for us is not just a fashion trend. This is our deep conviction,
                    philosophy and value that we want to bring to the world.</p>
            </section>
        </div>
    );
};

export default AboutUs;