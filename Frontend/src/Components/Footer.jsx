import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container ">
        <div className="footer-section logo">
          <img src="https://raw.githubusercontent.com/rkesav786/EasyRideProject/2d8e75839f1a4f3055201df57298df21e867ea05/logo.svg" alt="EasyBus Logo"  width={85}/>
          <p>
            EasyBus is the world's largest online bus ticket booking service trusted by over 25 million happy customers globally. EasyBus offers bus ticket booking through its website, iOS, and Android mobile apps for all major routes.
          </p>
        </div>

        <div className="footer-section p-3">
          <h4>About EasyBus</h4>
          <ul>
            <li>About us</li>
            <li>Investor Relations</li>
            <li>Contact us</li>
            <li>Mobile version</li>
            <li>EasyBus on mobile</li>
            <li>Sitemap</li>
            <li>Offers</li>
            <li>Careers</li>
            <li>Values</li>
          </ul>
        </div>

        <div className="footer-section p-3">
          <h4>Info</h4>
          <ul>
            <li>T&C</li>
            <li>Privacy policy</li>
            <li>FAQ</li>
            <li>Blog</li>
            <li>Bus operator registration</li>
            <li>Agent registration</li>
            <li>Insurance partner</li>
            <li>User agreement</li>
            <li>Primo Bus</li>
            <li>Bus Timetable</li>
          </ul>
        </div>

        <div className="footer-section p-3">
          <h4>Global Sites</h4>
          <ul>
            <li>India</li>
            <li>Singapore</li>
            <li>Malaysia</li>
            <li>Indonesia</li>
            <li>Peru</li>
            <li>Colombia</li>
            <li>Cambodia</li>
            <li>Vietnam</li>
          </ul>
        </div>

        <div className="footer-section p-3">
          <h4>Our Partners</h4>
          <ul>
            <li>Goibibo Bus</li>
            <li>Goibibo Hotels</li>
            <li>Makemytrip Hotels</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Ⓒ 2024 EasyBus India Pvt Ltd. All rights reserved</p>
        <div className="social-media">
          <a href="https://www.facebook.com/redbus_facebook" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.linkedin.com/company/redbus_linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com/redbus_twitter" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.instagram.com/redbus_instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
