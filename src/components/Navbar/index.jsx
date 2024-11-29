
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
const  Navbar = ()=> {

    return (
        <>
            <nav className="navbar">
                <div className='logoarea'>
                    <a ><img className='logo' src='../assets/images/pod-talk-logo.png'/></a>
                </div>

                <div className='search-area'>
                    <input type="text" className="search-input" placeholder=""/>
                    <button className="search-button"> <FontAwesomeIcon icon={faSearch} /></button>
                </div>

                <ul className='navbar-right'>
                    <NavLink to='/user/home' style={({ isActive }) => ({
                        color: isActive ? 'blue' : 'white',
                        fontWeight: isActive ? 'bold' : 'normal',
                        textDecoration: 'none',
                    })}><li>Home</li></NavLink>
                    <NavLink to='/user/about' style={({ isActive }) => ({
                    color: isActive ? 'blue' : 'white',
                    fontWeight: isActive ? 'bold' : 'normal',
                    textDecoration: 'none',
                    })}><li>About</li></NavLink>
                    <li>Pages</li>
                    <li>Contact</li>
                    <li><button className='get_started'>Get Started </button></li>
                </ul>
            </nav>
        </>
      );
  
};

  

export default Navbar;