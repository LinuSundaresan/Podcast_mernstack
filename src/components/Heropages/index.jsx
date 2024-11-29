import './heropages.css';

const Heropages = ({ title = "Listen to Pod Talk", description = "Listen it everywhere. Explore your fav podcasts." , showButton = true }) => {
    return (
        <>
            <div className="Heropages">
                
                <h1 className="text-white hero-text">{title}
                </h1>
                <p className='text-white hero-text-description'>{description}</p>
                
            </div>
        </>
    )
};

export default Heropages;