import './App.css'

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import PostcastCard from './components/Podcastcard';
import Topicscard from './components/Topicscard';
import Trendingcard from './components/Trendingcard';

function App() {

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
          <Topicscard />
          <Topicscard />
          <Topicscard />
          <Topicscard />
            
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

        <div className='footer-form'>
          <form>
            <label for="firstname">First name: </label>
            <input type="text" name="firstname"  required />

            <label for="firstname">First name: </label>
            <input type="text" name="firstname"  required />

            <label for="firstname">First name: </label>
            <input type="text" name="firstname"  required />

            <label for="firstname">First name: </label>
            <input type="text" name="firstname"  required />

            <label for="firstname">First name: </label>
            <input type="text" name="firstname"  required />

            <label for="firstname">First name: </label>
            <input type="text" name="firstname"  required />
          </form>
        </div>
        
        
      </footer>

    </main>
      
    </>
  )
}

export default App
