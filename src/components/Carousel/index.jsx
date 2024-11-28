import React from 'react';
import Slider from 'react-slick';
import './carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



// const settings = {
//     infinite: true,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     speed: 500,
//     autoplaySpeed: 5000,
//     autoplay: true,
//     centerMode: true,
//     centerPadding: "0",


// };

const settings = {
    centerMode: true,
        centerPadding: "0",
        slidesToShow: 5, // Show 5 slides at a time
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        dots: false, // Optional: Enable dots navigation
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3, // Show 3 slides on smaller screens
                },
            },
        ],
      
};

const CarouselComponent = () => (
    <div className='sliderContainer'>
        <Slider {...settings}>
            <div className='carousel_profiles'>
                <div className="profile_card">
                    <img className='carousel_profiles_images' src="../assets/images/profile/smart-attractive-asian-glasses-male-standing-smile-with-freshness-joyful-casual-blue-shirt-portrait-white-background.jpg" alt="Item 1" style={{ height: '250px' }}/>
                    <p>John</p>
                    <span className='badge'>Sports</span>
                </div>
            </div>
            <div className='carousel_profiles'>
                <div className="profile_card">
                    <img className='carousel_profiles_images' src="../assets/images/profile/man-portrait.jpg" alt="Item 2" style={{ height: '250px' }}/>
                    <p>Chan</p>
                    <span className='badge'>Education</span>
                </div>
            </div>
            <div className='carousel_profiles'>
                <div className="profile_card">
                    <img className='carousel_profiles_images' src="../assets/images/profile/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing.jpg" alt="Item 3" style={{ height: '250px' }}/>
                    <p>Candice</p>
                    <span className='badge'>Music</span> <span className='badge'>Movies</span>
                </div>
            </div>
            <div className='carousel_profiles'>
                <div className="profile_card">
                    <img className='carousel_profiles_images' src="../assets/images/profile/man-portrait.jpg" alt="Item 2" style={{ height: '250px' }}/>
                    <p>Chan</p>
                    <span className='badge'>Education</span>
                </div>
            </div>

            <div className='carousel_profiles'>
                <div className="profile_card">
                    <img className='carousel_profiles_images' src="../assets/images/profile/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing.jpg" alt="Item 3" style={{ height: '250px' }}/>
                    <p>Candice</p>
                    <span className='badge'>Music</span> <span className='badge'>Movies</span>
                </div>
            </div>

        </Slider>
    </div>
);

export default CarouselComponent;
