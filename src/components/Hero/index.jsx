import './hero.css';

const Hero = () => {
    return (
        <>
            <div className="Hero">
                <h1 className="text-white hero-text">Listen to Pod Talk
                </h1>
                <p className='text-white hero-text-description'>Listen it everywhere. Explore your fav podcasts.</p>
                <div className="hero-button-area">
                <button className="hero-button">Start Listening</button>
                </div>
                
            </div>
        </>
    )
};

export default Hero;