import React from 'react';
import image1 from '../assets/carousel/pizza2.jpg';
import image2 from '../assets/carousel/pizza3.jpg';
import image3 from '../assets/carousel/pizza4.jpg';
// import image1 from '../assets/carousel/pizza_5.jpg';
// import image2 from '../assets/carousel/pizza_6.jpg';
// import image3 from '../assets/carousel/pizza_7.jpg';
import {Carousel} from "react-bootstrap";



const CarouselPage = () => {
    return (
        <div>
            <Carousel
              // className={style.carouselStyle}
                indicators={false}
                controls={false}
            >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                    />
                </Carousel.Item>

            </Carousel>

        </div>


    );
};
export default CarouselPage;