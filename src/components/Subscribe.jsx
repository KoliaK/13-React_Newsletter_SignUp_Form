import React, { useState } from "react";
import Card from './Card';
import ImgMobile from '../assets/illustration-sign-up-mobile.svg';
import ImgDesktop from '../assets/illustration-sign-up-desktop.svg';
import ListIcon from '../assets/icon-list.svg'
import './Subscribe.css';

const Subscribe = ({userEmail, setUserEmail, setSuccessPage}) => {
  const [isValid, setIsValid] = useState(true);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = () => {
    if(emailRegex.test(userEmail)) {
      setSuccessPage(true)
      return setUserEmail(userEmail);
    }
  return;
  };

  const handleEmailChange = (event) => {
    setUserEmail(event.target.value);
    setIsValid(emailRegex.test(event.target.value));
  };

  return (
    <Card>
      <div className="img_container">
        <img className="img_mobile" src={ImgMobile} alt="" />
        <img className="img_desktop" src={ImgDesktop} alt="" />
      </div>

      <div className="text_box">
        <h1 className="title">Stay Updated!</h1>
        <h2 className="text">Join 60,000+ product managers receiving monthly updates on:</h2>

        <ul className="list_container">
          <li className="list_item">
            <img className="list_icon" src={ListIcon} alt="" />
            <p className="list_text">Product discovery and building what matters</p>
          </li>

          <li className="list_item">
            <img className="list_icon" src={ListIcon} alt="" />
            <p className="list_text">Measuring to ensure updates are a success</p>
          </li>

          <li className="list_item">
            <img className="list_icon" src={ListIcon} alt="" />
            <p className="list_text">And much more! </p>
          </li>
        </ul>

        <form className="subscribe_form">
          <div className="label_container">
            <label 
              className="email_label" 
              htmlFor="user_email_valid">Email address
            </label>
            <label 
              className={!isValid ? "error_label_active" : "error_label_inactive"}
              htmlFor="user_email_invalid">Valid email required
            </label>
          </div>

          <input
          className={!isValid ? "user_email_invalid" : "user_email_valid"}
          type="email" 
          placeholder="email@company.com" 
          value={userEmail} 
          onChange={handleEmailChange}
          />

          <button 
          onClick={handleSubmit}>
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
    </Card>
  );
}

export default Subscribe;
