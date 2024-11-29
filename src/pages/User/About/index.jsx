import UserLayout from '../../../components/UserLayout';
// import Hero from '../../../components/Hero';
import Heropages from '../../../components/Heropages';
import Podcaster from '../../../components/Podcastercard';
import './about.css';

const About = () => {

    return (
        <>
            <UserLayout heading="About">
                <Heropages title="About" 
                    description="Discover more about our platform and mission."  />

                <div className='about-content-section'>
                    <h1 className='latest_heading'>Our Story</h1>
                    <p className='about-content'>
                    Pod Talk HTML CSS Template is made by Bootstrap v5.2.2 framework. You are allowed to modify and use this template for your business websites.

                    You are not allowed to redistribute the downloadable template ZIP file on any other website without a permission. Please contact TemplateMo website for further information. Thank you.
                    </p>
                    <div className="about-image-container">
                        <img className='about-image' src='../../assets/images/medium-shot-young-people-recording-podcast.jpg' alt='about'/>
                    </div>
                    
                </div>

                <div className='podcasters-section'>
                    <h1 className='latest_heading'>Meet Podcasters</h1>
                    <div className="podcaster-block">
                        <Podcaster/>
                        <Podcaster/>
                        <Podcaster/>
                        <Podcaster/>
                    </div>
                    
                </div>
            </UserLayout>
        </>
    );
}

export default About