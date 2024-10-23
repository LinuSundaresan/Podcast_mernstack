import React from 'react';
import Slider from 'react-slick';
import './carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2
};

const CarouselComponent = () => (
    <div className='sliderContainer'>
        <Slider {...settings}>
            <div className='carousel_profiles'>
                <div className="profile_card">
                    <img className='carousel_profiles_images' src="./assets/images/profile/smart-attractive-asian-glasses-male-standing-smile-with-freshness-joyful-casual-blue-shirt-portrait-white-background.jpg" alt="Item 1" style={{ height: '250px' }}/>
                    <p>John</p>
                    <span className='badge'>Sports</span>
                </div>
            </div>
            <div className='carousel_profiles'>
                <div className="profile_card">
                    <img className='carousel_profiles_images' src="./assets/images/profile/man-portrait.jpg" alt="Item 2" style={{ height: '250px' }}/>
                    <p>Chan</p>
                    <span className='badge'>Education</span>
                </div>
            </div>
            <div className='carousel_profiles'>
                <div className="profile_card">
                    <img className='carousel_profiles_images' src="./assets/images/profile/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing.jpg" alt="Item 3" style={{ height: '250px' }}/>
                    <p>Candice</p>
                    <span className='badge'>Music</span> <span className='badge'>Movies</span>
                </div>
            </div>
        </Slider>
    </div>
);

export default CarouselComponent;
