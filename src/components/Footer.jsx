import React from 'react';
import InstaImg from '../assets/images/Insta.png';
import LinkedImg from '../assets/images/linked.png';
import UsImg from '../assets/images/us.jpg';
import PaymentImg from '../assets/images/payment.jpg'; 
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footerTop">
        <div className="left">
          <h1>BE THE FIRST TO KNOW</h1>
          <p>Sign up for updates from metta muse.</p>
          <div className="inputContainer">
            <input 
              type="email" 
              placeholder="Enter your email..." 
              className="emailInput"
            />
            <button className="searchButton">SUBSCRIBE</button>
          </div>
        </div>

        <div className="right">
          <h1>CONTACT US</h1>
          <p className="contactText">+442211335380</p>
          <p className="contactText">customercare@mettamuse.com</p>
          <p className="currencyText">CURRENCY</p>
          <div className="currencyContainer">
            <img 
              src={UsImg} 
              alt="Currency" 
              className="currencyImage"
            />
            <span className="currencyTextUSD">USD</span> 
          </div>
          <p className="currencyInfoText">Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>
      </div>

   
      <div className="footerBottom">
        <div className="leftBottom">
          <h1>metta muse</h1>
          <p>About Us</p>
          <p>Stories</p>
          <p>Artisans</p>
          <p>Boutiques</p>
          <p>Contact Us</p>
          <p>EU Compliances Docs</p>
        </div>

        <div className="centerBottom">
          <h1>QUICK LINKS</h1>
          <p>Order&Shipping</p>
          <p>Join/Login as a Seller</p>
          <p>Payment & Pricing</p>
          <p>Return & Refunds</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>

        <div className="rightBottom">
          <p>FOLLOW US</p>
          <div className="socialLinks">
            <img src={InstaImg} alt="Instagram" />
            <img src={LinkedImg} alt="LinkedIn" />
          </div>

          
          <p className="acceptsText">metta musse ACCEPTS</p>
          <img src={PaymentImg} alt="Payment" />
        </div>
      </div>

      
      <div className="copyright">
        <p>&copy; Copyright 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
