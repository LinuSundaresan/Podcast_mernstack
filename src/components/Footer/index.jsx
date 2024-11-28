import './footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    return (
        <>
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
                    <img className='footer-store' src="../assets/images/app-store.png"/>
                    <img className='footer-store' src="../assets/images/play-store.png"/>
                    </div>

                    <div className='footer-social'>
                    <h2>Social</h2>
                    <div className="social-icon-container">
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </div>
                    
                    </div>
                </div>

                </div>
            </footer>
        </>
    );
};

export default Footer;