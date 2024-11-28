import './user-layout.css';

import Navbar from '../Navbar';
import Footer from '../Footer';

const UserLayout = ({children }) => {

    return (
        <main className="main">
            <Navbar/>
                {children}
            <Footer/>
        </main>
    );

};

export default UserLayout;