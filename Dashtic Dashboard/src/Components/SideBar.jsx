import React from 'react';
import './../App.css';
import sideBarData from './../Json Files/SideBar.json';
import pic from './../assets/profile.jpg';



const SideBar = () => {
    return (
    
        <div className='sidebar-wrapper'>
            {/* dashtic heading and logo */}
            <div className='heading'>
                <i className='bx bxs-buildings'></i>  <p>dashtic</p>
            </div>

            {/* profile pic and designation */}
            <div className='profile-pic'>
                <div><img src={pic} alt="pic" /></div>
                <p>John Thompson</p>
                <p>App Developer</p>
            </div>

            {/* main side bar with titles */}
            <div className='scroll'>
                {sideBarData.map((item,index) => (
                    <div className='sidebar-component' key={index}>
                        <ul key={item.id}>
                            <li><i class={item.icon}></i>{item.title} </li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>     
    );
};

export default SideBar;
