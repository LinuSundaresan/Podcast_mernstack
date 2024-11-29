import './admin-layout.css';

const Adminlayout = ({children, heading}) => {

    return (
        <>
            <div className='admin-layout'>
                <div className="sidebar">
                    <div className="logo-div">
                        <img src="../assets/images/pod-talk-logo.png" alt="" />
                    </div>
                    <div >
                        <ul className="menu-container">
                            <li className='menu-items'>Home</li>
                            <li>Podcasters</li>
                            <li>Podcasts</li>
                            <li>Users</li>
                        </ul>
                    </div>
                    <div className="settings">
                        <span>Logout</span>
                    </div>
                </div>

                <div className="admin-navbar">
                    <div className="menu">
                    <a href="#" className="menu-item">Profile</a>
                    </div>
                </div>

                <div className='main-container'>
                    {children}
                </div>
            </div>
        </>
    );

}

export default Adminlayout;