import './hero.css';

const Hero = ({ title = "Listen to Pod Talk", description = "Listen it everywhere. Explore your fav podcasts." , showButton = true }) => {
    return (
        <>
            <div className="Hero">
                
                <h1 className="text-white hero-text">{title}
                </h1>
                <p className='text-white hero-text-description'>{description}</p>
                
                {showButton && (
                    <div className="hero-button-area">
                    <button className="hero-button">Start Listening</button>
                    </div>
                )}
                
            </div>
        </>
    )
};

export default Hero;