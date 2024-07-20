import React, { useState } from 'react';
import flag from './../assets/flag.png';
import pic2 from './../assets/profile2.jpg';
import SideBar from './SideBar';

const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div className='navbar'>
            <div className='left-section'>
                <i className='bx bx-menu' onClick={toggleSidebar}></i>
                <i className="fa-solid fa-gear"></i>
                <p>Projects</p>  
                <img src={flag} alt="flag" />
            </div>

            <div className='right-section'>
                <div className='input-box'>
                <input type="text" placeholder='Search...'/>
                <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <i className="fa-regular fa-moon"></i>
                <i className="fa-solid fa-expand"></i>
                <i className="fa-solid fa-cart-shopping"></i>
                <i className="fa-regular fa-bell"></i>
                <img src={pic2} alt="pic" />
                <div className='designation'>
                <p>John Thompson</p>
                <p>App Developer</p>
                </div>
                <div className='motion-icon-container'>
                <i className="fa-solid fa-gear border-color"></i>
                </div>
            </div>

            {showSidebar && <SideBar />}
        </div>
    );
};

export default Navbar;
