import React from 'react';
import elementImg from '../assets/images/element.jpg';  
import logoImg from '../assets/images/logo.png';       
import searchIcon from '../assets/images/search.jpg';  
import heartIcon from "../assets/images/heart.png";
import bagIcon from "../assets/images/shopping.jpg"; 
import userIcon from '../assets/images/profile.png';  
import arrowIcon from '../assets/images/arrow.png'; 
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      
      <div className="top-header">
        <div className="top-item left">
          <img src={elementImg} alt="Element" className="top-image" />
          <div className="top-text">Lorem ipsum dolor</div>
        </div>
        <div className="top-item center">
          <img src={elementImg} alt="Element" className="top-image" />
          <div className="top-text">Lorem ipsum dolor</div>
        </div>
        <div className="top-item right">
          <img src={elementImg} alt="Element" className="top-image" />
          <div className="top-text">Lorem ipsum dolor</div>
        </div>
      </div>

      
      <div className="middle-header">
      
        <div className="middle-left">
          <img src={logoImg} alt="Logo" className="logo-img" />
        </div>

        <div className="middle-center">
          <div className="logo-text">LOGO</div>
        </div>

       
        <div className="middle-right">
          <img src={searchIcon} alt="Search" className="icon" />
          <img src={heartIcon} alt="Heart" className="icon" />
          <img src={bagIcon} alt="Bag" className="icon" />
          <img src={userIcon} alt="User" className="icon" />
          <div className="lang-selector">
            <span className="lang-text">ENG</span>
            <img src={arrowIcon} alt="Arrow" className="arrow-icon" />
          </div>
        </div>
      </div>

    
      <nav className="bottom-nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="#shop">SHOP</a></li>
          <li className="nav-item"><a href="#skills">SKILLS</a></li>
          <li className="nav-item"><a href="#stories">STORIES</a></li>
          <li className="nav-item"><a href="#about">ABOUT</a></li>
          <li className="nav-item"><a href="#contact">CONTACT US</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
