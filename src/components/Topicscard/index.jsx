import './topicscard.css';

const Topicscard = ({ topicName, image }) => {

    return(
        <div className='topics_card'>
            <div className='topics_card_content'>
                <img className='topic_image' src={image}/>
                <p className='topic_name'>{topicName}</p>
                <button className='topic_episode_button'>50 Episodes</button>
            </div>
                
        </div>
    );
};

export default Topicscard;