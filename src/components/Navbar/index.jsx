
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const  Navbar = ()=> {

    return (
        <>
            <nav className="navbar">
                <div className='logoarea'>
                    <a ><img className='logo' src='./assets/images/pod-talk-logo.png'/></a>
                </div>

                <div className='search-area'>
                    <input type="text" className="search-input" placeholder=""/>
                    <button className="search-button"> <FontAwesomeIcon icon={faSearch} /></button>
                </div>

                <ul className='navbar-right'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Pages</li>
                    <li>Contact</li>
                    <li><button className='get_started'>Get Started 1</button></li>
                </ul>

                
            </nav>
        </>
      );
  
};

  

export default Navbar;