import './trending-card.css';

const Trendingcard = () => {

    return (
        <div className='trending_card'>
            <div className='trending_card_content'>
                
                <div>
                    <img className='trending_image' src="./assets/images/podcast/11683425_4790593.jpg"/>
                </div>
                <div>
                    <h2 className='trending-podcast-title'>Modern Vintage</h2>
                </div>
                

                <div className='latest_card_right'>
    
                

                <div className='latest-profile-section'>
                    <div className="latest-profile-image-block">
                    <img className='latest-profile-image' src="./assets/images/profile/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing.jpg" alt="" />
                    </div>
                    <div className="latest-profile-details">
                    <div className='podcast-host'>John <i class="fa fa-check-circle"></i> </div>
                    <div className='podcast-host-category'>Influencer</div>
                    </div>

                    
                </div>

                <div className="latest-profile-description-block">
                    <p className='latest-profile-description'>Lorem Ipsum dolor sit amet consectetur </p>
                </div>

                <div className="latest-profile-icons-block">
                    <a href="#" class="fa fa-headphones mx-1">
                        <span className='mx-1'>120k</span>
                    </a>
                    <a href="#" class="fa fa-heart mx-1">
                        <span className='mx-1'>42.5k</span>
                    </a>
                    <a href="#" class="fa fa-chat mx-1">
                        <span className='mx-1'>11k</span>
                    </a>
                </div>
                </div>

                
                    
            </div>
        </div>
    );
};

export default Trendingcard;