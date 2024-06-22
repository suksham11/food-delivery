import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            At FoodieExpress, we bring you a diverse selection of delicious
            meals from your favorite local restaurants. Whether you're craving a
            hearty burger, a fresh salad, or exotic cuisine, we've got you
            covered. Our commitment is to deliver not just food, but an
            experience of convenience and taste right to your door.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+9-121-123-322-2321</li>
            <li>www.tomato@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ tomato.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
