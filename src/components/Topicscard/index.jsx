import './topicscard.css';

const Topicscard = () => {

    return(
        <div className='topics_card'>
            <div className='topics_card_content'>
                <img className='topic_image' src="./assets/images/topics/Technician.jpg"/>
                <p className='topic_name'>Mindfullness</p>
                <button className='topic_episode_button'>50 Episodes</button>
            </div>
                
        </div>
    );
};

export default Topicscard;