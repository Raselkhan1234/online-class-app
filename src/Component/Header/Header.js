import React from 'react';
import logo from '../../images/images.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <h1 className="info">Our Online Courses</h1>
        </div>
    );
};

export default Header;