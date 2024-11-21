import './podcast-card.css';


const PostcastCard  = () => {

    return (
            <div className='latest_card'>
                <div className='latest_card_content'>
                    <div className='latest_card_left'>
                    <div>
                        <img className='latest_image' src="./assets/images/podcast/11683425_4790593.jpg"/>
                    </div>
                    <div>
                        <button className='latest_button_subscribe'>Subscribe</button>
                    </div>
                    </div>

                    <div className='latest_card_right'>
                    <div className='latest-block-top'>
                        <div className="timer">
                        <i className='fa fa-clock'> </i> <span>50 Minutes</span>
                        </div>
                        <div>Episode<span className='episode-count'>15</span></div>
                    </div>
                    <div>
                        <h5 className='latest-podcast-title'>Modern Vintage</h5>
                    </div>

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
                        <a href="#" className="fa fa-headphones mx-1">
                            <span className='mx-1'>120k</span>
                        </a>
                        <a href="#" className="fa fa-heart mx-1">
                            <span className='mx-1'>42.5k</span>
                        </a>
                        <a href="#" className="fa fa-chat mx-1">
                            <span className='mx-1'>11k</span>
                        </a>
                        <a href="#" className="fa fa-download mx-1">
                            <span className='mx-1'>50k</span>
                        </a>
                    </div>
                    </div>

                    
                        
                </div>
            </div>
    
    );

};


export default PostcastCard;