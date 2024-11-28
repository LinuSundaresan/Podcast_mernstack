import './home.css'

import UserLayout from '../../../components/UserLayout';

import Hero from '../../../components/Hero';
import Carousel from '../../../components/Carousel';

import PostcastCard from '../../../components/Podcastcard';
import Topicscard from '../../../components/Topicscard';
import Trendingcard from '../../../components/Trendingcard';

import { useState , useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Home =() => {

  const [topics , setTopics] = useState([]);

  const getTopics = async ( req, res) => {
    const topics = await axios.get('http://localhost:3001/topics');
    setTopics(topics.data);
  };

  useEffect(()=> {
    getTopics()
  }, []);
  return (
        <UserLayout>
          <Hero/>
          <Carousel/>

          <div className='latest'>
            <h2 className='latest_heading'>Latest Episodes</h2>

            <div className="latest-card-block">
              <PostcastCard />

              <PostcastCard />
            </div>

          </div>


          <div className='latest'>
            <h2 className='latest_heading'>Topics</h2>

            <div className="topics-card-block">

              {topics.map((topic) => (
                    <Topicscard
                        id={topic._id} 
                        topicName={topic.topicName} 
                        image={topic.image}
                    />
                ))}
                
            </div>

          </div>


          <div className='latest'>
            <h2 className='latest_heading'>Trending Episodes</h2>

            <div className="trending-card-block">
              <Trendingcard />
              <Trendingcard />
              <Trendingcard />
                
            </div>

          </div>
        </UserLayout>
    
  )
}

export default Home
