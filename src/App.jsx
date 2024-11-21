import './App.css'

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import PostcastCard from './components/Podcastcard';
import Topicscard from './components/Topicscard';
import Trendingcard from './components/Trendingcard';

import { useState , useEffect } from 'react';
import axios from 'axios';

function App() {

  const [topics , setTopics] = useState([]);

  const getTopics = async ( req, res) => {
    const topics = await axios.get('http://localhost:3001/topics');
    setTopics(topics.data);
  };

  useEffect(()=> {
    getTopics()
  }, []);

  return (
    <>
    <main className="main">
      <Navbar/>
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

      <footer className='footer'>

        <div className="footer-top">
          <div className='footer-form'>
            <form>
              
            <fieldset className="footer-fieldset">
              <legend className='footer-legent'><h2>Subscribe. Every weekly.</h2></legend>
                <input type="email" name="email" placeholder='Email Address'  required />
                <button className='form-submit'>Submit</button>
            </fieldset>
              
            
            </form>
          </div>

          <div className='footer-contact'>
            <h2>Contact</h2>
            <p>Phone: 010-020-0340</p>
            <p>Email: inquiry@pod.co</p>
          </div>

          <div className='footer-download'>
            <h2>Download Mobile</h2>
            <div className="d-flex-x footer-store-block">
              <img className='footer-store' src="./assets/images/app-store.png"/>
              <img className='footer-store' src="./assets/images/play-store.png"/>
            </div>

            <div className='footer-social'>
              <h2>Social</h2>
              <i className='fa fa-trash'></i>
              <i className='fa fa-instagram'/>
              <i className='fa fa-whatsapp'/>
            </div>
          </div>

        </div>
        
        
        
      </footer>

    </main>
      
    </>
  )
}

export default App
